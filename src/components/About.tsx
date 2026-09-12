import React from 'react';
import { motion } from 'framer-motion';
import { BRAND, STATS } from '../constants/content.ts';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-28 md:py-36 relative bg-[#0A0A0A] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header with Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 pb-8 border-b border-white/[0.08] gap-6"
        >
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#F5B90F] block mb-2">
              01 / Agency Manifesto
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white tracking-[-0.03em]">
              {BRAND.aboutHeading}
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-neutral-400 font-sans max-w-sm">
            "{BRAND.positioning}"
          </p>
        </motion.div>

        {/* Editorial Statement Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-8"
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-medium text-white leading-snug tracking-tight">
              "{BRAND.aboutCopy}"
            </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-4 space-y-6 pt-2"
          >
            <p className="text-sm text-neutral-400 font-sans leading-relaxed">
              We eliminate the chaos of managing fragmented freelancers. By unifying high-converting graphic design, cinematic video production, performance media buying, and modern web architecture into one disciplined system, your brand accelerates faster with absolute visual cohesion.
            </p>
            <div className="pt-2">
              <a
                href="#services"
                className="group inline-flex items-center gap-2 text-xs font-display font-bold uppercase tracking-widest text-[#F5B90F] hover:text-white transition-colors"
              >
                <span>View Full Capabilities</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </a>
            </div>
          </motion.div>

        </div>

        {/* Hairline Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-12 border-t border-white/[0.08]">
          {STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col"
            >
              <div className="text-4xl sm:text-5xl md:text-6xl font-display font-black text-white tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm font-display font-bold text-[#F5B90F] mt-2">
                {stat.label}
              </div>
              <div className="text-xs text-neutral-400 mt-1 font-sans">
                {stat.detail}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
