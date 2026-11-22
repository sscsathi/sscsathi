import { Question } from '../../types/exam';

export const SECTION_1_REASONING_O1S3: Question[] = [
  {
    id: 'cgl26_01o3_q1',
    topic: 'Wrong Number Series',
    questionEn: 'Find the WRONG number in the series.\n11.2, 16.8, 42, 146, 661.5',
    questionHi: 'श्रृंखला में गलत संख्या ज्ञात कीजिए।\n11.2, 16.8, 42, 146, 661.5',
    optionsEn: ['146', '16.8', '42', '11.2'],
    optionsHi: ['146', '16.8', '42', '11.2'],
    correctIndex: 0,
    explanationEn:
      'Pattern: Multiply successively by 1.5, 2.5, 3.5, 4.5:\n• 11.2 × 1.5 = 16.8\n• 16.8 × 2.5 = 42\n• 42 × 3.5 = 147 (not 146)\n• 147 × 4.5 = 661.5\nHence, 146 is the wrong number.',
    explanationHi:
      'पैटर्न: क्रमशः 1.5, 2.5, 3.5, 4.5 से गुणा किया गया है:\n• 11.2 × 1.5 = 16.8\n• 16.8 × 2.5 = 42\n• 42 × 3.5 = 147 (न कि 146)\n• 147 × 4.5 = 661.5\nअतः गलत संख्या 146 है।',
  },
  {
    id: 'cgl26_01o3_q2',
    topic: 'Cube & Dice',
    questionEn:
      "A cube is formed by folding the sheet. Which letter would be on the face opposite to 'M'?",
    questionHi:
      "शीट को मोड़कर एक घन बनाया गया है। 'M' के विपरीत फलक पर कौन सा अक्षर होगा?",
    visual: {
      type: 'cube-net',
      cells: [
        { row: 0, col: 1, label: 'S' },
        { row: 1, col: 1, label: 'M' },
        { row: 2, col: 1, label: 'U' },
        { row: 2, col: 0, label: 'E' },
        { row: 3, col: 0, label: 'K' },
        { row: 4, col: 0, label: 'G' },
      ],
    },
    optionsEn: ['E', 'K', 'U', 'G'],
    optionsHi: ['E', 'K', 'U', 'G'],
    correctIndex: 1,
    explanationEn:
      'In a standard cube net, alternate faces in a straight line of 3 squares are opposite to each other:\n• In the right vertical strip (S–M–U): S is opposite to U.\n• In the left vertical strip (E–K–G): E is opposite to G.\n• Therefore, the remaining two faces M and K are opposite to each other.',
    explanationHi:
      'खुले घन (net) के नियम से एक सीधी रेखा में एकान्तर (alternate) फलक एक-दूसरे के विपरीत होते हैं:\n• दाईं पट्टी (S–M–U) में S के विपरीत U है।\n• बाईं पट्टी (E–K–G) में E के विपरीत G है।\n• शेष बचे फलक M और K आपस में विपरीत होंगे। अतः उत्तर K है।',
  },
  {
    id: 'cgl26_01o3_q3',
    topic: 'Number Classification',
    questionEn: 'Choose the roll number with even digits only.',
    questionHi: 'केवल सम अंकों वाला रोल नंबर चुनें।',
    optionsEn: ['234×446', '135×357', '468×864', '579×975'],
    optionsHi: ['234×446', '135×357', '468×864', '579×975'],
    correctIndex: 2,
    explanationEn:
      'Checking every digit in each option:\n• 234×446 contains odd digit 3.\n• 135×357 contains all odd digits.\n• 468×864 contains ONLY even digits (4, 6, 8).\n• 579×975 contains all odd digits.\nHence, 468×864 is correct.',
    explanationHi:
      'विकल्प (C) 468×864 के सभी अंक (4, 6, 8) सम (even) हैं, जबकि अन्य विकल्पों में विषम अंक (1, 3, 5, 7, 9) शामिल हैं।',
  },
  {
    id: 'cgl26_01o3_q4',
    topic: 'Word Classification',
    questionEn: 'Find the odd one out.\nGanga, Yamuna, Godavari, Everest',
    questionHi: 'इनमें से विषम को पहचानिए।\nगंगा, यमुना, गोदावरी, एवरेस्ट',
    optionsEn: ['Ganga', 'Yamuna', 'Godavari', 'Everest'],
    optionsHi: ['गंगा', 'यमुना', 'गोदावरी', 'एवरेस्ट'],
    correctIndex: 3,
    explanationEn:
      'Ganga, Yamuna, and Godavari are major rivers of India, whereas Everest (Mount Everest) is the highest mountain peak in the world. Hence, Everest is the odd one out.',
    explanationHi:
      'गंगा, यमुना और गोदावरी भारत की प्रमुख नदियाँ हैं, जबकि एवरेस्ट विश्व की सबसे ऊँची पर्वत चोटी है। अतः एवरेस्ट विषम है।',
  },
  {
    id: 'cgl26_01o3_q5',
    topic: 'Statement & Conclusions',
    questionEn:
      'Statements:\n1. The Indian Museum in Kolkata, established in 1814, is one of the oldest and most important museums in India.\n2. It is fully funded and managed by the Central Government, under the Ministry of Culture.\nConclusions:\nI. The Indian Museum is a centrally administered cultural institution.\nII. All museums in India were established before 1900 is funded by central Government.',
    questionHi:
      'कथन:\n1. कोलकाता में 1814 में स्थापित भारतीय संग्रहालय भारत के सबसे पुराने और सबसे महत्वपूर्ण संग्रहालयों में से एक है।\n2. यह संस्कृति मंत्रालय के तहत केंद्र सरकार द्वारा पूरी तरह से वित्त पोषित और प्रबंधित है।\nनिष्कर्ष:\nI. भारतीय संग्रहालय एक केंद्रीय प्रशासित सांस्कृतिक संस्थान है।\nII. भारत में 1900 से पहले स्थापित सभी संग्रहालयों को केंद्र सरकार द्वारा वित्त पोषित किया जाता है।',
    optionsEn: [
      'Only conclusion I follows',
      'Only conclusion II follows',
      'Neither conclusion I nor II follows',
      'Both conclusion I and II follow',
    ],
    optionsHi: [
      'केवल निष्कर्ष I अनुसरण करता है',
      'केवल निष्कर्ष II अनुसरण करता है',
      'न तो निष्कर्ष I और न ही II अनुसरण करता है',
      'निष्कर्ष I और II दोनों अनुसरण करते हैं',
    ],
    correctIndex: 0,
    explanationEn:
      '• Conclusion I follows directly from Statement 2 (fully funded & managed by the Central Government under the Ministry of Culture).\n• Conclusion II is an invalid overgeneralization ("All museums established before 1900") not supported by the statements.\nHence, only conclusion I follows.',
    explanationHi:
      '• निष्कर्ष I कथन 2 से सीधे सिद्ध होता है कि भारतीय संग्रहालय संस्कृति मंत्रालय (केंद्र सरकार) द्वारा प्रशासित है।\n• निष्कर्ष II "1900 से पहले स्थापित सभी संग्रहालयों" की बात करता है जो कथन में नहीं दिया गया है। अतः केवल निष्कर्ष I अनुसरण करता है।',
  },
  {
    id: 'cgl26_01o3_q6',
    topic: 'Statement & Assumptions',
    questionEn:
      'Instruction: Identify the assumptions that must hold for the statement to be valid, then choose the correct option.\nStatement: Despite the challenges faced by renewable energy sources, they are the only long-term solution to our dependency on fossil fuels.\nAssumptions:\nI. Renewable energy sources face certain challenges.\nII. Fossil fuels are not a sustainable long-term solution.\nIII. Renewable energy sources can entirely replace fossil fuels.',
    questionHi:
      'निर्देश: कथन को मान्य बनाने के लिए आवश्यक मान्यताओं की पहचान करें, फिर सही विकल्प चुनें।\nकथन: नवीकरणीय ऊर्जा स्रोतों के सामने आने वाली चुनौतियों के बावजूद, वे जीवाश्म ईंधन पर हमारी निर्भरता का एकमात्र दीर्घकालिक समाधान हैं।\nमान्यताएँ:\nI. नवीकरणीय ऊर्जा स्रोतों को कुछ चुनौतियों का सामना करना पड़ता है।\nII. जीवाश्म ईंधन एक स्थायी दीर्घकालिक समाधान नहीं हैं।\nIII. नवीकरणीय ऊर्जा स्रोत जीवाश्म ईंधन को पूरी तरह से प्रतिस्थापित कर सकते हैं।',
    optionsEn: [
      'Only I and II are implicit',
      'Only II and III are implicit',
      'All are implicit',
      'Only I is implicit',
    ],
    optionsHi: [
      'केवल I और II निहित हैं',
      'केवल II और III अंतर्निहित हैं।',
      'सभी निहित हैं',
      'केवल I निहित है।',
    ],
    correctIndex: 0,
    explanationEn:
      '• Assumption I is implicit because the statement explicitly starts with "Despite the challenges faced by renewable energy sources".\n• Assumption II is implicit because calling renewables "the only long-term solution to our dependency on fossil fuels" presupposes that fossil fuels are not sustainable long-term.\n• Assumption III uses the extreme claim "entirely replace", which goes beyond addressing dependency.\nHence, only I and II are implicit.',
    explanationHi:
      '• मान्यता I सीधे कथन ("चुनौतियों के बावजूद") में निहित है।\n• मान्यता II भी निहित है क्योंकि जीवाश्म ईंधन पर निर्भरता का समाधान खोजने का अर्थ है कि जीवाश्म ईंधन स्थायी दीर्घकालिक समाधान नहीं हैं।\n• मान्यता III में "पूरी तरह से प्रतिस्थापित" एक अतिवादी दावा है। अतः केवल I और II निहित हैं।',
  },
  {
    id: 'cgl26_01o3_q7',
    topic: 'Address Matching',
    questionEn:
      'Which of the following is/are identical to the address given:\nShruti Mehta 3/6, Lotus Avenue, Lucknow, 226007\n\n1. Shruti Mehta 3/6, Lotus Avenue, Lucknow, 226007\n2. Shruti Mehta 3/6, Lotus Avenue, Lucknow, 226007\n3. Shruti Mehta 3/6, Lotus Avenue, Lucknow, 226008\n4. Shruti Mehta 3/6, Lotus Avenue, New Lucknow, 226007',
    questionHi:
      'निम्नलिखित में से कौन सा/से पते दिए गए पते के समान है/हैं:\nश्रुति मेहता 3/6, लोटस एवेन्यू, लखनऊ, 226007\n\n1. श्रुति मेहता 3/6, लोटस एवेन्यू, लखनऊ, 226007\n2. श्रुति मेहता 3/6, लोटस एवेन्यू, लखनऊ, 226007\n3. श्रुति मेहता 3/6, लोटस एवेन्यू, लखनऊ, 226008\n4. श्रुति मेहता 3/6, लोटस एवेन्यू, न्यू लखनऊ, 226007',
    optionsEn: ['1 and 2', '1 and 3', '2 and 4', '3 and 4'],
    optionsHi: ['1 और 2', '1 और 3', '2 और 4', '3 और 4'],
    correctIndex: 0,
    explanationEn:
      'Comparing each line character-by-character with "Shruti Mehta 3/6, Lotus Avenue, Lucknow, 226007":\n• 1 & 2 match identically.\n• 3 has a wrong PIN code (226008 instead of 226007).\n• 4 adds "New" before Lucknow.\nHence, 1 and 2 are identical.',
    explanationHi:
      'दिए गए पते से मिलान करने पर:\n• पता 1 और 2 पूर्णतः समान हैं।\n• पता 3 में पिनकोड 226008 गलत है और पता 4 में "न्यू लखनऊ" अतिरिक्त जुड़ा है। अतः 1 और 2 सही हैं।',
  },
  {
    id: 'cgl26_01o3_q8',
    topic: 'Number Series',
    questionEn: 'Find the next number in the sequence.\n2, 5, 10, 17, ?',
    questionHi: 'अनुक्रम में अगली संख्या ज्ञात कीजिए।\n2, 5, 10, 17, ?',
    optionsEn: ['24', '26', '28', '30'],
    optionsHi: ['24', '26', '28', '30'],
    correctIndex: 1,
    explanationEn:
      'Pattern: n² + 1 (or consecutive odd differences +3, +5, +7, +9):\n• 1² + 1 = 2\n• 2² + 1 = 5\n• 3² + 1 = 10\n• 4² + 1 = 17\n• 5² + 1 = 26.',
    explanationHi:
      'पैटर्न: n² + 1 (या अंतर +3, +5, +7, +9):\n1² + 1 = 2, 2² + 1 = 5, 3² + 1 = 10, 4² + 1 = 17, अतः अगली संख्या = 5² + 1 = 26।',
  },
  {
    id: 'cgl26_01o3_q9',
    topic: 'Word Analogy (GK)',
    questionEn:
      'Find the most suitable pair:\nRamayana – Ved Vyasa, Macbeth – Leo Tolstoy, Hamlet – Charles Dickens, War and Peace – William Shakespeare, Gitanjali – Rabindranath Tagore',
    questionHi:
      'सबसे उपयुक्त युग्म खोजें:\nरामायण - वेद व्यास, मैकबेथ - लियो टॉल्स्टॉय, हैमलेट - चार्ल्स डिकेंस, वार एंड पीस - विलियम शेक्सपियर, गीतांजलि - रवींद्रनाथ टैगोर',
    optionsEn: [
      'Hamlet – Charles Dickens',
      'Macbeth – Leo Tolstoy',
      'War and Peace – William Shakespeare',
      'Gitanjali – Rabindranath Tagore',
    ],
    optionsHi: [
      'हैमलेट - चार्ल्स डिकेंस',
      'मैकबेथ - लियो टॉल्स्टॉय',
      'वार एंड पीस - विलियम शेक्सपियर',
      'गीतांजलि - रवींद्रनाथ टैगोर',
    ],
    correctIndex: 3,
    explanationEn:
      'Only "Gitanjali – Rabindranath Tagore" is a correctly matched literary work and author pair. (Correct authors: Ramayana → Valmiki; Macbeth & Hamlet → William Shakespeare; War and Peace → Leo Tolstoy.)',
    explanationHi:
      'केवल "गीतांजलि – रवींद्रनाथ टैगोर" सही पुस्तक-लेखक युग्म है। (अन्य के सही लेखक: रामायण – वाल्मीकि, मैकबेथ व हैमलेट – विलियम शेक्सपियर, वार एंड पीस – लियो टॉल्स्टॉय)।',
  },
  {
    id: 'cgl26_01o3_q10',
    topic: 'Alphanumeric Series',
    questionEn: 'Complete the series.\nZ9, X8, V7, T6, ?',
    questionHi: 'निम्नलिखित श्रृंखला को पूरा करें।\nZ9, X8, V7, T6, ?',
    optionsEn: ['R5', 'S5', 'Q5', 'P5'],
    optionsHi: ['R5', 'S5', 'Q5', 'P5'],
    correctIndex: 0,
    explanationEn:
      '• Letters decrease by 2 each step: Z (26) → X (24) → V (22) → T (20) → R (18).\n• Numbers decrease by 1 each step: 9 → 8 → 7 → 6 → 5.\nHence, the next term is R5.',
    explanationHi:
      '• अक्षर क्रम −2 से घट रहा है: Z → X → V → T → R।\n• संख्या −1 से घट रही है: 9 → 8 → 7 → 6 → 5।\nअतः अगला पद R5 होगा।',
  },
  {
    id: 'cgl26_01o3_q11',
    topic: 'Coding-Decoding',
    questionEn: 'If "SUN" is coded as "19 21 14", how will "MOON" be coded?',
    questionHi:
      'यदि "SUN" को "19 21 14" के रूप में कोडित किया जाता है, तो "MOON" को किस रूप में कोडित किया जाएगा?',
    optionsEn: ['12 14 14 13', '14 16 16 15', '13 15 15 14', '11 13 13 12'],
    optionsHi: ['12 14 14 13', '14 16 16 15', '13 15 15 14', '11 13 13 12'],
    correctIndex: 2,
    explanationEn:
      'Each letter is replaced by its English alphabetical position (A = 1, ..., Z = 26):\n• S = 19, U = 21, N = 14 → "19 21 14".\n• M = 13, O = 15, O = 15, N = 14 → "13 15 15 14".',
    explanationHi:
      'प्रत्येक अक्षर का अंग्रेजी वर्णमाला में स्थान मान लिखा गया है:\nS = 19, U = 21, N = 14।\nइसी प्रकार MOON → M(13) O(15) O(15) N(14) = 13 15 15 14।',
  },
  {
    id: 'cgl26_01o3_q12',
    topic: 'Wrong Number Series',
    questionEn: 'Find the INCORRECT number in the series.\n5, 15, 45, 125, 405',
    questionHi: 'श्रृंखला में गलत संख्या ज्ञात कीजिए।\n5, 15, 45, 125, 405',
    optionsEn: ['15', '45', '125', '405'],
    optionsHi: ['15', '45', '125', '405'],
    correctIndex: 2,
    explanationEn:
      'Geometric progression with common ratio ×3:\n• 5 × 3 = 15\n• 15 × 3 = 45\n• 45 × 3 = 135 (not 125)\n• 135 × 3 = 405\nHence, 125 is incorrect.',
    explanationHi:
      'प्रत्येक पद को 3 से गुणा किया गया है:\n5 × 3 = 15, 15 × 3 = 45, 45 × 3 = 135 (यहाँ 125 गलत दिया है), 135 × 3 = 405। अतः गलत संख्या 125 है।',
  },
  {
    id: 'cgl26_01o3_q13',
    topic: 'Venn Diagram',
    questionEn: 'What is the total number of people surveyed?',
    questionHi: 'सर्वेक्षण में शामिल लोगों की कुल संख्या कितनी है?',
    visual: {
      type: 'venn2',
      leftLabel: 'Hindi',
      leftValue: '(450)',
      overlapLabel: 'E+H',
      overlapValue: '(200)',
      rightLabel: 'English',
      rightValue: '(300)',
      outsideLabel: 'Neither (100)',
    },
    optionsEn: ['450', '550', '650', '750'],
    optionsHi: ['450', '550', '650', '750'],
    correctIndex: 2,
    explanationEn:
      'Using the inclusion-exclusion formula from the Venn diagram:\n• n(Hindi) = 450, n(English) = 300, n(E ∩ H) = 200, Neither = 100.\n• Total surveyed = n(H) + n(E) − n(E ∩ H) + Neither\n= 450 + 300 − 200 + 100 = 650.',
    explanationHi:
      'वेन आरेख के सूत्र से:\nकुल लोग = n(हिंदी) + n(अंग्रेज़ी) − n(दोनों) + कोई नहीं\n= 450 + 300 − 200 + 100 = 650।',
  },
  {
    id: 'cgl26_01o3_q14',
    topic: 'Venn Diagram',
    questionEn: 'How many students study only Physics?',
    questionHi: 'कितने छात्र केवल भौतिकी पढ़ते हैं?',
    visual: {
      type: 'venn3',
      topLeftLabel: 'Physics',
      topLeftValue: '(60)',
      topRightLabel: 'Chemistry',
      topRightValue: '(50)',
      bottomLabel: 'Math',
      bottomValue: '(40)',
      topOverlap: 'P∩C (20)',
      leftOverlap: 'P∩M (15)',
      rightOverlap: 'M∩C (10)',
      centerLabel: 'P∩C∩M (5)',
    },
    optionsEn: ['25', '30', '20', '15'],
    optionsHi: ['25', '30', '20', '15'],
    correctIndex: 1,
    explanationEn:
      'From the 3-set Venn diagram:\n• Total Physics = 60\n• P ∩ C = 20, P ∩ M = 15, P ∩ C ∩ M = 5\n• Only Physics = n(P) − n(P ∩ C) − n(P ∩ M) + n(P ∩ C ∩ M)\n= 60 − 20 − 15 + 5 = 30.',
    explanationHi:
      'वेन आरेख से:\nकेवल भौतिकी = कुल भौतिकी − (P∩C) − (P∩M) + (P∩C∩M)\n= 60 − 20 − 15 + 5 = 30 छात्र।',
  },
  {
    id: 'cgl26_01o3_q15',
    topic: 'Figure Classification',
    questionEn:
      'Identify the figure that does not belong to the group, based on shape.',
    questionHi:
      'आकृति के आधार पर उस आकृति की पहचान करें जो समूह से संबंधित नहीं है।',
    imageUrl: '/assets/mock01o3/q15_fig.svg',
    optionsEn: ['Option A', 'Option B', 'Option C', 'Option D'],
    optionsHi: ['विकल्प A', 'विकल्प B', 'विकल्प C', 'विकल्प D'],
    optionImages: [
      '/assets/mock01o3/q15_optA.svg',
      '/assets/mock01o3/q15_optRect.svg',
      '/assets/mock01o3/q15_optRect.svg',
      '/assets/mock01o3/q15_optRect.svg',
    ],
    correctIndex: 0,
    explanationEn:
      'In the given group of 4 figures, three figures are identical unfilled narrow vertical rectangles, while one figure (Option A) is a solid black filled square. Hence, Option (A) does not belong to the group.',
    explanationHi:
      'दिए गए समूह में तीन आकृतियाँ एक जैसी खाली (सफेद) खड़ी आयतें हैं, जबकि विकल्प (A) एक भरा हुआ काला वर्ग है। अतः विकल्प (A) समूह से भिन्न है।',
  },
  {
    id: 'cgl26_01o3_q16',
    topic: 'Arithmetic Reasoning',
    questionEn:
      'A shop sells pens at ₹12 each and notebooks at ₹30 each. If a customer buys 3 pens and 2 notebooks, what’s the total cost?',
    questionHi:
      'एक दुकान ₹12 प्रति पेन और ₹30 प्रति नोटबुक बेचती है। यदि एक ग्राहक 3 पेन और 2 नोटबुक खरीदता है, तो कुल लागत क्या है?',
    optionsEn: ['₹96', '₹114', '₹102', '₹108'],
    optionsHi: ['₹96', '₹114', '₹102', '₹108'],
    correctIndex: 0,
    explanationEn:
      '• Cost of 3 pens = 3 × ₹12 = ₹36\n• Cost of 2 notebooks = 2 × ₹30 = ₹60\n• Total cost = ₹36 + ₹60 = ₹96.',
    explanationHi:
      '• 3 पेनों का मूल्य = 3 × ₹12 = ₹36\n• 2 नोटबुकों का मूल्य = 2 × ₹30 = ₹60\n• कुल लागत = ₹36 + ₹60 = ₹96।',
  },
  {
    id: 'cgl26_01o3_q17',
    topic: 'Letter Analogy',
    questionEn:
      'In the following question, two groups of letters are related by a specific pattern. Identify the same pattern and apply it to the second group to find the missing letters.\nACD : BFJ :: FGH : ?',
    questionHi:
      'निम्नलिखित प्रश्न में, अक्षरों के दो समूह एक विशिष्ट पैटर्न से संबंधित हैं। उसी पैटर्न की पहचान कीजिए और दूसरे समूह पर लागू करके लुप्त अक्षरों का पता लगाइए।\nACD : BFJ :: FGH : ?',
    optionsEn: ['GIN', 'GJO', 'GJN', 'HIL'],
    optionsHi: ['GIN', 'GJO', 'GJN', 'HIL'],
    correctIndex: 2,
    explanationEn:
      'Pattern between ACD and BFJ:\n• A (1) + 1 = B (2)\n• C (3) + 3 = F (6)\n• D (4) + 6 = J (10)\nApplying the same (+1, +3, +6) shift to FGH:\n• F (6) + 1 = G (7)\n• G (7) + 3 = J (10)\n• H (8) + 6 = N (14)\nResult = GJN.',
    explanationHi:
      'ACD → BFJ में पैटर्न (+1, +3, +6) है:\nA+1=B, C+3=F, D+6=J।\nइसी प्रकार FGH पर लागू करने पर:\nF+1=G, G+3=J, H+6=N ⇒ GJN।',
  },
  {
    id: 'cgl26_01o3_q18',
    topic: 'Alphabetical Arrangement',
    questionEn:
      'How many letters will remain at the same position in the word ‘PROBLEM’ when the letters are arranged in alphabetical order from left to right?',
    questionHi:
      'शब्द ‘PROBLEM’ के अक्षरों को बाएँ से दाएँ वर्णानुक्रम में व्यवस्थित करने पर कितने अक्षर अपने मूल स्थान पर बने रहेंगे?',
    optionsEn: ['0', '1', '2', '3'],
    optionsHi: ['0', '1', '2', '3'],
    correctIndex: 0,
    explanationEn:
      'Original word:       P  R  O  B  L  E  M\nAlphabetical order:  B  E  L  M  O  P  R\nComparing each position (1 to 7), no letter remains in its original position. Hence, 0.',
    explanationHi:
      'मूल शब्द:  P  R  O  B  L  E  M\nवर्णानुक्रम: B  E  L  M  O  P  R\nतुलना करने पर एक भी अक्षर अपने मूल स्थान पर नहीं रहता। अतः उत्तर 0 है।',
  },
  {
    id: 'cgl26_01o3_q19',
    topic: 'Matrix Coding',
    questionEn:
      'Identify the alternative set of numbers that correctly codes the word. The code uses [Row, Column] format.\nWhat is the correct code for "MANIFEST"?',
    questionHi:
      'संख्याओं का वह विकल्प चुनें जो शब्द को सही ढंग से कोड करता हो। कोड में [पंक्ति, कॉलम] फ़ॉर्मेट का इस्तेमाल किया गया है।\n"MANIFEST" के लिए सही कोड क्या है?',
    matrix: [
      ['', '1', '2', '3', '4', '5', '6', '7'],
      ['1', 'F', 'R', 'J', 'E', 'M', 'D', 'S'],
      ['2', 'B', 'O', 'T', 'T', 'L', 'E', 'R'],
      ['3', 'C', 'A', 'N', 'D', 'I', 'E', 'P'],
      ['4', 'J', 'U', 'M', 'B', 'L', 'Y', 'O'],
      ['5', 'W', 'O', 'N', 'D', 'E', 'R', 'S'],
      ['6', 'G', 'A', 'R', 'D', 'E', 'N', 'X'],
      ['7', 'P', 'L', 'A', 'N', 'E', 'T', 'Q'],
    ],
    optionsEn: [
      '(4,3)(3,2)(7,4)(3,5)(3,1)(2,5)(5,7)(4,3)',
      '(4,3)(3,2)(7,4)(3,5)(1,4)(2,6)(5,6)(2,4)',
      '(4,3)(3,2)(7,4)(3,5)(1,1)(2,6)(5,7)(2,3)',
      '(4,3)(3,2)(7,4)(3,5)(4,1)(3,1)(5,6)(2,7)',
    ],
    optionsHi: [
      '(4,3)(3,2)(7,4)(3,5)(3,1)(2,5)(5,7)(4,3)',
      '(4,3)(3,2)(7,4)(3,5)(1,4)(2,6)(5,6)(2,4)',
      '(4,3)(3,2)(7,4)(3,5)(1,1)(2,6)(5,7)(2,3)',
      '(4,3)(3,2)(7,4)(3,5)(4,1)(3,1)(5,6)(2,7)',
    ],
    correctIndex: 2,
    explanationEn:
      'Checking Option (C) using [Row, Column]:\n• (4,3) = M\n• (3,2) = A\n• (7,4) = N\n• (3,5) = I\n• (1,1) = F\n• (2,6) = E\n• (5,7) = S\n• (2,3) = T\nThis spells "MANIFEST" accurately.',
    explanationHi:
      '[पंक्ति, कॉलम] के अनुसार विकल्प (C) की जाँच:\n(4,3)=M, (3,2)=A, (7,4)=N, (3,5)=I, (1,1)=F, (2,6)=E, (5,7)=S, (2,3)=T ⇒ MANIFEST। अतः विकल्प (C) सही है।',
  },
  {
    id: 'cgl26_01o3_q20',
    topic: 'Decision Making & Ethics',
    questionEn:
      "You're working on a team project, and a colleague asks you to cover for them by saying they were in a meeting with you yesterday afternoon, when in fact they left early without informing the manager. What should you do?",
    questionHi:
      'आप एक टीम परियोजना (Team Project) पर कार्य कर रहे हैं और आपका एक सहकर्मी (Colleague) आपसे यह कहकर उसका साथ देने के लिए कहता है कि कल दोपहर वह आपके साथ एक बैठक (Meeting) में था, जबकि वास्तव में वह प्रबंधक (Manager) को सूचित किए बिना समय से पहले चला गया था।\nआपको क्या करना चाहिए?',
    optionsEn: [
      "Agree to cover for them since they're a friend and would do the same for you.",
      "Politely decline, and tell them you're not comfortable being dishonest if asked.",
      'Immediately report your colleague to the manager.',
      'Ignore the request and avoid the colleague going forward.',
    ],
    optionsHi: [
      'उसका साथ देने के लिए सहमत हो जाएँ क्योंकि वह आपका मित्र है और वह भी आपके लिए ऐसा ही करेगा।',
      'विनम्रतापूर्वक मना कर दें और उसे बताएं कि यदि आपसे पूछा गया तो आप बेईमानी करने में सहज महसूस नहीं करेंगे।',
      'तुरंत अपने सहकर्मी की शिकायत प्रबंधक से कर दें।',
      'उसके अनुरोध को अनदेखा कर दें और भविष्य में उससे दूरी बना लें।',
    ],
    correctIndex: 1,
    explanationEn:
      'Professional integrity requires refusing to lie without unnecessarily escalating conflict. Politely declining and clearly communicating your boundary about honesty upholds workplace ethics while remaining respectful to your colleague.',
    explanationHi:
      'व्यावसायिक ईमानदारी के लिए झूठ बोलने से विनम्रतापूर्वक मना करना और स्पष्ट रूप से अपनी सीमा बताना सबसे संतुलित और नैतिक कदम है। अतः विकल्प (B) सही है।',
  },
  {
    id: 'cgl26_01o3_q21',
    topic: 'Figure Analogy',
    questionEn:
      'In the following question, there is a specific relationship between the first two figures. Establish a similar relationship between the third and fourth figures by selecting a suitable figure from the given Answer Figures to replace the question mark (?).',
    questionHi:
      'निम्नलिखित प्रश्न में, पहली दो आकृतियों के बीच एक विशिष्ट संबंध दिया गया है। उसी संबंध के आधार पर तीसरी और चौथी आकृतियों के बीच संबंध स्थापित कीजिए तथा प्रश्नवाचक चिह्न (?) के स्थान पर आने वाली उपयुक्त आकृति का चयन दिए गए उत्तर विकल्पों में से कीजिए।',
    imageUrl: '/assets/mock01o3/q21_analogy.svg',
    optionsEn: ['3', '2', '1', '4'],
    optionsHi: ['3', '2', '1', '4'],
    correctIndex: 0,
    explanationEn:
      'From Figure 1 to Figure 2, the entire divided circle rotates by 180° (diagonally opposite quadrants swap places: TT ↔ VV and XX ↔ OO).\nApplying the exact same 180° rotation to Figure 3 (TL=OO, TR=VV, BL=XX, BR=TT) yields TL=TT, TR=XX, BL=VV, BR=OO — which is Answer Figure (3). Hence, Option (A) is correct.',
    explanationHi:
      'आकृति 1 से आकृति 2 में पूरा वृत्त 180° घूम जाता है (विपरीत चतुर्थांश आपस में स्थान बदल लेते हैं: TT ↔ VV और XX ↔ OO)।\nआकृति 3 को 180° घुमाने पर उत्तर आकृति (3) प्राप्त होती है। अतः विकल्प (A) सही है।',
  },
  {
    id: 'cgl26_01o3_q22',
    topic: 'Figure Analogy',
    questionEn:
      'In the following question, there is a specific relationship between the first two figures. Establish a similar relationship between the third and fourth figures by selecting a suitable figure from the given Answer Figures to replace the question mark (?).',
    questionHi:
      'निम्नलिखित प्रश्न में, पहली दो आकृतियों के बीच एक विशिष्ट संबंध दिया गया है। उसी संबंध के आधार पर तीसरी और चौथी आकृतियों के बीच संबंध स्थापित कीजिए तथा प्रश्नवाचक चिह्न (?) के स्थान पर आने वाली उपयुक्त आकृति का चयन दिए गए उत्तर विकल्पों में से कीजिए।',
    imageUrl: '/assets/mock01o3/q22_analogy.svg',
    optionsEn: ['1', '2', '3', '4'],
    optionsHi: ['1', '2', '3', '4'],
    correctIndex: 0,
    explanationEn:
      'From Figure 1 to Figure 2:\n1. The number of shapes doubles horizontally (1 circle → 2 circles side by side).\n2. Each shape rotates 90° clockwise so the left-shaded vertical split becomes a top-shaded horizontal split.\nApplying this rule to Figure 3 (2 left-shaded squares) produces 4 top-shaded squares arranged in a horizontal row — Answer Figure (1). Hence, Option (A) is correct.',
    explanationHi:
      'आकृति 1 से आकृति 2 में आकृतियों की संख्या दोगुनी हो जाती है (1 से 2) और बायाँ छायांकित भाग 90° दक्षिणावर्त घूमकर ऊपरी छायांकित भाग बन जाता है।\nइसी नियम से आकृति 3 के 2 वर्गों से 4 ऊपरी छायांकित वर्ग एक क्षैतिज पंक्ति में बनेंगे — उत्तर आकृति (1)।',
  },
  {
    id: 'cgl26_01o3_q23',
    topic: 'Embedded Figures',
    questionEn:
      'In the following question, select the alternative figure which is embedded in the given fig. (X).',
    questionHi:
      'दिए गए प्रश्न में, उस वैकल्पिक आकृति का चयन कीजिए जो दी गई आकृति (X) में अंतर्निहित है।',
    imageUrl: '/assets/mock01o3/q23_embedded.svg',
    optionsEn: ['2', '3', '4', '1'],
    optionsHi: ['2', '3', '4', '1'],
    correctIndex: 1,
    explanationEn:
      'Tracing the central line segments inside the circle of Figure (X), the symmetric hourglass/crown-shaped polygon shown in Alternative Figure (3) is directly embedded upright from top-left and top-right chords down through the center to the lower chords. Hence, Option (B) 3 is correct.',
    explanationHi:
      'आकृति (X) के भीतर खींची गई रेखाओं का निरीक्षण करने पर वैकल्पिक आकृति (3) की सममित (M/मुकुट जैसी) आकृति सीधी स्थिति में स्पष्ट रूप से अंतर्निहित दिखाई देती है। अतः विकल्प (B) 3 सही है।',
  },
  {
    id: 'cgl26_01o3_q24',
    topic: 'Counting Figures',
    questionEn: 'How many triangles are there in the given figure?',
    questionHi: 'दिए गए चित्र में कितने त्रिभुज हैं?',
    imageUrl: '/assets/mock01o3/q24_triangles.svg',
    optionsEn: ['27', '25', '19', '15'],
    optionsHi: ['27', '25', '19', '15'],
    correctIndex: 0,
    explanationEn:
      'Counting systematically using the vertical axis of symmetry:\n• Large outer inverted triangle split by vertical median → 3 triangles (left half, right half, whole).\n• Middle upright triangle split by vertical median → 3 triangles.\n• Inner inverted triangle split by vertical median → 3 triangles.\n• Pairwise intersections along the left/right symmetric star points and internal subdivisions add 9 symmetric left-side + 9 symmetric right-side triangles = 18 additional triangles.\n• Total triangles = 3 + 3 + 3 + 18 = 27.',
    explanationHi:
      'ऊर्ध्वाधर सममिति अक्ष के आधार पर व्यवस्थित गणना करने पर:\n• बड़े, मध्य और भीतरी तीनों मुख्य त्रिभुजों (प्रत्येक 2 भागों में विभाजित) से 3 × 3 = 9 त्रिभुज बनते हैं।\n• बाईं और दाईं ओर के सभी प्रतिच्छेदी छोटे एवं संयुक्त त्रिभुजों से 18 अतिरिक्त त्रिभुज प्राप्त होते हैं।\n• कुल त्रिभुज = 9 + 18 = 27।',
  },
  {
    id: 'cgl26_01o3_q25',
    topic: 'Embedded Figures',
    questionEn:
      'Carefully observe Figure (X) and identify the option figure in which Figure (X) is embedded exactly as shown.',
    questionHi:
      'आकृति (X) का ध्यानपूर्वक अवलोकन कीजिए तथा उस विकल्प-आकृति की पहचान कीजिए जिसमें आकृति (X) उसी रूप में अथवा घुमाए गए रूप में अंतर्निहित हो।',
    imageUrl: '/assets/mock01o3/q25_embedded.svg',
    optionsEn: ['3', '2', '1', '4'],
    optionsHi: ['3', '2', '1', '4'],
    correctIndex: 0,
    explanationEn:
      'The exact "W" shape of Figure (X)—with two inward-sloping outer sides meeting two central diagonals rising to a mid-point peak—appears directly inside Answer Figure (3) (forming the outer left slant, central V-peak, and outer right slant). Hence, Option (A) 3 is correct.',
    explanationHi:
      'आकृति (X) की "W" संरचना (दो तिरछी बाहरी भुजाएँ और मध्य में उठता हुआ कोण) उत्तर आकृति (3) में सीधे और पूर्ण रूप से अंतर्निहित है। अतः विकल्प (A) 3 सही है।',
  },
];
