import React from 'react';
import { motion } from 'framer-motion';
import {
  UtensilsCrossed,
  ShoppingBag,
  Factory,
  Building2,
  HeartPulse,
  GraduationCap,
  Briefcase,
  Rocket,
} from 'lucide-react';
import { INDUSTRIES } from '../constants/content.ts';

const iconMap: Record<string, React.ElementType> = {
  UtensilsCrossed,
  ShoppingBag,
  Factory,
  Building2,
  HeartPulse,
  GraduationCap,
  Briefcase,
  Rocket,
};

export const Industries: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 md:py-32 relative bg-[#0A0A0A] bg-noise-grid border-t border-white/[0.08] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-8 border-b border-white/[0.08] gap-6"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F5B90F]" />
              <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.22em] text-[#F5B90F]">
                06 / Target Sectors
              </span>
            </div>
            <h2 className="text-fluid-h2 font-display font-extrabold text-white">
              Who We Work With
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-neutral-400 font-sans max-w-sm">
            Specialized multi-industry marketing frameworks customized for your specific commercial model.
          </p>
        </motion.div>

        {/* 8 Industry Grid with Hive Styling & Duotone Icons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {INDUSTRIES.map((ind, idx) => {
            const IconComponent = iconMap[ind.icon] || Building2;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="p-6 card-hive flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-8 h-8 rounded-lg bg-[#F5B90F] text-black flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(245,185,15,0.25)]">
                      <IconComponent className="w-4 h-4 stroke-[2.5]" />
                    </div>
                    <span className="font-mono text-[10px] text-neutral-500">
                      0{idx + 1}
                    </span>
                  </div>
                  
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
            );
          })}
        </div>

      </div>
    </section>
  );
};
