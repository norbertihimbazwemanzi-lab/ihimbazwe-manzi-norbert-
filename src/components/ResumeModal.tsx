import React, { useEffect } from 'react';
import { X, Printer, Mail, MapPin, CheckCircle2, Instagram, Facebook } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, SKILL_CATEGORIES } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-4xl bg-white dark:bg-[#0f172a] rounded-2xl shadow-2xl border border-slate-300 dark:border-slate-800 my-8 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 print:hidden">
          <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 tracking-wider uppercase">
            Curriculum Vitae / Developer Profile
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              aria-label="Close resume modal"
              className="p-1.5 rounded-lg text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document */}
        <div className="p-8 sm:p-12 space-y-8 max-h-[82vh] overflow-y-auto text-slate-900 dark:text-slate-100 print:max-h-none print:p-0 print:overflow-visible">
          {/* Header */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-6 space-y-2">
            <h1 className="font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              {PERSONAL_INFO.name}
            </h1>
            <div className="text-sm font-semibold text-blue-600 dark:text-blue-400">
              {PERSONAL_INFO.role}
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-700 dark:text-slate-300 font-mono pt-1">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-slate-500" />
                {PERSONAL_INFO.email}
              </span>
              <span aria-hidden="true" className="text-slate-400">·</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                {PERSONAL_INFO.location}
              </span>
              <span aria-hidden="true" className="text-slate-400">·</span>
              <span className="text-emerald-700 dark:text-emerald-400 font-semibold">
                Available for Engagements
              </span>
            </div>

            {/* Social channels */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-600 dark:text-slate-400 pt-1">
              <span>Instagram: @{PERSONAL_INFO.instagramHandle}</span>
              <span>Facebook: {PERSONAL_INFO.facebookHandle}</span>
              <span>GitHub: github.com/norbert-manzi</span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold text-slate-800 dark:text-slate-300 uppercase tracking-wider font-mono">
              Professional Summary
            </h2>
            <p className="text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-normal">
              {PERSONAL_INFO.bioShort}
            </p>
          </div>

          {/* Technical Skills Overview */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold text-slate-800 dark:text-slate-300 uppercase tracking-wider font-mono">
              Technical Core Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {SKILL_CATEGORIES.map((cat, i) => (
                <div key={i} className="p-3.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40">
                  <div className="font-bold text-slate-900 dark:text-white pb-1">
                    {cat.title}
                  </div>
                  <div className="text-slate-700 dark:text-slate-300 font-mono">
                    {cat.skills.map((s) => s.name).join(' · ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Work Experience */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold text-slate-800 dark:text-slate-300 uppercase tracking-wider font-mono">
              Selected Systems Experience
            </h2>
            <div className="space-y-6">
              {EXPERIENCES.map((exp, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <div className="text-sm font-bold text-slate-900 dark:text-white">
                      {exp.role} <span className="font-normal text-slate-600 dark:text-slate-400">at</span> {exp.company}
                    </div>
                    <div className="text-xs font-mono text-slate-700 dark:text-slate-300 font-medium">
                      {exp.period} · {exp.location}
                    </div>
                  </div>
                  <p className="text-xs text-slate-800 dark:text-slate-200 font-normal">
                    {exp.description}
                  </p>
                  <div className="space-y-1 pt-1">
                    {exp.highlights.map((hl, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                        <span className="text-blue-600 dark:text-blue-400 font-bold">›</span>
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Institutional Deployment */}
          <div className="space-y-2 border-t border-slate-200 dark:border-slate-800 pt-4">
            <h2 className="text-xs font-bold text-slate-800 dark:text-slate-300 uppercase tracking-wider font-mono">
              Key Institutional Implementations
            </h2>
            <div className="text-xs text-slate-700 dark:text-slate-300 space-y-1">
              <div>• <strong>GS Mugina School System Management:</strong> Institutional student records, grading algorithms, tuition accounting.</div>
              <div>• <strong>ES Rutobwe Academic Portal:</strong> Master conflict-free course scheduler, parent SMS dispatch engine.</div>
              <div>• <strong>EjoHeja Ltd Enterprise Platform:</strong> Commercial inventory control, double-entry financial ledger, CRM.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
