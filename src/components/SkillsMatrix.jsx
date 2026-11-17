import React from 'react';
import { Target, Sparkles, BarChart2, Cpu } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function SkillsMatrix() {
  const icons = [Target, Sparkles, BarChart2, Cpu];
  const sectionRef = useScrollReveal();

  return (
    <section id="skills" className="py-20 border-t border-white/[0.06] relative">
      <div ref={sectionRef} className="max-w-6xl mx-auto px-4 sm:px-6 reveal-on-scroll">
        
        {/* Section Header */}
        <div className="max-w-xl mb-12">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-400">
            03 / Skills & Platforms
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 tracking-tight">
            Marketing Toolkit & Core Capabilities
          </h2>
        </div>

        {/* 4 Clean Domain Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {portfolioData.skillGroups.map((group, idx) => {
            const Icon = icons[idx] || Target;
            return (
              <div 
                key={idx}
                className="glow-card p-5 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]"
              >
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center transition-transform group-hover:scale-110">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-white tracking-tight">
                    {group.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white/[0.04] text-slate-300 border border-white/[0.06] hover:border-emerald-500/40 hover:text-white transition-all hover:scale-[1.03]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Languages & Leadership Strip */}
        <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-slate-400 font-semibold uppercase tracking-wider text-[11px]">Languages:</span>
            {portfolioData.languages.map((lang, lIdx) => (
              <span key={lIdx} className="px-2.5 py-1 rounded-lg bg-white/[0.04] text-slate-300 border border-white/[0.06] hover:border-white/[0.12] transition-colors">
                <strong className="text-white">{lang.name}</strong> ({lang.level})
              </span>
            ))}
          </div>

          <div className="text-slate-400">
            <span className="text-slate-400 font-semibold uppercase tracking-wider text-[11px] mr-2">Activity:</span>
            <span className="text-slate-300 font-medium">{portfolioData.activities}</span>
          </div>
        </div>

      </div>
    </section>
  );
}
