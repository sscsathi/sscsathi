import { useCallback, useEffect, useMemo, useState } from 'react';
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
  onFinishTest: (result: ExamResult) => void;
  onExitTest: () => void;
}

const OPTION_LETTERS = ['A', 'B', 'C', 'D'] as const;

export function ExamInterface({
  test,
  onFinishTest,
  onExitTest,
}: ExamInterfaceProps) {
  const totalSeconds = test.durationMinutes * 60;
  const [secondsLeft, setSecondsLeft] = useState<number>(totalSeconds);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isDesktopPaletteOpen, setIsDesktopPaletteOpen] = useState<boolean>(true);
  const [isMobilePaletteOpen, setIsMobilePaletteOpen] = useState<boolean>(false);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState<boolean>(false);
  const [isExitModalOpen, setIsExitModalOpen] = useState<boolean>(false);
  const [language, setLanguage] = useState<QuestionLanguage>('en');

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
    (currentResponses: Record<string, QuestionResponse>, remainingSeconds: number) => {
      const timeTaken = Math.max(1, totalSeconds - remainingSeconds);
      const result = calculateExamResult(test, currentResponses, timeTaken);
      onFinishTest(result);
    },
    [onFinishTest, test, totalSeconds]
  );

  useEffect(() => {
    const interval = window.setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          window.clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    if (secondsLeft === 0) {
      handleFinalizeSubmit(responses, 0);
    }
  }, [secondsLeft, responses, handleFinalizeSubmit]);

  const jumpToQuestion = useCallback(
    (targetIdx: number) => {
      if (targetIdx < 0 || targetIdx >= test.questions.length) return;
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
    [test.questions]
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
      if (nextIdx < test.questions.length) {
        const nextQ = test.questions[nextIdx];
        if (nextMap[nextQ.id].status === 'not-visited') {
          nextMap[nextQ.id] = { ...nextMap[nextQ.id], status: 'not-answered' };
        }
      }
      return nextMap;
    });

    if (currentIndex + 1 < test.questions.length) {
      setCurrentIndex((i) => i + 1);
    }
  }, [currentIndex, currentQuestion.id, test.questions]);

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
      if (nextIdx < test.questions.length) {
        const nextQ = test.questions[nextIdx];
        if (nextMap[nextQ.id].status === 'not-visited') {
          nextMap[nextQ.id] = { ...nextMap[nextQ.id], status: 'not-answered' };
        }
      }
      return nextMap;
    });

    if (currentIndex + 1 < test.questions.length) {
      setCurrentIndex((i) => i + 1);
    }
  };

  // Keyboard shortcuts for quick CBT navigation
  useEffect(() => {
    if (isSubmitModalOpen || isExitModalOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if (e.key === '1' || e.key.toLowerCase() === 'a') handleSelectOption(0);
      else if (e.key === '2' || e.key.toLowerCase() === 'b') handleSelectOption(1);
      else if (e.key === '3' || e.key.toLowerCase() === 'c') handleSelectOption(2);
      else if (e.key === '4' || e.key.toLowerCase() === 'd') handleSelectOption(3);
      else if (e.key === 'ArrowRight') handleSaveAndNext();
      else if (e.key === 'ArrowLeft' && currentIndex > 0) jumpToQuestion(currentIndex - 1);
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
  ]);

  const statusCounts = useMemo(() => {
    let answered = 0;
    let notAnswered = 0;
    let marked = 0;
    let notVisited = 0;

    for (const q of test.questions) {
      const st = responses[q.id]?.status ?? 'not-visited';
      if (st === 'answered') answered += 1;
      else if (st === 'not-answered') notAnswered += 1;
      else if (st === 'marked' || st === 'answered-marked') marked += 1;
      else notVisited += 1;
    }

    return { answered, notAnswered, marked, notVisited };
  }, [responses, test.questions]);

  const attemptedCount = useMemo(
    () =>
      test.questions.filter((q) => responses[q.id]?.selectedIndex !== null).length,
    [responses, test.questions]
  );

  const isTimerLow = secondsLeft < 120;

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
        <div>
          <h2 className="text-sm font-bold text-[#0F172A]">Question Palette</h2>
          <p className="text-xs text-slate-500 tabular-nums">
            {attemptedCount} of {test.questions.length} answered
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
            {statusCounts.answered}
          </span>
          <span className="text-slate-700 font-semibold">Answered</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-rose-600 font-mono text-[11px] font-bold text-white tabular-nums">
            {statusCounts.notAnswered}
          </span>
          <span className="text-slate-700 font-semibold">Not Answered</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-purple-600 font-mono text-[11px] font-bold text-white tabular-nums">
            {statusCounts.marked}
          </span>
          <span className="text-slate-700 font-semibold">Marked for Review</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-slate-200 font-mono text-[11px] font-bold text-slate-700 tabular-nums">
            {statusCounts.notVisited}
          </span>
          <span className="text-slate-700 font-semibold">Not Visited</span>
        </div>
      </div>

      {/* Numbered Grid */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="grid grid-cols-5 gap-2.5">
          {test.questions.map((q, idx) => {
            const st = responses[q.id]?.status ?? 'not-visited';
            const isCurrent = idx === currentIndex;
            return (
              <button
                key={q.id}
                type="button"
                onClick={() => jumpToQuestion(idx)}
                aria-label={`Question ${idx + 1}, status ${st}`}
                aria-current={isCurrent ? 'step' : undefined}
                className={`relative flex h-11 w-full items-center justify-center rounded-lg border font-mono text-sm font-bold transition-all tabular-nums ${getPaletteButtonClass(
                  st,
                  isCurrent
                )}`}
              >
                {idx + 1}
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
          Submit Test
        </button>
      </div>
    </div>
  );

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
                SSC Sathi · Eduquity CBT
              </div>
              <h1 className="truncate text-sm sm:text-base font-bold text-white">
                {test.title}
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Bold Countdown Timer with subtle red pulse when under 2 minutes */}
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
              Submit Test
            </button>
          </div>
        </div>
      </header>

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

              <h2 className="text-base sm:text-lg font-semibold leading-relaxed text-[#0F172A]">
                {displayedQuestionText}
              </h2>

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
                  <span>Mark for Review & Next</span>
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
                  disabled={currentIndex === 0}
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
                    {currentIndex === test.questions.length - 1
                      ? 'Save Response'
                      : 'Save & Next'}
                  </span>
                  {currentIndex < test.questions.length - 1 && (
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

      {/* Submit Test Confirmation Modal */}
      {isSubmitModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4">
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="submit-modal-title"
            className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-xl"
          >
            <h2 id="submit-modal-title" className="text-lg font-bold text-[#0F172A]">
              Submit {test.title}?
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              Review your question summary before finalizing your submission.
            </p>

            <div className="mt-4 grid grid-cols-2 gap-3 text-sm tabular-nums">
              <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-3">
                <div className="text-xs font-medium text-emerald-700">Answered</div>
                <div className="mt-0.5 text-xl font-bold text-emerald-900">
                  {statusCounts.answered}
                </div>
              </div>
              <div className="rounded-xl border border-rose-200 bg-rose-50 p-3">
                <div className="text-xs font-medium text-rose-700">Not Answered</div>
                <div className="mt-0.5 text-xl font-bold text-rose-900">
                  {statusCounts.notAnswered}
                </div>
              </div>
              <div className="rounded-xl border border-purple-200 bg-purple-50 p-3">
                <div className="text-xs font-medium text-purple-700">Marked for Review</div>
                <div className="mt-0.5 text-xl font-bold text-purple-900">
                  {statusCounts.marked}
                </div>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                <div className="text-xs font-medium text-slate-600">Not Visited</div>
                <div className="mt-0.5 text-xl font-bold text-[#0F172A]">
                  {statusCounts.notVisited}
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setIsSubmitModalOpen(false)}
                className="min-h-[44px] rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100"
              >
                Resume Test
              </button>
              <button
                type="button"
                onClick={() => handleFinalizeSubmit(responses, secondsLeft)}
                className="min-h-[44px] rounded-xl bg-[#F59E0B] px-5 py-2 text-sm font-bold text-[#0F172A] hover:bg-amber-400"
              >
                Confirm Submit
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
