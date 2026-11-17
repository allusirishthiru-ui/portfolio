import React, { useState } from 'react';
import { 
  X, 
  Printer, 
  Copy, 
  Check, 
  ExternalLink, 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  Award,
  Briefcase,
  GraduationCap
} from 'lucide-react';
import { LinkedInIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const fullText = `
THIRUMALESH B
Phone: ${portfolioData.personal.phone} | Email: ${portfolioData.personal.email} | Location: ${portfolioData.personal.location}
LinkedIn: https://www.linkedin.com/in/thirumalesh-b-

PROFESSIONAL SUMMARY:
${portfolioData.personal.bio}

WORK EXPERIENCE:
1. Digital Marketing Team Lead | Innoknowvex | Bengaluru, Karnataka (Nov 2025 – Present)
- Coordinate with a fellow digital marketing executive on task allocation and quality review across concurrent client campaigns.
- Guide strategy, audience targeting, and budget planning for Google Ads and Meta Ads (Facebook & Instagram) campaigns executed by the team, monitoring performance to inform optimisation.
- Manage content scheduling and engagement for Instagram and LinkedIn brand pages using Canva, maintaining a consistent posting cadence and brand identity.
- Produce and edit short-form video content using CapCut to improve organic reach and audience retention across platforms.
- Support LinkedIn company page growth through structured content planning and proactive engagement.

2. Marketing Officer (Intern) | Harlal Seeds Pvt. Ltd. | Hyderabad, Telangana (Mar 2025 – May 2025)
- Supported the marketing team lead with market research, competitor analysis, and content analysis across YouTube, Facebook, and Instagram campaigns for an agri-tech brand serving regional-language farmer audiences.
- Conducted keyword and hashtag research to improve content discoverability and align messaging with vernacular-speaking audience search behaviour.
- Analysed YouTube Analytics and platform performance data to identify top-performing content formats and surface insights for the team.
- Collaborated with the marketing team, contributing research insights that informed campaign messaging and promotional timing.
- Used AI tools (ChatGPT, Gemini) to accelerate research and content ideation, improving turnaround time on deliverables.

TECHNICAL SKILLS:
- Advertising & SEO/SEM: Google Ads, Meta Ads (Facebook & Instagram), On-page & Off-page SEO, Keyword Research, SEM
- Social Media & Design Tools: Instagram, LinkedIn, Facebook, YouTube, Canva, CapCut, Google Analytics, YouTube Analytics, AI-assisted tools (Claude, ChatGPT, Gemini)
- Collaboration: Task Coordination, Campaign Support, Cross-functional Collaboration

EDUCATION:
- MBA – Human Resources & Marketing (2024 – 2026), Andhra University, Andhra Pradesh
- B.Sc. (Hons.) Agriculture (2020 – 2024), Lovely Professional University, Punjab

CERTIFICATIONS:
- Digital Marketing – ExcelR Institute, Hyderabad
- Social Media Marketing – Udemy
- Digital Marketing – Innoknowvex, Bengaluru

ADDITIONAL INFORMATION:
- Languages: Telugu, Hindi, English
- Soft Skills: Communication, Creativity, Time Management, Teamwork, Leadership, Adaptability, Problem-Solving
- Activities: Assistant Manager – Tachyons Club, Lovely Professional University
    `.trim();

    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl bg-[#0B101E] border border-slate-800 shadow-2xl overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-900 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-brand-400"></span>
            <span className="text-xs font-bold uppercase tracking-wider text-white">
              Official Resume Viewer
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-300 bg-slate-800 hover:text-white border border-slate-700 transition-colors"
              title="Copy Text Format"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-brand-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied!' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold text-slate-950 bg-brand-400 hover:bg-brand-300 transition-colors"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Resume Sheet */}
        <div className="p-6 sm:p-10 overflow-y-auto bg-white text-slate-900 font-sans print:p-0">
          
          {/* Header */}
          <div className="border-b-2 border-slate-900 pb-5 mb-5 text-center sm:text-left">
            <h1 className="text-3xl font-extrabold uppercase tracking-tight text-slate-950">
              {portfolioData.personal.name}
            </h1>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-1 text-xs text-slate-700 mt-2 font-medium">
              <span>{portfolioData.personal.phone}</span>
              <span>•</span>
              <a href={`mailto:${portfolioData.personal.email}`} className="text-blue-700 underline">
                {portfolioData.personal.email}
              </a>
              <span>•</span>
              <a href={portfolioData.personal.linkedin} target="_blank" rel="noreferrer" className="text-blue-700 underline">
                linkedin.com/in/{portfolioData.personal.linkedinUsername}
              </a>
              <span>•</span>
              <span>{portfolioData.personal.location}</span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="mb-5">
            <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
              Professional Summary
            </h2>
            <p className="text-xs text-slate-800 leading-relaxed text-justify">
              Digital Marketing professional with hands-on experience across Google Ads, Meta Ads, SEO, social media management, content scheduling, video editing, and Canva-based design. Currently Digital Marketing Team Lead at Innoknowvex, Bengaluru, contributing to campaign strategy, coordinating with the marketing team, and managing brand presence across LinkedIn and Instagram. Combines a Human Resources and Marketing dual-specialization MBA with practical agency-side experience in digital campaign support. Certified in Digital Marketing (ExcelR Institute) and Social Media Marketing (Udemy).
            </p>
          </div>

          {/* Work Experience */}
          <div className="mb-5">
            <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-3">
              Work Experience
            </h2>

            {/* Innoknowvex */}
            <div className="mb-4">
              <div className="flex justify-between items-baseline">
                <h3 className="text-sm font-bold text-slate-950">Digital Marketing Team Lead</h3>
                <span className="text-xs font-semibold text-slate-700">Nov 2025 – Present</span>
              </div>
              <div className="text-xs font-semibold text-slate-700 mb-1.5">
                Innoknowvex | Bengaluru, Karnataka
              </div>
              <ul className="list-disc pl-5 text-xs text-slate-800 space-y-1 leading-relaxed">
                <li>Coordinate with a fellow digital marketing executive on task allocation and quality review across concurrent client campaigns.</li>
                <li>Guide strategy, audience targeting, and budget planning for Google Ads and Meta Ads (Facebook & Instagram) campaigns executed by the team, monitoring performance to inform optimisation.</li>
                <li>Manage content scheduling and engagement for Instagram and LinkedIn brand pages using Canva, maintaining a consistent posting cadence and brand identity.</li>
                <li>Produce and edit short-form video content using CapCut to improve organic reach and audience retention across platforms.</li>
                <li>Support LinkedIn company page growth through structured content planning and proactive engagement.</li>
              </ul>
            </div>

            {/* Harlal Seeds */}
            <div className="mb-2">
              <div className="flex justify-between items-baseline">
                <h3 className="text-sm font-bold text-slate-950">Marketing Officer (Intern)</h3>
                <span className="text-xs font-semibold text-slate-700">Mar 2025 – May 2025</span>
              </div>
              <div className="text-xs font-semibold text-slate-700 mb-1.5">
                Harlal Seeds Pvt. Ltd. | Hyderabad, Telangana
              </div>
              <ul className="list-disc pl-5 text-xs text-slate-800 space-y-1 leading-relaxed">
                <li>Supported the marketing team lead with market research, competitor analysis, and content analysis across YouTube, Facebook, and Instagram campaigns for an agri-tech brand serving regional-language farmer audiences.</li>
                <li>Conducted keyword and hashtag research to improve content discoverability and align messaging with vernacular-speaking audience search behaviour.</li>
                <li>Analysed YouTube Analytics and platform performance data to identify top-performing content formats and surface insights for the team.</li>
                <li>Collaborated with the marketing team, contributing research insights that informed campaign messaging and promotional timing.</li>
                <li>Used AI tools (ChatGPT, Gemini) to accelerate research and content ideation, improving turnaround time on deliverables.</li>
              </ul>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="mb-5">
            <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
              Technical Skills
            </h2>
            <ul className="list-disc pl-5 text-xs text-slate-800 space-y-1 leading-relaxed">
              <li><strong>Advertising & SEO/SEM:</strong> Google Ads, Meta Ads (Facebook & Instagram), On-page & Off-page SEO, Keyword Research, SEM</li>
              <li><strong>Social Media & Design Tools:</strong> Instagram, LinkedIn, Facebook, YouTube, Canva, CapCut, Google Analytics, YouTube Analytics, AI-assisted tools (Claude, ChatGPT, Gemini)</li>
              <li><strong>Collaboration:</strong> Task Coordination, Campaign Support, Cross-functional Collaboration</li>
            </ul>
          </div>

          {/* Education */}
          <div className="mb-5">
            <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
              Education
            </h2>
            <div className="space-y-2">
              <div>
                <div className="flex justify-between items-baseline">
                  <span className="text-xs font-bold text-slate-950">MBA – Human Resources & Marketing</span>
                  <span className="text-xs text-slate-700">2024 – 2026</span>
                </div>
                <div className="text-xs text-slate-700">Andhra University, Andhra Pradesh</div>
              </div>
              <div>
                <div className="flex justify-between items-baseline">
                  <span className="text-xs font-bold text-slate-950">B.Sc. (Hons.) Agriculture</span>
                  <span className="text-xs text-slate-700">2020 – 2024</span>
                </div>
                <div className="text-xs text-slate-700">Lovely Professional University, Punjab</div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="mb-5">
            <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
              Certifications
            </h2>
            <div className="text-xs text-slate-800 leading-relaxed">
              Digital Marketing – ExcelR Institute, Hyderabad &nbsp;|&nbsp; Social Media Marketing – Udemy &nbsp;|&nbsp; Digital Marketing – Innoknowvex, Bengaluru
            </div>
          </div>

          {/* Additional Information */}
          <div>
            <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
              Additional Information
            </h2>
            <ul className="list-disc pl-5 text-xs text-slate-800 space-y-1 leading-relaxed">
              <li><strong>Languages:</strong> Telugu, Hindi, English</li>
              <li><strong>Soft Skills:</strong> Communication, Creativity, Time Management, Teamwork, Leadership, Adaptability, Problem-Solving</li>
              <li><strong>Activities:</strong> Assistant Manager – Tachyons Club, Lovely Professional University</li>
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
}
