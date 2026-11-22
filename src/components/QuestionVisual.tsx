import { useId } from 'react';
import {
  BarChartVisual,
  CubeNetVisual,
  HistogramVisual,
  LineChartVisual,
  PieChartVisual,
  PiePatternStyle,
  QuestionVisualSpec,
  StackedBarChartVisual,
  Venn2Visual,
  Venn3Visual,
  VisualFillStyle,
} from '../types/visual';

interface QuestionVisualProps {
  visual: QuestionVisualSpec;
  compact?: boolean;
}

const DEFAULT_SERIES_FILLS: VisualFillStyle[] = ['solid', 'outline', 'muted', 'hatched'];
const DEFAULT_PIE_PATTERNS: PiePatternStyle[] = [
  'solid-dark',
  'light-gray',
  'mid-gray',
  'hatch-diag',
  'dots',
  'hatch-cross',
];

function computeNiceStep(minVal: number, maxVal: number, targetTicks = 5): number {
  const span = Math.max(maxVal - minVal, 1);
  const rawStep = span / targetTicks;
  const mag = Math.pow(10, Math.floor(Math.log10(rawStep)));
  const norm = rawStep / mag;
  if (norm <= 1) return mag;
  if (norm <= 2) return 2 * mag;
  if (norm <= 5) return 5 * mag;
  return 10 * mag;
}

function buildTicks(minVal: number, maxVal: number, step: number): number[] {
  const ticks: number[] = [];
  const safeStep = step > 0 ? step : 10;
  for (let v = minVal; v <= maxVal + safeStep * 0.001; v += safeStep) {
    ticks.push(Math.round(v * 1000) / 1000);
    if (ticks.length > 20) break;
  }
  return ticks;
}

function resolveSeriesFill(fill: VisualFillStyle, uid: string): { fill: string; stroke: string } {
  switch (fill) {
    case 'solid':
      return { fill: '#1E293B', stroke: '#0F172A' };
    case 'muted':
      return { fill: '#94A3B8', stroke: '#0F172A' };
    case 'outline':
      return { fill: '#FFFFFF', stroke: '#0F172A' };
    case 'hatched':
      return { fill: `url(#${uid}-hatch-diag)`, stroke: '#0F172A' };
  }
}

function resolvePieFill(pattern: PiePatternStyle, uid: string): string {
  switch (pattern) {
    case 'solid-dark':
      return '#334155';
    case 'mid-gray':
      return '#64748B';
    case 'light-gray':
      return '#CBD5E1';
    case 'hatch-diag':
      return `url(#${uid}-hatch-diag)`;
    case 'hatch-cross':
      return `url(#${uid}-hatch-cross)`;
    case 'dots':
      return `url(#${uid}-dots)`;
  }
}

function SharedPatternDefs({ uid }: { uid: string }) {
  return (
    <defs>
      <pattern
        id={`${uid}-hatch-diag`}
        width="8"
        height="8"
        patternUnits="userSpaceOnUse"
        patternTransform="rotate(45)"
      >
        <rect width="8" height="8" fill="#FFFFFF" />
        <line x1="0" y1="0" x2="0" y2="8" stroke="#1E293B" strokeWidth="2.2" />
      </pattern>
      <pattern id={`${uid}-hatch-cross`} width="8" height="8" patternUnits="userSpaceOnUse">
        <rect width="8" height="8" fill="#F8FAFC" />
        <path d="M 0 0 L 8 8 M 8 0 L 0 8" stroke="#334155" strokeWidth="1.2" />
      </pattern>
      <pattern id={`${uid}-dots`} width="7" height="7" patternUnits="userSpaceOnUse">
        <rect width="7" height="7" fill="#F1F5F9" />
        <circle cx="3.5" cy="3.5" r="1.5" fill="#1E293B" />
      </pattern>
    </defs>
  );
}

