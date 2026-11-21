import { useEffect, useState } from 'react';
import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  BookOpenCheck,
  Check,
  CheckCircle2,
  ChevronLeft,
  Clock,
  Eraser,
  Flag,
  Globe,
  Info,
  Lock,
  Play,
  ShieldCheck,
} from 'lucide-react';
import { MockTest, QuestionLanguage } from '../types/exam';
import { PaletteSymbol } from './PaletteSymbol';

type InstructionViewLang = 'both' | 'en' | 'hi';

interface TestInstructionsScreenProps {
  test: MockTest;
  onBack: () => void;
  onConfirmStart: (selectedLanguage: QuestionLanguage) => void;
}

const SECTION_HINDI_MAP: Record<string, string> = {
  'General Intelligence & Reasoning': 'सामान्य बुद्धिमत्ता एवं तर्कशक्ति',
  'General Awareness': 'सामान्य जागरूकता',
  'Quantitative Aptitude': 'मात्रात्मक अभिरुचि (गणित)',
  'English Comprehension': 'अंग्रेजी बोधगम्यता',
  English: 'अंग्रेजी',
  Reasoning: 'तर्कशक्ति',
  'Full Mock': 'पूर्ण मॉक टेस्ट',
  Custom: 'कस्टम मॉक टेस्ट',
};

function getSectionHindiName(englishName: string): string {
  return SECTION_HINDI_MAP[englishName] ?? englishName;
}

function BilingualText({
  en,
  hi,
  viewLang,
  enClassName = 'text-sm text-slate-800 leading-relaxed',
  hiClassName = 'text-sm text-slate-600 leading-relaxed',
  stackGap = 'mt-1',
}: {
  en: string;
  hi: string;
  viewLang: InstructionViewLang;
  enClassName?: string;
  hiClassName?: string;
  stackGap?: string;
}) {
  return (
    <div>
      {viewLang !== 'hi' && <p className={enClassName}>{en}</p>}
      {viewLang !== 'en' && (
        <p className={`${viewLang === 'both' ? stackGap : ''} ${hiClassName}`}>{hi}</p>
      )}
    </div>
  );
}

