import { useEffect, useState } from 'react';
import {
  ArrowRight,
  BookOpen,
  BookOpenCheck,
  BrainCircuit,
  Calculator,
  CheckCircle2,
  ExternalLink,
  FolderOpen,
  Landmark,
  X,
} from 'lucide-react';
import { motion } from 'motion/react';
import {
  STUDY_NOTE_FOLDERS,
  StudyNoteItem,
  StudySubjectId,
} from '../data/studyNotes';

const TELEGRAM_CHANNEL_URL = 'https://t.me/ssc_sathi';

function SubjectIcon({
  subjectId,
  className,
}: {
  subjectId: StudySubjectId;
  className?: string;
}) {
  switch (subjectId) {
    case 'quant':
      return <Calculator className={className} aria-hidden="true" />;
    case 'english':
      return <BookOpenCheck className={className} aria-hidden="true" />;
    case 'reasoning':
      return <BrainCircuit className={className} aria-hidden="true" />;
    case 'ga':
      return <Landmark className={className} aria-hidden="true" />;
  }
}

export function StudyNotesSection() {
  const [selectedFolderId, setSelectedFolderId] = useState<StudySubjectId>('quant');
  const [activeNote, setActiveNote] = useState<StudyNoteItem | null>(null);

  useEffect(() => {
    if (!activeNote) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveNote(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeNote]);

  const activeFolder =
    STUDY_NOTE_FOLDERS.find((f) => f.id === selectedFolderId) ?? STUDY_NOTE_FOLDERS[0];

  const activeNoteIndex = activeNote
    ? activeFolder.notes.findIndex((n) => n.id === activeNote.id)
    : -1;
  const nextNote =
    activeNoteIndex >= 0 && activeNoteIndex < activeFolder.notes.length - 1
      ? activeFolder.notes[activeNoteIndex + 1]
      : null;

  return (
    <motion.div
      key="study-notes-view"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
      className="mt-6 space-y-6"
    >
      {/* Section Header */}
      <div className="flex flex-col gap-3 rounded-3xl border border-[#E2E8F0] bg-[#FFFFFF] px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7 shadow-[0_10px_28px_-10px_rgba(30,58,138,0.10),0_1px_4px_rgba(15,23,42,0.04)]">
        <div className="flex items-center gap-3.5 min-w-0">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-indigo-50 text-[#1E3A8A] ring-1 ring-indigo-100">
            <FolderOpen className="h-6 w-6" aria-hidden="true" />
          </div>
          <div className="min-w-0">
            <h1 className="text-lg sm:text-xl font-extrabold tracking-tight text-[#0F172A]">
              Study Notes &amp; Revision Sheets
            </h1>
            <p className="mt-0.5 text-xs sm:text-sm text-slate-600">
              High-yield SSC CGL, CHSL &amp; MTS formulas, grammar rules, shortcuts &amp; Static GK
            </p>
          </div>
        </div>

        <a
          href={TELEGRAM_CHANNEL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[42px] shrink-0 items-center justify-center gap-2 rounded-xl bg-[#0088cc] px-4 py-2 text-xs sm:text-sm font-bold text-white shadow-[0_6px_16px_-4px_rgba(0,136,204,0.45)] transition-all hover:-translate-y-0.5 hover:bg-[#0077b5] whitespace-nowrap"
        >
          <span>Full PDFs on Telegram</span>
          <ExternalLink className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
        </a>
      </div>

      {/* 4 Subject Folders Grid */}
      <section aria-label="Study note subject folders">
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 sm:gap-4">
          {STUDY_NOTE_FOLDERS.map((folder) => {
            const isActive = folder.id === activeFolder.id;
            return (
              <button
                key={folder.id}
                type="button"
                onClick={() => setSelectedFolderId(folder.id)}
                aria-pressed={isActive}
                className={`group flex flex-col items-start justify-between rounded-2xl border bg-[#FFFFFF] p-4 sm:p-5 text-left shadow-[0_6px_20px_-6px_rgba(15,23,42,0.08),0_1px_3px_rgba(15,23,42,0.04)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg ${
                  isActive
                    ? `${folder.accentBorder} ring-1 ring-inset ring-current/15`
                    : 'border-[#E2E8F0] hover:border-indigo-300'
                }`}
              >
                <div className="flex w-full items-center justify-between gap-2">
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${folder.accentBg} ${folder.accentText} transition-transform duration-200 group-hover:scale-105`}
                  >
                    <SubjectIcon subjectId={folder.id} className="h-5 w-5" />
                  </div>
                  <span
                    className={`text-[11px] font-bold tabular-nums ${
                      isActive ? 'text-[#1E3A8A]' : 'text-slate-400'
                    }`}
                  >
                    {folder.notes.length} {folder.notes.length === 1 ? 'Note' : 'Notes'}
                  </span>
                </div>

                <div className="mt-3.5">
                  <div className="text-sm sm:text-base font-extrabold text-[#0F172A] leading-snug">
                    {folder.name}
                  </div>
                  <div className="mt-0.5 text-xs font-medium text-slate-500">
                    {folder.subtitle}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* Active Folder Topic Cards */}
      <section aria-label={`${activeFolder.name} study notes`}>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <h2 className="text-base sm:text-lg font-extrabold text-[#0F172A]">
              {activeFolder.name}{' '}
              <span className="font-semibold text-slate-400">
                — {activeFolder.subtitle}
              </span>
            </h2>
            <p className="mt-0.5 text-xs text-slate-500 tabular-nums">
              {activeFolder.notes.length} curated revision guides ready to read
            </p>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
          {activeFolder.notes.map((note) => {
            const totalPoints = note.sections.reduce(
              (acc, sec) => acc + sec.points.length,
              0
            );

            return (
              <article
                key={note.id}
                className="flex flex-col justify-between rounded-2xl border border-[#E2E8F0] bg-[#FFFFFF] p-5 shadow-[0_8px_24px_-6px_rgba(15,23,42,0.08),0_1px_3px_rgba(15,23,42,0.04)] transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-300 hover:shadow-lg"
              >
                <div>
                  <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-500">
                    <span className={`font-bold ${activeFolder.accentText}`}>
                      {activeFolder.name}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{note.examRelevance}</span>
                    <span aria-hidden="true">·</span>
                    <span className="tabular-nums">{note.readTime}</span>
                  </div>

                  <h3 className="mt-2.5 text-base sm:text-lg font-extrabold text-[#0F172A] leading-snug">
                    {note.title}
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {note.summary}
                  </p>

                  <div className="mt-3.5 flex items-center gap-1.5 text-xs font-semibold text-emerald-700 tabular-nums">
                    <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-600" aria-hidden="true" />
                    <span>
                      {note.sections.length} sections · {totalPoints} key exam points
                    </span>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setActiveNote(note)}
                    className="inline-flex min-h-[42px] items-center justify-center gap-1.5 rounded-xl bg-[#1E3A8A] px-4 py-2 text-xs sm:text-sm font-bold text-white shadow-xs transition-all hover:bg-[#172E6E] whitespace-nowrap"
                  >
                    <BookOpen className="h-4 w-4 shrink-0 text-[#F59E0B]" aria-hidden="true" />
                    <span>Read Note</span>
                  </button>

                  <a
                    href={TELEGRAM_CHANNEL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[42px] items-center justify-center gap-1.5 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-2 text-xs sm:text-sm font-bold text-[#0F172A] transition-colors hover:border-[#0088cc] hover:bg-sky-50 hover:text-[#0088cc] whitespace-nowrap"
                  >
                    <span>Telegram PDF</span>
                    <ExternalLink className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Clean Read Note Viewer Modal */}
      {activeNote && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0F172A]/55 p-4 backdrop-blur-xs"
          onClick={() => setActiveNote(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="study-note-viewer-title"
            onClick={(e) => e.stopPropagation()}
            className="flex max-h-[86vh] w-full max-w-2xl flex-col overflow-hidden rounded-3xl border border-[#E2E8F0] bg-[#FFFFFF] shadow-2xl"
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-3 border-b border-[#E2E8F0] px-5 py-4 sm:px-6">
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-500">
                  <span className={`font-bold ${activeFolder.accentText}`}>
                    {activeFolder.name}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{activeNote.examRelevance}</span>
                  <span aria-hidden="true">·</span>
                  <span>{activeNote.readTime}</span>
                </div>
                <h2
                  id="study-note-viewer-title"
                  className="mt-1 text-base sm:text-lg font-extrabold text-[#0F172A] leading-snug"
                >
                  {activeNote.title}
                </h2>
              </div>

              <button
                type="button"
                onClick={() => setActiveNote(null)}
                aria-label="Close note viewer"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#E2E8F0] bg-white text-slate-500 transition-colors hover:bg-[#F4F6FB] hover:text-[#0F172A]"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="flex-1 overflow-y-auto px-5 py-5 sm:px-6 space-y-5">
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {activeNote.summary}
              </p>

              {activeNote.sections.map((section) => (
                <div
                  key={section.heading}
                  className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-4 sm:p-5"
                >
                  <h3 className="text-sm font-extrabold text-[#1E3A8A]">
                    {section.heading}
                  </h3>
                  <ul className="mt-3 space-y-2.5 text-xs sm:text-sm text-[#0F172A] leading-relaxed">
                    {section.points.map((pt, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#F59E0B]" aria-hidden="true" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Modal Footer */}
            <div className="flex flex-wrap items-center justify-between gap-2.5 border-t border-[#E2E8F0] bg-[#FFFFFF] px-5 py-3.5 sm:px-6">
              <a
                href={TELEGRAM_CHANNEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[40px] items-center gap-1.5 rounded-xl border border-[#0088cc]/30 bg-sky-50 px-3.5 py-2 text-xs font-bold text-[#0088cc] transition-colors hover:bg-sky-100 whitespace-nowrap"
              >
                <span>Download PDF on Telegram</span>
                <ExternalLink className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              </a>

              <div className="flex items-center gap-2">
                {nextNote && (
                  <button
                    type="button"
                    onClick={() => setActiveNote(nextNote)}
                    className="inline-flex min-h-[40px] items-center gap-1.5 rounded-xl bg-[#1E3A8A] px-4 py-2 text-xs font-bold text-white hover:bg-[#172E6E] whitespace-nowrap"
                  >
                    <span>Next Note</span>
                    <ArrowRight className="h-3.5 w-3.5 text-[#F59E0B]" aria-hidden="true" />
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => setActiveNote(null)}
                  className="inline-flex min-h-[40px] items-center rounded-xl border border-[#E2E8F0] px-4 py-2 text-xs font-bold text-slate-700 hover:bg-[#F4F6FB] whitespace-nowrap"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}
