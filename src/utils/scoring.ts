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

export function estimatePercentile(score: number, maxScore: number): number {
  if (maxScore <= 0) return 0;
  const ratio = Math.max(0, Math.min(1, score / maxScore));
  if (score <= 0) return 5.0;
  // Smooth monotonic curve mapping normalized SSC mock scores to realistic percentile estimates
  const curved = Math.pow(ratio, 0.72) * 99.4;
  return Math.max(5.0, Math.min(99.8, Math.round(curved * 10) / 10));
}
