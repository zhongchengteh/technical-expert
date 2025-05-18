
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Terminal } from "@/components/Terminal";
import { functionTxt } from "@/lib/functionTxtContent";
import { ArrowLeft } from 'lucide-react';
import { toast } from "@/components/ui/use-toast";

interface StaticAnalysisViewProps {
  onBackToMethods: () => void;
}

const gadgetsToHighlight = [
  "0x401199:	5f                   	pop    %rdi",
  "0x4011a1:	58                   	pop    %rax",
  "0x40119f:	5a                   	pop    %rdx",
  "0x40119b:", // mov rsi, rax
  "0x4011a6:", // call surprise_for_you 
];

const HighlightedLine = ({ line }: { line: string }) => {
  for (const gadget of gadgetsToHighlight) {
    if (line.includes(gadget.split(':')[0])) {
      return <span className="bg-yellow-500 text-black px-1 rounded">{line}</span>;
    }
  }
  return <span>{line}</span>;
};

const StaticAnalysisView: React.FC<StaticAnalysisViewProps> = ({ onBackToMethods }) => {
  const [staticCommand, setStaticCommand] = useState('');
  const [showStaticOutput, setShowStaticOutput] = useState(false);
  
  const commonButtonClass = "text-slate-100 border-sky-500 hover:bg-sky-700/50 hover:text-white";
  const primaryButtonClass = "bg-sky-600 hover:bg-sky-500 text-white";

  const handleStaticAnalysisCommand = () => {
    if (staticCommand.trim().toLowerCase().includes('objdump') && staticCommand.trim().toLowerCase().includes('-d')) {
      setShowStaticOutput(true);
      toast({ title: "Command Simulated", description: "Displaying simulated objdump output." });
    } else {
      setShowStaticOutput(false); 
      toast({ title: "Invalid Command", description: "Please use an objdump command with disassembly options (e.g., 'objdump -d ret2where').", variant: "destructive"});
    }
  };

  const handleBack = () => {
    setStaticCommand('');
    setShowStaticOutput(false);
    onBackToMethods();
  };

  return (
    <div className="p-4 md:p-8 animate-fade-in">
      <h3 className="text-xl font-semibold text-yellow-400 mb-4">Static Analysis (objdump)</h3>
      {!showStaticOutput ? (
        <div className="space-y-4">
          <p className="text-slate-300">How can you use <code className="text-amber-300">objdump</code> to find function addresses and gadgets within the 'ret2where' binary? (Hint: look for disassembly options)</p>
          <Input 
            type="text" 
            value={staticCommand}
            onChange={(e) => setStaticCommand(e.target.value)}
            placeholder="e.g., objdump -d ret2where"
            className="bg-slate-900 border-slate-700 text-slate-200 font-mono"
          />
          <Button onClick={handleStaticAnalysisCommand} className={primaryButtonClass}>Run Command</Button>
        </div>
      ) : (
        <Terminal className="max-h-[500px] overflow-y-auto bg-slate-950 p-2 rounded-md">
          <pre className="whitespace-pre-wrap text-xs font-mono">
            {functionTxt.split('\n').map((line, index) => (
              <React.Fragment key={index}>
                <HighlightedLine line={line} />
                {'\n'}
              </React.Fragment>
            ))}
          </pre>
        </Terminal>
      )}
      <div className="mt-6 flex justify-between">
        <Button onClick={handleBack} variant="outline" className={`${commonButtonClass} bg-slate-700 hover:bg-slate-600`}>
           <ArrowLeft className="mr-1"/>Back to Methods
        </Button>
      </div>
    </div>
  );
};

export default StaticAnalysisView;
