import { MockTest } from '../../types/exam';
import { SECTION_1_REASONING } from './section1Reasoning';
import { SECTION_2_GA } from './section2GA';
import { SECTION_3_QUANT } from './section3Quant';
import { SECTION_4_ENGLISH } from './section4English';

export const FULL_MOCK_30_SEPT_SHIFT2: MockTest = {
  id: 'ssc-cgl-30-sept-shift2-2026-full-mock',
  title: 'SSC CGL Tier-1 2026 (30 Sept Shift 2) — Full Mock',
  subtitle:
    'Complete 100-question bilingual paper with strict 15-minute sectional timers across all 4 Tier-1 sections',
  category: 'Full Mock',
  examTags: ['CGL'],
  seriesType: 'pyq',
  pyqFormat: 'full',
  durationMinutes: 60,
  positiveMarks: 2,
  negativeMarks: 0.5,
  strictSectionTiming: true,
  sections: [
    {
      id: 'sec-reasoning',
      name: 'General Intelligence & Reasoning',
      shortName: 'Reasoning',
      startIndex: 0,
      endIndex: 24,
      durationMinutes: 15,
    },
    {
      id: 'sec-ga',
      name: 'General Awareness',
      shortName: 'General Awareness',
      startIndex: 25,
      endIndex: 49,
      durationMinutes: 15,
    },
    {
      id: 'sec-quant',
      name: 'Quantitative Aptitude',
      shortName: 'Quant',
      startIndex: 50,
      endIndex: 74,
      durationMinutes: 15,
    },
    {
      id: 'sec-english',
      name: 'English Comprehension',
      shortName: 'English',
      startIndex: 75,
      endIndex: 99,
      durationMinutes: 15,
    },
  ],
  createdAt: '2026-11-21T10:50:00.000Z',
  questions: [
    ...SECTION_1_REASONING,
    ...SECTION_2_GA,
    ...SECTION_3_QUANT,
    ...SECTION_4_ENGLISH,
  ],
};
