import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showWordmark?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showWordmark = true,
}) => {
  const sizeMap = {
    sm: 'w-9 h-9',
    md: 'w-11 h-11',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24',
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Brand Badge Image */}
      <div className={`relative ${sizeMap[size]} shrink-0 transition-transform duration-300 hover:scale-105`}>
        <img
          src="/logo.svg"
          alt="Vyral Bee Logo"
          className="w-full h-full object-contain drop-shadow-[0_2px_12px_rgba(245,185,15,0.4)]"
          loading="eager"
        />
      </div>

      {/* Brand Wordmark & Tagline */}
      {showWordmark && (
        <div className="flex flex-col text-left">
          <div className="flex items-baseline font-display font-extrabold tracking-wider text-xl leading-none">
            <span className="text-white">VYRAL</span>
            <span className="text-[#F5B90F] ml-1">BEE</span>
          </div>
          <span className="text-[9px] uppercase tracking-[0.25em] text-neutral-400 font-semibold mt-1">
            CREATE • CONNECT • CONVERT
          </span>
        </div>
      )}
    </div>
  );
};
