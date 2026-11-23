import { ExamResult, MockTest, QuestionResponse } from '../types/exam';

export function calculateExamResult(
  test: MockTest,
  responses: Record<string, QuestionResponse>,
  timeTakenSeconds: number
): ExamResult {
  let correctCount = 0;
  let incorrectCount = 0;
  let unattemptedCount = 0;

  for (const question of test.questions) {
    const resp = responses[question.id];
    const selected = resp?.selectedIndex ?? null;

    if (selected === null) {
      unattemptedCount += 1;
    } else if (selected === question.correctIndex) {
      correctCount += 1;
    } else {
      incorrectCount += 1;
    }
  }

  const rawScore =
    correctCount * test.positiveMarks - incorrectCount * test.negativeMarks;
  const score = Math.round(rawScore * 100) / 100;
  const maxScore = test.questions.length * test.positiveMarks;
  const attempted = correctCount + incorrectCount;
  const accuracyPercent =
    attempted > 0 ? Math.round((correctCount / attempted) * 1000) / 10 : 0;

  return {
    attemptId: `att_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
    testId: test.id,
    testTitle: test.title,
    submittedAt: new Date().toISOString(),
    totalQuestions: test.questions.length,
    correctCount,
    incorrectCount,
    unattemptedCount,
    score,
    maxScore,
    accuracyPercent,
    timeTakenSeconds,
    totalDurationSeconds: test.durationMinutes * 60,
    responses,
  };
}

export function formatTimer(totalSeconds: number): string {
  const safe = Math.max(0, Math.floor(totalSeconds));
  const hrs = Math.floor(safe / 3600);
  const mins = Math.floor((safe % 3600) / 60);
  const secs = safe % 60;

  const pad = (n: number) => String(n).padStart(2, '0');
  if (hrs > 0) {
    return `${pad(hrs)}:${pad(mins)}:${pad(secs)}`;
  }
  return `${pad(mins)}:${pad(secs)}`;
}

export function formatDurationVerbose(totalSeconds: number): string {
  const safe = Math.max(0, Math.floor(totalSeconds));
  const mins = Math.floor(safe / 60);
  const secs = safe % 60;
  if (mins === 0) return `${secs}s`;
  return `${mins}m ${secs}s`;
}

export interface RealTestAttemptEntry {
  testId: string;
  userId: string;
  score: number;
  accuracy: number;
  timeTaken: number;
  correct: number;
  incorrect: number;
  unattempted: number;
  submittedAt: string;
}

export interface LiveTestStats {
  hasData: boolean;
  averageScore: number;
  topperScore: number;
  rank: number;
  totalStudents: number;
  percentile: number;
  isFirstAttemptView: boolean;
  userFirstAttemptScore: number;
}

function getAttemptTimestampMs(submittedAt: string): number {
  const parsed = Date.parse(submittedAt);
  return Number.isFinite(parsed) ? parsed : Number.MAX_SAFE_INTEGER;
}

function isEarlierSubmission(candidate: RealTestAttemptEntry, current: RealTestAttemptEntry): boolean {
  const candidateMs = getAttemptTimestampMs(candidate.submittedAt);
  const currentMs = getAttemptTimestampMs(current.submittedAt);
  if (candidateMs !== currentMs) {
    return candidateMs < currentMs;
  }
  return candidate.submittedAt.localeCompare(current.submittedAt) < 0;
}

/**
 * Computes 100% real Average Score, Topper Score, Rank, and Percentile
 * from real database attempts, deduplicated so only each student's FIRST attempt
 * per test counts toward the global ranking pool.
 */
export function computeLiveTestStats(params: {
  currentUserId: string;
  currentAttemptScore: number;
  currentSubmittedAt: string;
  attempts: RealTestAttemptEntry[];
}): LiveTestStats {
  const { currentUserId, currentAttemptScore, currentSubmittedAt, attempts } = params;

  const firstByUser = new Map<string, RealTestAttemptEntry>();
  for (const entry of attempts) {
    if (!entry.userId || !Number.isFinite(entry.score)) continue;
    const existing = firstByUser.get(entry.userId);
    if (!existing || isEarlierSubmission(entry, existing)) {
      firstByUser.set(entry.userId, entry);
    }
  }

  const firstAttempts = Array.from(firstByUser.values());
  const totalStudents = firstAttempts.length;

  if (totalStudents === 0) {
    return {
      hasData: false,
      averageScore: 0,
      topperScore: 0,
      rank: 0,
      totalStudents: 0,
      percentile: 0,
      isFirstAttemptView: true,
      userFirstAttemptScore: currentAttemptScore,
    };
  }

  const sum = firstAttempts.reduce((acc, item) => acc + item.score, 0);
  const averageScore = Math.round((sum / totalStudents) * 100) / 100;
  const topperScore =
    Math.round(Math.max(...firstAttempts.map((item) => item.score)) * 100) / 100;

  const userFirstAttempt = currentUserId ? firstByUser.get(currentUserId) : undefined;
  const userFirstAttemptScore = userFirstAttempt
    ? userFirstAttempt.score
    : currentAttemptScore;
  const isFirstAttemptView =
    !userFirstAttempt || userFirstAttempt.submittedAt === currentSubmittedAt;

  // Exclude the current user's own stored first-attempt record from the comparison pool
  // and count only OTHER unique students who scored strictly higher than the viewed attempt.
  const otherUniqueStudentsWithHigherScore = firstAttempts.filter(
    (item) => item.userId !== currentUserId && item.score > currentAttemptScore
  ).length;
  const rank = Math.max(
    1,
    Math.min(totalStudents, otherUniqueStudentsWithHigherScore + 1)
  );

  const rawPercentile =
    totalStudents === 1
      ? 100
      : Math.round((((totalStudents - rank) / (totalStudents - 1)) * 100) * 10) / 10;
  const percentile = Math.max(0, Math.min(100, rawPercentile));

  return {
    hasData: true,
    averageScore,
    topperScore,
    rank,
    totalStudents,
    percentile,
    isFirstAttemptView,
    userFirstAttemptScore,
  };
}

