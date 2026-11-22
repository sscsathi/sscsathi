import { useState } from 'react';
import {
  AlertCircle,
  ArrowLeft,
  CheckCircle2,
  ClipboardPaste,
  Plus,
  Trash2,
} from 'lucide-react';
import {
  ExamTag,
  MockTest,
  OptionIndex,
  Question,
  TestCategory,
} from '../types/exam';
import { parseBulkQuestions } from '../utils/storage';
import { MathText } from './MathText';
import { QuestionVisual } from './QuestionVisual';

interface QuestionBuilderPanelProps {
  existingTests: MockTest[];
  onSaveNewTest: (test: MockTest) => void;
  onAppendQuestionsToTest: (testId: string, questions: Question[]) => void;
  onCancel: () => void;
}

const SAMPLE_BULK_TEXT = `TOPIC: Vocabulary (Synonyms)
Q1: Select the most appropriate synonym of the word "EPHEMERAL".
A) Eternal
B) Short-lived
C) Massive
D) Rigid
ANS: B
EXP: "Ephemeral" means lasting for a very short time, so "Short-lived" is the correct synonym.

TOPIC: Polity
Q2: Which Article of the Indian Constitution deals with the Right to Equality?
A) Article 14
B) Article 21
C) Article 32
D) Article 44
ANS: A
EXP: Article 14 guarantees equality before the law and equal protection of the laws.`;

const AVAILABLE_TAGS: ExamTag[] = ['CGL', 'CHSL', 'MTS'];

