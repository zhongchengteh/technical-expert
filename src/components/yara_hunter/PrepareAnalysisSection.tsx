
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { UploadCloud, ChevronRight, FileText, Loader2 } from "lucide-react";

interface PrepareAnalysisSectionProps {
  onAnalysisReady: () => void;
}

const PrepareAnalysisSection: React.FC<PrepareAnalysisSectionProps> = ({ onAnalysisReady }) => {
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
      <UploadCloud className="h-16 w-16 text-cyan-400 mx-auto mb-6" />
      <h2 className="text-2xl md:text-3xl font-semibold text-cyan-300 mb-4">
        Prepare for Analysis
      </h2>
      <p className="text-slate-300 mb-6">
        A suspicious archive <code className="text-yellow-300 bg-slate-700 px-1 rounded">suspicious.zip</code> has been flagged.
        Prepare it for detailed analysis.
      </p>
      <div className="bg-slate-800/70 border border-slate-700 p-6 rounded-lg shadow-md max-w-lg mx-auto space-y-4 text-slate-200">
        {!fileSelected ? (
          <>
            <p className="text-lg">
              Select the suspicious archive:
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
              {isUploading ? "Uploading..." : "Choose 'suspicious.zip' (Simulated)"}
            </Button>
            <p className="text-sm text-slate-400 italic mt-2">
              This is a simulated file selection.
            </p>
          </>
        ) : (
          <>
            <p className="text-lg">
              Archive ready for analysis:
            </p>
            <div className="bg-slate-900 p-3 rounded-md flex items-center justify-center text-yellow-400 border border-slate-700">
              <FileText size={20} className="mr-2" />
              <span>suspicious.zip</span>
            </div>
            <p className="text-sm text-green-400 italic mt-2">
              Archive pre-loaded and ready.
            </p>
          </>
        )}
      </div>
      <Button 
        onClick={onAnalysisReady} 
        disabled={!fileSelected || isUploading}
        className="mt-8 px-8 py-3 text-lg bg-cyan-700 hover:bg-cyan-600 text-white rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:transform-none"
      >
        Continue to Analysis
        <ChevronRight size={20} className="ml-2" />
      </Button>
    </div>
  );
};

export default PrepareAnalysisSection;
