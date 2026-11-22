import { Question } from '../../../types/exam';

export const SECTION_3_QUANT_O5S2: Question[] = [
  {
    id: 'cgl26_05o2_q51',
    topic: 'Mensuration 3D (Sphere)',
    questionEn:
      'A sphere has a volume of 512π cm³. What percentage increase in its radius is needed to achieve a volume of 2048π cm³?',
    questionHi:
      'एक गोले का आयतन 512π cm³ है। 2048π cm³ का आयतन प्राप्त करने के लिए इसकी त्रिज्या में कितने प्रतिशत की वृद्धि आवश्यक है?',
    optionsEn: ['59%', '100%', '150%', '200%'],
    optionsHi: ['59%', '100%', '150%', '200%'],
    correctIndex: 0,
    explanationEn:
      'Volume of a sphere is proportional to r³.\nV₂ / V₁ = 2048π / 512π = 4.\nTherefore, (r₂ / r₁)³ = 4 ⇒ r₂ / r₁ = ∛4 ≈ 1.5874.\nPercentage increase in radius = (1.5874 − 1) × 100% ≈ 58.74% ≈ 59%.',
    explanationHi:
      'गोले का आयतन उसकी त्रिज्या के घन (r³) के समानुपाती होता है।\nV₂ / V₁ = 2048π / 512π = 4।\nअतः r₂ / r₁ = ∛4 ≈ 1.5874।\nत्रिज्या में प्रतिशत वृद्धि = (1.5874 − 1) × 100% ≈ 58.74% ≈ 59%।',
  },
  {
    id: 'cgl26_05o2_q52',
    topic: 'Mensuration 2D (Circle)',
    questionEn:
      'A wire of length 132 cm is bent into a circle. What is the radius of the circle?',
    questionHi:
      '132 cm लंबाई के एक तार को मोड़कर एक वृत्त बनाया जाता है। वृत्त की त्रिज्या क्या है?',
    optionsEn: ['21 cm', '18 cm', '22 cm', '14 cm'],
    optionsHi: ['21 cm', '18 cm', '22 cm', '14 cm'],
    correctIndex: 0,
    explanationEn:
      'Circumference of the circle = 2πr = 132 cm.\n2 × (22/7) × r = 132 ⇒ (44/7) × r = 132 ⇒ r = (132 × 7) / 44 = 21 cm.',
    explanationHi:
      'वृत्त की परिधि = 2πr = 132 cm।\n2 × (22/7) × r = 132 ⇒ r = (132 × 7) / 44 = 21 cm।',
  },
  {
    id: 'cgl26_05o2_q53',
    topic: 'Trigonometry',
    questionEn: 'Simplify: (1 − cos² θ)(1 + tan² θ)',
    questionHi: 'सरल कीजिए: (1 − cos² θ)(1 + tan² θ)',
    optionsEn: ['1', 'cot² θ', 'sin² θ · sec² θ', 'sec² θ'],
    optionsHi: ['1', 'cot² θ', 'sin² θ · sec² θ', 'sec² θ'],
    correctIndex: 2,
    explanationEn:
      'Using standard trigonometric identities:\n1 − cos² θ = sin² θ and 1 + tan² θ = sec² θ.\nSubstituting both gives: (1 − cos² θ)(1 + tan² θ) = sin² θ · sec² θ.',
    explanationHi:
      'मानक त्रिकोणमितीय सर्वसमिकाओं का उपयोग करने पर:\n1 − cos² θ = sin² θ और 1 + tan² θ = sec² θ।\nअतः (1 − cos² θ)(1 + tan² θ) = sin² θ · sec² θ।',
  },
  {
    id: 'cgl26_05o2_q54',
    topic: 'Mensuration 3D (Cone)',
    questionEn:
      'The height of a cone is 27 cm, and its volume is 81π cm³. What is the diameter of its base?',
    questionHi:
      'एक शंकु की ऊँचाई 27 cm है और इसका आयतन 81π cm³ है। इसके आधार का व्यास क्या है?',
    optionsEn: ['8 cm', '16 cm', '7 cm', '6 cm'],
    optionsHi: ['8 cm', '16 cm', '7 cm', '6 cm'],
    correctIndex: 3,
    explanationEn:
      'Volume of a cone = (1/3)πr²h = 81π.\n(1/3) × r² × 27 = 81 ⇒ 9r² = 81 ⇒ r² = 9 ⇒ r = 3 cm.\nDiameter = 2r = 2 × 3 = 6 cm.',
    explanationHi:
      'शंकु का आयतन = (1/3)πr²h = 81π।\n(1/3) × r² × 27 = 81 ⇒ 9r² = 81 ⇒ r = 3 cm।\nअतः आधार का व्यास = 2r = 6 cm।',
  },
  {
    id: 'cgl26_05o2_q55',
    topic: 'Mensuration 3D (Pyramid)',
    questionEn:
      'Find the volume of a triangular pyramid whose base has sides 5 cm, 5 cm, and 6 cm, and height is 8 cm.',
    questionHi:
      'एक त्रिभुजाकार पिरामिड का आयतन ज्ञात कीजिए जिसके आधार की भुजाएँ 5 cm, 5 cm और 6 cm हैं तथा ऊँचाई 8 cm है।',
    optionsEn: ['16 cm³', '18 cm³', '10 cm³', '32 cm³'],
    optionsHi: ['16 cm³', '18 cm³', '10 cm³', '32 cm³'],
    correctIndex: 3,
    explanationEn:
      'For the isosceles triangular base with sides 5, 5, 6 cm:\nSemi-perimeter s = (5 + 5 + 6)/2 = 8 cm.\nBase Area = √(8 × 3 × 3 × 2) = √144 = 12 cm².\nVolume of pyramid = (1/3) × Base Area × Height = (1/3) × 12 × 8 = 32 cm³.',
    explanationHi:
      '5 cm, 5 cm और 6 cm भुजाओं वाले त्रिभुजाकार आधार के लिए:\nअर्ध-परिमाप s = (5 + 5 + 6)/2 = 8 cm।\nआधार का क्षेत्रफल = √(8 × 3 × 3 × 2) = 12 cm²।\nपिरामिड का आयतन = (1/3) × आधार का क्षेत्रफल × ऊँचाई = (1/3) × 12 × 8 = 32 cm³।',
  },
  {
    id: 'cgl26_05o2_q56',
    topic: 'Algebra',
    questionEn:
      'Find the value of (p³ − q³) / (p − q) − 3pq, if p = 7.85 and q = 2.15.',
    questionHi:
      'यदि p = 7.85 और q = 2.15 हो, तो (p³ − q³) / (p − q) − 3pq का मान ज्ञात कीजिए।',
    optionsEn: ['18.76', '32.49', '25.87', '49.87'],
    optionsHi: ['18.76', '32.49', '25.87', '49.87'],
    correctIndex: 1,
    explanationEn:
      'Using p³ − q³ = (p − q)(p² + pq + q²):\n(p³ − q³) / (p − q) − 3pq = (p² + pq + q²) − 3pq = p² − 2pq + q² = (p − q)².\nGiven p − q = 7.85 − 2.15 = 5.7.\nTherefore, (p − q)² = 5.7² = 32.49.',
    explanationHi:
      'p³ − q³ = (p − q)(p² + pq + q²) का प्रयोग करने पर:\n(p³ − q³) / (p − q) − 3pq = p² + pq + q² − 3pq = (p − q)²।\np − q = 7.85 − 2.15 = 5.7 ⇒ (5.7)² = 32.49।',
  },
  {
    id: 'cgl26_05o2_q57',
    topic: 'Ratio & Percentage',
    questionEn:
      '40% of Asha’s income is equal to 50% of Neha’s income. If Asha’s income is reduced by ₹200 while Neha’s remains unchanged, the new ratio of their incomes becomes 3 : 4. Find Neha’s income.',
    questionHi:
      'आशा की आय का 40% नेहा की आय के 50% के बराबर है। यदि आशा की आय में ₹200 की कमी कर दी जाए जबकि नेहा की आय अपरिवर्तित रहे, तो उनकी आय का नया अनुपात 3 : 4 हो जाता है। नेहा की आय ज्ञात कीजिए।',
    optionsEn: ['₹350', '₹700', '₹630', '₹400'],
    optionsHi: ['₹350', '₹700', '₹630', '₹400'],
    correctIndex: 3,
    explanationEn:
      '40% of A = 50% of N ⇒ A / N = 5 / 4.\nLet Asha’s income = 5k and Neha’s income = 4k.\nAccording to the question: (5k − 200) / (4k) = 3 / 4.\n5k − 200 = 3k ⇒ 2k = 200 ⇒ k = 100.\nHence, Neha’s income = 4k = ₹400.',
    explanationHi:
      'A का 40% = N का 50% ⇒ A : N = 5 : 4।\nमाना आशा की आय = 5k तथा नेहा की आय = 4k।\nप्रश्नानुसार, (5k − 200) / (4k) = 3 / 4 ⇒ 5k − 200 = 3k ⇒ 2k = 200 ⇒ k = 100।\nअतः नेहा की आय = 4k = ₹400।',
  },
  {
    id: 'cgl26_05o2_q58',
    topic: 'Partnership',
    questionEn:
      'P, Q, and R enter into a partnership. P invests 3 times as much as Q, and Q invests 2/3 of what R invests. At the end of the year, the total profit is ₹1,32,000. What is the share of Q?',
    questionHi:
      'P, Q और R एक साझेदारी में प्रवेश करते हैं। P, Q से 3 गुना निवेश करता है और Q, R के निवेश का 2/3 निवेश करता है। वर्ष के अंत में कुल लाभ ₹1,32,000 है। Q का हिस्सा क्या है?',
    optionsEn: ['₹20,000', '₹48,000', '₹36,000', '₹24,000'],
    optionsHi: ['₹20,000', '₹48,000', '₹36,000', '₹24,000'],
    correctIndex: 3,
    explanationEn:
      'Let R’s investment = 3 units.\nThen Q’s investment = (2/3) × 3 = 2 units, and P’s investment = 3 × 2 = 6 units.\nRatio P : Q : R = 6 : 2 : 3 (total = 11 units).\nQ’s share = (2 / 11) × ₹1,32,000 = 2 × ₹12,000 = ₹24,000.',
    explanationHi:
      'माना R का निवेश = 3 इकाई। तब Q = 2 इकाई और P = 6 इकाई।\nनिवेश अनुपात P : Q : R = 6 : 2 : 3 (कुल = 11 इकाई)।\nQ का हिस्सा = (2 / 11) × 1,32,000 = ₹24,000।',
  },
  {
    id: 'cgl26_05o2_q59',
    topic: 'Percentage (Election)',
    questionEn:
      'In an election between two candidates, 18% of the voters did not cast their votes and 72 votes were declared invalid. The winning candidate got 51% of the total voters on the list and won by 432 votes. Find the total number of voters.',
    questionHi:
      'दो उम्मीदवारों के बीच एक चुनाव में 18% मतदाताओं ने मतदान नहीं किया और 72 मत अवैध घोषित कर दिए गए। जीतने वाले उम्मीदवार को कुल मतदाता सूची के 51% मत मिले और वह 432 मतों से जीत गया। कुल मतदाताओं की संख्या ज्ञात कीजिए।',
    optionsEn: ['1200', '2400', '3200', '1800'],
    optionsHi: ['1200', '2400', '3200', '1800'],
    correctIndex: 3,
    explanationEn:
      'Let total voters = V.\nVotes cast = 82% of V = 0.82V.\nValid votes = 0.82V − 72.\nWinner’s votes = 0.51V ⇒ Loser’s votes = (0.82V − 72) − 0.51V = 0.31V − 72.\nWinning margin: 0.51V − (0.31V − 72) = 432 ⇒ 0.20V + 72 = 432 ⇒ 0.20V = 360 ⇒ V = 1800.',
    explanationHi:
      'माना कुल मतदाता = V। डाले गए मत = 0.82V और वैध मत = 0.82V − 72।\nविजेता के मत = 0.51V, अतः हारने वाले के मत = 0.31V − 72।\nजीत का अंतर = 0.51V − (0.31V − 72) = 432 ⇒ 0.20V = 360 ⇒ V = 1800।',
  },
  {
    id: 'cgl26_05o2_q60',
    topic: 'Simple Interest',
    questionEn:
      'A sum of money at simple interest amounts to 1.6 times the principal. If the rate of interest per annum is numerically double the time period (in years), what is the approximate annual rate of interest?',
    questionHi:
      'साधारण ब्याज पर एक धनराशि मूलधन की 1.6 गुनी हो जाती है। यदि वार्षिक ब्याज दर संख्यात्मक रूप से समय अवधि (वर्षों में) की दोगुनी है, तो अनुमानित वार्षिक ब्याज दर क्या है?',
    optionsEn: ['9%', '11%', '16%', '14%'],
    optionsHi: ['9%', '11%', '16%', '14%'],
    correctIndex: 1,
    explanationEn:
      'Amount = 1.6P ⇒ Simple Interest (SI) = 0.6P.\nGiven R = 2T ⇒ T = R / 2.\nUsing SI = (P × R × T) / 100:\n0.6P = (P × R × R / 2) / 100 ⇒ 60 = R² / 2 ⇒ R² = 120.\nR = √120 ≈ 10.95% ≈ 11%.',
    explanationHi:
      'मिश्रधन = 1.6P ⇒ साधारण ब्याज = 0.6P। दिया है R = 2T ⇒ T = R/2।\n0.6P = (P × R × R/2) / 100 ⇒ R² = 120 ⇒ R = √120 ≈ 10.95% ≈ 11%।',
  },
  {
    id: 'cgl26_05o2_q61',
    topic: 'Mensuration 2D (Polygon)',
    questionEn:
      'Find the area of a regular hexagon inscribed in a circle of radius 14 cm.',
    questionHi:
      '14 cm त्रिज्या वाले वृत्त के अंदर बने एक समषट्भुज (regular hexagon) का क्षेत्रफल ज्ञात कीजिए।',
    optionsEn: ['287√3 cm²', '259√7 cm²', '224√3 cm²', '294√3 cm²'],
    optionsHi: ['287√3 cm²', '259√7 cm²', '224√3 cm²', '294√3 cm²'],
    correctIndex: 3,
    explanationEn:
      'For a regular hexagon inscribed in a circle of radius r, each side a = r = 14 cm.\nArea of regular hexagon = 6 × (√3 / 4) × a² = (3√3 / 2) × 14² = (3√3 / 2) × 196 = 294√3 cm².',
    explanationHi:
      'वृत्त के अंतर्गत बने समषट्भुज की भुजा वृत्त की त्रिज्या के बराबर होती है (a = r = 14 cm)।\nक्षेत्रफल = 6 × (√3 / 4) × 14² = (3√3 / 2) × 196 = 294√3 cm²।',
  },
  {
    id: 'cgl26_05o2_q62',
    topic: 'Profit & Loss',
    questionEn:
      'By selling an article for ₹720, a shopkeeper incurs a loss of 10%. At what price should he sell it to gain 5%?',
    questionHi:
      'एक वस्तु को ₹720 में बेचने पर दुकानदार को 10% की हानि होती है। 5% का लाभ कमाने के लिए उसे इसे किस मूल्य पर बेचना चाहिए?',
    optionsEn: ['₹750', '₹640', '₹840', '₹650'],
    optionsHi: ['₹750', '₹640', '₹840', '₹650'],
    correctIndex: 2,
    explanationEn:
      'At 10% loss, Selling Price = 90% of CP = ₹720.\nCP = (720 / 90) × 100 = ₹800.\nFor a 5% gain, Selling Price = 105% of 800 = 800 × 1.05 = ₹840.',
    explanationHi:
      '10% हानि पर विक्रय मूल्य = क्रय मूल्य का 90% = ₹720 ⇒ क्रय मूल्य = ₹800।\n5% लाभ के लिए विक्रय मूल्य = 800 × 105 / 100 = ₹840।',
  },
  {
    id: 'cgl26_05o2_q63',
    topic: 'Time & Work',
    questionEn:
      'A does a piece of work while B destroys it. If A starts at 2:00 PM and B starts at 3:00 PM, the work finishes at 10:00 PM. If A starts at 2:00 PM and B starts at 4:00 PM, the work finishes at 6:00 PM. How many minutes will A alone take to complete the work without B?',
    questionHi:
      'A एक कार्य करता है जबकि B उसे नष्ट करता है। यदि A दोपहर 2:00 बजे और B दोपहर 3:00 बजे शुरू करता है, तो कार्य रात 10:00 बजे समाप्त होता है। यदि A दोपहर 2:00 बजे और B शाम 4:00 बजे शुरू करता है, तो कार्य शाम 6:00 बजे समाप्त होता है। B के बिना अकेले A को कार्य पूरा करने में कितने मिनट लगेंगे?',
    optionsEn: ['120 minutes', '224 minutes', '144 minutes', '184 minutes'],
    optionsHi: ['120 मिनट', '224 मिनट', '144 मिनट', '184 मिनट'],
    correctIndex: 2,
    explanationEn:
      'Let A’s hourly work rate = a and B’s hourly destruction rate = b.\nCase 1 (2 PM to 10 PM): A works 8 hours, B destroys for 7 hours ⇒ W = 8a − 7b.\nCase 2 (2 PM to 6 PM): A works 4 hours, B destroys for 2 hours ⇒ W = 4a − 2b.\nEquating both: 8a − 7b = 4a − 2b ⇒ 4a = 5b ⇒ b = 0.8a.\nTotal work W = 4a − 2(0.8a) = 2.4a.\nTime for A alone = W / a = 2.4 hours = 2.4 × 60 = 144 minutes.',
    explanationHi:
      'माना A की कार्य दर = a और B की नष्ट करने की दर = b प्रति घंटा है।\nस्थिति 1: W = 8a − 7b तथा स्थिति 2: W = 4a − 2b।\n8a − 7b = 4a − 2b ⇒ 4a = 5b ⇒ b = 0.8a।\nकुल कार्य W = 4a − 1.6a = 2.4a।\nअकेले A द्वारा लिया गया समय = 2.4 घंटे = 2.4 × 60 = 144 मिनट।',
  },
  {
    id: 'cgl26_05o2_q64',
    topic: 'Profit, Loss & Discount',
    questionEn:
      'A trader marks his goods 40% above the cost price and offers a discount of 15% on the marked price. What is his actual profit percentage?',
    questionHi:
      'एक व्यापारी अपने माल का अंकित मूल्य क्रय मूल्य से 40% अधिक रखता है और अंकित मूल्य पर 15% की छूट देता है। उसका वास्तविक लाभ प्रतिशत क्या है?',
    optionsEn: ['15%', '27%', '23%', '19%'],
    optionsHi: ['15%', '27%', '23%', '19%'],
    correctIndex: 3,
    explanationEn:
      'Let Cost Price = 100.\nMarked Price = 140.\nSelling Price after 15% discount = 140 × (85 / 100) = 119.\nActual Profit % = 119 − 100 = 19%.',
    explanationHi:
      'माना क्रय मूल्य = 100, तो अंकित मूल्य = 140।\n15% छूट के बाद विक्रय मूल्य = 140 × 0.85 = 119।\nअतः वास्तविक लाभ = 119 − 100 = 19%।',
  },
  {
    id: 'cgl26_05o2_q65',
    topic: 'Geometry (Cyclic Quadrilateral)',
    questionEn:
      'In a cyclic quadrilateral ABCD, ∠A = (4x + 20)° and ∠C = (3x − 15)°. Find the value of x.',
    questionHi:
      'एक चक्रीय चतुर्भुज ABCD में, ∠A = (4x + 20)° और ∠C = (3x − 15)° है। x का मान ज्ञात कीजिए।',
    optionsEn: ['18', '21', '27', '25'],
    optionsHi: ['18', '21', '27', '25'],
    correctIndex: 3,
    explanationEn:
      'Opposite angles of a cyclic quadrilateral are supplementary (sum to 180°).\n∠A + ∠C = 180° ⇒ (4x + 20) + (3x − 15) = 180 ⇒ 7x + 5 = 180 ⇒ 7x = 175 ⇒ x = 25.',
    explanationHi:
      'चक्रीय चतुर्भुज के सम्मुख कोण संपूरक (180°) होते हैं।\n(4x + 20) + (3x − 15) = 180 ⇒ 7x + 5 = 180 ⇒ 7x = 175 ⇒ x = 25।',
  },
  {
    id: 'cgl26_05o2_q66',
    topic: 'Trigonometry',
    questionEn: 'If sin θ + cos θ = 3/2, find the value of tan θ + cot θ.',
    questionHi: 'यदि sin θ + cos θ = 3/2 हो, तो tan θ + cot θ का मान ज्ञात कीजिए।',
    optionsEn: ['5/8', '3/4', '4/3', '8/5'],
    optionsHi: ['5/8', '3/4', '4/3', '8/5'],
    correctIndex: 3,
    explanationEn:
      'Squaring both sides of sin θ + cos θ = 3/2:\nsin² θ + cos² θ + 2 sin θ cos θ = 9/4 ⇒ 1 + 2 sin θ cos θ = 9/4 ⇒ 2 sin θ cos θ = 5/4 ⇒ sin θ cos θ = 5/8.\nNow, tan θ + cot θ = (sin θ / cos θ) + (cos θ / sin θ) = (sin² θ + cos² θ) / (sin θ cos θ) = 1 / (5/8) = 8/5.',
    explanationHi:
      'sin θ + cos θ = 3/2 का दोनों पक्षों में वर्ग करने पर:\n1 + 2 sin θ cos θ = 9/4 ⇒ sin θ cos θ = 5/8।\nअब, tan θ + cot θ = (sin² θ + cos² θ) / (sin θ cos θ) = 1 / (5/8) = 8/5।',
  },
  {
    id: 'cgl26_05o2_q67',
    topic: 'Algebra (Surds)',
    questionEn: 'If x = 5 + 2√6, then find the value of x² + 1/x².',
    questionHi: 'यदि x = 5 + 2√6 हो, तो x² + 1/x² का मान ज्ञात कीजिए।',
    optionsEn: ['64', '87', '92', '98'],
    optionsHi: ['64', '87', '92', '98'],
    correctIndex: 3,
    explanationEn:
      'Since 5² − (2√6)² = 25 − 24 = 1, we have 1/x = 5 − 2√6.\nThus, x + 1/x = (5 + 2√6) + (5 − 2√6) = 10.\nTherefore, x² + 1/x² = (x + 1/x)² − 2 = 10² − 2 = 100 − 2 = 98.',
    explanationHi:
      'चूँकि 5² − (2√6)² = 25 − 24 = 1, अतः 1/x = 5 − 2√6।\nइसलिए x + 1/x = 10।\nx² + 1/x² = (x + 1/x)² − 2 = 10² − 2 = 98।',
  },
  {
    id: 'cgl26_05o2_q68',
    topic: 'Simplification (Surds)',
    questionEn: 'If √2 = 1.414, find the value of (8√2 + 4) / √2.',
    questionHi: 'यदि √2 = 1.414 हो, तो (8√2 + 4) / √2 का मान ज्ञात कीजिए।',
    optionsEn: ['4.564', '8.452', '10.828', '12.456'],
    optionsHi: ['4.564', '8.452', '10.828', '12.456'],
    correctIndex: 2,
    explanationEn:
      '(8√2 + 4) / √2 = (8√2 / √2) + (4 / √2) = 8 + 2√2.\nSubstituting √2 = 1.414: 8 + 2(1.414) = 8 + 2.828 = 10.828.',
    explanationHi:
      '(8√2 + 4) / √2 = 8 + 4 / √2 = 8 + 2√2।\n√2 = 1.414 रखने पर: 8 + 2 × 1.414 = 8 + 2.828 = 10.828।',
  },
  {
    id: 'cgl26_05o2_q69',
    topic: 'Geometry (Triangles)',
    questionEn:
      'In △ABC, D is a point on side AC. P, Q, X, and Y are the midpoints of AB, BC, AD, and DC respectively. Find the ratio PX : QY.',
    questionHi:
      '△ABC में, D भुजा AC पर एक बिंदु है। P, Q, X और Y क्रमशः AB, BC, AD और DC के मध्य-बिंदु हैं। अनुपात PX : QY ज्ञात कीजिए।',
    optionsEn: ['2 : 3', '1 : 1', '1 : 2', '3 : 2'],
    optionsHi: ['2 : 3', '1 : 1', '1 : 2', '3 : 2'],
    correctIndex: 1,
    explanationEn:
      'Join BD.\nIn △ABD, P and X are midpoints of AB and AD respectively, so by the Midpoint Theorem, PX = (1/2) BD.\nIn △CBD, Q and Y are midpoints of BC and DC respectively, so by the Midpoint Theorem, QY = (1/2) BD.\nTherefore, PX : QY = (1/2) BD : (1/2) BD = 1 : 1.',
    explanationHi:
      'B को D से मिलाने पर:\n△ABD में P और X क्रमशः AB तथा AD के मध्य-बिंदु हैं, अतः मध्य-बिंदु प्रमेय से PX = (1/2) BD।\nइसी प्रकार △CBD में QY = (1/2) BD।\nअतः PX : QY = 1 : 1।',
  },
  {
    id: 'cgl26_05o2_q70',
    topic: 'Geometry (Circles & Chords)',
    questionEn:
      'The circumference of a circle is 100π cm and the length of a chord is 60 cm. Find the perpendicular distance of the chord from the centre of the circle.',
    questionHi:
      'एक वृत्त की परिधि 100π cm है और एक जीवा की लंबाई 60 cm है। वृत्त के केंद्र से जीवा की लंबवत दूरी ज्ञात कीजिए।',
    optionsEn: ['20 cm', '40 cm', '60 cm', '80 cm'],
    optionsHi: ['20 cm', '40 cm', '60 cm', '80 cm'],
    correctIndex: 1,
    explanationEn:
      'Circumference 2πr = 100π ⇒ radius r = 50 cm.\nA perpendicular from the centre bisects the chord: half-chord = 60 / 2 = 30 cm.\nBy Pythagoras theorem: distance d = √(50² − 30²) = √(2500 − 900) = √1600 = 40 cm.',
    explanationHi:
      'परिधि 2πr = 100π ⇒ त्रिज्या r = 50 cm।\nकेंद्र से डाला गया लंब जीवा को समद्विभाजित करता है, अतः आधी जीवा = 30 cm।\nपाइथागोरस प्रमेय से दूरी = √(50² − 30²) = √1600 = 40 cm।',
  },
  {
    id: 'cgl26_05o2_q71',
    topic: 'Geometry (Tangent & Alternate Segment)',
    questionEn:
      'AT is a tangent to a circle at point A, and △ABC is inscribed in the circle with chord BC. If ∠CAT = 50°, find the measure of ∠ABC.',
    questionHi:
      'AT बिंदु A पर एक वृत्त की स्पर्श रेखा है, और △ABC वृत्त के अंदर बना है जिसमें जीवा BC है। यदि ∠CAT = 50° है, तो ∠ABC का माप ज्ञात कीजिए।',
    optionsEn: ['30°', '50°', '70°', '90°'],
    optionsHi: ['30°', '50°', '70°', '90°'],
    correctIndex: 1,
    explanationEn:
      'By the Alternate Segment Theorem, the angle between the tangent AT and chord AC (∠CAT) is equal to the angle subtended by the chord AC in the alternate segment (∠ABC).\nHence, ∠ABC = ∠CAT = 50°.',
    explanationHi:
      'एकांतर वृत्तखंड प्रमेय (Alternate Segment Theorem) के अनुसार स्पर्श रेखा AT और जीवा AC के बीच बना कोण (∠CAT) एकांतर खंड में जीवा AC द्वारा बनाए गए कोण (∠ABC) के बराबर होता है।\nअतः ∠ABC = 50°।',
  },
  {
    id: 'cgl26_05o2_q72',
    topic: 'Geometry (Common Tangents)',
    questionEn:
      'Two circles of radii 6 cm and 4 cm have their centres 20 cm apart. A transverse common tangent intersects the line joining their centres at point P. Find the distance of P from the centre of the larger circle.',
    questionHi:
      '6 cm और 4 cm त्रिज्या वाले दो वृत्तों के केंद्रों के बीच की दूरी 20 cm है। एक तिर्यक उभयनिष्ठ स्पर्श रेखा (transverse common tangent) उनके केंद्रों को मिलाने वाली रेखा को बिंदु P पर काटती है। बड़े वृत्त के केंद्र से P की दूरी ज्ञात कीजिए।',
    optionsEn: ['8 cm', '10 cm', '12 cm', '14 cm'],
    optionsHi: ['8 cm', '10 cm', '12 cm', '14 cm'],
    correctIndex: 2,
    explanationEn:
      'A transverse common tangent divides the line segment joining the two centres internally in the ratio of their radii (r₁ : r₂ = 6 : 4 = 3 : 2).\nDistance of P from the centre of the larger circle = (3 / (3 + 2)) × 20 = (3 / 5) × 20 = 12 cm.',
    explanationHi:
      'तिर्यक उभयनिष्ठ स्पर्श रेखा दोनों केंद्रों को मिलाने वाली रेखा को उनकी त्रिज्याओं के अनुपात (6 : 4 = 3 : 2) में अंतः विभाजित करती है।\nबड़े वृत्त के केंद्र से P की दूरी = (3 / 5) × 20 = 12 cm।',
  },
  {
    id: 'cgl26_05o2_q73',
    topic: 'Mensuration 2D (Arc Length)',
    questionEn:
      'The radii of two circles are in the ratio 3 : 5. An arc of the smaller circle subtends an angle of 75° at its centre, while an arc of the larger circle subtends an angle of 45° at its centre. Find the ratio of the lengths of these two arcs (smaller : larger).',
    questionHi:
      'दो वृत्तों की त्रिज्याओं का अनुपात 3 : 5 है। छोटे वृत्त का एक चाप केंद्र पर 75° का कोण अंतरित करता है, जबकि बड़े वृत्त का एक चाप केंद्र पर 45° का कोण अंतरित करता है। दोनों चापों की लंबाई का अनुपात (छोटा : बड़ा) ज्ञात कीजिए।',
    optionsEn: ['3 : 5', '5 : 3', '1 : 1', '2 : 3'],
    optionsHi: ['3 : 5', '5 : 3', '1 : 1', '2 : 3'],
    correctIndex: 2,
    explanationEn:
      'Arc length l = (θ / 360°) × 2πr, so l ∝ r · θ.\nRatio l₁ / l₂ = (r₁ × θ₁) / (r₂ × θ₂) = (3 × 75) / (5 × 45) = 225 / 225 = 1 : 1.',
    explanationHi:
      'चाप की लंबाई l ∝ r × θ होती है।\nअतः l₁ / l₂ = (3 × 75) / (5 × 45) = 225 / 225 = 1 : 1।',
  },
  {
    id: 'cgl26_05o2_q74',
    topic: 'Algebra',
    questionEn: 'If x + 1/x = 8, find the value of x⁴ + 1/x⁴.',
    questionHi: 'यदि x + 1/x = 8 हो, तो x⁴ + 1/x⁴ का मान ज्ञात कीजिए।',
    optionsEn: ['3846', '3844', '3842', '3840'],
    optionsHi: ['3846', '3844', '3842', '3840'],
    correctIndex: 2,
    explanationEn:
      'Step 1: x² + 1/x² = (x + 1/x)² − 2 = 8² − 2 = 64 − 2 = 62.\nStep 2: x⁴ + 1/x⁴ = (x² + 1/x²)² − 2 = 62² − 2 = 3844 − 2 = 3842.',
    explanationHi:
      'चरण 1: x² + 1/x² = 8² − 2 = 62।\nचरण 2: x⁴ + 1/x⁴ = 62² − 2 = 3844 − 2 = 3842।',
  },
  {
    id: 'cgl26_05o2_q75',
    topic: 'Mixture & Alligation',
    questionEn:
      'Two varieties of wheat costing ₹36/kg and ₹54/kg are mixed to obtain a mixture worth ₹45/kg. When 6 kg of the cheaper wheat is added to the mixture, the ratio of cheaper to costlier wheat becomes 3 : 2. Find the original quantity of the costlier wheat.',
    questionHi:
      '₹36/kg और ₹54/kg मूल्य वाली गेहूँ की दो किस्मों को मिलाकर ₹45/kg मूल्य का मिश्रण बनाया जाता है। मिश्रण में 6 kg सस्ता गेहूँ मिलाने पर सस्ते और महँगे गेहूँ का अनुपात 3 : 2 हो जाता है। महँगे गेहूँ की मूल मात्रा ज्ञात कीजिए।',
    optionsEn: ['8 kg', '12 kg', '14 kg', '6 kg'],
    optionsHi: ['8 kg', '12 kg', '14 kg', '6 kg'],
    correctIndex: 1,
    explanationEn:
      'By the Rule of Alligation:\nInitial ratio (Cheaper : Costlier) = (54 − 45) : (45 − 36) = 9 : 9 = 1 : 1.\nLet the original quantity of each variety be x kg.\nAfter adding 6 kg of cheaper wheat: (x + 6) / x = 3 / 2 ⇒ 2x + 12 = 3x ⇒ x = 12 kg.\nThus, the original quantity of costlier wheat is 12 kg.',
    explanationHi:
      'मिश्रण नियम (Alligation) से प्रारंभिक अनुपात (सस्ता : महँगा) = (54 − 45) : (45 − 36) = 9 : 9 = 1 : 1।\nमाना प्रत्येक की मूल मात्रा x kg थी।\n6 kg सस्ता गेहूँ मिलाने पर: (x + 6) / x = 3 / 2 ⇒ 2x + 12 = 3x ⇒ x = 12 kg।',
  },
];
