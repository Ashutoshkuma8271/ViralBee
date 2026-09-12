import React, { useState } from 'react';
import { X, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { PORTFOLIO_ITEMS } from '../constants/content.ts';
import { BeforeAfterSlider } from './BeforeAfterSlider.tsx';

const CATEGORIES = ['All', 'Social', 'Reels', 'Ads', 'Websites', 'Branding'] as const;

export const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedItem, setSelectedItem] = useState<(typeof PORTFOLIO_ITEMS)[0] | null>(null);

  const filteredItems = activeCategory === 'All'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="work" className="py-20 sm:py-28 md:py-36 relative bg-[#0A0A0A] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-8 border-b border-white/[0.08] gap-6"
        >
          <div>
            <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.22em] text-[#F5B90F] block mb-2 font-semibold">
              08 / Selected Works
            </span>
            <h2 className="text-fluid-h2 font-display font-extrabold text-white">
              Creative Showcase
            </h2>
          </div>
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#F5B90F] text-black font-bold shadow-[0_0_15px_rgba(245,185,15,0.35)] scale-102'
                      : 'bg-white/[0.04] text-neutral-400 hover:text-white border border-white/[0.06] hover:border-white/20'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              onClick={() => setSelectedItem(item)}
              className="group cursor-pointer flex flex-col justify-between"
            >
              {/* Image Frame with Duotone & Gold Tint Hover Overlay */}
              <div className="relative aspect-[16/11] w-full overflow-hidden rounded-xl bg-[#111] border border-white/[0.08] group-hover:border-[#F5B90F]/40 transition-all duration-300 mb-4 shadow-lg">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] filter grayscale-[15%] group-hover:grayscale-0"
                  loading="lazy"
                />

                {/* Subtle Gold Tint Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 opacity-60 group-hover:opacity-30 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-[#F5B90F]/0 group-hover:bg-[#F5B90F]/10 transition-colors duration-300 mix-blend-overlay" />

                {/* Concept Label */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="px-2.5 py-1 rounded bg-black/85 backdrop-blur-md text-[#F5B90F] font-mono text-[9px] uppercase tracking-wider border border-[#F5B90F]/30">
                    {item.label}
                  </span>
                </div>

                <div className="absolute top-3 right-3 z-10">
                  <span className="px-2.5 py-1 rounded bg-black/85 backdrop-blur-md text-white font-mono text-[9px] uppercase tracking-wider border border-white/10">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Card Meta */}
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="font-display font-bold text-white text-lg group-hover:text-[#F5B90F] transition-colors">
                    {item.title}
                  </h3>
                  <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-[#F5B90F] transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
                <p className="text-xs text-neutral-400 font-sans mt-1">
                  {item.description}
                </p>
                <span className="inline-block mt-2 font-mono text-[11px] text-[#F5B90F]">
                  {item.stats}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Before / After Slider */}
        <BeforeAfterSlider />

      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-150"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#111111] border border-[#F5B90F]/30 rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/80 text-white hover:text-[#F5B90F] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-[16/9] w-full">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-8 space-y-4">
              <div className="flex items-center gap-3 font-mono text-xs text-neutral-400">
                <span className="text-[#F5B90F]">{selectedItem.category}</span>
                <span>•</span>
                <span>{selectedItem.label}</span>
                <span>•</span>
                <span className="text-white">{selectedItem.stats}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                {selectedItem.title}
              </h3>

              <p className="text-sm text-neutral-300 font-sans leading-relaxed">
                {selectedItem.description}
              </p>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <a
                  href="#contact"
                  onClick={() => setSelectedItem(null)}
                  className="px-6 py-3 rounded-full bg-[#F5B90F] text-black font-display font-bold text-xs uppercase tracking-widest hover:bg-[#FFD426] transition-colors shadow-lg"
                >
                  Request Project Proposal
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
