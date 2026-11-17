import React, { useState, useEffect } from 'react';
import { 
  Activity, 
  TrendingUp, 
  Zap, 
  Radio, 
  CheckCircle2, 
  Sparkles, 
  Play, 
  Layers,
  ArrowUpRight,
  ShieldCheck
} from 'lucide-react';

export default function LiveCampaignEngine() {
  const [activeTab, setActiveTab] = useState('meta-google'); // 'meta-google' | 'reels' | 'seo'
  const [impressions, setImpressions] = useState(148280);
  const [leadsCount, setLeadsCount] = useState(42);
  const [flashNewLead, setFlashNewLead] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const [currentEventIndex, setCurrentEventIndex] = useState(0);

  // Live real-time events that stream across the engine
  const liveEvents = [
    { channel: "Meta Ads", time: "Just now", text: "Short-form video hook achieved 4.2% CTR on Instagram Reels", type: "success" },
    { channel: "Google Search", time: "18s ago", text: "Exact-match high-intent query converted (+₹3,200 pipeline)", type: "lead" },
    { channel: "Innoknowvex QA", time: "42s ago", text: "Daily budget reallocated to top 20% converting ad sets", type: "system" },
    { channel: "CapCut Reels", time: "1m ago", text: "Mobile retention pacing increased 3-second watch-through to 76%", type: "creative" },
    { channel: "Vernacular SEO", time: "2m ago", text: "Regional language search query ranked #1 in YouTube discovery", type: "seo" },
    { channel: "Canva Pro", time: "3m ago", text: "LinkedIn brand carousel scheduled for 100% cadence consistency", type: "schedule" }
  ];

  // Clock ticker
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-US', { hour12: false }));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  // Live impression counter simulation
  useEffect(() => {
    const interval = setInterval(() => {
      const increment = Math.floor(Math.random() * 8) + 3;
      setImpressions(prev => prev + increment);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  // Occasional live lead notification flash
  useEffect(() => {
    const leadTimer = setInterval(() => {
      setLeadsCount(prev => prev + 1);
      setFlashNewLead(true);
      setTimeout(() => setFlashNewLead(false), 1800);
    }, 9000);
    return () => clearInterval(leadTimer);
  }, []);

  // Live events stream rotation
  useEffect(() => {
    const eventTimer = setInterval(() => {
      setCurrentEventIndex(prev => (prev + 1) % liveEvents.length);
    }, 3800);
    return () => clearInterval(eventTimer);
  }, [liveEvents.length]);

  const activeEvent = liveEvents[currentEventIndex];

  return (
    <div className="relative rounded-2xl p-[1px] bg-gradient-to-b from-emerald-500/30 via-sky-500/20 to-emerald-500/10 shadow-2xl shadow-emerald-950/40">
      <div className="rounded-[15px] bg-[#0A0E1A]/95 backdrop-blur-xl p-5 sm:p-6 space-y-4 border border-white/[0.08]">
        
        {/* Header Bar: Live Indicator, Clock & Audio/Telemetry Bars */}
        <div className="flex items-center justify-between pb-3.5 border-b border-white/[0.08]">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-mono font-bold text-white tracking-wider uppercase flex items-center gap-1.5">
              <span>Live Campaign Engine</span>
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            {/* Telemetry Equalizer Bars */}
            <div className="flex items-end gap-0.5 h-3.5 px-1.5 py-0.5 rounded bg-white/[0.03] border border-white/[0.06]">
              <span className="w-1 bg-emerald-400 rounded-sm animate-pulse" style={{ height: '70%', animationDuration: '0.6s' }}></span>
              <span className="w-1 bg-emerald-400 rounded-sm animate-pulse" style={{ height: '100%', animationDuration: '0.9s' }}></span>
              <span className="w-1 bg-sky-400 rounded-sm animate-pulse" style={{ height: '50%', animationDuration: '0.7s' }}></span>
              <span className="w-1 bg-emerald-400 rounded-sm animate-pulse" style={{ height: '85%', animationDuration: '0.8s' }}></span>
            </div>

            {/* Live Clock */}
            <span className="text-[11px] font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
              {currentTime || 'LIVE'}
            </span>
          </div>
        </div>

        {/* Live Counters Banner */}
        <div className="grid grid-cols-3 gap-2">
          {/* Counter 1: Live Impressions */}
          <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
            <div className="text-[10px] text-slate-400 font-mono uppercase tracking-wider flex items-center justify-between">
              <span>Impressions</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
            </div>
            <div className="text-sm sm:text-base font-extrabold text-white font-mono mt-0.5 transition-all">
              {impressions.toLocaleString()}
            </div>
            <div className="text-[9px] text-emerald-400 font-semibold mt-0.5">
              +Active Stream
            </div>
          </div>

          {/* Counter 2: Target ROAS */}
          <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
            <div className="text-[10px] text-slate-400 font-mono uppercase tracking-wider">
              Avg ROAS
            </div>
            <div className="text-sm sm:text-base font-extrabold text-emerald-400 font-mono mt-0.5">
              3.8x – 4.5x
            </div>
            <div className="text-[9px] text-sky-400 font-semibold mt-0.5">
              Multi-Client Blended
            </div>
          </div>

          {/* Counter 3: Live Qualified Leads */}
          <div className={`p-2.5 rounded-xl border transition-all duration-300 ${
            flashNewLead 
              ? 'bg-emerald-500/20 border-emerald-400 scale-[1.03]' 
              : 'bg-white/[0.02] border-white/[0.06]'
          }`}>
            <div className="text-[10px] text-slate-400 font-mono uppercase tracking-wider flex items-center justify-between">
              <span>Leads Today</span>
              {flashNewLead && <span className="text-[9px] text-emerald-300 font-bold animate-pulse">+1 NEW</span>}
            </div>
            <div className="text-sm sm:text-base font-extrabold text-white font-mono mt-0.5">
              {leadsCount}
            </div>
            <div className="text-[9px] text-emerald-400 font-semibold mt-0.5">
              High-Intent
            </div>
          </div>
        </div>

        {/* Live Channel Status Nodes */}
        <div className="space-y-2">
          
          {/* Node 1: Google Ads Search Intent */}
          <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-emerald-500/30 transition-all flex items-center justify-between group">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20 flex items-center justify-center font-bold text-xs group-hover:scale-105 transition-transform">
                G
              </div>
              <div>
                <div className="text-xs font-bold text-white flex items-center gap-1.5">
                  <span>Google Ads Exact Match</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                </div>
                <div className="text-[10px] text-slate-400">Search intent & Quality Score optimization</div>
              </div>
            </div>
            <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
              Active • 4.1x
            </span>
          </div>

          {/* Node 2: Meta Ads Reels & Feed */}
          <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-sky-500/30 transition-all flex items-center justify-between group">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 flex items-center justify-center font-bold text-xs group-hover:scale-105 transition-transform">
                M
              </div>
              <div>
                <div className="text-xs font-bold text-white flex items-center gap-1.5">
                  <span>Meta Reels & Feed Ads</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse"></span>
                </div>
                <div className="text-[10px] text-slate-400">Dynamic Canva creatives + CapCut video hooks</div>
              </div>
            </div>
            <span className="text-[11px] font-mono text-sky-400 bg-sky-950/60 px-2 py-0.5 rounded border border-sky-800/40">
              Scaling • 3.6% CTR
            </span>
          </div>

          {/* Node 3: Brand Cadence & Content Pipeline */}
          <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-violet-500/30 transition-all flex items-center justify-between group">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-violet-500/10 text-violet-400 border border-violet-500/20 flex items-center justify-center font-bold text-xs group-hover:scale-105 transition-transform">
                Cv
              </div>
              <div>
                <div className="text-xs font-bold text-white flex items-center gap-1.5">
                  <span>LinkedIn & Instagram Cadence</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse"></span>
                </div>
                <div className="text-[10px] text-slate-400">Structured publishing & proactive engagement</div>
              </div>
            </div>
            <span className="text-[11px] font-mono text-violet-400 bg-violet-950/60 px-2 py-0.5 rounded border border-violet-800/40">
              100% Cadence
            </span>
          </div>

        </div>

        {/* Live Event Activity Feed Ticker */}
        <div className="p-3 rounded-xl bg-slate-900/90 border border-emerald-500/20 space-y-1.5 overflow-hidden">
          <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
            <span className="flex items-center gap-1 text-emerald-400 font-bold">
              <Zap className="w-3 h-3 text-emerald-400 animate-bounce-soft" />
              LIVE TELEMETRY STREAM
            </span>
            <span className="text-slate-500">{activeEvent.time}</span>
          </div>

          <div className="text-xs text-slate-200 font-medium leading-relaxed flex items-start gap-1.5 transition-all">
            <span className="text-emerald-400 font-bold shrink-0 font-mono">[{activeEvent.channel}]:</span>
            <span className="text-slate-300">{activeEvent.text}</span>
          </div>
        </div>

        {/* Console Bottom Bar */}
        <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-slate-400">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Innoknowvex & Harlal Seeds Validated</span>
          </span>
          <span className="text-emerald-400 font-semibold font-mono text-[10px]">
            ● TELEMETRY STABLE
          </span>
        </div>

      </div>
    </div>
  );
}
