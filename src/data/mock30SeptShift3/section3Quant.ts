import { Question } from '../../types/exam';

export const SECTION_3_QUANT_S3: Question[] = [
  {
    id: 'cgl26_30s3_q51',
    topic: 'Simplification',
    questionEn:
      'Simplify: [(1.25 × 1.25 × 1.25 − 1) ÷ (1.25 × 1.25 + 1.25 + 1)] + 0.75.',
    questionHi:
      'सरल कीजिए: [(1.25 × 1.25 × 1.25 − 1) ÷ (1.25 × 1.25 + 1.25 + 1)] + 0.75.',
    optionsEn: ['1', '0', '3', '5'],
    optionsHi: ['1', '0', '3', '5'],
    correctIndex: 0,
    explanationEn:
      'Let a = 1.25 and b = 1. Using the algebraic identity (a³ − b³) ÷ (a² + ab + b²) = a − b, the bracket simplifies to 1.25 − 1 = 0.25. Adding 0.75 gives 0.25 + 0.75 = 1.',
    explanationHi:
      'माना a = 1.25 और b = 1। सर्वसमिका (a³ − b³) ÷ (a² + ab + b²) = a − b का प्रयोग करने पर कोष्ठक का मान = 1.25 − 1 = 0.25। अब 0.25 + 0.75 = 1 प्राप्त होता है।',
  },
  {
    id: 'cgl26_30s3_q52',
    topic: 'Simplification',
    questionEn: 'If √(1 + x/49) = 8/7, find the value of x.',
    questionHi: 'यदि √(1 + x/49) = 8/7 है, तो x का मान ज्ञात कीजिए।',
    optionsEn: ['10', '13', '15', '18'],
    optionsHi: ['10', '13', '15', '18'],
    correctIndex: 2,
    explanationEn:
      'Squaring both sides: 1 + x/49 = (8/7)² = 64/49 ⇒ x/49 = 64/49 − 1 = 15/49 ⇒ x = 15. (Short trick: x = 8² − 7² = 64 − 49 = 15.)',
    explanationHi:
      'दोनों पक्षों का वर्ग करने पर: 1 + x/49 = 64/49 ⇒ x/49 = 64/49 − 1 = 15/49 ⇒ x = 15। (शॉर्ट ट्रिक: x = 8² − 7² = 64 − 49 = 15।)',
  },
  {
    id: 'cgl26_30s3_q53',
    topic: 'Pipes & Cisterns',
    questionEn:
      'Working alone, Pipe P can fill 15% of a tank in 4 hours, and Pipe Q can fill 18% of the same tank in 4 hours. If both pipes are opened together, what percentage of the tank will be filled in 4 hours?',
    questionHi:
      'अकेले काम करते हुए, पाइप P एक टैंक का 15% हिस्सा 4 घंटे में भर सकता है, और पाइप Q उसी टैंक का 18% हिस्सा 4 घंटे में भर सकता है। यदि दोनों पाइपों को एक साथ खोला जाए, तो 4 घंटे में टैंक का कितना प्रतिशत हिस्सा भर जाएगा?',
    optionsEn: ['25%', '33%', '42%', '56%'],
    optionsHi: ['25%', '33%', '42%', '56%'],
    correctIndex: 1,
    explanationEn:
      'Both percentages are given for the same duration (4 hours). Together in 4 hours, Pipe P + Pipe Q fill 15% + 18% = 33% of the tank.',
    explanationHi:
      'दोनों पाइपों का कार्य समान समय (4 घंटे) के लिए दिया गया है। अतः दोनों पाइप मिलकर 4 घंटे में 15% + 18% = 33% टैंक भरेंगे।',
  },
  {
    id: 'cgl26_30s3_q54',
    topic: 'Ratio & Proportion',
    questionEn:
      'When x is subtracted from each of 20, 28, 25, and 35, the numbers so obtained are in proportion. Find the mean proportional between (x + 2) and (3x + 1).',
    questionHi:
      'जब 20, 28, 25 और 35 में से प्रत्येक में से x घटाया जाता है, तो प्राप्त संख्याएँ समानुपात में होती हैं। (x + 2) और (3x + 1) के बीच मध्यानुपाती ज्ञात कीजिए।',
    optionsEn: ['√3', '3√2', '2√3', '√2'],
    optionsHi: ['√3', '3√2', '2√3', '√2'],
    correctIndex: 3,
    explanationEn:
      'Notice 20/28 = 5/7 and 25/35 = 5/7 — the numbers are already in proportion! Formally: (20 − x)(35 − x) = (28 − x)(25 − x) ⇒ 700 − 55x + x² = 700 − 53x + x² ⇒ 2x = 0 ⇒ x = 0. Therefore, mean proportional between (0 + 2) = 2 and (3×0 + 1) = 1 is √(2 × 1) = √2.',
    explanationHi:
      'ध्यान दें कि 20/28 = 5/7 और 25/35 = 5/7, अर्थात् संख्याएँ पहले से ही समानुपात में हैं। सूत्र से: (20 − x)(35 − x) = (28 − x)(25 − x) ⇒ 700 − 55x + x² = 700 − 53x + x² ⇒ 2x = 0 ⇒ x = 0। अतः (x + 2) = 2 और (3x + 1) = 1 का मध्यानुपाती = √(2 × 1) = √2।',
  },
  {
    id: 'cgl26_30s3_q55',
    topic: 'Simple Interest',
    questionEn:
      'A man invests ₹4,000 for 3 years at a certain rate of simple interest. If the principal is increased by ₹2,000 and the rate is kept the same, the interest increases by ₹360. What was the original rate of interest?',
    questionHi:
      'एक व्यक्ति ₹4,000 को 3 वर्षों के लिए साधारण ब्याज की एक निश्चित दर पर निवेश करता है। यदि मूलधन में ₹2,000 की वृद्धि की जाती है और दर समान रखी जाती है, तो ब्याज में ₹360 की वृद्धि हो जाती है। ब्याज की मूल दर क्या थी?',
    optionsEn: ['5%', '8%', '6%', '10%'],
    optionsHi: ['5%', '8%', '6%', '10%'],
    correctIndex: 2,
    explanationEn:
      'The extra interest of ₹360 is earned purely on the additional principal of ₹2,000 over 3 years. Using SI = (P × R × T)/100: 360 = (2000 × R × 3) / 100 ⇒ 360 = 60R ⇒ R = 6%.',
    explanationHi:
      'अतिरिक्त ₹360 का ब्याज केवल अतिरिक्त ₹2,000 मूलधन पर 3 वर्षों में प्राप्त होता है। सूत्र SI = (P × R × T)/100 से: 360 = (2000 × R × 3) / 100 ⇒ 60R = 360 ⇒ R = 6%।',
  },
  {
    id: 'cgl26_30s3_q56',
    topic: 'Algebra',
    questionEn: 'If x(7 − 3/x) = 7/x, then find the value of x² + 1/x².',
    questionHi: 'यदि x(7 − 3/x) = 7/x, तो x² + 1/x² का मान ज्ञात कीजिए।',
    optionsEn: ['107/49', '53/49', '125/49', '47/49'],
    optionsHi: ['107/49', '53/49', '125/49', '47/49'],
    correctIndex: 0,
    explanationEn:
      'Expanding the left side: 7x − 3 = 7/x ⇒ 7(x − 1/x) = 3 ⇒ x − 1/x = 3/7. Squaring both sides: x² + 1/x² = (x − 1/x)² + 2 = (3/7)² + 2 = 9/49 + 98/49 = 107/49.',
    explanationHi:
      'बायाँ पक्ष खोलने पर: 7x − 3 = 7/x ⇒ 7(x − 1/x) = 3 ⇒ x − 1/x = 3/7। दोनों पक्षों का वर्ग करने पर: x² + 1/x² = (3/7)² + 2 = 9/49 + 2 = 107/49।',
  },
  {
    id: 'cgl26_30s3_q57',
    topic: 'Coordinate Geometry',
    questionEn: 'Which type of line has a slope equal to zero?',
    questionHi: 'किस प्रकार की रेखा की ढालान शून्य होती है?',
    optionsEn: [
      'Vertical line',
      'Line making 45° with x-axis',
      'Horizontal line',
      'Oblique line',
    ],
    optionsHi: [
      'ऊर्ध्वाधर रेखा',
      'x-अक्ष के साथ 45° का कोण बनाने वाली रेखा',
      'क्षैतिज रेखा',
      'तिरछी रेखा',
    ],
    correctIndex: 2,
    explanationEn:
      'The slope of a line is m = tan θ = Δy / Δx. A horizontal line is parallel to the x-axis (θ = 0°, Δy = 0), so its slope is tan 0° = 0. (A vertical line has undefined slope, and a 45° line has slope 1.)',
    explanationHi:
      'किसी रेखा की ढालान (slope) m = tan θ = Δy / Δx होती है। क्षैतिज रेखा x-अक्ष के समांतर होती है (θ = 0°), इसलिए इसकी ढालान tan 0° = 0 होती है।',
  },
  {
    id: 'cgl26_30s3_q58',
    topic: 'Compound Interest',
    questionEn:
      '₹2,50,000 is invested at 8% compound interest. After 1 year, ₹40,000 is withdrawn. Find the amount after 2 years.',
    questionHi:
      '₹2,50,000 को 8% चक्रवृद्धि ब्याज पर निवेश किया गया है। 1 वर्ष बाद ₹40,000 निकाल लिया जाता है। 2 वर्षों के बाद की राशि ज्ञात करें।',
    optionsEn: ['₹2,98,400', '₹2,78,400', '₹2,48,400', '₹2,08,400'],
    optionsHi: ['₹2,98,400', '₹2,78,400', '₹2,48,400', '₹2,08,400'],
    correctIndex: 2,
    explanationEn:
      'Amount after 1 year = ₹2,50,000 × 1.08 = ₹2,70,000. After withdrawing ₹40,000, new principal for the 2nd year = 2,70,000 − 40,000 = ₹2,30,000. Amount after 2nd year = ₹2,30,000 × 1.08 = ₹2,48,400.',
    explanationHi:
      '1 वर्ष बाद राशि = ₹2,50,000 × 1.08 = ₹2,70,000। ₹40,000 निकालने के बाद दूसरे वर्ष का मूलधन = 2,70,000 − 40,000 = ₹2,30,000। 2 वर्ष बाद कुल राशि = ₹2,30,000 × 1.08 = ₹2,48,400।',
  },
  {
    id: 'cgl26_30s3_q59',
    topic: 'Mensuration 3D',
    questionEn:
      'A rectangular box has dimensions 150 cm × 60 cm × 30 cm. Small cubes of side 5 cm are packed inside without leaving space. How many cubes can be packed?',
    questionHi:
      'एक आयताकार डिब्बे (rectangular box) के आयाम 150 cm × 60 cm × 30 cm हैं। इसमें 5 cm भुजा वाले छोटे-छोटे घन बिना कोई स्थान छोड़े भरे गए हैं। बताइए कि ऐसे कितने घन भरे जा सकते हैं?',
    optionsEn: ['2160', '2250', '1730', '1400'],
    optionsHi: ['2160', '2250', '1730', '1400'],
    correctIndex: 0,
    explanationEn:
      'Since 5 divides 150, 60, and 30 exactly: Number of cubes = (150/5) × (60/5) × (30/5) = 30 × 12 × 6 = 2160.',
    explanationHi:
      'चूँकि तीनों विमाएँ 5 से पूर्णतः विभाज्य हैं, घनों की संख्या = (150/5) × (60/5) × (30/5) = 30 × 12 × 6 = 2160।',
  },
  {
    id: 'cgl26_30s3_q60',
    topic: 'Geometry',
    questionEn:
      'A chord of a circle subtends an angle of 60° at the center. If the radius of the circle is 10 cm, find the length of the chord.',
    questionHi:
      'एक वृत्त की एक जीवा केंद्र पर 60° का कोण बनाती है। यदि वृत्त की त्रिज्या 10 cm है, तो उस जीवा की लंबाई ज्ञात कीजिए।',
    optionsEn: ['5 cm', '10 cm', '15 cm', '20 cm'],
    optionsHi: ['5 cm', '10 cm', '15 cm', '20 cm'],
    correctIndex: 1,
    explanationEn:
      'The two radii and the chord form an isosceles triangle with vertex angle 60°. Hence the other two angles are also 60° each, making it an equilateral triangle. Therefore, Chord length = Radius = 10 cm.',
    explanationHi:
      'केंद्र से जीवा के दोनों सिरों को मिलाने पर बना त्रिभुज समद्विबाहु है जिसका शीर्ष कोण 60° है। अतः शेष दोनों कोण भी 60° होंगे और यह एक समबाहु त्रिभुज होगा। इसलिए जीवा की लंबाई = त्रिज्या = 10 cm।',
  },
  {
    id: 'cgl26_30s3_q61',
    topic: 'Mensuration 2D',
    questionEn:
      'In a quadrilateral ABCD, the diagonal AC is 20 cm. The perpendiculars from vertices B and D to AC are 9 cm and 11 cm respectively. Find the area of ABCD.',
    questionHi:
      'चतुर्भुज ABCD में, विकर्ण AC = 20 cm है। बिंदु B और D से AC पर खींचे गए लम्ब क्रमशः 9 cm और 11 cm हैं। ABCD का क्षेत्रफल ज्ञात कीजिए।',
    optionsEn: ['180 cm²', '200 cm²', '220 cm²', '240 cm²'],
    optionsHi: ['180 cm²', '200 cm²', '220 cm²', '240 cm²'],
    correctIndex: 1,
    explanationEn:
      'Area of quadrilateral ABCD = ½ × diagonal × (sum of offsets) = ½ × 20 × (9 + 11) = 10 × 20 = 200 cm².',
    explanationHi:
      'चतुर्भुज ABCD का क्षेत्रफल = ½ × विकर्ण × (दोनों लम्बों का योग) = ½ × 20 × (9 + 11) = 10 × 20 = 200 cm²।',
  },
  {
    id: 'cgl26_30s3_q62',
    topic: 'Trigonometry',
    questionEn:
      'Evaluate the following expression:\n(sin θ / (1 + cos θ) + (1 + cos θ) / sin θ) × (1 / (tan θ + cot θ)).',
    questionHi:
      'निम्नलिखित व्यंजक का मूल्यांकन कीजिए:\n(sin θ / (1 + cos θ) + (1 + cos θ) / sin θ) × (1 / (tan θ + cot θ)).',
    optionsEn: ['2 sin θ', '2 tan θ', 'tan θ', '2 cos θ'],
    optionsHi: ['2 sin θ', '2 tan θ', 'tan θ', '2 cos θ'],
    correctIndex: 3,
    explanationEn:
      'First bracket = [sin²θ + (1 + cos θ)²] / [sin θ (1 + cos θ)] = [sin²θ + 1 + 2 cos θ + cos²θ] / [sin θ (1 + cos θ)] = [2(1 + cos θ)] / [sin θ (1 + cos θ)] = 2 / sin θ.\nSecond bracket: tan θ + cot θ = 1 / (sin θ cos θ), so its reciprocal is sin θ cos θ.\nProduct = (2 / sin θ) × (sin θ cos θ) = 2 cos θ.',
    explanationHi:
      'पहला कोष्ठक = [sin²θ + 1 + 2 cos θ + cos²θ] / [sin θ (1 + cos θ)] = [2(1 + cos θ)] / [sin θ (1 + cos θ)] = 2 / sin θ।\nदूसरा कोष्ठक: चूँकि tan θ + cot θ = 1 / (sin θ cos θ), अतः 1 / (tan θ + cot θ) = sin θ cos θ।\nगुणनफल = (2 / sin θ) × (sin θ cos θ) = 2 cos θ।',
  },
  {
    id: 'cgl26_30s3_q63',
    topic: 'Mensuration 3D',
    questionEn:
      'The base of a prism is a right-angled isosceles triangle whose hypotenuse is 5√2 cm. If the height of the prism is 10 cm, find the volume of the prism.',
    questionHi:
      'एक प्रिज्म का आधार एक समद्विबाहु समकोण त्रिभुज है, जिसकी कर्ण की लंबाई 5√2 cm है। यदि प्रिज्म की ऊँचाई 10 cm है, तो प्रिज्म का आयतन ज्ञात कीजिए।',
    optionsEn: ['110 cm³', '125 cm³', '150 cm³', '135 cm³'],
    optionsHi: ['110 cm³', '125 cm³', '150 cm³', '135 cm³'],
    correctIndex: 1,
    explanationEn:
      'For a right-angled isosceles triangle with equal legs a, hypotenuse = a√2 = 5√2 ⇒ a = 5 cm. Base area = ½ × 5 × 5 = 12.5 cm². Volume of prism = Base area × Height = 12.5 × 10 = 125 cm³.',
    explanationHi:
      'समद्विबाहु समकोण त्रिभुज की समान भुजाएँ a हों तो कर्ण = a√2 = 5√2 ⇒ a = 5 cm। आधार का क्षेत्रफल = ½ × 5 × 5 = 12.5 cm²। प्रिज्म का आयतन = आधार का क्षेत्रफल × ऊँचाई = 12.5 × 10 = 125 cm³।',
  },
  {
    id: 'cgl26_30s3_q64',
    topic: 'Surds & Indices',
    questionEn: 'Solve: 1/(√9 − √8) − 1/(√8 − √7) + 1/(√7 − √6)',
    questionHi: 'हल करें: 1/(√9 − √8) − 1/(√8 − √7) + 1/(√7 − √6)',
    optionsEn: ['3 + √6', '3 − √6', '3 + √5', '3'],
    optionsHi: ['3 + √6', '3 − √6', '3 + √5', '3'],
    correctIndex: 0,
    explanationEn:
      'Since 1/(√(n+1) − √n) = √(n+1) + √n, rationalizing each term gives:\n(√9 + √8) − (√8 + √7) + (√7 + √6) = √9 + √8 − √8 − √7 + √7 + √6 = √9 + √6 = 3 + √6.',
    explanationHi:
      'प्रत्येक पद का परिमेयकरण करने पर [चूँकि 1/(√(n+1) − √n) = √(n+1) + √n]:\n(√9 + √8) − (√8 + √7) + (√7 + √6) = √9 + √6 = 3 + √6।',
  },
  {
    id: 'cgl26_30s3_q65',
    topic: 'Geometry',
    questionEn:
      'In triangle ABC, points D and E lie on side BC such that AD = AE and ∠BAD = ∠EAC. If AB = (3x + 1) cm, BD = 9 cm, AC = 34 cm, and EC = (y + 1) cm, then find the value of (x + y).',
    questionHi:
      'त्रिभुज ABC में, भुजा BC पर बिंदु D और E इस प्रकार स्थित हैं कि AD = AE और ∠BAD = ∠EAC है। यदि AB = (3x + 1) cm, BD = 9 cm, AC = 34 cm, और EC = (y + 1) cm है, तो (x + y) का मान ज्ञात कीजिए।',
    optionsEn: ['11', '12', '16', '19'],
    optionsHi: ['11', '12', '16', '19'],
    correctIndex: 3,
    explanationEn:
      'Since AD = AE, △ADE is isosceles with ∠ADE = ∠AED ⇒ their supplementary angles ∠ADB = ∠AEC. Together with ∠BAD = ∠EAC and AD = AE, △ABD ≅ △ACE (AAS congruence). Hence AB = AC ⇒ 3x + 1 = 34 ⇒ x = 11, and BD = EC ⇒ y + 1 = 9 ⇒ y = 8. Therefore, x + y = 11 + 8 = 19.',
    explanationHi:
      'चूँकि AD = AE, अतः ∠ADE = ∠AED ⇒ संपूरक कोण ∠ADB = ∠AEC। साथ ही ∠BAD = ∠EAC और AD = AE होने से △ABD ≅ △ACE (AAS सर्वांगसमता)। इसलिए AB = AC ⇒ 3x + 1 = 34 ⇒ x = 11 तथा BD = EC ⇒ y + 1 = 9 ⇒ y = 8। अतः x + y = 11 + 8 = 19।',
  },
  {
    id: 'cgl26_30s3_q66',
    topic: 'Data Interpretation',
    questionEn:
      'Read the following frequency polygon which represents class interval (Living Area (Square Meters)) on the x-axis and frequency (Number of Units Sold) on the y-axis, and answer the following question:\n\nIf the median apartment size is defined as the interval containing the middle unit, which interval is the median class?',
    questionHi:
      'निम्नलिखित आवृत्ति बहुभुज का अध्ययन कीजिए, जो x-अक्ष पर वर्गांतराल (रहने की जगह (वर्ग मीटर)) तथा y-अक्ष पर आवृत्ति (बेची गई इकाइयों की संख्या) को दर्शाता है, और नीचे दिए गए प्रश्न का उत्तर दीजिए:\n\nयदि माध्यिका अपार्टमेंट आकार को उस वर्गांतराल के रूप में परिभाषित किया जाता है जिसमें मध्य इकाई आती है, तो माध्यिका वर्ग कौन-सा होगा?',
    imageUrl: '/assets/mock30s3/q66_fig.svg',
    optionsEn: ['60–80 sq m', '100–120 sq m', '80–100 sq m', '120–140 sq m'],
    optionsHi: ['60–80 sq m', '100–120 sq m', '80–100 sq m', '120–140 sq m'],
    correctIndex: 2,
    explanationEn:
      'Frequencies from the graph: 40–60: 22, 60–80: 42, 80–100: 60, 100–120: 37, 120–140: 21, 140–160: 7. Total units N = 22 + 42 + 60 + 37 + 21 + 7 = 189. Middle unit = (189 + 1)/2 = 95th unit. Cumulative frequencies: 22, 64, 124 (≥ 95). Thus, the 95th unit lies in the 80–100 sq m interval.',
    explanationHi:
      'ग्राफ से आवृत्तियाँ: 40–60: 22, 60–80: 42, 80–100: 60, 100–120: 37, 120–140: 21, 140–160: 7। कुल इकाइयाँ N = 189 ⇒ मध्य इकाई = (189 + 1)/2 = 95वीं इकाई। संचयी आवृत्तियाँ (CF): 22, 64, 124। चूँकि 95वीं इकाई 64 से 124 के बीच आती है, माध्यिका वर्ग 80–100 sq m होगा।',
  },
  {
    id: 'cgl26_30s3_q67',
    topic: 'Geometry',
    questionEn:
      'Two circles of radii 25 cm and 17 cm intersect such that the length of their common chord is 30 cm. Find the distance between the centers of the two circles, given that the centers lie on opposite sides of the chord.',
    questionHi:
      'दो वृत्त जिनकी त्रिज्याएँ 25 cm और 17 cm हैं, इस प्रकार प्रतिच्छेद करते हैं कि उनकी समान जीवा की लंबाई 30 cm है। दोनों वृत्तों के केंद्रों के बीच की दूरी ज्ञात कीजिए, यह मानते हुए कि केंद्र इस जीवा के विपरीत पक्षों पर स्थित हैं।',
    optionsEn: ['12 cm', '21 cm', '24 cm', '28 cm'],
    optionsHi: ['12 cm', '21 cm', '24 cm', '28 cm'],
    correctIndex: 3,
    explanationEn:
      'The line joining the centers bisects the common chord perpendicularly, so half-chord = 30/2 = 15 cm. Using Pythagorean triplets: d₁ = √(25² − 15²) = √(625 − 225) = 20 cm (triplet 15–20–25), and d₂ = √(17² − 15²) = √(289 − 225) = 8 cm (triplet 8–15–17). Since centers lie on opposite sides, distance = d₁ + d₂ = 20 + 8 = 28 cm.',
    explanationHi:
      'केंद्रों को मिलाने वाली रेखा समान जीवा को समकोण पर समद्विभाजित करती है, अतः आधी जीवा = 30/2 = 15 cm। पाइथागोरस त्रिक से: d₁ = √(25² − 15²) = 20 cm (त्रिक 15–20–25) और d₂ = √(17² − 15²) = 8 cm (त्रिक 8–15–17)। चूँकि केंद्र विपरीत पक्षों पर हैं, दूरी = 20 + 8 = 28 cm।',
  },
  {
    id: 'cgl26_30s3_q68',
    topic: 'Data Interpretation',
    questionEn:
      'Study the given histogram that shows the height (in cm) of 100 students in an athletic team and answer the question that follows:\n\nIf 10 students from the 170–180 group shift to 150–160, which becomes the new modal class?',
    questionHi:
      'दिए गए हिस्टोग्राम का ध्यानपूर्वक अध्ययन कीजिए, जो एक एथलेटिक टीम के 100 छात्रों की ऊँचाई (सेमी में) दर्शाता है, और निम्नलिखित प्रश्न का उत्तर दीजिए:\n\nयदि 170–180 वर्ग के 10 छात्र 150–160 वर्ग में स्थानांतरित हो जाते हैं, तो नया बहुलक वर्ग (modal class) कौन-सा होगा?',
    imageUrl: '/assets/mock30s3/q68_fig.svg',
    optionsEn: ['150-160', '160-170', '170-180', '180-190'],
    optionsHi: ['150-160', '160-170', '170-180', '180-190'],
    correctIndex: 3,
    explanationEn:
      'Original frequencies: 150–160 = 8, 160–170 = 16, 170–180 = 30, 180–190 = 22. After 10 students shift from 170–180 to 150–160: 170–180 becomes 30 − 10 = 20, and 150–160 becomes 8 + 10 = 18. The highest frequency is now 22 in the 180–190 interval, making 180–190 the new modal class.',
    explanationHi:
      'प्रारंभिक आवृत्तियाँ: 150–160 = 8, 160–170 = 16, 170–180 = 30, 180–190 = 22। 170–180 से 10 छात्र 150–160 में जाने पर: 170–180 में 30 − 10 = 20 और 150–160 में 8 + 10 = 18 छात्र हो जाते हैं। अब सर्वाधिक आवृत्ति 22 (वर्ग 180–190) है, अतः नया बहुलक वर्ग 180–190 होगा।',
  },
  {
    id: 'cgl26_30s3_q69',
    topic: 'Mixture & Alligation',
    questionEn:
      'A can contains a mixture of two liquids P and Q in the ratio 8:7. If 5 liters of the mixture is taken out and the remaining part of the can is filled with Q, then the ratio of P and Q becomes 2:3. Find how many liters of liquid P was there in the can initially?',
    questionHi:
      'एक कैन में दो द्रवों P और Q का मिश्रण 8:7 के अनुपात में है। यदि मिश्रण का 5 लीटर निकाल लिया जाता है और कैन के शेष भाग को Q से भर दिया जाता है, तो P और Q का अनुपात 2:3 हो जाता है। ज्ञात कीजिए कि कैन में प्रारंभिक रूप से कितने लीटर द्रव P था?',
    optionsEn: ['17/3 liters', '22/3 liters', '28/3 liters', '32/3 liters'],
    optionsHi: ['17/3 लीटर', '22/3 लीटर', '28/3 लीटर', '32/3 लीटर'],
    correctIndex: 3,
    explanationEn:
      'Total volume remains unchanged. Initial share of P = 8/15; final share of P = 2/5 = 6/15. Since only Q is added back, P decreases strictly due to removal: Fraction replaced = (8 − 6) / 8 = 2/8 = 1/4. Given 1/4 of total capacity = 5 L ⇒ Total capacity = 20 L. Initial liquid P = (8/15) × 20 = 32/3 liters.',
    explanationHi:
      'कुल आयतन समान रहता है। प्रारंभ में P का भाग = 8/15 और अंत में P का भाग = 2/5 = 6/15। चूँकि केवल Q मिलाया गया है, निकाला गया भाग = (8 − 6)/8 = 1/4 = 5 लीटर ⇒ कैन की कुल क्षमता = 20 लीटर। अतः प्रारंभ में द्रव P = (8/15) × 20 = 32/3 लीटर।',
  },
  {
    id: 'cgl26_30s3_q70',
    topic: 'Mensuration 3D',
    questionEn:
      'If the radius of a right circular cylinder is tripled and the height is one-third, then find the ratio between the new volume and the previous volume of the cylinder?',
    questionHi:
      'यदि एक लंब वृत्तीय बेलन की त्रिज्या को तीन गुना कर दिया जाए और ऊँचाई को एक-तिहाई कर दिया जाए, तो बेलन के नए आयतन और पूर्व आयतन के बीच का अनुपात ज्ञात कीजिए?',
    optionsEn: ['1 : 3', '9 : 1', '3 : 1', '1 : 9'],
    optionsHi: ['1 : 3', '9 : 1', '3 : 1', '1 : 9'],
    correctIndex: 2,
    explanationEn:
      'Previous volume V₁ = πr²h. New volume V₂ = π(3r)²(h/3) = π(9r²)(h/3) = 3πr²h. Therefore, V₂ : V₁ = 3 : 1.',
    explanationHi:
      'पूर्व आयतन V₁ = πr²h। नया आयतन V₂ = π(3r)²(h/3) = 9πr²h / 3 = 3πr²h। अतः नए और पूर्व आयतन का अनुपात = 3 : 1।',
  },
  {
    id: 'cgl26_30s3_q71',
    topic: 'Profit, Loss & Discount',
    questionEn:
      'A shopkeeper marks the price of an article 25% above its cost price. He gives a discount of 10% on the marked price. Find his profit percentage.',
    questionHi:
      'एक दुकानदार किसी वस्तु का अंकित मूल्य उसकी लागत मूल्य से 25% अधिक रखता है। वह अंकित मूल्य पर 10% की छूट देता है। उसका लाभ प्रतिशत ज्ञात कीजिए।',
    optionsEn: ['10.5%', '15%', '12.5%', '17%'],
    optionsHi: ['10.5%', '15%', '12.5%', '17%'],
    correctIndex: 2,
    explanationEn:
      'Using successive percentage formula: Net Profit % = +25 − 10 − (25 × 10)/100 = 15 − 2.5 = 12.5%. (Or let CP = 100 ⇒ MP = 125 ⇒ SP = 125 × 0.9 = 112.5 ⇒ Profit = 12.5%.)',
    explanationHi:
      'क्रमिक प्रतिशत सूत्र से: लाभ % = 25 − 10 − (25 × 10)/100 = 15 − 2.5 = 12.5%। (या माना CP = 100 ⇒ MP = 125 ⇒ SP = 125 का 90% = 112.5 ⇒ लाभ = 12.5%।)',
  },
  {
    id: 'cgl26_30s3_q72',
    topic: 'Data Interpretation',
    questionEn:
      'The following pie-chart presents the percentage distribution of different forest types within a specific geographical area. Analyze the data provided and answer the following question based on the chart.\n\nWhat is the total combined central angle (in degrees) formed at the center for the Tropical Evergreen and Alpine sectors?',
    questionHi:
      'निम्नलिखित वृत्त आरेख किसी विशिष्ट भौगोलिक क्षेत्र के भीतर विभिन्न प्रकार के वनों के प्रतिशत वितरण को प्रस्तुत करता है। दिए गए आँकड़ों का विश्लेषण कीजिए और आरेख के आधार पर निम्नलिखित प्रश्न का उत्तर दीजिए:\n\nउष्णकटिबंधीय सदाबहार (Tropical Evergreen) तथा अल्पाइन (Alpine) खंडों के लिए केंद्र पर निर्मित कुल केंद्रीय कोण (डिग्री में) कितना है?',
    imageUrl: '/assets/mock30s3/q72_fig.svg',
    optionsEn: ['162°', '174°', '150°', '148°'],
    optionsHi: ['162°', '174°', '150°', '148°'],
    correctIndex: 0,
    explanationEn:
      'From the pie-chart: Tropical Evergreen = 30% and Alpine = 15%. Combined share = 30% + 15% = 45%. Since 100% = 360° (1% = 3.6°), combined central angle = 45 × 3.6° = 162°.',
    explanationHi:
      'वृत्त आरेख के अनुसार: Tropical Evergreen = 30% तथा Alpine = 15%। कुल प्रतिशत = 30% + 15% = 45%। चूँकि 1% = 3.6°, कुल केंद्रीय कोण = 45 × 3.6° = 162°।',
  },
  {
    id: 'cgl26_30s3_q73',
    topic: 'Height & Distance',
    questionEn:
      'From a point on the ground, the angle of elevation of the top of a tower is 30°. After walking 40 m towards the tower, the angle of elevation becomes 60°. Find the height of the tower.',
    questionHi:
      'भूमि पर स्थित एक बिंदु से किसी मीनार के शीर्ष का उन्नयन कोण 30° है। मीनार की ओर 40 m चलने के बाद, उन्नयन कोण 60° हो जाता है। मीनार की ऊँचाई ज्ञात कीजिए।',
    optionsEn: ['20√3 m', '10√3 m', '30√3 m', '40√3 m'],
    optionsHi: ['20√3 m', '10√3 m', '30√3 m', '40√3 m'],
    correctIndex: 0,
    explanationEn:
      'Using standard formula d = h(cot 30° − cot 60°): 40 = h(√3 − 1/√3) = h(2/√3) ⇒ h = (40 × √3)/2 = 20√3 m. (Ratio trick for 30°→60°: 2 units = 40 m ⇒ height √3 units = 20√3 m.)',
    explanationHi:
      'सूत्र d = h(cot 30° − cot 60°) से: 40 = h(√3 − 1/√3) = 2h/√3 ⇒ h = 20√3 m। (अनुपात ट्रिक: 30° से 60° में 2 इकाई = 40 m ⇒ ऊँचाई √3 इकाई = 20√3 m।)',
  },
  {
    id: 'cgl26_30s3_q74',
    topic: 'Average',
    questionEn: 'What is the average of the first 20 positive multiples of 7?',
    questionHi: '7 के पहले 20 धनात्मक गुणजों का औसत क्या है?',
    optionsEn: ['70.5', '71.5', '73.5', '77'],
    optionsHi: ['70.5', '71.5', '73.5', '77'],
    correctIndex: 2,
    explanationEn:
      'The multiples form an AP: 7, 14, 21, ..., 140. Average of an AP = (First term + Last term) / 2 = (7 + 140) / 2 = 147 / 2 = 73.5.',
    explanationHi:
      'यह एक समांतर श्रेणी (AP) है: 7, 14, 21, ..., 140। औसत = (प्रथम पद + अंतिम पद) / 2 = (7 + 140) / 2 = 147 / 2 = 73.5।',
  },
  {
    id: 'cgl26_30s3_q75',
    topic: 'Data Interpretation',
    questionEn:
      'An automobile manufacturer tracks the production of Electric Vehicles (EVs) and Internal Combustion Engine (ICE) vehicles over three consecutive years. The relevant data is illustrated in the bar graph given below:\n\nIn which year did the production of EVs make up more than 35% of the total vehicle production (EV + ICE vehicles), and what is the percentage value rounded to two decimal places?',
    questionHi:
      'एक ऑटोमोबाइल निर्माता लगातार तीन वर्षों के दौरान इलेक्ट्रिक वाहनों (EVs) और आंतरिक दहन इंजन वाले वाहनों (ICE) के उत्पादन पर नज़र रखता है। संबंधित डेटा नीचे दिए गए बार ग्राफ में दर्शाया गया है:\n\nकिस वर्ष में इलेक्ट्रिक वाहनों (EVs) का उत्पादन कुल वाहन उत्पादन (EV + ICE वाहन) के 35 प्रतिशत से अधिक था, और दशमलव के दो स्थानों तक पूर्णांकित प्रतिशत मान क्या है?',
    imageUrl: '/assets/mock30s3/q75_fig.svg',
    optionsEn: [
      '2024, 33.33%',
      '2025, 46.32%',
      '2025, 48.28%',
      '2023, 36.25%',
    ],
    optionsHi: [
      '2024, 33.33%',
      '2025, 46.32%',
      '2025, 48.28%',
      '2023, 36.25%',
    ],
    correctIndex: 2,
    explanationEn:
      'From the bar graph (in thousands):\n• 2023: EV = 40, ICE = 160, Total = 200 ⇒ EV % = (40/200) × 100 = 20%.\n• 2024: EV = 70, ICE = 140, Total = 210 ⇒ EV % = (70/210) × 100 = 33.33%.\n• 2025: EV = 112, ICE = 120, Total = 232 ⇒ EV % = (112/232) × 100 = 48.2758...% ≈ 48.28% (> 35%).',
    explanationHi:
      'बार ग्राफ से (हजार में):\n• 2023: EV = 40, कुल = 40 + 160 = 200 ⇒ EV % = (40/200) × 100 = 20%।\n• 2024: EV = 70, कुल = 70 + 140 = 210 ⇒ EV % = (70/210) × 100 = 33.33%।\n• 2025: EV = 112, कुल = 112 + 120 = 232 ⇒ EV % = (112/232) × 100 ≈ 48.28% (जो 35% से अधिक है)।',
  },
];
