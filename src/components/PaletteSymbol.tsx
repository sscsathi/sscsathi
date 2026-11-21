import { QuestionStatus } from '../types/exam';

export type PaletteVisualState =
  | 'not-attempted'
  | 'answered'
  | 'marked'
  | 'answered-marked';

export function toPaletteVisualState(status: QuestionStatus): PaletteVisualState {
  switch (status) {
    case 'answered':
      return 'answered';
    case 'marked':
      return 'marked';
    case 'answered-marked':
      return 'answered-marked';
    case 'not-visited':
    case 'not-answered':
    default:
      return 'not-attempted';
  }
}

interface PaletteSymbolProps {
  state: PaletteVisualState;
  label: string | number;
  size?: 'sm' | 'md' | 'grid';
  isCurrent?: boolean;
  reserveTriangleSpace?: boolean;
}

const BOX_STYLES: Record<PaletteVisualState, string> = {
  'not-attempted': 'bg-[#1D4ED8] border-[#1E40AF] text-white',
  answered: 'bg-[#16A34A] border-[#15803D] text-white',
  marked: 'bg-[#DC2626] border-[#B91C1C] text-white',
  'answered-marked': 'bg-[#EAB308] border-[#CA8A04] text-[#0F172A]',
};

const SIZE_CLASSES: Record<'sm' | 'md' | 'grid', string> = {
  sm: 'h-6 w-6 text-[11px] rounded-[5px]',
  md: 'h-9 w-9 text-xs rounded-md',
  grid: 'h-9 w-full text-xs sm:h-10 sm:text-sm rounded-md',
};

export function PaletteSymbol({
  state,
  label,
  size = 'md',
  isCurrent = false,
  reserveTriangleSpace = false,
}: PaletteSymbolProps) {
  const showTriangle = state === 'marked' || state === 'answered-marked';
  const currentRing = isCurrent ? 'ring-2 ring-[#0F172A] ring-offset-2' : '';

  return (
    <span className="inline-flex w-full flex-col items-center justify-start">
      <span
        className={`inline-flex shrink-0 items-center justify-center border font-mono font-bold tabular-nums shadow-2xs transition-all ${SIZE_CLASSES[size]} ${BOX_STYLES[state]} ${currentRing}`}
      >
        {label}
      </span>
      {showTriangle ? (
        <span
          aria-hidden="true"
          className="mt-[2px] flex h-[7px] items-center justify-center"
        >
          <svg
            viewBox="0 0 10 6"
            className="h-[6px] w-[10px] fill-[#0F172A]"
            focusable="false"
          >
            <polygon points="5,0 10,6 0,6" />
          </svg>
        </span>
      ) : reserveTriangleSpace ? (
        <span aria-hidden="true" className="mt-[2px] h-[7px]" />
      ) : null}
    </span>
  );
}
