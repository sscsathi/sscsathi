import { MockTest, Question } from '../../types/exam';

const SECTION_1_REASONING_O6S2: Question[] = [
  {
    id: 'cgl26_06o2_q1',
    topic: 'Number Analogy',
    questionEn: 'Find the missing number: 36 : 108 :: 49 : ?',
    questionHi: 'लुप्त संख्या ज्ञात कीजिए: 36 : 108 :: 49 : ?',
    optionsEn: ['145', '147', '141', '146'],
    optionsHi: ['145', '147', '141', '146'],
    correctIndex: 1,
    explanationEn:
      'Pattern: Second number = First number × 3.\n• 36 × 3 = 108\n• 49 × 3 = 147\nHence, the missing number is 147.',
    explanationHi:
      'नियम: दूसरी संख्या = पहली संख्या × 3।\n• 36 × 3 = 108\n• 49 × 3 = 147\nअतः लुप्त संख्या 147 है।',
  },
  {
    id: 'cgl26_06o2_q2',
    topic: 'Ratio & Coin Problem',
    questionEn:
      'A bag contains coins of Rs. 1, Rs. 2 and Rs. 5 in the ratio 5:3:2. If the total money is Rs. 420, find the number of Rs. 2 coins.',
    questionHi:
      'एक बैग में 1 रुपये, 2 रुपये और 5 रुपये के सिक्के 5:3:2 के अनुपात में हैं। अगर कुल धनराशि 420 रुपये है, तो 2 रुपये के सिक्कों की संख्या ज्ञात कीजिए।',
    optionsEn: ['36', '28', '24', '60'],
    optionsHi: ['36', '28', '24', '60'],
    correctIndex: 3,
    explanationEn:
      'Let the number of Rs. 1, Rs. 2 and Rs. 5 coins be 5x, 3x and 2x respectively.\nTotal value = (1 × 5x) + (2 × 3x) + (5 × 2x) = 5x + 6x + 10x = 21x.\nGiven 21x = 420 ⇒ x = 20.\nTherefore, number of Rs. 2 coins = 3x = 3 × 20 = 60.',
    explanationHi:
      'माना ₹1, ₹2 और ₹5 के सिक्कों की संख्या क्रमशः 5x, 3x और 2x है।\nकुल मूल्य = (1 × 5x) + (2 × 3x) + (5 × 2x) = 5x + 6x + 10x = 21x।\nप्रश्नानुसार, 21x = 420 ⇒ x = 20।\nअतः ₹2 के सिक्कों की संख्या = 3x = 3 × 20 = 60।',
  },
  {
    id: 'cgl26_06o2_q3',
    topic: 'Syllogism',
    questionEn:
      'Read the following statement carefully and identify the conclusion that follows.\nStatement:\nSome flowers are red. All red things are attractive.\nConclusions:\nI. Some flowers are attractive.\nII. All flowers are attractive.',
    questionHi:
      'निम्नलिखित कथन को ध्यानपूर्वक पढ़िए और निष्कर्ष निकालिए।\nकथन:\nकुछ फूल लाल होते हैं। सभी लाल चीजें आकर्षक होती हैं।\nनिष्कर्ष:\nI. कुछ फूल आकर्षक होते हैं।\nII. सभी फूल आकर्षक होते हैं।',
    optionsEn: [
      'Only I follows',
      'Only II follows',
      'Both I and II follow',
      'Neither I nor II follows',
    ],
    optionsHi: [
      'केवल I अनुसरण करता है',
      'केवल II अनुसरण करता है',
      'I और II दोनों अनुसरण करते हैं',
      'न तो I और न ही II अनुसरण करता है',
    ],
    correctIndex: 0,
    explanationEn:
      'From the statements: Some Flowers are Red (I-type) + All Red things are Attractive (A-type) ⇒ Some Flowers are Attractive.\n• Conclusion I definitely follows.\n• Conclusion II (“All flowers are attractive”) does not follow because we only know about “some” flowers, not all.\nHence, only I follows.',
    explanationHi:
      'कथनों के अनुसार: कुछ फूल लाल हैं + सभी लाल चीजें आकर्षक हैं ⇒ कुछ फूल अवश्य ही आकर्षक हैं।\n• निष्कर्ष I निश्चित रूप से अनुसरण करता है।\n• निष्कर्ष II (“सभी फूल आकर्षक होते हैं”) निश्चित नहीं है क्योंकि सभी फूलों के बारे में जानकारी नहीं दी गई है।\nअतः केवल I अनुसरण करता है।',
  },
  {
    id: 'cgl26_06o2_q4',
    topic: 'Number Series',
    questionEn: 'What is the next number in the series?\n7, 21, 63, ___',
    questionHi: 'निम्नलिखित श्रृंखला में अगले स्थान पर कौन सी संख्या होगी?\n7, 21, 63, ___',
    optionsEn: ['183', '190', '201', '189'],
    optionsHi: ['183', '190', '201', '189'],
    correctIndex: 3,
    explanationEn:
      'This is a geometric progression with common ratio 3 (each term is multiplied by 3):\n• 7 × 3 = 21\n• 21 × 3 = 63\n• 63 × 3 = 189.',
    explanationHi:
      'यह एक गुणोत्तर श्रेणी है जिसमें प्रत्येक पद को 3 से गुणा किया गया है:\n• 7 × 3 = 21\n• 21 × 3 = 63\n• 63 × 3 = 189।',
  },
  {
    id: 'cgl26_06o2_q5',
    topic: 'Coded Blood Relations',
    questionEn:
      "'A # B' means 'A is the brother of B'.\n'A @ B' means 'A is the father of B'.\n'A & B' means 'A is the sister of B'.\n'A % B' means 'A is the daughter of B'.\nIf 'T @ M & F # R & G % K', then how is K related to R?",
    questionHi:
      "'A # B' का अर्थ है 'A, B का भाई है'।\n'A @ B' का अर्थ है 'A, B का पिता है'।\n'A & B' का अर्थ है 'A, B की बहन है'।\n'A % B' का अर्थ है 'A, B की पुत्री है'।\nअगर 'T @ M & F # R & G % K', तो K, R से किस प्रकार संबंधित है?",
    optionsEn: ['Mother', 'Father-in-law', 'Brother-in-law', 'Grandmother'],
    optionsHi: ['माँ', 'ससुर', 'साला/देवर', 'दादी'],
    correctIndex: 0,
    explanationEn:
      'Decoding T @ M & F # R & G % K step by step:\n• T @ M ⇒ T (+) is the father of M.\n• M & F ⇒ M (−) is the sister of F.\n• F # R ⇒ F (+) is the brother of R.\n• R & G ⇒ R (−) is the sister of G.\n• Thus M, F, R, and G are siblings and T is their father.\n• G % K ⇒ G (−) is the daughter of K. Since T is already G’s father, K (−) must be T’s wife, i.e., the Mother of all siblings including R.',
    explanationHi:
      'T @ M & F # R & G % K को हल करने पर:\n• T @ M ⇒ T (+), M का पिता है।\n• M & F ⇒ M (−), F की बहन है।\n• F # R ⇒ F (+), R का भाई है।\n• R & G ⇒ R (−), G की बहन है।\n• अतः M, F, R और G आपस में भाई-बहन हैं और T उनके पिता हैं।\n• G % K ⇒ G, K की पुत्री है। चूँकि T पहले से ही पिता हैं, अतः K (−), T की पत्नी अर्थात् R की माँ हैं।',
  },
  {
    id: 'cgl26_06o2_q6',
    topic: 'Mathematical Operations',
    questionEn:
      "If '+' means '×', '−' means '+', '×' means '÷', and '÷' means '−', then 6 + 3 − 2 × 2 = ?",
    questionHi:
      "यदि '+' का अर्थ '×' है, '−' का अर्थ '+' है, '×' का अर्थ '÷' है, और '÷' का अर्थ '−' है, तो 6 + 3 − 2 × 2 = ?",
    optionsEn: ['15', '20', '12', '19'],
    optionsHi: ['15', '20', '12', '19'],
    correctIndex: 3,
    explanationEn:
      'Replacing the operators according to the given rules (+ → ×, − → +, × → ÷):\n6 × 3 + 2 ÷ 2\nApplying BODMAS:\n= 6 × 3 + 1\n= 18 + 1 = 19.',
    explanationHi:
      'दिए गए नियम के अनुसार चिह्न बदलने पर (+ → ×, − → +, × → ÷):\n6 × 3 + 2 ÷ 2\nBODMAS के नियम से:\n= 6 × 3 + 1\n= 18 + 1 = 19।',
  },
  {
    id: 'cgl26_06o2_q7',
    topic: 'Coding-Decoding',
    questionEn: 'If "HOUSE" is coded as 8-15-21-19-5, how will "SHOE" be coded?',
    questionHi: 'यदि "HOUSE" को 8-15-21-19-5 के रूप में कोडित किया जाता है, तो "SHOE" को कैसे कोडित किया जाएगा?',
    optionsEn: ['19-8-15-5', '19-8-5-15', '8-19-15-5', '8-15-19-5'],
    optionsHi: ['19-8-15-5', '19-8-5-15', '8-19-15-5', '8-15-19-5'],
    correctIndex: 0,
    explanationEn:
      'Each letter is replaced by its direct alphabetical position (A = 1, B = 2, ..., Z = 26):\n• HOUSE → H(8)-O(15)-U(21)-S(19)-E(5)\n• SHOE → S(19)-H(8)-O(15)-E(5) = 19-8-15-5.',
    explanationHi:
      'प्रत्येक अक्षर को अंग्रेजी वर्णमाला में उसके क्रमांक (A=1, ..., Z=26) से दर्शाया गया है:\n• HOUSE → H(8)-O(15)-U(21)-S(19)-E(5)\n• SHOE → S(19)-H(8)-O(15)-E(5) = 19-8-15-5।',
  },
  {
    id: 'cgl26_06o2_q8',
    topic: 'Coding-Decoding',
    questionEn:
      'In a certain code language, "APPLE" is represented as "ELPPA." What does "MANGO" look like in that code?',
    questionHi:
      'किसी विशिष्ट कोड भाषा में, "APPLE" को "ELPPA" के रूप में दर्शाया जाता है। उसी कोड भाषा में "MANGO" कैसा दिखेगा?',
    optionsEn: ['OGNAM', 'ONMAG', 'MANGOG', 'OGAMN'],
    optionsHi: ['OGNAM', 'ONMAG', 'MANGOG', 'OGAMN'],
    correctIndex: 0,
    explanationEn:
      'The code simply reverses the order of letters in the word:\n• APPLE reversed → ELPPA\n• MANGO reversed → OGNAM.',
    explanationHi:
      'शब्द के अक्षरों को विपरीत क्रम (उल्टा) में लिखा गया है:\n• APPLE का उल्टा → ELPPA\n• MANGO का उल्टा → OGNAM।',
  },
  {
    id: 'cgl26_06o2_q9',
    topic: 'Address Matching',
    questionEn:
      'Which of the following alternatives matches the given address exactly?\nMr. R. Khanna\nFlat No. 1204, Silver Crest Towers, 11th Floor, Sector 62\nNoida, Uttar Pradesh - 201309\nAlternatives:\nA) Mr. R. Khanna, Flat No. 1204, Silver Crest Towers, 11th Floor, Sector 62, Noida, Uttar Pradesh - 201309\nB) Mr. R. Khanna, Flat No. 1204, Silver Crest Towers, 11th Floor, Sector 64, Noida, Uttar Pradesh - 201309\nC) Mr. R. Khanna, Flat No. 1204, Silver Crest Towers, 11th Floor, Sector 62, Noida, Uttar Pradesh - 201309\nD) Mr. R. Khanna, Flat No. 1204, Silver Crest Towers, 12th Floor, Sector 62, Noida, Uttar Pradesh - 201309\nE) Mr. R. Khanna, Flat No. 1204, Silver Crest Towers, 11th Floor, Sector 26, Noida, Uttar Pradesh - 201309\nF) Mr. R. Khanna, Flat No. 1204, Silver Crest Towers, 11th Floor, Sector 62, Noida, Uttar Pradesh - 201390',
    questionHi:
      'निम्नलिखित विकल्पों में से कौन-सा विकल्प दिए गए पते से बिल्कुल मेल खाता है?\nMr. R. Khanna\nFlat No. 1204, Silver Crest Towers, 11th Floor, Sector 62\nNoida, Uttar Pradesh - 201309\nविकल्प:\nA) Mr. R. Khanna, Flat No. 1204, Silver Crest Towers, 11th Floor, Sector 62, Noida, Uttar Pradesh - 201309\nB) Mr. R. Khanna, Flat No. 1204, Silver Crest Towers, 11th Floor, Sector 64, Noida, Uttar Pradesh - 201309\nC) Mr. R. Khanna, Flat No. 1204, Silver Crest Towers, 11th Floor, Sector 62, Noida, Uttar Pradesh - 201309\nD) Mr. R. Khanna, Flat No. 1204, Silver Crest Towers, 12th Floor, Sector 62, Noida, Uttar Pradesh - 201309\nE) Mr. R. Khanna, Flat No. 1204, Silver Crest Towers, 11th Floor, Sector 26, Noida, Uttar Pradesh - 201309\nF) Mr. R. Khanna, Flat No. 1204, Silver Crest Towers, 11th Floor, Sector 62, Noida, Uttar Pradesh - 201390',
    optionsEn: ['A and C', 'C and E', 'A and F', 'D and B'],
    optionsHi: ['A और C', 'C और E', 'A और F', 'D और B'],
    correctIndex: 0,
    explanationEn:
      'Checking each alternative against the original address:\n• A: Exact match.\n• B: Sector 64 instead of Sector 62 (Mismatch).\n• C: Exact match.\n• D: 12th Floor instead of 11th Floor (Mismatch).\n• E: Sector 26 instead of Sector 62 (Mismatch).\n• F: PIN 201390 instead of 201309 (Mismatch).\nHence, A and C match the given address exactly.',
    explanationHi:
      'मूल पते से मिलान करने पर:\n• B में Sector 64, D में 12th Floor, E में Sector 26 तथा F में पिनकोड 201390 गलत है।\n• केवल A और C दिए गए पते से बिल्कुल मेल खाते हैं।',
  },
  {
    id: 'cgl26_06o2_q10',
    topic: 'Coding-Decoding',
    questionEn:
      'In a certain code language, "COMPUTATION" is written as "OOITATUPMOD". How will "RECOGNITION" be written?',
    questionHi:
      'एक निश्चित कूट भाषा में, “COMPUTATION” को “OOITATUPMOD” लिखा जाता है। उसी कूट भाषा में “RECOGNITION” को कैसे लिखा जाएगा?',
    optionsEn: ['OIOTINGCOES', 'OOITINGOCES', 'NOIITNGCOER', 'NOTIINCGOER'],
    optionsHi: ['OIOTINGCOES', 'OOITINGOCES', 'NOIITNGCOER', 'NOTIINCGOER'],
    correctIndex: 1,
    explanationEn:
      'Rule: Reverse the entire word, then shift the first and last letters of the reversed word forward by +1.\n• COMPUTATION reversed → N O I T A T U P M O C\n  Shift 1st (N + 1 = O) and last (C + 1 = D) → OOITATUPMOD.\n• RECOGNITION reversed → N O I T I N G O C E R\n  Shift 1st (N + 1 = O) and last (R + 1 = S) → OOITINGOCES.',
    explanationHi:
      'नियम: पहले पूरे शब्द को उल्टे क्रम में लिखें, फिर परिणाम के पहले और अंतिम अक्षर में +1 जोड़ें।\n• COMPUTATION का उल्टा → NOITATUPMOC → पहला (N+1=O), अंतिम (C+1=D) ⇒ OOITATUPMOD।\n• RECOGNITION का उल्टा → NOITINGOCER → पहला (N+1=O), अंतिम (R+1=S) ⇒ OOITINGOCES।',
  },
  {
    id: 'cgl26_06o2_q11',
    topic: 'Address Matching',
    questionEn:
      'Choose the option that perfectly matches the given address.\nOriginal Address:\nFlat No. Ω–17/BRésidence d’Élite, Tower–XIVSt. Michael’s Crescent, Sector–09Navi Mumbai, Maharashtra 400706India | Asia',
    questionHi:
      'दिए गए पते से पूरी तरह मेल खाने वाले विकल्प का चयन करें।\nमूल पता:\nFlat No. Ω–17/BRésidence d’Élite, Tower–XIVSt. Michael’s Crescent, Sector–09Navi Mumbai, Maharashtra 400706India | Asia',
    optionsEn: [
      "Flat No. Ω–17/BRésidence d'Elite, Tower–XIVSt. Michael’s Crescent, Sector–09Navi Mumbai, Maharashtra 400706India | Asia",
      'Flat No. Ω–17-BRésidence d’Élite, Tower–XIVSt. Michael’s Crescent, Sector–09Navi Mumbai, Maharashtra 400706India | Asia',
      'Flat No. Ω–17/BRésidence d’Élite, Tower–XIVSt. Michael’s Crescent, Sector–09Navi Mumbai, Maharashtra 400760India | Asia',
      'Flat No. Ω–17/BRésidence d’Élite, Tower–XIVSt. Michael’s Crescent, Sector–09Navi Mumbai, Maharashtra 400706India | Asia',
    ],
    optionsHi: [
      "Flat No. Ω–17/BRésidence d'Elite, Tower–XIVSt. Michael’s Crescent, Sector–09Navi Mumbai, Maharashtra 400706India | Asia",
      'Flat No. Ω–17-BRésidence d’Élite, Tower–XIVSt. Michael’s Crescent, Sector–09Navi Mumbai, Maharashtra 400706India | Asia',
      'Flat No. Ω–17/BRésidence d’Élite, Tower–XIVSt. Michael’s Crescent, Sector–09Navi Mumbai, Maharashtra 400760India | Asia',
      'Flat No. Ω–17/BRésidence d’Élite, Tower–XIVSt. Michael’s Crescent, Sector–09Navi Mumbai, Maharashtra 400706India | Asia',
    ],
    correctIndex: 3,
    explanationEn:
      'Comparing character by character:\n• Option (A) writes "d\'Elite" instead of "d’Élite" (missing accent on É).\n• Option (B) has "17-B" instead of "17/B".\n• Option (C) has PIN "400760" instead of "400706".\n• Option (D) matches every symbol, diacritic, and digit identically.',
    explanationHi:
      'प्रत्येक अक्षर व चिह्न की तुलना करने पर:\n• विकल्प (A) में "d’Élite" के स्थान पर "d\'Elite" है।\n• विकल्प (B) में "17/B" के स्थान पर "17-B" है।\n• विकल्प (C) में "400706" के स्थान पर "400760" है।\n• केवल विकल्प (D) मूल पते से पूर्णतः मेल खाता है।',
  },
  {
    id: 'cgl26_06o2_q12',
    topic: 'Coded Blood Relations',
    questionEn:
      "If 'A $ B' means 'A is the brother of B', 'A # B' means 'A is the mother of B', and 'A * B' means 'A is the daughter of B', which of the following options means 'M is the maternal uncle of N'?",
    questionHi:
      "अगर 'A $ B' का मतलब है 'A, B का भाई है', 'A # B' का मतलब है 'A, B की माँ है', और 'A * B' का मतलब है 'A, B की बेटी है', तो इनमें से किस ऑप्शन का मतलब है 'M, N का मामा है'?",
    optionsEn: ['M $ O # N', 'M $ O * N', 'M # O $ N', 'M * O $ N'],
    optionsHi: ['M $ O # N', 'M $ O * N', 'M # O $ N', 'M * O $ N'],
    correctIndex: 0,
    explanationEn:
      'For M to be the maternal uncle of N, M must be the brother of N’s mother.\nChecking Option (A): M $ O # N\n• M $ O ⇒ M is the brother of O.\n• O # N ⇒ O is the mother of N.\nHence, M is the brother of N’s mother, i.e., M is the maternal uncle (मामा) of N.',
    explanationHi:
      'M के N का मामा होने के लिए, M को N की माँ का भाई होना चाहिए।\nविकल्प (A) M $ O # N की जाँच करने पर:\n• M $ O ⇒ M, O का भाई है।\n• O # N ⇒ O, N की माँ है।\nअतः M, N की माँ का भाई यानी मामा है।',
  },
  {
    id: 'cgl26_06o2_q13',
    topic: 'Rule Verification (Numbers)',
    questionEn:
      'A batch of roll number follows the pattern [Even Number]-[Odd Number]-[Even Number] for the first three digits. Identify the invalid roll number.',
    questionHi:
      'रोल नंबरों का एक बैच शुरुआती तीन अंकों के लिए [सम संख्या]-[विषम संख्या]-[सम संख्या] के पैटर्न का पालन करता है। गलत रोल नंबर की पहचान करें।',
    optionsEn: ['694-11-22', '472-99-05', '258-44-11', '386-55-10'],
    optionsHi: ['694-11-22', '472-99-05', '258-44-11', '386-55-10'],
    correctIndex: 3,
    explanationEn:
      'Checking the first three digits against [Even]-[Odd]-[Even]:\n• 694 → 6 (Even) - 9 (Odd) - 4 (Even) → Valid\n• 472 → 4 (Even) - 7 (Odd) - 2 (Even) → Valid\n• 258 → 2 (Even) - 5 (Odd) - 8 (Even) → Valid\n• 386 → 3 (Odd) - 8 (Even) - 6 (Even) → Invalid.\nHence, 386-55-10 is the invalid roll number.',
    explanationHi:
      'प्रथम तीन अंकों की [सम]-[विषम]-[सम] पैटर्न से जाँच करने पर:\n• 694 → सम-विषम-सम (सही)\n• 472 → सम-विषम-सम (सही)\n• 258 → सम-विषम-सम (सही)\n• 386 → 3 (विषम) - 8 (सम) - 6 (सम) → गलत।\nअतः 386-55-10 अमान्य रोल नंबर है।',
  },
  {
    id: 'cgl26_06o2_q14',
    topic: 'Letter Series',
    questionEn:
      'Study the pattern in the given series and find the next set of letters in the series.\nDHI, HGM, LFQ, ?',
    questionHi:
      'दी गई श्रेणी में प्रतिरूप का अध्ययन कीजिए और श्रेणी में अक्षरों का अगला समूह ज्ञात कीजिए।\nDHI, HGM, LFQ, ?',
    optionsEn: ['PEU', 'PDU', 'PEV', 'PET'],
    optionsHi: ['PEU', 'PDU', 'PEV', 'PET'],
    correctIndex: 0,
    explanationEn:
      'Position-wise letter shifts:\n• 1st letter (+4): D(4) → H(8) → L(12) → P(16)\n• 2nd letter (−1): H(8) → G(7) → F(6) → E(5)\n• 3rd letter (+4): I(9) → M(13) → Q(17) → U(21)\nTherefore, the next cluster is PEU.',
    explanationHi:
      'प्रत्येक स्थान के अक्षरों का क्रम:\n• पहला अक्षर (+4): D(4) → H(8) → L(12) → P(16)\n• दूसरा अक्षर (−1): H(8) → G(7) → F(6) → E(5)\n• तीसरा अक्षर (+4): I(9) → M(13) → Q(17) → U(21)\nअतः अगला अक्षर-समूह PEU होगा।',
  },
  {
    id: 'cgl26_06o2_q15',
    topic: 'Missing Number in Matrix',
    questionEn:
      'In the following question, a matrix of numbers is given. These numbers follow a certain pattern either row-wise or column-wise. Identify this pattern and choose the missing number accordingly.',
    questionHi:
      'निम्नलिखित प्रश्न में संख्याओं का एक आव्यूह दिया गया है। ये संख्याएँ या तो पंक्ति-वार अथवा स्तंभ-वार किसी निश्चित प्रतिरूप का अनुसरण करती हैं। इस प्रतिरूप की पहचान करें और तदनुसार लुप्त संख्या ज्ञात करें।',
    matrix: [
      ['50', '33', '47'],
      ['62', '44', '58'],
      ['39', '?', '36'],
    ],
    optionsEn: ['11', '22', '33', '44'],
    optionsHi: ['11', '22', '33', '44'],
    correctIndex: 2,
    explanationEn:
      'Row-wise rule: (Column 1 − Column 3) × 11 = Column 2\n• Row 1: (50 − 47) × 11 = 3 × 11 = 33\n• Row 2: (62 − 58) × 11 = 4 × 11 = 44\n• Row 3: (39 − 36) × 11 = 3 × 11 = 33.\nHence, the missing number is 33.',
    explanationHi:
      'पंक्ति-वार नियम: (स्तंभ 1 − स्तंभ 3) × 11 = स्तंभ 2\n• पंक्ति 1: (50 − 47) × 11 = 3 × 11 = 33\n• पंक्ति 2: (62 − 58) × 11 = 4 × 11 = 44\n• पंक्ति 3: (39 − 36) × 11 = 3 × 11 = 33।\nअतः लुप्त संख्या 33 है।',
  },
  {
    id: 'cgl26_06o2_q16',
    topic: 'Emotional Intelligence',
    questionEn:
      'Your superior, a highly demanding director, drops a massive, unvetted data analysis task on your desk at 5:30 PM, demanding the final report by 9:00 AM tomorrow. You already have a critical, pre-scheduled medical appointment for your dependent parent at 7:00 PM tonight. Which response represents the most emotionally intelligent negotiation?',
    questionHi:
      'आपके बॉस, जो बहुत ज़्यादा काम की उम्मीद रखते हैं, शाम 5:30 बजे आपके डेस्क पर डेटा एनालिसिस का एक बहुत बड़ा और बिना जाँचा-परखा काम रख देते हैं और कहते हैं कि इसकी फ़ाइनल रिपोर्ट कल सुबह 9:00 बजे तक चाहिए। आज शाम 7:00 बजे आपके आश्रित माता-पिता के लिए पहले से तय एक ज़रूरी मेडिकल अपॉइंटमेंट भी है। इनमें से कौन-सा जवाब सबसे ज़्यादा इमोशनली इंटेलिजेंट बातचीत को दिखाता है?',
    optionsEn: [
      'Accept the task silently, cancel your parent’s medical appointment, and stay up all night to finish it to prove your absolute loyalty.',
      'Refuse the task flatly on the spot, telling the director that expecting work outside office hours is toxic and violates your work-life balance.',
      'Acknowledge the urgency and propose a staggered timeline to complete data organisation overnight and share final insights by the next morning.',
      'Take the file, leave at 5:45 PM for your appointment, and email at midnight explaining it couldn’t be done due to a family emergency.',
    ],
    optionsHi: [
      'चुपचाप काम स्वीकार करें, अपने माता-पिता की मेडिकल अपॉइंटमेंट रद्द करें और अपनी पूरी वफ़ादारी साबित करने के लिए उसे पूरा करने हेतु रात भर जागते रहें।',
      'मौके पर ही उस काम को साफ़ तौर पर मना कर दें और डायरेक्टर से कहें कि ऑफ़िस के समय के बाद काम की उम्मीद करना टॉक्सिक है और यह आपके वर्क-लाइफ़ बैलेंस के ख़िलाफ़ है।',
      'काम की जल्दबाजी को समझते हुए, डेटा को व्यवस्थित करने का काम रात भर में पूरा करने और अगली सुबह तक अंतिम निष्कर्ष (insights) साझा करने के लिए एक चरणबद्ध समय-सीमा का प्रस्ताव दें।',
      'फ़ाइल ले लें, अपनी अपॉइंटमेंट के लिए शाम 5:45 बजे निकलें और आधी रात को ईमेल करके बता दें कि फ़ैमिली इमरजेंसी की वजह से काम नहीं हो पाया।',
    ],
    correctIndex: 2,
    explanationEn:
      'Emotional intelligence balances empathy, assertiveness, and solution-oriented communication. Option (C) validates the director’s urgency without being confrontational, avoids passive-aggressive avoidance (D) or self-harming compliance (A), and negotiates a realistic, structured delivery plan.',
    explanationHi:
      'भावनात्मक बुद्धिमत्ता (Emotional Intelligence) में संवाद, संतुलन और समाधान-उन्मुख दृष्टिकोण प्रमुख होता है। विकल्प (C) बॉस की तात्कालिकता को स्वीकार करते हुए बिना टकराव के एक व्यावहारिक व चरणबद्ध समय-सीमा का प्रस्ताव देता है।',
  },
  {
    id: 'cgl26_06o2_q17',
    topic: 'Emotional Intelligence',
    questionEn:
      "You are a branch manager. Worker Kiran is a single parent whose child is undergoing long-term medical treatments. Out of sympathy, you have overlooked Kiran's chronic lateness for four months. However, the rest of the team has now started complaining because they have to stay late every evening to finish Kiran's pending customer queries. How do you resolve this situation emotionally intelligently?",
    questionHi:
      'आप एक शाखा प्रबंधक हैं। कर्मचारी किरण एकल अभिभावक हैं और उनका बच्चा लंबे समय से चिकित्सा उपचार से गुजर रहा है। सहानुभूति के कारण, आपने पिछले चार महीनों से किरण की लगातार देरी से आने की समस्या को नज़रअंदाज़ किया है। हालाँकि, अब टीम के अन्य सदस्य शिकायत करने लगे हैं क्योंकि उन्हें किरण के लंबित ग्राहक प्रश्नों को पूरा करने के लिए प्रतिदिन देर तक रुकना पड़ता है। आप इस स्थिति का समाधान भावनात्मक बुद्धिमत्ता (Emotional Intelligence) का उपयोग करते हुए कैसे करेंगे?',
    optionsEn: [
      "Tell the complaining team members that they lack empathy and must continue to cover Kiran's shift out of human decency.",
      'Privately meet Kiran, acknowledge their stress, note the team impact, and adjust their shift or reassign to a non-live role.',
      'Give Kiran an immediate formal warning that family issues do not excuse missed office hours.',
      "Quietly handle Kiran's leftover work yourself every evening to keep everyone happy.",
    ],
    optionsHi: [
      'शिकायत करने वाले टीम सदस्यों से कहें कि उनमें सहानुभूति की कमी है और उन्हें मानवीय दृष्टिकोण से किरण की शिफ्ट को कवर करना जारी रखना चाहिए।',
      'किरण से निजी रूप से मिलें, उनकी परिस्थितियों और तनाव को समझें, टीम पर पड़ रहे प्रभाव की चर्चा करें, तथा उनकी शिफ्ट में समायोजन करें या उन्हें ऐसी भूमिका में स्थानांतरित करें जिसमें प्रत्यक्ष ग्राहक सेवा की आवश्यकता न हो।',
      'किरण को तुरंत औपचारिक चेतावनी दें कि पारिवारिक समस्याएँ कार्यालय समय का पालन न करने का बहाना नहीं हो सकतीं।',
      'सभी को संतुष्ट रखने के लिए हर शाम किरण का बचा हुआ कार्य स्वयं चुपचाप पूरा करें।',
    ],
    correctIndex: 1,
    explanationEn:
      'An emotionally intelligent leader balances compassion for an individual employee with fairness toward the wider team. Meeting Kiran privately shows respect and empathy, while transparently discussing team workload and adjusting their shift/role solves the root operational problem sustainably.',
    explanationHi:
      'एक भावनात्मक रूप से बुद्धिमान प्रबंधक कर्मचारी के प्रति सहानुभूति और पूरी टीम के प्रति निष्पक्षता दोनों में संतुलन बनाता है। किरण से निजी रूप से मिलकर उनकी स्थिति समझना और शिफ्ट/भूमिका में व्यावहारिक समायोजन करना सबसे स्थायी और संवेदनशील समाधान है।',
  },
  {
    id: 'cgl26_06o2_q18',
    topic: 'Address Matching',
    questionEn:
      'Choose the option which is exactly similar to: Prof. V. K. Malhotra, Dept. of Economics, DU, Delhi-110007',
    questionHi:
      'उस विकल्प का चयन कीजिए जो निम्नलिखित के बिल्कुल समान है: Prof. V. K. Malhotra, Dept. of Economics, DU, Delhi-110007',
    optionsEn: [
      'Prof. V. K. Malhotra, Dept. of Economics, DU, Delhi-110007',
      'Prof. V K. Malhotra, Dept. of Economics, DU, Delhi-110007',
      'Prof V. K. Malhotra, Dept. of Economics, DU, Delhi-110007',
      'Prof. V. K. Malhotra, Dept. of Economics, UD, Delhi-110007',
    ],
    optionsHi: [
      'Prof. V. K. Malhotra, Dept. of Economics, DU, Delhi-110007',
      'Prof. V K. Malhotra, Dept. of Economics, DU, Delhi-110007',
      'Prof V. K. Malhotra, Dept. of Economics, DU, Delhi-110007',
      'Prof. V. K. Malhotra, Dept. of Economics, UD, Delhi-110007',
    ],
    correctIndex: 0,
    explanationEn:
      'Checking differences:\n• (A) Exact match.\n• (B) Missing period after "V" ("V K.").\n• (C) Missing period after "Prof" ("Prof V.").\n• (D) "UD" instead of "DU".\nHence, Option (A) is identical.',
    explanationHi:
      'तुलना करने पर:\n• (B) में "V" के बाद बिंदु (.) नहीं है।\n• (C) में "Prof" के बाद बिंदु (.) नहीं है।\n• (D) में "DU" के स्थान पर "UD" लिखा है।\n• अतः विकल्प (A) बिल्कुल समान है।',
  },
  {
    id: 'cgl26_06o2_q19',
    topic: 'Letter Analogy',
    questionEn:
      'What should come in place of the question mark (?) in the following analogy?\nKMO : QSU :: EGI : ?',
    questionHi: 'निम्नलिखित सादृश्य में प्रश्न चिह्न (?) के स्थान पर क्या आएगा?\nKMO : QSU :: EGI : ?',
    optionsEn: ['KNO', 'LNP', 'KMO', 'JLM'],
    optionsHi: ['KNO', 'LNP', 'KMO', 'JLM'],
    correctIndex: 2,
    explanationEn:
      'Each letter advances by +6 in the English alphabet:\n• K(11) + 6 = Q(17), M(13) + 6 = S(19), O(15) + 6 = U(21)\nApplying +6 to EGI:\n• E(5) + 6 = K(11), G(7) + 6 = M(13), I(9) + 6 = O(15)\nHence, EGI : KMO.',
    explanationHi:
      'प्रत्येक अक्षर में +6 की वृद्धि की गई है:\n• K(11)+6=Q(17), M(13)+6=S(19), O(15)+6=U(21)\nइसी प्रकार EGI में +6 जोड़ने पर:\n• E(5)+6=K(11), G(7)+6=M(13), I(9)+6=O(15) ⇒ KMO।',
  },
  {
    id: 'cgl26_06o2_q20',
    topic: 'Mathematical Operations',
    questionEn:
      'Interchange the indicated signs and solve to find the result for both equations (I) and (II) respectively.\nInterchange signs: − and +\nI. 64 ÷ 8 − 4 × 2 + 10\nII. 48 × 2 ÷ 8 + 16 − 4',
    questionHi:
      'दर्शाए गए चिह्नों को आपस में बदलकर समीकरण (I) और (II) को हल कीजिए तथा क्रमशः उनका परिणाम ज्ञात कीजिए।\nचिह्नों का अदल-बदल: − और +\n(I) 64 ÷ 8 − 4 × 2 + 10\n(II) 48 × 2 ÷ 8 + 16 − 4',
    optionsEn: ['8 and 2', '6 and 0', '6 and 4', '10 and 0'],
    optionsHi: ['8 और 2', '6 और 0', '6 और 4', '10 और 0'],
    correctIndex: 1,
    explanationEn:
      'After interchanging − and +:\n• Equation (I): 64 ÷ 8 + 4 × 2 − 10 = 8 + 8 − 10 = 6.\n• Equation (II): 48 × 2 ÷ 8 − 16 + 4 = 48 × 0.25 − 16 + 4 = 12 − 16 + 4 = 0.\nHence, the results are 6 and 0 respectively.',
    explanationHi:
      '− और + को आपस में बदलने के बाद BODMAS लगाने पर:\n• समीकरण (I): 64 ÷ 8 + 4 × 2 − 10 = 8 + 8 − 10 = 6।\n• समीकरण (II): 48 × 2 ÷ 8 − 16 + 4 = 12 − 16 + 4 = 0।\nअतः क्रमशः परिणाम 6 और 0 हैं।',
  },
  {
    id: 'cgl26_06o2_q21',
    topic: 'Decision Making',
    questionEn:
      'Read the given conditions carefully and determine the appropriate outcome for the case provided. If any exception applies, identify the authority to whom the case should be referred.\nCriteria for Advanced Research Grant Allocation:\n(i) Must have published 3+ papers.\n(ii) Must be currently enrolled in a PhD program.\nExceptions:\nException (A): If the candidate has published 5+ papers but is not enrolled in a PhD, refer the case to the Grant Committee.\nException (B): If the candidate meets criteria (i) and (ii) but has a project scope exceeding the budget limit, refer the case to the Finance Oversight Board.\nCase: The candidate has published 6 papers and is not enrolled in a PhD program.',
    questionHi:
      'दिए गए नियमों को ध्यानपूर्वक पढ़िए और प्रदान किए गए मामले के लिए उपयुक्त परिणाम निर्धारित कीजिए। यदि कोई अपवाद लागू होता है, तो यह भी बताइए कि मामले को किस प्राधिकारी के पास भेजा जाना चाहिए।\nउन्नत अनुसंधान अनुदान (Advanced Research Grant) आवंटन के लिए मानदंड:\n(i) उम्मीदवार द्वारा 3 या अधिक शोध-पत्र प्रकाशित किए गए हों।\n(ii) उम्मीदवार वर्तमान में PhD कार्यक्रम में नामांकित (Enrolled) हो।\nअपवाद:\nअपवाद (A): यदि उम्मीदवार ने 5 या अधिक शोध-पत्र प्रकाशित किए हैं, लेकिन वह PhD कार्यक्रम में नामांकित नहीं है, तो मामले को अनुदान समिति (Grant Committee) के पास भेजा जाएगा।\nअपवाद (B): यदि उम्मीदवार मानदंड (i) और (ii) दोनों को पूरा करता है, लेकिन उसकी परियोजना का दायरा (Project Scope) स्वीकृत बजट सीमा से अधिक है, तो मामले को वित्तीय पर्यवेक्षण बोर्ड (Finance Oversight Board) के पास भेजा जाएगा।\nमामला:\nउम्मीदवार ने 6 शोध-पत्र प्रकाशित किए हैं और वह किसी PhD कार्यक्रम में नामांकित नहीं है।',
    optionsEn: [
      'Grant to be approved',
      'Grant application to be rejected',
      'Case to be referred to the Grant Committee',
      'Case to be referred to the Finance Oversight Board',
    ],
    optionsHi: [
      'अनुदान स्वीकृत किया जाएगा।',
      'अनुदान आवेदन अस्वीकृत किया जाएगा।',
      'मामला अनुदान समिति को भेजा जाएगा।',
      'मामला वित्तीय पर्यवेक्षण बोर्ड को भेजा जाएगा।',
    ],
    correctIndex: 2,
    explanationEn:
      'Evaluating the candidate:\n• Criterion (i): Published 6 papers (≥ 3) — Satisfied.\n• Criterion (ii): Not enrolled in a PhD program — Not satisfied.\n• Exception (A): Published 5+ papers (6 ≥ 5) and not enrolled in PhD — Applicable!\nTherefore, the case is to be referred to the Grant Committee.',
    explanationHi:
      'मामले की जाँच:\n• मानदंड (i): 6 शोध-पत्र प्रकाशित (3 से अधिक) — पूर्ण।\n• मानदंड (ii): PhD में नामांकित नहीं — अपूर्ण।\n• अपवाद (A) लागू होता है क्योंकि उम्मीदवार ने 5+ (अर्थात् 6) शोध-पत्र प्रकाशित किए हैं और PhD में नामांकित नहीं है।\nअतः मामला अनुदान समिति (Grant Committee) को भेजा जाएगा।',
  },
  {
    id: 'cgl26_06o2_q22',
    topic: 'Situational Judgement',
    questionEn:
      'Your company has a policy prohibiting the use of office resources for personal projects. You have a small, urgent personal task that would take 10 minutes and requires a company printer. What do you do?',
    questionHi:
      'आपकी कंपनी की एक नीति है जो व्यक्तिगत कार्यों के लिए कार्यालय के संसाधनों के उपयोग पर प्रतिबंध लगाती है। आपके पास एक छोटा लेकिन अत्यावश्यक व्यक्तिगत कार्य है, जिसे पूरा करने में 10 मिनट लगेंगे और जिसके लिए कंपनी के प्रिंटर की आवश्यकता है।\nआप क्या करेंगे?',
    optionsEn: [
      'Use the printer quickly, as it is a minor task.',
      'Ask for special permission from your manager for this one time.',
      'Seek an alternative solution outside the office to comply with policy.',
      'Use the printer but pay the company for the paper and ink used.',
    ],
    optionsHi: [
      'प्रिंटर का शीघ्र उपयोग कर लें, क्योंकि यह एक छोटा-सा कार्य है।',
      'केवल इस एक बार के लिए अपने प्रबंधक से विशेष अनुमति माँगें।',
      'नीति का पालन करने के लिए कार्यालय के बाहर कोई वैकल्पिक समाधान खोजें।',
      'प्रिंटर का उपयोग करें, लेकिन प्रयुक्त कागज़ और स्याही की लागत कंपनी को चुका दें।',
    ],
    correctIndex: 2,
    explanationEn:
      'Professional integrity requires strictly respecting explicit company policies regardless of how minor the task seems. Seeking an external print service/alternative outside the office upholds compliance without putting yourself or your manager in an ethical compromise.',
    explanationHi:
      'व्यावसायिक नैतिकता और अनुशासन के अनुसार कार्य कितना भी छोटा क्यों न हो, कंपनी की स्पष्ट नीति का उल्लंघन नहीं किया जाना चाहिए। कार्यालय के बाहर वैकल्पिक प्रिंटिंग व्यवस्था खोजना सबसे नैतिक और नीति-सम्मत कदम है।',
  },
  {
    id: 'cgl26_06o2_q23',
    topic: 'Statement & Conclusions',
    questionEn:
      'Read the statement carefully and assume it to be true. Then examine the two conclusions given below it and decide which conclusion(s), if any, logically follow from the statement.\nStatement:\nAfter analysing customer feedback, a smartphone manufacturer decided to extend software support for its premium devices from three years to five years.\nConclusions:\nI. The manufacturer believes longer software support may increase customer satisfaction.\nII. All customers purchase smartphones primarily because of software support duration.',
    questionHi:
      'कथन को ध्यानपूर्वक पढ़िए और उसे सत्य मानिए। फिर उसके नीचे दिए गए दो निष्कर्षों की जाँच कीजिए तथा निर्धारित कीजिए कि कौन-सा/कौन-से निष्कर्ष, यदि कोई हो, कथन से तार्किक रूप से अनुसरण करते हैं।\nकथन:\nग्राहकों की प्रतिक्रिया का विश्लेषण करने के बाद, एक स्मार्टफोन निर्माता ने अपने प्रीमियम उपकरणों के लिए सॉफ्टवेयर समर्थन की अवधि को तीन वर्षों से बढ़ाकर पाँच वर्ष करने का निर्णय लिया।\nनिष्कर्ष:\nI. निर्माता का मानना है कि अधिक समय तक सॉफ्टवेयर समर्थन प्रदान करने से ग्राहकों की संतुष्टि बढ़ सकती है।\nII. सभी ग्राहक मुख्य रूप से सॉफ्टवेयर समर्थन की अवधि के कारण ही स्मार्टफोन खरीदते हैं।',
    optionsEn: [
      'Only conclusion I follows',
      'Only conclusion II follows',
      'Neither conclusion I nor conclusion II follows',
      'Both conclusions I and II follow',
    ],
    optionsHi: [
      'केवल निष्कर्ष I अनुसरण करता है।',
      'केवल निष्कर्ष II अनुसरण करता है।',
      'न तो निष्कर्ष I और न ही निष्कर्ष II अनुसरण करता है।',
      'निष्कर्ष I और II दोनों अनुसरण करते हैं।',
    ],
    correctIndex: 0,
    explanationEn:
      '• Conclusion I logically follows because the decision to extend support came directly after analysing customer feedback, showing the manufacturer expects it to improve customer satisfaction.\n• Conclusion II uses the extreme qualifier “All customers” and claims it is their primary buying factor, which is not supported by the statement.\nHence, only conclusion I follows.',
    explanationHi:
      '• निष्कर्ष I तार्किक है क्योंकि ग्राहकों की प्रतिक्रिया (feedback) के आधार पर समर्थन अवधि बढ़ाना दर्शाता है कि निर्माता इससे ग्राहकों की संतुष्टि बढ़ने की अपेक्षा करता है।\n• निष्कर्ष II में “सभी ग्राहक” जैसा अतिवादी दावा किया गया है जो कथन से सिद्ध नहीं होता।\nअतः केवल निष्कर्ष I अनुसरण करता है।',
  },
  {
    id: 'cgl26_06o2_q24',
    topic: 'Statement & Assumptions',
    questionEn:
      'Read the given statement carefully and the following assumptions based on it. Decide which of the assumptions are implicit in the statement.\nStatement:\nTo reduce traffic congestion during peak hours, the municipal corporation should introduce a congestion charge on all private vehicles entering the city centre.\nAssumptions:\nI. Charging a fee for entering the city centre will discourage many private vehicle owners from using that route.\nII. Heavy traffic congestion adversely affects the smooth functioning of the city.',
    questionHi:
      'दिए गए कथन को ध्यानपूर्वक पढ़िए तथा उसके आधार पर दी गई निम्नलिखित मान्यताओं पर विचार कीजिए। निर्धारित कीजिए कि कथन में कौन-सी मान्यता/मान्यताएँ निहित हैं।\nकथन:\nव्यस्त समय (पीक आवर्स) के दौरान यातायात जाम को कम करने के लिए नगर निगम को शहर के केंद्र में प्रवेश करने वाले सभी निजी वाहनों पर भीड़भाड़ शुल्क (कंजेशन चार्ज) लागू करना चाहिए।\nमान्यताएँ:\nI. शहर के केंद्र में प्रवेश करने के लिए शुल्क लगाने से अनेक निजी वाहन मालिक उस मार्ग का उपयोग करने से हतोत्साहित होंगे।\nII. अत्यधिक यातायात जाम शहर के सुचारु संचालन पर प्रतिकूल प्रभाव डालता है।',
    optionsEn: [
      'Only Assumption I is implicit',
      'Both Assumptions I and II are implicit',
      'Only Assumption II is implicit',
      'Neither Assumption I nor II is implicit',
    ],
    optionsHi: [
      'केवल मान्यता I निहित है।',
      'मान्यता I और II दोनों निहित हैं।',
      'केवल मान्यता II निहित है।',
      'न तो मान्यता I न ही II निहित है।',
    ],
    correctIndex: 1,
    explanationEn:
      '• Assumption I is implicit because imposing a congestion fee only works as a measure to reduce traffic if it deters many private vehicle owners from entering the city centre.\n• Assumption II is implicit because recommending policy action to reduce peak-hour traffic congestion presupposes that heavy congestion harms the smooth functioning of the city.\nHence, both Assumptions I and II are implicit.',
    explanationHi:
      '• मान्यता I निहित है क्योंकि भीड़भाड़ शुल्क लगाने का सुझाव इसी अपेक्षा पर आधारित है कि इससे निजी वाहन चालक उस मार्ग का उपयोग कम करेंगे।\n• मान्यता II निहित है क्योंकि जाम कम करने का प्रयास तभी आवश्यक माना जाता है जब जाम से शहर के सुचारु संचालन पर नकारात्मक प्रभाव पड़ता हो।\nअतः मान्यता I और II दोनों निहित हैं।',
  },
  {
    id: 'cgl26_06o2_q25',
    topic: 'Word Analogy',
    questionEn:
      'Select the option that is related to the third word in the same way as the second word is related to the first word. (The words must be considered as meaningful English words and must not be related to each other based on the number of letters/number of consonants/vowels in the word.)\nOrnithology : Birds :: Ichthyology : ?',
    questionHi:
      'उस विकल्प का चयन कीजिए जो तीसरे शब्द से उसी प्रकार संबंधित है जैसे दूसरा शब्द पहले शब्द से संबंधित है। (शब्दों को सार्थक हिन्दी शब्द माना जाना चाहिए और शब्द में अक्षरों की संख्या/व्यंजनों/स्वरों की संख्या के आधार पर एक-दूसरे से संबंधित नहीं होना चाहिए।)\nपक्षी विज्ञान : पक्षी :: मत्स्य विज्ञान : ?',
    optionsEn: ['Reptiles', 'Amphibians', 'Fish', 'Insects'],
    optionsHi: ['सरीसृप', 'उभयचर', 'मछली', 'कीट'],
    correctIndex: 2,
    explanationEn:
      'Relationship: Branch of zoology : Organism studied.\n• Ornithology is the scientific study of Birds.\n• Ichthyology is the scientific study of Fish.\n(Extra facts: Herpetology = Reptiles & Amphibians; Entomology = Insects.)',
    explanationHi:
      'संबंध: विज्ञान की शाखा : अध्ययन का विषय।\n• पक्षी विज्ञान (Ornithology) में पक्षियों का अध्ययन किया जाता है।\n• मत्स्य विज्ञान (Ichthyology) में मछलियों (Fish) का अध्ययन किया जाता है।\n(नोट: सरीसृप/उभयचर = Herpetology; कीट = Entomology।)',
  },
];

