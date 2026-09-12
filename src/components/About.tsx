import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Zap, Award, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { BRAND, STATS } from '../constants/content.ts';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 md:py-36 relative bg-[#090909] bg-noise-grid border-t border-white/[0.08] overflow-hidden">
      {/* Asymmetric Gold Ambient Glow */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#F5B90F]/[0.03] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#F5B90F]/[0.02] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Section Header with Split Text Reveal */}
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
                01 / Agency Manifesto
              </span>
            </div>
            <h2 className="text-fluid-h2 font-display font-extrabold text-white">
              {BRAND.aboutHeading}
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-neutral-400 font-sans max-w-sm">
            "{BRAND.positioning}"
          </p>
        </motion.div>

        {/* Editorial Statement Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-20 sm:mb-24">
          
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8 space-y-6 sm:space-y-8"
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display font-bold text-white leading-snug tracking-tight">
              "{BRAND.aboutCopy}"
            </h3>

            {/* 3 Value Pillars with Asymmetric Hive Badges & Duotone Containers */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#F5B90F] text-black flex items-center justify-center shrink-0 font-bold shadow-[0_0_12px_rgba(245,185,15,0.3)]">
                  <Target className="w-4 h-4 stroke-[2.5]" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-white text-xs">Strategic Focus</h4>
                  <p className="text-[11px] text-neutral-400 mt-0.5 font-sans">Aligned to revenue</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#F5B90F] text-black flex items-center justify-center shrink-0 font-bold shadow-[0_0_12px_rgba(245,185,15,0.3)]">
                  <Zap className="w-4 h-4 stroke-[2.5]" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-white text-xs">Speed & Quality</h4>
                  <p className="text-[11px] text-neutral-400 mt-0.5 font-sans">Rapid studio execution</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#F5B90F] text-black flex items-center justify-center shrink-0 font-bold shadow-[0_0_12px_rgba(245,185,15,0.3)]">
                  <Award className="w-4 h-4 stroke-[2.5]" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-white text-xs">Proven Stack</h4>
                  <p className="text-[11px] text-neutral-400 mt-0.5 font-sans">Social, Web & Ads</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 space-y-6 pt-2"
          >
            <p className="text-sm text-neutral-400 font-sans leading-relaxed">
              We eliminate the chaos of managing fragmented freelancers. By unifying high-converting graphic design, cinematic video production, performance media buying, and modern web architecture into one disciplined system, your brand accelerates faster with absolute visual cohesion.
            </p>
            <div className="pt-2">
              <Link
                to="/services"
                className="group inline-flex items-center gap-2 text-xs font-display font-bold uppercase tracking-widest text-[#F5B90F] hover:text-white transition-colors"
              >
                <span>View Full Capabilities</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </motion.div>

        </div>

        {/* Asymmetrical Hairline Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-12 border-t border-white/[0.08]">
          {STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-[#F5B90F]/30 transition-colors flex flex-col"
            >
              <div className="text-4xl sm:text-5xl font-display font-black text-white tracking-tight">
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
