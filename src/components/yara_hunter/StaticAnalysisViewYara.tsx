
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Terminal } from "@/components/Terminal"; 
import { ArrowLeft, AlertTriangle } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";
import { STATIC_ANALYSIS_STRINGS_OUTPUT } from '@/lib/yaraHunterContent';

interface StaticAnalysisViewYaraProps {
  onBack: () => void;
}

const StaticAnalysisViewYara: React.FC<StaticAnalysisViewYaraProps> = ({ onBack }) => {
  const [command, setCommand] = useState('');
  const [output, setOutput] = useState<string[]>(['Enter a command to analyze suspicious.zip...']);
  const [exeExtracted, setExeExtracted] = useState(false);
  const { toast } = useToast();

  const handleCommand = () => {
    const trimmedCommand = command.trim().toLowerCase();
    let newOutput: string[] = [`> ${command}`];

    if (trimmedCommand === "unzip suspicious.zip") {
      if (exeExtracted) {
        newOutput.push("suspicious.exe already extracted.");
      } else {
        setExeExtracted(true);
        newOutput.push("Simulating: suspicious.zip unzipped.");
        newOutput.push("Extracted: suspicious.exe");
        toast({ title: "File Extracted", description: "suspicious.exe is now available for analysis." });
      }
    } else if (trimmedCommand === "strings suspicious.exe") {
      if (exeExtracted) {
        newOutput.push(...STATIC_ANALYSIS_STRINGS_OUTPUT.split('\\n'));
        toast({ title: "Strings Displayed", description: "Output of 'strings suspicious.exe'." });
      } else {
        newOutput.push("Error: suspicious.exe not found. Unzip suspicious.zip first.");
        toast({ title: "Error", description: "File suspicious.exe not found. Please run 'unzip suspicious.zip' first.", variant: "destructive" });
      }
    } else if (trimmedCommand === "") {
        newOutput.push("Please enter a command.");
    } else {
      newOutput.push(`Command not recognized: ${command}`);
      // Removed hint about available commands
      toast({ title: "Unknown Command", description: "Please try a valid command.", variant: "destructive"});
    }
    setOutput(prev => [...prev, ...newOutput].slice(-200)); // Keep last 200 lines
    setCommand('');
  };

  return (
    <div className="p-4 md:p-6 animate-fade-in">
      <h3 className="text-xl font-semibold text-green-300 mb-4">Static Analysis</h3>
      <div className="bg-slate-800/50 border border-slate-700 p-4 rounded-md mb-4">
        <p className="text-slate-300 text-sm mb-2">
          The archive <code className="text-yellow-300 bg-slate-700 px-1 rounded">suspicious.zip</code> is loaded.
          It is suspected to contain a malicious executable.
        </p>
        <ul className="text-slate-400 text-xs list-disc list-inside space-y-1">
          <li>Extract the contents.</li>
          <li>Inspect the strings.</li>
        </ul>
      </div>

      <div className="flex gap-2 mb-4">
        <Input
          type="text"
          value={command}
          onChange={(e) => setCommand(e.target.value)}
          placeholder="Enter command" // Removed e.g., unzip suspicious.zip
          className="bg-slate-900 border-slate-700 text-slate-200 font-mono flex-grow"
          onKeyPress={(e) => e.key === 'Enter' && handleCommand()}
        />
        <Button onClick={handleCommand} className="bg-green-700 hover:bg-green-600 text-white">
          Run
        </Button>
      </div>

      <Terminal className="max-h-[400px] overflow-y-auto bg-black/80 p-3 rounded-md border border-green-600/50">
        {output.map((line, index) => (
          <div key={index} className="whitespace-pre-wrap text-xs">
            {line.startsWith("Error:") || line.startsWith("Command not recognized:") ? (
                <span className="text-red-400"><AlertTriangle size={12} className="inline mr-1"/>{line}</span>
            ) : line.startsWith(">") ? (
                <span className="text-yellow-300">{line}</span>
            ) : (
                line
            )}
          </div>
        ))}
      </Terminal>

      <div className="mt-6">
        <Button onClick={onBack} variant="outline" className="bg-slate-700 hover:bg-slate-600 text-slate-200 border-slate-600">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Methods
        </Button>
      </div>
    </div>
  );
};

export default StaticAnalysisViewYara;
