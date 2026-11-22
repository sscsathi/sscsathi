import { Question } from '../../types/exam';

export const SECTION_3_QUANT_O1S2: Question[] = [
  {
    id: 'cgl26_01o2_q51',
    topic: 'Mensuration 3D',
    questionEn:
      'A right prism has a hexagonal base with an area of 90 cm². The height of the prism is 20 cm. Find the volume.',
    questionHi:
      'एक लम्ब प्रिज्म का आधार षट्कोणीय है और इसका क्षेत्रफल 90 वर्ग सेंटीमीटर है। प्रिज्म की ऊँचाई 20 सेंटीमीटर है। इसका आयतन ज्ञात कीजिए।',
    optionsEn: ['1800 cm³', '2000 cm³', '2200 cm³', '2500 cm³'],
    optionsHi: [
      '1800 घन सेंटीमीटर',
      '2000 घन सेंटीमीटर',
      '2200 घन सेंटीमीटर',
      '2500 घन सेंटीमीटर',
    ],
    correctIndex: 0,
    explanationEn:
      'Volume of a right prism = Base Area × Height\n= 90 × 20 = 1800 cm³.',
    explanationHi:
      'लम्ब प्रिज्म का आयतन = आधार का क्षेत्रफल × ऊँचाई\n= 90 × 20 = 1800 घन सेंटीमीटर।',
  },
  {
    id: 'cgl26_01o2_q52',
    topic: 'Geometry (Polygons)',
    questionEn:
      'What is the ratio of the sum of interior angles of a regular 7-sided polygon (heptagon) to that of a regular 9-sided polygon (nonagon)?',
    questionHi:
      'एक नियमित 7-भुजा वाले बहुभुज (सप्तभुज) के आंतरिक कोणों के योग का एक नियमित 9-भुजा वाले बहुभुज (नवभुज) के आंतरिक कोणों के योग से अनुपात क्या है?',
    optionsEn: ['5 : 7', '6 : 7', '5 : 8', '8 : 5'],
    optionsHi: ['5 : 7', '6 : 7', '5 : 8', '8 : 5'],
    correctIndex: 0,
    explanationEn:
      'Sum of interior angles of an n-sided polygon = (n − 2) × 180°.\nRequired ratio = [(7 − 2) × 180°] : [(9 − 2) × 180°] = 5 : 7.',
    explanationHi:
      'n भुजाओं वाले बहुभुज के आंतरिक कोणों का योग = (n − 2) × 180°।\nअभीष्ट अनुपात = (7 − 2) : (9 − 2) = 5 : 7।',
  },
  {
    id: 'cgl26_01o2_q53',
    topic: 'Height & Distance',
    questionEn:
      'A man observes the top of a tower at an angle of elevation of 60°. After moving 10 meters away from the tower in a straight line, the angle of elevation to the top of the tower reduces to 30°. What is the height of the tower?',
    questionHi:
      'एक व्यक्ति एक मीनार के शिखर को 60° के उन्नयन कोण से देखता है। मीनार से सीधी रेखा में 10 मीटर दूर जाने पर, मीनार के शिखर का उन्नयन कोण घटकर 30° हो जाता है। मीनार की ऊँचाई क्या है?',
    optionsEn: ['2√3', '5√3', '7√3', '11√3'],
    optionsHi: ['2√3', '5√3', '7√3', '11√3'],
    correctIndex: 1,
    explanationEn:
      'Short Trick (30°–60° angle pair):\nWhen the angle of elevation changes from 60° to 30° over a distance d:\nh = d / (cot 30° − cot 60°) = 10 / (√3 − 1/√3) = (10√3) / 2 = 5√3 m.',
    explanationHi:
      'शॉर्ट ट्रिक (30° और 60° के लिए):\nh = d / (cot 30° − cot 60°) = 10 / (√3 − 1/√3) = 10√3 / 2 = 5√3 मीटर।',
  },
  {
    id: 'cgl26_01o2_q54',
    topic: 'Simplification',
    questionEn: 'The value of √0.16 + √0.81 + √1.69 + √0.0025 is:',
    questionHi: '√0.16 + √0.81 + √1.69 + √0.0025 का मान ज्ञात कीजिए।',
    optionsEn: ['1.45', '3.25', '2.65', '4.05'],
    optionsHi: ['1.45', '3.25', '2.65', '4.05'],
    correctIndex: 2,
    explanationEn:
      'Evaluating each square root:\n• √0.16 = 0.4\n• √0.81 = 0.9\n• √1.69 = 1.3\n• √0.0025 = 0.05\nSum = 0.4 + 0.9 + 1.3 + 0.05 = 2.65.',
    explanationHi:
      'प्रत्येक वर्गमूल का मान:\n0.4 + 0.9 + 1.3 + 0.05 = 2.65।',
  },
  {
    id: 'cgl26_01o2_q55',
    topic: 'Geometry (Triangles)',
    questionEn:
      'In △PQR, the medians intersect at centroid G. If the segment PG (from vertex to centroid) is 15 cm, what is the length of segment GD (from centroid to the midpoint of QR)?',
    questionHi:
      '△PQR में, माध्यिकाएँ केंद्रक (G) पर प्रतिच्छेद करती हैं। यदि खंड PG (शीर्ष से केंद्रक तक) की लंबाई 15 cm है, तो खंड GD (केंद्रक से QR के मध्यबिंदु तक) की लंबाई क्या होगी?',
    optionsEn: ['5 cm', '7.5 cm', '10 cm', '12.1 cm'],
    optionsHi: ['5 cm', '7.5 cm', '10 cm', '12.1 cm'],
    correctIndex: 1,
    explanationEn:
      'The centroid G divides every median in the ratio 2 : 1 from the vertex to the opposite side.\nPG : GD = 2 : 1\nGiven PG = 15 cm ⇒ GD = 15 / 2 = 7.5 cm.',
    explanationHi:
      'केंद्रक (G) प्रत्येक माध्यिका को शीर्ष से 2 : 1 के अनुपात में विभाजित करता है।\nPG : GD = 2 : 1 ⇒ GD = 15 / 2 = 7.5 cm।',
  },
  {
    id: 'cgl26_01o2_q56',
    topic: 'Number System (Divisibility)',
    questionEn: 'Which of the following numbers is divisible by 3?',
    questionHi: 'निम्नलिखित में से कौन-सी संख्या 3 से विभाज्य है?',
    optionsEn: ['45671', '58214', '67215', '89102'],
    optionsHi: ['45671', '58214', '67215', '89102'],
    correctIndex: 2,
    explanationEn:
      'A number is divisible by 3 iff the sum of its digits is divisible by 3:\n• 45671 → 4+5+6+7+1 = 23 (No)\n• 58214 → 5+8+2+1+4 = 20 (No)\n• 67215 → 6+7+2+1+5 = 21 (Divisible by 3 ✓)\n• 89102 → 8+9+1+0+2 = 20 (No).',
    explanationHi:
      '3 से विभाज्यता नियम (अंकों का योग 3 से विभाज्य होना चाहिए):\n• 67215 के अंकों का योग = 6 + 7 + 2 + 1 + 5 = 21, जो 3 से पूर्णतः विभाज्य है। अतः विकल्प (C) सही है।',
  },
  {
    id: 'cgl26_01o2_q57',
    topic: 'Partnership',
    questionEn:
      'A and B began a joint venture by investing ₹20,000 and ₹25,000, respectively. B withdrew after four months, and C came in with an investment of ₹15,000. Four months later, A withdrew, and B re-entered with his former investment. Find the sharing ratio of their profits at the end of one year.',
    questionHi:
      'A और B ने क्रमशः ₹20,000 और ₹25,000 का निवेश करके एक संयुक्त उद्यम शुरू किया। चार महीने बाद B ने अपना निवेश निकाल लिया, और C ₹15,000 के निवेश के साथ इसमें शामिल हो गया। इसके चार महीने बाद A ने अपना निवेश निकाल लिया, और B अपने पुराने निवेश के साथ फिर से इसमें शामिल हो गया। एक वर्ष के अंत में उनके लाभ के बँटवारे का अनुपात ज्ञात कीजिए।',
    optionsEn: ['4 : 8 : 3', '4 : 5 : 3', '16 : 10 : 3', '10 : 12 : 7'],
    optionsHi: ['4 : 8 : 3', '4 : 5 : 3', '16 : 10 : 3', '10 : 12 : 7'],
    correctIndex: 1,
    explanationEn:
      'Profit ∝ Investment × Time (dividing investments by ₹5,000 gives A = 4, B = 5, C = 3):\n• A stayed for 4 + 4 = 8 months → 4 × 8 = 32\n• B stayed for first 4 months + last 4 months = 8 months → 5 × 8 = 40\n• C stayed from month 5 to month 12 = 8 months → 3 × 8 = 24\nRatio A : B : C = 32 : 40 : 24 = 4 : 5 : 3.',
    explanationHi:
      'लाभ का अनुपात = निवेश × समय:\n• A: 20,000 × 8 माह = 1,60,000\n• B: 25,000 × (4 + 4 = 8 माह) = 2,00,000\n• C: 15,000 × 8 माह = 1,20,000\nअनुपात A : B : C = 16 : 20 : 12 = 4 : 5 : 3।',
  },
  {
    id: 'cgl26_01o2_q58',
    topic: 'Compound Interest',
    questionEn:
      'A sum of money becomes ₹1,452 in 2 years and ₹1,320 in 1 year. Find the rate of compound interest.',
    questionHi:
      'एक धनराशि 2 वर्षों में ₹1,452 और 1 वर्ष में ₹1,320 हो जाती है। चक्रवृद्धि ब्याज की दर ज्ञात करें।',
    optionsEn: ['12%', '10%', '5%', '8%'],
    optionsHi: ['12%', '10%', '5%', '8%'],
    correctIndex: 1,
    explanationEn:
      'For consecutive years under Compound Interest:\nRate R = [(A₂ − A₁) / A₁] × 100%\n= [(1452 − 1320) / 1320] × 100%\n= (132 / 1320) × 100% = 10%.',
    explanationHi:
      'लगातार वर्षों के चक्रवृद्धि मिश्रधन के लिए:\nदर R = [(1452 − 1320) / 1320] × 100% = (132 / 1320) × 100% = 10%।',
  },
  {
    id: 'cgl26_01o2_q59',
    topic: 'Geometry (Polygons)',
    questionEn:
      'Two regular polygons have a number of sides in the ratio 1 : 4, and the difference between their exterior angles is 9°. What are the numbers of sides of these polygons?',
    questionHi:
      'दो रेगुलर पॉलीगॉन की भुजाओं की संख्या का अनुपात 1 : 4 है और उनके बाहरी कोणों का अंतर 9° है। इन पॉलीगॉन की भुजाओं की संख्या क्या है?',
    optionsEn: [
      '30 sides and 110 sides',
      '23 sides and 120 sides',
      '21 sides and 110 sides',
      '30 sides and 120 sides',
    ],
    optionsHi: [
      '30 भुजाएँ और 110 भुजाएँ',
      '23 भुजाएँ और 120 भुजाएँ',
      '21 भुजाएँ और 110 भुजाएँ',
      '30 भुजाएँ और 120 भुजाएँ',
    ],
    correctIndex: 3,
    explanationEn:
      'Let the numbers of sides be n and 4n.\nExterior angle of a regular polygon = 360° / sides.\n(360 / n) − (360 / 4n) = 9\n⇒ 270 / n = 9 ⇒ n = 30.\nTherefore, the polygons have 30 sides and 4 × 30 = 120 sides.',
    explanationHi:
      'माना भुजाओं की संख्या n और 4n है।\n(360° / n) − (360° / 4n) = 9° ⇒ 270° / n = 9° ⇒ n = 30।\nअतः भुजाएँ 30 तथा 4 × 30 = 120 होंगी।',
  },
  {
    id: 'cgl26_01o2_q60',
    topic: 'Mensuration 2D',
    questionEn:
      'A quadrant of a circle has an area of 121π/4 cm². Find the radius of the circle.',
    questionHi:
      'एक वृत्त के चतुर्थांश का क्षेत्रफल 121π/4 cm² है। वृत्त की त्रिज्या ज्ञात कीजिए।',
    optionsEn: ['13 cm', '9 cm', '11 cm', '7 cm'],
    optionsHi: ['13 cm', '9 cm', '11 cm', '7 cm'],
    correctIndex: 2,
    explanationEn:
      'Area of a quadrant = (1/4)πr².\nGiven: (1/4)πr² = (121π) / 4\n⇒ r² = 121 ⇒ r = 11 cm.',
    explanationHi:
      'वृत्त के चतुर्थांश का क्षेत्रफल = (1/4)πr² = 121π/4\n⇒ r² = 121 ⇒ r = 11 cm।',
  },
  {
    id: 'cgl26_01o2_q61',
    topic: 'Mensuration 3D',
    questionEn:
      'The volume of a cone is 588π cm³ and its height is 7 cm. Find the radius of its base.',
    questionHi:
      'एक शंकु का आयतन 588π cm³ है और इसकी ऊँचाई 7 cm है। इसके आधार की त्रिज्या ज्ञात कीजिए।',
    optionsEn: ['3√7 cm', '6√7 cm', '2√7 cm', '8√7 cm'],
    optionsHi: ['3√7 cm', '6√7 cm', '2√7 cm', '8√7 cm'],
    correctIndex: 1,
    explanationEn:
      'Volume of cone = (1/3)πr²h = 588π\n⇒ (1/3) × r² × 7 = 588\n⇒ r² = (588 × 3) / 7 = 84 × 3 = 252 = 36 × 7\n⇒ r = √(36 × 7) = 6√7 cm.',
    explanationHi:
      'शंकु का आयतन = (1/3)πr²h = 588π\n⇒ r² × 7 = 588 × 3 ⇒ r² = 252 = 36 × 7\n⇒ r = 6√7 cm।',
  },
  {
    id: 'cgl26_01o2_q62',
    topic: 'Profit & Loss',
    questionEn:
      'The cost price of two articles, A and B, is in the ratio 4 : 5. Article A is sold at a profit of 20% and Article B is sold at a loss of 10%. If the difference between their selling prices is ₹560, find the total cost price of both articles.',
    questionHi:
      'दो वस्तुओं, A और B, का क्रय मूल्य 4 : 5 के अनुपात में है। वस्तु A को 20% के लाभ पर और वस्तु B को 10% की हानि पर बेचा जाता है। यदि उनके विक्रय मूल्यों के बीच का अंतर ₹560 है, तो दोनों वस्तुओं का कुल क्रय मूल्य ज्ञात कीजिए।',
    optionsEn: ['₹16,500', '₹16,800', '₹18,200', '₹12,700'],
    optionsHi: ['₹16,500', '₹16,800', '₹18,200', '₹12,700'],
    correctIndex: 1,
    explanationEn:
      'Let CP of A = 40x and CP of B = 50x (Total CP = 90x).\n• SP of A (20% profit) = 40x × 1.2 = 48x\n• SP of B (10% loss) = 50x × 0.9 = 45x\nDifference in SP = 48x − 45x = 3x = ₹560.\nTotal CP = 90x = 30 × (3x) = 30 × 560 = ₹16,800.',
    explanationHi:
      'माना A और B का क्रय मूल्य क्रमशः 40x और 50x है (कुल क्रय मूल्य = 90x)।\n• A का विक्रय मूल्य = 40x × 1.2 = 48x\n• B का विक्रय मूल्य = 50x × 0.9 = 45x\nअंतर: 48x − 45x = 3x = ₹560।\nकुल क्रय मूल्य = 90x = 30 × 560 = ₹16,800।',
  },
  {
    id: 'cgl26_01o2_q63',
    topic: 'Profit & Loss',
    questionEn:
      'If the selling price of an article is tripled, the profit becomes five times the original profit. Find the original profit percentage.',
    questionHi:
      'यदि किसी वस्तु का विक्रय मूल्य तीन गुना कर दिया जाए, तो लाभ मूल लाभ का पाँच गुना हो जाता है। मूल लाभ प्रतिशत ज्ञात कीजिए।',
    optionsEn: ['80%', '100%', '60%', '90%'],
    optionsHi: ['80%', '100%', '60%', '90%'],
    correctIndex: 1,
    explanationEn:
      'Let original cost price = CP and selling price = SP.\nGiven: 3SP − CP = 5(SP − CP)\n⇒ 3SP − CP = 5SP − 5CP\n⇒ 4CP = 2SP ⇒ SP = 2CP.\nOriginal Profit % = [(SP − CP) / CP] × 100 = (CP / CP) × 100 = 100%.',
    explanationHi:
      'प्रश्नानुसार: 3SP − CP = 5(SP − CP)\n⇒ 3SP − CP = 5SP − 5CP ⇒ 4CP = 2SP ⇒ SP = 2CP।\nमूल लाभ % = [(2CP − CP) / CP] × 100 = 100%।',
  },
  {
    id: 'cgl26_01o2_q64',
    topic: 'Height & Distance',
    questionEn:
      'A man observes the top of a tower at an angle of 30°. After walking 10 m towards it, the angle becomes 60°. Find the approximate height of the tower.',
    questionHi:
      'एक व्यक्ति किसी मीनार के शीर्ष को 30° के उन्नयन कोण पर देखता है। मीनार की ओर 10 m चलने के बाद, उन्नयन कोण 60° हो जाता है। मीनार की लगभग ऊँचाई ज्ञात कीजिए।',
    optionsEn: ['3.7 m', '5.7 m', '12.7 m', '8.7 m'],
    optionsHi: ['3.7 m', '5.7 m', '12.7 m', '8.7 m'],
    correctIndex: 3,
    explanationEn:
      'Using the standard 30°–60° relation:\nh = d / (cot 30° − cot 60°) = 10 / (√3 − 1/√3) = 5√3 m.\nTaking √3 ≈ 1.732:\nh ≈ 5 × 1.732 = 8.66 m ≈ 8.7 m.',
    explanationHi:
      'ऊँचाई h = 10 / (cot 30° − cot 60°) = 5√3 मीटर।\n√3 ≈ 1.732 रखने पर: h ≈ 5 × 1.732 = 8.66 m ≈ 8.7 m।',
  },
  {
    id: 'cgl26_01o2_q65',
    topic: 'Geometry (Triangle Inequalities)',
    questionEn:
      'In triangle ABC, the angles are ∠B = 50° and ∠C = 70°, which of the following option is correct?',
    questionHi:
      'त्रिभुज ABC में, कोण ∠B = 50° और ∠C = 70° हैं; इनमें से कौन-सा विकल्प सही है?',
    optionsEn: ['BC < AC', 'AB < BC', 'AB < AC', 'BC > AC'],
    optionsHi: ['BC < AC', 'AB < BC', 'AB < AC', 'BC > AC'],
    correctIndex: 3,
    explanationEn:
      'In △ABC, ∠A = 180° − (50° + 70°) = 60°.\nThus, ∠C (70°) > ∠A (60°) > ∠B (50°).\nSince the side opposite a greater angle is longer:\nAB > BC > AC.\nHence, BC > AC (Option D) is correct.',
    explanationHi:
      '△ABC में, ∠A = 180° − (50° + 70°) = 60°।\nकोणों का क्रम: ∠C (70°) > ∠A (60°) > ∠B (50°)।\nबड़े कोण के सामने की भुजा बड़ी होती है ⇒ AB > BC > AC।\nअतः BC > AC (विकल्प D) सही है।',
  },
  {
    id: 'cgl26_01o2_q66',
    topic: 'Trigonometry',
    questionEn: 'If sec θ + tan θ = p, then find the value of (p² + 1) / (p² − 1).',
    questionHi:
      'यदि sec θ + tan θ = p, तो (p² + 1) / (p² − 1) का मान ज्ञात कीजिए।',
    optionsEn: ['sin θ', 'cosec θ', 'tan θ', 'cot θ'],
    optionsHi: ['sin θ', 'cosec θ', 'tan θ', 'cot θ'],
    correctIndex: 1,
    explanationEn:
      'Given sec θ + tan θ = p  …(1)\nUsing sec²θ − tan²θ = 1, we get sec θ − tan θ = 1/p  …(2)\nAdding (1) & (2): 2 sec θ = p + 1/p = (p² + 1)/p\nSubtracting (2) from (1): 2 tan θ = p − 1/p = (p² − 1)/p\nDividing the two results:\n(p² + 1) / (p² − 1) = sec θ / tan θ = (1/cos θ) / (sin θ/cos θ) = 1/sin θ = cosec θ.',
    explanationHi:
      'दिया है sec θ + tan θ = p ⇒ sec θ − tan θ = 1/p।\nजोड़ने पर 2 sec θ = (p² + 1)/p तथा घटाने पर 2 tan θ = (p² − 1)/p।\nदोनों का अनुपात = sec θ / tan θ = 1 / sin θ = cosec θ।',
  },
  {
    id: 'cgl26_01o2_q67',
    topic: 'Mensuration 3D',
    questionEn:
      'If the ratio of the volumes of two spheres is 64 : 125, what is the ratio of their total surface areas?',
    questionHi:
      'दो गोलों के आयतनों का अनुपात 64 : 125 है। उनके कुल पृष्ठीय क्षेत्रफलों का अनुपात क्या है?',
    optionsEn: ['4 : 5', '6 : 5', '11 : 24', '16 : 25'],
    optionsHi: ['4 : 5', '6 : 5', '11 : 24', '16 : 25'],
    correctIndex: 3,
    explanationEn:
      'Volume of sphere ∝ r³ ⇒ r₁³ : r₂³ = 64 : 125 ⇒ r₁ : r₂ = 4 : 5.\nTotal surface area ∝ r² ⇒ TSA₁ : TSA₂ = 4² : 5² = 16 : 25.',
    explanationHi:
      'आयतन ∝ r³ ⇒ r₁ : r₂ = ∛64 : ∛125 = 4 : 5।\nकुल पृष्ठीय क्षेत्रफल ∝ r² ⇒ अनुपात = 4² : 5² = 16 : 25।',
  },
  {
    id: 'cgl26_01o2_q68',
    topic: 'Geometry (Triangles & Orthocentre)',
    questionEn:
      'In triangle △ABC, AD and BE are altitudes such that AD ⊥ BC and BE ⊥ AC. The altitudes intersect at point F. If the length of CF is equal to the length of AB, determine the measure of ∠ACB.',
    questionHi:
      'त्रिभुज △ABC में, AD और BE शीर्षलंब (altitudes) हैं, जहाँ AD ⊥ BC और BE ⊥ AC है। ये शीर्षलंब बिंदु F पर एक-दूसरे को काटते हैं। यदि CF की लंबाई AB की लंबाई के बराबर है, तो ∠ACB का माप ज्ञात कीजिए।',
    optionsEn: ['30°', '45°', '60°', '75°'],
    optionsHi: ['30°', '45°', '60°', '75°'],
    correctIndex: 1,
    explanationEn:
      'F is the orthocentre of △ABC.\nBy standard geometry property (with circumradius R):\n• Distance from vertex C to orthocentre F: CF = 2R |cos C|\n• Side opposite C (by Sine Rule): AB = 2R sin C\nGiven CF = AB ⇒ 2R |cos C| = 2R sin C ⇒ tan C = 1 (or |tan C| = 1).\nSince △ABC has acute options, ∠ACB = 45°.\n(Alternative via congruence: △AFE ~ △BFD and ∠BFD = ∠C, giving △ABD ≅ △CFD ⇒ BD = FD ⇒ right △BFD is isosceles ⇒ ∠C = 45°.)',
    explanationHi:
      'F, △ABC का लंबकेंद्र (orthocentre) है। परित्रिज्या R के लिए:\n• CF = 2R |cos C| तथा साइन नियम से AB = 2R sin C।\nदिया है CF = AB ⇒ sin C = cos C ⇒ tan C = 1 ⇒ ∠ACB = 45°।',
  },
  {
    id: 'cgl26_01o2_q69',
    topic: 'Simple Interest',
    questionEn:
      'A trader borrowed ₹90,000 at a fixed rate of simple interest. After 5 years, he repaid ₹1,21,500. If he had borrowed ₹1,50,000 at the same rate and for the same period, what would have been the total amount repaid?',
    questionHi:
      'एक व्यापारी ने साधारण ब्याज की एक निश्चित दर पर 90,000 रुपये उधार लिए। 5 वर्ष बाद, उसने 1,21,500 रुपये चुकाए। यदि उसने उसी दर पर और उसी अवधि के लिए 1,50,000 रुपये उधार लिए होते, तो चुकाया गया कुल मिश्रधन क्या होता?',
    optionsEn: ['₹1,04,500', '₹2,02,500', '₹2,03,300', '₹1,05,900'],
    optionsHi: ['1,04,500 रुपये', '2,02,500 रुपये', '2,03,300 रुपये', '1,05,900 रुपये'],
    correctIndex: 1,
    explanationEn:
      'Short Trick: For the same rate and time, Total Amount is directly proportional to the Principal.\nRatio of Principals = 1,50,000 / 90,000 = 5 / 3.\nNew Amount = ₹1,21,500 × (5 / 3) = ₹40,500 × 5 = ₹2,02,500.',
    explanationHi:
      'शॉर्ट ट्रिक: समान दर और समय के लिए मिश्रधन, मूलधन के सीधे अनुक्रमानुपाती होता है।\nनया मिश्रधन = 1,21,500 × (1,50,000 / 90,000) = 1,21,500 × (5/3) = ₹2,02,500।',
  },
  {
    id: 'cgl26_01o2_q70',
    topic: 'Time & Work',
    questionEn:
      'A team of 5 men and 5 women can complete a task in 12 days, while a team of 2 men and 8 women can complete the same task in 15 days. If a team of 10 women starts the work and works for 5 days, how many men must join them so that the remaining work is completed in exactly 5 more days?\n[Assume that each woman works with equal efficiency as the other women and same for the men.]',
    questionHi:
      '5 पुरुषों और 5 महिलाओं की एक टीम किसी कार्य को 12 दिनों में पूरा कर सकती है, जबकि 2 पुरुषों और 8 महिलाओं की एक टीम उसी कार्य को 15 दिनों में पूरा कर सकती है। यदि 10 महिलाएँ कार्य शुरू करती हैं और 5 दिनों तक काम करती हैं, तो शेष कार्य को ठीक अगले 5 दिनों में पूरा करने के लिए कितने पुरुषों को उनके साथ जुड़ना चाहिए?\n(मान लीजिए कि प्रत्येक महिला की कार्य-दक्षता समान है और प्रत्येक पुरुष की दक्षता भी समान है।)',
    optionsEn: ['8', '9', '10', '12'],
    optionsHi: ['8', '9', '10', '12'],
    correctIndex: 0,
    explanationEn:
      'Equating total work:\n(5M + 5W) × 12 = (2M + 8W) × 15\n⇒ 4(5M + 5W) = 5(2M + 8W)\n⇒ 20M + 20W = 10M + 40W ⇒ 10M = 20W ⇒ M = 2W.\nLet W = 1 unit/day ⇒ M = 2 units/day.\nTotal work = (5×2 + 5×1) × 12 = 15 × 12 = 180 units.\nIn first 5 days, 10 women complete = 10 × 1 × 5 = 50 units.\nRemaining work = 180 − 50 = 130 units, to be done in 5 days ⇒ required daily rate = 130 / 5 = 26 units/day.\n10 women do 10 units/day ⇒ men must do 26 − 10 = 16 units/day.\nNumber of men = 16 / 2 = 8.',
    explanationHi:
      'कुल कार्य बराबर करने पर:\n(5M + 5W) × 12 = (2M + 8W) × 15 ⇒ M = 2W।\nमाना W = 1 इकाई/दिन, तो M = 2 इकाई/दिन। कुल कार्य = (10 + 5) × 12 = 180 इकाई।\n10 महिलाओं द्वारा 5 दिन में कार्य = 50 इकाई। शेष कार्य = 130 इकाई (5 दिन में ⇒ 26 इकाई/दिन)।\n10 महिलाएँ 10 इकाई/दिन करती हैं, अतः पुरुषों को 16 इकाई/दिन करना होगा ⇒ पुरुषों की संख्या = 16 / 2 = 8।',
  },
  {
    id: 'cgl26_01o2_q71',
    topic: 'Work & Wages',
    questionEn:
      "P, Q and R contract to do a job for Rs. 52000. P alone can do it in 10 days, Q in 15 days and R in 30 days. P starts the work alone. After 2 days, Q joins him. After 3 more days, R also joins them. Then the three of them work together till the completion of the job. What should be Q's share of the earnings?",
    questionHi:
      'P, Q और R एक कार्य को करने के लिए 52000 रुपये का ठेका लेते हैं। P अकेले उस कार्य को 10 दिनों में पूरा कर सकता है, Q अकेले 15 दिनों में और R अकेले 30 दिनों में पूरा कर सकता है। P अकेले काम शुरू करता है। 2 दिनों के बाद Q उसके साथ जुड़ जाता है। इसके 3 दिन बाद R भी उनके साथ जुड़ जाता है। इसके बाद तीनों मिलकर काम पूरा होने तक कार्य करते रहते हैं। Q का कुल कमाई (आय) में हिस्सा कितना होना चाहिए?',
    optionsEn: ['Rs. 12300', 'Rs. 13500', 'Rs. 14500', 'Rs. 15600'],
    optionsHi: ['12300 रुपये', '13500 रुपये', '14500 रुपये', '15600 रुपये'],
    correctIndex: 3,
    explanationEn:
      'Let Total Work = LCM(10, 15, 30) = 30 units.\nEfficiencies: P = 3, Q = 2, R = 1 unit/day.\n• First 2 days (P alone): 2 × 3 = 6 units\n• Next 3 days (P + Q): 3 × (3 + 2) = 15 units\n• Work done so far = 6 + 15 = 21 units; Remaining = 9 units.\n• Together (P + Q + R = 6 units/day): time = 9 / 6 = 1.5 days.\nTotal days Q worked = 3 + 1.5 = 4.5 days ⇒ Q\'s work = 4.5 × 2 = 9 units.\nQ\'s share = (9 / 30) × 52000 = (3 / 10) × 52000 = Rs. 15,600.',
    explanationHi:
      'कुल कार्य = LCM(10, 15, 30) = 30 इकाई (क्षमताएँ: P = 3, Q = 2, R = 1)।\n• पहले 2 दिन (P): 6 इकाई; अगले 3 दिन (P + Q): 15 इकाई। कुल 21 इकाई पूर्ण, शेष = 9 इकाई।\n• तीनों मिलकर (6 इकाई/दिन) शेष 9 इकाई = 1.5 दिन में करते हैं।\n• Q ने कुल (3 + 1.5 = 4.5 दिन) कार्य किया = 4.5 × 2 = 9 इकाई।\n• Q का हिस्सा = (9 / 30) × 52000 = 15,600 रुपये।',
  },
  {
    id: 'cgl26_01o2_q72',
    topic: 'Trigonometry',
    questionEn: 'Solve for acute θ: sin θ = cos(θ + 30°)',
    questionHi: 'न्यून कोण θ के लिए: sin θ = cos(θ + 30°) का हल करें।',
    optionsEn: ['30°', '60°', '45°', '15°'],
    optionsHi: ['30°', '60°', '45°', '15°'],
    correctIndex: 0,
    explanationEn:
      'If sin A = cos B for acute angles, then A + B = 90°.\n⇒ θ + (θ + 30°) = 90°\n⇒ 2θ = 60° ⇒ θ = 30°.',
    explanationHi:
      'न्यून कोणों के लिए यदि sin A = cos B हो, तो A + B = 90° होता है।\n⇒ θ + (θ + 30°) = 90° ⇒ 2θ = 60° ⇒ θ = 30°।',
  },
  {
    id: 'cgl26_01o2_q73',
    topic: 'Algebra',
    questionEn:
      'What term must be added to the expression 4a² + 20ab to make it a perfect square trinomial?',
    questionHi:
      'व्यंजक 4a² + 20ab को एक पूर्ण वर्ग त्रिपद बनाने के लिए उसमें कौन सा पद जोड़ा जाना चाहिए?',
    optionsEn: ['5b²', '25b²', '10b²', '100ab²'],
    optionsHi: ['5b²', '25b²', '10b²', '100ab²'],
    correctIndex: 1,
    explanationEn:
      'Comparing 4a² + 20ab + ? with (x + y)² = x² + 2xy + y²:\n• x² = 4a² ⇒ x = 2a\n• 2xy = 20ab ⇒ 2(2a)y = 20ab ⇒ y = 5b\nTherefore, the missing term is y² = (5b)² = 25b².',
    explanationHi:
      '4a² + 20ab = (2a)² + 2(2a)(5b)। इसे (2a + 5b)² पूर्ण वर्ग बनाने के लिए (5b)² = 25b² जोड़ना होगा।',
  },
  {
    id: 'cgl26_01o2_q74',
    topic: 'Algebra',
    questionEn: 'If a² + b² = 89 and ab = 20, find the value of |a − b|.',
    questionHi: 'यदि a² + b² = 89 और ab = 20 है, तो |a − b| का मान ज्ञात कीजिए।',
    optionsEn: ['3', '5', '7', '9'],
    optionsHi: ['3', '5', '7', '9'],
    correctIndex: 2,
    explanationEn:
      '(a − b)² = a² + b² − 2ab = 89 − 2(20) = 89 − 40 = 49.\nTaking the square root: |a − b| = √49 = 7.',
    explanationHi:
      '(a − b)² = a² + b² − 2ab = 89 − 40 = 49 ⇒ |a − b| = √49 = 7।',
  },
  {
    id: 'cgl26_01o2_q75',
    topic: 'Surds & Indices',
    questionEn:
      'Simplify the following radical expression completely:\n(√2 + 1) / (√2 − 1)',
    questionHi:
      'निम्नलिखित करणी व्यंजक को पूर्णतः सरल कीजिए:\n(√2 + 1) / (√2 − 1)',
    optionsEn: ['3 − 2√2', '1 + 2√2', '3 + 2√2', '4 + 2√2'],
    optionsHi: ['3 − 2√2', '1 + 2√2', '3 + 2√2', '4 + 2√2'],
    correctIndex: 2,
    explanationEn:
      'Rationalising the denominator by multiplying numerator and denominator by (√2 + 1):\n= (√2 + 1)² / [(√2)² − 1²]\n= (2 + 1 + 2√2) / (2 − 1)\n= 3 + 2√2.',
    explanationHi:
      'हर का परिमेयकरण (rationalisation) करने पर:\n(√2 + 1)² / (2 − 1) = (2 + 1 + 2√2) / 1 = 3 + 2√2।',
  },
];
