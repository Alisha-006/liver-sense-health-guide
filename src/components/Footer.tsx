
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">About LiverSense</h3>
            <p className="mt-2 text-sm text-gray-600">
              An educational tool designed to help understand liver health risks. Not a substitute for professional medical advice.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Resources</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <Link to="/education" className="text-sm text-medical-blue hover:underline">
                  Liver Health Education
                </Link>
              </li>
              <li>
                <Link to="/assessment" className="text-sm text-medical-blue hover:underline">
                  Risk Assessment
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" className="text-sm text-medical-blue hover:underline">
                  Medical Disclaimer
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Legal</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <Link to="/privacy" className="text-sm text-medical-blue hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm text-medical-blue hover:underline">
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-4">
          <p className="text-sm text-gray-500 text-center">
            &copy; {new Date().getFullYear()} LiverSense. For educational purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
