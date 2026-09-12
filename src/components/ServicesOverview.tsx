import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants/content.ts';

export const ServicesOverview: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-28 md:py-36 relative bg-[#070707] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 pb-8 border-b border-white/[0.08] gap-6"
        >
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#F5B90F] block mb-2">
              02 / Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white tracking-[-0.03em]">
              What We Do
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-neutral-400 font-sans max-w-md">
            Full-funnel digital marketing services engineered to capture market share, drive qualified traffic, and convert visitors.
          </p>
        </motion.div>

        {/* 6 Studio Service Cards with Hive Asymmetric Geometry & Focus Dimming */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => {
            const isHovered = hoveredIndex === index;
            const isOtherHovered = hoveredIndex !== null && hoveredIndex !== index;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative p-8 card-hive flex flex-col justify-between ${
                  isHovered
                    ? 'border-[#F5B90F]/60 bg-[#161616] shadow-gold-subtle -translate-y-1.5'
                    : isOtherHovered
                    ? 'border-white/[0.04] opacity-75'
                    : 'border-white/[0.08]'
                }`}
              >
                <div>
                  {/* Top Bar: Index & Badge */}
                  <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/[0.06]">
                    <span className="font-mono text-sm font-semibold text-neutral-400 group-hover:text-[#F5B90F] transition-colors">
                      0{index + 1}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 px-2.5 py-1 rounded bg-white/[0.03] border border-white/[0.06] group-hover:border-[#F5B90F]/30 group-hover:text-[#F5B90F] transition-colors">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-display font-bold text-white mb-3 tracking-tight group-hover:text-[#F5B90F] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed font-sans font-normal">
                    {service.description}
                  </p>
                </div>

                {/* Bottom Action Link */}
                <div className="pt-8 mt-6 flex items-center justify-between">
                  <a
                    href="#deep-dive"
                    className="inline-flex items-center gap-1.5 text-xs font-display font-bold uppercase tracking-widest text-neutral-400 group-hover:text-white transition-colors"
                  >
                    <span>Inspect Scope</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#F5B90F] transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
