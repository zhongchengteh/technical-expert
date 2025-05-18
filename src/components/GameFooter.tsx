
import { Info } from "lucide-react";

export const GameFooter = () => {
  return (
    <div className="mt-8 text-xs text-gray-500 border-t border-gray-800 pt-4">
      <div className="flex items-start gap-2">
        <Info className="h-4 w-4 text-cyan-500 mt-0.5 flex-shrink-0" />
        <div>
          <p className="text-cyan-400 font-medium">What is YARA?</p>
          <p className="mt-1">
            YARA is a tool used by malware researchers to identify and classify malware samples.
            YARA rules are used to create descriptions of malware families based on textual or 
            binary patterns, such as strings of text, hexadecimal values, and special expressions.
          </p>
        </div>
      </div>
      
      <p className="mt-4 text-center">
        YARA Hunter: Flag of the Executable | Cybersecurity Training Game
      </p>
    </div>
  );
};
