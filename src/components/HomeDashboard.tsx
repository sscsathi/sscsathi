import { useEffect, useMemo, useRef, useState } from 'react';
import {
  ArrowRight,
  Award,
  BookOpen,
  CheckCircle2,
  Clock,
  FileText,
  History,
  Trash2,
  Trophy,
  X,
} from 'lucide-react';
import {
  AllExamsPlusBadge3D,
  AttemptedTestsBadge3D,
  FreeMocksPhoneBook3D,
  LiveTestLaptop3D,
  PyqClipboardStopwatch3D,
  QuickAccessStopwatch3DIcon,
  RrbNtpcBadge3D,
  SscCglBadge3D,
  SscChslBadge3D,
  StartPracticeCompass3DIcon,
  TodaysQuizBubble3DIcon,
} from './DashboardIcons3D';
import { ExamResult, ExamTag, MockTest, TestCategory } from '../types/exam';
import { formatDurationVerbose } from '../utils/scoring';

export type PracticeMode = 'all' | 'pyq';
export type PracticeSeriesFilter = 'all' | 'live' | 'free' | 'pyq';
export type QuickExamFilter = 'ALL' | ExamTag;

interface HomeDashboardProps {
  tests: MockTest[];
  history: ExamResult[];
  activeSeriesFilter: PracticeSeriesFilter;
  onSeriesFilterChange: (filter: PracticeSeriesFilter) => void;
  onStartTest: (test: MockTest) => void;
  onViewResult: (result: ExamResult, initialTab?: 'scorecard' | 'solutions') => void;
  onDeleteCustomTest: (testId: string) => void;
}

interface GroupedTestAttempt {
  testId: string;
  testTitle: string;
  latestAttempt: ExamResult;
  attemptCount: number;
}

const BASE_CATEGORIES: Array<'All' | TestCategory> = [
  'All',
  'English',
  'General Awareness',
  'Quantitative Aptitude',
  'Reasoning',
];