const SECTION_2_GA_O6S2: Question[] = [
  {
    id: 'cgl26_06o2_q26',
    topic: 'Medieval History',
    questionEn: 'Who among the following did NOT ascend the throne of the Delhi Sultanate?',
    questionHi: 'निम्नलिखित में से कौन दिल्ली सल्तनत की गद्दी पर नहीं बैठा?',
    optionsEn: ['Razia Sultana', 'Khizr Khan', 'Malik Kafur', 'Alauddin Khalji'],
    optionsHi: ['रजिया सुल्ताना', 'ख़िज़्र खान', 'मलिक काफूर', 'अलाउद्दीन खिलजी'],
    correctIndex: 2,
    explanationEn:
      'Malik Kafur was a prominent slave-general and Naib (deputy) under Alauddin Khalji. After Alauddin’s death (1316), he acted briefly as regent for the minor Shihabuddin Omar, but never ascended the throne as Sultan himself.\n• Razia Sultana (1236–1240) — Slave Dynasty\n• Alauddin Khalji (1296–1316) — Khalji Dynasty\n• Khizr Khan (1414–1421) — Founder of the Sayyid Dynasty.',
    explanationHi:
      'मलिक काफूर, अलाउद्दीन खिलजी का प्रमुख सेनापति और नायब था। अलाउद्दीन की मृत्यु के बाद उसने अल्पवयस्क शहाबुद्दीन उमर के संरक्षक (regent) के रूप में शासन चलाया, किंतु स्वयं कभी दिल्ली सल्तनत की गद्दी पर सुल्तान के रूप में नहीं बैठा।\n• रजिया सुल्ताना (1236–1240) — गुलाम वंश\n• अलाउद्दीन खिलजी (1296–1316) — खिलजी वंश\n• ख़िज़्र खान (1414–1421) — सैय्यद वंश के संस्थापक।',
  },
  {
    id: 'cgl26_06o2_q27',
    topic: 'International Organizations',
    questionEn: 'Where was the 1st BRICS summit held?',
    questionHi: 'पहला ब्रिक्स (BRICS) समिट कहां आयोजित हुआ था?',
    optionsEn: ['USA', 'China', 'France', 'Russia'],
    optionsHi: ['यूएसए', 'चीन', 'फ्रांस', 'रूस'],
    correctIndex: 3,
    explanationEn:
      'The 1st BRIC (later BRICS after South Africa joined in 2010) summit was held in Yekaterinburg, Russia on 16 June 2009. The founding four members attending were Brazil, Russia, India, and China.',
    explanationHi:
      'पहला ब्रिक (BRIC) शिखर सम्मेलन 16 जून 2009 को येकातेरिनबर्ग, रूस (Russia) में आयोजित हुआ था। वर्ष 2010 में दक्षिण अफ्रीका के शामिल होने के बाद यह BRICS कहलाया।',
  },
  {
    id: 'cgl26_06o2_q28',
    topic: 'Current Affairs & Economy',
    questionEn:
      'The IMEC (India-Middle East-Europe Economic Corridor) project is designed to increase __________ between the participating nations.',
    questionHi:
      'आईएमईसी (भारत-मध्य पूर्व-यूरोप आर्थिक कॉरिडोर) परियोजना भाग लेने वाले देशों के बीच __________ बढ़ाने के लिए डिज़ाइन की गई है।',
    optionsEn: [
      'economic integration',
      'military alliances',
      'population exchanges',
      'cultural uniformity',
    ],
    optionsHi: ['आर्थिक एकीकरण', 'सैन्य गठबंधन', 'जनसंख्या विनिमय', 'सांस्कृतिक एकरूपता'],
    correctIndex: 0,
    explanationEn:
      'Announced at the 2023 G20 New Delhi Summit, the India-Middle East-Europe Economic Corridor (IMEC) aims to boost economic integration, trade connectivity, rail-shipping networks, clean energy pipelines, and digital infrastructure across India, the UAE, Saudi Arabia, Jordan, Israel, and the European Union.',
    explanationHi:
      'वर्ष 2023 के नई दिल्ली G20 शिखर सम्मेलन में घोषित IMEC (भारत-मध्य पूर्व-यूरोप आर्थिक कॉरिडोर) का मुख्य उद्देश्य सहभागी देशों के बीच रेल-समुद्री व्यापार संपर्क, ऊर्जा और डिजिटल अवसंरचना के माध्यम से आर्थिक एकीकरण (economic integration) को बढ़ावा देना है।',
  },
  {
    id: 'cgl26_06o2_q29',
    topic: 'Sports',
    questionEn: 'With which sport is the term "googly" traditionally associated?',
    questionHi: '"गुगली" शब्द पारंपरिक रूप से किस खेल से जुड़ा है?',
    optionsEn: ['Hockey', 'Cricket', 'Football', 'Kabaddi'],
    optionsHi: ['हॉकी', 'क्रिकेट', 'फ़ुटबॉल', 'कबड्डी'],
    correctIndex: 1,
    explanationEn:
      'In Cricket, a "googly" (also called a wrong’un or Bosie, invented by Bernard Bosanquet) is a deceptive delivery bowled by a right-arm leg-spin bowler that spins from off to leg (opposite to a regular leg-break).',
    explanationHi:
      '“गुगली” (Googly) शब्द क्रिकेट से संबंधित है। यह लेग-स्पिन गेंदबाज़ द्वारा फेंकी जाने वाली एक विशेष गेंद होती है जो सामान्य लेग-ब्रेक के विपरीत दिशा (ऑफ से लेग की ओर) घूमती है।',
  },
  {
    id: 'cgl26_06o2_q30',
    topic: 'Books & Authors',
    questionEn:
      'Which Indian English novel, written in 1956, is often cited as the first modern English novel from India?',
    questionHi:
      '1956 में लिखे गए किस भारतीय अंग्रेजी उपन्यास को अक्सर भारत का पहला आधुनिक अंग्रेजी उपन्यास कहा जाता है?',
    optionsEn: [
      'Untouchable',
      'Train to Pakistan',
      'The Serpent and the Rope',
      'The Guide',
    ],
    optionsHi: ['अनटचेबल', 'ट्रेन टू पाकिस्तान', 'द सर्पेंट एंड द रोप', 'द गाइड'],
    correctIndex: 3,
    explanationEn:
      'As per the official SSC answer key, "The Guide" by R. K. Narayan is the correct option. R. K. Narayan won the Sahitya Akademi Award (1960) for The Guide, set in the fictional town of Malgudi.\n(Other authors for reference: Untouchable — Mulk Raj Anand; Train to Pakistan — Khushwant Singh; The Serpent and the Rope — Raja Rao.)',
    explanationHi:
      'आधिकारिक SSC उत्तर कुंजी के अनुसार सही उत्तर "द गाइड" (The Guide) है, जिसके लेखक आर. के. नारायण हैं और जिसे 1960 का साहित्य अकादमी पुरस्कार प्राप्त हुआ था।\n(अन्य पुस्तकें: अनटचेबल — मुल्क राज आनंद; ट्रेन टू पाकिस्तान — खुशवंत सिंह; द सर्पेंट एंड द रोप — राजा राव।)',
  },
  {
    id: 'cgl26_06o2_q31',
    topic: 'Indian Economy',
    questionEn:
      'According to the Seventh Five-Year Plan (1985-1990), why was the railway system considered vital to the Indian economy?',
    questionHi:
      'सातवीं पंचवर्षीय योजना (1985-1990) के अनुसार रेलवे प्रणाली को भारतीय अर्थव्यवस्था के लिए महत्वपूर्ण क्यों माना गया?',
    optionsEn: [
      'It was the only mode of transport available',
      'It reduced the need for road transport',
      'It primarily supported urban development',
      'It was the backbone of the country’s transport infrastructure',
    ],
    optionsHi: [
      'यह परिवहन का एकमात्र उपलब्ध साधन था',
      'इससे सड़क परिवहन की ज़रूरत कम हो गई',
      'इसने मुख्य रूप से शहरी विकास का समर्थन किया',
      'यह देश के परिवहन इंफ्रास्ट्रक्चर की रीढ़ थी',
    ],
    correctIndex: 3,
    explanationEn:
      'The Seventh Five-Year Plan (1985–1990) emphasized modernization, electrification, and capacity augmentation of Indian Railways because it served as the backbone of the country’s transport infrastructure for moving bulk freight (coal, steel, foodgrains) and passengers nationwide.',
    explanationHi:
      'सातवीं पंचवर्षीय योजना (1985–1990) में भारतीय रेलवे के आधुनिकीकरण और क्षमता विस्तार पर विशेष बल दिया गया क्योंकि यह देश के परिवहन इंफ्रास्ट्रक्चर की रीढ़ थी और माल व यात्री परिवहन का प्रमुख आधार थी।',
  },
  {
    id: 'cgl26_06o2_q32',
    topic: 'Sports',
    questionEn: 'In Kabaddi, what is the maximum number of substitutions per team?',
    questionHi: 'कबड्डी में हर एक टीम अधिकतम कितनी बार प्रतिस्थापन कर सकती है?',
    optionsEn: ['3', '4', '5', '6'],
    optionsHi: ['3', '4', '5', '6'],
    correctIndex: 2,
    explanationEn:
      'In standard Kabaddi rules (AKFI / IKF), each team consists of 12 players (7 playing on the court and 5 reserves) and is allowed a maximum of 5 substitutions during a match.',
    explanationHi:
      'मानक कबड्डी नियमों के अनुसार प्रत्येक टीम में कुल 12 खिलाड़ी (7 मैदान पर और 5 अतिरिक्त/रिज़र्व) होते हैं तथा एक मैच के दौरान प्रत्येक टीम अधिकतम 5 प्रतिस्थापन (substitutions) कर सकती है।',
  },
  {
    id: 'cgl26_06o2_q33',
    topic: 'Art & Culture',
    questionEn:
      'The Pushkar Mela, known for its camel trade and vibrant cultural events is celebrated in which state of India?',
    questionHi:
      'ऊँट व्यापार और जीवंत सांस्कृतिक कार्यक्रमों के लिए प्रसिद्ध पुष्कर मेला भारत के किस राज्य में मनाया जाता है?',
    optionsEn: ['Rajasthan', 'Uttar Pradesh', 'Gujarat', 'Maharashtra'],
    optionsHi: ['राजस्थान', 'उत्तर प्रदेश', 'गुजरात', 'महाराष्ट्र'],
    correctIndex: 0,
    explanationEn:
      'Pushkar Mela (Pushkar Camel Fair) is an annual multi-day livestock and cultural festival held in Pushkar (Ajmer district), Rajasthan, around Kartik Purnima (October–November).',
    explanationHi:
      'पुष्कर मेला (पुष्कर ऊँट मेला) प्रतिवर्ष कार्तिक पूर्णिमा के अवसर पर राजस्थान के अजमेर जिले के पुष्कर शहर में आयोजित होने वाला विश्व प्रसिद्ध पशु व सांस्कृतिक मेला है।',
  },
  {
    id: 'cgl26_06o2_q34',
    topic: 'Polity & Law',
    questionEn:
      'What does the Bharatiya Nyaya Sanhita (BNS), 2023 propose regarding the role of digital evidence in criminal cases?',
    questionHi:
      'भारतीय न्याय संहिता (बीएनएस), 2023 आपराधिक मामलों में डिजिटल साक्ष्य की भूमिका के संबंध में क्या प्रस्ताव करती है?',
    optionsEn: [
      'Digital evidence can only be used if it is manually compiled',
      'Digital evidence is not admissible in court without physical copies',
      'Digital evidence must be verified and authenticated for it to be used in court',
      'All digital evidence is automatically accepted in legal proceedings',
    ],
    optionsHi: [
      'डिजिटल साक्ष्य का उपयोग केवल तभी किया जा सकता है जब इसे मैन्युअल रूप से संकलित किया गया हो',
      'भौतिक प्रतियों के बिना डिजिटल साक्ष्य न्यायालय में स्वीकार्य नहीं है',
      'डिजिटल साक्ष्य को अदालत में उपयोग करने के लिए सत्यापित और प्रमाणित किया जाना चाहिए',
      'कानूनी कार्यवाही में सभी डिजिटल साक्ष्य स्वचालित रूप से स्वीकार कर लिए जाते हैं',
    ],
    correctIndex: 2,
    explanationEn:
      'Under India’s new criminal laws (BNS, BNSS, and BSA 2023), electronic and digital records are given primary evidentiary status on par with paper documents, provided they are properly verified and authenticated (certification of authenticity/hash integrity) before admission in court.',
    explanationHi:
      'नए आपराधिक कानूनों (BNS, BNSS और भारतीय साक्ष्य अधिनियम, 2023) के तहत इलेक्ट्रॉनिक एवं डिजिटल रिकॉर्ड को दस्तावेज़ी साक्ष्य के समकक्ष मान्यता दी गई है, बशर्ते अदालत में प्रस्तुत करने से पूर्व उनका विधिवत सत्यापन और प्रमाणीकरण किया गया हो।',
  },
  {
    id: 'cgl26_06o2_q35',
    topic: 'Modern History',
    questionEn:
      'During the Indian freedom struggle, who organized the ‘Secret Congress Radio’ that broadcasted recorded messages from Gandhiji?',
    questionHi:
      'भारतीय स्वतंत्रता संग्राम के दौरान, गांधीजी के रिकॉर्ड किए गए संदेशों को प्रसारित करने वाले ‘सीक्रेट कांग्रेस रेडियो’ का आयोजन किसने किया था?',
    optionsEn: [
      'Usha Mehta',
      'Alluri Sitarama Raju',
      'Kanuri Lakshmibai',
      'Oruganti Mahalakshmamma',
    ],
    optionsHi: ['उषा मेहता', 'अल्लूरी सीताराम राजू', 'कनुरी लक्ष्मीबाई', 'ओरुगंती महालक्ष्मम्मा'],
    correctIndex: 0,
    explanationEn:
      'Usha Mehta (along with associates like Vitthaldas Khakar, Chandrakant Jhaveri, and Babubhai Thakkar) organized the underground "Secret Congress Radio" in Bombay during the Quit India Movement (August–November 1942), broadcasting Gandhiji’s recorded messages and nationalist news.',
    explanationHi:
      '1942 के भारत छोड़ो आंदोलन के दौरान उषा मेहता ने बंबई में भूमिगत ‘सीक्रेट कांग्रेस रेडियो’ (Secret Congress Radio) का संचालन किया था, जिसके माध्यम से गांधीजी के रिकॉर्ड किए गए संदेश और स्वतंत्रता आंदोलन के समाचार प्रसारित किए जाते थे।',
  },
  {
    id: 'cgl26_06o2_q36',
    topic: 'Static GK',
    questionEn:
      'Rabindranath Tagore is the author of national anthems of India and which other country?',
    questionHi: 'रवींद्रनाथ टैगोर भारत और किस अन्य देश के राष्ट्रगान के लेखक हैं?',
    optionsEn: ['Nepal', 'Sri lanka', 'Bangladesh', 'Bhutan'],
    optionsHi: ['नेपाल', 'श्रीलंका', 'बांग्लादेश', 'भूटान'],
    correctIndex: 2,
    explanationEn:
      'Rabindranath Tagore authored both India’s national anthem ("Jana Gana Mana") and Bangladesh’s national anthem ("Amar Sonar Bangla", written in 1905 during the Partition of Bengal).',
    explanationHi:
      'रवींद्रनाथ टैगोर भारत के राष्ट्रगान (“जन गण मन”) और बांग्लादेश के राष्ट्रगान (“आमार सोनार बांग्ला”) दोनों के रचयिता हैं।',
  },
  {
    id: 'cgl26_06o2_q37',
    topic: 'Indian Geography',
    questionEn:
      'The States of Jammu and Kashmir, Himachal Pradesh and Uttaranchal are highly vulnerable to earthquakes because:\n1. The Indian plate is slowly moving towards the north and north-eastern direction, which is obstructed by the Eurasian plate.\n2. Most of the active volcanoes in India lie in the northern region of the country, which is frequently affected by magma and seismic movements.\nWhich of the above statements is/are CORRECT?',
    questionHi:
      'जम्मू और कश्मीर, हिमाचल प्रदेश और उत्तराखंड राज्य भूकंप के प्रति अत्यधिक संवेदनशील हैं क्योंकि:\n1. भारतीय प्लेट धीरे-धीरे उत्तर और उत्तर-पूर्वी दिशा की ओर बढ़ रही है, जिसे यूरेशियन प्लेट द्वारा बाधित किया जा रहा है।\n2. भारत में अधिकांश सक्रिय ज्वालामुखी देश के उत्तरी क्षेत्र में स्थित हैं, जो अक्सर मैग्मा और भूकंपीय हलचलों से प्रभावित होते हैं।\nउपर्युक्त कथनों में से कौन सा सही है/हैं?',
    optionsEn: ['1 only', '2 only', 'Both 1 and 2', 'None of these'],
    optionsHi: ['केवल 1', 'केवल 2', '1 और 2 दोनों', 'इनमें से कोई नहीं'],
    correctIndex: 0,
    explanationEn:
      '• Statement 1 is CORRECT: The Himalayan belt (J&K, Himachal Pradesh, Uttarakhand) lies along a convergent plate boundary where the northward-moving Indian tectonic plate collides with the Eurasian plate, accumulating massive seismic stress (Seismic Zones IV & V).\n• Statement 2 is INCORRECT: The Himalayas are non-volcanic fold mountains. India’s only active volcano is Barren Island in the Andaman & Nicobar Islands.',
    explanationHi:
      '• कथन 1 सही है: हिमालयी क्षेत्र (जम्मू-कश्मीर, हिमाचल प्रदेश, उत्तराखंड) भारतीय प्लेट के उत्तर/उत्तर-पूर्व की ओर खिसकने और यूरेशियन प्लेट से टकराने के कारण अत्यधिक भूकंप-संवेदनशील (ज़ोन IV व V) है।\n• कथन 2 गलत है: उत्तरी भारत में सक्रिय ज्वालामुखी नहीं हैं; भारत का एकमात्र सक्रिय ज्वालामुखी अंडमान-निकोबार द्वीपसमूह में बैरेन द्वीप (Barren Island) पर स्थित है।',
  },
  {
    id: 'cgl26_06o2_q38',
    topic: 'Ancient History',
    questionEn:
      "What was the primary duty of the city mayor (Nagara-Rakshaka or Pustapala) in the Gupta dynasty's administration?",
    questionHi:
      'गुप्त वंश के प्रशासन में नगर महापौर (नगर-रक्षक या पुस्तापाल) का प्राथमिक कर्तव्य क्या था?',
    optionsEn: [
      'Managing military security and palace guards.',
      'Supervising temple rituals and offerings.',
      'Recording land dimensions and urban governance.',
      'Leading merchant caravans on foreign trade missions.',
    ],
    optionsHi: [
      'सैन्य सुरक्षा और महल के गार्ड का प्रबंधन करना।',
      'मंदिर के अनुष्ठानों और प्रसाद का पर्यवेक्षण करना।',
      'भूमि आयाम और शहरी शासन का अभिलेखन।',
      'विदेशी व्यापार मिशनों पर व्यापारी कारवां का नेतृत्व करना।',
    ],
    correctIndex: 2,
    explanationEn:
      'In Gupta administration, Pustapalas were official record-keepers responsible for maintaining accurate records of land measurements, sales, and transfers, while municipal officials (Nagara-Rakshaka / Purapala) oversaw urban governance and city records.',
    explanationHi:
      'गुप्तकालीन प्रशासन में पुस्तापाल (Pustapala) भूमि के माप, क्रय-विक्रय और स्वामित्व संबंधी अभिलेखों के प्रमुख संरक्षक होते थे, तथा नगर अधिकारी शहरी शासन व अभिलेखन का कार्य देखते थे।',
  },
  {
    id: 'cgl26_06o2_q39',
    topic: 'Sports History',
    questionEn:
      'At which Summer Olympics did the Indian men’s hockey team fail to win a medal for the first time since 1928?',
    questionHi:
      'किस ग्रीष्मकालीन ओलंपिक में भारतीय पुरुष हॉकी टीम 1928 के बाद पहली बार पदक जीतने में असफल रही?',
    optionsEn: ['Montreal 1976', 'Munich 1972', 'Moscow 1980', 'Los Angeles 1984'],
    optionsHi: ['मॉन्ट्रियल 1976', 'म्यूनिख 1972', 'मॉस्को 1980', 'लॉस एंजिल्स 1984'],
    correctIndex: 0,
    explanationEn:
      'India won a medal in every Summer Olympics from 1928 to 1972 (7 Gold, 1 Silver, 2 Bronze). At the Montreal 1976 Olympics—the first edition played on artificial AstroTurf—India finished 7th and missed out on a medal for the first time since 1928.',
    explanationHi:
      'भारतीय पुरुष हॉकी टीम ने 1928 से 1972 तक लगातार प्रत्येक ओलंपिक में पदक जीता था। मॉन्ट्रियल 1976 ओलंपिक (एस्ट्रोटर्फ पर आयोजित पहला ओलंपिक) में भारत सातवें स्थान पर रहा और 1928 के बाद पहली बार पदक से चूक गया।',
  },
  {
    id: 'cgl26_06o2_q40',
    topic: 'Books & Authors',
    questionEn:
      "Which of the following statements correctly describes the award recognition received by the book 'The Mistress of Spices' written by Chitra Divakaruni?",
    questionHi:
      "निम्नलिखित में से कौन सा कथन चित्रा दिवाकरुणी द्वारा लिखित पुस्तक 'द मिस्ट्रेस ऑफ स्पाइसेज' को प्राप्त पुरस्कार मान्यता का सही वर्णन करता है?",
    optionsEn: [
      'Received Booker Prize for South Asian politics',
      'Won Sahitya Akademi Award for Indian English literature',
      'Honored with Pulitzer Prize for immigrant struggles',
      'Shortlisted for Women’s Prize for Fiction for magical realism and diaspora.',
    ],
    optionsHi: [
      'दक्षिण एशियाई राजनीति के लिए बुकर पुरस्कार प्राप्त किया',
      'भारतीय अंग्रेजी साहित्य के लिए साहित्य अकादमी पुरस्कार जीता',
      'आप्रवासी संघर्षों के लिए पुलित्जर पुरस्कार से सम्मानित',
      'जादुई यथार्थवाद और प्रवासी साहित्य के लिए महिला पुरस्कार हेतु चयनित।',
    ],
    correctIndex: 3,
    explanationEn:
      'Chitra Banerjee Divakaruni’s acclaimed 1997 novel "The Mistress of Spices" blends magical realism with Indian-American diaspora themes and was shortlisted for the Orange Prize for Fiction (now the Women’s Prize for Fiction) in 1998.',
    explanationHi:
      'चित्रा बनर्जी दिवाकरुणी का प्रसिद्ध उपन्यास “द मिस्ट्रेस ऑफ स्पाइसेज” (1997) जादुई यथार्थवाद और प्रवासी जीवन पर आधारित है, जिसे 1998 में ऑरेंज प्राइज / विमेंस प्राइज फॉर फिक्शन (Women’s Prize for Fiction) के लिए शॉर्टलिस्ट किया गया था।',
  },
  {
    id: 'cgl26_06o2_q41',
    topic: 'Indian Geography',
    questionEn: 'Which of the following crop-season combinations is incorrectly matched?',
    questionHi: 'निम्नलिखित में से कौन सा फसल-मौसम संयोजन गलत सुमेलित है?',
    optionsEn: ['Rice – Kharif', 'Wheat – Rabi', 'Cotton – Zaid', 'Mustard – Rabi'],
    optionsHi: ['चावल – खरीफ', 'गेहूं – रबी', 'कपास – ज़ैद', 'सरसों – रबी'],
    correctIndex: 2,
    explanationEn:
      'Cotton is a Kharif crop (sown with the onset of monsoon in June–July and harvested in autumn/winter), NOT a Zaid crop.\n• Kharif crops: Rice, Maize, Cotton, Jowar, Bajra, Groundnut.\n• Rabi crops: Wheat, Barley, Mustard, Gram, Peas.\n• Zaid crops (March–June): Watermelon, Muskmelon, Cucumber, Vegetables.',
    explanationHi:
      'कपास (Cotton) एक खरीफ (Kharif) फसल है, न कि ज़ैद फसल। अतः “कपास – ज़ैद” गलत सुमेलित है।\n• खरीफ: चावल, कपास, मक्का, बाजरा।\n• रबी: गेहूं, सरसों, चना, जौ।\n• ज़ैद: तरबूज, खरबूजा, खीरा, ककड़ी।',
  },
  {
    id: 'cgl26_06o2_q42',
    topic: 'Indian Geography',
    questionEn:
      'Why are thermal power plants in India commonly established close to coal mining areas?',
    questionHi:
      'भारत में ताप विद्युत संयंत्र आमतौर पर कोयला खनन क्षेत्रों के निकट क्यों स्थापित किये जाते हैं?',
    optionsEn: [
      'For safety considerations',
      'To minimize water consumption',
      'To reduce environmental pollution',
      'To lower transport costs',
    ],
    optionsHi: [
      'सुरक्षा कारणों से',
      'पानी की खपत को कम करने के लिए',
      'पर्यावरण प्रदूषण को कम करने के लिए',
      'परिवहन लागत कम करने के लिए',
    ],
    correctIndex: 3,
    explanationEn:
      'Coal is a bulky, weight-losing raw material required in massive quantities by thermal power stations. Locating pit-head thermal power plants near coal mines drastically reduces heavy freight and transportation costs, while electricity can be transmitted more cheaply via power grids.',
    explanationHi:
      'कोयला एक भारी और स्थूल कच्चा माल है जिसकी ताप विद्युत संयंत्रों में अत्यधिक मात्रा में आवश्यकता होती है। कोयला खदानों के पास संयंत्र लगाने से भारी परिवहन लागत (transport costs) में बड़ी बचत होती है, जबकि बिजली को ग्रिड के माध्यम से आसानी से भेजा जा सकता है।',
  },
  {
    id: 'cgl26_06o2_q43',
    topic: 'Indian Polity',
    questionEn: 'Which amendment introduced Article 246A to the Constitution?',
    questionHi: 'किस संशोधन द्वारा संविधान में अनुच्छेद 246A जोड़ा गया?',
    optionsEn: ['100th Amendment', '101st Amendment', '97th Amendment', '99th Amendment'],
    optionsHi: ['100वां संशोधन', '101वां संशोधन', '97वां संशोधन', '99वां संशोधन'],
    correctIndex: 1,
    explanationEn:
      'The 101st Constitutional Amendment Act, 2016 introduced Article 246A to enable the Goods and Services Tax (GST) regime in India (effective from 1 July 2017).\n• 97th Amendment: Cooperative Societies\n• 99th Amendment: NJAC (struck down)\n• 100th Amendment: India–Bangladesh Land Boundary Agreement.',
    explanationHi:
      '101वें संविधान संशोधन अधिनियम, 2016 द्वारा संविधान में अनुच्छेद 246A जोड़ा गया, जिससे देश में वस्तु एवं सेवा कर (GST) लागू हुआ।\n• 97वां संशोधन: सहकारी समितियाँ\n• 99वां संशोधन: NJAC\n• 100वां संशोधन: भारत-बांग्लादेश भूमि सीमा समझौता।',
  },
  {
    id: 'cgl26_06o2_q44',
    topic: 'Modern History',
    questionEn: 'How many members constituted the Board of Control under Pitt’s India Act?',
    questionHi: 'पिट्स इंडिया एक्ट के अंतर्गत बोर्ड ऑफ कंट्रोल में कितने सदस्य होते थे?',
    optionsEn: ['Four members', 'Five members', 'Six members', 'Seven members'],
    optionsHi: ['चार सदस्य', 'पाँच सदस्य', 'छह सदस्य', 'सात सदस्य'],
    correctIndex: 2,
    explanationEn:
      'Pitt’s India Act of 1784 established a 6-member Board of Control in Britain (comprising the Chancellor of the Exchequer, a Secretary of State, and four Privy Councillors) to supervise the political and administrative affairs of the East India Company, creating a system of Dual Government.',
    explanationHi:
      'पिट्स इंडिया एक्ट, 1784 के अंतर्गत ब्रिटिश सरकार ने ईस्ट इंडिया कंपनी के राजनीतिक मामलों के नियंत्रण हेतु 6 सदस्यों वाले ‘बोर्ड ऑफ कंट्रोल’ (Board of Control) की स्थापना की थी, जिसमें एक राज्य सचिव, राजकोष का चांसलर और चार प्रिवी काउंसिलर शामिल थे।',
  },
  {
    id: 'cgl26_06o2_q45',
    topic: 'Indian Polity',
    questionEn:
      'Under which article of the Indian Constitution is it mandatory to constitute a District Planning Committee (DPC) in every State?',
    questionHi:
      'भारतीय संविधान के किस अनुच्छेद के अंतर्गत प्रत्येक राज्य में जिला योजना समिति (DPC) का गठन करना अनिवार्य है?',
    optionsEn: ['Article 243ZA', 'Article 243ZB', 'Article 243ZC', 'Article 243ZD'],
    optionsHi: ['अनुच्छेद 243ZA', 'अनुच्छेद 243ZB', 'अनुच्छेद 243ZC', 'अनुच्छेद 243ZD'],
    correctIndex: 3,
    explanationEn:
      'Article 243ZD (added by the 74th Constitutional Amendment Act, 1992) mandates the constitution of a District Planning Committee (DPC) in every state at the district level to consolidate plans prepared by Panchayats and Municipalities.\n• Article 243ZA: Elections to Municipalities\n• Article 243ZE: Committee for Metropolitan Planning.',
    explanationHi:
      '74वें संविधान संशोधन अधिनियम, 1992 द्वारा जोड़े गए अनुच्छेद 243ZD के तहत प्रत्येक राज्य में जिला स्तर पर जिला योजना समिति (District Planning Committee - DPC) का गठन अनिवार्य है, जो पंचायतों और नगरपालिकाओं की योजनाओं को समेकित करती है।',
  },
  {
    id: 'cgl26_06o2_q46',
    topic: 'Indian Polity',
    questionEn:
      'Under which article of the Indian Constitution are both Parliament and State Legislatures granted the simultaneous power to make laws with respect to Goods and Services Tax (GST)?',
    questionHi:
      'भारतीय संविधान के किस अनुच्छेद के अंतर्गत संसद और राज्य विधानमंडल दोनों को वस्तु एवं सेवा कर (GST) के संबंध में एक साथ समवर्ती रूप से कानून बनाने की शक्ति प्रदान की गई है?',
    optionsEn: ['Article 243B', 'Article 246A', 'Article 248', 'Article 254'],
    optionsHi: ['अनुच्छेद 243B', 'अनुच्छेद 246A', 'अनुच्छेद 248', 'अनुच्छेद 254'],
    correctIndex: 1,
    explanationEn:
      'Article 246A(1) grants both Parliament and every State Legislature simultaneous/concurrent power to make laws regarding Goods and Services Tax (GST). Article 246A(2) gives Parliament exclusive power over inter-State trade and commerce (IGST).',
    explanationHi:
      'संविधान का अनुच्छेद 246A संसद और राज्य विधानमंडल दोनों को वस्तु एवं सेवा कर (GST) के संबंध में एक साथ कानून बनाने की शक्ति प्रदान करता है, जबकि अंतर्राज्यीय व्यापार (IGST) पर कानून बनाने का विशेषाधिकार संसद को प्राप्त है।',
  },
  {
    id: 'cgl26_06o2_q47',
    topic: 'Indian Polity',
    questionEn:
      'Under the Constitution of India, in which list of the Seventh Schedule does “Public Order” fall?',
    questionHi: 'भारत के संविधान के अंतर्गत, सातवीं अनुसूची की किस सूची में "लोक व्यवस्था" शामिल है?',
    optionsEn: ['Residuary powers', 'Concurrent List', 'State List', 'Union List'],
    optionsHi: ['अवशिष्ट शक्तियाँ', 'समवर्ती सूची', 'राज्य सूची', 'संघ सूची'],
    correctIndex: 2,
    explanationEn:
      '“Public Order” is Entry 1 of List II (State List) in the Seventh Schedule of the Indian Constitution. “Police” is also Entry 2 of the State List.',
    explanationHi:
      'भारतीय संविधान की सातवीं अनुसूची के अंतर्गत “लोक व्यवस्था” (Public Order) राज्य सूची (State List — प्रविष्टि 1) का विषय है। “पुलिस” भी राज्य सूची (प्रविष्टि 2) में शामिल है।',
  },
  {
    id: 'cgl26_06o2_q48',
    topic: 'Polity & Law',
    questionEn:
      'A warrant is issued for execution by a private person (not a police officer). During its execution, nearby civilians voluntarily assist because the person executing the warrant is actively pursuing the accused. Which of the following statements is legally correct under the Bharatiya Nagarik Suraksha Sanhita, 2023 in India?',
    questionHi:
      'एक निजी व्यक्ति (जो पुलिस अधिकारी नहीं है) द्वारा तामील (execution) किए जाने के लिए एक वारंट जारी किया जाता है। इसके निष्पादन के दौरान, आस-पास के नागरिक स्वेच्छा से सहायता करते हैं क्योंकि वारंट का निष्पादन करने वाला व्यक्ति सक्रिय रूप से आरोपी का पीछा कर रहा है। भारत में भारतीय नागरिक सुरक्षा संहिता, 2023 (BNSS) के तहत निम्नलिखित में से कौन-सा कथन कानूनी रूप से सही है?',
    optionsEn: [
      'Civilians cannot assist because only police may execute warrants.',
      'Assistance is lawful if the person to whom the warrant is directed is near at hand and acting in execution.',
      'Civilian assistance requires prior magistrate approval.',
      'Only executive magistrates may assist in non-police warrant execution.',
    ],
    optionsHi: [
      'नागरिक सहायता नहीं कर सकते क्योंकि केवल पुलिस ही वारंट का निष्पादन कर सकती है।',
      'सहायता कानूनी रूप से मान्य है यदि वह व्यक्ति जिसे वारंट निर्देशित किया गया है, पास में ही मौजूद हो और निष्पादन का कार्य कर रहा हो।',
      'नागरिक सहायता के लिए मजिस्ट्रेट की पूर्व स्वीकृति आवश्यक है।',
      'गैर-पुलिस वारंट निष्पादन में केवल कार्यकारी मजिस्ट्रेट (Executive Magistrates) ही सहायता कर सकते हैं।',
    ],
    correctIndex: 1,
    explanationEn:
      'Under Section 32 of the Bharatiya Nagarik Suraksha Sanhita (BNSS), 2023 (corresponding to Section 38 of the old CrPC), when a warrant is directed to a person other than a police officer, any other person may legally aid in executing it if the person to whom the warrant is directed is near at hand and acting in the execution of the warrant.',
    explanationHi:
      'भारतीय नागरिक सुरक्षा संहिता (BNSS), 2023 की धारा 32 (पूर्व CrPC की धारा 38) के अनुसार, जब कोई वारंट पुलिस अधिकारी के अलावा किसी अन्य व्यक्ति को निर्देशित हो, तो अन्य नागरिक उसके निष्पादन में वैध रूप से सहायता कर सकते हैं यदि वारंट धारक व्यक्ति पास में ही मौजूद हो और निष्पादन का कार्य कर रहा हो।',
  },
  {
    id: 'cgl26_06o2_q49',
    topic: 'Indian Economy',
    questionEn:
      "Under India's economic reforms since 1991, disinvestment was undertaken mainly to achieve which of the following objectives?",
    questionHi:
      '1991 से भारत में हुए आर्थिक सुधारों के तहत, मुख्य रूप से किन उद्देश्यों को प्राप्त करने के लिए विनिवेश (disinvestment) किया गया था?',
    optionsEn: [
      'Improve financial discipline and facilitate modernisation',
      'Expand industrial licensing and increase public ownership',
      'Promote import substitution and restrict private investment',
      'Increase budgetary support and reduce market competition',
    ],
    optionsHi: [
      'वित्तीय अनुशासन में सुधार करें और आधुनिकीकरण को बढ़ावा दें।',
      'औद्योगिक लाइसेंसिंग का विस्तार करें और सार्वजनिक स्वामित्व बढ़ाएं।',
      'आयात प्रतिस्थापन को बढ़ावा दें और निजी निवेश को सीमित करें।',
      'बजट सहायता बढ़ाएं और बाज़ार में प्रतिस्पर्धा कम करें।',
    ],
    correctIndex: 0,
    explanationEn:
      'Under the 1991 Liberalisation, Privatisation and Globalisation (LPG) reforms, disinvestment (sale of part of government equity in PSUs) was undertaken primarily to improve financial discipline, encourage modernisation, bring in private capital and managerial efficiency, and reduce fiscal deficits.',
    explanationHi:
      '1991 के आर्थिक सुधारों (LPG नीति) के अंतर्गत सार्वजनिक क्षेत्र के उपक्रमों (PSUs) में विनिवेश (disinvestment) मुख्य रूप से वित्तीय अनुशासन में सुधार करने, आधुनिकीकरण को बढ़ावा देने, कार्यकुशलता बढ़ाने और राजकोषीय घाटे को कम करने के उद्देश्य से किया गया था।',
  },
  {
    id: 'cgl26_06o2_q50',
    topic: 'Physics',
    questionEn:
      'If the amplitude of an object undergoing simple harmonic motion is doubled while all other system parameters remain unchanged, how does its total mechanical energy change?',
    questionHi:
      'यदि सरल आवर्त गति कर रहे किसी पिंड का आयाम दोगुना कर दिया जाए, जबकि निकाय के अन्य सभी प्राचल अपरिवर्तित रहें, तो इसकी कुल यांत्रिक ऊर्जा किस प्रकार परिवर्तित होगी?',
    optionsEn: [
      'It remains the same',
      'It becomes twice its original value',
      'It becomes four times its original value',
      'It becomes eight times its original value',
    ],
    optionsHi: [
      'यह समान रहती है',
      'यह अपने मूल मान का दोगुना हो जाती है',
      'यह अपने मूल मान का चार गुना हो जाती है',
      'यह अपने मूल मान का आठ गुना हो जाती है',
    ],
    correctIndex: 2,
    explanationEn:
      'Formula for total mechanical energy in Simple Harmonic Motion (SHM):\nE = (1/2) k A² = (1/2) m ω² A²\nSince E ∝ A², doubling the amplitude (A → 2A) changes the total mechanical energy to:\nE′ = (2)² E = 4E (four times its original value).',
    explanationHi:
      'सरल आवर्त गति (SHM) में कुल यांत्रिक ऊर्जा का सूत्र:\nE = (1/2) k A² = (1/2) m ω² A²\nचूँकि कुल ऊर्जा E, आयाम के वर्ग (A²) के अनुक्रमानुपाती होती है, अतः आयाम दोगुना (2A) करने पर कुल यांत्रिक ऊर्जा (2)² = 4 गुना हो जाती है।',
  },
];