function RenderBarChart({ visual, uid }: { visual: BarChartVisual; uid: string }) {
  const { categories, series } = visual;
  const allVals = series.flatMap((s) => s.values);
  const dataMax = Math.max(...allVals, 1);
  const yMin = visual.yMin ?? 0;
  const yStep = visual.yStep ?? computeNiceStep(yMin, visual.yMax ?? dataMax);
  const yMax = visual.yMax ?? Math.ceil(dataMax / yStep) * yStep;
  const ticks = buildTicks(yMin, yMax, yStep);

  const showLegend = visual.showLegend ?? series.length > 1;
  const hasTitle = Boolean(visual.title);
  const hasXAxisLabel = Boolean(visual.xAxisLabel);
  const hasYAxisLabel = Boolean(visual.yAxisLabel);

  const W = 540;
  const padTop = hasTitle ? 44 : 22;
  const padRight = 22;
  const padLeft = hasYAxisLabel ? 64 : 48;
  const padBottom = 38 + (hasXAxisLabel ? 22 : 0) + (showLegend ? 28 : 0);
  const plotH = 195;
  const H = padTop + plotH + padBottom;
  const plotW = W - padLeft - padRight;

  const yToPx = (val: number) =>
    padTop + plotH - ((val - yMin) / Math.max(yMax - yMin, 1)) * plotH;

  const catCount = Math.max(categories.length, 1);
  const slotW = plotW / catCount;
  const groupW = Math.min(slotW * 0.68, series.length === 1 ? 42 : 76);
  const barGap = series.length > 1 ? 5 : 0;
  const barW = Math.max(10, (groupW - barGap * (series.length - 1)) / series.length);

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      role="img"
      aria-label={visual.title || 'Bar Graph'}
      className="block w-full max-w-[560px] h-auto select-none"
    >
      <SharedPatternDefs uid={uid} />
      <rect width={W} height={H} fill="#FFFFFF" />

      {visual.title && (
        <text
          x={W / 2}
          y={24}
          textAnchor="middle"
          fill="#0F172A"
          fontSize="16"
          fontWeight="700"
        >
          {visual.title}
        </text>
      )}

      {/* Horizontal Gridlines & Y-Axis Ticks */}
      {ticks.map((tick) => {
        const y = yToPx(tick);
        return (
          <g key={tick}>
            <line
              x1={padLeft}
              y1={y}
              x2={W - padRight}
              y2={y}
              stroke={tick === yMin ? '#475569' : '#CBD5E1'}
              strokeWidth={tick === yMin ? '1.5' : '1'}
            />
            <text
              x={padLeft - 8}
              y={y + 4.5}
              textAnchor="end"
              fill="#334155"
              fontSize="13"
              fontWeight="600"
            >
              {tick}
            </text>
          </g>
        );
      })}

      {/* Y-Axis Line */}
      <line
        x1={padLeft}
        y1={padTop}
        x2={padLeft}
        y2={padTop + plotH}
        stroke="#475569"
        strokeWidth="1.5"
      />

      {visual.yAxisLabel && (
        <text
          x={18}
          y={padTop + plotH / 2}
          textAnchor="middle"
          fill="#334155"
          fontSize="13"
          fontWeight="700"
          transform={`rotate(-90 18 ${padTop + plotH / 2})`}
        >
          {visual.yAxisLabel}
        </text>
      )}

      {/* Bars & Category Labels */}
      {categories.map((cat, cIdx) => {
        const slotCenter = padLeft + slotW * (cIdx + 0.5);
        const groupStart = slotCenter - groupW / 2;

        return (
          <g key={cat}>
            {series.map((s, sIdx) => {
              const val = s.values[cIdx] ?? yMin;
              const topY = yToPx(val);
              const barH = Math.max(0, padTop + plotH - topY);
              const x = groupStart + sIdx * (barW + barGap);
              const fillStyle = s.fill ?? DEFAULT_SERIES_FILLS[sIdx % DEFAULT_SERIES_FILLS.length];
              const { fill, stroke } = resolveSeriesFill(fillStyle, uid);

              return (
                <g key={s.name}>
                  <rect
                    x={x}
                    y={topY}
                    width={barW}
                    height={barH}
                    fill={fill}
                    stroke={stroke}
                    strokeWidth="1.4"
                    rx="1.5"
                  />
                  {visual.showValueLabels && (
                    <text
                      x={x + barW / 2}
                      y={topY - 5}
                      textAnchor="middle"
                      fill="#0F172A"
                      fontSize="12"
                      fontWeight="700"
                    >
                      {val}
                    </text>
                  )}
                </g>
              );
            })}

            <text
              x={slotCenter}
              y={padTop + plotH + 22}
              textAnchor="middle"
              fill="#0F172A"
              fontSize="13"
              fontWeight="600"
            >
              {cat}
            </text>
          </g>
        );
      })}

      {visual.xAxisLabel && (
        <text
          x={padLeft + plotW / 2}
          y={padTop + plotH + 44}
          textAnchor="middle"
          fill="#334155"
          fontSize="13"
          fontWeight="700"
        >
          {visual.xAxisLabel}
        </text>
      )}

      {/* Legend */}
      {showLegend && (
        <g transform={`translate(${W / 2}, ${H - 12})`}>
          {series.map((s, sIdx) => {
            const itemW = 165;
            const totalW = series.length * itemW;
            const offsetX = -totalW / 2 + sIdx * itemW + 12;
            const fillStyle = s.fill ?? DEFAULT_SERIES_FILLS[sIdx % DEFAULT_SERIES_FILLS.length];
            const { fill, stroke } = resolveSeriesFill(fillStyle, uid);

            return (
              <g key={s.name} transform={`translate(${offsetX}, -10)`}>
                <rect
                  x={0}
                  y={0}
                  width={13}
                  height={13}
                  fill={fill}
                  stroke={stroke}
                  strokeWidth="1.4"
                  rx="2"
                />
                <text x={19} y={11} fill="#0F172A" fontSize="13" fontWeight="600">
                  {s.name}
                </text>
              </g>
            );
          })}
        </g>
      )}
    </svg>
  );
}

