import { QuestionVisualSpec } from './visual';

export type { QuestionVisualSpec } from './visual';

export type OptionIndex = 0 | 1 | 2 | 3;

export type QuestionStatus =
  | 'not-visited'
  | 'not-answered'
  | 'answered'
  | 'marked'
  | 'answered-marked';

export type QuestionLanguage = 'en' | 'hi';

export interface Question {
  id: string;
  topic: string;
  questionEn: string;
  questionHi?: string;
  passageEn?: string;
  matrix?: string[][];
  visual?: QuestionVisualSpec;
  imageUrl?: string;
  optionsEn: [string, string, string, string];
  optionsHi?: [string, string, string, string];
  optionImages?: [string, string, string, string];
  correctIndex: OptionIndex;
  explanationEn: string;
  explanationHi?: string;
}

export type ExamTag = 'CGL' | 'CHSL' | 'MTS' | 'RRB NTPC';

export type TestCategory =
  | 'Full Mock'
  | 'English'
  | 'General Awareness'
  | 'Quantitative Aptitude'
  | 'Reasoning'
  | 'Custom';

export type TestSeriesType = 'live' | 'free' | 'pyq';
export type PyqFormat = 'full' | 'sectional';

export interface TestSection {
  id: string;
  name: string;
  shortName: string;
  startIndex: number;
  endIndex: number;
  durationMinutes: number;
}

export interface MockTest {
  id: string;
  title: string;
  subtitle: string;
  category: TestCategory;
  examTags: ExamTag[];
  seriesType?: TestSeriesType;
  pyqFormat?: PyqFormat;
  durationMinutes: number;
  positiveMarks: number;
  negativeMarks: number;
  strictSectionTiming?: boolean;
  sections?: TestSection[];
  isCustom?: boolean;
  createdAt: string;
  questions: Question[];
}

export interface QuestionResponse {
  questionId: string;
  selectedIndex: OptionIndex | null;
  status: QuestionStatus;
}

export interface ExamResult {
  attemptId: string;
  testId: string;
  testTitle: string;
  submittedAt: string;
  totalQuestions: number;
  correctCount: number;
  incorrectCount: number;
  unattemptedCount: number;
  score: number;
  maxScore: number;
  accuracyPercent: number;
  timeTakenSeconds: number;
  totalDurationSeconds: number;
  responses: Record<string, QuestionResponse>;
}
