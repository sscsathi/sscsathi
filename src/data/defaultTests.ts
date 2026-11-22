import { MockTest } from '../types/exam';
import { FULL_MOCK_30_SEPT_SHIFT2 } from './mock30SeptShift2';
import { FULL_MOCK_30_SEPT_SHIFT3 } from './mock30SeptShift3';
import { FULL_MOCK_01_OCT_SHIFT1 } from './mock01OctShift1';
import { FULL_MOCK_01_OCT_SHIFT2 } from './mock01OctShift2';
import { FULL_MOCK_01_OCT_SHIFT3 } from './mock01OctShift3';

// Keep full mocks in chronological exam order (oldest shift first; append newer shifts below)
export const DEFAULT_MOCK_TESTS: MockTest[] = [
  FULL_MOCK_30_SEPT_SHIFT2,
  FULL_MOCK_30_SEPT_SHIFT3,
  FULL_MOCK_01_OCT_SHIFT1,
  FULL_MOCK_01_OCT_SHIFT2,
  FULL_MOCK_01_OCT_SHIFT3,
  {
    id: 'ssc-cgl-30-sept-shift2-math-2026-pyq-1',
    title: '30 Sept Shift 2 Math 2026 PYQ Mock Test 1',
    subtitle: 'Full 25-question bilingual Quantitative Aptitude PYQ paper in English & Hindi',
    category: 'Quantitative Aptitude',
    examTags: ['CGL'],
    seriesType: 'pyq',
    pyqFormat: 'sectional',
    durationMinutes: 15,
    positiveMarks: 2,
    negativeMarks: 0.5,
    createdAt: '2026-11-19T00:45:00.000Z',
    questions: [
      {
        id: 's30s2_q1',
        topic: 'Simple Interest',
        questionEn:
          'A sum of money amounts to Rs. 825 in 3 years and to Rs. 950 in 4 years at some rate of simple interest. The sum is:',
        questionHi:
          'एक धनराशि साधारण ब्याज की किसी दर पर 3 वर्षों में 825 रुपये और 4 वर्षों में 950 रुपये हो जाती है। धनराशि है:',
        optionsEn: ['400/-', '410/-', '450/-', '550/-'],
        optionsHi: ['400/-', '410/-', '450/-', '550/-'],
        correctIndex: 2,
        explanationEn:
          'SI for 1 year = 950 - 825 = Rs. 125. Therefore, SI for 3 years = 125 × 3 = Rs. 375. Principal = 825 - 375 = Rs. 450.',
      },
      {
        id: 's30s2_q2',
        topic: 'Mensuration',
        questionEn:
          "A toy is in the form of a hemisphere surmounted by a cone. The radius of the hemisphere is 3 cm and the cone's height is 4 cm. Find the total volume of the toy (use π = 3.14).",
        questionHi:
          'एक खिलौना एक अर्धगोले के आकार का है जिसके ऊपर एक शंकु रखा हुआ है। अर्धगोले की त्रिज्या 3 सेमी है और शंकु की ऊंचाई 4 सेमी है। खिलौने का कुल आयतन ज्ञात कीजिए (π = 3.14 का प्रयोग करें):',
        optionsEn: ['113.04 cm³', '94.2 cm³', '188.4 cm³', '62.8 cm³'],
        optionsHi: ['113.04 सेमी³', '94.2 सेमी³', '188.4 सेमी³', '62.8 सेमी³'],
        correctIndex: 1,
        explanationEn:
          'Total Volume = (2/3)πr³ + (1/3)πr²h = (1/3)πr²(2r + h) = (1/3) × 3.14 × 9 × (6 + 4) = 94.2 cm³.',
      },
      {
        id: 's30s2_q3',
        topic: 'Algebra',
        questionEn: 'Solve: (x + 2)² - (x - 2)²',
        questionHi: 'हल करें: (x + 2)² - (x - 2)²',
        optionsEn: ['8x', '2x + 4', '16x', 'x²'],
        optionsHi: ['8x', '2x + 4', '16x', 'x²'],
        correctIndex: 0,
        explanationEn:
          'Using identity (a + b)² - (a - b)² = 4ab, we get 4 × x × 2 = 8x.',
      },
      {
        id: 's30s2_q4',
        topic: 'Mensuration',
        questionEn: 'If the diameter of a circle is 28 cm, then its area is:',
        questionHi: 'यदि किसी वृत्त का व्यास 28 सेंटीमीटर है, तो उसका क्षेत्रफल है:',
        optionsEn: ['154 cm²', '616 cm²', '308 cm²', '484 cm²'],
        optionsHi: [
          '154 वर्ग सेंटीमीटर',
          '616 वर्ग सेंटीमीटर',
          '308 वर्ग सेंटीमीटर',
          '484 वर्ग सेंटीमीटर',
        ],
        correctIndex: 1,
        explanationEn:
          'Radius r = 28/2 = 14 cm. Area = πr² = (22/7) × 14 × 14 = 616 cm².',
      },
      {
        id: 's30s2_q5',
        topic: 'Trigonometry',
        questionEn:
          'If tan A + cot A = 2 and A is an acute angle, find the value of tan⁴ A + cot⁴ A.',
        questionHi:
          'अगर tan A + cot A = 2 तथा A एक न्यून कोण है, तो tan⁴ A + cot⁴ A का मान ज्ञात कीजिए।',
        optionsEn: ['2', '20', '22', '24'],
        optionsHi: ['2', '20', '22', '24'],
        correctIndex: 0,
        explanationEn:
          'tan A + cot A = 2 holds when A = 45° (tan 45° = 1, cot 45° = 1). Thus, 1⁴ + 1⁴ = 2.',
      },
      {
        id: 's30s2_q6',
        topic: 'Mensuration',
        questionEn:
          'A cone has a height of 8 cm and a slant height of 10 cm. What is the volume of the cone?',
        questionHi:
          'एक शंकु की ऊँचाई 8 सेंटीमीटर और तिर्यक ऊँचाई 10 सेमी है। शंकु का आयतन क्या है?',
        optionsEn: ['301.71 cm³', '304 cm³', '305.75 cm³', '308.76 cm³'],
        optionsHi: [
          '301.71 घन सेंटीमीटर',
          '304 घन सेंटीमीटर',
          '305.75 घन सेंटीमीटर',
          '308.76 घन सेंटीमीटर',
        ],
        correctIndex: 0,
        explanationEn:
          'Using Pythagoras triplet (6, 8, 10), radius r = 6 cm. Volume = (1/3) × (22/7) × 36 × 8 = 2112 / 7 = 301.71 cm³.',
      },
      {
        id: 's30s2_q7',
        topic: 'Mensuration',
        questionEn:
          'A pyramid has a rectangular base with dimensions 6 cm by 8 cm. If the height of the pyramid is 1.5 times the longer side of the base, calculate the volume of the pyramid.',
        questionHi:
          'एक पिरामिड का आयताकार आधार 6 सेंटीमीटर × 8 सेंटीमीटर माप का है। यदि पिरामिड की ऊँचाई, आधार की लंबी भुजा की 1.5 गुना है, तो पिरामिड का आयतन ज्ञात कीजिए।',
        optionsEn: ['282 cm³', '262 cm³', '252 cm³', '192 cm³'],
        optionsHi: [
          '282 घन सेंटीमीटर',
          '262 घन सेंटीमीटर',
          '252 घन सेंटीमीटर',
          '192 घन सेंटीमीटर',
        ],
        correctIndex: 3,
        explanationEn:
          'Base Area = 6 × 8 = 48 cm². Height = 1.5 × 8 = 12 cm. Volume = (1/3) × 48 × 12 = 192 cm³.',
      },
      {
        id: 's30s2_q8',
        topic: 'Coordinate Geometry',
        questionEn: 'What is the distance between points A(2, 3) and B(5, 7)?',
        questionHi: 'बिंदु A(2, 3) और B(5, 7) के बीच की दूरी क्या है?',
        optionsEn: ['4 units', '6 units', '7 units', '5 units'],
        optionsHi: ['4 यूनिट्स', '6 यूनिट्स', '7 यूनिट्स', '5 यूनिट्स'],
        correctIndex: 3,
        explanationEn:
          'Distance = √[(5 - 2)² + (7 - 3)²] = √(3² + 4²) = √25 = 5 units.',
      },
      {
        id: 's30s2_q9',
        topic: 'Geometry',
        questionEn:
          'In △ABC, a line DE is drawn parallel to BC, intersecting AB at D and AC at E. If AD = 3 cm, DB = 2 cm, and DE = 4 cm, what is the length of BC?',
        questionHi:
          '△ABC में, BC के समानांतर एक रेखा DE खींची गई है, जो AB को D पर तथा AC को E पर प्रतिच्छेद करती है। यदि AD = 3 सेमी, DB = 2 सेमी, तथा DE = 4 सेमी है, तो BC की लंबाई क्या है?',
        optionsEn: ['5 cm', '6 cm', '3/20 cm', '20/3 cm'],
        optionsHi: ['5 सेमी', '6 सेमी', '3/20 सेमी', '20/3 सेमी'],
        correctIndex: 3,
        explanationEn:
          'Since DE || BC, △ADE ~ △ABC => AD / AB = DE / BC => 3 / 5 = 4 / BC => BC = 20/3 cm.',
      },
      {
        id: 's30s2_q10',
        topic: 'Algebra',
        questionEn:
          'If x = 1.5 and y = 0.5, find the value of [(x³ - y³) / (x² + xy + y²)] + [(x³ + y³) / (x² - xy + y²)].',
        questionHi:
          'यदि x = 1.5 और y = 0.5 हैं, तो [(x³ - y³) / (x² + xy + y²)] + [(x³ + y³) / (x² - xy + y²)] का मान ज्ञात कीजिए:',
        optionsEn: ['1', '3', '2', '4'],
        optionsHi: ['1', '3', '2', '4'],
        correctIndex: 1,
        explanationEn:
          'The expression simplifies to (x - y) + (x + y) = 2x = 2 × 1.5 = 3.',
      },
      {
        id: 's30s2_q11',
        topic: 'Time & Work',
        questionEn:
          'A and B can complete a piece of work in 15 days and 20 days respectively. They work on alternate days, starting with A. In how many days will the work be completed?',
        questionHi:
          'A और B क्रमशः 15 दिन और 20 दिन में एक कार्य पूरा कर सकते हैं। वे एक दिन छोड़कर (alternate days) काम करते हैं, और A से शुरुआत होती है। कार्य कितने दिनों में पूरा होगा?',
        optionsEn: ['12 days', '15 days', '25 days', '17 days'],
        optionsHi: ['12 दिन', '15 दिन', '25 दिन', '17 दिन'],
        correctIndex: 3,
        explanationEn:
          'Total work = LCM(15, 20) = 60 units. A does 4 units/day and B does 3 units/day. In 2 days (A + B) = 7 units; in 16 days = 56 units. Remaining 4 units are completed by A on Day 17. Total = 17 days.',
      },
      {
        id: 's30s2_q12',
        topic: 'Ratio & Proportion',
        questionEn:
          "An amount of ₹33,630 is distributed among A, B, and C. The ratio of A's share to B's share is 3 : 7, and the ratio of B's share to C's share is 6 : 5. Find the amount of money received by B.",
        questionHi:
          '₹33,630 की एक राशि A, B और C के बीच वितरित की जाती है। A के हिस्से और B के हिस्से का अनुपात 3 : 7 है, तथा B के हिस्से और C के हिस्से का अनुपात 6 : 5 है। B द्वारा प्राप्त धनराशि ज्ञात कीजिए।',
        optionsEn: ['₹13,290', '₹14,868', '₹15,327', '₹16,400'],
        optionsHi: ['₹13,290', '₹14,868', '₹15,327', '₹16,400'],
        correctIndex: 1,
        explanationEn:
          "Ratio A : B : C = 18 : 42 : 35 (Total = 95). B's share = (42 / 95) × 33630 = ₹14,868.",
      },
      {
        id: 's30s2_q13',
        topic: 'Partnership',
        questionEn:
          'In a company, A is a working partner, and B is a sleeping partner. The investment of A is ₹12,000, and that of B is ₹20,000. The percentage of management charge is 10% of the total gain to be received by A. The total gain is ₹9,600. What is the total gain of A?',
        questionHi:
          'एक कंपनी में, A एक वर्किंग पार्टनर है, और B एक स्लीपिंग पार्टनर है। A का निवेश ₹12,000 है, और B का निवेश ₹20,000 है। मैनेजमेंट चार्ज का प्रतिशत कुल लाभ का 10% है, जो A को मिलेगा। कुल लाभ ₹9,600 है। A का कुल लाभ कितना है?',
        optionsEn: ['₹3,240', '₹3,600', '₹4,140', '₹4,200'],
        optionsHi: ['₹3,240', '₹3,600', '₹4,140', '₹4,200'],
        correctIndex: 3,
        explanationEn:
          "A's management charge = 10% of 9600 = ₹960. Remaining profit = ₹8,640 split in ratio 3 : 5 => A gets (3/8) × 8640 = ₹3,240. Total gain of A = 960 + 3240 = ₹4,200.",
      },
      {
        id: 's30s2_q14',
        topic: 'Percentage',
        questionEn:
          'In an election, 10% of the voters did not vote, while 150 votes were found to be invalid. There were only two candidates. The winner secured 55% of the total voters and defeated the opponent by 1100 votes. Find the total number of voters.',
        questionHi:
          'एक चुनाव में, 10% मतदाताओं ने वोट नहीं दिया, जबकि 150 वोट अमान्य पाए गए। चुनाव में केवल दो उम्मीदवार थे। जीतने वाले उम्मीदवार को कुल मतदाताओं के 55% वोट मिले और उसने अपने विरोधी को 1100 वोटों से हराया। मतदाताओं की कुल संख्या ज्ञात कीजिए।',
        optionsEn: ['5360', '6230', '3440', '4750'],
        optionsHi: ['5360', '6230', '3440', '4750'],
        correctIndex: 3,
        explanationEn:
          'Let total voters = 100x. Valid votes = 90x - 150. Winner = 55x, Loser = 35x - 150. Difference: 55x - (35x - 150) = 1100 => 20x = 950 => x = 47.5 => Total = 4750.',
      },
      {
        id: 's30s2_q15',
        topic: 'Mensuration',
        questionEn:
          'A hexagon is drawn inside a circle with a radius of 21 cm. Determine the area of the hexagon.',
        questionHi:
          '21 सेमी त्रिज्या वाले एक वृत्त के अंदर एक षट्भुज बनाया गया है। षट्भुज का क्षेत्रफल ज्ञात कीजिए।',
        optionsEn: ['611.5√9 cm²', '661.5√3 cm²', '621.5√7 cm²', '641.5√5 cm²'],
        optionsHi: ['611.5√9 सेमी²', '661.5√3 सेमी²', '621.5√7 सेमी²', '641.5√5 सेमी²'],
        correctIndex: 1,
        explanationEn:
          'Side of inscribed regular hexagon = Radius = 21 cm. Area = 6 × (√3/4) × 21² = (3√3 / 2) × 441 = 661.5√3 cm².',
      },
      {
        id: 's30s2_q16',
        topic: 'Profit & Loss',
        questionEn:
          'A dealer sold two sets of headphones for ₹990 each. On one he gained 10% and on the other he lost 10%. Find the total loss or gain percentage.',
        questionHi:
          'एक विक्रेता ने दो हेडफ़ोन सेटों में से प्रत्येक को ₹990 में बेचा। एक पर उसे 10% का लाभ हुआ और दूसरे पर 10% की हानि हुई। कुल लाभ या हानि प्रतिशत ज्ञात कीजिए।',
        optionsEn: ['1% gain', '1% loss', '2% loss', 'No loss or gain'],
        optionsHi: ['1% लाभ', '1% हानि', '2% हानि', 'न कोई हानि, न कोई लाभ'],
        correctIndex: 1,
        explanationEn:
          'Same SP with x% gain and x% loss always yields a net loss of (x² / 100)% = (100 / 100)% = 1% loss.',
      },
      {
        id: 's30s2_q17',
        topic: 'Discount',
        questionEn:
          'A laptop has a marked price of ₹80,000. It is sold after giving successive discounts of 15%, 20% and 10%. Find the selling price.',
        questionHi:
          'एक लैपटॉप का अंकित मूल्य ₹80,000 है। इसे 15%, 20% और 10% की क्रमिक छूट देने के बाद बेचा जाता है। इसका विक्रय मूल्य ज्ञात कीजिए।',
        optionsEn: ['₹54,400', '₹47,620', '₹50,240', '₹48,960'],
        optionsHi: ['₹54,400', '₹47,620', '₹50,240', '₹48,960'],
        correctIndex: 3,
        explanationEn:
          'SP = 80,000 × 0.85 × 0.80 × 0.90 = ₹48,960.',
      },
      {
        id: 's30s2_q18',
        topic: 'Trigonometry',
        questionEn:
          'If sin A + cos A = 5/4, then find the value of tan A + cot A.',
        questionHi:
          'यदि sin A + cos A = 5/4 है, तो tan A + cot A का मान ज्ञात कीजिए।',
        optionsEn: ['32/9', '25/16', '9/32', '16/25'],
        optionsHi: ['32/9', '25/16', '9/32', '16/25'],
        correctIndex: 0,
        explanationEn:
          'Squaring both sides: 1 + 2 sin A cos A = 25/16 => sin A cos A = 9/32. Thus, tan A + cot A = 1 / (sin A cos A) = 32/9.',
      },
      {
        id: 's30s2_q19',
        topic: 'Simplification',
        questionEn: 'If √2 = 1.414, then find the value of (4 + √2) / √2.',
        questionHi: 'यदि √2 = 1.414 है, तो (4 + √2) / √2 का मान ज्ञात कीजिए।',
        optionsEn: ['2.124', '2.342', '3.167', '3.828'],
        optionsHi: ['2.124', '2.342', '3.167', '3.828'],
        correctIndex: 3,
        explanationEn:
          '(4 / √2) + (√2 / √2) = 2√2 + 1 = 2(1.414) + 1 = 3.828.',
      },
      {
        id: 's30s2_q20',
        topic: 'Algebra',
        questionEn: 'If x + 1/x = 3√2, then find the value of x / (x² - 1).',
        questionHi: 'यदि x + 1/x = 3√2 है, तो x / (x² - 1) का मान ज्ञात कीजिए।',
        optionsEn: ['1/√14', '1/√12', '1/√18', '1/√10'],
        optionsHi: ['1/√14', '1/√12', '1/√18', '1/√10'],
        correctIndex: 0,
        explanationEn:
          'Dividing numerator and denominator by x gives 1 / (x - 1/x). Since x - 1/x = √(18 - 4) = √14, answer = 1/√14.',
      },
      {
        id: 's30s2_q21',
        topic: 'Geometry',
        questionEn:
          'In a circle of radius 61 cm, two equal parallel chords lie on opposite sides of the centre. The distance between the chords is 22 cm. Find the length of each chord.',
        questionHi:
          '61 सेमी त्रिज्या वाले एक वृत्त में, दो समान समानांतर जीवाएं केंद्र के विपरीत पक्षों पर स्थित हैं। जीवाओं के बीच की दूरी 22 सेमी है। प्रत्येक जीवा की लंबाई ज्ञात कीजिए।',
        optionsEn: ['30 cm', '60 cm', '90 cm', '120 cm'],
        optionsHi: ['30 सेमी', '60 सेमी', '90 सेमी', '120 सेमी'],
        correctIndex: 3,
        explanationEn:
          'Distance from centre = 22/2 = 11 cm. By Pythagoras triplet (11, 60, 61), half-chord = 60 cm => full chord = 120 cm.',
      },
      {
        id: 's30s2_q22',
        topic: 'Geometry',
        questionEn:
          'A tangent is drawn from external point Q to a circle having a centre O, touching at T. OT = 6 cm and OQ = 10 cm. What is the area of triangle OTQ?',
        questionHi:
          'एक बाह्य बिंदु Q से केंद्र O वाले एक वृत्त पर एक स्पर्श रेखा खींची गई है, जो T पर स्पर्श करती है। OT = 6 cm और OQ = 10 cm है। त्रिभुज OTQ का क्षेत्रफल क्या है?',
        optionsEn: ['14 cm²', '18 cm²', '24 cm²', '28 cm²'],
        optionsHi: ['14 सेमी²', '18 सेमी²', '24 सेमी²', '28 सेमी²'],
        correctIndex: 2,
        explanationEn:
          '∠OTQ = 90°. Using triplet (6, 8, 10), tangent TQ = 8 cm. Area = (1/2) × 6 × 8 = 24 cm².',
      },
      {
        id: 's30s2_q23',
        topic: 'Mensuration',
        questionEn:
          'Arcs of two circles with radii 15 cm and 20 cm subtend angles of 60° and 45° at their respective centres. What is the ratio of their arc lengths?',
        questionHi:
          '15 cm और 20 cm त्रिज्या वाले दो वृत्तों की चापें अपने-अपने केन्द्रों पर क्रमशः 60° और 45° के कोण बनाती हैं। उनकी चापों की लंबाइयों का अनुपात क्या है?',
        optionsEn: ['1 : 2', '3 : 1', '1 : 1', '2 : 3'],
        optionsHi: ['1 : 2', '3 : 1', '1 : 1', '2 : 3'],
        correctIndex: 2,
        explanationEn:
          'Ratio of arc lengths = (15 × 60) : (20 × 45) = 900 : 900 = 1 : 1.',
      },
      {
        id: 's30s2_q24',
        topic: 'Geometry',
        questionEn:
          'Two circles with radii 5 cm and 3 cm have their centers separated by a distance of d cm. If the length of their direct common tangent is exactly twice the length of their transverse common tangent, find the value of d².',
        questionHi:
          'दो वृत्त जिनकी त्रिज्याएँ 5 cm और 3 cm हैं, उनके केन्द्रों के बीच की दूरी d cm है। यदि उनकी प्रत्यक्ष सामान्य स्पर्शरेखा की लंबाई, उनकी तिर्यक (transverse) सामान्य स्पर्शरेखा की लंबाई की ठीक दोगुनी है, तो d² का मान ज्ञात कीजिए।',
        optionsEn: ['84 cm', '79 cm', '51 cm', '105 cm'],
        optionsHi: ['84 सेमी', '79 सेमी', '51 सेमी', '105 सेमी'],
        correctIndex: 0,
        explanationEn:
          'DCT = √(d² - 4), TCT = √(d² - 64). Given DCT = 2 × TCT => d² - 4 = 4(d² - 64) => 3d² = 252 => d² = 84.',
      },
      {
        id: 's30s2_q25',
        topic: 'Mixture & Alligation',
        questionEn:
          'A vessel contains 90 litres of a mixture of milk and water in the ratio 8 : 7. How many litres of the mixture should be removed and replaced with pure water so that the ratio of milk to water in the resulting mixture becomes 4 : 5?',
        questionHi:
          'एक पात्र में दूध और जल का 90 लीटर मिश्रण 8 : 7 के अनुपात में है। मिश्रण में से कितने लीटर निकालकर उसके स्थान पर उतनी ही मात्रा में शुद्ध जल डाला जाए ताकि परिणामी मिश्रण में दूध और जल का अनुपात 4 : 5 हो जाए?',
        optionsEn: ['15 litres', '12 litres', '6 litres', '9 litres'],
        optionsHi: ['15 लीटर', '12 लीटर', '6 लीटर', '9 लीटर'],
        correctIndex: 0,
        explanationEn:
          'Initial Milk = (8/15) × 90 = 48 L. Final Milk = (4/9) × 90 = 40 L. Fraction replaced = (48 - 40) / 48 = 1/6 => Quantity replaced = (1/6) × 90 = 15 litres.',
      },
    ],
  },
];
