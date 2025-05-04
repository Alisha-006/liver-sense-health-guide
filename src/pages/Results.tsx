
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PatientData, PredictionResult } from "@/lib/types";

const Results = () => {
  const navigate = useNavigate();
  const [patientData, setPatientData] = useState<PatientData | null>(null);
  const [result, setResult] = useState<PredictionResult | null>(null);

  // Load data from session storage
  useEffect(() => {
    const assessmentData = sessionStorage.getItem('assessmentData');
    const predictionResult = sessionStorage.getItem('predictionResult');
    
    if (!assessmentData || !predictionResult) {
      // Redirect if no data is found
      navigate('/assessment');
      return;
    }
    
    try {
      setPatientData(JSON.parse(assessmentData));
      setResult(JSON.parse(predictionResult));
    } catch (error) {
      console.error("Error parsing stored data:", error);
      navigate('/assessment');
    }
  }, [navigate]);

  // Helper function to get risk color
  const getRiskColor = (riskLevel: string | undefined) => {
    switch (riskLevel) {
      case 'Low':
        return 'text-green-600';
      case 'Medium':
        return 'text-yellow-600';
      case 'High':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  // Helper function to get progress bar color
  const getProgressColor = (riskLevel: string | undefined) => {
    switch (riskLevel) {
      case 'Low':
        return 'bg-green-500';
      case 'Medium':
        return 'bg-yellow-500';
      case 'High':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  // Check if no data is loaded yet
  if (!patientData || !result) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <p className="text-gray-600">Loading results...</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="px-4 py-5 sm:p-6">
              <h1 className="text-3xl font-bold text-gray-900 text-center">Your Assessment Results</h1>
              <p className="mt-2 text-sm text-gray-600 text-center">
                Based on the clinical data you provided, here is your liver health assessment.
              </p>

              {/* Risk Assessment Summary */}
              <div className="mt-8 rounded-lg bg-gray-50 p-6 border border-gray-200">
                <div className="flex flex-col items-center">
                  <h2 className="text-2xl font-bold text-gray-900">Risk Assessment</h2>
                  
                  <div className="mt-4 text-center">
                    <p className="text-sm text-gray-600">Likelihood of liver disease:</p>
                    <p className={`text-4xl font-bold mt-1 ${getRiskColor(result.riskLevel)}`}>
                      {result.riskLevel} Risk
                    </p>
                    <div className="mt-4 w-full max-w-md">
                      <Progress 
                        value={result.probability * 100} 
                        className="h-3"
                        indicatorClassName={getProgressColor(result.riskLevel)}
                      />
                      <p className="text-sm text-gray-500 mt-2">
                        {Math.round(result.probability * 100)}% probability score
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Patient Data Summary */}
              <div className="mt-8">
                <h2 className="text-xl font-semibold text-gray-900">Input Data Summary</h2>
                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Personal Information</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <dl className="space-y-2">
                        <div className="flex justify-between">
                          <dt className="text-sm font-medium text-gray-600">Age:</dt>
                          <dd className="text-sm text-gray-900">{patientData.age} years</dd>
                        </div>
                        <div className="flex justify-between">
                          <dt className="text-sm font-medium text-gray-600">Gender:</dt>
                          <dd className="text-sm text-gray-900">{patientData.gender === 'male' ? 'Male' : 'Female'}</dd>
                        </div>
                      </dl>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Bilirubin Tests</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <dl className="space-y-2">
                        <div className="flex justify-between">
                          <dt className="text-sm font-medium text-gray-600">Total Bilirubin:</dt>
                          <dd className="text-sm text-gray-900">{patientData.totalBilirubin} mg/dL</dd>
                        </div>
                        <div className="flex justify-between">
                          <dt className="text-sm font-medium text-gray-600">Direct Bilirubin:</dt>
                          <dd className="text-sm text-gray-900">{patientData.directBilirubin} mg/dL</dd>
                        </div>
                      </dl>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Enzyme Tests</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <dl className="space-y-2">
                        <div className="flex justify-between">
                          <dt className="text-sm font-medium text-gray-600">Alkaline Phosphatase:</dt>
                          <dd className="text-sm text-gray-900">{patientData.alkalinePhosphatase} IU/L</dd>
                        </div>
                        <div className="flex justify-between">
                          <dt className="text-sm font-medium text-gray-600">SGPT (ALT):</dt>
                          <dd className="text-sm text-gray-900">{patientData.alamineAminotransferase} IU/L</dd>
                        </div>
                        <div className="flex justify-between">
                          <dt className="text-sm font-medium text-gray-600">SGOT (AST):</dt>
                          <dd className="text-sm text-gray-900">{patientData.aspartateAminotransferase} IU/L</dd>
                        </div>
                      </dl>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Protein Tests</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <dl className="space-y-2">
                        <div className="flex justify-between">
                          <dt className="text-sm font-medium text-gray-600">Total Proteins:</dt>
                          <dd className="text-sm text-gray-900">{patientData.totalProteins} g/dL</dd>
                        </div>
                        <div className="flex justify-between">
                          <dt className="text-sm font-medium text-gray-600">Albumin:</dt>
                          <dd className="text-sm text-gray-900">{patientData.albumin} g/dL</dd>
                        </div>
                        <div className="flex justify-between">
                          <dt className="text-sm font-medium text-gray-600">A/G Ratio:</dt>
                          <dd className="text-sm text-gray-900">{patientData.albuminGlobulinRatio}</dd>
                        </div>
                      </dl>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Recommendations */}
              <div className="mt-8">
                <h2 className="text-xl font-semibold text-gray-900">Recommendations</h2>
                <div className="mt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Personalized Suggestions</CardTitle>
                      <CardDescription>
                        Based on your clinical parameters, consider these recommendations
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        {result.suggestions.map((suggestion, index) => (
                          <li key={index} className="text-gray-700">{suggestion}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-8 flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-3">
                <Link to="/education">
                  <Button variant="outline" className="w-full border-medical-blue text-medical-blue hover:bg-medical-lightblue">
                    Learn More About Liver Health
                  </Button>
                </Link>
                <Link to="/chatbot">
                  <Button className="w-full bg-medical-green hover:bg-opacity-90 text-white">
                    Ask Questions About Results
                  </Button>
                </Link>
              </div>

              {/* Disclaimer */}
              <div className="mt-8 rounded-lg bg-gray-50 p-4 border border-gray-200">
                <p className="text-xs text-gray-600 text-center">
                  <strong>Disclaimer:</strong> This assessment is for educational purposes only and does not constitute medical advice.
                  Always consult with a healthcare provider for proper diagnosis and treatment of medical conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Results;
