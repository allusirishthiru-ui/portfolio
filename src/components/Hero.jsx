import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  Copy, 
  Check, 
  MapPin, 
  Phone, 
  Mail, 
  Award,
  Sparkles,
  Target,
  Video,
  TrendingUp,
  BarChart2,
  Zap,
  Activity
} from 'lucide-react';
import { LinkedInIcon } from './Icons';
import LiveCampaignEngine from './LiveCampaignEngine';
import { portfolioData } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  const [copiedField, setCopiedField] = useState(null);

  const copyText = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section id="hero" className="pt-28 pb-16 md:pt-36 md:pb-24 relative overflow-hidden">
      
      {/* Dynamic Animated Ambient Glow Orbs */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none bg-ambient-orb-1 -z-10" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[350px] bg-sky-500/10 rounded-full blur-[130px] pointer-events-none bg-ambient-orb-2 -z-10" />
      <div className="absolute top-2/3 left-10 w-[400px] h-[300px] bg-indigo-500/8 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Subtle modern grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Top Minimal Pill with Pulse Animation */}
        <div className="flex flex-wrap items-center gap-2 mb-6 animate-float-slow">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 backdrop-blur-md shadow-lg shadow-emerald-500/5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Digital Marketing Team Lead @ Innoknowvex</span>
          </span>

          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs text-slate-300 bg-white/[0.04] border border-white/[0.08] backdrop-blur-md">
            <MapPin className="w-3.5 h-3.5 text-sky-400" />
            <span>Bengaluru, Karnataka</span>
          </span>
        </div>

        {/* Main Grid: Headline & Interactive Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left: Punchy Headline & Copy */}
          <div className="lg:col-span-7 space-y-5">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.14]">
              Driving scalable growth with{' '}
              <span className="text-shine-ltr highlight-wipe-ltr marker-draw-ltr font-black px-1.5 py-0.5">
                high-ROI paid ads
              </span>
              , <span className="text-sky-400">SEO</span>, and{' '}
              <span className="text-violet-400">short-form video</span>.
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl font-normal">
              Hi, I'm <strong className="text-white font-semibold">{portfolioData.personal.name}</strong>. I orchestrate full-funnel digital campaigns across <span className="text-emerald-300 font-semibold highlight-wipe-ltr px-1">Google & Meta Ads</span>, craft vernacular SEO strategies, and direct engaging social video cadence using <span className="text-sky-300 font-medium">Canva & CapCut</span>.
            </p>

            {/* Direct Quick Contact Buttons */}
            <div className="flex flex-wrap items-center gap-2.5 pt-2">
              <button
                onClick={() => copyText(portfolioData.personal.email, 'email')}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-xs text-slate-300 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Mail className="w-3.5 h-3.5 text-sky-400" />
                <span>{portfolioData.personal.email}</span>
                {copiedField === 'email' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
              </button>

              <button
                onClick={() => copyText(portfolioData.personal.phone, 'phone')}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-xs text-slate-300 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>{portfolioData.personal.phone}</span>
                {copiedField === 'phone' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
              </button>

              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-xs text-slate-300 hover:text-blue-400 transition-all hover:scale-[1.02]"
              >
                <LinkedInIcon className="w-3.5 h-3.5 text-blue-400" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
              </a>
            </div>

            {/* Main Action CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <a
                href="#work"
                className="shimmer-btn px-6 py-3 rounded-xl text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 shadow-lg shadow-emerald-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                View Selected Work
              </a>
              <button
                onClick={onOpenResume}
                className="px-6 py-3 rounded-xl text-xs font-semibold text-slate-200 bg-white/[0.05] hover:bg-white/[0.08] border border-white/[0.1] transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Read Full Resume
              </button>
            </div>

          </div>

          {/* Right: Live Interactive Marketer Flow Card (Animated & Compact) */}
          <div className="lg:col-span-5">
            <LiveCampaignEngine />
          </div>

        </div>

        {/* 4 Minimal Bento Cards with Glow & Hover Lift */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 pt-14">
          {portfolioData.personal.quickStats.map((stat, i) => (
            <div 
              key={i} 
              className="glow-card p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] cursor-default"
            >
              <div className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">
                {stat.label}
              </div>
              <div className="text-lg font-bold text-white mt-1 group-hover:text-emerald-400 transition-colors">
                {stat.value}
              </div>
              <div className="text-xs text-emerald-400/90 font-medium mt-0.5">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
