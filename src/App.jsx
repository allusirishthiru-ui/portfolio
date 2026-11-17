import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import CaseStudies from './components/CaseStudies';
import SkillsMatrix from './components/SkillsMatrix';
import RoasCalculator from './components/RoasCalculator';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#070A11] text-slate-100 flex flex-col font-sans selection:bg-emerald-400 selection:text-slate-950">
      {/* Sleek 4-Link Minimal Navbar */}
      <Navbar onOpenResume={() => setIsResumeModalOpen(true)} />

      {/* Main Flow */}
      <main className="flex-grow">
        <Hero onOpenResume={() => setIsResumeModalOpen(true)} />
        <Experience />
        <CaseStudies />
        <SkillsMatrix />
        <RoasCalculator />
        <Certifications />
        <Contact />
      </main>

      {/* Clean Minimal Footer */}
      <Footer onOpenResume={() => setIsResumeModalOpen(true)} />

      {/* Printable Official Resume Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}
