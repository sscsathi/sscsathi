import { Question } from '../../types/exam';

const HUGHIE_ERSKINE_PASSAGE =
  'Hughie Erskine was charming and generous, but had little money and no successful profession. He wished to marry Laura, yet her father insisted that Hughie must first obtain a respectable income. One day, Hughie visited his friend Alan Trevor, a painter who was completing a portrait of an elderly beggar dressed in torn clothes. The model appeared so weak and miserable that Hughie felt immediate sympathy for him.\n\nWhile Alan briefly left the room, Hughie searched his pockets and found a single gold coin. Although he could scarcely afford to lose it, he placed the coin in the beggar’s hand. The old man thanked him with unusual courtesy. Later, Alan informed Hughie that the supposed beggar was Baron Hausberg, one of the wealthiest men in Europe. The baron had deliberately posed as a poor man for the painting.\n\nHughie was deeply embarrassed. He imagined that the millionaire would laugh at his foolish attempt to offer charity. The following morning, however, a representative of the baron arrived with an envelope. It contained a substantial sum of money described as a wedding gift from “an old beggar.”\n\nThe incident reveals the difference between wealth and generosity. Hughie possessed very little, yet he was prepared to share it without expecting recognition or reward. The baron, though rich, valued the sincerity of the act because it had been performed under the belief that he was helpless. Charity offered for public approval may flatter the giver, but compassion shown in private reveals character.';

