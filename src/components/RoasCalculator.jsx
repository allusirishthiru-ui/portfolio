import React, { useState } from 'react';
import { Calculator, Sparkles } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function RoasCalculator() {
  const [adSpend, setAdSpend] = useState(100000); // 1 Lakh INR
  const [targetRoas, setTargetRoas] = useState(3.5); // 3.5x
  const sectionRef = useScrollReveal();

  const projectedRevenue = Math.round(adSpend * targetRoas);
  const netReturn = Math.max(0, projectedRevenue - adSpend);

  return (
    <section className="py-16 border-t border-white/[0.06] relative">
      <div ref={sectionRef} className="max-w-6xl mx-auto px-4 sm:px-6 reveal-on-scroll">
        
        <div className="glow-card p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] relative overflow-hidden">
          
          {/* Subtle ambient light */}
          <div className="absolute top-0 right-1/4 w-72 h-72 bg-emerald-500/5 rounded-full blur-[80px] pointer-events-none" />

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 relative">
            
            {/* Left: Headline & Interactive Sliders */}
            <div className="flex-1 space-y-5">
              <div>
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                  <Calculator className="w-3.5 h-3.5 animate-bounce-soft" />
                  Interactive ROAS Simulator
                </span>
                <h3 className="text-xl font-bold text-white mt-1">
                  Estimate Your Campaign Growth
                </h3>
              </div>

              {/* Slider 1: Ad Spend */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">Monthly Ad Budget</span>
                  <span className="font-mono font-bold text-white">₹{adSpend.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="20000"
                  max="500000"
                  step="5000"
                  value={adSpend}
                  onChange={(e) => setAdSpend(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-800 rounded appearance-none cursor-pointer accent-emerald-400 transition-all"
                />
              </div>

              {/* Slider 2: Target ROAS */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">Target ROAS Multiplier</span>
                  <span className="font-mono font-bold text-emerald-400">{targetRoas.toFixed(1)}x</span>
                </div>
                <input
                  type="range"
                  min="2.0"
                  max="6.0"
                  step="0.1"
                  value={targetRoas}
                  onChange={(e) => setTargetRoas(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-800 rounded appearance-none cursor-pointer accent-emerald-400 transition-all"
                />
              </div>
            </div>

            {/* Right: Calculated Revenue Badge with Pulse */}
            <div className="lg:w-72 p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] text-center space-y-2 shadow-lg">
              <div className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">
                Projected Pipeline
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-emerald-400 to-sky-300 font-mono">
                ₹{projectedRevenue.toLocaleString()}
              </div>
              <div className="text-xs text-slate-400">
                Est. Net Margin: <strong className="text-emerald-400 font-mono">+₹{netReturn.toLocaleString()}</strong>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