function RenderStackedBarChart({
  visual,
  uid,
}: {
  visual: StackedBarChartVisual;
  uid: string;
}) {
  const { categories, series } = visual;
  const totals = categories.map((_, cIdx) =>
    series.reduce((sum, s) => sum + (s.values[cIdx] ?? 0), 0)
  );
  const dataMax = Math.max(...totals, 1);
  const yStep = visual.yStep ?? computeNiceStep(0, visual.yMax ?? dataMax);
  const yMax = visual.yMax ?? Math.ceil(dataMax / yStep) * yStep;
  const ticks = buildTicks(0, yMax, yStep);

  const showLegend = visual.showLegend ?? series.length > 1;
  const W = 540;
  const padTop = visual.title ? 44 : 22;
  const padRight = 22;
  const padLeft = visual.yAxisLabel ? 64 : 48;
  const padBottom = 38 + (visual.xAxisLabel ? 22 : 0) + (showLegend ? 28 : 0);
  const plotH = 195;
  const H = padTop + plotH + padBottom;
  const plotW = W - padLeft - padRight;

  const yToPx = (val: number) => padTop + plotH - (val / Math.max(yMax, 1)) * plotH;
  const slotW = plotW / Math.max(categories.length, 1);
  const barW = Math.min(slotW * 0.52, 46);

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      role="img"
      aria-label={visual.title || 'Stacked Bar Graph'}
      className="block w-full max-w-[560px] h-auto select-none"
    >
      <SharedPatternDefs uid={uid} />
      <rect width={W} height={H} fill="#FFFFFF" />

      {visual.title && (
        <text x={W / 2} y={24} textAnchor="middle" fill="#0F172A" fontSize="16" fontWeight="700">
          {visual.title}
        </text>
      )}

      {ticks.map((tick) => {
        const y = yToPx(tick);
        return (
          <g key={tick}>
            <line
              x1={padLeft}
              y1={y}
              x2={W - padRight}
              y2={y}
              stroke={tick === 0 ? '#475569' : '#CBD5E1'}
              strokeWidth={tick === 0 ? '1.5' : '1'}
            />
            <text
              x={padLeft - 8}
              y={y + 4.5}
              textAnchor="end"
              fill="#334155"
              fontSize="13"
              fontWeight="600"
            >
              {tick}
            </text>
          </g>
        );
      })}

      <line
        x1={padLeft}
        y1={padTop}
        x2={padLeft}
        y2={padTop + plotH}
        stroke="#475569"
        strokeWidth="1.5"
      />

      {visual.yAxisLabel && (
        <text
          x={18}
          y={padTop + plotH / 2}
          textAnchor="middle"
          fill="#334155"
          fontSize="13"
          fontWeight="700"
          transform={`rotate(-90 18 ${padTop + plotH / 2})`}
        >
          {visual.yAxisLabel}
        </text>
      )}

      {categories.map((cat, cIdx) => {
        const centerX = padLeft + slotW * (cIdx + 0.5);
        let running = 0;

        return (
          <g key={cat}>
            {series.map((s, sIdx) => {
              const val = s.values[cIdx] ?? 0;
              const yBottom = yToPx(running);
              running += val;
              const yTop = yToPx(running);
              const segH = Math.max(0, yBottom - yTop);
              const fillStyle = s.fill ?? DEFAULT_SERIES_FILLS[sIdx % DEFAULT_SERIES_FILLS.length];
              const { fill, stroke } = resolveSeriesFill(fillStyle, uid);
              const isDark = fillStyle === 'solid';

              return (
                <g key={s.name}>
                  <rect
                    x={centerX - barW / 2}
                    y={yTop}
                    width={barW}
                    height={segH}
                    fill={fill}
                    stroke={stroke}
                    strokeWidth="1.4"
                  />
                  {visual.showSegmentLabels && segH >= 18 && (
                    <text
                      x={centerX}
                      y={yTop + segH / 2 + 4.5}
                      textAnchor="middle"
                      fill={isDark ? '#FFFFFF' : '#0F172A'}
                      fontSize="12"
                      fontWeight="700"
                    >
                      {val}
                    </text>
                  )}
                </g>
              );
            })}

            <text
              x={centerX}
              y={padTop + plotH + 22}
              textAnchor="middle"
              fill="#0F172A"
              fontSize="13"
              fontWeight="600"
            >
              {cat}
            </text>
          </g>
        );
      })}

      {visual.xAxisLabel && (
        <text
          x={padLeft + plotW / 2}
          y={padTop + plotH + 44}
          textAnchor="middle"
          fill="#334155"
          fontSize="13"
          fontWeight="700"
        >
          {visual.xAxisLabel}
        </text>
      )}

      {showLegend && (
        <g transform={`translate(${W / 2}, ${H - 12})`}>
          {series.map((s, sIdx) => {
            const itemW = 145;
            const totalW = series.length * itemW;
            const offsetX = -totalW / 2 + sIdx * itemW + 10;
            const fillStyle = s.fill ?? DEFAULT_SERIES_FILLS[sIdx % DEFAULT_SERIES_FILLS.length];
            const { fill, stroke } = resolveSeriesFill(fillStyle, uid);

            return (
              <g key={s.name} transform={`translate(${offsetX}, -10)`}>
                <rect
                  x={0}
                  y={0}
                  width={13}
                  height={13}
                  fill={fill}
                  stroke={stroke}
                  strokeWidth="1.4"
                  rx="2"
                />
                <text x={19} y={11} fill="#0F172A" fontSize="13" fontWeight="600">
                  {s.name}
                </text>
              </g>
            );
          })}
        </g>
      )}
    </svg>
  );
}

