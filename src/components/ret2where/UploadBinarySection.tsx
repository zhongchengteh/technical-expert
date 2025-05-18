
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { UploadCloud, ChevronRight, FileText, Loader2 } from "lucide-react";

interface UploadBinarySectionProps {
  onContinue: () => void;
}

const UploadBinarySection = ({ onContinue }: UploadBinarySectionProps) => {
  const [isUploading, setIsUploading] = useState(false);
  const [fileSelected, setFileSelected] = useState(false);

  const handleSimulateUpload = () => {
    setIsUploading(true);
    setTimeout(() => {
      setIsUploading(false);
      setFileSelected(true);
    }, 1500); // Simulate upload delay
  };

  return (
    <div className="text-center p-4 md:p-8 animate-fade-in">
      <UploadCloud className="h-16 w-16 text-sky-400 mx-auto mb-6" />
      <h2 className="text-2xl md:text-3xl font-semibold text-sky-300 mb-4">
        Prepare for Analysis
      </h2>
      <div className="bg-slate-700/50 p-6 rounded-lg shadow-md max-w-lg mx-auto space-y-4 text-slate-200">
        {!fileSelected ? (
          <>
            <p className="text-lg">
              Select the suspicious binary file for analysis:
            </p>
            <Button 
              onClick={handleSimulateUpload}
              disabled={isUploading}
              className="w-full bg-yellow-500 hover:bg-yellow-400 text-slate-900 py-3 text-lg"
            >
              {isUploading ? (
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              ) : (
                <UploadCloud className="mr-2 h-5 w-5" />
              )}
              {isUploading ? "Uploading..." : "Choose 'ret2where.exe' (Simulated)"}
            </Button>
            <p className="text-sm text-slate-400 italic mt-2">
              This is a simulated file selection.
            </p>
          </>
        ) : (
          <>
            <p className="text-lg">
              File ready for analysis:
            </p>
            <div className="bg-slate-800 p-3 rounded-md flex items-center justify-center text-yellow-400">
              <FileText size={20} className="mr-2" />
              <span>ret2where.exe</span>
            </div>
            <p className="text-sm text-green-400 italic mt-2">
              Binary pre-loaded and ready.
            </p>
          </>
        )}
      </div>
      <Button 
        onClick={onContinue} 
        disabled={!fileSelected || isUploading}
        className="mt-8 px-8 py-3 text-lg bg-sky-600 hover:bg-sky-500 text-white rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:transform-none"
      >
        Continue to Analysis
        <ChevronRight size={20} className="ml-2" />
      </Button>
    </div>
  );
};

export default UploadBinarySection;

