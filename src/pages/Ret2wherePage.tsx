import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Binary } from "lucide-react";
import UploadBinarySection from "@/components/ret2where/UploadBinarySection";
import AnalysisMethodSection from "@/components/ret2where/AnalysisMethodSection";
import ScriptBuilderSection from "@/components/ret2where/ScriptBuilderSection";
import ExploitScriptSection from "@/components/ret2where/ExploitScriptSection";
import PayloadSimulationSection from "@/components/ret2where/PayloadSimulationSection";
import { Button } from "@/components/ui/button";


export type Ret2whereGamePhase = 
  | "uploadBinary" 
  | "analysisMethod" 
  | "scriptBuilding" 
  | "exploitScript" 
  | "simulation";

const Ret2wherePage = () => {
  const [phase, setPhase] = useState<Ret2whereGamePhase>("uploadBinary");
  const [generatedScript, setGeneratedScript] = useState<string>("");

  const handleNextPhase = (next: Ret2whereGamePhase) => {
    setPhase(next);
  };
  
  const handleAnalysisOrBuild = (methodOrAction: 'static' | 'ghidra' | 'fuzzer_success' | 'script_builder') => {
    if (methodOrAction === 'script_builder') {
      setPhase("scriptBuilding");
    } 
    // For static/ghidra, they are informational and lead back to method selection or further interaction within AnalysisMethodSection
    // The fuzzer_success path leading to scriptBuilding is handled within AnalysisMethodSection itself by calling onNextPhase('script_builder')
    // If 'static' or 'ghidra' were meant to directly lead to another phase, it would be:
    // else if (methodOrAction === 'static' || methodOrAction === 'ghidra') {
    //   // Potentially a different phase or stay in analysisMethod to pick another
    // }
  };

  const handleScriptBuilt = (script: string) => {
    setGeneratedScript(script);
    setPhase("exploitScript");
  };

  const resetChallenge = () => {
    setPhase("uploadBinary");
    setGeneratedScript("");
    // Could add more reset logic here if needed
  }

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 p-4 md:p-8 font-sans">
      <div className="max-w-5xl mx-auto">
        <div className="mb-6">
          <Link to="/" className="inline-flex items-center text-sm text-sky-400 hover:text-sky-300 transition-colors">
            <ArrowLeft size={16} className="mr-1" />
            Back to Challenges
          </Link>
        </div>

        <header className="text-center mb-8 md:mb-12 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Binary className="h-10 w-10 text-sky-400" /> 
            <h1 className="text-3xl md:text-4xl font-bold text-sky-300">
              Phone Virus – Malicious Software Ret2where
            </h1>
            <Binary className="h-10 w-10 text-sky-400" /> 
          </div>
          <p className="text-lg text-yellow-500">
            Interactive Exploit Development: A ROP Chain Challenge
          </p>
        </header>

        <main className="bg-slate-800 border border-slate-700 rounded-lg p-6 md:p-8 shadow-2xl shadow-slate-900/50 min-h-[400px]">
          {phase === "uploadBinary" && (
            <UploadBinarySection onContinue={() => handleNextPhase("analysisMethod")} />
          )}
          {phase === "analysisMethod" && (
            <AnalysisMethodSection 
              onNextPhase={handleAnalysisOrBuild} 
              onBack={() => handleNextPhase("uploadBinary")}
            />
          )}
          {phase === "scriptBuilding" && (
            <ScriptBuilderSection
              onScriptBuilt={handleScriptBuilt}
              onBack={() => handleNextPhase("analysisMethod")}
            />
          )}
          {phase === "exploitScript" && (
            <ExploitScriptSection 
              exploitScript={generatedScript}
              onNextPhase={() => handleNextPhase("simulation")}
              onBack={() => handleNextPhase("scriptBuilding")}
            />
          )}
          {phase === "simulation" && (
            <PayloadSimulationSection 
              onRestart={resetChallenge}
              onBack={() => handleNextPhase("exploitScript")}
            />
          )}
        </main>
        
        <footer className="mt-12 text-center text-xs text-slate-500">
          <p>Ret2where: Exploit Development Challenge | Educational Simulation</p>
        </footer>
      </div>
    </div>
  );
};

export default Ret2wherePage;
