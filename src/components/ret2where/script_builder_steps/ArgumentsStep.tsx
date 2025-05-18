
import React from 'react';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Info } from 'lucide-react';

interface ArgumentsStepProps {
  argRdi: string | null;
  onArgRdiChange: (value: string) => void;
  argRsi: string | null;
  onArgRsiChange: (value: string) => void;
  argRdx: string | null;
  onArgRdxChange: (value: string) => void;
}

const ArgumentsStep: React.FC<ArgumentsStepProps> = ({
  argRdi, onArgRdiChange,
  argRsi, onArgRsiChange,
  argRdx, onArgRdxChange
}) => {
  return (
    <div className="space-y-6 bg-slate-700/50 p-6 rounded-lg">
      <h3 className="text-xl font-medium text-yellow-400">Step 3: Set Function Argument Values</h3>
      <p className="text-slate-300">Which values must be passed to <code className="text-amber-300">surprise_for_you</code> to unlock the flag?</p>
      
      <div className="space-y-3">
        <Label className="text-lg text-slate-200">RDI (1st argument):</Label>
        <RadioGroup value={argRdi ?? ""} onValueChange={onArgRdiChange}>
            {['0xdeadbeef', '0xcafebabe'].map(val => (
                <div key={`rdi-${val}`} className="flex items-center space-x-2 p-2 rounded-md hover:bg-slate-600/50 transition-colors">
                    <RadioGroupItem value={val} id={`rdi-${val}`} />
                    <Label htmlFor={`rdi-${val}`} className="text-md cursor-pointer">{val}</Label>
                </div>
            ))}
        </RadioGroup>
         {argRdi !== null && argRdi !== '0xcafebabe' && (
            <p className="text-red-400 text-sm flex items-center gap-1"><Info size={16}/> Hint: Check the <code className="text-amber-300">surprise_for_you</code> decompilation. Parameter 'a' expects <code className="text-green-400">0xcafebabe</code>.</p>
        )}
      </div>
      <div className="space-y-3">
        <Label className="text-lg text-slate-200">RSI (2nd argument):</Label>
         <RadioGroup value={argRsi ?? ""} onValueChange={onArgRsiChange}>
            {['0xdeadbeef', '0xbadf00d'].map(val => (
                <div key={`rsi-${val}`} className="flex items-center space-x-2 p-2 rounded-md hover:bg-slate-600/50 transition-colors">
                    <RadioGroupItem value={val} id={`rsi-${val}`} />
                    <Label htmlFor={`rsi-${val}`} className="text-md cursor-pointer">{val}</Label>
                </div>
            ))}
        </RadioGroup>
        {argRsi !== null && argRsi !== '0xdeadbeef' && (
            <p className="text-red-400 text-sm flex items-center gap-1"><Info size={16}/> Hint: Parameter 'b' expects <code className="text-green-400">0xdeadbeef</code>.</p>
        )}
      </div>
       <div className="space-y-3">
        <Label className="text-lg text-slate-200">RDX (3rd argument):</Label>
         <RadioGroup value={argRdx ?? ""} onValueChange={onArgRdxChange}>
            {['0x41414141', '0xc0ffee'].map(val => (
                <div key={`rdx-${val}`} className="flex items-center space-x-2 p-2 rounded-md hover:bg-slate-600/50 transition-colors">
                    <RadioGroupItem value={val} id={`rdx-${val}`} />
                    <Label htmlFor={`rdx-${val}`} className="text-md cursor-pointer">{val}</Label>
                </div>
            ))}
        </RadioGroup>
         {argRdx !== null && argRdx !== '0xc0ffee' && (
            <p className="text-red-400 text-sm flex items-center gap-1"><Info size={16}/> Hint: Parameter 'c' expects <code className="text-green-400">0xc0ffee</code>.</p>
        )}
      </div>
    </div>
  );
};

export default ArgumentsStep;
