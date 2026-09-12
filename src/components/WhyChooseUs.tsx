import React from 'react';
import { motion } from 'framer-motion';
import {
  Briefcase,
  Palette,
  CalendarCheck,
  MessageSquareText,
  LineChart,
  Layers,
  ShieldCheck,
  UserCheck,
} from 'lucide-react';
import { WHY_CHOOSE_US } from '../constants/content.ts';

const iconMap: Record<string, React.ElementType> = {
  Briefcase,
  Palette,
  CalendarCheck,
  MessageSquareText,
  LineChart,
  Layers,
  ShieldCheck,
  UserCheck,
};

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 md:py-32 relative bg-[#070707] bg-noise-grid border-t border-white/[0.08] overflow-hidden">
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
                07 / Agency Principles
              </span>
            </div>
            <h2 className="text-fluid-h2 font-display font-extrabold text-white">
              Why Choose Us
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-neutral-400 font-sans max-w-sm">
            Built to eliminate agency friction, deliver authentic brand distinction, and maximize return on spend.
          </p>
        </motion.div>

        {/* 8 Principles Matrix with Hive Styling & Duotone Icons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || Briefcase;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="p-7 card-hive flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6 pb-3 border-b border-white/[0.04]">
                    <div className="w-8 h-8 rounded-lg bg-[#F5B90F] text-black flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(245,185,15,0.25)]">
                      <IconComponent className="w-4 h-4 stroke-[2.5]" />
                    </div>
                    <span className="font-mono text-xs font-semibold text-[#F5B90F]">
                      /{String(idx + 1).padStart(2, '0')}
                    </span>
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
            );
          })}
        </div>

      </div>
    </section>
  );
};
