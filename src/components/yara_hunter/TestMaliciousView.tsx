import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Terminal } from "@/components/Terminal";
import { ArrowLeft, AlertCircle, CheckCircle, Info, Bot } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";
import {
  TEST_MALICIOUS_STRING_OPTIONS,
  TEST_MALICIOUS_CONDITION_OPTIONS,
  CORRECT_YARA_STRING_SELECTIONS_LABELS,
  CORRECT_YARA_CONDITION_ID,
  YARA_SUCCESS_OUTPUT,
  YARA_FAILURE_OUTPUT
} from '@/lib/yaraHunterContent';

interface TestMaliciousViewProps {
  onBack: () => void;
  startWithAI?: boolean; // New prop to trigger AI flow
  onAIWorkflowComplete?: () => void; // Callback to reset AI flag
}

// Added 'ai_simulating' to YaraRuleStep
type YaraRuleStep = "confirm" | "ai_simulating" | "select_strings" | "select_condition" | "review_rule" | "result";

const stringIdToVariable: { [key: string]: string } = {
  "llenge": "$a",
  "Startup": "$e",
  "UPX0": "$b",
  "IsDebuggerP": "$c",
  "LookupPri": "$g"
};


const TestMaliciousView: React.FC<TestMaliciousViewProps> = ({ onBack, startWithAI = false, onAIWorkflowComplete }) => {
  const [step, setStep] = useState<YaraRuleStep>("confirm");
  const [selectedStringLabels, setSelectedStringLabels] = useState<string[]>([]);
  const [selectedConditionId, setSelectedConditionId] = useState<string | null>(null);
  const [userYaraRule, setUserYaraRule] = useState<string>("");
  const [resultOutput, setResultOutput] = useState<string[]>([]);
  const [displayedResultOutput, setDisplayedResultOutput] = useState<string[]>([]);
  const [simulationLog, setSimulationLog] = useState<string[]>([]); // For AI simulation messages
  const { toast } = useToast();

  useEffect(() => {
    if (startWithAI && step === "confirm") {
      setStep("ai_simulating");
    }
  }, [startWithAI, step]);

  const handleStringSelection = (label: string, checked: boolean) => {
    setSelectedStringLabels(prev => {
      if (checked) {
        if (prev.length < 5) {
          return [...prev, label];
        } else {
          toast({ title: "Limit Reached", description: "You can only select up to 5 strings.", variant: "destructive" });
          return prev;
        }
      } else {
        return prev.filter(s => s !== label);
      }
    });
  };
  
  const generateUserRule = () => {
    let rule = "rule userPico {\n  strings:\n";
    const chosenStringObjects = TEST_MALICIOUS_STRING_OPTIONS.filter(opt => selectedStringLabels.includes(opt.label));

    // Try to map to $a, $b, $c, $e, $g if possible, otherwise use generic $s1, $s2 etc.
    const assignedVars = new Set<string>();
    let varCounter = 1;

    chosenStringObjects.forEach(opt => {
        let varName = `$s${varCounter++}`; // Default variable name
        // Check if this string corresponds to one of the 'correct' ones for specific var naming
        if (CORRECT_YARA_STRING_SELECTIONS_LABELS.includes(opt.label)) {
            for (const [key, val] of Object.entries(stringIdToVariable)) {
                if (opt.label === key && !assignedVars.has(val)) {
                    varName = val;
                    assignedVars.add(val);
                    break;
                }
            }
        }
        rule += `    ${varName} = "${opt.label}" wide ascii\n`;
    });
    
    rule += "  condition:\n";
    const condition = TEST_MALICIOUS_CONDITION_OPTIONS.find(c => c.id === selectedConditionId);
    if (condition) {
      rule += `    ${condition.label}\n}`;
    } else {
      rule += `    // No condition selected\n}`;
    }
    setUserYaraRule(rule);
  };

  useEffect(() => {
    if (step === "review_rule" && selectedStringLabels.length > 0 && selectedConditionId) {
      generateUserRule();
    }
  }, [selectedStringLabels, selectedConditionId, step]);

  // useEffect for result animation
  useEffect(() => {
    if (step === "result" && resultOutput.length > 0) {
      setDisplayedResultOutput([]); // Clear previous animated output
      let i = 0;
      const intervalId = setInterval(() => {
        if (i < resultOutput.length) {
          setDisplayedResultOutput(prev => [...prev, resultOutput[i]]);
          i++;
        } else {
          clearInterval(intervalId);
        }
      }, 150); // 150ms delay per line, adjust as needed
      return () => clearInterval(intervalId); // Cleanup on unmount or if dependencies change
    }
  }, [step, resultOutput]);

  const handleSubmitRule = () => {
    const correctStringsMatch = 
      selectedStringLabels.length === CORRECT_YARA_STRING_SELECTIONS_LABELS.length &&
      CORRECT_YARA_STRING_SELECTIONS_LABELS.every(cs => selectedStringLabels.includes(cs));
    
    const correctConditionMatch = selectedConditionId === CORRECT_YARA_CONDITION_ID;

    if (correctStringsMatch && correctConditionMatch) {
      setResultOutput(YARA_SUCCESS_OUTPUT.split('\n'));
      toast({ title: "Rule Correct!", description: "Congratulations, analyst!", className: "bg-green-600 text-white" });
    } else {
      setResultOutput([...YARA_FAILURE_OUTPUT.split('\n')]);
      toast({ title: "Rule Incorrect", description: "Please review your selections.", variant: "destructive" });
    }
    setStep("result");
  };

  const resetTest = () => {
    setSelectedStringLabels([]);
    setSelectedConditionId(null);
    setUserYaraRule("");
    setResultOutput([]);
    setDisplayedResultOutput([]);
    setSimulationLog([]); // Reset simulation log
    setStep("confirm"); // Always go back to confirm on reset
  }

  // useEffect for AI simulation step
  useEffect(() => {
    if (step === "ai_simulating") {
      setSimulationLog([]); // Clear previous logs
      const messages = [
        "AI: Initiating analysis of `suspicious.exe`...",
        "AI: Deploying advanced heuristic algorithms...",
        "AI: Scanning for anomalous code patterns and known malware signatures...",
        "AI: Cross-referencing findings with global threat intelligence database...",
        "AI: High-confidence malware indicators detected.",
        "AI: Identified the following critical strings for YARA rule construction:",
        ...CORRECT_YARA_STRING_SELECTIONS_LABELS.map(s => `  -> Extracted string: "${s}"`),
        "AI: Analysis complete. Automatically selecting identified strings.",
        "AI: Proceeding to YARA rule condition selection..."
      ];
      
      let i = 0;
      const intervalId = setInterval(() => {
        if (i < messages.length) {
          setSimulationLog(prev => [...prev, messages[i]]);
          i++;
        } else {
          clearInterval(intervalId);
          setSelectedStringLabels([...CORRECT_YARA_STRING_SELECTIONS_LABELS]);
          setStep("select_condition");
          if (onAIWorkflowComplete) {
            onAIWorkflowComplete(); // Signal YaraHunterPage to reset its AI flag
          }
        }
      }, 750); // Adjusted timing for message display

      return () => clearInterval(intervalId);
    }
  }, [step, onAIWorkflowComplete]);


  const renderStepContent = () => {
    switch (step) {
      case "confirm":
        return (
          <div className="text-center space-y-4">
            <Info size={48} className="mx-auto text-cyan-400 mb-4" />
            <p className="text-xl text-slate-200">Ready to build a YARA rule?</p>
            <p className="text-slate-300">You'll select suspicious strings and a condition to detect the malicious pattern.</p>
            <Button onClick={() => setStep("select_strings")} className="bg-green-600 hover:bg-green-500 text-white">
              Start Building Rule
            </Button>
          </div>
        );
      case "ai_simulating":
        return (
          <div className="space-y-4">
            <div className="flex items-center justify-center text-yellow-300 mb-4">
              <Bot size={32} className="mr-3 animate-pulse" />
              <h4 className="text-lg font-semibold">AI Analysis in Progress...</h4>
            </div>
            <Terminal className="max-h-[250px] min-h-[150px] overflow-y-auto bg-black/80 p-3 rounded-md border border-yellow-600/50">
              {simulationLog.map((line, index) => (
                <div key={index} className="whitespace-pre-wrap text-xs text-yellow-200 animate-fade-in">
                  {line}
                </div>
              ))}
              {simulationLog.length > 0 && simulationLog.length < 9 && ( // Simple check if still loading messages
                 <div className="whitespace-pre-wrap text-xs text-yellow-200 animate-pulse">_</div>
              )}
            </Terminal>
            <p className="text-sm text-center text-slate-400">Please wait while the AI identifies malicious strings.</p>
          </div>
        );
      case "select_strings":
        return (
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-yellow-300">Step 1: Select 5 Suspicious Strings</h4>
            <p className="text-sm text-slate-400">Choose exactly 5 strings from the list below that you believe are indicative of malware.</p>
            <div className="grid grid-cols-2 gap-4 max-h-60 overflow-y-auto p-2 bg-slate-900/50 rounded border border-slate-700">
              {TEST_MALICIOUS_STRING_OPTIONS.map(opt => (
                <div key={opt.id} className="flex items-center space-x-2 p-2 bg-slate-800 rounded">
                  <Checkbox
                    id={opt.id}
                    checked={selectedStringLabels.includes(opt.label)}
                    onCheckedChange={(checked) => handleStringSelection(opt.label, Boolean(checked))}
                    disabled={selectedStringLabels.length >= 5 && !selectedStringLabels.includes(opt.label)}
                  />
                  <Label htmlFor={opt.id} className="text-slate-300 text-xs md:text-sm font-mono cursor-pointer">
                    {opt.label}
                  </Label>
                </div>
              ))}
            </div>
            {selectedStringLabels.length === 5 && (
              <Button onClick={() => setStep("select_condition")} className="bg-cyan-600 hover:bg-cyan-500 text-white w-full">
                Next: Select Condition ({selectedStringLabels.length}/5 strings selected)
              </Button>
            )}
             {selectedStringLabels.length < 5 && (
              <p className="text-center text-sm text-yellow-400">Please select {5 - selectedStringLabels.length} more string(s).</p>
            )}
          </div>
        );
      case "select_condition":
        return (
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-yellow-300">Step 2: Select Condition</h4>
            {selectedStringLabels.length === CORRECT_YARA_STRING_SELECTIONS_LABELS.length && 
             CORRECT_YARA_STRING_SELECTIONS_LABELS.every(s => selectedStringLabels.includes(s)) &&
             startWithAI && // Only show if AI selected these strings
              <p className="text-sm text-green-400 bg-green-900/50 p-2 rounded border border-green-700">
                <Bot size={16} className="inline mr-1" /> AI has pre-selected 5 suspicious strings for you.
              </p>
            }
            <p className="text-sm text-slate-400">Choose the YARA rule condition you believe will correctly identify the malware based on the selected strings.</p>
            <RadioGroup value={selectedConditionId ?? undefined} onValueChange={setSelectedConditionId} className="space-y-2 bg-slate-900/50 p-4 rounded border border-slate-700">
              {TEST_MALICIOUS_CONDITION_OPTIONS.map(opt => (
                <div key={opt.id} className="flex items-center space-x-2">
                  <RadioGroupItem value={opt.id} id={opt.id} />
                  <Label htmlFor={opt.id} className="text-slate-300 font-mono text-sm cursor-pointer">{opt.label}</Label>
                </div>
              ))}
            </RadioGroup>
            {selectedConditionId && (
              <Button onClick={() => setStep("review_rule")} className="bg-cyan-600 hover:bg-cyan-500 text-white w-full">
                Next: Review Rule
              </Button>
            )}
          </div>
        );
      case "review_rule":
        return (
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-yellow-300">Step 3: Review Your YARA Rule</h4>
            <p className="text-sm text-slate-400">This is the YARA rule generated from your selections. Submit it for testing.</p>
            <Terminal className="max-h-[200px] overflow-y-auto bg-black/80 p-3 rounded-md border border-green-600/50">
              <pre className="text-xs text-green-300 whitespace-pre-wrap">{userYaraRule || "Generating rule..."}</pre>
            </Terminal>
            <Button onClick={handleSubmitRule} className="bg-green-600 hover:bg-green-500 text-white w-full">
              Submit Rule for Testing
            </Button>
          </div>
        );
      case "result":
        // Fixed: Check if resultOutput exists and has content before trying to use .join() on it
        const resultString = resultOutput && resultOutput.length > 0 ? resultOutput.join('') : '';
        const isSuccess = resultString.includes("Congrats!");
        return (
          <div className="space-y-4">
             <h4 className={`text-lg font-semibold ${isSuccess ? 'text-green-400' : 'text-red-400'}`}>
              {isSuccess ? <CheckCircle className="inline mr-2"/> : <AlertCircle className="inline mr-2"/>}
              Test Result
            </h4>
            <Terminal className="max-h-[300px] min-h-[150px] overflow-y-auto bg-black/80 p-3 rounded-md border border-green-600/50">
              {/* Fixed: Safely check if line is a string before using includes() */}
              {displayedResultOutput.map((line, index) => (
                <div key={index} className={`whitespace-pre-wrap text-xs animate-fade-in ${ 
                  line && typeof line === 'string' && line.includes("Congrats!") ? 'text-yellow-300 font-bold' : 
                  line && typeof line === 'string' && line.includes("Status: Passed") ? 'text-green-300' :
                  line && typeof line === 'string' && (line.includes("Status: Failed") || line.includes("False Negatives Check") || line.includes("Exploit attempt failed")) ? 'text-red-400' 
                  : 'text-slate-300'
                }`}>
                  {line}
                </div>
              ))}
              {/* Show a blinking cursor or placeholder while loading if desired */}
              {displayedResultOutput.length < resultOutput.length && displayedResultOutput.length > 0 && (
                 <div className="whitespace-pre-wrap text-xs text-slate-300 animate-pulse">_</div>
              )}
               {displayedResultOutput.length === 0 && resultOutput.length > 0 && ( // Initial loading state
                 <div className="whitespace-pre-wrap text-xs text-slate-300 animate-pulse">Loading results... _</div>
              )}
            </Terminal>
            <Button onClick={resetTest} className="bg-blue-600 hover:bg-blue-500 text-white w-full" disabled={displayedResultOutput.length < resultOutput.length && resultOutput.length > 0}>
              {isSuccess ? "Test Another Scenario (Reset)" : "Try Again"}
            </Button>
          </div>
        );
    }
  };

  return (
    <div className="p-4 md:p-6 animate-fade-in">
      <h3 className="text-xl font-semibold text-cyan-300 mb-6">Test Malicious Activity (YARA Rule Builder)</h3>
      <div className="bg-slate-800/70 border border-slate-700 p-4 md:p-6 rounded-lg shadow-lg min-h-[300px]"> {/* Added min-height for consistency during simulation */}
        {renderStepContent()}
      </div>
      <div className="mt-8">
        <Button 
          onClick={step === "confirm" && !startWithAI ? onBack : () => {
            setSimulationLog([]); // Clear simulation log if going back from AI steps
            setStep("confirm");
            if (startWithAI && onAIWorkflowComplete) { // If AI flow was active, ensure its flag is reset
                onAIWorkflowComplete();
            }
          }} 
          variant="outline" 
          className="bg-slate-700 hover:bg-slate-600 text-slate-200 border-slate-600"
          disabled={step === "ai_simulating" && simulationLog.length < 9} // Disable back while AI is "thinking hard"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> 
          {step === "confirm" && !startWithAI ? "Back to Methods" : "Back to Start (Test Malicious)"}
        </Button>
      </div>
    </div>
  );
};

export default TestMaliciousView;
