export type VisualFillStyle = 'solid' | 'muted' | 'outline' | 'hatched';

export type PiePatternStyle =
  | 'solid-dark'
  | 'mid-gray'
  | 'light-gray'
  | 'hatch-diag'
  | 'hatch-cross'
  | 'dots';

export interface BarChartVisual {
  type: 'bar';
  title?: string;
  xAxisLabel?: string;
  yAxisLabel?: string;
  yMin?: number;
  yMax?: number;
  yStep?: number;
  categories: string[];
  series: Array<{
    name: string;
    values: number[];
    fill?: VisualFillStyle;
  }>;
  showValueLabels?: boolean;
  showLegend?: boolean;
}

export interface StackedBarChartVisual {
  type: 'stacked-bar';
  title?: string;
  xAxisLabel?: string;
  yAxisLabel?: string;
  yMax?: number;
  yStep?: number;
  categories: string[];
  series: Array<{
    name: string;
    values: number[];
    fill?: VisualFillStyle;
  }>;
  showSegmentLabels?: boolean;
  showLegend?: boolean;
}

export interface LineChartVisual {
  type: 'line';
  title?: string;
  xAxisLabel?: string;
  yAxisLabel?: string;
  yMin?: number;
  yMax?: number;
  yStep?: number;
  categories: string[];
  series: Array<{
    name: string;
    values: number[];
    dashed?: boolean;
  }>;
  showValueLabels?: boolean;
  showLegend?: boolean;
}

export interface HistogramVisual {
  type: 'histogram';
  title?: string;
  xAxisLabel?: string;
  yAxisLabel?: string;
  yMax?: number;
  yStep?: number;
  /** Length must equal counts.length + 1 (e.g., ['0', '10', '20', ..., '100']) */
  binEdges: string[];
  counts: number[];
  showValueLabels?: boolean;
}

export interface PieChartVisual {
  type: 'pie';
  title?: string;
  slices: Array<{
    label: string;
    value: number;
    unit?: string;
    pattern?: PiePatternStyle;
  }>;
  showLegend?: boolean;
}

export interface Venn2Visual {
  type: 'venn2';
  title?: string;
  leftLabel: string;
  leftValue?: string;
  rightLabel: string;
  rightValue?: string;
  overlapLabel?: string;
  overlapValue?: string;
  outsideLabel?: string;
}

export interface Venn3Visual {
  type: 'venn3';
  title?: string;
  topLeftLabel: string;
  topLeftValue?: string;
  topRightLabel: string;
  topRightValue?: string;
  bottomLabel: string;
  bottomValue?: string;
  topOverlap?: string;
  leftOverlap?: string;
  rightOverlap?: string;
  centerLabel?: string;
}

export interface CubeNetVisual {
  type: 'cube-net';
  cells: Array<{
    row: number;
    col: number;
    label: string;
  }>;
}

export type QuestionVisualSpec =
  | BarChartVisual
  | StackedBarChartVisual
  | LineChartVisual
  | HistogramVisual
  | PieChartVisual
  | Venn2Visual
  | Venn3Visual
  | CubeNetVisual;
