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
    else if (seg.type === 'fraction') {
      len += Math.max(segmentPlainLength(seg.numerator), segmentPlainLength(seg.denominator));
    } else if (seg.type === 'delimited') {
      len += segmentPlainLength(seg.content) + 2;
    } else if (seg.type === 'sqrt') {
      len += segmentPlainLength(seg.content) + 1;
    }
  }
  return len;
}

function AutoScaleDelimiter({ kind }: { kind: '(' | ')' | '[' | ']' }) {
  const path =
    kind === '('
      ? 'M 8.8 1 C 2.2 10, 2.2 30, 8.8 39'
      : kind === ')'
        ? 'M 1.2 1 C 7.8 10, 7.8 30, 1.2 39'
        : kind === '['
          ? 'M 8.5 1.2 L 2.2 1.2 L 2.2 38.8 L 8.5 38.8'
          : 'M 1.5 1.2 L 7.8 1.2 L 7.8 38.8 L 1.5 38.8';

  return (
    <svg
      viewBox="0 0 10 40"
      preserveAspectRatio="none"
      aria-hidden="true"
      className="w-[0.42em] shrink-0 self-stretch overflow-visible"
    >
      <path
        d={path}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

function AutoScaleRadical({ isTall }: { isTall: boolean }) {
  return (
    <svg
      viewBox="0 0 14 26"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={`${isTall ? 'w-[0.72em]' : 'w-[0.62em]'} shrink-0 self-stretch overflow-visible`}
    >
      <path
        d="M 0.6 15.8 L 3.4 14.2 L 6.6 24.8 L 13.4 0.8 L 14.2 0.8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

function renderSegments(segments: MathSegment[], depth: number) {
  return segments.map((seg, idx) => {
    if (seg.type === 'text') {
      return <Fragment key={idx}>{seg.value}</Fragment>;
    }

    if (seg.type === 'delimited') {
      return (
        <span
          key={idx}
          className="mx-[0.06em] inline-flex max-w-full items-stretch align-middle"
        >
          <AutoScaleDelimiter kind={seg.open} />
          <span className="inline-flex items-center px-[0.04em]">
            {renderSegments(seg.content, depth)}
          </span>
          <AutoScaleDelimiter kind={seg.close} />
        </span>
      );
    }

    if (seg.type === 'sqrt') {
      return (
        <span
          key={idx}
          role="math"
          aria-label={seg.rawText}
          className={`inline-flex max-w-full items-stretch align-middle ${
            seg.isTall ? 'mx-[0.12em] my-[0.1em]' : 'mx-[0.04em]'
          }`}
        >
          <AutoScaleRadical isTall={seg.isTall} />
          <span
            className={`inline-flex items-center border-t-[1.45px] border-current px-[0.14em] ${
              seg.isTall ? 'pt-[0.14em] pb-[0.04em]' : 'pt-[0.05em] leading-[1.15]'
            }`}
          >
            {renderSegments(seg.content, depth)}
          </span>
        </span>
      );
    }

    // Stacked vertical fraction (>= 0.96em top-level so numerators & denominators are large and uncramped)
    const numLen = segmentPlainLength(seg.numerator);
    const denLen = segmentPlainLength(seg.denominator);
    const allowWrap = Math.max(numLen, denLen) > 26;
    const isNested = depth > 0;

    return (
      <span
        key={idx}
        role="math"
        aria-label={seg.rawText}
        className={`inline-flex max-w-full flex-col items-stretch align-middle leading-[1.2] ${
          isNested
            ? 'mx-[0.14em] my-[0.06em] text-[0.88em]'
            : 'mx-[0.2em] my-[0.16em] text-[0.96em]'
        }`}
      >
        <span
          className={`border-b-[1.5px] border-current px-[0.28em] pb-[0.14em] text-center ${
            allowWrap ? 'whitespace-normal break-words' : 'whitespace-nowrap'
          }`}
        >
          {renderSegments(seg.numerator, depth + 1)}
        </span>
        <span
          className={`px-[0.28em] pt-[0.14em] text-center ${
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
 * Global text-formatting component that automatically renders:
 * - Large, uncramped vertical stacked fractions (0.96em)
 * - Vertically auto-scaling parentheses ( ) and brackets [ ] around stacked fractions
 * - Vertically auto-scaling square root symbols √ with crisp vinculum bars
 * Works seamlessly across both English and Hindi text and scales proportionally with font zoom.
 */
export function MathText({ text, className }: MathTextProps) {
  const segments = useMemo(() => parseMathText(text), [text]);

  if (!text) return null;

  if (segments.length === 1 && segments[0].type === 'text') {
    return className ? <span className={className}>{text}</span> : <>{text}</>;
  }

  const content = renderSegments(segments, 0);
  return className ? <span className={className}>{content}</span> : <>{content}</>;
}
