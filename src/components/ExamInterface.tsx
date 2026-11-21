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
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState<boolean>(false);
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

  // Touch swipe handlers for smooth Left (Save & Next) / Right (Prev) navigation within active section
  const handleQuestionTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    if (
      e.touches.length !== 1 ||
      isSubmitModalOpen ||
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

  const isTimerLow = secondsLeft < 120;
  const nextSection =
    isStrictSectional && !isLastSection ? sections[activeSectionIndex + 1] : undefined;

  const renderPaletteContent = () => (
    <div className="flex h-full flex-col bg-white">
      <div className="flex shrink-0 items-center justify-between border-b border-slate-200 px-4 py-3">
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

      {/* Numbered Grid (Strictly scoped to current section; displays global Q1..Q100 numbering) */}
      <div className="min-h-0 flex-1 overflow-y-auto p-3.5">
        <div className="grid grid-cols-5 gap-2">
          {activeScopeQuestions.map((q, localIdx) => {
            const globalIdx = sectionStartIndex + localIdx;
            const st = responses[q.id]?.status ?? 'not-visited';
            const visualState = toPaletteVisualState(st);
            const isCurrent = globalIdx === currentIndex;
            return (
              <button
                key={q.id}
                type="button"
                onClick={() => jumpToQuestion(globalIdx)}
                aria-label={`Question ${globalIdx + 1}, status ${visualState}`}
                aria-current={isCurrent ? 'step' : undefined}
                className="flex w-full items-start justify-center rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F172A]"
              >
                <PaletteSymbol
                  state={visualState}
                  label={globalIdx + 1}
                  size="grid"
                  isCurrent={isCurrent}
                  reserveTriangleSpace
                />
              </button>
            );
          })}
        </div>
      </div>

      <div className="shrink-0 border-t border-slate-200 p-3.5">
        <button
          type="button"
          onClick={() => setIsSubmitModalOpen(true)}
          className="w-full min-h-[42px] rounded-xl bg-[#F59E0B] px-4 py-2 text-sm font-bold text-[#0F172A] transition-colors hover:bg-amber-400"
        >
          {isStrictSectional && !isLastSection ? 'Submit Section →' : 'Submit Test'}
        </button>
      </div>
    </div>
  );

  const modalCounts = isStrictSectional && !isLastSection ? sectionStatusCounts : overallStatusCounts;

  return (
    <div className="flex h-[100dvh] flex-col overflow-hidden bg-[#F8FAFC]">
      {/* Royal Navy CBT Top Bar */}
      <header className="shrink-0 z-30 border-b border-slate-800 bg-[#0F172A] text-white shadow-xs">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-2 px-2.5 py-1.5 sm:gap-3 sm:px-6 sm:py-2">
          <div className="flex min-w-0 items-center gap-2">
            <button
              type="button"
              onClick={() => setIsExitModalOpen(true)}
              className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-slate-700 bg-slate-800/80 text-slate-200 hover:bg-slate-700 hover:text-white sm:h-9 sm:w-9"
              aria-label="Exit exam"
              title="Exit exam"
            >
              <ChevronLeft className="h-4 w-4" aria-hidden="true" />
            </button>
            <img
              src="/assets/aistudio/1795032296907_b1ef824a.png"
              alt="SSC Sathi logo"
              className="hidden h-7 w-7 shrink-0 rounded-full bg-white object-cover ring-1 ring-amber-400/40 sm:block"
            />
            <div className="min-w-0">
              <div className="text-[10px] font-semibold uppercase tracking-wider text-[#F59E0B] leading-tight">
                {isStrictSectional
                  ? `SSC Sathi · Sec ${activeSectionIndex + 1}/${sections.length}`
                  : 'SSC Sathi · CBT Mode'}
              </div>
              <h1 className="truncate text-xs sm:text-sm font-bold text-white leading-tight">
                {test.title}
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            {/* Bold Section/Test Countdown Timer */}
            <div
              role="timer"
              aria-live="off"
              className={`inline-flex items-center gap-1 rounded-lg border px-2 py-1 sm:px-3 sm:py-1.5 font-mono text-xs sm:text-sm font-extrabold tabular-nums transition-colors ${
                isTimerLow
                  ? 'animate-pulse border-rose-400 bg-rose-600/25 text-rose-200 shadow-xs shadow-rose-500/25'
                  : 'border-amber-400/35 bg-slate-800 text-[#F59E0B]'
              }`}
            >
              <Clock className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
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
              className="inline-flex h-8 items-center gap-1 rounded-lg border border-slate-700 bg-slate-800 px-2 text-xs font-semibold text-slate-200 hover:bg-slate-700 hover:text-white sm:h-9 sm:px-2.5"
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
              className="inline-flex h-8 items-center justify-center rounded-lg bg-[#F59E0B] px-2.5 sm:h-9 sm:px-3.5 text-[11px] sm:text-xs font-bold text-[#0F172A] transition-colors hover:bg-amber-400 whitespace-nowrap"
            >
              {isStrictSectional && !isLastSection ? 'Submit Sec' : 'Submit'}
            </button>
          </div>
        </div>

        {/* Strict Sectional Lock Bar */}
        {isStrictSectional && (
          <div className="border-t border-slate-800 bg-slate-900/95">
            <div className="mx-auto flex max-w-[1440px] items-center gap-1.5 overflow-x-auto px-2.5 py-1.5 sm:gap-2 sm:px-6">
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
                    className={`inline-flex shrink-0 items-center gap-1 rounded-md border px-2 py-1 text-[11px] font-bold whitespace-nowrap tabular-nums sm:text-xs ${
                      isCurrent
                        ? 'border-[#F59E0B] bg-[#1E3A8A] text-white shadow-xs'
                        : isDone
                          ? 'border-emerald-700/60 bg-emerald-950/60 text-emerald-300'
                          : 'border-slate-700/70 bg-slate-800/50 text-slate-400'
                    }`}
                  >
                    {isDone ? (
                      <CheckCircle2 className="h-3 w-3 shrink-0 text-emerald-400" aria-hidden="true" />
                    ) : isLocked ? (
                      <Lock className="h-2.5 w-2.5 shrink-0 text-slate-500" aria-hidden="true" />
                    ) : (
                      <Clock className="h-3 w-3 shrink-0 text-[#F59E0B]" aria-hidden="true" />
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
        <div className="shrink-0 border-b border-amber-200 bg-amber-50 px-3 py-1.5 text-center text-xs font-bold text-amber-950">
          {sectionNotice}
        </div>
      )}

      {/* Main CBT Workspace */}
      <div className="mx-auto flex min-h-0 w-full max-w-[1440px] flex-1 overflow-hidden">
        {/* Question Canvas — Pinned Sub-toolbar, Flex Middle Card, Pinned Bottom Action Bar */}
        <main className="flex min-h-0 flex-1 flex-col overflow-hidden">
          {/* Sub-toolbar: Question Index, EN / HI Switcher & Marks */}
          <div className="shrink-0 border-b border-slate-200 bg-white px-3 py-1.5 sm:px-6 sm:py-2.5">
            <div className="mx-auto flex w-full max-w-3xl items-center justify-between gap-2">
              <div className="flex min-w-0 items-center gap-1.5 text-xs sm:text-sm">
                <span className="shrink-0 font-bold text-[#0F172A] tabular-nums">
                  Q{currentIndex + 1}/{test.questions.length}
                </span>
                <span className="text-slate-300" aria-hidden="true">·</span>
                <span className="truncate font-semibold text-amber-700">
                  {currentQuestion.topic}
                </span>
              </div>

              <div className="flex shrink-0 items-center gap-2 sm:gap-3">
                {/* Clean EN / HI Language Switcher */}
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

                <span className="font-mono text-[11px] sm:text-xs font-semibold text-slate-600 tabular-nums whitespace-nowrap">
                  +{test.positiveMarks}/-{test.negativeMarks.toFixed(2)}
                </span>
              </div>
            </div>
          </div>

          {/* Middle Question & 4 Options Area (Touch Swipe Left: Save & Next, Right: Prev) */}
          <div
            onTouchStart={handleQuestionTouchStart}
            onTouchMove={handleQuestionTouchMove}
            onTouchEnd={handleQuestionTouchEnd}
            onTouchCancel={handleQuestionTouchCancel}
            className="min-h-0 flex-1 overflow-y-auto overflow-x-hidden touch-pan-y px-2.5 py-2 sm:px-6 sm:py-4"
          >
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
              {language === 'hi' && !hasHindiForCurrent && (
                <div className="mb-2 inline-flex items-center rounded-md border border-amber-200 bg-amber-50 px-2 py-0.5 text-[11px] font-semibold text-amber-800">
                  Hindi translation unavailable for this question — showing English
                </div>
              )}

              {/* Reading Comprehension Passage Box */}
              {currentQuestion.passageEn && (
                <div className="mb-2.5 max-h-28 sm:max-h-44 overflow-y-auto rounded-lg border border-slate-200 bg-[#F8FAFC] p-2.5 sm:p-3.5 text-xs sm:text-sm leading-relaxed text-slate-800 whitespace-pre-line">
                  <div className="mb-1 text-[10px] sm:text-xs font-extrabold uppercase tracking-wider text-[#1E3A8A]">
                    Read the passage carefully
                  </div>
                  {currentQuestion.passageEn}
                </div>
              )}

              <h2 className="text-[13.5px] sm:text-base font-semibold leading-snug sm:leading-relaxed text-[#0F172A] whitespace-pre-line">
                {displayedQuestionText}
              </h2>

              {/* Structured Number Matrix (e.g., Q15) */}
              {currentQuestion.matrix && currentQuestion.matrix.length > 0 && (
                <div className="mt-2.5 inline-block overflow-hidden rounded-lg border border-slate-300 bg-[#F8FAFC] shadow-2xs">
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
                              className={`h-8 w-12 sm:h-10 sm:w-14 px-2 ${
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

              {/* Compact 4 Option Selection Cards */}
              <div className="mt-2.5 sm:mt-4 space-y-1.5 sm:space-y-2.5" role="radiogroup" aria-label="Answer options">
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
                      className={`group flex w-full min-h-[42px] sm:min-h-[50px] items-center justify-between gap-2.5 rounded-xl border px-2.5 py-2 sm:px-4 sm:py-3 text-left transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F172A] ${
                        isSelected
                          ? 'border-[#0F172A] bg-amber-50/85 text-[#0F172A] ring-1 ring-[#0F172A] shadow-xs'
                          : 'border-slate-200 bg-white text-slate-800 hover:border-slate-300 hover:bg-slate-50/80'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 sm:gap-3">
                        <span
                          className={`flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-lg font-mono text-xs font-bold transition-colors ${
                            isSelected
                              ? 'bg-[#0F172A] text-[#F59E0B]'
                              : 'bg-slate-100 text-slate-700 group-hover:bg-slate-200/80'
                          }`}
                        >
                          {letter}
                        </span>

                        <span
                          className={`text-[13px] sm:text-sm leading-snug ${
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
            </motion.section>
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
              <div className="flex items-start gap-2.5 rounded-xl border border-blue-200 bg-blue-50/70 p-3">
                <div className="w-6 shrink-0 pt-0.5">
                  <PaletteSymbol state="not-attempted" label={modalCounts.notAttempted} size="sm" />
                </div>
                <div>
                  <div className="text-[11px] font-semibold text-blue-900 leading-tight">
                    Not Attempted
                  </div>
                  <div className="mt-0.5 text-lg font-bold text-[#1D4ED8]">
                    {modalCounts.notAttempted}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-2.5 rounded-xl border border-green-200 bg-green-50/70 p-3">
                <div className="w-6 shrink-0 pt-0.5">
                  <PaletteSymbol state="answered" label={modalCounts.answered} size="sm" />
                </div>
                <div>
                  <div className="text-[11px] font-semibold text-green-900 leading-tight">
                    Answered
                  </div>
                  <div className="mt-0.5 text-lg font-bold text-[#16A34A]">
                    {modalCounts.answered}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-2.5 rounded-xl border border-red-200 bg-red-50/70 p-3">
                <div className="w-6 shrink-0 pt-0.5">
                  <PaletteSymbol state="marked" label={modalCounts.markedNotAttempted} size="sm" />
                </div>
                <div>
                  <div className="text-[11px] font-semibold text-red-900 leading-tight">
                    Not Attempted &amp; Review
                  </div>
                  <div className="mt-0.5 text-lg font-bold text-[#DC2626]">
                    {modalCounts.markedNotAttempted}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-2.5 rounded-xl border border-amber-200 bg-amber-50/70 p-3">
                <div className="w-6 shrink-0 pt-0.5">
                  <PaletteSymbol
                    state="answered-marked"
                    label={modalCounts.answeredMarked}
                    size="sm"
                  />
                </div>
                <div>
                  <div className="text-[11px] font-semibold text-amber-950 leading-tight">
                    Answered &amp; Review
                  </div>
                  <div className="mt-0.5 text-lg font-bold text-amber-800">
                    {modalCounts.answeredMarked}
                  </div>
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
