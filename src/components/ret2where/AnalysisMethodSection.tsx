import React, { useState } from 'react';
import { AnalysisView } from './analysis_views/AnalysisViewTypes';

import SelectAnalysisView from './analysis_views/SelectAnalysisView';
import StaticAnalysisView from './analysis_views/StaticAnalysisView'; // Read-only
import GhidraView from './analysis_views/GhidraView'; // Read-only
import ExploitBuilderGuideView from './analysis_views/ExploitBuilderGuideView'; // Was FuzzerView

interface AnalysisMethodSectionProps {
  onNextPhase: (action: 'static' | 'ghidra' | 'fuzzer_success' | 'script_builder') => void;
  onBack: () => void; // Back to upload phase
}

// Mock data for GhidraView
const mockGhidraMainFunction = `
undefined8 main(void)

{
  char local_48 [56];
  undefined8 local_10;
  
  local_10 = 0;
  setvbuf(stdout,(char *)0x0,2,0);
  setvbuf(stdin,(char *)0x0,2,0);
  puts("Welcome to the ret2where challenge!");
  puts("I\\'ve heard there\\'s a surprise function somewhere...");
  printf("Input > ");
  gets(local_48);
  return 0;
}
`;

const mockGhidraSurpriseFunction = `
void surprise_for_you(long param_1,long param_2,long param_3)

{
  if ((param_1 == 0xcafebabe) && (param_2 == 0xdeadbeef) && (param_3 == 0xc0ffee)) {
    puts("Congratulations! You found the surprise!");
    // Code to print the flag would be here
    // For example: system("/bin/cat flag.txt");
    printf("Here you go: ICTF25{...your_flag_here...}\\n");
  }
  else {
    puts("Almost! Try different arguments.");
  }
  return;
}
`;

const AnalysisMethodSection: React.FC<AnalysisMethodSectionProps> = ({ onNextPhase, onBack }) => {
  const [currentView, setCurrentView] = useState<AnalysisView>('select');

  const handleSetView = (view: AnalysisView) => {
    setCurrentView(view);
  };

  const handleBackToSelection = () => {
    setCurrentView('select');
  };

  // This function is called by FuzzerView/ExploitBuilderGuideView when it's "done" and wants to proceed
  // For ExploitBuilderGuideView, it manages its own steps internally up to simulation.
  // The onNextPhase prop might be less relevant for it unless we want to signal completion of the entire guide.
  // For now, ExploitBuilderGuideView's "next phase" is handled by its internal state.
  // If a path to ScriptBuilderSection is still needed from here (e.g., after a successful fuzzer), that logic would be here.
  // const handleFuzzerSuccess = () => {
  //   onNextPhase('script_builder'); 
  // };

  return (
    <div className="animate-fade-in">
      {currentView === 'select' && (
        <SelectAnalysisView 
          onSetView={handleSetView} 
          onBack={onBack} 
        />
      )}
      {currentView === 'static' && (
        <StaticAnalysisView 
          onBackToMethods={handleBackToSelection} 
        />
      )}
      {currentView === 'ghidra' && (
        <GhidraView 
          onBackToMethods={handleBackToSelection}
          ghidraMainFunction={mockGhidraMainFunction}
          ghidraSurpriseFunction={mockGhidraSurpriseFunction}
        />
      )}
      {currentView === 'fuzzer' && ( 
        <ExploitBuilderGuideView 
          onBackToMethods={handleBackToSelection} 
        />
      )}
    </div>
  );
};

export default AnalysisMethodSection;
