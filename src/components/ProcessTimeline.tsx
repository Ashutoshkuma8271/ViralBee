import React from 'react';
import { motion } from 'framer-motion';
import { Search, Compass, Sparkles, Send, BarChart3, Zap } from 'lucide-react';
import { PROCESS_STEPS } from '../constants/content.ts';

const iconMap: Record<string, React.ElementType> = {
  Search,
  Compass,
  Sparkles,
  Send,
  BarChart3,
  Zap,
};

export const ProcessTimeline: React.FC = () => {
  return (
    <section id="process" className="py-20 sm:py-28 md:py-36 relative bg-[#070707] bg-noise-grid border-t border-white/[0.08] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 md:mb-24 pb-8 border-b border-white/[0.08] gap-6"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F5B90F]" />
              <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.22em] text-[#F5B90F]">
                05 / Workflow
              </span>
            </div>
            <h2 className="text-fluid-h2 font-display font-extrabold text-white">
              Our 6-Step Process
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-neutral-400 font-sans max-w-sm">
            A battle-tested, repeatable methodology designed to systematically build your brand and scale conversions.
          </p>
        </motion.div>

        {/* 6-Step Editorial Flow Grid with Hive Styling */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROCESS_STEPS.map((stepItem, index) => {
            const IconComponent = iconMap[stepItem.icon] || Sparkles;
            return (
              <motion.div
                key={stepItem.step}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="p-8 card-hive flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/[0.06]">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#F5B90F] text-black flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(245,185,15,0.3)]">
                        <IconComponent className="w-4 h-4 stroke-[2.5]" />
                      </div>
                      <span className="font-mono text-xl font-bold text-white group-hover:text-[#F5B90F] transition-colors">
                        {stepItem.step}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">
                      Phase 0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-2xl font-display font-bold text-white mb-3 tracking-tight group-hover:text-[#F5B90F] transition-colors">
                    {stepItem.title}
                  </h3>

                  <p className="text-sm text-neutral-400 font-sans leading-relaxed">
                    {stepItem.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/[0.04] flex items-center justify-between text-xs text-neutral-400 font-mono">
                  <span>SYSTEM DELIVERABLE</span>
                  <span className="text-[#F5B90F]">VERIFIED</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
