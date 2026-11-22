import { MockTest, Question } from '../../types/exam';

const CLOZE_PASSAGE_O5S3 = `The domain of outer space, once a sublime expanse emblematic of universal aspiration, has morphed into a (1)____ terrain, rife with techno-nationalistic rivalries and juridical lacunae. As states and non-state actors alike pursue orbital hegemony, the narrative has shifted from exploration to securitization. The proliferation of constellations, kinetic kill vehicles, and cyber-vulnerable architectures has (2)____ erstwhile doctrinal separations between civilian and military enterprises. Multilateral compacts, such as the Outer Space Treaty, now appear (3)____ in the face of unilateral adventurism and semantic exploitation of treaty ambiguities. The ethos of cooperative multilateralism is steadily eclipsed by strategic opacity and regime fragmentation. Resource extraction from asteroids and prospective Mars colonization introduce a lexicon of planetary commodification, propelling a new phase of (4)____ governance, where legitimacy is brokered not by consensus but by technological primacy. Increasingly, legal constructs are subordinated to hardware capability, and soft power is reconstituted through launch cadence, orbital coverage, and downstream data monopolies. In this milieu, techno-diplomacy must evolve beyond hortatory platitudes to a (5)____ apparatus for strategic calibration, deterrence, and geopolitical signaling in an emergent multipolar cosmodynamic order.`;

