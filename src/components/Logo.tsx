import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showWordmark?: boolean;
  showTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showWordmark = true,
  showTagline = false,
}) => {
  const sizeMap = {
    sm: 'w-9 h-9',
    md: 'w-11 h-11 sm:w-12 sm:h-12',
    lg: 'w-14 h-14 sm:w-16 sm:h-16',
    xl: 'w-20 h-20 sm:w-24 sm:h-24',
  };

  const textMap = {
    sm: 'text-lg',
    md: 'text-2xl sm:text-[26px]',
    lg: 'text-2xl sm:text-3xl',
    xl: 'text-3xl sm:text-4xl',
  };

  return (
    <div className={`group/logo flex items-center gap-3.5 select-none transition-transform duration-300 ease-out hover:scale-[1.02] cursor-pointer ${className}`}>
      {/* Brand Badge Image with Soft Gold Halo & Architectural Ring */}
      <div className="relative shrink-0 flex items-center justify-center p-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] group-hover/logo:border-[#F5B90F]/50 transition-all duration-300 shadow-[0_0_25px_rgba(245,185,15,0.22)] group-hover/logo:shadow-[0_0_35px_rgba(245,185,15,0.45)]">
        <div className={`${sizeMap[size]} transition-transform duration-300 ease-out group-hover/logo:-rotate-3 group-hover/logo:scale-105`}>
          <img
            src="/logo.svg"
            alt="Vyral Bee Logo"
            className="w-full h-full object-contain drop-shadow-[0_4px_16px_rgba(245,185,15,0.5)]"
            loading="eager"
          />
        </div>
      </div>

      {/* Brand Wordmark with Two-Tone Split & Precise Tracking */}
      {showWordmark && (
        <div className="flex flex-col text-left justify-center">
          <div className={`flex items-baseline font-display font-extrabold tracking-[-0.03em] transition-all duration-300 ease-out group-hover/logo:tracking-[-0.015em] leading-none ${textMap[size]}`}>
            <span className="text-white drop-shadow-sm">VYRAL</span>
            <span className="text-gold-gradient ml-1.5 drop-shadow-[0_0_12px_rgba(245,185,15,0.4)]">BEE</span>
          </div>
          {showTagline && (
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-neutral-400 font-semibold mt-1">
              CREATE • CONNECT • CONVERT
            </span>
          )}
        </div>
      )}
    </div>
  );
};
