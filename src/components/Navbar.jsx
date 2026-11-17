import React, { useState, useEffect } from 'react';
import { Download, Menu, X, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Navbar({ onOpenResume }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Experience', href: '#experience' },
    { label: 'Work', href: '#work' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
      isScrolled 
        ? 'bg-[#090A0F]/90 backdrop-blur-md py-3 border-b border-white/[0.08] shadow-lg shadow-black/40' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand Name */}
          <a href="#hero" className="flex items-center gap-2.5 group">
            <span className="w-8 h-8 rounded-lg bg-emerald-500 text-slate-950 font-bold text-sm flex items-center justify-center">
              TB
            </span>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">
                {portfolioData.personal.name}
              </span>
              <span className="text-[10px] text-slate-400 font-medium">
                Digital Marketer
              </span>
            </div>
          </a>

          {/* Clean 4-Link Navigation Bar */}
          <nav className="hidden md:flex items-center gap-1 bg-white/[0.04] border border-white/[0.08] px-3 py-1 rounded-full">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-white/[0.06] rounded-full transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Quick Actions */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-300 hover:text-white bg-white/[0.05] hover:bg-white/[0.08] border border-white/[0.08] rounded-lg transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-emerald-400" />
              <span>Resume</span>
            </button>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-white"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/[0.08] bg-[#0A0D16] px-5 py-4 space-y-3">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/[0.04] rounded-lg"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex gap-2 pt-2 border-t border-white/[0.08]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="flex-1 py-2 text-xs font-semibold text-slate-300 bg-white/[0.05] border border-white/[0.08] rounded-lg text-center"
            >
              Resume
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 py-2 text-xs font-bold text-slate-950 bg-emerald-400 text-center rounded-lg"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