const SECTION_1_REASONING_O5S3: Question[] = [
  {
    id: 'cgl26_05o3_q1',
    topic: 'Word Analogy',
    questionEn:
      'In the following question, select the related word from the given alternatives.\nCorundum : Sapphire :: Carbon : ?',
    questionHi:
      'निम्नलिखित प्रश्न में दिए गए विकल्पों में से संबंधित शब्द का चयन कीजिए।\nकोरन्डम : नीलम :: कार्बन : ?',
    optionsEn: ['Graphene', 'Rhombohedral', 'Anatomy', 'Gold'],
    optionsHi: ['ग्राफीन (Graphene)', 'रॉम्बोहिड्रल (Rhombohedral)', 'शरीर रचना (Anatomy)', 'सोना (Gold)'],
    correctIndex: 0,
    explanationEn:
      'Sapphire is a crystalline form/variety of the mineral Corundum (Al₂O₃). Similarly, Graphene is an allotrope/form of Carbon.',
    explanationHi:
      'नीलम (Sapphire), कोरन्डम (Corundum) का एक क्रिस्टलीय रूप है। इसी प्रकार ग्राफीन (Graphene), कार्बन (Carbon) का एक अपरूप (allotrope) है।',
  },
  {
    id: 'cgl26_05o3_q2',
    topic: 'Mathematical Operations',
    questionEn:
      'If @ → A is added to B\n^ → A is multiplied by B\n% → A is divided by B\n$ → B is subtracted from A\nThen: [(144 % 12) @ (7 ^ 2)] $ [64 % 8]',
    questionHi:
      'यदि @ → A को B में जोड़ा जाए\n^ → A को B से गुणा किया जाए\n% → A को B से विभाजित किया जाए\n$ → B को A से घटाया जाए\nतो: [(144 % 12) @ (7 ^ 2)] $ [64 % 8]',
    optionsEn: ['18', '20', '22', '24'],
    optionsHi: ['18', '20', '22', '24'],
    correctIndex: 0,
    explanationEn:
      'Replacing symbols with operators (@ = +, ^ = ×, % = ÷, $ = −):\n[(144 ÷ 12) + (7 × 2)] − [64 ÷ 8]\n= [12 + 14] − 8 = 26 − 8 = 18.',
    explanationHi:
      'प्रतीकों को गणितीय चिह्नों से बदलने पर (@ = +, ^ = ×, % = ÷, $ = −):\n[(144 ÷ 12) + (7 × 2)] − [64 ÷ 8]\n= [12 + 14] − 8 = 26 − 8 = 18।',
  },
  {
    id: 'cgl26_05o3_q3',
    topic: 'Situational Judgement',
    questionEn:
      'You are reporting to a newly appointed manager who is noticeably younger and has less professional experience than you. You find some of their decisions lacking in strategic depth.\nQuestion: What is the most constructive way to respond while maintaining professionalism and team harmony?',
    questionHi:
      'आप एक नए नियुक्त प्रबंधक को रिपोर्ट कर रहे हैं जो आपसे काफी कम उम्र का है और उसके पास आपसे कम पेशेवर अनुभव है। आपको लगता है कि उनके कुछ निर्णयों में रणनीतिक गहराई की कमी है।\nप्रश्न: व्यावसायिकता और टीम सामंजस्य बनाए रखते हुए प्रतिक्रिया देने का सबसे रचनात्मक तरीका क्या है?',
    optionsEn: [
      'Regularly question and oppose their decisions to assert your seniority',
      'Raise concerns with upper management without first attempting resolution',
      'Offer thoughtful, experience-based input in a respectful and supportive manner',
      'Subtly discredit their authority to regain influence among peers',
    ],
    optionsHi: [
      'अपनी वरिष्ठता साबित करने के लिए नियमित रूप से उनके निर्णयों पर सवाल उठाएं और उनका विरोध करें',
      'समाधान का प्रयास किए बिना ऊपरी प्रबंधन के समक्ष अपनी चिंताएं व्यक्त करना',
      'सम्मानजनक और सहायक तरीके से विचारशील, अनुभव-आधारित इनपुट प्रदान करें',
      'साथियों के बीच पुनः प्रभाव प्राप्त करने के लिए उनके अधिकार को धूर्ततापूर्वक बदनाम करना',
    ],
    correctIndex: 2,
    explanationEn:
      'Professionalism and team harmony require respecting organizational hierarchy while constructively sharing experience-based suggestions in a supportive manner.',
    explanationHi:
      'व्यावसायिकता और टीम सामंजस्य बनाए रखने के लिए सम्मानजनक और सहयोगी तरीके से अपने अनुभव पर आधारित रचनात्मक सुझाव देना सबसे उपयुक्त कदम है।',
  },
  {
    id: 'cgl26_05o3_q4',
    topic: 'Syllogism',
    questionEn:
      'If some fruits are apples and some apples are red, what logically follows?',
    questionHi:
      'यदि कुछ फल सेब हैं और कुछ सेब लाल हैं, तो तार्किक रूप से क्या होगा?',
    optionsEn: [
      'Some red things are fruits',
      'Some fruits may be red',
      'All red things are apples',
      'Some apples are fruits',
    ],
    optionsHi: [
      'कुछ लाल चीजें फल हैं',
      'कुछ फल लाल हो सकते हैं',
      'सभी लाल चीजें सेब हैं',
      'कुछ सेब फल हैं',
    ],
    correctIndex: 3,
    explanationEn:
      'By immediate inference (conversion of an I-proposition), "Some fruits are apples" definitely and directly implies "Some apples are fruits".',
    explanationHi:
      'प्रत्यक्ष तार्किक रूपांतरण के अनुसार, "कुछ फल सेब हैं" से निश्चित रूप से यह निष्कर्ष निकलता है कि "कुछ सेब फल हैं"।',
  },
  {
    id: 'cgl26_05o3_q5',
    topic: 'Condition Verification',
    questionEn:
      'In MH (27), roll numbers must end in prime digits in Room 01.\nQuestion: Which number violates this condition?',
    questionHi:
      'एमएच (27) में, कक्ष 01 में रोल नंबर अभाज्य अंकों पर समाप्त होने चाहिए।\nप्रश्न: कौन सी संख्या इस शर्त का उल्लंघन करती है?',
    optionsEn: ['2701023', '2701049', '2701064', '2701097'],
    optionsHi: ['2701023', '2701049', '2701064', '2701097'],
    correctIndex: 2,
    explanationEn:
      'Single-digit prime numbers are 2, 3, 5, and 7. Options (A) 2701023 and (D) 2701097 end in prime digits (3 and 7). Option (C) 2701064 ends in 4, which is an even composite digit and clearly violates the prime-ending rule (per the official answer key, C is the designated answer).',
    explanationHi:
      'एक-अंकीय अभाज्य अंक 2, 3, 5 और 7 हैं। विकल्प (C) 2701064 सम भाज्य अंक 4 पर समाप्त होता है, जो शर्त का स्पष्ट उल्लंघन करता है (आधिकारिक उत्तर कुंजी के अनुसार विकल्प C सही है)।',
  },
  {
    id: 'cgl26_05o3_q6',
    topic: 'Statement & Conclusions',
    questionEn:
      'Statement: "Sustainable development cannot be achieved without balancing environmental concerns with economic growth."\nConclusions:\nI. Environmental sustainability and economic growth are mutually exclusive.\nII. Both environment and economy must be considered to achieve sustainability.',
    questionHi:
      'कथन: "पर्यावरण संबंधी चिंताओं को आर्थिक विकास के साथ संतुलित किए बिना सतत विकास हासिल नहीं किया जा सकता।"\nनिष्कर्ष:\nI. पर्यावरणीय स्थिरता और आर्थिक विकास परस्पर अनन्य हैं।\nII. स्थिरता प्राप्त करने के लिए पर्यावरण और अर्थव्यवस्था दोनों पर विचार किया जाना चाहिए।',
    optionsEn: [
      'Only I follows',
      'Only II follows',
      'Both follow',
      'Neither follows',
    ],
    optionsHi: [
      'केवल I अनुसरण करता है',
      'केवल II अनुसरण करता है',
      'दोनों अनुसरण करते हैं',
      'कोई भी अनुसरण नहीं करता',
    ],
    correctIndex: 1,
    explanationEn:
      'The statement stresses balancing environmental concerns with economic growth—meaning they are NOT mutually exclusive (so I does not follow), and both must be considered together to achieve sustainability (so II directly follows).',
    explanationHi:
      'कथन पर्यावरण और आर्थिक विकास के संतुलन पर जोर देता है, जिसका अर्थ है कि वे परस्पर विरोधी नहीं हैं (I असत्य है), बल्कि सतत विकास के लिए दोनों पर विचार आवश्यक है (केवल II अनुसरण करता है)।',
  },
  {
    id: 'cgl26_05o3_q7',
    topic: 'Coded Operations',
    questionEn:
      'If # means square of number, @ means cube of number, % means subtract 5, and & means add 2, then what is the value of:\n3 @ % & = ?',
    questionHi:
      'यदि # का अर्थ संख्या का वर्ग है, @ का अर्थ संख्या का घन है, % का अर्थ 5 घटाना है, और & का अर्थ 2 जोड़ना है, तो 3 @ % & = ? का मान क्या है?',
    optionsEn: ['20', '22', '24', '25'],
    optionsHi: ['20', '22', '24', '25'],
    correctIndex: 2,
    explanationEn:
      'Applying operations sequentially from left to right on 3:\nStep 1 (@ cube): 3³ = 27\nStep 2 (% subtract 5): 27 − 5 = 22\nStep 3 (& add 2): 22 + 2 = 24.',
    explanationHi:
      'बाएँ से दाएँ क्रमशः संक्रियाएँ लागू करने पर:\nचरण 1 (@ घन): 3³ = 27\nचरण 2 (% 5 घटाना): 27 − 5 = 22\nचरण 3 (& 2 जोड़ना): 22 + 2 = 24।',
  },
  {
    id: 'cgl26_05o3_q8',
    topic: 'Seating Arrangement',
    questionEn:
      'Eight friends — P, Q, R, S, T, U, V, and W — are sitting around a square table, with one person on each side and one at each corner. P and S are seated opposite each other, as are Q and T. V is seated to the left of S, while U is to the right of S. W is directly opposite V. R occupies one of the corner seats. Based on this arrangement, who is seated diagonally opposite to R?',
    questionHi:
      'आठ दोस्त — P, Q, R, S, T, U, V और W — एक वर्गाकार मेज़ के चारों ओर बैठे हैं, जिसमें प्रत्येक तरफ़ एक व्यक्ति और प्रत्येक कोने पर एक व्यक्ति है। P और S एक दूसरे के विपरीत बैठे हैं, जैसे कि Q और T हैं। V, S के बाईं ओर बैठा है, जबकि U, S के दाईं ओर है। W, V के ठीक विपरीत है। R कोने वाली सीटों में से एक पर बैठा है। इस व्यवस्था के आधार पर, R के तिरछे विपरीत कौन बैठा है?',
    optionsEn: ['P', 'Q', 'U', 'T'],
    optionsHi: ['P', 'Q', 'U', 'T'],
    correctIndex: 2,
    explanationEn:
      'The 4 opposite pairs around the 8-seat square table must account for all 8 people:\n• (P, S) are opposite.\n• (Q, T) are opposite.\n• (V, W) are opposite.\nTherefore, the only remaining two friends, R and U, MUST be seated opposite each other. Since R is at a corner, U is seated diagonally opposite to R.',
    explanationHi:
      'आठ सीटों वाली वर्गाकार मेज़ पर 4 विपरीत जोड़ियाँ बनती हैं:\n• (P, S) विपरीत हैं\n• (Q, T) विपरीत हैं\n• (V, W) विपरीत हैं\nअतः शेष बचे दो मित्र R और U निश्चित रूप से एक-दूसरे के विपरीत (तिरछे विपरीत कोनों पर) बैठे हैं।',
  },
  {
    id: 'cgl26_05o3_q9',
    topic: 'Mathematical Operations',
    questionEn:
      'Solve: If ‘+’ means ‘−’, ‘−’ means ‘×’, ‘×’ means ‘÷’, and ‘÷’ means ‘+’, then what is the value of:\n36 − 3 × 4 + 2 ÷ 1 = ?',
    questionHi:
      'हल करें: यदि ‘+’ का अर्थ ‘−’, ‘−’ का अर्थ ‘×’, ‘×’ का अर्थ ‘÷’ और ‘÷’ का अर्थ ‘+’ है, तो इसका मान क्या है:\n36 − 3 × 4 + 2 ÷ 1 = ?',
    optionsEn: ['23', '24', '25', '26'],
    optionsHi: ['23', '24', '25', '26'],
    correctIndex: 3,
    explanationEn:
      'After replacing operators:\n36 × 3 ÷ 4 − 2 + 1\nUsing BODMAS: (36 × 3) ÷ 4 − 2 + 1 = 108 ÷ 4 − 2 + 1 = 27 − 2 + 1 = 26.',
    explanationHi:
      'चिह्न बदलने के बाद:\n36 × 3 ÷ 4 − 2 + 1\nBODMAS नियम से: 108 ÷ 4 − 2 + 1 = 27 − 2 + 1 = 26।',
  },
  {
    id: 'cgl26_05o3_q10',
    topic: 'Mathematical Operations',
    questionEn:
      'If + = ÷, − = +, × = −, and ÷ = ×, then which of the following equations is correct?',
    questionHi:
      'यदि + = ÷, − = +, × = −, तथा ÷ = × है, तो निम्नलिखित में से कौन सा समीकरण सही है?',
    optionsEn: [
      '180 + 30 − 10 × 4 = 35',
      '256 ÷ 8 + 12 − 4 = 224',
      '144 × 12 − 6 + 3 = 134',
      '196 − 49 + 14 × 2 = 200',
    ],
    optionsHi: [
      '180 + 30 − 10 × 4 = 35',
      '256 ÷ 8 + 12 − 4 = 224',
      '144 × 12 − 6 + 3 = 134',
      '196 − 49 + 14 × 2 = 200',
    ],
    correctIndex: 2,
    explanationEn:
      'Checking option (C): 144 × 12 − 6 + 3\nReplacing operators (× → −, − → +, + → ÷):\n144 − 12 + (6 ÷ 3) = 144 − 12 + 2 = 134. Matches RHS exactly!',
    explanationHi:
      'विकल्प (C) की जाँच करने पर: 144 × 12 − 6 + 3\nचिह्न बदलने पर: 144 − 12 + (6 ÷ 3) = 144 − 12 + 2 = 134 (सही समीकरण)।',
  },
  {
    id: 'cgl26_05o3_q11',
    topic: 'Decision Making',
    questionEn:
      'Read the following scenario carefully and choose the most appropriate option that fulfills all the given criteria.\nRavi wants to learn photography in his spare time but prefers flexibility and can’t travel often due to a tight job schedule. Which learning method should he choose?',
    questionHi:
      'निम्नलिखित परिदृश्य को ध्यान से पढ़ें और सबसे उपयुक्त विकल्प चुनें जो सभी दिए गए मानदंडों को पूरा करता हो।\nरवि अपने खाली समय में फोटोग्राफी सीखना चाहता है, लेकिन वह लचीलापन पसंद करता है और व्यस्त नौकरी के कारण अक्सर यात्रा नहीं कर सकता। उसे कौन सी सीखने की विधि चुननी चाहिए?',
    optionsEn: [
      'Enroll in a full-time diploma course.',
      'Subscribe to a structured online course with flexible deadlines.',
      'Attend daily workshops at a local academy.',
      'Wait until he can take long leave and join a studio.',
    ],
    optionsHi: [
      'पूर्णकालिक डिप्लोमा पाठ्यक्रम में नामांकन कराएं।',
      'लचीली समय-सीमा वाले संरचित ऑनलाइन पाठ्यक्रम की सदस्यता लें।',
      'स्थानीय अकादमी में प्रतिदिन कार्यशालाओं में भाग लें।',
      'तब तक प्रतीक्षा करें जब तक वह लंबी छुट्टी लेकर किसी स्टूडियो में शामिल न हो जाएँ।',
    ],
    correctIndex: 1,
    explanationEn:
      'A structured online course with flexible deadlines directly meets all three requirements: learning in spare time, schedule flexibility, and no frequent travel.',
    explanationHi:
      'लचीली समय-सीमा वाला ऑनलाइन पाठ्यक्रम रवि की तीनों आवश्यकताओं—खाली समय में सीखना, लचीलापन और यात्रा से बचाव—को पूरा करता है।',
  },
  {
    id: 'cgl26_05o3_q12',
    topic: 'Emotional Intelligence (Matching)',
    questionEn:
      'Match the following Emotional Intelligence dimensions with their characteristics:',
    questionHi:
      'इन भावनात्मक बुद्धिमत्ता के आयामों को उनके गुणों से मिलाएँ:',
    matrix: [
      ['List I (EI Dimensions)', 'List II (Characteristics)'],
      ['a. Self-awareness', "i. Ability to guide others' emotions and actions"],
      ['b. Self-management', 'ii. Being able to sense what others feel and want'],
      ['c. Self-motivation', 'iii. Knowledge of true feelings at the moment'],
      ['d. Empathy', "iv. Handling one's emotions to facilitate tasks"],
      ['e. Social skills', 'v. Staying on course towards desired goals'],
    ],
    optionsEn: [
      'a-iii, b-iv, c-v, d-ii, e-i',
      'a-i, b-ii, c-iii, d-v, e-iv',
      'a-v, b-iv, c-ii, d-i, e-iii',
      'a-ii, b-iii, c-iv, d-v, e-i',
    ],
    optionsHi: [
      'a-iii, b-iv, c-v, d-ii, e-i',
      'a-i, b-ii, c-iii, d-v, e-iv',
      'a-v, b-iv, c-ii, d-i, e-iii',
      'a-ii, b-iii, c-iv, d-v, e-i',
    ],
    correctIndex: 0,
    explanationEn:
      '• Self-awareness (a) → Knowledge of true feelings at the moment (iii)\n• Self-management (b) → Handling one’s emotions to facilitate tasks (iv)\n• Self-motivation (c) → Staying on course towards desired goals (v)\n• Empathy (d) → Being able to sense what others feel and want (ii)\n• Social skills (e) → Ability to guide others’ emotions and actions (i)\nHence, a-iii, b-iv, c-v, d-ii, e-i.',
    explanationHi:
      '• आत्म-जागरूकता (a) → वर्तमान भावनाओं का सही ज्ञान (iii)\n• आत्म-प्रबंधन (b) → कार्यों के लिए भावनाओं को नियंत्रित करना (iv)\n• आत्म-प्रेरणा (c) → लक्ष्यों की ओर अग्रसर रहना (v)\n• सहानुभूति (d) → दूसरों की भावनाओं को समझना (ii)\n• सामाजिक कौशल (e) → दूसरों की भावनाओं व कार्यों का मार्गदर्शन करना (i)\nअतः विकल्प (A) सही है।',
  },
  {
    id: 'cgl26_05o3_q13',
    topic: 'LCM / Counting',
    questionEn:
      'In a group of 120 students, every 8th student knows French, and every 10th knows Spanish. How many students know both the languages?',
    questionHi:
      '120 छात्रों के एक समूह में, हर 8वां छात्र फ्रेंच जानता है, और हर 10वां छात्र स्पेनिश जानता है। कितने छात्र दोनों भाषाएँ जानते हैं?',
    optionsEn: ['2', '3', '4', '5'],
    optionsHi: ['2', '3', '4', '5'],
    correctIndex: 1,
    explanationEn:
      'Students knowing both languages are positioned at multiples of LCM(8, 10) = 40.\nWithin 120 students, the multiples of 40 are 40, 80, and 120 ⇒ 120 / 40 = 3 students.',
    explanationHi:
      'दोनों भाषाएँ जानने वाले छात्र 8 और 10 के लघुत्तम समापवर्त्य (LCM = 40) के गुणजों पर होंगे।\n120 छात्रों में 40 के गुणज: 40, 80, 120 ⇒ कुल 120 / 40 = 3 छात्र।',
  },
  {
    id: 'cgl26_05o3_q14',
    topic: 'Logical Inference',
    questionEn:
      'Pick the correct inference:\nStudies show people who walk daily are less likely to develop heart conditions.',
    questionHi:
      'सही निष्कर्ष चुनें:\nअध्ययनों से पता चलता है कि जो लोग रोज़ाना पैदल चलते हैं, उनमें हृदय संबंधी बीमारियाँ होने की संभावना कम होती है।',
    optionsEn: [
      'Walking daily guarantees a healthy heart',
      'Heart health depends solely on walking',
      'People who don’t walk are always unhealthy',
      'Regular walking may reduce the risk of heart issues',
    ],
    optionsHi: [
      'रोजाना पैदल चलने से स्वस्थ हृदय की गारंटी मिलती है',
      'हृदय का स्वास्थ्य पूरी तरह से पैदल चलने पर निर्भर करता है',
      'जो लोग पैदल नहीं चलते वे हमेशा अस्वस्थ रहते हैं',
      'नियमित रूप से पैदल चलने से हृदय संबंधी समस्याओं का खतरा कम हो सकता है',
    ],
    correctIndex: 3,
    explanationEn:
      '"Less likely to develop" indicates a probability/risk reduction, not an absolute guarantee. Extreme words like "guarantees", "solely", and "always" invalidate options A, B, and C; option (D) accurately captures the probabilistic inference.',
    explanationHi:
      '"संभावना कम होती है" जोखिम में कमी को दर्शाता है, किसी पूर्ण गारंटी को नहीं। "गारंटी", "पूरी तरह" और "हमेशा" जैसे अतिवादी शब्द विकल्प A, B, C को गलत बनाते हैं; विकल्प (D) सही निष्कर्ष है।',
  },
  {
    id: 'cgl26_05o3_q15',
    topic: 'Figure Analogy',
    questionEn:
      'Examine the first set of figures in Image X. There is a particular relationship between the first and second figures. Using the same connection, select the missing figure from Image Y’s options for the second pair.',
    questionHi:
      'छवि X में आकृतियों के पहले सेट की जाँच करें। पहली और दूसरी आकृतियों के बीच एक विशेष संबंध है। उसी संबंध का उपयोग करते हुए, दूसरी जोड़ी के लिए छवि Y के विकल्पों में से लुप्त आकृति का चयन करें।',
    imageUrl: '/assets/tests/cgl-2026-05-oct-s3/q15-analogy.svg',
    optionsEn: ['1', '2', '3', '4'],
    optionsHi: ['1', '2', '3', '4'],
    correctIndex: 2,
    explanationEn:
      'In the first pair, the inner figure (upright triangle) becomes the outer figure while preserving its orientation, and the outer figure (square) shrinks to become a shaded/filled square inside it. Applying the same rule to the second pair (square containing an inverted triangle), the inverted triangle becomes the outer figure with a filled small square inside it — which is Figure (3).',
    explanationHi:
      'पहली जोड़ी में अंदर वाली आकृति (सीधा त्रिभुज) बाहर आ जाती है और बाहर वाला वर्ग अंदर आकर छायांकित (भरा हुआ) छोटा वर्ग बन जाता है। यही नियम दूसरी जोड़ी पर लगाने पर उल्टा त्रिभुज बाहर और भरा हुआ छोटा वर्ग अंदर आ जाता है — जो आकृति (3) है।',
  },
  {
    id: 'cgl26_05o3_q16',
    topic: 'Venn Diagram',
    questionEn:
      'Based on the Venn diagram given in the image, how many educated women are employed?\nNote: In the Venn diagram, the big circle represents "Employed women", small circle represents "Backward women", and the triangle represents "Educated women".',
    questionHi:
      'छवि में दिए गए वेन आरेख के आधार पर, कितनी शिक्षित महिलाएँ कार्यरत हैं?\nनोट: वेन आरेख में, बड़ा वृत्त "कार्यरत महिलाओं" को दर्शाता है, छोटा वृत्त "पिछड़ी महिलाओं" को दर्शाता है, और त्रिभुज "शिक्षित महिलाओं" को दर्शाता है।',
    imageUrl: '/assets/tests/cgl-2026-05-oct-s3/q16-venn.svg',
    optionsEn: ['22', '6', '18', '12'],
    optionsHi: ['22', '6', '18', '12'],
    correctIndex: 2,
    explanationEn:
      'Educated women who are employed correspond to the region common to BOTH the Triangle (Educated women) and the Big Circle (Employed women).\nThe numbers inside this intersection are 12 (triangle + big circle only) and 6 (triangle + big circle + small circle).\nTotal = 12 + 6 = 18.',
    explanationHi:
      'शिक्षित एवं कार्यरत महिलाएँ त्रिभुज (शिक्षित) और बड़े वृत्त (कार्यरत) के उभयनिष्ठ क्षेत्र द्वारा दर्शाई जाती हैं।\nइस क्षेत्र में संख्याएँ 12 और 6 हैं।\nकुल = 12 + 6 = 18।',
  },
  {
    id: 'cgl26_05o3_q17',
    topic: 'Paper Folding & Cutting',
    questionEn:
      'In Image X, a set of three figures, 1, 2 and 3, shows a sequence of folding a piece of paper. Figure 3 illustrates the process of cutting the folded paper. Select a figure from Image Y that most closely resembles the unfolded form of figure 3.',
    questionHi:
      'छवि X में, तीन आकृतियों का एक सेट 1, 2 और 3 कागज़ के एक टुकड़े को मोड़ने का क्रम दिखा रहा है। चित्र 3 मुड़े हुए कागज़ को काटने की प्रक्रिया को दर्शाता है। छवि Y से एक आकृति चुनें जो आकृति 3 के खुले रूप से सबसे ज़्यादा मिलती जुलती हो।',
    imageUrl: '/assets/tests/cgl-2026-05-oct-s3/q17-paperfold.svg',
    optionsEn: ['A', 'B', 'C', 'D'],
    optionsHi: ['A', 'B', 'C', 'D'],
    correctIndex: 2,
    explanationEn:
      'Unfolding step (2) upward across the horizontal fold duplicates the bottom arch cut onto the top edge and mirrors the left-pointing triangle (◁) vertically as another left-pointing triangle (◁) in the middle strip. Then unfolding step (1) outward to the left and right replicates the top/bottom arches across all 3 columns and mirrors the central ◁ horizontally into ▷ in both outer columns. This matches Figure (C).',
    explanationHi:
      'चरण (2) को ऊपर की ओर खोलने पर नीचे का अर्धवृत्ताकार कट ऊपर भी बन जाता है और मध्य स्तंभ में बाईं ओर इशारा करते दो त्रिभुज (◁) दिखते हैं। चरण (1) को बाएँ-दाएँ खोलने पर तीनों स्तंभों के ऊपर-नीचे अर्धवृत्ताकार कट तथा बाएँ-दाएँ स्तंभों में दाईं ओर इशारा करते त्रिभुज (▷) बनते हैं, जो आकृति (C) से मेल खाता है।',
  },
  {
    id: 'cgl26_05o3_q18',
    topic: 'Figure Series',
    questionEn:
      'Choose the appropriate figure from Image Y to follow the pattern in Image X.',
    questionHi:
      'छवि X में पैटर्न का अनुसरण करने के लिए छवि Y से उपयुक्त आकृति चुनें।',
    imageUrl: '/assets/tests/cgl-2026-05-oct-s3/q18-pattern.svg',
    optionsEn: ['A', 'B', 'C', 'D'],
    optionsHi: ['A', 'B', 'C', 'D'],
    correctIndex: 2,
    explanationEn:
      'In Image X, the continuous star-outline pattern progressively shifts counter-clockwise around the center: at each step, segments are removed from the trailing clockwise end (right/top-right) and added at the leading counter-clockwise end (bottom-left/bottom). Continuing this step from the 4th figure completes the bottom-left star tip while trimming the top-right diagonal, producing Figure (C).',
    explanationHi:
      'छवि X में तारे जैसी आकृति के खंड प्रत्येक चरण में वामावर्त (counter-clockwise) दिशा में एक-एक कदम आगे बढ़ते हैं — दाईं ओर से खंड घटते हैं और बाईं/निचली ओर जुड़ते जाते हैं। चौथी आकृति से अगला कदम आकृति (C) बनता है।',
  },
  {
    id: 'cgl26_05o3_q19',
    topic: 'Figure Classification (Odd One Out)',
    questionEn:
      'Choose the figure that stands out from the rest of the figures in the given image.',
    questionHi:
      'छवि में चार आकृतियों (A), (B), (C) और (D) में से तीन किसी न किसी तरह से तुलनीय हैं। फिर भी, एक आकृति अन्य तीन से भिन्न है। वह आकृति चुनें जो अन्य से भिन्न है।',
    imageUrl: '/assets/tests/cgl-2026-05-oct-s3/q19-odd-one.svg',
    optionsEn: ['A', 'B', 'C', 'D'],
    optionsHi: ['A', 'B', 'C', 'D'],
    correctIndex: 3,
    explanationEn:
      'Count the sides of (Outer polygon → Inner polygon):\n• (A) Square (4) → Pentagon (5): +1 side\n• (B) Triangle (3) → Square (4): +1 side\n• (C) Pentagon (5) → Hexagon (6): +1 side\n• (D) Rhombus (4) → Triangle (3): −1 side\nHence, Figure (D) is the odd one out.',
    explanationHi:
      'बाहरी से आंतरिक बहुभुज की भुजाओं की संख्या देखें:\n• (A) वर्ग (4) → पंचभुज (5): +1 भुजा\n• (B) त्रिभुज (3) → वर्ग (4): +1 भुजा\n• (C) पंचभुज (5) → षट्भुज (6): +1 भुजा\n• (D) समचतुर्भुज (4) → त्रिभुज (3): −1 भुजा\nअतः आकृति (D) सबसे भिन्न है।',
  },
  {
    id: 'cgl26_05o3_q20',
    topic: 'Figure Classification (Odd One Out)',
    questionEn:
      'Choose the figure that is different from the rest of the figures shown in the given image.',
    questionHi:
      'वह आकृति चुनें जो दी गई छवि में दिखाई गई शेष आकृतियों से अलग है।',
    imageUrl: '/assets/tests/cgl-2026-05-oct-s3/q20-odd-one.svg',
    optionsEn: ['A', 'B', 'C', 'D'],
    optionsHi: ['A', 'B', 'C', 'D'],
    correctIndex: 0,
    explanationEn:
      'Looking outward from the center along the bisecting radius of the 90° sector, in figures (B), (C), and (D) the small hollow circle lies in the counter-clockwise (left) half. Only in figure (A) does the hollow circle lie in the clockwise (right) half. Therefore, (A) is different.',
    explanationHi:
      'केंद्र से 90° त्रिज्यखंड की मध्य रेखा (समद्विभाजक) के अनुदिश बाहर की ओर देखने पर, आकृति (B), (C) और (D) में छोटा वृत्त वामावर्त (बाईं) ओर स्थित है, जबकि केवल आकृति (A) में यह दक्षिणावर्त (दाईं) ओर स्थित है। अतः (A) भिन्न है।',
  },
  {
    id: 'cgl26_05o3_q21',
    topic: 'Figure Completion',
    questionEn:
      'In the following question, complete the missing portion of the question figure by selecting from the given answer figures (A), (B), (C) and (D).',
    questionHi:
      'निम्नलिखित प्रश्न में, प्रश्न आकृति के अधूरे भाग को दिए गए उत्तर आकृतियों (A), (B), (C) और (D) में से चुनकर पूर्ण करें।',
    imageUrl: '/assets/tests/cgl-2026-05-oct-s3/q21-main.svg',
    optionsEn: ['Figure A', 'Figure B', 'Figure C', 'Figure D'],
    optionsHi: ['आकृति A', 'आकृति B', 'आकृति C', 'आकृति D'],
    optionImages: [
      '/assets/tests/cgl-2026-05-oct-s3/q21-opt-a.svg',
      '/assets/tests/cgl-2026-05-oct-s3/q21-opt-b.svg',
      '/assets/tests/cgl-2026-05-oct-s3/q21-opt-c.svg',
      '/assets/tests/cgl-2026-05-oct-s3/q21-opt-d.svg',
    ],
    correctIndex: 0,
    explanationEn:
      'To complete the 4-fold symmetric rosette inside the circle, the bottom-right quadrant must have its two petal arcs originating from the top-left corner (center of the main figure) along the top and left edges, enclosed by the bottom-right quarter-circle arc. Option (A) completes the symmetry seamlessly.',
    explanationHi:
      'वृत्त के अंदर चार-पंखुड़ी वाली सममित आकृति को पूरा करने के लिए निचले-दाएँ चतुर्थांश में शीर्ष-बाएँ कोने (केंद्र) से निकलते हुए दो चाप और बाहरी चतुर्थांश वृत्त होना चाहिए, जो केवल विकल्प (A) में सटीक रूप से मिलता है।',
  },
  {
    id: 'cgl26_05o3_q22',
    topic: 'Logical Venn Diagram',
    questionEn:
      'Select the Venn diagram that best illustrates the relationship between the following classes.\nBat, Human, Mammals',
    questionHi:
      'उस वेन आरेख का चयन करें जो निम्नलिखित वर्गों के बीच संबंधों को सबसे अच्छे ढंग से दर्शाता है।\nचमगादड़, मानव, स्तनधारी',
    optionsEn: ['Diagram A', 'Diagram B', 'Diagram C', 'Diagram D'],
    optionsHi: ['आरेख A', 'आरेख B', 'आरेख C', 'आरेख D'],
    optionImages: [
      '/assets/tests/cgl-2026-05-oct-s3/q22-opt-a.svg',
      '/assets/tests/cgl-2026-05-oct-s3/q22-opt-b.svg',
      '/assets/tests/cgl-2026-05-oct-s3/q22-opt-c.svg',
      '/assets/tests/cgl-2026-05-oct-s3/q22-opt-d.svg',
    ],
    correctIndex: 2,
    explanationEn:
      'Both Bats and Humans are Mammals, while Bats and Humans are completely distinct species (no overlap between them). Thus, two separate inner circles enclosed inside one larger circle (Option C) best represents the relationship.',
    explanationHi:
      'चमगादड़ और मानव दोनों ही स्तनधारी (Mammals) हैं, लेकिन चमगादड़ और मानव आपस में पूरी तरह भिन्न हैं। अतः एक बड़े वृत्त (स्तनधारी) के अंदर दो अलग-अलग छोटे वृत्त — विकल्प (C) — सही संबंध दर्शाता है।',
  },
  {
    id: 'cgl26_05o3_q23',
    topic: 'Eligibility / Decision Making',
    questionEn:
      "A hospital is hiring candidates for the role of Clinical Operations Coordinator. The selection will be made based on the following criteria:\n(i) Age must be between 27 and 40 years as on 01/06/2024.\n(ii) Must possess a Master’s degree in Hospital Administration or MBA in Healthcare Management.\n(iii) Must have at least 5 years of hospital administration experience.\n(iv) Must be trained in ERP hospital software.\n(v) Must be certified in Advanced First Aid or Emergency Response Management.\n\nExceptions:\n(1) If the candidate has 3–4 years of hospital experience but has worked in a JCI-accredited hospital, a probationary appointment may be offered.\n(2) If the candidate holds a Postgraduate Diploma (instead of a Master's) but has 6+ years’ experience and all other criteria, the case can be referred to the HR Board.\n\nCandidate Profile: 'Joseph D’Mello, born September 22, 1982, holds a Master’s in Healthcare, 5 years’ experience in a private clinic, not trained in ERP, but holds Emergency certification.'",
    questionHi:
      'एक अस्पताल क्लिनिकल ऑपरेशंस कोऑर्डिनेटर के पद के लिए उम्मीदवारों की भर्ती कर रहा है। चयन निम्नलिखित मानदंडों के आधार पर किया जाएगा:\n(i) आयु 01/06/2024 को 27 से 40 वर्ष के बीच होनी चाहिए।\n(ii) अस्पताल प्रबंधन में मास्टर डिग्री या हेल्थकेयर प्रबंधन में MBA होना आवश्यक है।\n(iii) कम से कम 5 वर्षों का अस्पताल प्रशासन अनुभव होना चाहिए।\n(iv) ERP अस्पताल सॉफ़्टवेयर में प्रशिक्षित होना चाहिए।\n(v) एडवांस्ड फर्स्ट एड या इमरजेंसी रिस्पांस मैनेजमेंट में प्रमाणित होना चाहिए।\n\nअपवाद:\n(1) यदि उम्मीदवार के पास 3–4 वर्षों का अस्पताल अनुभव है लेकिन उसने JCI-मान्यता प्राप्त अस्पताल में काम किया है, तो परिवीक्षा नियुक्ति दी जा सकती है।\n(2) यदि उम्मीदवार के पास पोस्टग्रेजुएट डिप्लोमा (मास्टर डिग्री के बजाय) है, लेकिन उसके पास 6+ वर्षों का अनुभव और अन्य सभी मानदंड हैं, तो मामला HR बोर्ड को भेजा जा सकता है।\n\nउम्मीदवार विवरण: "जोसेफ डी\'मेलो, जन्म 22 सितंबर 1982, हेल्थकेयर में मास्टर डिग्री धारक, 5 वर्षों का निजी क्लिनिक में अनुभव, ERP प्रशिक्षित नहीं, लेकिन इमरजेंसी प्रमाणन धारक।"',
    optionsEn: [
      'Selected',
      'Not Selected',
      'Refer to HR Board',
      'Probation appointment',
    ],
    optionsHi: [
      'चयनित (Selected)',
      'चयन नहीं हुआ (Not Selected)',
      'एचआर बोर्ड को संदर्भित करें',
      'परिवीक्षा नियुक्ति (Probation appointment)',
    ],
    correctIndex: 1,
    explanationEn:
      'Checking mandatory criteria for Joseph D’Mello:\n• Age as on 01/06/2024: Born 22 Sept 1982 ⇒ 41 years 8 months (> 40 years max limit) — FAILS criterion (i).\n• Not trained in ERP hospital software — FAILS criterion (iv), and there is no exception for missing ERP training or exceeding the age limit.\nHence, the candidate is Not Selected.',
    explanationHi:
      'जोसेफ डी\'मेलो की पात्रता की जाँच:\n• 01/06/2024 को आयु: जन्म 22 सितंबर 1982 ⇒ 41 वर्ष 8 माह (अधिकतम 40 वर्ष से अधिक) — शर्त (i) असफल।\n• ERP सॉफ़्टवेयर में प्रशिक्षित नहीं — शर्त (iv) असफल, और इसके लिए कोई अपवाद नहीं है।\nअतः चयन नहीं हुआ (Not Selected)।',
  },
  {
    id: 'cgl26_05o3_q24',
    topic: 'Dice & Cube Folding',
    questionEn:
      'Select the dice that can be formed by folding the given sheet in the form of a cube.',
    questionHi:
      'दिए गए शीट को मोड़कर बनाए गए घन में से कौन-सा पासा बन सकता है, उसका चयन करें।',
    imageUrl: '/assets/tests/cgl-2026-05-oct-s3/q24-dice.svg',
    optionsEn: [
      'Only 2 can be formed',
      'Only 3 can be formed',
      'None can be formed',
      '1 and 4 can be formed',
    ],
    optionsHi: [
      'केवल आकृति 2 का निर्माण संभव है',
      'केवल आकृति 3 का निर्माण संभव है',
      'कोई भी आकृति निर्मित नहीं की जा सकती',
      'आकृति 1 और 4 का निर्माण संभव है',
    ],
    correctIndex: 2,
    explanationEn:
      'From the unfolded net, opposite face pairs are:\n• A ↔ C\n• D ↔ E\n• F ↔ B\nSince opposite faces can never appear adjacent on a folded cube:\n• Cube 1 shows A and C together (invalid).\n• Cube 2 shows D and E together (invalid).\n• Cube 3 shows D and E together (invalid).\n• Cube 4 shows F and B together (invalid).\nHence, none of the dice can be formed.',
    explanationHi:
      'खुले घन से विपरीत फलकों के जोड़े हैं: (A ↔ C), (D ↔ E), और (F ↔ B)।\nविपरीत फलक कभी एक साथ आसन्न नहीं दिख सकते:\n• पासा 1 में A और C साथ हैं (असंभव)\n• पासा 2 में D और E साथ हैं (असंभव)\n• पासा 3 में D और E साथ हैं (असंभव)\n• पासा 4 में F और B साथ हैं (असंभव)\nअतः कोई भी आकृति निर्मित नहीं की जा सकती।',
  },
  {
    id: 'cgl26_05o3_q25',
    topic: 'Letter Series (Repeated Pattern)',
    questionEn:
      'Fill in the blanks (_) using one of the following four options such that the series follows a specific pattern in the given order.\nb a _ a b _ b a _ a b a b a b _',
    questionHi:
      'रिक्त स्थानों (_) को निम्नलिखित चार विकल्पों में से किसी एक का प्रयोग करके भरिए, ताकि श्रेणी दिए गए क्रम में एक विशिष्ट प्रतिरूप का अनुसरण करे।\nb a _ a b _ b a _ a b a b a b _',
    optionsEn: ['abab', 'baba', 'aabb', 'bbaa'],
    optionsHi: ['abab', 'baba', 'aabb', 'bbaa'],
    correctIndex: 1,
    explanationEn:
      'Filling the blanks with "b, a, b, a" gives:\nb a [b] a / b [a] b a / [b] a b a / b a b [a]\n= ba / ba / ba / ba / ba / ba / ba / ba (an exact alternating "ba" pattern). Hence, "baba" is correct.',
    explanationHi:
      'रिक्त स्थानों में "b, a, b, a" भरने पर:\nb a b a | b a b a | b a b a | b a b a\nयह "ba" की सटीक आवृत्ति बनाता है। अतः विकल्प (B) "baba" सही है।',
  },
];

