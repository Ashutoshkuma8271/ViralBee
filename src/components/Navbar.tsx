import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Logo } from './Logo.tsx';
import { NAV_LINKS, BRAND } from '../constants/content.ts';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3.5 md:py-4 bg-[#070707]/92 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_12px_40px_rgba(0,0,0,0.8)]'
          : 'py-5 sm:py-6 md:py-7 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo Lockup */}
          <Link
            to="/"
            className="group flex items-center transition-opacity hover:opacity-95 shrink-0"
            aria-label="Vyral Bee Home"
          >
            <Logo size="md" />
          </Link>

          {/* Center Navigation Capsule (Island Pill) */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 px-8 py-3.5 rounded-full bg-white/[0.04] hover:bg-white/[0.06] border border-white/[0.09] backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.45)] transition-all duration-300">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.label}
                to={link.href}
                className={({ isActive }) =>
                  `relative py-1 text-xs xl:text-[13px] font-sans font-semibold tracking-wider uppercase transition-colors duration-200 link-draw-gold ${
                    isActive
                      ? 'text-[#F5B90F]'
                      : 'text-neutral-400 hover:text-white'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-[#F5B90F] to-[#FFD966] rounded-full shadow-[0_0_10px_#F5B90F]" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Header Action Button */}
          <div className="hidden sm:flex items-center gap-4 shrink-0">
            <Link
              to="/contact"
              className="group relative inline-flex items-center gap-2.5 px-6 py-3 sm:px-7 sm:py-3.5 rounded-full bg-gradient-to-r from-[#F5B90F] to-[#E5A800] hover:from-[#FFD966] hover:to-[#F5B90F] text-black font-display font-extrabold text-xs sm:text-[13px] uppercase tracking-wider transition-all duration-300 shadow-[0_0_25px_rgba(245,185,15,0.35)] hover:shadow-[0_0_35px_rgba(245,185,15,0.6)] active:scale-[0.97]"
            >
              <span>Get a Free Quote</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-3 rounded-xl bg-white/[0.04] border border-white/10 text-white hover:text-[#F5B90F] hover:border-[#F5B90F]/40 transition-colors focus:outline-none cursor-pointer"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Full-Screen Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[76px] sm:top-[86px] bg-[#070707]/98 backdrop-blur-2xl border-t border-white/10 z-50 flex flex-col justify-between p-6 sm:p-8 lg:hidden animate-in fade-in duration-200 overflow-y-auto">
          <div className="flex flex-col gap-3 pt-2">
            <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#F5B90F] font-semibold">
              Studio Navigation
            </span>
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.label}
                to={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `text-2xl sm:text-3xl font-display font-bold transition-colors py-3 flex items-center justify-between border-b border-white/[0.05] ${
                    isActive ? 'text-[#F5B90F]' : 'text-white hover:text-[#F5B90F]'
                  }`
                }
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-5 h-5 text-neutral-500" />
              </NavLink>
            ))}
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-col gap-4">
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-4 rounded-full bg-[#F5B90F] hover:bg-[#FFD426] text-black font-display font-extrabold text-center text-xs uppercase tracking-widest shadow-[0_0_25px_rgba(245,185,15,0.4)] active:scale-[0.98]"
            >
              Get a Free Strategy Call
            </Link>
            <div className="text-center text-xs text-neutral-500 font-mono">
              {BRAND.tagline}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
