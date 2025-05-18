
import { Button } from "@/components/ui/button";
import { Gavel, UserCheck } from "lucide-react";

interface WelcomeSectionProps {
  onBeginInvestigation: () => void;
}

const WelcomeSectionRet2where = ({ onBeginInvestigation }: WelcomeSectionProps) => {
  return (
    <div className="text-center p-4 md:p-8 animate-fade-in">
      <Gavel className="h-16 w-16 text-yellow-400 mx-auto mb-6" />
      <h2 className="text-2xl md:text-3xl font-semibold text-sky-300 mb-4">
        The Court is Now in Session
      </h2>
      <div className="bg-slate-700/50 p-6 rounded-lg shadow-md max-w-2xl mx-auto space-y-4 text-slate-200">
        <p className="text-lg">
          <span className="font-bold text-yellow-400">Judge:</span> "This court is convened to investigate a serious matter: a mobile application suspected of containing malicious software, potentially harming countless users."
        </p>
        <p className="text-lg">
          <span className="font-bold text-yellow-400">Judge:</span> "We have a technical expert witness present today. Expert, you may proceed with your analysis and present your findings regarding this 'phone virus'."
        </p>
        <p className="text-md text-slate-400 italic mt-2">
          Your role is to analyze the application, find evidence of its malicious nature, and demonstrate how it could be exploited.
        </p>
      </div>
      <Button 
        onClick={onBeginInvestigation} 
        className="mt-8 px-8 py-3 text-lg bg-sky-600 hover:bg-sky-500 text-white rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
      >
        <UserCheck size={20} className="mr-2" />
        Begin Digital Investigation
      </Button>
    </div>
  );
};

export default WelcomeSectionRet2where;
