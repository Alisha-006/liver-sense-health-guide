
import { ChatMessage } from "./types";

// Predefined responses for the chatbot
export const chatbotResponses: Record<string, string[]> = {
  greeting: [
    "Hello! I'm your liver health assistant. How can I help you today?",
    "Welcome to LiverSense! I can answer questions about liver health and your assessment results.",
    "Hi there! I'm here to provide information about liver health. What would you like to know?"
  ],
  
  liverFunction: [
    "The liver is responsible for over 500 vital functions, including filtering blood, detoxifying chemicals, metabolizing drugs, producing proteins, and storing vitamins and minerals.",
    "Your liver processes everything you eat, drink, breathe, or absorb through your skin. It converts nutrients into substances your body can use and removes harmful substances from your blood."
  ],
  
  liverDiseaseSymptoms: [
    "Common symptoms of liver disease include yellowing of skin (jaundice), abdominal pain and swelling, swelling in legs and ankles, itchy skin, dark urine, pale stool, fatigue, nausea, and loss of appetite.",
    "Early liver disease often has no symptoms. As it progresses, you might notice fatigue, weakness, weight loss, nausea, vomiting, yellowing of skin, abdominal pain or swelling, and spider-like blood vessels on the skin."
  ],
  
  prevention: [
    "To maintain liver health: maintain a healthy weight, eat a balanced diet, exercise regularly, avoid excessive alcohol, follow directions when taking medications, avoid risky behaviors that can lead to hepatitis, and get vaccinated for hepatitis A and B if at risk.",
    "Preventive measures include limiting alcohol, maintaining a healthy weight, eating a balanced diet rich in fruits and vegetables, exercising regularly, and avoiding unnecessary medications."
  ],
  
  riskFactors: [
    "Risk factors for liver disease include heavy alcohol consumption, obesity, type 2 diabetes, tattoos or body piercings, injecting drugs with shared needles, blood transfusion before 1992, exposure to certain chemicals or toxins, and family history of liver disease.",
    "The main risk factors include alcohol abuse, viral hepatitis infection, nonalcoholic fatty liver disease often related to obesity and diabetes, and exposure to certain toxins, medications, or supplements."
  ],
  
  testResults: [
    "Your test results should be interpreted by a healthcare professional. However, I can explain what different markers measure: Bilirubin relates to bile production, liver enzymes (ALT, AST, ALP) indicate liver cell damage, albumin reflects protein production capacity, and platelet count can indicate advanced liver disease.",
    "While I can provide general information about liver function tests, only a healthcare provider can accurately interpret your specific results in the context of your overall health."
  ],
  
  diet: [
    "A liver-healthy diet includes plenty of fruits, vegetables, whole grains, lean protein, and healthy fats. Limit processed foods, added sugars, salt, and red meat. Stay well-hydrated with water, and minimize alcohol consumption.",
    "Foods beneficial for liver health include garlic, coffee, oatmeal, green tea, berries, grapes, grapefruit, nuts, fatty fish, olive oil, and cruciferous vegetables like broccoli and Brussels sprouts."
  ],
  
  alcohol: [
    "Excessive alcohol consumption can lead to alcoholic fatty liver disease, alcoholic hepatitis, and eventually cirrhosis. The liver can regenerate, so early sobriety can reverse some damage, but cirrhosis represents permanent scarring.",
    "Guidelines suggest limiting alcohol to no more than one drink per day for women and two for men. Those with liver conditions should consider avoiding alcohol completely."
  ],
  
  medications: [
    "Many medications are processed by the liver. Acetaminophen (Tylenol), certain antibiotics, statins, and some herbal supplements can cause liver damage, especially at high doses or when combined with alcohol.",
    "Always take medications as prescribed, don't exceed recommended doses, avoid unnecessary supplements, and inform your doctor about all medications and supplements you take."
  ],
  
  default: [
    "I don't have specific information on that topic. For medical advice, please consult a healthcare professional.",
    "That's beyond my current knowledge base. Please ask your doctor for personalized medical advice.",
    "I'm focused on general liver health information. For specific medical questions, consulting a healthcare provider is best."
  ]
};

export const getInitialMessages = (): ChatMessage[] => {
  return [
    {
      role: 'assistant',
      content: chatbotResponses.greeting[Math.floor(Math.random() * chatbotResponses.greeting.length)]
    }
  ];
};

export const getChatbotResponse = (message: string): string => {
  const lowerMessage = message.toLowerCase();
  
  if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
    return randomResponse('greeting');
  } else if (lowerMessage.includes('liver function') || lowerMessage.includes('what does liver do')) {
    return randomResponse('liverFunction');
  } else if (lowerMessage.includes('symptom') || lowerMessage.includes('sign')) {
    return randomResponse('liverDiseaseSymptoms');
  } else if (lowerMessage.includes('prevent') || lowerMessage.includes('protect')) {
    return randomResponse('prevention');
  } else if (lowerMessage.includes('risk') || lowerMessage.includes('cause')) {
    return randomResponse('riskFactors');
  } else if (lowerMessage.includes('test') || lowerMessage.includes('result') || lowerMessage.includes('diagnosis')) {
    return randomResponse('testResults');
  } else if (lowerMessage.includes('eat') || lowerMessage.includes('food') || lowerMessage.includes('diet')) {
    return randomResponse('diet');
  } else if (lowerMessage.includes('alcohol') || lowerMessage.includes('drink')) {
    return randomResponse('alcohol');
  } else if (lowerMessage.includes('medicine') || lowerMessage.includes('medication') || lowerMessage.includes('drug')) {
    return randomResponse('medications');
  } else {
    return randomResponse('default');
  }
};

const randomResponse = (category: string): string => {
  const responses = chatbotResponses[category] || chatbotResponses.default;
  return responses[Math.floor(Math.random() * responses.length)];
};
