import React, { useState, useRef, useCallback } from 'react';
import { ChevronsLeftRight } from 'lucide-react';

export const BeforeAfterSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPosition(percent);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  }, [isDragging, handleMove]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  }, [isDragging, handleMove]);

  return (
    <div className="w-full max-w-5xl mx-auto my-20 select-none">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-white/[0.08] gap-4">
        <div>
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#F5B90F] block mb-1">
            Visual Standard Benchmark
          </span>
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
            Before vs. After Transformation
          </h3>
        </div>
        <p className="text-xs text-neutral-400 font-sans max-w-xs">
          Drag horizontally to inspect the difference between generic templates and custom studio creative.
        </p>
      </div>

      {/* Interactive Slider Container */}
      <div
        ref={containerRef}
        className="relative w-full h-[380px] sm:h-[480px] md:h-[540px] rounded-xl overflow-hidden border border-white/15 cursor-ew-resize bg-[#111]"
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
        onTouchMove={handleTouchMove}
      >
        {/* AFTER Image (Full Layer Beneath) */}
        <div className="absolute inset-0 w-full h-full bg-[#111]">
          <img
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1600&q=80"
            alt="After Studio Transformation"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-6 right-6 z-10">
            <span className="px-3.5 py-1.5 rounded-full bg-black/85 backdrop-blur-md border border-[#F5B90F]/50 text-[#F5B90F] font-mono text-xs uppercase tracking-wider font-semibold">
              AFTER: Vyral Bee Custom Creative Suite
            </span>
          </div>
        </div>

        {/* BEFORE Image (Clipped Overlay) */}
        <div
          className="absolute inset-0 w-full h-full overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <div className="relative w-full h-full">
            <img
              src="https://images.unsplash.com/photo-1542744094-3a31727221eb?auto=format&fit=crop&w=1600&q=80"
              alt="Before Transformation"
              className="absolute inset-0 w-[1000px] sm:w-[1200px] md:w-[1400px] max-w-none h-full object-cover filter grayscale contrast-125 brightness-75"
            />
            <div className="absolute bottom-6 left-6 z-10">
              <span className="px-3.5 py-1.5 rounded-full bg-black/85 backdrop-blur-md border border-white/20 text-neutral-400 font-mono text-xs uppercase tracking-wider">
                BEFORE: Generic Unoptimized Content
              </span>
            </div>
          </div>
        </div>

        {/* Hairline Divider & Handle */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-[#F5B90F] z-20 pointer-events-none shadow-[0_0_10px_rgba(245,185,15,0.8)]"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#F5B90F] text-black flex items-center justify-center border-2 border-black">
            <ChevronsLeftRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
};
