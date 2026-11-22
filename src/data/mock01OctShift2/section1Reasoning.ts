import { Question } from '../../types/exam';

export const SECTION_1_REASONING_O1S2: Question[] = [
  {
    id: 'cgl26_01o2_q1',
    topic: 'Mathematical Operations',
    questionEn:
      'Correct the equation by interchanging the two signs.\n15 + 9 − 6 × 3 ÷ 2 = 20',
    questionHi:
      'दोनों चिह्नों को आपस में बदलकर समीकरण को सही करें।\n15 + 9 − 6 × 3 ÷ 2 = 20',
    optionsEn: ['× and ÷', '+ and −', '− and ×', '÷ and −'],
    optionsHi: ['× और ÷', '+ और −', '− और ×', '÷ और −'],
    correctIndex: 0,
    explanationEn:
      'Interchanging × and ÷ in the equation:\n15 + 9 − 6 ÷ 3 × 2\nUsing BODMAS:\n= 15 + 9 − 2 × 2\n= 15 + 9 − 4 = 20 (RHS). Hence, option (A) is correct.',
    explanationHi:
      '× और ÷ को आपस में बदलने पर:\n15 + 9 − 6 ÷ 3 × 2\nBODMAS के अनुसार:\n= 15 + 9 − 2 × 2 = 24 − 4 = 20। अतः विकल्प (A) सही है।',
  },
  {
    id: 'cgl26_01o2_q2',
    topic: 'Number Analogy',
    questionEn: 'Find the missing number: 8 : 28 :: 27 : ?',
    questionHi: 'लुप्त संख्या ज्ञात कीजिए: 8 : 28 :: 27 : ?',
    optionsEn: ['63', '65', '67', '68'],
    optionsHi: ['63', '65', '67', '68'],
    correctIndex: 1,
    explanationEn:
      'Pattern: n³ : (n + 1)³ + 1.\nFirst pair: 8 = 2³ and 28 = 3³ + 1 = 27 + 1.\nSecond pair: 27 = 3³, so the missing number = 4³ + 1 = 64 + 1 = 65.',
    explanationHi:
      'पैटर्न: n³ : (n + 1)³ + 1।\nपहला युग्म: 8 = 2³ तथा 28 = 3³ + 1 = 28।\nदूसरा युग्म: 27 = 3³, अतः अगली संख्या = 4³ + 1 = 64 + 1 = 65।',
  },
  {
    id: 'cgl26_01o2_q3',
    topic: 'Blood Relations',
    questionEn:
      'A man introduces a woman saying, “She is the daughter of the only son of my father’s wife.” How is the woman related to the man?',
    questionHi:
      'एक आदमी एक औरत का परिचय देते हुए कहता है, “वह मेरे पिता की पत्नी के इकलौते बेटे की बेटी है।” औरत का उस आदमी से क्या रिश्ता है?',
    optionsEn: ['Daughter', 'Sister', 'Niece', 'Cousin'],
    optionsHi: ['बेटी', 'बहन', 'भतीजी', 'चचेरा'],
    correctIndex: 0,
    explanationEn:
      "My father's wife = My mother.\nThe only son of my mother = The man himself.\nDaughter of the man himself = His daughter. Thus, the woman is the man's Daughter.",
    explanationHi:
      'पिता की पत्नी = माँ; माँ का इकलौता बेटा = स्वयं वह आदमी। अतः उसकी बेटी उस आदमी की "बेटी (Daughter)" होगी।',
  },
  {
    id: 'cgl26_01o2_q4',
    topic: 'Syllogism',
    questionEn:
      'In the question below three statements are given followed by four conclusions numbered I, II, III and IV. You must take the given statements to be true even if they seem to be at variance with commonly known facts and then decide which of the given conclusions logically follows from the given statements, disregarding commonly known facts.\nStatements:\nAll doctors attend conferences.\nSome conference attendees are not experienced.\nAll experienced people lead research teams.\nConclusions:\nI. Some doctors are not experienced.\nII. Some conference attendees lead research teams.\nIII. All experienced people attend conferences.\nIV. Some research team leaders are not conference attendees.',
    questionHi:
      'नीचे दिए गए प्रश्न में तीन कथन दिए गए हैं और उनके बाद I, II, III और IV संख्यांकित चार निष्कर्ष दिए गए हैं। आपको दिए गए कथनों को सत्य मानना है, भले ही वे सामान्यतः ज्ञात तथ्यों से भिन्न प्रतीत होते हों, और फिर सामान्यतः ज्ञात तथ्यों की उपेक्षा करते हुए यह तय कीजिए कि दिए गए निष्कर्षों में से कौन-सा निष्कर्ष, तार्किक रूप से दिए गए कथनों का अनुसरण करता है।\nकथन:\nसभी डॉक्टर सम्मेलनों में भाग लेते हैं।\nसम्मेलनों में भाग लेने वाले कुछ लोग अनुभवी नहीं हैं।\nसभी अनुभवी लोग अनुसंधान टीमों का नेतृत्व करते हैं।\nनिष्कर्ष:\nI. कुछ डॉक्टर अनुभवी नहीं हैं।\nII. सम्मेलनों में भाग लेने वाले कुछ लोग अनुसंधान टीमों का नेतृत्व करते हैं।\nIII. सभी अनुभवी लोग सम्मेलनों में भाग लेते हैं।\nIV. अनुसंधान टीमों का नेतृत्व करने वाले कुछ लोग सम्मेलनों में भाग लेने वाले नहीं हैं।',
    optionsEn: [
      'Only I and II follow',
      'Only III follows',
      'Only II and III follow',
      'None follows',
    ],
    optionsHi: [
      'केवल I और II अनुसरण करते हैं',
      'केवल III अनुसरण करता है',
      'केवल II और III अनुसरण करते हैं',
      'कोई भी अनुसरण नहीं करता है',
    ],
    correctIndex: 3,
    explanationEn:
      'From the statements:\n• Doctors ⊂ Conference attendees (CA).\n• Some CA are NOT Experienced (E) — this does NOT guarantee any overlap between CA and E, nor does it force Doctors outside E.\n• E ⊂ Research team leaders (RTL).\nTherefore: I (not definite; all doctors could be experienced), II (not definite; CA and E/RTL could be disjoint), III (not definite; E need not be inside CA), IV (not definite; all RTL could be inside CA). Hence, None follows.',
    explanationHi:
      'कथनों के अनुसार: सभी डॉक्टर सम्मेलन प्रतिभागी हैं, कुछ प्रतिभागी अनुभवी नहीं हैं, और सभी अनुभवी लोग अनुसंधान टीमों का नेतृत्व करते हैं। चूँकि सम्मेलन प्रतिभागियों और अनुभवी लोगों के बीच कोई निश्चित सकारात्मक संबंध नहीं है और न ही डॉक्टरों का अनुभवी लोगों से कोई निश्चित निषेध है, इसलिए कोई भी निष्कर्ष निश्चित रूप से अनुसरण नहीं करता।',
  },
  {
    id: 'cgl26_01o2_q5',
    topic: 'Number Series',
    questionEn:
      'Which of the following numbers will replace the question mark (?) in the given series?\n1, 9, 65, 457, ?',
    questionHi:
      'निम्न श्रेणी में प्रश्न चिन्ह (?) के स्थान पर कौन-सी संख्या आएगी?\n1, 9, 65, 457, ?',
    optionsEn: ['3125', '3201', '3850', '4265'],
    optionsHi: ['3125', '3201', '3850', '4265'],
    correctIndex: 1,
    explanationEn:
      'Each term is obtained by multiplying the previous term by 7 and adding 2:\n1 × 7 + 2 = 9\n9 × 7 + 2 = 65\n65 × 7 + 2 = 457\n457 × 7 + 2 = 3199 + 2 = 3201.',
    explanationHi:
      'श्रेणी का नियम (पिछली संख्या × 7 + 2) है:\n1 × 7 + 2 = 9\n9 × 7 + 2 = 65\n65 × 7 + 2 = 457\n457 × 7 + 2 = 3199 + 2 = 3201।',
  },
  {
    id: 'cgl26_01o2_q6',
    topic: 'Alphabetical Arrangement',
    questionEn:
      "How many letters will remain at the same position in the word 'PRINTER' when arranged alphabetically?",
    questionHi:
      "शब्द 'PRINTER' के अक्षरों को वर्णानुक्रम में व्यवस्थित करने पर कितने अक्षर अपने मूल स्थान पर बने रहेंगे?",
    optionsEn: ['0', '1', '2', '3'],
    optionsHi: ['0', '1', '2', '3'],
    correctIndex: 0,
    explanationEn:
      'Original word:       P  R  I  N  T  E  R\nAlphabetical order:  E  I  N  P  R  R  T\nComparing position by position (1 to 7): none of the letters match their original positions. Hence, 0.',
    explanationHi:
      'मूल शब्द: P R I N T E R\nवर्णानुक्रम: E I N P R R T\nसभी 7 स्थानों की तुलना करने पर एक भी अक्षर अपने मूल स्थान पर नहीं रहता। अतः उत्तर 0 है।',
  },
  {
    id: 'cgl26_01o2_q7',
    topic: 'Missing Number Matrix',
    questionEn:
      'In the following question, a matrix of numbers is given. These numbers follow a certain pattern either row-wise or column-wise. Identify this pattern and choose the missing number accordingly.',
    questionHi:
      'निम्नलिखित प्रश्न में, संख्याओं का एक आव्यूह दिया गया है। ये संख्याएँ या तो पंक्ति-वार अथवा स्तंभ-वार किसी निश्चित स्वरूप का पालन करती हैं। इस स्वरूप की पहचान कीजिए तथा उसके अनुसार लुप्त संख्या ज्ञात कीजिए।',
    matrix: [
      ['5', '4', '3'],
      ['6', '7', '2'],
      ['2', '2', '?'],
      ['15', '14', '6'],
    ],
    optionsEn: ['2', '1', '5', '4'],
    optionsHi: ['2', '1', '5', '4'],
    correctIndex: 1,
    explanationEn:
      'Column-wise pattern: (Row 1 × Row 2) ÷ Row 3 = Row 4.\n• Column 1: (5 × 6) ÷ 2 = 30 ÷ 2 = 15\n• Column 2: (4 × 7) ÷ 2 = 28 ÷ 2 = 14\n• Column 3: (3 × 2) ÷ ? = 6 ⇒ 6 ÷ ? = 6 ⇒ ? = 1.',
    explanationHi:
      'स्तंभ-वार नियम: (पहली संख्या × दूसरी संख्या) ÷ तीसरी संख्या = चौथी संख्या।\n• स्तंभ 1: (5 × 6) ÷ 2 = 15\n• स्तंभ 2: (4 × 7) ÷ 2 = 14\n• स्तंभ 3: (3 × 2) ÷ ? = 6 ⇒ ? = 1।',
  },
  {
    id: 'cgl26_01o2_q8',
    topic: 'Coded Blood Relations',
    questionEn:
      'Read the following information carefully and answer the question that follows.\n1. A + B means "A is the brother of B"\n2. A * B means "A is the father of B"\n3. A / B means "A is the mother of B"\nWhich of the following expressions correctly represents the relationship that P is the son of S?',
    questionHi:
      'नीचे दी गई जानकारी को ध्यान से पढ़ें और उसके बाद पूछे गए सवाल का जवाब दें।\n1. A + B का मतलब है "A, B का भाई है"\n2. A * B का मतलब है "A, B का पिता है"\n3. A / B का मतलब है "A, B की माँ है"\nइनमें से कौन-सा एक्सप्रेशन सही ढंग से यह बताता है कि P, S का बेटा है?',
    optionsEn: ['P + Q * S', 'P * Q / S', 'P + Q / S', 'S * P + Q'],
    optionsHi: ['P + Q * S', 'P * Q / S', 'P + Q / S', 'S * P + Q'],
    correctIndex: 3,
    explanationEn:
      'For P to be the son of S, S must be a parent of P and P must be male.\nChecking option (D) S * P + Q:\n• S * P ⇒ S is the father of P.\n• P + Q ⇒ P is the brother of Q (confirming P is male).\nTherefore, P is the son of S.',
    explanationHi:
      'विकल्प (D) S * P + Q की जाँच करने पर:\n• S * P ⇒ S, P का पिता है।\n• P + Q ⇒ P, Q का भाई है (अर्थात् P पुरुष है)।\nअतः स्पष्ट है कि P, S का बेटा है।',
  },
  {
    id: 'cgl26_01o2_q9',
    topic: 'Coded Blood Relations',
    questionEn:
      'Read the following instructions and answer the question that follows:\n1. A + B, then A is the brother of B.\n2. A % B, then A is the son of B.\n3. A & B, then A is the wife of B.\n4. A = B, then A is the husband of B.\n5. A @ B, then A is the daughter of B.\nIf C & D + E @ F = G @ H, then which of the following options is not correct?',
    questionHi:
      'नीचे दिए गए निर्देशों को पढ़ें और उसके बाद पूछे गए सवाल का जवाब दें:\n1. A + B, तो A, B का भाई है।\n2. A % B, तो A, B का बेटा है।\n3. A & B, तो A, B की पत्नी है।\n4. A = B, तो A, B का पति है।\n5. A @ B, तो A, B की बेटी है।\nअगर C & D + E @ F = G @ H है, तो इनमें से कौन-सा विकल्प सही नहीं है?',
    optionsEn: [
      'E is the granddaughter of H.',
      'C is the daughter-in-law of F.',
      'F is the mother of E.',
      'D is the son of G.',
    ],
    optionsHi: [
      'E, H की पोती है।',
      'C, F की बहू है।',
      'F, E की माँ है।',
      'D, G का बेटा है।',
    ],
    correctIndex: 2,
    explanationEn:
      'Decoding C & D + E @ F = G @ H:\n• C & D ⇒ C is the wife of D (D is male).\n• D + E ⇒ D is the brother of E.\n• E @ F ⇒ E is the daughter of F.\n• F = G ⇒ F is the husband of G (so F is male/father and G is female/mother).\n• G @ H ⇒ G is the daughter of H.\nThus, F is the FATHER of E, NOT the mother of E. Option (C) is incorrect.',
    explanationHi:
      'कूट हल करने पर: C, D की पत्नी है; D, E का भाई है; E, F की बेटी है; F, G का पति है (अतः F पुरुष/पिता है और G माता है); और G, H की बेटी है। इसलिए F, E का पिता है, माँ नहीं। अतः विकल्प (C) गलत है।',
  },
  {
    id: 'cgl26_01o2_q10',
    topic: 'Missing Number Matrix',
    questionEn:
      'In the following question, a matrix of numbers is given. These numbers follow a certain pattern either row-wise or column-wise. Identify this pattern and choose the missing number accordingly.',
    questionHi:
      'निम्नलिखित प्रश्न में संख्याओं का एक आव्यूह दिया गया है। ये संख्याएँ या तो पंक्ति-वार अथवा स्तंभ-वार किसी निश्चित प्रतिरूप का अनुसरण करती हैं। इस प्रतिरूप की पहचान करें और तदनुसार लुप्त संख्या ज्ञात करें।',
    matrix: [
      ['2', '3', '4'],
      ['4', '9', '2'],
      ['8', '27', '1'],
      ['?', '9', '2'],
    ],
    optionsEn: ['8', '12', '4', '16'],
    optionsHi: ['8', '12', '4', '16'],
    correctIndex: 2,
    explanationEn:
      'Column-wise pattern:\n• Column 3: 4 → (÷2) 2 → (÷2) 1 → (×2) 2\n• Column 2: 3 → (×3) 9 → (×3) 27 → (÷3) 9\n• Column 1: 2 → (×2) 4 → (×2) 8 → (÷2) 4\nEquivalently, Row 4 mirrors Row 2 across all columns: [4, 9, 2]. Hence, ? = 4.',
    explanationHi:
      'स्तंभ-वार पैटर्न:\n• स्तंभ 3: 4 ÷ 2 = 2, 2 ÷ 2 = 1, फिर 1 × 2 = 2\n• स्तंभ 2: 3 × 3 = 9, 9 × 3 = 27, फिर 27 ÷ 3 = 9\n• स्तंभ 1: 2 × 2 = 4, 4 × 2 = 8, फिर 8 ÷ 2 = 4।\nअतः लुप्त संख्या 4 है।',
  },
  {
    id: 'cgl26_01o2_q11',
    topic: 'Logical Rule Verification',
    questionEn:
      'In a secure database, roll numbers follow the format: [Digit A] [Digit B] [Digit C] where A × C = B + 2. Which of the following roll number is invalid?',
    questionHi:
      'एक सुरक्षित डेटाबेस में, रोल नंबर इस फ़ॉर्मेट में होते हैं: [अंक A] [अंक B] [अंक C] जहाँ A × C = B + 2 है। इनमें से कौन-सा रोल नंबर अमान्य है?',
    optionsEn: ['373', '462', '582', '6112'],
    optionsHi: ['373', '462', '582', '6112'],
    correctIndex: 3,
    explanationEn:
      'Checking the 3-digit format [A][B][C] with A × C = B + 2:\n• 373: 3 × 3 = 9 = 7 + 2 (Valid)\n• 462: 4 × 2 = 8 = 6 + 2 (Valid)\n• 582: 5 × 2 = 10 = 8 + 2 (Valid)\n• 6112: Has 4 digits (B = 11 is not a single digit) AND 6 × 2 = 12 ≠ 11 + 2 = 13 (Invalid).',
    explanationHi:
      'नियम A × C = B + 2 की जाँच:\n• 373: 3 × 3 = 9 = 7 + 2 (मान्य)\n• 462: 4 × 2 = 8 = 6 + 2 (मान्य)\n• 582: 5 × 2 = 10 = 8 + 2 (मान्य)\n• 6112: यह 4 अंकों का है तथा 6 × 2 = 12 ≠ 11 + 2 (13), अतः अमान्य है।',
  },
  {
    id: 'cgl26_01o2_q12',
    topic: 'Letter Series',
    questionEn:
      'Study the pattern in the given series and find the next set of letters in the series.\nKAN, OZR, SYV, ?',
    questionHi:
      'दी गई श्रृंखला के प्रतिरूप का अध्ययन कीजिए तथा श्रृंखला में अक्षरों के अगले समूह का पता लगाइए।\nKAN, OZR, SYV, ?',
    optionsEn: ['WXZ', 'WYZ', 'WWY', 'WXY'],
    optionsHi: ['WXZ', 'WYZ', 'WWY', 'WXY'],
    correctIndex: 0,
    explanationEn:
      'Position-wise shifts:\n• 1st letter (+4): K(11) → O(15) → S(19) → W(23)\n• 2nd letter (−1): A(1) → Z(26) → Y(25) → X(24)\n• 3rd letter (+4): N(14) → R(18) → V(22) → Z(26)\nCombining them gives WXZ.',
    explanationHi:
      'अक्षर-वार पैटर्न:\n• पहला अक्षर (+4): K → O → S → W\n• दूसरा अक्षर (−1): A → Z → Y → X\n• तीसरा अक्षर (+4): N → R → V → Z\nअतः अगला समूह WXZ होगा।',
  },
  {
    id: 'cgl26_01o2_q13',
    topic: 'Number Classification',
    questionEn: 'Select the odd number pair from the given alternatives.',
    questionHi: 'निम्नलिखित विकल्पों में से विषम संख्या युग्म का चयन कीजिए।',
    optionsEn: ['25, 650', '16, 272', '13, 186', '20, 420'],
    optionsHi: ['25, 650', '16, 272', '13, 186', '20, 420'],
    correctIndex: 2,
    explanationEn:
      'Pattern followed by three pairs is n : n² + n = n(n + 1):\n• 25 × 26 = 650\n• 16 × 17 = 272\n• 20 × 21 = 420\n• 13 × 14 = 182 ≠ 186.\nHence, (13, 186) is the odd pair.',
    explanationHi:
      'नियम: पहली संख्या n के लिए दूसरी संख्या = n × (n + 1)।\n• 25 × 26 = 650\n• 16 × 17 = 272\n• 20 × 21 = 420\n• किंतु 13 × 14 = 182 (186 नहीं)। अतः (13, 186) विषम है।',
  },
  {
    id: 'cgl26_01o2_q14',
    topic: 'Situational Judgement',
    questionEn:
      'Read the question carefully and choose the most appropriate option.\nYou are managing a community cleanliness drive. Participation is lower than expected because many residents believe the effort will not make a difference. What would you do?',
    questionHi:
      'प्रश्न को ध्यानपूर्वक पढ़ें और सबसे उपयुक्त विकल्प का चयन करें।\nआप एक सामुदायिक स्वच्छता अभियान का प्रबंधन कर रहे हैं। अपेक्षा से कम भागीदारी हो रही है क्योंकि अनेक निवासी यह मानते हैं कि इस प्रयास से कोई विशेष परिवर्तन नहीं आएगा। आप क्या करेंगे?',
    optionsEn: [
      'Criticize the residents publicly for not supporting the initiative.',
      'Cancel the drive because community participation is currently low.',
      'Continue silently without trying to involve additional community members.',
      'Engage residents positively and explain the benefits of participation.',
    ],
    optionsHi: [
      'पहल का समर्थन न करने के लिए निवासियों की सार्वजनिक रूप से आलोचना करें।',
      'वर्तमान में सामुदायिक भागीदारी कम होने के कारण अभियान को रद्द कर दें।',
      'अतिरिक्त सामुदायिक सदस्यों को शामिल करने का प्रयास किए बिना चुपचाप अभियान जारी रखें।',
      'निवासियों के साथ सकारात्मक रूप से संवाद करें और भागीदारी के लाभों को समझाएँ।',
    ],
    correctIndex: 3,
    explanationEn:
      'Effective community leadership addresses skepticism through constructive communication, awareness, and positive engagement rather than public criticism, cancellation, or passivity. Hence, option (D) is most appropriate.',
    explanationHi:
      'सकारात्मक नेतृत्व में आलोचना करने या अभियान रद्द करने के बजाय निवासियों से संवाद कर उन्हें भागीदारी के लाभ समझाना सबसे प्रभावी और रचनात्मक उपाय है। अतः विकल्प (D) सही है।',
  },
  {
    id: 'cgl26_01o2_q15',
    topic: 'Alphanumeric Analogy',
    questionEn:
      'What should come in place of question mark (?) in the following analogy?\nG7M : N14T :: U21A : ?',
    questionHi:
      'निम्नलिखित सादृश्य में प्रश्न चिह्न (?) के स्थान पर क्या आएगा?\nG7M : N14T :: U21A : ?',
    optionsEn: ['B28H', 'C28H', 'B27H', 'B28G'],
    optionsHi: ['B28H', 'C28H', 'B27H', 'B28G'],
    correctIndex: 0,
    explanationEn:
      'In G7M → N14T, each element increases by +7:\n• G(7) + 7 = N(14)\n• 7 + 7 = 14\n• M(13) + 7 = T(20)\nApplying +7 to U21A:\n• U(21) + 7 = 28 → 28 − 26 = B(2)\n• 21 + 7 = 28\n• A(1) + 7 = H(8)\nResult: B28H.',
    explanationHi:
      'G7M → N14T में प्रत्येक अक्षर और संख्या में +7 जोड़ा गया है।\nइसी प्रकार U21A में +7 करने पर:\n• U(21) + 7 = B(2)\n• 21 + 7 = 28\n• A(1) + 7 = H(8)\nअतः सही उत्तर B28H है।',
  },
  {
    id: 'cgl26_01o2_q16',
    topic: 'Syllogism',
    questionEn:
      'In the given question, a few statements have been given followed by conclusions based on them. Consider the statements to be true and answer which of the given conclusions logically follow the statement.\nStatements:\n1. All architects are planners.\n2. All planners are visionaries.\n3. No visionary is impractical.\nConclusions:\nI. All architects are visionaries.\nII. No architect is impractical.\nIII. Some visionaries are architects.\nIV. No planner is impractical.',
    questionHi:
      'दिए गए प्रश्न में, कुछ कथन दिए गए हैं और उनके बाद उन पर आधारित निष्कर्ष दिए गए हैं। कथनों को सत्य मानते हुए यह तय कीजिए कि दिए गए निष्कर्षों में से कौन-से निष्कर्ष तार्किक रूप से कथनों का अनुसरण करते हैं।\nकथन:\n1. सभी वास्तुकार, योजनाकार हैं।\n2. सभी योजनाकार, दूरदर्शी हैं।\n3. कोई भी दूरदर्शी, अव्यावहारिक (impractical) नहीं है।\nनिष्कर्ष:\nI. सभी वास्तुकार, दूरदर्शी हैं।\nII. कोई भी वास्तुकार, अव्यावहारिक नहीं है।\nIII. कुछ दूरदर्शी, वास्तुकार हैं।\nIV. कोई भी योजनाकार, अव्यावहारिक नहीं है।',
    optionsEn: [
      'Only I, II and IV follow',
      'Only I and III follow',
      'All four follow',
      'Only II and III follow',
    ],
    optionsHi: [
      'केवल I, II और IV अनुसरण करते हैं',
      'केवल I और III अनुसरण करते हैं',
      'सभी चारों अनुसरण करते हैं',
      'केवल II और III अनुसरण करते हैं',
    ],
    correctIndex: 2,
    explanationEn:
      'Venn hierarchy: Architects ⊂ Planners ⊂ Visionaries, and Visionaries ∩ Impractical = ∅.\n• I: Architects ⊂ Visionaries ⇒ True.\n• II: Since Architects ⊂ Visionaries and no Visionary is Impractical, no Architect is Impractical ⇒ True.\n• III: All Architects are Visionaries implies Some Visionaries are Architects ⇒ True.\n• IV: Since Planners ⊂ Visionaries, no Planner is Impractical ⇒ True.\nHence, All four follow.',
    explanationHi:
      'कथनों के अनुसार: वास्तुकार ⊂ योजनाकार ⊂ दूरदर्शी, तथा कोई भी दूरदर्शी अव्यावहारिक नहीं है। अतः सभी वास्तुकार दूरदर्शी हैं (I सही), कुछ दूरदर्शी वास्तुकार हैं (III सही), और न तो कोई वास्तुकार (II सही) और न ही कोई योजनाकार (IV सही) अव्यावहारिक है। इसलिए सभी चारों अनुसरण करते हैं।',
  },
  {
    id: 'cgl26_01o2_q17',
    topic: 'Syllogism',
    questionEn:
      'In the given question, a few statements have been given followed by conclusions based on them. Consider the statements to be true and answer which of the given conclusions logically follow the statement.\nStatements:\n1. No antibiotic is harmless.\n2. Some medicines are antibiotics.\n3. All prescribed drugs are medicines.\nConclusions:\nI. Some medicines are not harmless.\nII. No prescribed drug is harmless.\nIII. Some prescribed drugs are antibiotics.\nIV. Some antibiotics are prescribed drugs.',
    questionHi:
      'दिए गए प्रश्न में, कुछ कथन दिए गए हैं और उनके बाद उन पर आधारित निष्कर्ष दिए गए हैं। कथनों को सत्य मानते हुए यह तय कीजिए कि दिए गए निष्कर्षों में से कौन-से निष्कर्ष तार्किक रूप से कथनों का अनुसरण करते हैं।\nकथन:\n1. कोई भी प्रतिजैविक हानिरहित नहीं है।\n2. कुछ मेडिसिन, प्रतिजैविक हैं।\n3. सभी निर्धारित दवाएँ, मेडिसिन हैं।\nनिष्कर्ष:\nI. कुछ मेडिसिन हानिरहित नहीं हैं।\nII. कोई भी निर्धारित (prescribed) दवा हानिरहित नहीं है।\nIII. कुछ निर्धारित दवाएँ प्रतिजैविक हैं।\nIV. कुछ प्रतिजैविक निर्धारित दवाएँ हैं।',
    optionsEn: [
      'Only I, III and IV follow',
      'Only I and III follow',
      'Only I follows',
      'Only I and IV follow',
    ],
    optionsHi: [
      'केवल I, III और IV अनुसरण करते हैं',
      'केवल I और III अनुसरण करते हैं',
      'केवल I अनुसरण करता है',
      'केवल I और IV अनुसरण करते हैं',
    ],
    correctIndex: 2,
    explanationEn:
      '• Conclusion I: Some medicines are antibiotics, and no antibiotic is harmless ⇒ those medicines that are antibiotics cannot be harmless ⇒ Some medicines are not harmless (Follows).\n• Conclusions II, III, IV: All prescribed drugs lie inside medicines, but there is no definite link between prescribed drugs and antibiotics or harmless items. Hence, Only I follows.',
    explanationHi:
      'कुछ मेडिसिन प्रतिजैविक हैं और कोई भी प्रतिजैविक हानिरहित नहीं है, इसलिए वे मेडिसिन हानिरहित नहीं हैं (निष्कर्ष I सत्य)। निर्धारित दवाओं और प्रतिजैविक या हानिरहित के बीच कोई निश्चित संबंध नहीं दिया गया है, अतः II, III व IV निश्चित नहीं हैं। केवल I अनुसरण करता है।',
  },
  {
    id: 'cgl26_01o2_q18',
    topic: 'Mathematical Operations',
    questionEn:
      'Which two signs should be interchanged to make the equation below mathematically correct?\n16 − 8 ÷ 4 + 5 × 2 = 8',
    questionHi:
      'निम्नलिखित समीकरण को गणितीय रूप से सही बनाने के लिए किन दो चिह्नों का आपस में अदल-बदल किया जाना चाहिए?\n16 − 8 ÷ 4 + 5 × 2 = 8',
    optionsEn: ['÷ and ×', '− and +', '× and −', '÷ and +'],
    optionsHi: ['÷ और ×', '− और +', '× और −', '÷ और +'],
    correctIndex: 1,
    explanationEn:
      'Interchanging − and +:\n16 + 8 ÷ 4 − 5 × 2\nApplying BODMAS:\n= 16 + 2 − 10\n= 18 − 10 = 8 (RHS). Hence, option (B) is correct.',
    explanationHi:
      '− और + को आपस में बदलने पर:\n16 + 8 ÷ 4 − 5 × 2\nBODMAS से: 16 + 2 − 10 = 8। अतः विकल्प (B) सही है।',
  },
  {
    id: 'cgl26_01o2_q19',
    topic: 'Statement & Conclusions',
    questionEn:
      'Read the statement carefully and assume it to be true. Then examine the two conclusions given below it and decide which conclusion(s), if any, logically follow from the statement.\nStatement:\nIn a T-20 cricket match, the total wickets taken by a team were 9. Out of these, 6 wickets were taken by spinners.\nConclusions:\nI. 80% of the bowlers in the team were spinners.\nII. The opening bowlers of the team were spinners.',
    questionHi:
      'निम्नलिखित प्रश्न में एक कथन दिया गया है, जिसके बाद दो निष्कर्ष दिए गए हैं। कथन को ध्यानपूर्वक पढ़िए और उसे सत्य मानिए। फिर नीचे दिए गए निष्कर्षों का परीक्षण कीजिए और निर्णय कीजिए कि कौन-सा/से निष्कर्ष तार्किक रूप से उस कथन से अनुसरण करता/करते हैं।\nकथन:\nएक T-20 क्रिकेट मैच में, एक टीम द्वारा लिए गए कुल विकेट 9 थे। इनमें से 6 विकेट स्पिनरों द्वारा लिए गए थे।\nनिष्कर्ष:\nI. टीम के 80% गेंदबाज़ स्पिनर थे।\nII. टीम के ओपनिंग गेंदबाज़ स्पिनर थे।',
    optionsEn: [
      'Only Conclusion I follows',
      'Neither conclusion I nor II follows',
      'Only Conclusion II follows',
      'Both Conclusions I and II follow',
    ],
    optionsHi: [
      'केवल निष्कर्ष I अनुसरण करता है',
      'न तो निष्कर्ष I और न ही निष्कर्ष II अनुसरण करता है',
      'केवल निष्कर्ष II अनुसरण करता है',
      'निष्कर्ष I और II दोनों अनुसरण करते हैं',
    ],
    correctIndex: 1,
    explanationEn:
      'The statement only gives the number of wickets taken by spinners (6 out of 9 = 66.67%). It provides no information about the percentage of bowlers who were spinners (Conclusion I) or who opened the bowling (Conclusion II). Therefore, neither conclusion follows.',
    explanationHi:
      'कथन में केवल स्पिनरों द्वारा लिए गए विकेटों की संख्या (9 में से 6) दी गई है। इससे न तो टीम में स्पिनर गेंदबाज़ों के प्रतिशत का पता चलता है और न ही ओपनिंग गेंदबाज़ों का। अतः न तो I और न ही II अनुसरण करता है।',
  },
  {
    id: 'cgl26_01o2_q20',
    topic: 'Statement & Assumptions',
    questionEn:
      'In the following question a statement is given followed by some assumptions. Read the assumptions carefully and choose the appropriate option.\nStatement:\nA transport company is launching a new fleet of electric buses and promoting the service extensively. To finance the project, it plans to reduce non-essential expenses and obtain funding from financial institutions.\nAssumptions:\nI. The new electric bus service is likely to attract passengers.\nII. Financial institutions will surely provide the required funding.',
    questionHi:
      'निम्नलिखित प्रश्न में एक कथन दिया गया है, जिसके पश्चात कुछ मान्यताएँ दी गई हैं। मान्यताओं को ध्यानपूर्वक पढ़िए और उपयुक्त विकल्प का चयन कीजिए।\nकथन:\nएक परिवहन कंपनी इलेक्ट्रिक बसों के नए बेड़े की शुरुआत कर रही है और इस सेवा का व्यापक प्रचार-प्रसार कर रही है। परियोजना के वित्तपोषण के लिए, वह गैर-आवश्यक व्ययों में कटौती करने तथा वित्तीय संस्थानों से धन प्राप्त करने की योजना बना रही है।\nमान्यताएँ:\nI. नई इलेक्ट्रिक बस सेवा के यात्रियों को आकर्षित करने की संभावना है।\nII. वित्तीय संस्थान निश्चित रूप से आवश्यक धन उपलब्ध कराएँगे।',
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
    correctIndex: 0,
    explanationEn:
      'Assumption I is implicit because a company invests in launching and extensively promoting a service assuming it is likely to attract passengers. Assumption II uses the extreme certainty word "surely" — planning to obtain funding does not guarantee that institutions will definitely approve it. Hence, Only I is implicit.',
    explanationHi:
      'कोई भी कंपनी नई सेवा शुरू कर उसका व्यापक प्रचार इसी मान्यता पर करती है कि उससे यात्री आकर्षित होंगे (I निहित है)। किंतु वित्तीय संस्थानों से धन लेने की योजना का अर्थ यह नहीं कि वे "निश्चित रूप से (surely)" धन देंगे ही (II निहित नहीं)। अतः केवल I निहित है।',
  },
  {
    id: 'cgl26_01o2_q21',
    topic: 'Logical Decision Making',
    questionEn:
      'What government action yields the highest increase in crop productivity in areas where traditional farming techniques predominate?',
    questionHi:
      'सरकार की कौन-सी कार्रवाई उन क्षेत्रों में फसल उत्पादकता में सर्वाधिक वृद्धि कर सकती है, जहाँ पारंपरिक कृषि तकनीकों का प्रभुत्व है?',
    optionsEn: [
      'Provide annual total debt waivers.',
      'Implement smart precision farming systems.',
      'Cease all agricultural product exports.',
      'Import more foreign farming goods.',
    ],
    optionsHi: [
      'प्रतिवर्ष सभी कृषि ऋणों को पूर्णतः माफ़ करना।',
      'स्मार्ट परिशुद्ध कृषि प्रणालियाँ लागू करना।',
      'सभी कृषि उत्पादों के निर्यात को बंद कर देना।',
      'अधिक विदेशी कृषि उत्पादों का आयात करना।',
    ],
    correctIndex: 1,
    explanationEn:
      'Smart precision farming systems (soil monitoring, drip/targeted irrigation, data-driven fertilization, and high-yield practices) directly modernize traditional agriculture and maximize crop yield per hectare, unlike debt waivers or trade restrictions.',
    explanationHi:
      'स्मार्ट परिशुद्ध कृषि (smart precision farming) प्रणालियाँ—जैसे मृदा परीक्षण, सूक्ष्म सिंचाई व आधुनिक कृषि तकनीक—पारंपरिक कृषि क्षेत्रों में सीधे फसल उत्पादकता को सर्वाधिक बढ़ाती हैं।',
  },
  {
    id: 'cgl26_01o2_q22',
    topic: 'Word Analogy',
    questionEn:
      'Select the option that is related to the third word in the same way as the second word is related to the first word.\nClove : Flower bud :: Cinnamon : ?',
    questionHi:
      'उस विकल्प का चयन करें जो तीसरे शब्द से उसी प्रकार संबंधित हो, जिस प्रकार दूसरा शब्द पहले शब्द से संबंधित है।\nClove : Flower bud :: Cinnamon : ?',
    optionsEn: ['Stem', 'Bark', 'Root', 'Seed'],
    optionsHi: ['Stem (तना)', 'Bark (छाल)', 'Root (जड़)', 'Seed (बीज)'],
    correctIndex: 1,
    explanationEn:
      'Clove is obtained from the dried flower bud of the clove tree. Similarly, Cinnamon (दालचीनी) is obtained from the inner Bark (छाल) of trees from the genus Cinnamomum.',
    explanationHi:
      'लौंग (Clove) पौधे की सूखी पुष्प कली (Flower bud) से प्राप्त होती है। इसी प्रकार दालचीनी (Cinnamon) वृक्ष की आंतरिक छाल (Bark) से प्राप्त होती है।',
  },
  {
    id: 'cgl26_01o2_q23',
    topic: 'Coding-Decoding',
    questionEn:
      "In a specific casing code, the letter K is written in lowercase. All letters appearing before K in the alphabet are written in uppercase, while all letters from K onwards alternate between lowercase and uppercase (i.e., ..., I, J, k, L, m, N...). Under this rule, how will the word 'MONDAY' be written?",
    questionHi:
      "एक विशिष्ट अक्षर-रूप कूट में, अक्षर K को छोटे अक्षर (lowercase) में लिखा जाता है। वर्णमाला में K से पहले आने वाले सभी अक्षरों को बड़े अक्षरों (uppercase) में लिखा जाता है, जबकि K से आगे आने वाले अक्षरों को क्रमशः छोटे और बड़े अक्षरों में बारी-बारी से लिखा जाता है (अर्थात् ..., I, J, k, L, m, N...)। इस नियम के अनुसार, शब्द 'MONDAY' को कैसे लिखा जाएगा?",
    optionsEn: ['MoNdAy', 'mOnDaY', 'moNDAy', 'MoNdaY'],
    optionsHi: ['MoNdAy', 'mOnDaY', 'moNDAy', 'MoNdaY'],
    correctIndex: 2,
    explanationEn:
      'Letters before K (A–J) are UPPERCASE ⇒ D → D, A → A.\nFrom K (11) onwards: odd positions are lowercase, even positions are UPPERCASE:\n• M (13, odd) → m\n• O (15, odd) → o\n• N (14, even) → N\n• Y (25, odd) → y\nTherefore, MONDAY → moNDAy.',
    explanationHi:
      'K से पहले के अक्षर (A–J) बड़े होंगे ⇒ D → D, A → A।\nK (11) से आगे विषम स्थान छोटे तथा सम स्थान बड़े होंगे: M(13)→m, O(15)→o, N(14)→N, Y(25)→y।\nअतः MONDAY को "moNDAy" लिखा जाएगा।',
  },
  {
    id: 'cgl26_01o2_q24',
    topic: 'Course of Action',
    questionEn:
      "Direction: Choose the most logical course of action.\nScenario:\nA company saves 15% by using Supplier X, but Supplier X's defect rate recently rose from 1% to 5%, causing production delays. Alternative suppliers are highly reliable but charge standard market rates. The company operates on tight profit margins and strict delivery schedules.\nWhat is the most appropriate action?",
    questionHi:
      'निर्देश: सबसे तार्किक कार्रवाई का चयन कीजिए।\nपरिदृश्य:\nएक कंपनी सप्लायर X का उपयोग करके 15 प्रतिशत की बचत करती है, लेकिन सप्लायर X की दोष दर हाल ही में 1 प्रतिशत से बढ़कर 5 प्रतिशत हो गई है, जिसके कारण उत्पादन में देरी हो रही है। वैकल्पिक सप्लायर अत्यधिक विश्वसनीय हैं, लेकिन वे सामान्य बाजार दरों पर शुल्क लेते हैं। कंपनी बहुत कम लाभ मार्जिन और सख्त आपूर्ति समय-सारणी के साथ काम करती है।\nसबसे उपयुक्त कार्रवाई क्या है?',
    optionsEn: [
      'Shift 100% of procurement to alternative suppliers immediately to eliminate defects.',
      'Continue buying exclusively from Supplier X to protect the 15% cost savings.',
      'Split the order with an alternative supplier to reduce risk while giving Supplier X a deadline to improve.',
      'Halt all production and procurement until a third, cheaper, and flawless supplier is found.',
    ],
    optionsHi: [
      'दोषों को समाप्त करने के लिए खरीद का 100 प्रतिशत तुरंत वैकल्पिक आपूर्तिकर्ताओं को स्थानांतरित करना।',
      '15 प्रतिशत लागत बचत बनाए रखने के लिए केवल सप्लायर X से ही खरीदारी जारी रखना।',
      'जोखिम को कम करने के लिए ऑर्डर को किसी वैकल्पिक सप्लायर के साथ बाँट देना और सप्लायर X को सुधार करने के लिए एक समय-सीमा देना।',
      'तीसरा, सस्ता और दोषरहित सप्लायर मिलने तक सभी उत्पादन और खरीद प्रक्रियाओं को रोक देना।',
    ],
    correctIndex: 2,
    explanationEn:
      'Because the company faces BOTH tight profit margins (making a 100% immediate switch costly) AND strict delivery schedules (making exclusive reliance on a 5%-defect supplier or halting production unacceptable), splitting the order balances cost and delivery reliability while pressuring Supplier X to fix quality within a deadline.',
    explanationHi:
      'कम लाभ मार्जिन और सख्त डिलीवरी समय-सीमा दोनों को संतुलित करने के लिए ऑर्डर को वैकल्पिक सप्लायर के साथ बाँटना तथा सप्लायर X को सुधार हेतु समय-सीमा देना सबसे व्यावहारिक और तार्किक कदम है।',
  },
  {
    id: 'cgl26_01o2_q25',
    topic: 'Letter Classification',
    questionEn: 'Which sequence is different from the others?',
    questionHi: 'कौन-सा अनुक्रम अन्य से असंगत है?',
    optionsEn: ['AZBY', 'CXDW', 'EVFU', 'GSHR'],
    optionsHi: ['AZBY', 'CXDW', 'EVFU', 'GSHR'],
    correctIndex: 3,
    explanationEn:
      'Each option consists of two opposite-letter pairs (sum of positions = 27):\n• AZBY: A(1)+Z(26)=27, B(2)+Y(25)=27\n• CXDW: C(3)+X(24)=27, D(4)+W(23)=27\n• EVFU: E(5)+V(22)=27, F(6)+U(21)=27\n• GSHR: G(7)+S(19)=26 ≠ 27 (opposite of G is T, and H+R=26 ≠ 27). Hence, GSHR is different.',
    explanationHi:
      'AZBY, CXDW और EVFU में दोनों युग्म विपरीत अक्षरों (योग = 27) के हैं (A-Z, B-Y; C-X, D-W; E-V, F-U), जबकि GSHR में G(7)+S(19)=26 और H(8)+R(18)=26 हैं। अतः GSHR असंगत है।',
  },
];