export function HomeDashboard({
  tests,
  history,
  activeSeriesFilter,
  onSeriesFilterChange,
  onStartTest,
  onViewResult,
  onDeleteCustomTest,
}: HomeDashboardProps) {
  const [selectedCategory, setSelectedCategory] = useState<'All' | TestCategory>('All');
  const [selectedExam, setSelectedExam] = useState<QuickExamFilter>('ALL');
  const [isAttemptedModalOpen, setIsAttemptedModalOpen] = useState<boolean>(false);
  const testsSectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isAttemptedModalOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsAttemptedModalOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isAttemptedModalOpen]);

  const mode: PracticeMode = activeSeriesFilter === 'pyq' ? 'pyq' : 'all';

  const hasCustomTests = useMemo(
    () => tests.some((t) => t.isCustom || t.category === 'Custom'),
    [tests]
  );

  const categories = useMemo(() => {
    return hasCustomTests
      ? ([...BASE_CATEGORIES, 'Custom'] as Array<'All' | TestCategory>)
      : BASE_CATEGORIES;
  }, [hasCustomTests]);

  const seriesCounts = useMemo(() => {
    let live = 0;
    let free = 0;
    let pyq = 0;
    for (const t of tests) {
      const sType = t.seriesType ?? 'free';
      if (sType === 'live') live += 1;
      else if (sType === 'pyq') pyq += 1;
      else free += 1;
    }
    return { live, free, pyq };
  }, [tests]);

  const examCounts = useMemo(() => {
    const counts = { CGL: 0, CHSL: 0, 'RRB NTPC': 0 };
    for (const t of tests) {
      if (t.examTags?.includes('CGL')) counts.CGL += 1;
      if (t.examTags?.includes('CHSL')) counts.CHSL += 1;
      if (t.examTags?.includes('RRB NTPC')) counts['RRB NTPC'] += 1;
    }
    return counts;
  }, [tests]);

  const filteredTests = useMemo(() => {
    return tests.filter((t) => {
      const sType = t.seriesType ?? 'free';
      if (activeSeriesFilter === 'live' && sType !== 'live') return false;
      if (activeSeriesFilter === 'free' && sType !== 'free' && sType !== 'live') return false;
      if (activeSeriesFilter === 'pyq' && sType !== 'pyq') return false;

      if (selectedExam !== 'ALL' && !(t.examTags ?? []).includes(selectedExam)) {
        return false;
      }

      if (selectedCategory === 'All') return true;
      if (selectedCategory === 'Custom') {
        return Boolean(t.isCustom || t.category === 'Custom');
      }
      return t.category === selectedCategory;
    });
  }, [tests, activeSeriesFilter, selectedExam, selectedCategory]);

  const todaysQuizzes = useMemo(() => {
    const mini = tests.filter((t) => t.durationMinutes <= 10).slice(0, 2);
    return mini.length > 0 ? mini : tests.slice(0, 2);
  }, [tests]);

  const groupedAttempts = useMemo<GroupedTestAttempt[]>(() => {
    const byTest = new Map<string, ExamResult[]>();
    for (const item of history) {
      const list = byTest.get(item.testId);
      if (list) {
        list.push(item);
      } else {
        byTest.set(item.testId, [item]);
      }
    }

    const groups: GroupedTestAttempt[] = [];
    for (const [testId, attempts] of byTest.entries()) {
      const sortedDesc = [...attempts].sort((a, b) => {
        const diff = new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime();
        if (diff !== 0) return diff;
        return b.submittedAt.localeCompare(a.submittedAt);
      });
      const latestAttempt = sortedDesc[0];
      groups.push({
        testId,
        testTitle: latestAttempt.testTitle,
        latestAttempt,
        attemptCount: sortedDesc.length,
      });
    }

    return groups.sort((a, b) => {
      const diff =
        new Date(b.latestAttempt.submittedAt).getTime() -
        new Date(a.latestAttempt.submittedAt).getTime();
      if (diff !== 0) return diff;
      return b.latestAttempt.submittedAt.localeCompare(a.latestAttempt.submittedAt);
    });
  }, [history]);

  const latestGroupByTestId = useMemo(() => {
    const map: Record<string, GroupedTestAttempt> = {};
    for (const group of groupedAttempts) {
      map[group.testId] = group;
    }
    return map;
  }, [groupedAttempts]);

  const handlePracticeGridClick = (filter: PracticeSeriesFilter) => {
    onSeriesFilterChange(filter);
    setSelectedCategory('All');
    setSelectedExam('ALL');
    testsSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleQuickAccessClick = (exam: QuickExamFilter) => {
    setSelectedExam(exam);
    if (exam === 'ALL') {
      onSeriesFilterChange('all');
      setSelectedCategory('All');
    } else {
      onSeriesFilterChange('all');
      setSelectedCategory('All');
    }
    testsSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const featuredTest = useMemo(
    () => tests.find((t) => t.seriesType === 'live') ?? tests[0],
    [tests]
  );

  const sectionHeadingLabel = useMemo(() => {
    if (selectedExam !== 'ALL') {
      return selectedExam === 'RRB NTPC'
        ? 'RRB NTPC Mock Tests'
        : `SSC ${selectedExam} Mock Tests`;
    }
    if (activeSeriesFilter === 'live') return 'Live All-India Tests';
    if (activeSeriesFilter === 'free') return 'Free Mock Tests';
    if (activeSeriesFilter === 'pyq') return 'PYQ Practice Series';
    return 'Available Mock Tests';
  }, [activeSeriesFilter, selectedExam]);

  const hasActiveFilter =
    activeSeriesFilter !== 'all' || selectedExam !== 'ALL' || selectedCategory !== 'All';

  return (
    <main className="mx-auto max-w-5xl px-4 py-4 sm:px-6 sm:py-6">
      {/* Mode Switcher Pill — Crisp Pure White Container + Royal-Indigo Active Tab */}
      <div className="flex justify-center">
        <div
          role="tablist"
          aria-label="Practice mode switcher"
          className="inline-flex w-full max-w-md items-center rounded-full border border-[#E2E8F0] bg-[#FFFFFF] p-1.5 shadow-[0_6px_20px_-6px_rgba(15,23,42,0.09),0_1px_3px_rgba(15,23,42,0.04)]"
        >
          <button
            type="button"
            role="tab"
            aria-selected={mode === 'all'}
            onClick={() => {
              onSeriesFilterChange('all');
              setSelectedExam('ALL');
              setSelectedCategory('All');
            }}
            className={`flex-1 min-h-[40px] rounded-full px-4 py-2 text-xs sm:text-sm font-bold transition-all duration-200 whitespace-nowrap ${
              mode === 'all'
                ? 'bg-[#1E3A8A] text-white shadow-[0_4px_12px_-2px_rgba(30,58,138,0.4)]'
                : 'text-slate-600 hover:bg-[#F4F6FB] hover:text-[#1E3A8A]'
            }`}
          >
            All Mock Tests
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={mode === 'pyq'}
            onClick={() => {
              onSeriesFilterChange('pyq');
              setSelectedExam('ALL');
              setSelectedCategory('All');
            }}
            className={`flex-1 min-h-[40px] rounded-full px-4 py-2 text-xs sm:text-sm font-bold transition-all duration-200 whitespace-nowrap ${
              mode === 'pyq'
                ? 'bg-[#1E3A8A] text-white shadow-[0_4px_12px_-2px_rgba(30,58,138,0.4)]'
                : 'text-slate-600 hover:bg-[#F4F6FB] hover:text-[#1E3A8A]'
            }`}
          >
            PYQ Practice
          </button>
        </div>
      </div>

      {/* Hero Brand Banner — Pure White Luxury Card with Golden Left Accent Bar & Glossy Trust Pills */}
      <section
        aria-label="SSC Sathi Brand Banner"
        className="relative mt-5 overflow-hidden rounded-3xl border border-[#E2E8F0] bg-[#FFFFFF] shadow-[0_14px_34px_-10px_rgba(30,58,138,0.12),0_2px_6px_rgba(15,23,42,0.04)]"
      >
        {/* Golden-Amber Left Accent Bar */}
        <div
          aria-hidden="true"
          className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-[#F59E0B] via-amber-400 to-[#D97706]"
        />
        {/* Ultra-Soft Luxury Gradient Shimmer */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-amber-50/45 via-white/90 to-indigo-50/35"
        />

        <div className="relative flex flex-col gap-5 px-5 py-5 pl-6 sm:px-7 sm:py-6 sm:pl-8 lg:flex-row lg:items-center lg:justify-between">
          {/* Left: Prominent Circular SSC Sathi Logo + Brand Copy */}
          <div className="flex items-center gap-4 min-w-0">
            <div className="relative shrink-0 rounded-full bg-white p-0.5 ring-2 ring-[#F59E0B]/55 shadow-sm">
              <img
                src="/assets/aistudio/1795032296907_b1ef824a.png"
                alt="SSC Sathi official logo"
                className="h-16 w-16 sm:h-18 sm:w-18 rounded-full object-cover"
              />
            </div>

            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-xl sm:text-2xl font-black tracking-tight text-[#1E3A8A] leading-none">
                  SSC SATHI
                </h1>
                <span className="inline-flex items-center rounded-full border border-[#F59E0B]/45 bg-amber-50 px-2.5 py-0.5 text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-amber-800 whitespace-nowrap shadow-2xs">
                  LATEST PATTERN • 100% FREE
                </span>
              </div>
              <p className="mt-1.5 text-xs sm:text-sm font-medium text-slate-600 leading-snug">
                India&apos;s Cleanest Mock Portal for CGL, CHSL &amp; MTS
              </p>
            </div>
          </div>

          {/* Center: 3 Compact Glossy Trust-Stat Pills */}
          <div className="flex flex-wrap items-center gap-2 lg:justify-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200/80 bg-gradient-to-b from-white to-emerald-50/80 px-3 py-1.5 text-[11px] font-bold text-emerald-900 shadow-[0_2px_8px_-2px_rgba(16,185,129,0.18)] whitespace-nowrap">
              <span aria-hidden="true" className="text-emerald-600 font-black">✓</span>
              <span>Latest Pattern</span>
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-200/90 bg-gradient-to-b from-white to-amber-50/90 px-3 py-1.5 text-[11px] font-bold text-amber-950 shadow-[0_2px_8px_-2px_rgba(245,158,11,0.18)] whitespace-nowrap">
              <span aria-hidden="true">📊</span>
              <span>Instant AIR &amp; Percentile</span>
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-indigo-200/80 bg-gradient-to-b from-white to-indigo-50/80 px-3 py-1.5 text-[11px] font-bold text-[#1E3A8A] shadow-[0_2px_8px_-2px_rgba(30,58,138,0.15)] whitespace-nowrap">
              <span aria-hidden="true">🌐</span>
              <span>Bilingual EN / HI</span>
            </span>
          </div>

          {/* Right: Sleek Royal-Blue CTA with Hover Lift */}
          {featuredTest && (
            <div className="shrink-0">
              <button
                type="button"
                onClick={() => onStartTest(featuredTest)}
                className="inline-flex min-h-[46px] w-full lg:w-auto items-center justify-center gap-2 rounded-xl bg-[#1E3A8A] px-5 py-3 text-sm font-bold text-white shadow-[0_8px_20px_-6px_rgba(30,58,138,0.5)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#172E6E] hover:shadow-[0_12px_24px_-6px_rgba(30,58,138,0.6)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E3A8A] whitespace-nowrap"
              >
                <span>Start Practicing →</span>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Start Practice 3-Column Grid with Rich Multi-Color 3D Illustrations */}
      <section className="mt-6" aria-label="Start Practice Categories">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <StartPracticeCompass3DIcon className="h-7 w-7 shrink-0 drop-shadow-xs" />
            <h2 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#0F172A]">
              START PRACTICE
            </h2>
          </div>
          {hasActiveFilter && (
            <button
              type="button"
              onClick={() => handlePracticeGridClick('all')}
              className="text-xs font-bold text-indigo-700 hover:underline"
            >
              Show All Tests
            </button>
          )}
        </div>

        <div className="mt-3 grid grid-cols-3 gap-2.5 sm:gap-4">
          {/* Card 1: Live Test */}
          <button
            type="button"
            onClick={() => handlePracticeGridClick('live')}
            className={`group relative flex flex-col items-center justify-between rounded-2xl border bg-[#FFFFFF] px-2.5 py-3.5 sm:p-5 text-center shadow-[0_6px_20px_-6px_rgba(15,23,42,0.08),0_1px_3px_rgba(15,23,42,0.04)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg ${
              activeSeriesFilter === 'live'
                ? 'border-rose-500 ring-1 ring-rose-500 bg-rose-50/20'
                : 'border-[#E2E8F0] hover:border-rose-300'
            }`}
          >
            <span className="absolute right-2 top-2 sm:right-3 sm:top-3 inline-flex items-center gap-1 rounded-full bg-rose-600 px-2 py-0.5 text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wide text-white shadow-xs animate-pulse">
              LIVE
            </span>

            <div className="mt-2 sm:mt-1 flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
              <LiveTestLaptop3D className="h-14 w-16 sm:h-18 sm:w-22 drop-shadow-xs" />
            </div>

            <div className="mt-2.5">
              <div className="text-xs sm:text-sm font-extrabold text-[#0F172A]">
                Live Test
              </div>
              <div className="mt-0.5 text-[11px] text-slate-500 tabular-nums">
                {seriesCounts.live} Active
              </div>
            </div>
          </button>

          {/* Card 2: Free Mocks */}
          <button
            type="button"
            onClick={() => handlePracticeGridClick('free')}
            className={`group flex flex-col items-center justify-between rounded-2xl border bg-[#FFFFFF] px-2.5 py-3.5 sm:p-5 text-center shadow-[0_6px_20px_-6px_rgba(15,23,42,0.08),0_1px_3px_rgba(15,23,42,0.04)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg ${
              activeSeriesFilter === 'free'
                ? 'border-[#1E3A8A] ring-1 ring-[#1E3A8A] bg-indigo-50/20'
                : 'border-[#E2E8F0] hover:border-indigo-300'
            }`}
          >
            <div className="mt-2 sm:mt-1 flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
              <FreeMocksPhoneBook3D className="h-14 w-16 sm:h-18 sm:w-22 drop-shadow-xs" />
            </div>

            <div className="mt-2.5">
              <div className="text-xs sm:text-sm font-extrabold text-[#0F172A]">
                Free Mocks
              </div>
              <div className="mt-0.5 text-[11px] text-slate-500 tabular-nums">
                {seriesCounts.free + seriesCounts.live} Mocks
              </div>
            </div>
          </button>

          {/* Card 3: PYQ Series */}
          <button
            type="button"
            onClick={() => handlePracticeGridClick('pyq')}
            className={`group flex flex-col items-center justify-between rounded-2xl border bg-[#FFFFFF] px-2.5 py-3.5 sm:p-5 text-center shadow-[0_6px_20px_-6px_rgba(15,23,42,0.08),0_1px_3px_rgba(15,23,42,0.04)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg ${
              activeSeriesFilter === 'pyq'
                ? 'border-[#F59E0B] ring-1 ring-[#F59E0B] bg-amber-50/20'
                : 'border-[#E2E8F0] hover:border-amber-300'
            }`}
          >
            <div className="mt-2 sm:mt-1 flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
              <PyqClipboardStopwatch3D className="h-14 w-16 sm:h-18 sm:w-22 drop-shadow-xs" />
            </div>

            <div className="mt-2.5">
              <div className="text-xs sm:text-sm font-extrabold text-[#0F172A]">
                PYQ Series
              </div>
              <div className="mt-0.5 text-[11px] text-slate-500 tabular-nums">
                {seriesCounts.pyq} Shifts
              </div>
            </div>
          </button>
        </div>
      </section>

      {/* Quick Access 5-Card Row (Exam Categories + Personal Attempted Tests) */}
      <section className="mt-6" aria-label="Quick Access Exam Categories">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <QuickAccessStopwatch3DIcon className="h-7 w-7 shrink-0 drop-shadow-xs" />
            <h2 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#0F172A]">
              QUICK ACCESS
            </h2>
          </div>
          <span className="text-[11px] font-medium text-slate-500">
            Tap exam to filter
          </span>
        </div>

        <div className="mt-3 grid grid-cols-3 gap-2.5 sm:grid-cols-5 sm:gap-3.5">
          {/* SSC CGL */}
          <button
            type="button"
            onClick={() => handleQuickAccessClick('CGL')}
            className={`group flex flex-col items-center rounded-2xl border bg-[#FFFFFF] px-2 py-3.5 sm:p-4 text-center shadow-[0_6px_20px_-6px_rgba(15,23,42,0.08),0_1px_3px_rgba(15,23,42,0.04)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg ${
              selectedExam === 'CGL'
                ? 'border-[#1E3A8A] ring-1 ring-[#1E3A8A] bg-amber-50/25'
                : 'border-[#E2E8F0] hover:border-amber-300'
            }`}
          >
            <SscCglBadge3D className="h-11 w-11 sm:h-13 sm:w-13 transition-transform duration-200 group-hover:scale-105 drop-shadow-xs" />
            <span className="mt-2 text-[11px] sm:text-xs font-extrabold text-[#0F172A] leading-tight">
              SSC CGL
            </span>
            <span className="mt-0.5 text-[10px] text-slate-500 tabular-nums">
              {examCounts.CGL} {examCounts.CGL === 1 ? 'Test' : 'Tests'}
            </span>
          </button>

          {/* SSC CHSL */}
          <button
            type="button"
            onClick={() => handleQuickAccessClick('CHSL')}
            className={`group flex flex-col items-center rounded-2xl border bg-[#FFFFFF] px-2 py-3.5 sm:p-4 text-center shadow-[0_6px_20px_-6px_rgba(15,23,42,0.08),0_1px_3px_rgba(15,23,42,0.04)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg ${
              selectedExam === 'CHSL'
                ? 'border-blue-700 ring-1 ring-blue-700 bg-blue-50/25'
                : 'border-[#E2E8F0] hover:border-blue-300'
            }`}
          >
            <SscChslBadge3D className="h-11 w-11 sm:h-13 sm:w-13 transition-transform duration-200 group-hover:scale-105 drop-shadow-xs" />
            <span className="mt-2 text-[11px] sm:text-xs font-extrabold text-[#0F172A] leading-tight">
              SSC CHSL
            </span>
            <span className="mt-0.5 text-[10px] text-slate-500 tabular-nums">
              {examCounts.CHSL} {examCounts.CHSL === 1 ? 'Test' : 'Tests'}
            </span>
          </button>

          {/* RRB NTPC */}
          <button
            type="button"
            onClick={() => handleQuickAccessClick('RRB NTPC')}
            className={`group flex flex-col items-center rounded-2xl border bg-[#FFFFFF] px-2 py-3.5 sm:p-4 text-center shadow-[0_6px_20px_-6px_rgba(15,23,42,0.08),0_1px_3px_rgba(15,23,42,0.04)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg ${
              selectedExam === 'RRB NTPC'
                ? 'border-rose-700 ring-1 ring-rose-700 bg-rose-50/25'
                : 'border-[#E2E8F0] hover:border-rose-300'
            }`}
          >
            <RrbNtpcBadge3D className="h-11 w-11 sm:h-13 sm:w-13 transition-transform duration-200 group-hover:scale-105 drop-shadow-xs" />
            <span className="mt-2 text-[11px] sm:text-xs font-extrabold text-[#0F172A] leading-tight">
              RRB NTPC
            </span>
            <span className="mt-0.5 text-[10px] text-slate-500 tabular-nums">
              {examCounts['RRB NTPC']} {examCounts['RRB NTPC'] === 1 ? 'Test' : 'Tests'}
            </span>
          </button>

          {/* All Exams (+) */}
          <button
            type="button"
            onClick={() => handleQuickAccessClick('ALL')}
            className={`group flex flex-col items-center rounded-2xl border bg-[#FFFFFF] px-2 py-3.5 sm:p-4 text-center shadow-[0_6px_20px_-6px_rgba(15,23,42,0.08),0_1px_3px_rgba(15,23,42,0.04)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg ${
              selectedExam === 'ALL' && activeSeriesFilter === 'all'
                ? 'border-[#1E3A8A] ring-1 ring-[#1E3A8A] bg-indigo-50/25'
                : 'border-[#E2E8F0] hover:border-indigo-300'
            }`}
          >
            <AllExamsPlusBadge3D className="h-11 w-11 sm:h-13 sm:w-13 transition-transform duration-200 group-hover:scale-105 drop-shadow-xs" />
            <span className="mt-2 text-[11px] sm:text-xs font-extrabold text-[#0F172A] leading-tight">
              All Exams
            </span>
            <span className="mt-0.5 text-[10px] text-slate-500 tabular-nums">
              {tests.length} Total
            </span>
          </button>

          {/* 5th Card: Personal Attempted Tests */}
          <button
            type="button"
            onClick={() => setIsAttemptedModalOpen(true)}
            className={`group flex flex-col items-center rounded-2xl border bg-[#FFFFFF] px-2 py-3.5 sm:p-4 text-center shadow-[0_6px_20px_-6px_rgba(15,23,42,0.08),0_1px_3px_rgba(15,23,42,0.04)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg ${
              isAttemptedModalOpen
                ? 'border-emerald-600 ring-1 ring-emerald-600 bg-emerald-50/25'
                : 'border-[#E2E8F0] hover:border-emerald-300'
            }`}
          >
            <AttemptedTestsBadge3D className="h-11 w-11 sm:h-13 sm:w-13 transition-transform duration-200 group-hover:scale-105 drop-shadow-xs" />
            <span className="mt-2 text-[11px] sm:text-xs font-extrabold text-[#0F172A] leading-tight">
              Attempted Tests
            </span>
            <span className="mt-0.5 text-[10px] font-semibold text-emerald-700 tabular-nums">
              {groupedAttempts.length} {groupedAttempts.length === 1 ? 'Test' : 'Tests'}
            </span>
          </button>
        </div>
      </section>

      {/* Today's Quiz Section with Glossy Purple Question-Mark Bubble Header */}
      <section className="mt-6" aria-label="Today's Quiz">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <TodaysQuizBubble3DIcon className="h-7 w-7 shrink-0 drop-shadow-xs" />
            <h2 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#0F172A]">
              TODAY&apos;S QUIZ
            </h2>
          </div>
          <span className="text-[11px] font-semibold text-purple-700">
            10-Min Speed Boosters
          </span>
        </div>

        <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {todaysQuizzes.map((quiz) => (
            <div
              key={`quiz_${quiz.id}`}
              className="flex items-center justify-between gap-3 rounded-2xl border border-[#E2E8F0] bg-[#FFFFFF] p-4 shadow-[0_6px_20px_-6px_rgba(15,23,42,0.08),0_1px_3px_rgba(15,23,42,0.04)] transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-300 hover:shadow-lg"
            >
              <div className="min-w-0">
                <div className="text-[11px] font-bold uppercase tracking-wide text-purple-700">
                  {quiz.category} · {quiz.durationMinutes} Mins
                </div>
                <div className="mt-0.5 truncate text-sm font-extrabold text-[#0F172A]">
                  {quiz.title}
                </div>
                <div className="mt-0.5 text-xs text-slate-500 tabular-nums">
                  {quiz.questions.length} Qs · {quiz.questions.length * quiz.positiveMarks} Marks
                </div>
              </div>

              <button
                type="button"
                onClick={() => onStartTest(quiz)}
                className="inline-flex min-h-[40px] shrink-0 items-center gap-1 rounded-xl bg-[#1E3A8A] px-3.5 py-2 text-xs font-bold text-white shadow-xs transition-colors hover:bg-[#172E6E] whitespace-nowrap"
              >
                <span>Play Quiz</span>
                <ArrowRight className="h-3.5 w-3.5 text-[#F59E0B]" aria-hidden="true" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Filtered Mock Tests List */}
      <section ref={testsSectionRef} className="mt-7 scroll-mt-20">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-base sm:text-lg font-extrabold text-[#0F172A]">
              {sectionHeadingLabel}
            </h2>
            <p className="text-xs text-slate-500 mt-0.5 tabular-nums">
              Showing {filteredTests.length} {filteredTests.length === 1 ? 'test' : 'tests'} · +2.0 / -0.50 Latest Pattern
            </p>
          </div>

          <div
            className="flex items-center gap-1 overflow-x-auto rounded-xl border border-[#E2E8F0] bg-[#FFFFFF] p-1 shadow-xs"
            role="tablist"
            aria-label="Filter mock tests by subject"
          >
            {categories.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 ${
                    active
                      ? 'bg-[#1E3A8A] text-white shadow-xs'
                      : 'text-slate-600 hover:bg-[#F4F6FB] hover:text-[#1E3A8A]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {filteredTests.length === 0 ? (
          <div className="mt-5 rounded-2xl border border-[#E2E8F0] bg-[#FFFFFF] px-6 py-12 text-center shadow-[0_6px_20px_-6px_rgba(15,23,42,0.08),0_1px_3px_rgba(15,23,42,0.04)]">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-[#1E3A8A]">
              <Clock className="h-6 w-6" aria-hidden="true" />
            </div>
            <h3 className="mt-4 text-base sm:text-lg font-extrabold text-[#0F172A]">
              Coming Soon — New PYQ Mocks Uploading Daily
            </h3>
            <p className="mx-auto mt-1.5 max-w-md text-xs sm:text-sm text-slate-600">
              Fresh shift-wise mock tests for this section are being added. In the meantime, practice our latest live PYQ mock test.
            </p>
            <button
              type="button"
              onClick={() => {
                onSeriesFilterChange('all');
                setSelectedExam('ALL');
                setSelectedCategory('All');
              }}
              className="mt-5 inline-flex min-h-[42px] items-center gap-1.5 rounded-xl bg-[#1E3A8A] px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-[#172E6E] hover:shadow-md"
            >
              <span>View Available Mocks</span>
              <ArrowRight className="h-3.5 w-3.5 text-[#F59E0B]" aria-hidden="true" />
            </button>
          </div>
        ) : (
          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
            {filteredTests.map((test) => {
              const maxMarks = test.questions.length * test.positiveMarks;
              const testGroup = latestGroupByTestId[test.id];
              const lastAttempt = testGroup?.latestAttempt;
              const tags =
                test.examTags && test.examTags.length > 0 ? test.examTags : ['CGL', 'CHSL'];

              return (
                <article
                  key={test.id}
                  className="group flex flex-col justify-between rounded-2xl border border-[#E2E8F0] bg-[#FFFFFF] p-5 shadow-[0_8px_24px_-6px_rgba(15,23,42,0.08),0_1px_3px_rgba(15,23,42,0.04)] transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-300 hover:shadow-lg"
                >
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-500">
                        <span className="font-bold uppercase tracking-wide text-indigo-700">
                          {test.category}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span className="font-semibold text-[#0F172A]">
                          {tags.join(' / ')}
                        </span>
                        {test.seriesType === 'live' && (
                          <>
                            <span aria-hidden="true">·</span>
                            <span className="font-extrabold text-rose-600">LIVE</span>
                          </>
                        )}
                        {test.seriesType === 'pyq' && (
                          <>
                            <span aria-hidden="true">·</span>
                            <span className="font-bold text-amber-700">PYQ</span>
                          </>
                        )}
                        {test.questions.some((q) => Boolean(q.questionHi)) && (
                          <>
                            <span aria-hidden="true">·</span>
                            <span className="font-bold text-emerald-700">EN / HI</span>
                          </>
                        )}
                      </div>

                      {test.isCustom && (
                        <button
                          type="button"
                          onClick={() => onDeleteCustomTest(test.id)}
                          aria-label={`Delete ${test.title}`}
                          className="rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-rose-50 hover:text-rose-600"
                        >
                          <Trash2 className="h-4 w-4" aria-hidden="true" />
                        </button>
                      )}
                    </div>

                    <h3 className="mt-2.5 text-base sm:text-lg font-bold text-[#0F172A] leading-snug">
                      {test.title}
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-slate-600 line-clamp-2">
                      {test.subtitle}
                    </p>

                    <div className="mt-4 grid grid-cols-3 gap-2 rounded-xl border border-slate-100 bg-[#F8FAFC] p-3 text-xs tabular-nums">
                      <div className="flex items-center gap-2 text-slate-700">
                        <FileText className="h-4 w-4 text-[#F59E0B] shrink-0" aria-hidden="true" />
                        <div>
                          <div className="font-bold text-[#0F172A]">
                            {test.questions.length} Qs
                          </div>
                          <div className="text-[11px] text-slate-500">Questions</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-slate-700">
                        <Clock className="h-4 w-4 text-[#0F172A] shrink-0" aria-hidden="true" />
                        <div>
                          <div className="font-bold text-[#0F172A]">
                            {test.durationMinutes} Mins
                          </div>
                          <div className="text-[11px] text-slate-500">Duration</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-slate-700">
                        <Award className="h-4 w-4 text-emerald-600 shrink-0" aria-hidden="true" />
                        <div>
                          <div className="font-bold text-[#0F172A]">
                            {maxMarks} Marks
                          </div>
                          <div className="text-[11px] text-slate-500">
                            +{test.positiveMarks} / -{test.negativeMarks.toFixed(2)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {lastAttempt && testGroup ? (
                    <div className="mt-4 space-y-3">
                      <div className="flex flex-wrap items-center justify-between gap-2 text-xs tabular-nums">
                        <span className="inline-flex items-center gap-1.5 font-semibold text-[#0F172A]">
                          <Trophy className="h-3.5 w-3.5 text-[#F59E0B] shrink-0" aria-hidden="true" />
                          <span>
                            Latest: {lastAttempt.score}/{lastAttempt.maxScore} ({lastAttempt.accuracyPercent}%)
                          </span>
                        </span>
                        <span className="font-semibold text-slate-500">
                          {testGroup.attemptCount}{' '}
                          {testGroup.attemptCount === 1 ? 'Attempt' : 'Attempts'}
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-2.5">
                        <button
                          type="button"
                          onClick={() => onViewResult(lastAttempt, 'solutions')}
                          className="inline-flex min-h-[44px] items-center justify-center gap-1.5 rounded-xl border-2 border-[#1E3A8A] bg-white px-4 py-2.5 text-sm font-bold text-[#1E3A8A] transition-colors hover:bg-indigo-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E3A8A] whitespace-nowrap"
                        >
                          <BookOpen className="h-4 w-4 shrink-0" aria-hidden="true" />
                          <span>Solutions</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => onStartTest(test)}
                          className="inline-flex min-h-[44px] items-center justify-center gap-1.5 rounded-xl bg-[#F59E0B] px-4 py-2.5 text-sm font-bold text-[#0F172A] shadow-xs transition-all hover:bg-amber-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F59E0B] whitespace-nowrap"
                        >
                          <span>Re-Attempt</span>
                          <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                      <span className="inline-flex items-center gap-1.5 text-xs text-slate-500">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" aria-hidden="true" />
                        <span>Detailed Solutions</span>
                      </span>

                      <button
                        type="button"
                        onClick={() => onStartTest(test)}
                        className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl bg-[#F59E0B] px-5 py-2.5 text-sm font-bold text-[#0F172A] shadow-xs transition-all hover:bg-amber-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F59E0B] whitespace-nowrap"
                      >
                        <span>Attempt Now</span>
                        <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                      </button>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        )}
      </section>

      {/* Personal Attempted Tests Modal */}
      {isAttemptedModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0F172A]/55 p-4 backdrop-blur-xs"
          onClick={() => setIsAttemptedModalOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="attempted-tests-modal-title"
            onClick={(e) => e.stopPropagation()}
            className="flex max-h-[85vh] w-full max-w-2xl flex-col overflow-hidden rounded-3xl border border-[#E2E8F0] bg-[#FFFFFF] shadow-2xl"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between gap-3 border-b border-[#E2E8F0] px-5 py-4 sm:px-6">
              <div className="flex items-center gap-3 min-w-0">
                <AttemptedTestsBadge3D className="h-10 w-10 shrink-0" />
                <div className="min-w-0">
                  <h2
                    id="attempted-tests-modal-title"
                    className="text-base sm:text-lg font-extrabold text-[#0F172A]"
                  >
                    Attempted Tests
                  </h2>
                  <p className="text-xs text-slate-500 tabular-nums">
                    {groupedAttempts.length === 0
                      ? 'Your personal mock history appears here'
                      : `${groupedAttempts.length} ${groupedAttempts.length === 1 ? 'unique test' : 'unique tests'} · ${history.length} total ${history.length === 1 ? 'attempt' : 'attempts'}`}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsAttemptedModalOpen(false)}
                aria-label="Close attempted tests dialog"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#E2E8F0] bg-white text-slate-500 transition-colors hover:bg-[#F4F6FB] hover:text-[#0F172A]"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="flex-1 overflow-y-auto p-5 sm:p-6">
              {groupedAttempts.length === 0 ? (
                <div className="rounded-2xl border border-dashed border-[#E2E8F0] bg-[#F4F6FB]/70 px-6 py-10 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-emerald-600 shadow-xs ring-1 ring-[#E2E8F0]">
                    <History className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-base font-extrabold text-[#0F172A]">
                    No tests attempted yet
                  </h3>
                  <p className="mx-auto mt-1.5 max-w-sm text-xs sm:text-sm text-slate-600">
                    Submit your first mock test to track your personal score, accuracy, time taken, and detailed solutions here.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsAttemptedModalOpen(false);
                      testsSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                    className="mt-5 inline-flex min-h-[42px] items-center gap-1.5 rounded-xl bg-[#1E3A8A] px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-[#172E6E]"
                  >
                    <span>Browse Mock Tests</span>
                    <ArrowRight className="h-3.5 w-3.5 text-[#F59E0B]" aria-hidden="true" />
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  {groupedAttempts.map(({ testId, testTitle, latestAttempt, attemptCount }) => (
                    <div
                      key={testId}
                      className="flex flex-col gap-3 rounded-2xl border border-[#E2E8F0] bg-[#FFFFFF] p-4 shadow-xs transition-all hover:border-indigo-200 hover:shadow-md sm:flex-row sm:items-center sm:justify-between"
                    >
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <div className="truncate text-sm sm:text-base font-extrabold text-[#0F172A]">
                            {testTitle}
                          </div>
                          <span className="inline-flex shrink-0 items-center rounded-full border border-indigo-200/80 bg-indigo-50 px-2.5 py-0.5 text-[11px] font-bold text-[#1E3A8A] tabular-nums whitespace-nowrap">
                            {attemptCount} {attemptCount === 1 ? 'Attempt' : 'Attempts'}
                          </span>
                        </div>
                        <div className="mt-1 text-[11px] text-slate-500">
                          Latest attempt · {new Date(latestAttempt.submittedAt).toLocaleString()}
                        </div>
                        <div className="mt-2.5 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs tabular-nums">
                          <span className="inline-flex items-center gap-1 font-bold text-[#1E3A8A]">
                            <Trophy className="h-3.5 w-3.5 text-[#F59E0B]" aria-hidden="true" />
                            <span>
                              Latest Score: {latestAttempt.score} / {latestAttempt.maxScore}
                            </span>
                          </span>
                          <span className="text-slate-300" aria-hidden="true">·</span>
                          <span className="inline-flex items-center gap-1 font-bold text-emerald-700">
                            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" aria-hidden="true" />
                            <span>Accuracy: {latestAttempt.accuracyPercent}%</span>
                          </span>
                          <span className="text-slate-300" aria-hidden="true">·</span>
                          <span className="inline-flex items-center gap-1 font-semibold text-slate-600">
                            <Clock className="h-3.5 w-3.5 text-slate-400" aria-hidden="true" />
                            <span>{formatDurationVerbose(latestAttempt.timeTakenSeconds)}</span>
                          </span>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => {
                          setIsAttemptedModalOpen(false);
                          onViewResult(latestAttempt, 'scorecard');
                        }}
                        className="inline-flex min-h-[40px] shrink-0 items-center justify-center gap-1.5 rounded-xl bg-[#1E3A8A] px-4 py-2 text-xs font-bold text-white shadow-xs transition-all hover:-translate-y-0.5 hover:bg-[#172E6E] whitespace-nowrap"
                      >
                        <span>View Scorecard / Solutions</span>
                        <ArrowRight className="h-3.5 w-3.5 text-[#F59E0B]" aria-hidden="true" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
