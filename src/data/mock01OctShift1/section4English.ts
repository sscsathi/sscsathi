import { Question } from '../../types/exam';

const OBESITY_PASSAGE =
  'Obesity, a complex and multifactorial health issue, has reached epidemic proportions globally. Characterized by an excessive accumulation of body fat, obesity is far more than a mere aesthetic concern—it significantly elevates the risk of numerous chronic diseases, including type 2 diabetes, cardiovascular disorders, and certain cancers. While sedentary lifestyles and high-calorie diets are commonly cited as primary causes, the reality is nuanced. Genetic predispositions, environmental factors, psychological conditions, and socio-economic status collectively influence an individual’s propensity to gain weight.\n\nMoreover, modern urban environments often exacerbate the issue, offering limited access to nutritious food options while promoting a culture of convenience and inactivity. Children growing up in such settings are particularly vulnerable, setting the stage for lifelong health struggles. Although public health campaigns have emphasized diet and exercise, long-term success remains elusive for many individuals. This suggests that sustainable solutions must transcend personal responsibility and address systemic barriers.\n\nMedical interventions, such as pharmacotherapy and bariatric surgery, have offered relief for some, but they are not without risks and are often financially inaccessible. Ultimately, combating obesity requires a multifaceted strategy that integrates education, urban planning, policy reform, and community-based initiatives. Without a comprehensive and empathetic approach, the human and economic costs of the obesity epidemic will continue to escalate, undermining global health systems and shortening life expectancy for millions.';

