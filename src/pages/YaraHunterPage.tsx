import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Terminal } from "@/components/Terminal"; // Re-added if needed by sub-components
import { GameFooter } from "@/components/GameFooter";
import { YARA_HUNTER_TITLE } from "@/lib/yaraHunterContent";

// New Yara Hunter components
import PrepareAnalysisSection from "@/components/yara_hunter/PrepareAnalysisSection";
import SelectMethodView from "@/components/yara_hunter/SelectMethodView";
import StaticAnalysisViewYara from "@/components/yara_hunter/StaticAnalysisViewYara";
import TestMaliciousView from "@/components/yara_hunter/TestMaliciousView";

type YaraHunterView = "prepare" | "select_method" | "static_analysis" | "test_malicious";

const YaraHunterPage = () => {
  const [currentView, setCurrentView] = useState<YaraHunterView>("prepare");
  const [startTestMaliciousWithAI, setStartTestMaliciousWithAI] = useState(false);

  const handleAnalysisReady = () => {
    setCurrentView("select_method");
  };

  const handleSelectStatic = () => {
    setCurrentView("static_analysis");
  };

  const handleSelectTestMalicious = () => {
    setStartTestMaliciousWithAI(false); // Ensure AI mode is off for manual selection
    setCurrentView("test_malicious");
  };

  const handleSelectAI = () => {
    setStartTestMaliciousWithAI(true); // Enable AI mode
    setCurrentView("test_malicious"); // Go to TestMaliciousView, which will handle AI sim
  };
  
  const handleAIWorkflowCompleted = () => {
    setStartTestMaliciousWithAI(false); // Reset AI mode flag after TestMaliciousView consumes it
  };

  const handleBackToMethodSelection = () => {
    setStartTestMaliciousWithAI(false); // Ensure AI mode is off if going back
    setCurrentView("select_method");
  }

  const renderCurrentView = () => {
    switch (currentView) {
      case "prepare":
        return <PrepareAnalysisSection onAnalysisReady={handleAnalysisReady} />;
      case "select_method":
        return (
          <SelectMethodView 
            onSelectStatic={handleSelectStatic} 
            onSelectTestMalicious={handleSelectTestMalicious} 
            onSelectAI={handleSelectAI} // Pass the new handler
          />
        );
      case "static_analysis":
        return <StaticAnalysisViewYara onBack={handleBackToMethodSelection} />;
      case "test_malicious":
        return (
          <TestMaliciousView 
            onBack={handleBackToMethodSelection} 
            startWithAI={startTestMaliciousWithAI} // Pass AI mode flag
            onAIWorkflowComplete={handleAIWorkflowCompleted} // Pass reset callback
          />
        );
      default:
        return <PrepareAnalysisSection onAnalysisReady={handleAnalysisReady} />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-green-400 p-4 font-mono">
      <div className="max-w-4xl mx-auto">
        <div className="mb-4 flex justify-between items-center">
          <Link to="/" className="inline-flex items-center text-sm text-cyan-400 hover:text-cyan-300 transition-colors">
            <ArrowLeft size={16} className="mr-1" />
            Back to Challenges
          </Link>
        </div>
        
        {/* Display Title directly */}
        <header className="mb-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-cyan-400">{YARA_HUNTER_TITLE}</h1>
        </header>
        
        {/* The main content area will use Terminal styling if applicable from sub-components */}
        {/* Or wrap with a styled div if Terminal is not always the root */}
        <div className="my-6 border border-green-500/50 rounded-lg overflow-hidden shadow-lg shadow-green-900/30 bg-zinc-900/80">
          {/* Terminal component is used inside StaticAnalysisViewYara and TestMaliciousView */}
          {/* For PrepareAnalysisSection and SelectMethodView, they have their own styling */}
          {renderCurrentView()}
        </div>
        
        <GameFooter />
      </div>
    </div>
  );
};

export default YaraHunterPage;
