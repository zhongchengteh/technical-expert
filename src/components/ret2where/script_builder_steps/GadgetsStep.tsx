
import React from 'react';
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Info } from 'lucide-react';

interface GadgetDetail {
  id: string;
  address: string;
  instruction: string;
  tooltip: string;
}

interface GadgetsStepProps {
  selectedGadgets: string[];
  onGadgetToggle: (gadgetId: string) => void;
  gadgetDetails: GadgetDetail[];
}

const GadgetsStep: React.FC<GadgetsStepProps> = ({ selectedGadgets, onGadgetToggle, gadgetDetails }) => {
  return (
    <TooltipProvider>
      <div className="space-y-6 bg-slate-700/50 p-6 rounded-lg">
        <h3 className="text-xl font-medium text-yellow-400">Step 4: Choose Correct Gadgets</h3>
        <p className="text-slate-300">Which gadgets help us set up the registers and call the function?</p>
        <div className="space-y-3">
          {gadgetDetails.map(gadget => (
            <Tooltip key={gadget.id}>
              <TooltipTrigger asChild>
                <div className="flex items-center space-x-3 p-3 rounded-md hover:bg-slate-600/50 transition-colors cursor-pointer">
                  <Checkbox
                    id={gadget.id}
                    checked={selectedGadgets.includes(gadget.id)}
                    onCheckedChange={() => onGadgetToggle(gadget.id)}
                    className="cursor-pointer"
                  />
                  <Label htmlFor={gadget.id} className="text-lg font-mono cursor-pointer">
                    {gadget.address}: {gadget.instruction}
                  </Label>
                </div>
              </TooltipTrigger>
              <TooltipContent className="bg-slate-800 text-slate-200 border-slate-600">
                <p>{gadget.tooltip}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
        <p className="text-sm text-sky-300 italic p-3 bg-slate-600/70 rounded-md flex items-start gap-2">
          <Info size={28} className="flex-shrink-0 text-sky-400" />
          <span>Remember: Because no direct `pop rsi; ret` gadget is available, you typically need to use a `pop rax; ret` followed by a `mov rsi, rax; ret` to set the RSI register. Select these if you plan to set RSI.</span>
        </p>
      </div>
    </TooltipProvider>
  );
};

export default GadgetsStep;
