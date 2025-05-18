
import React from 'react';
import { Button } from "@/components/ui/button";
import { Terminal } from "@/components/Terminal";
import { ArrowLeft } from 'lucide-react';

interface GhidraViewProps {
  ghidraMainFunction: string;
  ghidraSurpriseFunction: string;
  onBackToMethods: () => void;
}

const GhidraView: React.FC<GhidraViewProps> = ({ ghidraMainFunction, ghidraSurpriseFunction, onBackToMethods }) => {
  const commonButtonClass = "text-slate-100 border-sky-500 hover:bg-sky-700/50 hover:text-white";
  
  return (
    <div className="p-4 md:p-8 animate-fade-in">
      <h3 className="text-xl font-semibold text-teal-400 mb-4">Ghidra View (Decompiled Functions)</h3>
      <div className="space-y-6">
        <Terminal className="bg-slate-950 p-2 rounded-md">
          <pre className="whitespace-pre-wrap text-xs font-mono">{ghidraMainFunction}</pre>
        </Terminal>
        <Terminal className="bg-slate-950 p-2 rounded-md">
          <pre className="whitespace-pre-wrap text-xs font-mono">{ghidraSurpriseFunction}</pre>
        </Terminal>
      </div>
      <div className="mt-6 flex justify-between">
        <Button onClick={onBackToMethods} variant="outline" className={`${commonButtonClass} bg-slate-700 hover:bg-slate-600`}>
          <ArrowLeft className="mr-1"/>Back to Methods
        </Button>
      </div>
    </div>
  );
};

export default GhidraView;
