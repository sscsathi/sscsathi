import { useState } from 'react';
import { ArrowLeft, ArrowRight, Globe, Info } from 'lucide-react';
import { MockTest, QuestionLanguage } from '../types/exam';
import { PaletteSymbol } from './PaletteSymbol';

interface TestInstructionsScreenProps {
  test: MockTest;
  onBack: () => void;
  onConfirmStart: (selectedLanguage: QuestionLanguage) => void;
}

export function TestInstructionsScreen({
  test,
  onBack,
  onConfirmStart,
}: TestInstructionsScreenProps) {
  const [uiLang, setUiLang] = useState<QuestionLanguage>('en');
  const [selectedTestLang, setSelectedTestLang] = useState<QuestionLanguage>('en');
  const [hasExplicitLangPick, setHasExplicitLangPick] = useState<boolean>(false);
  const [isAgreed, setIsAgreed] = useState<boolean>(false);

  const sections = test.sections ?? [];
  const isStrictSectional = Boolean(test.strictSectionTiming && sections.length > 0);
  const totalQuestions = test.questions.length;
  const maxMarks = totalQuestions * test.positiveMarks;
  const perSectionDuration =
    sections.length > 0 && sections.every((s) => s.durationMinutes === sections[0].durationMinutes)
      ? sections[0].durationMinutes
      : null;

  const isHi = uiLang === 'hi';

  const handleToggleUiLang = (lang: QuestionLanguage) => {
    setUiLang(lang);
    if (!hasExplicitLangPick) {
      setSelectedTestLang(lang);
    }
  };

  const handleSelectTestLang = (lang: QuestionLanguage) => {
    setHasExplicitLangPick(true);
    setSelectedTestLang(lang);
  };

  const negativeFormatted = Number.isInteger(test.negativeMarks)
    ? String(test.negativeMarks)
    : String(test.negativeMarks);

  const ruleNote = isStrictSectional
    ? isHi
      ? `${sections.length} निश्चित ${perSectionDuration ?? 15}-मिनट सेक्शन (ऑटो-एडवांस)। नेविगेट करने के लिए स्वाइप करें या बटन दबाएं।`
      : `${sections.length} fixed ${perSectionDuration ?? 15}-min sections (auto-advances). Swipe left/right or use buttons to navigate.`
    : isHi
      ? `${test.durationMinutes}-मिनट का सख्त टाइमर (ऑटो-सबमिट)। नेविगेट करने के लिए स्वाइप करें या बटन दबाएं।`
      : `${test.durationMinutes}-min strict timer (auto-submits). Swipe left/right or use buttons to navigate.`;

  return (
    <div className="flex h-[100dvh] max-h-[100dvh] flex-col justify-between overflow-hidden bg-[#F4F6FB] text-[#0F172A]">
      {/* 1. Compact Top Bar */}
      <header className="shrink-0 border-b border-slate-200 bg-white px-3 py-2 shadow-2xs">
        <div className="mx-auto flex max-w-lg items-center justify-between gap-2">
          <button
            type="button"
            onClick={onBack}
            aria-label={isHi ? 'पीछे जाएं' : 'Back to mock tests'}
            className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 transition-colors hover:bg-slate-100 hover:text-[#0F172A]"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          </button>

          <div className="min-w-0 flex-1 text-center">
            <h1 className="truncate text-xs font-extrabold tracking-tight text-[#0F172A] sm:text-sm">
              {test.title}
            </h1>
          </div>

          <div
            role="group"
            aria-label="Screen language"
            className="inline-flex shrink-0 items-center rounded-lg border border-slate-200 bg-slate-100 p-0.5"
          >
            <button
              type="button"
              onClick={() => handleToggleUiLang('en')}
              aria-pressed={uiLang === 'en'}
              className={`rounded-md px-2 py-1 text-[11px] font-bold transition-colors ${
                uiLang === 'en'
                  ? 'bg-[#0F172A] text-white shadow-2xs'
                  : 'text-slate-600 hover:text-[#0F172A]'
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => handleToggleUiLang('hi')}
              aria-pressed={uiLang === 'hi'}
              className={`rounded-md px-2 py-1 text-[11px] font-bold transition-colors ${
                uiLang === 'hi'
                  ? 'bg-[#0F172A] text-white shadow-2xs'
                  : 'text-slate-600 hover:text-[#0F172A]'
              }`}
            >
              हिंदी
            </button>
          </div>
        </div>
      </header>

      {/* 2. Ultra-Compact Middle Info Area */}
      <main className="mx-auto flex min-h-0 w-full max-w-lg flex-1 flex-col justify-center gap-2.5 overflow-hidden px-3 py-2">
        {/* Single-Row 4-Stat Strip */}
        <section
          aria-label={isHi ? 'परीक्षा विवरण' : 'Exam overview'}
          className="grid grid-cols-4 gap-1.5"
        >
          <div className="rounded-xl border border-[#E2E8F0] bg-white px-1.5 py-2 text-center shadow-2xs">
            <div className="font-mono text-xs font-extrabold text-[#0F172A] tabular-nums sm:text-sm">
              {totalQuestions} {isHi ? 'प्र.' : 'Qs'}
            </div>
            <div className="mt-0.5 truncate text-[10px] font-semibold text-slate-500">
              {isHi ? 'कुल प्रश्न' : 'Questions'}
            </div>
          </div>

          <div className="rounded-xl border border-[#E2E8F0] bg-white px-1.5 py-2 text-center shadow-2xs">
            <div className="font-mono text-xs font-extrabold text-[#0F172A] tabular-nums sm:text-sm">
              {maxMarks}
            </div>
            <div className="mt-0.5 truncate text-[10px] font-semibold text-slate-500">
              {isHi ? 'अधिकतम अंक' : 'Marks'}
            </div>
          </div>

          <div className="rounded-xl border border-[#E2E8F0] bg-white px-1.5 py-2 text-center shadow-2xs">
            <div className="font-mono text-xs font-extrabold text-[#1E3A8A] tabular-nums sm:text-sm">
              {test.durationMinutes}m
            </div>
            <div className="mt-0.5 truncate text-[10px] font-semibold text-slate-500 tabular-nums">
              {isStrictSectional && perSectionDuration
                ? `${sections.length}×${perSectionDuration}m`
                : isHi
                  ? 'समय'
                  : 'Time'}
            </div>
          </div>

          <div className="rounded-xl border border-[#E2E8F0] bg-white px-1.5 py-2 text-center shadow-2xs">
            <div className="font-mono text-xs font-extrabold tabular-nums sm:text-sm whitespace-nowrap">
              <span className="text-[#16A34A]">+{test.positiveMarks}</span>
              <span className="text-slate-300">/</span>
              <span className="text-[#DC2626]">-{negativeFormatted}</span>
            </div>
            <div className="mt-0.5 truncate text-[10px] font-semibold text-slate-500">
              {isHi ? 'अंकन' : 'Marking'}
            </div>
          </div>
        </section>

        {/* Compact 2x2 Palette Legend Card */}
        <section
          aria-label={isHi ? 'प्रश्न पैलेट संकेत' : 'Question palette symbols'}
          className="rounded-xl border border-[#E2E8F0] bg-white p-2.5 shadow-2xs"
        >
          <div className="mb-2 flex items-center justify-between border-b border-slate-100 pb-1.5">
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-600">
              {isHi ? 'प्रश्न पैलेट संकेत' : 'Question Palette Legend'}
            </span>
            <span className="text-[10px] font-semibold text-slate-400">
              {isHi ? 'SSC CBT पैटर्न' : 'SSC CBT Pattern'}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-1.5">
            <div className="flex items-center gap-2 rounded-lg border border-slate-100 bg-[#F8FAFC] p-2">
              <div className="w-6 shrink-0">
                <PaletteSymbol state="not-attempted" label={1} size="sm" />
              </div>
              <span className="text-xs font-semibold leading-tight text-slate-800">
                {isHi ? 'उत्तर नहीं दिया' : 'Not Attempted'}
              </span>
            </div>

            <div className="flex items-center gap-2 rounded-lg border border-slate-100 bg-[#F8FAFC] p-2">
              <div className="w-6 shrink-0">
                <PaletteSymbol state="answered" label={2} size="sm" />
              </div>
              <span className="text-xs font-semibold leading-tight text-slate-800">
                {isHi ? 'उत्तर दिया गया' : 'Answered'}
              </span>
            </div>

            <div className="flex items-center gap-2 rounded-lg border border-slate-100 bg-[#F8FAFC] p-2">
              <div className="w-6 shrink-0">
                <PaletteSymbol state="marked" label={3} size="sm" />
              </div>
              <span className="text-xs font-semibold leading-tight text-slate-800">
                {isHi ? 'समीक्षा (अनुत्तरित)' : 'Review (Unanswered)'}
              </span>
            </div>

            <div className="flex items-center gap-2 rounded-lg border border-slate-100 bg-[#F8FAFC] p-2">
              <div className="w-6 shrink-0">
                <PaletteSymbol state="answered-marked" label={4} size="sm" />
              </div>
              <span className="text-xs font-semibold leading-tight text-slate-800">
                {isHi ? 'समीक्षा (उत्तरित)*' : 'Review (Answered)*'}
              </span>
            </div>
          </div>

          <p className="mt-1.5 text-[10px] font-medium text-slate-500">
            {isHi
              ? '*उत्तर दिया गया और समीक्षा के लिए चिह्नित प्रश्नों का मूल्यांकन किया जाएगा।'
              : '*Answered & Marked for Review questions are considered for evaluation.'}
          </p>
        </section>

        {/* One-Line Rule Note */}
        <div className="flex items-start gap-2 rounded-xl border border-amber-200/80 bg-amber-50/80 px-2.5 py-2">
          <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-700" aria-hidden="true" />
          <p className="text-[11px] font-semibold leading-snug text-amber-950">
            {ruleNote}
          </p>
        </div>
      </main>

      {/* 3. Fixed Bottom Action Card — Always Visible Without Scrolling */}
      <footer className="shrink-0 border-t border-slate-200 bg-white p-3 shadow-[0_-4px_16px_rgba(15,23,42,0.06)]">
        <div className="mx-auto max-w-lg space-y-2.5">
          {/* Inline Language Row */}
          <div className="flex items-center justify-between gap-2 rounded-xl border border-slate-200 bg-[#F8FAFC] px-3 py-1.5">
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#0F172A]">
              <Globe className="h-3.5 w-3.5 shrink-0 text-[#1E3A8A]" aria-hidden="true" />
              <span>{isHi ? 'परीक्षा भाषा:' : 'Language:'}</span>
            </div>

            <div
              role="radiogroup"
              aria-label={isHi ? 'डिफ़ॉल्ट परीक्षा भाषा चुनें' : 'Select default test language'}
              className="inline-flex items-center rounded-lg border border-slate-200 bg-white p-0.5"
            >
              <button
                type="button"
                role="radio"
                aria-checked={selectedTestLang === 'en'}
                onClick={() => handleSelectTestLang('en')}
                className={`rounded-md px-3 py-1 text-xs font-bold transition-colors ${
                  selectedTestLang === 'en'
                    ? 'bg-[#1E3A8A] text-white shadow-2xs'
                    : 'text-slate-600 hover:text-[#0F172A]'
                }`}
              >
                English
              </button>
              <button
                type="button"
                role="radio"
                aria-checked={selectedTestLang === 'hi'}
                onClick={() => handleSelectTestLang('hi')}
                className={`rounded-md px-3 py-1 text-xs font-bold transition-colors ${
                  selectedTestLang === 'hi'
                    ? 'bg-[#1E3A8A] text-white shadow-2xs'
                    : 'text-slate-600 hover:text-[#0F172A]'
                }`}
              >
                हिंदी
              </button>
            </div>
          </div>

          {/* Compact Checkbox Row */}
          <label
            htmlFor="pretest-agree-rules"
            className="flex cursor-pointer items-center gap-2.5 rounded-lg px-0.5 py-0.5 select-none"
          >
            <input
              id="pretest-agree-rules"
              type="checkbox"
              checked={isAgreed}
              onChange={(e) => setIsAgreed(e.target.checked)}
              className="h-4 w-4 shrink-0 cursor-pointer rounded border-slate-300 accent-[#1E3A8A]"
            />
            <span className="truncate text-xs font-semibold text-slate-700">
              {isHi
                ? 'मैंने परीक्षा के नियम पढ़ लिए हैं और सहमत हूँ।'
                : 'I have read & agree to the test rules.'}
            </span>
          </label>

          {/* Primary Start Button */}
          <button
            type="button"
            disabled={!isAgreed}
            onClick={() => onConfirmStart(selectedTestLang)}
            className={`inline-flex w-full items-center justify-center gap-2 rounded-xl py-2.5 text-sm font-bold transition-all ${
              isAgreed
                ? 'bg-[#1E3A8A] text-white shadow-sm hover:bg-[#172554]'
                : 'cursor-not-allowed bg-slate-200 text-slate-400'
            }`}
          >
            <span>{isHi ? 'परीक्षा शुरू करें' : 'Start Test'}</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </footer>
    </div>
  );
}
