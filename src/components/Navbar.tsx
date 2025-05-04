
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Activity } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Activity className="h-8 w-8 text-medical-green mr-2" />
              <span className="text-xl font-bold text-gray-900">LiverSense</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/assessment">
              <Button variant="outline" className="text-medical-blue border-medical-blue hover:bg-medical-lightblue">
                Assessment
              </Button>
            </Link>
            <Link to="/education">
              <Button variant="outline" className="text-medical-blue border-medical-blue hover:bg-medical-lightblue">
                Education
              </Button>
            </Link>
            <Link to="/chatbot">
              <Button className="bg-medical-green hover:bg-opacity-90 text-white">
                Health Assistant
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
