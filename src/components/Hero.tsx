import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Hero3D } from './Hero3D.tsx';
import { BRAND } from '../constants/content.ts';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-5.5rem)] pt-2 pb-8 sm:pb-12 flex flex-col justify-between bg-[#070707] bg-noise-grid overflow-hidden"
    >
      {/* Asymmetric Subtle Gold Ambient Flare */}
      <div className="absolute top-1/4 left-10 w-[450px] h-[450px] bg-[#F5B90F]/[0.04] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[400px] h-[400px] bg-[#F5B90F]/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10 w-full flex-1 flex items-center py-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center w-full">
          
          {/* Left Column: Kinetic Typography & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-4 sm:space-y-6">
            
            {/* Eyebrow with Animated Gold Indicator */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] shadow-[0_2px_12px_rgba(0,0,0,0.4)]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#F5B90F] animate-pulse shadow-[0_0_8px_#F5B90F]" />
              <span className="text-[10px] sm:text-[11px] font-mono font-semibold uppercase tracking-[0.22em] text-neutral-300">
                {BRAND.tagline}
              </span>
            </motion.div>

            {/* Massive Headline with Fluid Scaling */}
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-fluid-hero font-display font-extrabold text-white"
            >
              <span className="block">
                We Make
              </span>
              <span className="block mt-0.5 sm:mt-1">
                Brands{' '}
                <span className="text-gold-gradient italic font-black relative inline-block">
                  Visible.
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute -bottom-1 sm:-bottom-1.5 left-0 right-0 h-[3px] sm:h-1 bg-gradient-to-r from-[#F5B90F] to-[#D49B05] origin-left rounded-full shadow-[0_0_14px_rgba(245,185,15,0.7)]"
                  />
                </span>
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm sm:text-base md:text-lg text-neutral-300/90 max-w-xl font-sans leading-relaxed font-normal"
            >
              {BRAND.subheadline}
            </motion.p>

            {/* Dual CTAs with Stylish Responsive Touch Sizing */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full sm:w-auto pt-1"
            >
              <Link
                to="/contact"
                className="group relative inline-flex items-center justify-center gap-3 px-7 py-3.5 sm:px-8 sm:py-4 rounded-full bg-[#F5B90F] hover:bg-[#FFD426] text-black font-display font-bold text-xs sm:text-[13px] uppercase tracking-wider transition-all duration-300 hover:shadow-[0_0_25px_rgba(245,185,15,0.4)] active:scale-[0.98]"
              >
                <span>Get a Free Strategy Call</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5] transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              <Link
                to="/work"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:px-7 sm:py-4 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#F5B90F]/40 text-white font-display font-semibold text-xs sm:text-[13px] uppercase tracking-wider transition-all duration-200 active:scale-[0.98]"
              >
                <span>See Our Work</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#F5B90F] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>

          </div>

          {/* Right Column: 3D Centerpiece */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex items-center justify-center w-full"
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
        transition={{ duration: 0.6, delay: 0.35 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full pt-4 sm:pt-6"
      >
        <div className="pt-4 sm:pt-5 border-t border-white/[0.08] grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-neutral-400 text-xs font-sans">
          <div>
            <span className="text-neutral-500 block font-mono text-[10px] uppercase tracking-wider">Specialization</span>
            <span className="text-white font-medium mt-0.5 block">Social • Web • Ads • Branding</span>
          </div>
          <div>
            <span className="text-neutral-500 block font-mono text-[10px] uppercase tracking-wider">Methodology</span>
            <span className="text-white font-medium mt-0.5 block">6-Step Full-Funnel Engine</span>
          </div>
          <div>
            <span className="text-neutral-500 block font-mono text-[10px] uppercase tracking-wider">Standard</span>
            <span className="text-white font-medium mt-0.5 block">Zero Vanity Metrics</span>
          </div>
          <div className="flex items-center justify-between md:justify-end">
            <Link
              to="/about"
              className="text-neutral-400 hover:text-white transition-colors flex items-center gap-1.5 uppercase font-mono text-[10px] tracking-widest group"
            >
              <span>Explore Studio</span>
              <ArrowRight className="w-3 h-3 text-[#F5B90F] transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
