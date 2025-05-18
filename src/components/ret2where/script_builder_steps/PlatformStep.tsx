
import React from 'react';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Server, FileText, Settings } from 'lucide-react';

type Platform = 'local' | 'remote' | 'debug';

interface PlatformStepProps {
  platform: Platform;
  onPlatformChange: (value: Platform) => void;
}

const PlatformStep: React.FC<PlatformStepProps> = ({ platform, onPlatformChange }) => {
  return (
    <div className="space-y-6 bg-slate-700/50 p-6 rounded-lg">
      <h3 className="text-xl font-medium text-yellow-400">Step 1: Choose Target Platform</h3>
      <RadioGroup value={platform} onValueChange={(value) => onPlatformChange(value as Platform)}>
        <div className="flex items-center space-x-2 p-3 rounded-md hover:bg-slate-600/50 transition-colors">
          <RadioGroupItem value="remote" id="remote" />
          <Label htmlFor="remote" className="text-lg flex items-center gap-2 cursor-pointer"><Server size={20}/> Remote Service (5.223.62.57, port 5001)</Label>
        </div>
        <div className="flex items-center space-x-2 p-3 rounded-md hover:bg-slate-600/50 transition-colors">
          <RadioGroupItem value="local" id="local" />
          <Label htmlFor="local" className="text-lg flex items-center gap-2 cursor-pointer"><FileText size={20}/> Local Binary (./ret2where)</Label>
        </div>
        <div className="flex items-center space-x-2 p-3 rounded-md hover:bg-slate-600/50 transition-colors">
          <RadioGroupItem value="debug" id="debug" />
          <Label htmlFor="debug" className="text-lg flex items-center gap-2 cursor-pointer"><Settings size={20}/> Debug (attach GDB)</Label>
        </div>
      </RadioGroup>
    </div>
  );
};

export default PlatformStep;
