import React, { useEffect } from 'react';
import { X, ExternalLink, Github, Database, Layers, CheckCircle, Cpu, ArrowUpRight } from 'lucide-react';
import { Project } from '../types';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-4xl bg-white dark:bg-[#0f172a] rounded-2xl shadow-2xl border border-slate-300 dark:border-slate-800 my-8 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60">
          <div>
            <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 tracking-wider uppercase">
              Full-Stack Architecture Case Study
            </div>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              {project.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 rounded-lg text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[80vh] overflow-y-auto">
          {/* Hero Media Preview */}
          <div className="relative rounded-xl overflow-hidden border border-slate-300 dark:border-slate-800 bg-slate-950 aspect-[16/9] max-h-72 w-full">
            <img
              src={project.imageUrl}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex items-end p-6">
              <div>
                <p className="text-white text-base sm:text-lg font-medium">
                  {project.tagline}
                </p>
                {/* Tech stack as clean unboxed text */}
                <div className="flex flex-wrap items-center gap-2 pt-1 text-xs text-slate-200 font-mono">
                  {project.techStack.map((tech, i) => (
                    <React.Fragment key={tech}>
                      <span>{tech}</span>
                      {i < project.techStack.length - 1 && <span aria-hidden="true">·</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Key Metrics Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-800">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="text-center sm:text-left">
                <div className="text-xs text-slate-700 dark:text-slate-400 font-medium">
                  {m.label}
                </div>
                <div className="font-mono text-xl font-bold text-slate-900 dark:text-white tabular-nums pt-0.5">
                  {m.value}
                </div>
              </div>
            ))}
          </div>

          {/* Section: Overview */}
          <div className="space-y-3">
            <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Layers className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              Executive Overview
            </h3>
            <p className="text-slate-800 dark:text-slate-200 text-sm sm:text-base leading-relaxed font-normal">
              {project.caseStudy.overview}
            </p>
          </div>

          {/* Section: Architecture Summary */}
          <div className="space-y-3">
            <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Cpu className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              End-to-End System Architecture
            </h3>
            <p className="text-slate-800 dark:text-slate-200 text-sm sm:text-base leading-relaxed font-normal">
              {project.caseStudy.architectureSummary}
            </p>
            <div className="space-y-2 pt-2">
              {project.caseStudy.systemHighlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-2.5 text-sm text-slate-800 dark:text-slate-200">
                  <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Key Challenges & Solutions */}
          <div className="space-y-4">
            <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
              Key Engineering Challenges &amp; Technical Solutions
            </h3>
            <div className="space-y-3">
              {project.caseStudy.keyChallenges.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl border border-slate-300 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40 space-y-2"
                >
                  <div className="text-xs font-semibold text-rose-700 dark:text-rose-400">
                    Challenge: {item.challenge}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-normal">
                    <span className="font-semibold text-slate-900 dark:text-white">Norbert&apos;s Solution: </span>
                    {item.solution}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Database Schema & Storage */}
          <div className="space-y-3">
            <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Database className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              Database Design &amp; Persistence Strategy
            </h3>
            <div className="text-slate-900 dark:text-slate-100 text-xs sm:text-sm leading-relaxed p-4 rounded-xl bg-slate-100 dark:bg-slate-900/60 border border-slate-300 dark:border-slate-800 font-mono font-medium">
              {project.caseStudy.databaseDesign}
            </div>
          </div>

          {/* Section: Measurable Outcome */}
          <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/50 space-y-1">
            <div className="text-xs font-semibold text-blue-700 dark:text-blue-400">
              Verified Production Outcome
            </div>
            <p className="text-sm text-slate-800 dark:text-slate-200 font-medium">
              {project.caseStudy.outcome}
            </p>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60">
          <div className="text-xs text-slate-700 dark:text-slate-400 font-medium">
            Engineered by Norbert Ihimbazwe Manzi
          </div>
          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-medium text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Source Repository</span>
              <ArrowUpRight className="w-3 h-3 text-slate-400" />
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm transition-colors"
            >
              <span>Launch Live Portal</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
