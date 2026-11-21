export type StudySubjectId = 'quant' | 'english' | 'reasoning' | 'ga';

export interface StudyNoteSection {
  heading: string;
  points: string[];
}

export interface StudyNoteItem {
  id: string;
  subjectId: StudySubjectId;
  title: string;
  summary: string;
  readTime: string;
  examRelevance: string;
  sections: StudyNoteSection[];
}

export interface StudySubjectFolder {
  id: StudySubjectId;
  name: string;
  subtitle: string;
  accentBg: string;
  accentText: string;
  accentBorder: string;
  notes: StudyNoteItem[];
}

export const STUDY_NOTE_FOLDERS: StudySubjectFolder[] = [
  {
    id: 'quant',
    name: 'Quantitative Aptitude',
    subtitle: 'Formulas & Tricks',
    accentBg: 'bg-indigo-50',
    accentText: 'text-[#1E3A8A]',
    accentBorder: 'border-[#1E3A8A]',
    notes: [
      {
        id: 'quant-algebra',
        subjectId: 'quant',
        title: 'Algebra Identities & Reciprocal Tricks',
        summary: 'High-speed formulas for x + 1/x powers, symmetric identities, and value-putting shortcuts.',
        readTime: '3 min read',
        examRelevance: 'CGL · CHSL · CPO',
        sections: [
          {
            heading: 'Core Algebraic Identities',
            points: [
              '(a + b)² − (a − b)² = 4ab  |  (a + b)² + (a − b)² = 2(a² + b²)',
              'a³ + b³ + c³ − 3abc = (a + b + c)(a² + b² + c² − ab − bc − ca)',
              'Special Case: If a + b + c = 0 OR a = b = c, then a³ + b³ + c³ = 3abc',
              'a² + b² + c² − ab − bc − ca = ½[(a − b)² + (b − c)² + (c − a)²]',
            ],
          },
          {
            heading: 'Reciprocal Power Ladder (Most Repeated in PYQs)',
            points: [
              'If x + 1/x = k  ⇒  x² + 1/x² = k² − 2  and  x³ + 1/x³ = k³ − 3k',
              'If x − 1/x = k  ⇒  x² + 1/x² = k² + 2  and  x³ − 1/x³ = k³ + 3k',
              'If x + 1/x = 2  ⇒  x = 1  (so xⁿ + 1/xⁿ = 2 for every integer n)',
              'If x + 1/x = √3  ⇒  x⁶ = −1 (pair terms whose powers differ by 6 to get 0)',
            ],
          },
        ],
      },
      {
        id: 'quant-mensuration',
        subjectId: 'quant',
        title: 'Mensuration 2D & 3D Formula Sheet',
        summary: 'All area, curved surface area, total surface area, and combined-solid volume formulas.',
        readTime: '4 min read',
        examRelevance: 'CGL · CHSL · MTS',
        sections: [
          {
            heading: '2D Plane Figures',
            points: [
              'Circle: Area = πr²  |  Circumference = 2πr  (For r = 7 cm: C = 44 cm, Area = 154 cm²)',
              'Scaling Trick: If radius becomes k times, Area becomes k² times (e.g., r = 14 cm ⇒ Area = 4 × 154 = 616 cm²)',
              'Equilateral Triangle: Area = (√3 / 4)a²  |  Height = (√3 / 2)a  |  Inradius = a / 2√3',
              'Rhombus: Area = ½ × d₁ × d₂  |  4a² = d₁² + d₂²',
            ],
          },
          {
            heading: '3D Solids & Combined Figures',
            points: [
              'Cylinder: Volume = πr²h  |  CSA = 2πrh  |  TSA = 2πr(r + h)',
              'Cone: Volume = (1/3)πr²h  |  CSA = πrl  |  l = √(r² + h²)',
              'Sphere: Volume = (4/3)πr³  |  SA = 4πr²  |  Hemisphere: Vol = (2/3)πr³, TSA = 3πr²',
              'Cone on Hemisphere Toy: Total Volume = (1/3)πr²(2r + h)',
            ],
          },
        ],
      },
      {
        id: 'quant-trigonometry',
        subjectId: 'quant',
        title: 'Trigonometry Identities & Maxima–Minima',
        summary: 'Standard angle shortcuts, complementary pair reductions, and extreme-value bounds.',
        readTime: '3 min read',
        examRelevance: 'CGL · CHSL',
        sections: [
          {
            heading: 'Key Identities & Pair Rules',
            points: [
              'sin²θ + cos²θ = 1  |  sec²θ − tan²θ = 1  |  csc²θ − cot²θ = 1',
              'If sec θ + tan θ = p, then sec θ − tan θ = 1/p',
              'If tan A + cot A = 2 (acute A), then A = 45° ⇒ tanⁿA + cotⁿA = 2',
              'If A + B = 90°: sin A = cos B, tan A · tan B = 1, sin²A + sin²B = 1',
            ],
          },
          {
            heading: 'Maxima & Minima Shortcuts',
            points: [
              'a sin θ + b cos θ  ⇒  Max = +√(a² + b²),  Min = −√(a² + b²)',
              'a sin²θ + b cos²θ  ⇒  Max = max(a, b),  Min = min(a, b)',
              'a tan²θ + b cot²θ  ⇒  Minimum value = 2√(ab)',
            ],
          },
        ],
      },
      {
        id: 'quant-arithmetic',
        subjectId: 'quant',
        title: 'SI, CI, Ratio & Partnership Shortcuts',
        summary: 'Fast ratio balancing, CI–SI difference formulas, and working-partner profit splits.',
        readTime: '3 min read',
        examRelevance: 'CGL · CHSL · MTS',
        sections: [
          {
            heading: 'Simple & Compound Interest',
            points: [
              'SI grows by an equal fixed amount each year: 1-year SI = Amount(n+1) − Amount(n)',
              '2-Year CI − SI Difference = P(R / 100)²',
              '3-Year CI − SI Difference = P(R / 100)² × (300 + R) / 100',
              'Successive Rate for 2 Years = R + R + (R² / 100)%',
            ],
          },
          {
            heading: 'Ratio Merging & Partnership',
            points: [
              'If A:B = a:b and B:C = c:d, then A:B:C = (a×c) : (b×c) : (b×d)',
              'Profit Share Ratio = (Capital₁ × Time₁) : (Capital₂ × Time₂)',
              'Working Partner Rule: Deduct management salary/commission from total profit first, then divide the remaining profit in investment ratio',
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'english',
    name: 'English',
    subtitle: 'Vocab & Grammar',
    accentBg: 'bg-amber-50',
    accentText: 'text-amber-800',
    accentBorder: 'border-[#F59E0B]',
    notes: [
      {
        id: 'eng-grammar-rules',
        subjectId: 'english',
        title: 'Golden Grammar Rules for Error Spotting',
        summary: 'Most frequently tested subject–verb agreement, conditional, and conjunction traps.',
        readTime: '4 min read',
        examRelevance: 'CGL · CHSL · Steno',
        sections: [
          {
            heading: 'Subject–Verb Agreement Triggers',
            points: [
              'As well as / along with / together with / besides: Verb agrees with the FIRST subject',
              'Either...or / Neither...nor / Not only...but also: Verb agrees with the NEAREST subject',
              'One of the + Plural Noun + Singular Verb (e.g., "One of the players IS injured")',
              'The number of + Plural Noun + Singular Verb  |  A number of + Plural Noun + Plural Verb',
            ],
          },
          {
            heading: 'Conjunction & Conditional Pairs',
            points: [
              'No sooner ... than (never "when")  |  Hardly / Scarcely ... when (never "than")',
              'Lest is always followed by "should" (never use "not" with lest)',
              'Type-3 Conditional: If + had + V₃  ⇒  would have + V₃ (never put "would have" in the if-clause)',
              'Although / Though is followed by "yet" or a comma (never "but")',
            ],
          },
        ],
      },
      {
        id: 'eng-vocab-ows',
        subjectId: 'english',
        title: 'High-Frequency OWS & Idioms Bank',
        summary: 'Repeated SSC One-Word Substitutions, root words, and commonly asked idioms.',
        readTime: '4 min read',
        examRelevance: 'CGL · CHSL · MTS',
        sections: [
          {
            heading: 'Must-Know One-Word Substitutions',
            points: [
              'Altruist: One who loves and helps mankind selflessly',
              'Ephemeral: Lasting for a very short time',
              'Infallible: Incapable of making mistakes or being wrong',
              'Panacea: A cure-all remedy for every disease or difficulty',
              'Stoic: A person who endures pain or hardship without complaining',
            ],
          },
          {
            heading: 'Repeated SSC Idioms & Phrases',
            points: [
              'Burn the midnight oil: Work or study late into the night',
              'A bolt from the blue: A sudden, completely unexpected shock',
              'Bite the bullet: Face a difficult situation with courage',
              'Spill the beans: Reveal secret information unintentionally',
              'Once in a blue moon: Something that happens very rarely',
            ],
          },
        ],
      },
      {
        id: 'eng-voice-narration',
        subjectId: 'english',
        title: 'Active–Passive & Narration Quick Matrix',
        summary: 'Instant verb-form elimination chart to solve voice and direct–indirect questions in 10 seconds.',
        readTime: '3 min read',
        examRelevance: 'CGL Tier-1 & Tier-2',
        sections: [
          {
            heading: 'Active to Passive Elimination Rules',
            points: [
              'V₁ / V₅ (Simple Present)  →  is / am / are + V₃',
              'V₂ (Simple Past)  →  was / were + V₃',
              'is/was + V-ing (Continuous)  →  is/was + being + V₃',
              'has/have/had + V₃ (Perfect)  →  has/have/had + been + V₃',
              'Modal + V₁  →  Modal + be + V₃',
            ],
          },
          {
            heading: 'Direct to Indirect Narration Shifts',
            points: [
              'Present Simple → Past Simple  |  Present Continuous → Past Continuous',
              'Past Simple → Past Perfect (had + V₃)  |  Will → Would, Can → Could',
              'Time Words: today → that day, tomorrow → the next day, yesterday → the previous day',
              'Universal truths and habitual facts NEVER change tense in indirect speech',
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'reasoning',
    name: 'Reasoning',
    subtitle: 'Shortcuts & Patterns',
    accentBg: 'bg-purple-50',
    accentText: 'text-purple-800',
    accentBorder: 'border-purple-600',
    notes: [
      {
        id: 'reas-number-series',
        subjectId: 'reasoning',
        title: 'Number Series & Missing Number Triggers',
        summary: 'Step-by-step diagnostic checklist to crack any number series in under 20 seconds.',
        readTime: '3 min read',
        examRelevance: 'CGL · CHSL · RRB',
        sections: [
          {
            heading: 'Fast Diagnostic Sequence',
            points: [
              'Slow growth/decline: Check 1st difference, then 2nd (double) difference',
              'Sharp jump: Check ×n ± k  or  ×n ± n (e.g., ×2+1, ×3+2)',
              'Recognize near-squares & near-cubes instantly: n² ± 1, n² ± n, n³ ± n (e.g., 2, 10, 30, 68, 130)',
              'Irregular up-down wave: Split into 2 alternating odd/even position series',
            ],
          },
          {
            heading: 'Memory Anchors to Keep Ready',
            points: [
              'Squares 1² to 30² and Cubes 1³ to 15³',
              'Prime numbers up to 100 (especially 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73)',
              'Decimal drop then rise (e.g., 12, 6, 6, 9, 18): Multiply by 0.5, 1, 1.5, 2, 2.5',
            ],
          },
        ],
      },
      {
        id: 'reas-syllogism',
        subjectId: 'reasoning',
        title: 'Syllogism & Either–Or Conditions',
        summary: 'Zero-confusion Venn diagram rules, complementary pairs, and negative statement checks.',
        readTime: '3 min read',
        examRelevance: 'CGL · CHSL · CPO',
        sections: [
          {
            heading: 'Core Deduction Rules',
            points: [
              'Two positive statements NEVER yield a definite negative conclusion',
              'Two negative statements NEVER yield a valid conclusion linking their extremes',
              '"All A are B" always implies "Some B are A" and "Some A are B"',
              '"No A is B" always implies "No B is A" and "Some A are not B"',
            ],
          },
          {
            heading: '3 Mandatory Conditions for "Either I or II"',
            points: [
              '1. Both conclusions individually must be FALSE (cannot be definitely proved)',
              '2. Both conclusions must share the exact same Subject and Predicate elements',
              '3. One must be Positive and the other Negative: (Some + No) OR (Some + Some Not) — note: (All + No) is NOT an Either-Or pair',
            ],
          },
        ],
      },
      {
        id: 'reas-coding-dice',
        subjectId: 'reasoning',
        title: 'Coding–Decoding, Opposite Letters & Dice',
        summary: 'Instant alphabet position ranks, opposite pair mnemonics, and 1-common-face dice rotation.',
        readTime: '3 min read',
        examRelevance: 'CGL · CHSL · MTS',
        sections: [
          {
            heading: 'Alphabet Position & Opposite Pairs',
            points: [
              'EJOTY Anchor: E=5, J=10, O=15, T=20, Y=25  |  CFILORUX (multiples of 3)',
              'Opposite Letter Sum = 27: A↔Z (1+26), B↔Y (2+25), C↔X, D↔W, E↔V, F↔U, G↔T, H↔S, I↔R, J↔Q, K↔P, L↔O, M↔N',
              'Quick Check: Reverse word order + opposite letter shift is the #1 SSC pattern',
            ],
          },
          {
            heading: 'Dice & Clock Formulas',
            points: [
              'One Face Common: Rotate clockwise from the common face in both views; matching positions are opposite faces',
              'Two Faces Common: The two remaining uncommon faces are directly opposite each other',
              'Clock Angle Formula: θ = |30H − 5.5M| (reflex angle = 360° − θ)',
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'ga',
    name: 'General Awareness',
    subtitle: 'Static GK',
    accentBg: 'bg-emerald-50',
    accentText: 'text-emerald-800',
    accentBorder: 'border-emerald-600',
    notes: [
      {
        id: 'ga-polity',
        subjectId: 'ga',
        title: 'Indian Polity: Key Articles & Amendments',
        summary: 'High-weightage Constitutional Articles, Schedules, Writs, and landmark Amendments.',
        readTime: '4 min read',
        examRelevance: 'CGL · CHSL · MTS · RRB',
        sections: [
          {
            heading: 'Most Asked Articles',
            points: [
              'Art. 14–18: Right to Equality (17: Untouchability abolished, 18: Abolition of Titles)',
              'Art. 21: Right to Life & Personal Liberty  |  Art. 21A: Free Elementary Education (86th Amendment)',
              'Art. 32: Constitutional Remedies ("Heart & Soul" — Dr. B.R. Ambedkar) & 5 Writs',
              'Art. 40: Gram Panchayats  |  Art. 44: Uniform Civil Code  |  Art. 51A: Fundamental Duties (11)',
              'Art. 72: President Pardoning Power  |  Art. 110: Money Bill  |  Art. 280: Finance Commission  |  Art. 324: Election Commission',
            ],
          },
          {
            heading: 'Landmark Constitutional Amendments',
            points: [
              '42nd (1976): "Mini Constitution" — added Socialist, Secular, Integrity & Fundamental Duties',
              '44th (1978): Right to Property shifted from Fundamental Right to Legal Right (Art. 300A)',
              '61st (1989): Voting age lowered from 21 to 18 years',
              '73rd & 74th (1992): Panchayati Raj (11th Schedule) & Municipalities (12th Schedule)',
              '101st (2016): Goods and Services Tax (GST)',
            ],
          },
        ],
      },
      {
        id: 'ga-culture',
        subjectId: 'ga',
        title: 'Classical Dances, Folk Arts & Festivals',
        summary: 'Complete list of India’s 8 Classical Dances, states, maestros, and major harvest festivals.',
        readTime: '3 min read',
        examRelevance: 'CGL · CHSL · MTS',
        sections: [
          {
            heading: '8 Classical Dances of India',
            points: [
              'Bharatanatyam (Tamil Nadu) — Rukmini Devi Arundale, Yamini Krishnamurthy',
              'Kathak (North India / UP) — Pandit Birju Maharaj, Sitara Devi',
              'Kathakali & Mohiniyattam (Kerala) — Kalamandalam Krishnan Nair, Sunanda Nair',
              'Kuchipudi (Andhra Pradesh) — Vempati Chinna Satyam, Radha & Raja Reddy',
              'Odissi (Odisha) — Kelucharan Mohapatra, Sonal Mansingh',
              'Manipuri (Manipur) — Jhaveri Sisters  |  Sattriya (Assam) — Srimanta Sankardeva',
            ],
          },
          {
            heading: 'Frequently Tested Festivals',
            points: [
              'Hornbill Festival: Nagaland (Dec 1–10)  |  Losar: Ladakh / Arunachal / Sikkim',
              'Bihu (Rongali, Kongali, Bhogali): Assam  |  Pongal: Tamil Nadu  |  Onam: Kerala',
              'Bathukamma & Bonalu: Telangana  |  Gudi Padwa: Maharashtra  |  Nuakhai: Odisha',
            ],
          },
        ],
      },
      {
        id: 'ga-history-plans',
        subjectId: 'ga',
        title: 'Modern History & Five-Year Plans Capsule',
        summary: 'Chronological freedom-movement milestones and key Five-Year Plan objectives.',
        readTime: '4 min read',
        examRelevance: 'CGL · CHSL · RRB',
        sections: [
          {
            heading: 'Modern History Milestones (1885–1947)',
            points: [
              '1885: INC Founded (Bombay, W.C. Bonnerjee)  |  1905: Partition of Bengal (Lord Curzon)',
              '1917: Champaran Satyagraha (1st Civil Disobedience)  |  1919: Rowlatt Act & Jallianwala Bagh',
              '1920–22: Non-Cooperation Movement  |  1929: Lahore Session (Purna Swaraj, J.L. Nehru)',
              '1930: Dandi March (12 Mar – 6 Apr)  |  1931: Gandhi–Irwin Pact  |  1932: Poona Pact',
              '1942: Quit India Movement ("Do or Die")  |  1946: Cabinet Mission Plan',
            ],
          },
          {
            heading: 'High-Yield Five-Year Plans',
            points: [
              '1st Plan (1951–56): Harrod–Domar Model — Agriculture & Irrigation focus',
              '2nd Plan (1956–61): P.C. Mahalanobis Model — Rapid Heavy Industrialization',
              '5th Plan (1974–78): "Garibi Hatao" & Self-Reliance',
              '12th Plan (2012–17): Faster, More Inclusive & Sustainable Growth (last FYP; NITI Aayog formed Jan 1, 2015)',
            ],
          },
        ],
      },
    ],
  },
];
