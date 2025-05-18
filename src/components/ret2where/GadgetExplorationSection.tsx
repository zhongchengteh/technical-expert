
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react"; // Changed from Wrench to Search for exploration theme

interface GadgetExplorationSectionProps {
  onNextPhase: () => void;
  onBack: () => void;
}

const GadgetExplorationSection = ({ onNextPhase, onBack }: GadgetExplorationSectionProps) => {
  return (
    <div className="text-center p-4 md:p-8 animate-fade-in">
      <Search className="h-16 w-16 text-sky-400 mx-auto mb-6" />
      <h2 className="text-2xl md:text-3xl font-semibold text-sky-300 mb-4">
        Gadget Exploration
      </h2>
      <div className="bg-slate-700/50 p-6 rounded-lg shadow-md max-w-lg mx-auto text-slate-200">
        <p className="text-lg">
          This section is under construction.
        </p>
        <p className="text-md text-slate-400 mt-2">
          Soon, you'll be able to click on gadgets from the static analysis output to learn about them and "bookmark" them for building your ROP chain.
        </p>
      </div>
      <div className="mt-8 flex justify-center space-x-4">
        <Button onClick={onBack} variant="outline">Back to Analysis Methods</Button>
        <Button onClick={onNextPhase}>Continue to ROP Chain Builder</Button>
      </div>
    </div>
  );
};
export default GadgetExplorationSection;

