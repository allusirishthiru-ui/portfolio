import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, ArrowUpRight, Check } from 'lucide-react';
import { LinkedInIcon, WhatsAppIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', contact: '', message: '' });
  const [sent, setSent] = useState(false);
  const sectionRef = useScrollReveal();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  const whatsappUrl = `https://wa.me/916281892355?text=${encodeURIComponent(
    "Hi Thirumalesh, I saw your digital marketing portfolio and would like to connect."
  )}`;

  return (
    <section id="contact" className="py-20 border-t border-white/[0.06] relative">
      <div ref={sectionRef} className="max-w-6xl mx-auto px-4 sm:px-6 reveal-on-scroll">
        
        {/* Section Header */}
        <div className="max-w-xl mb-12">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-400">
            05 / Contact
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 tracking-tight">
            Get in Touch
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">
            Open for full-time digital marketing roles and high-impact campaigns. Reach out directly below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Direct Channels (5 cols) */}
          <div className="md:col-span-5 space-y-3">
            
            {/* WhatsApp */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="glow-card flex items-center justify-between p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 group"
            >
              <div className="flex items-center gap-3">
                <WhatsAppIcon className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="text-xs font-bold text-white group-hover:text-emerald-300 transition-colors">
                    Chat on WhatsApp
                  </div>
                  <div className="text-[11px] text-slate-400">
                    Fastest response
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* Email */}
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="glow-card flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] group"
            >
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-sky-400 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="text-xs font-bold text-white group-hover:text-sky-300 transition-colors">
                    {portfolioData.personal.email}
                  </div>
                  <div className="text-[11px] text-slate-400">Official Email</div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* Phone */}
            <a
              href={`tel:${portfolioData.personal.phoneRaw}`}
              className="glow-card flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] group"
            >
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="text-xs font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {portfolioData.personal.phone}
                  </div>
                  <div className="text-[11px] text-slate-400">Call / Mobile</div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* LinkedIn */}
            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="glow-card flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] group"
            >
              <div className="flex items-center gap-3">
                <LinkedInIcon className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="text-xs font-bold text-white group-hover:text-blue-300 transition-colors">
                    linkedin.com/in/{portfolioData.personal.linkedinUsername}
                  </div>
                  <div className="text-[11px] text-slate-400">Professional Profile</div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* Location */}
            <div className="p-4 rounded-xl bg-white/[0.01] border border-white/[0.04] flex items-center gap-2.5 text-xs text-slate-400">
              <MapPin className="w-4 h-4 text-slate-400" />
              <span>{portfolioData.personal.location} (Open to Relocation / Remote)</span>
            </div>

          </div>

          {/* Minimal Message Form (7 cols) */}
          <div className="md:col-span-7 p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
            {sent ? (
              <div className="py-8 text-center space-y-2">
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto">
                  <Check className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">Message Sent</h3>
                <p className="text-xs text-slate-400">
                  Thank you! Thirumalesh will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-xs text-slate-400 font-medium">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-3 py-2 text-xs bg-white/[0.04] border border-white/[0.08] rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400 transition-colors"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs text-slate-400 font-medium">Email or Phone</label>
                    <input
                      type="text"
                      required
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      placeholder="e.g. rahul@company.com"
                      className="w-full px-3 py-2 text-xs bg-white/[0.04] border border-white/[0.08] rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs text-slate-400 font-medium">Message</label>
                  <textarea
                    rows={3}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe your team, campaign, or hiring requirement..."
                    className="w-full px-3 py-2 text-xs bg-white/[0.04] border border-white/[0.08] rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="shimmer-btn w-full py-2.5 rounded-lg text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-1.5 shadow-md shadow-emerald-500/20"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
