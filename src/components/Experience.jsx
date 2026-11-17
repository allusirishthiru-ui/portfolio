import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Experience() {
  const sectionRef = useScrollReveal();

  return (
    <section id="experience" className="py-20 border-t border-white/[0.06] relative">
      <div ref={sectionRef} className="max-w-6xl mx-auto px-4 sm:px-6 reveal-on-scroll">
        
        {/* Section Header */}
        <div className="max-w-xl mb-12">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-400">
            01 / Work Experience
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 tracking-tight">
            Agency Leadership & Campaign Execution
          </h2>
        </div>

        {/* Timeline List */}
        <div className="space-y-6">
          {portfolioData.experience.map((exp, index) => (
            <div 
              key={index}
              className="glow-card p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06]"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-white/[0.06]">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {exp.role}
                    </h3>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {exp.type}
                    </span>
                  </div>
                  <div className="text-sm font-semibold text-emerald-400/90 mt-0.5">
                    {exp.company}
                  </div>
                </div>

                <div className="flex items-center gap-4 text-xs text-slate-400 font-mono">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Bullet Points */}
              <ul className="mt-5 space-y-2.5">
                {exp.bullets.map((point, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0 animate-pulse" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-1.5 mt-6 pt-4 border-t border-white/[0.04]">
                {exp.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-white/[0.04] text-slate-300 border border-white/[0.06] hover:border-emerald-500/40 hover:text-white transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
