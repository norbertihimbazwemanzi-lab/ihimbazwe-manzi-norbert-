import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectShowcase } from './components/ProjectShowcase';
import { ArchitectureSimulator } from './components/ArchitectureSimulator';
import { SkillsMatrix } from './components/SkillsMatrix';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { Testimonials } from './components/Testimonials';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CaseStudyModal } from './components/CaseStudyModal';
import { ResumeModal } from './components/ResumeModal';
import { InteractiveTerminal } from './components/InteractiveTerminal';
import { Project } from './types';

export default function App() {
  const [activeCaseStudyProject, setActiveCaseStudyProject] = useState<Project | null>(null);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col font-body bg-[#f8fafc] text-slate-900 dark:bg-[#0b0f17] dark:text-slate-100 transition-colors duration-200">
        {/* Navigation Bar conforming to Top Bar Contract */}
        <Navbar
          onOpenResume={() => setResumeOpen(true)}
          onOpenTerminal={() => setTerminalOpen(true)}
        />

        <main className="flex-grow">
          {/* Hero Section */}
          <Hero
            onOpenTerminal={() => setTerminalOpen(true)}
            onOpenResume={() => setResumeOpen(true)}
          />

          {/* Featured Full-Stack Projects */}
          <ProjectShowcase
            onOpenCaseStudy={(project) => setActiveCaseStudyProject(project)}
          />

          {/* Interactive Full-Stack System Design Playground */}
          <ArchitectureSimulator />

          {/* Technical Competencies Matrix */}
          <SkillsMatrix />

          {/* Career Journey & Timeline */}
          <ExperienceTimeline />

          {/* Engineering Leadership Recommendations */}
          <Testimonials />

          {/* Contact & Inquiries */}
          <ContactSection />
        </main>

        {/* Minimalist Compliant Footer */}
        <Footer />

        {/* Full-Stack Architecture Deep Dive Modal */}
        <CaseStudyModal
          project={activeCaseStudyProject}
          onClose={() => setActiveCaseStudyProject(null)}
        />

        {/* Printable Resume / CV Modal */}
        <ResumeModal
          isOpen={resumeOpen}
          onClose={() => setResumeOpen(false)}
        />

        {/* Interactive Developer CLI Modal */}
        <InteractiveTerminal
          isOpen={terminalOpen}
          onClose={() => setTerminalOpen(false)}
          onOpenResume={() => {
            setTerminalOpen(false);
            setResumeOpen(true);
          }}
        />
      </div>
    </ThemeProvider>
  );
}
