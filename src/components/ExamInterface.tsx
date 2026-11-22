import { type TouchEvent, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'motion/react';
import {
  AlertTriangle,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock,
  Eraser,
  Flag,
  Languages,
  LayoutGrid,
  Lock,
  PanelRightClose,
  PanelRightOpen,
  X,
} from 'lucide-react';
import {
  ExamResult,
  MockTest,
  OptionIndex,
  QuestionLanguage,
  QuestionResponse,
  QuestionStatus,
} from '../types/exam';
import { calculateExamResult, formatTimer } from '../utils/scoring';
import { PaletteSymbol, toPaletteVisualState } from './PaletteSymbol';

interface ExamInterfaceProps {
  test: MockTest;
  initialLanguage?: QuestionLanguage;
  onFinishTest: (result: ExamResult) => void;
  onExitTest: () => void;
}

const OPTION_LETTERS = ['A', 'B', 'C', 'D'] as const;

export function ExamInterface({
  test,
  initialLanguage = 'en',
  onFinishTest,
  onExitTest,
}: ExamInterfaceProps) {
  const sections = test.sections ?? [];
  const isStrictSectional = Boolean(test.strictSectionTiming && sections.length > 0);

  const [activeSectionIndex, setActiveSectionIndex] = useState<number>(0);
  const activeSection = isStrictSectional ? sections[activeSectionIndex] : undefined;
  const isLastSection = !isStrictSectional || activeSectionIndex >= sections.length - 1;

  const sectionStartIndex = activeSection ? activeSection.startIndex : 0;
  const sectionEndIndex = activeSection ? activeSection.endIndex : test.questions.length - 1;
  const activeDurationSeconds = activeSection
    ? activeSection.durationMinutes * 60
    : test.durationMinutes * 60;

  const [secondsLeft, setSecondsLeft] = useState<number>(activeDurationSeconds);
  const [elapsedPriorSeconds, setElapsedPriorSeconds] = useState<number>(0);
  const [currentIndex, setCurrentIndex] = useState<number>(sectionStartIndex);
  const [sectionNotice, setSectionNotice] = useState<string | null>(null);
  const [isDesktopPaletteOpen, setIsDesktopPaletteOpen] = useState<boolean>(true);
  const [isMobilePaletteOpen, setIsMobilePaletteOpen] = useState<boolean>(false);
  const [submitModalMode, setSubmitModalMode] = useState<'none' | 'section' | 'full'>('none');
  const [isExitModalOpen, setIsExitModalOpen] = useState<boolean>(false);
  const [language, setLanguage] = useState<QuestionLanguage>(initialLanguage);
  const [swipeOffset, setSwipeOffset] = useState<number>(0);
  const [swipeSlideDir, setSwipeSlideDir] = useState<'next' | 'prev' | null>(null);

  // Guard against double-triggering section transition or test submission on 0s
  const zeroHandledForSectionRef = useRef<number>(-1);
  // Touch swipe tracking (axis-locked so vertical passage scrolling is never disturbed)
  const touchGestureRef = useRef<{
    startX: number;
    startY: number;
    lockedAxis: 'x' | 'y' | null;
  } | null>(null);

  const [responses, setResponses] = useState<Record<string, QuestionResponse>>(() => {
    const init: Record<string, QuestionResponse> = {};
    test.questions.forEach((q, idx) => {
      init[q.id] = {
        questionId: q.id,
        selectedIndex: null,
        status: idx === 0 ? 'not-answered' : 'not-visited',
      };
    });
    return init;
  });

  const currentQuestion = test.questions[currentIndex];
  const currentResponse = responses[currentQuestion.id];
  const isEnglishSection = Boolean(
    (activeSection &&
      (activeSection.id === 'sec-english' ||
        activeSection.shortName.toLowerCase().includes('english') ||
        activeSection.name.toLowerCase().includes('english'))) ||
      (!isStrictSectional && test.category.toLowerCase().includes('english'))
  );
  const effectiveLanguage: QuestionLanguage = isEnglishSection ? 'en' : language;
  const hasHindiForCurrent = Boolean(currentQuestion.questionHi);
  const displayedQuestionText =
    effectiveLanguage === 'hi' && currentQuestion.questionHi
      ? currentQuestion.questionHi
      : currentQuestion.questionEn;
  const displayedOptions =
    effectiveLanguage === 'hi' && currentQuestion.optionsHi
      ? currentQuestion.optionsHi
      : currentQuestion.optionsEn;

  const handleFinalizeSubmit = useCallback(
    (
      currentResponses: Record<string, QuestionResponse>,
      remainingSeconds: number,
      priorElapsed: number
    ) => {
      const currentElapsed = Math.max(0, activeDurationSeconds - remainingSeconds);
      const totalTimeTaken = Math.max(1, priorElapsed + currentElapsed);
      const result = calculateExamResult(test, currentResponses, totalTimeTaken);
      onFinishTest(result);
    },
    [activeDurationSeconds, onFinishTest, test]
  );

  const handleAdvanceSection = useCallback(
    (autoTriggered: boolean) => {
      if (!isStrictSectional || activeSectionIndex >= sections.length - 1) return;

      const prevSection = sections[activeSectionIndex];
      const nextIdx = activeSectionIndex + 1;
      const nextSection = sections[nextIdx];
      const spentInPrev = autoTriggered
        ? prevSection.durationMinutes * 60
        : Math.max(1, prevSection.durationMinutes * 60 - secondsLeft);

      setElapsedPriorSeconds((prev) => prev + spentInPrev);
      setActiveSectionIndex(nextIdx);
      setSecondsLeft(nextSection.durationMinutes * 60);
      setCurrentIndex(nextSection.startIndex);
      setSubmitModalMode('none');
      setIsMobilePaletteOpen(false);

      const firstNextQ = test.questions[nextSection.startIndex];
      if (firstNextQ) {
        setResponses((prev) => {
          const existing = prev[firstNextQ.id];
          if (existing && existing.status === 'not-visited') {
            return {
              ...prev,
              [firstNextQ.id]: {
                ...existing,
                status: 'not-answered',
              },
            };
          }
          return prev;
        });
      }

      setSectionNotice(
        autoTriggered
          ? `Time up for ${prevSection.name}! Automatically moved to Section ${nextIdx + 1}: ${nextSection.name}.`
          : `Submitted ${prevSection.name}. Now attempting Section ${nextIdx + 1}: ${nextSection.name}.`
      );
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    [activeSectionIndex, isStrictSectional, secondsLeft, sections, test.questions]
  );

  useEffect(() => {
    if (!sectionNotice) return;
    const t = window.setTimeout(() => setSectionNotice(null), 4500);
    return () => window.clearTimeout(t);
  }, [sectionNotice]);

  // Countdown tick — resets cleanly whenever activeSectionIndex changes
  useEffect(() => {
    const interval = window.setInterval(() => {
      setSecondsLeft((prev) => (prev <= 1 ? 0 : prev - 1));
    }, 1000);
    return () => window.clearInterval(interval);
  }, [activeSectionIndex]);

  // Handle timer expiry (auto-advance section or auto-submit full test)
  useEffect(() => {
    if (secondsLeft !== 0) return;
    if (zeroHandledForSectionRef.current === activeSectionIndex) return;
    zeroHandledForSectionRef.current = activeSectionIndex;

    if (isStrictSectional && !isLastSection) {
      handleAdvanceSection(true);
    } else {
      handleFinalizeSubmit(responses, 0, elapsedPriorSeconds);
    }
  }, [
    activeSectionIndex,
    elapsedPriorSeconds,
    handleAdvanceSection,
    handleFinalizeSubmit,
    isLastSection,
    isStrictSectional,
    responses,
    secondsLeft,
  ]);

  const jumpToQuestion = useCallback(
    (targetIdx: number) => {
      if (targetIdx < sectionStartIndex || targetIdx > sectionEndIndex) return;
      const targetQ = test.questions[targetIdx];
      setResponses((prev) => {
        const existing = prev[targetQ.id];
        if (existing && existing.status === 'not-visited') {
          return {
            ...prev,
            [targetQ.id]: {
              ...existing,
              status: 'not-answered',
            },
          };
        }
        return prev;
      });
      setCurrentIndex(targetIdx);
      setIsMobilePaletteOpen(false);
    },
    [sectionEndIndex, sectionStartIndex, test.questions]
  );

  const handleSelectOption = useCallback(
    (optionIdx: OptionIndex) => {
      setResponses((prev) => {
        const existing = prev[currentQuestion.id];
        const nextStatus: QuestionStatus =
          existing.status === 'marked' || existing.status === 'answered-marked'
            ? 'answered-marked'
            : 'answered';
        return {
          ...prev,
          [currentQuestion.id]: {
            questionId: currentQuestion.id,
            selectedIndex: optionIdx,
            status: nextStatus,
          },
        };
      });
    },
    [currentQuestion.id]
  );

  const handleClearResponse = () => {
    setResponses((prev) => ({
      ...prev,
      [currentQuestion.id]: {
        questionId: currentQuestion.id,
        selectedIndex: null,
        status: 'not-answered',
      },
    }));
  };

  const handleSaveAndNext = useCallback(() => {
    setResponses((prev) => {
      const existing = prev[currentQuestion.id];
      const hasAnswer = existing.selectedIndex !== null;
      const nextMap = {
        ...prev,
        [currentQuestion.id]: {
          ...existing,
          status: hasAnswer ? ('answered' as QuestionStatus) : ('not-answered' as QuestionStatus),
        },
      };

      const nextIdx = currentIndex + 1;
      if (nextIdx <= sectionEndIndex) {
        const nextQ = test.questions[nextIdx];
        if (nextMap[nextQ.id].status === 'not-visited') {
          nextMap[nextQ.id] = { ...nextMap[nextQ.id], status: 'not-answered' };
        }
      }
      return nextMap;
    });

    if (currentIndex < sectionEndIndex) {
      setCurrentIndex((i) => i + 1);
    }
  }, [currentIndex, currentQuestion.id, sectionEndIndex, test.questions]);

  const handleMarkForReviewAndNext = () => {
    setResponses((prev) => {
      const existing = prev[currentQuestion.id];
      const hasAnswer = existing.selectedIndex !== null;
      const nextMap = {
        ...prev,
        [currentQuestion.id]: {
          ...existing,
          status: hasAnswer
            ? ('answered-marked' as QuestionStatus)
            : ('marked' as QuestionStatus),
        },
      };

      const nextIdx = currentIndex + 1;
      if (nextIdx <= sectionEndIndex) {
        const nextQ = test.questions[nextIdx];
        if (nextMap[nextQ.id].status === 'not-visited') {
          nextMap[nextQ.id] = { ...nextMap[nextQ.id], status: 'not-answered' };
        }
      }
      return nextMap;
    });

    if (currentIndex < sectionEndIndex) {
      setCurrentIndex((i) => i + 1);
    }
  };

  // Touch swipe handlers for smooth Left (Save & Next) / Right (Prev) navigation within active section
  const handleQuestionTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    if (
      e.touches.length !== 1 ||
      submitModalMode !== 'none' ||
      isExitModalOpen ||
      isMobilePaletteOpen
    ) {
      touchGestureRef.current = null;
      return;
    }
    const touch = e.touches[0];
    touchGestureRef.current = {
      startX: touch.clientX,
      startY: touch.clientY,
      lockedAxis: null,
    };
  };

  const handleQuestionTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    const gesture = touchGestureRef.current;
    if (!gesture || e.touches.length !== 1) return;

    const touch = e.touches[0];
    const dx = touch.clientX - gesture.startX;
    const dy = touch.clientY - gesture.startY;
    const absX = Math.abs(dx);
    const absY = Math.abs(dy);

    if (gesture.lockedAxis === null) {
      if (absX < 10 && absY < 10) return;
      gesture.lockedAxis = absX > absY * 1.2 ? 'x' : 'y';
    }

    if (gesture.lockedAxis !== 'x') {
      if (swipeOffset !== 0) setSwipeOffset(0);
      return;
    }

    // Damp movement cleanly (and resist further at section boundaries)
    const atStartEdge = dx > 0 && currentIndex <= sectionStartIndex;
    const atEndEdge = dx < 0 && currentIndex >= sectionEndIndex;
    const resistance = atStartEdge || atEndEdge ? 0.12 : 0.32;
    const clamped = Math.max(-48, Math.min(48, dx * resistance));
    setSwipeOffset(clamped);
  };

  const handleQuestionTouchEnd = (e: TouchEvent<HTMLDivElement>) => {
    const gesture = touchGestureRef.current;
    touchGestureRef.current = null;
    setSwipeOffset(0);

    if (!gesture || gesture.lockedAxis === 'y') return;
    const touch = e.changedTouches[0];
    if (!touch) return;

    const dx = touch.clientX - gesture.startX;
    const dy = touch.clientY - gesture.startY;
    const absX = Math.abs(dx);
    const absY = Math.abs(dy);

    // Require > 55px horizontal travel and clearly horizontal-dominant movement
    if (absX <= 55 || absX <= absY * 1.2) return;

    if (dx < 0 && currentIndex < sectionEndIndex) {
      // Swipe Left -> Save selected option (if any) & move to Next Question within current section
      setSwipeSlideDir('next');
      handleSaveAndNext();
    } else if (dx > 0 && currentIndex > sectionStartIndex) {
      // Swipe Right -> Move to Previous Question within current section
      setSwipeSlideDir('prev');
      jumpToQuestion(currentIndex - 1);
    }
  };

  const handleQuestionTouchCancel = () => {
    touchGestureRef.current = null;
    setSwipeOffset(0);
  };

  // Keyboard shortcuts for quick CBT navigation (strictly respects section bounds)
  useEffect(() => {
    if (submitModalMode !== 'none' || isExitModalOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if (e.key === '1' || e.key.toLowerCase() === 'a') handleSelectOption(0);
      else if (e.key === '2' || e.key.toLowerCase() === 'b') handleSelectOption(1);
      else if (e.key === '3' || e.key.toLowerCase() === 'c') handleSelectOption(2);
      else if (e.key === '4' || e.key.toLowerCase() === 'd') handleSelectOption(3);
      else if (e.key === 'ArrowRight' && currentIndex < sectionEndIndex) handleSaveAndNext();
      else if (e.key === 'ArrowLeft' && currentIndex > sectionStartIndex)
        jumpToQuestion(currentIndex - 1);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [
    currentIndex,
    handleSaveAndNext,
    handleSelectOption,
    isExitModalOpen,
    jumpToQuestion,
    sectionEndIndex,
    sectionStartIndex,
    submitModalMode,
  ]);

  const activeScopeQuestions = useMemo(
    () => test.questions.slice(sectionStartIndex, sectionEndIndex + 1),
    [sectionEndIndex, sectionStartIndex, test.questions]
  );

  const countStatuses = useCallback(
    (questionsList: typeof test.questions) => {
      let notAttempted = 0;
      let answered = 0;
      let markedNotAttempted = 0;
      let answeredMarked = 0;

      for (const q of questionsList) {
        const st = responses[q.id]?.status ?? 'not-visited';
        if (st === 'answered') answered += 1;
        else if (st === 'marked') markedNotAttempted += 1;
        else if (st === 'answered-marked') answeredMarked += 1;
        else notAttempted += 1;
      }

      return { notAttempted, answered, markedNotAttempted, answeredMarked };
    },
    [responses]
  );

  const sectionStatusCounts = useMemo(
    () => countStatuses(activeScopeQuestions),
    [activeScopeQuestions, countStatuses]
  );

  const overallStatusCounts = useMemo(
    () => countStatuses(test.questions),
    [countStatuses, test.questions]
  );

  const sectionAttemptedCount = useMemo(
    () => activeScopeQuestions.filter((q) => responses[q.id]?.selectedIndex !== null).length,
    [activeScopeQuestions, responses]
  );

  // Clean display names for section pills (without Q-ranges) and Exam Summary rows
  const getSectionPillLabel = (shortName: string, fullName: string) => {
    if (shortName === 'Quant' || fullName.toLowerCase().includes('quantitative')) {
      return 'Quantitative Aptitude';
    }
    return shortName;
  };

  const getSummaryShortName = (shortName: string, fullName: string) => {
    if (shortName === 'General Awareness' || fullName.toLowerCase().includes('awareness')) {
      return 'GK';
    }
    if (shortName === 'Quant' || fullName.toLowerCase().includes('quantitative')) {
      return 'Math';
    }
    return shortName;
  };

  // Section-wise summary breakdown for the Exam Summary modal
  const examSummaryRows = useMemo(() => {
    const groups =
      sections.length > 0
        ? sections.map((sec, idx) => ({
            id: sec.id,
            index: idx,
            label: getSummaryShortName(sec.shortName, sec.name),
            fullLabel: getSectionPillLabel(sec.shortName, sec.name),
            questions: test.questions.slice(sec.startIndex, sec.endIndex + 1),
          }))
        : [
            {
              id: 'single-section',
              index: 0,
              label: test.category,
              fullLabel: test.category,
              questions: test.questions,
            },
          ];

    return groups.map((g) => {
      let attempted = 0;
      let unattempted = 0;
      let marked = 0;
      for (const q of g.questions) {
        const resp = responses[q.id];
        if (resp?.selectedIndex !== null && resp?.selectedIndex !== undefined) {
          attempted += 1;
        } else {
          unattempted += 1;
        }
        if (resp?.status === 'marked' || resp?.status === 'answered-marked') {
          marked += 1;
        }
      }
      return {
        ...g,
        total: g.questions.length,
        attempted,
        unattempted,
        marked,
      };
    });
  }, [responses, sections, test.category, test.questions]);

  const examSummaryTotals = useMemo(
    () =>
      examSummaryRows.reduce(
        (acc, r) => ({
          attempted: acc.attempted + r.attempted,
          unattempted: acc.unattempted + r.unattempted,
          marked: acc.marked + r.marked,
          total: acc.total + r.total,
        }),
        { attempted: 0, unattempted: 0, marked: 0, total: 0 }
      ),
    [examSummaryRows]
  );

  const localQuestionNumber = currentIndex - sectionStartIndex + 1;
  const sectionQuestionTotal = activeScopeQuestions.length;

  const isTimerLow = secondsLeft < 120;
  const nextSection =
    isStrictSectional && !isLastSection ? sections[activeSectionIndex + 1] : undefined;

  const renderPaletteContent = () => (
    <div className="flex h-full flex-col bg-white">
      <div className="flex shrink-0 items-center justify-between border-b border-slate-200 px-4 py-3">
        <div className="min-w-0">
          <h2 className="truncate text-sm font-bold text-[#0F172A]">
            {activeSection
              ? getSectionPillLabel(activeSection.shortName, activeSection.name)
              : 'Question Palette'}
          </h2>
          <p className="text-xs text-slate-500 tabular-nums">
            {sectionAttemptedCount} of {sectionQuestionTotal} answered
          </p>
        </div>
        <button
          type="button"
          onClick={() => {
            setIsDesktopPaletteOpen(false);
            setIsMobilePaletteOpen(false);
          }}
          className="rounded-lg p-1.5 text-slate-500 hover:bg-slate-100 hover:text-[#0F172A]"
          aria-label="Collapse Question Palette"
        >
          <X className="h-4 w-4 lg:hidden" aria-hidden="true" />
          <PanelRightClose className="hidden h-4 w-4 lg:block" aria-hidden="true" />
        </button>
      </div>

      {/* SSC CBT Color Legend with Live Counts */}
      <div className="grid shrink-0 grid-cols-2 gap-x-2.5 gap-y-2 border-b border-slate-200 bg-[#F8FAFC] p-3 text-[11px]">
        <div className="flex items-start gap-2">
          <div className="w-6 shrink-0">
            <PaletteSymbol
              state="not-attempted"
              label={sectionStatusCounts.notAttempted}
              size="sm"
            />
          </div>
          <span className="pt-0.5 font-semibold leading-tight text-slate-700">
            Not Attempted
          </span>
        </div>

        <div className="flex items-start gap-2">
          <div className="w-6 shrink-0">
            <PaletteSymbol state="answered" label={sectionStatusCounts.answered} size="sm" />
          </div>
          <span className="pt-0.5 font-semibold leading-tight text-slate-700">
            Answered
          </span>
        </div>

        <div className="flex items-start gap-2">
          <div className="w-6 shrink-0">
            <PaletteSymbol
              state="marked"
              label={sectionStatusCounts.markedNotAttempted}
              size="sm"
            />
          </div>
          <span className="pt-0.5 font-semibold leading-tight text-slate-700">
            Not Attempted &amp; Review
          </span>
        </div>

        <div className="flex items-start gap-2">
          <div className="w-6 shrink-0">
            <PaletteSymbol
              state="answered-marked"
              label={sectionStatusCounts.answeredMarked}
              size="sm"
            />
          </div>
          <span className="pt-0.5 font-semibold leading-tight text-slate-700">
            Answered &amp; Review
          </span>
        </div>
      </div>

      {/* Numbered Grid — Independent 1 to 25 per section */}
      <div className="min-h-0 flex-1 overflow-y-auto p-3.5">
        <div className="grid grid-cols-5 gap-2">
          {activeScopeQuestions.map((q, localIdx) => {
            const globalIdx = sectionStartIndex + localIdx;
            const st = responses[q.id]?.status ?? 'not-visited';
            const visualState = toPaletteVisualState(st);
            const isCurrent = globalIdx === currentIndex;
            const displayNum = localIdx + 1;
            return (
              <button
                key={q.id}
                type="button"
                onClick={() => jumpToQuestion(globalIdx)}
                aria-label={`Question ${displayNum}, status ${visualState}`}
                aria-current={isCurrent ? 'step' : undefined}
                className="flex w-full items-start justify-center rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E1B4B]"
              >
                <PaletteSymbol
                  state={visualState}
                  label={displayNum}
                  size="grid"
                  isCurrent={isCurrent}
                  reserveTriangleSpace
                />
              </button>
            );
          })}
        </div>
      </div>

      {/* Palette Footer: Dedicated Next Section + Full Submit Test buttons */}
      <div className="shrink-0 space-y-2 border-t border-slate-200 p-3.5">
        {isStrictSectional && !isLastSection && (
          <button
            type="button"
            onClick={() => {
              setIsMobilePaletteOpen(false);
              setSubmitModalMode('section');
            }}
            className="w-full min-h-[40px] rounded-xl border border-indigo-200 bg-indigo-50 px-4 py-2 text-xs font-bold text-[#1E1B4B] transition-colors hover:bg-indigo-100"
          >
            Next Section →
          </button>
        )}
        <button
          type="button"
          onClick={() => {
            setIsMobilePaletteOpen(false);
            setSubmitModalMode('full');
          }}
          className="w-full min-h-[42px] rounded-xl bg-gradient-to-r from-[#1E1B4B] via-[#252262] to-[#312E81] px-4 py-2 text-sm font-bold text-white shadow-xs transition-opacity hover:opacity-95"
        >
          Submit Test
        </button>
      </div>
    </div>
  );

  return (
    <div className="flex h-[100dvh] flex-col overflow-hidden bg-[#F8FAFC]">
      {/* Modern Deep Indigo-Slate / Royal Sapphire Gradient Top Header */}
      <header className="shrink-0 z-30 border-b border-indigo-400/20 bg-gradient-to-r from-[#1E1B4B] via-[#252262] to-[#312E81] text-white shadow-sm">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-1.5 px-2.5 py-1.5 sm:gap-3 sm:px-6 sm:py-2">
          <div className="flex min-w-0 flex-1 items-center gap-2">
            <button
              type="button"
              onClick={() => setIsExitModalOpen(true)}
              className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/15 bg-white/10 text-white backdrop-blur-xs transition-colors hover:bg-white/20 sm:h-9 sm:w-9"
              aria-label="Exit exam"
              title="Exit exam"
            >
              <ChevronLeft className="h-4 w-4" aria-hidden="true" />
            </button>
            <img
              src="/assets/aistudio/1795032296907_b1ef824a.png"
              alt="SSC Sathi logo"
              className="hidden h-7 w-7 shrink-0 rounded-full bg-white object-cover ring-1 ring-white/30 sm:block"
            />
            <div className="min-w-0">
              <div className="text-[10px] font-semibold uppercase tracking-wider text-amber-300 leading-tight">
                {isStrictSectional
                  ? `SSC Sathi · Sec ${activeSectionIndex + 1}/${sections.length}`
                  : 'SSC Sathi · CBT'}
              </div>
              <h1 className="truncate text-xs sm:text-sm font-bold text-white leading-tight">
                {test.title}
              </h1>
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
            {/* Glassmorphic Countdown Timer */}
            <div
              role="timer"
              aria-live="off"
              className={`inline-flex shrink-0 items-center gap-1 rounded-lg border px-2 py-1 sm:px-2.5 sm:py-1.5 font-mono text-[11px] sm:text-sm font-extrabold tabular-nums backdrop-blur-xs transition-colors ${
                isTimerLow
                  ? 'animate-pulse border-rose-300/70 bg-rose-500/30 text-rose-100'
                  : 'border-white/20 bg-white/12 text-amber-300'
              }`}
            >
              <Clock className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              <span>{formatTimer(secondsLeft)}</span>
            </div>

            {/* Glassmorphic Palette Toggle */}
            <button
              type="button"
              onClick={() => {
                if (window.innerWidth >= 1024) {
                  setIsDesktopPaletteOpen((v) => !v);
                } else {
                  setIsMobilePaletteOpen((v) => !v);
                }
              }}
              aria-label="Toggle Question Palette"
              className="inline-flex h-8 shrink-0 items-center gap-1 rounded-lg border border-white/15 bg-white/10 px-2 text-xs font-semibold text-white backdrop-blur-xs transition-colors hover:bg-white/20 sm:h-9 sm:px-2.5"
            >
              <LayoutGrid className="h-4 w-4 text-amber-300 lg:hidden" aria-hidden="true" />
              {isDesktopPaletteOpen ? (
                <PanelRightClose className="hidden h-4 w-4 text-amber-300 lg:block" aria-hidden="true" />
              ) : (
                <PanelRightOpen className="hidden h-4 w-4 text-amber-300 lg:block" aria-hidden="true" />
              )}
              <span className="hidden md:inline">Palette</span>
            </button>

            {/* Clean Next Sec Button (when on Sections 1-3) */}
            {isStrictSectional && !isLastSection && (
              <button
                type="button"
                onClick={() => setSubmitModalMode('section')}
                className="inline-flex h-8 shrink-0 items-center justify-center rounded-lg border border-white/25 bg-white/12 px-2 sm:h-9 sm:px-3 text-[11px] sm:text-xs font-bold text-white backdrop-blur-xs transition-colors hover:bg-white/20 whitespace-nowrap"
              >
                Next Sec
              </button>
            )}

            {/* Dedicated Full-Test Submit Button — Never Truncated */}
            <button
              type="button"
              onClick={() => setSubmitModalMode('full')}
              className="inline-flex h-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-r from-amber-300 to-amber-400 px-2.5 sm:h-9 sm:px-3.5 text-[11px] sm:text-xs font-extrabold text-[#1E1B4B] shadow-xs transition-all hover:from-amber-200 hover:to-amber-300 whitespace-nowrap"
            >
              Submit Test
            </button>
          </div>
        </div>

        {/* Strict Sectional Lock Bar (Clean labels without Q26-50 ranges) */}
        {isStrictSectional && (
          <div className="border-t border-white/10 bg-black/20 backdrop-blur-xs">
            <div className="mx-auto flex max-w-[1440px] items-center gap-1.5 overflow-x-auto px-2.5 py-1.5 sm:gap-2 sm:px-6">
              {sections.map((sec, idx) => {
                const isDone = idx < activeSectionIndex;
                const isCurrent = idx === activeSectionIndex;
                const isLocked = idx > activeSectionIndex;
                const pillLabel = getSectionPillLabel(sec.shortName, sec.name);
                return (
                  <div
                    key={sec.id}
                    aria-current={isCurrent ? 'step' : undefined}
                    title={
                      isLocked
                        ? 'Locked until the current section timer finishes or is submitted'
                        : isDone
                          ? 'Section completed and locked'
                          : `${sec.name} — active (${sec.durationMinutes}:00 timer)`
                    }
                    className={`inline-flex shrink-0 items-center gap-1.5 rounded-lg border px-2.5 py-1 text-[11px] font-bold whitespace-nowrap transition-colors sm:text-xs ${
                      isCurrent
                        ? 'border-amber-300/70 bg-white/20 text-white shadow-xs backdrop-blur-xs'
                        : isDone
                          ? 'border-emerald-400/35 bg-emerald-500/20 text-emerald-100'
                          : 'border-white/10 bg-white/5 text-indigo-200/70'
                    }`}
                  >
                    {isDone ? (
                      <CheckCircle2 className="h-3 w-3 shrink-0 text-emerald-300" aria-hidden="true" />
                    ) : isLocked ? (
                      <Lock className="h-2.5 w-2.5 shrink-0 text-indigo-300/60" aria-hidden="true" />
                    ) : (
                      <Clock className="h-3 w-3 shrink-0 text-amber-300" aria-hidden="true" />
                    )}
                    <span>
                      {idx + 1}. {pillLabel}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </header>

      {/* Section Transition Notice */}
      {sectionNotice && (
        <div className="shrink-0 border-b border-amber-200 bg-amber-50 px-3 py-1.5 text-center text-xs font-bold text-amber-950">
          {sectionNotice}
        </div>
      )}

      {/* Main CBT Workspace */}
      <div className="mx-auto flex min-h-0 w-full max-w-[1440px] flex-1 overflow-hidden">
        {/* Question Canvas — Pinned Sub-toolbar, Flex Middle Card, Pinned Bottom Action Bar */}
        <main className="flex min-h-0 flex-1 flex-col overflow-hidden">
          {/* Sub-toolbar: Per-section Q1/25 Counter (No live topic hint), EN/HI Switcher & Marks */}
          <div className="shrink-0 border-b border-slate-200 bg-white px-3 py-1.5 sm:px-6 sm:py-2.5">
            <div className="mx-auto flex w-full max-w-3xl items-center justify-between gap-2">
              <div className="flex min-w-0 items-center gap-2 text-xs sm:text-sm">
                <span className="shrink-0 rounded-md bg-indigo-50 px-2 py-0.5 font-mono font-extrabold text-[#1E1B4B] tabular-nums">
                  Q{localQuestionNumber}/{sectionQuestionTotal}
                </span>
              </div>

              <div className="flex shrink-0 items-center gap-2 sm:gap-3">
                {/* Clean EN / HI Language Switcher (hidden in English section) */}
                {!isEnglishSection && (
                  <div
                    role="group"
                    aria-label="Question language"
                    className="inline-flex items-center rounded-lg border border-slate-200 bg-white p-0.5 shadow-2xs"
                  >
                    <Languages
                      className="ml-1 mr-0.5 h-3.5 w-3.5 text-slate-400"
                      aria-hidden="true"
                    />
                    <button
                      type="button"
                      onClick={() => setLanguage('en')}
                      aria-pressed={language === 'en'}
                      className={`rounded-md px-2 py-0.5 text-[11px] font-bold transition-colors sm:px-2.5 sm:text-xs ${
                        language === 'en'
                          ? 'bg-[#0F172A] text-white shadow-2xs'
                          : 'text-slate-600 hover:bg-slate-100 hover:text-[#0F172A]'
                      }`}
                    >
                      EN
                    </button>
                    <button
                      type="button"
                      onClick={() => setLanguage('hi')}
                      aria-pressed={language === 'hi'}
                      className={`rounded-md px-2 py-0.5 text-[11px] font-bold transition-colors sm:px-2.5 sm:text-xs ${
                        language === 'hi'
                          ? 'bg-[#0F172A] text-white shadow-2xs'
                          : 'text-slate-600 hover:bg-slate-100 hover:text-[#0F172A]'
                      }`}
                    >
                      HI
                    </button>
                  </div>
                )}

                <span className="font-mono text-[11px] sm:text-xs font-semibold text-slate-600 tabular-nums whitespace-nowrap">
                  +{test.positiveMarks}/-{test.negativeMarks.toFixed(2)}
                </span>
              </div>
            </div>
          </div>

          {/* Middle Question & 4 Options Area (Split-View for Passage Questions, Standard Scroll for Normal Questions) */}
          <div
            onTouchStart={handleQuestionTouchStart}
            onTouchMove={handleQuestionTouchMove}
            onTouchEnd={handleQuestionTouchEnd}
            onTouchCancel={handleQuestionTouchCancel}
            className={
              currentQuestion.passageEn
                ? 'min-h-0 flex-1 flex flex-col overflow-hidden px-2.5 py-2 sm:px-6 sm:py-3.5'
                : 'min-h-0 flex-1 overflow-y-auto overflow-x-hidden touch-pan-y px-2.5 py-2 sm:px-6 sm:py-4'
            }
          >
            {currentQuestion.passageEn ? (
              <motion.section
                key={currentQuestion.id}
                initial={
                  swipeSlideDir === 'next'
                    ? { x: 34, opacity: 0.65 }
                    : swipeSlideDir === 'prev'
                      ? { x: -34, opacity: 0.65 }
                      : false
                }
                animate={{ x: swipeOffset, opacity: 1 }}
                transition={
                  swipeOffset !== 0
                    ? { duration: 0 }
                    : { duration: 0.18, ease: 'easeOut' }
                }
                onAnimationComplete={() => {
                  if (swipeOffset === 0 && swipeSlideDir !== null) {
                    setSwipeSlideDir(null);
                  }
                }}
                className="mx-auto flex h-full min-h-0 w-full max-w-3xl flex-col overflow-hidden rounded-xl sm:rounded-2xl border border-slate-200 bg-white shadow-xs"
              >
                {/* Top Panel (~58% height): Full Scrollable Passage without truncation */}
                <div className="min-h-0 flex-[58] overflow-y-auto touch-pan-y bg-[#F8FAFC] p-3 sm:p-5">
                  <div className="mb-1.5 text-[10px] sm:text-xs font-extrabold uppercase tracking-wider text-[#1E3A8A]">
                    Read the passage carefully
                  </div>
                  <div className="text-[13px] sm:text-[14.5px] leading-relaxed text-slate-800 whitespace-pre-line">
                    {currentQuestion.passageEn}
                  </div>
                </div>

                {/* Bottom Panel (~42% height): Question Prompt & 4 Compact Option Buttons */}
                <div className="min-h-0 flex-[42] overflow-y-auto touch-pan-y border-t border-slate-200 bg-white p-2.5 sm:p-4 shadow-[0_-4px_12px_-6px_rgba(15,23,42,0.1)]">
                  <h2 className="text-[13px] sm:text-sm font-semibold leading-snug text-[#0F172A] whitespace-pre-line">
                    {displayedQuestionText}
                  </h2>

                  <div
                    className="mt-2 sm:mt-2.5 space-y-1.5 sm:space-y-2"
                    role="radiogroup"
                    aria-label="Answer options"
                  >
                    {OPTION_LETTERS.map((letter, idx) => {
                      const optionIdx = idx as OptionIndex;
                      const isSelected = currentResponse?.selectedIndex === optionIdx;
                      const optText = displayedOptions[optionIdx];

                      return (
                        <button
                          key={letter}
                          type="button"
                          role="radio"
                          aria-checked={isSelected}
                          onClick={() => handleSelectOption(optionIdx)}
                          className={`group flex w-full min-h-[38px] sm:min-h-[44px] items-center justify-between gap-2 rounded-xl border px-2.5 py-1.5 sm:px-3.5 sm:py-2 text-left transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F172A] ${
                            isSelected
                              ? 'border-[#0F172A] bg-amber-50/85 text-[#0F172A] ring-1 ring-[#0F172A] shadow-xs'
                              : 'border-slate-200 bg-white text-slate-800 hover:border-slate-300 hover:bg-slate-50/80'
                          }`}
                        >
                          <div className="flex min-w-0 flex-1 items-center gap-2 sm:gap-2.5">
                            <span
                              className={`flex h-6 w-6 sm:h-7 sm:w-7 shrink-0 items-center justify-center rounded-lg font-mono text-xs font-bold transition-colors ${
                                isSelected
                                  ? 'bg-[#0F172A] text-[#F59E0B]'
                                  : 'bg-slate-100 text-slate-700 group-hover:bg-slate-200/80'
                              }`}
                            >
                              {letter}
                            </span>
                            <span
                              className={`text-[12.5px] sm:text-sm leading-snug ${
                                isSelected ? 'font-bold text-[#0F172A]' : 'font-medium'
                              }`}
                            >
                              {optText}
                            </span>
                          </div>

                          {isSelected && (
                            <CheckCircle2
                              className="h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-[#0F172A]"
                              aria-hidden="true"
                            />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </motion.section>
            ) : (
              <motion.section
                key={currentQuestion.id}
                initial={
                  swipeSlideDir === 'next'
                    ? { x: 34, opacity: 0.65 }
                    : swipeSlideDir === 'prev'
                      ? { x: -34, opacity: 0.65 }
                      : false
                }
                animate={{ x: swipeOffset, opacity: 1 }}
                transition={
                  swipeOffset !== 0
                    ? { duration: 0 }
                    : { duration: 0.18, ease: 'easeOut' }
                }
                onAnimationComplete={() => {
                  if (swipeOffset === 0 && swipeSlideDir !== null) {
                    setSwipeSlideDir(null);
                  }
                }}
                className="mx-auto w-full max-w-3xl rounded-xl sm:rounded-2xl border border-slate-200 bg-white p-3 sm:p-5 shadow-xs"
              >
                {effectiveLanguage === 'hi' && !hasHindiForCurrent && (
                  <div className="mb-2 inline-flex items-center rounded-md border border-amber-200 bg-amber-50 px-2 py-0.5 text-[11px] font-semibold text-amber-800">
                    Hindi translation unavailable for this question — showing English
                  </div>
                )}

                <h2 className="text-[13.5px] sm:text-base font-semibold leading-snug sm:leading-relaxed text-[#0F172A] whitespace-pre-line">
                  {displayedQuestionText}
                </h2>

                {/* Question Diagram / Chart / Figure Image */}
                {currentQuestion.imageUrl && (
                  <div className="mt-2 flex justify-center rounded-lg border border-slate-200 bg-white p-1.5 sm:p-2">
                    <img
                      src={currentQuestion.imageUrl}
                      alt="Question diagram"
                      className="max-h-36 sm:max-h-56 w-auto max-w-full object-contain grayscale contrast-[1.45] brightness-[1.12] mix-blend-multiply"
                    />
                  </div>
                )}

                {/* Structured Number Matrix (e.g., Q15 / Q22) */}
                {currentQuestion.matrix && currentQuestion.matrix.length > 0 && (
                  <div className="mt-2.5 inline-block max-w-full overflow-x-auto rounded-lg border border-slate-300 bg-[#F8FAFC] shadow-2xs">
                    <table className="border-collapse text-center font-mono text-xs sm:text-sm font-bold text-[#0F172A] tabular-nums">
                      <tbody>
                        {currentQuestion.matrix.map((row, rIdx) => (
                          <tr
                            key={rIdx}
                            className="divide-x divide-slate-300 border-b border-slate-300 last:border-b-0"
                          >
                            {row.map((cell, cIdx) => (
                              <td
                                key={cIdx}
                                className={`h-7 sm:h-9 min-w-[2.5rem] sm:min-w-[3.25rem] px-1.5 sm:px-2 ${
                                  cell === '?' ? 'bg-amber-100/80 text-[#1E3A8A]' : 'bg-white'
                                }`}
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* Compact 4 Option Selection Cards (2x2 grid for figure options, vertical stack for text options) */}
                <div
                  className={
                    currentQuestion.optionImages
                      ? 'mt-2.5 sm:mt-4 grid grid-cols-2 gap-2 sm:gap-2.5'
                      : 'mt-2.5 sm:mt-4 space-y-1.5 sm:space-y-2.5'
                  }
                  role="radiogroup"
                  aria-label="Answer options"
                >
                  {OPTION_LETTERS.map((letter, idx) => {
                    const optionIdx = idx as OptionIndex;
                    const isSelected = currentResponse?.selectedIndex === optionIdx;
                    const optText = displayedOptions[optionIdx];
                    const optImg = currentQuestion.optionImages?.[optionIdx];

                    return (
                      <button
                        key={letter}
                        type="button"
                        role="radio"
                        aria-checked={isSelected}
                        onClick={() => handleSelectOption(optionIdx)}
                        className={`group flex w-full ${
                          optImg ? 'min-h-[68px] sm:min-h-[82px]' : 'min-h-[42px] sm:min-h-[50px]'
                        } items-center justify-between gap-2 rounded-xl border px-2.5 py-2 sm:px-4 sm:py-3 text-left transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F172A] ${
                          isSelected
                            ? 'border-[#0F172A] bg-amber-50/85 text-[#0F172A] ring-1 ring-[#0F172A] shadow-xs'
                            : 'border-slate-200 bg-white text-slate-800 hover:border-slate-300 hover:bg-slate-50/80'
                        }`}
                      >
                        <div className="flex min-w-0 flex-1 items-center gap-2 sm:gap-3">
                          <span
                            className={`flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-lg font-mono text-xs font-bold transition-colors ${
                              isSelected
                                ? 'bg-[#0F172A] text-[#F59E0B]'
                                : 'bg-slate-100 text-slate-700 group-hover:bg-slate-200/80'
                            }`}
                          >
                            {letter}
                          </span>

                          {optImg ? (
                            <div className="flex min-w-0 flex-1 items-center justify-center rounded-md bg-white p-1">
                              <img
                                src={optImg}
                                alt={`Option ${letter}`}
                                className="max-h-14 sm:max-h-20 w-auto max-w-full object-contain grayscale contrast-[1.45] brightness-[1.12] mix-blend-multiply"
                              />
                            </div>
                          ) : (
                            <span
                              className={`text-[13px] sm:text-sm leading-snug ${
                                isSelected ? 'font-bold text-[#0F172A]' : 'font-medium'
                              }`}
                            >
                              {optText}
                            </span>
                          )}
                        </div>

                        {isSelected && (
                          <CheckCircle2
                            className="h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-[#0F172A]"
                            aria-hidden="true"
                          />
                        )}
                      </button>
                    );
                  })}
                </div>
              </motion.section>
            )}
          </div>

          {/* Pinned Bottom CBT Action Bar */}
          <div className="shrink-0 border-t border-slate-200 bg-white px-2.5 py-2 sm:px-6 sm:py-3">
            <div className="mx-auto grid w-full max-w-3xl grid-cols-2 gap-1.5 sm:flex sm:items-center sm:justify-between sm:gap-2">
              <div className="col-span-2 grid grid-cols-2 gap-1.5 sm:flex sm:items-center sm:gap-2">
                <button
                  type="button"
                  onClick={handleMarkForReviewAndNext}
                  className="inline-flex min-h-[38px] sm:min-h-[42px] items-center justify-center gap-1 rounded-xl border border-amber-300 bg-amber-50 px-2.5 py-1.5 text-[11px] sm:px-3.5 sm:text-xs font-bold text-amber-950 transition-colors hover:bg-amber-100 whitespace-nowrap"
                >
                  <Flag className="h-3.5 w-3.5 shrink-0 text-amber-700" aria-hidden="true" />
                  <span>Mark for Review &amp; Next</span>
                </button>

                <button
                  type="button"
                  onClick={handleClearResponse}
                  disabled={currentResponse?.selectedIndex === null}
                  className="inline-flex min-h-[38px] sm:min-h-[42px] items-center justify-center gap-1 rounded-xl border border-slate-200 bg-white px-2.5 py-1.5 text-[11px] sm:px-3.5 sm:text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-100 disabled:opacity-45 disabled:pointer-events-none whitespace-nowrap"
                >
                  <Eraser className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  <span>Clear Response</span>
                </button>
              </div>

              <div className="col-span-2 grid grid-cols-2 gap-1.5 sm:flex sm:items-center sm:gap-2">
                <button
                  type="button"
                  onClick={() => jumpToQuestion(currentIndex - 1)}
                  disabled={currentIndex <= sectionStartIndex}
                  className="inline-flex min-h-[38px] sm:min-h-[42px] items-center justify-center gap-1 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs sm:text-sm font-semibold text-slate-700 hover:bg-slate-100 disabled:opacity-40 disabled:pointer-events-none"
                >
                  <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                  <span>Prev</span>
                </button>

                <button
                  type="button"
                  onClick={handleSaveAndNext}
                  className="inline-flex min-h-[38px] sm:min-h-[42px] items-center justify-center gap-1 rounded-xl bg-[#0F172A] px-4 py-1.5 text-xs sm:px-5 sm:text-sm font-bold text-white shadow-xs transition-colors hover:bg-slate-800 whitespace-nowrap"
                >
                  <span>
                    {currentIndex === sectionEndIndex ? 'Save Response' : 'Save & Next'}
                  </span>
                  {currentIndex < sectionEndIndex && (
                    <ChevronRight className="h-4 w-4 shrink-0 text-[#F59E0B]" aria-hidden="true" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </main>

        {/* Desktop Collapsible Right Palette */}
        {isDesktopPaletteOpen && (
          <aside className="hidden w-80 shrink-0 border-l border-slate-200 bg-white lg:block">
            {renderPaletteContent()}
          </aside>
        )}
      </div>

      {/* Mobile Slide-Over Palette Drawer */}
      {isMobilePaletteOpen && (
        <div className="fixed inset-0 z-40 flex justify-end lg:hidden">
          <div
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-[1px]"
            onClick={() => setIsMobilePaletteOpen(false)}
          />
          <aside className="relative z-50 h-full w-80 max-w-[85vw] bg-white shadow-xl">
            {renderPaletteContent()}
          </aside>
        </div>
      )}

      {/* Section Advance Modal (Next Sec on Sections 1-3) */}
      {submitModalMode === 'section' && isStrictSectional && !isLastSection && activeSection && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/55 p-4 backdrop-blur-[2px]">
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="section-modal-title"
            className="w-full max-w-md overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl"
          >
            <div className="bg-gradient-to-r from-[#1E1B4B] via-[#252262] to-[#312E81] px-5 py-4 text-white">
              <div className="text-[11px] font-bold uppercase tracking-wider text-amber-300">
                Section {activeSectionIndex + 1} of {sections.length}
              </div>
              <h2 id="section-modal-title" className="mt-0.5 text-base font-extrabold">
                Move to Next Section?
              </h2>
            </div>

            <div className="p-5">
              <p className="text-sm text-slate-600 leading-relaxed">
                Once locked,{' '}
                <span className="font-bold text-[#0F172A]">
                  {getSectionPillLabel(activeSection.shortName, activeSection.name)}
                </span>{' '}
                cannot be reopened and you will start{' '}
                <span className="font-bold text-[#1E1B4B]">
                  {nextSection
                    ? `${getSectionPillLabel(nextSection.shortName, nextSection.name)} (${nextSection.durationMinutes}:00)`
                    : 'the next section'}
                </span>
                .
              </p>

              <div className="mt-4 grid grid-cols-2 gap-2.5 text-sm tabular-nums">
                <div className="flex items-start gap-2 rounded-xl border border-blue-200 bg-blue-50/70 p-2.5">
                  <div className="w-6 shrink-0 pt-0.5">
                    <PaletteSymbol
                      state="not-attempted"
                      label={sectionStatusCounts.notAttempted}
                      size="sm"
                    />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold text-blue-900">Not Attempted</div>
                    <div className="text-base font-extrabold text-[#1D4ED8]">
                      {sectionStatusCounts.notAttempted}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-2 rounded-xl border border-green-200 bg-green-50/70 p-2.5">
                  <div className="w-6 shrink-0 pt-0.5">
                    <PaletteSymbol state="answered" label={sectionStatusCounts.answered} size="sm" />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold text-green-900">Answered</div>
                    <div className="text-base font-extrabold text-[#16A34A]">
                      {sectionStatusCounts.answered}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-2 rounded-xl border border-red-200 bg-red-50/70 p-2.5">
                  <div className="w-6 shrink-0 pt-0.5">
                    <PaletteSymbol
                      state="marked"
                      label={sectionStatusCounts.markedNotAttempted}
                      size="sm"
                    />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold text-red-900">Review (Unans.)</div>
                    <div className="text-base font-extrabold text-[#DC2626]">
                      {sectionStatusCounts.markedNotAttempted}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-2 rounded-xl border border-amber-200 bg-amber-50/70 p-2.5">
                  <div className="w-6 shrink-0 pt-0.5">
                    <PaletteSymbol
                      state="answered-marked"
                      label={sectionStatusCounts.answeredMarked}
                      size="sm"
                    />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold text-amber-950">Review (Ans.)</div>
                    <div className="text-base font-extrabold text-amber-800">
                      {sectionStatusCounts.answeredMarked}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-end gap-2.5">
                <button
                  type="button"
                  onClick={() => setSubmitModalMode('none')}
                  className="min-h-[42px] rounded-xl border border-slate-300 bg-white px-4 py-2 text-xs sm:text-sm font-bold text-slate-700 hover:bg-slate-100"
                >
                  Continue Section
                </button>
                <button
                  type="button"
                  onClick={() => handleAdvanceSection(false)}
                  className="min-h-[42px] rounded-xl bg-gradient-to-r from-[#1E1B4B] via-[#252262] to-[#312E81] px-4 py-2 text-xs sm:text-sm font-bold text-white shadow-xs hover:opacity-95"
                >
                  Lock &amp; Next Section →
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Original SSC Sathi "Exam Summary" Confirmation Modal (Full Test Submit) */}
      {submitModalMode === 'full' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-3 sm:p-4 backdrop-blur-[2px]">
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="exam-summary-modal-title"
            className="w-full max-w-lg overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl"
          >
            {/* Sleek SSC Sathi Header Strip */}
            <div className="flex items-center justify-between gap-3 bg-gradient-to-r from-[#1E1B4B] via-[#252262] to-[#312E81] px-5 py-4 text-white">
              <div className="flex min-w-0 items-center gap-2.5">
                <img
                  src="/assets/aistudio/1795032296907_b1ef824a.png"
                  alt="SSC Sathi"
                  className="h-8 w-8 shrink-0 rounded-full bg-white object-cover ring-2 ring-amber-300/60"
                />
                <div className="min-w-0">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-amber-300">
                    SSC Sathi · Exam Summary
                  </div>
                  <h2
                    id="exam-summary-modal-title"
                    className="truncate text-sm sm:text-base font-extrabold text-white"
                  >
                    {test.title}
                  </h2>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSubmitModalMode('none')}
                aria-label="Close Exam Summary"
                className="rounded-lg border border-white/15 bg-white/10 p-1.5 text-white hover:bg-white/20"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            <div className="p-4 sm:p-5">
              {/* Column Header */}
              <div className="grid grid-cols-[1.4fr_1fr_1fr_1fr] items-center gap-1.5 px-3 pb-2 text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500">
                <span>Section</span>
                <span className="text-center text-[#16A34A]">Attempted</span>
                <span className="text-center text-[#DC2626]">Unattempted</span>
                <span className="text-center text-amber-600">Review</span>
              </div>

              {/* Distinct Card-Based Rows for All Sections */}
              <div className="space-y-2">
                {examSummaryRows.map((row) => {
                  const isRowActive =
                    isStrictSectional && row.index === activeSectionIndex;
                  return (
                    <div
                      key={row.id}
                      className={`grid grid-cols-[1.4fr_1fr_1fr_1fr] items-center gap-1.5 rounded-xl border px-3 py-2.5 tabular-nums ${
                        isRowActive
                          ? 'border-indigo-300 bg-indigo-50/50'
                          : 'border-slate-200 bg-[#F8FAFC]'
                      }`}
                    >
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5">
                          <span className="truncate text-xs sm:text-sm font-bold text-[#0F172A]">
                            {row.label}
                          </span>
                          {isRowActive && (
                            <span className="shrink-0 rounded bg-[#1E1B4B] px-1.5 py-0.5 text-[9px] font-bold uppercase text-amber-300">
                              Live
                            </span>
                          )}
                        </div>
                        <div className="text-[10px] font-medium text-slate-500">
                          {row.total} Qs
                        </div>
                      </div>

                      <div className="text-center">
                        <span className="inline-flex min-w-[36px] items-center justify-center rounded-lg border border-emerald-200 bg-emerald-50 px-2 py-1 font-mono text-xs sm:text-sm font-extrabold text-[#16A34A]">
                          {row.attempted}
                        </span>
                      </div>

                      <div className="text-center">
                        <span className="inline-flex min-w-[36px] items-center justify-center rounded-lg border border-rose-200 bg-rose-50 px-2 py-1 font-mono text-xs sm:text-sm font-extrabold text-[#DC2626]">
                          {row.unattempted}
                        </span>
                      </div>

                      <div className="text-center">
                        <span className="inline-flex min-w-[36px] items-center justify-center rounded-lg border border-amber-200 bg-amber-50 px-2 py-1 font-mono text-xs sm:text-sm font-extrabold text-amber-700">
                          {row.marked}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Highlighted Total Summary Bar (out of 100) */}
              <div className="mt-3 grid grid-cols-[1.4fr_1fr_1fr_1fr] items-center gap-1.5 rounded-xl border border-indigo-200 bg-indigo-50/80 px-3 py-2.5 tabular-nums">
                <div>
                  <div className="text-xs sm:text-sm font-extrabold text-[#1E1B4B]">Total</div>
                  <div className="text-[10px] font-semibold text-indigo-700">
                    Out of {examSummaryTotals.total} Qs
                  </div>
                </div>
                <div className="text-center font-mono text-sm sm:text-base font-extrabold text-[#16A34A]">
                  {examSummaryTotals.attempted}
                </div>
                <div className="text-center font-mono text-sm sm:text-base font-extrabold text-[#DC2626]">
                  {examSummaryTotals.unattempted}
                </div>
                <div className="text-center font-mono text-sm sm:text-base font-extrabold text-amber-700">
                  {examSummaryTotals.marked}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-5 flex items-center justify-between gap-2.5 sm:justify-end">
                <button
                  type="button"
                  onClick={() => setSubmitModalMode('none')}
                  className="min-h-[44px] flex-1 sm:flex-none rounded-xl border border-slate-300 bg-white px-4 py-2 text-xs sm:text-sm font-bold text-slate-700 transition-colors hover:bg-slate-100"
                >
                  Resume Test
                </button>
                <button
                  type="button"
                  onClick={() => handleFinalizeSubmit(responses, secondsLeft, elapsedPriorSeconds)}
                  className="min-h-[44px] flex-1 sm:flex-none rounded-xl bg-gradient-to-r from-[#1E1B4B] via-[#252262] to-[#312E81] px-5 py-2 text-xs sm:text-sm font-extrabold text-white shadow-sm transition-opacity hover:opacity-95 whitespace-nowrap"
                >
                  Confirm &amp; Submit Test
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Exit Confirmation Modal */}
      {isExitModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4">
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="exit-modal-title"
            className="w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-6 shadow-xl"
          >
            <div className="flex items-center gap-2.5 text-amber-600">
              <AlertTriangle className="h-5 w-5 shrink-0" aria-hidden="true" />
              <h2 id="exit-modal-title" className="text-base font-bold text-[#0F172A]">
                Leave current mock test?
              </h2>
            </div>
            <p className="mt-2 text-sm text-slate-600">
              Your current progress will not be scored unless you submit the test.
            </p>
            <div className="mt-5 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setIsExitModalOpen(false)}
                className="min-h-[40px] rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100"
              >
                Stay in Test
              </button>
              <button
                type="button"
                onClick={onExitTest}
                className="min-h-[40px] rounded-xl bg-rose-600 px-4 py-2 text-sm font-semibold text-white hover:bg-rose-700"
              >
                Exit to Home
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
