import { Question } from '../../../types/exam';

export const SECTION_1_REASONING_O5S2: Question[] = [
  {
    id: 'cgl26_05o2_q1',
    topic: 'Word Analogy',
    questionEn:
      'In the following question, select the related word from the given alternatives.\nDoctor : Diagnosis :: Judge : ?',
    questionHi:
      'निम्नलिखित प्रश्न में दिए गए विकल्पों में से संबंधित शब्द का चयन कीजिए।\nडॉक्टर : निदान :: न्यायाधीश : ?',
    optionsEn: ['Verdict', 'Lawyer', 'Argument', 'Law'],
    optionsHi: ['निर्णय', 'वकील', 'तर्क', 'कानून'],
    correctIndex: 0,
    explanationEn:
      'A Doctor examines a patient and delivers a Diagnosis; similarly, a Judge examines a case and delivers a Verdict.',
    explanationHi:
      'जिस प्रकार डॉक्टर (Doctor) रोगी की जाँच कर निदान (Diagnosis) देता है, उसी प्रकार न्यायाधीश (Judge) मामले की सुनवाई कर निर्णय (Verdict) देता है।',
  },
  {
    id: 'cgl26_05o2_q2',
    topic: 'Ordering & Calendar',
    questionEn:
      'A seminar was held each day from 11th to 18th Feb in the following sequence: Raipur, Patna, Jamshedpur, Rourkela, Durgapur, Warangal, Tiruchirappalli, Calicut. How many days after the seminar in Patna did the seminar in Warangal occur?',
    questionHi:
      'प्रत्येक दिन 11th से 18th फरवरी तक निम्नलिखित क्रम में सेमिनार आयोजित किए गए: रायपुर, पटना, जमशेदपुर, राउरकेला, दुर्गापुर, वारंगल, तिरुचिरापल्ली, कलीकट। पटना में सेमिनार के कितने दिन बाद वारंगल में सेमिनार हुआ?',
    optionsEn: ['5 days', '6 days', '3 days', '4 days'],
    optionsHi: ['5 दिन', '6 दिन', '3 दिन', '4 दिन'],
    correctIndex: 3,
    explanationEn:
      'Assigning dates sequentially from 11th to 18th Feb:\n• 11th: Raipur\n• 12th: Patna\n• 13th: Jamshedpur\n• 14th: Rourkela\n• 15th: Durgapur\n• 16th: Warangal\nDays after Patna (12th) to Warangal (16th) = 16 − 12 = 4 days.',
    explanationHi:
      'तिथियों का क्रम:\n11: रायपुर, 12: पटना, 13: जमशेदपुर, 14: राउरकेला, 15: दुर्गापुर, 16: वारंगल।\nपटना (12 फरवरी) के बाद वारंगल (16 फरवरी) तक दिन = 16 − 12 = 4 दिन।',
  },
  {
    id: 'cgl26_05o2_q3',
    topic: 'Letter-Number Coding',
    questionEn: 'If M = 13, O = 15, Q = 17, then S = ?',
    questionHi: 'अगर M = 13, O = 15, Q = 17, तो S = ?',
    optionsEn: ['19', '18', '20', '21'],
    optionsHi: ['19', '18', '20', '21'],
    correctIndex: 0,
    explanationEn:
      'Each letter is assigned its standard English alphabetical position (A = 1, ..., Z = 26): M = 13, O = 15, Q = 17, so S = 19.',
    explanationHi:
      'प्रत्येक अक्षर का अंग्रेजी वर्णमाला में स्थान मान दिया गया है: M = 13, O = 15, Q = 17, अतः S = 19।',
  },
  {
    id: 'cgl26_05o2_q4',
    topic: 'Word Formation',
    questionEn:
      'Given in the table are the number codes for the given letters. Select the combination of numbers so that the letters arranged accordingly will form a meaningful word.',
    questionHi:
      'तालिका में दिए गए अक्षरों के लिए संख्या कोड दिए गए हैं। संख्याओं का ऐसा संयोजन चुनिए जिससे अक्षरों को उनके अनुसार व्यवस्थित करने पर एक सार्थक शब्द बन जाए।',
    matrix: [
      ['1', '2', '3', '4', '5', '6'],
      ['A', 'E', 'C', 'R', 'T', 'U'],
    ],
    optionsEn: [
      '3, 4, 2, 1, 5, 6, 6, 2',
      '3, 2, 2, 1, 5, 6, 4, 2',
      '3, 4, 2, 1, 5, 6, 4, 2',
      '3, 4, 2, 5, 5, 6, 4, 2',
    ],
    optionsHi: [
      '3, 4, 2, 1, 5, 6, 6, 2',
      '3, 2, 2, 1, 5, 6, 4, 2',
      '3, 4, 2, 1, 5, 6, 4, 2',
      '3, 4, 2, 5, 5, 6, 4, 2',
    ],
    correctIndex: 2,
    explanationEn:
      'Decoding Option (C) 3, 4, 2, 1, 5, 6, 4, 2 using 1=A, 2=E, 3=C, 4=R, 5=T, 6=U:\nC – R – E – A – T – U – R – E = "CREATURE" (a meaningful English word).',
    explanationHi:
      'विकल्प (C) 3, 4, 2, 1, 5, 6, 4, 2 को तालिका से बदलने पर:\nC-R-E-A-T-U-R-E ⇒ "CREATURE" (एक सार्थक शब्द) बनता है।',
  },
  {
    id: 'cgl26_05o2_q5',
    topic: 'Arithmetic Reasoning',
    questionEn: 'If the radius of a circle is doubled, what will happen to its area?',
    questionHi: 'अगर किसी वृत्त की त्रिज्या दोगुनी कर दी जाए, तो उसके क्षेत्रफल पर क्या प्रभाव पड़ेगा?',
    optionsEn: ['Double', 'Triple', 'Four times', 'No change'],
    optionsHi: ['दोगुना', 'तीन गुना', 'चार गुना', 'कोई परिवर्तन नहीं'],
    correctIndex: 2,
    explanationEn:
      'Area of a circle = πr².\nWhen radius becomes 2r:\nNew Area = π(2r)² = 4πr² = 4 × Original Area (Four times).',
    explanationHi:
      'वृत्त का क्षेत्रफल = πr²।\nत्रिज्या 2r करने पर नया क्षेत्रफल = π(2r)² = 4πr² (चार गुना)।',
  },
  {
    id: 'cgl26_05o2_q6',
    topic: 'Arithmetic Reasoning (Average)',
    questionEn: 'The average of 5 consecutive odd numbers is 41. What is the largest number?',
    questionHi: '5 क्रमागत विषम संख्याओं का औसत 41 है। सबसे बड़ी संख्या क्या है?',
    optionsEn: ['43', '45', '47', '49'],
    optionsHi: ['43', '45', '47', '49'],
    correctIndex: 1,
    explanationEn:
      'The average of 5 consecutive odd numbers is the exact middle (3rd) number = 41.\nThe 5 numbers are: 37, 39, 41, 43, 45.\nHence, the largest number is 45.',
    explanationHi:
      '5 क्रमागत विषम संख्याओं का औसत ठीक बीच वाली (तीसरी) संख्या 41 है।\nअतः संख्याएँ = 37, 39, 41, 43, 45 ⇒ सबसे बड़ी संख्या = 45।',
  },
  {
    id: 'cgl26_05o2_q7',
    topic: 'Number Series',
    questionEn: 'What comes next: 0, 1, 1, 2, 3, 5, 8, ?',
    questionHi: 'इसके बाद क्या आएगा: 0, 1, 1, 2, 3, 5, 8, ?',
    optionsEn: ['13', '12', '11', '14'],
    optionsHi: ['13', '12', '11', '14'],
    correctIndex: 0,
    explanationEn:
      'Fibonacci series (each term equals the sum of the preceding two terms):\n0 + 1 = 1, 1 + 1 = 2, 1 + 2 = 3, 2 + 3 = 5, 3 + 5 = 8, 5 + 8 = 13.',
    explanationHi:
      'फिबोनाची श्रृंखला (प्रत्येक संख्या पिछली दो संख्याओं का योग है):\n3 + 5 = 8 ⇒ 5 + 8 = 13।',
  },
  {
    id: 'cgl26_05o2_q8',
    topic: 'Floor-Based Puzzle',
    questionEn:
      'Direction: Read the given information carefully and answer the following question.\nEight persons S, T, U, V, W, X, Y and Z live in an eight storey building such that ground floor is numbered as 1 and the top floor is numbered as 8. X lives on an even numbered floor below the floor number 6. More than two persons live between X and S. S does not live on an odd numbered floor. The number of persons living above S is the same as the number of persons living below V. Two people live between Y and T. T lives just above X. Only one person lives between U and Z. Z lives on one of the floors above Y.\n\nWho among the following lives just below W?',
    questionHi:
      'निर्देश: दी गई जानकारी को ध्यानपूर्वक पढ़िए और निम्नलिखित प्रश्न का उत्तर दीजिए।\nआठ व्यक्ति S, T, U, V, W, X, Y और Z एक आठ मंजिला इमारत में इस प्रकार रहते हैं कि भूतल को 1 और शीर्ष मंजिल को 8 नंबर दिया गया है। X, मंजिल संख्या 6 के नीचे एक सम संख्या वाली मंजिल पर रहता है। X और S के बीच दो से अधिक व्यक्ति रहते हैं। S एक विषम संख्या वाली मंजिल पर नहीं रहता है। S के ऊपर रहने वाले व्यक्तियों की संख्या V के नीचे रहने वाले व्यक्तियों की संख्या के समान है। Y और T के बीच दो व्यक्ति रहते हैं। T, X के ठीक ऊपर रहता है। U और Z के बीच केवल एक व्यक्ति रहता है। Z, Y के ऊपर किसी मंजिल पर रहता है।\n\nनिम्नलिखित में से कौन W के ठीक नीचे रहता है?',
    optionsEn: ['X', 'T', 'Z', 'U'],
    optionsHi: ['X', 'T', 'Z', 'U'],
    correctIndex: 1,
    explanationEn:
      'Arranging the 8 floors from top (8) to ground (1):\n• X is on an even floor below 6 (floor 2 or 4), and T is just above X.\n• Trying X = 2 ⇒ T = 3.\n• Two people between Y and T(3) ⇒ Y = 6.\n• S is on an even floor with >2 persons between X(2) and S ⇒ S = 8 (since 6 is taken by Y).\n• Persons above S(8) = 0 ⇒ Persons below V = 0 ⇒ V = 1.\n• Z lives above Y(6) ⇒ Z = 7.\n• One person between U and Z(7) ⇒ U = 5.\n• Remaining floor 4 goes to W.\nOrder (8→1): S, Z, Y, U, W, T, X, V.\nHence, T lives just below W.',
    explanationHi:
      'ऊपर (8) से नीचे (1) तक मंजिलों की व्यवस्था:\n8: S, 7: Z, 6: Y, 5: U, 4: W, 3: T, 2: X, 1: V।\nस्पष्ट है कि W (मंजिल 4) के ठीक नीचे T (मंजिल 3) रहता है।',
  },
  {
    id: 'cgl26_05o2_q9',
    topic: 'Statement & Conclusions',
    questionEn:
      'Read the following statement carefully and identify the conclusion that follows.\nStatement: The bank has announced a 0% interest loan scheme for students.\n\nConclusions:\nI. Students will be encouraged to pursue higher education.\nII. The bank is not concerned about making profits.',
    questionHi:
      'निम्नलिखित कथन को ध्यानपूर्वक पढ़ें और निष्कर्ष का चयन करें।\nकथन: बैंक ने छात्रों के लिए 0% ब्याज दर पर ऋण योजना की घोषणा की है।\n\nनिष्कर्ष:\nI. छात्रों को उच्च शिक्षा प्राप्त करने के लिए प्रोत्साहित किया जाएगा।\nII. बैंक को लाभ कमाने की चिंता नहीं है।',
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
      '• Conclusion I follows naturally because removing interest lowers financial barriers and encourages students to pursue higher studies.\n• Conclusion II does NOT follow: a single student welfare/CSR or customer-acquisition scheme does not imply the bank is unconcerned about profits overall.',
    explanationHi:
      '• निष्कर्ष I: 0% ब्याज ऋण से आर्थिक बोझ कम होने के कारण छात्र उच्च शिक्षा के लिए प्रोत्साहित होंगे (सही)।\n• निष्कर्ष II: एक छात्र योजना से यह निष्कर्ष नहीं निकलता कि बैंक को लाभ की चिंता नहीं है। अतः केवल I अनुसरण करता है।',
  },
  {
    id: 'cgl26_05o2_q10',
    topic: 'Letter-Number Analogy',
    questionEn: 'Find the number that best completes the analogy.\nE : 40 :: K : ?',
    questionHi: 'वह संख्या ज्ञात कीजिए जो सादृश्य को सर्वोत्तम रूप से पूरा करती है।\nE : 40 :: K : ?',
    optionsEn: ['88', '90', '86', '78'],
    optionsHi: ['88', '90', '86', '78'],
    correctIndex: 0,
    explanationEn:
      'Pattern: (Alphabetical position) × 8.\n• E = 5 ⇒ 5 × 8 = 40.\n• K = 11 ⇒ 11 × 8 = 88.',
    explanationHi:
      'पैटर्न: (अक्षर का स्थान मान) × 8।\n• E (5) × 8 = 40\n• K (11) × 8 = 88।',
  },
  {
    id: 'cgl26_05o2_q11',
    topic: 'Word Analogy',
    questionEn:
      'Choose the correct option to complete the series.\nMicroscope : Magnify :: Speaker : ?',
    questionHi: 'श्रृंखला को पूरा करने के लिए सही विकल्प चुनें।\nमाइक्रोस्कोप : मैग्निफाई :: स्पीकर : ?',
    optionsEn: ['Listen', 'Reduce', 'Quiet', 'Amplify'],
    optionsHi: ['सुनना', 'घटना', 'शांत', 'एम्पलीफाई'],
    correctIndex: 3,
    explanationEn:
      'Device and primary function relationship:\n• A Microscope is used to Magnify (enlarge) tiny visuals.\n• A Speaker is used to Amplify (increase volume of) sound.',
    explanationHi:
      'उपकरण और उसके कार्य का संबंध: जिस प्रकार माइक्रोस्कोप वस्तुओं को बड़ा (Magnify) करता है, उसी प्रकार स्पीकर ध्वनि को बढ़ाता (Amplify) है।',
  },
  {
    id: 'cgl26_05o2_q12',
    topic: 'Letter Series',
    questionEn:
      'Select the letter cluster from among the given options that can replace the question mark (?) in the following series.\nGDR, CHN, YLJ, ?, QTB',
    questionHi:
      'दिए गए विकल्पों में से उस अक्षर समूह का चयन कीजिए जो निम्नलिखित श्रृंखला में प्रश्न चिन्ह (?) के स्थान पर आ सकता है।\nGDR, CHN, YLJ, ?, QTB',
    optionsEn: ['UPF', 'UDH', 'VPE', 'VMF'],
    optionsHi: ['UPF', 'UDH', 'VPE', 'VMF'],
    correctIndex: 0,
    explanationEn:
      'Check each letter position across the clusters:\n• 1st letter (−4): G(7) → C(3) → Y(25) → U(21) → Q(17)\n• 2nd letter (+4): D(4) → H(8) → L(12) → P(16) → T(20)\n• 3rd letter (−4): R(18) → N(14) → J(10) → F(6) → B(2)\nResult: UPF.',
    explanationHi:
      'प्रत्येक स्थान पर पैटर्न:\n• पहला अक्षर (−4): G → C → Y → U → Q\n• दूसरा अक्षर (+4): D → H → L → P → T\n• तीसरा अक्षर (−4): R → N → J → F → B\nअतः लुप्त समूह UPF है।',
  },
  {
    id: 'cgl26_05o2_q13',
    topic: 'Arithmetic Series',
    questionEn: 'What is the 8th term of the series?\n2, 6, 10, 14, ...?',
    questionHi: 'निम्नलिखित श्रृंखला का 8वां पद क्या है?\n2, 6, 10, 14, ...?',
    optionsEn: ['26', '28', '30', '32'],
    optionsHi: ['26', '28', '30', '32'],
    correctIndex: 2,
    explanationEn:
      'Arithmetic progression with first term a = 2 and common difference d = 4:\n8th term = a + (8 − 1)d = 2 + 7 × 4 = 2 + 28 = 30.',
    explanationHi:
      'समांतर श्रेढ़ी में प्रथम पद a = 2 और सार्व अंतर d = 4:\n8वां पद = a + 7d = 2 + 7 × 4 = 30।',
  },
  {
    id: 'cgl26_05o2_q14',
    topic: 'Coding-Decoding',
    questionEn: 'If POCKET is coded as QPDLFU, how is QPDLFU coded?',
    questionHi: 'यदि POCKET को QPDLFU के रूप में कोडित किया जाता है, तो QPDLFU को किस प्रकार कोडित किया जाएगा?',
    optionsEn: ['RQEMGV', 'RQEMFU', 'RPDMGV', 'RPEMGV'],
    optionsHi: ['RQEMGV', 'RQEMFU', 'RPDMGV', 'RPEMGV'],
    correctIndex: 0,
    explanationEn:
      'Each letter shifts forward by +1:\n• P+1=Q, O+1=P, C+1=D, K+1=L, E+1=F, T+1=U (POCKET → QPDLFU).\nApplying +1 to QPDLFU:\n• Q+1=R, P+1=Q, D+1=E, L+1=M, F+1=G, U+1=V ⇒ RQEMGV.',
    explanationHi:
      'प्रत्येक अक्षर में +1 जोड़ा गया है। QPDLFU के प्रत्येक अक्षर में +1 जोड़ने पर:\nQ→R, P→Q, D→E, L→M, F→G, U→V ⇒ RQEMGV।',
  },
  {
    id: 'cgl26_05o2_q15',
    topic: 'Coding-Decoding',
    questionEn:
      'In a certain code language, "INTERNATIONAL" is written as "IOTFROAUIPNBL". How will "COMMUNICATION" be written?',
    questionHi:
      'एक निश्चित कूट भाषा में, “INTERNATIONAL” को “IOTFROAUIPNBL” लिखा जाता है। उसी कूट भाषा में “COMMUNICATION” को कैसे लिखा जाएगा?',
    optionsEn: [
      'CPMNUOIDAUIPN',
      'CPNMUOIDUAIPN',
      'CPMNIUODIUAPN',
      'CPMUNODIAUIPN',
    ],
    optionsHi: [
      'CPMNUOIDAUIPN',
      'CPNMUOIDUAIPN',
      'CPMNIUODIUAPN',
      'CPMUNODIAUIPN',
    ],
    correctIndex: 0,
    explanationEn:
      'Pattern (alternate +0, +1):\n• Odd positions (1, 3, 5, 7, 9, 11, 13): unchanged (+0)\n• Even positions (2, 4, 6, 8, 10, 12): shifted by +1\nCheck INTERNATIONAL → I, N+1(O), T, E+1(F), R, N+1(O), A, T+1(U), I, O+1(P), N, A+1(B), L = IOTFROAUIPNBL.\nApply to COMMUNICATION:\nC, O+1(P), M, M+1(N), U, N+1(O), I, C+1(D), A, T+1(U), I, O+1(P), N ⇒ CPMNUOIDAUIPN.',
    explanationHi:
      'पैटर्न: विषम स्थान (+0, अपरिवर्तित) और सम स्थान (+1)।\nCOMMUNICATION पर लागू करने पर:\nC, P, M, N, U, O, I, D, A, U, I, P, N ⇒ CPMNUOIDAUIPN।',
  },
  {
    id: 'cgl26_05o2_q16',
    topic: 'Letter Interchange',
    questionEn:
      'If in the word EDUCATION the first and second letters are interchanged, in the same way the third and fourth, fifth and sixth and so on are interchanged, then what will be the 5th letter from the right?',
    questionHi:
      'यदि EDUCATION शब्द में पहले और दूसरे अक्षर की अदला-बदली की जाती है, उसी प्रकार तीसरे और चौथे, पाँचवें और छठे अक्षर की, और इसी क्रम में आगे भी अदला-बदली की जाती है, तो दाएँ से 5वाँ अक्षर कौन-सा होगा?',
    optionsEn: ['U', 'C', 'T', 'E'],
    optionsHi: ['U', 'C', 'T', 'E'],
    correctIndex: 2,
    explanationEn:
      'Original word (9 letters): E D | U C | A T | I O | N\nAfter pairwise interchange: D E | C U | T A | O I | N → "DECUTAOIN".\nCounting from the right: 1st=N, 2nd=I, 3rd=O, 4th=A, 5th=T.',
    explanationHi:
      'जोड़े में अदला-बदली करने पर EDUCATION → DECUTAOIN बनता है।\nदाएँ से 5वाँ अक्षर (N, I, O, A, T) = T है।',
  },
  {
    id: 'cgl26_05o2_q17',
    topic: 'Alphabetical Arrangement',
    questionEn:
      "How many letters will remain at the same position in the word 'TEACHING' when the letters are arranged in reverse English alphabetical order from left to right?",
    questionHi:
      "जब शब्द 'TEACHING' के अक्षरों को बाएं से दाएं अंग्रेजी वर्णमाला के उल्टे क्रम (reverse alphabetical order) में व्यवस्थित किया जाता है, तो कितने अक्षर अपने मूल स्थान पर ही रहेंगे?",
    optionsEn: ['1', '2', '3', '4'],
    optionsHi: ['1', '2', '3', '4'],
    correctIndex: 0,
    explanationEn:
      'Original word:              T  E  A  C  H  I  N  G\nReverse alphabetical order: T  N  I  H  G  E  C  A\nOnly 1 letter (T at position 1) remains unchanged.',
    explanationHi:
      'मूल शब्द:   T  E  A  C  H  I  N  G\nउल्टा क्रम: T  N  I  H  G  E  C  A\nकेवल 1 अक्षर (T) अपने मूल स्थान पर रहता है।',
  },
  {
    id: 'cgl26_05o2_q18',
    topic: 'Missing Number Matrix',
    questionEn:
      'In the following question, a matrix of numbers is given. These numbers follow a certain pattern either row-wise or column-wise. Identify this pattern and choose the missing number accordingly.',
    questionHi:
      'निम्नलिखित प्रश्न में, संख्याओं का एक आव्यूह दिया गया है। ये संख्याएँ या तो पंक्ति-वार अथवा स्तंभ-वार किसी निश्चित स्वरूप का पालन करती हैं। इस स्वरूप की पहचान कीजिए तथा उसके अनुसार लुप्त संख्या ज्ञात कीजिए।',
    matrix: [
      ['6', '5', '19'],
      ['8', '2', '6'],
      ['9', '4', '?'],
    ],
    optionsEn: ['11', '19', '23', '31'],
    optionsHi: ['11', '19', '23', '31'],
    correctIndex: 2,
    explanationEn:
      'Row-wise rule: (Col 1 × Col 2) − (Col 1 + Col 2) = Col 3.\n• Row 1: (6 × 5) − (6 + 5) = 30 − 11 = 19\n• Row 2: (8 × 2) − (8 + 2) = 16 − 10 = 6\n• Row 3: (9 × 4) − (9 + 4) = 36 − 13 = 23.',
    explanationHi:
      'पंक्ति-वार नियम: (पहली × दूसरी) − (पहली + दूसरी) = तीसरी संख्या।\n• पंक्ति 1: 30 − 11 = 19\n• पंक्ति 2: 16 − 10 = 6\n• पंक्ति 3: (9 × 4) − (9 + 4) = 36 − 13 = 23।',
  },
  {
    id: 'cgl26_05o2_q19',
    topic: 'Coded Blood Relations',
    questionEn:
      'In a coded family relationship system:\nP @ Q indicates that P is the mother of Q.\nP # Q indicates that P is the father of Q.\nP $ Q indicates that P is the brother of Q.\nP % Q indicates that P is the sister of Q.\n\nWhich of the following expressions indicates that M is the maternal uncle of R?',
    questionHi:
      'पारिवारिक रिश्तों के एक कोड वाले सिस्टम में:\nP @ Q का मतलब है कि P, Q की माँ है।\nP # Q का मतलब है कि P, Q का पिता है।\nP $ Q का मतलब है कि P, Q का भाई है।\nP % Q का मतलब है कि P, Q की बहन है।\n\nइनमें से कौन-सा एक्सप्रेशन यह बताता है कि M, R का मामा है?',
    optionsEn: ['M $ S @ R', 'M % S @ R', 'M # S $ R', 'M $ S # R'],
    optionsHi: ['M $ S @ R', 'M % S @ R', 'M # S $ R', 'M $ S # R'],
    correctIndex: 0,
    explanationEn:
      'Maternal uncle = Mother’s brother.\nIn Option (A) M $ S @ R:\n• M $ S → M is the brother of S.\n• S @ R → S is the mother of R.\nTherefore, M is the brother of R’s mother, i.e., R’s maternal uncle.',
    explanationHi:
      'मामा = माँ का भाई।\nविकल्प (A) M $ S @ R में: M, S का भाई है और S, R की माँ है ⇒ M, R का मामा है।',
  },
  {
    id: 'cgl26_05o2_q20',
    topic: 'Number Pair Classification',
    questionEn: 'Select the odd number pair from the given alternatives.',
    questionHi: 'दिए गए विकल्पों में से विषम संख्या युग्म चुनें।',
    optionsEn: ['28, 816', '37, 1406', '51, 2652', '64, 4160'],
    optionsHi: ['28, 816', '37, 1406', '51, 2652', '64, 4160'],
    correctIndex: 0,
    explanationEn:
      'Pattern in three pairs is n : n(n + 1) [i.e., n² + n]:\n• 37 × 38 = 1406 (Matches)\n• 51 × 52 = 2652 (Matches)\n• 64 × 65 = 4160 (Matches)\n• 28 × 29 = 812 ≠ 816 (Odd one out).',
    explanationHi:
      'पैटर्न n : n(n + 1) है:\n37×38 = 1406, 51×52 = 2652, 64×65 = 4160, जबकि 28×29 = 812 (816 नहीं)। अतः (A) विषम है।',
  },
  {
    id: 'cgl26_05o2_q21',
    topic: 'Emotional Resilience',
    questionEn:
      "Due to a sudden corporate merger, your senior role is eliminated. You are offered a choice: take a 30% salary cut and report directly to a manager who is ten years younger than you and has far less field experience or leave the firm tomorrow without another job lined up. You feel an intense wave of public shame. Which reaction shows the highest level of emotional resilience?",
    questionHi:
      'अचानक हुई कॉर्पोरेट मर्जर (कंपनियों के विलय) की वजह से आपकी सीनियर पोस्ट खत्म हो गई है। आपके सामने एक विकल्प है: या तो 30% सैलरी कम करवा लें और ऐसे मैनेजर के अंडर काम करें जो आपसे दस साल छोटा है और जिसे फील्ड का अनुभव भी बहुत कम है, या फिर बिना किसी दूसरी नौकरी के इंतज़ाम के कल ही कंपनी छोड़ दें। आपको सबके सामने शर्मिंदगी महसूस हो रही है। इनमें से कौन-सी प्रतिक्रिया सबसे ज़्यादा इमोशनल रेज़िलिएंस (भावनात्मक रूप से मज़बूत होने) को दिखाती है?',
    optionsEn: [
      'Resign instantly on the spot to protect your self-respect, regardless of your personal home loan liabilities.',
      'Force yourself to feel completely happy and enthusiastic about reporting to the younger manager to prove you have a positive corporate attitude.',
      'Accept the role quietly to stay financially secure, process your feelings privately, and use the frustration to pursue external senior opportunities.',
      "Accept the role, but quietly spread negative gossip about the new manager's lack of experience to protect your reputation among peers.",
    ],
    optionsHi: [
      'अपने घर के लोन की ज़िम्मेदारियों की परवाह किए बिना, अपनी आत्म-सम्मान की रक्षा के लिए तुरंत इस्तीफ़ा दे दें।',
      'खुद को इस बात के लिए तैयार करें कि आप अपने से कम उम्र के मैनेजर के अंडर काम करने को लेकर पूरी तरह खुश और उत्साहित महसूस करें, ताकि यह साबित हो सके कि आपका कॉर्पोरेट नज़रिया पॉज़िटिव है।',
      'आर्थिक रूप से सुरक्षित रहने के लिए चुपचाप यह भूमिका स्वीकार करें, अपनी भावनाओं को निजी तौर पर संभालें और अपनी निराशा का इस्तेमाल बाहरी सीनियर अवसरों को पाने के लिए करें।',
      'रोल स्वीकार कर लें, लेकिन साथियों के बीच अपनी साख बनाए रखने के लिए चुपचाप नए मैनेजर के अनुभव की कमी के बारे में नकारात्मक बातें फैलाएं।',
    ],
    correctIndex: 2,
    explanationEn:
      'True emotional resilience means regulating intense emotions without impulsive self-sabotage (Option A), toxic positivity/suppression (Option B), or workplace toxicity (Option D)—instead staying financially grounded while constructively channeling energy toward better opportunities.',
    explanationHi:
      'भावनात्मक मज़बूती (Emotional Resilience) का अर्थ आवेग में नुकसान उठाए बिना स्थिति को संतुलित रूप से स्वीकार करना, अपनी भावनाओं को परिपक्वता से संभालना और बेहतर अवसरों की दिशा में सकारात्मक प्रयास करना है। अतः विकल्प (C) सही है।',
  },
  {
    id: 'cgl26_05o2_q22',
    topic: 'Statement & Conclusions',
    questionEn:
      'Read the statement carefully and assume it to be true. Then examine the two conclusions given below it and decide which conclusion(s), if any, logically follow from the statement.\n\nStatement:\nThe Civil Tribunal has appealed to the citizens for cooperation to prevent blatant theft of power in the area.\n\nConclusions:\nI. Local civic groups will respond to this request by forming teams of people to investigate such power issues.\nII. Those who steal power will stop stealing power due to fear of rebuke from society.',
    questionHi:
      'कथन को ध्यानपूर्वक पढ़िए और उसे सत्य मानिए। फिर उसके नीचे दिए गए दो निष्कर्षों की जाँच कीजिए तथा निर्धारित कीजिए कि कौन-सा/कौन-से निष्कर्ष, यदि कोई हो, कथन से तार्किक रूप से अनुसरण करते हैं।\n\nकथन:\nसिविल ट्रिब्यूनल ने क्षेत्र में विद्युत चोरी की खुली घटनाओं को रोकने के लिए नागरिकों से सहयोग की अपील की है।\n\nनिष्कर्ष:\nI. स्थानीय नागरिक समूह इस अनुरोध के प्रत्युत्तर में ऐसी विद्युत संबंधी समस्याओं की जाँच के लिए लोगों की टीमें गठित करेंगे।\nII. जो लोग विद्युत चोरी करते हैं, वे समाज की निंदा के भय से विद्युत चोरी करना बंद कर देंगे।',
    optionsEn: [
      'Only Conclusion I follows',
      'Only Conclusion II follows',
      'Both Conclusions I and II follow',
      'Neither Conclusion I nor II follows',
    ],
    optionsHi: [
      'केवल निष्कर्ष I अनुसरण करता है।',
      'केवल निष्कर्ष II अनुसरण करता है।',
      'निष्कर्ष I और II दोनों अनुसरण करते हैं।',
      'न तो निष्कर्ष I और न ही निष्कर्ष II अनुसरण करता है।',
    ],
    correctIndex: 3,
    explanationEn:
      'An appeal for citizen cooperation does not guarantee how specific civic groups will act (Conclusion I is speculative) nor guarantee that offenders will stop stealing purely out of social rebuke (Conclusion II is speculative). Hence, neither Conclusion I nor II logically follows.',
    explanationHi:
      'नागरिकों से सहयोग की अपील करने से यह निश्चित नहीं होता कि स्थानीय समूह जांच टीमें बनाएंगे (निष्कर्ष I) या चोर केवल सामाजिक निंदा के डर से चोरी बंद कर देंगे (निष्कर्ष II)। अतः न तो I और न ही II अनुसरण करता है।',
  },
  {
    id: 'cgl26_05o2_q23',
    topic: 'Business & Practical Reasoning',
    questionEn:
      'A florist specialises in grand wedding arrangements, which creates irregular demand. She wants to ensure her shop remains profitable and busy on a standard workday. What should she implement?',
    questionHi:
      'एक पुष्पविक्रेता (फ्लोरिस्ट) भव्य विवाह सजावटों में विशेषज्ञता रखती है, जिसके कारण मांग अनियमित रहती है। वह यह सुनिश्चित करना चाहती है कि उसकी दुकान एक सामान्य कार्यदिवस में भी लाभदायक और व्यस्त बनी रहे। उसे क्या लागू करना चाहिए?',
    optionsEn: [
      'Launching a weekly subscription service for small home bouquets.',
      'Targeting only luxury event planners for massive gala projects.',
      'Stocking only rare exotic flowers imported from other nations.',
      'Renovating the storefront to look like an upscale wedding hall.',
    ],
    optionsHi: [
      'छोटे घरेलू पुष्प-गुच्छों के लिए साप्ताहिक सदस्यता सेवा शुरू करना।',
      'विशाल समारोह (Gala) परियोजनाओं के लिए केवल विलासितापूर्ण (Luxury) कार्यक्रम योजनाकारों को लक्षित करना।',
      'केवल अन्य देशों से आयातित दुर्लभ विदेशी फूलों का भंडारण करना।',
      'दुकान के अग्रभाग (Storefront) का नवीनीकरण करके उसे एक उच्च-स्तरीय विवाह मंडप जैसा स्वरूप देना।',
    ],
    correctIndex: 0,
    explanationEn:
      'A weekly subscription for everyday home bouquets generates steady, predictable recurring demand on regular weekdays—directly solving the problem of irregular wedding-only demand.',
    explanationHi:
      'घरेलू गुलदस्तों के लिए साप्ताहिक सदस्यता सेवा शुरू करने से सामान्य कार्यदिवसों में भी नियमित और स्थिर मांग बनी रहेगी। अतः विकल्प (A) सही है।',
  },
  {
    id: 'cgl26_05o2_q24',
    topic: 'Statement & Assumptions',
    questionEn:
      'Read the given statement carefully and the following assumptions based on it. Decide which of the assumptions are implicit in the statement.\n\nStatement:\nTo combat the rising threat of cybercrime, the government must pass legislation requiring all online service providers to implement multi-factor authentication for every user account.\n\nAssumptions:\nI. Multi-factor authentication is a reliable method for enhancing the security of digital user accounts.\nII. Current security measures employed by service providers are insufficient to stop cybercriminals.',
    questionHi:
      'निम्नलिखित कथन को ध्यानपूर्वक पढ़िए तथा उसके आधार पर दी गई मान्यताओं पर विचार कीजिए। निर्धारित कीजिए कि कथन में कौन-सी मान्यता/मान्यताएँ निहित हैं।\n\nकथन:\nसाइबर अपराध के बढ़ते खतरे से निपटने के लिए सरकार को ऐसा कानून पारित करना चाहिए, जिसके अनुसार सभी ऑनलाइन सेवा प्रदाताओं के लिए प्रत्येक उपयोगकर्ता खाते में बहु-कारक प्रमाणीकरण (Multi-factor Authentication) लागू करना अनिवार्य हो।\n\nमान्यताएँ:\nI. बहु-कारक प्रमाणीकरण (Multi-factor Authentication) डिजिटल उपयोगकर्ता खातों की सुरक्षा बढ़ाने का एक विश्वसनीय उपाय है।\nII. सेवा प्रदाताओं द्वारा वर्तमान में अपनाए जा रहे सुरक्षा उपाय साइबर अपराधियों को रोकने के लिए पर्याप्त नहीं हैं।',
    optionsEn: [
      'Only Assumption I is implicit',
      'Only Assumption II is implicit',
      'Neither Assumption I nor II is implicit',
      'Both Assumptions I and II are implicit',
    ],
    optionsHi: [
      'केवल मान्यता I निहित है।',
      'केवल मान्यता II निहित है।',
      'न तो मान्यता I और न ही II निहित है।',
      'मान्यता I और II दोनों निहित हैं।',
    ],
    correctIndex: 3,
    explanationEn:
      '• Assumption I is implicit: proposing mandatory MFA to combat cybercrime presupposes MFA reliably improves account security.\n• Assumption II is implicit: urging new legislation due to the "rising threat of cybercrime" presupposes existing security measures are insufficient.\nHence, both Assumptions I and II are implicit.',
    explanationHi:
      '• मान्यता I निहित है क्योंकि MFA को अनिवार्य करने का सुझाव तभी सार्थक है जब वह सुरक्षा बढ़ाने का विश्वसनीय तरीका हो।\n• मान्यता II भी निहित है क्योंकि बढ़ते साइबर अपराध के लिए नया कानून आवश्यक होना दर्शाता है कि मौजूदा उपाय पर्याप्त नहीं हैं।',
  },
  {
    id: 'cgl26_05o2_q25',
    topic: 'Letter Classification',
    questionEn: 'Select the group of letters that is different from the other three.',
    questionHi: 'अक्षरों के उस समूह का चयन कीजिए जो अन्य तीनों से असंगत है।',
    optionsEn: ['ACEG', 'BDFH', 'CEGI', 'DFIK'],
    optionsHi: ['ACEG', 'BDFH', 'CEGI', 'DFIK'],
    correctIndex: 3,
    explanationEn:
      'Checking consecutive letter differences:\n• ACEG: +2, +2, +2\n• BDFH: +2, +2, +2\n• CEGI: +2, +2, +2\n• DFIK: D(4) → F(6) [+2] → I(9) [+3] → K(11) [+2] (Odd one out).',
    explanationHi:
      'अक्षरों का अंतर:\nACEG, BDFH और CEGI में (+2, +2, +2) क्रम है, जबकि DFIK में (+2, +3, +2) है। अतः DFIK असंगत है।',
  },
];
