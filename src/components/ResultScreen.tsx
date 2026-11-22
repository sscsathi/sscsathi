import { useMemo, useState } from 'react';
import {
  ArrowLeft,
  Award,
  CheckCircle2,
  ChevronDown,
  Clock,
  History,
  Languages,
  MinusCircle,
  RotateCcw,
  Target,
  TrendingUp,
  Trophy,
  XCircle,
} from 'lucide-react';
import { ExamResult, MockTest, OptionIndex, QuestionLanguage } from '../types/exam';
import { estimatePercentile, formatDurationVerbose } from '../utils/scoring';
import { MathText } from './MathText';

interface ResultScreenProps {
  result: ExamResult;
  attemptsForTest: ExamResult[];
  test: MockTest | undefined;
  initialTab?: 'scorecard' | 'solutions';
  onSelectAttempt: (attempt: ExamResult) => void;
  onBackHome: () => void;
  onRetakeTest: (test: MockTest) => void;
}

const OPTION_LETTERS = ['A', 'B', 'C', 'D'] as const;

type SolutionFilter = 'all' | 'correct' | 'incorrect' | 'unattempted';

export function ResultScreen({
  result,
  attemptsForTest,
  test,
  initialTab = 'scorecard',
  onSelectAttempt,
  onBackHome,
  onRetakeTest,
}: ResultScreenProps) {
  const [activeTab, setActiveTab] = useState<'scorecard' | 'solutions'>(initialTab);
  const [solutionFilter, setSolutionFilter] = useState<SolutionFilter>('all');
  const [selectedSectionId, setSelectedSectionId] = useState<string>('all');
  const [solutionLang, setSolutionLang] = useState<QuestionLanguage>('en');

  const activeAttemptIndex = useMemo(() => {
    const idx = attemptsForTest.findIndex((a) => a.attemptId === result.attemptId);
    return idx >= 0 ? idx : attemptsForTest.length - 1;
  }, [attemptsForTest, result.attemptId]);

  const isBilingualTest = useMemo(
    () => Boolean(test?.questions.some((q) => Boolean(q.questionHi))),
    [test]
  );

  const positiveMarks = test?.positiveMarks ?? 2;
  const negativeMarks = test?.negativeMarks ?? 0.5;
  const testSections = test?.sections ?? [];

  const topicBreakdown = useMemo(() => {
    if (!test) return [];
    const map: Record<
      string,
      { topic: string; total: number; correct: number; incorrect: number; unattempted: number }
    > = {};

    for (const q of test.questions) {
      if (!map[q.topic]) {
        map[q.topic] = {
          topic: q.topic,
          total: 0,
          correct: 0,
          incorrect: 0,
          unattempted: 0,
        };
      }
      map[q.topic].total += 1;
      const selected = result.responses[q.id]?.selectedIndex ?? null;
      if (selected === null) map[q.topic].unattempted += 1;
      else if (selected === q.correctIndex) map[q.topic].correct += 1;
      else map[q.topic].incorrect += 1;
    }

    return Object.values(map);
  }, [result.responses, test]);

  const sectionBreakdown = useMemo(() => {
    if (!test || testSections.length === 0) return [];
    return testSections.map((sec) => {
      const slice = test.questions.slice(sec.startIndex, sec.endIndex + 1);
      let correct = 0;
      let incorrect = 0;
      let unattempted = 0;
      for (const q of slice) {
        const selected = result.responses[q.id]?.selectedIndex ?? null;
        if (selected === null) unattempted += 1;
        else if (selected === q.correctIndex) correct += 1;
        else incorrect += 1;
      }
      const attempted = correct + incorrect;
      const score = Number((correct * positiveMarks - incorrect * negativeMarks).toFixed(2));
      const maxScore = slice.length * positiveMarks;
      const accuracy = attempted > 0 ? Math.round((correct / attempted) * 100) : 0;
      return {
        ...sec,
        total: slice.length,
        attempted,
        correct,
        incorrect,
        unattempted,
        score,
        maxScore,
        accuracy,
      };
    });
  }, [negativeMarks, positiveMarks, result.responses, test, testSections]);

  const filteredQuestions = useMemo(() => {
    if (!test) return [];
    const activeSec =
      selectedSectionId === 'all'
        ? undefined
        : testSections.find((s) => s.id === selectedSectionId);

    const baseSlice = activeSec
      ? test.questions.slice(activeSec.startIndex, activeSec.endIndex + 1)
      : test.questions;

    return baseSlice.filter((q) => {
      const selected = result.responses[q.id]?.selectedIndex ?? null;
      if (solutionFilter === 'correct') return selected === q.correctIndex;
      if (solutionFilter === 'incorrect')
        return selected !== null && selected !== q.correctIndex;
      if (solutionFilter === 'unattempted') return selected === null;
      return true;
    });
  }, [result.responses, selectedSectionId, solutionFilter, test, testSections]);

  const positiveEarned = result.correctCount * positiveMarks;
  const negativeDeducted = result.incorrectCount * negativeMarks;
  const scorePercent =
    result.maxScore > 0
      ? Math.max(0, Math.round((result.score / result.maxScore) * 100))
      : 0;
  const percentileEstimate = estimatePercentile(result.score, result.maxScore);
  const attemptedCount = result.correctCount + result.incorrectCount;
  const avgSecPerAttempt =
    attemptedCount > 0 ? Math.round(result.timeTakenSeconds / attemptedCount) : 0;

  const correctPctBar =
    result.totalQuestions > 0
      ? (result.correctCount / result.totalQuestions) * 100
      : 0;
  const incorrectPctBar =
    result.totalQuestions > 0
      ? (result.incorrectCount / result.totalQuestions) * 100
      : 0;
  const unattemptedPctBar =
    result.totalQuestions > 0
      ? (result.unattemptedCount / result.totalQuestions) * 100
      : 0;

  const jumpToSolutions = (filter: SolutionFilter) => {
    setSolutionFilter(filter);
    setActiveTab('solutions');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
      {/* Header Bar */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <button
            type="button"
            onClick={onBackHome}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0F172A] hover:text-amber-700"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Back to All Mock Tests</span>
          </button>
          <h1 className="mt-1.5 text-2xl font-extrabold text-[#0F172A]">
            {result.testTitle}
          </h1>
          <p className="mt-0.5 text-xs text-slate-500">
            Submitted on {new Date(result.submittedAt).toLocaleString()} · Marking: +{positiveMarks} / -{negativeMarks.toFixed(2)}
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          {test && (
            <button
              type="button"
              onClick={() => onRetakeTest(test)}
              className="inline-flex min-h-[44px] items-center gap-2 rounded-xl bg-[#F59E0B] px-4 py-2 text-sm font-bold text-[#0F172A] shadow-xs transition-colors hover:bg-amber-400 whitespace-nowrap"
            >
              <RotateCcw className="h-4 w-4" aria-hidden="true" />
              <span>Re-Attempt Test</span>
            </button>
          )}
        </div>
      </div>

      {/* Select Attempt Switcher Bar */}
      {attemptsForTest.length > 0 && (
        <section
          aria-label="Select test attempt"
          className="mt-5 flex flex-col gap-3 rounded-2xl border border-[#E2E8F0] bg-[#FFFFFF] px-4 py-3.5 shadow-xs sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-[#1E3A8A]">
              <History className="h-4 w-4" aria-hidden="true" />
            </div>
            <div className="min-w-0">
              {attemptsForTest.length > 5 ? (
                <label
                  htmlFor="attempt-selector-dropdown"
                  className="block text-xs font-extrabold uppercase tracking-wider text-[#0F172A]"
                >
                  Select Attempt
                </label>
              ) : (
                <span className="block text-xs font-extrabold uppercase tracking-wider text-[#0F172A]">
                  Select Attempt
                </span>
              )}
              <p className="text-[11px] text-slate-500 tabular-nums">
                Viewing Attempt {activeAttemptIndex + 1} of {attemptsForTest.length} · Score{' '}
                {result.score}/{result.maxScore} ({result.accuracyPercent}%)
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {attemptsForTest.length <= 5 ? (
              <div
                role="group"
                aria-label="Attempt history pills"
                className="flex flex-wrap items-center gap-1.5"
              >
                {attemptsForTest.map((attempt, idx) => {
                  const isSelected = attempt.attemptId === result.attemptId;
                  const isLatest = idx === attemptsForTest.length - 1;
                  const label = isLatest
                    ? `Attempt ${idx + 1} (Latest)`
                    : `Attempt ${idx + 1}`;
                  return (
                    <button
                      key={attempt.attemptId}
                      type="button"
                      onClick={() => onSelectAttempt(attempt)}
                      aria-pressed={isSelected}
                      className={`min-h-[36px] rounded-full px-3.5 py-1.5 text-xs font-bold transition-all whitespace-nowrap tabular-nums ${
                        isSelected
                          ? 'bg-[#1E3A8A] text-white shadow-xs'
                          : 'border border-[#E2E8F0] bg-[#F8FAFC] text-slate-700 hover:border-indigo-300 hover:bg-indigo-50/60 hover:text-[#1E3A8A]'
                      }`}
                    >
                      {label}
                    </button>
                  );
                })}
              </div>
            ) : (
              <div className="relative w-full sm:w-auto">
                <select
                  id="attempt-selector-dropdown"
                  value={result.attemptId}
                  onChange={(e) => {
                    const found = attemptsForTest.find(
                      (attempt) => attempt.attemptId === e.target.value
                    );
                    if (found) onSelectAttempt(found);
                  }}
                  className="min-h-[40px] w-full appearance-none rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] py-2 pl-3.5 pr-9 text-xs sm:text-sm font-bold text-[#0F172A] shadow-2xs transition-colors hover:border-indigo-300 focus:border-[#1E3A8A] focus:bg-white focus:outline-none tabular-nums sm:min-w-[240px]"
                >
                  {attemptsForTest.map((attempt, idx) => {
                    const isLatest = idx === attemptsForTest.length - 1;
                    const label = isLatest
                      ? `Attempt ${idx + 1} (Latest)`
                      : `Attempt ${idx + 1}`;
                    return (
                      <option key={attempt.attemptId} value={attempt.attemptId}>
                        {label} — {attempt.score}/{attempt.maxScore} ({attempt.accuracyPercent}%)
                      </option>
                    );
                  })}
                </select>
                <ChevronDown
                  className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500"
                  aria-hidden="true"
                />
              </div>
            )}
          </div>
        </section>
      )}

      {/* Primary Tabs: Scorecard vs Solutions */}
      <div
        className="mt-6 inline-flex rounded-xl border border-slate-200 bg-white p-1 shadow-2xs"
        role="tablist"
        aria-label="Result sections"
      >
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'scorecard'}
          onClick={() => setActiveTab('scorecard')}
          className={`rounded-lg px-4 py-2 text-sm font-semibold transition-colors whitespace-nowrap ${
            activeTab === 'scorecard'
              ? 'bg-[#0F172A] text-white shadow-xs'
              : 'text-slate-600 hover:bg-slate-100 hover:text-[#0F172A]'
          }`}
        >
          Performance Dashboard
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'solutions'}
          onClick={() => setActiveTab('solutions')}
          className={`rounded-lg px-4 py-2 text-sm font-semibold transition-colors whitespace-nowrap tabular-nums ${
            activeTab === 'solutions'
              ? 'bg-[#0F172A] text-white shadow-xs'
              : 'text-slate-600 hover:bg-slate-100 hover:text-[#0F172A]'
          }`}
        >
          Solutions Review ({test?.questions.length ?? result.totalQuestions})
        </button>
      </div>

      {/* TAB 1: PERFORMANCE DASHBOARD */}
      {activeTab === 'scorecard' && (
        <div className="mt-6 space-y-6">
          {/* 4-Column KPI Strip */}
          <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl bg-[#0F172A] p-5 text-white shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wide text-[#F59E0B]">
                  Score (+2 / -0.50)
                </span>
                <Trophy className="h-5 w-5 text-[#F59E0B]" aria-hidden="true" />
              </div>
              <div className="mt-2.5 flex items-baseline gap-1.5 tabular-nums">
                <span className="text-3xl font-extrabold text-white">{result.score}</span>
                <span className="text-base font-medium text-slate-300">
                  / {result.maxScore}
                </span>
              </div>
              <p className="mt-2 text-xs text-slate-300 tabular-nums">
                +{positiveEarned} earned · -{negativeDeducted.toFixed(2)} negative ({scorePercent}%)
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                  Accuracy
                </span>
                <Target className="h-5 w-5 text-emerald-600" aria-hidden="true" />
              </div>
              <div className="mt-2.5 text-3xl font-extrabold text-[#0F172A] tabular-nums">
                {result.accuracyPercent}%
              </div>
              <p className="mt-2 text-xs text-slate-500 tabular-nums">
                {result.correctCount} correct of {attemptedCount} attempted
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                  Est. Percentile
                </span>
                <TrendingUp className="h-5 w-5 text-[#F59E0B]" aria-hidden="true" />
              </div>
              <div className="mt-2.5 text-3xl font-extrabold text-[#0F172A] tabular-nums">
                {percentileEstimate}%ile
              </div>
              <p className="mt-2 text-xs text-slate-500 flex items-center gap-1">
                <Award className="h-3.5 w-3.5 text-[#F59E0B]" aria-hidden="true" />
                <span>Projected SSC rank curve</span>
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                  Time Taken
                </span>
                <Clock className="h-5 w-5 text-[#0F172A]" aria-hidden="true" />
              </div>
              <div className="mt-2.5 text-3xl font-extrabold text-[#0F172A] tabular-nums">
                {formatDurationVerbose(result.timeTakenSeconds)}
              </div>
              <p className="mt-2 text-xs text-slate-500 tabular-nums">
                {avgSecPerAttempt > 0
                  ? `${avgSecPerAttempt}s/Q avg · ${formatDurationVerbose(result.totalDurationSeconds)} total`
                  : `Out of ${formatDurationVerbose(result.totalDurationSeconds)} allotted`}
              </p>
            </div>
          </section>

          {/* Attempt Distribution & Interactive Filter Shortcut Cards */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-xs">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h2 className="text-base font-bold text-[#0F172A]">Question Breakdown</h2>
              <span className="text-xs text-slate-500">
                Click any category card to inspect those questions
              </span>
            </div>

            {/* Proportional Visual Bar */}
            <div className="mt-4 flex h-3 w-full overflow-hidden rounded-full bg-slate-100">
              {correctPctBar > 0 && (
                <div
                  style={{ width: `${correctPctBar}%` }}
                  className="bg-emerald-500 transition-all"
                  title={`Correct: ${result.correctCount}`}
                />
              )}
              {incorrectPctBar > 0 && (
                <div
                  style={{ width: `${incorrectPctBar}%` }}
                  className="bg-rose-500 transition-all"
                  title={`Incorrect: ${result.incorrectCount}`}
                />
              )}
              {unattemptedPctBar > 0 && (
                <div
                  style={{ width: `${unattemptedPctBar}%` }}
                  className="bg-slate-300 transition-all"
                  title={`Unattempted: ${result.unattemptedCount}`}
                />
              )}
            </div>

            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3 tabular-nums">
              <button
                type="button"
                onClick={() => jumpToSolutions('correct')}
                className="flex items-center justify-between rounded-xl border border-emerald-200 bg-emerald-50/70 p-4 text-left transition-colors hover:bg-emerald-100/70"
              >
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" aria-hidden="true" />
                  <div>
                    <div className="text-xs font-semibold text-emerald-900">Correct</div>
                    <div className="text-xs text-emerald-700">+{positiveMarks} each</div>
                  </div>
                </div>
                <span className="text-2xl font-extrabold text-emerald-900">
                  {result.correctCount}
                </span>
              </button>

              <button
                type="button"
                onClick={() => jumpToSolutions('incorrect')}
                className="flex items-center justify-between rounded-xl border border-rose-200 bg-rose-50/70 p-4 text-left transition-colors hover:bg-rose-100/70"
              >
                <div className="flex items-center gap-2.5">
                  <XCircle className="h-5 w-5 text-rose-600 shrink-0" aria-hidden="true" />
                  <div>
                    <div className="text-xs font-semibold text-rose-900">Incorrect</div>
                    <div className="text-xs text-rose-700">-{negativeMarks.toFixed(2)} each</div>
                  </div>
                </div>
                <span className="text-2xl font-extrabold text-rose-900">
                  {result.incorrectCount}
                </span>
              </button>

              <button
                type="button"
                onClick={() => jumpToSolutions('unattempted')}
                className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 p-4 text-left transition-colors hover:bg-slate-100"
              >
                <div className="flex items-center gap-2.5">
                  <MinusCircle className="h-5 w-5 text-slate-500 shrink-0" aria-hidden="true" />
                  <div>
                    <div className="text-xs font-semibold text-slate-800">Unattempted</div>
                    <div className="text-xs text-slate-500">0 marks</div>
                  </div>
                </div>
                <span className="text-2xl font-extrabold text-[#0F172A]">
                  {result.unattemptedCount}
                </span>
              </button>
            </div>

            {/* Section-wise Performance Table (for 4-section Full Mocks) */}
            {sectionBreakdown.length > 0 && (
              <div className="mt-6">
                <h3 className="text-sm font-bold text-[#0F172A]">Section-wise Performance</h3>
                <div className="mt-3 overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left text-sm">
                    <thead className="border-b border-slate-200 bg-slate-50 text-xs font-semibold text-slate-600">
                      <tr>
                        <th className="px-4 py-2.5">Section</th>
                        <th className="px-4 py-2.5 text-right">Attempted</th>
                        <th className="px-4 py-2.5 text-right">Correct</th>
                        <th className="px-4 py-2.5 text-right">Incorrect</th>
                        <th className="px-4 py-2.5 text-right">Accuracy</th>
                        <th className="px-4 py-2.5 text-right">Score</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 tabular-nums">
                      {sectionBreakdown.map((sec) => (
                        <tr key={sec.id}>
                          <td className="px-4 py-2.5 font-semibold text-[#0F172A]">
                            <div>{sec.name}</div>
                            <div className="text-[11px] font-normal text-slate-500">
                              Q{sec.startIndex + 1}–Q{sec.endIndex + 1} · {sec.durationMinutes} Mins
                            </div>
                          </td>
                          <td className="px-4 py-2.5 text-right text-slate-600">
                            {sec.attempted}/{sec.total}
                          </td>
                          <td className="px-4 py-2.5 text-right font-semibold text-emerald-700">
                            {sec.correct}
                          </td>
                          <td className="px-4 py-2.5 text-right font-semibold text-rose-700">
                            {sec.incorrect}
                          </td>
                          <td className="px-4 py-2.5 text-right text-slate-700">
                            {sec.accuracy}%
                          </td>
                          <td className="px-4 py-2.5 text-right font-bold text-[#1E3A8A]">
                            {sec.score}/{sec.maxScore}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Topic-wise Breakdown Table */}
            {topicBreakdown.length > 0 && (
              <div className="mt-6">
                <h3 className="text-sm font-bold text-[#0F172A]">Topic-wise Performance</h3>
                <div className="mt-3 overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left text-sm">
                    <thead className="border-b border-slate-200 bg-slate-50 text-xs font-semibold text-slate-600">
                      <tr>
                        <th className="px-4 py-2.5">Topic</th>
                        <th className="px-4 py-2.5 text-right">Questions</th>
                        <th className="px-4 py-2.5 text-right">Correct</th>
                        <th className="px-4 py-2.5 text-right">Incorrect</th>
                        <th className="px-4 py-2.5 text-right">Skipped</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 tabular-nums">
                      {topicBreakdown.map((row) => (
                        <tr key={row.topic}>
                          <td className="px-4 py-2.5 font-medium text-[#0F172A]">
                            {row.topic}
                          </td>
                          <td className="px-4 py-2.5 text-right text-slate-600">{row.total}</td>
                          <td className="px-4 py-2.5 text-right font-semibold text-emerald-700">
                            {row.correct}
                          </td>
                          <td className="px-4 py-2.5 text-right font-semibold text-rose-700">
                            {row.incorrect}
                          </td>
                          <td className="px-4 py-2.5 text-right text-slate-500">
                            {row.unattempted}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={() => jumpToSolutions('all')}
                className="min-h-[44px] rounded-xl bg-[#0F172A] px-5 py-2.5 text-sm font-bold text-white hover:bg-slate-800"
              >
                Review All Solutions
              </button>
            </div>
          </section>
        </div>
      )}

      {/* TAB 2: SOLUTIONS REVIEW */}
      {activeTab === 'solutions' && (
        <div className="mt-6 space-y-5">
          {!test ? (
            <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center text-sm text-slate-600">
              This custom test was deleted, so detailed question text is no longer available.
            </div>
          ) : (
            <>
              {testSections.length > 0 && (
                <div
                  role="tablist"
                  aria-label="Filter solutions by section"
                  className="flex flex-wrap items-center gap-1.5 rounded-xl border border-slate-200 bg-white p-1.5 shadow-2xs"
                >
                  <button
                    type="button"
                    role="tab"
                    aria-selected={selectedSectionId === 'all'}
                    onClick={() => setSelectedSectionId('all')}
                    className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-colors whitespace-nowrap tabular-nums ${
                      selectedSectionId === 'all'
                        ? 'bg-[#1E3A8A] text-white shadow-2xs'
                        : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    All Sections ({test.questions.length})
                  </button>
                  {testSections.map((sec) => {
                    const active = selectedSectionId === sec.id;
                    return (
                      <button
                        key={sec.id}
                        type="button"
                        role="tab"
                        aria-selected={active}
                        onClick={() => setSelectedSectionId(sec.id)}
                        className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-colors whitespace-nowrap tabular-nums ${
                          active
                            ? 'bg-[#1E3A8A] text-white shadow-2xs'
                            : 'text-slate-600 hover:bg-slate-100'
                        }`}
                      >
                        {sec.shortName} (Q{sec.startIndex + 1}–{sec.endIndex + 1})
                      </button>
                    );
                  })}
                </div>
              )}

              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-1 rounded-xl border border-slate-200 bg-white p-1 w-fit shadow-2xs">
                  {(
                    [
                      { id: 'all', label: `All (${test.questions.length})` },
                      { id: 'correct', label: `Correct (${result.correctCount})` },
                      { id: 'incorrect', label: `Incorrect (${result.incorrectCount})` },
                      { id: 'unattempted', label: `Unattempted (${result.unattemptedCount})` },
                    ] as const
                  ).map((f) => (
                    <button
                      key={f.id}
                      type="button"
                      onClick={() => setSolutionFilter(f.id)}
                      className={`rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-colors whitespace-nowrap tabular-nums ${
                        solutionFilter === f.id
                          ? 'bg-[#0F172A] text-white'
                          : 'text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>

                {isBilingualTest && (
                  <div
                    role="group"
                    aria-label="Solution language"
                    className="inline-flex items-center rounded-lg border border-slate-200 bg-white p-0.5 shadow-2xs"
                  >
                    <Languages
                      className="ml-1.5 mr-1 h-3.5 w-3.5 text-slate-400"
                      aria-hidden="true"
                    />
                    <button
                      type="button"
                      onClick={() => setSolutionLang('en')}
                      aria-pressed={solutionLang === 'en'}
                      className={`rounded-md px-2.5 py-1 text-xs font-bold transition-colors ${
                        solutionLang === 'en'
                          ? 'bg-[#0F172A] text-white shadow-2xs'
                          : 'text-slate-600 hover:bg-slate-100 hover:text-[#0F172A]'
                      }`}
                    >
                      EN
                    </button>
                    <button
                      type="button"
                      onClick={() => setSolutionLang('hi')}
                      aria-pressed={solutionLang === 'hi'}
                      className={`rounded-md px-2.5 py-1 text-xs font-bold transition-colors ${
                        solutionLang === 'hi'
                          ? 'bg-[#0F172A] text-white shadow-2xs'
                          : 'text-slate-600 hover:bg-slate-100 hover:text-[#0F172A]'
                      }`}
                    >
                      HI
                    </button>
                  </div>
                )}
              </div>

              {filteredQuestions.length === 0 ? (
                <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center text-sm text-slate-600">
                  No questions match this filter.
                </div>
              ) : (
                <div className="space-y-4">
                  {filteredQuestions.map((q) => {
                    const qNumber = test.questions.findIndex((item) => item.id === q.id) + 1;
                    const selected = result.responses[q.id]?.selectedIndex ?? null;
                    const isCorrect = selected === q.correctIndex;
                    const isUnattempted = selected === null;

                    return (
                      <article
                        key={q.id}
                        className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-xs"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                          <div className="text-xs font-semibold text-slate-600 tabular-nums">
                            <span className="text-[#0F172A]">Q{qNumber}.</span>
                            <span className="mx-1.5 text-slate-300" aria-hidden="true">·</span>
                            <span className="text-amber-700">{q.topic}</span>
                          </div>

                          {isUnattempted ? (
                            <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600">
                              <MinusCircle className="h-4 w-4 text-slate-400" aria-hidden="true" />
                              Unattempted (0)
                            </span>
                          ) : isCorrect ? (
                            <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700">
                              <CheckCircle2 className="h-4 w-4 text-emerald-600" aria-hidden="true" />
                              Correct (+{positiveMarks})
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 text-xs font-semibold text-rose-700">
                              <XCircle className="h-4 w-4 text-rose-600" aria-hidden="true" />
                              Incorrect (-{negativeMarks.toFixed(2)})
                            </span>
                          )}
                        </div>

                        {q.passageEn && (
                          <details className="mt-4 rounded-xl border border-slate-200 bg-[#F8FAFC] p-3.5 text-xs sm:text-sm text-slate-700">
                            <summary className="cursor-pointer font-bold text-[#1E3A8A]">
                              View Reading Passage
                            </summary>
                            <p className="mt-2.5 leading-relaxed whitespace-pre-line">
                              {q.passageEn}
                            </p>
                          </details>
                        )}

                        <h3 className="mt-4 text-base font-semibold text-[#0F172A] leading-relaxed whitespace-pre-line">
                          <MathText
                            text={solutionLang === 'hi' && q.questionHi ? q.questionHi : q.questionEn}
                          />
                        </h3>

                        {q.imageUrl && (
                          <div className="mt-3 flex justify-center rounded-xl border border-slate-200 bg-white p-2.5">
                            <img
                              src={q.imageUrl}
                              alt="Question diagram"
                              className="max-h-60 w-auto max-w-full object-contain grayscale contrast-[1.45] brightness-[1.12] mix-blend-multiply"
                            />
                          </div>
                        )}

                        {q.matrix && q.matrix.length > 0 && (
                          <div className="mt-3 inline-block max-w-full overflow-x-auto rounded-xl border border-slate-300 bg-[#F8FAFC]">
                            <table className="border-collapse text-center font-mono text-xs sm:text-sm font-bold text-[#0F172A] tabular-nums">
                              <tbody>
                                {q.matrix.map((row, rIdx) => (
                                  <tr
                                    key={rIdx}
                                    className="divide-x divide-slate-300 border-b border-slate-300 last:border-b-0"
                                  >
                                    {row.map((cell, cIdx) => (
                                      <td
                                        key={cIdx}
                                        className={`h-9 min-w-[2.75rem] px-2 ${
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

                        <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                          {OPTION_LETTERS.map((letter, idx) => {
                            const optionIdx = idx as OptionIndex;
                            const isRightOpt = optionIdx === q.correctIndex;
                            const isUserPick = optionIdx === selected;
                            const optText =
                              solutionLang === 'hi' && q.optionsHi
                                ? q.optionsHi[optionIdx]
                                : q.optionsEn[optionIdx];
                            const optImg = q.optionImages?.[optionIdx];

                            let boxClass = 'border-slate-200 bg-slate-50/50 text-slate-700';
                            if (isRightOpt) {
                              boxClass = 'border-emerald-300 bg-emerald-50 text-emerald-950';
                            } else if (isUserPick && !isRightOpt) {
                              boxClass = 'border-rose-300 bg-rose-50 text-rose-950';
                            }

                            return (
                              <div
                                key={letter}
                                className={`flex items-start justify-between gap-2 rounded-xl border p-3 text-sm ${boxClass}`}
                              >
                                <div className="flex min-w-0 flex-1 items-start gap-2.5">
                                  <span className="mt-0.5 font-mono text-xs font-bold">
                                    {letter}.
                                  </span>
                                  {optImg ? (
                                    <div className="rounded-md bg-white p-1">
                                      <img
                                        src={optImg}
                                        alt={`Option ${letter}`}
                                        className="max-h-20 w-auto max-w-full object-contain grayscale contrast-[1.45] brightness-[1.12] mix-blend-multiply"
                                      />
                                    </div>
                                  ) : (
                                    <span className="font-medium">
                                      <MathText text={optText} />
                                    </span>
                                  )}
                                </div>

                                <div className="shrink-0 text-[11px] font-semibold">
                                  {isRightOpt && (
                                    <span className="text-emerald-700">Correct Answer</span>
                                  )}
                                  {isUserPick && !isRightOpt && (
                                    <span className="text-rose-700">Your Answer</span>
                                  )}
                                </div>
                              </div>
                            );
                          })}
                        </div>

                        <div className="mt-4 rounded-xl border border-amber-200/80 bg-amber-50/60 p-4 text-sm text-slate-800">
                          <div className="text-xs font-bold uppercase tracking-wide text-[#0F172A]">
                            {solutionLang === 'hi' && q.explanationHi
                              ? 'विस्तृत हल (Solution Explanation)'
                              : 'Solution Explanation'}
                          </div>
                          <p className="mt-1.5 leading-relaxed whitespace-pre-line">
                            <MathText
                              text={
                                solutionLang === 'hi' && q.explanationHi
                                  ? q.explanationHi
                                  : q.explanationEn
                              }
                            />
                          </p>
                        </div>
                      </article>
                    );
                  })}
                </div>
              )}
            </>
          )}
        </div>
      )}
    </main>
  );
}