const SECTION_2_GA_O5S3: Question[] = [
  {
    id: 'cgl26_05o3_q26',
    topic: 'Current Affairs & Defence',
    questionEn:
      'Who was the Director General of Air Operations during Operation Sindoor?',
    questionHi:
      'ऑपरेशन सिन्दूर के दौरान वायु संचालन महानिदेशक कौन थे?',
    optionsEn: ['AN Pramod', 'A.K Bharti', 'S.S. Sharda', 'Bipin Rawat'],
    optionsHi: ['ए.एन. प्रमोद', 'ए.के. भारती', 'एस.एस. शारदा', 'बिपिन रावत'],
    correctIndex: 1,
    explanationEn:
      'Air Marshal A. K. Bharti served as the Director General of Air Operations (DGAO) of the Indian Air Force during Operation Sindoor (May 2025) and briefed the nation alongside DGMO Lt. Gen. Rajiv Ghai and DGNO Vice Admiral A. N. Pramod.',
    explanationHi:
      'एयर मार्शल ए.के. भारती ऑपरेशन सिन्दूर के दौरान भारतीय वायु सेना के वायु संचालन महानिदेशक (DGAO) थे।',
  },
  {
    id: 'cgl26_05o3_q27',
    topic: 'Indian Geography (Agriculture)',
    questionEn:
      'If a region has a Net Sown Area (NSA) of 80,000 hectares and a Gross Cropped Area (GCA) of 120,000 hectares, what is the cropping intensity?',
    questionHi:
      'यदि किसी क्षेत्र का शुद्ध बोया गया क्षेत्र (NSA) 80,000 हेक्टेयर और सकल फसल क्षेत्र (GCA) 120,000 हेक्टेयर है, तो फसल गहनता क्या है?',
    optionsEn: ['125%', '150%', '160%', '180%'],
    optionsHi: ['125%', '150%', '160%', '180%'],
    correctIndex: 1,
    explanationEn:
      'Cropping Intensity = (Gross Cropped Area / Net Sown Area) × 100\n= (120,000 / 80,000) × 100 = 1.5 × 100 = 150%.',
    explanationHi:
      'फसल गहनता = (सकल फसल क्षेत्र / शुद्ध बोया गया क्षेत्र) × 100\n= (120,000 / 80,000) × 100 = 150%।',
  },
  {
    id: 'cgl26_05o3_q28',
    topic: 'Indian Polity (DPSP)',
    questionEn:
      'Consider the below statements:\n1. Promotion of international peace is a part of DPSP.\n2. The DPSPs are enforceable by courts.\n3. Protection of monuments is a fundamental right.\nWhich is/are true?',
    questionHi:
      'नीचे दिए गए कथनों पर विचार करें:\n1. अंतर्राष्ट्रीय शांति को बढ़ावा देना DPSP का एक हिस्सा है।\n2. DPSP को अदालतों द्वारा लागू किया जा सकता है।\n3. स्मारकों का संरक्षण एक मौलिक अधिकार है।\nकौन सा/से सत्य है?',
    optionsEn: ['Only 1', '1 and 2 only', '2 and 3 only', '1, 2 and 3 all'],
    optionsHi: ['केवल 1', 'केवल 1 और 2', 'केवल 2 और 3', '1, 2 और 3 सभी'],
    correctIndex: 0,
    explanationEn:
      '• Statement 1 is TRUE: Article 51 (Part IV — DPSP) directs the State to promote international peace and security.\n• Statement 2 is FALSE: Under Article 37, DPSPs are non-justiciable (not enforceable by courts).\n• Statement 3 is FALSE: Protection of monuments of national importance is a DPSP under Article 49, not a Fundamental Right.',
    explanationHi:
      '• कथन 1 सत्य है: अनुच्छेद 51 (DPSP) अंतर्राष्ट्रीय शांति व सुरक्षा को बढ़ावा देने से संबंधित है।\n• कथन 2 असत्य है: अनुच्छेद 37 के अनुसार DPSP न्यायालयों द्वारा प्रवर्तनीय नहीं हैं।\n• कथन 3 असत्य है: स्मारकों का संरक्षण अनुच्छेद 49 (DPSP) में है, मौलिक अधिकार नहीं।',
  },
  {
    id: 'cgl26_05o3_q29',
    topic: 'Sports',
    questionEn: 'Which Indian city hosted the 2010 Commonwealth Games?',
    questionHi: '2010 कॉमनवेल्थ गेम्स की मेजबानी किस भारतीय शहर ने की?',
    optionsEn: ['Mumbai', 'New Delhi', 'Hyderabad', 'Chennai'],
    optionsHi: ['मुंबई', 'नई दिल्ली', 'हैदराबाद', 'चेन्नई'],
    correctIndex: 1,
    explanationEn:
      'New Delhi hosted the 19th Commonwealth Games from 3 to 14 October 2010, marking the first time India hosted the event.',
    explanationHi:
      'नई दिल्ली ने 3 से 14 अक्टूबर 2010 तक 19वें राष्ट्रमंडल खेलों (Commonwealth Games) की मेजबानी की थी।',
  },
  {
    id: 'cgl26_05o3_q30',
    topic: 'Famous Personalities',
    questionEn:
      'Find incorrect pairs of famous Indian persons with their field:\n1. Kailash Satyarthi: Film Director\n2. Lala Lajpat Rai: Freedom Fighter\n3. Murlikant Petkar: Book Writer\n4. Lata Mangeshkar: Playback Singer',
    questionHi:
      'भारतीय प्रसिद्ध व्यक्तियों की उनके क्षेत्र के साथ गलत जोड़ी खोजें:\n1. कैलाश सत्यार्थी : फिल्म निर्देशक\n2. लाला लाजपत राय : स्वतंत्रता सेनानी\n3. मुरलीकांत पेटकर : पुस्तक लेखक\n4. लता मंगेशकर : पार्श्व गायिका',
    optionsEn: ['1 and 3', '1 only', '3 only', '2 only'],
    optionsHi: ['1 और 3', 'केवल 1', 'केवल 3', 'केवल 2'],
    correctIndex: 0,
    explanationEn:
      '• Pair 1 is INCORRECT: Kailash Satyarthi is a Nobel Peace Prize-winning child rights activist (not a film director).\n• Pair 3 is INCORRECT: Murlikant Petkar is India’s first Paralympic gold medalist (freestyle swimmer, 1972 Heidelberg Paralympics), not a book writer.\n• Pairs 2 and 4 are correct.',
    explanationHi:
      '• जोड़ी 1 गलत है: कैलाश सत्यार्थी नोबेल शांति पुरस्कार विजेता बाल अधिकार कार्यकर्ता हैं (फिल्म निर्देशक नहीं)।\n• जोड़ी 3 गलत है: मुरलीकांत पेटकर भारत के पहले पैरालंपिक स्वर्ण पदक विजेता तैराक हैं (पुस्तक लेखक नहीं)।\n• जोड़ी 2 और 4 सही हैं।',
  },
  {
    id: 'cgl26_05o3_q31',
    topic: 'Indian Polity (Schedules)',
    questionEn: 'Match the following Schedules with their subject matter:',
    questionHi: 'निम्नलिखित अनुसूचियों का उनके विषय-वस्तु से मिलान कीजिए:',
    matrix: [
      ['Column A (Schedule)', 'Column B (Subject Matter)'],
      ['A. Seventh Schedule', '1. Languages recognized by the Constitution'],
      ['B. Eighth Schedule', '2. Distribution of powers between Union and States'],
      ['C. Eleventh Schedule', '3. Municipalities: Functional items'],
      ['D. Twelfth Schedule', '4. Panchayats: Functional items'],
    ],
    optionsEn: [
      'A−1, B−2, C−3, D−4',
      'A−2, B−1, C−4, D−3',
      'A−4, B−3, C−1, D−2',
      'A−3, B−4, C−2, D−1',
    ],
    optionsHi: [
      'A−1, B−2, C−3, D−4',
      'A−2, B−1, C−4, D−3',
      'A−4, B−3, C−1, D−2',
      'A−3, B−4, C−2, D−1',
    ],
    correctIndex: 1,
    explanationEn:
      '• Seventh Schedule (A) → Distribution of powers (Union, State, Concurrent Lists) (2)\n• Eighth Schedule (B) → 22 Official Languages recognized by the Constitution (1)\n• Eleventh Schedule (C) → 29 functional items of Panchayats (73rd Amendment) (4)\n• Twelfth Schedule (D) → 18 functional items of Municipalities (74th Amendment) (3)\nHence, A−2, B−1, C−4, D−3.',
    explanationHi:
      '• सातवीं अनुसूची (A) → केंद्र और राज्यों के बीच शक्तियों का विभाजन (2)\n• आठवीं अनुसूची (B) → संविधान द्वारा मान्यता प्राप्त भाषाएँ (1)\n• ग्यारहवीं अनुसूची (C) → पंचायतों के कार्य-विषय (4)\n• बारहवीं अनुसूची (D) → नगरपालिकाओं के कार्य-विषय (3)\nअतः सही मिलान A−2, B−1, C−4, D−3 है।',
  },
  {
    id: 'cgl26_05o3_q32',
    topic: 'Art & Culture (Folk Music)',
    questionEn:
      'Maand, a traditional raga-turned-folk form associated with royal courts, belongs to which Indian state?',
    questionHi:
      'मांड, शाही दरबारों से जुड़ा एक पारंपरिक राग-रूप, किस भारतीय राज्य से संबंधित है?',
    optionsEn: ['Rajasthan', 'Uttar Pradesh', 'Gujarat', 'Madhya Pradesh'],
    optionsHi: ['राजस्थान', 'उत्तर प्रदेश', 'गुजरात', 'मध्य प्रदेश'],
    correctIndex: 0,
    explanationEn:
      'Maand (Mand) is a celebrated classical-folk singing style from Rajasthan, historically performed in Rajput royal courts (famous composition: "Kesariya Balam"; legendary exponent: Allah Jilai Bai).',
    explanationHi:
      'मांड (Maand) राजस्थान की प्रसिद्ध पारंपरिक गायन शैली है, जिसे राजपूत शाही दरबारों में गाया जाता था (प्रसिद्ध गीत: "केसरिया बालम", प्रसिद्ध गायिका: अल्लाह जिलाई बाई)।',
  },
  {
    id: 'cgl26_05o3_q33',
    topic: 'Art & Culture (Tribal Dance)',
    questionEn:
      'Which of the following statements about the tribal dance form ‘Dhimsa’ is/are correct?\n1. Dhimsa originated in Koraput district of Odisha.\n2. It reflects daily tribal activities such as farming and collecting leaves.\n3. It is now primarily performed in urban centres of Tamil Nadu.',
    questionHi:
      'आदिवासी नृत्य शैली ‘धीमसा’ के बारे में निम्नलिखित में से कौन सा कथन सही है/हैं?\n1. धीमसा की उत्पत्ति ओडिशा के कोरापुट जिले में हुई थी।\n2. यह खेती और पत्ते इकट्ठा करने जैसी दैनिक आदिवासी गतिविधियों को दर्शाता है।\n3. यह अब मुख्य रूप से तमिलनाडु के शहरी केंद्रों में किया जाता है।',
    optionsEn: ['1 and 2 only', '1, 2 and 3', '2 and 3 only', '1 and 3 only'],
    optionsHi: ['केवल 1 और 2', '1, 2 और 3', 'केवल 2 और 3', 'केवल 1 और 3'],
    correctIndex: 0,
    explanationEn:
      'Dhimsa is a traditional tribal folk dance originating in Koraput (Odisha) and widely performed in the Araku Valley of Andhra Pradesh (not urban Tamil Nadu). Its rhythmic movements depict tribal daily life such as farming, hunting, and gathering forest produce. Thus, statements 1 and 2 only are correct.',
    explanationHi:
      'धीमसा नृत्य ओडिशा के कोरापुट जिले से उत्पन्न हुआ और आंध्र प्रदेश की अराकू घाटी में भी लोकप्रिय है (तमिलनाडु के शहरों में नहीं)। यह खेती व पत्तियाँ एकत्र करने जैसी दैनिक गतिविधियों को दर्शाता है। अतः केवल 1 और 2 सही हैं।',
  },
  {
    id: 'cgl26_05o3_q34',
    topic: 'Art & Culture (Musical Instruments)',
    questionEn:
      'Which of the following pairs is correctly matched regarding the instrument and its region of origin?\n1. Ravanahatha - Rajasthan\n2. Pung - Manipur\n3. Taus - Punjab\n4. Chenda - Assam',
    questionHi:
      'वाद्य यंत्र और उसके मूल क्षेत्र के संबंध में निम्नलिखित में से कौन सा युग्म सही ढंग से मेल खाता है?\n1. रावणहत्था - राजस्थान\n2. पुंग - मणिपुर\n3. तौस - पंजाब\n4. चेंडा - असम',
    optionsEn: [
      '1 and 3 only',
      '2 and 4 only',
      '1, 2 and 3 only',
      '1, 2, 3 and 4',
    ],
    optionsHi: [
      'केवल 1 और 3',
      'केवल 2 और 4',
      'केवल 1, 2 और 3',
      '1, 2, 3 और 4',
    ],
    correctIndex: 2,
    explanationEn:
      '• Ravanahatha — bowed string instrument of Rajasthan (Correct).\n• Pung — traditional percussion drum of Manipur, used in Pung Cholom (Correct).\n• Taus — peacock-shaped bowed string instrument associated with Punjab / Sikh music (Correct).\n• Chenda — cylindrical percussion drum native to Kerala (Kathakali, Theyyam), NOT Assam (Incorrect).\nHence, 1, 2 and 3 only are correct.',
    explanationHi:
      '• रावणहत्था (राजस्थान), पुंग (मणिपुर) और तौस (पंजाब) सही सुमेलित हैं।\n• चेंडा (Chenda) केरल का प्रसिद्ध वाद्य यंत्र है (असम का नहीं)।\nअतः केवल 1, 2 और 3 सही हैं।',
  },
  {
    id: 'cgl26_05o3_q35',
    topic: 'International Organizations & Reports',
    questionEn: 'The Global Innovation Index (GII) is published by:',
    questionHi: 'वैश्विक नवाचार सूचकांक (GII) किसके द्वारा प्रकाशित किया जाता है?',
    optionsEn: [
      'United Nations Development Programme (UNDP)',
      'World Trade Organization (WTO)',
      'World Intellectual Property Organization (WIPO)',
      'International Monetary Fund (IMF)',
    ],
    optionsHi: [
      'संयुक्त राष्ट्र विकास कार्यक्रम (UNDP)',
      'विश्व व्यापार संगठन (WTO)',
      'विश्व बौद्धिक संपदा संगठन (WIPO)',
      'अंतर्राष्ट्रीय मुद्रा कोष (IMF)',
    ],
    correctIndex: 2,
    explanationEn:
      'The Global Innovation Index (GII) is published annually by the World Intellectual Property Organization (WIPO), headquartered in Geneva, Switzerland.',
    explanationHi:
      'वैश्विक नवाचार सूचकांक (GII) प्रतिवर्ष विश्व बौद्धिक संपदा संगठन (WIPO, मुख्यालय: जिनेवा) द्वारा प्रकाशित किया जाता है।',
  },
  {
    id: 'cgl26_05o3_q36',
    topic: 'Science & Technology (ISRO)',
    questionEn:
      'Which of the following is a major advantage of India’s PSLV (Polar Satellite Launch Vehicle)?',
    questionHi:
      'निम्नलिखित में से कौन सा भारत के पीएसएलवी (ध्रुवीय उपग्रह प्रक्षेपण यान) का प्रमुख लाभ है?',
    optionsEn: [
      'Designed exclusively for crewed space missions',
      'Specialized in launching satellites only into geostationary orbit',
      'Able to deploy several satellites into distinct orbits within one launch',
      'Requires nuclear propulsion for upper stage separation',
    ],
    optionsHi: [
      'विशेष रूप से मानवयुक्त अंतरिक्ष मिशन के लिए डिज़ाइन किया गया',
      'केवल भूस्थिर कक्षा में उपग्रहों को प्रक्षेपित करने में विशेषज्ञता',
      'एक प्रक्षेपण के दौरान कई उपग्रहों को अलग-अलग कक्षाओं में स्थापित करने में सक्षम',
      'ऊपरी चरण पृथक्करण के लिए परमाणु प्रणोदन की आवश्यकता होती है',
    ],
    correctIndex: 2,
    explanationEn:
      'ISRO’s PSLV ("Workhorse of ISRO") features a restartable 4th stage (PS4), enabling multi-orbit deployment of multiple satellites in a single launch (famously launching 104 satellites in PSLV-C37).',
    explanationHi:
      'इसरो का PSLV अपने पुनः प्रारंभ होने योग्य चौथे चरण (PS4) के कारण एक ही प्रक्षेपण में कई उपग्रहों को अलग-अलग कक्षाओं में स्थापित करने की क्षमता के लिए प्रसिद्ध है।',
  },
  {
    id: 'cgl26_05o3_q37',
    topic: 'Indian Geography (Rivers)',
    questionEn: 'Match the following rivers with their originating states:',
    questionHi: 'निम्नलिखित नदियों का उनके उद्गम राज्यों से मिलान करें:',
    matrix: [
      ['List I (River)', 'List II (State)'],
      ['A. Mahanadi', '1. Karnataka'],
      ['B. Kaveri', '2. Madhya Pradesh'],
      ['C. Krishna', '3. Chhattisgarh'],
      ['D. Narmada', '4. Maharashtra'],
    ],
    optionsEn: [
      'A–3, B–1, C–4, D–2',
      'A–2, B–3, C–1, D–4',
      'A–3, B–1, C–2, D–4',
      'A–4, B–2, C–3, D–1',
    ],
    optionsHi: [
      'A–3, B–1, C–4, D–2',
      'A–2, B–3, C–1, D–4',
      'A–3, B–1, C–2, D–4',
      'A–4, B–2, C–3, D–1',
    ],
    correctIndex: 0,
    explanationEn:
      '• Mahanadi (A) → Sihawa hills, Dhamtari, Chhattisgarh (3)\n• Kaveri (B) → Talakaveri, Brahmagiri hills, Karnataka (1)\n• Krishna (C) → Mahabaleshwar, Maharashtra (4)\n• Narmada (D) → Amarkantak plateau, Madhya Pradesh (2)\nHence, A–3, B–1, C–4, D–2.',
    explanationHi:
      '• महानदी (A) → सिहावा पहाड़ी, छत्तीसगढ़ (3)\n• कावेरी (B) → तालकावेरी, ब्रह्मगिरी पहाड़ी, कर्नाटक (1)\n• कृष्णा (C) → महाबलेश्वर, महाराष्ट्र (4)\n• नर्मदा (D) → अमरकंटक, मध्य प्रदेश (2)\nअतः सही मिलान A–3, B–1, C–4, D–2 है।',
  },
  {
    id: 'cgl26_05o3_q38',
    topic: 'Indian Geography (Census & Demographics)',
    questionEn:
      'Consider the following statements regarding population growth and demographic trends in India as per Census data:\n1. Kerala recorded the lowest decadal population growth rate (9.4%) during 1991–2001 among all Indian states.\n2. During 2001–2011, all six most populous Indian states showed a decadal growth rate higher than the previous decade.\n3. The adolescent population (aged 10–19 years) in India constituted approximately 20.9% in 2011, with a higher share of males than females.\n4. Puducherry registered a lower decadal population growth in 2001–2011 compared to 1991–2001.\nWhich of the above statements is/are correct?',
    questionHi:
      'जनगणना के आंकड़ों के अनुसार भारत में जनसंख्या वृद्धि और जनसांख्यिकीय रुझानों के बारे में निम्नलिखित कथनों पर विचार करें:\n1. केरल ने 1991-2001 के दौरान सभी भारतीय राज्यों में सबसे कम दशकीय जनसंख्या वृद्धि दर (9.4%) दर्ज की।\n2. 2001-2011 के दौरान, सभी छह सबसे अधिक आबादी वाले भारतीय राज्यों ने पिछले दशक की तुलना में अधिक दशकीय वृद्धि दर दिखाई।\n3. भारत में किशोर आबादी (10-19 वर्ष की आयु) 2011 में लगभग 20.9% थी, जिसमें महिलाओं की तुलना में पुरुषों की हिस्सेदारी अधिक थी।\n4. पुडुचेरी ने 1991-2001 की तुलना में 2001-2011 में कम दशकीय जनसंख्या वृद्धि दर्ज की।\nउपर्युक्त कथनों में से कौन सा सही है/हैं?',
    optionsEn: [
      '1 and 3 only',
      '2 and 4 only',
      '1, 3 and 4 only',
      '1 and 2 only',
    ],
    optionsHi: [
      'केवल 1 और 3',
      'केवल 2 और 4',
      'केवल 1, 3 और 4',
      'केवल 1 और 2',
    ],
    correctIndex: 0,
    explanationEn:
      '• Statement 1 is TRUE (NCERT Class 12 India People & Economy): Kerala had the lowest decadal growth rate (9.4%) in 1991–2001.\n• Statement 2 is FALSE: All six most populous states (UP, Maharashtra, Bihar, West Bengal, AP, MP) recorded LOWER decadal growth in 2001–2011 than in 1991–2001.\n• Statement 3 is TRUE: Adolescents (10–19 yrs) formed ~20.9% of India’s 2011 population (male share 52.7%, female share 47.3%).\n• Statement 4 is FALSE: Puducherry’s decadal growth ROSE from ~20.6% (1991–2001) to ~28.1% (2001–2011).\nHence, 1 and 3 only are correct.',
    explanationHi:
      '• कथन 1 सत्य है: 1991–2001 में केरल की दशकीय वृद्धि दर (9.4%) सबसे कम थी।\n• कथन 2 असत्य है: सभी छह सर्वाधिक जनसंख्या वाले राज्यों में 2001–2011 में वृद्धि दर घटी थी।\n• कथन 3 सत्य है: 2011 में किशोर आबादी लगभग 20.9% थी (पुरुष 52.7%, महिलाएँ 47.3%)।\n• कथन 4 असत्य है: पुडुचेरी की वृद्धि दर 2001–2011 में बढ़ी थी।\nअतः केवल 1 और 3 सही हैं।',
  },
  {
    id: 'cgl26_05o3_q39',
    topic: 'Art & Architecture',
    questionEn:
      'Which of the following styles is seen in Bombay’s Chhatrapati Shivaji Maharaj Terminus (CSMT) Railway Station?',
    questionHi:
      'बम्बई के छत्रपति शिवाजी महाराज टर्मिनस (सीएसएमटी) रेलवे स्टेशन में निम्नलिखित में से कौन सी शैली दिखाई देती है?',
    optionsEn: ['Indo-Islamic', 'Mughal', 'Gothic Revival', 'Buddhist'],
    optionsHi: ['इंडो-इस्लामिक', 'मुगल', 'गोथिक पुनरुद्धार (Gothic Revival)', 'बौद्ध'],
    correctIndex: 2,
    explanationEn:
      'Designed by British architect Frederick William Stevens and completed in 1887, Chhatrapati Shivaji Maharaj Terminus (formerly Victoria Terminus, a UNESCO World Heritage Site) is an iconic masterpiece of Victorian Gothic Revival architecture blended with traditional Indian motifs.',
    explanationHi:
      'फ्रेडरिक विलियम स्टीवंस द्वारा डिज़ाइन किया गया छत्रपति शिवाजी महाराज टर्मिनस (यूनेस्को विश्व धरोहर स्थल) विक्टोरियन गोथिक पुनरुद्धार (Gothic Revival) शैली का उत्कृष्ट उदाहरण है।',
  },
  {
    id: 'cgl26_05o3_q40',
    topic: 'Current Affairs (Sports)',
    questionEn: 'National Team Chess Championship 2024–25 was held in ________.',
    questionHi: 'राष्ट्रीय टीम शतरंज चैंपियनशिप 2024-25 ________ में आयोजित की गई थी।',
    optionsEn: ['Pune', 'New Delhi', 'Chandigarh', 'Ahmedabad'],
    optionsHi: ['पुणे', 'नई दिल्ली', 'चंडीगढ़', 'अहमदाबाद'],
    correctIndex: 3,
    explanationEn:
      'The 43rd National Team Chess Championship (2024–25) was hosted in Ahmedabad, Gujarat.',
    explanationHi:
      'राष्ट्रीय टीम शतरंज चैंपियनशिप 2024-25 का आयोजन अहमदाबाद (गुजरात) में किया गया था।',
  },
  {
    id: 'cgl26_05o3_q41',
    topic: 'Modern History & Architecture',
    questionEn:
      'Read the two short statements and choose the correct option.\n1. Victoria Memorial was conceived by Lord Curzon as a tribute to Queen Victoria.\n2. The monument is built of white Makrana marble in the Indo-Saracenic style.',
    questionHi:
      'दो संक्षिप्त कथनों को पढ़ें और सही विकल्प चुनें:\n1. विक्टोरिया मेमोरियल की कल्पना लॉर्ड कर्जन ने महारानी विक्टोरिया को श्रद्धांजलि के रूप में की थी।\n2. यह स्मारक इंडो-सरसेनिक शैली में सफेद मकराना संगमरमर से बनाया गया है।',
    optionsEn: ['1 only', '2 only', 'Both 1 and 2', 'Neither 1 nor 2'],
    optionsHi: ['केवल 1', 'केवल 2', '1 और 2 दोनों', 'ना तो 1 सही है, ना ही 2'],
    correctIndex: 2,
    explanationEn:
      'Both statements are correct. After Queen Victoria’s death in 1901, Viceroy Lord Curzon proposed the Victoria Memorial in Kolkata; designed by Sir William Emerson, it was built between 1906 and 1921 using white Makrana marble from Rajasthan in the Indo-Saracenic revivalist style.',
    explanationHi:
      'दोनों कथन सही हैं। लॉर्ड कर्जन ने 1901 में महारानी विक्टोरिया की स्मृति में कोलकाता में विक्टोरिया मेमोरियल की परिकल्पना की थी, जिसे विलियम एमर्सन ने इंडो-सरसेनिक शैली में राजस्थान के सफेद मकराना संगमरमर से निर्मित कराया।',
  },
  {
    id: 'cgl26_05o3_q42',
    topic: 'Indian Geography (Rivers)',
    questionEn:
      'Which of the following is considered the largest river system among the Deccan rivers in India?',
    questionHi:
      'निम्नलिखित में से किसे भारत में दक्कन की नदियों में सबसे बड़ी नदी प्रणाली माना जाता है?',
    optionsEn: ['Cauvery', 'Krishna', 'Godavari', 'Mahanadi'],
    optionsHi: ['कावेरी', 'कृष्णा', 'गोदावरी', 'महानदी'],
    correctIndex: 2,
    explanationEn:
      'The Godavari (length ~1,465 km), originating from Trimbakeshwar in Nashik (Maharashtra), is the largest peninsular/Deccan river system in India and is famously called "Dakshin Ganga" (Ganga of the South).',
    explanationHi:
      'गोदावरी (~1,465 किमी) प्रायद्वीपीय/दक्कन भारत की सबसे बड़ी नदी प्रणाली है। इसे "दक्षिण गंगा" के नाम से भी जाना जाता है।',
  },
  {
    id: 'cgl26_05o3_q43',
    topic: 'Polity & New Criminal Laws (BNSS)',
    questionEn: 'According to BNSS, what does the term "bail" mean?',
    questionHi: 'बीएनएसएस (BNSS) के अनुसार, "जमानत" शब्द का क्या अर्थ है?',
    optionsEn: [
      'Arrest under judicial supervision',
      'Police custody under specific terms',
      'Release from custody on conditions imposed by Court or officer',
      'Removal of charges before trial',
    ],
    optionsHi: [
      'न्यायिक निगरानी में गिरफ्तारी',
      'विशिष्ट शर्तों के तहत पुलिस हिरासत',
      'न्यायालय या अधिकारी द्वारा लगाई गई शर्तों पर हिरासत से रिहाई',
      'मुकदमे से पहले आरोपों को हटाना',
    ],
    correctIndex: 2,
    explanationEn:
      'Under Section 2(1)(b) of the Bharatiya Nagarik Suraksha Sanhita (BNSS), 2023, "bail" is formally defined as the release of a person accused or suspected of committing an offence from the custody of law upon certain conditions imposed by an officer or Court, on execution of a bond or bail bond.',
    explanationHi:
      'भारतीय नागरिक सुरक्षा संहिता (BNSS), 2023 की धारा 2(1)(b) के अनुसार, "जमानत" का अर्थ न्यायालय या अधिकारी द्वारा लगाई गई निश्चित शर्तों व बंधपत्र पर किसी व्यक्ति की कानूनी हिरासत से रिहाई है।',
  },
  {
    id: 'cgl26_05o3_q44',
    topic: 'Geography & Astronomy',
    questionEn: 'Which of the following does not belong to the solar system?',
    questionHi: 'निम्नलिखित में से कौन सौरमंडल से संबंधित नहीं है?',
    optionsEn: ['Planet', 'Galaxy', 'Meteor', 'Comet'],
    optionsHi: ['ग्रह (Planet)', 'आकाशगंगा (Galaxy)', 'उल्का (Meteor)', 'धूमकेतु (Comet)'],
    correctIndex: 1,
    explanationEn:
      'Planets, meteors, and comets are components of our Solar System. A Galaxy (such as the Milky Way) is a vast system of billions of stars and planetary systems—the Solar System belongs to a galaxy, not vice versa.',
    explanationHi:
      'ग्रह, उल्का और धूमकेतु सौरमंडल के भाग हैं, जबकि आकाशगंगा (Galaxy) अरबों तारों का विशाल समूह है जिसके भीतर सौरमंडल स्वयं स्थित है।',
  },
  {
    id: 'cgl26_05o3_q45',
    topic: 'Physics (Mechanics)',
    questionEn: 'Which of the following is a scalar quantity?',
    questionHi: 'निम्नलिखित में से कौन-सी अदिश राशि है?',
    optionsEn: ['Displacement', 'Velocity', 'Acceleration', 'Speed'],
    optionsHi: ['विस्थापन (Displacement)', 'वेग (Velocity)', 'त्वरण (Acceleration)', 'रफ़्तार / चाल (Speed)'],
    correctIndex: 3,
    explanationEn:
      'Speed has only magnitude and no direction, making it a scalar quantity. Displacement, velocity, and acceleration have both magnitude and direction, so they are vector quantities.',
    explanationHi:
      'चाल (Speed) में केवल परिमाण होता है, दिशा नहीं—अतः यह अदिश राशि (scalar) है। विस्थापन, वेग और त्वरण सदिश राशियाँ (vector) हैं।',
  },
  {
    id: 'cgl26_05o3_q46',
    topic: 'International Organizations',
    questionEn: 'What does BIMSTEC stand for?',
    questionHi: 'बिम्सटेक (BIMSTEC) का क्या अर्थ है?',
    optionsEn: [
      'Bay of Islands Multi-Sectoral Technical and Economic Cooperation',
      'Bay of Bengal Initiative for Multi-Sectoral Technical and Economic Cooperation',
      'Bangladesh, India, Myanmar, Sri Lanka, Thailand, Egypt, and China',
      'Bay of Bengal International Maritime Security and Trade Council',
    ],
    optionsHi: [
      'द्वीपों की खाड़ी बहु-क्षेत्रीय तकनीकी और आर्थिक सहयोग',
      'बहु-क्षेत्रीय तकनीकी और आर्थिक सहयोग के लिए बंगाल की खाड़ी पहल (BIMSTEC)',
      'बांग्लादेश, भारत, म्यांमार, श्रीलंका, थाईलैंड, मिस्र और चीन',
      'बंगाल की खाड़ी अंतर्राष्ट्रीय समुद्री सुरक्षा और व्यापार परिषद',
    ],
    correctIndex: 1,
    explanationEn:
      'BIMSTEC stands for "Bay of Bengal Initiative for Multi-Sectoral Technical and Economic Cooperation". Founded in 1997 (Bangkok Declaration), its 7 members are Bangladesh, Bhutan, India, Myanmar, Nepal, Sri Lanka, and Thailand, with its Secretariat in Dhaka.',
    explanationHi:
      'BIMSTEC का पूर्ण रूप "Bay of Bengal Initiative for Multi-Sectoral Technical and Economic Cooperation" है। इसके 7 सदस्य देश बांग्लादेश, भूटान, भारत, म्यांमार, नेपाल, श्रीलंका और थाईलैंड हैं।',
  },
  {
    id: 'cgl26_05o3_q47',
    topic: 'Medieval History (Mughal Architecture)',
    questionEn:
      'Which of the following monuments was NOT built by Emperor Shah Jahan?',
    questionHi:
      'निम्नलिखित में से कौन सा स्मारक सम्राट शाहजहाँ द्वारा नहीं बनाया गया था?',
    optionsEn: [
      'Taj Mahal',
      'Red Fort, Delhi',
      'Jama Masjid, Delhi',
      "Humayun's Tomb",
    ],
    optionsHi: [
      'ताज महल',
      'लाल किला, दिल्ली',
      'जामा मस्जिद, दिल्ली',
      'हुमायूँ का मकबरा',
    ],
    correctIndex: 3,
    explanationEn:
      "Humayun's Tomb in Delhi was commissioned by Humayun’s chief consort Empress Bega Begum (Haji Begum) in 1569–70 during Akbar’s reign and designed by Mirak Mirza Ghiyas. Taj Mahal, Red Fort (Delhi), and Jama Masjid (Delhi) were all built by Shah Jahan.",
    explanationHi:
      'दिल्ली स्थित हुमायूँ का मकबरा 1569-70 में बेगा बेगम (हाजी बेगम) द्वारा बनवाया गया था। ताज महल, लाल किला (दिल्ली) और जामा मस्जिद (दिल्ली) शाहजहाँ द्वारा बनवाए गए थे।',
  },
  {
    id: 'cgl26_05o3_q48',
    topic: 'Indian Polity (President)',
    questionEn:
      'The procedure for impeachment of the President of India is laid down under Article _________ of the Indian Constitution.',
    questionHi:
      'भारत के राष्ट्रपति के महाभियोग की प्रक्रिया भारतीय संविधान के अनुच्छेद _________ के तहत निर्धारित की गई है।',
    optionsEn: ['59', '60', '61', '62'],
    optionsHi: ['59', '60', '61', '62'],
    correctIndex: 2,
    explanationEn:
      'Article 61 specifies the procedure for the impeachment of the President of India for violation of the Constitution. (Article 59: Conditions of President’s office; Article 60: Oath or affirmation; Article 62: Time of holding election to fill vacancy.)',
    explanationHi:
      'संविधान के अनुच्छेद 61 में भारत के राष्ट्रपति पर महाभियोग की प्रक्रिया वर्णित है। (अनुच्छेद 59: पद की शर्तें, अनुच्छेद 60: शपथ, अनुच्छेद 62: रिक्ति भरने हेतु चुनाव की समय-सीमा।)',
  },
  {
    id: 'cgl26_05o3_q49',
    topic: 'Indian Economy (Government Schemes)',
    questionEn:
      'Under PMMY, a business planning to start a tailoring shop should approach which financial body for credit?',
    questionHi:
      'पीएमएमवाई (PMMY) के अंतर्गत सिलाई की दुकान शुरू करने की योजना रखने वाला कोई व्यवसाय किस वित्तीय संस्था से ऋण के लिए संपर्क कर सकता है?',
    optionsEn: ['RBI', 'MUDRA Bank', 'NABARD', 'SEBI'],
    optionsHi: ['भारतीय रिज़र्व बैंक (RBI)', 'मुद्रा बैंक (MUDRA Bank)', 'नाबार्ड (NABARD)', 'सेबी (SEBI)'],
    correctIndex: 1,
    explanationEn:
      'Under the Pradhan Mantri Mudra Yojana (PMMY, launched April 2015), non-corporate, non-farm micro/small enterprises (such as a tailoring shop) obtain collateral-free credit through MUDRA (Micro Units Development and Refinance Agency) Bank and its partner lending institutions under Shishu, Kishore, Tarun, and Tarun Plus categories.',
    explanationHi:
      'प्रधानमंत्री मुद्रा योजना (PMMY) के अंतर्गत सूक्ष्म एवं लघु गैर-कृषि व्यवसायों (जैसे सिलाई की दुकान) को मुद्रा बैंक (MUDRA Bank) एवं उससे संबद्ध ऋण संस्थानों के माध्यम से ऋण उपलब्ध कराया जाता है।',
  },
  {
    id: 'cgl26_05o3_q50',
    topic: 'Current Affairs & Polity',
    questionEn:
      'Who has been appointed as the Chairman of the 16th Finance Commission of India (2023–2028)?',
    questionHi:
      'भारत के 16वें वित्त आयोग (2023-2028) के अध्यक्ष के रूप में किसे नियुक्त किया गया है?',
    optionsEn: [
      'N. K. Singh',
      'Suman Bery',
      'Arvind Panagariya',
      'Raghuram Rajan',
    ],
    optionsHi: [
      'एन. के. सिंह',
      'सुमन बेरी',
      'अरविंद पनगड़िया',
      'रघुराम राजन',
    ],
    correctIndex: 2,
    explanationEn:
      'Dr. Arvind Panagariya (former Vice-Chairman of NITI Aayog) was appointed Chairman of the 16th Finance Commission of India, constituted under Article 280 of the Constitution in December 2023. (N. K. Singh chaired the 15th Finance Commission.)',
    explanationHi:
      'डॉ. अरविंद पनगड़िया (नीति आयोग के पूर्व उपाध्यक्ष) को दिसंबर 2023 में गठित भारत के 16वें वित्त आयोग का अध्यक्ष नियुक्त किया गया है। (15वें वित्त आयोग के अध्यक्ष एन.के. सिंह थे।)',
  },
];

