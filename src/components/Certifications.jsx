import React from 'react';
import { GraduationCap, Award } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Certifications() {
  const sectionRef = useScrollReveal();

  return (
    <section className="py-20 border-t border-white/[0.06] relative">
      <div ref={sectionRef} className="max-w-6xl mx-auto px-4 sm:px-6 reveal-on-scroll">
        
        {/* Section Header */}
        <div className="max-w-xl mb-12">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-400">
            04 / Credentials
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 tracking-tight">
            Education & Certifications
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Education */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
              <GraduationCap className="w-4 h-4 text-emerald-400" />
              <span>Higher Education</span>
            </div>

            <div className="space-y-3">
              {portfolioData.education.map((edu, idx) => (
                <div 
                  key={idx}
                  className="glow-card p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06]"
                >
                  <div className="flex justify-between items-start gap-2">
                    <div>
                      <h4 className="text-sm font-bold text-white">
                        {edu.degree}
                      </h4>
                      <div className="text-xs text-emerald-400/90 mt-0.5">
                        {edu.institution}
                      </div>
                      <div className="text-[11px] text-slate-400 mt-0.5">
                        {edu.location}
                      </div>
                    </div>
                    <span className="text-xs font-mono text-slate-400">
                      {edu.period}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
              <Award className="w-4 h-4 text-emerald-400" />
              <span>Industry Certifications</span>
            </div>

            <div className="space-y-3">
              {portfolioData.certifications.map((cert, idx) => (
                <div 
                  key={idx}
                  className="glow-card p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex justify-between items-center"
                >
                  <div>
                    <h4 className="text-sm font-bold text-white">
                      {cert.name}
                    </h4>
                    <div className="text-xs text-slate-400 mt-0.5">
                      {cert.issuer}
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Verified
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
