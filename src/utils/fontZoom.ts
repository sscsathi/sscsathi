export const FONT_ZOOM_STEPS = [85, 90, 100, 110, 120, 130, 140] as const;
export type FontZoomLevel = (typeof FONT_ZOOM_STEPS)[number];

export const DEFAULT_FONT_ZOOM: FontZoomLevel = 100;
const FONT_ZOOM_STORAGE_KEY = 'ssc_sathi_exam_font_zoom_v2';

export function loadSavedFontZoom(): FontZoomLevel {
  try {
    const raw = localStorage.getItem(FONT_ZOOM_STORAGE_KEY);
    if (!raw) return DEFAULT_FONT_ZOOM;
    const parsed = Number(raw);
    if ((FONT_ZOOM_STEPS as readonly number[]).includes(parsed)) {
      return parsed as FontZoomLevel;
    }
    return DEFAULT_FONT_ZOOM;
  } catch {
    return DEFAULT_FONT_ZOOM;
  }
}

export function saveFontZoom(level: FontZoomLevel): void {
  try {
    localStorage.setItem(FONT_ZOOM_STORAGE_KEY, String(level));
  } catch {
    // Ignore storage restrictions
  }
}

export function stepFontZoom(current: FontZoomLevel, delta: -1 | 1): FontZoomLevel {
  const idx = FONT_ZOOM_STEPS.indexOf(current);
  const safeIdx = idx === -1 ? FONT_ZOOM_STEPS.indexOf(DEFAULT_FONT_ZOOM) : idx;
  const nextIdx = Math.max(0, Math.min(FONT_ZOOM_STEPS.length - 1, safeIdx + delta));
  return FONT_ZOOM_STEPS[nextIdx];
}

// Static Tailwind font-size classes for smooth, zero-inline-style scaling
// Standard Question: 15px base at 100% (compact default, leading 1.6)
export const QUESTION_FONT_CLASS: Record<FontZoomLevel, string> = {
  85: 'text-[13px]',
  90: 'text-[13.5px]',
  100: 'text-[15px]',
  110: 'text-[16.5px]',
  120: 'text-[18px]',
  130: 'text-[19.5px]',
  140: 'text-[21px]',
};

// Standard Option: 14px base at 100%
export const OPTION_FONT_CLASS: Record<FontZoomLevel, string> = {
  85: 'text-[12px]',
  90: 'text-[12.6px]',
  100: 'text-[14px]',
  110: 'text-[15.4px]',
  120: 'text-[16.8px]',
  130: 'text-[18.2px]',
  140: 'text-[19.6px]',
};

// Passage Split-View: Reading Passage body (14px base at 100%, leading 1.65)
export const PASSAGE_BODY_FONT_CLASS: Record<FontZoomLevel, string> = {
  85: 'text-[12px]',
  90: 'text-[12.6px]',
  100: 'text-[14px]',
  110: 'text-[15.4px]',
  120: 'text-[16.8px]',
  130: 'text-[18.2px]',
  140: 'text-[19.6px]',
};

// Passage Split-View: Bottom Question Prompt (14.5px base at 100%)
export const PASSAGE_QUESTION_FONT_CLASS: Record<FontZoomLevel, string> = {
  85: 'text-[12.5px]',
  90: 'text-[13px]',
  100: 'text-[14.5px]',
  110: 'text-[16px]',
  120: 'text-[17.4px]',
  130: 'text-[18.8px]',
  140: 'text-[20.3px]',
};

// Passage Split-View: Bottom Option Row (13.5px base at 100%)
export const PASSAGE_OPTION_FONT_CLASS: Record<FontZoomLevel, string> = {
  85: 'text-[11.5px]',
  90: 'text-[12.2px]',
  100: 'text-[13.5px]',
  110: 'text-[14.8px]',
  120: 'text-[16.2px]',
  130: 'text-[17.5px]',
  140: 'text-[19px]',
};

// Solutions Explanation text (14px base at 100%)
export const EXPLANATION_FONT_CLASS: Record<FontZoomLevel, string> = {
  85: 'text-[12px]',
  90: 'text-[12.6px]',
  100: 'text-[14px]',
  110: 'text-[15.4px]',
  120: 'text-[16.8px]',
  130: 'text-[18.2px]',
  140: 'text-[19.6px]',
};
