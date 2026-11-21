import { Question } from '../../types/exam';

export const SECTION_2_GA: Question[] = [
  {
    id: 'cgl26_30s2_q26',
    topic: 'Global Indices',
    questionEn:
      'Which high-level global metric predominantly derives its evaluation of subjective well-being from data collected through the Gallup World Poll?',
    questionHi:
      'कौन सा उच्च-स्तरीय वैश्विक मीट्रिक मुख्य रूप से गैलप वर्ल्ड पोल के माध्यम से एकत्र किए गए डेटा से व्यक्तिपरक कल्याण का मूल्यांकन करता है?',
    optionsEn: [
      'World Happiness Index',
      'Global Competitiveness Index',
      'Environmental Performance Index',
      'Human Development Index',
    ],
    optionsHi: [
      'विश्व प्रसन्नता सूचकांक',
      'वैश्विक प्रतिस्पर्धात्मकता सूचकांक',
      'पर्यावरण प्रदर्शन सूचकांक',
      'मानव विकास सूचकांक',
    ],
    correctIndex: 0,
    explanationEn:
      'The World Happiness Report / World Happiness Index primarily uses the Cantril Ladder life-evaluation data collected globally through the Gallup World Poll.',
    explanationHi:
      'विश्व प्रसन्नता सूचकांक (World Happiness Index) मुख्य रूप से गैलप वर्ल्ड पोल द्वारा एकत्र किए गए जीवन-मूल्यांकन (व्यक्तिपरक कल्याण) डेटा पर आधारित है।',
  },
  {
    id: 'cgl26_30s2_q27',
    topic: 'Economics',
    questionEn: 'What is a key goal of the Human Development Index (HDI)?',
    questionHi: 'मानव विकास सूचकांक (एचडीआई) का प्रमुख लक्ष्य क्या है?',
    optionsEn: [
      'To shift the focus from solely economic development to human development.',
      'To only measure economic growth.',
      'To only measure military strength.',
      'To only measure environmental impact.',
    ],
    optionsHi: [
      'केवल आर्थिक विकास से हटकर मानव विकास पर ध्यान केन्द्रित करना।',
      'केवल आर्थिक विकास को मापना।',
      'केवल सैन्य शक्ति को मापना।',
      'केवल पर्यावरणीय प्रभाव को मापना।',
    ],
    correctIndex: 0,
    explanationEn:
      'Developed by UNDP (Mahbub ul Haq & Amartya Sen), HDI evaluates countries across health (life expectancy), education, and standard of living (GNI per capita) to shift focus beyond GDP alone to holistic human development.',
    explanationHi:
      'यूएनडीपी (UNDP) द्वारा जारी एचडीआई स्वास्थ्य, शिक्षा और प्रति व्यक्ति आय तीनों आयामों को शामिल कर केवल आर्थिक वृद्धि के बजाय समग्र मानव विकास पर ध्यान केंद्रित करता है।',
  },
  {
    id: 'cgl26_30s2_q28',
    topic: 'Environment',
    questionEn: 'How many categories does the USA Air Quality Index (AQI) use to classify air quality?',
    questionHi: 'वायु गुणवत्ता को वर्गीकृत करने के लिए यूएसए वायु गुणवत्ता सूचकांक (एक्यूआई) कितनी श्रेणियों का उपयोग करता है?',
    optionsEn: ['4', '5', '6', '8'],
    optionsHi: ['4', '5', '6', '8'],
    correctIndex: 2,
    explanationEn:
      'The US EPA Air Quality Index classifies air quality into 6 color-coded categories: Good (0–50), Moderate (51–100), Unhealthy for Sensitive Groups (101–150), Unhealthy (151–200), Very Unhealthy (201–300), and Hazardous (301+).',
    explanationHi:
      'यूएसए एक्यूआई वायु गुणवत्ता को 6 श्रेणियों में वर्गीकृत करता है: अच्छा, मध्यम, संवेदनशील समूहों के लिए अस्वस्थ, अस्वस्थ, बहुत अस्वस्थ और खतरनाक।',
  },
  {
    id: 'cgl26_30s2_q29',
    topic: 'Science & Tech (ISRO)',
    questionEn:
      'Which of the following satellites is launched by ISRO for disaster management and natural resource monitoring?',
    questionHi:
      'आपदा प्रबंधन और प्राकृतिक संसाधन निगरानी के लिए इसरो द्वारा निम्नलिखित में से कौन सा उपग्रह लॉन्च किया गया है?',
    optionsEn: ['Astrosat', 'GSAT', 'RISAT', 'Cartosat'],
    optionsHi: ['एस्ट्रोसैट', 'जीसैट', 'रीसैट', 'कार्टोसैट'],
    correctIndex: 2,
    explanationEn:
      'RISAT (Radar Imaging Satellite) series by ISRO provides all-weather, day-and-night Synthetic Aperture Radar (SAR) earth observation used extensively for disaster management, flood mapping, agriculture, and natural resource monitoring.',
    explanationHi:
      'इसरो का रीसैट (RISAT - Radar Imaging Satellite) सभी मौसमों में दिन-रात पृथ्वी अवलोकन करता है, जिसका उपयोग आपदा प्रबंधन और प्राकृतिक संसाधनों की निगरानी में किया जाता है।',
  },
  {
    id: 'cgl26_30s2_q30',
    topic: 'Science & Tech (ISRO)',
    questionEn: 'Which technology is ISRO testing through the RLV-TD project?',
    questionHi: 'आरएलवी-टीडी परियोजना के माध्यम से इसरो किस तकनीक का परीक्षण कर रहा है?',
    optionsEn: [
      'Robotic lunar excavation',
      'Underwater satellite deployment',
      'Deep space communication',
      'Reusable space launch vehicles',
    ],
    optionsHi: [
      'रोबोटिक चंद्र उत्खनन',
      'पानी के अंदर उपग्रह परिनियोजन',
      'गहन अंतरिक्ष संचार',
      'पुनः प्रयोज्य अंतरिक्ष प्रक्षेपण वाहन',
    ],
    correctIndex: 3,
    explanationEn:
      'RLV-TD stands for Reusable Launch Vehicle – Technology Demonstrator (Pushpak). It tests winged autonomous landing and hypersonic re-entry for reusable space launch vehicles to lower launch costs.',
    explanationHi:
      'RLV-TD का पूरा नाम Reusable Launch Vehicle – Technology Demonstrator है, जिसके अंतर्गत इसरो पुनः प्रयोज्य अंतरिक्ष प्रक्षेपण वाहन तकनीक का परीक्षण कर रहा है।',
  },
  {
    id: 'cgl26_30s2_q31',
    topic: 'Medieval History',
    questionEn: 'The construction of Taj Mahal was completed in which year?',
    questionHi: 'ताजमहल का निर्माण किस वर्ष पूरा हुआ?',
    optionsEn: ['1631', '1643', '1653', '1666'],
    optionsHi: ['1631', '1643', '1653', '1666'],
    correctIndex: 2,
    explanationEn:
      'Commissioned by Mughal Emperor Shah Jahan in 1632 in memory of Mumtaz Mahal, the main mausoleum was ready by 1643 and the entire Taj Mahal complex was fully completed in 1653.',
    explanationHi:
      'मुगल सम्राट शाहजहाँ द्वारा मुमताज महल की स्मृति में बनवाए गए ताजमहल परिसर का निर्माण कार्य वर्ष 1653 में पूर्ण हुआ।',
  },
  {
    id: 'cgl26_30s2_q32',
    topic: 'International Relations',
    questionEn:
      "What is a key aspect of the Quad's (Quadrilateral Security Dialogue) approach to regional security?",
    questionHi:
      'क्षेत्रीय सुरक्षा के लिए क्वाड (चतुर्भुज सुरक्षा वार्ता) दृष्टिकोण का एक प्रमुख पहलू क्या है?',
    optionsEn: [
      'Forming a formal military alliance',
      'Promoting multilateral cooperation',
      'Isolating regional powers',
      'Creating exclusive trade blocs',
    ],
    optionsHi: [
      'औपचारिक सैन्य गठबंधन का गठन',
      'बहुपक्षीय सहयोग को बढ़ावा देना',
      'क्षेत्रीय शक्तियों को अलग-थलग करना',
      'विशिष्ट व्यापार ब्लॉकों का निर्माण',
    ],
    correctIndex: 1,
    explanationEn:
      'The Quad (India, USA, Japan, Australia) is not a formal military treaty alliance; it focuses on promoting multilateral cooperation for a free, open, and inclusive Indo-Pacific.',
    explanationHi:
      'क्वाड (भारत, अमेरिका, जापान, ऑस्ट्रेलिया) एक औपचारिक सैन्य संधि नहीं है, बल्कि यह स्वतंत्र और खुले हिंद-प्रशांत क्षेत्र के लिए बहुपक्षीय सहयोग को बढ़ावा देता है।',
  },
  {
    id: 'cgl26_30s2_q33',
    topic: 'Sports',
    questionEn: 'How many points are awarded for a successful "touchdown" in American Football?',
    questionHi: 'अमेरिकी फुटबॉल में सफल "टचडाउन" के लिए कितने अंक दिए जाते हैं?',
    optionsEn: ['3', '5', '6', '7'],
    optionsHi: ['3', '5', '6', '7'],
    correctIndex: 2,
    explanationEn:
      'In American Football, a touchdown awards 6 points (followed by an optional extra-point kick for 1 point or a two-point conversion attempt).',
    explanationHi:
      'अमेरिकी फुटबॉल में एक सफल टचडाउन के लिए 6 अंक दिए जाते हैं (इसके बाद अतिरिक्त किक या कन्वर्ज़न का अवसर मिलता है)।',
  },
  {
    id: 'cgl26_30s2_q34',
    topic: 'Art & Culture',
    questionEn: 'Which part of early Gandhara art shows that it was influenced by Greek art styles?',
    questionHi: 'प्रारंभिक गांधार कला का कौन सा भाग दर्शाता है कि यह ग्रीक कला शैलियों से प्रभावित था?',
    optionsEn: [
      'Symbolic representation of Buddha through footprints',
      'Use of terracotta in religious art',
      'Depiction of the Buddha with draped robe and wavy hair',
      'Use of floral capitals and bell-shaped domes',
    ],
    optionsHi: [
      'पदचिह्नों के माध्यम से बुद्ध का प्रतीकात्मक प्रतिनिधित्व',
      'धार्मिक कला में टेराकोटा का उपयोग',
      'बुद्ध का वस्त्र पहने और लहराते बालों वाला चित्रण',
      'पुष्प शीर्ष और घंटी के आकार के गुंबदों का उपयोग',
    ],
    correctIndex: 2,
    explanationEn:
      'Gandhara art (Greco-Buddhist style) fused Indian Buddhist themes with Hellenistic Greek sculptural realism—notably depicting the Buddha with wavy/curly hair (resembling Apollo), sharp facial features, and flowing pleated draped robes.',
    explanationHi:
      'गांधार कला (ग्रीको-बौद्ध शैली) में यूनानी मूर्तिकला का स्पष्ट प्रभाव बुद्ध के लहराते बालों, यथार्थवादी मुख-मुद्रा और सिलवटों वाले लहराते वस्त्रों के चित्रण में दिखाई देता है।',
  },
  {
    id: 'cgl26_30s2_q35',
    topic: 'Books & Authors',
    questionEn:
      'Who won the 1976 Booker Prize for “Heat and Dust,” a novel that juxtaposes colonial India with postcolonial experiences?',
    questionHi:
      '1976 का बुकर पुरस्कार किसने "हीट एंड डस्ट" के लिए जीता, यह एक उपन्यास है जो औपनिवेशिक भारत और उत्तर-औपनिवेशिक अनुभवों को जोड़ता है?',
    optionsEn: [
      'Salman Rushdie',
      'J.G. Farrell',
      'Ruth Prawer Jhabvala',
      'Anita Desai',
    ],
    optionsHi: [
      'सलमान रुश्दी',
      'जे.जी. फैरेल',
      'रूथ प्रावर झबवाला',
      'अनिता देसाई',
    ],
    correctIndex: 2,
    explanationEn:
      'Ruth Prawer Jhabvala won the Booker Prize for her novel "Heat and Dust" (1975/1976 cycle), which weaves together two parallel stories set in 1920s British India and modern India.',
    explanationHi:
      'रूथ प्रावर झबवाला ने अपने प्रसिद्ध उपन्यास "हीट एंड डस्ट" के लिए बुकर पुरस्कार जीता था, जो औपनिवेशिक और उत्तर-औपनिवेशिक भारत के अनुभवों को दर्शाता है।',
  },
  {
    id: 'cgl26_30s2_q36',
    topic: 'Books & Authors',
    questionEn:
      "Which book by Vikram Chandra won the Commonwealth Writers' Prize for Best First Book in 1996?",
    questionHi:
      'विक्रम चंद्रा की किस पुस्तक ने 1996 में सर्वश्रेष्ठ प्रथम पुस्तक के लिए कॉमनवेल्थ राइटर्स पुरस्कार जीता?',
    optionsEn: [
      'Love and Longing in Bombay',
      'Sacred Games',
      'Red Earth and Pouring Rain',
      'The Gypsy Goddess',
    ],
    optionsHi: [
      'लव एंड लॉन्गिंग इन बॉम्बे',
      'सेक्रेड गेम्स',
      'रेड अर्थ एंड पोरिंग रेन',
      'द जिप्सी गॉडेस',
    ],
    correctIndex: 2,
    explanationEn:
      'Vikram Chandra’s debut novel "Red Earth and Pouring Rain" (1995) won the 1996 Commonwealth Writers’ Prize for Best First Book.',
    explanationHi:
      'विक्रम चंद्रा के पहले उपन्यास "रेड अर्थ एंड पोरिंग रेन" ने 1996 में सर्वश्रेष्ठ प्रथम पुस्तक के लिए कॉमनवेल्थ राइटर्स पुरस्कार जीता था।',
  },
  {
    id: 'cgl26_30s2_q37',
    topic: 'Five-Year Plans',
    questionEn: 'The Twenty-Point Programme (TPP) was introduced during the _________ Five-Year Plan.',
    questionHi: 'बीस सूत्री कार्यक्रम (टीपीपी) _________ पंचवर्षीय योजना के दौरान शुरू किया गया था।',
    optionsEn: ['6th', '7th', '8th', '5th'],
    optionsHi: ['6ठीं', '7वीं', '8वीं', '5वीं'],
    correctIndex: 3,
    explanationEn:
      'The Twenty-Point Programme (TPP) was launched in 1975 by Prime Minister Indira Gandhi during the 5th Five-Year Plan (1974–1979) to eradicate poverty and improve quality of life.',
    explanationHi:
      'बीस सूत्री कार्यक्रम (TPP) वर्ष 1975 में 5वीं पंचवर्षीय योजना (1974–1979) के दौरान गरीबी उन्मूलन और जीवन स्तर सुधारने हेतु शुरू किया गया था।',
  },
  {
    id: 'cgl26_30s2_q38',
    topic: 'Art & Culture',
    questionEn: 'The Teej Festival marks the arrival of which season in India?',
    questionHi: 'तीज त्योहार भारत में किस ऋतु के आगमन का प्रतीक है?',
    optionsEn: ['Summer', 'Spring', 'Monsoon', 'Winter'],
    optionsHi: ['ग्रीष्म', 'वसंत', 'मानसून', 'सर्दी'],
    correctIndex: 2,
    explanationEn:
      'Teej (Hariyali Teej, Kajari Teej, Hartalika Teej) is celebrated across North and West India during the Shravana/Bhadrapada months to welcome the Monsoon season.',
    explanationHi:
      'तीज त्योहार (हरियाली तीज, कजरी तीज) उत्तर व पश्चिम भारत में श्रावण/भाद्रपद माह में मानसून ऋतु के आगमन के स्वागत में मनाया जाता है।',
  },
  {
    id: 'cgl26_30s2_q39',
    topic: 'Modern History',
    questionEn:
      'The introduction of English as the medium of instruction in Indian schools was largely a result of the recommendations made by:',
    questionHi:
      'भारतीय विद्यालयों में शिक्षा के माध्यम के रूप में अंग्रेजी की शुरुआत मुख्यतः निम्नलिखित द्वारा की गई सिफारिशों का परिणाम थी:',
    optionsEn: [
      'The Hunter Commission',
      "The Wood's Despatch",
      'The Sadler Commission',
      'The Sargent Scheme',
    ],
    optionsHi: [
      'हंटर आयोग',
      'द वुड्स डिस्पैच',
      'सैडलर आयोग',
      'सार्जेंट योजना',
    ],
    correctIndex: 1,
    explanationEn:
      "Wood's Despatch of 1854 (called the 'Magna Carta of English Education in India') laid down a comprehensive educational system recommending English for higher education and vernacular/Anglo-vernacular schooling.",
    explanationHi:
      '1854 का वुड्स डिस्पैच (जिसे भारतीय अंग्रेजी शिक्षा का मैग्ना कार्टा कहा जाता है) ने भारतीय शिक्षा प्रणाली में अंग्रेजी शिक्षा के प्रसार की मुख्य सिफारिशें की थीं।',
  },
  {
    id: 'cgl26_30s2_q40',
    topic: 'Sports',
    questionEn: 'Which Indian cricket stadium hosted the 2023 ICC World Cup final?',
    questionHi: 'किस भारतीय क्रिकेट स्टेडियम ने 2023 आईसीसी विश्व कप फाइनल की मेजबानी की?',
    optionsEn: [
      'Wankhede Stadium',
      'M. Chinnaswamy Stadium',
      'Narendra Modi Stadium',
      'Eden Gardens',
    ],
    optionsHi: [
      'वानखेड़े स्टेडियम',
      'एम. चिन्नास्वामी स्टेडियम',
      'नरेंद्र मोदी स्टेडियम',
      'ईडन गार्डन्स',
    ],
    correctIndex: 2,
    explanationEn:
      'The 2023 ICC Men’s Cricket World Cup Final (India vs Australia on 19 November 2023) was hosted at the Narendra Modi Stadium in Ahmedabad, Gujarat.',
    explanationHi:
      '2023 आईसीसी पुरुष क्रिकेट विश्व कप का फाइनल (19 नवंबर 2023) अहमदाबाद, गुजरात स्थित नरेंद्र मोदी स्टेडियम में आयोजित हुआ था।',
  },
  {
    id: 'cgl26_30s2_q41',
    topic: 'Modern History',
    questionEn: "Which of the following women freedom fighters was known as the 'Agni of India'?",
    questionHi: "निम्नलिखित में से किस महिला स्वतंत्रता सेनानी को 'भारत की अग्नि' के रूप में जाना जाता था?",
    optionsEn: [
      'Durgawati Devi',
      'Kamaladevi Chattopadhyay',
      'Captain Lakshmi Sehgal',
      'Usha Mehta',
    ],
    optionsHi: [
      'दुर्गावती देवी',
      'कमलादेवी चट्टोपाध्याय',
      'कैप्टन लक्ष्मी सहगल',
      'उषा मेहता',
    ],
    correctIndex: 0,
    explanationEn:
      'Durgawati Devi (popularly known as Durga Bhabhi), a fearless revolutionary of the Hindustan Socialist Republican Association (HSRA) who helped Bhagat Singh escape from Lahore, was known as the "Agni of India".',
    explanationHi:
      'हिंदुस्तान सोशलिस्ट रिपब्लिकन एसोसिएशन (HSRA) की क्रांतिकारी दुर्गावती देवी (दुर्गा भाभी), जिन्होंने भगत सिंह को लाहौर से सुरक्षित निकालने में मदद की थी, को "भारत की अग्नि" कहा जाता था।',
  },
  {
    id: 'cgl26_30s2_q42',
    topic: 'Indian Agriculture',
    questionEn:
      'Regarding pulse production in India, consider the following statements.\n1. Black gram can be cultivated as both kharif and Rabi crops.\n2. Green gram alone accounts for nearly half of pulse production.\n3. In the last three decades, while the production of Kharif pulses has increased, the production of Rabi pulses has decreased.\nWhich of the statements given above is/are CORRECT?',
    questionHi:
      'भारत में दालों के उत्पादन के संबंध में, निम्नलिखित कथनों पर विचार करें।\n1. काले चने (उड़द) की खेती खरीफ और रबी दोनों फसलों के रूप में की जा सकती है।\n2. दाल उत्पादन में अकेले हरे चने (मूँग) का योगदान लगभग आधा है।\n3. पिछले तीन दशकों में, जबकि खरीफ दालों का उत्पादन बढ़ा है, रबी दालों का उत्पादन कम हुआ है।\nऊपर दिए गए कथनों में से कौन सा सही है / हैं?',
    optionsEn: ['1 only', '2 and 3 only', '2 only', '1 and 2 only'],
    optionsHi: ['केवल 1', 'केवल 2 और 3', 'केवल 2', 'केवल 1 और 2'],
    correctIndex: 0,
    explanationEn:
      'Statement 1 is correct: Black gram (Urad) is grown in both Kharif and Rabi seasons. Statement 2 is incorrect: Chickpea (Gram/Chana), not green gram, accounts for nearly 45–50% of India’s pulse output. Statement 3 is incorrect: Rabi pulse production has actually increased significantly over the last three decades.',
    explanationHi:
      'कथन 1 सही है: उड़द की खेती खरीफ और रबी दोनों मौसमों में होती है। कथन 2 गलत है क्योंकि भारत के कुल दाल उत्पादन में लगभग आधा हिस्सा चना (Gram) का है, मूँग का नहीं। कथन 3 भी गलत है क्योंकि रबी दालों का उत्पादन बढ़ा है।',
  },
  {
    id: 'cgl26_30s2_q43',
    topic: 'Biology & Health',
    questionEn:
      'What is the major health risk associated with long-term use of anabolic steroids by athletes?',
    questionHi:
      'एथलीटों द्वारा एनाबोलिक स्टेरॉयड के दीर्घकालिक उपयोग से जुड़ा प्रमुख स्वास्थ्य जोखिम क्या है?',
    optionsEn: [
      'Increased bone thickness and strength',
      'Severe dehydration and fluid loss',
      'Hormonal imbalance and organ damage',
      'Better immunity and faster recovery',
    ],
    optionsHi: [
      'हड्डियों की मोटाई और ताकत में वृद्धि',
      'गंभीर निर्जलीकरण और द्रव हानि',
      'हार्मोनल असंतुलन और अंग क्षति',
      'बेहतर प्रतिरक्षा और तेजी से रिकवरी',
    ],
    correctIndex: 2,
    explanationEn:
      'Long-term abuse of anabolic-androgenic steroids disrupts natural endocrine production, causing severe hormonal imbalance as well as liver, kidney, and cardiovascular organ damage.',
    explanationHi:
      'एनाबोलिक स्टेरॉयड के लंबे समय तक सेवन से शरीर का प्राकृतिक हार्मोन संतुलन बिगड़ जाता है तथा यकृत (लीवर), गुर्दे और हृदय जैसे महत्वपूर्ण अंगों को गंभीर क्षति पहुँचती है।',
  },
  {
    id: 'cgl26_30s2_q44',
    topic: 'Indian Polity',
    questionEn:
      'The doctrine of Basic Structure of the Constitution was propounded in which case and relates to which Article?',
    questionHi:
      'संविधान के मूल ढांचे का सिद्धांत किस मामले में प्रतिपादित किया गया था और यह किस अनुच्छेद से संबंधित है?',
    optionsEn: [
      'Kesavananda Bharati Case; Article 368',
      'Golaknath Case; Article 21',
      'Maneka Gandhi Case; Article 14',
      'Minerva Mills Case; Article 356',
    ],
    optionsHi: [
      'केशवानंद भारती मामला; अनुच्छेद 368',
      'गोलकनाथ मामला; अनुच्छेद 21',
      'मेनका गांधी मामला; अनुच्छेद 14',
      'मिनर्वा मिल्स मामला; अनुच्छेद 356',
    ],
    correctIndex: 0,
    explanationEn:
      'In the landmark Kesavananda Bharati v. State of Kerala (1973) judgment, a 13-judge Supreme Court bench ruled that while Parliament can amend the Constitution under Article 368, it cannot alter its "Basic Structure".',
    explanationHi:
      'केशवानंद भारती बनाम केरल राज्य (1973) मामले में सर्वोच्च न्यायालय ने अनुच्छेद 368 के तहत संसद की संशोधन शक्ति पर सीमा लगाते हुए संविधान के "मूल ढांचे का सिद्धांत" प्रतिपादित किया।',
  },
  {
    id: 'cgl26_30s2_q45',
    topic: 'Indian Polity',
    questionEn:
      'Arrange the following developments in federal structure chronologically:\n1. Formation of Inter-State Council\n2. 73rd Constitutional Amendment\n3. GST Council formation',
    questionHi:
      'संघीय ढांचे में निम्नलिखित घटनाक्रमों को कालानुक्रमिक रूप से व्यवस्थित कीजिए:\n1. अंतर-राज्यीय परिषद का गठन\n2. 73वाँ संविधान संशोधन\n3. जीएसटी परिषद का गठन',
    optionsEn: ['1-2-3', '3-2-1', '2-3-1', '1-3-2'],
    optionsHi: ['1-2-3', '3-2-1', '2-3-1', '1-3-2'],
    correctIndex: 0,
    explanationEn:
      'Chronological timeline:\n1. Inter-State Council formed under Article 263 in 1990 (Sarkaria Commission).\n2. 73rd Constitutional Amendment Act (Panchayati Raj) enacted in 1992.\n3. GST Council constituted under Article 279A in September 2016.\nCorrect order: 1-2-3.',
    explanationHi:
      'सही कालक्रम:\n1. अंतर-राज्यीय परिषद का गठन – 1990 (अनुच्छेद 263)।\n2. 73वाँ संविधान संशोधन – 1992 (पंचायती राज)।\n3. जीएसटी परिषद का गठन – 2016 (अनुच्छेद 279A)।\nअतः सही क्रम 1-2-3 है।',
  },
  {
    id: 'cgl26_30s2_q46',
    topic: 'Geography',
    questionEn: 'What does the term "astheno" mean in the context of the Earth\'s mantle?',
    questionHi: 'पृथ्वी के मेंटल के संदर्भ में "अस्थेनो" शब्द का क्या अर्थ है?',
    optionsEn: ['Strong', 'Weak', 'Solid', 'Molten'],
    optionsHi: ['सशक्त', 'दुर्बल', 'ठोस', 'द्रवित'],
    correctIndex: 1,
    explanationEn:
      'The Greek prefix "astheno" means "weak". The asthenosphere is the mechanically weak, ductile upper portion of Earth’s mantle over which tectonic lithospheric plates move.',
    explanationHi:
      'ग्रीक शब्द "अस्थेनो (astheno)" का अर्थ "दुर्बल (Weak)" होता है। दुर्बलतामंडल (Asthenosphere) मेंटल का ऊपरी लचीला भाग है जिस पर स्थलमंडलीय प्लेटें गति करती हैं।',
  },
  {
    id: 'cgl26_30s2_q47',
    topic: 'Geography',
    questionEn:
      'Consider the following statements about the stratosphere:\n1. Temperature increases in the lower part of the stratosphere due to the presence of methane gas.\n2. The ozone layer absorbs solar radiation, leading to a rise in temperature with altitude in this layer.\nWhich of the statements above is/are correct?',
    questionHi:
      'समतापमंडल के संबंध में निम्नलिखित कथनों पर विचार कीजिए:\n1. समतापमंडल के निचले भाग में तापमान मीथेन गैस की उपस्थिति के कारण बढ़ता है।\n2. ओज़ोन परत सौर विकिरण को अवशोषित करती है, जिससे इस परत में ऊँचाई के साथ तापमान में वृद्धि होती है।\nउपरोक्त में से कौन-सा/से कथन सही है/हैं?',
    optionsEn: [
      'Only 1',
      'Only 2',
      'Both 1 and 2 are correct',
      'Neither 1 nor 2 is correct',
    ],
    optionsHi: [
      'केवल 1',
      'केवल 2',
      '1 और 2 दोनों सही हैं',
      'न तो 1 और न ही 2 सही है',
    ],
    correctIndex: 1,
    explanationEn:
      'Statement 1 is incorrect (the lower stratosphere is nearly isothermal and temperature rise is NOT caused by methane). Statement 2 is correct: the ozone layer absorbs ultraviolet solar radiation, causing temperature to rise with altitude in the stratosphere.',
    explanationHi:
      'कथन 1 गलत है क्योंकि समतापमंडल में तापमान वृद्धि मीथेन के कारण नहीं होती। कथन 2 सही है: ओज़ोन परत पराबैंगनी सौर विकिरण को अवशोषित करती है जिससे ऊँचाई के साथ तापमान बढ़ता है।',
  },
  {
    id: 'cgl26_30s2_q48',
    topic: 'Indian Economy',
    questionEn: 'Which aspect of agriculture witnessed a decline after the economic reforms of 1991?',
    questionHi: '1991 के आर्थिक सुधारों के बाद कृषि के किस पहलू में गिरावट देखी गई?',
    optionsEn: [
      'Public investment in agricultural infrastructure',
      'Private investment in agricultural development',
      'Agricultural exports in international markets',
      'Production of commercial agricultural crops',
    ],
    optionsHi: [
      'कृषि अवसंरचना में सार्वजनिक निवेश',
      'कृषि विकास में निजी निवेश',
      'अंतरराष्ट्रीय बाजारों में कृषि निर्यात',
      'वाणिज्यिक कृषि फसलों का उत्पादन',
    ],
    correctIndex: 0,
    explanationEn:
      'Following the 1991 LPG reforms, fiscal consolidation led to a sharp decline in public investment in agricultural infrastructure such as irrigation, rural roads, power, and market linkages.',
    explanationHi:
      '1991 के आर्थिक सुधारों के बाद राजकोषीय कटौती के कारण सिंचाई, बिजली, ग्रामीण सड़कों और बाजार जैसी कृषि अवसंरचना में सार्वजनिक निवेश में स्पष्ट गिरावट देखी गई।',
  },
  {
    id: 'cgl26_30s2_q49',
    topic: 'Physics / Thermodynamics',
    questionEn:
      'One mole of an ideal gas undergoes a reversible isothermal expansion from 10 L (liter) to 20 L (liter) at a constant temperature of 300 K (kelvin). What is the work done by the gas, approximately?',
    questionHi:
      'एक आदर्श गैस का एक मोल 300 केल्विन के स्थिर ताप पर 10 लीटर से 20 लीटर तक एक उत्क्रमणीय समतापीय प्रसार से गुजरता है। गैस द्वारा किया गया कार्य लगभग कितना है?',
    optionsEn: ['0 (joule)', '700 (joule)', '3500 (joule)', '1700 (joule)'],
    optionsHi: ['0 (जूल)', '700 (जूल)', '3500 (जूल)', '1700 (जूल)'],
    correctIndex: 3,
    explanationEn:
      'For reversible isothermal expansion:\nW = nRT ln(V₂ / V₁)\n= 1 × 8.314 × 300 × ln(20 / 10)\n= 2494.2 × 0.693 ≈ 1728 J ≈ 1700 joule.',
    explanationHi:
      'उत्क्रमणीय समतापीय प्रसार में किया गया कार्य:\nW = nRT ln(V₂ / V₁)\n= 1 × 8.314 × 300 × ln(2)\n= 2494.2 × 0.693 ≈ 1728 जूल ≈ 1700 जूल।',
  },
  {
    id: 'cgl26_30s2_q50',
    topic: 'Biology',
    questionEn: 'Which process is most directly responsible for the majority of cancer-related deaths?',
    questionHi: 'कौन सी प्रक्रिया कैंसर से होने वाली अधिकांश मौतों के लिए सबसे प्रत्यक्ष रूप से जिम्मेदार है?',
    optionsEn: [
      'Increased local proliferation of tumor cells',
      'Loss of cell cycle checkpoints in dividing cells',
      'Formation of metastases in distant organs',
      'Formation of benign tumor masses in primary tissue',
    ],
    optionsHi: [
      'अर्बुद कोशिकाओं का स्थानीय प्रवर्धन बढ़ना',
      'विभाजित होती कोशिकाओं में कोशिका चक्र नियंत्रण बिंदुओं का नष्ट होना',
      'दूरस्थ अंगों में मेटास्टेसिस का निर्माण',
      'प्राथमिक ऊतक में सुदम अर्बुद पिंडों का निर्माण',
    ],
    correctIndex: 2,
    explanationEn:
      'Metastasis—the spread of malignant cancer cells from the primary tumor to vital distant organs (such as lungs, liver, brain, or bones)—accounts for roughly 90% of cancer-related fatalities.',
    explanationHi:
      'मेटास्टेसिस (कैंसर कोशिकाओं का प्राथमिक ट्यूमर से रक्त/लसीका द्वारा दूरस्थ महत्वपूर्ण अंगों में फैलना) कैंसर से होने वाली लगभग 90% मौतों का प्रत्यक्ष कारण है।',
  },
];
