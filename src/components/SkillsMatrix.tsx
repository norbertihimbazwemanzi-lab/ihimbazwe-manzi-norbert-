import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const SkillsMatrix: React.FC = () => {
  return (
    <section id="expertise" className="py-20 md:py-28 border-t border-slate-300 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="space-y-3 max-w-2xl">
          <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 tracking-wider uppercase">
            Technical Competencies &amp; System Capabilities
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Full-Stack Domain Expertise
          </h2>
          <p className="text-base text-slate-700 dark:text-slate-300 font-normal">
            A comprehensive matrix of production languages, frameworks, cloud services, and system architectures
            applied in building school portals, enterprise ERP platforms, and responsive web applications.
          </p>
        </div>

        {/* 4-Category Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0f172a] border border-slate-300 dark:border-slate-800 shadow-sm space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">
                    {cat.title}
                  </h3>
                  <span className="text-xs font-mono text-slate-600 dark:text-slate-400 font-bold">
                    0{idx + 1}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-normal">
                  {cat.description}
                </p>
              </div>

              {/* Skills List */}
              <div className="space-y-4 pt-2 border-t border-slate-200 dark:border-slate-800">
                {cat.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 py-1.5 border-b border-slate-200 dark:border-slate-800/60 last:border-b-0"
                  >
                    <div>
                      <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                        {skill.name}
                      </span>
                      <span className="hidden sm:inline mx-2 text-slate-400 dark:text-slate-600" aria-hidden="true">·</span>
                      <span className="block sm:inline text-xs text-slate-600 dark:text-slate-400">
                        {skill.details}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 shrink-0 pt-0.5 sm:pt-0 text-[11px] font-mono">
                      <span className="text-slate-700 dark:text-slate-300 font-semibold tabular-nums">
                        {skill.experienceYears}y exp
                      </span>
                      <span aria-hidden="true" className="text-slate-400 dark:text-slate-600">·</span>
                      <span className="text-blue-600 dark:text-blue-400 font-semibold">
                        {skill.level}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