function RenderLineChart({ visual }: { visual: LineChartVisual }) {
  const { categories, series } = visual;
  const allVals = series.flatMap((s) => s.values);
  const dataMax = Math.max(...allVals, 1);
  const yMin = visual.yMin ?? 0;
  const yStep = visual.yStep ?? computeNiceStep(yMin, visual.yMax ?? dataMax);
  const yMax = visual.yMax ?? Math.ceil(dataMax / yStep) * yStep;
  const ticks = buildTicks(yMin, yMax, yStep);

  const showLegend = visual.showLegend ?? series.length > 1;
  const W = 540;
  const padTop = visual.title ? 44 : 24;
  const padRight = 28;
  const padLeft = visual.yAxisLabel ? 64 : 46;
  const padBottom = 38 + (visual.xAxisLabel ? 22 : 0) + (showLegend ? 30 : 0);
  const plotH = 195;
  const H = padTop + plotH + padBottom;
  const plotW = W - padLeft - padRight;

  const yToPx = (val: number) =>
    padTop + plotH - ((val - yMin) / Math.max(yMax - yMin, 1)) * plotH;
  const xForIdx = (idx: number) => {
    if (categories.length <= 1) return padLeft + plotW / 2;
    const inset = plotW / (categories.length * 2);
    return padLeft + inset + (idx * (plotW - inset * 2)) / (categories.length - 1);
  };

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      role="img"
      aria-label={visual.title || 'Line Graph'}
      className="block w-full max-w-[560px] h-auto select-none"
    >
      <rect width={W} height={H} fill="#FFFFFF" />

      {visual.title && (
        <text x={W / 2} y={24} textAnchor="middle" fill="#0F172A" fontSize="16" fontWeight="700">
          {visual.title}
        </text>
      )}

      {ticks.map((tick) => {
        const y = yToPx(tick);
        return (
          <g key={tick}>
            <line
              x1={padLeft}
              y1={y}
              x2={W - padRight}
              y2={y}
              stroke={tick === yMin ? '#475569' : '#CBD5E1'}
              strokeWidth={tick === yMin ? '1.5' : '1'}
            />
            <text
              x={padLeft - 8}
              y={y + 4.5}
              textAnchor="end"
              fill="#334155"
              fontSize="13"
              fontWeight="600"
            >
              {tick}
            </text>
          </g>
        );
      })}

      <line
        x1={padLeft}
        y1={padTop}
        x2={padLeft}
        y2={padTop + plotH}
        stroke="#475569"
        strokeWidth="1.5"
      />

      {visual.yAxisLabel && (
        <text
          x={18}
          y={padTop + plotH / 2}
          textAnchor="middle"
          fill="#334155"
          fontSize="13"
          fontWeight="700"
          transform={`rotate(-90 18 ${padTop + plotH / 2})`}
        >
          {visual.yAxisLabel}
        </text>
      )}

      {/* X-Axis Labels */}
      {categories.map((cat, idx) => (
        <text
          key={cat}
          x={xForIdx(idx)}
          y={padTop + plotH + 22}
          textAnchor="middle"
          fill="#0F172A"
          fontSize="13"
          fontWeight="600"
        >
          {cat}
        </text>
      ))}

      {visual.xAxisLabel && (
        <text
          x={padLeft + plotW / 2}
          y={padTop + plotH + 44}
          textAnchor="middle"
          fill="#334155"
          fontSize="13"
          fontWeight="700"
        >
          {visual.xAxisLabel}
        </text>
      )}

      {/* Polylines & Markers */}
      {series.map((s, sIdx) => {
        const isDashed = s.dashed ?? sIdx % 2 === 1;
        const strokeColor = isDashed ? '#334155' : '#0F172A';
        const points = s.values.map((v, i) => `${xForIdx(i)},${yToPx(v)}`).join(' ');

        return (
          <g key={s.name}>
            <polyline
              points={points}
              fill="none"
              stroke={strokeColor}
              strokeWidth="2.8"
              strokeDasharray={isDashed ? '8 5' : undefined}
              strokeLinejoin="round"
              strokeLinecap="round"
            />
            {s.values.map((val, i) => {
              const cx = xForIdx(i);
              const cy = yToPx(val);
              // Smart offset so value labels for 2 series don't collide
              const otherVal = series.length === 2 ? series[1 - sIdx].values[i] : undefined;
              const placeBelow = otherVal !== undefined && val < otherVal;

              return (
                <g key={i}>
                  <circle
                    cx={cx}
                    cy={cy}
                    r={4.8}
                    fill={isDashed ? '#FFFFFF' : '#0F172A'}
                    stroke={strokeColor}
                    strokeWidth="2.2"
                  />
                  {visual.showValueLabels && (
                    <text
                      x={cx}
                      y={placeBelow ? cy + 17 : cy - 10}
                      textAnchor="middle"
                      fill="#0F172A"
                      fontSize="12"
                      fontWeight="700"
                    >
                      {val}
                    </text>
                  )}
                </g>
              );
            })}
          </g>
        );
      })}

      {/* Legend */}
      {showLegend && (
        <g transform={`translate(${W / 2}, ${H - 12})`}>
          {series.map((s, sIdx) => {
            const isDashed = s.dashed ?? sIdx % 2 === 1;
            const strokeColor = isDashed ? '#334155' : '#0F172A';
            const itemW = 195;
            const totalW = series.length * itemW;
            const offsetX = -totalW / 2 + sIdx * itemW + 8;

            return (
              <g key={s.name} transform={`translate(${offsetX}, -6)`}>
                <line
                  x1={0}
                  y1={2}
                  x2={28}
                  y2={2}
                  stroke={strokeColor}
                  strokeWidth="2.6"
                  strokeDasharray={isDashed ? '7 4' : undefined}
                />
                <circle
                  cx={14}
                  cy={2}
                  r={4}
                  fill={isDashed ? '#FFFFFF' : '#0F172A'}
                  stroke={strokeColor}
                  strokeWidth="2"
                />
                <text x={36} y={6} fill="#0F172A" fontSize="13" fontWeight="600">
                  {s.name}
                </text>
              </g>
            );
          })}
        </g>
      )}
    </svg>
  );
}