const SECTION_3_QUANT_O6S2: Question[] = [
  {
    id: 'cgl26_06o2_q51',
    topic: 'Mensuration 3D (Sphere)',
    questionEn: 'What is the volume of a sphere whose diameter is 56 cm?',
    questionHi: 'एक गोले का आयतन क्या है जिसका व्यास 56 सेंटीमीटर है?',
    optionsEn: ['92849.33 cm³', '86989.33 cm³', '81989.33 cm³', '91989.33 cm³'],
    optionsHi: [
      '92849.33 घन सेंटीमीटर',
      '86989.33 घन सेंटीमीटर',
      '81989.33 घन सेंटीमीटर',
      '91989.33 घन सेंटीमीटर',
    ],
    correctIndex: 3,
    explanationEn:
      'Radius r = Diameter / 2 = 56 / 2 = 28 cm.\nVolume of a sphere = (4/3)πr³\n= (4/3) × (22/7) × 28 × 28 × 28\n= (4/3) × 22 × 4 × 784\n= 275968 / 3 = 91989.33 cm³.',
    explanationHi:
      'त्रिज्या r = 56 / 2 = 28 cm।\nगोले का आयतन = (4/3)πr³\n= (4/3) × (22/7) × 28 × 28 × 28\n= 275968 / 3 = 91989.33 घन सेंटीमीटर।',
  },
  {
    id: 'cgl26_06o2_q52',
    topic: 'Mensuration 3D (Cuboid)',
    questionEn: 'The space diagonal of a cuboid with dimensions 3 cm, 4 cm, and 12 cm is:',
    questionHi:
      '3 सेंटीमीटर, 4 सेंटीमीटर और 12 सेंटीमीटर आयाम वाले घनाभ का आंतरिक विकर्ण (स्पेस डायगोनल) कितना होगा?',
    optionsEn: ['13 cm', '14 cm', '11 cm', '5 cm'],
    optionsHi: ['13 सेंटीमीटर', '14 सेंटीमीटर', '11 सेंटीमीटर', '5 सेंटीमीटर'],
    correctIndex: 0,
    explanationEn:
      'Formula for space diagonal of a cuboid: d = √(l² + b² + h²)\nd = √(3² + 4² + 12²) = √(9 + 16 + 144) = √169 = 13 cm.\n(Short trick: 3–4–5 and 5–12–13 Pythagorean triplets give 13 directly!)',
    explanationHi:
      'घनाभ के विकर्ण का सूत्र: d = √(l² + b² + h²)\nd = √(3² + 4² + 12²) = √(9 + 16 + 144) = √169 = 13 सेंटीमीटर।\n(शॉर्ट ट्रिक: पाइथागोरस त्रिक 3–4–5 और 5–12–13 से सीधे 13 प्राप्त होता है।)',
  },
  {
    id: 'cgl26_06o2_q53',
    topic: 'Mensuration 2D (Right-Angled Triangle)',
    questionEn: 'The perimeter of an isosceles right-angled triangle is 2 + √2 cm. What is its area?',
    questionHi: 'एक समद्विबाहु समकोण त्रिभुज का परिमाप 2 + √2 सेमी है। इसका क्षेत्रफल क्या है?',
    optionsEn: ['1 cm²', '0.5 cm²', '2 cm²', '3 cm²'],
    optionsHi: ['1 सेमी²', '0.5 सेमी²', '2 सेमी²', '3 सेमी²'],
    correctIndex: 1,
    explanationEn:
      'Let each equal leg of the isosceles right-angled triangle be a. Then the hypotenuse is a√2.\nPerimeter = a + a + a√2 = a(2 + √2).\nGiven a(2 + √2) = 2 + √2 ⇒ a = 1 cm.\nArea = (1/2) × a × a = (1/2) × 1 × 1 = 0.5 cm².',
    explanationHi:
      'माना समद्विबाहु समकोण त्रिभुज की प्रत्येक बराबर भुजा a है, तब कर्ण = a√2 होगा।\nपरिमाप = a + a + a√2 = a(2 + √2) = 2 + √2 ⇒ a = 1 सेमी।\nक्षेत्रफल = (1/2) × a² = (1/2) × 1² = 0.5 सेमी²।',
  },
  {
    id: 'cgl26_06o2_q54',
    topic: 'Algebra (Cubic Identities)',
    questionEn: 'If x + y = 20 and xy = 10, then find the value of x³ + y³.',
    questionHi: 'अगर x + y = 20 और xy = 10 है, तो x³ + y³ का मान ज्ञात कीजिए।',
    optionsEn: ['2100', '2500', '7100', '7400'],
    optionsHi: ['2100', '2500', '7100', '7400'],
    correctIndex: 3,
    explanationEn:
      'Using the algebraic identity: x³ + y³ = (x + y)³ − 3xy(x + y)\nSubstitute x + y = 20 and xy = 10:\nx³ + y³ = 20³ − 3(10)(20) = 8000 − 600 = 7400.',
    explanationHi:
      'सर्वसमिका: x³ + y³ = (x + y)³ − 3xy(x + y)\nx + y = 20 और xy = 10 रखने पर:\nx³ + y³ = 20³ − 3 × 10 × 20 = 8000 − 600 = 7400।',
  },
  {
    id: 'cgl26_06o2_q55',
    topic: 'Mensuration 3D (Cone)',
    questionEn:
      'What is the curved surface area of a cone with a radius of 7 cm and a slant height of 20 cm?',
    questionHi:
      '7 सेंटीमीटर त्रिज्या और 20 सेंटीमीटर तिर्यक ऊँचाई वाले शंकु का वक्र पृष्ठीय क्षेत्रफल क्या है?',
    optionsEn: ['520 cm²', '304 cm²', '340 cm²', '440 cm²'],
    optionsHi: [
      '520 वर्ग सेंटीमीटर',
      '304 वर्ग सेंटीमीटर',
      '340 वर्ग सेंटीमीटर',
      '440 वर्ग सेंटीमीटर',
    ],
    correctIndex: 3,
    explanationEn:
      'Formula for Curved Surface Area (CSA) of a cone = πrl\nCSA = (22/7) × 7 × 20 = 22 × 20 = 440 cm².',
    explanationHi:
      'शंकु का वक्र पृष्ठीय क्षेत्रफल (CSA) = πrl\n= (22/7) × 7 × 20 = 440 वर्ग सेंटीमीटर।',
  },
  {
    id: 'cgl26_06o2_q56',
    topic: 'Time, Speed & Distance',
    questionEn:
      'A person travels a certain distance at a speed of 5 km/h and completes the journey in 6 hours. If the speed is increased to 10 km/h, how much time will be taken to cover the same distance?',
    questionHi:
      'एक व्यक्ति 5 km/h की गति से एक निश्चित दूरी तय करता है और यात्रा को 6 घंटे में पूरा करता है। यदि गति बढ़ाकर 10 km/h कर दी जाए, तो समान दूरी तय करने में कितना समय लगेगा?',
    optionsEn: ['2 hours', '5 hours', '3 hours', '6 hours'],
    optionsHi: ['2 घंटे', '5 घंटे', '3 घंटे', '6 घंटे'],
    correctIndex: 2,
    explanationEn:
      'Total Distance = Speed × Time = 5 × 6 = 30 km.\nNew Time = Distance / New Speed = 30 / 10 = 3 hours.\n(Short trick: Speed doubles from 5 to 10 km/h, so time halves from 6 hours to 3 hours.)',
    explanationHi:
      'कुल दूरी = चाल × समय = 5 × 6 = 30 किमी।\nनया समय = 30 / 10 = 3 घंटे।\n(शॉर्ट ट्रिक: चाल दोगुनी होने पर समान दूरी के लिए समय आधा अर्थात् 6/2 = 3 घंटे हो जाता है।)',
  },
  {
    id: 'cgl26_06o2_q57',
    topic: 'Simplification (Continued Fraction)',
    questionEn: 'Find the value of: 2 + 1 / (1 + 1 / (1 + 1/3)).',
    questionHi: 'निम्नलिखित का मान ज्ञात कीजिए: 2 + 1 / (1 + 1 / (1 + 1/3)).',
    optionsEn: ['6/7', '13/7', '1/5', '18/7'],
    optionsHi: ['6/7', '13/7', '1/5', '18/7'],
    correctIndex: 3,
    explanationEn:
      'Solve from the bottom up:\n1. 1 + 1/3 = 4/3\n2. 1 / (4/3) = 3/4\n3. 1 + 3/4 = 7/4\n4. 1 / (7/4) = 4/7\n5. 2 + 4/7 = (14 + 4) / 7 = 18/7.',
    explanationHi:
      'नीचे से ऊपर की ओर हल करने पर:\n1. 1 + 1/3 = 4/3 ⇒ व्युत्क्रम = 3/4\n2. 1 + 3/4 = 7/4 ⇒ व्युत्क्रम = 4/7\n3. 2 + 4/7 = 18/7।',
  },
  {
    id: 'cgl26_06o2_q58',
    topic: 'Surds & Indices',
    questionEn: 'If √(7ⁿ) = 343, then the value of n is:',
    questionHi: 'यदि √(7ⁿ) = 343, तो n का मान है:',
    optionsEn: ['3', '8', '6', '5'],
    optionsHi: ['3', '8', '6', '5'],
    correctIndex: 2,
    explanationEn:
      'Rewrite both sides as powers of 7:\n√(7ⁿ) = 7^(n/2) and 343 = 7³.\nEquating exponents: n/2 = 3 ⇒ n = 6.\n(Alternatively, squaring both sides: 7ⁿ = (7³)² = 7⁶ ⇒ n = 6.)',
    explanationHi:
      'दोनों पक्षों का वर्ग करने पर:\n7ⁿ = 343² = (7³)² = 7⁶।\nआधार समान होने पर घातों की तुलना से n = 6 प्राप्त होता है।',
  },
  {
    id: 'cgl26_06o2_q59',
    topic: 'Number System (Divisibility Rules)',
    questionEn:
      'If the 6-digit number 5z3x4y is divisible by 7, 11, and 13, find the value of (x + y − z).',
    questionHi:
      'यदि 6-अंकीय संख्या 5z3x4y, 7, 11 और 13 से विभाज्य है, तो (x + y − z) का मान ज्ञात कीजिए।',
    optionsEn: ['3', '2', '1', '4'],
    optionsHi: ['3', '2', '1', '4'],
    correctIndex: 3,
    explanationEn:
      'Key rule: LCM(7, 11, 13) = 7 × 11 × 13 = 1001.\nAny 6-digit number divisible by 1001 always has the repeating 3-digit structure abcabc.\nComparing 5z3 and x4y:\n• x = 5, z = 4, y = 3 (number is 543543).\nTherefore, (x + y − z) = 5 + 3 − 4 = 4.',
    explanationHi:
      'महत्वपूर्ण नियम: 7 × 11 × 13 = 1001। 1001 से विभाज्य कोई भी 6-अंकीय संख्या सदैव abcabc के रूप में होती है।\n5z3 और x4y की तुलना करने पर: x = 5, z = 4, y = 3 (संख्या = 543543)।\nअतः (x + y − z) = 5 + 3 − 4 = 4।',
  },
  {
    id: 'cgl26_06o2_q60',
    topic: 'Geometry (Centroid of a Triangle)',
    questionEn:
      'In △XYZ, G is the centroid and ZM is a median. If the segment GZ is 6 cm, what is the total length of the median ZM?',
    questionHi:
      '△XYZ में, G केंद्रक (centroid) है और ZM एक माध्यिका (median) है। यदि रेखाखंड (segment) GZ की लंबाई 6 cm है, तो माध्यिका ZM की कुल लंबाई क्या है?',
    optionsEn: ['9 cm', '5 cm', '2 cm', '10 cm'],
    optionsHi: ['9 cm', '5 cm', '2 cm', '10 cm'],
    correctIndex: 0,
    explanationEn:
      'The centroid G divides a median from the vertex to the midpoint of the opposite side in the ratio 2 : 1.\nHere, ZG : GM = 2 : 1 ⇒ 2 parts = 6 cm ⇒ 1 part = 3 cm.\nTotal length of median ZM = 3 parts = 3 × 3 = 9 cm.',
    explanationHi:
      'केंद्रक G किसी माध्यिका को शीर्ष से विपरीत भुजा की ओर 2 : 1 के अनुपात में विभाजित करता है।\nअतः ZG : GM = 2 : 1 ⇒ 2 भाग = 6 cm ⇒ 1 भाग = 3 cm।\nमाध्यिका ZM की कुल लंबाई = 6 + 3 = 9 cm।',
  },
  {
    id: 'cgl26_06o2_q61',
    topic: 'Number System (Prime Numbers)',
    questionEn: 'How many prime numbers p exist such that 120 < p < 150?',
    questionHi: 'ऐसी कितनी अभाज्य संख्याएँ p हैं जिनके लिए 120 < p < 150?',
    optionsEn: ['4', '7', '5', '6'],
    optionsHi: ['4', '7', '5', '6'],
    correctIndex: 2,
    explanationEn:
      'Listing all prime numbers strictly between 120 and 150 (checking divisibility by primes ≤ 11, i.e., 2, 3, 5, 7, 11):\n127, 131, 137, 139, 149.\n(Note: 121 = 11², 133 = 7 × 19, 143 = 11 × 13.)\nHence, there are exactly 5 prime numbers.',
    explanationHi:
      '120 और 150 के बीच स्थित सभी अभाज्य संख्याएँ:\n127, 131, 137, 139, 149।\n(ध्यान दें: 121 = 11×11, 133 = 7×19, 143 = 11×13 भाज्य हैं।)\nअतः कुल 5 अभाज्य संख्याएँ हैं।',
  },
  {
    id: 'cgl26_06o2_q62',
    topic: 'Time, Speed & Distance (Meeting Time)',
    questionEn:
      'Ram and Shyam start moving simultaneously from points A and B toward each other at 9:00 a.m. After they cross paths, Ram takes 80 minutes to reach point B and Shyam takes 45 minutes to reach point A. At what specific time did they meet?',
    questionHi:
      'राम और श्याम सुबह 9:00 बजे, बिंदु A और B से एक ही समय पर एक-दूसरे की ओर चलना शुरू करते हैं। एक-दूसरे को पार करने के बाद, राम को बिंदु B तक पहुँचने में 80 मिनट और श्याम को बिंदु A तक पहुँचने में 45 मिनट लगते हैं। वे ठीक किस समय मिले?',
    optionsEn: ['9 : 30 am', '10 : 00 am', '10 : 30 am', '11 : 00 am'],
    optionsHi: ['9 : 30 am', '10 : 00 am', '10 : 30 am', '11 : 00 am'],
    correctIndex: 1,
    explanationEn:
      'Standard Short Trick: If two persons start simultaneously toward each other and take t₁ and t₂ time respectively to reach the opposite ends after crossing, the time taken to meet is:\nt = √(t₁ × t₂) = √(80 × 45) = √3600 = 60 minutes = 1 hour.\nStarting at 9:00 a.m., they met at 9:00 a.m. + 1 hour = 10:00 a.m.',
    explanationHi:
      'मानक शॉर्ट ट्रिक: एक ही समय पर एक-दूसरे की ओर चलकर मिलने के बाद शेष दूरी तय करने में क्रमशः t₁ और t₂ समय लगे, तो मिलने का समय:\nt = √(t₁ × t₂) = √(80 × 45) = √3600 = 60 मिनट = 1 घंटा।\nअतः वे सुबह 9:00 + 1 घंटा = 10:00 बजे (10 : 00 am) मिले।',
  },
  {
    id: 'cgl26_06o2_q63',
    topic: 'Time & Work',
    questionEn:
      'A can complete a certain work alone in 10 days, while B can complete the same work in 5 days. They work together for 2 days, after which B leaves and C joins A. A and C then complete the remaining work in 3 days. Find the number of days C would take to complete 40% of the work if working alone.',
    questionHi:
      'A अकेले एक निश्चित काम को 10 दिनों में पूरा कर सकता है, जबकि B उसी काम को 5 दिनों में पूरा कर सकता है। वे 2 दिनों तक साथ मिलकर काम करते हैं, जिसके बाद B काम छोड़कर चला जाता है और C, A के साथ जुड़ जाता है। फिर A और C मिलकर बचे हुए काम को 3 दिनों में पूरा करते हैं। ज्ञात कीजिए कि यदि C अकेले काम करे, तो उसे काम का 40% हिस्सा पूरा करने में कितने दिन लगेंगे।',
    optionsEn: ['8 days', '10 days', '12 days', '16 days'],
    optionsHi: ['8 दिन', '10 दिन', '12 दिन', '16 दिन'],
    correctIndex: 2,
    explanationEn:
      'Let Total Work = 30 units (multiple of LCM(10, 5) = 10).\n• A’s efficiency = 30 / 10 = 3 units/day; B’s efficiency = 30 / 5 = 6 units/day.\n• Work done by A and B in 2 days = 2 × (3 + 6) = 18 units.\n• Remaining work = 30 − 18 = 12 units.\n• A and C complete 12 units in 3 days ⇒ (A + C) = 12 / 3 = 4 units/day.\n• C’s efficiency = 4 − 3 = 1 unit/day (so C alone takes 30 days for 100% work).\n• Time for C to do 40% of work = 40% of 30 = 12 days.',
    explanationHi:
      'माना कुल कार्य = 30 इकाई।\n• A की क्षमता = 3 इकाई/दिन; B की क्षमता = 6 इकाई/दिन।\n• 2 दिनों में (A + B) का कार्य = 2 × 9 = 18 इकाई ⇒ शेष कार्य = 30 − 18 = 12 इकाई।\n• (A + C) शेष 12 इकाई 3 दिनों में करते हैं ⇒ A + C = 4 इकाई/दिन ⇒ C की क्षमता = 4 − 3 = 1 इकाई/दिन।\n• कुल कार्य का 40% = 12 इकाई ⇒ C अकेले इसे 12 / 1 = 12 दिनों में पूरा करेगा।',
  },
  {
    id: 'cgl26_06o2_q64',
    topic: 'Trigonometry',
    questionEn:
      'Find the value of θ (0° < θ < 90°) if (cos θ) / (1 − sin θ) + (cos θ) / (1 + sin θ) = 4.',
    questionHi:
      'θ (0° < θ < 90°) का मान ज्ञात कीजिए, यदि (cos θ) / (1 − sin θ) + (cos θ) / (1 + sin θ) = 4 हो।',
    optionsEn: ['30°', '45°', '60°', '75°'],
    optionsHi: ['30°', '45°', '60°', '75°'],
    correctIndex: 2,
    explanationEn:
      'Take LCM of the denominators:\n[cos θ (1 + sin θ) + cos θ (1 − sin θ)] / (1 − sin² θ) = 4\n⇒ (2 cos θ) / cos² θ = 4\n⇒ 2 / cos θ = 4 ⇒ cos θ = 1/2.\nFor 0° < θ < 90°, cos 60° = 1/2 ⇒ θ = 60°.',
    explanationHi:
      'ल.स.प. (LCM) लेने पर:\n[cos θ(1 + sin θ) + cos θ(1 − sin θ)] / (1 − sin² θ) = 4\n⇒ (2 cos θ) / cos² θ = 4 ⇒ 2 / cos θ = 4 ⇒ cos θ = 1/2।\nचूँकि 0° < θ < 90°, अतः θ = 60°।',
  },
  {
    id: 'cgl26_06o2_q65',
    topic: 'Heights & Distances',
    questionEn:
      'A vertical tower stands on a horizontal plane and is surmounted by a vertical flagstaff of height 6 m. At a point on the plane, the angle of elevation of the bottom of the flagstaff is 45° and that of the top of the flagstaff is 60°. Find the height of the tower.',
    questionHi:
      'एक ऊर्ध्वाधर मीनार एक क्षैतिज समतल पर खड़ी है और उसके ऊपर 6 m ऊँचा एक ऊर्ध्वाधर ध्वजदण्ड लगा हुआ है। समतल पर स्थित एक बिंदु से ध्वजदण्ड के निचले सिरे का उन्नयन कोण 45° तथा ध्वजदण्ड के ऊपरी सिरे का उन्नयन कोण 60° है। मीनार की ऊँचाई ज्ञात कीजिए।',
    optionsEn: ['4(√3 + 1) m', '2(√3 + 1) m', '(3/√3 + 1) m', '3(√3 + 1) m'],
    optionsHi: ['4(√3 + 1) m', '2(√3 + 1) m', '(3/√3 + 1) m', '3(√3 + 1) m'],
    correctIndex: 3,
    explanationEn:
      'Let the height of the tower be h and the horizontal distance from the observation point be d.\n• From 45° triangle: tan 45° = h / d = 1 ⇒ d = h.\n• From 60° triangle: tan 60° = (h + 6) / d = √3 ⇒ (h + 6) / h = √3.\n⇒ h(√3 − 1) = 6 ⇒ h = 6 / (√3 − 1).\nRationalizing: h = 6(√3 + 1) / (3 − 1) = 3(√3 + 1) m.',
    explanationHi:
      'माना मीनार की ऊँचाई h और आधार से बिंदु की दूरी d है।\n• tan 45° = h / d = 1 ⇒ d = h।\n• tan 60° = (h + 6) / h = √3 ⇒ h(√3 − 1) = 6।\nपरिमेयीकरण करने पर: h = 6(√3 + 1) / (3 − 1) = 3(√3 + 1) m।',
  },
  {
    id: 'cgl26_06o2_q66',
    topic: 'Trigonometry',
    questionEn: 'If tan θ = √5, find the value of (cosec² θ + sec² θ) / (cosec² θ − sec² θ).',
    questionHi: 'यदि tan θ = √5, तो (cosec² θ + sec² θ) / (cosec² θ − sec² θ) का मान ज्ञात कीजिए।',
    optionsEn: ['3/2', '−4/5', '−3/2', '4/5'],
    optionsHi: ['3/2', '−4/5', '−3/2', '4/5'],
    correctIndex: 2,
    explanationEn:
      'Given tan θ = √5 ⇒ tan² θ = 5 and cot² θ = 1/5.\nMethod 1 (Identities):\n• sec² θ = 1 + tan² θ = 1 + 5 = 6\n• cosec² θ = 1 + cot² θ = 1 + 1/5 = 6/5\nExpression = (6/5 + 6) / (6/5 − 6) = (36/5) / (−24/5) = −3/2.\nShort Trick: (cosec² θ + sec² θ) / (cosec² θ − sec² θ) = (1 + tan² θ) / (1 − tan² θ) = (1 + 5) / (1 − 5) = 6 / (−4) = −3/2.',
    explanationHi:
      'दिया है tan θ = √5 ⇒ tan² θ = 5।\nशॉर्ट ट्रिक: (cosec² θ + sec² θ) / (cosec² θ − sec² θ) = (1 + tan² θ) / (1 − tan² θ)\n= (1 + 5) / (1 − 5) = 6 / (−4) = −3/2।',
  },
  {
    id: 'cgl26_06o2_q67',
    topic: 'Algebra (Surds & Rationalization)',
    questionEn: 'Given x = 1 / (2 − √3), find the value of x − 1/x.',
    questionHi: 'यदि x = 1 / (2 − √3), तो x − 1/x का मान ज्ञात कीजिए।',
    optionsEn: ['2√3', '√3', '5√3', '√2'],
    optionsHi: ['2√3', '√3', '5√3', '√2'],
    correctIndex: 0,
    explanationEn:
      'Rationalize x:\nx = 1 / (2 − √3) = (2 + √3) / (4 − 3) = 2 + √3.\nAnd 1/x = 2 − √3.\nTherefore, x − 1/x = (2 + √3) − (2 − √3) = 2√3.',
    explanationHi:
      'x का परिमेयीकरण करने पर:\nx = (2 + √3) / (2² − (√3)²) = 2 + √3, तथा 1/x = 2 − √3।\nअतः x − 1/x = (2 + √3) − (2 − √3) = 2√3।',
  },
  {
    id: 'cgl26_06o2_q68',
    topic: 'Geometry (Circle Chords)',
    questionEn:
      'Two equal parallel chords of a circle lie on opposite sides of the centre. The perpendicular distance between the chords is 6 cm. If the radius of the circle is 5 cm, find the length of each chord (in cm).',
    questionHi:
      'एक वृत्त में केंद्र के विपरीत दिशाओं में दो समान समानांतर जीवाएँ स्थित हैं। जीवाओं के बीच की लंबवत दूरी 6 cm है। यदि वृत्त की त्रिज्या 5 cm है, तो प्रत्येक जीवा की लंबाई (cm में) ज्ञात कीजिए।',
    optionsEn: ['8 cm', '10 cm', '12 cm', '16 cm'],
    optionsHi: ['8 cm', '10 cm', '12 cm', '16 cm'],
    correctIndex: 0,
    explanationEn:
      'Equal chords of a circle are equidistant from the centre.\nSince they lie on opposite sides and are 6 cm apart, each chord is at distance d = 6 / 2 = 3 cm from the centre.\nUsing Pythagoras theorem (triplet 3–4–5):\nHalf-chord = √(r² − d²) = √(5² − 3²) = √16 = 4 cm.\nLength of each chord = 2 × 4 = 8 cm.',
    explanationHi:
      'वृत्त की समान जीवाएँ केंद्र से समान दूरी पर होती हैं। केंद्र के विपरीत दिशा में होने के कारण प्रत्येक जीवा की केंद्र से दूरी = 6 / 2 = 3 cm।\nपाइथागोरस प्रमेय (त्रिक 3–4–5) से आधी जीवा = √(5² − 3²) = 4 cm।\nअतः प्रत्येक जीवा की लंबाई = 2 × 4 = 8 cm।',
  },
  {
    id: 'cgl26_06o2_q69',
    topic: 'Mensuration 3D (Hemisphere & Sphere)',
    questionEn:
      "The volume of a hemispherical bowl is 718 2/3 cm³. A sphere is dropped into it such that the sphere's diameter is equal to the bowl's diameter. How much volume of the sphere remains outside the bowl? (Use π = 22/7)",
    questionHi:
      'एक अर्द्धगोलीय कटोरे (hemispherical bowl) का आयतन 718 2/3 cm³ है। इसमें एक गोला (sphere) इस प्रकार डाला जाता है कि गोले का व्यास कटोरे के व्यास के बराबर है। गोले का कितना आयतन कटोरे के बाहर रहता है? (π = 22/7 का प्रयोग करें)',
    optionsEn: ['811 2/3 cm³', '820 1/3 cm³', '718 2/3 cm³', '732 1/3 cm³'],
    optionsHi: ['811 2/3 cm³', '820 1/3 cm³', '718 2/3 cm³', '732 1/3 cm³'],
    correctIndex: 2,
    explanationEn:
      'Short Trick (Zero calculation needed!):\nBoth the sphere and the hemispherical bowl have the same diameter (and hence the same radius r).\n• Volume of sphere = (4/3)πr³ = 2 × Volume of hemisphere.\n• Exactly half of the sphere fits completely inside the hemispherical bowl, leaving the other half outside.\n• Volume remaining outside = Volume of hemispherical bowl = 718 2/3 cm³.',
    explanationHi:
      'शॉर्ट ट्रिक (बिना किसी लंबी गणना के):\nचूँकि गोले और अर्द्धगोलीय कटोरे का व्यास (अतः त्रिज्या r) समान है, इसलिए गोले का ठीक आधा भाग कटोरे के भीतर समा जाएगा और ठीक आधा भाग बाहर रहेगा।\nअतः बाहर रहने वाला आयतन = अर्द्धगोलीय कटोरे का आयतन = 718 2/3 cm³।',
  },
  {
    id: 'cgl26_06o2_q70',
    topic: 'Geometry (Tangents to a Circle)',
    questionEn:
      'If the angle between two tangents drawn from a point P to a circle of radius 3 cm is 60°, what is the length of each tangent?',
    questionHi:
      'यदि किसी बिंदु P से 3 cm त्रिज्या वाले एक वृत्त पर खींची गई दो स्पर्श रेखाओं के बीच का कोण 60° है, तो प्रत्येक स्पर्श रेखा की लंबाई क्या है?',
    optionsEn: ['3√3 cm', '5 cm', '4√2 cm', '7 cm'],
    optionsHi: ['3√3 cm', '5 cm', '4√2 cm', '7 cm'],
    correctIndex: 0,
    explanationEn:
      'Let O be the centre and PA, PB be the two tangents. The line OP bisects ∠APB = 60°, so ∠APO = 30°.\nSince radius OA ⊥ tangent PA (∠OAP = 90°), in right △OAP:\ntan 30° = OA / PA ⇒ 1 / √3 = 3 / PA ⇒ PA = 3√3 cm.',
    explanationHi:
      'केंद्र O से बिंदु P को मिलाने वाली रेखा स्पर्श रेखाओं के बीच के 60° कोण को समद्विभाजित करती है (∠APO = 30°)।\nसमकोण △OAP में (त्रिज्या ⊥ स्पर्श रेखा):\ntan 30° = OA / PA ⇒ 1/√3 = 3 / PA ⇒ PA = 3√3 cm।',
  },
  {
    id: 'cgl26_06o2_q71',
    topic: 'Clocks & Angle Measurement (Radians)',
    questionEn: 'The hour hand of a clock moves from 3:00 to 7:00. What angle does it sweep in radians?',
    questionHi: 'घड़ी की घंटे वाली सुई 3:00 से 7:00 तक चलती है। यह रेडियन में कौन-सा कोण बनाती है?',
    optionsEn: ['2π/3 radians', 'π/3 radians', '2π/7 radians', 'π/7 radians'],
    optionsHi: ['2π/3 रेडियन', 'π/3 रेडियन', '2π/7 रेडियन', 'π/7 रेडियन'],
    correctIndex: 0,
    explanationEn:
      'In 12 hours, the hour hand sweeps 2π radians (360°), i.e., 30° = π/6 radians per hour.\nFrom 3:00 to 7:00 = 4 hours.\nAngle swept = 4 × (π/6) = 2π/3 radians (= 120°).',
    explanationHi:
      'घंटे की सुई 12 घंटे में 2π रेडियन (360°) घूमती है, अर्थात् 1 घंटे में π/6 रेडियन (30°)।\n3:00 से 7:00 तक = 4 घंटे।\nअतः बना कोण = 4 × (π/6) = 2π/3 रेडियन (120°)।',
  },
  {
    id: 'cgl26_06o2_q72',
    topic: 'Time & Work',
    questionEn:
      "Three friends, namely Krish, John and Leena, can do a particular work with equal efficiency. Krish works 'x' hours a day for 'x' days and then stops working. Then, John works 'y' hours a day for 'y' days. Then, Leena works 16 hours a day for 16 days and finally the work gets completed. Now, Leena alone can complete the work in 29 days by working 16 hours each day. If Krish, John and Leena together start doing the work with their respective per day working hours as mentioned, in how many days will the work be done (approximately)?\n[Consider both 'x' and 'y' are integers]",
    questionHi:
      'तीन मित्र, क्रिश, जॉन और लीना, किसी विशेष कार्य को समान दक्षता से कर सकते हैं। क्रिश प्रतिदिन ‘x’ घंटे कार्य करता है और ‘x’ दिनों तक कार्य करने के बाद कार्य बंद कर देता है। इसके बाद जॉन प्रतिदिन ‘y’ घंटे कार्य करता है और ‘y’ दिनों तक कार्य करता है। फिर लीना प्रतिदिन 16 घंटे कार्य करती है और 16 दिनों तक कार्य करने के बाद अंततः कार्य पूरा हो जाता है। अब यह दिया गया है कि लीना अकेले उसी कार्य को प्रतिदिन 16 घंटे कार्य करके 29 दिनों में पूरा कर सकती है। यदि क्रिश, जॉन और लीना अपने-अपने प्रतिदिन कार्य-घंटों के अनुसार एक साथ कार्य शुरू करें, तो लगभग कितने दिनों में कार्य पूरा होगा?\n(मान लीजिए कि ‘x’ और ‘y’ दोनों पूर्णांक हैं)',
    optionsEn: ['11', '13', '15', '16'],
    optionsHi: ['11', '13', '15', '16'],
    correctIndex: 1,
    explanationEn:
      'Since all three have equal efficiency (say 1 unit/hour):\n• Total Work = 29 × 16 = 464 person-hours.\n• Given: x² + y² + 16² = 464 ⇒ x² + y² = 464 − 256 = 208.\n• Since x and y are positive integers, testing squares ≤ 208 yields a unique pair: 12² + 8² = 144 + 64 = 208 ⇒ {x, y} = {12, 8}.\n• Combined daily work when all three work together = x + y + 16 = 12 + 8 + 16 = 36 hours/day.\n• Required days = 464 / 36 = 116 / 9 ≈ 12.89 ≈ 13 days.',
    explanationHi:
      'तीनों की दक्षता समान (1 इकाई/घंटा) मानने पर:\n• कुल कार्य = 29 × 16 = 464 घंटे।\n• प्रश्नानुसार: x² + y² + 16² = 464 ⇒ x² + y² = 464 − 256 = 208।\n• पूर्णांक हल: 12² + 8² = 144 + 64 = 208 ⇒ x + y = 12 + 8 = 20।\n• तीनों के एक साथ काम करने पर प्रतिदिन कार्य = 20 + 16 = 36 घंटे/दिन।\n• कुल समय = 464 / 36 = 12.89 ≈ 13 दिन।',
  },
  {
    id: 'cgl26_06o2_q73',
    topic: 'Algebra',
    questionEn: 'If a² + b² = 57 and ab = 16, what is the absolute value of a − b?',
    questionHi: 'यदि a² + b² = 57 और ab = 16 है, तो a − b का निरपेक्ष मान क्या होगा?',
    optionsEn: ['5', '57', '9', '73'],
    optionsHi: ['5', '57', '9', '73'],
    correctIndex: 0,
    explanationEn:
      'Using the identity: (a − b)² = a² + b² − 2ab\n= 57 − 2(16) = 57 − 32 = 25.\nTaking the absolute value: |a − b| = √25 = 5.',
    explanationHi:
      'सर्वसमिका: (a − b)² = a² + b² − 2ab\n= 57 − 2(16) = 57 − 32 = 25।\nअतः |a − b| = √25 = 5।',
  },
  {
    id: 'cgl26_06o2_q74',
    topic: 'Number System (Recurring Decimals)',
    questionEn:
      'Express the recurring decimal 0.416̄ (i.e., 0.41666...) as a fraction in its lowest terms.',
    questionHi:
      'आवर्ती दशमलव 0.416̄ (अर्थात, 0.41666...) को इसके सरलतम रूप में एक भिन्न के रूप में व्यक्त कीजिए।',
    optionsEn: ['41/99', '5/12', '41/90', '41/100'],
    optionsHi: ['41/99', '5/12', '41/90', '41/100'],
    correctIndex: 1,
    explanationEn:
      'Short Trick for mixed recurring decimals:\n0.416̄ = (Complete number − Non-repeating part) / (One 9 for repeating digit, two 0s for two non-repeating digits)\n= (416 − 41) / 900 = 375 / 900.\nDivide numerator and denominator by 75: 375 / 900 = 5/12.',
    explanationHi:
      'मिश्रित आवर्ती दशमलव की शॉर्ट ट्रिक:\n0.416̄ = (416 − 41) / 900 = 375 / 900।\nअंश और हर को 75 से विभाजित करने पर: 5/12।',
  },
  {
    id: 'cgl26_06o2_q75',
    topic: 'Geometry (Common Tangents)',
    questionEn:
      'Two circles with radii 6 cm and 3 cm have their centers 15 cm apart. How many common tangents can be drawn to these circles?',
    questionHi:
      '6 सेंटीमीटर और 3 सेंटीमीटर त्रिज्या वाले दो वृत्तों के केंद्र एक-दूसरे से 15 सेंटीमीटर की दूरी पर हैं। इन वृत्तों पर कितनी उभयनिष्ठ स्पर्श रेखाएँ खींची जा सकती हैं?',
    optionsEn: ['2', '4', '1', '5'],
    optionsHi: ['2', '4', '1', '5'],
    correctIndex: 1,
    explanationEn:
      'Sum of radii: r₁ + r₂ = 6 + 3 = 9 cm.\nDistance between centers: d = 15 cm.\nSince d > r₁ + r₂ (15 > 9), the two circles lie completely outside each other without touching or intersecting.\nTherefore, 4 common tangents (2 direct common tangents + 2 transverse common tangents) can be drawn.',
    explanationHi:
      'दोनों त्रिज्याओं का योग r₁ + r₂ = 6 + 3 = 9 cm, जबकि केंद्रों के बीच की दूरी d = 15 cm है।\nचूँकि d > r₁ + r₂, दोनों वृत्त एक-दूसरे से पूर्णतः अलग (बाहर) स्थित हैं।\nअतः इन पर कुल 4 उभयनिष्ठ स्पर्श रेखाएँ (2 अनुस्पर्शी + 2 तिर्यक स्पर्श रेखाएँ) खींची जा सकती हैं।',
  },
];

