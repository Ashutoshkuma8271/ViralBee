import React from 'react';
import { motion } from 'framer-motion';
import { WHY_CHOOSE_US } from '../constants/content.ts';

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-24 md:py-32 relative bg-[#070707] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-white/[0.08] gap-6"
        >
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#F5B90F] block mb-2">
              07 / Agency Principles
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white tracking-[-0.03em]">
              Why Choose Us
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-neutral-400 font-sans max-w-sm">
            Built to eliminate agency friction, deliver authentic brand distinction, and maximize return on spend.
          </p>
        </motion.div>

        {/* 8 Principles Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="p-7 rounded-xl bg-[#0F0F0F] border border-white/[0.06] hover:border-[#F5B90F]/40 hover:bg-[#141414] transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6 pb-3 border-b border-white/[0.04]">
                  <span className="font-mono text-xs font-semibold text-[#F5B90F]">
                    /{String(idx + 1).padStart(2, '0')}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-[#F5B90F] transition-colors" />
                </div>

                <h3 className="font-display font-bold text-white text-base mb-2 group-hover:text-[#F5B90F] transition-colors leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-white/[0.04] text-[10px] font-mono text-neutral-400 uppercase">
                Studio Standard
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
