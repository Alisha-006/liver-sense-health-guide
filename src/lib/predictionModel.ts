
import { PatientData, PredictionResult } from "./types";

// This is a simulated ML model since we can't run actual ML in the browser
export const predictLiverDisease = (data: PatientData): PredictionResult => {
  // These thresholds are simplified for demonstration purposes
  // In a real application, this would use a trained model
  
  let riskScore = 0;
  const maxScore = 10;
  
  // Age factor (older age increases risk)
  if (data.age > 60) riskScore += 2;
  else if (data.age > 45) riskScore += 1;
  
  // Gender factor (males have slightly higher risk statistically)
  if (data.gender === 'male') riskScore += 0.5;
  
  // Bilirubin levels (higher levels indicate problems)
  if (data.totalBilirubin > 1.2) riskScore += 1;
  if (data.directBilirubin > 0.3) riskScore += 1;
  
  // Enzyme levels
  if (data.alkalinePhosphatase > 120) riskScore += 1;
  if (data.alamineAminotransferase > 40) riskScore += 1.5; // SGPT
  if (data.aspartateAminotransferase > 40) riskScore += 1.5; // SGOT
  
  // Proteins
  if (data.albumin < 3.5) riskScore += 1;
  if (data.albuminGlobulinRatio < 1) riskScore += 0.5;
  
  // Calculate probability (0 to 1)
  const probability = Math.min(riskScore / maxScore, 1);
  
  // Determine risk level
  let riskLevel: 'Low' | 'Medium' | 'High';
  if (probability < 0.3) riskLevel = 'Low';
  else if (probability < 0.6) riskLevel = 'Medium';
  else riskLevel = 'High';
  
  // Generate suggestions based on risk factors
  const suggestions: string[] = [];
  
  if (data.age > 45) {
    suggestions.push("Consider regular liver function tests as part of your annual check-up.");
  }
  
  if (data.totalBilirubin > 1.2 || data.directBilirubin > 0.3) {
    suggestions.push("Elevated bilirubin levels may indicate liver stress. Avoid alcohol and consult a healthcare provider.");
  }
  
  if (data.alkalinePhosphatase > 120) {
    suggestions.push("High alkaline phosphatase may indicate bile duct issues. Follow up with additional tests.");
  }
  
  if (data.alamineAminotransferase > 40 || data.aspartateAminotransferase > 40) {
    suggestions.push("Elevated liver enzymes suggest inflammation. Reduce processed foods and increase antioxidant intake.");
  }
  
  if (data.albumin < 3.5 || data.albuminGlobulinRatio < 1) {
    suggestions.push("Low protein markers may indicate decreased liver function. Ensure adequate protein intake from diverse sources.");
  }
  
  // Add general advice
  suggestions.push("Maintain a balanced diet rich in fruits, vegetables, and whole grains.");
  suggestions.push("Limit alcohol consumption and stay hydrated.");
  suggestions.push("Exercise regularly to maintain healthy weight and liver function.");
  
  return {
    probability,
    riskLevel,
    suggestions
  };
};
