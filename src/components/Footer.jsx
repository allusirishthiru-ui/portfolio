import React from 'react';
import { ArrowUp } from 'lucide-react';
import { LinkedInIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Footer({ onOpenResume }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/[0.06] py-10 bg-[#06080E] text-slate-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span className="font-semibold text-white">{portfolioData.personal.name}</span>
            <span className="text-slate-500">•</span>
            <span>Digital Marketing Team Lead</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenResume}
              className="hover:text-white transition-colors"
            >
              Resume
            </button>
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="hover:text-white transition-colors"
            >
              Email
            </a>
            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-400 hover:text-white transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}
