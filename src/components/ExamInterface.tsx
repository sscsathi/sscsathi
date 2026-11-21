import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  AlertTriangle,
  Check,
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
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState<boolean>(false);
  const [isExitModalOpen, setIsExitModalOpen] = useState<boolean>(false);
  const [language, setLanguage] = useState<QuestionLanguage>(initialLanguage);

  // Guard against double-triggering section transition or test submission on 0s
  const zeroHandledForSectionRef = useRef<number>(-1);

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
  const hasHindiForCurrent = Boolean(currentQuestion.questionHi);
  const displayedQuestionText =
    language === 'hi' && currentQuestion.questionHi
      ? currentQuestion.questionHi
      : currentQuestion.questionEn;
  const displayedOptions =
    language === 'hi' && currentQuestion.optionsHi
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
      setIsSubmitModalOpen(false);
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

  // Keyboard shortcuts for quick CBT navigation (strictly respects section bounds)
  useEffect(() => {
    if (isSubmitModalOpen || isExitModalOpen) return;
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
    isSubmitModalOpen,
    jumpToQuestion,
    sectionEndIndex,
    sectionStartIndex,
  ]);

  const activeScopeQuestions = useMemo(
    () => test.questions.slice(sectionStartIndex, sectionEndIndex + 1),
    [sectionEndIndex, sectionStartIndex, test.questions]
  );

  const countStatuses = useCallback(
    (questionsList: typeof test.questions) => {
      let answered = 0;
      let notAnswered = 0;
      let marked = 0;
      let notVisited = 0;

      for (const q of questionsList) {
        const st = responses[q.id]?.status ?? 'not-visited';
        if (st === 'answered') answered += 1;
        else if (st === 'not-answered') notAnswered += 1;
        else if (st === 'marked' || st === 'answered-marked') marked += 1;
        else notVisited += 1;
      }

      return { answered, notAnswered, marked, notVisited };
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

  const isTimerLow = secondsLeft < 120;
  const nextSection =
    isStrictSectional && !isLastSection ? sections[activeSectionIndex + 1] : undefined;

  const getPaletteButtonClass = (status: QuestionStatus, isCurrent: boolean) => {
    const ring = isCurrent ? 'ring-2 ring-[#0F172A] ring-offset-2' : '';
    switch (status) {
      case 'answered':
        return `bg-emerald-600 text-white border-emerald-700 hover:bg-emerald-700 ${ring}`;
      case 'not-answered':
        return `bg-rose-600 text-white border-rose-700 hover:bg-rose-700 ${ring}`;
      case 'marked':
      case 'answered-marked':
        return `bg-purple-600 text-white border-purple-700 hover:bg-purple-700 ${ring}`;
      case 'not-visited':
      default:
        return `bg-slate-200 text-slate-700 border-slate-300 hover:bg-slate-300 ${ring}`;
    }
  };

  const renderPaletteContent = () => (
    <div className="flex h-full flex-col bg-white">
      <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3.5">
        <div className="min-w-0">
          <h2 className="truncate text-sm font-bold text-[#0F172A]">
            {activeSection ? activeSection.shortName : 'Question Palette'}
          </h2>
          <p className="text-xs text-slate-500 tabular-nums">
            {sectionAttemptedCount} of {activeScopeQuestions.length} answered
            {activeSection
              ? ` (Q${activeSection.startIndex + 1}–Q${activeSection.endIndex + 1})`
              : ''}
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

      {/* Color Legend with Live Counts */}
      <div className="grid grid-cols-2 gap-2.5 border-b border-slate-200 bg-[#F8FAFC] p-4 text-xs">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-emerald-600 font-mono text-[11px] font-bold text-white tabular-nums">
            {sectionStatusCounts.answered}
          </span>
          <span className="text-slate-700 font-semibold">Answered</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-rose-600 font-mono text-[11px] font-bold text-white tabular-nums">
            {sectionStatusCounts.notAnswered}
          </span>
          <span className="text-slate-700 font-semibold">Not Answered</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-purple-600 font-mono text-[11px] font-bold text-white tabular-nums">
            {sectionStatusCounts.marked}
          </span>
          <span className="text-slate-700 font-semibold">Marked for Review</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-slate-200 font-mono text-[11px] font-bold text-slate-700 tabular-nums">
            {sectionStatusCounts.notVisited}
          </span>
          <span className="text-slate-700 font-semibold">Not Visited</span>
        </div>
      </div>

      {/* Numbered Grid (Strictly scoped to current section; displays global Q1..Q100 numbering) */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="grid grid-cols-5 gap-2.5">
          {activeScopeQuestions.map((q, localIdx) => {
            const globalIdx = sectionStartIndex + localIdx;
            const st = responses[q.id]?.status ?? 'not-visited';
            const isCurrent = globalIdx === currentIndex;
            return (
              <button
                key={q.id}
                type="button"
                onClick={() => jumpToQuestion(globalIdx)}
                aria-label={`Question ${globalIdx + 1}, status ${st}`}
                aria-current={isCurrent ? 'step' : undefined}
                className={`relative flex h-11 w-full items-center justify-center rounded-lg border font-mono text-sm font-bold transition-all tabular-nums ${getPaletteButtonClass(
                  st,
                  isCurrent
                )}`}
              >
                {globalIdx + 1}
                {st === 'answered-marked' && (
                  <span
                    title="Answered and marked for review"
                    className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 text-white ring-2 ring-white"
                  >
                    <Check className="h-2.5 w-2.5 stroke-[3]" aria-hidden="true" />
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      <div className="border-t border-slate-200 p-4">
        <button
          type="button"
          onClick={() => setIsSubmitModalOpen(true)}
          className="w-full min-h-[44px] rounded-xl bg-[#F59E0B] px-4 py-2.5 text-sm font-bold text-[#0F172A] transition-colors hover:bg-amber-400"
        >
          {isStrictSectional && !isLastSection ? 'Submit Section →' : 'Submit Test'}
        </button>
      </div>
    </div>
  );

  const modalCounts = isStrictSectional && !isLastSection ? sectionStatusCounts : overallStatusCounts;

  return (
    <div className="flex min-h-screen flex-col bg-[#F8FAFC]">
      {/* Royal Navy CBT Top Bar */}
      <header className="sticky top-0 z-30 border-b border-slate-800 bg-[#0F172A] text-white shadow-xs">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-3 px-3 py-2.5 sm:px-6">
          <div className="flex min-w-0 items-center gap-2.5">
            <button
              type="button"
              onClick={() => setIsExitModalOpen(true)}
              className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-700 bg-slate-800/80 text-slate-200 hover:bg-slate-700 hover:text-white"
              aria-label="Exit exam"
              title="Exit exam"
            >
              <ChevronLeft className="h-4 w-4" aria-hidden="true" />
            </button>
            <img
              src="/assets/aistudio/1795032296907_b1ef824a.png"
              alt="SSC Sathi logo"
              className="hidden h-8 w-8 shrink-0 rounded-full bg-white object-cover ring-1 ring-amber-400/40 sm:block"
            />
            <div className="min-w-0">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-[#F59E0B]">
                {isStrictSectional
                  ? `SSC Sathi · Section ${activeSectionIndex + 1} of ${sections.length}`
                  : 'SSC Sathi · CBT Mode'}
              </div>
              <h1 className="truncate text-sm sm:text-base font-bold text-white">
                {test.title}
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Bold Section/Test Countdown Timer */}
            <div
              role="timer"
              aria-live="off"
              className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 font-mono text-sm sm:text-base font-extrabold tabular-nums transition-colors ${
                isTimerLow
                  ? 'animate-pulse border-rose-400 bg-rose-600/25 text-rose-200 shadow-xs shadow-rose-500/25'
                  : 'border-amber-400/35 bg-slate-800 text-[#F59E0B]'
              }`}
            >
              <Clock className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>{formatTimer(secondsLeft)}</span>
            </div>

            {/* Palette Toggle Button */}
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
              className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-800 px-2.5 text-xs font-semibold text-slate-200 hover:bg-slate-700 hover:text-white"
            >
              <LayoutGrid className="h-4 w-4 text-[#F59E0B] lg:hidden" aria-hidden="true" />
              {isDesktopPaletteOpen ? (
                <PanelRightClose className="hidden h-4 w-4 text-[#F59E0B] lg:block" aria-hidden="true" />
              ) : (
                <PanelRightOpen className="hidden h-4 w-4 text-[#F59E0B] lg:block" aria-hidden="true" />
              )}
              <span className="hidden sm:inline">Palette</span>
            </button>

            <button
              type="button"
              onClick={() => setIsSubmitModalOpen(true)}
              className="inline-flex h-9 items-center justify-center rounded-lg bg-[#F59E0B] px-3 sm:px-4 text-xs sm:text-sm font-bold text-[#0F172A] transition-colors hover:bg-amber-400 whitespace-nowrap"
            >
              {isStrictSectional && !isLastSection ? 'Submit Section' : 'Submit Test'}
            </button>
          </div>
        </div>

        {/* Strict Sectional Lock Bar */}
        {isStrictSectional && (
          <div className="border-t border-slate-800 bg-slate-900/95">
            <div className="mx-auto flex max-w-[1440px] items-center gap-2 overflow-x-auto px-3 py-2 sm:px-6">
              {sections.map((sec, idx) => {
                const isDone = idx < activeSectionIndex;
                const isCurrent = idx === activeSectionIndex;
                const isLocked = idx > activeSectionIndex;
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
                    className={`inline-flex shrink-0 items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs font-bold whitespace-nowrap tabular-nums ${
                      isCurrent
                        ? 'border-[#F59E0B] bg-[#1E3A8A] text-white shadow-xs'
                        : isDone
                          ? 'border-emerald-700/60 bg-emerald-950/60 text-emerald-300'
                          : 'border-slate-700/70 bg-slate-800/50 text-slate-400'
                    }`}
                  >
                    {isDone ? (
                      <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-400" aria-hidden="true" />
                    ) : isLocked ? (
                      <Lock className="h-3 w-3 shrink-0 text-slate-500" aria-hidden="true" />
                    ) : (
                      <Clock className="h-3.5 w-3.5 shrink-0 text-[#F59E0B]" aria-hidden="true" />
                    )}
                    <span>
                      {idx + 1}. {sec.shortName}
                    </span>
                    <span className="text-[10px] opacity-75">
                      (Q{sec.startIndex + 1}–{sec.endIndex + 1})
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
        <div className="border-b border-amber-200 bg-amber-50 px-4 py-2.5 text-center text-xs sm:text-sm font-bold text-amber-950">
          {sectionNotice}
        </div>
      )}

      {/* Main CBT Workspace */}
      <div className="mx-auto flex w-full max-w-[1440px] flex-1 overflow-hidden">
        {/* Question Canvas */}
        <main className="flex flex-1 flex-col justify-between overflow-y-auto p-4 sm:p-6 lg:p-8">
          <div className="mx-auto w-full max-w-3xl">
            {/* Sub-toolbar: Question Index, EN / HI Switcher & Marks */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-4">
              <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm">
                <span className="font-bold text-[#0F172A] tabular-nums">
                  Question {currentIndex + 1} of {test.questions.length}
                </span>
                <span className="text-slate-300" aria-hidden="true">·</span>
                <span className="font-semibold text-amber-700">{currentQuestion.topic}</span>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                {/* Clean EN / HI Language Switcher */}
                <div
                  role="group"
                  aria-label="Question language"
                  className="inline-flex items-center rounded-lg border border-slate-200 bg-white p-0.5 shadow-2xs"
                >
                  <Languages
                    className="ml-1.5 mr-1 h-3.5 w-3.5 text-slate-400"
                    aria-hidden="true"
                  />
                  <button
                    type="button"
                    onClick={() => setLanguage('en')}
                    aria-pressed={language === 'en'}
                    className={`rounded-md px-2.5 py-1 text-xs font-bold transition-colors ${
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
                    className={`rounded-md px-2.5 py-1 text-xs font-bold transition-colors ${
                      language === 'hi'
                        ? 'bg-[#0F172A] text-white shadow-2xs'
                        : 'text-slate-600 hover:bg-slate-100 hover:text-[#0F172A]'
                    }`}
                  >
                    HI
                  </button>
                </div>

                <span className="font-mono text-xs font-semibold text-slate-600 tabular-nums">
                  Marks: +{test.positiveMarks}.0 / -{test.negativeMarks.toFixed(2)}
                </span>
              </div>
            </div>

            {/* Question Card */}
            <section className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 sm:p-7 shadow-xs">
              {language === 'hi' && !hasHindiForCurrent && (
                <div className="mb-3 inline-flex items-center rounded-md border border-amber-200 bg-amber-50 px-2.5 py-1 text-[11px] font-semibold text-amber-800">
                  Hindi translation unavailable for this question — showing English
                </div>
              )}

              {/* Reading Comprehension Passage Box */}
              {currentQuestion.passageEn && (
                <div className="mb-5 max-h-60 overflow-y-auto rounded-xl border border-slate-200 bg-[#F8FAFC] p-4 text-sm leading-relaxed text-slate-800 whitespace-pre-line">
                  <div className="mb-2 text-xs font-extrabold uppercase tracking-wider text-[#1E3A8A]">
                    Read the passage carefully
                  </div>
                  {currentQuestion.passageEn}
                </div>
              )}

              <h2 className="text-base sm:text-lg font-semibold leading-relaxed text-[#0F172A] whitespace-pre-line">
                {displayedQuestionText}
              </h2>

              {/* Structured Number Matrix (e.g., Q15) */}
              {currentQuestion.matrix && currentQuestion.matrix.length > 0 && (
                <div className="mt-4 inline-block overflow-hidden rounded-xl border border-slate-300 bg-[#F8FAFC] shadow-2xs">
                  <table className="border-collapse text-center font-mono text-sm sm:text-base font-bold text-[#0F172A] tabular-nums">
                    <tbody>
                      {currentQuestion.matrix.map((row, rIdx) => (
                        <tr key={rIdx} className="divide-x divide-slate-300 border-b border-slate-300 last:border-b-0">
                          {row.map((cell, cIdx) => (
                            <td
                              key={cIdx}
                              className={`h-11 w-14 sm:w-16 px-3 ${
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

              {/* Smooth 4 Option Selection Cards */}
              <div className="mt-6 space-y-3" role="radiogroup" aria-label="Answer options">
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
                      className={`group flex w-full min-h-[56px] items-center justify-between gap-3.5 rounded-xl border p-3.5 sm:p-4 text-left transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F172A] ${
                        isSelected
                          ? 'border-[#0F172A] bg-amber-50/85 text-[#0F172A] ring-1 ring-[#0F172A] shadow-xs'
                          : 'border-slate-200 bg-white text-slate-800 hover:-translate-y-[1px] hover:border-slate-300 hover:bg-slate-50/80 hover:shadow-xs'
                      }`}
                    >
                      <div className="flex items-center gap-3.5">
                        <span
                          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg font-mono text-xs font-bold transition-colors ${
                            isSelected
                              ? 'bg-[#0F172A] text-[#F59E0B]'
                              : 'bg-slate-100 text-slate-700 group-hover:bg-slate-200/80'
                          }`}
                        >
                          {letter}
                        </span>

                        <span
                          className={`text-sm sm:text-base leading-snug ${
                            isSelected ? 'font-bold text-[#0F172A]' : 'font-medium'
                          }`}
                        >
                          {optText}
                        </span>
                      </div>

                      {isSelected && (
                        <CheckCircle2
                          className="h-5 w-5 shrink-0 text-[#0F172A]"
                          aria-hidden="true"
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </section>
          </div>

          {/* Bottom CBT Action Bar */}
          <div className="mx-auto mt-6 w-full max-w-3xl border-t border-slate-200 pt-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={handleMarkForReviewAndNext}
                  className="inline-flex min-h-[44px] flex-1 sm:flex-none items-center justify-center gap-1.5 rounded-xl border border-purple-200 bg-purple-50 px-3.5 py-2 text-xs sm:text-sm font-semibold text-purple-800 transition-colors hover:bg-purple-100 whitespace-nowrap"
                >
                  <Flag className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>Mark for Review &amp; Next</span>
                </button>

                <button
                  type="button"
                  onClick={handleClearResponse}
                  disabled={currentResponse?.selectedIndex === null}
                  className="inline-flex min-h-[44px] items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs sm:text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100 disabled:opacity-45 disabled:pointer-events-none whitespace-nowrap"
                >
                  <Eraser className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>Clear Response</span>
                </button>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => jumpToQuestion(currentIndex - 1)}
                  disabled={currentIndex <= sectionStartIndex}
                  className="inline-flex min-h-[44px] items-center justify-center gap-1 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs sm:text-sm font-semibold text-slate-700 hover:bg-slate-100 disabled:opacity-40 disabled:pointer-events-none"
                >
                  <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                  <span>Prev</span>
                </button>

                <button
                  type="button"
                  onClick={handleSaveAndNext}
                  className="inline-flex min-h-[44px] flex-1 sm:flex-none items-center justify-center gap-1.5 rounded-xl bg-[#0F172A] px-5 py-2 text-xs sm:text-sm font-bold text-white shadow-xs transition-colors hover:bg-slate-800 whitespace-nowrap"
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

      {/* Submit Section / Submit Test Confirmation Modal */}
      {isSubmitModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4">
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="submit-modal-title"
            className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-xl"
          >
            <h2 id="submit-modal-title" className="text-lg font-bold text-[#0F172A]">
              {isStrictSectional && !isLastSection && activeSection
                ? `Submit Section ${activeSectionIndex + 1}: ${activeSection.shortName}?`
                : `Submit ${test.title}?`}
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              {isStrictSectional && !isLastSection && nextSection
                ? `Once submitted, this section will be locked and you will move immediately to Section ${activeSectionIndex + 2}: ${nextSection.name} (${nextSection.durationMinutes}:00 timer).`
                : 'Review your question summary before finalizing your submission.'}
            </p>

            <div className="mt-4 grid grid-cols-2 gap-3 text-sm tabular-nums">
              <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-3">
                <div className="text-xs font-medium text-emerald-700">Answered</div>
                <div className="mt-0.5 text-xl font-bold text-emerald-900">
                  {modalCounts.answered}
                </div>
              </div>
              <div className="rounded-xl border border-rose-200 bg-rose-50 p-3">
                <div className="text-xs font-medium text-rose-700">Not Answered</div>
                <div className="mt-0.5 text-xl font-bold text-rose-900">
                  {modalCounts.notAnswered}
                </div>
              </div>
              <div className="rounded-xl border border-purple-200 bg-purple-50 p-3">
                <div className="text-xs font-medium text-purple-700">Marked for Review</div>
                <div className="mt-0.5 text-xl font-bold text-purple-900">
                  {modalCounts.marked}
                </div>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                <div className="text-xs font-medium text-slate-600">Not Visited</div>
                <div className="mt-0.5 text-xl font-bold text-[#0F172A]">
                  {modalCounts.notVisited}
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setIsSubmitModalOpen(false)}
                className="min-h-[44px] rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100"
              >
                {isStrictSectional && !isLastSection ? 'Continue Section' : 'Resume Test'}
              </button>
              <button
                type="button"
                onClick={() => {
                  if (isStrictSectional && !isLastSection) {
                    handleAdvanceSection(false);
                  } else {
                    handleFinalizeSubmit(responses, secondsLeft, elapsedPriorSeconds);
                  }
                }}
                className="min-h-[44px] rounded-xl bg-[#F59E0B] px-5 py-2 text-sm font-bold text-[#0F172A] hover:bg-amber-400"
              >
                {isStrictSectional && !isLastSection ? 'Lock & Next Section' : 'Confirm Submit'}
              </button>
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