const SECTION_3_QUANT_O5S3: Question[] = [
  {
    id: 'cgl26_05o3_q51',
    topic: 'Number System (Recurring Decimals)',
    questionEn:
      'A number x = 0.363636… + 5/12 is expressed as a simplified fraction p/q. What is the value of p + q?',
    questionHi:
      'एक संख्या x = 0.363636… + 5/12 को सरलीकृत भिन्न p/q के रूप में व्यक्त किया जाता है। p + q का मान क्या है?',
    optionsEn: ['230', '235', '240', '220'],
    optionsHi: ['230', '235', '240', '220'],
    correctIndex: 1,
    explanationEn:
      '0.363636… = 36/99 = 4/11.\nTherefore, x = 4/11 + 5/12 = (48 + 55) / 132 = 103/132.\nSince gcd(103, 132) = 1, p = 103 and q = 132.\nHence, p + q = 103 + 132 = 235.',
    explanationHi:
      '0.363636… = 36/99 = 4/11।\nअतः x = 4/11 + 5/12 = (48 + 55) / 132 = 103/132।\nचूँकि 103 और 132 सह-अभाज्य हैं, p = 103 और q = 132।\nइसलिए p + q = 103 + 132 = 235।',
  },
  {
    id: 'cgl26_05o3_q52',
    topic: 'Algebra',
    questionEn:
      'Two real numbers together produce a total of 9. The total of their squared values is 45. Determine the multiplication outcome of the two numbers.',
    questionHi:
      'दो वास्तविक संख्याएँ मिलकर कुल 9 बनाती हैं। उनके वर्गों का योग 45 है। दोनों संख्याओं का गुणन परिणाम निर्धारित करें।',
    optionsEn: ['18', '16', '21', '14'],
    optionsHi: ['18', '16', '21', '14'],
    correctIndex: 0,
    explanationEn:
      'Given a + b = 9 and a² + b² = 45.\nUsing (a + b)² = a² + b² + 2ab:\n9² = 45 + 2ab ⇒ 81 = 45 + 2ab ⇒ 2ab = 36 ⇒ ab = 18.',
    explanationHi:
      'दिया है a + b = 9 तथा a² + b² = 45।\n(a + b)² = a² + b² + 2ab ⇒ 81 = 45 + 2ab ⇒ 2ab = 36 ⇒ ab = 18।',
  },
  {
    id: 'cgl26_05o3_q53',
    topic: 'Compound Interest',
    questionEn:
      'A certain amount becomes ₹27,000 in 3 years when compounded annually. It is known that the cube root of the amount and the square root of the principal are both natural numbers. What is the rate of interest per annum?',
    questionHi:
      'एक निश्चित राशि वार्षिक चक्रवृद्धि ब्याज पर 3 वर्ष में ₹27,000 हो जाती है। यह ज्ञात है कि राशि का घनमूल और मूलधन का वर्गमूल दोनों प्राकृतिक संख्याएँ हैं। प्रति वर्ष ब्याज दर क्या है?',
    optionsEn: ['10%', '15%', '20%', '25%'],
    optionsHi: ['10%', '15%', '20%', '25%'],
    correctIndex: 2,
    explanationEn:
      'Amount A = ₹27,000 = 30³ (∛A = 30, a natural number).\nA = P(1 + R/100)³ ⇒ P = 27000 / (1 + R/100)³.\nTesting R = 20%: 1 + 20/100 = 6/5 ⇒ P = 27000 × (5/6)³ = 27000 × 125 / 216 = 125 × 125 = 15,625.\nHere √P = √15625 = 125 (a natural number). Hence, R = 20%.',
    explanationHi:
      'मिश्रधन A = ₹27,000 (∛27000 = 30, प्राकृतिक संख्या)।\nR = 20% रखने पर (1 + R/100) = 6/5 ⇒ P = 27000 × (5/6)³ = 15,625।\nयहाँ √P = √15625 = 125 (प्राकृतिक संख्या)। अतः ब्याज दर = 20%।',
  },
  {
    id: 'cgl26_05o3_q54',
    topic: 'Data Interpretation (Pie Chart)',
    questionEn:
      'Using the information in the pie chart, answer the following question.\nIf a total of ₹12,00,000 was invested across all sectors shown in the pie chart, how much more was spent on EdTech than on AR/VR Learning?',
    questionHi:
      'पाई चार्ट में दी गई जानकारी का उपयोग करके निम्नलिखित प्रश्न का उत्तर दीजिए।\nयदि पाई चार्ट में दिखाए गए सभी क्षेत्रों में कुल ₹12,00,000 का निवेश किया गया था, तो AR/VR लर्निंग की तुलना में एडटेक पर कितना अधिक खर्च किया गया था?',
    visual: {
      type: 'pie',
      title: 'Technology in Education Sector Percentage',
      slices: [
        { label: 'EdTech', value: 40, unit: '%', pattern: 'solid-dark' },
        { label: 'AR/VR Learning', value: 25, unit: '%', pattern: 'mid-gray' },
        { label: 'Online Tutors', value: 15, unit: '%', pattern: 'light-gray' },
        { label: 'Exam Portals', value: 10, unit: '%', pattern: 'hatch-diag' },
        { label: 'Skill Platforms', value: 10, unit: '%', pattern: 'dots' },
      ],
    },
    optionsEn: ['₹1,20,000', '₹1,50,000', '₹1,80,000', '₹2,00,000'],
    optionsHi: ['₹1,20,000', '₹1,50,000', '₹1,80,000', '₹2,00,000'],
    correctIndex: 2,
    explanationEn:
      'From the pie chart:\nEdTech = 40%, AR/VR Learning = 25%.\nDifference = 40% − 25% = 15% of total investment.\nAmount = (15 / 100) × ₹12,00,000 = ₹1,80,000.',
    explanationHi:
      'पाई चार्ट के अनुसार:\nEdTech = 40% और AR/VR Learning = 25%।\nअंतर = 40% − 25% = 15%।\nअतिरिक्त खर्च = ₹12,00,000 का 15% = ₹1,80,000।',
  },
  {
    id: 'cgl26_05o3_q55',
    topic: 'Geometry (Triangle Centres)',
    questionEn:
      'Consider an arbitrary triangle ABC. Which of the following statements about its centers is always true, regardless of the type of triangle (e.g., equilateral, isosceles, right-angled, scalene)?',
    questionHi:
      'एक मनमाना त्रिभुज ABC पर विचार करें। त्रिभुज के प्रकार (जैसे समबाहु, समद्विबाहु, समकोण, विषमबाहु) की परवाह किए बिना, इसके केंद्रों के बारे में निम्नलिखित में से कौन सा कथन हमेशा सत्य है?',
    optionsEn: [
      'The incenter, circumcenter, centroid, and orthocenter all coincide.',
      'The orthocenter is always located inside the triangle.',
      'The incenter is equidistant from all sides of the triangle.',
      'The circumcenter is equidistant from all vertices of the triangle and is always inside the triangle.',
    ],
    optionsHi: [
      'अन्तःकेन्द्र, परिकेन्द्र, केन्द्रक और लम्बकेन्द्र सभी एकसमान होते हैं।',
      'लम्बकेन्द्र सदैव त्रिभुज के अंदर स्थित होता है।',
      'अन्तःकेन्द्र त्रिभुज की सभी भुजाओं से समान दूरी पर होता है।',
      'परिकेन्द्र त्रिभुज के सभी शीर्षों से समान दूरी पर होता है तथा सदैव त्रिभुज के अंदर होता है।',
    ],
    correctIndex: 2,
    explanationEn:
      '• (A) is true only for equilateral triangles.\n• (B) and (D) fail for obtuse triangles (where both orthocenter and circumcenter lie outside) and right triangles (where they lie on the boundary).\n• (C) is ALWAYS true for every triangle: the incenter is the center of the inscribed circle (incircle) and is equidistant (at distance = inradius r) from all three sides.',
    explanationHi:
      '• अन्तःकेन्द्र (Incenter) सदैव किसी भी त्रिभुज की तीनों भुजाओं से समान दूरी (अन्तःत्रिज्या r) पर स्थित होता है।\n• अधिककोण त्रिभुज में लम्बकेन्द्र और परिकेन्द्र त्रिभुज के बाहर स्थित होते हैं। अतः केवल विकल्प (C) सदैव सत्य है।',
  },
  {
    id: 'cgl26_05o3_q56',
    topic: 'Time & Work',
    questionEn:
      '40 men can complete a job in 30 days. 60 men start the work and continue for x days. Then 20 men leave, and the remaining men complete the work in 9 days. Find the value of x.',
    questionHi:
      '40 आदमी एक काम को 30 दिन में पूरा कर सकते हैं। 60 आदमी काम शुरू करते हैं और x दिन तक जारी रखते हैं। फिर 20 आदमी काम छोड़ देते हैं और शेष आदमी 9 दिन में काम पूरा करते हैं। x का मान ज्ञात कीजिए।',
    optionsEn: ['12', '13', '14', '15'],
    optionsHi: ['12', '13', '14', '15'],
    correctIndex: 2,
    explanationEn:
      'Total work = 40 × 30 = 1200 man-days.\nRemaining men after 20 leave = 60 − 20 = 40 men.\nEquation: 60x + (40 × 9) = 1200\n⇒ 60x + 360 = 1200 ⇒ 60x = 840 ⇒ x = 14 days.',
    explanationHi:
      'कुल कार्य = 40 × 30 = 1200 पुरुष-दिन।\nशेष आदमी = 60 − 20 = 40।\n60x + 40 × 9 = 1200 ⇒ 60x = 1200 − 360 = 840 ⇒ x = 14 दिन।',
  },
  {
    id: 'cgl26_05o3_q57',
    topic: 'Mensuration 3D (Cylinder)',
    questionEn:
      'The radius of a cylinder is increased by 20%, and its height is decreased by 10%. Find the approximate percentage change in volume.',
    questionHi:
      'एक बेलन की त्रिज्या 20% बढ़ा दी जाती है और ऊँचाई 10% घटा दी जाती है। आयतन में लगभग प्रतिशत परिवर्तन ज्ञात कीजिए।',
    optionsEn: [
      '25.6% increase',
      '29.6% increase',
      '18% decrease',
      '12% decrease',
    ],
    optionsHi: [
      '25.6% वृद्धि',
      '29.6% वृद्धि',
      '18% कमी',
      '12% कमी',
    ],
    correctIndex: 1,
    explanationEn:
      'Volume of a cylinder V = πr²h ∝ r²h.\nNew volume factor = (1.2)² × (0.9) = 1.44 × 0.9 = 1.296.\nPercentage change = (1.296 − 1) × 100% = +29.6% (29.6% increase).',
    explanationHi:
      'बेलन का आयतन V = πr²h।\nनया आयतन गुणांक = (1.2)² × 0.9 = 1.44 × 0.9 = 1.296।\nअतः आयतन में प्रतिशत वृद्धि = (1.296 − 1) × 100% = 29.6% वृद्धि।',
  },
  {
    id: 'cgl26_05o3_q58',
    topic: 'Mensuration 3D (Pyramid)',
    questionEn:
      'A regular square pyramid has a base side length of 18 m. If its total surface area is 864 m², and its slant height is 15 m, find the height of the pyramid.',
    questionHi:
      'एक नियमित वर्गाकार पिरामिड की आधार भुजा की लंबाई 18 मीटर है। यदि इसका कुल पृष्ठीय क्षेत्रफल 864 वर्ग मीटर है और इसकी तिर्यक ऊँचाई 15 मीटर है, तो पिरामिड की ऊँचाई ज्ञात कीजिए।',
    optionsEn: ['8 m', '10 m', '12 m', '14 m'],
    optionsHi: ['8 मीटर', '10 मीटर', '12 मीटर', '14 मीटर'],
    correctIndex: 2,
    explanationEn:
      'In a regular square pyramid, slant height l, vertical height h, and half of base side (a/2) form a right triangle:\na/2 = 18 / 2 = 9 m, l = 15 m.\nTherefore, h = √(l² − (a/2)²) = √(15² − 9²) = √(225 − 81) = √144 = 12 m.',
    explanationHi:
      'वर्गाकार पिरामिड में ऊँचाई h, तिर्यक ऊँचाई l और आधार की आधी भुजा (a/2) समकोण त्रिभुज बनाते हैं:\na/2 = 18/2 = 9 मीटर, l = 15 मीटर।\nh = √(15² − 9²) = √(225 − 81) = √144 = 12 मीटर।',
  },
  {
    id: 'cgl26_05o3_q59',
    topic: 'Mensuration 3D (Pyramid & Inscribed Sphere)',
    questionEn:
      'A regular square pyramid has a volume of 384 cm³ and its height-to-base-edge ratio is 2 : 3. Find the radius of the sphere inscribed within it.',
    questionHi:
      'एक नियमित वर्गाकार पिरामिड का आयतन 384 सेमी³ है और इसकी ऊँचाई-से-आधार-किनारे का अनुपात 2 : 3 है। इसके भीतर अंकित गोले की त्रिज्या ज्ञात कीजिए।',
    optionsEn: ['3 cm', '4 cm', '5 cm', '10 cm'],
    optionsHi: ['3 सेमी', '4 सेमी', '5 सेमी', '10 सेमी'],
    correctIndex: 0,
    explanationEn:
      'Let height h = 2k and base edge a = 3k.\nVolume V = (1/3) a² h = (1/3)(9k²)(2k) = 6k³ = 384 ⇒ k³ = 64 ⇒ k = 4.\nSo a = 12 cm and h = 8 cm.\nSlant height l = √(h² + (a/2)²) = √(8² + 6²) = 10 cm.\nTotal Surface Area = a² + 2al = 12² + 2(12)(10) = 144 + 240 = 384 cm².\nRadius of inscribed sphere r = 3V / TSA = (3 × 384) / 384 = 3 cm.',
    explanationHi:
      'माना h = 2k और आधार भुजा a = 3k।\nआयतन = (1/3) a² h = 6k³ = 384 ⇒ k = 4 ⇒ a = 12 सेमी, h = 8 सेमी।\nतिर्यक ऊँचाई l = √(8² + 6²) = 10 सेमी।\nकुल पृष्ठीय क्षेत्रफल (TSA) = 12² + 2 × 12 × 10 = 384 सेमी²।\nअंतःगोले की त्रिज्या r = 3V / TSA = (3 × 384) / 384 = 3 सेमी।',
  },
  {
    id: 'cgl26_05o3_q60',
    topic: 'Mensuration 3D (Prism)',
    questionEn:
      'A right prism has a square base of side s cm and height h cm. If the volume is 256 cm³ and height is double the side length, find s.',
    questionHi:
      'एक लंब प्रिज्म का आधार s सेमी भुजा वाला वर्ग है और ऊँचाई h सेमी है। यदि इसका आयतन 256 सेमी³ है और ऊँचाई भुजा की लंबाई की दोगुनी है, तो s का मान ज्ञात कीजिए।',
    optionsEn: ['4∛2 cm', '12∛2 cm', '2∛2 cm', '5√5 cm'],
    optionsHi: ['4∛2 सेमी', '12∛2 सेमी', '2∛2 सेमी', '5√5 सेमी'],
    correctIndex: 0,
    explanationEn:
      'Given h = 2s.\nVolume of prism = Base Area × Height = s² × h = s² × 2s = 2s³.\n2s³ = 256 ⇒ s³ = 128 = 64 × 2 ⇒ s = ∛(64 × 2) = 4∛2 cm.',
    explanationHi:
      'दिया है h = 2s।\nप्रिज्म का आयतन = s² × h = 2s³ = 256 ⇒ s³ = 128 = 64 × 2 ⇒ s = 4∛2 सेमी।',
  },
  {
    id: 'cgl26_05o3_q61',
    topic: 'Height & Distance',
    questionEn:
      'The length of the shadow of a tower is 9 m when the sun’s altitude is 30°. What is the height of the tower?',
    questionHi:
      'एक मीनार की छाया की लंबाई 9 मीटर है जब सूर्य की ऊँचाई (उन्नयन कोण) 30° है। मीनार की ऊँचाई कितनी है?',
    optionsEn: ['4½ m', '9√3 m', '(9√3) / 2 m', '3√3 m'],
    optionsHi: ['4½ मीटर', '9√3 मीटर', '(9√3) / 2 मीटर', '3√3 मीटर'],
    correctIndex: 3,
    explanationEn:
      'tan 30° = Height / Shadow\n1 / √3 = h / 9 ⇒ h = 9 / √3 = (9√3) / 3 = 3√3 m.',
    explanationHi:
      'tan 30° = ऊँचाई / छाया ⇒ 1 / √3 = h / 9 ⇒ h = 9 / √3 = 3√3 मीटर।',
  },
  {
    id: 'cgl26_05o3_q62',
    topic: 'Algebra',
    questionEn: 'Simplify: (3x − 4y)² + (3x + 4y)².',
    questionHi: 'सरल करें: (3x − 4y)² + (3x + 4y)²।',
    optionsEn: [
      '18x² + 16y²',
      '18x² − 32y²',
      '36x² + 32y²',
      '18x² + 32y²',
    ],
    optionsHi: [
      '18x² + 16y²',
      '18x² − 32y²',
      '36x² + 32y²',
      '18x² + 32y²',
    ],
    correctIndex: 3,
    explanationEn:
      'Using the identity (a − b)² + (a + b)² = 2(a² + b²):\n(3x − 4y)² + (3x + 4y)² = 2[(3x)² + (4y)²] = 2(9x² + 16y²) = 18x² + 32y².',
    explanationHi:
      'सर्वसमिका (a − b)² + (a + b)² = 2(a² + b²) के उपयोग से:\n2[(3x)² + (4y)²] = 2(9x² + 16y²) = 18x² + 32y²।',
  },
  {
    id: 'cgl26_05o3_q63',
    topic: 'Algebra',
    questionEn: 'Simplify the expression (a + b)³ − (a − b)³.',
    questionHi: 'अभिव्यक्ति (a + b)³ − (a − b)³ को सरल करें।',
    optionsEn: [
      '6a²b + 2a³',
      '6ab² + 2a³',
      '2b³ + 6ab',
      '6a²b + 2b³',
    ],
    optionsHi: [
      '6a²b + 2a³',
      '6ab² + 2a³',
      '2b³ + 6ab',
      '6a²b + 2b³',
    ],
    correctIndex: 3,
    explanationEn:
      '(a + b)³ = a³ + 3a²b + 3ab² + b³\n(a − b)³ = a³ − 3a²b + 3ab² − b³\nSubtracting gives: (a + b)³ − (a − b)³ = 6a²b + 2b³.',
    explanationHi:
      '(a + b)³ − (a − b)³ = (a³ + 3a²b + 3ab² + b³) − (a³ − 3a²b + 3ab² − b³) = 6a²b + 2b³।',
  },
  {
    id: 'cgl26_05o3_q64',
    topic: 'Coordinate Geometry',
    questionEn: 'For the equation 5x − 2y = 10, what is the slope of the line?',
    questionHi: 'समीकरण 5x − 2y = 10 के लिए रेखा की प्रवणता (slope) क्या है?',
    optionsEn: ['5/3', '5/2', '3/2', '1/2'],
    optionsHi: ['5/3', '5/2', '3/2', '1/2'],
    correctIndex: 1,
    explanationEn:
      'Rewrite in slope-intercept form y = mx + c:\n5x − 2y = 10 ⇒ 2y = 5x − 10 ⇒ y = (5/2)x − 5.\nHence, the slope m = 5/2.',
    explanationHi:
      'समीकरण को y = mx + c के रूप में लिखने पर:\n2y = 5x − 10 ⇒ y = (5/2)x − 5।\nअतः रेखा की प्रवणता m = 5/2 है।',
  },
  {
    id: 'cgl26_05o3_q65',
    topic: 'Compound Interest',
    questionEn:
      'The compound interest on a sum for 2 years at 12% per annum compounded annually is ₹2,544. What is the principal amount?',
    questionHi:
      'किसी राशि पर 2 वर्ष के लिए 12% वार्षिक ब्याज दर से चक्रवृद्धि ब्याज ₹2,544 है। मूल राशि क्या है?',
    optionsEn: ['₹10,000', '₹12,000', '₹13,000', '₹11,500'],
    optionsHi: ['₹10,000', '₹12,000', '₹13,000', '₹11,500'],
    correctIndex: 0,
    explanationEn:
      'Effective CI rate for 2 years at 12% = 12 + 12 + (12 × 12) / 100 = 25.44%.\n25.44% of P = ₹2,544 ⇒ P = (2544 / 25.44) × 100 = ₹10,000.',
    explanationHi:
      '12% की दर से 2 वर्ष का प्रभावी चक्रवृद्धि ब्याज = 12 + 12 + (144/100) = 25.44%।\nमूलधन का 25.44% = ₹2,544 ⇒ मूलधन = ₹10,000।',
  },
  {
    id: 'cgl26_05o3_q66',
    topic: 'Mixture & Alligation',
    questionEn:
      'A Mumbai grocer has rice at ₹30/kg and ₹50/kg. In what ratio should he mix them so that he can sell the mixture at ₹36/kg with no profit or loss?',
    questionHi:
      'मुंबई के एक किरानेवाले के पास चावल ₹30/किग्रा और ₹50/किग्रा है। उसे उन्हें किस अनुपात में मिलाना चाहिए ताकि वह मिश्रण को ₹36/किग्रा पर बेच सके और उसे कोई लाभ या हानि न हो?',
    optionsEn: ['4 : 1', '7 : 3', '6 : 1', '9 : 4'],
    optionsHi: ['4 : 1', '7 : 3', '6 : 1', '9 : 4'],
    correctIndex: 1,
    explanationEn:
      'By the Rule of Alligation:\nRatio = (50 − 36) : (36 − 30) = 14 : 6 = 7 : 3.',
    explanationHi:
      'मिश्रण नियम (Alligation) से:\nअनुपात = (50 − 36) : (36 − 30) = 14 : 6 = 7 : 3।',
  },
  {
    id: 'cgl26_05o3_q67',
    topic: 'Statistics & Data Representation',
    questionEn:
      'When comparing unemployment rates across five states using a bar diagram, what is important to maintain for accuracy?',
    questionHi:
      'बार आरेख का उपयोग करके पाँच राज्यों में बेरोजगारी दर की तुलना करते समय, सटीकता के लिए क्या ध्यान रखना महत्वपूर्ण है?',
    optionsEn: [
      'Different scales for clarity',
      'Varying bar widths',
      'Same scale on the y-axis and equal bar width',
      'Use different bar colours only',
    ],
    optionsHi: [
      'स्पष्टता के लिए विभिन्न पैमाने',
      'बार की अलग-अलग चौड़ाई',
      'Y-अक्ष पर समान पैमाना और बार की बराबर चौड़ाई',
      'केवल अलग-अलग बार रंगों का उपयोग करना',
    ],
    correctIndex: 2,
    explanationEn:
      'For an accurate and unbiased visual comparison in a bar diagram, all bars must have equal width and be plotted against a single uniform scale on the vertical (y) axis starting consistently.',
    explanationHi:
      'बार आरेख में सटीक तुलना के लिए Y-अक्ष पर एक समान पैमाना (same scale) और सभी बार की बराबर चौड़ाई (equal bar width) बनाए रखना आवश्यक होता है।',
  },
  {
    id: 'cgl26_05o3_q68',
    topic: 'Statistics (Histogram)',
    questionEn: 'In a histogram, what does the height of each bar represent?',
    questionHi: 'आयतचित्र (Histogram) में प्रत्येक बार की ऊँचाई क्या दर्शाती है?',
    optionsEn: [
      'Class width',
      'Frequency density',
      'Class midpoint',
      'None of these',
    ],
    optionsHi: [
      'वर्ग की चौड़ाई',
      'आवृत्ति घनत्व (Frequency density)',
      'वर्ग मध्यबिंदु',
      'इनमें से कोई नहीं',
    ],
    correctIndex: 1,
    explanationEn:
      'In a histogram, the AREA of each bar is proportional to the class frequency, so the HEIGHT of each bar represents Frequency Density (= Frequency / Class Width).',
    explanationHi:
      'आयतचित्र में प्रत्येक बार का क्षेत्रफल आवृत्ति (frequency) को दर्शाता है, अतः प्रत्येक बार की ऊँचाई आवृत्ति घनत्व (Frequency Density = आवृत्ति / वर्ग चौड़ाई) को दर्शाती है।',
  },
  {
    id: 'cgl26_05o3_q69',
    topic: 'Trigonometry',
    questionEn: 'If cos θ = 0, then sin² θ = ?',
    questionHi: 'यदि cos θ = 0, तो sin² θ = ?',
    optionsEn: ['0', '1', '2', '3'],
    optionsHi: ['0', '1', '2', '3'],
    correctIndex: 1,
    explanationEn:
      'Using the Pythagorean identity sin² θ + cos² θ = 1:\nsin² θ = 1 − cos² θ = 1 − 0² = 1.',
    explanationHi:
      'सर्वसमिका sin² θ + cos² θ = 1 से:\nsin² θ = 1 − 0 = 1।',
  },
  {
    id: 'cgl26_05o3_q70',
    topic: 'Time, Speed & Distance (Trains)',
    questionEn:
      'If a train takes 20 seconds to cross a platform of 180 m and the train’s length is 120 m, what is its speed?',
    questionHi:
      'अगर एक रेलगाड़ी 180 मीटर लंबे प्लेटफॉर्म को पार करने में 20 सेकंड का समय लेती है और रेलगाड़ी की लंबाई 120 मीटर है, तो इसकी गति क्या है?',
    optionsEn: ['45 km/h', '50 km/h', '60 km/h', '54 km/h'],
    optionsHi: ['45 किमी/घंटा', '50 किमी/घंटा', '60 किमी/घंटा', '54 किमी/घंटा'],
    correctIndex: 3,
    explanationEn:
      'Total distance covered = 180 + 120 = 300 m.\nSpeed = 300 / 20 = 15 m/s.\nConverting to km/h: 15 × (18 / 5) = 54 km/h.',
    explanationHi:
      'कुल दूरी = 180 + 120 = 300 मीटर।\nचाल = 300 / 20 = 15 मी/से = 15 × (18/5) = 54 किमी/घंटा।',
  },
  {
    id: 'cgl26_05o3_q71',
    topic: 'Time & Work',
    questionEn:
      'A can complete a work in 10 days and B in 15 days. How long will it take them to finish the work if they work together?',
    questionHi:
      'A किसी काम को 10 दिन में और B 15 दिन में पूरा कर सकता है। अगर वे दोनों साथ मिलकर काम करें तो उन्हें काम पूरा करने में कितना समय लगेगा?',
    optionsEn: ['6 days', '7 days', '8 days', '9 days'],
    optionsHi: ['6 दिन', '7 दिन', '8 दिन', '9 दिन'],
    correctIndex: 0,
    explanationEn:
      'Combined time = (10 × 15) / (10 + 15) = 150 / 25 = 6 days.',
    explanationHi:
      'दोनों मिलकर कार्य पूरा करेंगे = (10 × 15) / (10 + 15) = 150 / 25 = 6 दिन।',
  },
  {
    id: 'cgl26_05o3_q72',
    topic: 'Geometry (Circles & Chords)',
    questionEn:
      'In a circular pavilion, a support beam acts as a chord connecting two columns. The chord is 20 m, and the height from the chord to the top of the arc is 5 m. Find the radius of the circular roof.',
    questionHi:
      'एक वृत्ताकार मंडप में, एक सहायक शहतीर दो स्तंभों को जोड़ती हुई जीवा के रूप में कार्य करता है। यह जीवा 20 मीटर लंबी है, और जीवा से चाप के शीर्ष तक की ऊँचाई 5 मीटर है। वृत्ताकार छत की त्रिज्या ज्ञात कीजिए।',
    optionsEn: ['13 m', '14 m', '12.5 m', '16 m'],
    optionsHi: ['13 मीटर', '14 मीटर', '12.5 मीटर', '16 मीटर'],
    correctIndex: 2,
    explanationEn:
      'Half-chord = 20 / 2 = 10 m; sagitta (arc height) = 5 m.\nLet radius = r. Distance from centre to chord = r − 5.\nBy Pythagoras theorem: r² = 10² + (r − 5)²\n⇒ r² = 100 + r² − 10r + 25 ⇒ 10r = 125 ⇒ r = 12.5 m.',
    explanationHi:
      'आधी जीवा = 10 मीटर तथा चाप की ऊँचाई = 5 मीटर।\nमाना त्रिज्या = r, तो केंद्र से जीवा की दूरी = r − 5।\nपाइथागोरस प्रमेय से: r² = 10² + (r − 5)² ⇒ 10r = 125 ⇒ r = 12.5 मीटर।',
  },
  {
    id: 'cgl26_05o3_q73',
    topic: 'Trigonometry',
    questionEn:
      'A projectile launch angle satisfies sin(2θ) = 0.8 and cos(2θ) = 0.6. Calculate sin⁴ θ + cos⁴ θ to predict range stability.',
    questionHi:
      'एक प्रक्षिप्त पिंड के प्रक्षेप कोण के लिए sin(2θ) = 0.8 तथा cos(2θ) = 0.6 दिया गया है। इसकी सीमा स्थिरता की भविष्यवाणी हेतु sin⁴ θ + cos⁴ θ ज्ञात करें।',
    optionsEn: ['1', '0.6', '0.68', '0.72'],
    optionsHi: ['1', '0.6', '0.68', '0.72'],
    correctIndex: 2,
    explanationEn:
      'Using the identity:\nsin⁴ θ + cos⁴ θ = (sin² θ + cos² θ)² − 2 sin² θ cos² θ = 1 − (1/2)(2 sin θ cos θ)² = 1 − (1/2) sin²(2θ).\nSubstituting sin(2θ) = 0.8:\n1 − (1/2)(0.8)² = 1 − 0.5 × 0.64 = 1 − 0.32 = 0.68.',
    explanationHi:
      'सर्वसमिका से: sin⁴ θ + cos⁴ θ = 1 − (1/2) sin²(2θ)।\nsin(2θ) = 0.8 रखने पर:\n1 − (1/2) × 0.64 = 1 − 0.32 = 0.68।',
  },
  {
    id: 'cgl26_05o3_q74',
    topic: 'Trigonometry',
    questionEn:
      'In an optical system, two light beams hit a lens at angles x and y. Given sin² x − sin² y = 1/4 and sin x cos x − sin y cos y = 0, find the value of (sin x + cos x) × (sin y + cos y).',
    questionHi:
      'एक प्रकाशीय प्रणाली में दो प्रकाश किरणें कोण x और y पर लेंस से टकराती हैं। यदि sin² x − sin² y = 1/4 और sin x cos x − sin y cos y = 0 दिया गया है, तो (sin x + cos x) × (sin y + cos y) का मान ज्ञात कीजिए।',
    optionsEn: ['1.5', '1.775', '1.968', '2.25'],
    optionsHi: ['1.5', '1.775', '1.968', '2.25'],
    correctIndex: 2,
    explanationEn:
      'From sin x cos x = sin y cos y ⇒ sin(2x) = sin(2y).\nSince sin² x ≠ sin² y, x ≠ y, so 2x + 2y = 180° ⇒ x + y = 90°.\nHence sin y = cos x and cos y = sin x.\nNow sin² x − sin² y = sin² x − cos² x = −cos(2x) = 1/4 ⇒ cos(2x) = −1/4.\nTherefore, sin(2x) = √(1 − (−1/4)²) = √(15/16) = √15 / 4 ≈ 0.9682.\nFinally, (sin x + cos x)(sin y + cos y) = (sin x + cos x)² = 1 + sin(2x) ≈ 1 + 0.968 = 1.968.',
    explanationHi:
      'sin x cos x = sin y cos y ⇒ sin(2x) = sin(2y)। चूँकि x ≠ y, अतः x + y = 90° ⇒ sin y = cos x व cos y = sin x।\nsin² x − cos² x = 1/4 ⇒ cos(2x) = −1/4 ⇒ sin(2x) = √15 / 4 ≈ 0.968।\nअतः (sin x + cos x)(sin y + cos y) = (sin x + cos x)² = 1 + sin(2x) ≈ 1.968।',
  },
  {
    id: 'cgl26_05o3_q75',
    topic: 'Data Interpretation (Histogram)',
    questionEn:
      'This histogram represents the weights (in kg) of 45 people in a fitness club.\nWhich weight interval represents approximately one-fourth of the total people?',
    questionHi:
      'यह आयतचित्र (हिस्टोग्राम) फिटनेस क्लब के 45 सदस्यों का भार (किलोग्राम में) दर्शाता है।\nकौन-सा भार वर्ग लगभग एक-चौथाई कुल लोगों का प्रतिनिधित्व करता है?',
    visual: {
      type: 'histogram',
      title: 'Histogram of Weights of 45 People in a Fitness Club',
      xAxisLabel: 'Weight (kg)',
      yAxisLabel: 'Number of People',
      binEdges: ['40', '45', '50', '55', '60', '65', '70'],
      counts: [5, 8, 12, 10, 7, 3],
      yMax: 12,
      yStep: 2,
      showValueLabels: true,
    },
    optionsEn: ['40-45 kg', '50-55 kg', '55-60 kg', '60-65 kg'],
    optionsHi: ['40-45 kg', '50-55 kg', '55-60 kg', '60-65 kg'],
    correctIndex: 1,
    explanationEn:
      'One-fourth of 45 people = 45 / 4 = 11.25 people.\nFrom the histogram, the counts per interval are: 40–45 (5), 45–50 (8), 50–55 (12), 55–60 (10), 60–65 (7), 65–70 (3).\n12 is the closest to 11.25, corresponding to the 50–55 kg interval.',
    explanationHi:
      '45 लोगों का एक-चौथाई = 45 / 4 = 11.25।\nहिस्टोग्राम में 50-55 kg वर्ग में 12 लोग हैं, जो 11.25 के सबसे निकट है। अतः सही विकल्प 50-55 kg है।',
  },
];

