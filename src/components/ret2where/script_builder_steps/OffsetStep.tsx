
import React from 'react';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
// Info import removed as it's no longer used

type Offset = 40 | 48 | 56 | 64;

interface OffsetStepProps {
  offset: Offset | null;
  onOffsetChange: (value: Offset) => void;
}

const OffsetStep: React.FC<OffsetStepProps> = ({ offset, onOffsetChange }) => {
  return (
    <div className="space-y-6 bg-slate-700/50 p-6 rounded-lg">
      <h3 className="text-xl font-medium text-yellow-400">Step 2: Find Overflow Offset</h3>
      <p className="text-slate-300">What is the correct offset to overwrite RIP?</p>
      <RadioGroup value={offset?.toString()} onValueChange={(value) => onOffsetChange(parseInt(value) as Offset)}>
        {[40, 48, 56, 64].map(val => (
          <div key={val} className="flex items-center space-x-2 p-3 rounded-md hover:bg-slate-600/50 transition-colors">
            <RadioGroupItem value={val.toString()} id={`offset-${val}`} />
            <Label htmlFor={`offset-${val}`} className="text-lg cursor-pointer">{val}</Label>
          </div>
        ))}
      </RadioGroup>
      {/* Hint paragraph removed */}
    </div>
  );
};

export default OffsetStep;

