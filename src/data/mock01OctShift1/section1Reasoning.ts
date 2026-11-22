import { Question } from '../../types/exam';

export const SECTION_1_REASONING_O1S1: Question[] = [
  {
    id: 'cgl26_01o1_q1',
    topic: 'Letter Series',
    questionEn:
      'Select the letter-cluster from among the given options that can replace the question mark (?) in the following series:\nLZWT, LVOH, LRGV, LNYJ, ?',
    questionHi:
      'दिए गए विकल्पों में से उस अक्षर-समूह का चयन करें जो निम्नलिखित श्रृंखला में प्रश्न चिह्न (?) को प्रतिस्थापित कर सके:\nLZWT, LVOH, LRGV, LNYJ, ?',
    optionsEn: ['LJQX', 'LKJH', 'LOIU', 'LDFS'],
    optionsHi: ['LJQX', 'LKJH', 'LOIU', 'LDFS'],
    correctIndex: 0,
    explanationEn:
      'Analyze each letter position independently:\n• 1st letter: L → L → L → L → L (constant)\n• 2nd letter (−4): Z(26) → V(22) → R(18) → N(14) → J(10)\n• 3rd letter (−8): W(23) → O(15) → G(7) → Y(25) → Q(17)\n• 4th letter (+14 / −12): T(20) → H(8) → V(22) → J(10) → X(24)\nHence, the missing cluster is LJQX.',
    explanationHi:
      'प्रत्येक स्थान के अक्षर का पैटर्न देखें:\n• पहला अक्षर: L (समान)\n• दूसरा अक्षर (−4): Z(26) → V(22) → R(18) → N(14) → J(10)\n• तीसरा अक्षर (−8): W(23) → O(15) → G(7) → Y(25) → Q(17)\n• चौथा अक्षर (−12): T(20) → H(8) → V(22) → J(10) → X(24)\nअतः अगला अक्षर-समूह LJQX होगा।',
  },
  {
    id: 'cgl26_01o1_q2',
    topic: 'Arithmetical Reasoning',
    questionEn:
      'A person bought an article for Rs. 1200 and sold it at a loss of 10%. What is the selling price?',
    questionHi:
      'एक व्यक्ति ने एक वस्तु 1200 रुपये में खरीदी और उसे 10% की हानि पर बेच दिया। बिक्री कीमत क्या है?',
    optionsEn: ['Rs. 1050', 'Rs. 1090', 'Rs. 1060', 'Rs. 1080'],
    optionsHi: ['1050 रुपये', '1090 रुपये', '1060 रुपये', '1080 रुपये'],
    correctIndex: 3,
    explanationEn:
      'Cost Price (CP) = Rs. 1200, Loss = 10% of 1200 = Rs. 120.\nSelling Price (SP) = 1200 − 120 = Rs. 1080 (or 1200 × 90/100 = Rs. 1080).',
    explanationHi:
      'क्रय मूल्य = 1200 रुपये, हानि = 1200 का 10% = 120 रुपये।\nविक्रय मूल्य = 1200 − 120 = 1080 रुपये।',
  },
  {
    id: 'cgl26_01o1_q3',
    topic: 'Number Analogy',
    questionEn: 'Find the missing number: 43 : 129 :: 62 : ?',
    questionHi: 'लुप्त संख्या ज्ञात कीजिए: 43 : 129 :: 62 : ?',
    optionsEn: ['142', '146', '145', '186'],
    optionsHi: ['142', '146', '145', '186'],
    correctIndex: 3,
    explanationEn:
      'Pattern: Second number = First number × 3.\n43 × 3 = 129. Applying the same rule: 62 × 3 = 186.',
    explanationHi:
      'पैटर्न: दूसरी संख्या = पहली संख्या × 3।\n43 × 3 = 129। इसी प्रकार, 62 × 3 = 186।',
  },
  {
    id: 'cgl26_01o1_q4',
    topic: 'Arithmetical Reasoning',
    questionEn:
      'A man buys 2 pencils for Rs. 5 and sells 5 pencils for Rs. 12. Find his gain or loss percent.',
    questionHi:
      'एक आदमी 5 रुपये में 2 पेंसिल खरीदता है और 12 रुपये में 5 पेंसिल बेचता है। उसका लाभ या हानि प्रतिशत ज्ञात कीजिए।',
    optionsEn: ['4% gain', '4% loss', '5% gain', '5% loss'],
    optionsHi: ['4% लाभ', '4% हानि', '5% लाभ', '5% हानि'],
    correctIndex: 1,
    explanationEn:
      'Equalize quantity to LCM(2, 5) = 10 pencils:\n• CP of 10 pencils = 5 × 5 = Rs. 25\n• SP of 10 pencils = 12 × 2 = Rs. 24\nLoss = Rs. 1 ⇒ Loss % = (1 / 25) × 100 = 4% loss.',
    explanationHi:
      'दोनों स्थितियों में 10 पेंसिलों का मूल्य निकालें (LCM = 10):\n• 10 पेंसिल का क्रय मूल्य = 5 × 5 = 25 रुपये\n• 10 पेंसिल का विक्रय मूल्य = 12 × 2 = 24 रुपये\nहानि % = [(25 − 24) / 25] × 100 = 4% हानि।',
  },
  {
    id: 'cgl26_01o1_q5',
    topic: 'Address Matching',
    questionEn:
      'Which of the following is/are identical to the address given:\nVill: Bhatgaon, PO: Ambikapur, PS: Rajnandgaon, Dist: Chhattisgarh – 494661\n\n1. Vill: Bhatgaon, PO: Ambikapur, PS: Rajnandgaon, Dist: Chhattisgarh – 494661\n2. Vill: Bhatgaon, Post: Ambikapur, PS: Rajnandgaon, Dist: Chhattisgarh – 494662\n3. Vill: Bhatgaon, PO: Rajnandgaon, PS: Bilaspur, Dist: Chhattisgarh – 494660\n4. Village: Bhatgaon, PO: Ambikapur, PS: Rajnandgaon, Dist: Chhattisgarh – 494661',
    questionHi:
      'निम्नलिखित में से कौन-सा/से पते दिए गए पते के समान है/हैं:\nVill: Bhatgaon, PO: Ambikapur, PS: Rajnandgaon, Dist: Chhattisgarh – 494661\n\n1. Vill: Bhatgaon, PO: Ambikapur, PS: Rajnandgaon, Dist: Chhattisgarh – 494661\n2. Vill: Bhatgaon, Post: Ambikapur, PS: Rajnandgaon, Dist: Chhattisgarh – 494662\n3. Vill: Bhatgaon, PO: Rajnandgaon, PS: Bilaspur, Dist: Chhattisgarh – 494660\n4. Village: Bhatgaon, PO: Ambikapur, PS: Rajnandgaon, Dist: Chhattisgarh – 494661',
    optionsEn: ['2 Only', '3 Only', '1 Only', '4 Only'],
    optionsHi: ['केवल 2', 'केवल 3', 'केवल 1', 'केवल 4'],
    correctIndex: 2,
    explanationEn:
      'Compare character by character:\n• Address 1 is 100% identical to the given address.\n• Address 2 uses "Post:" instead of "PO:" and has PIN 494662.\n• Address 3 swaps PO/PS and has PIN 494660.\n• Address 4 uses "Village:" instead of "Vill:".\nHence, only Address 1 matches.',
    explanationHi:
      'प्रत्येक पते की मूल पते से तुलना करने पर:\n• पता 1 मूल पते से पूर्णतः मेल खाता है।\n• पता 2 में "Post:" और पिनकोड 494662 भिन्न हैं, पता 3 में PO/PS व पिनकोड गलत हैं, तथा पता 4 में "Village:" लिखा है।\nअतः केवल 1 सही है।',
  },
  {
    id: 'cgl26_01o1_q6',
    topic: 'Syllogism',
    questionEn:
      'Read the following statement carefully and identify the conclusion that follows.\n\nStatement:\nAll apples are fruits.\nAll fruits are healthy.\n\nConclusions:\nI. All apples are healthy.\nII. Some healthy things are fruits.',
    questionHi:
      'निम्नलिखित कथन को ध्यानपूर्वक पढ़ें और निष्कर्ष निकालें।\n\nकथन:\nसभी सेब फल हैं।\nसभी फल स्वास्थ्यवर्धक हैं।\n\nनिष्कर्ष:\nI. सभी सेब स्वास्थ्यवर्धक हैं।\nII. कुछ स्वास्थ्यवर्धक चीजें फल हैं।',
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
    correctIndex: 2,
    explanationEn:
      'Venn chain: Apples ⊂ Fruits ⊂ Healthy.\n• Conclusion I: Since all apples are inside fruits and all fruits are inside healthy, "All apples are healthy" definitely follows.\n• Conclusion II: From "All fruits are healthy", its valid converse "Some healthy things are fruits" definitely follows.\nHence, both I and II follow.',
    explanationHi:
      'वेन आरेख: सेब ⊂ फल ⊂ स्वास्थ्यवर्धक।\n• निष्कर्ष I: चूँकि सभी सेब फल हैं और सभी फल स्वास्थ्यवर्धक हैं, अतः सभी सेब स्वास्थ्यवर्धक हैं (सत्य)।\n• निष्कर्ष II: "सभी फल स्वास्थ्यवर्धक हैं" से "कुछ स्वास्थ्यवर्धक चीजें फल हैं" निश्चित रूप से निकलता है (सत्य)।\nअतः I और II दोनों अनुसरण करते हैं।',
  },
  {
    id: 'cgl26_01o1_q7',
    topic: 'Coding-Decoding',
    questionEn:
      'In a certain code, "HORSE" is written as "GNQRD". How is PLANE written?',
    questionHi:
      'एक निश्चित कोड में, "HORSE" को "GNQRD" लिखा जाता है। PLANE को कैसे लिखा जाएगा?',
    optionsEn: ['OKZMD', 'OKZMF', 'OKZND', 'OKZNC'],
    optionsHi: ['OKZMD', 'OKZMF', 'OKZND', 'OKZNC'],
    correctIndex: 0,
    explanationEn:
      'Each letter is shifted backward by 1 (−1):\nH−1=G, O−1=N, R−1=Q, S−1=R, E−1=D.\nApplying −1 to PLANE: P−1=O, L−1=K, A−1=Z, N−1=M, E−1=D → OKZMD.',
    explanationHi:
      'प्रत्येक अक्षर में −1 का नियम लागू है:\nH→G, O→N, R→Q, S→R, E→D।\nइसी प्रकार PLANE में प्रत्येक अक्षर से −1 करने पर: P→O, L→K, A→Z, N→M, E→D ⇒ OKZMD।',
  },
  {
    id: 'cgl26_01o1_q8',
    topic: 'Number Series',
    questionEn: 'What is the next number in the series?\n128, 64, 32, ___',
    questionHi: 'निम्नलिखित श्रृंखला में अगले स्थान पर कौन-सी संख्या होगी?\n128, 64, 32, ___',
    optionsEn: ['20', '16', '18', '22'],
    optionsHi: ['20', '16', '18', '22'],
    correctIndex: 1,
    explanationEn:
      'Each term is divided by 2: 128 ÷ 2 = 64, 64 ÷ 2 = 32, 32 ÷ 2 = 16.',
    explanationHi:
      'प्रत्येक पद पिछली संख्या का आधा (÷ 2) है: 128 ÷ 2 = 64, 64 ÷ 2 = 32, 32 ÷ 2 = 16।',
  },
  {
    id: 'cgl26_01o1_q9',
    topic: 'Coded Inequalities',
    questionEn:
      'In the question, assuming the given statements to be true, find which of the conclusion(s) among given three conclusions is/are definitely true and then give your answer accordingly.\n\nStatements: R > M ≥ N = O ≥ P; L < S < Q = K ≤ P\n\nConclusions:\nI. M > L\nII. Q ≤ M\nIII. S < R',
    questionHi:
      'प्रश्न में, दिए गए कथनों को सत्य मानते हुए, दिए गए तीन निष्कर्षों में से कौन-सा/से निष्कर्ष निश्चित रूप से सत्य है/हैं, यह ज्ञात कीजिए और उसके अनुसार उत्तर दीजिए।\n\nकथन: R > M ≥ N = O ≥ P; L < S < Q = K ≤ P\n\nनिष्कर्ष:\nI. M > L\nII. Q ≤ M\nIII. S < R',
    optionsEn: [
      'Only conclusion II and III are true',
      'Only conclusion I is true',
      'Only conclusion I and II are true',
      'All the conclusions I, II and III are true',
    ],
    optionsHi: [
      'केवल निष्कर्ष II और III सत्य हैं',
      'केवल निष्कर्ष I सत्य है',
      'केवल निष्कर्ष I और II सत्य हैं',
      'सभी निष्कर्ष I, II और III सत्य हैं',
    ],
    correctIndex: 3,
    explanationEn:
      'Combine both statements into one monotonic chain:\nR > M ≥ N = O ≥ P ≥ K = Q > S > L.\n• I. M > L: True (strict ">" appears between Q, S, L).\n• II. Q ≤ M: True (M ≥ N = O ≥ P ≥ K = Q).\n• III. S < R: True (R > M ≥ ... > S).\nAll three conclusions I, II, and III are definitely true.',
    explanationHi:
      'दोनों कथनों को जोड़ने पर:\nR > M ≥ N = O ≥ P ≥ K = Q > S > L।\n• I. M > L — सत्य।\n• II. Q ≤ M — सत्य।\n• III. S < R — सत्य।\nअतः सभी निष्कर्ष I, II और III सत्य हैं।',
  },
  {
    id: 'cgl26_01o1_q10',
    topic: 'Coding-Decoding',
    questionEn: 'If PLANTS is coded as QMBOUT, how is QMBOUT coded?',
    questionHi: 'यदि PLANTS को QMBOUT के रूप में कोडित किया जाता है, तो QMBOUT को किस प्रकार कोडित किया जाएगा?',
    optionsEn: ['RNCPVU', 'RNCPST', 'RNDPVU', 'RNCPUV'],
    optionsHi: ['RNCPVU', 'RNCPST', 'RNDPVU', 'RNCPUV'],
    correctIndex: 0,
    explanationEn:
      'Each letter moves forward by +1:\nP→Q, L→M, A→B, N→O, T→U, S→T.\nApplying +1 to QMBOUT: Q→R, M→N, B→C, O→P, U→V, T→U → RNCPVU.',
    explanationHi:
      'प्रत्येक अक्षर में +1 जोड़ा गया है:\nP+1=Q, L+1=M, A+1=B, N+1=O, T+1=U, S+1=T।\nइसी प्रकार QMBOUT के प्रत्येक अक्षर में +1 करने पर RNCPVU प्राप्त होता है।',
  },
  {
    id: 'cgl26_01o1_q11',
    topic: 'Coding-Decoding',
    questionEn:
      'In a certain code language, "UNDERSTAND" is written as "ENATSREDNV". How will "CONNECTION" be written?',
    questionHi:
      'एक निश्चित कूट भाषा में, “UNDERSTAND” को “ENATSREDNV” लिखा जाता है। उसी कूट भाषा में “CONNECTION” को कैसे लिखा जाएगा?',
    optionsEn: ['OOITCENNOD', 'NOITCENNOC', 'OIOTCENOND', 'NOCITENONC'],
    optionsHi: ['OOITCENNOD', 'NOITCENNOC', 'OIOTCENOND', 'NOCITENONC'],
    correctIndex: 0,
    explanationEn:
      'Rule: Reverse the entire word, then add +1 to the first and last letters while keeping all middle letters unchanged.\n• UNDERSTAND reversed = D N A T S R E D N U → (D+1) NATSREDN (U+1) = ENATSREDNV.\n• CONNECTION reversed = N O I T C E N N O C → (N+1) OITCENNO (C+1) = OOITCENNOD.',
    explanationHi:
      'नियम: पूरे शब्द को उल्टे क्रम में लिखकर पहले और अंतिम अक्षर में +1 करें (मध्य के अक्षर समान रहते हैं)।\n• UNDERSTAND का उल्टा = DNATSREDNU → पहला अक्षर D+1=E और अंतिम अक्षर U+1=V ⇒ ENATSREDNV।\n• CONNECTION का उल्टा = NOITCENNOC → पहला अक्षर N+1=O और अंतिम अक्षर C+1=D ⇒ OOITCENNOD।',
  },
  {
    id: 'cgl26_01o1_q12',
    topic: 'Address Matching',
    questionEn:
      'Choose the option that perfectly matches the given address.\n\nOriginal Address:\nFlat No 27CImperial Heights Residency Phase 12Lincoln Boulevard Central AreaChicago Illinois 60611United States of America',
    questionHi:
      'दिए गए पते से पूरी तरह मेल खाने वाले विकल्प का चयन करें।\n\nमूल पता:\nFlat No 27CImperial Heights Residency Phase 12Lincoln Boulevard Central AreaChicago Illinois 60611United States of America',
    optionsEn: [
      'Flat No 27CImperial Heights Residency Phase 21Lincoln Boulevard Central AreaChicago Illinois 60611United States of America',
      'Flat No 27CImperial Heights Residency Phase 12Lincoln Boulvard Central AreaChicago Illinois 60611United States of America',
      'Flat No 27CImperial Heights Residency Phase 12Lincoln Boulevard Central AreaChicago Illinois 60111United States of America',
      'Flat No 27CImperial Heights Residency Phase 12Lincoln Boulevard Central AreaChicago Illinois 60611United States of America',
    ],
    optionsHi: [
      'Flat No 27CImperial Heights Residency Phase 21Lincoln Boulevard Central AreaChicago Illinois 60611United States of America',
      'Flat No 27CImperial Heights Residency Phase 12Lincoln Boulvard Central AreaChicago Illinois 60611United States of America',
      'Flat No 27CImperial Heights Residency Phase 12Lincoln Boulevard Central AreaChicago Illinois 60111United States of America',
      'Flat No 27CImperial Heights Residency Phase 12Lincoln Boulevard Central AreaChicago Illinois 60611United States of America',
    ],
    correctIndex: 3,
    explanationEn:
      'Spot the subtle typos in options A–C:\n• (A) has "Phase 21" instead of "Phase 12".\n• (B) misspells "Boulevard" as "Boulvard".\n• (C) changes ZIP code "60611" to "60111".\n• (D) is an exact 100% match.',
    explanationHi:
      'विकल्पों की जाँच करने पर:\n• (A) में "Phase 21" लिखा है (गलत)।\n• (B) में "Boulvard" की वर्तनी गलत है।\n• (C) में पिनकोड "60111" लिखा है (मूल में 60611 है)।\n• केवल विकल्प (D) मूल पते से पूर्णतः मेल खाता है।',
  },
  {
    id: 'cgl26_01o1_q13',
    topic: 'Missing Number Matrix',
    questionEn:
      'In the following question, a matrix of numbers is given. These numbers follow a certain pattern either row-wise or column-wise. Identify this pattern and choose the missing number accordingly.',
    questionHi:
      'निम्नलिखित प्रश्न में संख्याओं का एक आव्यूह दिया गया है। ये संख्याएँ या तो पंक्ति-वार अथवा स्तंभ-वार किसी निश्चित प्रतिरूप का अनुसरण करती हैं। इस प्रतिरूप की पहचान करें और तदनुसार लुप्त संख्या ज्ञात करें।',
    matrix: [
      ['3', '6', '1'],
      ['3', '2', '4'],
      ['2', '8', '?'],
    ],
    optionsEn: ['7', '1', '9', '5'],
    optionsHi: ['7', '1', '9', '5'],
    correctIndex: 2,
    explanationEn:
      'Read each row as a 3-digit perfect square in descending order:\n• Row 1: 361 = 19²\n• Row 2: 324 = 18²\n• Row 3: 289 = 17²\nTherefore, the missing digit (?) is 9.',
    explanationHi:
      'प्रत्येक पंक्ति के अंकों को मिलाकर एक 3-अंकीय पूर्ण वर्ग संख्या बनती है:\n• पंक्ति 1: 361 = 19²\n• पंक्ति 2: 324 = 18²\n• पंक्ति 3: 289 = 17²\nअतः लुप्त संख्या (?) = 9 होगी।',
  },
  {
    id: 'cgl26_01o1_q14',
    topic: 'Blood Relations',
    questionEn:
      'A, B, C, D, E, and F constitute a family of six individuals. A shares a marital relationship with B, and A is the father of C. C is the son of B, whereas F is the daughter of C. E is the brother of C, and D is the sister of A. Using the given information, determine how many members of the family are female.',
    questionHi:
      'A, B, C, D, E और F छह लोगों का एक परिवार है। A और B पति-पत्नी हैं और A, C का पिता है। C, B का बेटा है, जबकि F, C की बेटी है। E, C का भाई है और D, A की बहन है। दी गई जानकारी के आधार पर पता लगाएँ कि परिवार में कितने महिला सदस्य हैं।',
    optionsEn: ['1', '2', '3', '4'],
    optionsHi: ['1', '2', '3', '4'],
    correctIndex: 2,
    explanationEn:
      'Identify the gender of each family member:\n• A = Male (father of C), married to B ⇒ B = Female\n• C = Male (son of B)\n• F = Female (daughter of C)\n• E = Male (brother of C)\n• D = Female (sister of A)\nTotal females = B, F, and D = 3.',
    explanationHi:
      'प्रत्येक सदस्य का लिंग निर्धारण:\n• A = पुरुष (पिता), अतः उसकी पत्नी B = महिला\n• C = पुरुष (बेटा), E = पुरुष (भाई)\n• F = महिला (बेटी), D = महिला (A की बहन)\nअतः परिवार में कुल 3 महिलाएँ (B, F, D) हैं।',
  },
  {
    id: 'cgl26_01o1_q15',
    topic: 'Number Pattern & Odd One Out',
    questionEn:
      'The roll number format is [Digit A]-[Digit B]-[Digit C] where C = (A + B) × 2. Identify the inconsistent roll number.',
    questionHi:
      'रोल नंबर का फ़ॉर्मैट [Digit A]-[Digit B]-[Digit C] है, जहाँ C = (A + B) × 2 है। गलत रोल नंबर की पहचान करें।',
    optionsEn: ['2-3-10', '4-1-10', '5-2-14', '6-2-18'],
    optionsHi: ['2-3-10', '4-1-10', '5-2-14', '6-2-18'],
    correctIndex: 3,
    explanationEn:
      'Test C = (A + B) × 2 on each option:\n• 2-3-10: (2 + 3) × 2 = 10 ✓\n• 4-1-10: (4 + 1) × 2 = 10 ✓\n• 5-2-14: (5 + 2) × 2 = 14 ✓\n• 6-2-18: (6 + 2) × 2 = 16 ≠ 18 ✗\nHence, 6-2-18 is inconsistent.',
    explanationHi:
      'सूत्र C = (A + B) × 2 की जाँच:\n• 2-3-10: (2+3)×2 = 10 ✓\n• 4-1-10: (4+1)×2 = 10 ✓\n• 5-2-14: (5+2)×2 = 14 ✓\n• 6-2-18: (6+2)×2 = 16 ≠ 18 ✗\nअतः 6-2-18 गलत रोल नंबर है।',
  },
  {
    id: 'cgl26_01o1_q16',
    topic: 'Address Matching',
    questionEn:
      'Choose the option which is exactly similar to:\nLt. Col. VK Singh, 09 Jan 2011, Cantt Area, Dehradun (UK)-248001',
    questionHi:
      'उस विकल्प का चयन कीजिए जो निम्नलिखित के बिल्कुल समान है:\nLt. Col. VK Singh, 09 Jan 2011, Cantt Area, Dehradun (UK)-248001',
    optionsEn: [
      'Lt. Col. V.K Singh, 09 Jan 2011, Cantt Area, Dehradun (UK)-248001',
      'Lt. Col. VK Singh, 09 Jan 2011, Cantt Area, Dehradun (UK)-248002',
      'Lt. Col. VK Singh, 09 Jan 2011, Cantt Area, Dehradun (UK)-248001',
      'Lt. Col. VK Singh, 09 Jan 2011, Cantt. Area, Dehradun (UK)-248001',
    ],
    optionsHi: [
      'Lt. Col. V.K Singh, 09 Jan 2011, Cantt Area, Dehradun (UK)-248001',
      'Lt. Col. VK Singh, 09 Jan 2011, Cantt Area, Dehradun (UK)-248002',
      'Lt. Col. VK Singh, 09 Jan 2011, Cantt Area, Dehradun (UK)-248001',
      'Lt. Col. VK Singh, 09 Jan 2011, Cantt. Area, Dehradun (UK)-248001',
    ],
    correctIndex: 2,
    explanationEn:
      'Check punctuation and digits:\n• (A) has an extra dot in "V.K".\n• (B) ends with "248002" instead of "248001".\n• (D) has an extra dot in "Cantt.".\n• (C) is 100% identical.',
    explanationHi:
      '• (A) में "V.K" के बीच अतिरिक्त बिंदु है।\n• (B) में पिनकोड 248002 है।\n• (D) में "Cantt." में अतिरिक्त बिंदु है।\n• केवल विकल्प (C) बिल्कुल समान है।',
  },
  {
    id: 'cgl26_01o1_q17',
    topic: 'Emotional Intelligence',
    questionEn:
      'A dedicated employee who recently went through a difficult personal divorce has shown a noticeable dip in accuracy over the last three weeks, missing two critical reporting deadlines. How should you address this situation to balance organisational accountability with emotional intelligence?',
    questionHi:
      'एक समर्पित कर्मचारी, जो हाल ही में तलाक जैसी मुश्किल निजी स्थिति से गुज़रा है, उसके काम की सटीकता में पिछले तीन हफ़्तों में साफ़ गिरावट देखी गई है और वह रिपोर्टिंग की दो अहम डेडलाइन भी पूरी नहीं कर पाया है। संगठन की जवाबदेही और इमोशनल इंटेलिजेंस (भावनात्मक समझ) के बीच संतुलन बनाते हुए आपको इस स्थिति को कैसे संभालना चाहिए?',
    optionsEn: [
      "Send a formal, strictly objective email detailing the missed deadlines and attaching the company's standard performance improvement policy guidelines.",
      'Arrange a private discussion to appreciate past contributions, address recent gaps, and explore workflow improvements to stabilize performance.',
      'Avoid mentioning the missed deadlines entirely out of sympathy, and quietly distribute their pending tasks among the rest of the team.',
      'Invite them for a coffee and tell them an extensive personal story about how you successfully handled your own past personal crises to motivate them.',
    ],
    optionsHi: [
      'समय-सीमा (डेडलाइन) का पालन न होने की जानकारी देते हुए एक औपचारिक और पूरी तरह से निष्पक्ष ईमेल भेजें और साथ ही कंपनी की परफॉर्मेंस सुधारने से जुड़ी स्टैंडर्ड पॉलिसी गाइडलाइंस भी अटैच करें।',
      'पिछले योगदानों की सराहना करने, हाल की कमियों पर बात करने और परफॉर्मेंस को स्थिर करने के लिए काम के तरीके में सुधार के उपायों पर चर्चा करने के लिए एक निजी बैठक का आयोजन करें।',
      'हमदर्दी के कारण डेडलाइन चूकने का ज़िक्र बिल्कुल न करें और उनके पेंडिंग काम चुपचाप बाकी टीम में बाँट दें।',
      'उन्हें कॉफ़ी पर बुलाएँ और उन्हें प्रेरित करने के लिए अपनी ज़िंदगी के पुराने मुश्किल दौर को आपने कैसे सफलतापूर्वक संभाला, इस बारे में विस्तार से अपनी कहानी सुनाएँ।',
    ],
    correctIndex: 1,
    explanationEn:
      'High Emotional Intelligence combines empathy with constructive accountability. Holding a private, respectful conversation that acknowledges past dedication while addressing recent deadline gaps and co-creating practical workflow support (Option B) stabilizes performance without being coldly punitive (A), avoiding accountability (C), or shifting focus to yourself (D).',
    explanationHi:
      'उच्च भावनात्मक बुद्धिमत्ता में सहानुभूति के साथ पेशेवर जवाबदेही का संतुलन होता है। एक निजी बैठक में पिछले अच्छे प्रदर्शन की सराहना करते हुए हाल की कमियों पर संवाद करना और कार्यप्रणाली में सुधार के उपाय तलाशना (विकल्प B) सबसे संतुलित और प्रभावी कदम है।',
  },
  {
    id: 'cgl26_01o1_q18',
    topic: 'Emotional Intelligence',
    questionEn:
      'During a high-stakes strategy meeting, your department head proposes a plan you know is doomed to fail because it ignores ground-level data you recently processed. The room is silent; everyone is nodding along because they are afraid to challenge the boss. Your boss looks at you and asks: “You have been quiet, do you agree that this is the best path forward?” What is the most emotionally intelligent way to deliver a counterview without becoming a "troublemaker"?',
    questionHi:
      'एक उच्च-स्तरीय रणनीतिक बैठक के दौरान, आपके विभागाध्यक्ष ऐसी योजना प्रस्तुत करते हैं जिसके असफल होने की आपको पूरी आशंका है, क्योंकि वह उस जमीनी स्तर के डेटा की अनदेखी करती है जिसे आपने हाल ही में संसाधित किया है। बैठक कक्ष में सन्नाटा है; सभी लोग केवल इसलिए सहमति में सिर हिला रहे हैं क्योंकि वे विभागाध्यक्ष का विरोध करने से डरते हैं। तभी विभागाध्यक्ष आपकी ओर देखकर पूछते हैं: “आप अब तक चुप हैं। क्या आपको भी लगता है कि यही आगे बढ़ने का सर्वोत्तम मार्ग है?” निम्नलिखित में से कौन-सा उत्तर बिना “समस्याएँ उत्पन्न करने वाले व्यक्ति” की छवि बनाए, भावनात्मक बुद्धिमत्ता (Emotional Intelligence) का सर्वोच्च स्तर प्रदर्शित करता है?',
    optionsEn: [
      '"I agree the plan is excellent, but I think we should wait for more data before starting." (A white lie to protect the peace)',
      '“The data suggests this plan may not work as expected; we might need to reconsider.”',
      '"I see the logic in this goal, but recent data suggests a week-four bottleneck. Can we add a quick risk-mitigation step in phase one?"',
      'Stay silent and nod, as it is not your place to speak against the department head.',
    ],
    optionsHi: [
      '“मैं इस योजना से सहमत हूँ, लेकिन मेरा मानना है कि हमें शुरू करने से पहले कुछ और डेटा की प्रतीक्षा करनी चाहिए।” (शांति बनाए रखने के लिए एक छोटा-सा असत्य कथन)',
      '“डेटा से संकेत मिलता है कि यह योजना अपेक्षित रूप से कार्य नहीं कर सकती है; हमें इस पर पुनर्विचार करने की आवश्यकता हो सकती है।”',
      '“मैं इस लक्ष्य के पीछे की सोच को समझता हूँ, लेकिन हाल के डेटा से चौथे सप्ताह में एक संभावित बाधा दिखाई देती है। क्या हम पहले चरण में जोखिम को कम करने के लिए कोई त्वरित उपाय जोड़ सकते हैं?”',
      'चुप रहें और सहमति में सिर हिलाएँ, क्योंकि विभागाध्यक्ष का विरोध करना आपका कार्य नहीं है।',
    ],
    correctIndex: 2,
    explanationEn:
      'Option (C) validates the leader\'s objective ("I see the logic in this goal"), introduces objective evidence calmly ("recent data suggests a week-four bottleneck"), and offers a collaborative, solution-oriented question ("Can we add a quick risk-mitigation step?"). This avoids sycophancy (A/D) and blunt confrontation (B).',
    explanationHi:
      'विकल्प (C) लक्ष्य के प्रति सम्मान दर्शाता है, तथ्यात्मक डेटा को शांत भाव से सामने रखता है और विरोध के बजाय रचनात्मक समाधान (risk-mitigation step) सुझाता है — यही उच्चतम भावनात्मक बुद्धिमत्ता है।',
  },
  {
    id: 'cgl26_01o1_q19',
    topic: 'Letter Analogy',
    questionEn:
      'What should come in place of the question mark (?) in the following analogy?\nMNO : PQR :: STU : ?',
    questionHi:
      'निम्नलिखित सादृश्य में प्रश्न चिह्न (?) के स्थान पर क्या आएगा?\nMNO : PQR :: STU : ?',
    optionsEn: ['WXY', 'UVW', 'XYZ', 'VWX'],
    optionsHi: ['WXY', 'UVW', 'XYZ', 'VWX'],
    correctIndex: 3,
    explanationEn:
      'Each letter shifts by +3: M+3=P, N+3=Q, O+3=R (consecutive 3-letter group directly after MNO is PQR). Similarly, immediately after STU comes VWX (S+3=V, T+3=W, U+3=X).',
    explanationHi:
      'प्रत्येक अक्षर में +3 का अंतर है (MNO के ठीक बाद PQR आता है)। इसी प्रकार STU के प्रत्येक अक्षर में +3 करने पर VWX प्राप्त होता है।',
  },
  {
    id: 'cgl26_01o1_q20',
    topic: 'Mathematical Operations',
    questionEn:
      'If 8 ★ 4 # 5 = 10 and 18 ★ 3 # 2 = 12, then what will be the value of 32 ★ 4 # 6?',
    questionHi:
      'यदि 8 ★ 4 # 5 = 10 और 18 ★ 3 # 2 = 12 है, तो 32 ★ 4 # 6 का मान क्या होगा?',
    optionsEn: ['36', '48', '24', '52'],
    optionsHi: ['36', '48', '24', '52'],
    correctIndex: 1,
    explanationEn:
      'Here ★ represents division (÷) and # represents multiplication (×):\n• (8 ÷ 4) × 5 = 2 × 5 = 10\n• (18 ÷ 3) × 2 = 6 × 2 = 12\nTherefore, 32 ★ 4 # 6 = (32 ÷ 4) × 6 = 8 × 6 = 48.',
    explanationHi:
      'यहाँ ★ का अर्थ भाग (÷) और # का अर्थ गुणा (×) है:\n• (8 ÷ 4) × 5 = 10\n• (18 ÷ 3) × 2 = 12\nअतः (32 ÷ 4) × 6 = 8 × 6 = 48।',
  },
  {
    id: 'cgl26_01o1_q21',
    topic: 'Decision Making',
    questionEn:
      'Sarah wants to open a high-end bakery in a bustling part of the city. She needs a location that gets heavy weekend pedestrian traffic and is near other lifestyle shops. Which of the given options should she select?',
    questionHi:
      'सारा शहर के एक व्यस्त क्षेत्र में एक उच्च-स्तरीय बेकरी खोलना चाहती है। उसे ऐसी जगह की आवश्यकता है जहाँ सप्ताहांत में पैदल आने वाले ग्राहकों की संख्या अधिक हो और जो अन्य जीवनशैली-संबंधी दुकानों के निकट हो। दिए गए विकल्पों में से उसे कौन-सा विकल्प चुनना चाहिए?',
    optionsEn: [
      'A quiet corner shop in a suburban area that is rarely visited on the weekends.',
      'A small booth situated in a busy food court inside a popular weekend mall.',
      'A store in a remote business park that is closed on all weekend afternoons.',
      'A basement unit in a large office building with no nearby retail presence.',
    ],
    optionsHi: [
      'उपनगरीय क्षेत्र में स्थित एक शांत कोने की दुकान, जहाँ सप्ताहांत में बहुत कम लोग आते हैं।',
      'एक लोकप्रिय सप्ताहांत मॉल के भीतर व्यस्त फूड कोर्ट में स्थित एक छोटा स्टॉल।',
      'एक दूरस्थ व्यावसायिक पार्क में स्थित दुकान, जो प्रत्येक सप्ताहांत की दोपहर को बंद रहती है।',
      'एक बड़े कार्यालय भवन के बेसमेंट में स्थित इकाई, जिसके आसपास कोई खुदरा दुकानें नहीं हैं।',
    ],
    correctIndex: 1,
    explanationEn:
      'Only Option (B) satisfies all three criteria: bustling area, heavy weekend pedestrian footfall, and proximity to lifestyle retail shops (inside a popular weekend mall).',
    explanationHi:
      'केवल विकल्प (B) सभी शर्तों को पूरा करता है — लोकप्रिय सप्ताहांत मॉल में पैदल ग्राहकों की भारी भीड़ और आसपास जीवनशैली-संबंधी खुदरा दुकानें दोनों उपलब्ध होती हैं।',
  },
  {
    id: 'cgl26_01o1_q22',
    topic: 'Social & Emotional Intelligence',
    questionEn:
      'You notice that a coworker has been consistently arriving late and leaving early, and another colleague jokes that they should "get caught" by the boss. You\'re not in a supervisory role. What\'s the best response?',
    questionHi:
      'आप देखते हैं कि एक सहकर्मी लगातार देर से कार्यालय आ रहा है और जल्दी जा रहा है। इस बीच, एक अन्य सहकर्मी मज़ाक में कहता है कि उसे बॉस द्वारा "पकड़ा जाना चाहिए"। आप किसी पर्यवेक्षी (Supervisory) भूमिका में नहीं हैं। ऐसी स्थिति में सबसे उपयुक्त प्रतिक्रिया क्या होगी?',
    optionsEn: [
      "Join in the joke, since it's harmless office banter.",
      'Mention it to the boss yourself so the issue gets addressed.',
      'Avoid gossip and focus on your own responsibilities.',
      'Confront the coworker directly about their attendance.',
    ],
    optionsHi: [
      'मज़ाक में शामिल हो जाएँ, क्योंकि यह कार्यालय की सामान्य हँसी-मज़ाक की बात है।',
      'इस मुद्दे के समाधान के लिए स्वयं जाकर बॉस को इसके बारे में बता दें।',
      'चुगली-चर्चा (Gossip) से बचें और अपनी जिम्मेदारियों पर ध्यान केंद्रित करें।',
      'सहकर्मी की उपस्थिति के बारे में सीधे उससे सामना करें।',
    ],
    correctIndex: 2,
    explanationEn:
      'Because you are not in a supervisory role and do not know whether the coworker has an approved flexible schedule or personal arrangement, avoiding office gossip and focusing on your own work (Option C) is the most professional response.',
    explanationHi:
      'चूँकि आप पर्यवेक्षी भूमिका में नहीं हैं, अतः कार्यालय में चुगली (gossip) से बचना और अपने कार्य पर ध्यान केंद्रित करना (विकल्प C) सबसे पेशेवर और परिपक्व प्रतिक्रिया है।',
  },
  {
    id: 'cgl26_01o1_q23',
    topic: 'Statement & Conclusions',
    questionEn:
      'Read the statement carefully and assume it to be true. Then examine the two conclusions given below it and decide which conclusion(s), if any, logically follow from the statement.\n\nStatement:\nAn IT organization has deployed advanced encryption protocols and intrusion detection systems to strengthen its cybersecurity framework.\n\nConclusions:\nI. Cyberattacks have been eliminated in all systems.\nII. Encryption alone is sufficient to prevent all security breaches.',
    questionHi:
      'कथन को ध्यानपूर्वक पढ़िए और उसे सत्य मानिए। फिर उसके नीचे दिए गए दो निष्कर्षों की जाँच कीजिए तथा निर्धारित कीजिए कि कौन-सा/कौन-से निष्कर्ष, यदि कोई हो, कथन से तार्किक रूप से अनुसरण करते हैं।\n\nकथन:\nएक आईटी संगठन ने अपने साइबर सुरक्षा ढाँचे को सुदृढ़ करने के लिए उन्नत एन्क्रिप्शन प्रोटोकॉल तथा घुसपैठ पहचान प्रणालियाँ (इंट्रूज़न डिटेक्शन सिस्टम्स) लागू की हैं।\n\nनिष्कर्ष:\nI. सभी प्रणालियों में साइबर हमलों का पूर्णतः उन्मूलन हो चुका है।\nII. सभी सुरक्षा उल्लंघनों को रोकने के लिए केवल एन्क्रिप्शन ही पर्याप्त है।',
    optionsEn: [
      'Only conclusion I follows',
      'Both conclusions I and II follow',
      'Only conclusion II follows',
      'Neither conclusion I nor conclusion II follows',
    ],
    optionsHi: [
      'केवल निष्कर्ष I अनुसरण करता है।',
      'निष्कर्ष I और II दोनों अनुसरण करते हैं।',
      'केवल निष्कर्ष II अनुसरण करता है।',
      'न तो निष्कर्ष I और न ही निष्कर्ष II अनुसरण करता है।',
    ],
    correctIndex: 3,
    explanationEn:
      '• Conclusion I does not follow: Strengthening security does not guarantee complete elimination of cyberattacks in all systems.\n• Conclusion II contradicts the statement itself: The organization deployed both encryption AND intrusion detection systems, so encryption alone is not stated to be sufficient.\nHence, neither conclusion follows.',
    explanationHi:
      '• निष्कर्ष I असत्य है क्योंकि सुरक्षा सुदृढ़ करने का अर्थ हमलों का पूर्णतः उन्मूलन नहीं है।\n• निष्कर्ष II भी असत्य है क्योंकि संगठन ने एन्क्रिप्शन के साथ-साथ घुसपैठ पहचान प्रणाली भी लागू की है।\nअतः न तो I और न ही II अनुसरण करता है।',
  },
  {
    id: 'cgl26_01o1_q24',
    topic: 'Word Analogy',
    questionEn:
      'Select the option that is related to the third word in the same way as the second word is related to the first word.\nLion : Den :: Rabbit : ?',
    questionHi:
      'उस विकल्प का चयन करें जो तीसरे शब्द से उसी प्रकार संबंधित हो, जिस प्रकार दूसरा शब्द पहले शब्द से संबंधित है।\nLion : Den :: Rabbit : ?',
    optionsEn: ['Hole', 'Burrow', 'Stable', 'Kennel'],
    optionsHi: ['Hole (बिल/छेद)', 'Burrow (माँद/बिल)', 'Stable (अस्तबल)', 'Kennel (कुत्ताघर)'],
    correctIndex: 1,
    explanationEn:
      'The dwelling place of a Lion is called a Den; similarly, the specific dwelling place of a Rabbit is called a Burrow (Horse → Stable, Dog → Kennel).',
    explanationHi:
      'जिस प्रकार शेर (Lion) के निवास स्थान को Den (माँद) कहा जाता है, उसी प्रकार खरगोश (Rabbit) के निवास स्थान को Burrow कहा जाता है।',
  },
  {
    id: 'cgl26_01o1_q25',
    topic: 'Statement & Assumptions',
    questionEn:
      "Read the given statement carefully and the following assumptions based on it. Decide which of the assumptions are implicit in the statement.\n\nStatement:\nA leading nutrition brand has claimed that its new plant-based protein shake is the most effective supplement for muscle recovery.\n\nAssumptions:\nI. All other protein supplements currently on the market are ineffective for muscle recovery.\nII. Consumers will believe the company's claim without checking independent scientific studies.",
    questionHi:
      'दिए गए कथन को ध्यानपूर्वक पढ़िए तथा उसके आधार पर दी गई निम्नलिखित मान्यताओं पर विचार कीजिए। निर्धारित कीजिए कि कथन में कौन-सी मान्यता/मान्यताएँ निहित हैं।\n\nकथन:\nएक अग्रणी पोषण ब्रांड ने दावा किया है कि उसका नया पादप-आधारित (प्लांट-बेस्ड) प्रोटीन शेक मांसपेशियों की रिकवरी के लिए सबसे प्रभावी अनुपूरक (सप्लीमेंट) है।\n\nमान्यताएँ:\nI. वर्तमान में बाजार में उपलब्ध अन्य सभी प्रोटीन सप्लीमेंट मांसपेशियों की रिकवरी के लिए अप्रभावी हैं।\nII. उपभोक्ता स्वतंत्र वैज्ञानिक अध्ययनों की जाँच किए बिना ही कंपनी के दावे पर विश्वास कर लेंगे।',
    optionsEn: [
      'Both Assumptions I and II are implicit',
      'Only Assumption II is implicit',
      'Only Assumption I is implicit',
      'Neither Assumption I nor II is implicit',
    ],
    optionsHi: [
      'मान्यता I और II दोनों निहित हैं।',
      'केवल मान्यता II निहित है।',
      'केवल मान्यता I निहित है।',
      'न तो मान्यता I न ही II निहित है।',
    ],
    correctIndex: 3,
    explanationEn:
      '• Assumption I is NOT implicit: Claiming to be "the most effective" does not mean all other supplements are completely ineffective.\n• Assumption II is NOT implicit: Making a marketing claim does not presuppose that consumers will blindly accept it without verification.\nHence, neither Assumption I nor II is implicit.',
    explanationHi:
      '• मान्यता I निहित नहीं है: "सबसे प्रभावी" होने के दावे का अर्थ यह नहीं है कि अन्य सभी सप्लीमेंट पूरी तरह अप्रभावी हैं।\n• मान्यता II भी निहित नहीं है: कथन में उपभोक्ताओं द्वारा बिना जाँच किए विश्वास करने का कोई संकेत नहीं है।\nअतः न तो I और न ही II निहित है।',
  },
];