export const SECTION_4_ENGLISH_O1S2: Question[] = [
  {
    id: 'cgl26_01o2_q76',
    topic: 'Direct & Indirect Speech',
    questionEn:
      'Which of the following is the correct direct speech form of the given sentence?\nThe players were asking if their coach would return before the game.',
    questionHi:
      'दिए गए वाक्य का सही Direct Speech रूप निम्नलिखित में से कौन-सा है?\nThe players were asking if their coach would return before the game.',
    optionsEn: [
      'The players, "Will our coach can return before the game?"',
      'The players said, "Will our coach return before the game?"',
      'The players, "Would our coach return before the game?"',
      'The players said, "Would our coach return before the game?"',
    ],
    optionsHi: [
      'The players, "Will our coach can return before the game?"',
      'The players said, "Will our coach return before the game?"',
      'The players, "Would our coach return before the game?"',
      'The players said, "Would our coach return before the game?"',
    ],
    correctIndex: 1,
    explanationEn:
      'Converting Indirect to Direct Speech: "if" introduces an inverted yes/no question; "their" changes back to "our"; and "would" (backshifted in past reporting) reverts to "Will". Option (B) has a proper reporting verb ("said") and exact grammar: The players said, "Will our coach return before the game?"',
    explanationHi:
      'Indirect से Direct Speech में बदलने पर "their" → "our" और "would" → "Will" में परिवर्तित होता है तथा reporting verb ("said") के साथ प्रश्नवाचक वाक्य बनता है। अतः विकल्प (B) सही है।',
  },
  {
    id: 'cgl26_01o2_q77',
    topic: 'Sentence Rearrangement',
    questionEn:
      'Rearrange the parts of the sentence in the correct order.\nA groundbreaking medical discovery\nP. has been developed by scientists\nQ. using innovative genetic engineering techniques\nR. paving the way for more effective vaccines\nS. which enhances the body’s immune response,',
    questionHi:
      'वाक्य के भागों को सही क्रम में व्यवस्थित करें।\nA groundbreaking medical discovery\nP. has been developed by scientists\nQ. using innovative genetic engineering techniques\nR. paving the way for more effective vaccines\nS. which enhances the body’s immune response,',
    optionsEn: ['RSPQ', 'QPSR', 'QSPR', 'PSRQ'],
    optionsHi: ['RSPQ', 'QPSR', 'QSPR', 'PSRQ'],
    correctIndex: 3,
    explanationEn:
      'The subject "A groundbreaking medical discovery" is immediately followed by its finite verb phrase P ("has been developed by scientists"). Then S ("which enhances the body’s immune response,") defines the discovery, R ("paving the way for more effective vaccines") states the outcome, and Q ("using innovative genetic engineering techniques") specifies the method. Correct order: PSRQ.',
    explanationHi:
      'कर्ता "A groundbreaking medical discovery" के बाद मुख्य क्रिया भाग P में आती है, फिर S उसकी विशेषता बताता है, R उसका परिणाम और Q प्रयुक्त तकनीक को दर्शाता है। अतः सही क्रम PSRQ है।',
  },
  {
    id: 'cgl26_01o2_q78',
    topic: 'Inversion & Subject-Verb Agreement',
    questionEn:
      'Fill in the blank with appropriate parts of speech.\nRarely ______ such blatant disregard for protocol, nor ______ it so openly tolerated.',
    questionHi:
      'रिक्त स्थान को उपयुक्त शब्दों से भरें।\nRarely ______ such blatant disregard for protocol, nor ______ it so openly tolerated.',
    optionsEn: [
      'had one witnessed, was',
      'one had witnessed, was',
      'had one witnessed, were',
      'had witnessed one, were',
    ],
    optionsHi: [
      'had one witnessed, was',
      'one had witnessed, was',
      'had one witnessed, were',
      'had witnessed one, were',
    ],
    correctIndex: 0,
    explanationEn:
      'Negative/restrictive adverbials placed at the start of a clause ("Rarely...", "nor...") trigger subject-auxiliary inversion:\n• First blank: "Rarely had one witnessed..." (auxiliary "had" before subject "one").\n• Second blank: "nor was it..." (singular pronoun "it" takes singular verb "was", not "were").\nHence, option (A) is correct.',
    explanationHi:
      'वाक्य की शुरुआत नकारात्मक क्रिया-विशेषण ("Rarely", "nor") से होने पर Inversion (सहायक क्रिया + कर्ता) का नियम लगता है, तथा एकवचन कर्ता "it" के साथ "was" आता है। अतः "had one witnessed, was" सही है।',
  },
  {
    id: 'cgl26_01o2_q79',
    topic: 'Idioms & Phrases',
    questionEn:
      'Choose the correct idiom meaning for the phrase highlighted in brackets.\nHe didn’t tell me directly, but [reading between the lines], I think he is not happy with them.',
    questionHi:
      'कोष्ठक में दिए गए मुहावरे (Idiom) का सही अर्थ चुनें।\nHe didn’t tell me directly, but [reading between the lines], I think he is not happy with them.',
    optionsEn: [
      'Understanding the hidden or implied meaning.',
      'Taking words literally as they are written.',
      'Skipping parts of a text while reading.',
      'Guessing randomly without any context.',
    ],
    optionsHi: [
      'Understanding the hidden or implied meaning.',
      'Taking words literally as they are written.',
      'Skipping parts of a text while reading.',
      'Guessing randomly without any context.',
    ],
    correctIndex: 0,
    explanationEn:
      '"Reading between the lines" means inferring or understanding a hidden, unspoken, or implied meaning that is not explicitly stated.',
    explanationHi:
      '"Reading between the lines" का अर्थ स्पष्ट रूप से न कही गई बातों के छिपे हुए या निहित अर्थ को समझना होता है। अतः विकल्प (A) सही है।',
  },
  {
    id: 'cgl26_01o2_q80',
    topic: 'Error Spotting',
    questionEn:
      'Identify the error in the sentence.\nYou should write clear so that the reader understands.',
    questionHi:
      'दिए गए वाक्य में त्रुटि (Error) की पहचान करें।\nYou should write clear so that the reader understands.',
    optionsEn: ['reader', 'clear', 'understands', 'should'],
    optionsHi: ['reader', 'clear', 'understands', 'should'],
    correctIndex: 3,
    explanationEn:
      'As per the official SSC answer key, option (D) "should" is marked as the answer. (Grammar note for learners: in strict standard English, the adjective "clear" modifying the verb "write" is also commonly replaced with the adverb "clearly" — "You should write clearly so that the reader understands.")',
    explanationHi:
      'आधिकारिक SSC उत्तर कुंजी के अनुसार विकल्प (D) "should" को सही उत्तर माना गया है। (व्याकरणिक टिप्पणी: सामान्य मानक अंग्रेजी में क्रिया "write" की विशेषता बताने हेतु विशेषण "clear" के स्थान पर क्रिया-विशेषण "clearly" का प्रयोग किया जाता है।)',
  },
  {
    id: 'cgl26_01o2_q81',
    topic: 'Para Jumbles',
    questionEn:
      'Which of the given options arranges the following sentences in the most logical sequence to form a meaningful paragraph?\n1. Despite their seemingly simple form, jellyfish possess specialized cells called nematocysts that deliver venomous stings to their prey.\n2. Scientists continue to study jellyfish to understand their unique regenerative abilities and their potential applications in medicine.\n3. The evolutionary history of jellyfish dates back over 500 million years, making them one of the oldest living creatures on Earth.\n4. Some species, like the Turritopsis dohrnii, exhibit biological immortality by reverting to their juvenile state after reaching maturity.\n5. Their ability to thrive in diverse marine environments has made them a key subject of research in evolutionary biology.',
    questionHi:
      'निम्नलिखित वाक्यों को सबसे तार्किक क्रम में व्यवस्थित कर सार्थक अनुच्छेद बनाने वाला विकल्प चुनें:\n1. Despite their seemingly simple form, jellyfish possess specialized cells called nematocysts that deliver venomous stings to their prey.\n2. Scientists continue to study jellyfish to understand their unique regenerative abilities and their potential applications in medicine.\n3. The evolutionary history of jellyfish dates back over 500 million years, making them one of the oldest living creatures on Earth.\n4. Some species, like the Turritopsis dohrnii, exhibit biological immortality by reverting to their juvenile state after reaching maturity.\n5. Their ability to thrive in diverse marine environments has made them a key subject of research in evolutionary biology.',
    optionsEn: ['4-3-2-1-5', '1-3-4-5-2', '3-1-5-4-2', '2-1-4-3-5'],
    optionsHi: ['4-3-2-1-5', '1-3-4-5-2', '3-1-5-4-2', '2-1-4-3-5'],
    correctIndex: 2,
    explanationEn:
      'Sentence 3 introduces jellyfish via their 500-million-year evolutionary history. Sentence 1 describes their basic biological feature (nematocysts). Sentence 5 expands on their adaptability and research importance in evolutionary biology. Sentence 4 gives a remarkable specific example (biological immortality / regeneration in Turritopsis dohrnii), which directly leads into Sentence 2 ("understand their unique regenerative abilities..."). Correct order: 3-1-5-4-2.',
    explanationHi:
      'वाक्य 3 जेलिफ़िश के विकासवादी इतिहास से परिचय देता है, वाक्य 1 उनकी विशेष कोशिकाओं का वर्णन करता है, वाक्य 5 शोध में उनके महत्व को बताता है, वाक्य 4 जैविक अमरता/पुनर्जनन का उदाहरण देता है और वाक्य 2 उसी "regenerative abilities" के चिकित्सा अनुसंधान के साथ निष्कर्ष देता है। सही क्रम 3-1-5-4-2 है।',
  },
  {
    id: 'cgl26_01o2_q82',
    topic: 'Antonyms',
    questionEn:
      'Select the most appropriate antonym of the given word.\nPeregrinate',
    questionHi:
      'दिए गए शब्द का सबसे उपयुक्त विलोम (Antonym) चुनें।\nPeregrinate',
    optionsEn: ['Wander', 'Roam', 'Stay', 'Travel'],
    optionsHi: ['Wander', 'Roam', 'Stay', 'Travel'],
    correctIndex: 2,
    explanationEn:
      '"Peregrinate" means to travel or wander around from place to place, especially on foot. "Wander", "Roam", and "Travel" are its synonyms, while "Stay" (remain in one place) is its exact antonym.',
    explanationHi:
      '"Peregrinate" का अर्थ एक स्थान से दूसरे स्थान पर भ्रमण करना या यात्रा करना होता है। Wander, Roam और Travel इसके पर्यायवाची हैं, जबकि "Stay" (ठहरना/रुकना) इसका सही विलोम है।',
  },
  {
    id: 'cgl26_01o2_q83',
    topic: 'Idioms & Phrases',
    questionEn:
      'Choose the correct meaning of idiom:\nGiving a false colouring to',
    questionHi:
      'दिए गए मुहावरे (Idiom) का सही अर्थ चुनें:\nGiving a false colouring to',
    optionsEn: [
      'Describing something vividly',
      'Misrepresenting the facts',
      'Hiding something completely',
      'Adding visual detail to a scene',
    ],
    optionsHi: [
      'Describing something vividly',
      'Misrepresenting the facts',
      'Hiding something completely',
      'Adding visual detail to a scene',
    ],
    correctIndex: 1,
    explanationEn:
      '"To give a false colouring to" means to distort, twist, or misrepresent facts/events so as to create a misleading impression.',
    explanationHi:
      '"Giving a false colouring to" का अर्थ तथ्यों को तोड़-मरोड़कर या गलत रूप में प्रस्तुत करना (Misrepresenting the facts) होता है। अतः विकल्प (B) सही है।',
  },
  {
    id: 'cgl26_01o2_q84',
    topic: 'Spelling',
    questionEn: 'Spot the correct spelling of the ear-nose-throat specialty.',
    questionHi: 'कान-नाक-गला विशेषज्ञता (ENT) की सही वर्तनी पहचानें।',
    optionsEn: [
      'Otorhinolarynology',
      'Otorhinolaryngology',
      'Otorhinolaringology',
      'Otorrhinolaryngology',
    ],
    optionsHi: [
      'Otorhinolarynology',
      'Otorhinolaryngology',
      'Otorhinolaringology',
      'Otorrhinolaryngology',
    ],
    correctIndex: 1,
    explanationEn:
      'Break it by Greek roots: oto- (ear) + rhino- (nose, single "r") + laryngo- (larynx/throat, with "y" and "g") + -logy (study) = Otorhinolaryngology.',
    explanationHi:
      'सही वर्तनी "Otorhinolaryngology" है (oto = कान + rhino = नाक + laryngo = गला + logy = अध्ययन)। अतः विकल्प (B) सही है।',
  },
  {
    id: 'cgl26_01o2_q85',
    topic: 'One-Word Substitution',
    questionEn:
      "Choose the correct one-word substitute for: 'A person who flatters for personal gain.'",
    questionHi:
      "'A person who flatters for personal gain.' के लिए सही एक-शब्द प्रतिस्थापन चुनें।",
    optionsEn: ['Altruist', 'Protégé', 'Mentor', 'Sycophant'],
    optionsHi: ['Altruist', 'Protégé', 'Mentor', 'Sycophant'],
    correctIndex: 3,
    explanationEn:
      '"Sycophant" means a person who acts obsequiously toward someone important in order to gain personal advantage (a flatterer/yes-man). ("Altruist" = selfless helper; "Mentor" = experienced adviser; "Protégé" = person guided by a mentor.)',
    explanationHi:
      'व्यक्तिगत लाभ के लिए चापलूसी करने वाले व्यक्ति को "Sycophant" (चापलूस) कहते हैं। अतः विकल्प (D) सही है।',
  },
  {
    id: 'cgl26_01o2_q86',
    topic: 'One-Word Substitution',
    questionEn:
      "Choose the correct one-word substitute for: 'Pleasure derived from others' misfortune.'",
    questionHi:
      "'Pleasure derived from others' misfortune.' के लिए सही एक-शब्द प्रतिस्थापन चुनें।",
    optionsEn: ['Antipathy', 'Schadenfreude', 'Empathy', 'Sympathy'],
    optionsHi: ['Antipathy', 'Schadenfreude', 'Empathy', 'Sympathy'],
    correctIndex: 1,
    explanationEn:
      '"Schadenfreude" (from German Schaden = harm + Freude = joy) means pleasure or satisfaction derived by someone from another person\'s misfortune.',
    explanationHi:
      'दूसरों के दुर्भाग्य या कष्ट से मिलने वाले आनंद को "Schadenfreude" कहा जाता है। अतः विकल्प (B) सही है।',
  },
  {
    id: 'cgl26_01o2_q87',
    topic: 'Inversion & Conjunctions',
    questionEn:
      'Select the correct option:\nNot only ___ the funding, but he also offered strategic guidance.',
    questionHi:
      'सही विकल्प का चयन करें:\nNot only ___ the funding, but he also offered strategic guidance.',
    optionsEn: [
      'did he provide',
      'he provided',
      'he did provide',
      'had he provided',
    ],
    optionsHi: [
      'did he provide',
      'he provided',
      'he did provide',
      'had he provided',
    ],
    correctIndex: 0,
    explanationEn:
      'When a sentence begins with the negative correlative conjunction "Not only", subject-auxiliary inversion is mandatory. Since the second clause is in Simple Past ("offered"), the first clause uses Simple Past inversion: "Not only did he provide...".',
    explanationHi:
      'वाक्य की शुरुआत "Not only" से होने पर Inversion (सहायक क्रिया + कर्ता + मुख्य क्रिया) का प्रयोग होता है। दूसरे भाग में Simple Past ("offered") है, अतः "did he provide" सही है।',
  },
  {
    id: 'cgl26_01o2_q88',
    topic: 'Error Spotting (Nouns)',
    questionEn:
      'Find the part of the sentence that contains an error:\nAll the equipments (1)/ needed for the installation (2)/ were procured (3)/ well in advance. (4)',
    questionHi:
      'वाक्य के उस भाग को चुनें जिसमें त्रुटि है:\nAll the equipments (1)/ needed for the installation (2)/ were procured (3)/ well in advance. (4)',
    optionsEn: ['(1)', '(2)', '(3)', '(4)'],
    optionsHi: ['(1)', '(2)', '(3)', '(4)'],
    correctIndex: 0,
    explanationEn:
      '"Equipment" is an uncountable noun in English and does NOT take a plural "-s" form ("equipments" is incorrect). It should be "All the equipment..." (with singular verb "was procured", or "All the pieces of equipment..."). Hence, the primary error is in part (1).',
    explanationHi:
      '"Equipment" एक uncountable noun है, इसका बहुवचन "equipments" नहीं बनता। अतः भाग (1) में त्रुटि है।',
  },
  {
    id: 'cgl26_01o2_q89',
    topic: 'Error Spotting (Conjunctions)',
    questionEn:
      'Find the part of the sentence that contains an error:\nAlthough the results appear encouraging on the surface, (1)/ yet critics remain sceptical of the methods (2)/ employed in gathering and interpreting (3)/ the underlying datasets. (4)',
    questionHi:
      'वाक्य के उस भाग को चुनें जिसमें त्रुटि है:\nAlthough the results appear encouraging on the surface, (1)/ yet critics remain sceptical of the methods (2)/ employed in gathering and interpreting (3)/ the underlying datasets. (4)',
    optionsEn: ['(1)', '(2)', '(3)', '(4)'],
    optionsHi: ['(1)', '(2)', '(3)', '(4)'],
    correctIndex: 1,
    explanationEn:
      'When a subordinate clause begins with "Although" followed by a comma, adding "yet" before the main clause creates a double conjunction / redundancy in modern standard English. Removing "yet" in part (2) ("...on the surface, critics remain sceptical...") makes the sentence clean and correct.',
    explanationHi:
      'आधुनिक मानक व्याकरण में "Although" के साथ अल्पविराम (comma) आने पर पुनः "yet" का प्रयोग अनावश्यक (redundant) माना जाता है। अतः भाग (2) में त्रुटि है।',
  },
  {
    id: 'cgl26_01o2_q90',
    topic: 'Active & Passive Voice',
    questionEn:
      'Change the following from active to passive:\nWhy did they cancel the meeting?',
    questionHi:
      'दिए गए वाक्य को Active से Passive Voice में बदलें:\nWhy did they cancel the meeting?',
    optionsEn: [
      'Why have the meeting was cancelled?',
      'Why was the meeting cancelled?',
      'Why has the meeting been cancelled?',
      'Why is the meeting cancelled?',
    ],
    optionsHi: [
      'Why have the meeting was cancelled?',
      'Why was the meeting cancelled?',
      'Why has the meeting been cancelled?',
      'Why is the meeting cancelled?',
    ],
    correctIndex: 1,
    explanationEn:
      'Simple Past Interrogative Active ("Why + did + subject + V₁ + object?") changes in Passive Voice to "Why + was/were + object + V₃?". Since "the meeting" is singular, the correct passive form is: "Why was the meeting cancelled?"',
    explanationHi:
      'Simple Past प्रश्नवाचक Active ("Why did they cancel...") का Passive रूप "Why + was/were + Object + V₃?" होता है। अतः "Why was the meeting cancelled?" सही है।',
  },
  {
    id: 'cgl26_01o2_q91',
    topic: 'Active & Passive Voice',
    questionEn:
      'Change the following from active to passive:\nThe proposal should not have undergone such sweeping modifications.',
    questionHi:
      'दिए गए वाक्य को Active से Passive Voice में बदलें:\nThe proposal should not have undergone such sweeping modifications.',
    optionsEn: [
      'Such modifications should not have been undergone by the proposal.',
      'The proposal should not be modified so sweepingly.',
      'The modifications should not have been swept into the proposal.',
      'The proposal should not have been subjected to sweeping modifications.',
    ],
    optionsHi: [
      'Such modifications should not have been undergone by the proposal.',
      'The proposal should not be modified so sweepingly.',
      'The modifications should not have been swept into the proposal.',
      'The proposal should not have been subjected to sweeping modifications.',
    ],
    correctIndex: 3,
    explanationEn:
      'The verb "undergo" does not take a natural literal passive ("been undergone by the proposal" is unidiomatic). Its natural passive equivalent preserving the exact modal perfect tense ("should not have + V₃") is "should not have been subjected to": "The proposal should not have been subjected to sweeping modifications."',
    explanationHi:
      '"should not have undergone" का स्वाभाविक और व्याकरणिक रूप से सटीक Passive रूप (समान modal perfect काल में) "should not have been subjected to" होता है। अतः विकल्प (D) सही है।',
  },
  {
    id: 'cgl26_01o2_q92',
    topic: 'Sentence Improvement (Prepositions)',
    questionEn:
      'Choose the most suitable option to replace the highlighted part of the sentence:\nThe principal was angry [upon the students].',
    questionHi:
      'वाक्य के कोष्ठक वाले भाग को बदलने के लिए सबसे उपयुक्त विकल्प चुनें:\nThe principal was angry [upon the students].',
    optionsEn: [
      'angry by the students',
      'angry with the students',
      'angry over students',
      'angry on students',
    ],
    optionsHi: [
      'angry by the students',
      'angry with the students',
      'angry over students',
      'angry on students',
    ],
    correctIndex: 1,
    explanationEn:
      'Fixed preposition rule: we are "angry WITH a person" (e.g., angry with the students) and "angry AT / ABOUT a thing or situation". Hence, "angry with the students" is correct.',
    explanationHi:
      'निश्चित पूर्वसर्ग नियम: किसी व्यक्ति से नाराज़ होने के लिए "angry with" (तथा किसी बात/वस्तु पर नाराज़ होने के लिए "angry at/about") का प्रयोग होता है। अतः "angry with the students" सही है।',
  },
  {
    id: 'cgl26_01o2_q93',
    topic: 'Direct & Indirect Speech',
    questionEn:
      'A sentence is provided in indirect speech. From the four given options, choose the one that most accurately conveys the sentence in its corresponding direct speech.\nThe captain said that had they practiced more, they might have won the tournament.',
    questionHi:
      'दिए गए Indirect Speech वाक्य का सबसे सटीक Direct Speech रूप चुनें।\nThe captain said that had they practiced more, they might have won the tournament.',
    optionsEn: [
      '“If we practiced more, we might win the tournament,” said the captain.',
      '“Had we practiced more, we might have won the tournament,” said the captain.',
      '“If only we would practice more, we might win,” said the captain.',
      '“Had we been practicing, we might win,” said the captain.',
    ],
    optionsHi: [
      '“If we practiced more, we might win the tournament,” said the captain.',
      '“Had we practiced more, we might have won the tournament,” said the captain.',
      '“If only we would practice more, we might win,” said the captain.',
      '“Had we been practicing, we might win,” said the captain.',
    ],
    correctIndex: 1,
    explanationEn:
      'Third Conditional sentences ("Had + Subject + V₃, Subject + might/would have + V₃") do NOT change tense between Direct and Indirect speech; only the pronouns shift ("they" reverts to "we"). Therefore, option (B) is exact.',
    explanationHi:
      'Third Conditional वाक्यों ("Had + कर्ता + V₃, ... might have + V₃") का काल Direct और Indirect दोनों में अपरिवर्तित रहता है; केवल सर्वनाम "they" → "we" में बदलता है। अतः विकल्प (B) सही है।',
  },
  {
    id: 'cgl26_01o2_q94',
    topic: 'Synonyms',
    questionEn:
      'Choose the most appropriate synonym of the underlined word.\nThere is an [implicit] trust between a doctor and their patient.',
    questionHi:
      'कोष्ठक में दिए गए शब्द का सबसे उपयुक्त पर्यायवाची चुनें।\nThere is an [implicit] trust between a doctor and their patient.',
    optionsEn: ['Stated clearly', 'Hidden', 'Unspoken', 'Confusing'],
    optionsHi: ['Stated clearly', 'Hidden', 'Unspoken', 'Confusing'],
    correctIndex: 2,
    explanationEn:
      '"Implicit" means suggested or understood without being directly expressed in words — i.e., "Unspoken" or tacit. ("Stated clearly" = explicit, its antonym.)',
    explanationHi:
      '"Implicit" का अर्थ अंतर्निहित या अनकहा (जो शब्दों में कहे बिना स्वतः समझा जाए) होता है। अतः इसका सबसे सटीक पर्यायवाची "Unspoken" है।',
  },
  {
    id: 'cgl26_01o2_q95',
    topic: 'Sentence Rearrangement',
    questionEn:
      'In the following question, the first and last parts of the sentence (1 and 6) are given. The rest of the sentence is split into four parts and named P, Q, R, and S. These four parts are not given in their proper order. Read the sentence and find out which of the four combinations is correct.\n1. The fundamental right\nP. which ensures that every citizen\nQ. is a cornerstone\nR. to freedom of speech\nS. of modern democracy\n6. can express their opinions without fear.',
    questionHi:
      'निम्नलिखित प्रश्न में वाक्य का पहला और अंतिम भाग (1 और 6) दिया गया है। शेष चार भागों (P, Q, R, S) को सही क्रम में व्यवस्थित करें।\n1. The fundamental right\nP. which ensures that every citizen\nQ. is a cornerstone\nR. to freedom of speech\nS. of modern democracy\n6. can express their opinions without fear.',
    optionsEn: ['RQSP', 'PQRS', 'RPSQ', 'SRQP'],
    optionsHi: ['RQSP', 'PQRS', 'RPSQ', 'SRQP'],
    correctIndex: 0,
    explanationEn:
      'Connecting the sentence smoothly:\n(1) The fundamental right → (R) to freedom of speech → (Q) is a cornerstone → (S) of modern democracy → (P) which ensures that every citizen → (6) can express their opinions without fear.\nCorrect sequence: RQSP.',
    explanationHi:
      'सही वाक्य संरचना: "The fundamental right (1) to freedom of speech (R) is a cornerstone (Q) of modern democracy (S) which ensures that every citizen (P) can express their opinions without fear (6)." अतः सही क्रम RQSP है।',
  },
  {
    id: 'cgl26_01o2_q96',
    topic: 'Reading Comprehension',
    passageEn: HUGHIE_ERSKINE_PASSAGE,
    questionEn:
      'Why did Laura’s father hesitate to approve her marriage to Hughie?',
    questionHi:
      'गद्यांश के अनुसार, लॉरा के पिता ह्यूगी से उसकी शादी की अनुमति देने में क्यों हिचकिचा रहे थे?',
    optionsEn: [
      'He doubted Hughie’s ability to remain generous after marriage.',
      'He disliked Hughie’s friendship with the painter Alan Trevor.',
      'He expected Hughie to establish a respectable source of income.',
      'He believed Hughie lacked sufficient affection and concern for Laura.',
    ],
    optionsHi: [
      'He doubted Hughie’s ability to remain generous after marriage.',
      'He disliked Hughie’s friendship with the painter Alan Trevor.',
      'He expected Hughie to establish a respectable source of income.',
      'He believed Hughie lacked sufficient affection and concern for Laura.',
    ],
    correctIndex: 2,
    explanationEn:
      'Paragraph 1 explicitly states: "He wished to marry Laura, yet her father insisted that Hughie must first obtain a respectable income." This directly matches option (C).',
    explanationHi:
      'पहले अनुच्छेद में स्पष्ट लिखा है कि लॉरा के पिता ने शर्त रखी थी कि विवाह से पहले ह्यूगी को एक सम्मानजनक आय (respectable income) अर्जित करनी होगी। अतः विकल्प (C) सही है।',
  },
  {
    id: 'cgl26_01o2_q97',
    topic: 'Reading Comprehension',
    passageEn: HUGHIE_ERSKINE_PASSAGE,
    questionEn:
      'What prompted Hughie to give the gold coin to the elderly model?',
    questionHi:
      'ह्यूगी ने वृद्ध मॉडल को सोने का सिक्का किस कारण से दिया?',
    optionsEn: [
      'The model’s apparent suffering immediately awakened Hughie’s compassion.',
      'The model’s courteous behaviour suggested that he deserved assistance.',
      'Alan had asked Hughie to reward the model for posing patiently.',
      'The model’s silence made Hughie believe that payment was expected.',
    ],
    optionsHi: [
      'The model’s apparent suffering immediately awakened Hughie’s compassion.',
      'The model’s courteous behaviour suggested that he deserved assistance.',
      'Alan had asked Hughie to reward the model for posing patiently.',
      'The model’s silence made Hughie believe that payment was expected.',
    ],
    correctIndex: 0,
    explanationEn:
      'Paragraph 1 states: "The model appeared so weak and miserable that Hughie felt immediate sympathy for him." Moved by this compassion, Hughie gave him his only gold coin. Hence, option (A) is correct.',
    explanationHi:
      'गद्यांश के अनुसार, मॉडल इतना कमजोर और दयनीय दिखाई दे रहा था कि ह्यूगी के मन में तुरंत उसके प्रति सहानुभूति/करुणा जाग गई। अतः विकल्प (A) सही है।',
  },
  {
    id: 'cgl26_01o2_q98',
    topic: 'Reading Comprehension',
    passageEn: HUGHIE_ERSKINE_PASSAGE,
    questionEn:
      'Why did Hughie feel embarrassed after learning the model’s true identity?',
    questionHi:
      'मॉडल की असली पहचान जानने के बाद ह्यूगी को शर्मिंदगी क्यों महसूस हुई?',
    optionsEn: [
      'He feared Alan would accuse him of interrupting the portrait session.',
      'He realised that Laura’s father might hear about his impulsive behaviour.',
      'He regretted giving away money that he urgently needed for marriage.',
      'He thought the wealthy baron might ridicule his misplaced act of charity.',
    ],
    optionsHi: [
      'He feared Alan would accuse him of interrupting the portrait session.',
      'He realised that Laura’s father might hear about his impulsive behaviour.',
      'He regretted giving away money that he urgently needed for marriage.',
      'He thought the wealthy baron might ridicule his misplaced act of charity.',
    ],
    correctIndex: 3,
    explanationEn:
      'Paragraph 3 states: "Hughie was deeply embarrassed. He imagined that the millionaire would laugh at his foolish attempt to offer charity." This directly matches option (D).',
    explanationHi:
      'तीसरे अनुच्छेद के अनुसार, ह्यूगी को लगा कि करोड़पति बैरन उसके दान देने के इस मूर्खतापूर्ण प्रयास पर हँसेगा (मज़ाक उड़ाएगा)। अतः विकल्प (D) सही है।',
  },
  {
    id: 'cgl26_01o2_q99',
    topic: 'Reading Comprehension',
    passageEn: HUGHIE_ERSKINE_PASSAGE,
    questionEn:
      'What made Hughie’s gift especially meaningful to Baron Hausberg?',
    questionHi:
      'बैरन हॉसबर्ग के लिए ह्यूगी का उपहार विशेष रूप से सार्थक क्यों था?',
    optionsEn: [
      'Hughie offered it despite knowing that the baron was testing him.',
      'Hughie intended it to strengthen his friendship with Alan Trevor.',
      'Hughie gave it privately while believing the recipient was helpless.',
      'Hughie expected the recipient to repay him after recovering financially.',
    ],
    optionsHi: [
      'Hughie offered it despite knowing that the baron was testing him.',
      'Hughie intended it to strengthen his friendship with Alan Trevor.',
      'Hughie gave it privately while believing the recipient was helpless.',
      'Hughie expected the recipient to repay him after recovering financially.',
    ],
    correctIndex: 2,
    explanationEn:
      'Paragraph 4 explains: "The baron, though rich, valued the sincerity of the act because it had been performed under the belief that he was helpless. Charity offered for public approval may flatter the giver, but compassion shown in private reveals character." Hence, option (C) is correct.',
    explanationHi:
      'अंतिम अनुच्छेद के अनुसार, बैरन ने उस कार्य की सच्चाई का सम्मान किया क्योंकि ह्यूगी ने उसे एकांत में यह मानते हुए दान दिया था कि वह असहाय है। अतः विकल्प (C) सही है।',
  },
  {
    id: 'cgl26_01o2_q100',
    topic: 'Reading Comprehension',
    passageEn: HUGHIE_ERSKINE_PASSAGE,
    questionEn:
      'Which inference best explains the contrast between Hughie’s coin and the baron’s wedding gift?',
    questionHi:
      'निम्नलिखित में से कौन-सा निष्कर्ष ह्यूगी के सिक्के और बैरन के विवाह उपहार के बीच के अंतर को सर्वोत्तम रूप से स्पष्ट करता है?',
    optionsEn: [
      'The coin represents financial carelessness, whereas the gift represents calculated generosity.',
      'The coin is given in ignorance, whereas the gift is given to display the baron’s wealth.',
      'The coin exposes Hughie’s poor judgment, whereas the gift corrects his misunderstanding.',
      'The coin reveals generosity through sacrifice, whereas the gift recognises that moral quality.',
    ],
    optionsHi: [
      'The coin represents financial carelessness, whereas the gift represents calculated generosity.',
      'The coin is given in ignorance, whereas the gift is given to display the baron’s wealth.',
      'The coin exposes Hughie’s poor judgment, whereas the gift corrects his misunderstanding.',
      'The coin reveals generosity through sacrifice, whereas the gift recognises that moral quality.',
    ],
    correctIndex: 3,
    explanationEn:
      'Hughie gave away a gold coin he "could scarcely afford to lose" — demonstrating true generosity through personal sacrifice. In return, the baron sent a wedding gift to honour and recognise Hughie\'s sincere moral character. Hence, option (D) is the best inference.',
    explanationHi:
      'ह्यूगी का सोने का सिक्का उसके त्याग और सच्ची उदारता को दर्शाता है, जबकि बैरन का विवाह उपहार उसी नैतिक गुण और संवेदनशीलता के सम्मान का प्रतीक है। अतः विकल्प (D) सर्वोत्तम निष्कर्ष है।',
  },
];
