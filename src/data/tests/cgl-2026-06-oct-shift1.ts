import { MockTest, Question } from '../../types/exam';

const SECTION_1_REASONING_O6S1: Question[] = [
  {
    id: 'cgl26_06o1_q1',
    topic: 'Blood Relations',
    questionEn:
      'Pointing to a girl, Rohan said, “She is the daughter of the only child of my father.” How is the girl related to Rohan?',
    questionHi:
      'एक लड़की की ओर इशारा करते हुए रोहन ने कहा, “वह मेरे पिता की इकलौती संतान की बेटी है।” वह लड़की रोहन से किस प्रकार संबंधित है?',
    optionsEn: ['Sister', 'Niece', 'Daughter', 'Cousin'],
    optionsHi: ['बहन', 'भतीजी', 'बेटी', 'चचेरा'],
    correctIndex: 2,
    explanationEn:
      '“The only child of my father” refers to Rohan himself. Therefore, the daughter of Rohan’s father’s only child is Rohan’s own daughter.',
    explanationHi:
      '“मेरे पिता की इकलौती संतान” स्वयं रोहन है। अतः रोहन की इकलौती संतान की बेटी, रोहन की बेटी (Daughter) हुई।',
  },
  {
    id: 'cgl26_06o1_q2',
    topic: 'Syllogism',
    questionEn:
      'In the question below, some statements are given followed by some conclusions. Taking the given statements to be true, decide which conclusion logically follows.\nStatements:\n• All doctors are educated.\n• All educated people read books.\nConclusions:\n• I. All doctors read books.\n• II. Some educated people are doctors.\n• III. All book readers are doctors.\n• IV. Some doctors are not educated.',
    questionHi:
      'नीचे दिए गए प्रश्न में, कुछ कथन दिए गए हैं और उनके बाद कुछ निष्कर्ष दिए गए हैं। दिए गए कथनों को सत्य मानते हुए तय कीजिए कि कौन-सा निष्कर्ष तार्किक रूप से अनुसरण करता है।\nकथन:\n• सभी डॉक्टर शिक्षित हैं।\n• सभी शिक्षित लोग पुस्तकें पढ़ते हैं।\nनिष्कर्ष:\n• I. सभी डॉक्टर पुस्तकें पढ़ते हैं।\n• II. कुछ शिक्षित लोग डॉक्टर हैं।\n• III. सभी पुस्तकें पढ़ने वाले डॉक्टर हैं।\n• IV. कुछ डॉक्टर शिक्षित नहीं हैं।',
    optionsEn: [
      'Only I and II follow',
      'Only II follows',
      'Only III follows',
      'Only I and IV follow',
    ],
    optionsHi: [
      'केवल I और II अनुसरण करते हैं',
      'केवल II अनुसरण करता है',
      'केवल III अनुसरण करता है',
      'केवल I और IV अनुसरण करते हैं',
    ],
    correctIndex: 0,
    explanationEn:
      'Chain: Doctors ⊂ Educated ⊂ Book Readers.\n• I follows directly (All doctors read books).\n• II follows by conversion of “All doctors are educated” → “Some educated people are doctors”.\n• III does not follow (reverse inclusion is not guaranteed).\n• IV directly contradicts Statement 1.\nHence, only I and II follow.',
    explanationHi:
      'तार्किक श्रृंखला: डॉक्टर ⊂ शिक्षित ⊂ पुस्तक पढ़ने वाले।\n• निष्कर्ष I प्रत्यक्ष रूप से सत्य है (सभी डॉक्टर पुस्तकें पढ़ते हैं)।\n• निष्कर्ष II कथन 1 के रूपांतरण से सत्य है (कुछ शिक्षित लोग डॉक्टर हैं)।\n• निष्कर्ष III और IV असत्य हैं। अतः केवल I और II अनुसरण करते हैं।',
  },
  {
    id: 'cgl26_06o1_q3',
    topic: 'Number Series',
    questionEn:
      'Find the missing number in the following series:\n11, 19, 59, 115, 347, ?',
    questionHi:
      'निम्न श्रेणी में लुप्त संख्या ज्ञात कीजिए:\n11, 19, 59, 115, 347, ?',
    optionsEn: ['683', '691', '707', '713'],
    optionsHi: ['683', '691', '707', '713'],
    correctIndex: 1,
    explanationEn:
      'The series alternates between (×2 − 3) and (×3 + 2):\n• 11 × 2 − 3 = 19\n• 19 × 3 + 2 = 59\n• 59 × 2 − 3 = 115\n• 115 × 3 + 2 = 347\n• 347 × 2 − 3 = 694 − 3 = 691.',
    explanationHi:
      'श्रेणी एकांतर रूप से (×2 − 3) और (×3 + 2) के नियम का पालन करती है:\n• 11 × 2 − 3 = 19\n• 19 × 3 + 2 = 59\n• 59 × 2 − 3 = 115\n• 115 × 3 + 2 = 347\n• 347 × 2 − 3 = 691।',
  },
  {
    id: 'cgl26_06o1_q4',
    topic: 'Alphabetical Ordering',
    questionEn:
      "How many letters will remain at the same position in the word 'BALANCE' when arranged alphabetically?",
    questionHi:
      "शब्द 'BALANCE' के अक्षरों को वर्णानुक्रम में व्यवस्थित करने पर कितने अक्षर अपने मूल स्थान पर बने रहेंगे?",
    optionsEn: ['0', '1', '2', '3'],
    optionsHi: ['0', '1', '2', '3'],
    correctIndex: 1,
    explanationEn:
      'Original word: B  A  L  A  N  C  E\nAlphabetical:  A  A  B  C  E  L  N\nComparing position by position, only the 2nd letter (A) stays in its original position. Hence, 1 letter remains unchanged.',
    explanationHi:
      'मूल शब्द:   B  A  L  A  N  C  E\nवर्णानुक्रम: A  A  B  C  E  L  N\nतुलना करने पर केवल दूसरे स्थान पर अक्षर ‘A’ अपरिवर्तित रहता है। अतः सही उत्तर 1 है।',
  },
  {
    id: 'cgl26_06o1_q5',
    topic: 'Coded Blood Relations',
    questionEn:
      'Answer the given question based on the given information:\n1. P # Q means P is the son of Q.\n2. P & Q means P is the sister of Q.\n3. P ^ Q means P is the father of Q.\nWhich of the following options shows the relation that X is the granddaughter of Z?',
    questionHi:
      'दी गई जानकारी के आधार पर सवाल का जवाब दें:\n1. P # Q का मतलब है कि P, Q का बेटा है।\n2. P & Q का मतलब है कि P, Q की बहन है।\n3. P ^ Q का मतलब है कि P, Q का पिता है।\nइनमें से कौन-सा विकल्प यह दिखाता है कि X, Z की पोती/नातिन है?',
    optionsEn: [
      'X # Y ^ W ^ Z',
      'Y ^ W ^ Z # X',
      'X & Y # W # Z',
      'Z # Y ^ W ^ X',
    ],
    optionsHi: [
      'X # Y ^ W ^ Z',
      'Y ^ W ^ Z # X',
      'X & Y # W # Z',
      'Z # Y ^ W ^ X',
    ],
    correctIndex: 2,
    explanationEn:
      'Checking option (C): X & Y # W # Z\n• X & Y ⇒ X is the sister of Y (so X is female).\n• Y # W ⇒ Y is the son of W (so X is the daughter of W).\n• W # Z ⇒ W is the son of Z.\nTherefore, X is the daughter of Z’s son, i.e., X is the granddaughter of Z.',
    explanationHi:
      'विकल्प (C) X & Y # W # Z की जाँच:\n• X & Y ⇒ X, Y की बहन है (X महिला है)।\n• Y # W ⇒ Y, W का बेटा है (अतः X, W की बेटी है)।\n• W # Z ⇒ W, Z का बेटा है।\nअतः X, Z की पोती (granddaughter) है।',
  },
  {
    id: 'cgl26_06o1_q6',
    topic: 'Blood Relations',
    questionEn:
      'M is the husband of N. V is the daughter of M. L is the husband of V. K is the daughter of L. How is K related to N?',
    questionHi:
      'M, N का पति है। V, M की बेटी है। L, V का पति है। K, L की बेटी है। K का N से क्या रिश्ता है?',
    optionsEn: [
      'Maternal Granddaughter',
      'Paternal Granddaughter',
      'Maternal Aunt',
      'Paternal Aunt',
    ],
    optionsHi: ['नातिन (Maternal Granddaughter)', 'पैतृक पोती', 'मामी', 'बुआ'],
    correctIndex: 0,
    explanationEn:
      'M (+) and N (−) are a married couple. V (−) is their daughter. L (+) is V’s husband, and K (−) is the daughter of L and V. Since K is the daughter of N’s daughter (V), K is the Maternal Granddaughter (नातिन) of N.',
    explanationHi:
      'M और N पति-पत्नी हैं तथा V उनकी बेटी है। L, V का पति है और K उनकी बेटी है। चूँकि K, N की बेटी (V) की बेटी है, अतः K, N की नातिन (Maternal Granddaughter) है।',
  },
  {
    id: 'cgl26_06o1_q7',
    topic: 'Missing Number in Matrix',
    questionEn:
      'In the following question, a matrix of numbers is given. These numbers follow a certain pattern either row-wise or column-wise. Identify this pattern and choose the missing number accordingly.',
    questionHi:
      'निम्नलिखित प्रश्न में, संख्याओं का एक आव्यूह दिया गया है। ये संख्याएँ या तो पंक्ति-वार अथवा स्तंभ-वार किसी निश्चित स्वरूप का पालन करती हैं। इस स्वरूप की पहचान कीजिए तथा उसके अनुसार लुप्त संख्या ज्ञात कीजिए।',
    matrix: [
      ['5', '3', '4', '64'],
      ['6', '2', '5', '65'],
      ['2', '7', '3', '?'],
    ],
    optionsEn: ['63', '57', '71', '45'],
    optionsHi: ['63', '57', '71', '45'],
    correctIndex: 3,
    explanationEn:
      'Row-wise rule: (Col 1 × Col 2 + 1) × Col 3 = Col 4\n• Row 1: (5 × 3 + 1) × 4 = 16 × 4 = 64\n• Row 2: (6 × 2 + 1) × 5 = 13 × 5 = 65\n• Row 3: (2 × 7 + 1) × 3 = 15 × 3 = 45.',
    explanationHi:
      'पंक्ति-वार नियम: (स्तंभ 1 × स्तंभ 2 + 1) × स्तंभ 3 = स्तंभ 4\n• पंक्ति 1: (5 × 3 + 1) × 4 = 16 × 4 = 64\n• पंक्ति 2: (6 × 2 + 1) × 5 = 13 × 5 = 65\n• पंक्ति 3: (2 × 7 + 1) × 3 = 15 × 3 = 45।',
  },
  {
    id: 'cgl26_06o1_q8',
    topic: 'Rule Verification (Numbers)',
    questionEn:
      'Roll numbers are assigned where the middle two digits are the product of the first and last digits. Identify the invalid entry.',
    questionHi:
      'ऐसे रोल नंबर दिए गए हैं जिनमें बीच के दो अंक, पहले और आखिरी अंकों का गुणनफल हैं। गलत एंट्री की पहचान करें।',
    optionsEn: ['3186', '4205', '2122', '5306'],
    optionsHi: ['3186', '4205', '2122', '5306'],
    correctIndex: 2,
    explanationEn:
      'Checking product of first and last digits against the middle two digits:\n• 3186 → 3 × 6 = 18 (Valid)\n• 4205 → 4 × 5 = 20 (Valid)\n• 2122 → 2 × 2 = 04 ≠ 12 (Invalid)\n• 5306 → 5 × 6 = 30 (Valid)\nHence, 2122 is the invalid entry.',
    explanationHi:
      'पहले और अंतिम अंक का गुणनफल जाँचने पर:\n• 3186 → 3 × 6 = 18 (सही)\n• 4205 → 4 × 5 = 20 (सही)\n• 2122 → 2 × 2 = 04 ≠ 12 (गलत)\n• 5306 → 5 × 6 = 30 (सही)\nअतः 2122 गलत एंट्री है।',
  },
  {
    id: 'cgl26_06o1_q9',
    topic: 'Letter Series',
    questionEn:
      'Study the pattern in the given series and find the next set of letters in the series.\nHAB, LZF, PYJ, ?',
    questionHi:
      'दी गई श्रृंखला के प्रतिरूप का अध्ययन कीजिए तथा श्रृंखला में अक्षरों के अगले समूह का पता लगाइए।\nHAB, LZF, PYJ, ?',
    optionsEn: ['TXN', 'TOX', 'TVN', 'TXM'],
    optionsHi: ['TXN', 'TOX', 'TVN', 'TXM'],
    correctIndex: 0,
    explanationEn:
      'Position-wise pattern:\n• 1st letter (+4): H(8) → L(12) → P(16) → T(20)\n• 2nd letter (−1): A(1) → Z(26) → Y(25) → X(24)\n• 3rd letter (+4): B(2) → F(6) → J(10) → N(14)\nHence, the next cluster is TXN.',
    explanationHi:
      'प्रत्येक स्थान का पैटर्न:\n• पहला अक्षर (+4): H → L → P → T\n• दूसरा अक्षर (−1): A → Z → Y → X\n• तीसरा अक्षर (+4): B → F → J → N\nअतः अगला अक्षर-समूह TXN होगा।',
  },
  {
    id: 'cgl26_06o1_q10',
    topic: 'Number Classification (Odd Pair)',
    questionEn: 'Select the odd number pair from the given alternatives.',
    questionHi: 'निम्नलिखित विकल्पों में से विषम संख्या युग्म का चयन कीजिए।',
    optionsEn: ['11, 132', '24, 608', '30, 930', '27, 756'],
    optionsHi: ['11, 132', '24, 608', '30, 930', '27, 756'],
    correctIndex: 1,
    explanationEn:
      'Pattern followed by three pairs is n : n × (n + 1):\n• 11 × 12 = 132\n• 30 × 31 = 930\n• 27 × 28 = 756\n• However, 24 × 25 = 600 ≠ 608.\nHence, (24, 608) is the odd number pair.',
    explanationHi:
      'तीन युग्मों में नियम n : n(n + 1) लागू होता है:\n• 11 × 12 = 132, 30 × 31 = 930, 27 × 28 = 756।\n• जबकि 24 × 25 = 600 होता है (608 नहीं)। अतः (24, 608) विषम युग्म है।',
  },
  {
    id: 'cgl26_06o1_q11',
    topic: 'Missing Number in Matrix',
    questionEn:
      'In the following question, a matrix of numbers is given. These numbers follow a certain pattern either row-wise or column-wise. Identify this pattern and choose the missing number accordingly.',
    questionHi:
      'नीचे दिए गए प्रश्न में संख्याओं का एक मैट्रिक्स दिया गया है। ये संख्याएँ पंक्ति या स्तंभ के अनुसार किसी विशेष पैटर्न का पालन करती हैं। इस पैटर्न की पहचान कीजिए और उसके अनुसार लुप्त संख्या का चयन कीजिए।',
    matrix: [
      ['42', '44', '38'],
      ['28', '55', '23'],
      ['39', '?', '37'],
    ],
    optionsEn: ['11', '33', '22', '44'],
    optionsHi: ['11', '33', '22', '44'],
    correctIndex: 2,
    explanationEn:
      'Row-wise rule: (Col 1 − Col 3) × 11 = Col 2\n• Row 1: (42 − 38) × 11 = 4 × 11 = 44\n• Row 2: (28 − 23) × 11 = 5 × 11 = 55\n• Row 3: (39 − 37) × 11 = 2 × 11 = 22.',
    explanationHi:
      'पंक्ति-वार नियम: (स्तंभ 1 − स्तंभ 3) × 11 = स्तंभ 2\n• पंक्ति 1: (42 − 38) × 11 = 44\n• पंक्ति 2: (28 − 23) × 11 = 55\n• पंक्ति 3: (39 − 37) × 11 = 2 × 11 = 22।',
  },
  {
    id: 'cgl26_06o1_q12',
    topic: 'Situational Judgement',
    questionEn:
      'You are a municipal officer. Residents are protesting against the construction of a waste treatment plant near their locality because they fear health problems. The project is important for the city. What would you do?',
    questionHi:
      'आप एक नगरपालिका अधिकारी हैं। निवासी अपने क्षेत्र के निकट एक अपशिष्ट उपचार संयंत्र के निर्माण का विरोध कर रहे हैं क्योंकि उन्हें स्वास्थ्य संबंधी समस्याओं की आशंका है। यह परियोजना शहर के लिए महत्वपूर्ण है। आप क्या करेंगे?',
    optionsEn: [
      'Start the construction immediately without informing the residents further.',
      'Cancel the project completely to avoid opposition from the residents.',
      'Request a transfer so that another officer handles the situation instead.',
      "Explain the safeguards involved and address the residents' concerns openly.",
    ],
    optionsHi: [
      'निवासियों को और अधिक जानकारी दिए बिना तुरंत निर्माण कार्य प्रारंभ कर दें।',
      'निवासियों के विरोध से बचने के लिए परियोजना को पूर्णतः रद्द कर दें।',
      'स्थानांतरण का अनुरोध करें ताकि इस स्थिति को कोई अन्य अधिकारी संभाले।',
      'परियोजना में शामिल सुरक्षा उपायों को स्पष्ट रूप से समझाएँ और निवासियों की चिंताओं का खुले रूप से समाधान करें।',
    ],
    correctIndex: 3,
    explanationEn:
      'Responsible public administration requires transparent dialogue—explaining environmental/health safeguards and openly addressing residents’ concerns rather than ignoring them, abandoning vital public infrastructure, or evading duty.',
    explanationHi:
      'एक जिम्मेदार अधिकारी के रूप में पारदर्शी संवाद द्वारा सुरक्षा उपायों को स्पष्ट करना और निवासियों की चिंताओं का समाधान करना सबसे उपयुक्त व रचनात्मक कदम है।',
  },
  {
    id: 'cgl26_06o1_q13',
    topic: 'Alphanumeric Analogy',
    questionEn: 'Choose the best alternative.\nA1 : B3 :: C5 : ?',
    questionHi: 'प्रश्न-चिन्ह (?) के स्थान पर आने वाला विकल्प चुनिए।\nA1 : B3 :: C5 : ?',
    optionsEn: ['D7', 'D6', 'E7', 'D8'],
    optionsHi: ['D7', 'D6', 'E7', 'D8'],
    correctIndex: 0,
    explanationEn:
      'Pattern: Letter advances by +1 and Number advances by +2 (also note: number = 2 × letter position − 1).\n• A(1) → B(2), 1 → 3 (+2)\n• C(3) → D(4), 5 → 7 (+2)\nHence, C5 : D7.',
    explanationHi:
      'नियम: अक्षर +1 बढ़ता है और संख्या +2 बढ़ती है।\n• A → B, 1 + 2 = 3 (B3)\n• C → D, 5 + 2 = 7 (D7)।',
  },
  {
    id: 'cgl26_06o1_q14',
    topic: 'Letter Analogy',
    questionEn:
      'What should come in place of the question mark (?) in the following analogy?\nABYZ : CDWX :: EFUV : ?',
    questionHi:
      'निम्नलिखित सादृश्य में प्रश्न चिह्न (?) के स्थान पर क्या आएगा?\nABYZ : CDWX :: EFUV : ?',
    optionsEn: ['SGHT', 'GHST', 'GHTU', 'FGST'],
    optionsHi: ['SGHT', 'GHST', 'GHTU', 'FGST'],
    correctIndex: 1,
    explanationEn:
      'The first two letters shift forward by +2 and the last two letters shift backward by −2 (each term also pairs letters with their alphabet opposites: E↔V, F↔U; G↔T, H↔S):\n• E(+2)=G, F(+2)=H, U(−2)=S, V(−2)=T ⇒ GHST.',
    explanationHi:
      'पहले दो अक्षरों में +2 तथा अंतिम दो अक्षरों में −2 होता है:\n• E(+2)=G, F(+2)=H, U(−2)=S, V(−2)=T ⇒ GHST।',
  },
  {
    id: 'cgl26_06o1_q15',
    topic: 'Syllogism',
    questionEn:
      'Consider the statements to be true and decide which of the given conclusions logically follow.\nStatements:\n1. No optimist ignores challenges.\n2. Some leaders are optimists.\n3. All those who ignore challenges fail.\nConclusions:\nI. Some leaders do not ignore challenges.\nII. Some leaders do not fail.\nIII. No optimist fails.\nIV. Some optimists are leaders.',
    questionHi:
      'दिए गए कथनों को सत्य मानते हुए तय कीजिए कि कौन-से निष्कर्ष तार्किक रूप से अनुसरण करते हैं।\nकथन:\n1. कोई भी आशावादी चुनौतियों की उपेक्षा नहीं करता है।\n2. कुछ लीडर, आशावादी हैं।\n3. वे सभी जो चुनौतियों की उपेक्षा करते हैं, असफल होते हैं।\nनिष्कर्ष:\nI. कुछ लीडर चुनौतियों की उपेक्षा नहीं करते हैं।\nII. कुछ लीडर असफल नहीं होते हैं।\nIII. कोई भी आशावादी असफल नहीं होता है।\nIV. कुछ आशावादी, लीडर हैं।',
    optionsEn: [
      'Only I and IV follow',
      'Only I, II and IV follow',
      'Only I follows',
      'I, II, III and IV follow',
    ],
    optionsHi: [
      'केवल I और IV अनुसरण करते हैं',
      'केवल I, II और IV अनुसरण करते हैं',
      'केवल I अनुसरण करता है',
      'I, II, III और IV अनुसरण करते हैं',
    ],
    correctIndex: 0,
    explanationEn:
      '• I follows: Since some leaders are optimists (2) and no optimist ignores challenges (1), those leaders do not ignore challenges.\n• IV follows: Direct conversion of Statement 2 (“Some leaders are optimists” ⇒ “Some optimists are leaders”).\n• II & III do NOT follow: Statement 3 only says “All challenge-ignorers fail”; people who do NOT ignore challenges could still fail for other reasons.\nHence, only I and IV follow.',
    explanationHi:
      '• I सत्य है: जो लीडर आशावादी हैं वे चुनौतियों की उपेक्षा नहीं करते।\n• IV सत्य है: कथन 2 के प्रत्यक्ष रूपांतरण से “कुछ आशावादी, लीडर हैं”।\n• II और III निश्चित नहीं हैं क्योंकि चुनौतियों की उपेक्षा न करने वाले भी अन्य कारणों से असफल हो सकते हैं।\nअतः केवल I और IV अनुसरण करते हैं।',
  },
  {
    id: 'cgl26_06o1_q16',
    topic: 'Syllogism',
    questionEn:
      'Consider the statements to be true and decide which of the given conclusions logically follow.\nStatements:\n1. No urban area lacks infrastructure.\n2. All developed zones are urban areas.\n3. Some industrial regions are developed zones.\nConclusions:\nI. No developed zone lacks infrastructure.\nII. Some industrial regions do not lack infrastructure.\nIII. Some industrial regions are urban areas.\nIV. All industrial regions are developed zones.',
    questionHi:
      'दिए गए कथनों को सत्य मानते हुए तय कीजिए कि कौन-से निष्कर्ष तार्किक रूप से अनुसरण करते हैं।\nकथन:\n1. कोई भी शहरी क्षेत्र, अवसंरचना विहीन नहीं है।\n2. सभी विकसित क्षेत्र, शहरी क्षेत्र हैं।\n3. कुछ औद्योगिक क्षेत्र, विकसित क्षेत्र हैं।\nनिष्कर्ष:\nI. कोई भी विकसित क्षेत्र, अवसंरचना विहीन नहीं है।\nII. कुछ औद्योगिक क्षेत्र, अवसंरचना विहीन नहीं हैं।\nIII. कुछ औद्योगिक क्षेत्र, शहरी क्षेत्र हैं।\nIV. सभी औद्योगिक क्षेत्र, विकसित क्षेत्र हैं।',
    optionsEn: [
      'Only I, II and IV follow',
      'Only I and II follow',
      'Only I, II and III follow',
      'All four follow',
    ],
    optionsHi: [
      'केवल I, II और IV अनुसरण करते हैं',
      'केवल I और II अनुसरण करते हैं',
      'केवल I, II और III अनुसरण करते हैं',
      'सभी चारों अनुसरण करते हैं',
    ],
    correctIndex: 2,
    explanationEn:
      '• I follows: Developed zones ⊂ Urban areas, and Urban areas ∩ Lacks-infrastructure = ∅ ⇒ No developed zone lacks infrastructure.\n• III follows: Some industrial regions are developed zones, and all developed zones are urban areas ⇒ Some industrial regions are urban areas.\n• II follows: Those industrial regions that are developed zones/urban areas do not lack infrastructure.\n• IV does NOT follow (“Some” does not imply “All”).\nHence, only I, II and III follow.',
    explanationHi:
      '• I सत्य है क्योंकि सभी विकसित क्षेत्र शहरी हैं और कोई शहरी क्षेत्र अवसंरचना विहीन नहीं है।\n• II और III सत्य हैं क्योंकि कुछ औद्योगिक क्षेत्र विकसित (अतः शहरी) हैं और इसलिए वे अवसंरचना विहीन नहीं हैं।\n• IV असत्य है (“कुछ” से “सभी” निष्कर्ष नहीं निकलता)। अतः केवल I, II और III अनुसरण करते हैं।',
  },
  {
    id: 'cgl26_06o1_q17',
    topic: 'Mathematical Operations (Sign Interchange)',
    questionEn:
      'Which two signs should be interchanged to make the given equation correct?\n36 − 12 × 6 ÷ 3 + 4 = 34',
    questionHi:
      'निम्नलिखित समीकरण को गणितीय रूप से सही बनाने के लिए किन दो चिह्नों का आपस में अदल-बदल किया जाना चाहिए?\n36 − 12 × 6 ÷ 3 + 4 = 34',
    optionsEn: ['− and +', '× and ÷', '× and +', '÷ and +'],
    optionsHi: ['− और +', '× और ÷', '× और +', '÷ और +'],
    correctIndex: 1,
    explanationEn:
      'Interchanging × and ÷:\n36 − 12 ÷ 6 × 3 + 4\nUsing BODMAS: 36 − (2 × 3) + 4 = 36 − 6 + 4 = 34 (matches RHS).',
    explanationHi:
      '× और ÷ को आपस में बदलने पर:\n36 − 12 ÷ 6 × 3 + 4 = 36 − (2 × 3) + 4 = 36 − 6 + 4 = 34।',
  },
  {
    id: 'cgl26_06o1_q18',
    topic: 'Statement & Conclusions',
    questionEn:
      'Statement:\nDue to travel restrictions imposed during the global health crisis, the team missed several important away fixtures, which affected their overall league performance.\nConclusions:\nI. Travel restrictions had an impact on the team’s performance.\nII. The team would have definitely won the league without restrictions.',
    questionHi:
      'कथन:\nवैश्विक स्वास्थ्य संकट के दौरान लगाए गए यात्रा प्रतिबंधों के कारण टीम कई महत्वपूर्ण बाहरी (अवे) मैचों में भाग नहीं ले सकी, जिससे लीग में उसके समग्र प्रदर्शन पर प्रभाव पड़ा।\nनिष्कर्ष:\nI. यात्रा प्रतिबंधों का टीम के प्रदर्शन पर प्रभाव पड़ा।\nII. यदि यात्रा प्रतिबंध न होते, तो टीम निश्चित रूप से लीग जीत जाती।',
    optionsEn: [
      'Only Conclusion I follows',
      'Only Conclusion II follows',
      'Both Conclusions I and II follow',
      'Neither conclusion I nor II follows',
    ],
    optionsHi: [
      'केवल निष्कर्ष I अनुसरण करता है।',
      'केवल निष्कर्ष II अनुसरण करता है।',
      'निष्कर्ष I और II दोनों अनुसरण करते हैं।',
      'न तो निष्कर्ष I और न ही निष्कर्ष II अनुसरण करता है।',
    ],
    correctIndex: 0,
    explanationEn:
      'Conclusion I directly restates the cause-and-effect given in the statement. Conclusion II makes an unwarranted extreme claim (“definitely won the league”) not supported by the statement. Hence, only Conclusion I follows.',
    explanationHi:
      'निष्कर्ष I सीधे कथन से सिद्ध होता है, जबकि निष्कर्ष II (“निश्चित रूप से लीग जीत जाती”) एक अतिवादी दावा है जिसका कथन में कोई आधार नहीं है। अतः केवल निष्कर्ष I अनुसरण करता है।',
  },
  {
    id: 'cgl26_06o1_q19',
    topic: 'Statement & Assumptions',
    questionEn:
      'Statement:\nBefore signing any agreement with a new supplier, please discuss it with the legal team.\nAssumptions:\nI. A legal issue may arise if the agreement is signed without discussion.\nII. It is important to avoid legal complications.',
    questionHi:
      'कथन:\nकिसी नए आपूर्तिकर्ता (सप्लायर) के साथ कोई भी समझौता करने से पहले, कृपया उस पर विधि (लीगल) टीम के साथ चर्चा कर लें।\nमान्यताएँ:\nI. यदि चर्चा किए बिना समझौते पर हस्ताक्षर किए जाते हैं, तो कानूनी समस्या उत्पन्न हो सकती है।\nII. कानूनी जटिलताओं से बचना महत्वपूर्ण है।',
    optionsEn: [
      'Only I is implicit.',
      'Only II is implicit.',
      'Neither I nor II is implicit.',
      'Both I and II are implicit.',
    ],
    optionsHi: [
      'केवल I निहित है।',
      'केवल II निहित है।',
      'न तो I और न ही II निहित है।',
      'I और II दोनों निहित हैं।',
    ],
    correctIndex: 3,
    explanationEn:
      'Consulting the legal team before signing a new supplier agreement presupposes both that unreviewed agreements may trigger legal issues (Assumption I) and that avoiding legal complications is important (Assumption II). Hence, both I and II are implicit.',
    explanationHi:
      'हस्ताक्षर से पहले लीगल टीम से चर्चा का निर्देश दोनों मान्यताओं पर आधारित है: बिना चर्चा कानूनी समस्या आ सकती है (I) और कानूनी जटिलताओं से बचना महत्वपूर्ण है (II)। अतः दोनों निहित हैं।',
  },
  {
    id: 'cgl26_06o1_q20',
    topic: 'Mathematical Operations',
    questionEn:
      'If ‘♦’ means +, ‘△’ means −, ‘★’ means ×, and ‘○’ means ÷, find:\n(2 ★ 8) ♦ [(54 ○ 6) △ (1 ★ 4)] ★ 3',
    questionHi:
      'अगर ‘♦’ का मतलब +, ‘△’ का मतलब −, ‘★’ का मतलब ×, और ‘○’ का मतलब ÷ है, तो (2 ★ 8) ♦ [(54 ○ 6) △ (1 ★ 4)] ★ 3 का मान ज्ञात कीजिए।',
    optionsEn: ['12', '18', '31', '36'],
    optionsHi: ['12', '18', '31', '36'],
    correctIndex: 2,
    explanationEn:
      'Substituting the symbols:\n(2 × 8) + [(54 ÷ 6) − (1 × 4)] × 3\n= 16 + [9 − 4] × 3 = 16 + (5 × 3) = 16 + 15 = 31.',
    explanationHi:
      'प्रतीकों का मान रखने पर:\n(2 × 8) + [(54 ÷ 6) − (1 × 4)] × 3 = 16 + [9 − 4] × 3 = 16 + 15 = 31।',
  },
  {
    id: 'cgl26_06o1_q21',
    topic: 'Eligibility / Decision Making',
    questionEn:
      "Read the given conditions carefully and determine the appropriate outcome for the case provided.\nCriteria for Professional Pilot License Renewal:\n(i) Must have a valid medical certificate.\n(ii) Must have 500+ flying hours.\nExceptions:\n• Exception (A): If flying hours are between 400–500 but the medical certificate is 'Class 1', refer the case to the Aviation Authority.\n• Exception (B): If the candidate meets criteria (i) and (ii) but has a recorded flight safety violation in the last 2 years, refer the case to the Review Board.\nCase: The candidate has 450 flying hours and a 'Class 1' medical certificate.",
    questionHi:
      'दिए गए नियमों को ध्यानपूर्वक पढ़िए और प्रदान किए गए मामले के लिए उपयुक्त परिणाम निर्धारित कीजिए।\nव्यावसायिक पायलट लाइसेंस के नवीनीकरण के लिए मानदंड:\n(i) वैध चिकित्सीय प्रमाणपत्र (Medical Certificate) होना चाहिए।\n(ii) 500 या उससे अधिक उड़ान घंटे (Flying Hours) होने चाहिए।\nअपवाद:\n• अपवाद (A): यदि उड़ान घंटे 400–500 के बीच हों, लेकिन चिकित्सीय प्रमाणपत्र \'क्लास 1\' (Class 1) का हो, तो मामले को विमानन प्राधिकरण (Aviation Authority) के पास भेजा जाएगा।\n• अपवाद (B): यदि उम्मीदवार मानदंड (i) तथा (ii) दोनों को पूरा करता हो, लेकिन पिछले 2 वर्षों में उसके विरुद्ध उड़ान सुरक्षा उल्लंघन दर्ज हो, तो मामले को समीक्षा बोर्ड (Review Board) के पास भेजा जाएगा।\nमामला: उम्मीदवार के पास 450 उड़ान घंटे हैं तथा \'क्लास 1\' चिकित्सीय प्रमाणपत्र है।',
    optionsEn: [
      'License renewal to be approved',
      'Case to be referred to the Aviation Authority',
      'License renewal to be rejected',
      'Case to be referred to the Review Board',
    ],
    optionsHi: [
      'लाइसेंस नवीनीकरण स्वीकृत किया जाएगा',
      'मामला विमानन प्राधिकरण को भेजा जाएगा',
      'लाइसेंस नवीनीकरण अस्वीकृत किया जाएगा',
      'मामला समीक्षा बोर्ड को भेजा जाएगा',
    ],
    correctIndex: 1,
    explanationEn:
      'The candidate has 450 flying hours (falls between 400 and 500, below the standard 500+ requirement) AND holds a Class 1 medical certificate. This matches Exception (A) exactly, so the case is to be referred to the Aviation Authority.',
    explanationHi:
      'उम्मीदवार के उड़ान घंटे 450 हैं (400–500 के बीच) और उसके पास \'क्लास 1\' चिकित्सीय प्रमाणपत्र है, जो सीधे अपवाद (A) को संतुष्ट करता है। अतः मामला विमानन प्राधिकरण (Aviation Authority) को भेजा जाएगा।',
  },
  {
    id: 'cgl26_06o1_q22',
    topic: 'Word Analogy',
    questionEn:
      'Select the option that is related to the third word in the same way as the second word is related to the first word.\nNeedle : Stitch :: Scythe : ?',
    questionHi:
      'उस विकल्प का चयन करें जो तीसरे शब्द से उसी प्रकार संबंधित हो, जिस प्रकार दूसरा शब्द पहले शब्द से संबंधित है।\nNeedle : Stitch :: Scythe : ?',
    optionsEn: ['Dig', 'Mow', 'Prune', 'Plant'],
    optionsHi: ['खोदना (Dig)', 'काटना / घास काटना (Mow)', 'छांटना (Prune)', 'रोपना (Plant)'],
    correctIndex: 1,
    explanationEn:
      'Tool : Primary Function relationship. A Needle is used to Stitch; similarly, a Scythe (curved agricultural blade) is used to Mow (cut grass or crops).',
    explanationHi:
      'औज़ार और उसके कार्य का संबंध: सुई (Needle) का उपयोग सिलाई (Stitch) के लिए होता है; उसी प्रकार दरांती/हँसिया (Scythe) का उपयोग फसल या घास काटने (Mow) के लिए होता है।',
  },
  {
    id: 'cgl26_06o1_q23',
    topic: 'Letter Coding (Alphabet Rule)',
    questionEn:
      "In a specific letter-casing pattern, every alternate letter in the English alphabet, starting from B, is written in lowercase, while all other letters are written in uppercase (i.e., A, b, C, d, E, f, ...). Under this rule, how will the word 'SEPTEMBER' be written?",
    questionHi:
      "एक विशिष्ट अक्षर-रूप प्रतिरूप में, अंग्रेज़ी वर्णमाला में B से प्रारम्भ करते हुए प्रत्येक वैकल्पिक अक्षर को छोटे अक्षर (lowercase) में लिखा जाता है, जबकि शेष सभी अक्षरों को बड़े अक्षरों (uppercase) में लिखा जाता है (अर्थात् A, b, C, d, E, f, ...)। इस नियम के अनुसार, शब्द 'SEPTEMBER' को कैसे लिखा जाएगा?",
    optionsEn: ['SeptEMbEr', 'SeptemBer', 'SEptEMbEr', 'SeptembeR'],
    optionsHi: ['SeptEMbEr', 'SeptemBer', 'SEptEMbEr', 'SeptembeR'],
    correctIndex: 2,
    explanationEn:
      'Under this rule, odd-numbered letters (1, 3, 5, …) are UPPERCASE and even-numbered letters (2, 4, 6, …) are lowercase:\nS(19)→S, E(5)→E, P(16)→p, T(20)→t, E(5)→E, M(13)→M, B(2)→b, E(5)→E, R(18)→r.\nResult: SEptEMbEr.',
    explanationHi:
      'नियम के अनुसार विषम स्थान वाले अक्षर बड़े (UPPERCASE) तथा सम स्थान वाले अक्षर छोटे (lowercase) लिखे जाएँगे:\nS(19)→S, E(5)→E, P(16)→p, T(20)→t, E(5)→E, M(13)→M, B(2)→b, E(5)→E, R(18)→r ⇒ SEptEMbEr।',
  },
  {
    id: 'cgl26_06o1_q24',
    topic: 'Eligibility / Decision Making',
    questionEn:
      "A competitive exam allows candidates with a recognized bachelor's degree scoring ≥ 50% (≥ 45% for reserved category). The age limit is between 21–30 years, with a 5-year upper age relaxation for the reserved category. All eligibility is calculated as of August 1st.\nCandidate Profile: Belongs to the reserved category, is exactly 34 years old on August 1st, and secured 48% marks in their bachelor's degree.\nDetermine the eligibility status.",
    questionHi:
      'एक प्रतियोगी परीक्षा मान्यता प्राप्त स्नातक डिग्री वाले अभ्यर्थियों को अनुमति देती है, जिनके अंक 50 प्रतिशत या अधिक हों (आरक्षित वर्ग के लिए 45 प्रतिशत या अधिक)। आयु सीमा 21 से 30 वर्ष के बीच है, जिसमें आरक्षित वर्ग के लिए अधिकतम आयु में 5 वर्ष की छूट है। सभी पात्रता की गणना 1 अगस्त के अनुसार की जाती है।\nअभ्यर्थी प्रोफाइल: आरक्षित वर्ग से संबंधित, 1 अगस्त को ठीक 34 वर्ष की आयु, और स्नातक डिग्री में 48 प्रतिशत अंक प्राप्त किए।\nपात्रता स्थिति निर्धारित कीजिए।',
    optionsEn: [
      'Eligible',
      'Not eligible — age exceeds limit',
      'Not eligible — marks below cutoff',
      'Not eligible on both counts',
    ],
    optionsHi: [
      'पात्र (Eligible)',
      'पात्र नहीं — आयु सीमा से अधिक',
      'पात्र नहीं — अंक कटऑफ से कम',
      'दोनों आधारों पर पात्र नहीं',
    ],
    correctIndex: 0,
    explanationEn:
      'For the reserved category:\n• Minimum marks required = 45% → Candidate has 48% (Meets criterion).\n• Upper age limit = 30 + 5 = 35 years → Candidate is 34 years on August 1st (Meets criterion).\nHence, the candidate is Eligible.',
    explanationHi:
      'आरक्षित वर्ग के लिए:\n• न्यूनतम अंक = 45% (अभ्यर्थी के 48% हैं — पात्र)।\n• अधिकतम आयु = 30 + 5 = 35 वर्ष (अभ्यर्थी की आयु 34 वर्ष है — पात्र)।\nअतः अभ्यर्थी पात्र (Eligible) है।',
  },
  {
    id: 'cgl26_06o1_q25',
    topic: 'Classification (Fractions)',
    questionEn: 'Which fraction is different from the others?',
    questionHi: 'कौन-सी भिन्न अन्य से असंगत है?',
    optionsEn: ['8/12', '10/15', '14/21', '16/28'],
    optionsHi: ['8/12', '10/15', '14/21', '16/28'],
    correctIndex: 3,
    explanationEn:
      'Simplifying each fraction to its lowest form:\n• 8/12 = 2/3\n• 10/15 = 2/3\n• 14/21 = 2/3\n• 16/28 = 4/7 (different from 2/3).\nHence, 16/28 is the odd fraction.',
    explanationHi:
      'सरलतम रूप में बदलने पर:\n• 8/12 = 2/3, 10/15 = 2/3, 14/21 = 2/3।\n• जबकि 16/28 = 4/7 (अन्य तीनों से भिन्न)। अतः विकल्प (D) असंगत है।',
  },
];

