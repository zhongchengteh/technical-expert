
import React from 'react';
import { cn } from "@/lib/utils";

interface TerminalProps {
  children: React.ReactNode;
  className?: string;
}

export const Terminal = ({ children, className }: TerminalProps) => {
  return (
    <div className={cn(
      "bg-zinc-900 text-green-400 p-4 rounded-md border-t border-green-500/30",
      "font-mono text-sm overflow-hidden relative",
      className
    )}>
      <div className="flex items-center gap-1.5 mb-4">
        <div className="h-3 w-3 rounded-full bg-red-500"></div>
        <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
        <div className="h-3 w-3 rounded-full bg-green-500"></div>
        <div className="ml-4 text-xs text-gray-400">YARA-HUNTER-TERMINAL ~ [ACTIVE SESSION]</div>
      </div>
      
      <div className="space-y-2">
        {children}
      </div>
      
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10 z-10">
        <div className="w-full h-full bg-repeat" style={{ 
          backgroundImage: 'repeating-linear-gradient(0deg, rgba(0, 255, 0, 0.15), rgba(0, 255, 0, 0.15) 1px, transparent 1px, transparent 2px)',
          backgroundSize: '100% 2px' 
        }}></div>
      </div>
    </div>
  );
};