function RenderHistogram({ visual }: { visual: HistogramVisual }) {
  const { binEdges, counts } = visual;
  const dataMax = Math.max(...counts, 1);
  const yStep = visual.yStep ?? computeNiceStep(0, visual.yMax ?? dataMax);
  const yMax = visual.yMax ?? Math.ceil(dataMax / yStep) * yStep;
  const ticks = buildTicks(0, yMax, yStep);

  const W = 540;
  const padTop = visual.title ? 44 : 22;
  const padRight = 24;
  const padLeft = visual.yAxisLabel ? 68 : 50;
  const padBottom = visual.xAxisLabel ? 56 : 36;
  const plotH = 195;
  const H = padTop + plotH + padBottom;
  const plotW = W - padLeft - padRight;

  const yToPx = (val: number) => padTop + plotH - (val / Math.max(yMax, 1)) * plotH;
  const binCount = Math.max(counts.length, 1);
  const binW = plotW / binCount;

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      role="img"
      aria-label={visual.title || 'Histogram'}
      className="block w-full max-w-[560px] h-auto select-none"
    >
      <rect width={W} height={H} fill="#FFFFFF" />

      {visual.title && (
        <text x={W / 2} y={24} textAnchor="middle" fill="#0F172A" fontSize="16" fontWeight="700">
          {visual.title}
        </text>
      )}

      {/* Horizontal Gridlines & Y Ticks */}
      {ticks.map((tick) => {
        const y = yToPx(tick);
        return (
          <g key={tick}>
            <line
              x1={padLeft}
              y1={y}
              x2={W - padRight}
              y2={y}
              stroke={tick === 0 ? '#0F172A' : '#E2E8F0'}
              strokeWidth={tick === 0 ? '1.6' : '1'}
            />
            <text
              x={padLeft - 8}
              y={y + 4.5}
              textAnchor="end"
              fill="#334155"
              fontSize="13"
              fontWeight="600"
            >
              {tick}
            </text>
          </g>
        );
      })}

      {/* Vertical Gridlines & Edge Ticks */}
      {binEdges.map((edge, idx) => {
        const x = padLeft + idx * binW;
        return (
          <g key={`${edge}-${idx}`}>
            <line
              x1={x}
              y1={padTop}
              x2={x}
              y2={padTop + plotH}
              stroke={idx === 0 ? '#0F172A' : '#E2E8F0'}
              strokeWidth={idx === 0 ? '1.6' : '1'}
            />
            <line
              x1={x}
              y1={padTop + plotH}
              x2={x}
              y2={padTop + plotH + 5}
              stroke="#0F172A"
              strokeWidth="1.4"
            />
            <text
              x={x}
              y={padTop + plotH + 20}
              textAnchor="middle"
              fill="#0F172A"
              fontSize="12.5"
              fontWeight="600"
            >
              {edge}
            </text>
          </g>
        );
      })}

      {/* Contiguous Histogram Bars */}
      {counts.map((count, idx) => {
        if (count <= 0) return null;
        const x = padLeft + idx * binW;
        const topY = yToPx(count);
        const h = padTop + plotH - topY;
        return (
          <g key={idx}>
            <rect
              x={x}
              y={topY}
              width={binW}
              height={h}
              fill="#CBD5E1"
              stroke="#0F172A"
              strokeWidth="1.6"
            />
            {visual.showValueLabels && (
              <text
                x={x + binW / 2}
                y={topY - 5}
                textAnchor="middle"
                fill="#0F172A"
                fontSize="12"
                fontWeight="700"
              >
                {count}
              </text>
            )}
          </g>
        );
      })}

      {visual.yAxisLabel && (
        <text
          x={18}
          y={padTop + plotH / 2}
          textAnchor="middle"
          fill="#0F172A"
          fontSize="13"
          fontWeight="700"
          transform={`rotate(-90 18 ${padTop + plotH / 2})`}
        >
          {visual.yAxisLabel}
        </text>
      )}

      {visual.xAxisLabel && (
        <text
          x={padLeft + plotW / 2}
          y={padTop + plotH + 44}
          textAnchor="middle"
          fill="#0F172A"
          fontSize="13"
          fontWeight="700"
        >
          {visual.xAxisLabel}
        </text>
      )}
    </svg>
  );
}