const SECTION_2_GA_O6S1: Question[] = [
  {
    id: 'cgl26_06o1_q26',
    topic: 'Indian Economy (Reforms)',
    questionEn:
      'Which of the following represents the most comprehensive institutional reform underpinning the “Resolving Insolvency” component in the Ease of Doing Business Index?',
    questionHi:
      'निम्नलिखित में से कौन सा व्यवसाय करने में आसानी सूचकांक में "दिवालियापन का समाधान" घटक को रेखांकित करने वाला सबसे व्यापक संस्थागत सुधार दर्शाता है?',
    optionsEn: [
      'Debt Recovery Tribunal Act, 1993',
      'SEBI (Listing Obligations) Regulations, 2015',
      'IBC (Insolvency and Bankruptcy Code), 2016',
      'SICA (Sick Industrial Companies Act), 1985',
    ],
    optionsHi: [
      'ऋण वसूली न्यायाधिकरण अधिनियम, 1993',
      'एसईबीआई (सूचीबद्धता दायित्व) विनियम, 2015',
      'आईबीसी (दिवाला और दिवालियापन संहिता), 2016',
      'एसआईसीए (रुग्ण औद्योगिक कंपनी अधिनियम), 1985',
    ],
    correctIndex: 2,
    explanationEn:
      'The Insolvency and Bankruptcy Code (IBC), 2016 consolidated fragmented insolvency laws into a single time-bound framework (administered via NCLT and IBBI), driving India’s major jump in the World Bank’s Ease of Doing Business "Resolving Insolvency" indicator.',
    explanationHi:
      'दिवाला और दिवालियापन संहिता (IBC), 2016 ने समयबद्ध समाधान ढाँचा प्रदान किया, जिससे विश्व बैंक के "ईज़ ऑफ डूइंग बिज़नेस" सूचकांक के "दिवालियापन का समाधान" घटक में भारत की रैंकिंग में बड़ा सुधार हुआ।',
  },
  {
    id: 'cgl26_06o1_q27',
    topic: 'Indian Economy (Digital Inclusion)',
    questionEn:
      'The "JAM Trinity" is often cited as a key strategy for direct benefit transfer in India. Which of the following correctly identifies the three pillars of this trinity?',
    questionHi:
      '"जेएएम ट्रिनिटी" को अक्सर भारत में प्रत्यक्ष लाभ हस्तांतरण के लिए एक महत्वपूर्ण रणनीति के रूप में उद्धृत किया जाता है। निम्नलिखित में से कौन इस ट्रिनिटी के तीन स्तंभों की सही पहचान करता है?',
    optionsEn: [
      'Jan Dhan accounts, Aadhaar cards, Mobile numbers',
      'Jan Dhan accounts, Aadhaar cards, MGNREGA job cards',
      'Jan Dhan accounts, Ayushman Bharat cards, Mobile numbers',
      'Jan Dhan accounts, Aadhaar cards, PAN cards',
    ],
    optionsHi: [
      'जन धन खाते, आधार कार्ड, मोबाइल नंबर',
      'जन धन खाते, आधार कार्ड, मनरेगा जॉब कार्ड्स',
      'जन धन खाते, आयुष्मान भारत कार्ड्स, मोबाइल नंबर',
      'जन धन खाते, आधार कार्ड्स, पैन कार्ड्स',
    ],
    correctIndex: 0,
    explanationEn:
      'JAM stands for Jan Dhan (PMJDY bank accounts), Aadhaar (biometric digital identity), and Mobile connectivity—the three pillars enabling leak-proof Direct Benefit Transfers (DBT) in India.',
    explanationHi:
      'JAM ट्रिनिटी का अर्थ जन धन (Jan Dhan खाते), आधार (Aadhaar) और मोबाइल (Mobile नंबर) है, जो प्रत्यक्ष लाभ अंतरण (DBT) को पारदर्शी बनाता है।',
  },
  {
    id: 'cgl26_06o1_q28',
    topic: 'Government Schemes',
    questionEn:
      'Which government scheme aims to provide social security and pension benefits to workers in the unorganized sector?',
    questionHi:
      'किस सरकारी योजना का उद्देश्य असंगठित क्षेत्र के श्रमिकों को सामाजिक सुरक्षा और पेंशन लाभ प्रदान करना है?',
    optionsEn: [
      'Atal Pension Yojana (APY)',
      'Pradhan Mantri Shram Yogi Maandhan (PMSYM)',
      'National Pension System (NPS)',
      "Employees' Provident Fund Organisation (EPFO) schemes",
    ],
    optionsHi: [
      'अटल पेंशन योजना (APY)',
      'प्रधानमंत्री श्रम योगी मानधन (PMSYM)',
      'राष्ट्रीय पेंशन सिस्टम (NPS)',
      'कर्मचारी भविष्य निधि संगठन (EPFO) योजनाएं',
    ],
    correctIndex: 1,
    explanationEn:
      'Launched in 2019 by the Ministry of Labour and Employment, Pradhan Mantri Shram Yogi Maandhan (PM-SYM) is specifically designed as a voluntary, contributory pension scheme for unorganized sector workers aged 18–40 with monthly income up to ₹15,000, assuring ₹3,000/month pension after age 60.',
    explanationHi:
      'प्रधानमंत्री श्रम योगी मानधन (PM-SYM) योजना विशेष रूप से असंगठित क्षेत्र के श्रमिकों (आयु 18–40 वर्ष) को 60 वर्ष की आयु के बाद ₹3,000 मासिक पेंशन और सामाजिक सुरक्षा प्रदान करने हेतु शुरू की गई है।',
  },
  {
    id: 'cgl26_06o1_q29',
    topic: 'Sports',
    questionEn:
      'How many active players are there per team in a regulation water polo match?',
    questionHi: 'एक मानक वाटर पोलो मैच में प्रति टीम कितने खिलाड़ी खेलते हैं?',
    optionsEn: ['5', '6', '7', '8'],
    optionsHi: ['5', '6', '7', '8'],
    correctIndex: 2,
    explanationEn:
      'Each team in a standard regulation water polo match fields 7 active players in the pool at a time: 6 outfield players and 1 goalkeeper.',
    explanationHi:
      'एक मानक वाटर पोलो मैच में प्रत्येक टीम से एक समय में 7 खिलाड़ी (6 फील्ड खिलाड़ी और 1 गोलकीपर) पानी में खेलते हैं।',
  },
  {
    id: 'cgl26_06o1_q30',
    topic: 'Sports (National Games)',
    questionEn:
      'In which year did the National Games of India take place in Jharkhand?',
    questionHi: 'झारखंड में भारतीय राष्ट्रीय खेल किस वर्ष आयोजित हुए थे?',
    optionsEn: ['2009', '2011', '2013', '2015'],
    optionsHi: ['2009', '2011', '2013', '2015'],
    correctIndex: 1,
    explanationEn:
      'The 34th National Games of India were held in Jharkhand (Ranchi, Jamshedpur, and Dhanbad) from 12 to 26 February 2011.',
    explanationHi:
      'भारत के 34वें राष्ट्रीय खेल वर्ष 2011 (12 से 26 फरवरी 2011) में झारखंड (राँची, जमशेदपुर और धनबाद) में आयोजित किए गए थे।',
  },
  {
    id: 'cgl26_06o1_q31',
    topic: 'Polity & New Criminal Laws (BSA)',
    questionEn:
      'Under the Bharatiya Sakshya Adhiniyam, which of the following is considered a primary source of evidence in the digital era?',
    questionHi:
      'भारतीय साक्ष्य अधिनियम के तहत, डिजिटल युग में निम्नलिखित में से किसे साक्ष्य का प्राथमिक स्रोत माना जाता है?',
    optionsEn: [
      'Printouts of WhatsApp chats without digital signature verification',
      'Newspaper reports about a digital crime',
      'Certified copies of electronic records with hash value authentication',
      'Oral confessions made to a police officer',
    ],
    optionsHi: [
      'डिजिटल हस्ताक्षर सत्यापन के बिना व्हाट्सएप चैट का प्रिंटआउट',
      'डिजिटल अपराध के बारे में समाचार-पत्र की रिपोर्ट',
      'हैश मान प्रमाणीकरण के साथ इलेक्ट्रॉनिक रिकॉर्ड की प्रमाणित प्रतियाँ',
      'पुलिस अधिकारी के समक्ष मौखिक स्वीकारोक्ति',
    ],
    correctIndex: 2,
    explanationEn:
      'Under Sections 57 and 63 of the Bharatiya Sakshya Adhiniyam (BSA), 2023, properly authenticated electronic/digital records supported by hash value verification and certification are legally recognized as primary/admissible digital evidence.',
    explanationHi:
      'भारतीय साक्ष्य अधिनियम (BSA), 2023 के अंतर्गत हैश मान प्रमाणीकरण (hash value authentication) के साथ प्रमाणित इलेक्ट्रॉनिक रिकॉर्ड को डिजिटल युग में प्राथमिक एवं मान्य साक्ष्य माना गया है।',
  },
  {
    id: 'cgl26_06o1_q32',
    topic: 'Awards & Honours',
    questionEn:
      'Which Indian President received the "Grand Order of the Chain of the Yellow Star" in 2023?',
    questionHi:
      'किस भारतीय राष्ट्रपति को 2023 में "ग्रैंड ऑर्डर ऑफ द चेन ऑफ द येलो स्टार" से सम्मानित किया गया?',
    optionsEn: [
      'Droupadi Murmu',
      'Ram Nath Kovind',
      'Dr. A. P. J. Abdul Kalam',
      'Pratibha Patil',
    ],
    optionsHi: [
      'द्रौपदी मुर्मू',
      'राम नाथ कोविंद',
      'डॉ. ए. पी. जे. अब्दुल कलाम',
      'प्रतिभा पाटिल',
    ],
    correctIndex: 0,
    explanationEn:
      'In June 2023, President Droupadi Murmu became the first Indian to be conferred Suriname’s highest civilian honour, the "Grand Order of the Chain of the Yellow Star", by President Chandrikapersad Santokhi.',
    explanationHi:
      'जून 2023 में राष्ट्रपति द्रौपदी मुर्मू को सूरीनाम के सर्वोच्च नागरिक सम्मान "ग्रैंड ऑर्डर ऑफ द चेन ऑफ द येलो स्टार" से सम्मानित किया गया था।',
  },
  {
    id: 'cgl26_06o1_q33',
    topic: 'Indian Polity (Constitutional Bodies)',
    questionEn:
      'Who was the first Chairman of the Union Public Service Commission (UPSC)?',
    questionHi: 'संघ लोक सेवा आयोग (यूपीएससी) के प्रथम अध्यक्ष कौन थे?',
    optionsEn: [
      'Rose Millian Bathew',
      'Ross Barker',
      'Manoj Soni',
      'Preeti Sudan',
    ],
    optionsHi: ['रोज़ मिलियन बाथ्यू', 'रॉस बार्कर', 'मनोज सोनी', 'प्रीति सूदन'],
    correctIndex: 1,
    explanationEn:
      'Sir Ross Barker was the first Chairman of the Public Service Commission of India, established on 1 October 1926 on the recommendation of the Lee Commission. (Note: H. K. Kripalani was the first Indian Chairman after independence; Rose Millian Bathew was the first woman Chairperson.)',
    explanationHi:
      'सर रॉस बार्कर 1 अक्टूबर 1926 को स्थापित लोक सेवा आयोग के प्रथम अध्यक्ष थे। (रोज़ मिलियन बाथ्यू यूपीएससी की पहली महिला अध्यक्ष थीं।)',
  },
  {
    id: 'cgl26_06o1_q34',
    topic: 'Ancient History (Indus Valley Civilization)',
    questionEn:
      'Which among the following Harappan cities was divided into three parts, unlike other cities that are usually divided into two parts?',
    questionHi:
      'निम्नलिखित में से कौन सा हड़प्पा शहर तीन भागों में विभाजित था, जबकि अन्य शहर सामान्य तौर पर दो भागों में विभाजित होते हैं?',
    optionsEn: ['Harappa', 'Dholavira', 'Mohenjo-Daro', 'Lothal'],
    optionsHi: ['हड़प्पा', 'धोलावीरा', 'मोहनजोदड़ो', 'लोथल'],
    correctIndex: 1,
    explanationEn:
      'Unlike most Harappan cities (which had two divisions: Citadel and Lower Town), Dholavira (in Kutch, Gujarat—a UNESCO World Heritage Site) was uniquely divided into three fortified parts: the Citadel, the Middle Town, and the Lower Town.',
    explanationHi:
      'गुजरात के कच्छ में स्थित धोलावीरा (यूनेस्को विश्व धरोहर) अन्य हड़प्पा नगरों के विपरीत तीन भागों—दुर्ग (Citadel), मध्य नगर (Middle Town) और निचले नगर (Lower Town)—में विभाजित था।',
  },
  {
    id: 'cgl26_06o1_q35',
    topic: 'Indian Geography (Census 2011)',
    questionEn:
      'As per Census 2011, the concentration of Scheduled Caste population (going by percentage of Scheduled Caste population to total population of the state) is the highest in the state of:',
    questionHi:
      'जनगणना 2011 के अनुसार, अनुसूचित जाति की जनसंख्या का संकेन्द्रण (राज्य की कुल जनसंख्या में अनुसूचित जाति की जनसंख्या के प्रतिशत के आधार पर) किस राज्य में सबसे ज्यादा है:',
    optionsEn: ['Uttar Pradesh', 'Himachal Pradesh', 'Punjab', 'Haryana'],
    optionsHi: ['उत्तर प्रदेश', 'हिमाचल प्रदेश', 'पंजाब', 'हरियाणा'],
    correctIndex: 2,
    explanationEn:
      'As per Census 2011, Punjab has the highest percentage share of Scheduled Caste population at 31.9% (followed by Himachal Pradesh at 25.2% and West Bengal at 23.5%), while Uttar Pradesh has the highest SC population in absolute numbers.',
    explanationHi:
      'जनगणना 2011 के अनुसार प्रतिशत के आधार पर सर्वाधिक अनुसूचित जाति (SC) आबादी पंजाब (31.9%) में है, जबकि कुल संख्या के आधार पर उत्तर प्रदेश शीर्ष पर है।',
  },
  {
    id: 'cgl26_06o1_q36',
    topic: 'Sports (Athletics — Shot Put)',
    questionEn:
      'Consider the following statements about the grip and placement of the shot in the gliding technique in Shot Put:\n1) The shot is held primarily in the palm with fingers loosely wrapped around it.\n2) The shot is placed near the jaw bone, just below the ear and over the collar bone.\n3) Fingers are spread apart slightly with the thumb providing support while holding the shot.\nWhich of the statements given above are correct?',
    questionHi:
      'शॉट पुट में ग्लाइडिंग तकनीक में शॉट की पकड़ और प्लेसमेंट के बारे में निम्नलिखित कथनों पर विचार करें:\n1) शॉट को मुख्य रूप से हथेली में पकड़ा जाता है और उंगलियों को उसके चारों ओर ढीला लपेटा जाता है।\n2) शॉट को जबड़े की हड्डी के पास, कान के ठीक नीचे और कॉलर बोन के ऊपर रखा जाता है।\n3) शॉट को पकड़ते समय अंगूठे से सहारा देते हुए उंगलियों को थोड़ा फैलाया जाता है।\nऊपर दिए गए कथनों में से कौन सा सही है?',
    optionsEn: [
      'Only 1 and 2 are Correct',
      'Only 2 and 3 are Correct',
      'Only 1 and 3 are correct',
      '1, 2 and 3 are Correct',
    ],
    optionsHi: [
      'केवल 1 और 2 सही हैं',
      'केवल 2 और 3 सही हैं',
      'केवल 1 और 3 सही हैं',
      '1, 2 और 3 सही हैं',
    ],
    correctIndex: 1,
    explanationEn:
      'In proper Shot Put technique, the shot must rest on the pads/base of the fingers—NOT deep in the palm (so Statement 1 is incorrect). The fingers are spread slightly with the thumb giving lateral support (Statement 3 is correct), and the shot is pressed firmly against the neck/jawline below the ear and above the collarbone (Statement 2 is correct).',
    explanationHi:
      'शॉट पुट में गोले को हथेली में नहीं बल्कि उंगलियों के आधार (base of fingers) पर पकड़ा जाता है (कथन 1 गलत)। इसे जबड़े के पास कान के नीचे व कॉलर बोन के ऊपर रखा जाता है (कथन 2 सही) और उंगलियाँ थोड़ी फैली होती हैं जिन्हें अंगूठा सहारा देता है (कथन 3 सही)।',
  },
  {
    id: 'cgl26_06o1_q37',
    topic: 'Modern History (Social Reforms)',
    questionEn:
      'What accurately describes the British policy and outcome regarding slavery in India up to 1843?',
    questionHi:
      '1843 तक भारत में दास प्रथा के संबंध में ब्रिटिश नीति और परिणाम का सटीक वर्णन क्या है?',
    optionsEn: [
      'The Company promptly abolished slavery under the 1811 law',
      'Slavery ended through mass resistance by Indian peasants',
      'Abolition came slowly through delayed legislation and limited enforcement',
      "Slavery was banned immediately after Britain's 1820 reforms",
    ],
    optionsHi: [
      'कंपनी ने 1811 के कानून के तहत दास प्रथा को तुरंत समाप्त कर दिया',
      'भारतीय किसानों के सामूहिक प्रतिरोध से गुलामी समाप्त हुई',
      'विलंबित कानून और सीमित प्रवर्तन के कारण उन्मूलन धीरे-धीरे हुआ',
      'ब्रिटेन के 1820 के सुधारों के तुरंत बाद गुलामी पर प्रतिबंध लगा दिया गया था',
    ],
    correctIndex: 2,
    explanationEn:
      'Even after the Charter Act of 1833 directed the East India Company to take steps toward ending slavery, the Company delayed action for a decade until the Indian Slavery Act V of 1843 (under Lord Ellenborough), and even thereafter de-recognition rather than strict criminalization led to slow, gradual abolition.',
    explanationHi:
      '1833 के चार्टर अधिनियम के निर्देश के बावजूद ईस्ट इंडिया कंपनी ने कानून बनाने में विलंब किया और अंततः 1843 के भारतीय दासता अधिनियम (लॉर्ड एलनबरो के समय) तथा सीमित प्रवर्तन के कारण दास प्रथा का उन्मूलन धीरे-धीरे हुआ।',
  },
  {
    id: 'cgl26_06o1_q38',
    topic: 'Ancient History (Sangam Age)',
    questionEn:
      'Which of the following explains the meaning of the term “Sangam” in ancient South Indian history, as derived from Sanskrit?',
    questionHi:
      'प्राचीन दक्षिण भारतीय इतिहास में, संस्कृत से व्युत्पन्न “संगम” शब्द का अर्थ निम्नलिखित में से कौन-सा स्पष्ट करता है?',
    optionsEn: [
      'An association of poets',
      'A gathering of priests',
      'An assembly of warriors',
      'A collection of traders',
    ],
    optionsHi: [
      'कवियों का संघ',
      'पुजारियों का एक जमावड़ा',
      'योद्धाओं की सभा',
      'व्यापारियों का संग्रह',
    ],
    correctIndex: 0,
    explanationEn:
      'Derived from the Sanskrit word "Sangha" (assembly/association), "Sangam" in ancient Tamil history refers to the celebrated academies/associations of Tamil poets and scholars patronized by the Pandya kings at Madurai.',
    explanationHi:
      'संस्कृत शब्द "संघ" से व्युत्पन्न "संगम" का अर्थ प्राचीन दक्षिण भारतीय इतिहास में पांड्य राजाओं के संरक्षण में आयोजित तमिल कवियों व विद्वानों के संघ (Association of poets) से है।',
  },
  {
    id: 'cgl26_06o1_q39',
    topic: 'Indian Polity (President)',
    questionEn: 'Article 54 of the Indian Constitution deals with the:',
    questionHi: 'भारतीय संविधान का अनुच्छेद 54 किससे संबंधित है?',
    optionsEn: [
      'Term of the President',
      'Election of the President',
      'Impeachment of the President',
      'Oath of the President',
    ],
    optionsHi: [
      'राष्ट्रपति का कार्यकाल',
      'राष्ट्रपति का निर्वाचन',
      'राष्ट्रपति के विरुद्ध महाभियोग',
      'राष्ट्रपति की शपथ',
    ],
    correctIndex: 1,
    explanationEn:
      'Article 54 deals with the Election of the President (defining the Electoral College consisting of elected MPs and elected MLAs). (Article 56: Term; Article 60: Oath; Article 61: Impeachment.)',
    explanationHi:
      'अनुच्छेद 54 भारत के राष्ट्रपति के निर्वाचन (निर्वाचक मंडल) से संबंधित है। (अनुच्छेद 56: कार्यकाल, अनुच्छेद 60: शपथ, अनुच्छेद 61: महाभियोग।)',
  },
  {
    id: 'cgl26_06o1_q40',
    topic: 'Physics (Work, Energy & Power)',
    questionEn:
      'Which physical quantity is given by the product of force and the displacement in the direction of that force?',
    questionHi:
      'वह कौन-सी भौतिक राशि है, जो बल और उस बल की दिशा में हुए विस्थापन के गुणनफल के द्वारा दी जाती है?',
    optionsEn: ['Work', 'Momentum', 'Impulse', 'Power'],
    optionsHi: ['कार्य (Work)', 'संवेग (Momentum)', 'आवेग (Impulse)', 'शक्ति (Power)'],
    correctIndex: 0,
    explanationEn:
      'Work (W) = Force (F) × Displacement (d) × cos θ = F · d. Its SI unit is the Joule (J).',
    explanationHi:
      'कार्य (Work) = बल × बल की दिशा में विस्थापन (W = F · d)। इसका SI मात्रक जूल (Joule) है।',
  },
  {
    id: 'cgl26_06o1_q41',
    topic: 'International Relations & Maritime Security',
    questionEn:
      'Which Indian initiative emphasizes maritime cooperation and security in the Indian Ocean Region?',
    questionHi:
      'हिंद महासागर क्षेत्र में समुद्री सहयोग और सुरक्षा पर बल देने वाली भारतीय पहल निम्नलिखित में से कौन-सी है?',
    optionsEn: [
      'Operation Flood (OF)',
      'Act Far East (AFE)',
      'Look West Policy (LWP)',
      'Security and Growth for All in the Region (SAGAR)',
    ],
    optionsHi: [
      'ऑपरेशन फ्लड (OF)',
      'एक्ट फार ईस्ट (AFE)',
      'लुक वेस्ट पॉलिसी (LWP)',
      'सिक्योरिटी एंड ग्रोथ फॉर ऑल इन द रीजन (SAGAR)',
    ],
    correctIndex: 3,
    explanationEn:
      'Launched by India in March 2015, Vision SAGAR ("Security and Growth for All in the Region") is India’s strategic framework for maritime security, blue economy, and cooperative regional development in the Indian Ocean Region (IOR).',
    explanationHi:
      '2015 में प्रारंभ की गई SAGAR ("Security and Growth for All in the Region") पहल हिंद महासागर क्षेत्र में समुद्री सुरक्षा और क्षेत्रीय सहयोग को बढ़ावा देने की भारत की प्रमुख रणनीति है।',
  },
  {
    id: 'cgl26_06o1_q42',
    topic: 'Polity & New Criminal Laws (BNS)',
    questionEn:
      'A catches B committing simple theft of a bicycle. B begins running away without violence. A shoots and kills B solely to recover the bicycle. Which of the following is correct under the Bharatiya Nyaya Sanhita, 2023 in India?',
    questionHi:
      'A, B को एक साइकिल की सामान्य चोरी करते हुए पकड़ लेता है। B बिना किसी हिंसा के भागने लगता है। A केवल साइकिल वापस पाने के लिए B को गोली मार देता है जिससे उसकी मौत हो जाती है। भारत में भारतीय न्याय संहिता (BNS), 2023 के तहत निम्नलिखित में से कौन-सा कथन सही है?',
    optionsEn: [
      'A is justified because private defence of property always includes killing a thief.',
      'A is justified because the theft had already occurred.',
      "A is not justified since the right didn't extend to causing death here.",
      'A is justified because the property had not yet been recovered.',
    ],
    optionsHi: [
      'A का कृत्य न्यायसंगत है क्योंकि संपत्ति के निजी प्रतिरक्षा के अधिकार में हमेशा चोर को मारना शामिल होता है।',
      'A का कृत्य न्यायसंगत है क्योंकि चोरी पहले ही हो चुकी थी।',
      'A का कृत्य न्यायसंगत नहीं है क्योंकि यहाँ (निजी प्रतिरक्षा का) अधिकार मृत्यु कारित करने (जान से मारने) तक विस्तृत नहीं था।',
      'A का कृत्य न्यायसंगत है क्योंकि संपत्ति अभी तक बरामद नहीं हुई थी।',
    ],
    correctIndex: 2,
    explanationEn:
      'Under Section 41 of the Bharatiya Nyaya Sanhita (BNS), 2023 (corresponding to IPC Section 103), the right of private defence of property extends to causing death only in grave offences like robbery, house-breaking at night, mischief by fire to a dwelling, or theft under circumstances causing reasonable apprehension of death or grievous hurt—NOT simple non-violent theft.',
    explanationHi:
      'भारतीय न्याय संहिता (BNS), 2023 की धारा 41 के तहत संपत्ति की निजी प्रतिरक्षा में मृत्यु कारित करने का अधिकार केवल लूट, रात्रि गृह-भेदन या मृत्यु/गंभीर चोट की आशंका वाली परिस्थितियों में मिलता है, सामान्य अहिंसक चोरी में नहीं। अतः A का कृत्य न्यायसंगत नहीं है।',
  },
  {
    id: 'cgl26_06o1_q43',
    topic: 'Indian Polity & Economy (GST)',
    questionEn:
      'Under which constitutional provision of the Constitution of India is the Goods and Services Tax (GST) Council established?',
    questionHi:
      'भारतीय संविधान के किस संवैधानिक प्रावधान के अंतर्गत वस्तु एवं सेवा कर (GST) परिषद की स्थापना की गई है?',
    optionsEn: [
      'Article 246A',
      'Article 269A',
      'Article 279A',
      'Article 280',
    ],
    optionsHi: [
      'अनुच्छेद 246A',
      'अनुच्छेद 269A',
      'अनुच्छेद 279A',
      'अनुच्छेद 280',
    ],
    correctIndex: 2,
    explanationEn:
      'Article 279A, inserted by the 101st Constitutional Amendment Act (2016), empowers the President to constitute the GST Council chaired by the Union Finance Minister. (Article 246A: special power to legislate on GST; Article 269A: inter-state IGST; Article 280: Finance Commission.)',
    explanationHi:
      '101वें संविधान संशोधन अधिनियम (2016) द्वारा जोड़े गए अनुच्छेद 279A के अंतर्गत जीएसटी परिषद (GST Council) की स्थापना का प्रावधान है।',
  },
  {
    id: 'cgl26_06o1_q44',
    topic: 'Indian Economy (LPG Reforms)',
    questionEn:
      'Which reform under globalisation reduces custom duties, quotas and quantitative restrictions to facilitate the free flow of goods and services?',
    questionHi:
      'वैश्वीकरण के तहत कौन-सा सुधार वस्तुओं और सेवाओं के मुक्त प्रवाह को सुविधाजनक बनाने के लिए सीमा शुल्क, कोटा और मात्रात्मक प्रतिबंधों को कम करता है?',
    optionsEn: [
      'Trade liberalisation',
      'Industrial licensing',
      'Fiscal consolidation',
      'Financial regulation',
    ],
    optionsHi: [
      'व्यापार उदारीकरण (Trade liberalisation)',
      'औद्योगिक लाइसेंसिंग',
      'राजकोषीय सुदृढ़ीकरण',
      'वित्तीय विनियमन',
    ],
    correctIndex: 0,
    explanationEn:
      'Trade liberalisation involves lowering tariff barriers (customs duties) and dismantling non-tariff barriers (import quotas and quantitative restrictions) to promote seamless international trade.',
    explanationHi:
      'व्यापार उदारीकरण (Trade liberalisation) के अंतर्गत वस्तुओं व सेवाओं के मुक्त अंतर्राष्ट्रीय प्रवाह हेतु सीमा शुल्क (tariffs), कोटा और मात्रात्मक प्रतिबंधों में कमी की जाती है।',
  },
  {
    id: 'cgl26_06o1_q45',
    topic: 'Indian Economy (Committees)',
    questionEn:
      'Which committee was appointed in 1993 to examine insurance sector reforms following the 1991 economic reforms?',
    questionHi:
      '1991 के आर्थिक सुधारों के बाद बीमा क्षेत्र में सुधारों की समीक्षा के लिए 1993 में किस समिति का गठन किया गया था?',
    optionsEn: [
      'Chelliah Committee',
      'Malhotra Committee',
      'Tandon Committee',
      'Rajan Committee',
    ],
    optionsHi: [
      'चेलैया समिति',
      'मल्होत्रा समिति',
      'टंडन समिति',
      'राजन समिति',
    ],
    correctIndex: 1,
    explanationEn:
      'The R. N. Malhotra Committee was set up in 1993 to recommend reforms in the Indian insurance sector. Its recommendations led to opening the sector to private players and establishing IRDA (now IRDAI) under the IRDA Act, 1999.',
    explanationHi:
      '1993 में आर.एन. मल्होत्रा समिति का गठन बीमा क्षेत्र में सुधारों हेतु किया गया था, जिसकी सिफारिशों पर निजी क्षेत्र को प्रवेश मिला और IRDA (अब IRDAI) की स्थापना हुई।',
  },
  {
    id: 'cgl26_06o1_q46',
    topic: 'Economics (Human Development)',
    questionEn:
      'In the capability approach to human development, the term “capabilities” primarily refers to:',
    questionHi:
      'मानव विकास के क्षमता दृष्टिकोण में “क्षमताएँ” शब्द का मुख्य रूप से क्या अर्थ है?',
    optionsEn: [
      'What nations can export and compete',
      'What governments can spend and provide',
      'What people can do and become',
      'What nations can achieve in military strength',
    ],
    optionsHi: [
      'देश क्या निर्यात और प्रतिस्पर्धा कर सकते हैं',
      'सरकारें क्या खर्च और उपलब्ध करा सकती हैं',
      'लोग क्या कर सकते हैं और क्या बन सकते हैं',
      'देश सैन्य शक्ति के क्षेत्र में क्या हासिल कर सकते हैं',
    ],
    correctIndex: 2,
    explanationEn:
      'Pioneered by Nobel Laureate Amartya Sen, the Capability Approach defines human development as expanding individuals’ substantive freedoms and capabilities—that is, what people are genuinely able to do and become ("doings and beings").',
    explanationHi:
      'नोबेल पुरस्कार विजेता अमर्त्य सेन द्वारा प्रतिपादित क्षमता दृष्टिकोण (Capability Approach) में "क्षमताएँ" (capabilities) से तात्पर्य लोगों की उन वास्तविक स्वतंत्रताओं से है कि वे क्या कर सकते हैं और क्या बन सकते हैं।',
  },
  {
    id: 'cgl26_06o1_q47',
    topic: 'Indian Economy (Five-Year Plans)',
    questionEn:
      'Which institution was envisaged to play a greater role in the planning process under the Tenth Five-Year Plan to promote balanced development?',
    questionHi:
      'संतुलित विकास को बढ़ावा देने के लिए दसवीं पंचवर्षीय योजना के तहत योजना प्रक्रिया में किस संस्था की बड़ी भूमिका की परिकल्पना की गई थी?',
    optionsEn: [
      'Reserve Bank of India',
      'Panchayati Raj Institutions',
      'International Monetary Fund',
      'Central Public Sector Enterprises',
    ],
    optionsHi: [
      'भारतीय रिजर्व बैंक',
      'पंचायती राज संस्थाएँ',
      'अंतर्राष्ट्रीय मुद्रा कोष',
      'केंद्रीय सार्वजनिक क्षेत्र के उद्यम',
    ],
    correctIndex: 1,
    explanationEn:
      'The Tenth Five-Year Plan (2002–2007) emphasized decentralized, participatory planning and greater involvement of Panchayati Raj Institutions (PRIs) to ensure equitable and balanced regional development.',
    explanationHi:
      'दसवीं पंचवर्षीय योजना (2002–2007) में विकेंद्रीकृत और संतुलित विकास को बढ़ावा देने हेतु पंचायती राज संस्थाओं (PRIs) की व्यापक भूमिका पर बल दिया गया था।',
  },
  {
    id: 'cgl26_06o1_q48',
    topic: 'Modern History (Commissions)',
    questionEn: 'Which field did the Hunter Commission examine?',
    questionHi: 'हंटर आयोग ने निम्नलिखित में से किस क्षेत्र का निरीक्षण किया था?',
    optionsEn: ['Judiciary', 'Education', 'Police reforms', 'Agriculture'],
    optionsHi: ['न्यायपालिका', 'शिक्षा (Education)', 'पुलिस सुधार', 'कृषि'],
    correctIndex: 1,
    explanationEn:
      'Appointed by Lord Ripon in 1882 under Sir William Wilson Hunter, the Hunter Commission reviewed the progress of education in India since Wood’s Despatch (1854), focusing strongly on primary and secondary education.',
    explanationHi:
      'लॉर्ड रिपन द्वारा 1882 में सर विलियम हंटर की अध्यक्षता में गठित हंटर आयोग ने भारत में शिक्षा (विशेषकर प्राथमिक व माध्यमिक शिक्षा) की स्थिति की समीक्षा की थी।',
  },
  {
    id: 'cgl26_06o1_q49',
    topic: 'Biology (Microbiology)',
    questionEn:
      'A single bacterial cell reproduces by binary fission, causing the number of cells to double every 20 minutes. How many bacterial cells will be present after 1 hour?',
    questionHi:
      'एक एकल जीवाणु कोशिका द्विखंडन द्वारा जनन करती है, जिससे प्रत्येक 20 मिनट में कोशिकाओं की संख्या दोगुनी हो जाती है। 1 घंटे के बाद कितनी जीवाणु कोशिकाएँ मौजूद होंगी?',
    optionsEn: ['4 cells', '6 cells', '8 cells', '16 cells'],
    optionsHi: ['4 कोशिकाएँ', '6 कोशिकाएँ', '8 कोशिकाएँ', '16 कोशिकाएँ'],
    correctIndex: 2,
    explanationEn:
      '1 hour = 60 minutes. Number of 20-minute generation intervals = 60 / 20 = 3.\nStarting from 1 cell: N = 1 × 2³ = 8 cells (1 → 2 → 4 → 8).',
    explanationHi:
      '1 घंटा = 60 मिनट ⇒ विभाजनों की संख्या = 60 / 20 = 3।\nकोशिकाओं की कुल संख्या = 2³ = 8 कोशिकाएँ (1 → 2 → 4 → 8)।',
  },
  {
    id: 'cgl26_06o1_q50',
    topic: 'Chemistry (Electrochemistry)',
    questionEn:
      'In a hydrogen–oxygen fuel cell, why are porous electrodes coated or impregnated with a catalyst primarily used?',
    questionHi:
      'हाइड्रोजन–ऑक्सीजन ईंधन सेल में, मुख्य रूप से उत्प्रेरक से लेपित या संसेचित सरंध्र इलेक्ट्रोड का उपयोग क्यों किया जाता है?',
    optionsEn: [
      'To provide large surface area and enhance reaction kinetics',
      'To increase mechanical strength of the electrodes',
      'To store hydrogen and oxygen inside the electrode permanently',
      'To prevent formation of water during the reaction',
    ],
    optionsHi: [
      'अधिक पृष्ठ क्षेत्रफल प्रदान करने और अभिक्रिया गतिकी को बढ़ाने के लिए',
      'इलेक्ट्रोड की यांत्रिक सामर्थ्य को बढ़ाने के लिए',
      'इलेक्ट्रोड के भीतर हाइड्रोजन और ऑक्सीजन को स्थायी रूप से संग्रहीत करने के लिए',
      'अभिक्रिया के दौरान जल के निर्माण को रोकने के लिए',
    ],
    correctIndex: 0,
    explanationEn:
      'In an H₂–O₂ fuel cell (NCERT Class 12 Electrochemistry), porous carbon electrodes impregnated with finely divided platinum or palladium catalysts maximize gas–electrolyte contact surface area and accelerate the electrochemical reaction rate (kinetics).',
    explanationHi:
      'हाइड्रोजन–ऑक्सीजन ईंधन सेल में प्लैटिनम/पैलेडियम उत्प्रेरक से युक्त सरंध्र (porous) कार्बन इलेक्ट्रोड अभिक्रिया हेतु विशाल पृष्ठ क्षेत्रफल प्रदान करते हैं और इलेक्ट्रोड अभिक्रिया की दर (reaction kinetics) को तीव्र करते हैं।',
  },
];

