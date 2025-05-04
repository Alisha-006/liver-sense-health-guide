
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Activity, Clipboard, BookOpen, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-medical-lightblue py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block text-medical-blue">LiverSense:</span>
                  <span className="block">Your Liver Health Guide</span>
                </h1>
                <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-lg md:mt-5 md:text-xl">
                  Advanced liver health assessment powered by predictive analytics. 
                  Understand your liver health risk factors and get personalized recommendations.
                </p>
                <div className="mt-8 sm:flex">
                  <div className="rounded-md shadow">
                    <Link to="/assessment">
                      <Button className="w-full flex items-center justify-center px-8 py-3 bg-medical-green hover:bg-opacity-90 text-white text-base font-medium">
                        Start Assessment
                      </Button>
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link to="/education">
                      <Button variant="outline" className="w-full flex items-center justify-center px-8 py-3 border-medical-blue text-medical-blue hover:bg-medical-lightblue text-base font-medium">
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="mt-12 lg:mt-0 flex justify-center">
                <div className="relative h-64 w-64 lg:h-96 lg:w-96">
                  <div className="absolute inset-0 bg-medical-green rounded-full opacity-20 animate-pulse-slow"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Activity className="h-32 w-32 lg:h-48 lg:w-48 text-medical-green" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-medical-green font-semibold tracking-wide uppercase">Features</h2>
              <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
                A comprehensive liver health platform
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto">
                LiverSense combines medical expertise with advanced technology to provide insights about your liver health.
              </p>
            </div>

            <div className="mt-10">
              <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
                <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-medical-lightgreen text-medical-green">
                    <Clipboard className="h-8 w-8" />
                  </div>
                  <h3 className="mt-4 text-xl font-medium text-gray-900">Risk Assessment</h3>
                  <p className="mt-2 text-base text-gray-600 text-center">
                    Input your clinical data to receive a personalized liver health risk assessment.
                  </p>
                  <Link to="/assessment" className="mt-4 text-medical-blue hover:underline font-medium">
                    Take Assessment
                  </Link>
                </div>
                
                <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-medical-lightblue text-medical-blue">
                    <BookOpen className="h-8 w-8" />
                  </div>
                  <h3 className="mt-4 text-xl font-medium text-gray-900">Educational Resources</h3>
                  <p className="mt-2 text-base text-gray-600 text-center">
                    Access comprehensive information about liver health, diseases, and prevention.
                  </p>
                  <Link to="/education" className="mt-4 text-medical-blue hover:underline font-medium">
                    Learn More
                  </Link>
                </div>
                
                <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-medical-lightgreen text-medical-green">
                    <MessageCircle className="h-8 w-8" />
                  </div>
                  <h3 className="mt-4 text-xl font-medium text-gray-900">Health Assistant</h3>
                  <p className="mt-2 text-base text-gray-600 text-center">
                    Chat with our virtual assistant to get answers about liver health and your results.
                  </p>
                  <Link to="/chatbot" className="mt-4 text-medical-blue hover:underline font-medium">
                    Chat Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimer Section */}
        <section className="py-8 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white shadow overflow-hidden rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Medical Disclaimer</h3>
                <div className="mt-2 text-sm text-gray-600">
                  <p>
                    LiverSense is an educational tool designed to help users understand potential liver health risks based on input data. 
                    This application does not provide medical advice, diagnosis, or treatment.
                  </p>
                  <p className="mt-2">
                    The assessment results are for informational purposes only and should not replace professional medical advice. 
                    Always consult with a qualified healthcare provider regarding any health concerns or conditions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
