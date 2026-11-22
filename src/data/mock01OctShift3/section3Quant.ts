import { Question } from '../../types/exam';

export const SECTION_3_QUANT_O1S3: Question[] = [
  {
    id: 'cgl26_01o3_q51',
    topic: 'Mensuration 3D',
    questionEn:
      'If the volume of the sphere is 697 (4/21) cm³ then find the radius of the sphere.',
    questionHi:
      'यदि गोले का आयतन 697 (4/21) घन सेंटीमीटर है, तो गोले की त्रिज्या ज्ञात कीजिए।',
    optionsEn: ['6.5 cm', '5.8 cm', '5.5 cm', '4.5 cm'],
    optionsHi: ['6.5 सेंटीमीटर', '5.8 सेंटीमीटर', '5.5 सेंटीमीटर', '4.5 सेंटीमीटर'],
    correctIndex: 2,
    explanationEn:
      'Convert mixed fraction to improper fraction:\nVolume = 697 + 4/21 = (697 × 21 + 4) / 21 = 14641 / 21 cm³.\nFormula: Volume of sphere = (4/3)πr³ = (4/3) × (22/7) × r³ = (88/21)r³.\n⇒ (88/21)r³ = 14641 / 21\n⇒ r³ = 14641 / 88 = 1331 / 8 = (11/2)³\n⇒ r = 11/2 = 5.5 cm.',
    explanationHi:
      'गोले का आयतन = 697 (4/21) = 14641 / 21 सेमी³।\nसूत्र: (4/3) × (22/7) × r³ = 14641 / 21\n⇒ (88/21)r³ = 14641 / 21 ⇒ r³ = 14641 / 88 = 1331 / 8 = (11/2)³\n⇒ r = 11/2 = 5.5 सेंटीमीटर।',
  },
  {
    id: 'cgl26_01o3_q52',
    topic: 'Mensuration 2D',
    questionEn:
      'The sides of a triangle are in the ratio 4:7:7. If the perimeter is 90 cm, what is the area of the triangle?',
    questionHi:
      'एक त्रिभुज की भुजाओं का अनुपात 4:7:7 है। अगर परिमाप 90 सेमी है, तो त्रिभुज का क्षेत्रफल क्या है?',
    optionsEn: ['150√5 cm²', '250√5 cm²', '350√5 cm²', '90√5 cm²'],
    optionsHi: ['150√5 cm²', '250√5 cm²', '350√5 cm²', '90√5 cm²'],
    correctIndex: 0,
    explanationEn:
      'Let the sides be 4k, 7k, and 7k.\nPerimeter = 4k + 7k + 7k = 18k = 90 ⇒ k = 5.\nSo sides are a = 20 cm, b = 35 cm, c = 35 cm (isosceles triangle).\nSemi-perimeter s = 90 / 2 = 45 cm.\nBy Heron’s formula:\nArea = √[s(s − a)(s − b)(s − c)] = √(45 × 25 × 10 × 10)\n= 10 × 5 × 3√5 = 150√5 cm².',
    explanationHi:
      'माना भुजाएँ 4k, 7k, 7k हैं ⇒ 18k = 90 ⇒ k = 5।\nभुजाएँ = 20, 35, 35 सेमी; अर्ध-परिमाप s = 45 सेमी।\nहीरोन के सूत्र से:\nक्षेत्रफल = √(45 × 25 × 10 × 10) = 10 × 5 × 3√5 = 150√5 cm²।',
  },
  {
    id: 'cgl26_01o3_q53',
    topic: 'Geometry (Polygons)',
    questionEn:
      'Congruent triangles are joined to form a six-sided polygon in which all sides are equal and each interior angle is obtuse. How would you classify this polygon?',
    questionHi:
      'सर्वांगसम त्रिभुजों को मिलाकर एक छः भुजाओं वाला बहुभुज बनाया गया है जिसमें सभी भुजाएँ बराबर हैं और प्रत्येक आंतरिक कोण अधिक कोण है। आप इस बहुभुज को कैसे वर्गीकृत करेंगे?',
    optionsEn: [
      'Regular octagon',
      'Regular decagon',
      'Regular hexagon',
      'Regular pentagon',
    ],
    optionsHi: [
      'नियमित अष्टकोण',
      'नियमित दशभुज',
      'नियमित षट्भुज',
      'नियमित पंचभुज',
    ],
    correctIndex: 2,
    explanationEn:
      'A six-sided polygon with all sides equal and all interior angles equal (each = [(6 − 2) × 180°] / 6 = 120°, which is obtuse) is a Regular Hexagon. (Six congruent equilateral triangles join at a center to form a regular hexagon.)',
    explanationHi:
      'छः बराबर भुजाओं और प्रत्येक 120° (अधिक कोण) आंतरिक कोण वाले बहुभुज को नियमित षट्भुज (Regular Hexagon) कहते हैं। छः सर्वांगसम समबाहु त्रिभुजों को जोड़कर नियमित षट्भुज बनता है।',
  },
  {
    id: 'cgl26_01o3_q54',
    topic: 'Data Interpretation (Frequency Polygon)',
    questionEn:
      'Examine the frequency polygon on math Exam Scores (out of 100), Groups: Batch A vs. Batch B and answer the following question.\n\nIn the frequency polygon comparison of Batch A and Batch B, at which score interval is the difference in frequencies between the two batches the greatest?',
    questionHi:
      'गणित परीक्षा स्कोर (100 में से), समूह: बैच A बनाम बैच B पर आवृत्ति बहुभुज की जांच करें और निम्नलिखित प्रश्न का उत्तर दें।\n\nबैच A और बैच B की आवृत्ति बहुभुज तुलना में, किस स्कोर अंतराल पर दो बैचों के बीच आवृत्तियों में अंतर सबसे अधिक है?',
    visual: {
      type: 'line',
      title: 'Exam Scores Comparison',
      categories: ['0 - 20', '20 - 40', '40 - 60', '60 - 80', '80 - 100'],
      yMin: 0,
      yMax: 30,
      yStep: 5,
      series: [
        { name: 'Frequency (Batch A)', values: [5, 12, 25, 18, 10], dashed: false },
        { name: 'Frequency (Batch B)', values: [10, 18, 22, 15, 5], dashed: true },
      ],
      showValueLabels: true,
      showLegend: true,
    },
    optionsEn: ['0 – 20', '20 – 40', '80 – 100', '40 – 60'],
    optionsHi: ['0 – 20', '20 – 40', '80 – 100', '40 – 60'],
    correctIndex: 1,
    explanationEn:
      'Reading frequencies of Batch A (solid) and Batch B (dashed) at each interval:\n• 0 – 20: |5 − 10| = 5\n• 20 – 40: |12 − 18| = 6 (Greatest)\n• 40 – 60: |25 − 22| = 3\n• 60 – 80: |18 − 15| = 3\n• 80 – 100: |10 − 5| = 5\nHence, the difference is greatest in the 20 – 40 interval.',
    explanationHi:
      'ग्राफ से प्रत्येक अंतराल में बैच A और बैच B की आवृत्ति का अंतर:\n• 0–20: |5 − 10| = 5\n• 20–40: |12 − 18| = 6 (सर्वाधिक)\n• 40–60: |25 − 22| = 3\n• 60–80: |18 − 15| = 3\n• 80–100: |10 − 5| = 5\nअतः सबसे अधिक अंतर 20 – 40 अंतराल में है।',
  },
  {
    id: 'cgl26_01o3_q55',
    topic: 'Trigonometry',
    questionEn: 'If sin A = 3/5 and A is acute, find the value of (1 + tan² A) / sec² A.',
    questionHi:
      'अगर sin A = 3/5 और A न्यूनकोण है, तो (1 + tan² A) / sec² A का मान ज्ञात कीजिए।',
    optionsEn: ['1', '9/16', '25/16', '4/3'],
    optionsHi: ['1', '9/16', '25/16', '4/3'],
    correctIndex: 0,
    explanationEn:
      'Using the fundamental trigonometric identity:\n1 + tan² A = sec² A\nTherefore, (1 + tan² A) / sec² A = sec² A / sec² A = 1 (independent of sin A = 3/5).',
    explanationHi:
      'त्रिकोणमितीय सर्वसमिका से: 1 + tan² A = sec² A।\nअतः (1 + tan² A) / sec² A = sec² A / sec² A = 1।',
  },
  {
    id: 'cgl26_01o3_q56',
    topic: 'Geometry (Circles)',
    questionEn:
      'If in a circle with center O, two chords PQ & RS are equal such that ∠POQ = 70° & ∠ORS = p°. Calculate 3p° − 50°.',
    questionHi:
      'अगर केंद्र O वाले एक वृत्त में, दो जीवाएँ PQ और RS इस प्रकार बराबर हैं कि ∠POQ = 70° और ∠ORS = p° है, तो 3p° − 50° की गणना कीजिए।',
    optionsEn: ['105°', '115°', '125°', '135°'],
    optionsHi: ['105°', '115°', '125°', '135°'],
    correctIndex: 1,
    explanationEn:
      'Equal chords subtend equal angles at the center:\n⇒ ∠ROS = ∠POQ = 70°.\nIn △ORS, OR = OS (radii of the same circle), so ∠ORS = ∠OSR = p°.\n⇒ p° + p° + 70° = 180° ⇒ 2p° = 110° ⇒ p° = 55°.\nTherefore, 3p° − 50° = 3(55°) − 50° = 165° − 50° = 115°.',
    explanationHi:
      'बराबर जीवाएँ केंद्र पर बराबर कोण बनाती हैं ⇒ ∠ROS = ∠POQ = 70°।\nसमद्विबाहु △ORS में (OR = OS = त्रिज्या):\n∠ORS = p° = (180° − 70°) / 2 = 55°।\nअतः 3p° − 50° = 3(55°) − 50° = 165° − 50° = 115°।',
  },
  {
    id: 'cgl26_01o3_q57',
    topic: 'Data Interpretation (Bar Graph)',
    questionEn:
      'Using the provided bar graph, which shows the number of students in each class, answer the following question.\n\nIf Class IV is split into two sections with an equal number of students, and Class III merges with one of these sections, what percentage of the total students would be in that merged section?',
    questionHi:
      'दिए गए बार ग्राफ का उपयोग करके, जो प्रत्येक कक्षा में छात्रों की संख्या दर्शाता है, निम्नलिखित प्रश्न का उत्तर दीजिए।\n\nयदि कक्षा IV को बराबर संख्या में विद्यार्थियों वाले दो खंडों में विभाजित कर दिया जाए, तथा कक्षा III को इनमें से किसी एक खंड में मिला दिया जाए, तो उस विलयित खंड में कुल विद्यार्थियों का कितना प्रतिशत होगा?',
    visual: {
      type: 'bar',
      title: 'Students',
      categories: ['Class I', 'Class II', 'Class III', 'Class IV', 'Class V'],
      yMin: 0,
      yMax: 70,
      yStep: 10,
      series: [{ name: 'Students', values: [45, 50, 40, 60, 40], fill: 'muted' }],
      showValueLabels: true,
      showLegend: false,
    },
    optionsEn: ['30%', '32%', '34%', '36%'],
    optionsHi: ['30%', '32%', '34%', '36%'],
    correctIndex: 0,
    explanationEn:
      'From the bar graph:\n• Class I = 45, Class II = 50, Class III = 40, Class IV = 60, Class V = 40\n• Total students = 45 + 50 + 40 + 60 + 40 = 235\n• Half of Class IV = 60 / 2 = 30\n• Merged section = Class III + 30 = 40 + 30 = 70\n• Required percentage = (70 / 235) × 100 ≈ 29.79% ≈ 30%.',
    explanationHi:
      'बार ग्राफ से छात्रों की संख्या:\nकक्षा I = 45, II = 50, III = 40, IV = 60, V = 40 ⇒ कुल = 235।\nकक्षा IV का एक खंड = 60 / 2 = 30।\nविलयित खंड में छात्र = 40 + 30 = 70।\nप्रतिशत = (70 / 235) × 100 ≈ 29.79% ≈ 30%।',
  },
  {
    id: 'cgl26_01o3_q58',
    topic: 'Data Interpretation (Bar Graph)',
    questionEn:
      'Examine the bar graph below to answer the following question.\n\nWhat is the total number of internet users across all five states, and what approximate percentage of them are urban users?',
    questionHi:
      'नीचे दिए गए बार ग्राफ की जांच करें और निम्नलिखित प्रश्न का उत्तर दें।\n\nसभी पांच राज्यों में इंटरनेट उपयोगकर्ताओं की कुल संख्या कितनी है, तथा उनमें से लगभग कितने प्रतिशत शहरी उपयोगकर्ता हैं?',
    visual: {
      type: 'bar',
      title: 'INTERNET USERS',
      categories: ['UP', 'Maharashtra', 'Tamil Nadu', 'Bihar', 'Kerala'],
      yMin: 15,
      yMax: 55,
      yStep: 5,
      series: [
        { name: 'Urban Users (mn)', values: [40, 50, 35, 25, 38], fill: 'outline' },
        { name: 'Rural Users (mn)', values: [25, 30, 28, 18, 20], fill: 'solid' },
      ],
      showValueLabels: true,
      showLegend: true,
    },
    optionsEn: [
      '309 million total; 61% urban',
      '309 million total; 59% urban',
      '314 million total; 60% urban',
      '307 million total; 63% urban',
    ],
    optionsHi: [
      'कुल 309 मिलियन; 61% शहरी',
      'कुल 309 मिलियन; 59% शहरी',
      'कुल 314 मिलियन; 60% शहरी',
      'कुल 307 मिलियन; 63% शहरी',
    ],
    correctIndex: 0,
    explanationEn:
      'Reading Urban and Rural users (in millions) from the bar graph:\n• Urban: UP (40) + Maharashtra (50) + Tamil Nadu (35) + Bihar (25) + Kerala (38) = 188 million\n• Rural: UP (25) + Maharashtra (30) + Tamil Nadu (28) + Bihar (18) + Kerala (20) = 121 million\n• Total users = 188 + 121 = 309 million\n• Urban percentage = (188 / 309) × 100 ≈ 60.84% ≈ 61%.',
    explanationHi:
      'ग्राफ से शहरी और ग्रामीण उपयोगकर्ता (मिलियन में):\n• शहरी = 40 + 50 + 35 + 25 + 38 = 188 मिलियन\n• ग्रामीण = 25 + 30 + 28 + 18 + 20 = 121 मिलियन\n• कुल उपयोगकर्ता = 188 + 121 = 309 मिलियन\n• शहरी प्रतिशत = (188 / 309) × 100 ≈ 60.84% ≈ 61%।',
  },
  {
    id: 'cgl26_01o3_q59',
    topic: 'Data Interpretation (Pie Chart)',
    questionEn:
      'Carefully study the pie chart showing the distribution of household budget allocation. Then answer the following question.\n\nWhich three categories combined account for the same percentage as Rent?',
    questionHi:
      'दिए गए पाई चार्ट का ध्यानपूर्वक अध्ययन करें। फिर निम्नलिखित प्रश्न का उत्तर दें।\n\nकौन सी तीन श्रेणियां संयुक्त रूप से किराये के समान प्रतिशत के लिए उत्तरदायी हैं?',
    visual: {
      type: 'pie',
      title: 'Monthly Household Budget Allocation',
      slices: [
        { label: 'Rent', value: 35, pattern: 'solid-dark' },
        { label: 'Groceries', value: 20, pattern: 'light-gray' },
        { label: 'Utilities', value: 10, pattern: 'hatch-cross' },
        { label: 'Transportation', value: 10, pattern: 'mid-gray' },
        { label: 'Entertainment', value: 10, pattern: 'hatch-diag' },
        { label: 'Savings', value: 15, pattern: 'dots' },
      ],
    },
    optionsEn: [
      'Utilities, Transportation, Entertainment',
      'Groceries, Entertainment, Savings',
      'Transportation, Entertainment, Savings',
      'Rent, Transportation, Savings',
    ],
    optionsHi: [
      'उपयोगिताएँ, परिवहन, मनोरंजन',
      'किराने का सामान, मनोरंजन, बचत',
      'परिवहन, मनोरंजन, बचत',
      'किराया, परिवहन, बचत',
    ],
    correctIndex: 2,
    explanationEn:
      'From the pie chart: Rent = 35%.\nChecking Option (C): Transportation (10%) + Entertainment (10%) + Savings (15%) = 35% = Rent. Hence, Option (C) is correct.',
    explanationHi:
      'पाई चार्ट से: किराया (Rent) = 35%।\nविकल्प (C): परिवहन (10%) + मनोरंजन (10%) + बचत (15%) = 35% (किराये के बराबर)। अतः विकल्प (C) सही है।',
  },
  {
    id: 'cgl26_01o3_q60',
    topic: 'Data Interpretation (Histogram)',
    questionEn:
      'Examine the histogram showing how many employees fall within various salary ranges (in thousands of dollars). Use this data to answer the question below.\n\nWhich of the following salary ranges has no employees?',
    questionHi:
      'विभिन्न वेतन श्रेणियों (हज़ारों डॉलर में) में कितने कर्मचारी आते हैं, यह दर्शाने वाले हिस्टोग्राम का अध्ययन कीजिए। नीचे दिए गए प्रश्न का उत्तर देने के लिए इस डेटा का उपयोग कीजिए।\n\nनिम्नलिखित में से किस वेतन श्रेणी में कोई कर्मचारी नहीं है?',
    visual: {
      type: 'histogram',
      title: 'Updated Salary Distribution in ABC Corporation',
      xAxisLabel: 'Salary (thousand $)',
      yAxisLabel: 'Number of Employees',
      yMax: 500,
      yStep: 100,
      binEdges: ['0', '10', '20', '30', '40', '50', '60', '70', '80', '90', '100'],
      counts: [100, 200, 200, 300, 450, 400, 300, 200, 100, 0],
      showValueLabels: false,
    },
    optionsEn: [
      '80–90 thousand',
      '0–10 thousand',
      '90–100 thousand',
      '60–70 thousand',
    ],
    optionsHi: ['80–90 हजार', '0–10 हजार', '90–100 हजार', '60–70 हजार'],
    correctIndex: 2,
    explanationEn:
      'From the histogram bars:\n• 0–10k: 100 employees\n• 60–70k: 300 employees\n• 80–90k: 100 employees\n• 90–100k: 0 employees (no bar).\nHence, 90–100 thousand has no employees.',
    explanationHi:
      'हिस्टोग्राम में 0–10 हजार (100), 60–70 हजार (300), और 80–90 हजार (100) में कर्मचारी हैं, जबकि 90–100 हजार श्रेणी में कोई बार (0 कर्मचारी) नहीं है।',
  },
  {
    id: 'cgl26_01o3_q61',
    topic: 'Number System (Fractions)',
    questionEn:
      'A student was asked to multiply a number by 5/9, but instead, he divided it by 5/9. If his answer was 56 more than the correct answer, find the number.',
    questionHi:
      'एक छात्र से किसी संख्या को 5/9 से गुणा करने के लिए कहा गया था, लेकिन उसने गलती से उस संख्या को 5/9 से भाग दे दिया। यदि उसका उत्तर सही उत्तर से 56 अधिक था, तो वह संख्या क्या है?',
    optionsEn: ['54', '45', '76', '85'],
    optionsHi: ['54', '45', '76', '85'],
    correctIndex: 1,
    explanationEn:
      'Let the number be x.\n• Correct answer = (5/9)x\n• Wrong answer = x ÷ (5/9) = (9/5)x\nGiven difference = 56:\n(9/5)x − (5/9)x = 56\n⇒ [(81 − 25) / 45]x = 56\n⇒ (56 / 45)x = 56 ⇒ x = 45.',
    explanationHi:
      'माना संख्या x है।\nगलत उत्तर − सही उत्तर = (9/5)x − (5/9)x = 56\n⇒ (56 / 45)x = 56 ⇒ x = 45।',
  },
  {
    id: 'cgl26_01o3_q62',
    topic: 'Algebra & Simplification',
    questionEn:
      'Find the value of K if [(0.9)⁶ − (0.4)⁶] / [(0.9)⁴ + 0.1296 + (0.4)⁴] = K.',
    questionHi:
      'निम्नलिखित का मान ज्ञात कीजिए, यदि [(0.9)⁶ − (0.4)⁶] / [(0.9)⁴ + 0.1296 + (0.4)⁴] = K, तो K का मान क्या है?',
    optionsEn: ['0.35', '0.45', '0.25', '0.65'],
    optionsHi: ['0.35', '0.45', '0.25', '0.65'],
    correctIndex: 3,
    explanationEn:
      'Let a = (0.9)² = 0.81 and b = (0.4)² = 0.16.\nNotice that ab = 0.81 × 0.16 = 0.1296.\nUsing identity (a³ − b³) / (a² + ab + b²) = a − b:\nK = 0.81 − 0.16 = 0.65.',
    explanationHi:
      'माना a = (0.9)² = 0.81 और b = (0.4)² = 0.16 ⇒ ab = 0.1296।\nसर्वसमिका (a³ − b³) / (a² + ab + b²) = a − b से:\nK = 0.81 − 0.16 = 0.65।',
  },
  {
    id: 'cgl26_01o3_q63',
    topic: 'Algebra (Remainder)',
    questionEn:
      'Find the remainder when (6.8³ − 0.008) is divided by (6.8² + 1.36 + 0.04).',
    questionHi:
      'जब (6.8³ − 0.008) को (6.8² + 1.36 + 0.04) से विभाजित किया जाता है, तो शेषफल ज्ञात कीजिए।',
    optionsEn: ['1', '0', '3', '5'],
    optionsHi: ['1', '0', '3', '5'],
    correctIndex: 1,
    explanationEn:
      'Write 0.008 = (0.2)³, 1.36 = 6.8 × 0.2, and 0.04 = (0.2)².\nUsing a³ − b³ = (a − b)(a² + ab + b²):\n(6.8³ − 0.2³) = (6.8 − 0.2)(6.8² + 6.8×0.2 + 0.2²).\nSince the divisor is an exact factor of the dividend, the remainder is 0.',
    explanationHi:
      'यहाँ 0.008 = 0.2³, 1.36 = 6.8 × 0.2 और 0.04 = 0.2² है।\nसूत्र a³ − b³ = (a − b)(a² + ab + b²) के कारण भाज्य, भाजक से पूर्णतः विभाजित हो जाता है। अतः शेषफल = 0।',
  },
  {
    id: 'cgl26_01o3_q64',
    topic: 'Ratio & Proportion',
    questionEn:
      'Find the mean proportional between 0.81 and 4.41. (Round off to one decimal place.)',
    questionHi:
      '0.81 और 4.41 के बीच मध्यानुपाती (Mean Proportional) ज्ञात कीजिए। (उत्तर को एक दशमलव स्थान तक पूर्णांकित कीजिए।)',
    optionsEn: ['2.1', '3.6', '4.7', '1.9'],
    optionsHi: ['2.1', '3.6', '4.7', '1.9'],
    correctIndex: 3,
    explanationEn:
      'Mean proportional between a and b = √(a × b)\n= √(0.81 × 4.41) = 0.9 × 2.1 = 1.89.\nRounding off to one decimal place gives 1.9.',
    explanationHi:
      'a और b का मध्यानुपाती = √(a × b) = √(0.81 × 4.41) = 0.9 × 2.1 = 1.89।\nएक दशमलव स्थान तक पूर्णांकित करने पर उत्तर 1.9 होगा।',
  },
  {
    id: 'cgl26_01o3_q65',
    topic: 'Profit & Loss',
    questionEn:
      'An item is sold at 25% profit. If the cost price decreases by 10% and the selling price also decreases by 10%, the new profit percentage will be:',
    questionHi:
      'एक वस्तु 25% लाभ पर बेची जाती है। यदि क्रय मूल्य 10% कम हो जाए और विक्रय मूल्य भी 10% कम हो जाए, तो नया लाभ प्रतिशत होगा:',
    optionsEn: ['45%', '25%', '35%', '65%'],
    optionsHi: ['45%', '25%', '35%', '65%'],
    correctIndex: 1,
    explanationEn:
      'Let original CP = 100 ⇒ original SP = 125.\nAfter 10% decrease in both:\nNew CP = 90, New SP = 0.9 × 125 = 112.5.\nNew Profit % = [(112.5 − 90) / 90] × 100 = (22.5 / 90) × 100 = 25%.\n(Short Trick: Scaling both CP and SP by the same factor leaves the profit percentage unchanged!)',
    explanationHi:
      'शॉर्ट ट्रिक: जब क्रय मूल्य (CP) और विक्रय मूल्य (SP) दोनों को समान प्रतिशत (10%) से घटाया जाता है, तो उनका अनुपात अपरिवर्तित रहता है। अतः नया लाभ प्रतिशत भी 25% ही रहेगा।',
  },
  {
    id: 'cgl26_01o3_q66',
    topic: 'Geometry (Incenter)',
    questionEn:
      'In △PQR, I is a point which is equidistant from all the sides of a △. If ∠PRQ = 30°, then find ∠QIR + ∠PIR.',
    questionHi:
      '△PQR में, I एक ऐसा बिंदु है जो △ की सभी भुजाओं से समान दूरी पर स्थित है। यदि ∠PRQ = 30° है, तो ∠QIR + ∠PIR ज्ञात कीजिए।',
    optionsEn: ['275°', '225°', '295°', '255°'],
    optionsHi: ['275°', '225°', '295°', '255°'],
    correctIndex: 3,
    explanationEn:
      'A point equidistant from all three sides of a triangle is its Incenter (I).\nBy incenter angle property:\n• ∠QIR = 90° + ∠P / 2\n• ∠PIR = 90° + ∠Q / 2\nAdding both:\n∠QIR + ∠PIR = 180° + (∠P + ∠Q) / 2\nSince ∠P + ∠Q = 180° − ∠R = 180° − 30° = 150°:\n∠QIR + ∠PIR = 180° + 150° / 2 = 180° + 75° = 255°.',
    explanationHi:
      'सभी भुजाओं से समान दूरी पर स्थित बिंदु I त्रिभुज का अंतःकेंद्र (Incenter) है।\n• ∠QIR = 90° + ∠P/2 और ∠PIR = 90° + ∠Q/2\nयोग = 180° + (∠P + ∠Q)/2 = 180° + (180° − 30°)/2 = 180° + 75° = 255°।',
  },
  {
    id: 'cgl26_01o3_q67',
    topic: 'Height & Distance',
    questionEn:
      'The angle of elevation of the top of a tower from two points at distances a and b from the base of the tower and in the same straight line with it are 30° and 60° respectively. If the height of the tower is h, find h in terms of b.',
    questionHi:
      'दो बिंदुओं से, जो मीनार के आधार से क्रमशः a तथा b दूरी पर एक ही सीधी रेखा में स्थित हैं, मीनार के शीर्ष के उन्नयन कोण क्रमशः 30° और 60° हैं। यदि मीनार की ऊँचाई h है, तो h को b के पदों में ज्ञात कीजिए।',
    optionsEn: ['h = b√2', 'b = h√3', 'h × b = √3', 'h = b√3'],
    optionsHi: ['h = b√2', 'b = h√3', 'h × b = √3', 'h = b√3'],
    correctIndex: 3,
    explanationEn:
      'For the point at distance b from the base, the angle of elevation to the top of the tower of height h is 60°.\nUsing right-triangle trigonometry:\ntan 60° = h / b ⇒ √3 = h / b ⇒ h = b√3.',
    explanationHi:
      'मीनार के आधार से b दूरी पर स्थित बिंदु से उन्नयन कोण 60° है।\ntan 60° = h / b ⇒ √3 = h / b ⇒ h = b√3।',
  },
  {
    id: 'cgl26_01o3_q68',
    topic: 'Mensuration 2D',
    questionEn:
      'A square lawn is enclosed by a path of uniform width 2.5 m. Given that the area of the path is 165 m², determine the side length of the square lawn.',
    questionHi:
      'एक वर्गाकार लॉन को 2.5 m चौड़ाई वाली समान पथ से घेरा गया है। यदि उस पथ का क्षेत्रफल 165 m² है, तो वर्गाकार लॉन की भुजा की लंबाई ज्ञात कीजिए।',
    optionsEn: ['12 m', '14 m', '17 m', '19 m'],
    optionsHi: ['12 m', '14 m', '17 m', '19 m'],
    correctIndex: 1,
    explanationEn:
      'Let the side of the square lawn be x meters.\nOuter square side (including 2.5 m path on both sides) = x + 2(2.5) = x + 5.\nArea of path = (x + 5)² − x² = 165\n⇒ 10x + 25 = 165\n⇒ 10x = 140 ⇒ x = 14 m.',
    explanationHi:
      'माना लॉन की भुजा x मीटर है; पथ सहित बाहरी भुजा = x + 5 मीटर।\nपथ का क्षेत्रफल = (x + 5)² − x² = 165\n⇒ 10x + 25 = 165 ⇒ 10x = 140 ⇒ x = 14 m।',
  },
  {
    id: 'cgl26_01o3_q69',
    topic: 'Geometry (Circles)',
    questionEn:
      'In a circle, chord AB subtends an angle of 42° at point P on the circumference. Find the angle subtended by the same chord at another point Q lying on the same segment.',
    questionHi:
      'एक वृत्त में, जीवा AB परिधि पर स्थित बिंदु P पर 42° का कोण बनाती है। उसी जीवा द्वारा उसी वृत्तखंड में स्थित किसी अन्य बिंदु Q पर बनने वाला कोण ज्ञात कीजिए।',
    optionsEn: ['21°', '42°', '69°', '111°'],
    optionsHi: ['21°', '42°', '69°', '111°'],
    correctIndex: 1,
    explanationEn:
      'By the Circle Theorem: Angles subtended by the same chord (or arc) in the same segment of a circle are always equal.\nTherefore, ∠AQB = ∠APB = 42°.',
    explanationHi:
      'वृत्त के प्रमेय के अनुसार, एक ही जीवा द्वारा एक ही वृत्तखंड में परिधि के किसी भी बिंदु पर बने कोण बराबर होते हैं। अतः ∠AQB = 42°।',
  },
  {
    id: 'cgl26_01o3_q70',
    topic: 'Geometry (Congruence)',
    questionEn:
      'In two congruent right-angled triangles ABC and PQR, angles A and P are 90°. If BC = 15 cm and PR = 9 cm, find AB.',
    questionHi:
      'दो सर्वांगसम समकोण त्रिभुजों ABC और PQR में, कोण A और P 90° हैं। यदि BC = 15 cm और PR = 9 cm है, तो AB का मान ज्ञात कीजिए।',
    optionsEn: ['15 cm', '12 cm', '9 cm', '6 cm'],
    optionsHi: ['15 cm', '12 cm', '9 cm', '6 cm'],
    correctIndex: 1,
    explanationEn:
      'Since △ABC ≅ △PQR with ∠A = ∠P = 90°, corresponding sides are equal:\n• AC = PR = 9 cm\n• Hypotenuse BC = 15 cm\nBy Pythagoras theorem (9, 12, 15 triplet):\nAB = √(BC² − AC²) = √(15² − 9²) = √(225 − 81) = √144 = 12 cm.',
    explanationHi:
      'सर्वांगसमता से AC = PR = 9 cm और कर्ण BC = 15 cm।\nपाइथागोरस प्रमेय (त्रिक 9, 12, 15) से:\nAB = √(15² − 9²) = √144 = 12 cm।',
  },
  {
    id: 'cgl26_01o3_q71',
    topic: 'Geometry (Intersecting Circles)',
    questionEn:
      'Two circles of radii 13 cm and 15 cm intersect, and the distance between their centers is 14 cm. Find the length of their common chord.',
    questionHi:
      '13 cm और 15 cm त्रिज्या वाले दो वृत्त प्रतिच्छेद करते हैं, और उनके केंद्रों के बीच की दूरी 14 cm है। उनकी उभयनिष्ठ जीवा की लंबाई ज्ञात कीजिए।',
    optionsEn: ['5 cm', '12 cm', '17 cm', '24 cm'],
    optionsHi: ['5 cm', '12 cm', '17 cm', '24 cm'],
    correctIndex: 3,
    explanationEn:
      'The centers and one intersection point form a triangle with sides 13 cm, 15 cm, and base 14 cm.\nShort Trick (Pythagorean Triplets): Split base 14 = 5 + 9, giving two right triangles (5, 12, 13) and (9, 12, 15) sharing altitude h = 12 cm.\nSince the common chord is perpendicular to and bisected by the line of centers:\nCommon chord = 2h = 2 × 12 = 24 cm.',
    explanationHi:
      'शॉर्ट ट्रिक (पाइथागोरस त्रिक): 13, 14, 15 भुजाओं वाले त्रिभुज में आधार 14 को 5 + 9 में बाँटने पर दो समकोण त्रिभुज (5, 12, 13) और (9, 12, 15) बनते हैं, जिनकी उभयनिष्ठ ऊँचाई (अर्ध-जीवा) = 12 cm है।\nअतः उभयनिष्ठ जीवा = 2 × 12 = 24 cm।',
  },
  {
    id: 'cgl26_01o3_q72',
    topic: 'Mixture & Alligation',
    questionEn:
      'A merchant has a total of 1000 kg of sugar. He sells part of it at a profit of 8% and the remaining at a profit of 18%. If his overall profit is 14%, how much of the sugar was sold at 18% profit?',
    questionHi:
      'एक व्यापारी के पास कुल 1000 kg चीनी है। वह उसका एक भाग 8% लाभ पर और शेष भाग 18% लाभ पर बेचता है। यदि उसका कुल लाभ 14% है, तो 18% लाभ पर कितनी चीनी बेची गई?',
    optionsEn: ['400 kg', '560 kg', '600 kg', '640 kg'],
    optionsHi: ['400 kg', '560 kg', '600 kg', '640 kg'],
    correctIndex: 2,
    explanationEn:
      'By Alligation Method:\n• Ratio of quantities (at 8% : at 18%) = (18 − 14) : (14 − 8) = 4 : 6 = 2 : 3.\n• Total parts = 2 + 3 = 5 → 1000 kg ⇒ 1 part = 200 kg.\n• Sugar sold at 18% profit = 3 × 200 = 600 kg.',
    explanationHi:
      'एलीगेशन नियम से:\nमात्रा का अनुपात (8% : 18%) = (18 − 14) : (14 − 8) = 4 : 6 = 2 : 3।\n18% लाभ पर बेची गई चीनी = (3/5) × 1000 = 600 kg।',
  },
  {
    id: 'cgl26_01o3_q73',
    topic: 'Geometry (Common Tangents)',
    questionEn:
      'Two circles have radii 8 cm and 5 cm. If the length of their transverse common tangent is 16 cm, find the distance between their centers (in cm).',
    questionHi:
      'दो वृत्तों की त्रिज्याएँ 8 cm और 5 cm हैं। यदि उनकी अनुप्रस्थ सामान्य स्पर्श रेखा की लंबाई 16 cm है, तो उनके केंद्रों के बीच की दूरी (cm में) ज्ञात कीजिए।',
    optionsEn: ['5√17 cm', '7√13 cm', '9 cm', '18 cm'],
    optionsHi: ['5√17 cm', '7√13 cm', '9 cm', '18 cm'],
    correctIndex: 0,
    explanationEn:
      'Formula for Transverse Common Tangent (TCT):\nTCT = √[d² − (r₁ + r₂)²]\nGiven r₁ = 8, r₂ = 5 ⇒ r₁ + r₂ = 13, TCT = 16:\n⇒ 16² = d² − 13²\n⇒ d² = 256 + 169 = 425\n⇒ d = √425 = √(25 × 17) = 5√17 cm.',
    explanationHi:
      'अनुप्रस्थ सामान्य स्पर्श रेखा (TCT) सूत्र: TCT² = d² − (r₁ + r₂)²\n⇒ 16² = d² − (8 + 5)² ⇒ d² = 256 + 169 = 425\n⇒ d = √425 = 5√17 cm।',
  },
  {
    id: 'cgl26_01o3_q74',
    topic: 'Data Interpretation (Pie Chart)',
    questionEn:
      "The following pie-chart shows the percentage distribution of energy consumption from various sources. Study the pie-chart carefully and answer the question based on it.\n\nThe total energy consumed is 10,000 units. The contribution from 'Coal' is reduced by one-fifth of its current amount. To keep the total energy consumption unchanged, the usage of 'Natural Gas' must be increased. Determine the percentage by which 'Natural Gas' consumption should be raised to compensate for the reduction in 'Coal'.",
    questionHi:
      'निम्नलिखित वृत्त आरेख विभिन्न स्रोतों से ऊर्जा उपभोग के प्रतिशत वितरण को दर्शाता है। वृत्त आरेख का सावधानीपूर्वक अध्ययन कीजिए और उस पर आधारित प्रश्न का उत्तर दीजिए:\n\nकुल ऊर्जा उपभोग 10,000 इकाइयाँ है। ‘कोयला’ (Coal) से योगदान उसके वर्तमान मान के एक-पाँचवाँ से कम कर दिया जाता है। कुल ऊर्जा उपभोग को अपरिवर्तित बनाए रखने के लिए ‘प्राकृतिक गैस’ (Natural Gas) के उपयोग को बढ़ाना आवश्यक है। निर्धारित कीजिए कि ‘कोयला’ में हुई कमी की पूर्ति के लिए ‘प्राकृतिक गैस’ के उपभोग में कितने प्रतिशत की वृद्धि की जानी चाहिए।',
    visual: {
      type: 'pie',
      title: 'Consumption (%)',
      slices: [
        { label: 'Coal', value: 30, pattern: 'hatch-diag' },
        { label: 'Natural Gas', value: 20, pattern: 'dots' },
        { label: 'Petroleum', value: 20, pattern: 'hatch-cross' },
        { label: 'Hydroelectric', value: 15, pattern: 'mid-gray' },
        { label: 'Solar & Wind', value: 15, pattern: 'solid-dark' },
      ],
    },
    optionsEn: ['45%', '40%', '30%', '35%'],
    optionsHi: ['45%', '40%', '30%', '35%'],
    correctIndex: 2,
    explanationEn:
      'From the pie chart:\n• Coal = 30% of 10,000 = 3,000 units\n• Natural Gas = 20% of 10,000 = 2,000 units\n• Reduction in Coal = (1/5) × 3,000 = 600 units\n• Required % increase in Natural Gas = (600 / 2,000) × 100 = 30%.',
    explanationHi:
      'पाई चार्ट से: कोयला = 30% (3,000 इकाइयाँ), प्राकृतिक गैस = 20% (2,000 इकाइयाँ)।\nकोयले में कमी = 3,000 का 1/5 = 600 इकाइयाँ।\nप्राकृतिक गैस में आवश्यक प्रतिशत वृद्धि = (600 / 2,000) × 100 = 30%।',
  },
  {
    id: 'cgl26_01o3_q75',
    topic: 'Percentage',
    questionEn:
      'In a corporate shareholder election, 60% of the voters were male, and the rest were female. 40% of the male voters and 70% of the female voters voted for Proposal A. If the total number of voters who did not vote for Proposal A is 1,200, find the total number of shareholders who cast a vote.',
    questionHi:
      'एक कॉर्पोरेट शेयरधारक चुनाव में, 60% मतदाता पुरुष थे और शेष महिलाएँ थीं। 40% पुरुष मतदाताओं और 70% महिला मतदाताओं ने प्रस्ताव A के पक्ष में मतदान किया। यदि प्रस्ताव A के पक्ष में मतदान न करने वाले मतदाताओं की कुल संख्या 1,200 है, तो मतदान करने वाले शेयरधारकों की कुल संख्या ज्ञात कीजिए।',
    optionsEn: ['2,400', '2,500', '2,600', '2,800'],
    optionsHi: ['2,400', '2,500', '2,600', '2,800'],
    correctIndex: 1,
    explanationEn:
      'Let total voters = 100%.\n• Male = 60%, Female = 40%.\n• Voted FOR Proposal A = (40% of 60%) + (70% of 40%) = 24% + 28% = 52%.\n• Did NOT vote for Proposal A = 100% − 52% = 48%.\nGiven 48% = 1,200:\nTotal voters = (1,200 / 48) × 100 = 25 × 100 = 2,500.',
    explanationHi:
      'माना कुल मतदाता = 100% (पुरुष = 60%, महिला = 40%)।\nप्रस्ताव A के पक्ष में मत = (60 का 40%) + (40 का 70%) = 24% + 28% = 52%।\nपक्ष में मतदान न करने वाले = 100% − 52% = 48% = 1,200।\nकुल मतदाता = (1,200 / 48) × 100 = 2,500।',
  },
];
