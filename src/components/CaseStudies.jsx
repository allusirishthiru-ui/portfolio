import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function CaseStudies() {
  const sectionRef = useScrollReveal();

  return (
    <section id="work" className="py-20 border-t border-white/[0.06] relative">
      <div ref={sectionRef} className="max-w-6xl mx-auto px-4 sm:px-6 reveal-on-scroll">
        
        {/* Section Header */}
        <div className="max-w-xl mb-12">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-400">
            02 / Selected Work
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 tracking-tight">
            Campaign Case Studies & Growth Highlights
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">
            Practical campaign strategies focused on ROAS optimization, vernacular discovery, and creative consistency.
          </p>
        </div>

        {/* 3-Card Modern Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {portfolioData.caseStudies.map((item, idx) => (
            <div
              key={idx}
              className="glow-card p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex flex-col justify-between"
            >
              <div>
                {/* Header Tag & Metric */}
                <div className="flex items-center justify-between text-xs pb-3 border-b border-white/[0.04]">
                  <span className="text-[11px] font-semibold text-emerald-400">
                    {item.tag}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-slate-300 border border-white/[0.06]">
                    {item.metric}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mt-3 group-hover:text-emerald-300 transition-colors">
                  {item.title}
                </h3>
                <div className="text-xs text-slate-400 font-medium mt-0.5">
                  {item.client}
                </div>

                <p className="text-xs text-slate-300 leading-relaxed mt-3">
                  {item.desc}
                </p>

                {/* Strategy Points */}
                <div className="mt-4 pt-3 border-t border-white/[0.04] space-y-1.5">
                  {item.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-[11px] text-slate-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/60" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
