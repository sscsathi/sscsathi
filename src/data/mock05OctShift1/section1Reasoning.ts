import { Question } from '../../types/exam';

export const SECTION_1_REASONING_O5S1: Question[] = [
  {
    id: 'cgl26_05o1_q1',
    topic: 'Alphabetical Positions',
    questionEn:
      'In the word "TECHNOLOGY", what is the difference in index (A=1 to Z=26) between the 3rd and 7th letters?',
    questionHi:
      'शब्द "TECHNOLOGY" में 3rd और 7th अक्षरों के बीच सूचकांक (A=1 से Z=26) में क्या अंतर है?',
    optionsEn: ['3', '5', '7', '9'],
    optionsHi: ['3', '5', '7', '9'],
    correctIndex: 3,
    explanationEn:
      'Letters in "TECHNOLOGY": T(1) E(2) C(3) H(4) N(5) O(6) L(7) O(8) G(9) Y(10).\n• 3rd letter = C → Alphabetical index = 3\n• 7th letter = L → Alphabetical index = 12\n• Difference = |12 − 3| = 9.',
    explanationHi:
      'शब्द "TECHNOLOGY" में:\n• 3रा अक्षर = C (स्थान मान = 3)\n• 7वाँ अक्षर = L (स्थान मान = 12)\n• अभीष्ट अंतर = 12 − 3 = 9।',
  },
  {
    id: 'cgl26_05o1_q2',
    topic: 'Number System (Remainder)',
    questionEn:
      'A number, when divided by 5 or 10, leaves a remainder of 3. What will be the remainder when the square of that number is divided by 5?',
    questionHi:
      'किसी संख्या को 5 या 10 से विभाजित करने पर शेषफल 3 बचता है। उस संख्या के वर्ग को 5 से विभाजित करने पर शेषफल क्या होगा?',
    optionsEn: ['3', '4', '1', '2'],
    optionsHi: ['3', '4', '1', '2'],
    correctIndex: 1,
    explanationEn:
      'Short Trick: Square the remainder directly and divide by the divisor.\n• Given remainder = 3 ⇒ 3² = 9.\n• Dividing 9 by 5 leaves remainder = 9 mod 5 = 4.\n(Verification: Take number = 13 → 13² = 169 = 5 × 33 + 4.)',
    explanationHi:
      'शॉर्ट ट्रिक: सीधे शेषफल का वर्ग करके भाजक (5) से भाग दें:\n• 3² = 9\n• 9 को 5 से विभाजित करने पर शेषफल = 4 प्राप्त होता है।',
  },
  {
    id: 'cgl26_05o1_q3',
    topic: 'Coded Blood Relations',
    questionEn:
      "Directions: Use the following definitions to answer the question that follows.\n1. P # Q means P is the father of Q.\n2. P $ Q means P is the sister of Q.\n3. P * Q means P is the son of Q.\n4. P ^ Q means P is the wife of Q.\n5. P ! Q means P is the mother of Q.\n\nQuestion: If 'M ! N * O # P ^ Q', how is Q related to M?",
    questionHi:
      "निर्देश: नीचे दिए गए सवाल का जवाब देने के लिए इन परिभाषाओं का इस्तेमाल करें।\n1. P # Q का मतलब है कि P, Q का पिता है।\n2. P $ Q का मतलब है कि P, Q की बहन है।\n3. P * Q का मतलब है कि P, Q का बेटा है।\n4. P ^ Q का मतलब है कि P, Q की पत्नी है।\n5. P ! Q का मतलब है कि P, Q की माँ है।\n\nसवाल: अगर 'M ! N * O # P ^ Q' है, तो Q का M से क्या रिश्ता है?",
    optionsEn: ['Son-in-law', 'Son', 'Brother', 'Paternal Uncle'],
    optionsHi: ['दामाद', 'बेटा', 'भाई', 'पिता के भाई (चाचा/ताऊ)'],
    correctIndex: 0,
    explanationEn:
      'Decoding M ! N * O # P ^ Q step-by-step:\n• M ! N → M is the mother of N.\n• N * O → N is the son of O ⇒ M (wife) and O (husband) are married.\n• O # P → O is the father of P ⇒ P is the child of M and O.\n• P ^ Q → P is the wife of Q ⇒ P is M’s daughter and Q is P’s husband.\nTherefore, Q is the Son-in-law of M.',
    explanationHi:
      'M ! N * O # P ^ Q को हल करने पर:\n• M, N की माँ है और N, O का बेटा है ⇒ M और O पति-पत्नी हैं।\n• O, P का पिता है और P, Q की पत्नी है ⇒ P, M की पुत्री है और Q उसका पति है।\nअतः Q, M का दामाद (Son-in-law) है।',
  },
  {
    id: 'cgl26_05o1_q4',
    topic: 'Letter Series',
    questionEn:
      'Study the pattern in the given series and find the next set of letters in the series.\nHAB, DBX, ZCT, ?',
    questionHi:
      'दी गई श्रेणी में प्रतिरूप का अध्ययन कीजिए और श्रेणी में अक्षरों का अगला समूह ज्ञात कीजिए।\nHAB, DBX, ZCT, ?',
    optionsEn: ['VDP', 'VCP', 'VEQ', 'VDR'],
    optionsHi: ['VDP', 'VCP', 'VEQ', 'VDR'],
    correctIndex: 0,
    explanationEn:
      'Analyze each letter position across the terms:\n• 1st letter (−4): H(8) → D(4) → Z(26) → V(22)\n• 2nd letter (+1): A(1) → B(2) → C(3) → D(4)\n• 3rd letter (−4): B(2) → X(24) → T(20) → P(16)\nCombining them gives VDP.',
    explanationHi:
      'प्रत्येक स्थान के अक्षरों का क्रम:\n• पहला अक्षर (−4): H → D → Z → V\n• दूसरा अक्षर (+1): A → B → C → D\n• तीसरा अक्षर (−4): B → X → T → P\nअतः अगला समूह VDP होगा।',
  },
  {
    id: 'cgl26_05o1_q5',
    topic: 'Alphanumeric Classification',
    questionEn:
      'Which of the following centre code does not follow the pattern of "two consonants followed by the sum of their positions in the alphabet"?',
    questionHi:
      'इनमें से कौन-सा सेंटर कोड "दो कॉन्सोनेंट और उसके बाद अल्फाबेट में उनकी पोज़िशन का योग" वाले पैटर्न का पालन नहीं करता है?',
    optionsEn: ['BD6', 'CF9', 'DH11', 'GL19'],
    optionsHi: ['BD6', 'CF9', 'DH11', 'GL19'],
    correctIndex: 2,
    explanationEn:
      'Checking the sum of alphabetical positions (A=1..Z=26) of the two consonants:\n• BD6: B(2) + D(4) = 6 (Matches)\n• CF9: C(3) + F(6) = 9 (Matches)\n• DH11: D(4) + H(8) = 12 ≠ 11 (Does NOT match)\n• GL19: G(7) + L(12) = 19 (Matches)\nHence, DH11 does not follow the pattern.',
    explanationHi:
      'दोनों व्यंजनों के वर्णमाला स्थान मान का योग जाँचने पर:\n• BD → 2 + 4 = 6 (सही)\n• CF → 3 + 6 = 9 (सही)\n• DH → 4 + 8 = 12 (यहाँ 11 दिया है — गलत)\n• GL → 7 + 12 = 19 (सही)\nअतः DH11 पैटर्न का पालन नहीं करता।',
  },
  {
    id: 'cgl26_05o1_q6',
    topic: 'Decision Making & Situational Judgement',
    questionEn:
      'During a high-stakes client meeting, two of your coworkers suddenly engage in a heated argument. The client becomes visibly uncomfortable and stressed by the unprofessional display. What is the most effective and professional action for you to take to manage the situation?',
    questionHi:
      'एक उच्च-महत्त्वपूर्ण ग्राहक बैठक के दौरान, आपके दो सहकर्मी अचानक तीखी बहस में उलझ जाते हैं। इस गैर-पेशेवर व्यवहार से ग्राहक स्पष्ट रूप से असहज और तनावग्रस्त हो जाता है। स्थिति का प्रबंधन करने के लिए आपको सबसे प्रभावी और पेशेवर कदम क्या उठाना चाहिए?',
    optionsEn: [
      'Choose to let the heated argument play out completely before deciding to offer an explanation or apology to the client after the meeting has concluded.',
      'Decisively redirect the conversation toward the primary meeting objectives and suggest that your coworkers continue their discussion at a later time in a private setting.',
      'Immediately intervene to end the client meeting abruptly and firmly ask every person present in the room to leave the premises to stop the conflict.',
      'Intervene by taking the client out of the room entirely while your coworkers continue to argue amongst themselves until they decide to stop on their own.',
    ],
    optionsHi: [
      'तीखी बहस को पूरी तरह चलने दें और बैठक समाप्त होने के बाद ग्राहक को स्पष्टीकरण या क्षमा-याचना देने का निर्णय लें।',
      'बातचीत को दृढ़तापूर्वक बैठक के मुख्य उद्देश्यों की ओर पुनर्निर्देशित करें और सुझाव दें कि आपके सहकर्मी अपनी चर्चा बाद में किसी निजी वातावरण में जारी रखें।',
      'ग्राहक बैठक को तुरंत बीच में समाप्त करने के लिए हस्तक्षेप करें और विवाद रोकने हेतु वहाँ उपस्थित प्रत्येक व्यक्ति को परिसर छोड़ने के लिए दृढ़तापूर्वक कहें।',
      'ग्राहक को पूरी तरह कमरे से बाहर ले जाकर हस्तक्षेप करें, जबकि आपके सहकर्मी आपस में तब तक बहस जारी रखें जब तक वे स्वयं रुकने का निर्णय न लें।',
    ],
    correctIndex: 1,
    explanationEn:
      'Maintaining composure and redirecting the meeting back to its business objectives—while politely deferring the internal disagreement to a private discussion—protects client trust and demonstrates strong workplace professionalism.',
    explanationHi:
      'पेशेवर प्रबंधन के अनुसार बातचीत को शांत व दृढ़तापूर्वक बैठक के मुख्य एजेंडे पर वापस लाना और सहकर्मियों के मतभेद को बाद में निजी रूप से सुलझाने का सुझाव देना सबसे प्रभावी कदम है।',
  },
  {
    id: 'cgl26_05o1_q7',
    topic: 'Decision Making & Administrative Ethics',
    questionEn:
      'Read the question carefully and choose the most appropriate option.\nYou are a district officer. A new road project requires the relocation of several street vendors who depend on the area for their livelihood. What would you do?',
    questionHi:
      'प्रश्न को ध्यानपूर्वक पढ़ें और सबसे उपयुक्त विकल्प चुनें।\nआप एक जिला अधिकारी हैं। एक नई सड़क परियोजना के लिए कई सड़क विक्रेताओं का स्थानांतरण आवश्यक है, जो अपनी आजीविका के लिए उस क्षेत्र पर निर्भर हैं। आप क्या करेंगे?',
    optionsEn: [
      'Remove all vendors immediately without discussing rehabilitation arrangements first.',
      'Stop the road project completely because some vendors are opposing.',
      'Delay every decision indefinitely until the issue disappears naturally somehow.',
      'Discuss relocation options and ensure suitable support for affected vendors.',
    ],
    optionsHi: [
      'पुनर्वास की व्यवस्थाओं पर पहले चर्चा किए बिना सभी विक्रेताओं को तुरंत हटा देना।',
      'कुछ विक्रेताओं के विरोध करने के कारण सड़क परियोजना को पूरी तरह रोक देना।',
      'हर निर्णय को अनिश्चितकाल के लिए टाल देना, जब तक कि किसी प्रकार यह समस्या स्वाभाविक रूप से समाप्त न हो जाए।',
      'स्थानांतरण के विकल्पों पर चर्चा करना तथा प्रभावित विक्रेताओं के लिए उपयुक्त सहायता सुनिश्चित करना।',
    ],
    correctIndex: 3,
    explanationEn:
      'A responsible public administrator balances public infrastructure development with social welfare by consulting affected stakeholders, arranging fair relocation spaces, and ensuring livelihood support.',
    explanationHi:
      'एक संवेदनशील व प्रभावी जिला अधिकारी विकास कार्य और आजीविका संरक्षण में संतुलन बनाता है—अतः प्रभावित विक्रेताओं से संवाद कर उचित पुनर्वास व सहायता सुनिश्चित करना सर्वोत्तम विकल्प है।',
  },
  {
    id: 'cgl26_05o1_q8',
    topic: 'Address Matching',
    questionEn:
      'Choose the option which is exactly similar to: Flat 302, Anant Residency, Dhole Patil Road, Pune-411001',
    questionHi:
      'उस विकल्प का चयन करें जो बिल्कुल समान हो: Flat 302, Anant Residency, Dhole Patil Road, Pune-411001',
    optionsEn: [
      'Flat 302, Anant Residency, Dhole Patil Road, Pune-411001',
      'Flat 302, Anant Residency, Dhole Patil Road, Agra-411001',
      'Flat 320, Anant Residency, Dhole Patil Road, Pune-411001',
      'Flat 302, Anant Residency Dhole Patil Road, Pune-411001',
    ],
    optionsHi: [
      'Flat 302, Anant Residency, Dhole Patil Road, Pune-411001',
      'Flat 302, Anant Residency, Dhole Patil Road, Agra-411001',
      'Flat 320, Anant Residency, Dhole Patil Road, Pune-411001',
      'Flat 302, Anant Residency Dhole Patil Road, Pune-411001',
    ],
    correctIndex: 0,
    explanationEn:
      'Comparing each character and punctuation mark:\n• (A) Exact match.\n• (B) Has "Agra" instead of "Pune".\n• (C) Has "Flat 320" instead of "Flat 302".\n• (D) Missing comma after "Anant Residency".\nHence, Option (A) is correct.',
    explanationHi:
      'प्रत्येक शब्द और विराम चिह्न के मिलान पर:\n• विकल्प (A) पूर्णतः समान है।\n• (B) में Agra, (C) में Flat 320 और (D) में Residency के बाद अल्पविराम (,) छूटा है।',
  },
  {
    id: 'cgl26_05o1_q9',
    topic: 'Letter Analogy',
    questionEn:
      'What should come in place of question mark (?) in the following analogy?\nZXV : YWU :: TRP : ?',
    questionHi: 'निम्नलिखित सादृश्य में प्रश्न चिह्न (?) के स्थान पर क्या आएगा?\nZXV : YWU :: TRP : ?',
    optionsEn: ['TQO', 'RON', 'SRO', 'SQO'],
    optionsHi: ['TQO', 'RON', 'SRO', 'SQO'],
    correctIndex: 3,
    explanationEn:
      'Each letter shifts backward by 1 (−1):\n• Z − 1 = Y, X − 1 = W, V − 1 = U (ZXV → YWU)\nApplying the same (−1, −1, −1) pattern to TRP:\n• T − 1 = S, R − 1 = Q, P − 1 = O ⇒ SQO.',
    explanationHi:
      'प्रत्येक अक्षर में −1 का नियम लागू है:\n• Z − 1 = Y, X − 1 = W, V − 1 = U\nइसी प्रकार TRP में:\n• T − 1 = S, R − 1 = Q, P − 1 = O ⇒ SQO।',
  },
  {
    id: 'cgl26_05o1_q10',
    topic: 'Syllogism',
    questionEn:
      'In the given question, a few statements have been given followed by conclusions based on them. Consider the statements to be true and answer which of the given conclusions logically follow the statement.\n\nStatements:\n1. Some journalists are activists.\n2. No activist is impartial.\n3. All impartial persons are trusted.\n\nConclusions:\nI. Some journalists are not impartial.\nII. No journalist is trusted.\nIII. Some activists are not trusted.\nIV. All trusted persons are impartial.',
    questionHi:
      'दिए गए प्रश्न में, कुछ कथन दिए गए हैं और उनके बाद उन पर आधारित निष्कर्ष दिए गए हैं। कथनों को सत्य मानते हुए यह तय कीजिए कि दिए गए निष्कर्षों में से कौन-से निष्कर्ष तार्किक रूप से कथनों का अनुसरण करते हैं।\n\nकथन:\n1. कुछ पत्रकार, एक्टिविस्ट हैं।\n2. कोई भी एक्टिविस्ट निष्पक्ष नहीं है।\n3. सभी निष्पक्ष लोगों पर भरोसा किया जाता है।\n\nनिष्कर्ष:\nI. कुछ पत्रकार, निष्पक्ष नहीं हैं।\nII. किसी भी पत्रकार पर भरोसा नहीं किया जाता है।\nIII. कुछ एक्टिविस्ट पर भरोसा नहीं किया जाता है।\nIV. सभी भरोसेमंद लोग निष्पक्ष होते हैं।',
    optionsEn: [
      'Only I and III follow',
      'Only I, II and III follow',
      'Only III and IV follow',
      'Only I follows',
    ],
    optionsHi: [
      'केवल I और III अनुसरण करते हैं',
      'केवल I, II और III अनुसरण करते हैं',
      'केवल III और IV अनुसरण करते हैं',
      'केवल I अनुसरण करता है',
    ],
    correctIndex: 3,
    explanationEn:
      '• Conclusion I: Since some journalists are activists and no activist is impartial, those journalists who are activists cannot be impartial → FOLLOWS.\n• Conclusion II: Journalists could still be trusted (even activists could be inside the larger "trusted" circle) → Does not follow.\n• Conclusion III: "All impartial are trusted" does not prevent all activists from being trusted outside the impartial circle → Does not follow.\n• Conclusion IV: Reverse of "All impartial are trusted" is not necessarily true → Does not follow.\nHence, Only I follows.',
    explanationHi:
      '• निष्कर्ष I: जो पत्रकार एक्टिविस्ट हैं वे निष्पक्ष नहीं हो सकते ⇒ कुछ पत्रकार निष्पक्ष नहीं हैं (सही)।\n• निष्कर्ष II, III और IV निश्चित रूप से सिद्ध नहीं होते (एक्टिविस्ट भी भरोसेमंद समूह के भीतर आ सकते हैं)।\nअतः केवल निष्कर्ष I अनुसरण करता है।',
  },
  {
    id: 'cgl26_05o1_q11',
    topic: 'Emotional Intelligence',
    questionEn:
      'A department manager must deliver bad news about a high-stakes, rejected project proposal to a team that invested months of hard work and late nights into its development.\nWhich of the following approaches demonstrates the highest level of emotional intelligence (EQ)?',
    questionHi:
      'एक विभाग प्रबंधक को उस टीम को एक उच्च जोखिम वाले, अस्वीकृत परियोजना प्रस्ताव के बारे में बुरी खबर देनी होगी जिसने इसके विकास में महीनों की कड़ी मेहनत और देर रात तक काम किया है।\nनिम्नलिखित में से कौन सा दृष्टिकोण भावनात्मक बुद्धिमत्ता (EQ) के उच्चतम स्तर को प्रदर्शित करता है?',
    optionsEn: [
      'Deliver the news via a brief department-wide email to avoid an uncomfortable face-to-face discussion.',
      'Shift immediately to the next project during a briefing to maintain short-term morale.',
      'Blame senior leadership or the client privately to deflect accountability and protect team feelings.',
      'Schedule an in-person meeting to validate their disappointment, appreciate their effort, and discuss lessons learned.',
    ],
    optionsHi: [
      'एक असहज आमने-सामने की चर्चा से बचने के लिए एक संक्षिप्त विभाग-व्यापी ईमेल के माध्यम से समाचार देना।',
      'अल्पकालिक मनोबल बनाए रखने के लिए एक ब्रीफिंग के दौरान तुरंत अगली परियोजना पर आगे बढ़ जाना।',
      'जवाबदेही से बचने और टीम की भावनाओं की रक्षा करने के लिए निजी तौर पर वरिष्ठ नेतृत्व या क्लाइंट को दोष देना।',
      'उनकी निराशा को स्वीकार करने, उनके प्रयास की सराहना करने, और सीखे गए पाठों पर चर्चा करने के लिए एक आमने-सामने की बैठक निर्धारित करना।',
    ],
    correctIndex: 3,
    explanationEn:
      'High emotional intelligence combines empathy, transparency, recognition of effort, and constructive growth—all achieved by holding a respectful in-person conversation that acknowledges feelings and focuses on lessons learned.',
    explanationHi:
      'उच्च भावनात्मक बुद्धिमत्ता (EQ) में सहानुभूति, पारदर्शिता और सकारात्मक मार्गदर्शन शामिल होता है। आमने-सामने बैठक कर टीम की मेहनत की सराहना करना और सीखे गए पाठों पर चर्चा करना सर्वोत्तम है।',
  },
  {
    id: 'cgl26_05o1_q12',
    topic: 'Course of Action',
    questionEn:
      'Urban traffic congestion is leading to massive loss of productivity. What is the most effective solution the government should implement?',
    questionHi:
      'शहरी यातायात जाम (Urban Traffic Congestion) के कारण उत्पादकता में भारी कमी हो रही है। सरकार को सबसे प्रभावी समाधान के रूप में क्या लागू करना चाहिए?',
    optionsEn: [
      'Raise prices of all fuels.',
      'Build better public transit networks.',
      'Limit cars per household units.',
      'Widen every city road lane.',
    ],
    optionsHi: [
      'सभी ईंधनों की कीमतों में वृद्धि करना।',
      'बेहतर सार्वजनिक परिवहन नेटवर्क का निर्माण करना।',
      'प्रति परिवार वाहनों की संख्या सीमित करना।',
      'शहर की प्रत्येक सड़क लेन को चौड़ा करना।',
    ],
    correctIndex: 1,
    explanationEn:
      'Expanding efficient, reliable public transit (metro, buses, commuter rail) directly reduces private vehicle dependence sustainably without causing inflation (raising fuel prices) or impractical physical/legal restrictions.',
    explanationHi:
      'बेहतर सार्वजनिक परिवहन नेटवर्क (मेट्रो, बस सेवा आदि) का विकास शहरी जाम को कम करने का सबसे स्थायी, व्यावहारिक और प्रभावी समाधान है।',
  },
  {
    id: 'cgl26_05o1_q13',
    topic: 'Number Series',
    questionEn: 'What is the next number in the series?\n2, 6, 18, ___',
    questionHi: 'निम्नलिखित श्रृंखला में अगले स्थान पर कौन सी संख्या होगी?\n2, 6, 18, ___',
    optionsEn: ['56', '54', '52', '58'],
    optionsHi: ['56', '54', '52', '58'],
    correctIndex: 1,
    explanationEn:
      'Each term is multiplied by 3:\n• 2 × 3 = 6\n• 6 × 3 = 18\n• 18 × 3 = 54.',
    explanationHi: 'प्रत्येक पद को 3 से गुणा किया गया है:\n2 × 3 = 6, 6 × 3 = 18, 18 × 3 = 54।',
  },
  {
    id: 'cgl26_05o1_q14',
    topic: 'Decision Making & Work-Life Balance',
    questionEn:
      'A regular client frequently calls you after working hours to discuss personal issues that are unrelated to your business contract. These calls are starting to affect your work-life balance. What should you do?',
    questionHi:
      'एक नियमित ग्राहक कार्य समय के बाद अक्सर आपको अपने व्यक्तिगत मुद्दों पर चर्चा करने के लिए फोन करता है, जिनका आपके व्यावसायिक अनुबंध से कोई संबंध नहीं है। ये कॉल अब आपके कार्य-जीवन संतुलन को प्रभावित करने लगी हैं। आपको क्या करना चाहिए?',
    optionsEn: [
      'Ignore their calls completely without explanation.',
      'Politely note you value the relationship but must keep calls professional to ensure good service.',
      'Continue taking the calls to ensure the client stays satisfied, even if it causes you stress.',
      'Tell the client that you will charge them an hourly rate for personal consulting time.',
    ],
    optionsHi: [
      'बिना कोई स्पष्टीकरण दिए उनकी कॉलों को पूरी तरह अनदेखा कर दें।',
      'विनम्रतापूर्वक बताएं कि आप इस संबंध को महत्व देते हैं, लेकिन अच्छी सेवा सुनिश्चित करने के लिए बातचीत को व्यावसायिक रखना आवश्यक है।',
      'ग्राहक को संतुष्ट रखने के लिए कॉल लेना जारी रखें, भले ही इससे आपको तनाव हो।',
      'ग्राहक को बताएं कि व्यक्तिगत परामर्श के समय के लिए आप उनसे प्रति घंटा शुल्क लेंगे।',
    ],
    correctIndex: 1,
    explanationEn:
      'Setting clear, respectful professional boundaries preserves both client goodwill and healthy work-life balance without being rude or burning out.',
    explanationHi:
      'विनम्रता से व्यावसायिक सीमाएँ तय करना ग्राहक संबंध और कार्य-जीवन संतुलन दोनों को सुरक्षित रखता है। अतः विकल्प (B) सही है।',
  },
  {
    id: 'cgl26_05o1_q15',
    topic: 'Statement & Conclusions',
    questionEn:
      'Read the statement carefully and assume it to be true. Then examine the two conclusions given below it and decide which conclusion(s), if any, logically follow from the statement.\n\nStatement:\nA national health mission has expanded telemedicine services to rural regions to improve accessibility to specialist medical consultations.\n\nConclusions:\nI. Rural areas face limitations in accessing healthcare specialists.\nII. The initiative aims to improve healthcare accessibility.',
    questionHi:
      'कथन को ध्यानपूर्वक पढ़िए और उसे सत्य मानिए। फिर उसके नीचे दिए गए दो निष्कर्षों की जाँच कीजिए तथा निर्धारित कीजिए कि कौन-सा/कौन-से निष्कर्ष, यदि कोई हो, कथन से तार्किक रूप से अनुसरण करते हैं।\n\nकथन:\nएक राष्ट्रीय स्वास्थ्य मिशन ने विशेषज्ञ चिकित्सकीय परामर्शों तक पहुँच में सुधार करने के लिए ग्रामीण क्षेत्रों में टेलीमेडिसिन सेवाओं का विस्तार किया है।\n\nनिष्कर्ष:\nI. ग्रामीण क्षेत्रों में विशेषज्ञ स्वास्थ्य सेवाओं तक पहुँच की सीमाएँ विद्यमान हैं।\nII. इस पहल का उद्देश्य स्वास्थ्य सेवाओं की पहुँच में सुधार करना है।',
    optionsEn: [
      'Neither conclusion I nor conclusion II follows',
      'Only conclusion II follows',
      'Only conclusion I follows',
      'Both conclusions I and II follow',
    ],
    optionsHi: [
      'न तो निष्कर्ष I और न ही निष्कर्ष II अनुसरण करता है।',
      'केवल निष्कर्ष II अनुसरण करता है।',
      'केवल निष्कर्ष I अनुसरण करता है।',
      'निष्कर्ष I और II दोनों अनुसरण करते हैं।',
    ],
    correctIndex: 3,
    explanationEn:
      '• Conclusion I follows because expanding telemedicine specifically "to improve accessibility to specialist medical consultations" in rural regions implies rural areas currently face limitations in specialist access.\n• Conclusion II follows directly from the stated purpose of the mission.\nHence, both conclusions I and II follow.',
    explanationHi:
      '• निष्कर्ष I: ग्रामीण क्षेत्रों में विशेषज्ञ परामर्श तक पहुँच सुधारने की आवश्यकता दर्शाती है कि वहाँ पहुँच की सीमाएँ हैं।\n• निष्कर्ष II: कथन में सीधे पहल का उद्देश्य बताया गया है।\nअतः निष्कर्ष I और II दोनों अनुसरण करते हैं।',
  },
  {
    id: 'cgl26_05o1_q16',
    topic: 'Coding-Decoding',
    questionEn:
      'In a certain code language, "THINGS" is written as "TiIoGt". How will "BRIGHT" be written in the same code language?',
    questionHi:
      'एक खास कोड भाषा में, "THINGS" को "TiIoGt" लिखा जाता है। उसी कोड भाषा में "BRIGHT" को कैसे लिखा जाएगा?',
    optionsEn: ['BSIhHU', 'BsIHHu', 'BsihHu', 'BsIhHu'],
    optionsHi: ['BSIhHU', 'BsIHHu', 'BsihHu', 'BsIhHu'],
    correctIndex: 3,
    explanationEn:
      'Pattern for odd and even letter positions in THINGS → TiIoGt:\n• Odd positions (1st, 3rd, 5th): Same letter in UPPERCASE → T, I, G\n• Even positions (2nd, 4th, 6th): Next letter (+1) in lowercase → H+1=i, N+1=o, S+1=t\nApplying to BRIGHT:\n• 1st: B → B\n• 2nd: R + 1 → s\n• 3rd: I → I\n• 4th: G + 1 → h\n• 5th: H → H\n• 6th: T + 1 → u\nResult: BsIhHu.',
    explanationHi:
      'पैटर्न (THINGS → TiIoGt):\n• विषम स्थान (1, 3, 5): वही अक्षर बड़े (Capital) रूप में।\n• सम स्थान (2, 4, 6): अगला अक्षर (+1) छोटे (small) रूप में।\nBRIGHT पर लागू करने पर: B, R+1(s), I, G+1(h), H, T+1(u) ⇒ BsIhHu।',
  },
  {
    id: 'cgl26_05o1_q17',
    topic: 'Statement & Assumptions',
    questionEn:
      'The plant manager has introduced a mandatory virtual reality (VR) safety training program for all employees handling high-voltage machinery to reduce workplace accidents. Which assumption underlies this program?',
    questionHi:
      'प्लांट प्रबंधक ने कार्यस्थल पर होने वाली दुर्घटनाओं को कम करने के लिए उच्च-वोल्टेज मशीनरी का संचालन करने वाले सभी कर्मचारियों हेतु एक अनिवार्य वर्चुअल रियलिटी (VR) सुरक्षा प्रशिक्षण कार्यक्रम शुरू किया है। इस कार्यक्रम के आधार में कौन-सी मान्यता निहित है?',
    optionsEn: [
      'VR training provides a level of practical exposure that effectively improves real-world employee safety.',
      'All employees have the cognitive ability to adapt to advanced digital interfaces without any difficulty.',
      'The currently implemented safety training modules have been proven to be completely useless by staff.',
      'The high-voltage machinery currently in use is impossible to operate safely without specialized training.',
    ],
    optionsHi: [
      'VR प्रशिक्षण वास्तविक परिस्थितियों जैसा व्यावहारिक अनुभव प्रदान करता है, जो कर्मचारियों की वास्तविक कार्यस्थल सुरक्षा को प्रभावी रूप से बेहतर बनाता है।',
      'सभी कर्मचारियों में बिना किसी कठिनाई के उन्नत डिजिटल इंटरफेस के अनुरूप ढलने की संज्ञानात्मक क्षमता होती है।',
      'वर्तमान में लागू सुरक्षा प्रशिक्षण मॉड्यूल कर्मचारियों द्वारा पूरी तरह निरर्थक सिद्ध किए जा चुके हैं।',
      'वर्तमान में उपयोग की जा रही उच्च-वोल्टेज मशीनरी को विशेष प्रशिक्षण के बिना सुरक्षित रूप से संचालित करना असंभव है।',
    ],
    correctIndex: 0,
    explanationEn:
      'Introducing mandatory VR safety training specifically to reduce workplace accidents directly assumes that VR simulation transfers effectively to safer real-world operation. Options (B), (C), and (D) rely on extreme claims ("without any difficulty", "completely useless", "impossible").',
    explanationHi:
      'दुर्घटनाएँ कम करने के लिए VR प्रशिक्षण अनिवार्य करने के पीछे यह स्वाभाविक मान्यता है कि VR व्यावहारिक अनुभव देकर वास्तविक सुरक्षा सुधारता है। अन्य विकल्प अतिवादी दावे करते हैं।',
  },
  {
    id: 'cgl26_05o1_q18',
    topic: 'Word Analogy',
    questionEn:
      'Select the option that is related to the third word in the same way as the second word is related to the first word. (The words must be considered as meaningful English words and must not be related to each other based on the number of letters/number of consonants/vowels in the word.)\nSimmer : Boil :: Chill : ?',
    questionHi:
      'उस विकल्प का चयन कीजिए जो तीसरे शब्द से उसी प्रकार संबंधित है जैसे दूसरा शब्द पहले शब्द से संबंधित है। (शब्दों को सार्थक शब्द माना जाना चाहिए और शब्द में अक्षरों/व्यंजनों/स्वरों की संख्या के आधार पर एक-दूसरे से संबंधित नहीं होना चाहिए।)\nधीमी आँच पर पकाना (Simmer) : उबालना (Boil) :: ठंडा करना (Chill) : ?',
    optionsEn: ['Cool', 'Freeze', 'Warm', 'Melt'],
    optionsHi: ['शीतल करना (Cool)', 'जमाना (Freeze)', 'गर्म करना (Warm)', 'पिघलाना (Melt)'],
    correctIndex: 1,
    explanationEn:
      'Relationship of degree/intensity:\n• Simmer is a milder stage of heating, while Boil is the extreme/intense stage.\n• Similarly, Chill is a milder stage of cooling, while Freeze is the extreme/intense stage.',
    explanationHi:
      'तीव्रता (Degree) का संबंध:\n• Simmer (धीमी आँच पर पकाना) की चरम अवस्था Boil (उबालना) है।\n• उसी प्रकार Chill (ठंडा करना) की चरम अवस्था Freeze (जमाना) है।',
  },
  {
    id: 'cgl26_05o1_q19',
    topic: 'Arithmetic Reasoning (Simple Interest)',
    questionEn:
      'What is the simple interest earned on an investment of ₹5,000 for a period of 3 years at an annual interest rate of 5%?',
    questionHi:
      '5% की वार्षिक ब्याज दर पर 3 वर्ष की अवधि के लिए ₹5,000 के निवेश पर अर्जित साधारण ब्याज क्या है?',
    optionsEn: ['₹750', '₹800', '₹850', '₹900'],
    optionsHi: ['₹750', '₹800', '₹850', '₹900'],
    correctIndex: 0,
    explanationEn: 'Simple Interest = (P × R × T) / 100 = (5000 × 5 × 3) / 100 = ₹750.',
    explanationHi: 'साधारण ब्याज (SI) = (मूलधन × दर × समय) / 100 = (5000 × 5 × 3) / 100 = ₹750।',
  },
  {
    id: 'cgl26_05o1_q20',
    topic: 'Statement & Inferences',
    questionEn:
      "Instruction: Choose the inference that is clearly supported by the statement.\nStatement: All applicants accepted into the highly competitive Master's program scored in the top 5% on the entrance examination, and submitted a strong letter of recommendation from a university professor.\n\nInferences:\nInference I: An applicant who did not score in the top 5% on the entrance examination was not accepted into the Master's program.\nInference II: A strong letter of recommendation from a university professor is the sole factor determining acceptance into the Master's program.",
    questionHi:
      'निर्देश: उस निष्कर्ष का चयन कीजिए जो कथन द्वारा स्पष्ट रूप से समर्थित हो।\nकथन: अत्यधिक प्रतिस्पर्धी मास्टर कार्यक्रम में स्वीकृत सभी आवेदकों ने प्रवेश परीक्षा में शीर्ष 5% में अंक प्राप्त किए और एक विश्वविद्यालय के प्रोफेसर से एक सशक्त अनुशंसा पत्र प्रस्तुत किया।\n\nनिष्कर्ष:\nनिष्कर्ष I: एक आवेदक जिसने प्रवेश परीक्षा में शीर्ष 5% में अंक प्राप्त नहीं किए, उसे मास्टर कार्यक्रम में स्वीकार नहीं किया गया।\nनिष्कर्ष II: एक विश्वविद्यालय के प्रोफेसर से प्राप्त एक सशक्त अनुशंसा पत्र ही मास्टर कार्यक्रम में स्वीकृति निर्धारित करने वाला एकमात्र कारक है।',
    optionsEn: [
      'Only Inference I follows',
      'Only Inference II follows',
      'Both Inferences I and II follow',
      'Neither Inference I nor II follows',
    ],
    optionsHi: [
      'केवल अनुमान I अनुसरण करता है',
      'केवल अनुमान II अनुसरण करता है',
      'दोनों निष्कर्ष I और II अनुसरण करते हैं',
      'न तो अनुमान I और न ही II अनुसरण करता है',
    ],
    correctIndex: 0,
    explanationEn:
      '• Inference I is the valid logical contrapositive: Since ALL accepted applicants scored in the top 5%, anyone who did NOT score in the top 5% could NOT have been accepted → Follows.\n• Inference II is false because the statement explicitly lists at least two criteria (top 5% entrance score AND strong recommendation letter), so the letter is not the "sole factor".',
    explanationHi:
      '• निष्कर्ष I: चूँकि सभी स्वीकृत आवेदक शीर्ष 5% में थे, अतः जो शीर्ष 5% में नहीं था वह स्वीकार नहीं हुआ — तार्किक रूप से सत्य है।\n• निष्कर्ष II: कथन में दो शर्तें दी गई हैं, इसलिए अनुशंसा पत्र "एकमात्र कारक" नहीं हो सकता। अतः केवल I अनुसरण करता है।',
  },
  {
    id: 'cgl26_05o1_q21',
    topic: 'Coding-Decoding',
    questionEn: 'If DOCTOR is coded as EPDUPS, how is EPDUPS coded?',
    questionHi: 'यदि DOCTOR को EPDUPS लिखा जाता है, तो EPDUPS को किस प्रकार लिखा जाएगा?',
    optionsEn: ['FQEVQT', 'FQFVRU', 'FQEVRT', 'FQEVQU'],
    optionsHi: ['FQEVQT', 'FQFVRU', 'FQEVRT', 'FQEVQU'],
    correctIndex: 0,
    explanationEn:
      'Each letter shifts forward by +1:\n• D+1=E, O+1=P, C+1=D, T+1=U, O+1=P, R+1=S → EPDUPS.\nApplying +1 to every letter of EPDUPS:\n• E+1=F, P+1=Q, D+1=E, U+1=V, P+1=Q, S+1=T ⇒ FQEVQT.',
    explanationHi:
      'प्रत्येक अक्षर में +1 जोड़ा गया है (DOCTOR → EPDUPS)।\nEPDUPS के प्रत्येक अक्षर में +1 जोड़ने पर:\nE→F, P→Q, D→E, U→V, P→Q, S→T ⇒ FQEVQT।',
  },
  {
    id: 'cgl26_05o1_q22',
    topic: 'Address Matching',
    questionEn:
      'Carefully examine the address below and identify which of the following alternatives matches the given address.\nMs. A. Mishra\n8902 Crescent View, 10th Floor, Malviya Nagar\nDelhi - 110017\n\nAlternatives:\nA) Ms. A. Mishra, 8902 Crescent View, 10th Floor, Malviya Nagar, Delhi - 110017\nB) Ms. A. Mishra, 8902 Crescent View, 9th Floor, Malviya Nagar, Delhi - 110018\nC) Ms. A. Mishra, 8902 Crescent View, 10th Floor, Malviya Nagar, Delhi - 110016\nD) Ms. A. Mishra, 8902 Crescent View, 10th Floor, Malviya Nagar, Delhi - 110017',
    questionHi:
      'नीचे दिए गए पते का ध्यानपूर्वक अध्ययन कीजिए और पहचानिए कि निम्नलिखित विकल्पों में से कौन-सा विकल्प दिए गए पते से मेल खाता है।\nMs. A. Mishra\n8902 Crescent View, 10th Floor, Malviya Nagar\nDelhi - 110017\n\nविकल्प:\nA) Ms. A. Mishra, 8902 Crescent View, 10th Floor, Malviya Nagar, Delhi - 110017\nB) Ms. A. Mishra, 8902 Crescent View, 9th Floor, Malviya Nagar, Delhi - 110018\nC) Ms. A. Mishra, 8902 Crescent View, 10th Floor, Malviya Nagar, Delhi - 110016\nD) Ms. A. Mishra, 8902 Crescent View, 10th Floor, Malviya Nagar, Delhi - 110017',
    optionsEn: ['D and B', 'B and C', 'A and D', 'C and A'],
    optionsHi: ['D और B', 'B और C', 'A और D', 'C और A'],
    correctIndex: 2,
    explanationEn:
      'Checking all four alternatives:\n• A and D match the given address identically ("10th Floor", "110017").\n• B has "9th Floor" and "110018".\n• C has "110016".\nHence, A and D match.',
    explanationHi:
      'विकल्प A और D दिए गए मूल पते ("10th Floor" और पिनकोड "110017") से पूर्णतः मेल खाते हैं, जबकि B व C में मंजिल/पिनकोड गलत हैं। अतः A और D सही हैं।',
  },
  {
    id: 'cgl26_05o1_q23',
    topic: 'Coding-Decoding',
    questionEn:
      'In a certain code language, "WORLD" is written as "DLROW." How will "CHAIR" be written in the same code language?',
    questionHi:
      'एक निश्चित कूट भाषा में, “WORLD” को “DLROW” लिखा जाता है। उसी कूट भाषा में “CHAIR” को कैसे लिखा जाएगा?',
    optionsEn: ['HIRAC', 'AHRIC', 'RIAHC', 'RHAIC'],
    optionsHi: ['HIRAC', 'AHRIC', 'RIAHC', 'RHAIC'],
    correctIndex: 2,
    explanationEn:
      'The letters of the word are simply reversed:\n• WORLD reversed → DLROW.\n• CHAIR reversed → RIAHC.',
    explanationHi:
      'शब्द के अक्षरों को उल्टे क्रम (Reverse) में लिखा गया है:\nWORLD → DLROW, इसी प्रकार CHAIR → RIAHC।',
  },
  {
    id: 'cgl26_05o1_q24',
    topic: 'Pipes & Cisterns',
    questionEn:
      'Two pipes can fill a tank in 16 hours and 24 hours, respectively, while a third pipe can empty it in 48 hours. If all three pipes are opened together, what fraction of the tank will be filled in 8 hours?',
    questionHi:
      'दो पाइप एक टैंक को क्रमशः 16 घंटे और 24 घंटे में भर सकते हैं, जबकि तीसरा पाइप इसे 48 घंटे में खाली कर सकता है। यदि तीनों पाइप एक साथ खोल दिए जाएं, तो 8 घंटे में टैंक का कितना हिस्सा भर जाएगा?',
    optionsEn: ['2/3', '3/4', '5/6', '7/8'],
    optionsHi: ['2/3', '3/4', '5/6', '7/8'],
    correctIndex: 0,
    explanationEn:
      'Take tank capacity = LCM(16, 24, 48) = 48 units.\n• Pipe 1 fills = +3 units/hr; Pipe 2 fills = +2 units/hr; Pipe 3 empties = −1 unit/hr.\n• Net rate together = 3 + 2 − 1 = 4 units/hr.\n• Filled in 8 hours = 4 × 8 = 32 units.\n• Fraction filled = 32 / 48 = 2/3.',
    explanationHi:
      'माना टैंक की कुल क्षमता = LCM(16, 24, 48) = 48 इकाई।\n• तीनों की संयुक्त क्षमता = +3 + 2 − 1 = 4 इकाई/घंटा।\n• 8 घंटे में भरा भाग = (4 × 8) / 48 = 32 / 48 = 2/3।',
  },
  {
    id: 'cgl26_05o1_q25',
    topic: 'Address Matching',
    questionEn:
      'Choose the option that perfectly matches the given address.\nOriginal Address:\nSuite No 18B7Grand Royal Residency Tower 14Saint Patrick Avenue Sector 9Brooklyn New York NY 11217United States of America',
    questionHi:
      'दिए गए पते से पूरी तरह मेल खाने वाले विकल्प का चयन करें।\nमूल पता:\nSuite No 18B7Grand Royal Residency Tower 14Saint Patrick Avenue Sector 9Brooklyn New York NY 11217United States of America',
    optionsEn: [
      'Suite No 18B7Grand Royal Residency Tower 14Saint Patrick Avenue Sector 9Brooklyn NewYork NY 11217United States of America',
      'Suite No 18B7Grand Royal Residency Tower 14Saint Patrick Avenue Sector 9Brooklyn New York NY 12117United States of America',
      'Suite No 18B7Grand Royal Residency Tower 41Saint Patrick Avenue Sector 9Brooklyn New York NY 11217United States of America',
      'Suite No 18B7Grand Royal Residency Tower 14Saint Patrick Avenue Sector 9Brooklyn New York NY 11217United States of America',
    ],
    optionsHi: [
      'Suite No 18B7Grand Royal Residency Tower 14Saint Patrick Avenue Sector 9Brooklyn NewYork NY 11217United States of America',
      'Suite No 18B7Grand Royal Residency Tower 14Saint Patrick Avenue Sector 9Brooklyn New York NY 12117United States of America',
      'Suite No 18B7Grand Royal Residency Tower 41Saint Patrick Avenue Sector 9Brooklyn New York NY 11217United States of America',
      'Suite No 18B7Grand Royal Residency Tower 14Saint Patrick Avenue Sector 9Brooklyn New York NY 11217United States of America',
    ],
    correctIndex: 3,
    explanationEn:
      'Spot the difference in each option:\n• (A) Missing space in "NewYork" (original has "New York").\n• (B) Wrong ZIP code "12117" (original has "11217").\n• (C) Wrong tower number "Tower 41" (original has "Tower 14").\n• (D) Exact character-by-character match.',
    explanationHi:
      'त्रुटि जाँच:\n• (A) में "NewYork" के बीच स्पेस नहीं है।\n• (B) में पिनकोड 12117 (मूल 11217) गलत है।\n• (C) में Tower 41 (मूल Tower 14) गलत है।\n• (D) मूल पते से अक्षरशः मेल खाता है।',
  },
];
