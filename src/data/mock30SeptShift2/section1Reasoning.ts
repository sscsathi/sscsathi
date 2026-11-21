import { Question } from '../../types/exam';

export const SECTION_1_REASONING: Question[] = [
  {
    id: 'cgl26_30s2_q1',
    topic: 'Calendar & Sequencing',
    questionEn:
      'The Mumbai seminar was 4 days after the Ahmedabad seminar. The Pune seminar was 1 day before the Mumbai seminar. If the Ahmedabad seminar was held on 15th July, when was the Pune seminar?',
    questionHi:
      'मुंबई सेमिनार अहमदाबाद सेमिनार के 4 दिन बाद था। पुणे सेमिनार मुंबई सेमिनार से 1 दिन पहले था। अगर अहमदाबाद सेमिनार 15th जुलाई को आयोजित किया गया था, तो पुणे सेमिनार कब था?',
    optionsEn: ['17th July', '18th July', '19th July', '20th July'],
    optionsHi: ['17th जुलाई', '18th जुलाई', '19th जुलाई', '20th जुलाई'],
    correctIndex: 1,
    explanationEn:
      'Step 1: Ahmedabad seminar = 15th July. Step 2: Mumbai seminar = 15 + 4 = 19th July. Step 3: Pune seminar = 19 - 1 = 18th July.',
    explanationHi:
      'चरण 1: अहमदाबाद सेमिनार = 15 जुलाई। चरण 2: मुंबई सेमिनार = 15 + 4 = 19 जुलाई। चरण 3: पुणे सेमिनार = 19 - 1 = 18 जुलाई।',
  },
  {
    id: 'cgl26_30s2_q2',
    topic: 'Number Analogy',
    questionEn: 'If 19 → 91, 82 → 28, then 75 → ?',
    questionHi: 'अगर 19 → 91, 82 → 28, तो 75 → ?',
    optionsEn: ['57', '58', '65', '75'],
    optionsHi: ['57', '58', '65', '75'],
    correctIndex: 0,
    explanationEn:
      'The digits of each two-digit number are reversed: 19 → 91 and 82 → 28. Reversing the digits of 75 gives 57.',
    explanationHi:
      'प्रत्येक दो-अंकीय संख्या के अंकों को उलट दिया गया है: 19 → 91 तथा 82 → 28। इसी प्रकार 75 के अंकों को उलटने पर 57 प्राप्त होता है।',
  },
  {
    id: 'cgl26_30s2_q3',
    topic: 'Blood Relations',
    questionEn:
      "Direction: Study the following information carefully to answer the given question:\nIf 'A @ B' means 'B is a brother of A'\nIf 'A # B' means 'B is the mother of A'\nIf 'A % B' means 'B is the father of A'\nIf 'A & B' means 'B is a sister of A'\nIf 'R # C % V & X' is given, then who among the following is a child of C?",
    questionHi:
      "निर्देश: दिए गए प्रश्न का उत्तर देने के लिए निम्नलिखित जानकारी का ध्यानपूर्वक अध्ययन कीजिए:\nयदि 'A @ B' का अर्थ है 'B, A का भाई है'\nयदि 'A # B' का अर्थ है 'B, A की माता है'\nयदि 'A % B' का अर्थ है 'B, A का पिता है'\nयदि 'A & B' का अर्थ है 'B, A की बहन है'\nयदि 'R # C % V & X' है, तो C की संतान निम्नलिखित में से कौन है?",
    optionsEn: ['R', 'X', 'V', 'Both R and X'],
    optionsHi: ['R', 'X', 'V', 'R और X दोनों'],
    correctIndex: 0,
    explanationEn:
      "Decoding 'R # C % V & X':\n• R # C ⇒ C is the mother of R (so R is the child of C).\n• C % V ⇒ V is the father of C.\n• V & X ⇒ X is the sister of V.\nTherefore, R is a child of C.",
    explanationHi:
      "'R # C % V & X' को डिकोड करने पर:\n• R # C ⇒ C, R की माता है (अतः R, C की संतान है)।\n• C % V ⇒ V, C का पिता है।\n• V & X ⇒ X, V की बहन है।\nअतः C की संतान R है।",
  },
  {
    id: 'cgl26_30s2_q4',
    topic: 'Word Formation',
    questionEn:
      'Rearrange the letters of that word, written in capital letters, to form the correct word.\nThe chef decided to NTERAIMA the succulent steak for several hours to enhance its flavor.',
    questionHi:
      'उस शब्द के अक्षरों को, जो बड़े अक्षरों में लिखे हैं, पुनर्व्यवस्थित करके सही शब्द बनाएँ।\nशेफ ने रसीले स्टेक का स्वाद बढ़ाने के लिए उसे कई घंटों तक NTERAIMA में पकाने का फैसला किया।',
    optionsEn: ['MARTINE', 'REMINAT', 'MARINATE', 'RAIMENT'],
    optionsHi: ['MARTINE', 'REMINAT', 'MARINATE', 'RAIMENT'],
    correctIndex: 2,
    explanationEn:
      'Rearranging all 8 letters of NTERAIMA (N, T, E, R, A, I, M, A) forms the meaningful cooking verb MARINATE (to soak meat in a seasoned liquid to enhance flavor).',
    explanationHi:
      'NTERAIMA के सभी 8 अक्षरों को पुनर्व्यवस्थित करने पर सार्थक शब्द MARINATE बनता है, जिसका अर्थ स्वाद बढ़ाने के लिए भोजन को मसालों के घोल में भिगोकर रखना होता है।',
  },
  {
    id: 'cgl26_30s2_q5',
    topic: 'Letter-Number Analogy',
    questionEn: 'Find the number that best completes the analogy. D : 32 :: J : ?',
    questionHi: 'वह संख्या ज्ञात कीजिए जो सादृश्य को सर्वोत्तम रूप से पूरा करती है। D : 32 :: J : ?',
    optionsEn: ['70', '72', '80', '76'],
    optionsHi: ['70', '72', '80', '76'],
    correctIndex: 2,
    explanationEn:
      'Alphabetical position of D = 4, and 4 × 8 = 32. Similarly, alphabetical position of J = 10, so 10 × 8 = 80.',
    explanationHi:
      'अंग्रेजी वर्णमाला में D का स्थान = 4 है, और 4 × 8 = 32। इसी प्रकार J का स्थान = 10 है, अतः 10 × 8 = 80।',
  },
  {
    id: 'cgl26_30s2_q6',
    topic: 'Word Analogy',
    questionEn: 'Choose the correct option to complete the series.\nDay : Night :: Victory : ?',
    questionHi: 'श्रृंखला को पूरा करने के लिए सही विकल्प चुनें।\nदिन : रात :: विजय : ?',
    optionsEn: ['Success', 'Celebration', 'Triumph', 'Defeat'],
    optionsHi: ['सफलता', 'उत्सव', 'विजयोल्लास', 'पराजय'],
    correctIndex: 3,
    explanationEn:
      'Day and Night are antonyms (opposites). Similarly, the opposite of Victory is Defeat.',
    explanationHi:
      'दिन और रात एक-दूसरे के विलोम (विपरीत) शब्द हैं। उसी प्रकार, विजय का विलोम शब्द पराजय (Defeat) है।',
  },
  {
    id: 'cgl26_30s2_q7',
    topic: 'Word Analogy',
    questionEn: 'Choose the correct option to complete the series.\nCitrus : Lemon :: Rosaceae : ?',
    questionHi: 'निम्नलिखित श्रृंखला को पूरा करने के लिए सही विकल्प चुनें।\nसाइट्रस : नींबू :: रोसेसी : ?',
    optionsEn: ['Hibiscus', 'Mango', 'Pear', 'Cleopatra'],
    optionsHi: ['जावा (हिबिस्कस)', 'आम', 'नाशपाती', 'क्लियोपेट्रा'],
    correctIndex: 2,
    explanationEn:
      'Lemon belongs to the Citrus genus/group. Similarly, Pear belongs to the botanical family Rosaceae (rose family, which includes apples, pears, and roses).',
    explanationHi:
      'नींबू, साइट्रस (Citrus) वंश से संबंधित है। इसी प्रकार नाशपाती (Pear), रोसेसी (Rosaceae) वनस्पति कुल से संबंधित है।',
  },
  {
    id: 'cgl26_30s2_q8',
    topic: 'Letter Analogy',
    questionEn:
      'In the following question, select the related word from the given alternatives.\nWORD : ULMW :: PLAY : ?',
    questionHi:
      'निम्नलिखित प्रश्न में दिए गए विकल्पों में से संबंधित शब्द का चयन कीजिए।\nWORD : ULMW :: PLAY : ?',
    optionsEn: ['NOUB', 'OGVR', 'MIU', 'NIVR'],
    optionsHi: ['NOUB', 'OGVR', 'MIU', 'NIVR'],
    correctIndex: 3,
    explanationEn:
      'Subtract consecutive prime numbers (-2, -3, -5, -7) from each letter position:\n• W(23) - 2 = U(21), O(15) - 3 = L(12), R(18) - 5 = M(13), D(4) - 7 = W(23).\nApplying the same rule to PLAY:\n• P(16) - 2 = N(14), L(12) - 3 = I(9), A(1) - 5 = V(22), Y(25) - 7 = R(18) ⇒ NIVR.',
    explanationHi:
      'प्रत्येक अक्षर के स्थान से क्रमागत अभाज्य संख्याएँ (-2, -3, -5, -7) घटाई गई हैं:\n• W(23)-2 = U, O(15)-3 = L, R(18)-5 = M, D(4)-7 = W।\nPLAY पर यही नियम लगाने पर:\n• P(16)-2 = N, L(12)-3 = I, A(1)-5 = V, Y(25)-7 = R ⇒ NIVR।',
  },
  {
    id: 'cgl26_30s2_q9',
    topic: 'Number Classification',
    questionEn: 'Which of the following is different from the rest?',
    questionHi: 'निम्नलिखित में से कौन सा बाकी से अलग है?',
    optionsEn: ['4', '16', '25', '36'],
    optionsHi: ['4', '16', '25', '36'],
    correctIndex: 2,
    explanationEn:
      'All four are perfect squares: 4 = 2², 16 = 4², 25 = 5², 36 = 6². However, 4, 16, and 36 are even numbers (squares of even numbers), whereas 25 is the only odd number (square of an odd number).',
    explanationHi:
      'सभी चार संख्याएँ पूर्ण वर्ग हैं: 4 = 2², 16 = 4², 25 = 5², 36 = 6²। इनमें से 4, 16 और 36 सम संख्याएँ हैं, जबकि 25 एकमात्र विषम संख्या है।',
  },
  {
    id: 'cgl26_30s2_q10',
    topic: 'Word Formation',
    questionEn: 'Which meaningful word can be formed from the letters “NOMRECEY”?',
    questionHi: '“NOMRECEY” शब्द के अक्षरों से कौन सा सार्थक शब्द बनाया जा सकता है?',
    optionsEn: ['NOMERCY', 'CEROMNY', 'CEREMONY', 'NOMERECY'],
    optionsHi: ['NOMERCY', 'CEROMNY', 'CEREMONY', 'NOMERECY'],
    correctIndex: 2,
    explanationEn:
      'Rearranging all 8 letters of “NOMRECEY” forms the valid English word CEREMONY.',
    explanationHi:
      '“NOMRECEY” के सभी 8 अक्षरों को व्यवस्थित करने पर सार्थक अंग्रेजी शब्द CEREMONY (समारोह) बनता है।',
  },
  {
    id: 'cgl26_30s2_q11',
    topic: 'Number Series / AP',
    questionEn: 'Find the 10th term of the AP.\n2.5, 3.0, 3.5, ...',
    questionHi: 'समांतर श्रेणी का 10वाँ पद ज्ञात कीजिए।\n2.5, 3.0, 3.5, ...',
    optionsEn: ['6.5', '7.0', '6.0', '5.5'],
    optionsHi: ['6.5', '7.0', '6.0', '5.5'],
    correctIndex: 1,
    explanationEn:
      'Here first term a = 2.5 and common difference d = 3.0 - 2.5 = 0.5.\nUsing aₙ = a + (n - 1)d:\na₁₀ = 2.5 + (10 - 1) × 0.5 = 2.5 + 4.5 = 7.0.',
    explanationHi:
      'यहाँ प्रथम पद a = 2.5 और सार्व अंतर d = 3.0 - 2.5 = 0.5 है।\nसूत्र aₙ = a + (n - 1)d से:\na₁₀ = 2.5 + 9 × 0.5 = 2.5 + 4.5 = 7.0।',
  },
  {
    id: 'cgl26_30s2_q12',
    topic: 'Coding-Decoding',
    questionEn: 'If PLANT is coded as QMBOU, how is QMBOU coded?',
    questionHi: 'यदि PLANT को QMBOU के रूप में कोडित किया जाता है, तो QMBOU को किस प्रकार कोडित किया जाएगा?',
    optionsEn: ['RNCOV', 'RNBOU', 'RNCPV', 'QMBOV'],
    optionsHi: ['RNCOV', 'RNBOU', 'RNCPV', 'QMBOV'],
    correctIndex: 2,
    explanationEn:
      'Each letter is shifted forward by +1: P→Q, L→M, A→B, N→O, T→U.\nApplying +1 to every letter of QMBOU: Q→R, M→N, B→C, O→P, U→V ⇒ RNCPV.',
    explanationHi:
      'प्रत्येक अक्षर में +1 जोड़ा गया है: P→Q, L→M, A→B, N→O, T→U।\nQMBOU के प्रत्येक अक्षर में +1 जोड़ने पर: Q→R, M→N, B→C, O→P, U→V ⇒ RNCPV।',
  },
  {
    id: 'cgl26_30s2_q13',
    topic: 'Statement & Conclusion',
    questionEn:
      'Statement:\nThe Reserve Bank has mandated that banks shall not process any high-value interbank transactions through manual channels beyond business hours, and such transactions shall only be facilitated via authorized electronic platforms.\nConclusions:\nI. High-value interbank transactions are permissible outside business hours if routed through approved digital systems.\nII. Manual processing of large interbank transactions is prohibited entirely, irrespective of timing.',
    questionHi:
      'कथन:\nरिजर्व बैंक ने आदेश दिया है कि बैंक व्यावसायिक घंटों के बाद मैन्युअल चैनलों के माध्यम से किसी भी उच्च-मूल्य वाले अंतर-बैंक लेनदेन को संसाधित नहीं करेंगे, और ऐसे लेनदेन केवल अधिकृत इलेक्ट्रॉनिक प्लेटफ़ॉर्म के माध्यम से ही किए जाएँगे।\nनिष्कर्ष:\nI. उच्च-मूल्य वाले अंतर-बैंक लेनदेन व्यावसायिक घंटों के बाहर स्वीकार्य हैं, यदि अनुमोदित डिजिटल सिस्टम के माध्यम से रूट किए जाते हैं।\nII. बड़े अंतर-बैंक लेनदेन की मैन्युअल प्रोसेसिंग पूरी तरह से प्रतिबंधित है, चाहे समय कुछ भी हो।',
    optionsEn: [
      'Neither conclusion I nor II follows',
      'Both conclusion I and II follow',
      'Only conclusion I follows',
      'Only conclusion II follows',
    ],
    optionsHi: [
      'न तो निष्कर्ष I और न ही II अनुसरण करता है',
      'निष्कर्ष I और II दोनों अनुसरण करते हैं',
      'केवल निष्कर्ष I अनुसरण करता है',
      'केवल निष्कर्ष II अनुसरण करता है',
    ],
    correctIndex: 2,
    explanationEn:
      'Conclusion I directly follows because high-value interbank transactions beyond business hours are explicitly allowed via authorized electronic platforms. Conclusion II does NOT follow because manual channels are restricted only "beyond business hours", not irrespective of timing.',
    explanationHi:
      'निष्कर्ष I सही है क्योंकि व्यावसायिक घंटों के बाद उच्च-मूल्य लेनदेन अधिकृत इलेक्ट्रॉनिक प्लेटफ़ॉर्म से किए जा सकते हैं। निष्कर्ष II गलत है क्योंकि मैन्युअल प्रोसेसिंग पर प्रतिबंध केवल "व्यावसायिक घंटों के बाद" है, हर समय के लिए नहीं।',
  },
  {
    id: 'cgl26_30s2_q14',
    topic: 'Coding-Decoding',
    questionEn:
      'In a certain code language, "INDEPENDENCE" is written as "JNEEQEODFNDE". How will "REPRESENTATION" be written?',
    questionHi:
      'एक निश्चित कूट भाषा में, “INDEPENDENCE” को “JNEEQEODFNDE” लिखा जाता है। उसी कूट भाषा में “REPRESENTATION” को कैसे लिखा जाएगा?',
    optionsEn: [
      'SEQRFSFNUAUIPN',
      'SEQRSFFNUAUIPN',
      'SEQRFSNAUFUIPN',
      'SEQRSFFNUAIUPN',
    ],
    optionsHi: [
      'SEQRFSFNUAUIPN',
      'SEQRSFFNUAUIPN',
      'SEQRFSNAUFUIPN',
      'SEQRSFFNUAIUPN',
    ],
    correctIndex: 0,
    explanationEn:
      'Pattern: Odd-positioned letters (1st, 3rd, 5th, ...) shift by +1, while even-positioned letters remain unchanged (+0).\n• INDEPENDENCE → (I+1)N(D+1)E(P+1)E(N+1)D(E+1)N(C+1)E = JNEEQEODFNDE.\n• REPRESENTATION → (R+1)E(P+1)R(E+1)S(E+1)N(T+1)A(T+1)I(O+1)N = SEQRFSFNUAUIPN.',
    explanationHi:
      'नियम: विषम स्थानों (1, 3, 5, ...) के अक्षरों में +1 जोड़ा गया है और सम स्थानों (2, 4, 6, ...) के अक्षर अपरिवर्तित रखे गए हैं।\n• REPRESENTATION → S E Q R F S F N U A U I P N = SEQRFSFNUAUIPN।',
  },
  {
    id: 'cgl26_30s2_q15',
    topic: 'Missing Number Matrix',
    questionEn:
      'In the following question, a matrix of numbers is given. These numbers follow a certain pattern either row-wise or column-wise. Identify this pattern and choose the missing number accordingly.',
    questionHi:
      'निम्नलिखित प्रश्न में, संख्याओं का एक आव्यूह दिया गया है। ये संख्याएँ या तो पंक्ति-वार अथवा स्तंभ-वार किसी निश्चित स्वरूप का पालन करती हैं। इस स्वरूप की पहचान कीजिए तथा उसके अनुसार लुप्त संख्या ज्ञात कीजिए।',
    matrix: [
      ['22', '44', '36'],
      ['16', '28', '24'],
      ['6', '16', '12'],
      ['12', '32', '?'],
    ],
    optionsEn: ['18', '34', '24', '40'],
    optionsHi: ['18', '34', '24', '40'],
    correctIndex: 2,
    explanationEn:
      'Column-wise pattern: (Row 1 − Row 2) = Row 3, and (Row 3 × 2) = Row 4.\n• Column 1: 22 − 16 = 6, and 6 × 2 = 12.\n• Column 2: 44 − 28 = 16, and 16 × 2 = 32.\n• Column 3: 36 − 24 = 12, and 12 × 2 = 24.',
    explanationHi:
      'स्तंभ-वार नियम: (पंक्ति 1 − पंक्ति 2) = पंक्ति 3, तथा (पंक्ति 3 × 2) = पंक्ति 4।\n• स्तंभ 1: 22 − 16 = 6, 6 × 2 = 12।\n• स्तंभ 2: 44 − 28 = 16, 16 × 2 = 32।\n• स्तंभ 3: 36 − 24 = 12, 12 × 2 = 24।',
  },
  {
    id: 'cgl26_30s2_q16',
    topic: 'Blood Relations',
    questionEn:
      'If M + N means M is the husband of N; M - N means M is the sister of N; M * N means M is the son of N, what does A * B - C + D mean?',
    questionHi:
      'अगर M + N का मतलब है कि M, N का पति है; M - N का मतलब है कि M, N की बहन है; M * N का मतलब है कि M, N का बेटा है, तो A * B - C + D का क्या मतलब है?',
    optionsEn: [
      "A is the son of C's husband.",
      'A is the brother of C.',
      'A is the grandson of D.',
      'A is the nephew of C.',
    ],
    optionsHi: [
      'A, C के पति का बेटा है।',
      'A, C का भाई है।',
      'A, D का पोता है।',
      'A, C का भतीजा/भांजा है।',
    ],
    correctIndex: 3,
    explanationEn:
      'Decoding A * B - C + D:\n• A * B ⇒ A is the son of B.\n• B - C ⇒ B is the sister of C.\n• C + D ⇒ C is the husband of D.\nSince A is the son of C’s sister (B), A is the nephew of C.',
    explanationHi:
      'A * B - C + D का अर्थ:\n• A * B ⇒ A, B का बेटा है।\n• B - C ⇒ B, C की बहन है।\n• C + D ⇒ C, D का पति है।\nचूँकि A, C की बहन (B) का बेटा है, इसलिए A, C का भांजा (nephew) है।',
  },
  {
    id: 'cgl26_30s2_q17',
    topic: 'Decision Making',
    questionEn:
      'You have a brilliant subordinate who produces the highest quality work in the office. However, their internal need for perfection is so high that they regularly miss project deadlines by days, causing the entire department to scramble. When you point this out, they break down, saying their self-worth is entirely tied to the "perfection" of their output and that any compromise feels like a "personal failure." What is the most structurally sound intervention?',
    questionHi:
      'आपके पास एक बहुत काबिल कर्मचारी है जो ऑफ़िस में सबसे बेहतरीन काम करता है। लेकिन, हर चीज़ को एकदम सही (परफ़ेक्ट) करने की उनकी चाहत इतनी ज़्यादा है कि वे अक्सर प्रोजेक्ट की डेडलाइन से कई दिन पीछे रह जाते हैं, जिससे पूरे डिपार्टमेंट में अफ़रा-तफ़री मच जाती है। जब आप उन्हें यह बात बताते हैं, तो वे भावुक हो जाते हैं और कहते हैं कि उनकी अपनी अहमियत पूरी तरह से उनके काम की "परफ़ेक्शन" पर टिकी है और किसी भी तरह का समझौता उन्हें "अपनी व्यक्तिगत नाकामी" जैसा लगता है। इस स्थिति में सबसे सही और असरदार कदम क्या होगा?',
    optionsEn: [
      'Tell them that they must stop being a perfectionist or they will be fired, as business requires speed.',
      'Acknowledge their perfectionism and define realistic quality thresholds for each project stage.',
      'Reduce their workload by 50% so they have more time to perfect the few tasks they do receive.',
      'Stop giving them any deadlines so they can work at their own pace without stress.',
    ],
    optionsHi: [
      'उन्हें बता दें कि उन्हें हर चीज़ में परफ़ेक्शन की चाहत छोड़नी होगी, वरना उन्हें नौकरी से निकाल दिया जाएगा, क्योंकि बिज़नेस में रफ़्तार की ज़रूरत होती है।',
      'उनके परफेक्शनिज़्म को समझें और हर प्रोजेक्ट स्टेज के लिए क्वालिटी के ऐसे स्टैंडर्ड तय करें जो असल में हासिल किए जा सकें।',
      'उनके काम का बोझ 50% कम करें ताकि उन्हें जो कुछ काम मिलें, उन्हें बेहतर ढंग से पूरा करने के लिए उनके पास ज़्यादा समय हो।',
      'उन्हें कोई डेडलाइन देना बंद करें ताकि वे बिना किसी तनाव के अपनी गति से काम कर सकें।',
    ],
    correctIndex: 1,
    explanationEn:
      'A constructive, structurally sound management approach validates the employee’s strength while establishing clear, measurable stage-wise quality benchmarks so deadlines are met without hurting morale or department fairness.',
    explanationHi:
      'सही और संतुलित प्रबंधन कदम यह है कि कर्मचारी की गुणवत्ता के प्रति निष्ठा को सराहा जाए और साथ ही प्रत्येक चरण के लिए स्पष्ट व व्यावहारिक मानक तय किए जाएँ ताकि समय-सीमा का पालन हो सके।',
  },
  {
    id: 'cgl26_30s2_q18',
    topic: 'Statement & Assumption',
    questionEn:
      'To manage the increasing energy demand in the city, the local council has proposed providing substantial subsidies to residents who install solar panels on their rooftops. Which of the following assumptions underlies the argument for providing these subsidies?',
    questionHi:
      'शहर में बढ़ती ऊर्जा माँग का प्रबंधन करने के लिए स्थानीय परिषद ने उन निवासियों को पर्याप्त सब्सिडी देने का प्रस्ताव रखा है, जो अपने घरों की छतों पर सौर पैनल स्थापित करेंगे। निम्नलिखित में से कौन-सी मान्यता इस सब्सिडी प्रदान करने के पक्ष में दिए गए तर्क का आधार है?',
    optionsEn: [
      'Providing financial incentives for solar adoption is the only way to meet future energy demands.',
      "The current infrastructure is entirely unable to support the city's growing energy consumption.",
      'Financial costs are a significant barrier to residents adopting solar technology.',
      'Solar panels installed on residential rooftops will eliminate the need for power plants.',
    ],
    optionsHi: [
      'सौर ऊर्जा अपनाने के लिए वित्तीय प्रोत्साहन प्रदान करना भविष्य की ऊर्जा आवश्यकताओं को पूरा करने का एकमात्र उपाय है।',
      'वर्तमान अवसंरचना शहर की बढ़ती ऊर्जा खपत को पूरा करने में पूरी तरह असमर्थ है।',
      'वित्तीय लागत, निवासियों द्वारा सौर प्रौद्योगिकी अपनाने में एक महत्वपूर्ण बाधा है।',
      'आवासीय भवनों की छतों पर स्थापित सौर पैनल विद्युत संयंत्रों की आवश्यकता को समाप्त कर देंगे।',
    ],
    correctIndex: 2,
    explanationEn:
      'Offering substantial subsidies only makes logical sense under the assumption that high upfront financial cost currently deters residents from adopting solar panels. Options A, B, and D use extreme words ("only", "entirely", "eliminate") that go beyond the statement.',
    explanationHi:
      'पर्याप्त सब्सिडी देने का तर्क इसी मान्यता पर आधारित है कि वित्तीय लागत निवासियों के लिए सौर पैनल लगाने में एक बड़ी बाधा है। अन्य विकल्प अतिशयोक्तिपूर्ण ("एकमात्र", "पूरी तरह", "समाप्त") हैं।',
  },
  {
    id: 'cgl26_30s2_q19',
    topic: 'Arithmetic Reasoning',
    questionEn:
      'The average age of 3 friends is 27. If a new friend joins, the average becomes 28. What is the age of the new friend?',
    questionHi:
      '3 दोस्तों की औसत आयु 27 है। अगर एक नया दोस्त जुड़ता है, तो औसत 28 हो जाती है। नए दोस्त की आयु क्या है?',
    optionsEn: ['29', '30', '31', '32'],
    optionsHi: ['29', '30', '31', '32'],
    correctIndex: 2,
    explanationEn:
      'Sum of ages of 3 friends = 3 × 27 = 81.\nSum of ages of 4 friends = 4 × 28 = 112.\nAge of the new friend = 112 − 81 = 31 years.',
    explanationHi:
      '3 दोस्तों की आयु का योग = 3 × 27 = 81।\n4 दोस्तों की आयु का योग = 4 × 28 = 112।\nनए दोस्त की आयु = 112 − 81 = 31 वर्ष।',
  },
  {
    id: 'cgl26_30s2_q20',
    topic: 'Arithmetic Reasoning',
    questionEn:
      '3 people can do a job in 12 days. How many people are needed to finish it in 4 days?',
    questionHi:
      '3 लोग एक काम को 12 दिनों में कर सकते हैं। इसे 4 दिनों में पूरा करने के लिए कितने लोगों की ज़रूरत होगी?',
    optionsEn: ['6', '8', '9', '12'],
    optionsHi: ['6', '8', '9', '12'],
    correctIndex: 2,
    explanationEn:
      'Using M₁ × D₁ = M₂ × D₂:\n3 × 12 = M₂ × 4 ⇒ M₂ = 36 / 4 = 9 people.',
    explanationHi:
      'सूत्र M₁ × D₁ = M₂ × D₂ का उपयोग करने पर:\n3 × 12 = M₂ × 4 ⇒ M₂ = 36 / 4 = 9 लोग।',
  },
  {
    id: 'cgl26_30s2_q21',
    topic: 'Number Series',
    questionEn: 'Complete the pattern: 24, 16, 48, 32, 96, ?',
    questionHi: 'इस क्रम को पूरा करें: 24, 16, 48, 32, 96, ?',
    optionsEn: ['100', '64', '78', '36'],
    optionsHi: ['100', '64', '78', '36'],
    correctIndex: 1,
    explanationEn:
      'There are two interleaved series, each multiplying by 2:\n• Odd positions: 24 → 48 → 96\n• Even positions: 16 → 32 → 64.\nHence the next number is 64.',
    explanationHi:
      'यहाँ दो एकांतर श्रृंखलाएँ हैं जिनमें प्रत्येक पद दोगुना हो रहा है:\n• विषम स्थान: 24 → 48 → 96\n• सम स्थान: 16 → 32 → 64।\nअतः अगला पद 64 है।',
  },
  {
    id: 'cgl26_30s2_q22',
    topic: 'Course of Action',
    questionEn:
      'Read the following statement carefully and identify the action that follows.\nStatement: More young people are addicted to social media.\nCourse of Action:\n1. Promote awareness about digital wellness.\n2. Ban all social media platforms.',
    questionHi:
      'निम्नलिखित कथन को ध्यानपूर्वक पढ़ें और उसके बाद की कार्रवाई की पहचान करें।\nकथन: ज्यादा युवा सोशल मीडिया के आदी हो रहे हैं।\nकार्रवाई:\n1. डिजिटल स्वास्थ्य के बारे में जागरूकता बढ़ाएँ।\n2. सभी सोशल मीडिया प्लेटफॉर्म पर प्रतिबंध लगाएँ।',
    optionsEn: ['Only 1', 'Only 2', 'Both follow', 'Neither follows'],
    optionsHi: ['केवल 1', 'केवल 2', 'दोनों अनुसरण करते हैं', 'कोई भी अनुसरण नहीं करता है'],
    correctIndex: 0,
    explanationEn:
      'Promoting digital wellness awareness (Action 1) is practical and constructive. Banning all social media platforms (Action 2) is extreme and impractical. Therefore, only Action 1 follows.',
    explanationHi:
      'डिजिटल स्वास्थ्य के प्रति जागरूकता बढ़ाना (कार्रवाई 1) व्यावहारिक और सकारात्मक कदम है। सभी सोशल मीडिया प्लेटफॉर्म पर प्रतिबंध लगाना (कार्रवाई 2) अव्यावहारिक व अतिवादी कदम है। अतः केवल 1 अनुसरण करता है।',
  },
  {
    id: 'cgl26_30s2_q23',
    topic: 'Logical Analysis',
    questionEn:
      'How many centres were there if the roll numbers are: 223456, 223478, 224123, 225987, 223999',
    questionHi:
      'यदि रोल नंबर इस प्रकार हैं तो कितने केंद्र थे: 223456, 223478, 224123, 225987, 223999',
    optionsEn: ['1', '2', '3', '4'],
    optionsHi: ['1', '2', '3', '4'],
    correctIndex: 2,
    explanationEn:
      'The first 3 digits of each 6-digit roll number represent the examination centre code:\n• 223456, 223478, 223999 → Centre 223\n• 224123 → Centre 224\n• 225987 → Centre 225\nThus, there are 3 distinct centres.',
    explanationHi:
      'प्रत्येक 6-अंकीय रोल नंबर के पहले 3 अंक परीक्षा केंद्र कोड दर्शाते हैं: 223, 224 और 225। अतः कुल 3 अलग-अलग केंद्र थे।',
  },
  {
    id: 'cgl26_30s2_q24',
    topic: 'Number Classification',
    questionEn: 'Identify the number that does not belong to the group:',
    questionHi: 'उस संख्या को पहचानें जो समूह से संबंधित नहीं है:',
    optionsEn: ['1441', '2197', '2744', '3375'],
    optionsHi: ['1441', '2197', '2744', '3375'],
    correctIndex: 0,
    explanationEn:
      '2197 = 13³, 2744 = 14³, and 3375 = 15³ are all perfect cubes. 1441 is not a perfect cube (11³ = 1331, 12³ = 1728), so 1441 does not belong to the group.',
    explanationHi:
      '2197 = 13³, 2744 = 14³ तथा 3375 = 15³ सभी पूर्ण घन संख्याएँ हैं, जबकि 1441 पूर्ण घन नहीं है। अतः 1441 समूह से भिन्न है।',
  },
  {
    id: 'cgl26_30s2_q25',
    topic: 'Box Puzzle',
    questionEn:
      'Direction: Study the following information carefully and answer the question given below.\nIn a soft toy shop, eight boxes are kept in the form of a stack. The boxes are numbered in ascending order from 1 to 8 such that the topmost box is numbered as 1 while the bottom-most box is numbered as 8. Each box contains different soft toys – Mickey Mouse, Dog, Rabbit, Teddy Bear, Whale, Tiger, Monkey, and Duck.\nThe box of Teddy bear is kept at the top. There are four boxes between the box of Teddy bear and the box of Duck. The box of Monkey is kept between the box of Rabbit and box number 6. Neither the box of Dog nor the box of Rabbit is kept at the bottom. The box of Whale is kept above the box of Tiger, which is kept above the box of Rabbit.\nWhich soft toy does box number 2 contain?',
    questionHi:
      'निर्देश: निम्नलिखित जानकारी का ध्यानपूर्वक अध्ययन कीजिए और नीचे दिए गए प्रश्न का उत्तर दीजिए।\nएक सॉफ्ट टॉय की दुकान में, आठ डिब्बे एक ढेर में रखे हैं। डिब्बों को 1 से 8 तक बढ़ते क्रम में इस प्रकार क्रमांकित किया गया है कि सबसे ऊपर वाले डिब्बे का क्रमांक 1 है जबकि सबसे नीचे वाले डिब्बे का क्रमांक 8 है। प्रत्येक डिब्बे में अलग-अलग सॉफ्ट टॉय हैं - मिकी माउस, कुत्ता, खरगोश, टेडी बियर, व्हेल, बाघ, बंदर और बत्तख। टेडी बियर का डिब्बा सबसे ऊपर रखा है। टेडी बियर के डिब्बे और बत्तख के डिब्बे के बीच चार डिब्बे हैं। बंदर का डिब्बा खरगोश के डिब्बे और डिब्बा संख्या 6 के बीच रखा है। न तो कुत्ते का डिब्बा और न ही खरगोश का डिब्बा सबसे नीचे रखा है। व्हेल का डिब्बा बाघ के डिब्बे के ऊपर रखा है, जो खरगोश के डिब्बे के ऊपर रखा है।\nडिब्बा संख्या 2 में कौन सा सॉफ्ट टॉय है?',
    optionsEn: ['Whale', 'Rabbit', 'Tiger', 'Monkey'],
    optionsHi: ['व्हेल', 'खरगोश', 'बाघ', 'बंदर'],
    correctIndex: 0,
    explanationEn:
      'Arranging boxes 1 (top) to 8 (bottom):\n• Box 1 = Teddy Bear.\n• 4 boxes between Teddy Bear (1) and Duck ⇒ Box 6 = Duck.\n• Whale > Tiger > Rabbit, and Monkey is between Rabbit and Box 6 ⇒ Box 2 = Whale, Box 3 = Tiger, Box 4 = Rabbit, Box 5 = Monkey.\n• Dog is not at the bottom ⇒ Box 7 = Dog, Box 8 = Mickey Mouse.\nHence, Box 2 contains Whale.',
    explanationHi:
      'डिब्बों को ऊपर (1) से नीचे (8) व्यवस्थित करने पर:\n• डिब्बा 1 = टेडी बियर; 4 डिब्बों के अंतर पर डिब्बा 6 = बत्तख।\n• व्हेल > बाघ > खरगोश, तथा बंदर खरगोश व डिब्बा 6 के बीच है ⇒ डिब्बा 2 = व्हेल, डिब्बा 3 = बाघ, डिब्बा 4 = खरगोश, डिब्बा 5 = बंदर।\n• कुत्ता सबसे नीचे नहीं है ⇒ डिब्बा 7 = कुत्ता, डिब्बा 8 = मिकी माउस।\nअतः डिब्बा संख्या 2 में व्हेल है।',
  },
];
