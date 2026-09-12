import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Compass } from 'lucide-react';
import { motion } from 'framer-motion';

export const NotFound: React.FC = () => {
  return (
    <section className="min-h-[70vh] flex items-center justify-center py-20 px-4 sm:px-6 relative bg-[#070707] bg-noise-grid overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#F5B90F]/[0.05] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-xl mx-auto text-center relative z-10 space-y-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#F5B90F]/10 border border-[#F5B90F]/30 text-[#F5B90F] shadow-[0_0_25px_rgba(245,185,15,0.2)]"
        >
          <Compass className="w-8 h-8 stroke-[2]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-3"
        >
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#F5B90F] block">
            Error 404 / Route Not Found
          </span>
          <h1 className="text-4xl sm:text-5xl font-display font-black text-white">
            Off the Radar
          </h1>
          <p className="text-sm text-neutral-400 font-sans max-w-md mx-auto leading-relaxed">
            The page or route you are looking for has been relocated or does not exist in our digital ecosystem.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="pt-4"
        >
          <Link
            to="/"
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#F5B90F] hover:bg-[#FFD426] text-black font-display font-bold text-xs uppercase tracking-widest transition-all duration-200 shadow-lg active:scale-98"
          >
            <ArrowLeft className="w-4 h-4 stroke-[2.5] transition-transform duration-200 group-hover:-translate-x-1" />
            <span>Return to Studio Home</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default NotFound;
