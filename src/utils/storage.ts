import { ExamResult, MockTest, OptionIndex, Question } from '../types/exam';

const CUSTOM_TESTS_KEY = 'ssc_sathi_custom_tests_v1';
const TEST_OVERRIDES_KEY = 'ssc_sathi_added_questions_v1';
const RESULTS_HISTORY_KEY = 'ssc_sathi_user_attempts_v2';

export function loadCustomTests(): MockTest[] {
  try {
    const raw = localStorage.getItem(CUSTOM_TESTS_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveCustomTests(tests: MockTest[]): void {
  try {
    localStorage.setItem(CUSTOM_TESTS_KEY, JSON.stringify(tests));
  } catch {
    // Ignore storage quota errors gracefully
  }
}

export function loadAddedQuestionsMap(): Record<string, Question[]> {
  try {
    const raw = localStorage.getItem(TEST_OVERRIDES_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === 'object' ? parsed : {};
  } catch {
    return {};
  }
}

export function saveAddedQuestionsMap(map: Record<string, Question[]>): void {
  try {
    localStorage.setItem(TEST_OVERRIDES_KEY, JSON.stringify(map));
  } catch {
    // Ignore storage quota errors gracefully
  }
}

export function loadResultsHistory(userScope: string): ExamResult[] {
  if (!userScope) return [];
  try {
    const scopedKey = `${RESULTS_HISTORY_KEY}_${userScope}`;
    const raw = localStorage.getItem(scopedKey);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveResultToHistory(
  result: ExamResult,
  userScope: string
): ExamResult[] {
  const existing = loadResultsHistory(userScope);
  const deduped = existing.filter((r) => r.attemptId !== result.attemptId);
  const updated = [result, ...deduped].slice(0, 50);
  try {
    localStorage.setItem(`${RESULTS_HISTORY_KEY}_${userScope}`, JSON.stringify(updated));
  } catch {
    // Ignore storage quota errors gracefully
  }
  return updated;
}

export function cacheResultsHistory(results: ExamResult[], userScope: string): void {
  if (!userScope) return;
  try {
    localStorage.setItem(
      `${RESULTS_HISTORY_KEY}_${userScope}`,
      JSON.stringify(results.slice(0, 50))
    );
  } catch {
    // Ignore storage quota errors gracefully
  }
}

export interface BulkParseResult {
  questions: Question[];
  errors: string[];
}

const LETTER_TO_INDEX: Record<string, OptionIndex> = {
  A: 0,
  B: 1,
  C: 2,
  D: 3,
  '1': 0,
  '2': 1,
  '3': 2,
  '4': 3,
};

const VALID_VISUAL_TYPES = new Set([
  'bar',
  'stacked-bar',
  'line',
  'histogram',
  'pie',
  'venn2',
  'venn3',
  'cube-net',
]);

function parseVisualSpec(raw: unknown): Question['visual'] {
  if (!raw || typeof raw !== 'object') return undefined;
  const candidate = raw as Record<string, unknown>;
  if (typeof candidate.type !== 'string' || !VALID_VISUAL_TYPES.has(candidate.type)) {
    return undefined;
  }
  return candidate as unknown as Question['visual'];
}

function parseMatrixSpec(raw: unknown): string[][] | undefined {
  if (!Array.isArray(raw) || raw.length === 0) return undefined;
  if (!raw.every((row) => Array.isArray(row))) return undefined;
  return raw.map((row) => (row as unknown[]).map((cell) => String(cell)));
}

/**
 * Supports either JSON array of questions OR plain-text blocks:
 * Q: Question text (or Q1. Question text)
 * TOPIC: Optional topic
 * VISUAL: Optional JSON chart/diagram spec (bar, stacked-bar, line, histogram, pie, venn2, venn3, cube-net)
 * MATRIX: Optional JSON 2D array for number/letter matrices
 * A) Option A
 * B) Option B
 * C) Option C
 * D) Option D
 * ANS: B
 * EXP: Optional explanation
 */
export function parseBulkQuestions(input: string): BulkParseResult {
  const trimmed = input.trim();
  if (!trimmed) {
    return { questions: [], errors: ['Paste questions in JSON or text format first.'] };
  }

  if (trimmed.startsWith('[') || trimmed.startsWith('{')) {
    try {
      const rawJson = JSON.parse(trimmed);
      const arr = Array.isArray(rawJson) ? rawJson : [rawJson];
      const questions: Question[] = [];
      const errors: string[] = [];

      arr.forEach((item, idx) => {
        if (!item || typeof item !== 'object') {
          errors.push(`Item #${idx + 1}: Invalid object.`);
          return;
        }
        const qEn = String(item.questionEn || item.question || '').trim();
        const optsRaw = item.optionsEn || item.options;
        if (!qEn || !Array.isArray(optsRaw) || optsRaw.length !== 4) {
          errors.push(`Item #${idx + 1}: Requires questionEn/question and 4 options.`);
          return;
        }

        let correctIndex: OptionIndex = 0;
        if (typeof item.correctIndex === 'number' && item.correctIndex >= 0 && item.correctIndex <= 3) {
          correctIndex = item.correctIndex as OptionIndex;
        } else if (typeof item.answer === 'string') {
          const mapped = LETTER_TO_INDEX[item.answer.trim().toUpperCase()];
          if (mapped !== undefined) correctIndex = mapped;
        }

        const parsedVisual = parseVisualSpec(item.visual);
        const parsedMatrix = parseMatrixSpec(item.matrix);
        const optsHiRaw = Array.isArray(item.optionsHi) && item.optionsHi.length === 4
          ? (item.optionsHi.map((o: unknown) => String(o).trim()) as [string, string, string, string])
          : undefined;

        questions.push({
          id: `custom_q_${Date.now()}_${idx}_${Math.random().toString(36).slice(2, 6)}`,
          topic: String(item.topic || 'General').trim(),
          questionEn: qEn,
          ...(typeof item.questionHi === 'string' && item.questionHi.trim()
            ? { questionHi: item.questionHi.trim() }
            : {}),
          ...(typeof item.passageEn === 'string' && item.passageEn.trim()
            ? { passageEn: item.passageEn.trim() }
            : {}),
          ...(parsedMatrix ? { matrix: parsedMatrix } : {}),
          ...(parsedVisual ? { visual: parsedVisual } : {}),
          optionsEn: optsRaw.map((o: unknown) => String(o).trim()) as [string, string, string, string],
          ...(optsHiRaw ? { optionsHi: optsHiRaw } : {}),
          correctIndex,
          explanationEn: String(item.explanationEn || item.explanation || 'Correct answer marked by test creator.').trim(),
          ...(typeof item.explanationHi === 'string' && item.explanationHi.trim()
            ? { explanationHi: item.explanationHi.trim() }
            : {}),
        });
      });

      return { questions, errors };
    } catch {
      return {
        questions: [],
        errors: ['Invalid JSON syntax. Check brackets and quotes, or use the Q:/A)/B)/C)/D)/ANS: plain text format.'],
      };
    }
  }

  const lines = trimmed.split(/\r?\n/);
  const blocks: string[][] = [];
  let currentBlock: string[] = [];

  const isQuestionStart = (line: string) =>
    /^(?:Q(?:\d+)?\s*[:.)]|Question\s*\d*\s*[:.)]|\d+\s*[.)]\s+)/i.test(line.trim());

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line) {
      if (currentBlock.length > 0) {
        blocks.push(currentBlock);
        currentBlock = [];
      }
      continue;
    }
    if (isQuestionStart(line) && currentBlock.length >= 5) {
      blocks.push(currentBlock);
      currentBlock = [line];
    } else {
      currentBlock.push(line);
    }
  }
  if (currentBlock.length > 0) {
    blocks.push(currentBlock);
  }

  const questions: Question[] = [];
  const errors: string[] = [];

  blocks.forEach((block, blockIdx) => {
    let questionEn = '';
    let topic = 'Custom';
    const options: string[] = ['', '', '', ''];
    let correctIndex: OptionIndex | null = null;
    let explanationEn = '';
    let visual: Question['visual'];
    let matrix: string[][] | undefined;

    for (const line of block) {
      if (/^(?:TOPIC|SUBJECT)\s*[:.)]\s*/i.test(line)) {
        topic = line.replace(/^(?:TOPIC|SUBJECT)\s*[:.)]\s*/i, '').trim();
      } else if (/^(?:VISUAL|CHART|DIAGRAM)\s*[:]\s*/i.test(line)) {
        const jsonPart = line.replace(/^(?:VISUAL|CHART|DIAGRAM)\s*[:]\s*/i, '').trim();
        try {
          visual = parseVisualSpec(JSON.parse(jsonPart));
        } catch {
          errors.push(`Block #${blockIdx + 1}: Invalid VISUAL JSON definition.`);
        }
      } else if (/^MATRIX\s*[:]\s*/i.test(line)) {
        const jsonPart = line.replace(/^MATRIX\s*[:]\s*/i, '').trim();
        try {
          matrix = parseMatrixSpec(JSON.parse(jsonPart));
        } catch {
          errors.push(`Block #${blockIdx + 1}: Invalid MATRIX JSON definition.`);
        }
      } else if (/^(?:Q(?:\d+)?\s*[:.)]|Question\s*\d*\s*[:.)]|\d+\s*[.)]\s+)/i.test(line)) {
        questionEn = line.replace(/^(?:Q(?:\d+)?\s*[:.)]|Question\s*\d*\s*[:.)]|\d+\s*[.)]\s+)/i, '').trim();
      } else if (/^\(?A\)?\s*[.):-]\s*/i.test(line)) {
        options[0] = line.replace(/^\(?A\)?\s*[.):-]\s*/i, '').trim();
      } else if (/^\(?B\)?\s*[.):-]\s*/i.test(line)) {
        options[1] = line.replace(/^\(?B\)?\s*[.):-]\s*/i, '').trim();
      } else if (/^\(?C\)?\s*[.):-]\s*/i.test(line)) {
        options[2] = line.replace(/^\(?C\)?\s*[.):-]\s*/i, '').trim();
      } else if (/^\(?D\)?\s*[.):-]\s*/i.test(line)) {
        options[3] = line.replace(/^\(?D\)?\s*[.):-]\s*/i, '').trim();
      } else if (/^(?:ANS|ANSWER|CORRECT)\s*[:.)]\s*/i.test(line)) {
        const val = line.replace(/^(?:ANS|ANSWER|CORRECT)\s*[:.)]\s*/i, '').trim().toUpperCase();
        const key = val.charAt(0);
        if (LETTER_TO_INDEX[key] !== undefined) {
          correctIndex = LETTER_TO_INDEX[key];
        }
      } else if (/^(?:EXP|EXPLANATION|SOL|SOLUTION)\s*[:.)]\s*/i.test(line)) {
        explanationEn = line.replace(/^(?:EXP|EXPLANATION|SOL|SOLUTION)\s*[:.)]\s*/i, '').trim();
      } else if (!questionEn) {
        questionEn = line;
      } else if (explanationEn) {
        explanationEn += ' ' + line;
      }
    }

    if (!questionEn) {
      errors.push(`Block #${blockIdx + 1}: Missing question text.`);
      return;
    }
    if (options.some((opt) => !opt)) {
      errors.push(`Block #${blockIdx + 1}: Must include all 4 options (A, B, C, D).`);
      return;
    }
    if (correctIndex === null) {
      errors.push(`Block #${blockIdx + 1}: Missing valid ANS: A/B/C/D line.`);
      return;
    }

    questions.push({
      id: `custom_q_${Date.now()}_${blockIdx}_${Math.random().toString(36).slice(2, 6)}`,
      topic,
      questionEn,
      ...(matrix ? { matrix } : {}),
      ...(visual ? { visual } : {}),
      optionsEn: [options[0], options[1], options[2], options[3]],
      correctIndex,
      explanationEn: explanationEn || `Option ${['A', 'B', 'C', 'D'][correctIndex]} is the correct answer.`,
    });
  });

  return { questions, errors };
}
