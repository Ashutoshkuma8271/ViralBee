import React from 'react';
import { motion } from 'framer-motion';
import { INDUSTRIES } from '../constants/content.ts';

export const Industries: React.FC = () => {
  return (
    <section className="py-24 md:py-32 relative bg-[#0A0A0A] border-t border-white/[0.08]">
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
              06 / Target Sectors
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white tracking-[-0.03em]">
              Who We Work With
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-neutral-400 font-sans max-w-sm">
            Specialized multi-industry marketing frameworks customized for your specific commercial model.
          </p>
        </motion.div>

        {/* 8 Industry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {INDUSTRIES.map((ind, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="p-6 rounded-lg bg-[#0F0F0F] border border-white/[0.06] hover:border-[#F5B90F]/40 hover:bg-[#141414] transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <span className="font-mono text-[10px] text-neutral-400 block mb-2">
                  0{idx + 1}
                </span>
                <h3 className="font-display font-bold text-white text-base group-hover:text-[#F5B90F] transition-colors">
                  {ind.name}
                </h3>
                <p className="text-xs text-neutral-400 mt-2 font-sans leading-relaxed">
                  {ind.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-white/[0.04] flex items-center justify-between text-[10px] font-mono text-neutral-400 uppercase">
                <span>Sector Focus</span>
                <span className="text-[#F5B90F]">Verified</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
