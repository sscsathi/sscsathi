import { MockTest } from '../../types/exam';
import { FULL_MOCK_05_OCT_SHIFT2 } from './mock05OctShift2';
import { FULL_MOCK_05_OCT_SHIFT3 } from './cgl-2026-05-oct-shift3';
import { FULL_MOCK_06_OCT_SHIFT1 } from './cgl-2026-06-oct-shift1';
import { FULL_MOCK_06_OCT_SHIFT2 } from './cgl-2026-06-oct-shift2';
import { FULL_MOCK_06_OCT_SHIFT3 } from './cgl-2026-06-oct-shift3';

/**
 * Modular registry for future standalone mock tests stored inside `src/data/tests/`.
 *
 * To add a new mock test:
 * 1. Create a standalone file in `src/data/tests/` exporting a `MockTest` object.
 * 2. Import it above and append it to the bottom of `ADDITIONAL_TESTS` in chronological order.
 */
export const ADDITIONAL_TESTS: MockTest[] = [
  FULL_MOCK_05_OCT_SHIFT2,
  FULL_MOCK_05_OCT_SHIFT3,
  FULL_MOCK_06_OCT_SHIFT1,
  FULL_MOCK_06_OCT_SHIFT2,
  FULL_MOCK_06_OCT_SHIFT3,
];
