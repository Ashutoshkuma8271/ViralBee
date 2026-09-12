import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Hero3D } from './Hero3D.tsx';
import { BRAND } from '../constants/content.ts';

export const Hero: React.FC = () => {
  const headlineWords = [
    { text: "We", highlight: false },
    { text: "Make", highlight: false },
    { text: "Brands", highlight: false },
    { text: "Visible.", highlight: true },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-32 pb-20 md:pt-40 md:pb-28 flex flex-col justify-between bg-[#070707] bg-noise-grid overflow-hidden"
    >
      {/* Asymmetric Subtle Gold Ambient Flare (Restrained depth) */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-[#F5B90F]/[0.04] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-[450px] h-[450px] bg-[#F5B90F]/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full flex-1 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
          
          {/* Left Column: Kinetic Typography & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-8">
            
            {/* Eyebrow with Animated Gold Indicator */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#F5B90F] animate-pulse" />
              <span className="text-[11px] font-mono font-medium uppercase tracking-[0.25em] text-neutral-300">
                {BRAND.tagline}
              </span>
            </motion.div>

            {/* Massive Headline with Word-by-Word Split Reveal */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black tracking-[-0.04em] text-white leading-[0.96]">
              <span className="overflow-hidden block">
                {headlineWords.slice(0, 2).map((item, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ y: "110%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.7,
                      delay: 0.1 + idx * 0.08,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="inline-block mr-4 sm:mr-6"
                  >
                    {item.text}
                  </motion.span>
                ))}
              </span>
              <span className="overflow-hidden block mt-1">
                {headlineWords.slice(2).map((item, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ y: "110%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.7,
                      delay: 0.26 + idx * 0.1,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className={`inline-block mr-4 ${
                      item.highlight
                        ? 'text-[#F5B90F] italic font-black relative'
                        : ''
                    }`}
                  >
                    {item.text}
                    {item.highlight && (
                      <motion.span
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute -bottom-1 sm:-bottom-2 left-0 right-0 h-1 bg-[#F5B90F] origin-left rounded-full shadow-[0_0_12px_rgba(245,185,15,0.6)]"
                      />
                    )}
                  </motion.span>
                ))}
              </span>
            </h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg md:text-xl text-neutral-400 max-w-xl font-sans leading-relaxed font-normal"
            >
              {BRAND.subheadline}
            </motion.p>

            {/* Dual CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2"
            >
              <a
                href="#contact"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#F5B90F] hover:bg-[#FFD426] text-black font-display font-bold text-xs uppercase tracking-widest transition-all duration-300 hover:shadow-[0_0_25px_rgba(245,185,15,0.4)] active:scale-98"
              >
                <span>Get a Free Strategy Call</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5] transition-transform duration-200 group-hover:translate-x-1" />
              </a>

              <a
                href="#work"
                className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#F5B90F]/40 text-white font-display font-semibold text-xs uppercase tracking-widest transition-all duration-200"
              >
                <span>See Our Work</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#F5B90F] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </motion.div>

          </div>

          {/* Right Column: 3D Centerpiece */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.0, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            <div className="w-full relative">
              <Hero3D />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom Architectural Spec Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full pt-12"
      >
        <div className="pt-6 border-t border-white/[0.08] grid grid-cols-2 md:grid-cols-4 gap-6 text-neutral-400 text-xs font-sans">
          <div>
            <span className="text-neutral-500 block font-mono text-[10px] uppercase tracking-wider">Specialization</span>
            <span className="text-white font-medium mt-1 block">Social • Web • Ads • Branding</span>
          </div>
          <div>
            <span className="text-neutral-500 block font-mono text-[10px] uppercase tracking-wider">Methodology</span>
            <span className="text-white font-medium mt-1 block">6-Step Full-Funnel Engine</span>
          </div>
          <div>
            <span className="text-neutral-500 block font-mono text-[10px] uppercase tracking-wider">Standard</span>
            <span className="text-white font-medium mt-1 block">Zero Vanity Metrics</span>
          </div>
          <div className="flex items-center justify-between md:justify-end">
            <a
              href="#about"
              className="text-neutral-400 hover:text-white transition-colors flex items-center gap-1.5 uppercase font-mono text-[10px] tracking-widest group"
            >
              <span>Explore Studio</span>
              <ArrowRight className="w-3 h-3 text-[#F5B90F] transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