const SECTION_3_QUANT_O6S1: Question[] = [
  {
    id: 'cgl26_06o1_q51',
    topic: 'Mensuration 3D (Prism)',
    questionEn:
      'A right prism has a triangular base with sides 3 cm, 4 cm, and 5 cm. If the height of the prism is 6 cm, what is its volume?',
    questionHi:
      'एक समकोण प्रिज्म का आधार त्रिभुजाकार है जिसकी भुजाएँ क्रमशः 3 सेंटीमीटर, 4 सेंटीमीटर और 5 सेंटीमीटर हैं। यदि प्रिज्म की ऊँचाई 6 सेंटीमीटर है, तो इसका आयतन क्या है?',
    optionsEn: ['36 cm³', '48 cm³', '54 cm³', '60 cm³'],
    optionsHi: ['36 घन सेंटीमीटर', '48 घन सेंटीमीटर', '54 घन सेंटीमीटर', '60 घन सेंटीमीटर'],
    correctIndex: 0,
    explanationEn:
      'Since 3² + 4² = 9 + 16 = 25 = 5², the triangular base is a right-angled triangle.\nBase Area = (1/2) × 3 × 4 = 6 cm².\nVolume of prism = Base Area × Height = 6 × 6 = 36 cm³.',
    explanationHi:
      'चूँकि 3² + 4² = 5², आधार एक समकोण त्रिभुज है।\nआधार का क्षेत्रफल = (1/2) × 3 × 4 = 6 cm²।\nप्रिज्म का आयतन = आधार का क्षेत्रफल × ऊँचाई = 6 × 6 = 36 घन सेंटीमीटर।',
  },
  {
    id: 'cgl26_06o1_q52',
    topic: 'Simplification (Square Roots)',
    questionEn: 'Simplify: √900 + √0.0625 − √16.81.',
    questionHi: 'सरल कीजिए: √900 + √0.0625 − √16.81।',
    optionsEn: ['14.37', '19.65', '23.06', '26.15'],
    optionsHi: ['14.37', '19.65', '23.06', '26.15'],
    correctIndex: 3,
    explanationEn:
      'Evaluate each square root separately:\n• √900 = 30\n• √0.0625 = 0.25 (since 25² = 625)\n• √16.81 = 4.1 (since 41² = 1681)\nTherefore, 30 + 0.25 − 4.1 = 30.25 − 4.10 = 26.15.',
    explanationHi:
      'प्रत्येक वर्गमूल का मान:\n• √900 = 30\n• √0.0625 = 0.25 (क्योंकि 25² = 625)\n• √16.81 = 4.1 (क्योंकि 41² = 1681)\nअतः 30 + 0.25 − 4.1 = 26.15।',
  },
  {
    id: 'cgl26_06o1_q53',
    topic: 'Geometry (Triangles — Centroid)',
    questionEn:
      'In △ABC, the medians AD, BE, and CF intersect at the centroid G. If the length of median AD is 12 cm, what is the length of the segment GD?',
    questionHi:
      '△ABC में, माध्यिकाएँ AD, BE तथा CF केंद्रक G पर प्रतिच्छेद करती हैं। यदि माध्यिका AD की लंबाई 12 cm है, तो खंड GD की लंबाई क्या होगी?',
    optionsEn: ['1 cm', '2.5 cm', '4 cm', '6.1 cm'],
    optionsHi: ['1 cm', '2.5 cm', '4 cm', '6.1 cm'],
    correctIndex: 2,
    explanationEn:
      'The centroid G divides every median in the ratio 2 : 1 from the vertex to the midpoint of the opposite side (AG : GD = 2 : 1).\nHence, GD = (1/3) × AD = (1/3) × 12 = 4 cm.',
    explanationHi:
      'केंद्रक G प्रत्येक माध्यिका को शीर्ष से विपरीत भुजा के मध्य-बिंदु की ओर 2 : 1 के अनुपात में विभाजित करता है (AG : GD = 2 : 1)।\nअतः GD = (1/3) × 12 = 4 cm।',
  },
  {
    id: 'cgl26_06o1_q54',
    topic: 'Number System (LCM & Perfect Squares)',
    questionEn: 'Find the smallest perfect square divisible by 10, 12, 15, and 18.',
    questionHi: '10, 12, 15 और 18 से विभाज्य सबसे छोटा पूर्ण वर्ग ज्ञात कीजिए।',
    optionsEn: ['600', '900', '500', '400'],
    optionsHi: ['600', '900', '500', '400'],
    correctIndex: 1,
    explanationEn:
      'Prime factorizations: 10 = 2 × 5, 12 = 2² × 3, 15 = 3 × 5, 18 = 2 × 3².\nLCM(10, 12, 15, 18) = 2² × 3² × 5 = 180.\nTo make 180 a perfect square, multiply by the unpaired prime 5:\n180 × 5 = 900 (= 30²).',
    explanationHi:
      'LCM(10, 12, 15, 18) = 2² × 3² × 5 = 180।\nइसे पूर्ण वर्ग बनाने के लिए अयुग्मित गुणनखंड 5 से गुणा करें:\n180 × 5 = 900 (= 30²)।',
  },
  {
    id: 'cgl26_06o1_q55',
    topic: 'Partnership',
    questionEn:
      'Two individuals, A and B, share their profit in a ratio of 3:2. A third person, C, is given a one-fourth share of the profit and contributes ₹12,000 as his capital to the business. What is the capital contribution of B?',
    questionHi:
      'दो व्यक्ति, A और B, अपने लाभ को 3:2 के अनुपात में बाँटते हैं। एक तीसरे व्यक्ति, C, को लाभ का एक-चौथाई हिस्सा दिया जाता है और वह व्यवसाय में अपनी पूँजी के रूप में ₹12,000 का योगदान करता है। B का पूँजी योगदान कितना है?',
    optionsEn: ['₹18,000', '₹14,400', '₹21,600', '₹15,000'],
    optionsHi: ['₹18,000', '₹14,400', '₹21,600', '₹15,000'],
    correctIndex: 1,
    explanationEn:
      'Profit share is proportional to capital invested:\n• C gets 1/4 of total profit for ₹12,000 ⇒ Total capital = 12,000 × 4 = ₹48,000.\n• Remaining capital contributed by A and B together = 48,000 − 12,000 = ₹36,000 (3/4 of total).\n• Since A : B = 3 : 2, B’s capital = (2 / 5) × 36,000 = ₹14,400.',
    explanationHi:
      'लाभ का अनुपात पूँजी के अनुपात के समान होता है:\n• C को 1/4 हिस्से के लिए ₹12,000 देने पड़ते हैं ⇒ कुल पूँजी = 12,000 × 4 = ₹48,000।\n• A और B की संयुक्त पूँजी = 48,000 − 12,000 = ₹36,000।\n• A : B = 3 : 2 ⇒ B की पूँजी = (2 / 5) × 36,000 = ₹14,400।',
  },
  {
    id: 'cgl26_06o1_q56',
    topic: 'Compound Interest',
    questionEn:
      'The amount of a sum at the end of the 1st year is ₹4,500 and at the end of the 2nd year is ₹4,950. Find its approximate principal.',
    questionHi:
      'पहले वर्ष के अंत में किसी राशि की कुल राशि ₹4,500 है और दूसरे वर्ष के अंत में ₹4,950 है। इसका लगभग मूलधन ज्ञात करें।',
    optionsEn: ['₹3981', '₹4001', '₹3801', '₹4091'],
    optionsHi: ['₹3981', '₹4001', '₹3801', '₹4091'],
    correctIndex: 3,
    explanationEn:
      'Under compound interest, the 1-year growth factor is A₂ / A₁ = 4950 / 4500 = 11 / 10 (i.e., rate = 10% p.a.).\nShort trick: P = A₁² / A₂ = (4500 × 4500) / 4950 = 4500 × (10 / 11) = 45000 / 11 ≈ ₹4,090.91 ≈ ₹4091.',
    explanationHi:
      'चक्रवृद्धि ब्याज में एक वर्ष का गुणांक = A₂ / A₁ = 4950 / 4500 = 11 / 10 (दर = 10% वार्षिक)।\nशॉर्ट ट्रिक: मूलधन P = A₁² / A₂ = (4500 × 10) / 11 = 45000 / 11 ≈ ₹4090.91 ≈ ₹4091।',
  },
  {
    id: 'cgl26_06o1_q57',
    topic: 'Mensuration 2D (Regular Hexagon & Square)',
    questionEn:
      'A regular hexagon and a square having the same perimeter. If the area of the square is 196 cm², find the exact area of the hexagon.',
    questionHi:
      'एक सम-षट्भुज और एक वर्ग का परिमाप समान है। यदि वर्ग का क्षेत्रफल 196 cm² है, तो षट्भुज का सटीक क्षेत्रफल ज्ञात कीजिए।',
    optionsEn: ['(203√7)/3 cm²', '(323√3)/5 cm²', '(210√3)/9 cm²', '(392√3)/3 cm²'],
    optionsHi: ['(203√7)/3 cm²', '(323√3)/5 cm²', '(210√3)/9 cm²', '(392√3)/3 cm²'],
    correctIndex: 3,
    explanationEn:
      'Side of square = √196 = 14 cm ⇒ Perimeter = 4 × 14 = 56 cm.\nSide of regular hexagon (a) = 56 / 6 = 28 / 3 cm.\nArea of regular hexagon = (3√3 / 2) × a² = (3√3 / 2) × (28 / 3) × (28 / 3) = (392√3) / 3 cm².',
    explanationHi:
      'वर्ग की भुजा = √196 = 14 cm ⇒ परिमाप = 4 × 14 = 56 cm।\nसम-षट्भुज की भुजा a = 56 / 6 = 28 / 3 cm।\nसम-षट्भुज का क्षेत्रफल = (3√3 / 2) × a² = (3√3 / 2) × (784 / 9) = (392√3) / 3 cm²।',
  },
  {
    id: 'cgl26_06o1_q58',
    topic: 'Mensuration 2D (Circle Inscribed in Square)',
    questionEn:
      'A circle has a radius of 7 cm, and a square is drawn around it such that the circle touches all four sides. Find the area of the square.',
    questionHi:
      'एक वृत्त की त्रिज्या 7 cm है, और उसके चारों ओर एक वर्ग बनाया गया है इस प्रकार कि वृत्त वर्ग की सभी चार भुजाओं को स्पर्श करता है। वर्ग का क्षेत्रफल ज्ञात कीजिए।',
    optionsEn: ['196 cm²', '126 cm²', '183 cm²', '191 cm²'],
    optionsHi: ['196 cm²', '126 cm²', '183 cm²', '191 cm²'],
    correctIndex: 0,
    explanationEn:
      'When a circle is inscribed in a square touching all four sides, the side of the square equals the diameter of the circle:\nSide = 2r = 2 × 7 = 14 cm.\nArea of square = 14² = 196 cm².',
    explanationHi:
      'जब कोई वृत्त वर्ग की चारों भुजाओं को स्पर्श करता है, तो वर्ग की भुजा वृत्त के व्यास के बराबर होती है:\nभुजा = 2 × 7 = 14 cm ⇒ वर्ग का क्षेत्रफल = 14² = 196 cm²।',
  },
  {
    id: 'cgl26_06o1_q59',
    topic: 'Mensuration 2D (Quadrant of a Circle)',
    questionEn:
      'If the area of a quadrant of a circle is π/16 m², find the radius (in meters).',
    questionHi:
      'यदि एक वृत्त के चतुर्थांश का क्षेत्रफल π/16 m² है, तो उसकी त्रिज्या (मीटर में) ज्ञात कीजिए।',
    optionsEn: ['1/4 m', '1 m', '1/2 m', '2 m'],
    optionsHi: ['1/4 m', '1 m', '1/2 m', '2 m'],
    correctIndex: 2,
    explanationEn:
      'Area of a quadrant = (1/4)πr² = π/16.\nDivide both sides by π: r² / 4 = 1 / 16 ⇒ r² = 4 / 16 = 1 / 4 ⇒ r = 1/2 m.',
    explanationHi:
      'चतुर्थांश का क्षेत्रफल = (1/4)πr² = π/16।\n⇒ r² = 4/16 = 1/4 ⇒ त्रिज्या r = 1/2 m।',
  },
  {
    id: 'cgl26_06o1_q60',
    topic: 'Mensuration 3D (Cone)',
    questionEn:
      'A cone has a volume of 192π cm³ and a height of 12 cm. Find the radius of its base.',
    questionHi:
      'एक शंकु का आयतन 192π cm³ है और इसकी ऊँचाई 12 cm है। इसके आधार की त्रिज्या ज्ञात कीजिए।',
    optionsEn: ['4√3 cm', '2√3 cm', '5√3 cm', '6√3 cm'],
    optionsHi: ['4√3 cm', '2√3 cm', '5√3 cm', '6√3 cm'],
    correctIndex: 0,
    explanationEn:
      'Volume of a cone = (1/3)πr²h = 192π.\nSubstitute h = 12: (1/3) × r² × 12 = 192 ⇒ 4r² = 192 ⇒ r² = 48 ⇒ r = √48 = √(16 × 3) = 4√3 cm.',
    explanationHi:
      'शंकु का आयतन = (1/3)πr²h = 192π।\nh = 12 रखने पर: 4r² = 192 ⇒ r² = 48 ⇒ r = √48 = 4√3 cm।',
  },
  {
    id: 'cgl26_06o1_q61',
    topic: 'Profit & Loss',
    questionEn:
      'A shopkeeper makes 15% profit by selling a book at a certain price. If he charges ₹12 more, he would gain 20%. What was the original selling price of the book?',
    questionHi:
      'एक दुकानदार एक किताब को किसी निश्चित कीमत पर बेचकर 15% का लाभ कमाता है। यदि वह ₹12 अधिक लेता, तो उसे 20% का लाभ होता। किताब का मूल विक्रय मूल्य क्या था?',
    optionsEn: ['₹296', '₹250', '₹280', '₹276'],
    optionsHi: ['₹296', '₹250', '₹280', '₹276'],
    correctIndex: 3,
    explanationEn:
      'Change in profit percentage = 20% − 15% = 5% of CP = ₹12.\nTherefore, 1% of CP = 12 / 5 = ₹2.40 ⇒ CP = ₹240.\nOriginal Selling Price = 115% of CP = 115 × 2.40 = ₹276.\n(Short trick: Original SP = 12 × (115 / 5) = 12 × 23 = ₹276.)',
    explanationHi:
      'लाभ प्रतिशत में अंतर = 20% − 15% = 5% ⇒ क्रय मूल्य का 5% = ₹12 ⇒ क्रय मूल्य = ₹240।\nमूल विक्रय मूल्य = 240 का 115% = ₹276।\n(शॉर्ट ट्रिक: 12 × (115 / 5) = 12 × 23 = ₹276।)',
  },
  {
    id: 'cgl26_06o1_q62',
    topic: 'Profit, Loss & Discount',
    questionEn:
      'A shopkeeper marks up his goods by 60%. He sells 25% of the stock at the marked price, 50% of the stock at a 20% discount on the marked price, and the remaining stock at a 50% discount on the marked price. Find his overall profit percentage.',
    questionHi:
      'एक दुकानदार अपने सामान की कीमत 60% बढ़ाकर अंकित करता है। वह अपने स्टॉक का 25% हिस्सा अंकित मूल्य पर, 50% हिस्सा अंकित मूल्य पर 20% की छूट पर, और शेष स्टॉक अंकित मूल्य पर 50% की छूट पर बेचता है। उसका कुल लाभ प्रतिशत ज्ञात कीजिए।',
    optionsEn: ['28%', '24%', '32%', '45%'],
    optionsHi: ['28%', '24%', '32%', '45%'],
    correctIndex: 1,
    explanationEn:
      'Let total CP = ₹100 (4 identical items of ₹25 each, or 100 units at ₹1). Then total MP = ₹160.\n• 25% sold at 0% discount ⇒ SP₁ = 0.25 × 160 = ₹40\n• 50% sold at 20% discount ⇒ SP₂ = 0.50 × (160 × 0.80) = 0.50 × 128 = ₹64\n• Remaining 25% sold at 50% discount ⇒ SP₃ = 0.25 × (160 × 0.50) = 0.25 × 80 = ₹20\nTotal SP = 40 + 64 + 20 = ₹124.\nOverall profit% = (124 − 100) / 100 × 100% = 24%.',
    explanationHi:
      'माना कुल क्रय मूल्य = ₹100 ⇒ कुल अंकित मूल्य (MP) = ₹160।\n• 25% माल MP पर = 0.25 × 160 = ₹40\n• 50% माल 20% छूट पर = 0.50 × 128 = ₹64\n• शेष 25% माल 50% छूट पर = 0.25 × 80 = ₹20\nकुल विक्रय मूल्य = 40 + 64 + 20 = ₹124 ⇒ कुल लाभ = 24%।',
  },
  {
    id: 'cgl26_06o1_q63',
    topic: 'Heights & Distances',
    questionEn:
      'The angles of elevation of the top of a tower from two points on the same line are 45° and 60°. The points are 20 m apart. Find the approximate height of the tower.',
    questionHi:
      'एक ही सीधी रेखा पर स्थित दो बिंदुओं से किसी मीनार के शीर्ष के उन्नयन कोण क्रमशः 45° और 60° हैं। दोनों बिंदुओं के बीच की दूरी 20 m है। मीनार की लगभग ऊँचाई ज्ञात कीजिए।',
    optionsEn: ['57.3 m', '43.3 m', '51.3 m', '47.3 m'],
    optionsHi: ['57.3 m', '43.3 m', '51.3 m', '47.3 m'],
    correctIndex: 3,
    explanationEn:
      'For two points on the same side of the tower separated by distance d = 20 m:\nFormula: h = d / (cot 45° − cot 60°) = 20 / (1 − 1/√3) = 20√3 / (√3 − 1).\nRationalizing: h = 20√3(√3 + 1) / (3 − 1) = 10(3 + √3) ≈ 10 × (3 + 1.732) = 47.32 m ≈ 47.3 m.',
    explanationHi:
      'मीनार के एक ही ओर स्थित दो बिंदुओं के बीच दूरी d = 20 m हो, तो सूत्र:\nh = d / (cot 45° − cot 60°) = 20 / (1 − 1/√3) = 10√3(√3 + 1) = 30 + 10√3 ≈ 30 + 17.32 = 47.3 m।',
  },
  {
    id: 'cgl26_06o1_q64',
    topic: 'Geometry (Lines & Angles)',
    questionEn:
      'The measure of supplement of ∠p is 60° more than four times the measure of complement of ∠p. Find the sum in degree of the supplement and complement of ∠p.',
    questionHi:
      '∠p के संपूरक कोण का माप, ∠p के पूरक कोण के माप के चार गुने से 60° अधिक है। ∠p के संपूरक और पूरक कोणों के मापों का योग (डिग्री में) ज्ञात कीजिए।',
    optionsEn: ['110°', '170°', '180°', '140°'],
    optionsHi: ['110°', '170°', '180°', '140°'],
    correctIndex: 0,
    explanationEn:
      'Supplement of ∠p = 180° − p; Complement of ∠p = 90° − p.\nGiven: 180 − p = 4(90 − p) + 60\n⇒ 180 − p = 360 − 4p + 60\n⇒ 3p = 240 ⇒ p = 80°.\nSupplement = 180° − 80° = 100°; Complement = 90° − 80° = 10°.\nRequired sum = 100° + 10° = 110°.',
    explanationHi:
      'संपूरक = 180° − p तथा पूरक = 90° − p।\nप्रश्नानुसार: 180 − p = 4(90 − p) + 60 ⇒ 3p = 240 ⇒ p = 80°।\nसंपूरक = 100° तथा पूरक = 10° ⇒ अभीष्ट योग = 100° + 10° = 110°।',
  },
  {
    id: 'cgl26_06o1_q65',
    topic: 'Trigonometry (Identities)',
    questionEn:
      'If sin A − cos A = √2/2 and angle A lies in the first quadrant, find the value of sin A + cos A.',
    questionHi:
      'यदि sin A − cos A = √2/2 और कोण A प्रथम चतुर्थांश में स्थित है, तो sin A + cos A का मान ज्ञात कीजिए।',
    optionsEn: ['√3/2', '√6/2', '1', '√2/2'],
    optionsHi: ['√3/2', '√6/2', '1', '√2/2'],
    correctIndex: 1,
    explanationEn:
      'Use the standard identity: (sin A + cos A)² + (sin A − cos A)² = 2(sin² A + cos² A) = 2.\nSubstitute sin A − cos A = √2/2:\n(sin A + cos A)² = 2 − (√2/2)² = 2 − 1/2 = 3/2.\nSince A is in the first quadrant, sin A + cos A > 0:\nsin A + cos A = √(3/2) = √6/2.',
    explanationHi:
      'मानक सर्वसमिका: (sin A + cos A)² + (sin A − cos A)² = 2।\n⇒ (sin A + cos A)² = 2 − (√2/2)² = 2 − 1/2 = 3/2।\nप्रथम चतुर्थांश में sin A + cos A > 0 ⇒ sin A + cos A = √(3/2) = √6/2।',
  },
  {
    id: 'cgl26_06o1_q66',
    topic: 'Trigonometry (Standard Angles)',
    questionEn:
      'What is the value of (5 cosec² 30° − 3 cot² 30° + 16 cos⁴ 45°) / (2√3 tan 60° + 4 sin² 60°)?',
    questionHi:
      '(5 cosec² 30° − 3 cot² 30° + 16 cos⁴ 45°) / (2√3 tan 60° + 4 sin² 60°) का मान ज्ञात कीजिए।',
    optionsEn: ['1', '5/3', '1/2', '0'],
    optionsHi: ['1', '5/3', '1/2', '0'],
    correctIndex: 1,
    explanationEn:
      'Substitute standard trigonometric values:\n• cosec 30° = 2 ⇒ 5(2)² = 20\n• cot 30° = √3 ⇒ 3(√3)² = 9\n• cos 45° = 1/√2 ⇒ 16(1/√2)⁴ = 16(1/4) = 4\nNumerator = 20 − 9 + 4 = 15.\n• tan 60° = √3 ⇒ 2√3(√3) = 6\n• sin 60° = √3/2 ⇒ 4(3/4) = 3\nDenominator = 6 + 3 = 9.\nValue = 15 / 9 = 5/3.',
    explanationHi:
      'मानक त्रिकोणमितीय मान रखने पर:\nअंश = 5(2)² − 3(√3)² + 16(1/√2)⁴ = 20 − 9 + 4 = 15।\nहर = 2√3(√3) + 4(√3/2)² = 6 + 3 = 9।\nअभीष्ट मान = 15 / 9 = 5/3।',
  },
  {
    id: 'cgl26_06o1_q67',
    topic: 'Mensuration 3D (Melting Spheres)',
    questionEn:
      'Three solid metallic spheres of radii 4 cm, 3 cm, and 5 cm are melted to form a single large sphere. What is the radius of the new sphere?',
    questionHi:
      '4 cm, 3 cm, और 5 cm त्रिज्या वाले तीन ठोस धात्विक गोले पिघलाकर एक बड़ा गोला बनाया जाता है। नए गोले की त्रिज्या क्या है?',
    optionsEn: ['3 cm', '6 cm', '8 cm', '9 cm'],
    optionsHi: ['3 cm', '6 cm', '8 cm', '9 cm'],
    correctIndex: 1,
    explanationEn:
      'Volume is conserved when melted: (4/3)πR³ = (4/3)π(r₁³ + r₂³ + r₃³).\nR³ = 4³ + 3³ + 5³ = 64 + 27 + 125 = 216 = 6³.\nTherefore, R = 6 cm. (Remember the famous cube triplet: 3³ + 4³ + 5³ = 6³.)',
    explanationHi:
      'पिघलाने पर आयतन समान रहता है: R³ = 4³ + 3³ + 5³ = 64 + 27 + 125 = 216 = 6³।\nअतः नए गोले की त्रिज्या R = 6 cm।',
  },
  {
    id: 'cgl26_06o1_q68',
    topic: 'Geometry (Similar Triangles)',
    questionEn:
      'Triangles XYZ and PQR are similar. In ΔXYZ, the side lengths are XY = 10 cm, YZ = 15 cm, and ZX = 20 cm. If the ratio of the areas of ΔXYZ and ΔPQR is 25:36, what is the length of side QR in ΔPQR?',
    questionHi:
      'त्रिभुज XYZ और PQR समरूप हैं। ΔXYZ में, भुजाओं की लंबाई XY = 10 cm, YZ = 15 cm और ZX = 20 cm है। यदि ΔXYZ और ΔPQR के क्षेत्रफलों का अनुपात 25:36 है, तो ΔPQR में भुजा QR की लंबाई क्या है?',
    optionsEn: ['12 cm', '14 cm', '18 cm', '20 cm'],
    optionsHi: ['12 cm', '14 cm', '18 cm', '20 cm'],
    correctIndex: 2,
    explanationEn:
      'For similar triangles, the ratio of areas equals the square of the ratio of corresponding sides:\nArea(ΔXYZ) / Area(ΔPQR) = (YZ / QR)² ⇒ 25 / 36 = (15 / QR)².\nTaking square roots: 5 / 6 = 15 / QR ⇒ QR = (15 × 6) / 5 = 18 cm.',
    explanationHi:
      'समरूप त्रिभुजों के क्षेत्रफलों का अनुपात संगत भुजाओं के अनुपात के वर्ग के बराबर होता है:\n(YZ / QR)² = 25 / 36 ⇒ 15 / QR = 5 / 6 ⇒ QR = (15 × 6) / 5 = 18 cm।',
  },
  {
    id: 'cgl26_06o1_q69',
    topic: 'Simple Interest',
    questionEn:
      'A cooperative housing society borrowed ₹4,50,000 to repair its buildings. The society paid back ₹6,12,000 after 9 years. Find the rate of simple interest and determine how much interest was paid every year.',
    questionHi:
      'एक सहकारी आवास समिति ने अपनी इमारतों की मरम्मत के लिए 4,50,000 रुपये उधार लिए। समिति ने 9 वर्ष बाद 6,12,000 रुपये चुकाए। साधारण ब्याज की दर ज्ञात कीजिए और निर्धारित कीजिए कि प्रत्येक वर्ष कितना ब्याज भुगतान किया गया था।',
    optionsEn: [
      'Rate of Simple Interest = 5% per annum; Interest paid every year = ₹21,000',
      'Rate of Simple Interest = 2% per annum; Interest paid every year = ₹19,000',
      'Rate of Simple Interest = 4% per annum; Interest paid every year = ₹18,000',
      'Rate of Simple Interest = 3% per annum; Interest paid every year = ₹17,000',
    ],
    optionsHi: [
      'साधारण ब्याज की दर = 5% वार्षिक; प्रत्येक वर्ष भुगतान किया गया ब्याज = 21,000 रुपये',
      'साधारण ब्याज की दर = 2% वार्षिक; प्रत्येक वर्ष भुगतान किया गया ब्याज = 19,000 रुपये',
      'साधारण ब्याज की दर = 4% वार्षिक; प्रत्येक वर्ष भुगतान किया गया ब्याज = 18,000 रुपये',
      'साधारण ब्याज की दर = 3% वार्षिक; प्रत्येक वर्ष भुगतान किया गया ब्याज = 17,000 रुपये',
    ],
    correctIndex: 2,
    explanationEn:
      'Total Simple Interest (9 years) = ₹6,12,000 − ₹4,50,000 = ₹1,62,000.\nInterest paid every year = 1,62,000 / 9 = ₹18,000.\nRate of SI = (18,000 / 4,50,000) × 100 = 4% per annum.',
    explanationHi:
      '9 वर्षों का कुल साधारण ब्याज = 6,12,000 − 4,50,000 = ₹1,62,000।\nप्रति वर्ष ब्याज = 1,62,000 / 9 = ₹18,000।\nब्याज की दर = (18,000 / 4,50,000) × 100 = 4% वार्षिक।',
  },
  {
    id: 'cgl26_06o1_q70',
    topic: 'Time & Work (Efficiency & Rejection)',
    questionEn:
      'An expert potter can craft a batch of pottery in 24 hours, while his apprentice can do the same in 40 hours. They receive a large high-profile order of a batch from the owner of a hotel and decide to work on it together. However, a strict quality inspector is sent by the hotel owner at the exact end of every 4-hour joint shift. The inspector rejects exactly 20% of the pottery completed during those specific 4-hour shifts due to minor imperfections. Any final remaining items needed after the last shift are crafted under direct guidance with 0% defects. How many total hours will it take them to complete the order successfully?',
    questionHi:
      'एक कुशल कुम्हार (पॉटरी आर्टिस्ट) मिट्टी के बर्तनों का एक बैच 24 घंटों में तैयार कर सकता है, जबकि उसका प्रशिक्षु (अप्रेंटिस) वही कार्य 40 घंटों में कर सकता है। उन्हें एक होटल के मालिक से एक बड़े और प्रतिष्ठित ऑर्डर के रूप में बर्तनों का बैच मिलता है, जिसे वे दोनों मिलकर पूरा करने का निर्णय लेते हैं। हालाँकि, होटल मालिक द्वारा एक सख्त गुणवत्ता निरीक्षक (क्वालिटी इंस्पेक्टर) भेजा जाता है, जो हर 4 घंटे की संयुक्त कार्य-शिफ्ट के ठीक अंत में निरीक्षण करता है। निरीक्षक उन 4 घंटे में बने बर्तनों में से 20% को मामूली खामियों के कारण अस्वीकार कर देता है। अंतिम शेष कार्य, यदि किसी अंतिम शिफ्ट के बाद बचा हो, तो उसे सीधे मार्गदर्शन में बनाया जाता है और उसमें 0% दोष (डिफेक्ट्स) होते हैं। पूरे ऑर्डर को सफलतापूर्वक पूरा करने में उन्हें कुल कितने घंटे लगेंगे?',
    optionsEn: ['18.2 hrs', '17.4 hrs', '16.8 hrs', '15.5 hrs'],
    optionsHi: ['18.2 घंटे', '17.4 घंटे', '16.8 घंटे', '15.5 घंटे'],
    correctIndex: 0,
    explanationEn:
      'Let Total Work = LCM(24, 40) = 120 units.\n• Potter’s rate = 120 / 24 = 5 units/hr; Apprentice’s rate = 120 / 40 = 3 units/hr.\n• Combined rate = 5 + 3 = 8 units/hr.\n• In each 4-hour shift, raw work = 4 × 8 = 32 units. After 20% rejection, accepted work per 4-hr shift = 80% of 32 = 25.6 units.\n• After 4 full shifts (4 × 4 = 16 hrs): accepted work = 4 × 25.6 = 102.4 units.\n• Remaining work = 120 − 102.4 = 17.6 units (< 32 units, finished before another 4-hr inspection, with 0% defects).\n• Time for remaining 17.6 units = 17.6 / 8 = 2.2 hrs.\nTotal time = 16 + 2.2 = 18.2 hrs.',
    explanationHi:
      'माना कुल कार्य = LCM(24, 40) = 120 इकाई।\n• कुम्हार की क्षमता = 5 इकाई/घंटा; प्रशिक्षु की क्षमता = 3 इकाई/घंटा ⇒ संयुक्त क्षमता = 8 इकाई/घंटा।\n• प्रत्येक 4 घंटे की शिफ्ट में बना कार्य = 32 इकाई; 20% अस्वीकृति के बाद स्वीकृत कार्य = 32 का 80% = 25.6 इकाई।\n• 4 शिफ्ट (16 घंटे) के बाद स्वीकृत कार्य = 4 × 25.6 = 102.4 इकाई।\n• शेष कार्य = 120 − 102.4 = 17.6 इकाई (0% दोष के साथ पूरा)।\n• शेष कार्य में समय = 17.6 / 8 = 2.2 घंटे ⇒ कुल समय = 16 + 2.2 = 18.2 घंटे।',
  },
  {
    id: 'cgl26_06o1_q71',
    topic: 'Time & Work (Pairwise Rates)',
    questionEn:
      'A team of linguists is translating the text on an ancient monolith. Linguist A and linguist B working together can translate it in 12 days, linguist B and linguist C working together can do it in 15 days, while A and C working together can do it in 20 days. All three of them work together on the monolith for 6 days. Then, A and B are relocated to another site. How many more days will be required by C to finish the remaining task alone?',
    questionHi:
      'भाषाविदों की एक टीम एक प्राचीन शिलालेख (मोनोलिथ) पर लिखे पाठ का अनुवाद कर रही है। भाषाविद A और भाषाविद B मिलकर उस कार्य को 12 दिनों में पूरा कर सकते हैं, भाषाविद B और भाषाविद C मिलकर इसे 15 दिनों में कर सकते हैं, जबकि A और C मिलकर इसे 20 दिनों में पूरा कर सकते हैं। फिर तीनों मिलकर मोनोलिथ पर 6 दिनों तक कार्य करते हैं। इसके बाद A और B को किसी अन्य स्थान पर स्थानांतरित कर दिया जाता है। शेष कार्य को अकेले C को पूरा करने में और कितने दिन लगेंगे?',
    optionsEn: ['20 days', '22 days', '24 days', '25 days'],
    optionsHi: ['20 दिन', '22 दिन', '24 दिन', '25 दिन'],
    correctIndex: 2,
    explanationEn:
      'Let Total Work = LCM(12, 15, 20) = 60 units.\n• (A + B) = 60/12 = 5 units/day\n• (B + C) = 60/15 = 4 units/day\n• (A + C) = 60/20 = 3 units/day\nAdding all three: 2(A + B + C) = 12 ⇒ (A + B + C) = 6 units/day.\nTherefore, C’s daily rate = 6 − (A + B) = 6 − 5 = 1 unit/day.\nWork completed in 6 days by all three = 6 × 6 = 36 units.\nRemaining work = 60 − 36 = 24 units.\nTime required by C alone = 24 / 1 = 24 days.',
    explanationHi:
      'माना कुल कार्य = LCM(12, 15, 20) = 60 इकाई।\n• A + B = 5, B + C = 4, A + C = 3 ⇒ A + B + C = (5 + 4 + 3)/2 = 6 इकाई/दिन।\n• C की अकेले क्षमता = 6 − 5 = 1 इकाई/दिन।\n• 6 दिनों में तीनों द्वारा किया कार्य = 6 × 6 = 36 इकाई ⇒ शेष कार्य = 60 − 36 = 24 इकाई।\n• अकेले C द्वारा लिया गया समय = 24 / 1 = 24 दिन।',
  },
  {
    id: 'cgl26_06o1_q72',
    topic: 'Trigonometry (Complementary Angles)',
    questionEn: 'Evaluate: (sin 35°) / (cos 55°)',
    questionHi: 'मूल्यांकन करें: (sin 35°) / (cos 55°)',
    optionsEn: ['1', '0', '−1', '2'],
    optionsHi: ['1', '0', '−1', '2'],
    correctIndex: 0,
    explanationEn:
      'Since 35° + 55° = 90° (complementary angles), sin 35° = sin(90° − 55°) = cos 55°.\nTherefore, (sin 35°) / (cos 55°) = (cos 55°) / (cos 55°) = 1.',
    explanationHi:
      'चूँकि 35° + 55° = 90°, sin 35° = sin(90° − 55°) = cos 55°।\nअतः (sin 35°) / (cos 55°) = (cos 55°) / (cos 55°) = 1।',
  },
  {
    id: 'cgl26_06o1_q73',
    topic: 'Algebra (Identities)',
    questionEn:
      'Evaluate the following numerical expression using an appropriate algebraic identity:\n(5.37 × 5.37 − 4.63 × 4.63) / 0.74',
    questionHi:
      'उचित बीजगणितीय सर्वसमिका का उपयोग करके निम्नलिखित संख्यात्मक व्यंजक का मान ज्ञात कीजिए:\n(5.37 × 5.37 − 4.63 × 4.63) / 0.74',
    optionsEn: ['1', '7.3', '4.6', '10'],
    optionsHi: ['1', '7.3', '4.6', '10'],
    correctIndex: 3,
    explanationEn:
      'Using a² − b² = (a + b)(a − b) with a = 5.37 and b = 4.63:\n• a + b = 5.37 + 4.63 = 10\n• a − b = 5.37 − 4.63 = 0.74\nExpression = (10 × 0.74) / 0.74 = 10.',
    explanationHi:
      'सर्वसमिका a² − b² = (a + b)(a − b) का प्रयोग करने पर (a = 5.37, b = 4.63):\n(5.37 + 4.63)(5.37 − 4.63) / 0.74 = (10 × 0.74) / 0.74 = 10।',
  },
  {
    id: 'cgl26_06o1_q74',
    topic: 'Algebra (Cubic Identities)',
    questionEn: 'If a + b = 18 and ab = 46, compute a³ + b³.',
    questionHi: 'यदि a + b = 18 और ab = 46 है, तो a³ + b³ का मान ज्ञात कीजिए।',
    optionsEn: ['2484', '3348', '4328', '5832'],
    optionsHi: ['2484', '3348', '4328', '5832'],
    correctIndex: 1,
    explanationEn:
      'Use the cubic identity: a³ + b³ = (a + b)[(a + b)² − 3ab].\nSubstitute a + b = 18 and ab = 46:\na³ + b³ = 18 × (18² − 3 × 46) = 18 × (324 − 138) = 18 × 186 = 3348.',
    explanationHi:
      'सर्वसमिका: a³ + b³ = (a + b)[(a + b)² − 3ab]।\nमान रखने पर: 18 × (324 − 138) = 18 × 186 = 3348।',
  },
  {
    id: 'cgl26_06o1_q75',
    topic: 'Surds & Indices (Rationalization)',
    questionEn:
      'Simplify the following expression completely:\n3/(√5 + √2) + 2/(√5 − √2)',
    questionHi:
      'निम्नलिखित व्यंजक को पूर्णतः सरल कीजिए:\n3/(√5 + √2) + 2/(√5 − √2)',
    optionsEn: ['(5√5 + √2)/3', '(√5 − 5√2)/3', '(5√5 − √2)/3', '5/(2√5)'],
    optionsHi: ['(5√5 + √2)/3', '(√5 − 5√2)/3', '(5√5 − √2)/3', '5/(2√5)'],
    correctIndex: 2,
    explanationEn:
      'Take the LCM of denominators: (√5 + √2)(√5 − √2) = 5 − 2 = 3.\nNumerator = 3(√5 − √2) + 2(√5 + √2) = 3√5 − 3√2 + 2√5 + 2√2 = 5√5 − √2.\nTherefore, the simplified value is (5√5 − √2)/3.',
    explanationHi:
      'ल.स. लेने पर हर = (√5 + √2)(√5 − √2) = 5 − 2 = 3।\nअंश = 3(√5 − √2) + 2(√5 + √2) = 5√5 − √2।\nअतः सरलतम रूप = (5√5 − √2)/3।',
  },
];