export function TestInstructionsScreen({
  test,
  onBack,
  onConfirmStart,
}: TestInstructionsScreenProps) {
  const [step, setStep] = useState<1 | 2>(1);
  const [viewLang, setViewLang] = useState<InstructionViewLang>('both');
  const [selectedTestLang, setSelectedTestLang] = useState<QuestionLanguage | ''>('');
  const [isDeclared, setIsDeclared] = useState<boolean>(false);

  const sections = test.sections ?? [];
  const hasMultipleSections = sections.length > 0;
  const isStrictSectional = Boolean(test.strictSectionTiming && hasMultipleSections);
  const totalQuestions = test.questions.length;
  const maxMarks = totalQuestions * test.positiveMarks;
  const perSectionDuration =
    hasMultipleSections && sections.every((s) => s.durationMinutes === sections[0].durationMinutes)
      ? sections[0].durationMinutes
      : null;

  const canStart = selectedTestLang !== '' && isDeclared;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [step]);

  const handleHeaderBack = () => {
    if (step === 2) {
      setStep(1);
    } else {
      onBack();
    }
  };

  const handleStartClick = () => {
    if (!canStart || !selectedTestLang) return;
    onConfirmStart(selectedTestLang);
  };

  const tableRows = hasMultipleSections
    ? sections.map((sec, idx) => {
        const qCount = sec.endIndex - sec.startIndex + 1;
        return {
          id: sec.id,
          index: idx + 1,
          nameEn: sec.name,
          nameHi: getSectionHindiName(sec.name),
          range: `Q${sec.startIndex + 1}–Q${sec.endIndex + 1}`,
          questions: qCount,
          marks: qCount * test.positiveMarks,
          duration: sec.durationMinutes,
        };
      })
    : [
        {
          id: 'single-section',
          index: 1,
          nameEn: test.category,
          nameHi: getSectionHindiName(test.category),
          range: `Q1–Q${totalQuestions}`,
          questions: totalQuestions,
          marks: maxMarks,
          duration: test.durationMinutes,
        },
      ];

  const headerTitle =
    step === 1
      ? viewLang === 'en'
        ? 'General Instructions'
        : viewLang === 'hi'
        ? 'सामान्य निर्देश'
        : 'General Instructions / सामान्य निर्देश'
      : viewLang === 'en'
      ? 'Special Instructions'
      : viewLang === 'hi'
      ? 'विशेष निर्देश'
      : 'Special Instructions / विशेष निर्देश';

  return (
    <div className="flex min-h-screen flex-col bg-[#F4F6FB] text-[#0F172A]">
      {/* Top Sticky Header */}
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-4xl items-center justify-between gap-2 px-3 py-3 sm:px-6">
          {/* Left: Back Button */}
          <button
            type="button"
            onClick={handleHeaderBack}
            aria-label={step === 2 ? 'Back to General Instructions' : 'Back to Mock Tests'}
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition-colors hover:bg-slate-100 hover:text-[#0F172A] sm:h-10 sm:w-auto sm:gap-1.5 sm:px-3"
          >
            <ArrowLeft className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span className="hidden text-xs font-semibold sm:inline">
              {viewLang === 'hi' ? 'पीछे' : 'Back'}
            </span>
          </button>

          {/* Center: Title + Test Name */}
          <div className="min-w-0 flex-1 text-center">
            <h1 className="truncate text-sm font-extrabold tracking-tight text-[#0F172A] sm:text-base">
              {headerTitle}
            </h1>
            <p className="truncate text-[11px] font-medium text-slate-500 sm:text-xs">
              {test.title}
            </p>
          </div>

          {/* Right: Language View Filter Pill */}
          <div
            role="group"
            aria-label="Instruction display language"
            className="inline-flex shrink-0 items-center rounded-xl border border-slate-200 bg-slate-100 p-0.5"
          >
            {(
              [
                { id: 'both', label: 'Both' },
                { id: 'en', label: 'English' },
                { id: 'hi', label: 'हिंदी' },
              ] as const
            ).map((opt) => {
              const active = viewLang === opt.id;
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setViewLang(opt.id)}
                  className={`rounded-lg px-2 py-1.5 text-[11px] font-bold transition-all sm:px-2.5 sm:text-xs ${
                    active
                      ? 'bg-[#0F172A] text-white shadow-xs'
                      : 'text-slate-600 hover:text-[#0F172A]'
                  }`}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Clean 2-Step Progress Strip */}
        <div className="border-t border-slate-100 bg-[#F8FAFC]">
          <div className="mx-auto flex max-w-4xl items-center justify-center gap-3 px-4 py-2 text-xs">
            <div
              className={`flex items-center gap-1.5 font-semibold ${
                step === 1 ? 'text-[#1E3A8A]' : 'text-emerald-700'
              }`}
            >
              <span
                className={`flex h-5 w-5 items-center justify-center rounded-full text-[11px] font-bold ${
                  step === 1
                    ? 'bg-[#1E3A8A] text-white'
                    : 'bg-emerald-600 text-white'
                }`}
              >
                {step === 2 ? <Check className="h-3 w-3" aria-hidden="true" /> : '1'}
              </span>
              <span>
                {viewLang === 'hi'
                  ? 'सामान्य निर्देश'
                  : viewLang === 'en'
                  ? 'General Instructions'
                  : 'General / सामान्य'}
              </span>
            </div>

            <div className="h-[2px] w-8 rounded-full bg-slate-300 sm:w-14">
              <div
                className={`h-full rounded-full bg-[#1E3A8A] transition-all duration-300 ${
                  step === 2 ? 'w-full' : 'w-0'
                }`}
              />
            </div>

            <div
              className={`flex items-center gap-1.5 font-semibold ${
                step === 2 ? 'text-[#1E3A8A]' : 'text-slate-400'
              }`}
            >
              <span
                className={`flex h-5 w-5 items-center justify-center rounded-full text-[11px] font-bold ${
                  step === 2
                    ? 'bg-[#1E3A8A] text-white'
                    : 'border border-slate-300 bg-white text-slate-500'
                }`}
              >
                2
              </span>
              <span>
                {viewLang === 'hi'
                  ? 'विशेष निर्देश और भाषा'
                  : viewLang === 'en'
                  ? 'Symbols & Language'
                  : 'Symbols & Language / भाषा'}
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      {step === 1 ? (
        <>
          <main className="mx-auto w-full max-w-4xl flex-1 space-y-5 px-4 pb-28 pt-5 sm:px-6 sm:pt-6">
            {/* Section 1: Exam Overview */}
            <section className="overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-xs">
              <div className="border-b border-slate-100 bg-slate-50/70 px-4 py-3.5 sm:px-6">
                <div className="flex items-start gap-2.5">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-[#1E3A8A] text-xs font-bold text-white">
                    1
                  </span>
                  <BilingualText
                    viewLang={viewLang}
                    en="Exam Overview & Pattern"
                    hi="परीक्षा का संक्षिप्त विवरण एवं पैटर्न"
                    enClassName="text-sm font-extrabold text-[#0F172A] sm:text-base"
                    hiClassName="text-xs font-bold text-[#1E3A8A] sm:text-sm"
                    stackGap="mt-0.5"
                  />
                </div>
              </div>

              <div className="p-4 sm:p-6">
                {/* Dynamic Highlight Metrics Grid */}
                <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4 sm:gap-3">
                  <div className="rounded-xl border border-slate-200 bg-[#F8FAFC] p-3">
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                      {viewLang === 'hi' ? 'कुल प्रश्न' : 'Total Questions'}
                    </p>
                    <p className="mt-1 font-mono text-lg font-extrabold text-[#0F172A] tabular-nums">
                      {totalQuestions}
                    </p>
                    {viewLang === 'both' && (
                      <p className="text-[11px] font-medium text-slate-500">कुल प्रश्न</p>
                    )}
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-[#F8FAFC] p-3">
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                      {viewLang === 'hi' ? 'अधिकतम अंक' : 'Maximum Marks'}
                    </p>
                    <p className="mt-1 font-mono text-lg font-extrabold text-[#0F172A] tabular-nums">
                      {maxMarks}
                    </p>
                    {viewLang === 'both' && (
                      <p className="text-[11px] font-medium text-slate-500">अधिकतम अंक</p>
                    )}
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-[#F8FAFC] p-3">
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                      {viewLang === 'hi' ? 'कुल समय' : 'Total Duration'}
                    </p>
                    <p className="mt-1 font-mono text-lg font-extrabold text-[#0F172A] tabular-nums">
                      {test.durationMinutes}{' '}
                      <span className="text-xs font-bold text-slate-600">
                        {viewLang === 'hi' ? 'मिनट' : 'Mins'}
                      </span>
                    </p>
                    {viewLang === 'both' && (
                      <p className="text-[11px] font-medium text-slate-500">
                        {isStrictSectional && perSectionDuration
                          ? `${sections.length} सेक्शन × ${perSectionDuration} मिनट`
                          : 'कुल समय'}
                      </p>
                    )}
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-[#F8FAFC] p-3">
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                      {viewLang === 'hi' ? 'अंकन योजना' : 'Marking Scheme'}
                    </p>
                    <p className="mt-1 font-mono text-lg font-extrabold tabular-nums">
                      <span className="text-emerald-700">+{test.positiveMarks}</span>
                      <span className="mx-1 text-slate-300">/</span>
                      <span className="text-rose-600">-{test.negativeMarks.toFixed(2)}</span>
                    </p>
                    {viewLang === 'both' && (
                      <p className="text-[11px] font-medium text-slate-500">सही / गलत अंक</p>
                    )}
                  </div>
                </div>

                {/* Section-wise Summary Table */}
                <div className="mt-5 overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full min-w-[520px] border-collapse text-left text-xs sm:text-sm">
                    <thead>
                      <tr className="border-b border-slate-200 bg-slate-50 text-[11px] font-bold uppercase tracking-wider text-slate-600">
                        <th className="px-3.5 py-3">
                          {viewLang === 'hi'
                            ? 'विषय / अनुभाग'
                            : viewLang === 'en'
                            ? 'Section Name'
                            : 'Section Name (विषय)'}
                        </th>
                        <th className="px-3 py-3 text-center">
                          {viewLang === 'hi'
                            ? 'प्रश्नों की संख्या'
                            : viewLang === 'en'
                            ? 'Questions'
                            : 'Questions (प्रश्न)'}
                        </th>
                        <th className="px-3 py-3 text-center">
                          {viewLang === 'hi'
                            ? 'अधिकतम अंक'
                            : viewLang === 'en'
                            ? 'Max Marks'
                            : 'Max Marks (अंक)'}
                        </th>
                        <th className="px-3.5 py-3 text-right">
                          {viewLang === 'hi'
                            ? 'समय'
                            : viewLang === 'en'
                            ? 'Time'
                            : 'Time (समय)'}
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 bg-white">
                      {tableRows.map((row) => (
                        <tr key={row.id} className="hover:bg-slate-50/70">
                          <td className="px-3.5 py-3">
                            <div className="flex items-start gap-2.5">
                              <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-slate-100 font-mono text-[11px] font-bold text-slate-700">
                                {row.index}
                              </span>
                              <div>
                                {viewLang !== 'hi' && (
                                  <p className="font-bold text-[#0F172A]">
                                    {row.nameEn}{' '}
                                    <span className="ml-1 font-mono text-[11px] font-semibold text-slate-500">
                                      ({row.range})
                                    </span>
                                  </p>
                                )}
                                {viewLang !== 'en' && (
                                  <p
                                    className={
                                      viewLang === 'hi'
                                        ? 'font-bold text-[#0F172A]'
                                        : 'mt-0.5 text-xs font-medium text-slate-600'
                                    }
                                  >
                                    {row.nameHi}
                                    {viewLang === 'hi' && (
                                      <span className="ml-1 font-mono text-[11px] font-semibold text-slate-500">
                                        ({row.range})
                                      </span>
                                    )}
                                  </p>
                                )}
                              </div>
                            </div>
                          </td>
                          <td className="px-3 py-3 text-center font-mono font-bold text-slate-800 tabular-nums">
                            {row.questions}
                          </td>
                          <td className="px-3 py-3 text-center font-mono font-bold text-slate-800 tabular-nums">
                            {row.marks}
                          </td>
                          <td className="px-3.5 py-3 text-right font-mono font-bold text-[#1E3A8A] tabular-nums whitespace-nowrap">
                            {viewLang === 'hi'
                              ? `${row.duration} मिनट`
                              : viewLang === 'en'
                              ? `${row.duration} Mins`
                              : `${row.duration} Mins / ${row.duration} मिनट`}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr className="border-t-2 border-slate-200 bg-[#F8FAFC] font-extrabold text-[#0F172A]">
                        <td className="px-3.5 py-3">
                          {viewLang === 'hi'
                            ? 'कुल योग'
                            : viewLang === 'en'
                            ? 'Total'
                            : 'Total / कुल योग'}
                        </td>
                        <td className="px-3 py-3 text-center font-mono tabular-nums">
                          {totalQuestions}
                        </td>
                        <td className="px-3 py-3 text-center font-mono tabular-nums">
                          {maxMarks}
                        </td>
                        <td className="px-3.5 py-3 text-right font-mono tabular-nums whitespace-nowrap">
                          {viewLang === 'hi'
                            ? `${test.durationMinutes} मिनट`
                            : viewLang === 'en'
                            ? `${test.durationMinutes} Mins`
                            : `${test.durationMinutes} Mins / ${test.durationMinutes} मिनट`}
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </section>

            {/* Section 2: Sectional Timing & Auto-Submission */}
            <section className="overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-xs">
              <div className="border-b border-slate-100 bg-slate-50/70 px-4 py-3.5 sm:px-6">
                <div className="flex items-start gap-2.5">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-[#1E3A8A] text-xs font-bold text-white">
                    2
                  </span>
                  <BilingualText
                    viewLang={viewLang}
                    en="Sectional Timing & Auto-Submission Rules"
                    hi="समय और ऑटो-सबमिशन नियम"
                    enClassName="text-sm font-extrabold text-[#0F172A] sm:text-base"
                    hiClassName="text-xs font-bold text-[#1E3A8A] sm:text-sm"
                    stackGap="mt-0.5"
                  />
                </div>
              </div>

              <div className="space-y-3.5 p-4 sm:p-6">
                {isStrictSectional ? (
                  <>
                    <div className="flex items-start gap-3 rounded-xl border border-amber-200/90 bg-amber-50/70 p-3.5">
                      <Lock className="mt-0.5 h-5 w-5 shrink-0 text-amber-700" aria-hidden="true" />
                      <BilingualText
                        viewLang={viewLang}
                        en={`Strict Sectional Timer (${perSectionDuration ?? 15} Minutes per Section): Each of the ${sections.length} sections has a dedicated ${perSectionDuration ?? 15}-minute countdown timer displayed in the top-right corner of the exam screen.`}
                        hi={`सख्त सेक्शनल टाइमर (प्रति सेक्शन ${perSectionDuration ?? 15} मिनट): सभी ${sections.length} सेक्शन के लिए अलग-अलग ${perSectionDuration ?? 15} मिनट का काउंटडाउन टाइमर परीक्षा स्क्रीन के ऊपर दाईं ओर दिखाई देगा।`}
                        enClassName="text-sm font-semibold text-[#0F172A] leading-relaxed"
                        hiClassName="text-sm font-medium text-slate-700 leading-relaxed"
                      />
                    </div>

                    <ul className="space-y-3 pl-1">
                      <li className="flex items-start gap-3">
                        <Clock className="mt-1 h-4 w-4 shrink-0 text-[#1E3A8A]" aria-hidden="true" />
                        <BilingualText
                          viewLang={viewLang}
                          en="Locked Section Navigation: You cannot switch to another section while the current section is active. Navigation to upcoming sections stays locked until the current section's timer reaches 00:00 or you manually click 'Submit Section'."
                          hi="लॉक किया गया सेक्शन नेविगेशन: वर्तमान सेक्शन चालू रहने के दौरान आप किसी अन्य सेक्शन में नहीं जा सकते। जब तक वर्तमान सेक्शन का समय 00:00 न हो जाए या आप स्वयं 'Submit Section' न करें, तब तक अगले सेक्शन लॉक रहेंगे।"
                        />
                      </li>
                      <li className="flex items-start gap-3">
                        <AlertCircle
                          className="mt-1 h-4 w-4 shrink-0 text-[#1E3A8A]"
                          aria-hidden="true"
                        />
                        <BilingualText
                          viewLang={viewLang}
                          en="Automatic Section Advancement & Submission: As soon as a section's 15-minute timer expires, your saved answers for that section are locked and the portal automatically advances you to the next section. When the final section timer reaches zero, the entire test is submitted automatically."
                          hi="स्वचालित सेक्शन परिवर्तन और ऑटो-सबमिशन: जैसे ही किसी सेक्शन के 15 मिनट समाप्त होंगे, आपके उत्तर सुरक्षित होकर लॉक हो जाएंगे और परीक्षा अपने आप अगले सेक्शन पर आगे बढ़ जाएगी। अंतिम सेक्शन का समय पूरा होने पर पूरा टेस्ट स्वतः सबमिट हो जाएगा।"
                        />
                      </li>
                    </ul>
                  </>
                ) : (
                  <ul className="space-y-3 pl-1">
                    <li className="flex items-start gap-3">
                      <Clock className="mt-1 h-4 w-4 shrink-0 text-[#1E3A8A]" aria-hidden="true" />
                      <BilingualText
                        viewLang={viewLang}
                        en={`Countdown Timer (${test.durationMinutes} Minutes): A live countdown timer is displayed in the top-right corner of your screen throughout the test.`}
                        hi={`काउंटडाउन टाइमर (${test.durationMinutes} मिनट): पूरी परीक्षा के दौरान आपकी स्क्रीन के ऊपर दाईं ओर एक लाइव काउंटडाउन टाइमर चलता रहेगा।`}
                      />
                    </li>
                    <li className="flex items-start gap-3">
                      <AlertCircle
                        className="mt-1 h-4 w-4 shrink-0 text-[#1E3A8A]"
                        aria-hidden="true"
                      />
                      <BilingualText
                        viewLang={viewLang}
                        en="Auto-Submission on Time Expiry: You do not need to submit manually if time runs out—when the timer reaches 00:00, your saved responses will be submitted automatically. In multi-section full mocks, each section has a strict 15-minute locked timer with automatic advancement."
                        hi="समय समाप्त होने पर ऑटो-सबमिशन: यदि समय समाप्त हो जाता है, तो आपको मैन्युअल रूप से सबमिट करने की आवश्यकता नहीं है—टाइमर 00:00 होने पर आपके उत्तर स्वतः सबमिट हो जाएंगे। फुल मॉक टेस्ट में प्रत्येक सेक्शन के लिए 15 मिनट का सख्त लॉक टाइमर और ऑटो-एडवांस लागू होता है।"
                      />
                    </li>
                  </ul>
                )}
              </div>
            </section>

            {/* Section 3: Navigation & Answering Rules */}
            <section className="overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-xs">
              <div className="border-b border-slate-100 bg-slate-50/70 px-4 py-3.5 sm:px-6">
                <div className="flex items-start gap-2.5">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-[#1E3A8A] text-xs font-bold text-white">
                    3
                  </span>
                  <BilingualText
                    viewLang={viewLang}
                    en="Navigation & Answering Controls"
                    hi="नेविगेशन और उत्तर देने के नियम"
                    enClassName="text-sm font-extrabold text-[#0F172A] sm:text-base"
                    hiClassName="text-xs font-bold text-[#1E3A8A] sm:text-sm"
                    stackGap="mt-0.5"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3 p-4 sm:grid-cols-2 sm:p-6">
                {/* Save & Next */}
                <div className="rounded-xl border border-slate-200 bg-[#F8FAFC] p-3.5">
                  <div className="mb-2 inline-flex items-center gap-1.5 rounded-lg bg-[#0F172A] px-2.5 py-1 text-xs font-bold text-white">
                    <span>Save &amp; Next</span>
                    <ArrowRight className="h-3.5 w-3.5 text-[#F59E0B]" aria-hidden="true" />
                  </div>
                  <BilingualText
                    viewLang={viewLang}
                    en="Saves your selected option for the current question and moves immediately to the next question."
                    hi="सहेजें और अगला: वर्तमान प्रश्न के लिए आपके चुने गए उत्तर को सहेजता है और तुरंत अगले प्रश्न पर ले जाता है।"
                    enClassName="text-xs sm:text-sm font-medium text-slate-800 leading-relaxed"
                    hiClassName="text-xs sm:text-sm text-slate-600 leading-relaxed"
                  />
                </div>

                {/* Previous */}
                <div className="rounded-xl border border-slate-200 bg-[#F8FAFC] p-3.5">
                  <div className="mb-2 inline-flex items-center gap-1 rounded-lg border border-slate-300 bg-white px-2.5 py-1 text-xs font-bold text-slate-800">
                    <ChevronLeft className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>Previous (Prev)</span>
                  </div>
                  <BilingualText
                    viewLang={viewLang}
                    en="Takes you back to the previous question in the active section without clearing your saved answer."
                    hi="पिछला: आपके सहेजे गए उत्तर को हटाए बिना आपको वर्तमान सेक्शन के पिछले प्रश्न पर वापस ले जाता है।"
                    enClassName="text-xs sm:text-sm font-medium text-slate-800 leading-relaxed"
                    hiClassName="text-xs sm:text-sm text-slate-600 leading-relaxed"
                  />
                </div>

                {/* Mark for Review */}
                <div className="rounded-xl border border-slate-200 bg-[#F8FAFC] p-3.5">
                  <div className="mb-2 inline-flex items-center gap-1.5 rounded-lg border border-purple-200 bg-purple-50 px-2.5 py-1 text-xs font-bold text-purple-800">
                    <Flag className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>Mark for Review &amp; Next</span>
                  </div>
                  <BilingualText
                    viewLang={viewLang}
                    en="Flags the question so you can revisit it later. If an option is selected while marking, it will be evaluated."
                    hi="समीक्षा के लिए चिह्नित करें: प्रश्न को बाद में पुनः देखने के लिए चिह्नित करता है। यदि विकल्प चुना गया है, तो इसका मूल्यांकन किया जाएगा।"
                    enClassName="text-xs sm:text-sm font-medium text-slate-800 leading-relaxed"
                    hiClassName="text-xs sm:text-sm text-slate-600 leading-relaxed"
                  />
                </div>

                {/* Clear Response */}
                <div className="rounded-xl border border-slate-200 bg-[#F8FAFC] p-3.5">
                  <div className="mb-2 inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-2.5 py-1 text-xs font-bold text-slate-700">
                    <Eraser className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>Clear Response</span>
                  </div>
                  <BilingualText
                    viewLang={viewLang}
                    en="Deselects your chosen option for the current question so you can skip it or pick a different answer."
                    hi="उत्तर हटाएं: वर्तमान प्रश्न के लिए चुने गए विकल्प को हटाता है ताकि आप इसे छोड़ सकें या दूसरा विकल्प चुन सकें।"
                    enClassName="text-xs sm:text-sm font-medium text-slate-800 leading-relaxed"
                    hiClassName="text-xs sm:text-sm text-slate-600 leading-relaxed"
                  />
                </div>
              </div>
            </section>
          </main>

          {/* Bottom Fixed Bar — Step 1 */}
          <div className="fixed inset-x-0 bottom-0 z-30 border-t border-slate-200 bg-white/95 shadow-[0_-4px_20px_rgba(15,23,42,0.06)] backdrop-blur-sm">
            <div className="mx-auto flex max-w-4xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
              <div className="hidden items-center gap-2 text-xs font-semibold text-slate-500 sm:flex">
                <BookOpenCheck className="h-4 w-4 text-[#1E3A8A]" aria-hidden="true" />
                <span>
                  {viewLang === 'hi'
                    ? 'चरण 1 / 2 • सामान्य निर्देश'
                    : viewLang === 'en'
                    ? 'Step 1 of 2 • General Instructions'
                    : 'Step 1 of 2 • General Instructions / सामान्य निर्देश'}
                </span>
              </div>

              <button
                type="button"
                onClick={() => setStep(2)}
                className="inline-flex min-h-[46px] w-full items-center justify-center gap-2 rounded-xl bg-[#1E3A8A] px-6 py-2.5 text-sm font-bold text-white shadow-sm transition-colors hover:bg-[#172554] sm:w-auto"
              >
                <span>
                  {viewLang === 'hi'
                    ? 'आगे बढ़ें'
                    : viewLang === 'en'
                    ? 'Next'
                    : 'Next / आगे बढ़ें'}
                </span>
                <ArrowRight className="h-4 w-4 text-[#F59E0B]" aria-hidden="true" />
              </button>
            </div>
          </div>
        </>
      ) : (
        /* Step 2: Special Instructions, Symbols & Language Selection */
        <>
          <main className="mx-auto w-full max-w-4xl flex-1 space-y-5 px-4 pb-6 pt-5 sm:px-6 sm:pt-6">
            {/* Question Palette Legend Table */}
            <section className="overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-xs">
              <div className="border-b border-slate-100 bg-slate-50/70 px-4 py-3.5 sm:px-6">
                <div className="flex items-start gap-2.5">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-[#1E3A8A] text-xs font-bold text-white">
                    <Info className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                  <BilingualText
                    viewLang={viewLang}
                    en="Question Palette Symbols & Status Legend"
                    hi="प्रश्न पैलेट संकेत तालिका (स्टेटस बैज)"
                    enClassName="text-sm font-extrabold text-[#0F172A] sm:text-base"
                    hiClassName="text-xs font-bold text-[#1E3A8A] sm:text-sm"
                    stackGap="mt-0.5"
                  />
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-left">
                  <thead>
                    <tr className="border-b border-slate-200 bg-[#F8FAFC] text-[11px] font-bold uppercase tracking-wider text-slate-500">
                      <th className="w-24 px-4 py-3 text-center sm:w-28">
                        {viewLang === 'hi'
                          ? 'संकेत'
                          : viewLang === 'en'
                          ? 'Symbol'
                          : 'Symbol / संकेत'}
                      </th>
                      <th className="px-4 py-3">
                        {viewLang === 'hi'
                          ? 'अर्थ और विवरण'
                          : viewLang === 'en'
                          ? 'Status Meaning'
                          : 'Status Meaning / विवरण'}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {/* 1. Not Attempted — Blue Square (#1D4ED8) */}
                    <tr className="hover:bg-slate-50/60">
                      <td className="px-4 py-4">
                        <div className="mx-auto w-9">
                          <PaletteSymbol state="not-attempted" label={1} size="md" />
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <BilingualText
                          viewLang={viewLang}
                          en="Not Attempted: You have not answered this question yet (unvisited or skipped without selecting an option)."
                          hi="अभी तक उत्तर नहीं दिया गया: आपने अभी तक इस प्रश्न का उत्तर नहीं दिया है (अभी नहीं देखा गया या बिना विकल्प चुने छोड़ दिया गया)।"
                          enClassName="text-sm font-semibold text-[#0F172A] leading-snug"
                          hiClassName="text-xs sm:text-sm font-medium text-slate-600 leading-snug"
                        />
                      </td>
                    </tr>

                    {/* 2. Answered — Green Square (#16A34A) */}
                    <tr className="hover:bg-slate-50/60">
                      <td className="px-4 py-4">
                        <div className="mx-auto w-9">
                          <PaletteSymbol state="answered" label={5} size="md" />
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <BilingualText
                          viewLang={viewLang}
                          en="Answered: You have answered the question and your response is saved for evaluation."
                          hi="उत्तर दिया गया: आपने प्रश्न का उत्तर दे दिया है और मूल्यांकन के लिए आपका उत्तर सहेजा जा चुका है।"
                          enClassName="text-sm font-semibold text-[#0F172A] leading-snug"
                          hiClassName="text-xs sm:text-sm font-medium text-slate-600 leading-snug"
                        />
                      </td>
                    </tr>

                    {/* 3. Not Attempted & Marked for Review — Red Square (#DC2626) + ▲ */}
                    <tr className="hover:bg-slate-50/60">
                      <td className="px-4 py-4">
                        <div className="mx-auto w-9">
                          <PaletteSymbol state="marked" label={9} size="md" />
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <BilingualText
                          viewLang={viewLang}
                          en="Not Attempted & Marked for Review: You have NOT answered this question, but marked it to revisit later."
                          hi="उत्तर नहीं दिया गया, पर समीक्षा के लिए चिह्नित: आपने इस प्रश्न का उत्तर नहीं दिया है, लेकिन बाद में देखने के लिए इसे चिह्नित किया है।"
                          enClassName="text-sm font-semibold text-[#0F172A] leading-snug"
                          hiClassName="text-xs sm:text-sm font-medium text-slate-600 leading-snug"
                        />
                      </td>
                    </tr>

                    {/* 4. Answered & Marked for Review — Yellow Square (#EAB308) + ▲ */}
                    <tr className="hover:bg-slate-50/60">
                      <td className="px-4 py-4">
                        <div className="mx-auto w-9">
                          <PaletteSymbol state="answered-marked" label={14} size="md" />
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <BilingualText
                          viewLang={viewLang}
                          en="Answered & Marked for Review (will be evaluated): You have answered this question and marked it for review. This answer WILL be considered for final evaluation."
                          hi="उत्तर दिया गया और समीक्षा के लिए चिह्नित (मूल्यांकन किया जाएगा): आपने इस प्रश्न का उत्तर दिया है और समीक्षा के लिए चिह्नित किया है। अंतिम मूल्यांकन में इस उत्तर को गिना जाएगा।"
                          enClassName="text-sm font-semibold text-[#0F172A] leading-snug"
                          hiClassName="text-xs sm:text-sm font-medium text-slate-600 leading-snug"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Quick Marking & Fair-Play Reminder Card */}
            <section className="rounded-2xl border border-[#E2E8F0] bg-white p-4 shadow-xs sm:p-5">
              <div className="flex items-start gap-2.5">
                <ShieldCheck
                  className="mt-0.5 h-5 w-5 shrink-0 text-[#1E3A8A]"
                  aria-hidden="true"
                />
                <div className="space-y-2">
                  <BilingualText
                    viewLang={viewLang}
                    en={`Marking Reminder: Each correct answer awards +${test.positiveMarks} marks and each incorrect answer deducts -${test.negativeMarks.toFixed(2)} marks. Unattempted questions carry 0 penalty.`}
                    hi={`अंकन अनुस्मारक: प्रत्येक सही उत्तर के लिए +${test.positiveMarks} अंक मिलेंगे और प्रत्येक गलत उत्तर के लिए -${test.negativeMarks.toFixed(2)} अंक काटे जाएंगे। अनुत्तरित प्रश्नों पर कोई नकारात्मक अंकन नहीं है।`}
                    enClassName="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed"
                    hiClassName="text-xs sm:text-sm text-slate-600 leading-relaxed"
                  />
                </div>
              </div>
            </section>
          </main>

          {/* Bottom Sticky Declaration & Language Selection Card */}
          <div className="sticky bottom-0 z-30 border-t border-slate-200 bg-white shadow-[0_-8px_28px_rgba(15,23,42,0.08)]">
            <div className="mx-auto max-w-4xl space-y-3.5 px-4 py-4 sm:px-6">
              {/* Language Selector Row */}
              <div className="rounded-xl border border-slate-200 bg-[#F8FAFC] p-3.5">
                <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-between">
                  <label
                    htmlFor="default-test-language"
                    className="flex items-start gap-2 text-xs font-bold text-[#0F172A] sm:text-sm"
                  >
                    <Globe
                      className="mt-0.5 h-4 w-4 shrink-0 text-[#1E3A8A]"
                      aria-hidden="true"
                    />
                    <span>
                      {viewLang === 'hi'
                        ? 'अपनी डिफ़ॉल्ट भाषा चुनें'
                        : viewLang === 'en'
                        ? 'Select Default Test Language'
                        : 'Select Default Test Language / अपनी डिफ़ॉल्ट भाषा चुनें'}
                      <span className="ml-1 text-rose-600" aria-hidden="true">
                        *
                      </span>
                    </span>
                  </label>

                  <select
                    id="default-test-language"
                    value={selectedTestLang}
                    onChange={(e) =>
                      setSelectedTestLang(e.target.value as QuestionLanguage | '')
                    }
                    className={`min-h-[42px] w-full rounded-xl border bg-white px-3.5 py-2 text-sm font-bold transition-colors focus:outline-none sm:w-64 ${
                      selectedTestLang === ''
                        ? 'border-amber-400 text-slate-600 ring-1 ring-amber-200 focus:border-[#1E3A8A]'
                        : 'border-emerald-500 text-[#0F172A] ring-1 ring-emerald-200 focus:border-[#1E3A8A]'
                    }`}
                  >
                    <option value="">
                      -- Select Language / भाषा चुनें --
                    </option>
                    <option value="en">English</option>
                    <option value="hi">हिंदी (Hindi)</option>
                  </select>
                </div>

                <p className="mt-2 flex items-center gap-1.5 text-[11px] font-medium text-slate-500 sm:text-xs">
                  <CheckCircle2
                    className="h-3.5 w-3.5 shrink-0 text-emerald-600"
                    aria-hidden="true"
                  />
                  <span>
                    {viewLang === 'hi'
                      ? 'आप परीक्षा के दौरान भी कभी भी प्रश्न की भाषा बदल सकते हैं।'
                      : viewLang === 'en'
                      ? 'You can also switch question language anytime inside the test.'
                      : 'You can also switch question language anytime inside the test. / आप परीक्षा के दौरान भी कभी भी प्रश्न की भाषा बदल सकते हैं।'}
                  </span>
                </p>
              </div>

              {/* Declaration Checkbox */}
              <label
                htmlFor="instructions-declaration"
                className={`flex cursor-pointer items-start gap-3 rounded-xl border p-3 transition-colors ${
                  isDeclared
                    ? 'border-[#1E3A8A]/40 bg-blue-50/50'
                    : 'border-slate-200 bg-white hover:bg-slate-50'
                }`}
              >
                <input
                  id="instructions-declaration"
                  type="checkbox"
                  checked={isDeclared}
                  onChange={(e) => setIsDeclared(e.target.checked)}
                  className="mt-0.5 h-5 w-5 shrink-0 cursor-pointer rounded border-slate-300 accent-[#1E3A8A]"
                />
                <BilingualText
                  viewLang={viewLang}
                  en="I have read and understood all instructions. I agree to follow the test rules on SSC Sathi."
                  hi="मैंने सभी निर्देशों को ध्यानपूर्वक पढ़ और समझ लिया है। मैं SSC Sathi के परीक्षा नियमों का पालन करने के लिए सहमत हूँ।"
                  enClassName="text-xs sm:text-sm font-semibold text-[#0F172A] leading-snug"
                  hiClassName="text-xs sm:text-sm font-medium text-slate-600 leading-snug"
                  stackGap="mt-0.5"
                />
              </label>

              {/* Action Buttons Row */}
              <div className="flex items-center justify-between gap-3 pt-0.5">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="inline-flex min-h-[46px] items-center justify-center gap-1.5 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-xs font-bold text-slate-700 transition-colors hover:bg-slate-100 sm:px-5 sm:text-sm"
                >
                  <ArrowLeft className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>
                    {viewLang === 'hi'
                      ? 'पीछे'
                      : viewLang === 'en'
                      ? 'Back'
                      : 'Back / पीछे'}
                  </span>
                </button>

                <button
                  type="button"
                  disabled={!canStart}
                  onClick={handleStartClick}
                  className={`inline-flex min-h-[46px] flex-1 items-center justify-center gap-2 rounded-xl px-6 py-2.5 text-xs font-bold transition-all sm:flex-none sm:text-sm ${
                    canStart
                      ? 'bg-[#1E3A8A] text-white shadow-sm hover:bg-[#172554]'
                      : 'cursor-not-allowed bg-slate-200 text-slate-400'
                  }`}
                >
                  <Play className="h-4 w-4 shrink-0 fill-current" aria-hidden="true" />
                  <span>
                    {viewLang === 'hi'
                      ? 'परीक्षा शुरू करें'
                      : viewLang === 'en'
                      ? 'Start Test'
                      : 'Start Test / परीक्षा शुरू करें'}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
