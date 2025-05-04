
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Disclaimer = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="px-4 py-5 sm:p-6">
              <h1 className="text-3xl font-bold text-gray-900 text-center">Medical Disclaimer</h1>
              
              <div className="mt-8 space-y-6 text-gray-700">
                <p>
                  LiverSense is an educational tool designed to help users understand potential liver health risks based on certain clinical data. This application does not provide medical advice, diagnosis, or treatment.
                </p>
                
                <p>
                  The information provided by this application, including risk assessments, recommendations, and educational content, is for informational and educational purposes only. It should not be considered a substitute for professional medical advice.
                </p>
                
                <h2 className="text-xl font-semibold text-gray-900 mt-6">Important Notices</h2>
                
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    The prediction model used in this application is a simplified simulation and is not a validated clinical diagnostic tool.
                  </li>
                  <li>
                    Always consult with a qualified healthcare provider before making any decisions related to your health or medical conditions.
                  </li>
                  <li>
                    Do not disregard professional medical advice or delay seeking it because of information you have read on this application.
                  </li>
                  <li>
                    The chatbot provides general information only and cannot replace consultation with healthcare professionals.
                  </li>
                  <li>
                    This application does not collect, store, or transmit your personal health information to any third parties.
                  </li>
                </ul>
                
                <h2 className="text-xl font-semibold text-gray-900 mt-6">No Doctor-Patient Relationship</h2>
                
                <p>
                  Using LiverSense does not create a doctor-patient relationship between you and the creators, developers, or operators of this application. The application does not know your complete medical history or specific circumstances, which a healthcare provider would consider when providing medical advice.
                </p>
                
                <h2 className="text-xl font-semibold text-gray-900 mt-6">Emergency Situations</h2>
                
                <p>
                  If you think you may have a medical emergency, call your doctor or emergency services immediately. Do not rely on this application for emergency medical needs.
                </p>
                
                <h2 className="text-xl font-semibold text-gray-900 mt-6">Accuracy of Information</h2>
                
                <p>
                  While we strive to provide accurate and up-to-date information, we make no representations or warranties about the completeness, reliability, or accuracy of the information provided. Any action you take based on the information provided by this application is strictly at your own risk.
                </p>
              </div>
              
              <div className="mt-8 flex justify-center">
                <Link to="/">
                  <Button className="bg-medical-green hover:bg-opacity-90 text-white">
                    Return to Home
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Disclaimer;
