
import { AlertTriangle, Check, X } from "lucide-react";
import { checkMatch } from "@/lib/yaraEngine";

interface ScanResultsProps {
  fileId: number;
  onReset: () => void;
}

export const ScanResults = ({ fileId, onReset }: ScanResultsProps) => {
  const isMatch = checkMatch(fileId);
  
  return (
    <div className="animate-fade-in space-y-4">
      <div className={`p-4 rounded-md ${isMatch ? 'bg-green-900/30' : 'bg-red-900/30'}`}>
        <div className="flex items-center gap-2">
          {isMatch ? (
            <Check className="h-6 w-6 text-green-400" />
          ) : (
            <X className="h-6 w-6 text-red-400" />
          )}
          <h3 className={`text-lg ${isMatch ? 'text-green-400' : 'text-red-400'}`}>
            {isMatch ? 'MATCH FOUND!' : 'NO MATCH FOUND'}
          </h3>
        </div>
        
        {isMatch ? (
          <div className="mt-4 space-y-2">
            <p>Congratulations! The YARA rule has successfully matched the file.</p>
            <div className="bg-black/50 p-3 mt-2 rounded border border-green-500/30">
              <p className="text-yellow-300 font-medium">FLAG{"{yara_master_detected}"}</p>
            </div>
            <p className="text-sm text-gray-400 mt-2">
              The file contained the strings that matched our YARA detection rule. Great work, analyst!
            </p>
          </div>
        ) : (
          <div className="mt-4 space-y-2">
            <p>The selected file did not match the YARA rule criteria.</p>
            <div className="flex items-start gap-2 mt-2">
              <AlertTriangle className="h-4 w-4 text-yellow-400 mt-1" />
              <p className="text-sm text-gray-300">
                This file doesn't contain the required string patterns. Try scanning a different file.
              </p>
            </div>
          </div>
        )}
      </div>
      
      <button 
        onClick={onReset}
        className="px-4 py-2 bg-blue-800 hover:bg-blue-700 text-blue-100 rounded-md transition-colors duration-300"
      >
        {isMatch ? 'NEW SCAN' : 'TRY AGAIN'}
      </button>
    </div>
  );
};
