import { Fragment, useMemo } from 'react';
import { MathSegment, parseMathText } from '../utils/mathFormat';

interface MathTextProps {
  text: string;
  className?: string;
}

function segmentPlainLength(segments: MathSegment[]): number {
  let len = 0;
  for (const seg of segments) {
    if (seg.type === 'text') len += seg.value.length;
    else len += Math.max(segmentPlainLength(seg.numerator), segmentPlainLength(seg.denominator));
  }
  return len;
}

function renderSegments(segments: MathSegment[], depth: number) {
  return segments.map((seg, idx) => {
    if (seg.type === 'text') {
      return <Fragment key={idx}>{seg.value}</Fragment>;
    }

    const numLen = segmentPlainLength(seg.numerator);
    const denLen = segmentPlainLength(seg.denominator);
    const allowWrap = Math.max(numLen, denLen) > 26;
    const isNested = depth > 0;

    return (
      <span
        key={idx}
        role="math"
        aria-label={seg.rawText}
        className={`inline-flex max-w-full flex-col items-stretch align-middle leading-[1.15] ${
          isNested
            ? 'mx-[0.12em] my-[0.04em] text-[0.84em]'
            : 'mx-[0.18em] my-[0.14em] text-[0.88em]'
        }`}
      >
        <span
          className={`border-b-[1.25px] border-current px-[0.22em] pb-[0.1em] text-center ${
            allowWrap ? 'whitespace-normal break-words' : 'whitespace-nowrap'
          }`}
        >
          {renderSegments(seg.numerator, depth + 1)}
        </span>
        <span
          className={`px-[0.22em] pt-[0.1em] text-center ${
            allowWrap ? 'whitespace-normal break-words' : 'whitespace-nowrap'
          }`}
        >
          {renderSegments(seg.denominator, depth + 1)}
        </span>
      </span>
    );
  });
}

/**
 * Global text-formatting component that automatically detects and renders
 * mathematical slash-based fractions (e.g., (p² + 1) / (p² − 1), (√2 + 1) / (√2 − 1),
 * 121π/4, a/b, 14 3/5) as crisp vertical stacked fractions across both English and Hindi text.
 */
export function MathText({ text, className }: MathTextProps) {
  const segments = useMemo(() => parseMathText(text), [text]);

  if (!text) return null;

  // Fast path: plain text with no detected mathematical fractions
  if (segments.length === 1 && segments[0].type === 'text') {
    return className ? <span className={className}>{text}</span> : <>{text}</>;
  }

  const content = renderSegments(segments, 0);
  return className ? <span className={className}>{content}</span> : <>{content}</>;
}
