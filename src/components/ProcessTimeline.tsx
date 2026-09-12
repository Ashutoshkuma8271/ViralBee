import React from 'react';
import { motion } from 'framer-motion';
import { PROCESS_STEPS } from '../constants/content.ts';

export const ProcessTimeline: React.FC = () => {
  return (
    <section id="process" className="py-28 md:py-36 relative bg-[#070707] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 pb-8 border-b border-white/[0.08] gap-6"
        >
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#F5B90F] block mb-2">
              05 / Workflow
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white tracking-[-0.03em]">
              Our 6-Step Process
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-neutral-400 font-sans max-w-sm">
            A battle-tested, repeatable methodology designed to systematically build your brand and scale conversions.
          </p>
        </motion.div>

        {/* 6-Step Editorial Flow Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROCESS_STEPS.map((stepItem, index) => {
            return (
              <motion.div
                key={stepItem.step}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="p-8 rounded-xl bg-[#0F0F0F] border border-white/[0.08] hover:border-[#F5B90F]/40 hover:bg-[#141414] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/[0.06]">
                    <span className="font-mono text-2xl font-bold text-white group-hover:text-[#F5B90F] transition-colors">
                      {stepItem.step}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">
                      Phase
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
                  <span className="text-[#F5B90F]">0{stepItem.step}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
