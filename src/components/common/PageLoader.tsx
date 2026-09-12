import React from 'react';
import { Logo } from '../Logo.tsx';

export const PageLoader: React.FC = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 relative">
      {/* Background Ambient Glow */}
      <div className="w-48 h-48 bg-[#F5B90F]/10 rounded-full blur-[80px] pointer-events-none absolute" />

      <div className="relative z-10 flex flex-col items-center space-y-4 animate-pulse">
        <Logo size="lg" showWordmark={true} />
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#F5B90F] animate-ping" />
          <span className="text-[11px] font-mono tracking-[0.25em] text-neutral-400 uppercase">
            Loading Studio Content...
          </span>
        </div>
      </div>
    </div>
  );
};
