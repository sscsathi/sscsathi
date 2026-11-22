import { Question } from '../../types/exam';

export const SECTION_3_QUANT_O1S1: Question[] = [
  {
    id: 'cgl26_01o1_q51',
    topic: 'Mensuration 3D',
    questionEn:
      'A hemispherical bowl is made of steel, 1 cm thick. The inner radius of the bowl is 4 cm. What will be the outer curved surface area?',
    questionHi:
      'एक अर्धगोलाकार कटोरा स्टील से बना है, जिसकी मोटाई 1 सेंटीमीटर है। कटोरे की आंतरिक त्रिज्या 4 सेंटीमीटर है। बाहरी वक्र पृष्ठीय क्षेत्रफल क्या होगा?',
    optionsEn: ['137.14 cm²', '237.14 cm²', '257.14 cm²', '157.14 cm²'],
    optionsHi: [
      '137.14 वर्ग सेंटीमीटर',
      '237.14 वर्ग सेंटीमीटर',
      '257.14 वर्ग सेंटीमीटर',
      '157.14 वर्ग सेंटीमीटर',
    ],
    correctIndex: 3,
    explanationEn:
      'Outer radius R = inner radius + thickness = 4 + 1 = 5 cm.\nOuter CSA of hemisphere = 2πR² = 2 × (22/7) × 5² = 1100 / 7 = 157.14 cm².',
    explanationHi:
      'बाहरी त्रिज्या R = 4 + 1 = 5 सेमी।\nअर्धगोले का बाहरी वक्र पृष्ठीय क्षेत्रफल = 2πR² = 2 × (22/7) × 25 = 1100 / 7 = 157.14 वर्ग सेंटीमीटर।',
  },
  {
    id: 'cgl26_01o1_q52',
    topic: 'Mensuration 3D',
    questionEn:
      'If all edges of a rectangular parallelepiped are equal, it becomes a:',
    questionHi:
      'यदि एक आयताकार समांतर चतुर्भुज (घनाभ) की सभी भुजाएँ बराबर हों, तो यह बन जाता है:',
    optionsEn: ['Sphere', 'Cube', 'Cylinder', 'Cone'],
    optionsHi: ['गोला', 'घन', 'बेलन', 'शंकु'],
    correctIndex: 1,
    explanationEn:
      'A rectangular parallelepiped is a cuboid (length l, breadth b, height h). When all edges are equal (l = b = h), it becomes a Cube.',
    explanationHi:
      'आयताकार समांतर चतुर्भुज (घनाभ) की लंबाई, चौड़ाई और ऊँचाई बराबर होने पर वह एक घन (Cube) बन जाता है।',
  },
  {
    id: 'cgl26_01o1_q53',
    topic: 'Simplification',
    questionEn: 'If a * b = a + b + ab, then 3 * 5 − 2 * 4 is equal to?',
    questionHi: 'अगर a * b = a + b + ab, तो 3 * 5 − 2 * 4 बराबर क्या है?',
    optionsEn: ['9', '8', '13', '23'],
    optionsHi: ['9', '8', '13', '23'],
    correctIndex: 0,
    explanationEn:
      '• 3 * 5 = 3 + 5 + (3 × 5) = 8 + 15 = 23\n• 2 * 4 = 2 + 4 + (2 × 4) = 6 + 8 = 14\nDifference = 23 − 14 = 9.',
    explanationHi:
      '• 3 * 5 = 3 + 5 + 15 = 23\n• 2 * 4 = 2 + 4 + 8 = 14\nअतः 23 − 14 = 9।',
  },
  {
    id: 'cgl26_01o1_q54',
    topic: 'Geometry',
    questionEn:
      'The sides of a triangle are 7 cm, 24 cm, and 25 cm. What is the length of the altitude corresponding to the longest side?',
    questionHi:
      'एक त्रिभुज की भुजाएँ 7 सेमी, 24 सेमी और 25 सेमी हैं। सबसे लंबी भुजा के संगत शीर्षलंब की लंबाई क्या है?',
    optionsEn: ['5.6 cm', '6.72 cm', '8.4 cm', '9.6 cm'],
    optionsHi: ['5.6 सेमी', '6.72 सेमी', '8.4 सेमी', '9.6 सेमी'],
    correctIndex: 1,
    explanationEn:
      '(7, 24, 25) is a Pythagorean triplet (7² + 24² = 49 + 576 = 625 = 25²), so it is a right-angled triangle.\nShort trick for altitude to hypotenuse: h = (a × b) / c = (7 × 24) / 25 = 168 / 25 = 6.72 cm.',
    explanationHi:
      '(7, 24, 25) एक पाइथागोरस त्रिक है, अतः यह समकोण त्रिभुज है।\nकर्ण पर शीर्षलंब की लंबाई h = (आधार × लंब) / कर्ण = (7 × 24) / 25 = 168 / 25 = 6.72 सेमी।',
  },
  {
    id: 'cgl26_01o1_q55',
    topic: 'Geometry',
    questionEn:
      'Two complementary angles add up to 90°. If one angle is 18° less than the other, find the angles.',
    questionHi:
      'दो पूरक कोणों का योग 90° होता है। अगर एक कोण दूसरे से 18° कम है, तो कोण ज्ञात कीजिए।',
    optionsEn: ['36°, 54°', '28°, 62°', '40°, 50°', '45°, 45°'],
    optionsHi: ['36°, 54°', '28°, 62°', '40°, 50°', '45°, 45°'],
    correctIndex: 0,
    explanationEn:
      'Let the angles be x and (x − 18°).\nThen x + (x − 18°) = 90° ⇒ 2x = 108° ⇒ x = 54°.\nOther angle = 54° − 18° = 36°. So the angles are 36° and 54°.',
    explanationHi:
      'माना कोण x और (x − 18°) हैं। तब x + x − 18° = 90° ⇒ 2x = 108° ⇒ x = 54° और दूसरा कोण = 36°। अतः कोण 36°, 54° हैं।',
  },
  {
    id: 'cgl26_01o1_q56',
    topic: 'Mensuration 3D',
    questionEn:
      'The heights of two cones are in the ratio 1:3, and the radii of their bases are in the ratio 3:1. What is the ratio of their volumes?',
    questionHi:
      'दो शंकुओं की ऊँचाइयों का अनुपात 1:3 है और उनके आधारों की त्रिज्याओं का अनुपात 3:1 है। उनके आयतनों का अनुपात क्या है?',
    optionsEn: ['3 : 4', '4 : 3', '3 : 1', '2 : 3'],
    optionsHi: ['3 : 4', '4 : 3', '3 : 1', '2 : 3'],
    correctIndex: 2,
    explanationEn:
      'Volume of cone V = (1/3)πr²h ⇒ V₁ : V₂ = (r₁² × h₁) : (r₂² × h₂) = (3² × 1) : (1² × 3) = 9 : 3 = 3 : 1.',
    explanationHi:
      'शंकु का आयतन V ∝ r²h ⇒ V₁ : V₂ = (3² × 1) : (1² × 3) = 9 : 3 = 3 : 1।',
  },
  {
    id: 'cgl26_01o1_q57',
    topic: 'Mensuration 3D',
    questionEn:
      'A hemispherical brass bowl has an inner diameter of 28 cm. If the inside of the bowl is to be painted at the rate of ₹30 per cm², what will be the total cost of painting the inner curved surface?',
    questionHi:
      'एक अर्धगोलाकार पीतल के कटोरे का आंतरिक व्यास 28 सेंटीमीटर है। यदि कटोरे के अंदरूनी भाग को ₹30 प्रति वर्ग सेंटीमीटर की दर से रंगना है, तो आंतरिक वक्र पृष्ठ को रंगने की कुल लागत क्या होगी?',
    optionsEn: ['₹39960', '₹36960', '₹26960', '₹46520'],
    optionsHi: ['₹39960', '₹36960', '₹26960', '₹46520'],
    correctIndex: 1,
    explanationEn:
      'Inner radius r = 28 / 2 = 14 cm.\nInner CSA = 2πr² = 2 × (22/7) × 14 × 14 = 1232 cm².\nTotal painting cost = 1232 × ₹30 = ₹36,960.',
    explanationHi:
      'आंतरिक त्रिज्या r = 28 / 2 = 14 सेमी।\nआंतरिक वक्र पृष्ठीय क्षेत्रफल = 2πr² = 2 × (22/7) × 14 × 14 = 1232 सेमी²।\nकुल लागत = 1232 × 30 = ₹36,960।',
  },
  {
    id: 'cgl26_01o1_q58',
    topic: 'Time, Speed & Distance',
    questionEn:
      'Rita travels a certain fixed distance at her usual speed. If she reduces her speed by 10 km/h, she takes 40 hours more than the original time to complete the journey. On the other hand, if she increases her speed by 15 km/h, she takes 10 hours less than the original time.\nFind the distance travelled by Rita.',
    questionHi:
      'रीता अपनी सामान्य गति से एक निश्चित दूरी तय करती है। यदि वह अपनी गति में 10 km/h की कमी करती है, तो उसे यात्रा पूरी करने में मूल समय से 40 घंटे अधिक लगते हैं। दूसरी ओर, यदि वह अपनी गति में 15 km/h की वृद्धि करती है, तो उसे मूल समय से 10 घंटे कम लगते हैं। रीता द्वारा तय की गई दूरी ज्ञात कीजिए।',
    optionsEn: ['150 km', '250 km', '300 km', '380 km'],
    optionsHi: ['150 km', '250 km', '300 km', '380 km'],
    correctIndex: 2,
    explanationEn:
      'Let usual speed = v km/h and usual time = t hours (Distance D = vt).\n1) (v − 10)(t + 40) = vt ⇒ 40v − 10t = 400 ⇒ 4v − t = 40\n2) (v + 15)(t − 10) = vt ⇒ 15t − 10v = 150 ⇒ 3t − 2v = 30\nMultiply eq (1) by 3: 12v − 3t = 120. Add to eq (2): 10v = 150 ⇒ v = 15 km/h.\nThen t = 4(15) − 40 = 20 hours.\nDistance D = 15 × 20 = 300 km.',
    explanationHi:
      'माना सामान्य गति = v km/h और समय = t घंटे (दूरी D = vt)।\n1) (v − 10)(t + 40) = vt ⇒ 4v − t = 40\n2) (v + 15)(t − 10) = vt ⇒ 3t − 2v = 30\nदोनों समीकरण हल करने पर: 10v = 150 ⇒ v = 15 km/h और t = 20 घंटे।\nअतः दूरी = 15 × 20 = 300 km।',
  },
  {
    id: 'cgl26_01o1_q59',
    topic: 'Simplification',
    questionEn:
      'Simplify: (0.05 × 0.05 × 0.05 + 0.04 × 0.04 × 0.04) / (0.05 × 0.05 − 0.05 × 0.04 + 0.04 × 0.04).',
    questionHi:
      'सरल कीजिए: (0.05 × 0.05 × 0.05 + 0.04 × 0.04 × 0.04) / (0.05 × 0.05 − 0.05 × 0.04 + 0.04 × 0.04).',
    optionsEn: ['0.07', '0.09', '0.08', '0.05'],
    optionsHi: ['0.07', '0.09', '0.08', '0.05'],
    correctIndex: 1,
    explanationEn:
      'Let a = 0.05 and b = 0.04. Using the algebraic identity (a³ + b³) / (a² − ab + b²) = a + b:\nValue = 0.05 + 0.04 = 0.09.',
    explanationHi:
      'माना a = 0.05 तथा b = 0.04। सर्वसमिका (a³ + b³) / (a² − ab + b²) = a + b के अनुसार:\nमान = 0.05 + 0.04 = 0.09।',
  },
  {
    id: 'cgl26_01o1_q60',
    topic: 'Simplification',
    questionEn: 'The value of √0.09 + √0.49 + √1.21 + √0.0004 is:',
    questionHi: '√0.09 + √0.49 + √1.21 + √0.0004 का मान ज्ञात कीजिए।',
    optionsEn: ['1.84', '4.06', '3.26', '2.12'],
    optionsHi: ['1.84', '4.06', '3.26', '2.12'],
    correctIndex: 3,
    explanationEn:
      '√0.09 = 0.3, √0.49 = 0.7, √1.21 = 1.1, √0.0004 = 0.02.\nSum = 0.3 + 0.7 + 1.1 + 0.02 = 2.12.',
    explanationHi:
      '√0.09 = 0.3, √0.49 = 0.7, √1.21 = 1.1, √0.0004 = 0.02।\nयोग = 0.3 + 0.7 + 1.1 + 0.02 = 2.12।',
  },
  {
    id: 'cgl26_01o1_q61',
    topic: 'Time, Speed & Distance',
    questionEn:
      'Ram covered the same distance at the speed of 40 km/hr, 45 km/hr and 60 km/hr. What was the average speed of Ram during the whole journey? (Correct to two decimal places.)',
    questionHi:
      'राम ने 40 km/hr, 45 km/hr और 60 km/hr की गति से समान दूरी तय की। पूरी यात्रा के दौरान राम की औसत गति क्या थी? (दो दशमलव स्थानों तक सही।)',
    optionsEn: ['34.87 km/h', '42.80 km/h', '38.96 km/h', '46.96 km/h'],
    optionsHi: ['34.87 km/h', '42.80 km/h', '38.96 km/h', '46.96 km/h'],
    correctIndex: 3,
    explanationEn:
      'Let each equal stretch = LCM(40, 45, 60) = 360 km.\n• Total distance = 3 × 360 = 1080 km\n• Total time = 360/40 + 360/45 + 360/60 = 9 + 8 + 6 = 23 hours\nAverage speed = 1080 / 23 = 46.956... ≈ 46.96 km/h.',
    explanationHi:
      'माना प्रत्येक समान दूरी = LCM(40, 45, 60) = 360 km।\nकुल दूरी = 3 × 360 = 1080 km।\nकुल समय = 360/40 + 360/45 + 360/60 = 9 + 8 + 6 = 23 घंटे।\nऔसत गति = 1080 / 23 ≈ 46.96 km/h।',
  },
  {
    id: 'cgl26_01o1_q62',
    topic: 'Simplification',
    questionEn:
      'Evaluate: [ ((2.7)³ − (1.3)³) / ((2.7)² + 3.51 + (1.3)²) ]².',
    questionHi:
      'मूल्यांकन करें: [ ((2.7)³ − (1.3)³) / ((2.7)² + 3.51 + (1.3)²) ]².',
    optionsEn: ['1.54', '1.96', '2.34', '2.87'],
    optionsHi: ['1.54', '1.96', '2.34', '2.87'],
    correctIndex: 1,
    explanationEn:
      'Notice 2.7 × 1.3 = 3.51. Let a = 2.7, b = 1.3.\nUsing (a³ − b³) / (a² + ab + b²) = a − b, the expression inside the bracket equals 2.7 − 1.3 = 1.4.\nSquaring gives (1.4)² = 1.96.',
    explanationHi:
      'यहाँ 2.7 × 1.3 = 3.51 है। सर्वसमिका (a³ − b³) / (a² + ab + b²) = a − b का प्रयोग करने पर कोष्ठक का मान = 2.7 − 1.3 = 1.4।\nअतः (1.4)² = 1.96।',
  },
  {
    id: 'cgl26_01o1_q63',
    topic: 'Geometry',
    questionEn:
      'In △XYZ, let M be the midpoint of side XY. If the length of the median ZM is 9 cm and G is the centroid, what is the length of segment GM?',
    questionHi:
      '△XYZ में, मान लीजिए M भुजा XY का मध्यबिंदु है। यदि माध्यिका (median) ZM की लंबाई 9 cm है और G केंद्रक (centroid) है, तो रेखाखंड (segment) GM की लंबाई क्या है?',
    optionsEn: ['1 cm', '7 cm', '9 cm', '3 cm'],
    optionsHi: ['1 cm', '7 cm', '9 cm', '3 cm'],
    correctIndex: 3,
    explanationEn:
      'The centroid G divides every median in the ratio 2 : 1 from the vertex to the midpoint (ZG : GM = 2 : 1).\nTherefore, GM = (1/3) × ZM = (1/3) × 9 = 3 cm.',
    explanationHi:
      'केंद्रक G किसी भी माध्यिका को शीर्ष से 2 : 1 के अनुपात में विभाजित करता है (ZG : GM = 2 : 1)।\nअतः GM = (1/3) × 9 = 3 cm।',
  },
  {
    id: 'cgl26_01o1_q64',
    topic: 'Time & Work',
    questionEn:
      'Two workers A and B working together completed a job in 8 days. If A had worked with twice efficiency as he actually did, and B had worked with 60% of efficiency as he actually did, the work would have been completed in 6 days. To complete the job alone, B would require how many days?',
    questionHi:
      'दो व्यक्ति A और B एक साथ काम करते हुए एक कार्य को 8 दिनों में पूरा करते हैं। यदि A ने अपनी वास्तविक क्षमता से दोगुनी क्षमता से कार्य किया होता और B ने अपनी वास्तविक क्षमता के 60% से कार्य किया होता, तो यह कार्य 6 दिनों में पूरा हो जाता। यदि B अकेले कार्य करे, तो वह कार्य कितने दिनों में पूरा करेगा?',
    optionsEn: ['14 3/5 days', '16 4/5 days', '13 2/5 days', '18 1/5 days'],
    optionsHi: ['14 3/5 दिन', '16 4/5 दिन', '13 2/5 दिन', '18 1/5 दिन'],
    correctIndex: 1,
    explanationEn:
      'Equate total work:\n8(A + B) = 6(2A + 0.6B)\n⇒ 8A + 8B = 12A + 3.6B\n⇒ 4.4B = 4A ⇒ A / B = 11 / 10.\nTotal work = 8 × (11 + 10) = 168 units.\nTime for B alone = 168 / 10 = 16.8 days = 16 4/5 days.',
    explanationHi:
      'कुल कार्य बराबर रखने पर:\n8(A + B) = 6(2A + 0.6B) ⇒ 8A + 8B = 12A + 3.6B ⇒ 4.4B = 4A ⇒ A : B = 11 : 10।\nकुल कार्य = 8 × (11 + 10) = 168 इकाई।\nB द्वारा अकेले लिया गया समय = 168 / 10 = 16 4/5 दिन।',
  },
  {
    id: 'cgl26_01o1_q65',
    topic: 'Number System',
    questionEn: 'Which of the following numbers is NOT divisible by 3?',
    questionHi: 'निम्नलिखित में से कौन-सी संख्या 3 से विभाज्य नहीं है?',
    optionsEn: ['98763', '10002', '55554', '71203'],
    optionsHi: ['98763', '10002', '55554', '71203'],
    correctIndex: 3,
    explanationEn:
      'A number is divisible by 3 iff the sum of its digits is divisible by 3:\n• 9+8+7+6+3 = 33 (divisible)\n• 1+0+0+0+2 = 3 (divisible)\n• 5+5+5+5+4 = 24 (divisible)\n• 7+1+2+0+3 = 13 (NOT divisible by 3).',
    explanationHi:
      '3 से विभाज्यता का नियम (अंकों का योग 3 से विभाज्य होना चाहिए):\n• 98763 → 33 (विभाज्य)\n• 10002 → 3 (विभाज्य)\n• 55554 → 24 (विभाज्य)\n• 71203 → 7+1+2+0+3 = 13 (3 से विभाज्य नहीं है)।',
  },
  {
    id: 'cgl26_01o1_q66',
    topic: 'Number System',
    questionEn: 'How many numbers from 50 to 1000 are divisible by 11?',
    questionHi: '50 से 1000 तक कितनी संख्याएँ 11 से विभाज्य हैं?',
    optionsEn: ['75', '86', '65', '96'],
    optionsHi: ['75', '86', '65', '96'],
    correctIndex: 1,
    explanationEn:
      'Multiples of 11 up to 1000 = ⌊1000 / 11⌋ = 90 (last is 990).\nMultiples of 11 below 50 = ⌊49 / 11⌋ = 4 (11, 22, 33, 44).\nCount from 50 to 1000 = 90 − 4 = 86.',
    explanationHi:
      '1000 तक 11 के गुणज = ⌊1000/11⌋ = 90 तथा 50 से कम 11 के गुणज = ⌊49/11⌋ = 4।\nअतः 50 से 1000 तक कुल संख्याएँ = 90 − 4 = 86।',
  },
  {
    id: 'cgl26_01o1_q67',
    topic: 'Time & Work',
    questionEn:
      'P and Q can complete a work in 10 days and 30 days respectively. P starts the work and they work on alternate days. In how many days will the work be completed?',
    questionHi:
      'P और Q एक काम को क्रमशः 10 दिन और 30 दिन में पूरा कर सकते हैं। P काम शुरू करता है और वे बारी-बारी से काम करते हैं। काम कितने दिनों में पूरा होगा?',
    optionsEn: ['7 days', '11 2/3 days', '14 2/3 days', '15 days'],
    optionsHi: ['7 दिन', '11 2/3 दिन', '14 2/3 दिन', '15 दिन'],
    correctIndex: 2,
    explanationEn:
      'Total work = LCM(10, 30) = 30 units.\nEfficiency: P = 3 units/day, Q = 1 unit/day.\nIn 1 cycle (2 days, P + Q) = 4 units.\nIn 7 cycles (14 days) = 7 × 4 = 28 units.\nRemaining 2 units are done by P on Day 15 in 2/3 day ⇒ Total time = 14 2/3 days.',
    explanationHi:
      'कुल कार्य = LCM(10, 30) = 30 इकाई। क्षमता: P = 3, Q = 1।\n2 दिनों (1 चक्र) में कार्य = 3 + 1 = 4 इकाई ⇒ 14 दिनों (7 चक्र) में = 28 इकाई।\nशेष 2 इकाई कार्य P द्वारा 15वें दिन 2/3 दिन में पूरा होगा ⇒ कुल समय = 14 2/3 दिन।',
  },
  {
    id: 'cgl26_01o1_q68',
    topic: 'Height & Distance',
    questionEn:
      'Two ships are sailing on the same side of a lighthouse. The angles of elevation of the top of the lighthouse from them are 30° and 45°. The lighthouse is 60 m high. Find the approximate distance between the ships. (Take √3 = 1.732)',
    questionHi:
      'एक प्रकाशस्तंभ के एक ही ओर दो जहाज चल रहे हैं। उनसे प्रकाशस्तंभ के शीर्ष के उन्नयन कोण क्रमशः 30° और 45° हैं। प्रकाशस्तंभ की ऊँचाई 60 m है। जहाजों के बीच की लगभग दूरी ज्ञात कीजिए। (√3 = 1.732 लें)',
    optionsEn: ['45 m', '44 m', '41 m', '39 m'],
    optionsHi: ['45 m', '44 m', '41 m', '39 m'],
    correctIndex: 1,
    explanationEn:
      'Distance between the two ships on the same side = h(cot 30° − cot 45°) = 60(√3 − 1) = 60(1.732 − 1) = 60 × 0.732 = 43.92 m ≈ 44 m.',
    explanationHi:
      'दोनों जहाजों के बीच की दूरी = h(cot 30° − cot 45°) = 60(1.732 − 1) = 60 × 0.732 = 43.92 m ≈ 44 m।',
  },
  {
    id: 'cgl26_01o1_q69',
    topic: 'Trigonometry',
    questionEn:
      'If tan θ = √3, find the value of (cosec² θ + sec² θ) / (cosec² θ − sec² θ).',
    questionHi:
      'यदि tan θ = √3, तो (cosec² θ + sec² θ) / (cosec² θ − sec² θ) का मान ज्ञात कीजिए।',
    optionsEn: ['−3/2', '2', '3/2', '−2'],
    optionsHi: ['−3/2', '2', '3/2', '−2'],
    correctIndex: 3,
    explanationEn:
      'tan θ = √3 ⇒ θ = 60°. Then cosec 60° = 2/√3 (cosec²θ = 4/3) and sec 60° = 2 (sec²θ = 4).\nValue = (4/3 + 4) / (4/3 − 4) = (16/3) / (−8/3) = −2.',
    explanationHi:
      'tan θ = √3 ⇒ θ = 60°। अतः cosec²60° = 4/3 और sec²60° = 4।\nमान = (4/3 + 4) / (4/3 − 4) = (16/3) / (−8/3) = −2।',
  },
  {
    id: 'cgl26_01o1_q70',
    topic: 'Surds & Simplification',
    questionEn: 'If √2 = 1.414, then find the value of (6 + 2√2) / √2.',
    questionHi: 'यदि √2 = 1.414 है, तो (6 + 2√2) / √2 का मान क्या है?',
    optionsEn: ['2.346', '4.786', '6.242', '8.654'],
    optionsHi: ['2.346', '4.786', '6.242', '8.654'],
    correctIndex: 2,
    explanationEn:
      '(6 + 2√2) / √2 = (6 / √2) + 2 = 3√2 + 2 = 3(1.414) + 2 = 4.242 + 2 = 6.242.',
    explanationHi:
      '(6 + 2√2) / √2 = (6/√2) + 2 = 3√2 + 2 = 3(1.414) + 2 = 4.242 + 2 = 6.242।',
  },
  {
    id: 'cgl26_01o1_q71',
    topic: 'Geometry',
    questionEn:
      'A circle has a diameter of 20 cm. Two equal chords AB and CD are parallel. BC is a diameter of the circle. If chord AB is 6 cm away from the centre, find the length of chord CD (in cm).',
    questionHi:
      'एक वृत्त का व्यास 20 cm है। दो समान जीवाएँ AB और CD समांतर हैं। BC वृत्त का एक व्यास है। यदि जीवा AB केंद्र से 6 cm की दूरी पर है, तो जीवा CD की लंबाई (cm में) ज्ञात कीजिए।',
    optionsEn: ['8 cm', '16 cm', '24 cm', '32 cm'],
    optionsHi: ['8 cm', '16 cm', '24 cm', '32 cm'],
    correctIndex: 1,
    explanationEn:
      'Radius r = 20 / 2 = 10 cm. Distance of AB from centre d = 6 cm.\nHalf of AB = √(10² − 6²) = √(100 − 36) = 8 cm (triplet 6–8–10) ⇒ AB = 16 cm.\nSince AB and CD are equal chords, CD = AB = 16 cm.',
    explanationHi:
      'त्रिज्या r = 20/2 = 10 cm तथा केंद्र से दूरी = 6 cm।\nजीवा AB की आधी लंबाई = √(10² − 6²) = 8 cm ⇒ AB = 16 cm।\nचूँकि AB और CD समान जीवाएँ हैं, अतः CD = 16 cm।',
  },
  {
    id: 'cgl26_01o1_q72',
    topic: 'Geometry',
    questionEn:
      'A tangent is drawn to a circle of radius 55 cm at point A. A chord BC is parallel to this tangent. If the perpendicular distance from centre O to chord BC is 33 cm, what is the length of chord BC?',
    questionHi:
      'एक 55 cm त्रिज्या वाले वृत्त पर बिंदु A पर एक स्पर्श रेखा खींची गई है। एक जीवा BC, इस स्पर्श रेखा के समांतर है। यदि केंद्र O से जीवा BC की लंबवत दूरी 33 cm है, तो जीवा BC की लंबाई क्या है?',
    optionsEn: ['74 cm', '85 cm', '88 cm', '96 cm'],
    optionsHi: ['74 cm', '85 cm', '88 cm', '96 cm'],
    correctIndex: 2,
    explanationEn:
      'Radius r = 55 cm = 11 × 5, distance d = 33 cm = 11 × 3.\nUsing the scaled (3, 4, 5) Pythagorean triplet: half-chord = 11 × 4 = 44 cm.\nFull chord BC = 2 × 44 = 88 cm.',
    explanationHi:
      'त्रिज्या r = 55 = 11 × 5 तथा लंबवत दूरी d = 33 = 11 × 3।\nपाइथागोरस त्रिक (3, 4, 5) × 11 से आधी जीवा = 11 × 4 = 44 cm।\nअतः जीवा BC की पूरी लंबाई = 2 × 44 = 88 cm।',
  },
  {
    id: 'cgl26_01o1_q73',
    topic: 'Mensuration 2D',
    questionEn:
      'A sector of a circle has a perimeter of 45 cm and its radius is 12 cm. Find the angle of the sector in radians.',
    questionHi:
      'किसी वृत्त के एक सेक्टर का परिमाप 45 cm है और उसकी त्रिज्या 12 cm है। सेक्टर का कोण रेडियन में ज्ञात कीजिए।',
    optionsEn: [
      '1.75 radians',
      '2.54 radians',
      '3.65 radians',
      '5.78 radians',
    ],
    optionsHi: [
      '1.75 रेडियन',
      '2.54 रेडियन',
      '3.65 रेडियन',
      '5.78 रेडियन',
    ],
    correctIndex: 0,
    explanationEn:
      'Perimeter of sector = 2r + l = 45 cm.\nGiven r = 12 cm ⇒ arc length l = 45 − 2(12) = 45 − 24 = 21 cm.\nAngle in radians θ = l / r = 21 / 12 = 7/4 = 1.75 radians.',
    explanationHi:
      'सेक्टर का परिमाप = 2r + l = 45 cm ⇒ चाप की लंबाई l = 45 − 24 = 21 cm।\nकोण (रेडियन में) θ = l / r = 21 / 12 = 1.75 रेडियन।',
  },
  {
    id: 'cgl26_01o1_q74',
    topic: 'Algebra',
    questionEn:
      'If the expression 64x² + kxy + 81y² is a perfect square, what are the possible values of k?',
    questionHi:
      'यदि व्यंजक 64x² + kxy + 81y² एक पूर्ण वर्ग है, तो k के संभावित मान क्या हैं?',
    optionsEn: ['±72', '±102', '36', '±144'],
    optionsHi: ['±72', '±102', '36', '±144'],
    correctIndex: 3,
    explanationEn:
      'Compare with (a ± b)² = a² ± 2ab + b², where a = 8x and b = 9y.\nMiddle term kxy = ±2(8x)(9y) = ±144xy ⇒ k = ±144.',
    explanationHi:
      '(a ± b)² = a² ± 2ab + b² से तुलना करने पर: a = 8x, b = 9y।\nमध्य पद = ±2 × 8x × 9y = ±144xy ⇒ k = ±144।',
  },
  {
    id: 'cgl26_01o1_q75',
    topic: 'Geometry',
    questionEn:
      'Two identical circles, each of radius r, are placed such that the distance between their centers is d. What is the ratio of the length of their direct common tangent segment to the distance between their centers?',
    questionHi:
      'दो समान वृत्त जिनमें से प्रत्येक की त्रिज्या r है, इस प्रकार अवस्थित हैं कि उनके केंद्रों के बीच की दूरी d है। उनके सीधे उभयनिष्ठ स्पर्शरेखा खंड की लंबाई और उनके केंद्रों के बीच की दूरी का अनुपात क्या है?',
    optionsEn: ['1 : 1', 'r : d', '√(d² / 4r²) : d', '2d : r'],
    optionsHi: ['1 : 1', 'r : d', '√(d² / 4r²) : d', '2d : r'],
    correctIndex: 0,
    explanationEn:
      'Length of Direct Common Tangent (DCT) = √[d² − (r₁ − r₂)²].\nSince the circles are identical (r₁ = r₂ = r), DCT = √(d² − 0) = d.\nTherefore, Ratio (DCT : d) = d : d = 1 : 1.',
    explanationHi:
      'सीधी उभयनिष्ठ स्पर्शरेखा (DCT) की लंबाई = √[d² − (r₁ − r₂)²]।\nचूँकि दोनों वृत्त समान हैं (r₁ = r₂ = r), अतः DCT = √(d² − 0) = d।\nइसलिए अभीष्ट अनुपात = d : d = 1 : 1।',
  },
];
