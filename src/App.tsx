import { useCallback, useEffect, useMemo, useState } from 'react';
import { User, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import { Lock, X } from 'lucide-react';
import { AnimatePresence } from 'motion/react';
import { AuthModal } from './components/AuthModal';
import { ExamInterface } from './components/ExamInterface';
import { HomeDashboard, PracticeSeriesFilter } from './components/HomeDashboard';
import { Navbar } from './components/Navbar';
import { QuestionBuilderPanel } from './components/QuestionBuilderPanel';
import { ResultScreen } from './components/ResultScreen';
import { SplashScreen } from './components/SplashScreen';
import { DEFAULT_MOCK_TESTS } from './data/defaultTests';
import {
  auth,
  googleProvider,
  isFirebaseConfigured,
  testFirestoreConnection,
} from './firebaseConfig';
import {
  ensureAndLoadUserProfile,
  loadUserAttemptsFromCloud,
  saveUserAttemptToCloud,
  updateUserProfileFields,
} from './services/userSync';
import { ExamResult, MockTest, Question } from './types/exam';
import {
  cacheResultsHistory,
  loadAddedQuestionsMap,
  loadCustomTests,
  loadResultsHistory,
  saveAddedQuestionsMap,
  saveCustomTests,
  saveResultToHistory,
} from './utils/storage';

type AppView = 'home' | 'exam' | 'result' | 'builder';

const BUILDER_PIN = '6376';
const SPLASH_SESSION_KEY = 'ssc_sathi_splash_seen_v2';
const GUEST_SESSION_KEY = 'ssc_sathi_guest_chosen';

function loadLocalFollow(userScope: string): boolean {
  try {
    return localStorage.getItem(`ssc_sathi_follow_${userScope}`) === '1';
  } catch {
    return false;
  }
}

function saveLocalFollow(following: boolean, userScope: string): void {
  try {
    localStorage.setItem(`ssc_sathi_follow_${userScope}`, following ? '1' : '0');
  } catch {
    // Ignore storage errors
  }
}

export default function App() {
  const [showSplash, setShowSplash] = useState<boolean>(() => {
    try {
      return !sessionStorage.getItem(SPLASH_SESSION_KEY);
    } catch {
      return true;
    }
  });

  // Firebase Auth state
  const [user, setUser] = useState<User | null>(null);
  const [authReady, setAuthReady] = useState<boolean>(() => !auth);
  const [isSigningIn, setIsSigningIn] = useState<boolean>(false);
  const [authError, setAuthError] = useState<string | null>(null);
  const [guestChosen, setGuestChosen] = useState<boolean>(() => {
    try {
      return sessionStorage.getItem(GUEST_SESSION_KEY) === '1';
    } catch {
      return false;
    }
  });
  const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false);

  const userScope = user?.uid || 'guest';

  // User-scoped state
  const [isFollowing, setIsFollowing] = useState<boolean>(() =>
    loadLocalFollow('guest')
  );
  const [history, setHistory] = useState<ExamResult[]>(() =>
    auth ? [] : loadResultsHistory('guest')
  );

  // Test catalog & view state
  const [customTests, setCustomTests] = useState<MockTest[]>(() => loadCustomTests());
  const [addedQuestionsMap, setAddedQuestionsMap] = useState<Record<string, Question[]>>(
    () => loadAddedQuestionsMap()
  );
  const [view, setView] = useState<AppView>('home');
  const [activeSeriesFilter, setActiveSeriesFilter] = useState<PracticeSeriesFilter>('all');
  const [activeTestId, setActiveTestId] = useState<string | null>(null);
  const [activeResult, setActiveResult] = useState<ExamResult | null>(null);
  const [resultInitialTab, setResultInitialTab] = useState<'scorecard' | 'solutions'>('scorecard');
  const [resultSessionKey, setResultSessionKey] = useState<number>(0);

  // Silent URL-only builder gate (#add)
  const [isBuilderUnlocked, setIsBuilderUnlocked] = useState<boolean>(false);
  const [isPinModalOpen, setIsPinModalOpen] = useState<boolean>(false);
  const [pinInput, setPinInput] = useState<string>('');
  const [pinError, setPinError] = useState<string | null>(null);

  // Splash timer (1.8s once per session)
  useEffect(() => {
    if (!showSplash) return;
    const timer = window.setTimeout(() => {
      setShowSplash(false);
      try {
        sessionStorage.setItem(SPLASH_SESSION_KEY, '1');
      } catch {
        // Ignore storage restrictions
      }
    }, 1800);
    return () => window.clearTimeout(timer);
  }, [showSplash]);

  // Verify Firestore connection on startup
  useEffect(() => {
    testFirestoreConnection();
  }, []);

  // Subscribe to Firebase Auth changes and sync user-scoped data
  useEffect(() => {
    if (!auth) {
      setAuthReady(true);
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      setUser(firebaseUser);
      setAuthReady(true);

      if (firebaseUser) {
        setIsLoginModalOpen(false);
        setIsFollowing(loadLocalFollow(firebaseUser.uid));
        setHistory(loadResultsHistory(firebaseUser.uid));

        try {
          const [profile, cloudAttempts] = await Promise.all([
            ensureAndLoadUserProfile(firebaseUser),
            loadUserAttemptsFromCloud(firebaseUser.uid),
          ]);

          setIsFollowing(profile.isFollowingCommunity);
          saveLocalFollow(profile.isFollowingCommunity, firebaseUser.uid);

          // Merge cloud attempts with any offline local ones for this UID
          const localCached = loadResultsHistory(firebaseUser.uid);
          const mergedMap = new Map<string, ExamResult>();
          for (const item of cloudAttempts) mergedMap.set(item.attemptId, item);
          for (const item of localCached) {
            if (!mergedMap.has(item.attemptId)) mergedMap.set(item.attemptId, item);
          }
          const merged = Array.from(mergedMap.values()).sort((a, b) =>
            b.submittedAt.localeCompare(a.submittedAt)
          );
          setHistory(merged);
          cacheResultsHistory(merged, firebaseUser.uid);
        } catch (err) {
          console.error('Failed to sync user profile/attempts:', err);
        }
      } else {
        setIsFollowing(loadLocalFollow('guest'));
        setHistory(loadResultsHistory('guest'));
      }
    });

    return () => unsubscribe();
  }, []);

  const allTests: MockTest[] = useMemo(() => {
    const mergedDefaults = DEFAULT_MOCK_TESTS.map((t) => {
      const extra = addedQuestionsMap[t.id];
      if (!extra || extra.length === 0) return t;
      return {
        ...t,
        questions: [...t.questions, ...extra],
      };
    });

    const mergedCustom = customTests.map((t) => {
      const extra = addedQuestionsMap[t.id];
      if (!extra || extra.length === 0) return t;
      return {
        ...t,
        questions: [...t.questions, ...extra],
      };
    });

    return [...mergedCustom, ...mergedDefaults];
  }, [addedQuestionsMap, customTests]);

  // Only show attempts belonging to active tests (excludes any deleted sample/demo tests)
  const visibleHistory = useMemo(() => {
    const validTestIds = new Set(allTests.map((t) => t.id));
    return history.filter((item) => validTestIds.has(item.testId));
  }, [allTests, history]);

  const activeTest = useMemo(
    () => allTests.find((t) => t.id === activeTestId) ?? null,
    [allTests, activeTestId]
  );

  const resultTest = useMemo(() => {
    if (!activeResult) return undefined;
    return allTests.find((t) => t.id === activeResult.testId);
  }, [activeResult, allTests]);

  const activeTestAttempts = useMemo(() => {
    if (!activeResult) return [];
    const matching = visibleHistory.filter((item) => item.testId === activeResult.testId);
    const hasActive = matching.some((item) => item.attemptId === activeResult.attemptId);
    const combined = hasActive ? matching : [...matching, activeResult];
    return [...combined].sort((a, b) => {
      const diff = new Date(a.submittedAt).getTime() - new Date(b.submittedAt).getTime();
      if (diff !== 0) return diff;
      return a.submittedAt.localeCompare(b.submittedAt);
    });
  }, [activeResult, visibleHistory]);

  const openBuilder = useCallback(() => {
    if (isBuilderUnlocked) {
      setView('builder');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setPinInput('');
      setPinError(null);
      setIsPinModalOpen(true);
    }
  }, [isBuilderUnlocked]);

  useEffect(() => {
    const checkHashOrQuery = () => {
      const hash = window.location.hash.toLowerCase();
      const search = window.location.search.toLowerCase();
      if (hash === '#add' || search.includes('add=1')) {
        openBuilder();
      }
    };
    checkHashOrQuery();
    window.addEventListener('hashchange', checkHashOrQuery);
    return () => window.removeEventListener('hashchange', checkHashOrQuery);
  }, [openBuilder]);

  const handleGoogleSignIn = async () => {
    if (!auth || !googleProvider) {
      setAuthError('Firebase configuration is missing. Continue as Guest to practice free mocks.');
      return;
    }
    setAuthError(null);
    setIsSigningIn(true);
    try {
      await signInWithPopup(auth, googleProvider);
      setIsLoginModalOpen(false);
    } catch (error: unknown) {
      const code = (error as { code?: string })?.code || '';
      if (code === 'auth/popup-closed-by-user' || code === 'auth/cancelled-popup-request') {
        setAuthError('Sign-in popup was closed. Please try again or continue as Guest.');
      } else if (code === 'auth/popup-blocked') {
        setAuthError('Popup was blocked by your browser. Please allow popups for this site and retry.');
      } else {
        setAuthError('Unable to sign in with Google right now. Please try again or continue as Guest.');
      }
    } finally {
      setIsSigningIn(false);
    }
  };

  const handleContinueAsGuest = () => {
    setAuthError(null);
    setGuestChosen(true);
    setIsLoginModalOpen(false);
    try {
      sessionStorage.setItem(GUEST_SESSION_KEY, '1');
    } catch {
      // Ignore storage errors
    }
  };

  const handleLogout = async () => {
    if (auth) {
      try {
        await signOut(auth);
      } catch (err) {
        console.error('Sign out error:', err);
      }
    }
    setGuestChosen(false);
    try {
      sessionStorage.removeItem(GUEST_SESSION_KEY);
    } catch {
      // Ignore storage errors
    }
    setHistory([]);
    setActiveResult(null);
    setView('home');
    setIsLoginModalOpen(true);
  };

  const handleToggleFollow = useCallback(() => {
    setIsFollowing((prev) => {
      const next = !prev;
      saveLocalFollow(next, userScope);
      if (user) {
        updateUserProfileFields(user.uid, { isFollowingCommunity: next }).catch((err) =>
          console.error('Failed to update follow status:', err)
        );
      }
      return next;
    });
  }, [user, userScope]);

  const handleStartTest = useCallback((test: MockTest) => {
    setActiveTestId(test.id);
    setView('exam');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleFinishTest = useCallback(
    (result: ExamResult) => {
      const updatedHistory = saveResultToHistory(result, userScope);
      setHistory(updatedHistory);
      setActiveResult(result);
      setResultInitialTab('scorecard');
      setResultSessionKey((k) => k + 1);
      setView('result');
      window.scrollTo({ top: 0, behavior: 'smooth' });

      if (user) {
        saveUserAttemptToCloud(user.uid, result).catch((err) =>
          console.error('Failed to save attempt to cloud:', err)
        );
      }
    },
    [user, userScope]
  );

  const handleViewResult = useCallback(
    (result: ExamResult, initialTab: 'scorecard' | 'solutions' = 'scorecard') => {
      setActiveResult(result);
      setResultInitialTab(initialTab);
      setResultSessionKey((k) => k + 1);
      setView('result');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    []
  );

  const handleSaveNewTest = useCallback((newTest: MockTest) => {
    setCustomTests((prev) => {
      const next = [newTest, ...prev];
      saveCustomTests(next);
      return next;
    });
    setView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleAppendQuestionsToTest = useCallback(
    (testId: string, questions: Question[]) => {
      setAddedQuestionsMap((prev) => {
        const existing = prev[testId] ?? [];
        const next = {
          ...prev,
          [testId]: [...existing, ...questions],
        };
        saveAddedQuestionsMap(next);
        return next;
      });
      setView('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    []
  );

  const handleDeleteCustomTest = useCallback((testId: string) => {
    setCustomTests((prev) => {
      const next = prev.filter((t) => t.id !== testId);
      saveCustomTests(next);
      return next;
    });
  }, []);

  const handleQuickFilter = useCallback((series: 'live' | 'pyq') => {
    setView('home');
    setActiveSeriesFilter(series);
  }, []);

  const handlePinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pinInput.trim() === BUILDER_PIN) {
      setIsBuilderUnlocked(true);
      setIsPinModalOpen(false);
      setPinInput('');
      setPinError(null);
      setView('builder');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setPinError('Incorrect PIN. Please try again.');
    }
  };

  if (view === 'exam' && activeTest) {
    return (
      <ExamInterface
        test={activeTest}
        onFinishTest={handleFinishTest}
        onExitTest={() => setView('home')}
      />
    );
  }

  const shouldShowWelcomeLoginModal =
    !showSplash &&
    authReady &&
    !user &&
    view === 'home' &&
    (!guestChosen || isLoginModalOpen);

  return (
    <div className="flex min-h-screen flex-col bg-[#F4F6FB]">
      <AnimatePresence>
        {showSplash && <SplashScreen />}
      </AnimatePresence>

      <AuthModal
        isOpen={shouldShowWelcomeLoginModal || isLoginModalOpen}
        isSigningIn={isSigningIn}
        authError={authError}
        isFirebaseReady={isFirebaseConfigured}
        onGoogleSignIn={handleGoogleSignIn}
        onContinueAsGuest={handleContinueAsGuest}
        canClose={guestChosen || Boolean(user)}
        onClose={() => setIsLoginModalOpen(false)}
      />

      <Navbar
        user={user}
        isFollowing={isFollowing}
        onToggleFollow={handleToggleFollow}
        onOpenLoginModal={() => {
          setAuthError(null);
          setIsLoginModalOpen(true);
        }}
        onLogout={handleLogout}
        onNavigateHome={() => {
          setView('home');
          setActiveSeriesFilter('all');
        }}
        onQuickFilter={handleQuickFilter}
      />

      <div className="flex-1">
        {view === 'home' && (
          <HomeDashboard
            tests={allTests}
            history={visibleHistory}
            activeSeriesFilter={activeSeriesFilter}
            onSeriesFilterChange={setActiveSeriesFilter}
            onStartTest={handleStartTest}
            onViewResult={handleViewResult}
            onDeleteCustomTest={handleDeleteCustomTest}
          />
        )}

        {view === 'result' && activeResult && (
          <ResultScreen
            key={resultSessionKey}
            result={activeResult}
            attemptsForTest={activeTestAttempts}
            test={resultTest}
            initialTab={resultInitialTab}
            onSelectAttempt={(attempt) => setActiveResult(attempt)}
            onBackHome={() => setView('home')}
            onRetakeTest={handleStartTest}
          />
        )}

        {view === 'builder' && isBuilderUnlocked && (
          <QuestionBuilderPanel
            existingTests={allTests}
            onSaveNewTest={handleSaveNewTest}
            onAppendQuestionsToTest={handleAppendQuestionsToTest}
            onCancel={() => setView('home')}
          />
        )}
      </div>

      <footer className="border-t border-[#E2E8F0] bg-[#FFFFFF] py-5">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-4 text-xs text-slate-500 sm:flex-row sm:px-6">
          <div className="flex items-center gap-2">
            <img
              src="/assets/aistudio/1795032296907_b1ef824a.png"
              alt="SSC Sathi logo"
              className="h-6 w-6 shrink-0 rounded-full object-cover ring-1 ring-slate-200"
            />
            <span className="font-semibold text-[#0F172A]">SSC Sathi</span>
          </div>
          <span>Built for Dedicated SSC Aspirants</span>
        </div>
      </footer>

      {isPinModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4">
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="builder-pin-title"
            className="w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-6 shadow-xl"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-[#0F172A]">
                <Lock className="h-4 w-4 text-[#F59E0B] shrink-0" aria-hidden="true" />
                <h2 id="builder-pin-title" className="text-base font-bold text-[#0F172A]">
                  Question Builder
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setIsPinModalOpen(false)}
                aria-label="Close PIN modal"
                className="rounded-lg p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            <p className="mt-2 text-sm text-slate-600">
              Enter your 4-digit PIN to add or manage mock test questions.
            </p>

            <form onSubmit={handlePinSubmit} className="mt-4 space-y-3">
              <div>
                <label htmlFor="builder-pin-input" className="sr-only">
                  4-digit PIN
                </label>
                <input
                  id="builder-pin-input"
                  type="password"
                  inputMode="numeric"
                  autoFocus
                  maxLength={8}
                  value={pinInput}
                  onChange={(e) => {
                    setPinInput(e.target.value);
                    if (pinError) setPinError(null);
                  }}
                  placeholder="Enter PIN"
                  className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-center font-mono text-base tracking-widest text-[#0F172A] focus:border-[#0F172A] focus:outline-none"
                />
                {pinError && (
                  <p className="mt-1.5 text-xs font-medium text-rose-600">
                    {pinError}
                  </p>
                )}
              </div>

              <div className="flex items-center justify-end gap-2.5 pt-1">
                <button
                  type="button"
                  onClick={() => setIsPinModalOpen(false)}
                  className="min-h-[40px] rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="min-h-[40px] rounded-xl bg-[#F59E0B] px-5 py-2 text-sm font-bold text-[#0F172A] hover:bg-amber-400"
                >
                  Unlock
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
