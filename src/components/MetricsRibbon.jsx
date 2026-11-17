import React from 'react';
import { 
  Target, 
  TrendingUp, 
  Sparkles, 
  Video, 
  BarChart, 
  Award, 
  Cpu, 
  Users 
} from 'lucide-react';

export default function MetricsRibbon() {
  const ribbons = [
    { icon: Target, label: "Google & Meta Ads Scaling", color: "text-brand-400" },
    { icon: TrendingUp, label: "On-Page & Off-Page SEO", color: "text-cyan-400" },
    { icon: Video, label: "CapCut Short-Form & Reels", color: "text-indigo-400" },
    { icon: BarChart, label: "YouTube Studio & GA4 Data", color: "text-amber-400" },
    { icon: Sparkles, label: "Canva Brand Consistency", color: "text-emerald-400" },
    { icon: Cpu, label: "ChatGPT & Gemini AI Workflows", color: "text-rose-400" },
    { icon: Award, label: "MBA Dual Spec: Marketing + HR", color: "text-brand-300" },
    { icon: Users, label: "Multi-Client Campaign Leadership", color: "text-blue-400" },
  ];

  return (
    <div className="border-y border-slate-800/80 bg-slate-950/60 py-4 backdrop-blur-sm overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {ribbons.slice(0, 4).map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index} 
                className="flex items-center justify-center gap-2.5 p-2 rounded-xl bg-slate-900/40 border border-slate-800/50 hover:border-slate-700 transition-colors"
              >
                <Icon className={`w-4 h-4 ${item.color} shrink-0`} />
                <span className="text-xs font-semibold text-slate-200 tracking-wide">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
