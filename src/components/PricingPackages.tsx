import React from 'react';
import { Check, Minus, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { PRICING_PACKAGES } from '../constants/content.ts';

export const PricingPackages: React.FC = () => {
  const handleSelectPackage = (packageName: string) => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      window.dispatchEvent(
        new CustomEvent('select-package', { detail: packageName })
      );
    }
  };

  return (
    <section id="packages" className="py-28 md:py-36 relative bg-[#070707] border-t border-white/[0.08]">
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
              09 / Packages
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white tracking-[-0.03em]">
              Transparent Solutions
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-neutral-400 font-sans max-w-sm">
            Choose the execution tier that matches your stage of business and revenue targets.
          </p>
        </motion.div>

        {/* 3 Package Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PACKAGES.map((pkg, index) => {
            return (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative rounded-xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 ${
                  pkg.popular
                    ? 'bg-[#141414] border border-[#F5B90F]/50 shadow-2xl lg:-translate-y-2'
                    : 'bg-[#0F0F0F] border border-white/[0.08] hover:border-white/20'
                }`}
              >
                <div>
                  {/* Tier Title */}
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-display font-bold text-white">
                      {pkg.name}
                    </h3>
                    <span
                      className={`text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded ${
                        pkg.popular
                          ? 'bg-[#F5B90F] text-black font-bold'
                          : 'bg-white/[0.04] text-neutral-400 border border-white/[0.06]'
                      }`}
                    >
                      {pkg.badge}
                    </span>
                  </div>

                  <p className="text-xs text-neutral-400 font-sans min-h-[36px] mb-6">
                    {pkg.tagline}
                  </p>

                  <div className="p-4 rounded-lg bg-white/[0.02] border border-white/[0.06] mb-8">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#F5B90F] block">
                      Customized Quotation
                    </span>
                    <p className="text-xs text-neutral-300 mt-1">
                      {pkg.highlight}
                    </p>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3.5 mb-8">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 block pb-2 border-b border-white/[0.06]">
                      Deliverables Matrix:
                    </span>
                    {pkg.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center justify-between text-xs sm:text-sm">
                        <span className="text-neutral-300 font-sans">{feat.name}</span>
                        <div>
                          {feat.included === true && (
                            <Check className="w-4 h-4 text-[#F5B90F] stroke-[2.5]" />
                          )}
                          {feat.included === false && (
                            <Minus className="w-4 h-4 text-neutral-600" />
                          )}
                          {feat.included === 'Add-on' && (
                            <span className="text-[10px] font-mono uppercase text-neutral-400 px-2 py-0.5 rounded bg-white/[0.04]">
                              Add-on
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action */}
                <div>
                  <button
                    onClick={() => handleSelectPackage(pkg.name)}
                    className={`group w-full py-3.5 rounded-full font-display font-bold text-xs uppercase tracking-widest transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
                      pkg.popular
                        ? 'bg-[#F5B90F] hover:bg-[#FFD426] text-black shadow-md active:scale-98'
                        : 'bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/10 hover:border-white/25 active:scale-98'
                    }`}
                  >
                    <span>Request {pkg.name} Quote</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Footnote */}
        <div className="mt-12 text-center text-xs text-neutral-400 font-sans">
          Pricing is customized based on business size, scope, and requirements. Contact us for a tailored quotation.
        </div>

      </div>
    </section>
  );
};
