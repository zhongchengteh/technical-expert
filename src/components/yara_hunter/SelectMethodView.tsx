
import React from 'react';
import { Button } from "@/components/ui/button";
import { FileSearch, PlayCircle, Bot } from 'lucide-react'; // Added Bot icon

interface SelectMethodViewProps {
  onSelectStatic: () => void;
  onSelectTestMalicious: () => void;
  onSelectAI: () => void; // New prop for AI analysis
}

const SelectMethodView: React.FC<SelectMethodViewProps> = ({ onSelectStatic, onSelectTestMalicious, onSelectAI }) => {
  return (
    <div className="p-4 md:p-8 animate-fade-in text-center">
      <h2 className="text-2xl md:text-3xl font-semibold text-cyan-300 mb-6">Choose Analysis Method</h2>
      <p className="text-slate-300 mb-8 max-w-xl mx-auto">
        The archive <code className="text-yellow-300 bg-slate-700 px-1 rounded">suspicious.zip</code> is ready.
        How do you want to proceed with the investigation?
      </p>
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 max-w-3xl mx-auto"> {/* Changed max-w-2xl to max-w-3xl for 3 buttons */}
        <Button 
          onClick={onSelectStatic}
          className="p-6 h-auto w-full md:w-1/3 flex flex-col items-center justify-center text-lg bg-green-700 hover:bg-green-600 text-white shadow-lg hover:shadow-green-500/30 transition-all"
        >
          <FileSearch size={32} className="mb-2" />
          Static Analysis
          <p className="text-xs text-green-200 mt-1">(Inspect File Strings)</p>
        </Button>
        <Button 
          onClick={onSelectTestMalicious}
          className="p-6 h-auto w-full md:w-1/3 flex flex-col items-center justify-center text-lg bg-red-700 hover:bg-red-600 text-white shadow-lg hover:shadow-red-500/30 transition-all"
        >
          <PlayCircle size={32} className="mb-2" />
          Test Malicious
          <p className="text-xs text-red-200 mt-1">(Create YARA Rule)</p>
        </Button>
        <Button 
          onClick={onSelectAI} // Call the new handler
          className="p-6 h-auto w-full md:w-1/3 flex flex-col items-center justify-center text-lg bg-blue-700 hover:bg-blue-600 text-white shadow-lg hover:shadow-blue-500/30 transition-all"
        >
          <Bot size={32} className="mb-2" /> {/* AI Icon */}
          AI Analysis
          <p className="text-xs text-blue-200 mt-1">(Auto-detect Strings)</p>
        </Button>
      </div>
    </div>
  );
};

export default SelectMethodView;
