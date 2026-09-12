import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const CtaBanner: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 md:py-32 relative bg-[#0A0A0A] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto space-y-6"
        >
          <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.25em] text-[#F5B90F] block font-semibold">
            CREATE • CONNECT • CONVERT
          </span>

          <h2 className="text-fluid-h2 font-display font-extrabold text-white">
            Ready to Make Your Brand <br className="hidden sm:inline" />
            <span className="text-gold-gradient italic">More Visible?</span>
          </h2>

          <p className="text-base sm:text-lg text-neutral-400 font-sans max-w-xl mx-auto leading-relaxed">
            Let's build your digital presence together. Combine strategy, design, and performance under one dedicated roof.
          </p>

          <div className="pt-4">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#F5B90F] hover:bg-[#FFD426] text-black font-display font-bold text-xs uppercase tracking-widest transition-all duration-200 active:scale-98"
            >
              <span>Book a Free Consultation</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5] transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

