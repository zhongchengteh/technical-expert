
import { Button } from "@/components/ui/button";
import { Puzzle } from "lucide-react"; // Changed from Settings2 to Puzzle for building theme

interface RopChainBuilderSectionProps {
  onNextPhase: () => void;
  onBack: () => void;
}

const RopChainBuilderSection = ({ onNextPhase, onBack }: RopChainBuilderSectionProps) => {
  return (
    <div className="text-center p-4 md:p-8 animate-fade-in">
      <Puzzle className="h-16 w-16 text-sky-400 mx-auto mb-6" />
      <h2 className="text-2xl md:text-3xl font-semibold text-sky-300 mb-4">
        ROP Chain Builder
      </h2>
      <div className="bg-slate-700/50 p-6 rounded-lg shadow-md max-w-lg mx-auto text-slate-200">
        <p className="text-lg">
          This section is under construction.
        </p>
        <p className="text-md text-slate-400 mt-2">
          Here, you'll drag & drop or select gadgets to build your Return-Oriented Programming chain.
        </p>
      </div>
      <div className="mt-8 flex justify-center space-x-4">
        <Button onClick={onBack} variant="outline">Back to Gadget Exploration</Button>
        <Button onClick={onNextPhase}>Continue to Exploit Script</Button>
      </div>
    </div>
  );
};
export default RopChainBuilderSection;

