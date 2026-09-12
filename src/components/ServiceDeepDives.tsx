import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  SOCIAL_MEDIA_DEEP_DIVE,
  WEBSITES_AND_ADS_DEEP_DIVE,
} from '../constants/content.ts';

export const ServiceDeepDives: React.FC = () => {
  return (
    <section id="deep-dive" className="py-28 md:py-36 relative bg-[#0A0A0A] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 space-y-32">
        
        {/* ========================================================================= */}
        {/* DEEP DIVE 1: Social Media Management                                     */}
        {/* ========================================================================= */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-white/[0.08] gap-6"
          >
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#F5B90F] block mb-2">
                03 / Deep-Dive Spec
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white tracking-[-0.03em]">
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-8 sm:p-10 rounded-xl bg-[#0F0F0F] border border-white/[0.08] hover:border-[#F5B90F]/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="mb-6 pb-4 border-b border-white/[0.08]">
                  <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#F5B90F]">
                    Visual Standards
                  </span>
                  <h3 className="text-2xl font-display font-bold text-white mt-1">
                    Branding & Creative
                  </h3>
                </div>

                <ul className="space-y-4">
                  {SOCIAL_MEDIA_DEEP_DIVE.brandingCreative.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 group">
                      <div className="mt-1 w-4 h-4 rounded-full bg-[#F5B90F]/10 text-[#F5B90F] flex items-center justify-center shrink-0 group-hover:bg-[#F5B90F] group-hover:text-black transition-colors">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span className="text-sm text-neutral-300 font-sans group-hover:text-white transition-colors">
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 sm:p-10 rounded-xl bg-[#0F0F0F] border border-white/[0.08] hover:border-[#F5B90F]/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="mb-6 pb-4 border-b border-white/[0.08]">
                  <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#F5B90F]">
                    Audience Distribution
                  </span>
                  <h3 className="text-2xl font-display font-bold text-white mt-1">
                    Content & Management
                  </h3>
                </div>

                <ul className="space-y-4">
                  {SOCIAL_MEDIA_DEEP_DIVE.contentManagement.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 group">
                      <div className="mt-1 w-4 h-4 rounded-full bg-[#F5B90F]/10 text-[#F5B90F] flex items-center justify-center shrink-0 group-hover:bg-[#F5B90F] group-hover:text-black transition-colors">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span className="text-sm text-neutral-300 font-sans group-hover:text-white transition-colors">
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
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-white/[0.08] gap-6"
          >
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#F5B90F] block mb-2">
                04 / Performance Spec
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white tracking-[-0.03em]">
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-8 sm:p-10 rounded-xl bg-[#0F0F0F] border border-white/[0.08] hover:border-[#F5B90F]/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="mb-6 pb-4 border-b border-white/[0.08]">
                  <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#F5B90F]">
                    Digital Infrastructure
                  </span>
                  <h3 className="text-2xl font-display font-bold text-white mt-1">
                    Website Development
                  </h3>
                </div>

                <ul className="space-y-4">
                  {WEBSITES_AND_ADS_DEEP_DIVE.websites.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 group">
                      <div className="mt-1 w-4 h-4 rounded-full bg-[#F5B90F]/10 text-[#F5B90F] flex items-center justify-center shrink-0 group-hover:bg-[#F5B90F] group-hover:text-black transition-colors">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span className="text-sm text-neutral-300 font-sans group-hover:text-white transition-colors">
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 sm:p-10 rounded-xl bg-[#0F0F0F] border border-white/[0.08] hover:border-[#F5B90F]/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="mb-6 pb-4 border-b border-white/[0.08]">
                  <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#F5B90F]">
                    Targeted Acquisition
                  </span>
                  <h3 className="text-2xl font-display font-bold text-white mt-1">
                    Paid Advertising
                  </h3>
                  <p className="text-xs text-neutral-400 mt-2 font-mono">
                    "{WEBSITES_AND_ADS_DEEP_DIVE.paidAdvertising.tagline}"
                  </p>
                </div>

                <ul className="space-y-4">
                  {WEBSITES_AND_ADS_DEEP_DIVE.paidAdvertising.features.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 group">
                      <div className="mt-1 w-4 h-4 rounded-full bg-[#F5B90F]/10 text-[#F5B90F] flex items-center justify-center shrink-0 group-hover:bg-[#F5B90F] group-hover:text-black transition-colors">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span className="text-sm text-neutral-300 font-sans group-hover:text-white transition-colors">
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