const RC_PASSAGE_O6S2 = `In the landscape of modern education, the choice between Arts, Commerce, and Science is not merely academic; it profoundly influences professional trajectories. Each stream offers a spectrum of career opportunities, responding to the evolving demands of the global economy.

The Arts stream, traditionally associated with creativity and critical thinking, leads to professions in journalism, law, international relations, and public policy. Graduates often assume roles such as content strategists, political analysts, legal advisors, and communication specialists. With interdisciplinary skills, Arts students increasingly permeate sectors once reserved for technical expertise, such as business consulting and digital marketing.

Commerce, characterized by its focus on trade, finance, and business management, offers access to careers in banking, corporate law, investment analysis, and entrepreneurship. Posts like chartered accountants, financial advisors, auditors, and marketing managers are quintessential to this domain. In an age of globalization, commerce graduates are pivotal to driving economic innovation and regulatory compliance.

Meanwhile, the Science stream remains the cornerstone of technological advancement and empirical research. From engineering and medicine to data science and biotechnology, science graduates occupy posts like research scientists, software developers, environmental consultants, and healthcare practitioners. Moreover, interdisciplinary branches such as AI and environmental engineering illustrate how scientific expertise continually adapts to societal needs.

While each field traditionally attracted distinct student profiles, contemporary career landscapes increasingly value hybrid skill sets. Thus, a student’s ability to integrate analytical rigor with creative and managerial acumen often defines success, blurring the once rigid lines between Arts, Commerce, and Science.`;