export const SECTION_4_ENGLISH_O1S1: Question[] = [
  {
    id: 'cgl26_01o1_q76',
    topic: 'Reading Comprehension',
    passageEn: OBESITY_PASSAGE,
    questionEn:
      'Identify the correct tense used in the sentence:\n"Medical interventions, such as pharmacotherapy and bariatric surgery, have offered relief for some, but they are not without risks."',
    questionHi:
      'दिए गए वाक्य में प्रयुक्त सही काल (Tense) की पहचान करें:\n"Medical interventions, such as pharmacotherapy and bariatric surgery, have offered relief for some, but they are not without risks."',
    optionsEn: [
      'Past Perfect',
      'Present perfect',
      'Simple Past',
      'Present Continuous',
    ],
    optionsHi: [
      'Past Perfect',
      'Present perfect',
      'Simple Past',
      'Present Continuous',
    ],
    correctIndex: 1,
    explanationEn:
      'The verb phrase "have offered" follows the structure "has/have + V₃ (past participle)", which is the Present Perfect tense, indicating actions started in the past that continue to have relevance in the present.',
    explanationHi:
      'वाक्य में "have offered" ("has/have + V₃") की संरचना का प्रयोग हुआ है, जो Present Perfect Tense को दर्शाता है। अतः विकल्प (B) सही है।',
  },
  {
    id: 'cgl26_01o1_q77',
    topic: 'Reading Comprehension',
    passageEn: OBESITY_PASSAGE,
    questionEn:
      'Which voice is used in the sentence:\n"Children growing up in such settings are particularly vulnerable."',
    questionHi:
      'दिए गए वाक्य में किस वाच्य (Voice) का प्रयोग हुआ है:\n"Children growing up in such settings are particularly vulnerable."',
    optionsEn: [
      'Active Voice',
      'Passive Voice',
      'Causative Voice',
      'Interrogative Voice',
    ],
    optionsHi: [
      'Active Voice',
      'Passive Voice',
      'Causative Voice',
      'Interrogative Voice',
    ],
    correctIndex: 0,
    explanationEn:
      'The subject ("Children growing up in such settings") directly takes the linking verb "are" followed by the adjective complement "particularly vulnerable". There is no "be + past participle (V₃)" passive construction, so the sentence is in Active Voice.',
    explanationHi:
      'वाक्य में कर्ता ("Children growing up in such settings") के साथ linking verb "are" और विशेषण "vulnerable" प्रयुक्त है, न कि "be + V₃" की Passive संरचना। अतः यह Active Voice में है।',
  },
  {
    id: 'cgl26_01o1_q78',
    topic: 'Reading Comprehension',
    passageEn: OBESITY_PASSAGE,
    questionEn:
      'What is the closest meaning of "propensity" as used in the passage?',
    questionHi:
      'गद्यांश में प्रयुक्त शब्द "propensity" का सबसे निकटतम अर्थ क्या है?',
    optionsEn: ['Hesitation', 'Tendency', 'Resistance', 'Disinterest'],
    optionsHi: ['Hesitation', 'Tendency', 'Resistance', 'Disinterest'],
    correctIndex: 1,
    explanationEn:
      '"Propensity" means an inclination or natural tendency to behave in a particular way or develop a condition (here, "an individual’s propensity to gain weight"). Thus, "Tendency" is its closest synonym.',
    explanationHi:
      '"Propensity" का अर्थ किसी विशेष व्यवहार या स्थिति की स्वाभाविक प्रवृत्ति/झुकाव होता है। अतः इसका सबसे सटीक पर्यायवाची "Tendency" (प्रवृत्ति) है।',
  },
  {
    id: 'cgl26_01o1_q79',
    topic: 'Reading Comprehension',
    passageEn: OBESITY_PASSAGE,
    questionEn: 'Choose the synonym of "exacerbate" from the options below.',
    questionHi: 'नीचे दिए गए विकल्पों में से "exacerbate" का पर्यायवाची चुनें।',
    optionsEn: ['Worsen', 'Alleviate', 'Initiate', 'Neutralize'],
    optionsHi: ['Worsen', 'Alleviate', 'Initiate', 'Neutralize'],
    correctIndex: 0,
    explanationEn:
      '"Exacerbate" means to make a problem, bad situation, or negative feeling worse. Its direct synonym is "Worsen" (while "Alleviate" is its antonym).',
    explanationHi:
      '"Exacerbate" का अर्थ किसी समस्या या बुरी स्थिति को और अधिक बिगाड़ना/बढ़ाना होता है। इसका सटीक पर्यायवाची "Worsen" है (जबकि "Alleviate" इसका विलोम है)।',
  },
  {
    id: 'cgl26_01o1_q80',
    topic: 'Reading Comprehension',
    passageEn: OBESITY_PASSAGE,
    questionEn:
      'According to the passage, why are children particularly vulnerable to obesity?',
    questionHi:
      'गद्यांश के अनुसार, बच्चे विशेष रूप से मोटापे के प्रति संवेदनशील क्यों हैं?',
    optionsEn: [
      'Because children naturally prefer high-calorie foods.',
      'Because urban environments often promote unhealthy habits early in life.',
      'Because genetic factors are stronger in childhood than adulthood.',
      'Because schools are solely responsible for promoting nutrition.',
    ],
    optionsHi: [
      'Because children naturally prefer high-calorie foods.',
      'Because urban environments often promote unhealthy habits early in life.',
      'Because genetic factors are stronger in childhood than adulthood.',
      'Because schools are solely responsible for promoting nutrition.',
    ],
    correctIndex: 1,
    explanationEn:
      'The second paragraph states: "modern urban environments often exacerbate the issue, offering limited access to nutritious food options while promoting a culture of convenience and inactivity. Children growing up in such settings are particularly vulnerable, setting the stage for lifelong health struggles." This directly matches option (B).',
    explanationHi:
      'गद्यांश के दूसरे अनुच्छेद के अनुसार आधुनिक शहरी वातावरण पौष्टिक भोजन की सीमित उपलब्धता और निष्क्रियता/सुविधा की संस्कृति को बढ़ावा देता है, जिसमें पलने वाले बच्चे विशेष रूप से संवेदनशील होते हैं। अतः विकल्प (B) सही है।',
  },
  {
    id: 'cgl26_01o1_q81',
    topic: 'Idioms & Collocations',
    questionEn:
      'Complete the collocation by choosing a suitable word to fill in the blank.\nDespite the groundbreaking nature of their discovery, the research team decided ________ all the experimental data had been thoroughly verified and peer-reviewed.',
    questionHi:
      'रिक्त स्थान को भरने के लिए उपयुक्त विकल्प चुनकर वाक्य पूर्ण करें।\nDespite the groundbreaking nature of their discovery, the research team decided ________ all the experimental data had been thoroughly verified and peer-reviewed.',
    optionsEn: [
      'break even',
      'to keep it under wraps',
      'above my hand',
      'slipped my mind',
    ],
    optionsHi: [
      'break even',
      'to keep it under wraps',
      'above my hand',
      'slipped my mind',
    ],
    correctIndex: 1,
    explanationEn:
      '"To keep something under wraps" means to keep it secret or confidential until the right time (here, until the data was verified and peer-reviewed). "Decided" also grammatically takes a to-infinitive ("decided to keep it under wraps").',
    explanationHi:
      '"To keep it under wraps" का अर्थ किसी बात को गोपनीय/गुप्त रखना होता है। साथ ही "decided" के बाद to-infinitive संरचना आती है, अतः विकल्प (B) सही है।',
  },
  {
    id: 'cgl26_01o1_q82',
    topic: 'Sentence Rearrangement',
    questionEn:
      'Rearrange the parts of the sentence in the correct order.\nIn a landmark moment for space exploration,\nP. offering unprecedented insights into planetary formation and the conditions necessary for life,\nQ. raising the possibility of habitable worlds beyond our solar system,\nR. the James Webb Space Telescope detected the presence of complex organic molecules in the atmosphere of an exoplanet,\nS. while astronomers cautioned that further studies were required to confirm the findings',
    questionHi:
      'वाक्य के भागों को सही क्रम में व्यवस्थित करें।\nIn a landmark moment for space exploration,\nP. offering unprecedented insights into planetary formation and the conditions necessary for life,\nQ. raising the possibility of habitable worlds beyond our solar system,\nR. the James Webb Space Telescope detected the presence of complex organic molecules in the atmosphere of an exoplanet,\nS. while astronomers cautioned that further studies were required to confirm the findings',
    optionsEn: ['QSRP', 'QPRS', 'RPQS', 'SRPQ'],
    optionsHi: ['QSRP', 'QPRS', 'RPQS', 'SRPQ'],
    correctIndex: 2,
    explanationEn:
      'After the introductory phrase "In a landmark moment for space exploration,", the main subject and verb must follow — Part R ("the James Webb Space Telescope detected..."). Part P adds the scientific insight ("offering unprecedented insights..."), Part Q extends its implication ("raising the possibility of habitable worlds..."), and Part S closes with a contrasting caveat ("while astronomers cautioned..."). Correct order: RPQS.',
    explanationHi:
      'प्रारंभिक वाक्यांश के बाद मुख्य कर्ता व क्रिया भाग R से शुरू होती है, उसके बाद इसके वैज्ञानिक महत्व (P), संभावित परिणाम (Q) और अंत में वैज्ञानिकों की चेतावनी (S) आती है। अतः सही क्रम RPQS है।',
  },
  {
    id: 'cgl26_01o1_q83',
    topic: 'Phrasal Verbs',
    questionEn:
      'Fill in the blank with an appropriate phrasal verb.\nDespite repeated warnings, he ______ risky investments and lost everything.',
    questionHi:
      'रिक्त स्थान को उपयुक्त phrasal verb से भरें।\nDespite repeated warnings, he ______ risky investments and lost everything.',
    optionsEn: ['plowed into', 'plowed over', 'plowed away', 'plowed through'],
    optionsHi: ['plowed into', 'plowed over', 'plowed away', 'plowed through'],
    correctIndex: 0,
    explanationEn:
      '"Plowed into" means to rush headlong into something recklessly or invest heavily into an enterprise without caution. ("Plowed through" means to work steadily through a difficult task; "plowed over" means to knock down.)',
    explanationHi:
      '"Plowed into" का अर्थ बिना सावधानी के किसी जोखिम भरे कार्य/निवेश में भारी धन या ऊर्जा झोंक देना होता है। अतः विकल्प (A) सही है।',
  },
  {
    id: 'cgl26_01o1_q84',
    topic: 'Sentence Rearrangement',
    questionEn:
      'Rearrange the parts of the sentence in the correct order.\nThe escalating climate crisis\nP. with rising sea levels and extreme weather patterns\nQ. has intensified global efforts towards mitigation,\nR. urging industries to adopt sustainable practices\nS. while reinforcing commitments to international climate accords',
    questionHi:
      'वाक्य के भागों को सही क्रम में व्यवस्थित करें।\nThe escalating climate crisis\nP. with rising sea levels and extreme weather patterns\nQ. has intensified global efforts towards mitigation,\nR. urging industries to adopt sustainable practices\nS. while reinforcing commitments to international climate accords',
    optionsEn: ['QPRS', 'SRPQ', 'SPRQ', 'RSPQ'],
    optionsHi: ['QPRS', 'SRPQ', 'SPRQ', 'RSPQ'],
    correctIndex: 0,
    explanationEn:
      'The subject "The escalating climate crisis" needs its finite verb immediately — Part Q ("has intensified global efforts towards mitigation,"). Part P provides the context ("with rising sea levels and extreme weather patterns"), followed by the participatory clauses R ("urging industries...") and S ("while reinforcing commitments..."). Correct order: QPRS.',
    explanationHi:
      'कर्ता "The escalating climate crisis" के तुरंत बाद मुख्य क्रिया भाग Q में है, जिसके बाद कारण/संदर्भ (P) और फिर R व S जुड़ते हैं। अतः सही क्रम QPRS है।',
  },
  {
    id: 'cgl26_01o1_q85',
    topic: 'Idioms & Phrases',
    questionEn:
      'Choose the correct idiom meaning for the phrase highlighted in brackets.\nThe parents are [in high spirits] as their son has got a decent job.',
    questionHi:
      'कोष्ठक में दिए गए मुहावरे (Idiom) का सही अर्थ चुनें।\nThe parents are [in high spirits] as their son has got a decent job.',
    optionsEn: [
      'Very happy',
      'Feeling dizzy',
      'Extremely angry',
      'In a confused state',
    ],
    optionsHi: [
      'Very happy',
      'Feeling dizzy',
      'Extremely angry',
      'In a confused state',
    ],
    correctIndex: 0,
    explanationEn:
      'The idiom "in high spirits" means cheerful, lively, enthusiastic, or very happy. Its opposite is "in low spirits" (sad/dejected).',
    explanationHi:
      '"In high spirits" मुहावरे का अर्थ अत्यंत प्रसन्न, उत्साहित या बहुत खुश (Very happy) होना होता है। अतः विकल्प (A) सही है।',
  },
  {
    id: 'cgl26_01o1_q86',
    topic: 'Error Spotting',
    questionEn:
      'Identify the error in the sentence.\nThe committee decided their decision.',
    questionHi:
      'दिए गए वाक्य में त्रुटि (Error) की पहचान करें।\nThe committee decided their decision.',
    optionsEn: ['committee', 'decided', 'their', 'decision'],
    optionsHi: ['committee', 'decided', 'their', 'decision'],
    correctIndex: 1,
    explanationEn:
      'Using "decided" directly with the noun "decision" is redundant/unidiomatic in English. The correct verb collocation is "made/reached/announced their decision" (or simply "The committee decided"). Hence, the error lies in "decided".',
    explanationHi:
      '"decision" के साथ क्रिया "decided" का प्रयोग पुनरुक्ति (redundancy) व अशुद्ध collocation है। इसके स्थान पर "made/reached/announced" का प्रयोग होना चाहिए। अतः त्रुटि "decided" में है।',
  },
  {
    id: 'cgl26_01o1_q87',
    topic: 'Homonyms & Vocabulary',
    questionEn:
      "Which of the following options is NOT one of the meanings of the homonym 'panel'?",
    questionHi:
      "निम्नलिखित में से कौन-सा विकल्प homonym शब्द 'panel' का अर्थ नहीं है?",
    optionsEn: [
      'A group of people chosen to give advice or judgement',
      'A flat, usually rectangular piece forming part of a surface or structure',
      'A touchscreen interface or display area',
      'A legal fee charged per hearing',
    ],
    optionsHi: [
      'A group of people chosen to give advice or judgement',
      'A flat, usually rectangular piece forming part of a surface or structure',
      'A touchscreen interface or display area',
      'A legal fee charged per hearing',
    ],
    correctIndex: 3,
    explanationEn:
      '"Panel" can refer to: (1) a group of experts/judges/interviewers, (2) a flat rectangular section of a door, wall, or solar unit, or (3) a control/display interface (e.g., touch panel, instrument panel). It NEVER means a legal fee charged per hearing.',
    explanationHi:
      '"Panel" का प्रयोग विशेषज्ञों के समूह, किसी सतह/संरचना के समतल भाग, तथा डिस्प्ले/कंट्रोल इंटरफेस तीनों अर्थों में होता है, किंतु इसका अर्थ "प्रति सुनवाई कानूनी शुल्क" नहीं होता। अतः विकल्प (D) सही है।',
  },
  {
    id: 'cgl26_01o1_q88',
    topic: 'Idioms & Phrases',
    questionEn:
      'Choose the correct meaning of the idiom highlighted in brackets.\n"I don\'t believe Tara really hurt herself when she fell. I think she\'s crying [crocodile tears] just to get attention."',
    questionHi:
      'कोष्ठक में दिए गए मुहावरे (Idiom) का सही अर्थ चुनें।\n"I don\'t believe Tara really hurt herself when she fell. I think she\'s crying [crocodile tears] just to get attention."',
    optionsEn: [
      'Genuine sadness and emotional pain',
      'Tears caused by a physical injury',
      'Insincere or fake tears meant to fool others',
      'A loud and dramatic cry of joy',
    ],
    optionsHi: [
      'Genuine sadness and emotional pain',
      'Tears caused by a physical injury',
      'Insincere or fake tears meant to fool others',
      'A loud and dramatic cry of joy',
    ],
    correctIndex: 2,
    explanationEn:
      '"Crocodile tears" refers to a hypocritical, insincere, or fake display of sorrow or grief intended to deceive or gain sympathy from others.',
    explanationHi:
      '"Crocodile tears" (मगरमच्छ के आँसू) का अर्थ दिखावटी या झूठे आँसू (Insincere or fake tears) होता है। अतः विकल्प (C) सही है।',
  },
  {
    id: 'cgl26_01o1_q89',
    topic: 'Synonyms',
    questionEn:
      'Select the most appropriate synonym of the given word: MALEDICTION',
    questionHi: 'दिए गए शब्द का सबसे उपयुक्त पर्यायवाची चुनें: MALEDICTION',
    optionsEn: ['Prayer', 'Hope', 'Blessing', 'Curse'],
    optionsHi: ['Prayer', 'Hope', 'Blessing', 'Curse'],
    correctIndex: 3,
    explanationEn:
      'From Latin "male-" (bad/evil) + "dicere" (to speak), "Malediction" means a magical word or phrase uttered with the intention of bringing about evil; a curse. ("Benediction" / "Blessing" is its antonym.)',
    explanationHi:
      '"Malediction" (अभिशाप/बददुआ) का सटीक पर्यायवाची "Curse" है, जबकि "Blessing" इसका विलोम शब्द है।',
  },
  {
    id: 'cgl26_01o1_q90',
    topic: 'Antonyms',
    questionEn: 'Select the most appropriate antonym of the given word: Prudent',
    questionHi: 'दिए गए शब्द का सबसे उपयुक्त विलोम (Antonym) चुनें: Prudent',
    optionsEn: ['Reckless', 'Wise', 'Thoughtful', 'Careful'],
    optionsHi: ['Reckless', 'Wise', 'Thoughtful', 'Careful'],
    correctIndex: 0,
    explanationEn:
      '"Prudent" means acting with or showing care, wisdom, and thought for the future. "Wise", "Thoughtful", and "Careful" are its synonyms, while "Reckless" (heedless of danger or consequences) is its exact antonym.',
    explanationHi:
      '"Prudent" का अर्थ विवेकी, दूरदर्शी या सावधान होता है। Wise, Thoughtful और Careful इसके पर्यायवाची हैं, जबकि "Reckless" (लापरवाह/अविवेकी) इसका सही विलोम है।',
  },
  {
    id: 'cgl26_01o1_q91',
    topic: 'Synonyms',
    questionEn:
      'Select the most appropriate synonym of the given word: ABSTRUSE',
    questionHi: 'दिए गए शब्द का सबसे उपयुक्त पर्यायवाची चुनें: ABSTRUSE',
    optionsEn: ['Evident', 'Spartan', 'Obscure', 'Common'],
    optionsHi: ['Evident', 'Spartan', 'Obscure', 'Common'],
    correctIndex: 2,
    explanationEn:
      '"Abstruse" means difficult to understand or obscure. "Obscure" is its exact synonym, whereas "Evident" and "Common" are opposite in meaning, and "Spartan" means austere/frugal.',
    explanationHi:
      '"Abstruse" का अर्थ गूढ़, जटिल या समझने में कठिन होता है। इसका सटीक पर्यायवाची "Obscure" (अस्पष्ट/गूढ़) है।',
  },
  {
    id: 'cgl26_01o1_q92',
    topic: 'Spelling',
    questionEn:
      "Which is the correct spelling of a word meaning 'prevent from happening'?",
    questionHi:
      "'prevent from happening' (घटित होने से रोकना) अर्थ वाले शब्द की सही वर्तनी कौन-सी है?",
    optionsEn: ['Avert', 'Avart', 'Avirrt', 'Avurt'],
    optionsHi: ['Avert', 'Avart', 'Avirrt', 'Avurt'],
    correctIndex: 0,
    explanationEn:
      '"Avert" (A-V-E-R-T) is the correctly spelt verb meaning to turn away or prevent/ward off an undesirable occurrence (e.g., avert a crisis).',
    explanationHi:
      'सही वर्तनी "Avert" है, जिसका अर्थ किसी अनचाही घटना को टालना या रोकना होता है।',
  },
  {
    id: 'cgl26_01o1_q93',
    topic: 'Spelling',
    questionEn: 'Identify the misspelt word.',
    questionHi: 'गलत वर्तनी (Misspelt) वाला शब्द पहचानें।',
    optionsEn: ['Belligerent', 'Beligerent', 'Ineffable', 'Inscrutable'],
    optionsHi: ['Belligerent', 'Beligerent', 'Ineffable', 'Inscrutable'],
    correctIndex: 1,
    explanationEn:
      '"Beligerent" is misspelt — it requires a double "l", i.e., "Belligerent" (hostile and aggressive), which is already shown correctly in option (A). "Ineffable" and "Inscrutable" are also correctly spelt.',
    explanationHi:
      '"Beligerent" की वर्तनी गलत है; सही वर्तनी "Belligerent" (दो "l" के साथ — आक्रामक/युद्धरत) होती है।',
  },
  {
    id: 'cgl26_01o1_q94',
    topic: 'One-Word Substitution',
    questionEn:
      "Choose the correct one-word substitution for: 'The act of stealing from shops'.",
    questionHi:
      "'The act of stealing from shops' के लिए सही एक-शब्द प्रतिस्थापन (One-Word Substitution) चुनें।",
    optionsEn: ['Robbery', 'Looting', 'Burglary', 'Shoplifting'],
    optionsHi: ['Robbery', 'Looting', 'Burglary', 'Shoplifting'],
    correctIndex: 3,
    explanationEn:
      '"Shoplifting" specifically means stealing goods from a shop while pretending to be a customer. "Robbery" involves force/threat, "Burglary" is breaking into a building illegally to steal, and "Looting" is stealing during riots or war.',
    explanationHi:
      'दुकान से ग्राहक बनकर सामान चुराने की क्रिया को "Shoplifting" कहते हैं। अतः विकल्प (D) सही है।',
  },
  {
    id: 'cgl26_01o1_q95',
    topic: 'Active & Passive Voice',
    questionEn:
      'Change the following from active to passive:\nThey have denied the allegations.',
    questionHi:
      'दिए गए वाक्य को Active से Passive Voice में बदलें:\nThey have denied the allegations.',
    optionsEn: [
      'The allegations are denied.',
      'The allegations were denied.',
      'The allegations have been denied.',
      'The allegations had been denied.',
    ],
    optionsHi: [
      'The allegations are denied.',
      'The allegations were denied.',
      'The allegations have been denied.',
      'The allegations had been denied.',
    ],
    correctIndex: 2,
    explanationEn:
      'Present Perfect Active ("Subject + has/have + V₃ + Object") changes in Passive Voice to "Object + has/have + been + V₃ (+ by agent)". Since "allegations" is plural, we use "have been denied" (the vague agent "by them" is omitted).',
    explanationHi:
      'Present Perfect Active ("have denied") का Passive रूप "have been + V₃" ("The allegations have been denied.") होता है। अतः विकल्प (C) सही है।',
  },
  {
    id: 'cgl26_01o1_q96',
    topic: 'Sentence Improvement',
    questionEn:
      'Choose the most suitable option to replace the highlighted part of the sentence:\nMy brother [is good in cricket].',
    questionHi:
      'वाक्य के कोष्ठक वाले भाग को बदलने के लिए सबसे उपयुक्त विकल्प चुनें:\nMy brother [is good in cricket].',
    optionsEn: [
      'good to cricket',
      'best in cricket',
      'is good at cricket',
      'well in cricket',
    ],
    optionsHi: [
      'good to cricket',
      'best in cricket',
      'is good at cricket',
      'well in cricket',
    ],
    correctIndex: 2,
    explanationEn:
      'The fixed preposition used with "good" to denote skill or proficiency in an activity, subject, or sport is "at" — hence "is good at cricket" (never "good in").',
    explanationHi:
      'किसी विषय, खेल या कौशल में निपुणता दर्शाने के लिए "good" के साथ हमेशा "at" पूर्वसर्ग (preposition) का प्रयोग होता है ("is good at cricket")। अतः विकल्प (C) सही है।',
  },
  {
    id: 'cgl26_01o1_q97',
    topic: 'Sentence Improvement',
    questionEn:
      'Choose the most suitable option to replace the highlighted part of the sentence:\nThey have been working on this project [since four months].',
    questionHi:
      'वाक्य के कोष्ठक वाले भाग को बदलने के लिए सबसे उपयुक्त विकल्प चुनें:\nThey have been working on this project [since four months].',
    optionsEn: [
      'from four months',
      'for past four months',
      'since last four months',
      'for four months',
    ],
    optionsHi: [
      'from four months',
      'for past four months',
      'since last four months',
      'for four months',
    ],
    correctIndex: 3,
    explanationEn:
      'In Present Perfect Continuous tense, "for" is used for a period/duration of time ("for four months"), whereas "since" is used for a specific starting point in time (e.g., "since June"). Hence, "for four months" is correct.',
    explanationHi:
      'अनिश्चित समय-अवधि (duration — "four months") के लिए "since" नहीं बल्कि "for" का प्रयोग किया जाता है। ("since" का प्रयोग निश्चित प्रारंभिक बिंदु के लिए होता है।) अतः "for four months" सही है।',
  },
  {
    id: 'cgl26_01o1_q98',
    topic: 'Para Jumbles',
    questionEn:
      'Rearrange the following sentences to form a meaningful passage:\n1. Ancient Greek democracy laid the foundation for civic participation.\n2. Citizens debated laws in public assemblies.\n3. This model influenced later republics worldwide.\n4. However, rights were limited to free adult males.',
    questionHi:
      'सार्थक अनुच्छेद बनाने के लिए निम्नलिखित वाक्यों को सही क्रम में व्यवस्थित करें:\n1. Ancient Greek democracy laid the foundation for civic participation.\n2. Citizens debated laws in public assemblies.\n3. This model influenced later republics worldwide.\n4. However, rights were limited to free adult males.',
    optionsEn: ['1-4-2-3', '2-1-3-4', '1-2-4-3', '4-1-2-3'],
    optionsHi: ['1-4-2-3', '2-1-3-4', '1-2-4-3', '4-1-2-3'],
    correctIndex: 2,
    explanationEn:
      'Sentence 1 introduces Ancient Greek democracy. Sentence 2 explains how civic participation worked in practice ("Citizens debated laws in public assemblies"). Sentence 4 adds a contrasting limitation ("However, rights were limited to free adult males"). Sentence 3 concludes with its lasting global legacy ("This model influenced later republics worldwide"). Correct sequence: 1-2-4-3.',
    explanationHi:
      'वाक्य 1 विषय का परिचय देता है, वाक्य 2 उसकी कार्यप्रणाली बताता है, वाक्य 4 ("However...") उसकी सीमा दर्शाता है, और वाक्य 3 उसके दीर्घकालिक वैश्विक प्रभाव के साथ निष्कर्ष देता है। सही क्रम 1-2-4-3 है।',
  },
  {
    id: 'cgl26_01o1_q99',
    topic: 'Para Jumbles',
    questionEn:
      'Rearrange the following sentences to form a coherent paragraph:\n1. This process ensures that the food we eat is safe and does not contain harmful bacteria or other contaminants.\n2. Food processing is a series of methods used to transform raw ingredients into consumable products.\n3. These methods can range from simple actions like cutting and grinding to more complex procedures such as pasteurization and fermentation.\n4. Furthermore, it also helps to preserve food, extend its shelf life, and enhance its nutritional value.',
    questionHi:
      'सुसंगत अनुच्छेद बनाने के लिए निम्नलिखित वाक्यों को सही क्रम में व्यवस्थित करें:\n1. This process ensures that the food we eat is safe and does not contain harmful bacteria or other contaminants.\n2. Food processing is a series of methods used to transform raw ingredients into consumable products.\n3. These methods can range from simple actions like cutting and grinding to more complex procedures such as pasteurization and fermentation.\n4. Furthermore, it also helps to preserve food, extend its shelf life, and enhance its nutritional value.',
    optionsEn: ['2, 3, 1, 4', '1, 2, 3, 4', '3, 1, 4, 2', '4, 2, 1, 3'],
    optionsHi: ['2, 3, 1, 4', '1, 2, 3, 4', '3, 1, 4, 2', '4, 2, 1, 3'],
    correctIndex: 0,
    explanationEn:
      'Sentence 2 defines the topic ("Food processing is a series of methods..."). Sentence 3 directly picks up "These methods...". Sentence 1 introduces the primary benefit ("This process ensures that the food we eat is safe..."), and Sentence 4 adds additional benefits with "Furthermore, it also helps...". Correct order: 2, 3, 1, 4.',
    explanationHi:
      'वाक्य 2 "Food processing" की परिभाषा से शुरू होता है, वाक्य 3 ("These methods...") उसका विस्तार करता है, वाक्य 1 खाद्य सुरक्षा का मुख्य लाभ बताता है, और वाक्य 4 ("Furthermore...") अतिरिक्त लाभ जोड़ता है। अतः सही क्रम 2, 3, 1, 4 है।',
  },
  {
    id: 'cgl26_01o1_q100',
    topic: 'Antonyms',
    questionEn:
      'Choose the most appropriate antonym of the underlined word.\nThe new law had a [pernicious] effect on the local economy.',
    questionHi:
      'कोष्ठक में दिए गए शब्द का सबसे उपयुक्त विलोम (Antonym) चुनें।\nThe new law had a [pernicious] effect on the local economy.',
    optionsEn: ['Beneficial', 'Harmful', 'Damaging', 'Deleterious'],
    optionsHi: ['Beneficial', 'Harmful', 'Damaging', 'Deleterious'],
    correctIndex: 0,
    explanationEn:
      '"Pernicious" means having a harmful or destructive effect, especially in a gradual or subtle way. "Harmful", "Damaging", and "Deleterious" are all its synonyms, so "Beneficial" (helpful/advantageous) is the exact antonym.',
    explanationHi:
      '"Pernicious" का अर्थ अत्यंत हानिकारक या विनाशकारी होता है। Harmful, Damaging और Deleterious इसके पर्यायवाची हैं, जबकि "Beneficial" (लाभकारी) इसका सही विलोम है।',
  },
];
