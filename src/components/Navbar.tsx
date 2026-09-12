import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Logo } from './Logo.tsx';
import { NAV_LINKS, BRAND } from '../constants/content.ts';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = NAV_LINKS.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3.5 bg-[#070707]/90 backdrop-blur-md border-b border-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.7)]'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="group flex items-center transition-opacity hover:opacity-90"
            aria-label="Vyral Bee Home"
          >
            <Logo size="md" />
          </a>

          {/* Desktop Navigation Links with Animated Gold Underline */}
          <nav className="hidden lg:flex items-center gap-7 px-7 py-2.5 rounded-full bg-white/[0.03] border border-white/[0.07] backdrop-blur-md">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative text-xs font-mono tracking-wider uppercase transition-colors duration-200 link-draw-gold ${
                    isActive
                      ? 'text-[#F5B90F] font-semibold'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#F5B90F] rounded-full shadow-[0_0_8px_#F5B90F]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Header Action Button */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F5B90F] hover:bg-[#FFD426] text-black font-display font-bold text-xs uppercase tracking-wider transition-all duration-200 hover:shadow-[0_0_20px_rgba(245,185,15,0.4)] active:scale-98"
            >
              <span>Get a Free Quote</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/[0.04] border border-white/10 text-white hover:text-[#F5B90F] transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Full-Screen Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[70px] bg-[#070707]/98 backdrop-blur-2xl border-t border-white/10 z-50 flex flex-col justify-between p-8 lg:hidden animate-in fade-in duration-200">
          <div className="flex flex-col gap-4 pt-6">
            <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#F5B90F]">
              Navigation
            </span>
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-2xl font-display font-bold text-white hover:text-[#F5B90F] transition-colors py-2.5 flex items-center justify-between border-b border-white/[0.04]"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-5 h-5 text-neutral-600" />
              </a>
            ))}
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col gap-4">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="w-full py-4 rounded-xl bg-[#F5B90F] text-black font-display font-bold text-center text-xs uppercase tracking-widest shadow-lg"
            >
              Get a Free Strategy Call
            </a>
            <div className="text-center text-xs text-neutral-500 font-mono">
              {BRAND.tagline}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