const SECTION_4_ENGLISH_O6S2: Question[] = [
  {
    id: 'cgl26_06o2_q76',
    topic: 'Reading Comprehension (Voice)',
    passageEn: RC_PASSAGE_O6S2,
    questionEn:
      'Identify the correct transformation of this sentence into passive voice:\n"Commerce offers access to careers in banking, corporate law, investment analysis, and entrepreneurship."',
    questionHi:
      'Identify the correct transformation of this sentence into passive voice:\n"Commerce offers access to careers in banking, corporate law, investment analysis, and entrepreneurship."',
    optionsEn: [
      'Careers are accessed in banking, corporate law, investment analysis, and entrepreneurship by Commerce.',
      'Careers in banking, corporate law, investment analysis, and entrepreneurship are offered by Commerce.',
      'Careers are banking, corporate law, investment analysis, and entrepreneurship are offered by Commerce.',
      'Careers are offering commerce access in banking, corporate law, investment analysis, and entrepreneurship.',
    ],
    optionsHi: [
      'Careers are accessed in banking, corporate law, investment analysis, and entrepreneurship by Commerce.',
      'Careers in banking, corporate law, investment analysis, and entrepreneurship are offered by Commerce.',
      'Careers are banking, corporate law, investment analysis, and entrepreneurship are offered by Commerce.',
      'Careers are offering commerce access in banking, corporate law, investment analysis, and entrepreneurship.',
    ],
    correctIndex: 1,
    explanationEn:
      'The active sentence is in the Simple Present Tense ("offers" → V1 + s). Its passive voice structure is: Subject (plural) + are + V3 ("offered") + by + Agent ("Commerce"). Option (B) correctly preserves the meaning and passive grammar; (A) changes the main verb to "accessed", (C) repeats "are" ungrammatically, and (D) stays in active continuous voice.',
    explanationHi:
      'यह वाक्य Simple Present Tense ("offers") में है, जिसका Passive Voice रूप "are + V3 (offered) + by Commerce" होता है। विकल्प (B) व्याकरण और अर्थ की दृष्टि से बिल्कुल सही है।',
  },
  {
    id: 'cgl26_06o2_q77',
    topic: 'Reading Comprehension (Grammar)',
    passageEn: RC_PASSAGE_O6S2,
    questionEn:
      'Choose the option where the use of the relative pronoun is grammatically incorrect.',
    questionHi:
      'Choose the option where the use of the relative pronoun is grammatically incorrect.',
    optionsEn: [
      'Graduates who pursue interdisciplinary skills are highly valued.',
      'Posts which involve financial planning require precision.',
      'Students whom excel at both analysis and creativity are rare.',
      'Professionals whose expertise spans multiple domains are in demand.',
    ],
    optionsHi: [
      'Graduates who pursue interdisciplinary skills are highly valued.',
      'Posts which involve financial planning require precision.',
      'Students whom excel at both analysis and creativity are rare.',
      'Professionals whose expertise spans multiple domains are in demand.',
    ],
    correctIndex: 2,
    explanationEn:
      'In Option (C), the relative pronoun acts as the subject of the verb "excel". Therefore, the subjective case "who" must be used instead of the objective case "whom" ("Students who excel..."). All other options use who, which, and whose correctly.',
    explanationHi:
      'विकल्प (C) में क्रिया "excel" के कर्ता (subject) के रूप में subjective pronoun "who" का प्रयोग होना चाहिए, न कि objective pronoun "whom" का। अतः सही वाक्य "Students who excel..." होगा।',
  },
  {
    id: 'cgl26_06o2_q78',
    topic: 'Reading Comprehension (Vocabulary)',
    passageEn: RC_PASSAGE_O6S2,
    questionEn: 'Choose the word that is closest in meaning to "permeate" as used in the passage.',
    questionHi: 'Choose the word that is closest in meaning to "permeate" as used in the passage.',
    optionsEn: ['Exclude', 'Spread', 'Conceal', 'Defeat'],
    optionsHi: ['Exclude', 'Spread', 'Conceal', 'Defeat'],
    correctIndex: 1,
    explanationEn:
      '"Permeate" means to spread throughout or penetrate every part of something. In the passage, "Arts students increasingly permeate sectors once reserved for technical expertise" means they are spreading/expanding into those sectors.',
    explanationHi:
      '"Permeate" का अर्थ होता है किसी क्षेत्र में व्याप्त होना या फैल जाना (Spread)। गद्यांश के संदर्भ में इसका अर्थ है कि कला (Arts) के छात्र अब तकनीकी क्षेत्रों में भी फैल रहे हैं।',
  },
  {
    id: 'cgl26_06o2_q79',
    topic: 'Reading Comprehension (Vocabulary)',
    passageEn: RC_PASSAGE_O6S2,
    questionEn:
      'In the phrase "interdisciplinary branches," what does "interdisciplinary" most nearly mean?',
    questionHi:
      'In the phrase "interdisciplinary branches," what does "interdisciplinary" most nearly mean?',
    optionsEn: [
      'Related to one subject only',
      'Combining multiple areas of study',
      'Opposing different disciplines',
      'Excluding sciences and arts',
    ],
    optionsHi: [
      'Related to one subject only',
      'Combining multiple areas of study',
      'Opposing different disciplines',
      'Excluding sciences and arts',
    ],
    correctIndex: 1,
    explanationEn:
      'The prefix "inter-" means "between/among" and "disciplinary" refers to academic fields/branches of knowledge. Thus, "interdisciplinary" means combining or involving two or more academic areas of study (e.g., AI, environmental engineering).',
    explanationHi:
      '"Interdisciplinary" (अंतर्विषयक) का अर्थ है विभिन्न अध्ययन क्षेत्रों या विषयों का संयोजन (Combining multiple areas of study)।',
  },
  {
    id: 'cgl26_06o2_q80',
    topic: 'Reading Comprehension (Main Idea)',
    passageEn: RC_PASSAGE_O6S2,
    questionEn: 'Which of the following best reflects the main idea of the passage?',
    questionHi: 'Which of the following best reflects the main idea of the passage?',
    optionsEn: [
      'Science students have better career options than Arts students.',
      'Arts, Commerce, and Science fields are now overlapping, and hybrid skills are becoming important.',
      'Commerce dominates the modern economy.',
      'Career paths have remained rigidly tied to educational streams.',
    ],
    optionsHi: [
      'Science students have better career options than Arts students.',
      'Arts, Commerce, and Science fields are now overlapping, and hybrid skills are becoming important.',
      'Commerce dominates the modern economy.',
      'Career paths have remained rigidly tied to educational streams.',
    ],
    correctIndex: 1,
    explanationEn:
      'While the passage outlines career options in Arts, Commerce, and Science, its central thesis—especially in the concluding paragraph—is that the once rigid lines between these three streams are blurring and contemporary careers increasingly reward hybrid, interdisciplinary skill sets.',
    explanationHi:
      'गद्यांश का मुख्य विचार यह है कि आधुनिक करियर परिदृश्य में कला, वाणिज्य और विज्ञान की पारंपरिक सीमाएँ धुंधली पड़ रही हैं और अब हाइब्रिड (मिश्रित) व अंतर्विषयक कौशल का महत्व तेजी से बढ़ रहा है।',
  },
  {
    id: 'cgl26_06o2_q81',
    topic: 'Collocations / Fill in the Blank',
    questionEn:
      'Complete the collocation by choosing a suitable word to fill in the blank.\nThe researchers meticulously ______ the parameters for the study.',
    questionHi:
      'Complete the collocation by choosing a suitable word to fill in the blank.\nThe researchers meticulously ______ the parameters for the study.',
    optionsEn: ['delineated', 'decorated', 'deviated', 'deliberated'],
    optionsHi: ['delineated', 'decorated', 'deviated', 'deliberated'],
    correctIndex: 0,
    explanationEn:
      '"Delineate" means to describe, outline, or define something precisely. "Delineate the parameters" is a standard academic collocation. ("Decorated" = adorned; "deviated" = departed from a path; "deliberated" = thought carefully, typically followed by "on/over".)',
    explanationHi:
      '"Delineated" का अर्थ स्पष्ट रूप से परिभाषित या रेखांकित करना होता है। शोध के मापदंड तय करने के लिए "delineated the parameters" सटीक शब्द-संयोजन (collocation) है।',
  },
  {
    id: 'cgl26_06o2_q82',
    topic: 'Sentence Rearrangement (PQRS)',
    questionEn:
      'Rearrange the parts of the sentence in the correct order.\nFollowing the approval of a groundbreaking cancer therapy,\nP. while skeptics warned of the long-term side effects and limited accessibility for low-income patients,\nQ. oncologists and researchers hailed the innovation as a paradigm shift in cancer treatment,\nR. leading to global discussions on the affordability and regulatory challenges of the new treatment\nS. as early trials demonstrated unprecedented success in eliminating aggressive tumors,',
    questionHi:
      'Rearrange the parts of the sentence in the correct order.\nFollowing the approval of a groundbreaking cancer therapy,\nP. while skeptics warned of the long-term side effects and limited accessibility for low-income patients,\nQ. oncologists and researchers hailed the innovation as a paradigm shift in cancer treatment,\nR. leading to global discussions on the affordability and regulatory challenges of the new treatment\nS. as early trials demonstrated unprecedented success in eliminating aggressive tumors,',
    optionsEn: ['PQRS', 'SQRP', 'QSPR', 'QPSR'],
    optionsHi: ['PQRS', 'SQRP', 'QSPR', 'QPSR'],
    correctIndex: 3,
    explanationEn:
      'As per the official SSC answer key, Option (D) QPSR is marked correct: the opening introductory phrase ("Following the approval of a groundbreaking cancer therapy,") immediately requires the main clause subject in Q ("oncologists and researchers hailed..."), followed by the contrasting reaction in P ("while skeptics warned..."), supporting trial context in S, and concluding outcome in R ("leading to global discussions...").',
    explanationHi:
      'आधिकारिक SSC उत्तर कुंजी के अनुसार सही क्रम QPSR (विकल्प D) है: प्रारंभिक वाक्यांश के बाद मुख्य वाक्य Q से शुरू होता है, उसके बाद P और S आते हैं तथा निष्कर्ष भाग R अंत में जुड़ता है।',
  },
  {
    id: 'cgl26_06o2_q83',
    topic: 'Phrasal Verbs',
    questionEn:
      'Fill in the blank with an appropriate phrasal verb.\nIf you’re serious about your goals, you must ______ all distractions.',
    questionHi:
      'Fill in the blank with an appropriate phrasal verb.\nIf you’re serious about your goals, you must ______ all distractions.',
    optionsEn: ['cast off', 'cast down', 'caste away', 'caste over'],
    optionsHi: ['cast off', 'cast down', 'caste away', 'caste over'],
    correctIndex: 0,
    explanationEn:
      '"Cast off" means to get rid of, discard, or free oneself from something unwanted (like distractions). "Cast down" means depressed/dejected, while "caste" is a noun referring to a social class (wrong spelling for the verb "cast").',
    explanationHi:
      '"Cast off" एक phrasal verb है जिसका अर्थ होता है त्यागना या छुटकारा पाना। लक्ष्य के प्रति गंभीर होने पर सभी विकर्षणों (distractions) को त्यागना आवश्यक है।',
  },
  {
    id: 'cgl26_06o2_q84',
    topic: 'Sentence Rearrangement (PQRS)',
    questionEn:
      'Rearrange the parts of the sentence in the correct order.\nThe ethical dilemmas in scientific research\nP. have sparked ongoing debates among scholars,\nQ. concerning genetic modifications and bioengineering,\nR. as technological advancements outpace regulatory frameworks\nS. raising concerns about moral boundaries and unintended consequences',
    questionHi:
      'Rearrange the parts of the sentence in the correct order.\nThe ethical dilemmas in scientific research\nP. have sparked ongoing debates among scholars,\nQ. concerning genetic modifications and bioengineering,\nR. as technological advancements outpace regulatory frameworks\nS. raising concerns about moral boundaries and unintended consequences',
    optionsEn: ['QPRS', 'SPRQ', 'PRQS', 'SQPR'],
    optionsHi: ['QPRS', 'SPRQ', 'PRQS', 'SQPR'],
    correctIndex: 2,
    explanationEn:
      'As per the official SSC answer key, Option (C) PRQS is correct: the plural subject "The ethical dilemmas in scientific research" pairs directly with the plural verb phrase P ("have sparked ongoing debates among scholars,"), followed by the reason R, specific focus Q, and participial concluding clause S ("raising concerns about moral boundaries and unintended consequences").',
    explanationHi:
      'आधिकारिक SSC उत्तर कुंजी के अनुसार सही क्रम PRQS (विकल्प C) है: बहुवचन कर्ता "The ethical dilemmas..." के तुरंत बाद क्रिया भाग P ("have sparked...") आता है, फिर R, Q और अंत में S जुड़ता है।',
  },
  {
    id: 'cgl26_06o2_q85',
    topic: 'Idioms & Phrases',
    questionEn: 'What does the idiom "Red letter day" mean?',
    questionHi: 'What does the idiom "Red letter day" mean?',
    optionsEn: [
      'A day of great significance or celebration',
      'A day of financial loss',
      'A day of regret and sadness',
      'A day of strict discipline',
    ],
    optionsHi: [
      'A day of great significance or celebration',
      'A day of financial loss',
      'A day of regret and sadness',
      'A day of strict discipline',
    ],
    correctIndex: 0,
    explanationEn:
      '"Red letter day" originates from the tradition of printing major festivals and holidays in red ink on calendars. It means a memorably happy, auspicious, or highly significant day.',
    explanationHi:
      '"Red letter day" मुहावरे का अर्थ है एक अत्यंत महत्वपूर्ण, स्मरणीय या उत्सव का दिन (A day of great significance or celebration)।',
  },
  {
    id: 'cgl26_06o2_q86',
    topic: 'Error Spotting',
    questionEn: 'Identify the error in the sentence.\nHe paid a heavy apology after the incident.',
    questionHi: 'Identify the error in the sentence.\nHe paid a heavy apology after the incident.',
    optionsEn: ['apology', 'paid', 'heavy', 'incident'],
    optionsHi: ['apology', 'paid', 'heavy', 'incident'],
    correctIndex: 2,
    explanationEn:
      'The adjective "heavy" is a collocation error with "apology". We offer/make a "sincere", "profuse", or "heartfelt" apology (whereas "heavy" collocates with "price", "fine", or "penalty"). Hence, "heavy" is the erroneous word.',
    explanationHi:
      '"Apology" (माफ़ी) के साथ "heavy" विशेषण का प्रयोग गलत है (सही शब्द sincere/profuse apology होता है; "heavy" का प्रयोग price या fine के साथ होता है)। अतः त्रुटि "heavy" में है।',
  },
  {
    id: 'cgl26_06o2_q87',
    topic: 'Homonyms & Word Usage',
    questionEn: "Which of the following options is NOT one of the meanings of the homonym 'subject'?",
    questionHi: "Which of the following options is NOT one of the meanings of the homonym 'subject'?",
    optionsEn: [
      'To freely exclude oneself from external governance or control',
      'A branch of knowledge studied or taught in school or university',
      'A person under the rule of a monarch or sovereign state',
      'To cause or force someone to undergo an unpleasant experience',
    ],
    optionsHi: [
      'To freely exclude oneself from external governance or control',
      'A branch of knowledge studied or taught in school or university',
      'A person under the rule of a monarch or sovereign state',
      'To cause or force someone to undergo an unpleasant experience',
    ],
    correctIndex: 0,
    explanationEn:
      'The word "subject" has several standard meanings: (B) an academic discipline (noun), (C) a citizen/person under a monarch’s rule (noun), and (D) to expose/force someone to experience something unpleasant (verb, e.g., "subjected to interrogation"). Option (A) means the exact opposite of being subject to control.',
    explanationHi:
      '"Subject" के प्रचलित अर्थ हैं — अध्ययन का विषय (B), किसी राजा/राज्य की प्रजा (C), तथा किसी को कष्ट या अनुभव से गुज़ारना (D)। विकल्प (A) इसका विपरीत अर्थ दर्शाता है, अतः यह इसका अर्थ नहीं है।',
  },
  {
    id: 'cgl26_06o2_q88',
    topic: 'Idioms & Phrases',
    questionEn:
      'Choose the correct idiom for the phrase highlighted in quotes.\n"Kavita told her manager that she planned to leave the company, but after the manager offered her a pay raise, she had a ‘change of heart’ and agreed to stay."',
    questionHi:
      'Choose the correct idiom for the phrase highlighted in quotes.\n"Kavita told her manager that she planned to leave the company, but after the manager offered her a pay raise, she had a ‘change of heart’ and agreed to stay."',
    optionsEn: [
      'To become physically unwell due to stress',
      'To change one’s feelings or decision about something',
      'To get emotional during a conversation',
      'To start working harder to get promoted',
    ],
    optionsHi: [
      'To become physically unwell due to stress',
      'To change one’s feelings or decision about something',
      'To get emotional during a conversation',
      'To start working harder to get promoted',
    ],
    correctIndex: 1,
    explanationEn:
      'The idiom "a change of heart" means to reverse or change one’s opinion, attitude, feelings, or decision about something—here, Kavita reversed her decision to quit after getting a raise.',
    explanationHi:
      '"Change of heart" मुहावरे का अर्थ होता है किसी विषय के प्रति अपनी भावना, विचार या निर्णय बदल लेना (To change one’s feelings or decision about something)।',
  },
  {
    id: 'cgl26_06o2_q89',
    topic: 'Para Jumbles',
    questionEn:
      'Which of the given options arranges the following sentences in the most logical sequence to form a meaningful paragraph?\n1. Philosophers debate the role of experience, reason and perception in the acquisition of knowledge.\n2. The nature of knowledge is a central concern in philosophy, particularly in the field of epistemology.\n3. Some argue that knowledge comes from sensory experiences, while others believe in the primacy of reason or innate ideas.\n4. Epistemology explores the sources, limits and validity of knowledge, asking questions like “What can we know?”\n5. Ultimately, understanding knowledge involves examining the relationship between the knower, the known and the process of knowing.',
    questionHi:
      'Which of the given options arranges the following sentences in the most logical sequence to form a meaningful paragraph?\n1. Philosophers debate the role of experience, reason and perception in the acquisition of knowledge.\n2. The nature of knowledge is a central concern in philosophy, particularly in the field of epistemology.\n3. Some argue that knowledge comes from sensory experiences, while others believe in the primacy of reason or innate ideas.\n4. Epistemology explores the sources, limits and validity of knowledge, asking questions like “What can we know?”\n5. Ultimately, understanding knowledge involves examining the relationship between the knower, the known and the process of knowing.',
    optionsEn: ['3-1-2-4-5', '2-4-1-3-5', '4-3-1-2-5', '5-2-1-3-4'],
    optionsHi: ['3-1-2-4-5', '2-4-1-3-5', '4-3-1-2-5', '5-2-1-3-4'],
    correctIndex: 1,
    explanationEn:
      'Logical flow (2-4-1-3-5):\n• 2 introduces the broad topic ("nature of knowledge... field of epistemology").\n• 4 immediately defines and elaborates on "Epistemology".\n• 1 introduces philosophers debating the role of experience and reason.\n• 3 elaborates on the two sides of that debate ("Some argue... while others...").\n• 5 provides the concluding summary ("Ultimately...").',
    explanationHi:
      'तार्किक अनुक्रम (2-4-1-3-5): वाक्य 2 मुख्य विषय (ज्ञान और Epistemology) का परिचय देता है, वाक्य 4 Epistemology को परिभाषित करता है, वाक्य 1 दार्शनिक बहस शुरू करता है, वाक्य 3 उस बहस के दोनों पक्ष बताता है, और वाक्य 5 ("Ultimately...") निष्कर्ष प्रस्तुत करता है।',
  },
  {
    id: 'cgl26_06o2_q90',
    topic: 'Para Jumbles',
    questionEn:
      'Which of the given options arranges the following sentences in the most logical sequence to form a meaningful paragraph?\n1. Predators evolve sharper claws, faster speeds, or enhanced hunting techniques to catch prey more effectively.\n2. This cycle of adaptation and counter-adaptation drives the continuous evolution of both groups.\n3. In response, prey species develop defensive adaptations such as camouflage, speed, or toxic chemicals.\n4. The concept of an evolutionary arms race describes the ongoing adaptations between predators and prey.\n5. Such evolutionary arms races are seen in species like cheetahs and gazelles or venomous snakes and resistant prey.',
    questionHi:
      'Which of the given options arranges the following sentences in the most logical sequence to form a meaningful paragraph?\n1. Predators evolve sharper claws, faster speeds, or enhanced hunting techniques to catch prey more effectively.\n2. This cycle of adaptation and counter-adaptation drives the continuous evolution of both groups.\n3. In response, prey species develop defensive adaptations such as camouflage, speed, or toxic chemicals.\n4. The concept of an evolutionary arms race describes the ongoing adaptations between predators and prey.\n5. Such evolutionary arms races are seen in species like cheetahs and gazelles or venomous snakes and resistant prey.',
    optionsEn: ['3-4-2-1-5', '1-4-5-3-2', '2-1-3-5-4', '4-1-3-2-5'],
    optionsHi: ['3-4-2-1-5', '1-4-5-3-2', '2-1-3-5-4', '4-1-3-2-5'],
    correctIndex: 3,
    explanationEn:
      'Logical flow (4-1-3-2-5):\n• 4 introduces the core concept ("evolutionary arms race... predators and prey").\n• 1 describes predator adaptations.\n• 3 follows directly with "In response, prey species develop defensive adaptations..."\n• 2 summarizes this back-and-forth ("This cycle of adaptation and counter-adaptation...").\n• 5 closes with concrete examples ("Such evolutionary arms races are seen in...").',
    explanationHi:
      'तार्किक अनुक्रम (4-1-3-2-5): वाक्य 4 अवधारणा (evolutionary arms race) का परिचय देता है, वाक्य 1 शिकारियों का अनुकूलन बताता है, वाक्य 3 ("In response...") शिकार की प्रतिक्रिया बताता है, वाक्य 2 इस चक्र का परिणाम बताता है, और वाक्य 5 उदाहरणों के साथ अनुच्छेद समाप्त करता है।',
  },
  {
    id: 'cgl26_06o2_q91',
    topic: 'Synonyms',
    questionEn: 'Select the most appropriate synonym of the given word: MENDACIOUS',
    questionHi: 'Select the most appropriate synonym of the given word: MENDACIOUS',
    optionsEn: ['Honest', 'Truthful', 'Dishonest', 'Candid'],
    optionsHi: ['Honest', 'Truthful', 'Dishonest', 'Candid'],
    correctIndex: 2,
    explanationEn:
      '"Mendacious" means not telling the truth; lying or deceitful. Therefore, its closest synonym is "Dishonest". ("Honest", "Truthful", and "Candid" are antonyms.)',
    explanationHi:
      '"Mendacious" का अर्थ झूठा, कपटी या बेईमान होता है। अतः इसका सही पर्यायवाची (synonym) "Dishonest" है।',
  },
  {
    id: 'cgl26_06o2_q92',
    topic: 'Synonyms',
    questionEn: 'Select the most appropriate synonym of the given word: IMBRUE',
    questionHi: 'Select the most appropriate synonym of the given word: IMBRUE',
    optionsEn: ['To cleanse', 'To soak', 'To purify', 'To expel'],
    optionsHi: ['To cleanse', 'To soak', 'To purify', 'To expel'],
    correctIndex: 1,
    explanationEn:
      '"Imbrue" means to stain, wet, drench, or soak thoroughly (especially with blood or liquid). Hence, "To soak" is the exact synonym.',
    explanationHi:
      '"Imbrue" का अर्थ तर-बतर करना, रंगना या भिगोना (To soak) होता है। अतः विकल्प (B) सही पर्यायवाची है।',
  },
  {
    id: 'cgl26_06o2_q93',
    topic: 'Antonyms',
    questionEn: 'Select the most appropriate antonym of the given word. Altruism',
    questionHi: 'Select the most appropriate antonym of the given word. Altruism',
    optionsEn: ['Selflessness', 'Generosity', 'Egoism', 'Charity'],
    optionsHi: ['Selflessness', 'Generosity', 'Egoism', 'Charity'],
    correctIndex: 2,
    explanationEn:
      '"Altruism" means disinterested and selfless concern for the well-being of others. Its direct opposite is "Egoism" (self-centeredness / acting purely out of self-interest). "Selflessness", "Generosity", and "Charity" are synonyms.',
    explanationHi:
      '"Altruism" का अर्थ परोपकार या निःस्वार्थ भाव होता है। इसका सटीक विलोम (antonym) "Egoism" (स्वार्थपरता / अहंवाद) है।',
  },
  {
    id: 'cgl26_06o2_q94',
    topic: 'Spelling',
    questionEn: "Which is the correct spelling for a word meaning 'without equal or unmatched'?",
    questionHi: "Which is the correct spelling for a word meaning 'without equal or unmatched'?",
    optionsEn: ['Incomparable', 'Incomparible', 'Incompareable', 'Incomperable'],
    optionsHi: ['Incomparable', 'Incomparible', 'Incompareable', 'Incomperable'],
    correctIndex: 0,
    explanationEn:
      'The correct spelling is "Incomparable" (in- + compar(e) + -able, dropping the silent "e" before "-able"), meaning matchless or beyond comparison.',
    explanationHi:
      'अतुलनीय या बेजोड़ के लिए सही वर्तनी "Incomparable" है ("compare" से अंतिम "e" हटाकर "-able" जोड़ा जाता है)।',
  },
  {
    id: 'cgl26_06o2_q95',
    topic: 'Misspelt Word',
    questionEn: 'Identify the misspelt word.',
    questionHi: 'Identify the misspelt word.',
    optionsEn: ['Apostrophize', 'Ethereal', 'Munificense', 'Penumbra'],
    optionsHi: ['Apostrophize', 'Ethereal', 'Munificense', 'Penumbra'],
    correctIndex: 2,
    explanationEn:
      '"Munificense" is misspelt; the correct spelling is "Munificence" (meaning great generosity). The other words are correctly spelt: Apostrophize (address an absent person/thing), Ethereal (delicate/heavenly), Penumbra (partially shaded outer region of a shadow).',
    explanationHi:
      '"Munificense" की वर्तनी गलत है; सही वर्तनी "Munificence" (उदारता/दानशीलता) होती है। अन्य तीनों शब्दों की वर्तनी शुद्ध है।',
  },
  {
    id: 'cgl26_06o2_q96',
    topic: 'One-Word Substitution',
    questionEn: "Choose the correct one-word substitute for: 'A person who cannot be tired'.",
    questionHi: "Choose the correct one-word substitute for: 'A person who cannot be tired'.",
    optionsEn: ['Infallible', 'Invincible', 'Indefatigable', 'Incurable'],
    optionsHi: ['Infallible', 'Invincible', 'Indefatigable', 'Incurable'],
    correctIndex: 2,
    explanationEn:
      '• Indefatigable: persisting tirelessly; incapable of being fatigued/tired.\n• Infallible: incapable of making mistakes.\n• Invincible: too powerful to be defeated.\n• Incurable: not able to be cured.',
    explanationHi:
      '• Indefatigable (अथक): जो कभी न थके।\n• Infallible: अचूक; Invincible: अजेय; Incurable: असाध्य।',
  },
  {
    id: 'cgl26_06o2_q97',
    topic: 'Active & Passive Voice',
    questionEn: 'Change the following from active to passive:\nSomeone has sent me a gift.',
    questionHi: 'Change the following from active to passive:\nSomeone has sent me a gift.',
    optionsEn: [
      'I have been sent a gift.',
      'A gift is sent to me.',
      'A gift was sent to me.',
      'I was sent a gift.',
    ],
    optionsHi: [
      'I have been sent a gift.',
      'A gift is sent to me.',
      'A gift was sent to me.',
      'I was sent a gift.',
    ],
    correctIndex: 0,
    explanationEn:
      'Rule for Present Perfect Tense Active → Passive:\nActive: Subject + has/have + V3 + Indirect Object ("me") + Direct Object ("a gift")\nPassive: New Subject ("I") + have been + V3 ("sent") + a gift. (Vague agent "by someone" is omitted.)\nHence, "I have been sent a gift."',
    explanationHi:
      'Present Perfect Tense ("has sent") को Passive Voice में बदलने का नियम: "has/have + been + V3"। Indirect object "me" को subject "I" बनाने पर सही Passive वाक्य "I have been sent a gift." बनता है ("by someone" हटा दिया जाता है)।',
  },
  {
    id: 'cgl26_06o2_q98',
    topic: 'Sentence Improvement (Reported Speech)',
    questionEn:
      'Choose the most suitable option to replace the highlighted part of the sentence:\nHe "told that he will come" later.',
    questionHi:
      'Choose the most suitable option to replace the highlighted part of the sentence:\nHe "told that he will come" later.',
    optionsEn: [
      'said he would come',
      'told that he would came',
      'said that he would come',
      'said that he will come',
    ],
    optionsHi: [
      'said he would come',
      'told that he would came',
      'said that he would come',
      'said that he will come',
    ],
    correctIndex: 2,
    explanationEn:
      'Two grammar rules apply here:\n1. "Tell/told" is transitive and requires a personal object (e.g., "told me that..."). Without an object, use "said that...".\n2. Because the reporting verb ("said") is in the past tense, "will" backshifts to "would".\nHence, "said that he would come" is the most complete and grammatically standard replacement.',
    explanationHi:
      'दो प्रमुख नियम:\n1. "Told" के बाद object आना अनिवार्य है (जैसे told me); बिना object के "said that" का प्रयोग होता है।\n2. Reporting verb भूतकाल (past) में होने के कारण "will" बदलकर "would" हो जाता है।\nअतः "said that he would come" सर्वाधिक उपयुक्त है।',
  },
  {
    id: 'cgl26_06o2_q99',
    topic: 'Sentence Improvement (Gerunds)',
    questionEn:
      'Choose the most suitable option to replace the highlighted part of the sentence:\nThe students "enjoyed to play in the rain".',
    questionHi:
      'Choose the most suitable option to replace the highlighted part of the sentence:\nThe students "enjoyed to play in the rain".',
    optionsEn: [
      'enjoyed play in the rain',
      'were enjoying play',
      'enjoyed playing in the rain',
      'enjoyed to be playing',
    ],
    optionsHi: [
      'enjoyed play in the rain',
      'were enjoying play',
      'enjoyed playing in the rain',
      'enjoyed to be playing',
    ],
    correctIndex: 2,
    explanationEn:
      'The verb "enjoy" is always followed by a gerund (V-ing), never by a to-infinitive ("to play") or bare infinitive ("play"). Therefore, "enjoyed playing in the rain" is grammatically correct.',
    explanationHi:
      'क्रिया "enjoy" के बाद सदैव Gerund (V + ing) का प्रयोग होता है, न कि to-infinitive ("to play") का। अतः सही सुधार "enjoyed playing in the rain" है।',
  },
  {
    id: 'cgl26_06o2_q100',
    topic: 'Antonyms',
    questionEn:
      'Choose the most appropriate antonym of the underlined word.\nThe committee’s "admonition" regarding the safety breach was taken seriously by the staff.',
    questionHi:
      'Choose the most appropriate antonym of the underlined word.\nThe committee’s "admonition" regarding the safety breach was taken seriously by the staff.',
    optionsEn: ['Commendation', 'Counsel', 'Forewarning', 'Reprimand'],
    optionsHi: ['Commendation', 'Counsel', 'Forewarning', 'Reprimand'],
    correctIndex: 0,
    explanationEn:
      '"Admonition" means a firm warning, scolding, or reprimand. Its direct antonym is "Commendation" (formal praise or approval). ("Counsel", "Forewarning", and "Reprimand" are close in meaning/synonyms.)',
    explanationHi:
      '"Admonition" का अर्थ फटकार, चेतावनी या भर्त्सना होता है। इसका सटीक विलोम (antonym) "Commendation" (प्रशंसा / सराहना) है।',
  },
];

export const FULL_MOCK_06_OCT_SHIFT2: MockTest = {
  id: 'ssc-cgl-06-oct-shift2-2026-full-mock',
  title: 'SSC CGL Tier-1 2026 (06 Oct Shift 2) — Full Mock',
  subtitle:
    'Complete 100-question bilingual paper with strict 15-minute sectional timers across all 4 Tier-1 sections',
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
  createdAt: '2026-11-22T09:30:00.000Z',
  questions: [
    ...SECTION_1_REASONING_O6S2,
    ...SECTION_2_GA_O6S2,
    ...SECTION_3_QUANT_O6S2,
    ...SECTION_4_ENGLISH_O6S2,
  ],
};
