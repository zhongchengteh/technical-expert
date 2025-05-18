
import React from 'react';
import { Button } from "@/components/ui/button";
import { FileText, Brain, ServerCrash, ArrowLeft, TestTubeDiagonal } from 'lucide-react'; // Added TestTubeDiagonal
import { AnalysisView } from './AnalysisViewTypes';

interface SelectAnalysisViewProps {
  onSetView: (view: AnalysisView) => void;
  onBack: () => void;
}

const SelectAnalysisView: React.FC<SelectAnalysisViewProps> = ({ onSetView, onBack }) => {
  const commonButtonClass = "text-slate-100 border-sky-500 hover:bg-sky-700/50 hover:text-white";

  return (
    <div className="p-4 md:p-8 animate-fade-in">
      <h2 className="text-2xl md:text-3xl font-semibold text-sky-300 mb-6 text-center">Choose Analysis Method</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <Button className="p-6 h-auto flex flex-col items-center justify-center text-lg bg-yellow-600 hover:bg-yellow-500 text-white" onClick={() => onSetView('static')}>
          <FileText size={32} className="mb-2" />
          Static Analysis
          <p className="text-xs text-yellow-200 mt-1">(objdump)</p>
        </Button>
        <Button className="p-6 h-auto flex flex-col items-center justify-center text-lg bg-teal-600 hover:bg-teal-500 text-white" onClick={() => onSetView('ghidra')}>
          <Brain size={32} className="mb-2" />
          Ghidra View
          <p className="text-xs text-teal-200 mt-1">(Decompiled Code)</p>
        </Button>
        <Button className="p-6 h-auto flex flex-col items-center justify-center text-lg bg-red-600 hover:bg-red-500 text-white" onClick={() => onSetView('fuzzer')}>
          <TestTubeDiagonal size={32} className="mb-2" /> {/* Changed Icon */}
          Test Malicious
          <p className="text-xs text-red-200 mt-1">(Exploit Builder)</p>
        </Button>
      </div>
      <div className="text-center mt-8">
        <Button onClick={onBack} variant="outline" className={`${commonButtonClass} bg-slate-700 hover:bg-slate-600`}>
          <ArrowLeft className="mr-1"/>Back to Upload
        </Button>
      </div>
    </div>
  );
};

export default SelectAnalysisView;
