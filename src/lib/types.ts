
export interface PatientData {
  age: number;
  gender: 'male' | 'female';
  totalBilirubin: number;
  directBilirubin: number;
  alkalinePhosphatase: number;
  alamineAminotransferase: number; // SGPT
  aspartateAminotransferase: number; // SGOT
  totalProteins: number;
  albumin: number;
  albuminGlobulinRatio: number;
}

export interface PredictionResult {
  probability: number;
  riskLevel: 'Low' | 'Medium' | 'High';
  suggestions: string[];
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