function RenderPieChart({ visual, uid }: { visual: PieChartVisual; uid: string }) {
  const total = visual.slices.reduce((sum, s) => sum + s.value, 0) || 1;
  const W = 540;
  const H = visual.title ? 310 : 280;
  const cx = W / 2;
  const cy = (visual.title ? 44 : 18) + 124;
  const r = 94;

  let currentAngle = -Math.PI / 2;
  const computed = visual.slices.map((slice, idx) => {
    const angleSpan = (slice.value / total) * Math.PI * 2;
    const startAngle = currentAngle;
    const endAngle = currentAngle + angleSpan;
    const midAngle = (startAngle + endAngle) / 2;
    currentAngle = endAngle;

    const x1 = cx + r * Math.cos(startAngle);
    const y1 = cy + r * Math.sin(startAngle);
    const x2 = cx + r * Math.cos(endAngle);
    const y2 = cy + r * Math.sin(endAngle);
    const largeArc = angleSpan > Math.PI ? 1 : 0;

    const pathD =
      visual.slices.length === 1
        ? `M ${cx} ${cy - r} A ${r} ${r} 0 1 1 ${cx - 0.01} ${cy - r} Z`
        : `M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 1 ${x2} ${y2} Z`;

    const isRight = Math.cos(midAngle) >= 0;
    const anchorX = cx + (r + 12) * Math.cos(midAngle);
    const anchorY = cy + (r + 12) * Math.sin(midAngle);
    const labelX = isRight ? cx + r + 32 : cx - r - 32;
    const labelY = cy + (r + 22) * Math.sin(midAngle);
    const pattern = slice.pattern ?? DEFAULT_PIE_PATTERNS[idx % DEFAULT_PIE_PATTERNS.length];

    return {
      slice,
      pathD,
      pattern,
      isRight,
      edgeX: cx + r * 0.96 * Math.cos(midAngle),
      edgeY: cy + r * 0.96 * Math.sin(midAngle),
      anchorX,
      anchorY,
      labelX,
      labelY,
    };
  });

  // Anti-collision pass on left & right label stacks so labels never overlap
  const spreadSide = (items: typeof computed) => {
    items.sort((a, b) => a.labelY - b.labelY);
    const minGap = 32;
    for (let i = 1; i < items.length; i++) {
      if (items[i].labelY - items[i - 1].labelY < minGap) {
        items[i].labelY = items[i - 1].labelY + minGap;
      }
    }
    const maxAllowedY = H - 22;
    if (items.length > 0 && items[items.length - 1].labelY > maxAllowedY) {
      const shift = items[items.length - 1].labelY - maxAllowedY;
      items.forEach((it) => {
        it.labelY -= shift;
      });
    }
  };
  spreadSide(computed.filter((c) => c.isRight));
  spreadSide(computed.filter((c) => !c.isRight));

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      role="img"
      aria-label={visual.title || 'Pie Chart'}
      className="block w-full max-w-[540px] h-auto select-none"
    >
      <SharedPatternDefs uid={uid} />
      <rect width={W} height={H} fill="#FFFFFF" />

      {visual.title && (
        <text x={W / 2} y={24} textAnchor="middle" fill="#0F172A" fontSize="16" fontWeight="700">
          {visual.title}
        </text>
      )}

      {computed.map((item, idx) => (
        <path
          key={idx}
          d={item.pathD}
          fill={resolvePieFill(item.pattern, uid)}
          stroke="#FFFFFF"
          strokeWidth="2.2"
        />
      ))}

      {/* Crisp outer ring for high-contrast definition */}
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="#0F172A" strokeWidth="1.5" />

      {/* Leader lines & crisp labels */}
      {computed.map((item, idx) => {
        const unit = item.slice.unit ?? '%';
        return (
          <g key={idx}>
            <polyline
              points={`${item.edgeX},${item.edgeY} ${item.anchorX},${item.labelY} ${
                item.isRight ? item.labelX - 5 : item.labelX + 5
              },${item.labelY}`}
              fill="none"
              stroke="#475569"
              strokeWidth="1.2"
            />
            <text
              x={item.labelX}
              y={item.labelY - 2}
              textAnchor={item.isRight ? 'start' : 'end'}
              fill="#0F172A"
              fontSize="13.5"
              fontWeight="700"
            >
              {item.slice.label}
            </text>
            <text
              x={item.labelX}
              y={item.labelY + 14}
              textAnchor={item.isRight ? 'start' : 'end'}
              fill="#334155"
              fontSize="13"
              fontWeight="700"
            >
              {item.slice.value}
              {unit}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

function RenderVenn2({ visual }: { visual: Venn2Visual }) {
  const W = 440;
  const H = visual.outsideLabel ? 236 : 208;
  const cy = 104;
  const r = 82;
  const cx1 = 166;
  const cx2 = 274;

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      role="img"
      aria-label={visual.title || '2-Set Venn Diagram'}
      className="block w-full max-w-[440px] h-auto select-none"
    >
      <rect width={W} height={H} fill="#FFFFFF" />

      <circle
        cx={cx1}
        cy={cy}
        r={r}
        fill="#F8FAFC"
        fillOpacity="0.6"
        stroke="#0F172A"
        strokeWidth="2.4"
      />
      <circle
        cx={cx2}
        cy={cy}
        r={r}
        fill="#F8FAFC"
        fillOpacity="0.45"
        stroke="#0F172A"
        strokeWidth="2.4"
      />

      {/* Left set */}
      <text x={132} y={cy - 4} textAnchor="middle" fill="#0F172A" fontSize="15.5" fontWeight="700">
        {visual.leftLabel}
      </text>
      {visual.leftValue && (
        <text
          x={132}
          y={cy + 18}
          textAnchor="middle"
          fill="#0F172A"
          fontSize="15"
          fontWeight="600"
        >
          {visual.leftValue}
        </text>
      )}

      {/* Overlap */}
      {visual.overlapLabel && (
        <text x={220} y={cy - 4} textAnchor="middle" fill="#0F172A" fontSize="15" fontWeight="700">
          {visual.overlapLabel}
        </text>
      )}
      {visual.overlapValue && (
        <text
          x={220}
          y={cy + 18}
          textAnchor="middle"
          fill="#0F172A"
          fontSize="15"
          fontWeight="600"
        >
          {visual.overlapValue}
        </text>
      )}

      {/* Right set */}
      <text x={308} y={cy - 4} textAnchor="middle" fill="#0F172A" fontSize="15.5" fontWeight="700">
        {visual.rightLabel}
      </text>
      {visual.rightValue && (
        <text
          x={308}
          y={cy + 18}
          textAnchor="middle"
          fill="#0F172A"
          fontSize="15"
          fontWeight="600"
        >
          {visual.rightValue}
        </text>
      )}

      {/* Outside label */}
      {visual.outsideLabel && (
        <text x={220} y={216} textAnchor="middle" fill="#0F172A" fontSize="15" fontWeight="700">
          {visual.outsideLabel}
        </text>
      )}
    </svg>
  );
}

function RenderVenn3({ visual }: { visual: Venn3Visual }) {
  const W = 440;
  const H = 340;
  const r = 92;
  const c1 = { x: 162, y: 122 };
  const c2 = { x: 278, y: 122 };
  const c3 = { x: 220, y: 218 };

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      role="img"
      aria-label={visual.title || '3-Set Venn Diagram'}
      className="block w-full max-w-[420px] h-auto select-none"
    >
      <rect width={W} height={H} fill="#FFFFFF" />

      <circle cx={c1.x} cy={c1.y} r={r} fill="none" stroke="#0F172A" strokeWidth="2.3" />
      <circle cx={c2.x} cy={c2.y} r={r} fill="none" stroke="#334155" strokeWidth="2.3" />
      <circle cx={c3.x} cy={c3.y} r={r} fill="none" stroke="#0F172A" strokeWidth="2.3" />

      {/* Top-Left Set */}
      <text x={122} y={108} textAnchor="middle" fill="#0F172A" fontSize="15" fontWeight="700">
        {visual.topLeftLabel}
      </text>
      {visual.topLeftValue && (
        <text x={122} y={128} textAnchor="middle" fill="#0F172A" fontSize="14.5" fontWeight="600">
          {visual.topLeftValue}
        </text>
      )}

      {/* Top-Right Set */}
      <text x={318} y={108} textAnchor="middle" fill="#0F172A" fontSize="15" fontWeight="700">
        {visual.topRightLabel}
      </text>
      {visual.topRightValue && (
        <text x={318} y={128} textAnchor="middle" fill="#0F172A" fontSize="14.5" fontWeight="600">
          {visual.topRightValue}
        </text>
      )}

      {/* Bottom Set */}
      <text x={220} y={256} textAnchor="middle" fill="#0F172A" fontSize="15" fontWeight="700">
        {visual.bottomLabel}
        {visual.bottomValue ? ` ${visual.bottomValue}` : ''}
      </text>

      {/* Pairwise Overlaps */}
      {visual.topOverlap && (
        <text x={220} y={96} textAnchor="middle" fill="#0F172A" fontSize="13.5" fontWeight="700">
          {visual.topOverlap}
        </text>
      )}
      {visual.leftOverlap && (
        <text x={162} y={182} textAnchor="middle" fill="#0F172A" fontSize="13.5" fontWeight="700">
          {visual.leftOverlap}
        </text>
      )}
      {visual.rightOverlap && (
        <text x={278} y={182} textAnchor="middle" fill="#0F172A" fontSize="13.5" fontWeight="700">
          {visual.rightOverlap}
        </text>
      )}

      {/* Center Triple Overlap */}
      {visual.centerLabel && (
        <text x={220} y={156} textAnchor="middle" fill="#0F172A" fontSize="12.5" fontWeight="800">
          {visual.centerLabel}
        </text>
      )}
    </svg>
  );
}

function RenderCubeNet({ visual }: { visual: CubeNetVisual }) {
  const maxRow = Math.max(...visual.cells.map((c) => c.row), 0);
  const maxCol = Math.max(...visual.cells.map((c) => c.col), 0);
  const size = 48;
  const pad = 16;
  const W = (maxCol + 1) * size + pad * 2;
  const H = (maxRow + 1) * size + pad * 2;

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      role="img"
      aria-label="Cube folding net"
      className="block w-auto max-h-48 sm:max-h-56 max-w-full h-auto select-none"
    >
      <rect width={W} height={H} fill="#FFFFFF" />
      {visual.cells.map((cell, idx) => {
        const x = pad + cell.col * size;
        const y = pad + cell.row * size;
        return (
          <g key={`${cell.row}-${cell.col}-${idx}`}>
            <rect
              x={x}
              y={y}
              width={size}
              height={size}
              fill="#FFFFFF"
              stroke="#0F172A"
              strokeWidth="2.6"
            />
            <text
              x={x + size / 2}
              y={y + size / 2 + 7.5}
              textAnchor="middle"
              fill="#0F172A"
              fontSize="21"
              fontWeight="800"
            >
              {cell.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

/**
 * Programmatic, high-definition responsive SVG renderer for charts & reasoning diagrams.
 * Renders crisp, watermark-free vectors with legible mobile typography directly from structured data.
 */
export function QuestionVisual({ visual, compact = false }: QuestionVisualProps) {
  const rawId = useId();
  const uid = rawId.replace(/[^a-zA-Z0-9_-]/g, '');

  const renderBody = () => {
    switch (visual.type) {
      case 'bar':
        return <RenderBarChart visual={visual} uid={uid} />;
      case 'stacked-bar':
        return <RenderStackedBarChart visual={visual} uid={uid} />;
      case 'line':
        return <RenderLineChart visual={visual} />;
      case 'histogram':
        return <RenderHistogram visual={visual} />;
      case 'pie':
        return <RenderPieChart visual={visual} uid={uid} />;
      case 'venn2':
        return <RenderVenn2 visual={visual} />;
      case 'venn3':
        return <RenderVenn3 visual={visual} />;
      case 'cube-net':
        return <RenderCubeNet visual={visual} />;
    }
  };

  return (
    <div
      className={`mt-2.5 flex w-full max-w-full justify-center overflow-hidden rounded-xl border border-slate-200 bg-white ${
        compact ? 'p-1.5 sm:p-2' : 'p-2 sm:p-3'
      }`}
    >
      {renderBody()}
    </div>
  );
}
