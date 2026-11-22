export const FONT_ZOOM_STEPS = [85, 90, 100, 110, 120, 130, 140] as const;
export type FontZoomLevel = (typeof FONT_ZOOM_STEPS)[number];

export const DEFAULT_FONT_ZOOM: FontZoomLevel = 100;
const FONT_ZOOM_STORAGE_KEY = 'ssc_sathi_exam_font_zoom';

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
// Standard Question: 18px base (leading 1.6)
export const QUESTION_FONT_CLASS: Record<FontZoomLevel, string> = {
  85: 'text-[15.5px]',
  90: 'text-[16.2px]',
  100: 'text-[18px]',
  110: 'text-[19.8px]',
  120: 'text-[21.6px]',
  130: 'text-[23.4px]',
  140: 'text-[25.2px]',
};

// Standard Option: 16.5px base (comfortable 16px-17px target)
export const OPTION_FONT_CLASS: Record<FontZoomLevel, string> = {
  85: 'text-[14px]',
  90: 'text-[15px]',
  100: 'text-[16.5px]',
  110: 'text-[18px]',
  120: 'text-[19.8px]',
  130: 'text-[21.5px]',
  140: 'text-[23px]',
};

// Passage Split-View: Reading Passage body (16px base, leading 1.65)
export const PASSAGE_BODY_FONT_CLASS: Record<FontZoomLevel, string> = {
  85: 'text-[13.6px]',
  90: 'text-[14.4px]',
  100: 'text-[16px]',
  110: 'text-[17.6px]',
  120: 'text-[19.2px]',
  130: 'text-[20.8px]',
  140: 'text-[22.4px]',
};

// Passage Split-View: Bottom Question Prompt (16.5px base)
export const PASSAGE_QUESTION_FONT_CLASS: Record<FontZoomLevel, string> = {
  85: 'text-[14px]',
  90: 'text-[15px]',
  100: 'text-[16.5px]',
  110: 'text-[18px]',
  120: 'text-[19.8px]',
  130: 'text-[21.5px]',
  140: 'text-[23px]',
};

// Passage Split-View: Bottom Option Row (15.5px base)
export const PASSAGE_OPTION_FONT_CLASS: Record<FontZoomLevel, string> = {
  85: 'text-[13.2px]',
  90: 'text-[14px]',
  100: 'text-[15.5px]',
  110: 'text-[17px]',
  120: 'text-[18.6px]',
  130: 'text-[20px]',
  140: 'text-[21.7px]',
};

// Solutions Explanation text (15.5px base)
export const EXPLANATION_FONT_CLASS: Record<FontZoomLevel, string> = {
  85: 'text-[13.2px]',
  90: 'text-[14px]',
  100: 'text-[15.5px]',
  110: 'text-[17px]',
  120: 'text-[18.6px]',
  130: 'text-[20px]',
  140: 'text-[21.7px]',
};
