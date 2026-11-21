import { Question } from '../../types/exam';

export const SECTION_3_QUANT: Question[] = [
  {
    id: 'cgl26_30s2_q51',
    topic: 'Simple Interest',
    questionEn:
      'A sum of money amounts to Rs. 825 in 3 years and to Rs. 950 in 4 years at some rate of simple interest. The sum is:',
    questionHi:
      'एक धनराशि साधारण ब्याज की किसी दर पर 3 वर्षों में 825 रुपये और 4 वर्षों में 950 रुपये हो जाती है। धनराशि है:',
    optionsEn: ['400/-', '410/-', '450/-', '550/-'],
    optionsHi: ['400/-', '410/-', '450/-', '550/-'],
    correctIndex: 2,
    explanationEn:
      'Simple Interest for 1 year = 950 − 825 = Rs. 125.\nSI for 3 years = 125 × 3 = Rs. 375.\nPrincipal (Sum) = 825 − 375 = Rs. 450.',
    explanationHi:
      '1 वर्ष का साधारण ब्याज = 950 − 825 = 125 रुपये।\n3 वर्षों का साधारण ब्याज = 125 × 3 = 375 रुपये।\nमूलधन = 825 − 375 = 450 रुपये।',
  },
  {
    id: 'cgl26_30s2_q52',
    topic: 'Mensuration 3D',
    questionEn:
      "A toy is in the form of a hemisphere surmounted by a cone. The radius of the hemisphere is 3 cm and the cone's height is 4 cm. Find the total volume of the toy (use π ≈ 3.14).",
    questionHi:
      'एक खिलौना एक अर्धगोले के आकार का है जिसके ऊपर एक शंकु रखा हुआ है। अर्धगोले की त्रिज्या 3 सेमी है और शंकु की ऊँचाई 4 सेमी है। खिलौने का कुल आयतन ज्ञात कीजिए (π ≈ 3.14 का प्रयोग करें)।',
    optionsEn: ['113.04 cm³', '94.2 cm³', '188.4 cm³', '62.8 cm³'],
    optionsHi: ['113.04 सेमी³', '94.2 सेमी³', '188.4 सेमी³', '62.8 सेमी³'],
    correctIndex: 1,
    explanationEn:
      'Total Volume = Volume of Hemisphere + Volume of Cone\n= (2/3)πr³ + (1/3)πr²h = (1/3)πr²(2r + h)\n= (1/3) × 3.14 × 3² × (6 + 4) = 3.14 × 3 × 10 = 94.2 cm³.',
    explanationHi:
      'कुल आयतन = अर्धगोले का आयतन + शंकु का आयतन\n= (1/3)πr²(2r + h) = (1/3) × 3.14 × 9 × (6 + 4)\n= 3.14 × 30 = 94.2 सेमी³।',
  },
  {
    id: 'cgl26_30s2_q53',
    topic: 'Algebra',
    questionEn: 'Solve: (x + 2)² − (x − 2)²',
    questionHi: 'हल करें: (x + 2)² − (x − 2)²',
    optionsEn: ['8x', '2x + 4', '10x', 'x²'],
    optionsHi: ['8x', '2x + 4', '10x', 'x²'],
    correctIndex: 0,
    explanationEn:
      'Using algebraic identity (a + b)² − (a − b)² = 4ab:\nHere a = x and b = 2 ⇒ 4 × x × 2 = 8x.',
    explanationHi:
      'सर्वसमिका (a + b)² − (a − b)² = 4ab का प्रयोग करने पर:\n4 × x × 2 = 8x।',
  },
  {
    id: 'cgl26_30s2_q54',
    topic: 'Mensuration 2D',
    questionEn: 'If the diameter of a circle is 28 cm, then its area is:',
    questionHi: 'यदि किसी वृत्त का व्यास 28 सेंटीमीटर है, तो उसका क्षेत्रफल है:',
    optionsEn: ['154 cm²', '616 cm²', '308 cm²', '484 cm²'],
    optionsHi: ['154 वर्ग सेंटीमीटर', '616 वर्ग सेंटीमीटर', '308 वर्ग सेंटीमीटर', '484 वर्ग सेंटीमीटर'],
    correctIndex: 1,
    explanationEn:
      'Radius r = Diameter / 2 = 28 / 2 = 14 cm.\nArea = πr² = (22 / 7) × 14 × 14 = 22 × 28 = 616 cm².',
    explanationHi:
      'त्रिज्या r = 28 / 2 = 14 सेमी।\nवृत्त का क्षेत्रफल = πr² = (22 / 7) × 14 × 14 = 616 वर्ग सेंटीमीटर।',
  },
  {
    id: 'cgl26_30s2_q55',
    topic: 'Trigonometry',
    questionEn: 'If tan A + cot A = 2 and A is an acute angle, find the value of tan⁴ A + cot⁴ A.',
    questionHi: 'अगर tan A + cot A = 2 तथा A एक न्यून कोण है, तो tan⁴ A + cot⁴ A का मान ज्ञात कीजिए।',
    optionsEn: ['2', '20', '22', '24'],
    optionsHi: ['2', '20', '22', '24'],
    correctIndex: 0,
    explanationEn:
      'Since tan A + 1/tan A = 2 for an acute angle A, we get tan A = 1 and cot A = 1 (A = 45°).\nTherefore, tan⁴ A + cot⁴ A = 1⁴ + 1⁴ = 2.',
    explanationHi:
      'चूँकि tan A + cot A = 2 है, अतः A = 45° (tan A = 1, cot A = 1)।\nइसलिए tan⁴ A + cot⁴ A = 1⁴ + 1⁴ = 2।',
  },
  {
    id: 'cgl26_30s2_q56',
    topic: 'Mensuration 3D',
    questionEn: 'A cone has a height of 8 cm and a slant height of 10 cm. What is the volume of the cone?',
    questionHi: 'एक शंकु की ऊँचाई 8 सेंटीमीटर और तिर्यक ऊँचाई 10 सेमी है। शंकु का आयतन क्या है?',
    optionsEn: ['301.71 cm³', '304 cm³', '305.75 cm³', '308.76 cm³'],
    optionsHi: ['301.71 घन सेंटीमीटर', '304 घन सेंटीमीटर', '305.75 घन सेंटीमीटर', '308.76 घन सेंटीमीटर'],
    correctIndex: 0,
    explanationEn:
      'Radius r = √(l² − h²) = √(10² − 8²) = √36 = 6 cm.\nVolume = (1/3)πr²h = (1/3) × (22/7) × 36 × 8 = 2112 / 7 ≈ 301.71 cm³.',
    explanationHi:
      'त्रिज्या r = √(10² − 8²) = √36 = 6 सेमी।\nशंकु का आयतन = (1/3) × (22/7) × 6² × 8 = 2112 / 7 ≈ 301.71 घन सेंटीमीटर।',
  },
  {
    id: 'cgl26_30s2_q57',
    topic: 'Mensuration 3D',
    questionEn:
      'A pyramid has a rectangular base with dimensions 6 cm by 8 cm. If the height of the pyramid is 1.5 times the longer side of the base, calculate the volume of the pyramid.',
    questionHi:
      'एक पिरामिड का आयताकार आधार 6 सेंटीमीटर × 8 सेंटीमीटर माप का है। यदि पिरामिड की ऊँचाई, आधार की लंबी भुजा की 1.5 गुना है, तो पिरामिड का आयतन ज्ञात कीजिए।',
    optionsEn: ['292 cm³', '262 cm³', '252 cm³', '192 cm³'],
    optionsHi: ['292 घन सेंटीमीटर', '262 घन सेंटीमीटर', '252 घन सेंटीमीटर', '192 घन सेंटीमीटर'],
    correctIndex: 3,
    explanationEn:
      'Base Area = 6 × 8 = 48 cm².\nHeight h = 1.5 × 8 = 12 cm.\nVolume of pyramid = (1/3) × Base Area × h = (1/3) × 48 × 12 = 192 cm³.',
    explanationHi:
      'आधार का क्षेत्रफल = 6 × 8 = 48 वर्ग सेमी।\nऊँचाई h = 1.5 × 8 = 12 सेमी।\nपिरामिड का आयतन = (1/3) × 48 × 12 = 192 घन सेंटीमीटर।',
  },
  {
    id: 'cgl26_30s2_q58',
    topic: 'Coordinate Geometry',
    questionEn: 'What is the distance between points A(2, 3) and B(5, 7)?',
    questionHi: 'बिंदु A(2, 3) और B(5, 7) के बीच की दूरी क्या है?',
    optionsEn: ['4 units', '6 units', '7 units', '5 units'],
    optionsHi: ['4 यूनिट्स', '6 यूनिट्स', '7 यूनिट्स', '5 यूनिट्स'],
    correctIndex: 3,
    explanationEn:
      'Distance AB = √[(5 − 2)² + (7 − 3)²] = √(3² + 4²) = √(9 + 16) = √25 = 5 units.',
    explanationHi:
      'दूरी सूत्र से: AB = √[(5 − 2)² + (7 − 3)²] = √(9 + 16) = √25 = 5 यूनिट्स।',
  },
  {
    id: 'cgl26_30s2_q59',
    topic: 'Geometry',
    questionEn:
      'In △ABC, a line DE is drawn parallel to BC, intersecting AB at D and AC at E. If AD = 3 cm, DB = 2 cm, and DE = 4 cm, what is the length of BC?',
    questionHi:
      '△ABC में, BC के समान्तर एक रेखा DE खींची गई है, जो AB को D पर तथा AC को E पर प्रतिच्छेद करती है। यदि AD = 3 सेमी, DB = 2 सेमी, तथा DE = 4 सेमी है, तो BC की लम्बाई क्या है?',
    optionsEn: ['5 cm', '6 cm', '3/20 cm', '20/3 cm'],
    optionsHi: ['5 सेमी', '6 सेमी', '3/20 सेमी', '20/3 सेमी'],
    correctIndex: 3,
    explanationEn:
      'Since DE ∥ BC, △ADE ~ △ABC.\nTherefore, AD / AB = DE / BC.\nAB = AD + DB = 3 + 2 = 5 cm.\n3 / 5 = 4 / BC ⇒ BC = 20 / 3 cm.',
    explanationHi:
      'चूँकि DE ∥ BC, अतः △ADE ~ △ABC।\nAD / AB = DE / BC, जहाँ AB = 3 + 2 = 5 सेमी।\n3 / 5 = 4 / BC ⇒ BC = 20 / 3 सेमी।',
  },
  {
    id: 'cgl26_30s2_q60',
    topic: 'Algebra',
    questionEn:
      'If x = 1.5 and y = 0.5, find the value of (x³ − y³) / (x² + xy + y²) + (x³ + y³) / (x² − xy + y²).',
    questionHi:
      'यदि x = 1.5 और y = 0.5 हैं, तो (x³ − y³) / (x² + xy + y²) + (x³ + y³) / (x² − xy + y²) का मान ज्ञात कीजिए:',
    optionsEn: ['1', '3', '2', '4'],
    optionsHi: ['1', '3', '2', '4'],
    correctIndex: 1,
    explanationEn:
      'Using identities:\n• (x³ − y³) / (x² + xy + y²) = x − y\n• (x³ + y³) / (x² − xy + y²) = x + y\nAdding both = (x − y) + (x + y) = 2x = 2 × 1.5 = 3.',
    explanationHi:
      'सर्वसमिका से:\n• (x³ − y³) / (x² + xy + y²) = x − y\n• (x³ + y³) / (x² − xy + y²) = x + y\nयोग = (x − y) + (x + y) = 2x = 2 × 1.5 = 3।',
  },
  {
    id: 'cgl26_30s2_q61',
    topic: 'Time & Work',
    questionEn:
      'A and B can complete a piece of work in 15 days and 20 days respectively. They work on alternate days, starting with A. In how many days will the work be completed?',
    questionHi:
      'A और B क्रमशः 15 दिन और 20 दिन में एक कार्य पूरा कर सकते हैं। वे एक दिन छोड़कर (alternate days) काम करते हैं, और A से शुरुआत होती है। कार्य कितने दिनों में पूरा होगा?',
    optionsEn: ['12 days', '15 days', '25 days', '17 days'],
    optionsHi: ['12 दिन', '15 दिन', '25 दिन', '17 दिन'],
    correctIndex: 3,
    explanationEn:
      'Let Total Work = LCM(15, 20) = 60 units.\nEfficiency: A = 4 units/day, B = 3 units/day.\nIn 2 days (A + B), work done = 4 + 3 = 7 units.\nIn 16 days (8 cycles), work done = 8 × 7 = 56 units.\nRemaining work = 60 − 56 = 4 units, which A completes in exactly 1 day (17th day).\nTotal time = 17 days.',
    explanationHi:
      'कुल कार्य = LCM(15, 20) = 60 इकाई। दक्षता: A = 4 इकाई/दिन, B = 3 इकाई/दिन।\n2 दिन में कार्य = 7 इकाई ⇒ 16 दिन (8 चक्र) में = 56 इकाई।\nशेष 4 इकाई कार्य A 17वें दिन पूरा कर देता है। अतः कुल समय = 17 दिन।',
  },
  {
    id: 'cgl26_30s2_q62',
    topic: 'Ratio & Proportion',
    questionEn:
      "An amount of ₹33,630 is distributed among A, B, and C. The ratio of A's share to B's share is 3 : 7, and the ratio of B's share to C's share is 6 : 5. Find the amount of money received by B.",
    questionHi:
      '₹33,630 की एक राशि A, B और C के बीच वितरित की जाती है। A के हिस्से और B के हिस्से का अनुपात 3 : 7 है, तथा B के हिस्से और C के हिस्से का अनुपात 6 : 5 है। B द्वारा प्राप्त धनराशि ज्ञात कीजिए।',
    optionsEn: ['₹13,290', '₹14,868', '₹15,327', '₹16,409'],
    optionsHi: ['₹13,290', '₹14,868', '₹15,327', '₹16,409'],
    correctIndex: 1,
    explanationEn:
      'Combining ratios: A : B = 3 : 7 (×6) = 18 : 42; B : C = 6 : 5 (×7) = 42 : 35.\nSo A : B : C = 18 : 42 : 35. Total parts = 18 + 42 + 35 = 95.\nB’s share = (42 / 95) × 33,630 = 42 × 354 = ₹14,868.',
    explanationHi:
      'अनुपात मिलाने पर A : B : C = 18 : 42 : 35 (कुल = 95 भाग)।\nB का हिस्सा = (42 / 95) × 33,630 = 42 × 354 = ₹14,868।',
  },
  {
    id: 'cgl26_30s2_q63',
    topic: 'Partnership',
    questionEn:
      'In a company, A is a working partner, and B is a sleeping partner. The investment of A is ₹12,000, and that of B is ₹20,000. The percentage of management charge is 10% of the total gain to be received by A. The total gain is ₹9,600. What is the total gain of A?',
    questionHi:
      'एक कंपनी में, A एक वर्किंग पार्टनर है और B एक स्लीपिंग पार्टनर है। A का निवेश ₹12,000 है और B का निवेश ₹20,000 है। मैनेजमेंट चार्ज का प्रतिशत कुल लाभ का 10% है, जो A को मिलेगा। कुल लाभ ₹9,600 है। A का कुल लाभ कितना है?',
    optionsEn: ['₹3,240', '₹3,600', '₹4,140', '₹4,200'],
    optionsHi: ['₹3,240', '₹3,600', '₹4,140', '₹4,200'],
    correctIndex: 3,
    explanationEn:
      'A’s management charge = 10% of 9,600 = ₹960.\nRemaining profit = 9,600 − 960 = ₹8,640.\nInvestment ratio A : B = 12,000 : 20,000 = 3 : 5.\nA’s profit share = (3 / 8) × 8,640 = ₹3,240.\nTotal gain of A = 960 + 3,240 = ₹4,200.',
    explanationHi:
      'A का मैनेजमेंट चार्ज = 9,600 का 10% = ₹960।\nशेष लाभ = 9,600 − 960 = ₹8,640।\nनिवेश अनुपात A : B = 12,000 : 20,000 = 3 : 5।\nशेष लाभ में A का भाग = (3 / 8) × 8,640 = ₹3,240।\nA का कुल लाभ = 960 + 3,240 = ₹4,200।',
  },
  {
    id: 'cgl26_30s2_q64',
    topic: 'Percentage',
    questionEn:
      'In an election, 10% of the voters did not vote, while 150 votes were found to be invalid. There were only two candidates. The winner secured 55% of the total voters and defeated the opponent by 1100 votes. Find the total number of voters.',
    questionHi:
      'एक चुनाव में, 10% मतदाताओं ने वोट नहीं दिया, जबकि 150 वोट अमान्य पाए गए। चुनाव में केवल दो उम्मीदवार थे। जीतने वाले उम्मीदवार को कुल मतदाताओं के 55% वोट मिले और उसने अपने विरोधी को 1100 वोटों से हराया। मतदाताओं की कुल संख्या ज्ञात कीजिए।',
    optionsEn: ['5360', '6230', '3440', '4750'],
    optionsHi: ['5360', '6230', '3440', '4750'],
    correctIndex: 3,
    explanationEn:
      'Let total voters = 100x.\nVotes polled = 90x; Valid votes = 90x − 150.\nWinner’s votes = 55x.\nLoser’s votes = (90x − 150) − 55x = 35x − 150.\nMargin = 55x − (35x − 150) = 20x + 150 = 1100 ⇒ 20x = 950 ⇒ x = 47.5.\nTotal voters = 100 × 47.5 = 4750.',
    explanationHi:
      'माना कुल मतदाता = 100x। डाले गए मत = 90x; वैध मत = 90x − 150।\nविजेता = 55x; उपविजेता = (90x − 150) − 55x = 35x − 150।\nजीत का अंतर: 55x − (35x − 150) = 1100 ⇒ 20x = 950 ⇒ x = 47.5।\nकुल मतदाता = 100 × 47.5 = 4750।',
  },
  {
    id: 'cgl26_30s2_q65',
    topic: 'Mensuration 2D',
    questionEn: 'A hexagon is drawn inside a circle with a radius of 21 cm. Determine the area of the hexagon.',
    questionHi: '21 cm त्रिज्या वाले एक वृत्त के अंदर एक षट्भुज बनाया गया है। षट्भुज का क्षेत्रफल ज्ञात कीजिए।',
    optionsEn: ['611.5√9 cm²', '661.5√3 cm²', '621.5√7 cm²', '641.5√3 cm²'],
    optionsHi: ['611.5√9 cm²', '661.5√3 cm²', '621.5√7 cm²', '641.5√3 cm²'],
    correctIndex: 1,
    explanationEn:
      'For a regular hexagon inscribed in a circle, side length a = radius r = 21 cm.\nArea = 6 × (√3 / 4) × a² = (3√3 / 2) × 441 = 661.5√3 cm².',
    explanationHi:
      'वृत्त के अंदर बने समषट्भुज की भुजा a = वृत्त की त्रिज्या r = 21 cm होती है।\nक्षेत्रफल = 6 × (√3 / 4) × 21² = (3√3 / 2) × 441 = 661.5√3 cm²।',
  },
  {
    id: 'cgl26_30s2_q66',
    topic: 'Profit & Loss',
    questionEn:
      'A dealer sold two sets of headphones for ₹990 each. On one he gained 10% and on the other he lost 10%. Find the total loss or gain percentage.',
    questionHi:
      'एक विक्रेता ने दो हेडफ़ोन सेटों में से प्रत्येक को ₹990 में बेचा। एक पर उसे 10% का लाभ हुआ और दूसरे पर 10% की हानि हुई। कुल लाभ या हानि प्रतिशत ज्ञात कीजिए।',
    optionsEn: ['1% gain', '1% loss', '2% loss', 'No loss or gain'],
    optionsHi: ['1% लाभ', '1% हानि', '2% हानि', 'न कोई हानि, न कोई लाभ'],
    correctIndex: 1,
    explanationEn:
      'When two items are sold at the same Selling Price with equal x% profit and x% loss, there is always an overall loss of (x² / 100)%.\nHere x = 10 ⇒ Loss% = (10² / 100)% = 1% loss.',
    explanationHi:
      'जब दो वस्तुएँ समान विक्रय मूल्य पर बेची जाएँ और एक पर x% लाभ तथा दूसरी पर x% हानि हो, तो सदैव (x² / 100)% की हानि होती है।\nहानि% = (10² / 100)% = 1% हानि।',
  },
  {
    id: 'cgl26_30s2_q67',
    topic: 'Discount',
    questionEn:
      'A laptop has a marked price of ₹80,000. It is sold after giving successive discounts of 15%, 20% and 10%. Find the selling price.',
    questionHi:
      'एक लैपटॉप का अंकित मूल्य ₹80,000 है। इसे 15%, 20% और 10% की क्रमिक छूट देने के बाद बेचा जाता है। इसका विक्रय मूल्य ज्ञात कीजिए।',
    optionsEn: ['₹54,400', '₹47,620', '₹50,240', '₹48,960'],
    optionsHi: ['₹54,400', '₹47,620', '₹50,240', '₹48,960'],
    correctIndex: 3,
    explanationEn:
      'Selling Price = 80,000 × (85/100) × (80/100) × (90/100)\n= 80,000 × 0.85 × 0.80 × 0.90 = 68,000 × 0.72 = ₹48,960.',
    explanationHi:
      'विक्रय मूल्य = 80,000 × (85/100) × (80/100) × (90/100)\n= 68,000 × 0.80 × 0.90 = ₹48,960।',
  },
  {
    id: 'cgl26_30s2_q68',
    topic: 'Trigonometry',
    questionEn: 'If sin A + cos A = 5/4, then find the value of tan A + cot A.',
    questionHi: 'यदि sin A + cos A = 5/4 है, तो tan A + cot A का मान ज्ञात कीजिए।',
    optionsEn: ['32/9', '25/16', '9/32', '16/25'],
    optionsHi: ['32/9', '25/16', '9/32', '16/25'],
    correctIndex: 0,
    explanationEn:
      'Squaring both sides of sin A + cos A = 5/4:\nsin²A + cos²A + 2 sin A cos A = 25/16\n1 + 2 sin A cos A = 25/16 ⇒ 2 sin A cos A = 9/16 ⇒ sin A cos A = 9/32.\nNow tan A + cot A = (sin A / cos A) + (cos A / sin A) = 1 / (sin A cos A) = 32/9.',
    explanationHi:
      'दोनों पक्षों का वर्ग करने पर:\n1 + 2 sin A cos A = 25/16 ⇒ sin A cos A = 9/32।\ntan A + cot A = 1 / (sin A cos A) = 32/9।',
  },
  {
    id: 'cgl26_30s2_q69',
    topic: 'Simplification',
    questionEn: 'If √2 = 1.414, then find the value of (4 + √2) / √2.',
    questionHi: 'यदि √2 = 1.414 है, तो (4 + √2) / √2 का मान ज्ञात कीजिए।',
    optionsEn: ['2.124', '2.342', '3.167', '3.828'],
    optionsHi: ['2.124', '2.342', '3.167', '3.828'],
    correctIndex: 3,
    explanationEn:
      '(4 + √2) / √2 = (4 / √2) + 1 = 2√2 + 1 = 2(1.414) + 1 = 2.828 + 1 = 3.828.',
    explanationHi:
      '(4 + √2) / √2 = (4 / √2) + 1 = 2√2 + 1 = 2 × 1.414 + 1 = 3.828।',
  },
  {
    id: 'cgl26_30s2_q70',
    topic: 'Algebra',
    questionEn: 'If x + 1/x = 3√2, then find the value of x / (x² − 1).',
    questionHi: 'यदि x + 1/x = 3√2 है, तो x / (x² − 1) का मान ज्ञात कीजिए।',
    optionsEn: ['1/√14', '1/√12', '1/√18', '1/√19'],
    optionsHi: ['1/√14', '1/√12', '1/√18', '1/√19'],
    correctIndex: 0,
    explanationEn:
      'Divide numerator and denominator by x: x / (x² − 1) = 1 / (x − 1/x).\nNow (x − 1/x)² = (x + 1/x)² − 4 = (3√2)² − 4 = 18 − 4 = 14 ⇒ x − 1/x = √14.\nHence x / (x² − 1) = 1 / √14.',
    explanationHi:
      'अंश व हर को x से भाग देने पर: x / (x² − 1) = 1 / (x − 1/x)।\n(x − 1/x) = √[(3√2)² − 4] = √(18 − 4) = √14।\nअतः मान = 1 / √14।',
  },
  {
    id: 'cgl26_30s2_q71',
    topic: 'Geometry (Circles)',
    questionEn:
      'In a circle of radius 61 cm, two equal parallel chords lie on opposite sides of the centre. The distance between the chords is 22 cm. Find the length of each chord.',
    questionHi:
      '61 cm त्रिज्या वाले एक वृत्त में, दो समान समानांतर जीवाएँ केंद्र के विपरीत पक्षों पर स्थित हैं। जीवाओं के बीच की दूरी 22 cm है। प्रत्येक जीवा की लंबाई ज्ञात कीजिए।',
    optionsEn: ['30 cm', '60 cm', '90 cm', '120 cm'],
    optionsHi: ['30 cm', '60 cm', '90 cm', '120 cm'],
    correctIndex: 3,
    explanationEn:
      'Equal chords are equidistant from the centre. Since they lie on opposite sides and are 22 cm apart, each chord is 22 / 2 = 11 cm from the centre.\nHalf-chord = √(61² − 11²) = √(3721 − 121) = √3600 = 60 cm.\nLength of each chord = 2 × 60 = 120 cm.',
    explanationHi:
      'समान जीवाएँ केंद्र से समान दूरी पर होती हैं। अतः प्रत्येक जीवा की केंद्र से दूरी = 22 / 2 = 11 cm।\nआधी जीवा = √(61² − 11²) = √3600 = 60 cm।\nजीवा की कुल लंबाई = 2 × 60 = 120 cm।',
  },
  {
    id: 'cgl26_30s2_q72',
    topic: 'Geometry (Circles)',
    questionEn:
      'A tangent is drawn from external point Q to a circle having a centre O, touching at T. OT = 6 cm and OQ = 10 cm. What is the area of triangle OTQ?',
    questionHi:
      'एक बाह्य बिंदु Q से केंद्र O वाले एक वृत्त पर एक स्पर्श रेखा खींची गई है, जो T पर स्पर्श करती है। OT = 6 cm और OQ = 10 cm है। त्रिभुज OTQ का क्षेत्रफल क्या है?',
    optionsEn: ['14 cm²', '18 cm²', '24 cm²', '28 cm²'],
    optionsHi: ['14 cm²', '18 cm²', '24 cm²', '28 cm²'],
    correctIndex: 2,
    explanationEn:
      'Radius OT is perpendicular to tangent QT at T (∠OTQ = 90°).\nBy Pythagoras theorem: QT = √(10² − 6²) = √64 = 8 cm.\nArea of △OTQ = ½ × OT × QT = ½ × 6 × 8 = 24 cm².',
    explanationHi:
      'त्रिज्या OT स्पर्श रेखा QT पर लंबवत होती है (∠OTQ = 90°)।\nQT = √(10² − 6²) = 8 cm।\nत्रिभुज OTQ का क्षेत्रफल = ½ × 6 × 8 = 24 cm²।',
  },
  {
    id: 'cgl26_30s2_q73',
    topic: 'Mensuration 2D',
    questionEn:
      'Arcs of two circles with radii 15 cm and 20 cm subtend angles of 60° and 45° at their respective centres. What is the ratio of their arc lengths?',
    questionHi:
      '15 cm और 20 cm त्रिज्या वाले दो वृत्तों की चापें अपने-अपने केन्द्रों पर क्रमशः 60° और 45° के कोण बनाती हैं। उनकी चापों की लंबाइयों का अनुपात क्या है?',
    optionsEn: ['1:2', '3:1', '1:1', '2:3'],
    optionsHi: ['1:2', '3:1', '1:1', '2:3'],
    correctIndex: 2,
    explanationEn:
      'Arc length l = (θ / 360°) × 2πr, so l₁ : l₂ = (r₁ × θ₁) : (r₂ × θ₂)\n= (15 × 60) : (20 × 45) = 900 : 900 = 1 : 1.',
    explanationHi:
      'चाप की लंबाई l ∝ r × θ।\nअनुपात = (15 × 60) : (20 × 45) = 900 : 900 = 1 : 1।',
  },
  {
    id: 'cgl26_30s2_q74',
    topic: 'Geometry (Circles)',
    questionEn:
      'Two circles with radii 5 cm and 3 cm have their centers separated by a distance of d cm. If the length of their direct common tangent is exactly twice the length of their transverse common tangent, find the value of d².',
    questionHi:
      'दो वृत्त जिनकी त्रिज्याएँ 5 cm और 3 cm हैं, उनके केन्द्रों के बीच की दूरी d cm है। यदि उनकी प्रत्यक्ष सामान्य स्पर्शरेखा की लंबाई, उनकी तिर्यक (transverse) सामान्य स्पर्शरेखा की लंबाई की ठीक दोगुनी है, तो d² का मान ज्ञात कीजिए।',
    optionsEn: ['84 cm', '79 cm', '51 cm', '105 cm'],
    optionsHi: ['84 cm', '79 cm', '51 cm', '105 cm'],
    correctIndex: 0,
    explanationEn:
      'Direct Common Tangent (DCT) = √[d² − (r₁ − r₂)²] = √(d² − 4).\nTransverse Common Tangent (TCT) = √[d² − (r₁ + r₂)²] = √(d² − 64).\nGiven DCT = 2 × TCT ⇒ Squaring: d² − 4 = 4(d² − 64)\n⇒ d² − 4 = 4d² − 256 ⇒ 3d² = 252 ⇒ d² = 84.',
    explanationHi:
      'प्रत्यक्ष उभयनिष्ठ स्पर्शरेखा = √(d² − 2²) = √(d² − 4)।\nतिर्यक उभयनिष्ठ स्पर्शरेखा = √(d² − 8²) = √(d² − 64)।\nप्रश्नानुसार वर्ग करने पर: d² − 4 = 4(d² − 64) ⇒ 3d² = 252 ⇒ d² = 84।',
  },
  {
    id: 'cgl26_30s2_q75',
    topic: 'Mixture & Alligation',
    questionEn:
      'A vessel contains 90 litres of a mixture of milk and water in the ratio 8:7. How many litres of the mixture should be removed and replaced with pure water so that the ratio of milk to water in the resulting mixture becomes 4:5?',
    questionHi:
      'एक पात्र में दूध और जल का 90 लीटर मिश्रण 8:7 के अनुपात में है। मिश्रण में से कितने लीटर निकालकर उसके स्थान पर उतनी ही मात्रा में शुद्ध जल डाला जाए ताकि परिणामी मिश्रण में दूध और जल का अनुपात 4:5 हो जाए?',
    optionsEn: ['15 litres', '12 litres', '6 litres', '9 litres'],
    optionsHi: ['15 लीटर', '12 लीटर', '6 लीटर', '9 लीटर'],
    correctIndex: 0,
    explanationEn:
      'Initial milk = (8 / 15) × 90 = 48 litres.\nFinal milk required = (4 / 9) × 90 = 40 litres.\nLet x litres be replaced: Final Milk = Initial Milk × (1 − x / 90)\n⇒ 40 = 48 × (1 − x / 90) ⇒ 5 / 6 = 1 − x / 90 ⇒ x / 90 = 1 / 6 ⇒ x = 15 litres.',
    explanationHi:
      'प्रारंभिक दूध = (8 / 15) × 90 = 48 लीटर।\nअंतिम दूध = (4 / 9) × 90 = 40 लीटर।\n40 = 48 × (1 − x / 90) ⇒ 1 − x / 90 = 5 / 6 ⇒ x / 90 = 1 / 6 ⇒ x = 15 लीटर।',
  },
];
