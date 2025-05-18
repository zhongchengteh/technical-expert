
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Bug } from "lucide-react";
import MatrixRain from "@/components/MatrixRain"; // Import the new component

const IndexPage = () => {
  return (
    <div className="min-h-screen font-mono relative"> {/* Removed bg-black, p-4. Added relative for MatrixRain positioning */}
      <MatrixRain />
      
      {/* Content Wrapper - needs to be above the MatrixRain */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4 text-green-400">
        <div className="text-center mb-12 animate-fade-in">
          {/* Main title changed */}
          <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">Technical Experts Dashboard</h1>
          <p className="text-lg text-yellow-300">Choose your mission, analyst.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 w-full max-w-3xl">
          <Link to="/yara-hunter" className="animate-fade-in" style={{animationDelay: '0.2s'}}>
            {/* Added bg-zinc-900/90 for slight transparency */}
            <div className="bg-zinc-900/90 border border-green-500/50 rounded-lg p-6 hover:shadow-lg hover:shadow-green-700/30 transition-all duration-300 transform hover:scale-105 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="h-8 w-8 text-green-500" />
                  {/* YARA Hunter card title changed */}
                  <h2 className="text-2xl font-semibold text-green-300">Yara Rule: Phone Virus Lawsuit</h2>
                </div>
                <p className="text-sm text-gray-400 mb-4">
                  Scan suspicious executables using YARA rules to find the hidden flag. Test your malware analysis skills.
                </p>
              </div>
              {/* Added bg-green-800/90 for slight transparency */}
              <Button variant="outline" className="w-full bg-green-800/90 hover:bg-green-700 text-green-100 border-green-600">
                Launch YARA Hunter
              </Button>
            </div>
          </Link>

          <Link to="/ret2where" className="animate-fade-in" style={{animationDelay: '0.4s'}}>
            {/* Added bg-zinc-900/90 for slight transparency */}
            <div className="bg-zinc-900/90 border border-cyan-500/50 rounded-lg p-6 hover:shadow-lg hover:shadow-cyan-700/30 transition-all duration-300 transform hover:scale-105 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <Bug className="h-8 w-8 text-cyan-500" />
                  <h2 className="text-2xl font-semibold text-cyan-300">Ret2where: Phone Virus Lawsuit</h2>
                </div>
                <p className="text-sm text-gray-400 mb-4">
                  Present evidence in a courtroom simulation by exploiting a buffer overflow in a malicious app.
                </p>
              </div>
              {/* Added bg-cyan-800/90 for slight transparency */}
              <Button variant="outline" className="w-full bg-cyan-800/90 hover:bg-cyan-700 text-cyan-100 border-cyan-600">
                Start Investigation
              </Button>
            </div>
          </Link>
        </div>
        {/* Changed footer text color for better readability */}
        <footer className="mt-12 text-center text-xs text-gray-400 animate-fade-in" style={{animationDelay: '0.6s'}}>
          <p>&copy; {new Date().getFullYear()} Cybersecurity Interactive Challenges. All rights reserved.</p>
          <p>Built for educational and training purposes.</p>
        </footer>
      </div>
    </div>
  );
};

export default IndexPage;