export function QuestionBuilderPanel({
  existingTests,
  onSaveNewTest,
  onAppendQuestionsToTest,
  onCancel,
}: QuestionBuilderPanelProps) {
  const [targetMode, setTargetMode] = useState<'new-test' | 'append'>('new-test');
  const [selectedTestId, setSelectedTestId] = useState<string>(
    existingTests[0]?.id ?? ''
  );

  // New test metadata
  const [testTitle, setTestTitle] = useState<string>('');
  const [testSubtitle, setTestSubtitle] = useState<string>('');
  const [category, setCategory] = useState<TestCategory>('Custom');
  const [examTags, setExamTags] = useState<ExamTag[]>(['CGL', 'CHSL']);
  const [durationMinutes, setDurationMinutes] = useState<number>(15);

  // Builder input mode
  const [entryMode, setEntryMode] = useState<'single' | 'bulk'>('single');
  const [draftQuestions, setDraftQuestions] = useState<Question[]>([]);

  // Single question fields
  const [topic, setTopic] = useState<string>('General');
  const [questionEn, setQuestionEn] = useState<string>('');
  const [options, setOptions] = useState<[string, string, string, string]>([
    '',
    '',
    '',
    '',
  ]);
  const [correctIndex, setCorrectIndex] = useState<OptionIndex>(0);
  const [explanationEn, setExplanationEn] = useState<string>('');

  // Bulk paste field
  const [bulkText, setBulkText] = useState<string>('');
  const [feedback, setFeedback] = useState<{
    type: 'error' | 'success';
    messages: string[];
  } | null>(null);

  const toggleExamTag = (tag: ExamTag) => {
    setExamTags((prev) => {
      if (prev.includes(tag)) {
        return prev.length > 1 ? prev.filter((t) => t !== tag) : prev;
      }
      return [...prev, tag];
    });
  };

  const handleAddSingleQuestion = () => {
    setFeedback(null);
    if (!questionEn.trim()) {
      setFeedback({ type: 'error', messages: ['Please enter the question text.'] });
      return;
    }
    if (options.some((opt) => !opt.trim())) {
      setFeedback({
        type: 'error',
        messages: ['Please fill in all 4 options (A, B, C, and D).'],
      });
      return;
    }

    const newQ: Question = {
      id: `q_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
      topic: topic.trim() || 'General',
      questionEn: questionEn.trim(),
      optionsEn: [
        options[0].trim(),
        options[1].trim(),
        options[2].trim(),
        options[3].trim(),
      ],
      correctIndex,
      explanationEn:
        explanationEn.trim() ||
        `Option ${['A', 'B', 'C', 'D'][correctIndex]} is the correct answer.`,
    };

    setDraftQuestions((prev) => [...prev, newQ]);
    setQuestionEn('');
    setOptions(['', '', '', '']);
    setExplanationEn('');
    setFeedback({
      type: 'success',
      messages: ['Question added to queue. Add more or click Save below.'],
    });
  };

  const handleParseBulk = () => {
    setFeedback(null);
    const { questions, errors } = parseBulkQuestions(bulkText);
    if (questions.length > 0) {
      setDraftQuestions((prev) => [...prev, ...questions]);
      setBulkText('');
    }
    if (errors.length > 0) {
      setFeedback({ type: 'error', messages: errors });
    } else if (questions.length > 0) {
      setFeedback({
        type: 'success',
        messages: [`Imported ${questions.length} question(s) into your draft queue.`],
      });
    }
  };

  const handleSaveAll = () => {
    setFeedback(null);
    if (draftQuestions.length === 0) {
      setFeedback({
        type: 'error',
        messages: ['Add or import at least one question before saving.'],
      });
      return;
    }

    if (targetMode === 'new-test') {
      if (!testTitle.trim()) {
        setFeedback({
          type: 'error',
          messages: ['Please provide a title for the new mock test.'],
        });
        return;
      }

      const newTest: MockTest = {
        id: `custom_test_${Date.now()}`,
        title: testTitle.trim(),
        subtitle:
          testSubtitle.trim() ||
          'Custom SSC practice mock test (Eduquity Pattern)',
        category,
        examTags,
        durationMinutes: Math.max(1, Number(durationMinutes) || 10),
        positiveMarks: 2,
        negativeMarks: 0.5,
        isCustom: true,
        createdAt: new Date().toISOString(),
        questions: draftQuestions,
      };
      onSaveNewTest(newTest);
    } else {
      if (!selectedTestId) {
        setFeedback({ type: 'error', messages: ['Select an existing test first.'] });
        return;
      }
      onAppendQuestionsToTest(selectedTestId, draftQuestions);
    }
  };

  return (
    <main className="mx-auto max-w-4xl px-4 py-6 sm:px-6 sm:py-8">
      <button
        type="button"
        onClick={onCancel}
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-600 hover:text-[#0F172A]"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        <span>Back to Dashboard</span>
      </button>

      <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-5 sm:p-7 shadow-xs">
        <div className="border-b border-slate-200 pb-4">
          <h1 className="text-xl sm:text-2xl font-extrabold text-[#0F172A]">
            Question Builder
          </h1>
          <p className="mt-1 text-sm text-slate-600">
            Create a custom mock test or append new questions to an existing test via single entry or bulk paste.
          </p>
        </div>

        {/* Target Destination */}
        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <button
            type="button"
            onClick={() => setTargetMode('new-test')}
            className={`rounded-xl border p-3.5 text-left transition-colors ${
              targetMode === 'new-test'
                ? 'border-[#0F172A] bg-amber-50/70 text-[#0F172A]'
                : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
            }`}
          >
            <div className="text-sm font-bold">Create New Mock Test</div>
            <div className="mt-0.5 text-xs text-slate-600">
              Start a fresh custom mock test with your own title and timer.
            </div>
          </button>

          <button
            type="button"
            onClick={() => setTargetMode('append')}
            className={`rounded-xl border p-3.5 text-left transition-colors ${
              targetMode === 'append'
                ? 'border-[#0F172A] bg-amber-50/70 text-[#0F172A]'
                : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
            }`}
          >
            <div className="text-sm font-bold">Add to Existing Test</div>
            <div className="mt-0.5 text-xs text-slate-600">
              Append new questions directly to any mock test on the dashboard.
            </div>
          </button>
        </div>

        {/* Metadata Config */}
        {targetMode === 'new-test' ? (
          <div className="mt-5 grid grid-cols-1 gap-4 rounded-xl border border-slate-200 bg-[#F8FAFC] p-4 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold text-slate-700">
                Mock Test Title *
              </label>
              <input
                type="text"
                value={testTitle}
                onChange={(e) => setTestTitle(e.target.value)}
                placeholder="e.g., SSC CGL Tier-1 Mixed Practice Set 2"
                className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-[#0F172A] focus:border-[#0F172A] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700">
                Subject Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as TestCategory)}
                className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-[#0F172A] focus:border-[#0F172A] focus:outline-none"
              >
                <option value="Custom">Custom</option>
                <option value="English">English</option>
                <option value="General Awareness">General Awareness</option>
                <option value="Quantitative Aptitude">Quantitative Aptitude</option>
                <option value="Reasoning">Reasoning</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700">
                Duration (Minutes)
              </label>
              <input
                type="number"
                min={1}
                max={180}
                value={durationMinutes}
                onChange={(e) => setDurationMinutes(Number(e.target.value))}
                className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-[#0F172A] focus:border-[#0F172A] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700">
                Target Exam Tags
              </label>
              <div className="mt-1.5 flex items-center gap-2">
                {AVAILABLE_TAGS.map((tag) => {
                  const selected = examTags.includes(tag);
                  return (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => toggleExamTag(tag)}
                      className={`rounded-md border px-2.5 py-1 text-xs font-bold transition-colors ${
                        selected
                          ? 'border-[#0F172A] bg-[#0F172A] text-[#F59E0B]'
                          : 'border-slate-300 bg-white text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      {tag}
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700">
                Subtitle / Description
              </label>
              <input
                type="text"
                value={testSubtitle}
                onChange={(e) => setTestSubtitle(e.target.value)}
                placeholder="e.g., High-yield PYQ revision set"
                className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-[#0F172A] focus:border-[#0F172A] focus:outline-none"
              />
            </div>
          </div>
        ) : (
          <div className="mt-5 rounded-xl border border-slate-200 bg-[#F8FAFC] p-4">
            <label className="block text-xs font-semibold text-slate-700">
              Select Mock Test to Append Questions
            </label>
            <select
              value={selectedTestId}
              onChange={(e) => setSelectedTestId(e.target.value)}
              className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-[#0F172A] focus:border-[#0F172A] focus:outline-none"
            >
              {existingTests.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.title} ({t.questions.length} Qs)
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Entry Mode Switch */}
        <div className="mt-6 flex items-center gap-2 border-b border-slate-200 pb-3">
          <button
            type="button"
            onClick={() => {
              setEntryMode('single');
              setFeedback(null);
            }}
            className={`inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-xs sm:text-sm font-semibold transition-colors ${
              entryMode === 'single'
                ? 'bg-[#0F172A] text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Plus className="h-4 w-4" aria-hidden="true" />
            <span>Single Question Form</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setEntryMode('bulk');
              setFeedback(null);
            }}
            className={`inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-xs sm:text-sm font-semibold transition-colors ${
              entryMode === 'bulk'
                ? 'bg-[#0F172A] text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <ClipboardPaste className="h-4 w-4" aria-hidden="true" />
            <span>Bulk Paste (Text / JSON)</span>
          </button>
        </div>

        {/* Feedback Banner */}
        {feedback && (
          <div
            className={`mt-4 flex items-start gap-2.5 rounded-xl border p-3.5 text-sm ${
              feedback.type === 'error'
                ? 'border-rose-200 bg-rose-50 text-rose-900'
                : 'border-emerald-200 bg-emerald-50 text-emerald-900'
            }`}
          >
            {feedback.type === 'error' ? (
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-rose-600" aria-hidden="true" />
            ) : (
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden="true" />
            )}
            <ul className="space-y-1">
              {feedback.messages.map((msg, i) => (
                <li key={i}>{msg}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Single Question Form */}
        {entryMode === 'single' ? (
          <div className="mt-5 space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-semibold text-slate-700">
                  Topic / Tag
                </label>
                <input
                  type="text"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  placeholder="e.g., Idioms & Phrases, History"
                  className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-[#0F172A] focus:border-[#0F172A] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700">
                  Correct Answer Option
                </label>
                <select
                  value={correctIndex}
                  onChange={(e) => setCorrectIndex(Number(e.target.value) as OptionIndex)}
                  className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-[#0F172A] focus:border-[#0F172A] focus:outline-none"
                >
                  <option value={0}>Option A</option>
                  <option value={1}>Option B</option>
                  <option value={2}>Option C</option>
                  <option value={3}>Option D</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700">
                Question Text *
              </label>
              <textarea
                rows={3}
                value={questionEn}
                onChange={(e) => setQuestionEn(e.target.value)}
                placeholder="Type the question..."
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-[#0F172A] focus:border-[#0F172A] focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {(['A', 'B', 'C', 'D'] as const).map((letter, idx) => (
                <div key={letter}>
                  <label className="block text-xs font-semibold text-slate-700">
                    Option {letter} *
                  </label>
                  <input
                    type="text"
                    value={options[idx]}
                    onChange={(e) => {
                      const next = [...options] as [string, string, string, string];
                      next[idx] = e.target.value;
                      setOptions(next);
                    }}
                    placeholder={`Option ${letter}`}
                    className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-[#0F172A] focus:border-[#0F172A] focus:outline-none"
                  />
                </div>
              ))}
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700">
                Solution Explanation
              </label>
              <textarea
                rows={2}
                value={explanationEn}
                onChange={(e) => setExplanationEn(e.target.value)}
                placeholder="Explain why the answer is correct (shown on Result screen)..."
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-[#0F172A] focus:border-[#0F172A] focus:outline-none"
              />
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                onClick={handleAddSingleQuestion}
                className="inline-flex min-h-[42px] items-center gap-1.5 rounded-xl border border-[#0F172A] bg-slate-50 px-4 py-2 text-sm font-semibold text-[#0F172A] hover:bg-slate-100"
              >
                <Plus className="h-4 w-4" aria-hidden="true" />
                <span>Add Question to Queue</span>
              </button>
            </div>
          </div>
        ) : (
          /* Bulk Paste Form */
          <div className="mt-5 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="text-xs text-slate-600">
                Paste questions in <code className="rounded bg-slate-100 px-1 py-0.5 font-mono">Q: / A) B) C) D) / ANS: / EXP:</code> blocks or as a JSON array.
              </p>
              <button
                type="button"
                onClick={() => setBulkText(SAMPLE_BULK_TEXT)}
                className="text-xs font-semibold text-[#0F172A] hover:text-amber-700 hover:underline"
              >
                Load Sample Format
              </button>
            </div>

            <textarea
              rows={10}
              value={bulkText}
              onChange={(e) => setBulkText(e.target.value)}
              placeholder={SAMPLE_BULK_TEXT}
              className="w-full rounded-xl border border-slate-300 p-3 font-mono text-xs text-[#0F172A] focus:border-[#0F172A] focus:outline-none"
            />

            <div className="flex justify-end">
              <button
                type="button"
                onClick={handleParseBulk}
                className="inline-flex min-h-[42px] items-center gap-1.5 rounded-xl border border-[#0F172A] bg-slate-50 px-4 py-2 text-sm font-semibold text-[#0F172A] hover:bg-slate-100"
              >
                <ClipboardPaste className="h-4 w-4" aria-hidden="true" />
                <span>Parse & Add to Queue</span>
              </button>
            </div>
          </div>
        )}

        {/* Draft Queue */}
        {draftQuestions.length > 0 && (
          <div className="mt-7 border-t border-slate-200 pt-5">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-bold text-[#0F172A] tabular-nums">
                Queued Questions ({draftQuestions.length})
              </h2>
              <button
                type="button"
                onClick={() => setDraftQuestions([])}
                className="text-xs font-semibold text-rose-600 hover:underline"
              >
                Clear All
              </button>
            </div>

            <div className="mt-3 max-h-72 space-y-2.5 overflow-y-auto pr-1">
              {draftQuestions.map((q, idx) => (
                <div
                  key={q.id}
                  className="flex items-start justify-between gap-3 rounded-xl border border-slate-200 bg-[#F8FAFC] p-3 text-xs"
                >
                  <div className="min-w-0 flex-1">
                    <div className="font-semibold text-[#0F172A]">
                      Q{idx + 1}. <MathText text={q.questionEn} />
                    </div>
                    {q.visual && <QuestionVisual visual={q.visual} compact />}
                    <div className="mt-1 text-slate-600">
                      Topic: {q.topic} · Correct: Option{' '}
                      {['A', 'B', 'C', 'D'][q.correctIndex]}
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      setDraftQuestions((prev) => prev.filter((item) => item.id !== q.id))
                    }
                    aria-label={`Remove question ${idx + 1}`}
                    className="rounded-lg p-1.5 text-slate-400 hover:bg-rose-50 hover:text-rose-600"
                  >
                    <Trash2 className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Save Footer */}
        <div className="mt-6 flex items-center justify-end gap-3 border-t border-slate-200 pt-5">
          <button
            type="button"
            onClick={onCancel}
            className="min-h-[44px] rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSaveAll}
            className="min-h-[44px] rounded-xl bg-[#F59E0B] px-5 py-2 text-sm font-bold text-[#0F172A] shadow-xs transition-colors hover:bg-amber-400"
          >
            {targetMode === 'new-test'
              ? `Save Mock Test (${draftQuestions.length} Qs)`
              : `Append ${draftQuestions.length} Qs to Test`}
          </button>
        </div>
      </div>
    </main>
  );
}
