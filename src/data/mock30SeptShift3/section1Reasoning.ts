import { Question } from '../../types/exam';

export const SECTION_1_REASONING_S3: Question[] = [
  {
    id: 'cgl26_30s3_q1',
    topic: 'Address Matching',
    questionEn:
      'Address A: Plot No. 89, Industrial Area, Phase II, Chandigarh – 160002.\nAddress B: Plot No. 98, Industrial Area, Phase II, Chandigarh – 160002.\nAre these addresses likely to be the same?',
    questionHi:
      'पता A: Plot No. 89, Industrial Area, Phase II, Chandigarh – 160002.\nपता B: Plot No. 98, Industrial Area, Phase II, Chandigarh – 160002.\nक्या ये दोनों पते संभवतः एक ही हैं?',
    optionsEn: [
      'Yes',
      'No, plot differs',
      'No, phase differs',
      'No, pin code differs',
    ],
    optionsHi: [
      'हाँ',
      'नहीं, प्लॉट संख्या अलग है',
      'नहीं, फेज़ अलग है',
      'नहीं, पिन कोड अलग है',
    ],
    correctIndex: 1,
    explanationEn:
      'Comparing both addresses field by field: Industrial Area, Phase II, Chandigarh, and PIN code 160002 are identical, whereas Address A has Plot No. 89 and Address B has Plot No. 98. Hence, the plot number differs.',
    explanationHi:
      'दोनों पतों की तुलना करने पर: Industrial Area, Phase II, Chandigarh और पिन कोड 160002 समान हैं, लेकिन पता A में Plot No. 89 और पता B में Plot No. 98 है। अतः प्लॉट संख्या अलग है।',
  },
  {
    id: 'cgl26_30s3_q2',
    topic: 'Coding-Decoding',
    questionEn:
      'In a certain code language, "PEACE" is written as "ODZBD." How will "SMILE" be written in the same code language?',
    questionHi:
      'एक निश्चित कूट भाषा में, “PEACE” को “ODZBD” लिखा जाता है। उसी कूट भाषा में “SMILE” को कैसे लिखा जाएगा?',
    optionsEn: ['RLHKD', 'RHLKD', 'RHMDK', 'RHKDC'],
    optionsHi: ['RLHKD', 'RHLKD', 'RHMDK', 'RHKDC'],
    correctIndex: 0,
    explanationEn:
      'Each letter is shifted backward by 1 position (−1):\nP(16)→O(15), E(5)→D(4), A(1)→Z(26), C(3)→B(2), E(5)→D(4).\nApplying −1 to SMILE:\nS−1 = R, M−1 = L, I−1 = H, L−1 = K, E−1 = D → RLHKD.',
    explanationHi:
      'प्रत्येक अक्षर को वर्णमाला में 1 स्थान पीछे (−1) किया गया है:\nP→O, E→D, A→Z, C→B, E→D।\nSMILE पर −1 लागू करने पर:\nS−1 = R, M−1 = L, I−1 = H, L−1 = K, E−1 = D → RLHKD।',
  },
  {
    id: 'cgl26_30s3_q3',
    topic: 'Coding-Decoding',
    questionEn:
      'In a certain code language, "DEVELOPMENT" is written as "EEWEMOQMFNU". How will "MANAGEMENT" be written?',
    questionHi:
      'एक खास कोड भाषा में, "DEVELOPMENT" को "EEWEMOQMFNU" लिखा जाता है। तो "MANAGEMENT" को कैसे लिखा जाएगा?',
    optionsEn: ['NBOAHENFOT', 'NAOAHENEOT', 'NAPAHFNEOT', 'NAOBHFNEOT'],
    optionsHi: ['NBOAHENFOT', 'NAOAHENEOT', 'NAPAHFNEOT', 'NAOBHFNEOT'],
    correctIndex: 1,
    explanationEn:
      'Pattern: Odd positions (1st, 3rd, 5th, 7th, 9th, 11th) move +1 forward; even positions (2nd, 4th, 6th, 8th, 10th) remain unchanged (+0).\nCheck DEVELOPMENT: D+1=E, E=E, V+1=W, E=E, L+1=M, O=O, P+1=Q, M=M, E+1=F, N=N, T+1=U → EEWEMOQMFNU.\nApply to MANAGEMENT:\nM+1=N, A=A, N+1=O, A=A, G+1=H, E=E, M+1=N, E=E, N+1=O, T=T → NAOAHENEOT.',
    explanationHi:
      'नियम: विषम स्थान (1, 3, 5, 7, 9, 11) के अक्षरों में +1 जोड़ा गया है और सम स्थान (2, 4, 6, 8, 10) के अक्षर अपरिवर्तित (+0) रहते हैं।\nMANAGEMENT पर यही नियम लगाने पर:\nM+1=N, A=A, N+1=O, A=A, G+1=H, E=E, M+1=N, E=E, N+1=O, T=T → NAOAHENEOT।',
  },
  {
    id: 'cgl26_30s3_q4',
    topic: 'Counting of Figures',
    questionEn: 'How many triangles are there in the given figure?',
    questionHi: 'दी गई आकृति में कितने त्रिभुज हैं?',
    imageUrl: '/assets/mock30s3/q4_fig.png',
    optionsEn: ['23', '25', '27', '29'],
    optionsHi: ['23', '25', '27', '29'],
    correctIndex: 2,
    explanationEn:
      'Short Trick: This is a symmetrical triangular grid with n = 4 equal segments along each side.\nFor even n, Total Triangles = [n(n + 2)(2n + 1)] / 8\n= [4 × 6 × 9] / 8 = 216 / 8 = 27 triangles.',
    explanationHi:
      'शॉर्ट ट्रिक: यह सममित त्रिभुजाकार ग्रिड है जिसमें प्रत्येक भुजा पर n = 4 खंड हैं।\nसम n के लिए कुल त्रिभुज = [n(n + 2)(2n + 1)] / 8\n= [4 × 6 × 9] / 8 = 216 / 8 = 27 त्रिभुज।',
  },
  {
    id: 'cgl26_30s3_q5',
    topic: 'Pattern Completion',
    questionEn:
      'Complete the pattern in Figure (X) by selecting one of the figures from the four alternatives:',
    questionHi:
      'आकृति (X) में दिए गए पैटर्न को पूर्ण कीजिए। इसके लिए चार विकल्पों में से एक आकृति का चयन कीजिए:',
    imageUrl: '/assets/mock30s3/q5_fig.png',
    optionsEn: ['Figure A', 'Figure B', 'Figure C', 'Figure D'],
    optionsHi: ['आकृति A', 'आकृति B', 'आकृति C', 'आकृति D'],
    optionImages: [
      '/assets/mock30s3/q5_a.png',
      '/assets/mock30s3/q5_b.png',
      '/assets/mock30s3/q5_c.png',
      '/assets/mock30s3/q5_d.png',
    ],
    correctIndex: 2,
    explanationEn:
      'The figure has 4-way mirror symmetry across both central axes. In the bottom-right quadrant (?), we need: (1) the two concentric inner quarter-circles at the top-left corner, (2) the square corner intersecting the outer circle arc, and (3) two star-ray lines reaching the top-right and bottom-left corners with no extra diagonal line. Option C matches every line and arc cleanly.',
    explanationHi:
      'दी गई आकृति में दोनों केंद्रीय अक्षों के सापेक्ष पूर्ण समरूपता है। नीचे-दाएँ चतुर्थांश (?) को पूरा करने के लिए ऊपरी-बाएँ कोने पर दो संकेंद्रित चाप, वर्ग का कोना, बाहरी वृत्त का चाप और दो तारे की किरणें (बिना किसी अतिरिक्त विकर्ण रेखा के) चाहिए। केवल विकल्प (C) पैटर्न को सटीक पूरा करता है।',
  },
  {
    id: 'cgl26_30s3_q6',
    topic: 'Order & Ranking',
    questionEn:
      'Among W, X, Y, Z and V, X is taller than W but shorter than Y. W is taller than only V. Z is taller than Y. Who will be in the middle if they stand from shortest to tallest?',
    questionHi:
      'W, X, Y, Z और V में से, X, W से लंबा है लेकिन Y से छोटा है। W, केवल V से लंबा है। Z, Y से लंबा है। यदि वे सबसे छोटे से सबसे लंबे के क्रम में खड़े हों, तो बीच में कौन होगा?',
    optionsEn: ['Y', 'Z', 'X', 'W'],
    optionsHi: ['Y', 'Z', 'X', 'W'],
    correctIndex: 2,
    explanationEn:
      'Arrange from shortest to tallest:\n1. W is taller than only V → V < W.\n2. X is taller than W but shorter than Y → W < X < Y.\n3. Z is taller than Y → Y < Z.\nCombined order: V < W < X < Y < Z.\nThe middle (3rd) person is X.',
    explanationHi:
      'सबसे छोटे से सबसे लंबे के क्रम में व्यवस्थित करने पर:\n1. W केवल V से लंबा है → V < W।\n2. X, W से लंबा लेकिन Y से छोटा है → W < X < Y।\n3. Z, Y से लंबा है → Y < Z।\nसंपूर्ण क्रम: V < W < X < Y < Z।\nअतः बीच (तीसरे स्थान) में X होगा।',
  },
  {
    id: 'cgl26_30s3_q7',
    topic: 'Decision Making & Administrative Ethics',
    questionEn:
      'You are an administrative officer in a district where a planned vaccination drive is being actively resisted by a community due to widespread misinformation. What is the most effective approach?',
    questionHi:
      'आप एक जिले में प्रशासनिक अधिकारी हैं, जहाँ व्यापक स्तर पर फैली हुई गलत सूचनाओं के कारण एक नियोजित टीकाकरण अभियान का समुदाय द्वारा सक्रिय रूप से विरोध किया जा रहा है। सबसे प्रभावी दृष्टिकोण क्या होगा?',
    optionsEn: [
      'Mandate that local police authorities forcefully compel all district residents to participate in the vaccination drive to ensure full compliance with official health directives.',
      'Organize collaborative community meetings with trusted local influencers to share accurate, evidence-based health information and address specific community-level concerns directly.',
      'Systematically post informative educational flyers throughout the entire residential area and passively assume that the residents will eventually choose to get vaccinated independently.',
      'Suspend the planned vaccination drive temporarily to proactively avoid potential social conflict and wait for the central government to provide additional supportive resources.',
    ],
    optionsHi: [
      'स्थानीय पुलिस अधिकारियों को निर्देश देना कि वे आधिकारिक स्वास्थ्य निर्देशों का पूर्ण अनुपालन सुनिश्चित करने हेतु जिले के सभी निवासियों को बलपूर्वक टीकाकरण अभियान में भाग लेने के लिए बाध्य करें।',
      'विश्वसनीय स्थानीय प्रभावशाली व्यक्तियों के साथ सहयोगात्मक सामुदायिक बैठकों का आयोजन करना, ताकि सटीक, साक्ष्य-आधारित स्वास्थ्य संबंधी जानकारी साझा की जा सके तथा समुदाय-स्तर की विशिष्ट चिंताओं का प्रत्यक्ष रूप से समाधान किया जा सके।',
      'पूरे आवासीय क्षेत्र में व्यवस्थित रूप से जानकारीपूर्ण शैक्षिक पर्चे वितरित करना तथा निष्क्रिय रूप से यह मान लेना कि निवासी अंततः स्वयं स्वतंत्र रूप से टीकाकरण कराने का निर्णय ले लेंगे।',
      'संभावित सामाजिक संघर्ष से सक्रिय रूप से बचने के लिए नियोजित टीकाकरण अभियान को अस्थायी रूप से स्थगित कर देना तथा अतिरिक्त सहयोगी संसाधन उपलब्ध कराने के लिए केंद्र सरकार की प्रतीक्षा करना।',
    ],
    correctIndex: 1,
    explanationEn:
      'Misinformation-driven resistance is best countered through trust-building, transparent dialogue, and engaging credible local community leaders (Option B). Forceful policing escalates hostility, passive flyers rarely dispel deeply held fears, and suspending the drive compromises public health.',
    explanationHi:
      'गलत सूचना के कारण होने वाले विरोध को दूर करने का सबसे प्रभावी तरीका विश्वसनीय स्थानीय नेताओं के साथ संवाद और साक्ष्य-आधारित जागरूकता (विकल्प B) है। बल प्रयोग से तनाव बढ़ता है, केवल पर्चे बाँटना अपर्याप्त है, और अभियान स्थगित करने से जन-स्वास्थ्य प्रभावित होता है।',
  },
  {
    id: 'cgl26_30s3_q8',
    topic: 'Emotional Intelligence',
    questionEn:
      'You are leading a high-profile public infrastructure project. During a live, televised press conference, a journalist presents a leaked, out-of-context document and aggressively accuses your team of financial corruption. You feel a sudden surge of intense anger and your heart rate spikes. Which of the following actions demonstrates the highest level of Emotional Intelligence?',
    questionHi:
      'आप एक हाई-प्रोफाइल पब्लिक इंफ्रास्ट्रक्चर प्रोजेक्ट को लीड कर रहे हैं। टीवी पर लाइव प्रेस कॉन्फ्रेंस के दौरान, एक पत्रकार लीक हुआ और संदर्भ से हटकर पेश किया गया एक डॉक्यूमेंट दिखाता है और आपकी टीम पर पैसों की हेराफेरी का कड़ा आरोप लगाता है। आपको अचानक बहुत तेज़ गुस्सा आता है और आपकी धड़कनें बढ़ जाती हैं। नीचे दिए गए कामों में से कौन-सा काम सबसे ज़्यादा \'इमोशनल इंटेलिजेंस\' दिखाता है?',
    optionsEn: [
      "Immediately counter-attack the journalist's credibility to protect your department's reputation before the audience shifts.",
      'Maintain absolute silence, refuse to answer any further questions, and abruptly terminate the press conference to avoid saying something incriminating.',
      'Take a deep breath, acknowledge the document calmly, and state that you will provide a verified, point-by-point clarification by evening.',
      'Smile broadly and laugh off the accusation as a humorous misunderstanding to show the audience that you are completely unbothered.',
    ],
    optionsHi: [
      'इससे पहले कि दर्शकों का ध्यान कहीं और जाए, अपने विभाग की साख बचाने के लिए तुरंत पत्रकार की विश्वसनीयता पर पलटवार करें।',
      'पूरी तरह से चुप रहें, आगे किसी भी सवाल का जवाब देने से मना कर दें और कोई ऐसी बात कहने से बचने के लिए प्रेस कॉन्फ्रेंस को तुरंत खत्म कर दें जो आपके खिलाफ जा सकती हो।',
      'गहरी साँस लें, शांति से दस्तावेज़ को स्वीकार करें और कहें कि आप शाम तक एक वेरिफ़ाइड, पॉइंट-बाय-पॉइंट स्पष्टीकरण देंगे।',
      'खुलकर मुस्कुराएँ और उस आरोप को मज़ाकिया गलतफहमी बताकर हँसकर टाल दें, ताकि दर्शकों को पता चले कि आप पर इसका कोई असर नहीं पड़ा है।',
    ],
    correctIndex: 2,
    explanationEn:
      'High Emotional Intelligence involves self-regulation under stress (taking a deep breath instead of reacting impulsively) combined with transparent, accountable communication (promising a verified point-by-point clarification). Attacking, walking out, or laughing off serious public accusations erodes trust.',
    explanationHi:
      'उच्च इमोशनल इंटेलिजेंस का अर्थ दबाव में आत्म-नियंत्रण (गहरी साँस लेकर शांत रहना) और जिम्मेदार, पारदर्शी प्रतिक्रिया देना (शाम तक सत्यापित बिंदुवार स्पष्टीकरण देने का वादा करना) है। पलटवार करना, प्रेस कॉन्फ्रेंस छोड़ देना या गंभीर आरोपों को हँसी में टालना अविश्वास बढ़ाता है।',
  },
  {
    id: 'cgl26_30s3_q9',
    topic: 'Emotional Intelligence',
    questionEn:
      "Two of your senior team members, both exceptional performers, have developed a deep professional animosity. Their constant bickering during project design sessions is beginning to force junior employees to take sides, splintering the department's unity. What is the most emotionally intelligent course of action for you to take?",
    questionHi:
      'आपकी टीम के दो सीनियर सदस्य, जो दोनों ही बहुत अच्छा काम करते हैं, उनके बीच गहरी प्रोफेशनल दुश्मनी हो गई है। प्रोजेक्ट डिज़ाइन सेशन के दौरान उनकी लगातार नोक-झोंक की वजह से जूनियर कर्मचारियों को किसी एक का पक्ष लेने के लिए मजबूर होना पड़ रहा है, जिससे डिपार्टमेंट की एकता टूट रही है। आपके लिए सबसे समझदारी भरा और इमोशनली इंटेलिजेंट कदम क्या होगा?',
    optionsEn: [
      'Issue a formal warning letter to both individuals, stating that their annual performance appraisal scores will be slashed by 20% if another argument occurs.',
      'Call both individuals into a private meeting, explain the impact on junior staff, and have them co-create a professional boundary framework.',
      'Transfer the less experienced member of the two to a different department to completely eliminate the physical point of friction.',
      'Step back and let them naturally resolve their differences, assuming that two mature adults will eventually self-correct to save their careers.',
    ],
    optionsHi: [
      'दोनों व्यक्तियों को एक औपचारिक चेतावनी पत्र जारी करें, जिसमें यह बताया जाए कि यदि दोबारा कोई बहस होती है, तो उनके वार्षिक प्रदर्शन मूल्यांकन के अंकों में 20% की कटौती की जाएगी।',
      'दोनों लोगों को एक प्राइवेट मीटिंग में बुलाएँ, उन्हें जूनियर स्टाफ़ पर पड़ने वाले असर के बारे में समझाएँ और उनसे मिलकर एक प्रोफ़ेशनल बाउंड्री फ़्रेमवर्क तैयार करवाएँ।',
      'टकराव की वजह को पूरी तरह खत्म करने के लिए, दोनों में से कम अनुभवी सदस्य का दूसरे डिपार्टमेंट में ट्रांसफ़र कर दें।',
      'थोड़ा पीछे हटें और उन्हें अपने मतभेद स्वाभाविक रूप से सुलझाने दें, यह मानकर कि दो समझदार वयस्क आखिरकार अपने करियर को बचाने के लिए खुद को सुधार लेंगे।',
    ],
    correctIndex: 1,
    explanationEn:
      'Constructive conflict resolution (Option B) addresses the issue privately, builds empathy by highlighting its impact on junior staff, and involves both seniors in co-creating professional norms—retaining both high performers while restoring team unity.',
    explanationHi:
      'रचनात्मक समाधान (विकल्प B) में दोनों सीनियर सदस्यों से निजी रूप से बात कर जूनियर टीम पर पड़ रहे नकारात्मक प्रभाव को समझाया जाता है और उनसे मिलकर पेशेवर सीमाएँ तय करवाई जाती हैं। इससे दोनों योग्य कर्मचारी बने रहते हैं और टीम की एकता भी बहाल होती है।',
  },
  {
    id: 'cgl26_30s3_q10',
    topic: 'Mathematical Reasoning',
    questionEn:
      'If 4 + 5 = 7, 16 + 3 = 7, and 64 + 2 = 10, then what is the value of 121 + 4 ?',
    questionHi:
      'यदि 4 + 5 = 7, 16 + 3 = 7, और 64 + 2 = 10 है, तो 121 + 4 का मान क्या होगा?',
    optionsEn: ['7', '4', '15', '11'],
    optionsHi: ['7', '4', '15', '11'],
    correctIndex: 2,
    explanationEn:
      'Pattern: a + b = √a + b.\n• √4 + 5 = 2 + 5 = 7\n• √16 + 3 = 4 + 3 = 7\n• √64 + 2 = 8 + 2 = 10\nTherefore, 121 + 4 → √121 + 4 = 11 + 4 = 15.',
    explanationHi:
      'पैटर्न: a + b = √a + b।\n• √4 + 5 = 2 + 5 = 7\n• √16 + 3 = 4 + 3 = 7\n• √64 + 2 = 8 + 2 = 10\nअतः 121 + 4 → √121 + 4 = 11 + 4 = 15।',
  },
  {
    id: 'cgl26_30s3_q11',
    topic: 'Mathematical Operations',
    questionEn:
      'Choose the correct sequence of mathematical operators to replace the asterisks (*) in order to make the following expression a valid equation.\n14 * 6 * 40 * 5 * 18 = 44',
    questionHi:
      'निम्नलिखित व्यंजक को सही समीकरण बनाने के लिए तारक चिह्नों (*) के स्थान पर गणितीय संक्रियाओं का कौन-सा सही क्रम रखा जाएगा?\n14 * 6 * 40 * 5 * 18 = 44',
    optionsEn: ['÷, +, ×, −', '+, ×, ÷, −', '−, +, ×, ÷', '×, ÷, +, −'],
    optionsHi: ['÷, +, ×, −', '+, ×, ÷, −', '−, +, ×, ÷', '×, ÷, +, −'],
    correctIndex: 1,
    explanationEn:
      'Using BODMAS with Option (B) [+, ×, ÷, −]:\n14 + 6 × 40 ÷ 5 − 18\n= 14 + 6 × 8 − 18\n= 14 + 48 − 18\n= 62 − 18 = 44. Matches RHS exactly.',
    explanationHi:
      'BODMAS नियम से विकल्प (B) [+, ×, ÷, −] रखने पर:\n14 + 6 × 40 ÷ 5 − 18\n= 14 + 6 × 8 − 18\n= 14 + 48 − 18 = 44 (सही समीकरण)।',
  },
  {
    id: 'cgl26_30s3_q12',
    topic: 'Statement & Inferences',
    questionEn:
      'In the following question, one statement is given, followed by certain inferences. Consider the statement to be true even if it seems to contradict commonly known facts. Read the inferences carefully and decide which of them logically follow from the given statement.\n\nStatement:\nThe government has introduced a new tax policy that raises taxes on luxury items.\n\nInferences:\nI. The government wants to discourage people from buying luxury goods.\nII. The government aims to increase revenue through taxation.\nIII. The government aims to reduce income inequality by imposing higher taxes on luxury goods.',
    questionHi:
      'निम्नलिखित प्रश्न में एक कथन दिया गया है, जिसके बाद कुछ निष्कर्ष दिए गए हैं। कथन को सत्य मानिए, भले ही वह सामान्यतः ज्ञात तथ्यों का विरोध करता हुआ प्रतीत हो। निष्कर्षों को ध्यानपूर्वक पढ़िए और निर्धारित कीजिए कि उनमें से कौन-सा/कौन-से दिए गए कथन से तार्किक रूप से अनुसरण करते हैं।\n\nकथन:\nसरकार ने एक नई कर नीति लागू की है, जिसके अंतर्गत विलासिता (Luxury) की वस्तुओं पर कर बढ़ा दिया गया है।\n\nनिष्कर्ष:\nI. सरकार लोगों को विलासिता की वस्तुएँ खरीदने से हतोत्साहित करना चाहती है।\nII. सरकार कराधान के माध्यम से राजस्व बढ़ाने का लक्ष्य रखती है।\nIII. सरकार विलासिता की वस्तुओं पर अधिक कर लगाकर आय असमानता को कम करना चाहती है।',
    optionsEn: [
      'Only Inference I follows.',
      'Only Inference II follows.',
      'Only Inferences I and II follow.',
      'Only Inferences I and III follow.',
    ],
    optionsHi: [
      'केवल निष्कर्ष I अनुसरण करता है।',
      'केवल निष्कर्ष II अनुसरण करता है।',
      'केवल निष्कर्ष I और II अनुसरण करते हैं।',
      'केवल निष्कर्ष I और III अनुसरण करते हैं।',
    ],
    correctIndex: 1,
    explanationEn:
      'Raising taxes directly serves the primary fiscal purpose of increasing government tax revenue (Inference II follows). The statement does not state that the intent is to stop luxury consumption (I) or specifically reduce income inequality (III). Thus, only Inference II logically follows.',
    explanationHi:
      'कर बढ़ाने का सीधा और प्राथमिक उद्देश्य कराधान के माध्यम से सरकारी राजस्व में वृद्धि करना होता है (निष्कर्ष II अनुसरण करता है)। कथन में उपभोग रोकने (I) या आय असमानता कम करने (III) का कोई प्रत्यक्ष उल्लेख नहीं है। अतः केवल निष्कर्ष II सही है।',
  },
  {
    id: 'cgl26_30s3_q13',
    topic: 'Mirror Image',
    questionEn:
      'If a mirror is placed on the line PQ, which figure will be the mirror image of the question figure?',
    questionHi:
      'यदि दर्पण को रेखा PQ पर रखा जाता है, तो प्रश्न आकृति का दर्पण प्रतिबिंब कौन सी आकृति होगी?',
    imageUrl: '/assets/mock30s3/q13_fig.svg',
    optionsEn: ['Figure A', 'Figure B', 'Figure C', 'Figure D'],
    optionsHi: ['आकृति A', 'आकृति B', 'आकृति C', 'आकृति D'],
    optionImages: [
      '/assets/mock30s3/q13_a.svg',
      '/assets/mock30s3/q13_b.svg',
      '/assets/mock30s3/q13_c.svg',
      '/assets/mock30s3/q13_d.svg',
    ],
    correctIndex: 1,
    explanationEn:
      'When mirrored across vertical line PQ on the right, the sequence reverses from right to left (r, 2, W, 5, j, f) and each character flips horizontally:\n• "r" faces left at the top (eliminates A, C, D).\n• "2", "W", "5", "j", and "f" all flip horizontally in Option (B).',
    explanationHi:
      'दाईं ओर ऊर्ध्वाधर दर्पण PQ रखने पर अक्षरों का क्रम दाएँ से बाएँ उलट जाता है (r, 2, W, 5, j, f) और प्रत्येक अक्षर क्षैतिज रूप से पलट जाता है।\n• सबसे बाईं ओर "r" का ऊपरी मोड़ बाईं दिशा में होना चाहिए (जो केवल विकल्प B में सही है, जबकि A, C, D में गलत है)।',
  },
  {
    id: 'cgl26_30s3_q14',
    topic: 'Social Intelligence',
    questionEn:
      "During a school field trip, you're a chaperone and notice that one student seems to be deliberately excluded from group activities by their peers, though no one says anything overtly unkind. What should you do?",
    questionHi:
      'विद्यालय की शैक्षिक यात्रा (Field Trip) के दौरान आप एक पर्यवेक्षक हैं और आप देखते हैं कि एक छात्र को उसके सहपाठियों द्वारा समूह गतिविधियों में जानबूझकर शामिल नहीं किया जा रहा है, यद्यपि कोई भी उसके प्रति प्रत्यक्ष रूप से कोई अपमानजनक या कठोर बात नहीं कह रहा है। आपको क्या करना चाहिए?',
    optionsEn: [
      'Wait to see if the situation resolves on its own, since no rules are technically being broken.',
      'Check in privately, offer help joining a group, and encourage inclusion.',
      'Immediately separate the group of students who are excluding the other student as a punishment.',
      'Report the entire group to the school administration for bullying.',
    ],
    optionsHi: [
      'यह देखने के लिए प्रतीक्षा करें कि क्या स्थिति स्वयं ही सुधर जाती है, क्योंकि तकनीकी रूप से कोई नियम नहीं तोड़ा जा रहा है।',
      'छात्र से निजी रूप से बात करें, उसे किसी समूह में शामिल होने में सहायता प्रदान करें तथा समावेशिता को प्रोत्साहित करें।',
      'दंडस्वरूप उस छात्र को अलग रखने वाले विद्यार्थियों के समूह को तुरंत अलग कर दें।',
      'पूरे समूह की विद्यालय प्रशासन से उत्पीड़न (Bullying) की शिकायत कर दें।',
    ],
    correctIndex: 1,
    explanationEn:
      'Subtle social exclusion should be handled empathetically without embarrassing the student or over-punishing peers prematurely. Privately checking in with the student and gently facilitating group inclusion (Option B) is the most constructive and supportive action.',
    explanationHi:
      'सूक्ष्म सामाजिक बहिष्कार को संवेदनशीलता के साथ संभालना चाहिए। छात्र से निजी रूप से बात कर उसे समूह में शामिल करने और समावेशिता को बढ़ावा देने (विकल्प B) से समस्या सकारात्मक रूप से हल होती है।',
  },
  {
    id: 'cgl26_30s3_q15',
    topic: 'Figure Analogy',
    questionEn:
      'In the following question, there is a specific relationship between the first two figures. Establish a similar relationship between the third and fourth figures by selecting a suitable figure from the given Answer Figures to replace the question mark (?).',
    questionHi:
      'निम्नलिखित प्रश्न में, पहली दो आकृतियों के बीच एक विशिष्ट संबंध दिया गया है। उसी संबंध के आधार पर तीसरी और चौथी आकृतियों के बीच संबंध स्थापित कीजिए तथा प्रश्नवाचक चिह्न (?) के स्थान पर आने वाली उपयुक्त आकृति का चयन दिए गए उत्तर विकल्पों में से कीजिए।',
    imageUrl: '/assets/mock30s3/q15_fig.png',
    optionsEn: ['2', '1', '3', '4'],
    optionsHi: ['2', '1', '3', '4'],
    correctIndex: 0,
    explanationEn:
      'From Figure 1 to Figure 2, the two vertical side lines remain fixed, while the top and bottom outward-pointing hexagonal sides invert inward toward the center.\nApplying the same transformation to Figure 3 (a circle between two vertical lines): the top and bottom outward circular arcs invert inward toward the center, giving Answer Figure (2), which is Option (A).',
    explanationHi:
      'आकृति 1 से आकृति 2 में दोनों ऊर्ध्वाधर रेखाएँ स्थिर रहती हैं, जबकि ऊपर और नीचे की बाहर की ओर निकली भुजाएँ अंदर की ओर मुड़ जाती हैं।\nयही नियम आकृति 3 (दो ऊर्ध्वाधर रेखाओं के बीच वृत्त) पर लागू करने पर ऊपरी व निचले चाप अंदर की ओर मुड़ जाते हैं, जिससे उत्तर आकृति (2) प्राप्त होती है — विकल्प (A)।',
  },
  {
    id: 'cgl26_30s3_q16',
    topic: 'Figure Analogy',
    questionEn:
      'In the following question, there is a specific relationship between the first two figures. Establish a similar relationship between the third and fourth figures by selecting a suitable figure from the given Answer Figures to replace the question mark (?).',
    questionHi:
      'निम्नलिखित प्रश्न में, पहली दो आकृतियों के बीच एक विशिष्ट संबंध दिया गया है। उसी संबंध के आधार पर तीसरी और चौथी आकृतियों के बीच संबंध स्थापित कीजिए तथा प्रश्नवाचक चिह्न (?) के स्थान पर आने वाली उपयुक्त आकृति का चयन दिए गए उत्तर विकल्पों में से कीजिए।',
    imageUrl: '/assets/mock30s3/q16_fig.png',
    optionsEn: ['1', '2', '4', '3'],
    optionsHi: ['1', '2', '4', '3'],
    correctIndex: 0,
    explanationEn:
      'Figure 2 is the exact upside-down (vertical flip / 180° rotation) version of Figure 1.\nSimilarly, flipping the 4th figure vertically (upside down) moves the concentric circle from top to bottom and the two black circles from bottom to top, matching Answer Figure (1) — Option (A).',
    explanationHi:
      'आकृति 2, आकृति 1 का ठीक उल्टा (ऊर्ध्वाधर पलट / 180° घूर्णन) रूप है।\nइसी प्रकार चौथी आकृति को उल्टा करने पर ऊपर का दोहरा वृत्त नीचे और नीचे के दोनों काले वृत्त ऊपर आ जाते हैं, जो उत्तर आकृति (1) से मेल खाता है — विकल्प (A)।',
  },
  {
    id: 'cgl26_30s3_q17',
    topic: 'Venn Diagram',
    questionEn:
      'Identify the Venn diagram that represents the relationship between "Taxpayers, Females, and Billionaires".',
    questionHi:
      '"करदाताओं (Taxpayers), महिलाओं (Females), और अरबपतियों (Billionaires)" के बीच संबंध को दर्शाने वाले वेन आरेख की पहचान कीजिए।',
    optionsEn: ['Figure A', 'Figure B', 'Figure C', 'Figure D'],
    optionsHi: ['आकृति A', 'आकृति B', 'आकृति C', 'आकृति D'],
    optionImages: [
      '/assets/mock30s3/q17_a.png',
      '/assets/mock30s3/q17_b.png',
      '/assets/mock30s3/q17_c.png',
      '/assets/mock30s3/q17_d.png',
    ],
    correctIndex: 3,
    explanationEn:
      'Some females are taxpayers, some females are billionaires, some billionaires are taxpayers, and some individuals belong to all three categories (female billionaire taxpayers), while none is wholly contained in another. Hence three mutually intersecting circles — Option (D).',
    explanationHi:
      'कुछ महिलाएँ करदाता हैं, कुछ महिलाएँ अरबपति हैं, कुछ अरबपति करदाता हैं और कुछ व्यक्ति तीनों श्रेणियों में आते हैं, जबकि कोई भी श्रेणी पूरी तरह दूसरी में समाहित नहीं है। अतः तीन परस्पर प्रतिच्छेदी वृत्त — विकल्प (D) सही है।',
  },
  {
    id: 'cgl26_30s3_q18',
    topic: 'Statement & Assumptions',
    questionEn:
      'Read the given statement carefully and the following assumptions based on it. Decide which of the assumptions are implicit in the statement.\n\nStatement:\nTo reduce the backlog of pending legal cases, the high court has decided to implement an automated digital filing system.\n\nAssumptions:\nI. The entire backlog is caused solely by the manual filing of paper documents.\nII. All lawyers and judges in the court are already experts in using digital filing systems.',
    questionHi:
      'दिए गए कथन को ध्यानपूर्वक पढ़िए तथा उसके आधार पर दी गई निम्नलिखित मान्यताओं पर विचार कीजिए। निर्धारित कीजिए कि कथन में कौन-सी मान्यता/मान्यताएँ निहित हैं।\n\nकथन:\nलंबित कानूनी मामलों के बैकलॉग को कम करने के लिए उच्च न्यायालय ने एक स्वचालित डिजिटल फाइलिंग प्रणाली लागू करने का निर्णय लिया है।\n\nमान्यताएँ:\nI. लंबित मामलों का पूरा बैकलॉग केवल कागजी दस्तावेजों की मैनुअल फाइलिंग के कारण है।\nII. न्यायालय के सभी वकील और न्यायाधीश पहले से ही डिजिटल फाइलिंग प्रणालियों के उपयोग में विशेषज्ञ हैं।',
    optionsEn: [
      'Only Assumption II is implicit',
      'Both Assumptions I and II are implicit',
      'Only Assumption I is implicit',
      'Neither Assumption I nor II is implicit',
    ],
    optionsHi: [
      'केवल मान्यता II निहित है।',
      'मान्यता I और II दोनों निहित हैं।',
      'केवल मान्यता I निहित है।',
      'न तो मान्यता I न ही II निहित है।',
    ],
    correctIndex: 3,
    explanationEn:
      'Assumption I uses extreme wording ("entire backlog", "solely") which is not implied—digital filing helps reduce backlog, not that manual filing is the only cause. Assumption II ("all... are already experts") is also not implied since training can be provided. Hence, neither Assumption I nor II is implicit.',
    explanationHi:
      'मान्यता I में अतिवादी शब्द ("पूरा बैकलॉग", "केवल") हैं जो कथन से निहित नहीं होते। मान्यता II ("सभी पहले से विशेषज्ञ हैं") भी निहित नहीं है क्योंकि प्रशिक्षण दिया जा सकता है। अतः न तो मान्यता I और न ही II निहित है।',
  },
  {
    id: 'cgl26_30s3_q19',
    topic: 'Dice & Cube',
    questionEn:
      "Four different positions of the same dice are shown. Select the number that will be on the face opposite to the one showing '4'.",
    questionHi:
      "एक ही पासे की चार अलग-अलग स्थितियाँ दिखाई गई हैं। '4' अंक वाले भाग के विपरीत आने वाली संख्या का चयन कीजिए।",
    imageUrl: '/assets/mock30s3/q19_fig.svg',
    optionsEn: ['5', '6', '1', '3'],
    optionsHi: ['5', '6', '1', '3'],
    correctIndex: 0,
    explanationEn:
      'Short Trick (Two-Face Common Rule): Compare Position 1 (faces 1, 3, 5) and Position 3 (faces 4, 3, 1).\nBoth positions share two common faces: 1 and 3.\nTherefore, the remaining faces must be opposite to each other → 4 is opposite to 5.',
    explanationHi:
      'शॉर्ट ट्रिक (दो फलक उभयनिष्ठ नियम): स्थिति 1 (फलक 1, 3, 5) और स्थिति 3 (फलक 4, 3, 1) की तुलना करें।\nदोनों में 1 और 3 उभयनिष्ठ (common) हैं।\nअतः शेष बचे फलक एक-दूसरे के विपरीत होंगे → 4 के विपरीत 5 होगा।',
  },
  {
    id: 'cgl26_30s3_q20',
    topic: 'Figure Classification',
    questionEn:
      'In the following question, out of the five figures marked (a), (b), (c), (d), and (e), four are similar in a certain manner. However, one figure is not like the other four. Choose the figure which is different from the rest.',
    questionHi:
      'निम्नलिखित प्रश्न में, (a), (b), (c), (d) तथा (e) से चिह्नित पाँच आकृतियों में से चार एक निश्चित प्रकार से समान हैं। जबकि एक आकृति अन्य चार से भिन्न है। शेष से भिन्न आकृति का चयन कीजिए।',
    imageUrl: '/assets/mock30s3/q20_fig.png',
    optionsEn: ['a', 'c', 'd', 'e'],
    optionsHi: ['a', 'c', 'd', 'e'],
    correctIndex: 1,
    explanationEn:
      'Observe the relative position of the black dot and the shaded triangle as the square rotates:\nIn figures (a), (b), (d), and (e), the shaded triangle is always separated from the dot by 1 empty small triangle (moving clockwise from the dot to the shaded triangle).\nIn figure (c), the dot lies directly adjacent to the shaded triangle in the opposite relative orientation. Hence, (c) is the odd one out — Option (B).',
    explanationHi:
      'वर्ग के घूर्णन में काले बिंदु और छायांकित त्रिभुज की सापेक्ष स्थिति देखें:\nआकृति (a), (b), (d) और (e) एक ही आकृति के घूर्णन (rotation) हैं, जबकि आकृति (c) में बिंदु और छायांकित त्रिभुज की सापेक्ष स्थिति भिन्न है। अतः भिन्न आकृति (c) है — विकल्प (B)।',
  },
  {
    id: 'cgl26_30s3_q21',
    topic: 'Figure Classification',
    questionEn:
      'In the following question, out of the five figures marked (a), (b), (c), (d), and (e), four are similar in a certain manner. However, one figure is not like the other four. Choose the figure which is different from the rest.',
    questionHi:
      'निम्नलिखित प्रश्न में, (a), (b), (c), (d) तथा (e) से चिह्नित पाँच आकृतियों में से चार एक निश्चित प्रकार से समान हैं। जबकि एक आकृति अन्य चार से भिन्न है। शेष से भिन्न आकृति का चयन कीजिए।',
    imageUrl: '/assets/mock30s3/q21_fig.png',
    optionsEn: ['c', 'a', 'b', 'e'],
    optionsHi: ['c', 'a', 'b', 'e'],
    correctIndex: 0,
    explanationEn:
      'Compare the central dot and the three outer symbols attached to the hexagon in each figure:\nIn (a), (b), (d), and (e), moving clockwise around the hexagon keeps the same cyclic order of the outer symbols (hook, double-bar, line-stem). In figure (c), the arrangement/orientation of the outer symbols breaks this cyclic pattern. Hence, (c) is different — Option (A).',
    explanationHi:
      'षट्भुज के चारों ओर लगे बाहरी चिह्नों के दक्षिणावर्त (clockwise) क्रम की तुलना करें:\nआकृति (a), (b), (d) और (e) में बाहरी चिह्नों का चक्रीय क्रम समान है, जबकि आकृति (c) में यह क्रम व अभिविन्यास भिन्न है। अतः (c) भिन्न है — विकल्प (A)।',
  },
  {
    id: 'cgl26_30s3_q22',
    topic: 'Number Matrix',
    questionEn:
      'Which of the following rows/columns are connected/related with each other in some way?',
    questionHi:
      'निम्नलिखित में से कौन-सी पंक्तियाँ/स्तंभ किसी न किसी प्रकार से आपस में संबंधित हैं?',
    matrix: [
      ['Row\\Col', 'I', 'II', 'III', 'IV', 'V'],
      ['I', '2', '5', '3', '4', '6'],
      ['II', '4', '16', '9', '16', '14'],
      ['III', '8', '56', '27', '64', '132'],
      ['IV', '16', '115', '81', '256', '180'],
      ['V', '32', '120', '243', '1024', '508'],
    ],
    optionsEn: [
      'Columns I, II and III',
      'Columns I, II and IV',
      'Columns II, IV and V',
      'Columns I, III and IV',
    ],
    optionsHi: [
      'स्तंभ I, II और III',
      'स्तंभ I, II और IV',
      'स्तंभ II, IV और V',
      'स्तंभ I, III और IV',
    ],
    correctIndex: 3,
    explanationEn:
      'Check the geometric progression (powers) down each column:\n• Column I: 2¹, 2², 2³, 2⁴, 2⁵ → 2, 4, 8, 16, 32\n• Column III: 3¹, 3², 3³, 3⁴, 3⁵ → 3, 9, 27, 81, 243\n• Column IV: 4¹, 4², 4³, 4⁴, 4⁵ → 4, 16, 64, 256, 1024\nColumns II and V do not follow a uniform power pattern. Hence, Columns I, III and IV are related.',
    explanationHi:
      'प्रत्येक स्तंभ में घात (powers) का पैटर्न देखें:\n• स्तंभ I: 2¹, 2², 2³, 2⁴, 2⁵ → 2, 4, 8, 16, 32\n• स्तंभ III: 3¹, 3², 3³, 3⁴, 3⁵ → 3, 9, 27, 81, 243\n• स्तंभ IV: 4¹, 4², 4³, 4⁴, 4⁵ → 4, 16, 64, 256, 1024\nस्तंभ II और V में ऐसा नियम नहीं है। अतः स्तंभ I, III और IV आपस में संबंधित हैं।',
  },
  {
    id: 'cgl26_30s3_q23',
    topic: 'Embedded Figure',
    questionEn:
      'Carefully observe Figure (X) and identify the option figure in which Figure (X) is embedded exactly as shown.',
    questionHi:
      'आकृति (X) का ध्यानपूर्वक अवलोकन कीजिए और उस विकल्प आकृति की पहचान कीजिए जिसमें आकृति (X) ठीक उसी रूप में अंतर्निहित है जैसा कि दर्शाया गया है।',
    imageUrl: '/assets/mock30s3/q23_fig.png',
    optionsEn: ['Figure A', 'Figure B', 'Figure C', 'Figure D'],
    optionsHi: ['आकृति A', 'आकृति B', 'आकृति C', 'आकृति D'],
    optionImages: [
      '/assets/mock30s3/q23_a.png',
      '/assets/mock30s3/q23_b.png',
      '/assets/mock30s3/q23_c.png',
      '/assets/mock30s3/q23_d.png',
    ],
    correctIndex: 1,
    explanationEn:
      'Figure (X) consists of a downward-sloping diagonal line from top-left to bottom-right joined midway by a shorter upward-left-to-bottom-left segment forming a ">" shape on the left.\nInside the central square of Option (B), both diagonals intersect cleanly to contain this exact shape in the same orientation.',
    explanationHi:
      'आकृति (X) में ऊपर-बाएँ से नीचे-दाएँ जाने वाली तिरछी रेखा के साथ बाईं ओर से मिलती हुई एक छोटी तिरछी रेखा है।\nविकल्प (B) के केंद्रीय वर्ग में मौजूद विकर्णों के संयोजन में यह आकृति ठीक इसी रूप और दिशा में अंतर्निहित है।',
  },
  {
    id: 'cgl26_30s3_q24',
    topic: 'Letter Series',
    questionEn:
      'Fill in the blanks (_) using one of the following four options such that the series follows a specific pattern in the given order.\np _ rt _ srtps _ tp _ rt',
    questionHi:
      'रिक्त स्थानों (_) को निम्नलिखित चार विकल्पों में से किसी एक का प्रयोग करके भरिए, ताकि श्रेणी दिए गए क्रम में एक विशिष्ट प्रतिरूप का अनुसरण करे।\np _ rt _ srtps _ tp _ rt',
    optionsEn: ['prps', 'sprs', 'srtp', 'prst'],
    optionsHi: ['prps', 'sprs', 'srtp', 'prst'],
    correctIndex: 1,
    explanationEn:
      'There are 16 positions in total — divide into 4 groups of 4 letters:\np _ r t | _ s r t | p s _ t | p _ r t\nEach 4-letter block is "psrt":\np(s)rt | (p)srt | ps(r)t | p(s)rt\nFilled letters in order: s, p, r, s → sprs.',
    explanationHi:
      'कुल 16 अक्षर हैं — इन्हें 4-4 के चार समूहों में बाँटें:\np _ r t | _ s r t | p s _ t | p _ r t\nप्रत्येक समूह "psrt" है:\np(s)rt | (p)srt | ps(r)t | p(s)rt\nरिक्त स्थानों के अक्षर क्रमशः s, p, r, s → sprs हैं।',
  },
  {
    id: 'cgl26_30s3_q25',
    topic: 'Figure Series',
    questionEn:
      'Select a figure from amongst the Answer Figures which will continue the same series as established by the Problem Figures.',
    questionHi:
      'उत्तर आकृतियों में से उस आकृति का चयन कीजिए जो प्रश्न आकृतियों द्वारा स्थापित श्रृंखला को आगे बढ़ाती हो।',
    imageUrl: '/assets/mock30s3/q25_fig.png',
    optionsEn: ['A', 'B', 'C', 'D'],
    optionsHi: ['A', 'B', 'C', 'D'],
    correctIndex: 1,
    explanationEn:
      'Track each element across the 5 Problem Figures:\n1. The black dot alternates inside/outside the circle and moves clockwise step-by-step: Fig 1 (top-left in) → Fig 2 (bottom-left out) → Fig 3 (bottom-right in) → Fig 4 (top-right out) → Fig 5 (top-left in) → Next (Fig 6): bottom-left outside.\n2. The arrow-head and tail rotate clockwise by 90° every step, placing the diagonal line from top-left to bottom-right with the open arrowhead at top-left in Fig 6.\nOnly Answer Figure B matches both positions.',
    explanationHi:
      'प्रश्न आकृतियों (1 से 5) में प्रत्येक तत्व की गति देखें:\n1. काला बिंदु बारी-बारी से वृत्त के अंदर/बाहर रहते हुए दक्षिणावर्त (clockwise) आगे बढ़ता है — अतः छठी आकृति में यह नीचे-बाएँ बाहर की ओर होगा।\n2. तीर वाली रेखा प्रत्येक चरण में 90° दक्षिणावर्त घूमती है, जिससे छठी आकृति में यह ऊपर-बाएँ से नीचे-दाएँ दिशा में होगी।\nकेवल उत्तर आकृति (B) दोनों शर्तों को पूरा करती है।',
  },
];
