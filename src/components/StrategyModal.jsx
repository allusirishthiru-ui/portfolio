import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  CheckCircle2, 
  Send, 
  ShieldCheck, 
  ArrowRight,
  TrendingUp,
  Target
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function StrategyModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [selectedGoal, setSelectedGoal] = useState('Scale Google & Meta Ads ROAS');
  const [contactInfo, setContactInfo] = useState('');
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const handleAuditSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Allow user to see confirmation
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-lg rounded-2xl bg-[#0C1222] border border-brand-500/40 p-6 sm:p-8 shadow-2xl shadow-brand-500/10 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Ambient glow */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-brand-500/10 rounded-full blur-[80px] pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white bg-slate-900 border border-slate-800 transition-colors"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-14 h-14 rounded-full bg-brand-500/20 text-brand-400 border border-brand-500/40 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-white">Strategy Request Received!</h3>
            <p className="text-xs text-slate-300 leading-relaxed max-w-sm mx-auto">
              Thirumalesh will review your brand's growth goal ({selectedGoal}) and prepare actionable audit recommendations.
            </p>
            <div className="pt-2">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2 rounded-xl text-xs font-bold text-slate-950 bg-brand-400 hover:bg-brand-300 transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleAuditSubmit} className="space-y-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-brand-500/10 text-brand-400 border border-brand-500/30 mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Complimentary Performance Audit</span>
              </div>
              <h3 className="text-xl font-extrabold text-white">
                Request a Custom Marketing Audit
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Receive practical insights on your paid acquisition funnel, SEO gaps, or social content engine.
              </p>
            </div>

            {/* Goal Selector */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">
                Primary Goal / Bottleneck to Solve:
              </label>
              <div className="grid grid-cols-1 gap-2">
                {[
                  "Scale Google & Meta Ads ROAS",
                  "Fix High CAC & Poor Lead Quality",
                  "Build Consistent Canva/CapCut Social Cadence",
                  "Vernacular SEO & Organic YouTube Growth",
                  "Hiring Team Lead for Digital Marketing"
                ].map((goal, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedGoal(goal)}
                    className={`text-left px-3.5 py-2.5 rounded-xl text-xs font-medium border transition-all flex items-center justify-between ${
                      selectedGoal === goal
                        ? 'bg-brand-500/15 border-brand-500 text-brand-300'
                        : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    <span>{goal}</span>
                    {selectedGoal === goal && <CheckCircle2 className="w-3.5 h-3.5 text-brand-400 shrink-0" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Input */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">
                Your Email, Phone, or Website URL *
              </label>
              <input
                type="text"
                required
                value={contactInfo}
                onChange={(e) => setContactInfo(e.target.value)}
                placeholder="e.g. founder@domain.com or +91..."
                className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-500 transition-colors"
              />
            </div>

            {/* Optional Context */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">
                Additional Notes (Optional)
              </label>
              <textarea
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Current monthly spend, target audience, or specific challenges..."
                className="w-full px-3.5 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-500 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl font-bold text-xs text-slate-950 bg-brand-400 hover:bg-brand-300 transition-all flex items-center justify-center gap-2 shadow-lg shadow-brand-500/20"
            >
              <span>Submit Audit Request</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <div className="text-center text-[10px] text-slate-500 flex items-center justify-center gap-1">
              <ShieldCheck className="w-3 h-3 text-brand-400" />
              <span>Zero spam • 100% confidential strategy feedback</span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
