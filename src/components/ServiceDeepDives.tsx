import React from 'react';
import { Check, ArrowRight, Layers, Share2, Globe, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  SOCIAL_MEDIA_DEEP_DIVE,
  WEBSITES_AND_ADS_DEEP_DIVE,
} from '../constants/content.ts';

export const ServiceDeepDives: React.FC = () => {
  return (
    <section id="deep-dive" className="py-20 sm:py-28 md:py-36 relative bg-[#0A0A0A] bg-noise-grid border-t border-white/[0.08] overflow-hidden">
      {/* Asymmetric Ambient Glow */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-[#F5B90F]/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10 space-y-24 sm:space-y-32">
        
        {/* ========================================================================= */}
        {/* DEEP DIVE 1: Social Media Management                                     */}
        {/* ========================================================================= */}
        <div>
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
                  03 / Deep-Dive Spec
                </span>
              </div>
              <h2 className="text-fluid-h2 font-display font-extrabold text-white">
                Social Media Management
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-neutral-400 font-sans max-w-sm">
              From foundational visual guidelines to high-cadence monthly video & carousel distribution.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Column 1: Branding & Creative */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 sm:p-10 card-hive flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/[0.08]">
                  <div className="w-9 h-9 rounded-lg bg-[#F5B90F] text-black flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(245,185,15,0.3)]">
                    <Layers className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-semibold uppercase tracking-widest text-[#F5B90F]">
                      Visual Standards
                    </span>
                    <h3 className="text-2xl font-display font-bold text-white">
                      Branding & Creative
                    </h3>
                  </div>
                </div>

                <ul className="space-y-4">
                  {SOCIAL_MEDIA_DEEP_DIVE.brandingCreative.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 group/item">
                      <div className="mt-1 w-4 h-4 rounded-full bg-[#F5B90F]/15 text-[#F5B90F] flex items-center justify-center shrink-0 group-hover/item:bg-[#F5B90F] group-hover/item:text-black transition-colors">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span className="text-sm text-neutral-300 font-sans group-hover/item:text-white transition-colors">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-white/[0.06]">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 text-xs font-display font-bold uppercase tracking-widest text-neutral-400 hover:text-white transition-colors"
                >
                  <span>Request Branding Portfolio</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#F5B90F] transition-transform duration-200 group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>

            {/* Column 2: Content & Management */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 sm:p-10 card-hive flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/[0.08]">
                  <div className="w-9 h-9 rounded-lg bg-[#F5B90F] text-black flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(245,185,15,0.3)]">
                    <Share2 className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-semibold uppercase tracking-widest text-[#F5B90F]">
                      Audience Distribution
                    </span>
                    <h3 className="text-2xl font-display font-bold text-white">
                      Content & Management
                    </h3>
                  </div>
                </div>

                <ul className="space-y-4">
                  {SOCIAL_MEDIA_DEEP_DIVE.contentManagement.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 group/item">
                      <div className="mt-1 w-4 h-4 rounded-full bg-[#F5B90F]/15 text-[#F5B90F] flex items-center justify-center shrink-0 group-hover/item:bg-[#F5B90F] group-hover/item:text-black transition-colors">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span className="text-sm text-neutral-300 font-sans group-hover/item:text-white transition-colors">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-white/[0.06]">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 text-xs font-display font-bold uppercase tracking-widest text-neutral-400 hover:text-white transition-colors"
                >
                  <span>Get Sample Content Calendar</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#F5B90F] transition-transform duration-200 group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* DEEP DIVE 2: Websites & Paid Advertising                                 */}
        {/* ========================================================================= */}
        <div>
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
                  04 / Performance Spec
                </span>
              </div>
              <h2 className="text-fluid-h2 font-display font-extrabold text-white">
                Websites & Paid Advertising
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-neutral-400 font-sans max-w-sm">
              The high-performance acquisition engine to capture high-intent buyers and turn clicks into pipeline.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Panel Left: Website Development */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 sm:p-10 card-hive flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/[0.08]">
                  <div className="w-9 h-9 rounded-lg bg-[#F5B90F] text-black flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(245,185,15,0.3)]">
                    <Globe className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-semibold uppercase tracking-widest text-[#F5B90F]">
                      Digital Infrastructure
                    </span>
                    <h3 className="text-2xl font-display font-bold text-white">
                      Website Development
                    </h3>
                  </div>
                </div>

                <ul className="space-y-4">
                  {WEBSITES_AND_ADS_DEEP_DIVE.websites.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 group/item">
                      <div className="mt-1 w-4 h-4 rounded-full bg-[#F5B90F]/15 text-[#F5B90F] flex items-center justify-center shrink-0 group-hover/item:bg-[#F5B90F] group-hover/item:text-black transition-colors">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span className="text-sm text-neutral-300 font-sans group-hover/item:text-white transition-colors">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-white/[0.06]">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 text-xs font-display font-bold uppercase tracking-widest text-neutral-400 hover:text-white transition-colors"
                >
                  <span>Discuss Web Project</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#F5B90F] transition-transform duration-200 group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>

            {/* Panel Right: Paid Advertising */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 sm:p-10 card-hive flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center gap-3 mb-4 pb-4 border-b border-white/[0.08]">
                  <div className="w-9 h-9 rounded-lg bg-[#F5B90F] text-black flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(245,185,15,0.3)]">
                    <TrendingUp className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-semibold uppercase tracking-widest text-[#F5B90F]">
                      Targeted Acquisition
                    </span>
                    <h3 className="text-2xl font-display font-bold text-white">
                      Paid Advertising
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-neutral-400 mb-6 font-mono bg-white/[0.02] p-3 rounded-lg border border-white/[0.04]">
                  "{WEBSITES_AND_ADS_DEEP_DIVE.paidAdvertising.tagline}"
                </p>

                <ul className="space-y-4">
                  {WEBSITES_AND_ADS_DEEP_DIVE.paidAdvertising.features.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 group/item">
                      <div className="mt-1 w-4 h-4 rounded-full bg-[#F5B90F]/15 text-[#F5B90F] flex items-center justify-center shrink-0 group-hover/item:bg-[#F5B90F] group-hover/item:text-black transition-colors">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span className="text-sm text-neutral-300 font-sans group-hover/item:text-white transition-colors">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-white/[0.06]">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 text-xs font-display font-bold uppercase tracking-widest text-neutral-400 hover:text-white transition-colors"
                >
                  <span>Launch Paid Ad Campaign</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#F5B90F] transition-transform duration-200 group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
};