const RC_PASSAGE_O6S1 = `Read the following passage carefully and answer the questions that follow.

Few people truly understand the hidden life of the street. Even when we enter it, we often fail to recognise the unique individuals who belong to it—the wanderers and nomads who have preserved their secrets through generations. We understand even less about the street at night, when it resembles a great house whose doors are locked.

Charles Dickens, however, understood the street deeply. He seemed to possess the key to its hidden world. The street lamps were his stars, and the ordinary person on the street was his hero. He could reveal its innermost character and enter its secret passages, lined with houses and roofed with stars.

Facts that are merely observed do not remain permanently fixed in memory. To remember a place forever, one must experience it completely and become so deeply absorbed in it that one temporarily forgets oneself as a separate observer.

For Dickens, the streets remained deeply romantic because they were associated with the powerful experiences and tragedies of his youth. They were also filled with memories of sunsets that could never return. This emotional connection explains the unusual realism with which he brought the dark and ordinary corners of London to life. In his descriptions, even minor details—a window, a railing or the keyhole of a door—acquire an intense and lifelike vitality. Through his imagination, ordinary objects appear more vivid and real than they normally do.`;

const SECTION_4_ENGLISH_O6S1: Question[] = [
  {
    id: 'cgl26_06o1_q76',
    topic: 'Direct & Indirect Speech',
    questionEn:
      'Choose the accurate direct speech version of the following sentence.\nShe asked me to tell her the location of the guest house.',
    questionHi:
      'Choose the accurate direct speech version of the following sentence.\nShe asked me to tell her the location of the guest house.',
    optionsEn: [
      'She said, "I was wondering if you could possibly tell me the location of the guest house?"',
      'She asked, “Could you tell me the location of the guest house?”',
      'She said, "Tell me the location of the guest house."',
      'She asked, "Could you possibly tell me the location of the guest house?"',
    ],
    optionsHi: [
      'She said, "I was wondering if you could possibly tell me the location of the guest house?"',
      'She asked, “Could you tell me the location of the guest house?”',
      'She said, "Tell me the location of the guest house."',
      'She asked, "Could you possibly tell me the location of the guest house?"',
    ],
    correctIndex: 2,
    explanationEn:
      'An indirect imperative structure ("asked + object + to + base verb") converts back directly to an imperative sentence in direct speech: She said, "Tell me the location of the guest house." The other options introduce extra modal/interrogative phrases ("could", "possibly", "wondering") not present in the indirect statement.',
    explanationHi:
      'Indirect speech की संरचना "asked + object + to + V1" सीधे Imperative Direct Speech में बदलती है: She said, "Tell me the location of the guest house." अन्य विकल्पों में अतिरिक्त modal/प्रश्नवाचक शब्द जोड़े गए हैं।',
  },
  {
    id: 'cgl26_06o1_q77',
    topic: 'Sentence Rearrangement',
    questionEn:
      'Rearrange the parts of the sentence in the correct order.\nThe recent advancements in space exploration\nP. and paving the way for future Mars colonization\nQ. unlocking new possibilities for interplanetary travel,\nR. have been driven by international collaborations,\nS. focused on developing sustainable lunar habitats',
    questionHi:
      'Rearrange the parts of the sentence in the correct order.\nThe recent advancements in space exploration\nP. and paving the way for future Mars colonization\nQ. unlocking new possibilities for interplanetary travel,\nR. have been driven by international collaborations,\nS. focused on developing sustainable lunar habitats',
    optionsEn: ['PSQR', 'RQSP', 'SRPQ', 'QPSR'],
    optionsHi: ['PSQR', 'RQSP', 'SRPQ', 'QPSR'],
    correctIndex: 1,
    explanationEn:
      'Subject "The recent advancements in space exploration" needs a plural verb phrase → R ("have been driven by international collaborations,"), followed by the participle clause Q ("unlocking new possibilities for interplanetary travel,"), then S ("focused on developing sustainable lunar habitats"), and concluded by parallel phrase P ("and paving the way for future Mars colonization"). Sequence: RQSP.',
    explanationHi:
      'कर्ता "The recent advancements..." के बाद मुख्य क्रिया R ("have been driven...") आएगी, फिर उसका परिणाम Q ("unlocking..."), उसके बाद S ("focused on...") और अंत में P ("and paving the way...")। सही क्रम: RQSP।',
  },
  {
    id: 'cgl26_06o1_q78',
    topic: 'Idioms & Phrases',
    questionEn:
      'Choose the correct phrase for the expression in quotes:\n"He expects his subordinates to be always “at his beck and call”."',
    questionHi:
      'Choose the correct phrase for the expression in quotes:\n"He expects his subordinates to be always “at his beck and call”."',
    optionsEn: [
      'To be constantly available to obey orders',
      'To challenge authority frequently',
      'To work only when convenient',
      'To ignore requests deliberately',
    ],
    optionsHi: [
      'To be constantly available to obey orders',
      'To challenge authority frequently',
      'To work only when convenient',
      'To ignore requests deliberately',
    ],
    correctIndex: 0,
    explanationEn:
      'The idiom "at someone’s beck and call" means always ready and constantly available to obey someone’s commands or wishes immediately.',
    explanationHi:
      'मुहावरा "at someone’s beck and call" का अर्थ है किसी के इशारे/आदेश का पालन करने के लिए हर समय तत्पर रहना (To be constantly available to obey orders)।',
  },
  {
    id: 'cgl26_06o1_q79',
    topic: 'Fill in the Blank (Vocabulary)',
    questionEn:
      'Fill in the blank with an appropriate word/phrasal verb.\nDespite initial enthusiasm, investors began to ______ when the project’s viability was questioned.',
    questionHi:
      'Fill in the blank with an appropriate word/phrasal verb.\nDespite initial enthusiasm, investors began to ______ when the project’s viability was questioned.',
    optionsEn: ['backwash', 'backpedal', 'backlash', 'backburn'],
    optionsHi: ['backwash', 'backpedal', 'backlash', 'backburn'],
    correctIndex: 1,
    explanationEn:
      '"Backpedal" (verb) means to reverse one’s earlier stance, retreat, or withdraw support/commitment—fitting "began to ___" after doubts arose. ("Backwash" and "backlash" are nouns; "backburn" refers to controlled fire-fighting.)',
    explanationHi:
      '"Backpedal" (क्रिया) का अर्थ अपने पहले के समर्थन या निर्णय से पीछे हटना है। यहाँ "began to + V1" के रूप में "backpedal" बिल्कुल सटीक है।',
  },
  {
    id: 'cgl26_06o1_q80',
    topic: 'Spotting Errors (Articles)',
    questionEn: 'Identify the error in the sentence.\nShe’s reading an Times of India editorial.',
    questionHi: 'Identify the error in the sentence.\nShe’s reading an Times of India editorial.',
    optionsEn: ['India', 'an', 'editorial', 'reading'],
    optionsHi: ['India', 'an', 'editorial', 'reading'],
    correctIndex: 1,
    explanationEn:
      'The indefinite article "an" is used only before a vowel sound. Since "Times" begins with the consonant sound /t/, "an" is erroneous and must be replaced with "a" ("She’s reading a Times of India editorial").',
    explanationHi:
      '"Times" व्यंजन ध्वनि (/t/) से शुरू होता है, इसलिए इससे पहले "an" का प्रयोग गलत है; यहाँ "a" ("a Times of India editorial") का प्रयोग होना चाहिए।',
  },
  {
    id: 'cgl26_06o1_q81',
    topic: 'Para-Jumble',
    questionEn:
      'Which of the given options arranges the following sentences in the most logical sequence to form a meaningful paragraph?\n1. However, rising ocean temperatures and acidification are causing coral bleaching, threatening reef survival.\n2. Corals have a symbiotic relationship with algae, which provide them with nutrients and vibrant colors.\n3. When stressed by environmental changes, corals expel the algae, leading to their pale, bleached appearance.\n4. Coral reefs are among the most biodiverse ecosystems, providing habitat for thousands of marine species.\n5. Scientists are exploring conservation strategies, including artificial reefs and selective breeding of heat-resistant coral species.',
    questionHi:
      'Which of the given options arranges the following sentences in the most logical sequence to form a meaningful paragraph?\n1. However, rising ocean temperatures and acidification are causing coral bleaching, threatening reef survival.\n2. Corals have a symbiotic relationship with algae, which provide them with nutrients and vibrant colors.\n3. When stressed by environmental changes, corals expel the algae, leading to their pale, bleached appearance.\n4. Coral reefs are among the most biodiverse ecosystems, providing habitat for thousands of marine species.\n5. Scientists are exploring conservation strategies, including artificial reefs and selective breeding of heat-resistant coral species.',
    optionsEn: ['2-3-1-4-5', '3-1-4-2-5', '4-2-1-3-5', '5-4-1-3-2'],
    optionsHi: ['2-3-1-4-5', '3-1-4-2-5', '4-2-1-3-5', '5-4-1-3-2'],
    correctIndex: 2,
    explanationEn:
      '• Sentence 4 introduces the broad topic (coral reefs as biodiverse ecosystems).\n• Sentence 2 explains how healthy corals function (symbiosis with algae giving nutrients and color).\n• Sentence 1 introduces the contrast ("However...") and threat (coral bleaching).\n• Sentence 3 explains the mechanism of bleaching (expelling the algae introduced in 2).\n• Sentence 5 concludes with conservation solutions.\nLogical order: 4-2-1-3-5.',
    explanationHi:
      'वाक्य 4 विषय (कोरल रीफ) का परिचय देता है, 2 शैवाल के साथ सहजीवी संबंध बताता है, 1 "However" के साथ कोरल ब्लीचिंग के खतरे को जोड़ता है, 3 ब्लीचिंग की प्रक्रिया स्पष्ट करता है और 5 संरक्षण के उपाय बताकर अनुच्छेद समाप्त करता है। सही क्रम: 4-2-1-3-5।',
  },
  {
    id: 'cgl26_06o1_q82',
    topic: 'Sentence Improvement (Degrees of Comparison)',
    questionEn:
      'Improve the sentence by choosing the correct degree of comparison that replaces the word in quotes:\nThis road is “narrow” than the one we took yesterday.',
    questionHi:
      'Improve the sentence by choosing the correct degree of comparison that replaces the word in quotes:\nThis road is “narrow” than the one we took yesterday.',
    optionsEn: ['more narrower', 'narrower', 'most narrow', 'narrowest'],
    optionsHi: ['more narrower', 'narrower', 'most narrow', 'narrowest'],
    correctIndex: 1,
    explanationEn:
      'The presence of "than" comparing two roads requires the comparative degree of "narrow", which is "narrower". ("More narrower" is a double comparative error; "most narrow" / "narrowest" are superlatives.)',
    explanationHi:
      'दो सड़कों की तुलना ("than") के लिए "narrow" की comparative degree "narrower" का प्रयोग होगा ("more narrower" दोहरी तुलना की अशुद्धि है)।',
  },
  {
    id: 'cgl26_06o1_q83',
    topic: 'Antonyms',
    questionEn: 'Select the most appropriate antonym of the given word.\nZealous',
    questionHi: 'Select the most appropriate antonym of the given word.\nZealous',
    optionsEn: ['Apathetic', 'Ardent', 'Fervent', 'Eager'],
    optionsHi: ['Apathetic', 'Ardent', 'Fervent', 'Eager'],
    correctIndex: 0,
    explanationEn:
      '"Zealous" means intensely enthusiastic, passionate, or devoted. Ardent, fervent, and eager are all synonyms. Its exact antonym is "Apathetic" (indifferent, showing no interest or enthusiasm).',
    explanationHi:
      '"Zealous" का अर्थ अत्यंत उत्साही या जोशीला होता है। Ardent, Fervent और Eager इसके पर्यायवाची हैं, जबकि "Apathetic" (उदासीन) इसका सही विलोम है।',
  },
  {
    id: 'cgl26_06o1_q84',
    topic: 'Idioms & Phrases',
    questionEn: 'Choose the correct meaning of idiom:\nGive someone the slip',
    questionHi: 'Choose the correct meaning of idiom:\nGive someone the slip',
    optionsEn: [
      'To insult someone subtly',
      'To evade or escape from someone unnoticed',
      'To forgive after insult',
      'To follow and copy someone',
    ],
    optionsHi: [
      'To insult someone subtly',
      'To evade or escape from someone unnoticed',
      'To forgive after insult',
      'To follow and copy someone',
    ],
    correctIndex: 1,
    explanationEn:
      'To "give someone the slip" means to cleverly evade, dodge, or escape from someone who is following or watching you, unnoticed.',
    explanationHi:
      '"Give someone the slip" मुहावरे का अर्थ किसी की नज़र बचाकर चुपचाप भाग निकलना या चकमा देना (To evade or escape from someone unnoticed) होता है।',
  },
  {
    id: 'cgl26_06o1_q85',
    topic: 'Spelling Correction',
    questionEn: 'Spot the correct spelling of a word meaning "gold or silver in bulk form".',
    questionHi: 'Spot the correct spelling of a word meaning "gold or silver in bulk form".',
    optionsEn: ['Bullian', 'Bullon', 'Bullion', 'Bulyon'],
    optionsHi: ['Bullian', 'Bullon', 'Bullion', 'Bulyon'],
    correctIndex: 2,
    explanationEn:
      'The correctly spelled word is "Bullion" (B-U-L-L-I-O-N), meaning gold or silver in bulk form (bars or ingots) before coining, valued by weight.',
    explanationHi:
      'सही वर्तनी "Bullion" (सोने या चाँदी की सिल्लियाँ/थोक धातु) है।',
  },
  {
    id: 'cgl26_06o1_q86',
    topic: 'One-Word Substitution',
    questionEn: "Choose the correct one-word substitute for: 'A false name used by an author.'",
    questionHi: "Choose the correct one-word substitute for: 'A false name used by an author.'",
    optionsEn: ['Acronym', 'Pseudonym', 'Homonym', 'Patronym'],
    optionsHi: ['Acronym', 'Pseudonym', 'Homonym', 'Patronym'],
    correctIndex: 1,
    explanationEn:
      '• Pseudonym (pseudo = false + onyma = name): a fictitious pen name used by an author.\n• Acronym: abbreviation formed from initial letters (e.g., NASA).\n• Homonym: words with same spelling/sound but different meanings.\n• Patronym: name derived from a father or male ancestor.',
    explanationHi:
      'लेखक द्वारा प्रयुक्त छद्म/उपनाम को "Pseudonym" कहते हैं। (Acronym = संक्षिप्ताक्षर, Homonym = समनाम शब्द, Patronym = पितृनाम।)',
  },
  {
    id: 'cgl26_06o1_q87',
    topic: 'One-Word Substitution',
    questionEn: "Choose the correct one-word substitute for: 'Excessively idealistic; impractical.'",
    questionHi: "Choose the correct one-word substitute for: 'Excessively idealistic; impractical.'",
    optionsEn: ['Visionary', 'Pragmatic', 'Quixotic', 'Dogmatic'],
    optionsHi: ['Visionary', 'Pragmatic', 'Quixotic', 'Dogmatic'],
    correctIndex: 2,
    explanationEn:
      '• Quixotic (from Don Quixote): exceedingly idealistic, unrealistic, and impractical.\n• Pragmatic: practical and realistic.\n• Visionary: having imaginative foresight.\n• Dogmatic: rigidly asserting opinions without evidence.',
    explanationHi:
      'अत्यधिक आदर्शवादी लेकिन अव्यावहारिक व्यक्ति या विचार के लिए "Quixotic" शब्द का प्रयोग किया जाता है। (Pragmatic = व्यावहारिक, Dogmatic = हठधर्मी।)',
  },
  {
    id: 'cgl26_06o1_q88',
    topic: 'Fill in the Blank (Connectors)',
    questionEn:
      'Select the correct option:\nThe document was classified; ___, it could not be circulated publicly.',
    questionHi:
      'Select the correct option:\nThe document was classified; ___, it could not be circulated publicly.',
    optionsEn: ['therefore', 'however', 'nonetheless', 'otherwise'],
    optionsHi: ['therefore', 'however', 'nonetheless', 'otherwise'],
    correctIndex: 0,
    explanationEn:
      'The second clause states the direct logical consequence of the first clause (being classified caused it not to be circulated publicly). Hence the cause-and-effect conjunctive adverb "therefore" is required. ("However" and "nonetheless" show contrast; "otherwise" shows an alternative condition.)',
    explanationHi:
      'दूसरा उपवाक्य पहले का सीधा परिणाम बताता है (दस्तावेज़ गोपनीय था, इसलिए इसे सार्वजनिक नहीं किया जा सकता था)। अतः परिणामसूचक योजक "therefore" सही विकल्प है।',
  },
  {
    id: 'cgl26_06o1_q89',
    topic: 'Spotting Errors (Order of Adjectives)',
    questionEn:
      'Find the part of the sentence that contains an error:\nShe wore a stunning red silk long scarf (1) that complemented her traditional attire (2) during the award ceremony (3) at the convention centre. (4)',
    questionHi:
      'Find the part of the sentence that contains an error:\nShe wore a stunning red silk long scarf (1) that complemented her traditional attire (2) during the award ceremony (3) at the convention centre. (4)',
    optionsEn: ['(1)', '(2)', '(3)', '(4)'],
    optionsHi: ['(1)', '(2)', '(3)', '(4)'],
    correctIndex: 0,
    explanationEn:
      'Part (1) violates the standard Royal Order of Adjectives (OSASCOMP: Opinion → Size → Age → Shape → Colour → Origin → Material → Purpose). "Long" (Size) must precede "red" (Colour) and "silk" (Material): "a stunning long red silk scarf".',
    explanationHi:
      'भाग (1) में विशेषणों के मानक क्रम (OSASCOMP: Opinion–Size–Age–Shape–Colour–Origin–Material) का उल्लंघन है। "long" (आकार) को "red" (रंग) और "silk" (सामग्री) से पहले आना चाहिए: "a stunning long red silk scarf"।',
  },
  {
    id: 'cgl26_06o1_q90',
    topic: 'Spotting Errors (Conjunctions)',
    questionEn:
      'Find the part of the sentence that contains an error:\nIt seems as though the department is reluctant (1)/ not because of the cost implications, (2)/ but because that it might signal (3)/ a policy shift they are not ready to make. (4)',
    questionHi:
      'Find the part of the sentence that contains an error:\nIt seems as though the department is reluctant (1)/ not because of the cost implications, (2)/ but because that it might signal (3)/ a policy shift they are not ready to make. (4)',
    optionsEn: ['(1)', '(2)', '(3)', '(4)'],
    optionsHi: ['(1)', '(2)', '(3)', '(4)'],
    correctIndex: 2,
    explanationEn:
      'In part (3), "because that" is grammatically redundant—the subordinating conjunction "because" directly introduces a clause without "that". It should read: "but because it might signal".',
    explanationHi:
      'भाग (3) में "because" के साथ "that" का प्रयोग अनावश्यक (superfluous) है। शुद्ध रूप होगा: "but because it might signal"।',
  },
  {
    id: 'cgl26_06o1_q91',
    topic: 'Active & Passive Voice',
    questionEn:
      'Change the following from active to passive:\nThey will have been scrutinizing the proposal all afternoon.',
    questionHi:
      'Change the following from active to passive:\nThey will have been scrutinizing the proposal all afternoon.',
    optionsEn: [
      'The proposal will have scrutinized all afternoon.',
      'The proposal will have had been been scrutinized all afternoon.',
      'The proposal will have be being scrutinized all afternoon.',
      'The proposal will have been being scrutinized all afternoon.',
    ],
    optionsHi: [
      'The proposal will have scrutinized all afternoon.',
      'The proposal will have had been been scrutinized all afternoon.',
      'The proposal will have be being scrutinized all afternoon.',
      'The proposal will have been being scrutinized all afternoon.',
    ],
    correctIndex: 3,
    explanationEn:
      'Future Perfect Continuous active structure "will have been + V-ing" transforms mechanically into passive voice as: Object + will have been + being + V3 → "The proposal will have been being scrutinized all afternoon."',
    explanationHi:
      'Future Perfect Continuous (will have been + V-ing) को Passive Voice में बदलने का नियम: Object + will have been + being + V3 ⇒ "The proposal will have been being scrutinized all afternoon."',
  },
  {
    id: 'cgl26_06o1_q92',
    topic: 'Active & Passive Voice',
    questionEn:
      'Change the following from active to passive:\nLegal advisors urged the firm to amend the draft immediately.',
    questionHi:
      'Change the following from active to passive:\nLegal advisors urged the firm to amend the draft immediately.',
    optionsEn: [
      'It was urged that the firm amend the draft immediately.',
      'The draft was urged by legal advisors to be amended.',
      'The firm was urged by legal advisors to amend the draft immediately.',
      'Legal advice was urging amendment of the draft.',
    ],
    optionsHi: [
      'It was urged that the firm amend the draft immediately.',
      'The draft was urged by legal advisors to be amended.',
      'The firm was urged by legal advisors to amend the draft immediately.',
      'Legal advice was urging amendment of the draft.',
    ],
    correctIndex: 2,
    explanationEn:
      'Active structure (Simple Past): Subject ("Legal advisors") + V2 ("urged") + Object ("the firm") + infinitive complement ("to amend the draft immediately").\nPassive: "The firm was urged by legal advisors to amend the draft immediately."',
    explanationHi:
      'Simple Past (Subject + urged + Object + to-infinitive) का सही Passive रूप: "The firm was urged by legal advisors to amend the draft immediately."',
  },
  {
    id: 'cgl26_06o1_q93',
    topic: 'Direct & Indirect Speech',
    questionEn:
      'A sentence is provided in indirect speech. From the four given options, choose the one that most accurately conveys the sentence in its corresponding direct speech.\nShe said that she had hardly begun the speech when the microphone failed.',
    questionHi:
      'A sentence is provided in indirect speech. From the four given options, choose the one that most accurately conveys the sentence in its corresponding direct speech.\nShe said that she had hardly begun the speech when the microphone failed.',
    optionsEn: [
      '“Hardly had I begun the speech when the microphone failed,” she said.',
      '“I hardly began the speech when the microphone failed,” she said.',
      '“The microphone failed as I started speaking,” she said.',
      '“The microphone failed just after I began,” she said.',
    ],
    optionsHi: [
      '“Hardly had I begun the speech when the microphone failed,” she said.',
      '“I hardly began the speech when the microphone failed,” she said.',
      '“The microphone failed as I started speaking,” she said.',
      '“The microphone failed just after I began,” she said.',
    ],
    correctIndex: 0,
    explanationEn:
      'The correlative pair "Hardly ... when" properly takes past perfect with subject-auxiliary inversion ("Hardly had I begun ... when the microphone failed"), which retains its exact past perfect form in indirect speech ("she had hardly begun ... when the microphone failed").',
    explanationHi:
      '"Hardly ... when" के साथ Past Perfect में inversion ("Hardly had I begun ... when the microphone failed") प्रयुक्त होता है, जो indirect speech में "she had hardly begun ... when" बनता है। अतः विकल्प (A) सटीक है।',
  },
  {
    id: 'cgl26_06o1_q94',
    topic: 'Synonyms',
    questionEn:
      'Choose the most appropriate synonym of the word in quotes:\nThe app’s interface is “concise” and user-friendly.',
    questionHi:
      'Choose the most appropriate synonym of the word in quotes:\nThe app’s interface is “concise” and user-friendly.',
    optionsEn: ['Lengthy', 'Detailed', 'Brief', 'Confusing'],
    optionsHi: ['Lengthy', 'Detailed', 'Brief', 'Confusing'],
    correctIndex: 2,
    explanationEn:
      '"Concise" means expressing much in few words; short, clear, and to the point. Its closest synonym is "Brief". ("Lengthy" and "Detailed" are antonyms.)',
    explanationHi:
      '"Concise" का अर्थ संक्षिप्त एवं स्पष्ट होता है, जिसका सही पर्यायवाची "Brief" है।',
  },
  {
    id: 'cgl26_06o1_q95',
    topic: 'Sentence Rearrangement (1–6 Format)',
    questionEn:
      'In the following question, the first and last parts of the sentence (1 and 6) are given. The rest of the sentence is split into four parts and named P, Q, R, and S. These four parts are not given in their proper order. Read the sentence and find out which of the four combinations is correct.\n1. Not only did\nP. the socio-economic conditions\nQ. but it also highlighted\nR. the revolution improve\nS. of the working class\n6. the inherent flaws of the monarchy.',
    questionHi:
      'In the following question, the first and last parts of the sentence (1 and 6) are given. The rest of the sentence is split into four parts and named P, Q, R, and S. These four parts are not given in their proper order. Read the sentence and find out which of the four combinations is correct.\n1. Not only did\nP. the socio-economic conditions\nQ. but it also highlighted\nR. the revolution improve\nS. of the working class\n6. the inherent flaws of the monarchy.',
    optionsEn: ['RPSQ', 'SQRP', 'RQSP', 'PQRS'],
    optionsHi: ['RPSQ', 'SQRP', 'RQSP', 'PQRS'],
    correctIndex: 0,
    explanationEn:
      '"Not only did" triggers inversion and requires Subject + base verb → R ("the revolution improve"), followed by its object P ("the socio-economic conditions") + prepositional modifier S ("of the working class"), and then the correlative clause Q ("but it also highlighted") leading directly into 6 ("the inherent flaws of the monarchy."). Sequence: RPSQ.',
    explanationHi:
      '"Not only did" के बाद कर्ता + मूल क्रिया R ("the revolution improve"), फिर कर्म P ("the socio-economic conditions"), उसका विस्तार S ("of the working class") और सह-संयोजक Q ("but it also highlighted") आकर वाक्य 6 से जुड़ता है। सही क्रम: RPSQ।',
  },
  {
    id: 'cgl26_06o1_q96',
    topic: 'Reading Comprehension',
    passageEn: RC_PASSAGE_O6S1,
    questionEn:
      'According to the passage, what distinguished Dickens’s understanding of the street?',
    questionHi:
      'According to the passage, what distinguished Dickens’s understanding of the street?',
    optionsEn: [
      'He studied the architectural features of London in great detail.',
      'He viewed the street mainly as a setting for dramatic events.',
      'He observed street life from a safe and emotional distance.',
      'He understood the hidden life and character of the street deeply.',
    ],
    optionsHi: [
      'He studied the architectural features of London in great detail.',
      'He viewed the street mainly as a setting for dramatic events.',
      'He observed street life from a safe and emotional distance.',
      'He understood the hidden life and character of the street deeply.',
    ],
    correctIndex: 3,
    explanationEn:
      'Paragraph 2 explicitly states: "Charles Dickens, however, understood the street deeply. He seemed to possess the key to its hidden world... He could reveal its innermost character." Hence option (D) is directly supported.',
    explanationHi:
      'अनुच्छेद 2 में स्पष्ट लिखा है कि चार्ल्स डिकेंस सड़क के छिपे हुए जीवन और उसके अंतर्निहित चरित्र को गहराई से समझते थे ("understood the street deeply... reveal its innermost character")। अतः विकल्प (D) सही है।',
  },
  {
    id: 'cgl26_06o1_q97',
    topic: 'Reading Comprehension',
    passageEn: RC_PASSAGE_O6S1,
    questionEn:
      'What does the comparison of the street at night to “a great house whose doors are locked” suggest?',
    questionHi:
      'What does the comparison of the street at night to “a great house whose doors are locked” suggest?',
    optionsEn: [
      'The street becomes physically inaccessible after sunset.',
      'The buildings appear safer and more impressive at night.',
      'The hidden life of the street becomes mysterious and difficult to understand.',
      'The residents deliberately prevent strangers from entering the street.',
    ],
    optionsHi: [
      'The street becomes physically inaccessible after sunset.',
      'The buildings appear safer and more impressive at night.',
      'The hidden life of the street becomes mysterious and difficult to understand.',
      'The residents deliberately prevent strangers from entering the street.',
    ],
    correctIndex: 2,
    explanationEn:
      'Paragraph 1 notes: "We understand even less about the street at night, when it resembles a great house whose doors are locked." The metaphor conveys that the street’s inner life becomes closed off, mysterious, and hard to fathom.',
    explanationHi:
      'अनुच्छेद 1 के अनुसार रात में सड़क की तुलना "बंद दरवाज़ों वाले बड़े घर" से यह दर्शाती है कि रात में सड़क का छिपा हुआ जीवन और अधिक रहस्यमय व समझने में कठिन हो जाता है। अतः विकल्प (C) सही है।',
  },
  {
    id: 'cgl26_06o1_q98',
    topic: 'Reading Comprehension',
    passageEn: RC_PASSAGE_O6S1,
    questionEn: 'According to the author, how can a person remember a place permanently?',
    questionHi: 'According to the author, how can a person remember a place permanently?',
    optionsEn: [
      'By recording all its visible features accurately.',
      'By visiting it repeatedly at different times of the day.',
      'By comparing it with other familiar surroundings.',
      'By becoming completely absorbed in the experience of the place.',
    ],
    optionsHi: [
      'By recording all its visible features accurately.',
      'By visiting it repeatedly at different times of the day.',
      'By comparing it with other familiar surroundings.',
      'By becoming completely absorbed in the experience of the place.',
    ],
    correctIndex: 3,
    explanationEn:
      'Paragraph 3 states directly: "To remember a place forever, one must experience it completely and become so deeply absorbed in it that one temporarily forgets oneself as a separate observer." Thus option (D) is correct.',
    explanationHi:
      'अनुच्छेद 3 में स्पष्ट कहा गया है कि किसी स्थान को हमेशा के लिए याद रखने हेतु व्यक्ति को उसे पूरी तरह अनुभव करना और उसमें गहराई से डूब (completely absorbed) जाना आवश्यक है। अतः विकल्प (D) सही है।',
  },
  {
    id: 'cgl26_06o1_q99',
    topic: 'Reading Comprehension',
    passageEn: RC_PASSAGE_O6S1,
    questionEn:
      'What is implied by the association of the streets with the powerful experiences and tragedies of Dickens’s youth?',
    questionHi:
      'What is implied by the association of the streets with the powerful experiences and tragedies of Dickens’s youth?',
    optionsEn: [
      'Dickens’s emotional experiences gave the streets lasting personal and romantic significance.',
      'The streets were decorated with colours commonly associated with youthful celebrations.',
      'Dickens regarded the streets as symbols of political and social decline.',
      'The appearance of the streets changed mainly because of the setting sun.',
    ],
    optionsHi: [
      'Dickens’s emotional experiences gave the streets lasting personal and romantic significance.',
      'The streets were decorated with colours commonly associated with youthful celebrations.',
      'Dickens regarded the streets as symbols of political and social decline.',
      'The appearance of the streets changed mainly because of the setting sun.',
    ],
    correctIndex: 0,
    explanationEn:
      'Paragraph 4 explains: "For Dickens, the streets remained deeply romantic because they were associated with the powerful experiences and tragedies of his youth... This emotional connection explains the unusual realism..." This directly implies option (A).',
    explanationHi:
      'अनुच्छेद 4 के अनुसार डिकेंस के युवावस्था के गहन भावनात्मक अनुभवों और त्रासदियों ने उन सड़कों को उनके लिए स्थायी व्यक्तिगत और रूमानी महत्व प्रदान किया। अतः विकल्प (A) सही है।',
  },
  {
    id: 'cgl26_06o1_q100',
    topic: 'Reading Comprehension',
    passageEn: RC_PASSAGE_O6S1,
    questionEn: 'Which statement best explains the unusual realism in Dickens’s descriptions?',
    questionHi: 'Which statement best explains the unusual realism in Dickens’s descriptions?',
    optionsEn: [
      'He exaggerated the unpleasant features of London to criticise society.',
      'He gave ordinary physical details an intense and lifelike vitality.',
      'He replaced realistic locations with imaginary and mysterious landscapes.',
      'He focused only on factual accuracy and avoided emotional associations.',
    ],
    optionsHi: [
      'He exaggerated the unpleasant features of London to criticise society.',
      'He gave ordinary physical details an intense and lifelike vitality.',
      'He replaced realistic locations with imaginary and mysterious landscapes.',
      'He focused only on factual accuracy and avoided emotional associations.',
    ],
    correctIndex: 1,
    explanationEn:
      'The final two sentences state: "In his descriptions, even minor details—a window, a railing or the keyhole of a door—acquire an intense and lifelike vitality. Through his imagination, ordinary objects appear more vivid and real than they normally do." Hence option (B) is exact.',
    explanationHi:
      'अंतिम पंक्तियों के अनुसार डिकेंस के वर्णन में खिड़की, रेलिंग या ताले के छेद जैसे साधारण भौतिक विवरण भी तीव्र और सजीव जीवंतता (intense and lifelike vitality) प्राप्त कर लेते हैं। अतः विकल्प (B) सटीक है।',
  },
];

export const FULL_MOCK_06_OCT_SHIFT1: MockTest = {
  id: 'ssc-cgl-06-oct-shift1-2026-full-mock',
  title: 'SSC CGL Tier-1 2026 (06 Oct Shift 1) — Full Mock',
  subtitle:
    'Complete bilingual paper with strict 15-minute sectional timers across all 4 Tier-1 sections',
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
  createdAt: '2026-11-22T07:50:00.000Z',
  questions: [
    ...SECTION_1_REASONING_O6S1,
    ...SECTION_2_GA_O6S1,
    ...SECTION_3_QUANT_O6S1,
    ...SECTION_4_ENGLISH_O6S1,
  ],
};
