import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react"; // Changed from Play to Rocket for launch/simulation theme
import { Terminal } from "@/components/Terminal";
import React, { useState, useEffect } from 'react';

interface PayloadSimulationSectionProps {
  onRestart: () => void; // To restart the whole game/challenge
  onBack: () => void;
}

const simulationSteps = [
  "[+] Connecting to 5.223.62.57:5001...",
  "[+] Sending exploit payload...",
  "[*] Buffer overflow triggered!",
  "✅ Here you go: ICTF25{e29ff023c2ad70c61a2554c31d4539acdecf143758abd44ff43c86444f046aed}"
];

const PayloadSimulationSection = ({ onRestart, onBack }: PayloadSimulationSectionProps) => {
  const [outputLines, setOutputLines] = useState<string[]>([]);
  const [isSimulating, setIsSimulating] = useState(true);

  useEffect(() => {
    if (isSimulating) {
      let i = 0;
      const interval = setInterval(() => {
        if (i < simulationSteps.length) {
          setOutputLines(prev => [...prev, simulationSteps[i]]);
          i++;
        } else {
          clearInterval(interval);
          setIsSimulating(false);
        }
      }, 1000); // 1 second delay between lines
      return () => clearInterval(interval);
    }
  }, [isSimulating]);

  // Log current outputLines for debugging
  if (process.env.NODE_ENV === 'development') {
    console.log("PayloadSimulationSection: current outputLines:", outputLines);
  }

  const commonButtonClass = "text-slate-100 border-sky-500 hover:bg-sky-700/50 hover:text-white";
  const destructiveButtonClass = "bg-red-600 hover:bg-red-500 text-white";

  return (
    <div className="p-4 md:p-8 animate-fade-in">
      <div className="flex items-center justify-center gap-2 mb-6">
        <Rocket className="h-10 w-10 text-sky-400" />
        <h2 className="text-2xl md:text-3xl font-semibold text-sky-300">
          Payload Simulation
        </h2>
      </div>
      <Terminal className="max-w-2xl mx-auto min-h-[200px] bg-slate-950 p-2 rounded-md">
        {outputLines.map((line, index) => {
          // Log each line for debugging
          if (process.env.NODE_ENV === 'development') {
            console.log(`PayloadSimulationSection: processing line ${index}:`, line, typeof line);
          }
          
          if (typeof line !== 'string') {
            // This case should ideally not happen if outputLines is string[]
            // and populated correctly from simulationSteps.
            console.error(`PayloadSimulationSection: Line at index ${index} is not a string:`, line);
            return <p key={index} className="text-red-400">[Error: Invalid data for line {index}. Expected string, got {typeof line}]</p>;
          }
          return (
            <p key={index} className={`${line.startsWith("✅") ? "text-green-300" : line.startsWith("[*]") ? "text-yellow-300" : "text-slate-300"} font-mono text-sm`}>
              {line}
            </p>
          );
        })}
        {isSimulating && <p className="animate-pulse text-sky-300 font-mono text-sm">Simulating...</p>}
      </Terminal>
      {!isSimulating && outputLines.some(line => typeof line === 'string' && line.startsWith("✅")) && (
        <p className="text-center text-xl text-green-300 mt-6 font-bold animate-fade-in">
          Exploit Successful! Flag Retrieved!
        </p>
      )}
      <div className="mt-8 flex justify-center space-x-4">
        <Button onClick={onBack} variant="outline" className={commonButtonClass}>Back to Exploit Script</Button>
        <Button onClick={onRestart} className={destructiveButtonClass}>Restart Challenge</Button>
      </div>
    </div>
  );
};
export default PayloadSimulationSection;