const SECTION_4_ENGLISH_O5S3: Question[] = [
  {
    id: 'cgl26_05o3_q76',
    topic: 'Antonyms',
    questionEn: 'Select the most appropriate antonym of the given word.\nEnigmatic',
    questionHi: 'Select the most appropriate antonym of the given word.\nEnigmatic',
    optionsEn: ['Obscure', 'Lucid', 'Arcane', 'Ambiguous'],
    optionsHi: ['Obscure', 'Lucid', 'Arcane', 'Ambiguous'],
    correctIndex: 1,
    explanationEn:
      '"Enigmatic" means mysterious, puzzling, or difficult to understand. Obscure, arcane, and ambiguous are synonyms; its exact antonym is "Lucid" (clear and easily understood).',
    explanationHi:
      '"Enigmatic" का अर्थ रहस्यमय या अस्पष्ट होता है। इसका सटीक विलोम "Lucid" (स्पष्ट एवं सुबोध) है।',
  },
  {
    id: 'cgl26_05o3_q77',
    topic: 'Homonyms',
    questionEn:
      'Choose the sentence containing the homonym of the highlighted word “match”:\nThe “match” was very exciting.',
    questionHi:
      'Choose the sentence containing the homonym of the highlighted word “match”:\nThe “match” was very exciting.',
    optionsEn: [
      'He used a match to light the candle.',
      'The match was watched by millions.',
      'That match ended in a draw.',
      'Football matches are thrilling.',
    ],
    optionsHi: [
      'He used a match to light the candle.',
      'The match was watched by millions.',
      'That match ended in a draw.',
      'Football matches are thrilling.',
    ],
    correctIndex: 0,
    explanationEn:
      'In the given sentence, "match" means a sporting contest/game (same meaning in B, C, and D). In option (A), "match" is a homonym meaning a short wooden stick used to strike fire.',
    explanationHi:
      'दिए गए वाक्य में "match" का अर्थ खेल प्रतियोगिता है। विकल्प (A) में "match" का अर्थ माचिस की तीली है, जो इसका सही समनाम (homonym) प्रयोग है।',
  },
  {
    id: 'cgl26_05o3_q78',
    topic: 'Direct & Indirect Speech',
    questionEn:
      'Convert the below given direct speech into indirect speech appropriately.\nShe said, "I need some rest now".',
    questionHi:
      'Convert the below given direct speech into indirect speech appropriately.\nShe said, "I need some rest now".',
    optionsEn: [
      'She said that she needs some rest now',
      'She said that she is needing some rest now',
      'She said that she needed some rest then',
      'She said that she needs some rest then',
    ],
    optionsHi: [
      'She said that she needs some rest now',
      'She said that she is needing some rest now',
      'She said that she needed some rest then',
      'She said that she needs some rest then',
    ],
    correctIndex: 2,
    explanationEn:
      'With past reporting verb "said": pronoun "I" changes to "she", Simple Present "need" backshifts to Simple Past "needed", and time adverb "now" changes to "then". Hence: "She said that she needed some rest then".',
    explanationHi:
      'Past reporting verb ("said") के कारण "I" → "she", "need" → "needed" तथा "now" → "then" में बदलता है। अतः विकल्प (C) सही है।',
  },
  {
    id: 'cgl26_05o3_q79',
    topic: 'Direct & Indirect Speech',
    questionEn:
      'Convert the below given indirect speech into direct speech appropriately:\nShe said that she had completed the task.',
    questionHi:
      'Convert the below given indirect speech into direct speech appropriately:\nShe said that she had completed the task.',
    optionsEn: [
      'She said, "I completes the task".',
      'She said, "I completed the task".',
      'She said, "I would have completed the task".',
      'She said, "I will complete the task".',
    ],
    optionsHi: [
      'She said, "I completes the task".',
      'She said, "I completed the task".',
      'She said, "I would have completed the task".',
      'She said, "I will complete the task".',
    ],
    correctIndex: 1,
    explanationEn:
      'In indirect speech, Past Perfect ("had completed") corresponds back to Simple Past ("completed") or Present Perfect ("have completed") in direct speech. Among the choices, only option (B) — She said, "I completed the task". — is grammatically accurate.',
    explanationHi:
      'Indirect speech का Past Perfect ("had completed") Direct speech में Simple Past ("completed") से आता है। अतः विकल्प (B) सही है।',
  },
  {
    id: 'cgl26_05o3_q80',
    topic: 'Sentence Rearrangement',
    questionEn:
      'Four parts of a sentence are given below in a jumbled order. Choose the sequence that forms a complete and meaningful sentence.\nA) affordable medicines\nB) through Jan Aushadhi Kendras\nC) are being made available\nD) to the public',
    questionHi:
      'Four parts of a sentence are given below in a jumbled order. Choose the sequence that forms a complete and meaningful sentence.\nA) affordable medicines\nB) through Jan Aushadhi Kendras\nC) are being made available\nD) to the public',
    optionsEn: ['D-B-C-A', 'B-A-D-C', 'A-D-C-B', 'A-C-D-B'],
    optionsHi: ['D-B-C-A', 'B-A-D-C', 'A-D-C-B', 'A-C-D-B'],
    correctIndex: 3,
    explanationEn:
      'Subject A ("Affordable medicines") + Verb phrase C ("are being made available") + Recipient D ("to the public") + Means B ("through Jan Aushadhi Kendras") forms the natural sentence: "Affordable medicines are being made available to the public through Jan Aushadhi Kendras." Hence, A-C-D-B.',
    explanationHi:
      'सही व्याकरणिक क्रम A-C-D-B है: "Affordable medicines are being made available to the public through Jan Aushadhi Kendras."',
  },
  {
    id: 'cgl26_05o3_q81',
    topic: 'Spelling',
    questionEn: 'Spot the spelling error:',
    questionHi: 'Spot the spelling error:',
    optionsEn: ['Irrefutable', 'Hieroglyphics', 'Anomaly', 'Euphemism'],
    optionsHi: ['Irrefutable', 'Hieroglyphics', 'Anomaly', 'Euphemism'],
    correctIndex: 2,
    explanationEn:
      'Per the official exam answer key, option (C) is marked as the correct answer. (Note: In standard English dictionaries, "Irrefutable", "Hieroglyphics", "Anomaly", and "Euphemism" are all valid spellings; the original exam paper likely intended a misspelled variant of "Anomaly" such as "Anomoly" that was normalized in the printed key.)',
    explanationHi:
      'आधिकारिक उत्तर कुंजी के अनुसार विकल्प (C) "Anomaly" सही उत्तर के रूप में चिह्नित है।',
  },
  {
    id: 'cgl26_05o3_q82',
    topic: 'Adjectives (Degrees of Comparison)',
    questionEn:
      'Fill in the blank with the correct degree of comparison:\nIndia is one of the _________ growing economies in the world, attracting significant foreign investments.',
    questionHi:
      'Fill in the blank with the correct degree of comparison:\nIndia is one of the _________ growing economies in the world, attracting significant foreign investments.',
    optionsEn: ['more fast', 'most fast', 'faster', 'fastest'],
    optionsHi: ['more fast', 'most fast', 'faster', 'fastest'],
    correctIndex: 3,
    explanationEn:
      'The structure "one of the + superlative + plural noun" requires the superlative degree of the one-syllable word "fast", which is "fastest" (never "most fast").',
    explanationHi:
      '"one of the" के साथ superlative degree प्रयुक्त होती है। "fast" का superlative रूप "fastest" होता है।',
  },
  {
    id: 'cgl26_05o3_q83',
    topic: 'Sentence Improvement (Prepositions & Gerunds)',
    questionEn:
      'Identify the option that best corrects the quoted part of the sentence for proper grammar and usage.\nHe prevented me “to go outside”.',
    questionHi:
      'Identify the option that best corrects the quoted part of the sentence for proper grammar and usage.\nHe prevented me “to go outside”.',
    optionsEn: [
      'from going outside',
      'with going outside',
      'for going outside',
      'by going outside',
    ],
    optionsHi: [
      'from going outside',
      'with going outside',
      'for going outside',
      'by going outside',
    ],
    correctIndex: 0,
    explanationEn:
      'The verb "prevent" always takes the fixed structure "prevent + object + from + V-ing (gerund)". Hence, "from going outside" is correct.',
    explanationHi:
      'क्रिया "prevent" के साथ सदैव "from + V-ing" (gerund) का प्रयोग होता है। अतः "from going outside" सही है।',
  },
  {
    id: 'cgl26_05o3_q84',
    topic: 'Sentence Improvement (Fixed Prepositions)',
    questionEn:
      'Identify the option that best corrects the quoted part of the sentence for proper grammar and usage.\nHe is “angry on” his friend for the mistake.',
    questionHi:
      'Identify the option that best corrects the quoted part of the sentence for proper grammar and usage.\nHe is “angry on” his friend for the mistake.',
    optionsEn: ['angry for', 'angry with', 'angry in', 'angry by'],
    optionsHi: ['angry for', 'angry with', 'angry in', 'angry by'],
    correctIndex: 1,
    explanationEn:
      'We use "angry with" a person and "angry at/about" a thing or situation. Since "his friend" is a person, "angry with" is the correct usage.',
    explanationHi:
      'किसी व्यक्ति से नाराज़ होने के लिए "angry with" तथा किसी बात/वस्तु पर नाराज़ होने के लिए "angry at" का प्रयोग होता है। अतः "angry with" सही है।',
  },
  {
    id: 'cgl26_05o3_q85',
    topic: 'Spotting the Error (Prepositions)',
    questionEn:
      'Spot the error in the following sentence and identify the INCORRECT part.\nHe has been afraid from spiders since childhood.',
    questionHi:
      'Spot the error in the following sentence and identify the INCORRECT part.\nHe has been afraid from spiders since childhood.',
    optionsEn: ['afraid from', 'spiders', 'since childhood', 'No error'],
    optionsHi: ['afraid from', 'spiders', 'since childhood', 'No error'],
    correctIndex: 0,
    explanationEn:
      'The adjective "afraid" is always followed by the preposition "of", not "from". The correct phrase is "afraid of spiders".',
    explanationHi:
      '"afraid" के साथ सदैव preposition "of" आता है, "from" नहीं। सही प्रयोग "afraid of spiders" है।',
  },
  {
    id: 'cgl26_05o3_q86',
    topic: 'Spotting the Error (Gerunds)',
    questionEn:
      'Spot the error in the following sentence and identify the INCORRECT part.\nShe always avoids to speak during the meetings because she is shy.',
    questionHi:
      'Spot the error in the following sentence and identify the INCORRECT part.\nShe always avoids to speak during the meetings because she is shy.',
    optionsEn: ['always avoids', 'to speak', 'during the meetings', 'No error'],
    optionsHi: ['always avoids', 'to speak', 'during the meetings', 'No error'],
    correctIndex: 1,
    explanationEn:
      'The verb "avoid" is always followed by a gerund (V-ing), never a to-infinitive. Thus, "to speak" should be replaced with "speaking".',
    explanationHi:
      'क्रिया "avoid" के बाद सदैव gerund (V-ing) का प्रयोग होता है, to-infinitive का नहीं। अतः "to speak" के स्थान पर "speaking" होगा।',
  },
  {
    id: 'cgl26_05o3_q87',
    topic: 'Para Jumble',
    questionEn:
      'Rearrange the following four jumbled sentences into a logically coherent and meaningful paragraph.\n1. Students are encouraged to work on real-life problem-solving.\n2. The Atal Innovation Mission promotes start-up culture in schools and colleges.\n3. It provides funding and mentoring for innovation labs.\n4. This has led to student-led projects in rural technology and healthcare.',
    questionHi:
      'Rearrange the following four jumbled sentences into a logically coherent and meaningful paragraph.\n1. Students are encouraged to work on real-life problem-solving.\n2. The Atal Innovation Mission promotes start-up culture in schools and colleges.\n3. It provides funding and mentoring for innovation labs.\n4. This has led to student-led projects in rural technology and healthcare.',
    optionsEn: ['2-1-3-4', '1-3-2-4', '2-3-1-4', '1-3-4-2'],
    optionsHi: ['2-1-3-4', '1-3-2-4', '2-3-1-4', '1-3-4-2'],
    correctIndex: 2,
    explanationEn:
      'Sentence 2 introduces the subject ("The Atal Innovation Mission"). Sentence 3 follows directly with the pronoun "It" explaining what the mission provides (funding & mentoring). Sentence 1 describes what students do in those labs, and Sentence 4 concludes with the outcome ("This has led to..."). Hence, 2-3-1-4.',
    explanationHi:
      'वाक्य 2 विषय (Atal Innovation Mission) प्रस्तुत करता है, 3 में "It" उसके कार्य बताता है, 1 छात्रों की भूमिका दर्शाता है और 4 परिणाम बताता है। अतः सही क्रम 2-3-1-4 है।',
  },
  {
    id: 'cgl26_05o3_q88',
    topic: 'Antonyms',
    questionEn: 'What is the antonym of the word "sophisticated"?',
    questionHi: 'What is the antonym of the word "sophisticated"?',
    optionsEn: ['Controlled', 'Cultured', 'Refined', 'Simple'],
    optionsHi: ['Controlled', 'Cultured', 'Refined', 'Simple'],
    correctIndex: 3,
    explanationEn:
      '"Sophisticated" means complex, refined, or cultured. Cultured and refined are synonyms; its direct antonym is "Simple".',
    explanationHi:
      '"Sophisticated" का अर्थ जटिल, परिष्कृत या सुसंस्कृत होता है। इसका सटीक विलोम "Simple" (सरल) है।',
  },
  {
    id: 'cgl26_05o3_q89',
    topic: 'Idioms & Phrases',
    questionEn: 'Choose the correct meaning of the idiom given below:\n“Bury the hatchet”',
    questionHi: 'Choose the correct meaning of the idiom given below:\n“Bury the hatchet”',
    optionsEn: [
      'Hide evidence of wrongdoing',
      'Bury something literally',
      'End a conflict and make peace',
      'Start a new quarrel',
    ],
    optionsHi: [
      'Hide evidence of wrongdoing',
      'Bury something literally',
      'End a conflict and make peace',
      'Start a new quarrel',
    ],
    correctIndex: 2,
    explanationEn:
      'The idiom "bury the hatchet" means to end a quarrel or longstanding conflict and reconcile peacefully.',
    explanationHi:
      '"Bury the hatchet" मुहावरे का अर्थ पुरानी दुश्मनी या झगड़ा समाप्त करके शांति स्थापित करना (End a conflict and make peace) होता है।',
  },
  {
    id: 'cgl26_05o3_q90',
    topic: 'Idioms & Phrases',
    questionEn: 'Choose the correct meaning of the idiom given below:\n“Go the whole hog”',
    questionHi: 'Choose the correct meaning of the idiom given below:\n“Go the whole hog”',
    optionsEn: [
      'Refuse to try',
      'Do something completely',
      'Be lazy',
      'Plan early',
    ],
    optionsHi: [
      'Refuse to try',
      'Do something completely',
      'Be lazy',
      'Plan early',
    ],
    correctIndex: 1,
    explanationEn:
      '"Go the whole hog" means to do something thoroughly, completely, or without holding anything back.',
    explanationHi:
      '"Go the whole hog" का अर्थ किसी कार्य को पूरी तरह या संपूर्णता से करना (Do something completely) होता है।',
  },
  {
    id: 'cgl26_05o3_q91',
    topic: 'One Word Substitution',
    questionEn:
      'Choose the appropriate one-word substitution for:\nA person who composes music.',
    questionHi:
      'Choose the appropriate one-word substitution for:\nA person who composes music.',
    optionsEn: ['Vocalist', 'Singer', 'Lyricist', 'Composer'],
    optionsHi: ['Vocalist', 'Singer', 'Lyricist', 'Composer'],
    correctIndex: 3,
    explanationEn:
      'A "Composer" writes/composes music. A "Lyricist" writes song words/lyrics, while a "Vocalist" or "Singer" performs songs vocally.',
    explanationHi:
      'संगीत की रचना करने वाले व्यक्ति को "Composer" (संगीतकार) कहा जाता है।',
  },
  {
    id: 'cgl26_05o3_q92',
    topic: 'Para Jumble',
    questionEn:
      'Rearrange the following sentences in correct order to make a meaningful passage.\n1. Final version was published online.\n2. Experts were consulted for feedback.\n3. A preliminary draft was circulated.\n4. Comments were incorporated and edits were made.',
    questionHi:
      'Rearrange the following sentences in correct order to make a meaningful passage.\n1. Final version was published online.\n2. Experts were consulted for feedback.\n3. A preliminary draft was circulated.\n4. Comments were incorporated and edits were made.',
    optionsEn: ['1-2-3-4', '4-1-2-3', '4-2-1-3', '3-2-4-1'],
    optionsHi: ['1-2-3-4', '4-1-2-3', '4-2-1-3', '3-2-4-1'],
    correctIndex: 3,
    explanationEn:
      'Chronological publishing workflow: (3) Preliminary draft circulated → (2) Experts consulted for feedback → (4) Comments incorporated & edits made → (1) Final version published online. Hence, 3-2-4-1.',
    explanationHi:
      'तार्किक क्रम: पहले प्रारंभिक मसौदा (3) → विशेषज्ञों से प्रतिक्रिया (2) → टिप्पणियाँ शामिल कर संपादन (4) → अंतिम संस्करण प्रकाशित (1)। अतः सही क्रम 3-2-4-1 है।',
  },
  {
    id: 'cgl26_05o3_q93',
    topic: 'Sentence Rearrangement',
    questionEn:
      'Rearrange the following parts in correct order to make a meaningful sentence.\nP. as part of a nationwide public health intervention\nQ. through mobile diagnostic units\nR. regular screening camps\nS. were conducted in remote and underserved areas',
    questionHi:
      'Rearrange the following parts in correct order to make a meaningful sentence.\nP. as part of a nationwide public health intervention\nQ. through mobile diagnostic units\nR. regular screening camps\nS. were conducted in remote and underserved areas',
    optionsEn: ['RQSP', 'RSPQ', 'QPRS', 'PRSQ'],
    optionsHi: ['RQSP', 'RSPQ', 'QPRS', 'PRSQ'],
    correctIndex: 1,
    explanationEn:
      'Subject R ("Regular screening camps") + Passive Verb & Place S ("were conducted in remote and underserved areas") + Context P ("as part of a nationwide public health intervention") + Means Q ("through mobile diagnostic units") forms RSPQ.',
    explanationHi:
      'सही क्रम RSPQ है: "Regular screening camps were conducted in remote and underserved areas as part of a nationwide public health intervention through mobile diagnostic units."',
  },
  {
    id: 'cgl26_05o3_q94',
    topic: 'Sentence Rearrangement',
    questionEn:
      'Rearrange the following parts in correct order to make a meaningful sentence.\nP. by integrating machine learning diagnostics\nQ. to minimize false negatives\nR. the AI-powered screening tool\nS. has significantly improved early disease detection',
    questionHi:
      'Rearrange the following parts in correct order to make a meaningful sentence.\nP. by integrating machine learning diagnostics\nQ. to minimize false negatives\nR. the AI-powered screening tool\nS. has significantly improved early disease detection',
    optionsEn: ['RSPQ', 'RQPS', 'PQRS', 'RPSQ'],
    optionsHi: ['RSPQ', 'RQPS', 'PQRS', 'RPSQ'],
    correctIndex: 0,
    explanationEn:
      'Subject R ("The AI-powered screening tool") + Main Verb & Object S ("has significantly improved early disease detection") + Method P ("by integrating machine learning diagnostics") + Purpose Q ("to minimize false negatives") forms RSPQ.',
    explanationHi:
      'सही क्रम RSPQ है: "The AI-powered screening tool has significantly improved early disease detection by integrating machine learning diagnostics to minimize false negatives."',
  },
  {
    id: 'cgl26_05o3_q95',
    topic: 'Sentence Rearrangement',
    questionEn:
      'Rearrange the following parts in correct order to make a meaningful sentence.\nP. reflecting the precarious balance between economic development and environmental conservation\nQ. the recent Supreme Court judgment on mining activities in forest regions\nR. has set a legal precedent\nS. for all future industrial clearance protocols',
    questionHi:
      'Rearrange the following parts in correct order to make a meaningful sentence.\nP. reflecting the precarious balance between economic development and environmental conservation\nQ. the recent Supreme Court judgment on mining activities in forest regions\nR. has set a legal precedent\nS. for all future industrial clearance protocols',
    optionsEn: ['QPRS', 'QRSP', 'RQPS', 'QSRP'],
    optionsHi: ['QPRS', 'QRSP', 'RQPS', 'QSRP'],
    correctIndex: 1,
    explanationEn:
      'Subject Q ("The recent Supreme Court judgment on mining activities in forest regions") + Verb & Object R ("has set a legal precedent") + Scope S ("for all future industrial clearance protocols") + Participial modifier P ("reflecting the precarious balance...") forms QRSP.',
    explanationHi:
      'सही क्रम QRSP है: "The recent Supreme Court judgment on mining activities in forest regions has set a legal precedent for all future industrial clearance protocols reflecting the precarious balance between economic development and environmental conservation."',
  },
  {
    id: 'cgl26_05o3_q96',
    topic: 'Cloze Test (Blank 1)',
    passageEn: CLOZE_PASSAGE_O5S3,
    questionEn:
      'In the passage, certain words have been removed. Choose the most suitable option for blank number (1).',
    questionHi:
      'In the passage, certain words have been removed. Choose the most suitable option for blank number (1).',
    optionsEn: ['sanctified', 'labyrinthine', 'terrestrial', 'homogenized'],
    optionsHi: ['sanctified', 'labyrinthine', 'terrestrial', 'homogenized'],
    correctIndex: 1,
    explanationEn:
      'The context describes outer space as "rife with techno-nationalistic rivalries and juridical lacunae", indicating an intricate, maze-like, legally entangled space. "Labyrinthine" (complex and convoluted like a labyrinth) fits precisely.',
    explanationHi:
      'संदर्भ में तकनीकी-राष्ट्रवादी प्रतिद्वंद्विता और कानूनी कमियों से भरे जटिल क्षेत्र की बात की गई है, जिसके लिए "labyrinthine" (जटिल/भूलभुलैया जैसा) सबसे उपयुक्त शब्द है।',
  },
  {
    id: 'cgl26_05o3_q97',
    topic: 'Cloze Test (Blank 2)',
    passageEn: CLOZE_PASSAGE_O5S3,
    questionEn:
      'In the passage, certain words have been removed. Choose the most suitable option for blank number (2).',
    questionHi:
      'In the passage, certain words have been removed. Choose the most suitable option for blank number (2).',
    optionsEn: ['elided', 'accentuated', 'punctuated', 'amalgamated'],
    optionsHi: ['elided', 'accentuated', 'punctuated', 'amalgamated'],
    correctIndex: 0,
    explanationEn:
      'Dual-use satellite constellations and cyber-vulnerable architectures blur or erase ("elide") the former ("erstwhile") doctrinal boundary between civilian and military space operations. "Elided" (omitted/blurred out of existence) fits the context best.',
    explanationHi:
      '"Elided" का अर्थ किसी अंतर या सीमा को मिटा देना/धुंधला कर देना होता है। सैन्य और नागरिक उपक्रमों के बीच के पुराने अंतर को मिटाने के संदर्भ में "elided" सटीक है।',
  },
  {
    id: 'cgl26_05o3_q98',
    topic: 'Cloze Test (Blank 3)',
    passageEn: CLOZE_PASSAGE_O5S3,
    questionEn:
      'In the passage, certain words have been removed. Choose the most suitable option for blank number (3).',
    questionHi:
      'In the passage, certain words have been removed. Choose the most suitable option for blank number (3).',
    optionsEn: ['inviolate', 'vestigial', 'implacable', 'fungible'],
    optionsHi: ['inviolate', 'vestigial', 'implacable', 'fungible'],
    correctIndex: 1,
    explanationEn:
      'Because of "unilateral adventurism and semantic exploitation of treaty ambiguities", older compacts like the Outer Space Treaty now appear outdated and reduced to mere remnants—i.e., "vestigial".',
    explanationHi:
      '"Vestigial" का अर्थ अवशेष मात्र या लगभग अप्रभावी रह जाना होता है। एकतरफा कदमों के सामने पुरानी संधियाँ केवल अवशेष मात्र ("vestigial") प्रतीत होती हैं।',
  },
  {
    id: 'cgl26_05o3_q99',
    topic: 'Cloze Test (Blank 4)',
    passageEn: CLOZE_PASSAGE_O5S3,
    questionEn:
      'In the passage, certain words have been removed. Choose the most suitable option for blank number (4).',
    questionHi:
      'In the passage, certain words have been removed. Choose the most suitable option for blank number (4).',
    optionsEn: ['extractivist', 'fiduciary', 'anachronistic', 'restitutive'],
    optionsHi: ['extractivist', 'fiduciary', 'anachronistic', 'restitutive'],
    correctIndex: 0,
    explanationEn:
      'The sentence begins with "Resource extraction from asteroids and prospective Mars colonization introduce a lexicon of planetary commodification...", directly pointing to "extractivist" governance (centered on extracting resources for economic/strategic gain).',
    explanationHi:
      'वाक्य में क्षुद्रग्रहों से संसाधन निष्कर्षण ("Resource extraction") और ग्रहों के वस्तुकरण का उल्लेख है, जो सीधे "extractivist" (दोहन-आधारित) शासन की ओर संकेत करता है।',
  },
  {
    id: 'cgl26_05o3_q100',
    topic: 'Cloze Test (Blank 5)',
    passageEn: CLOZE_PASSAGE_O5S3,
    questionEn:
      'In the passage, certain words have been removed. Choose the most suitable option for blank number (5).',
    questionHi:
      'In the passage, certain words have been removed. Choose the most suitable option for blank number (5).',
    optionsEn: ['palliative', 'perfunctory', 'prophylactic', 'prosaic'],
    optionsHi: ['palliative', 'perfunctory', 'prophylactic', 'prosaic'],
    correctIndex: 2,
    explanationEn:
      'Techno-diplomacy must move past mere speeches ("hortatory platitudes") to a proactive, preventive ("prophylactic") apparatus for strategic calibration and deterrence before crises escalate. ("Palliative" only eases symptoms afterward; "perfunctory" means superficial; "prosaic" means dull.)',
    explanationHi:
      '"Prophylactic" का अर्थ निवारक/रोकथाम करने वाला (preventive) होता है। रणनीतिक संतुलन और प्रतिरोध (deterrence) के लिए एक निवारक तंत्र के संदर्भ में "prophylactic" सबसे उपयुक्त है।',
  },
];

export const FULL_MOCK_05_OCT_SHIFT3: MockTest = {
  id: 'ssc-cgl-05-oct-shift3-2026-full-mock',
  title: 'SSC CGL Tier-1 2026 (05 Oct Shift 3) — Full Mock',
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
  createdAt: '2026-11-22T07:15:00.000Z',
  questions: [
    ...SECTION_1_REASONING_O5S3,
    ...SECTION_2_GA_O5S3,
    ...SECTION_3_QUANT_O5S3,
    ...SECTION_4_ENGLISH_O5S3,
  ],
};
