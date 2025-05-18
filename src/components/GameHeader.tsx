
import { Shield } from "lucide-react";

interface GameHeaderProps {
  showRule: boolean;
  setShowRule: (show: boolean) => void;
}

export const GameHeader = ({ showRule, setShowRule }: GameHeaderProps) => {
  return (
    <div className="text-center mb-6 animate-fade-in">
      <div className="flex items-center justify-center gap-3 mb-2">
        <Shield className="h-8 w-8 text-green-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-cyan-400">YARA Hunter</h1>
        <Shield className="h-8 w-8 text-green-500" />
      </div>
      <h2 className="text-xl text-yellow-300">Flag of the Executable</h2>
      
      <div className="mt-4 text-sm text-gray-400 max-w-2xl mx-auto">
        <p>A cyber forensics challenge. Analyze and scan suspicious files with YARA rules to find the hidden flag.</p>
      </div>
    </div>
  );
};
