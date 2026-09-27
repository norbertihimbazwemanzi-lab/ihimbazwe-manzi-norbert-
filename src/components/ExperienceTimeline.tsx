import React from 'react';
import { MapPin, CheckCircle2 } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-28 border-t border-slate-300 dark:border-slate-800/80 bg-slate-100/60 dark:bg-slate-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="space-y-3 max-w-2xl">
          <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 tracking-wider uppercase">
            Career Progression &amp; Systems Delivery
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Engineering Journey
          </h2>
          <p className="text-base text-slate-700 dark:text-slate-300 font-normal">
            A track record of delivering real-world institutional systems, architecting high-throughput database solutions,
            and shipping reliable web platforms across Rwanda and global remote teams.
          </p>
        </div>

        {/* Experience Cards / Timeline */}
        <div className="space-y-8">
          {EXPERIENCES.map((exp, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0f172a] border border-slate-300 dark:border-slate-800 shadow-sm transition-all hover:border-slate-400 dark:hover:border-slate-700"
            >
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-4">
                <div>
                  <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">
                    {exp.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 pt-1 text-sm font-medium text-slate-700 dark:text-slate-300">
                    <span className="text-blue-600 dark:text-blue-400 font-semibold">{exp.company}</span>
                    <span aria-hidden="true" className="text-slate-400 dark:text-slate-600">·</span>
                    <span className="flex items-center gap-1 text-xs text-slate-700 dark:text-slate-300">
                      <MapPin className="w-3.5 h-3.5 text-blue-500" />
                      {exp.location}
                    </span>
                    <span aria-hidden="true" className="text-slate-400 dark:text-slate-600">·</span>
                    <span className="text-xs text-slate-700 dark:text-slate-300 font-medium">{exp.type}</span>
                  </div>
                </div>

                <div className="font-mono text-xs font-semibold text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-lg shrink-0 w-fit border border-slate-300 dark:border-slate-700">
                  {exp.period}
                </div>
              </div>

              <div className="py-4 space-y-3">
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                  {exp.description}
                </p>

                <div className="space-y-2 pt-1">
                  {exp.highlights.map((hl, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies unboxed list */}
              <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-mono text-slate-700 dark:text-slate-300">
                <span className="font-semibold text-slate-900 dark:text-slate-100">Core Tools:</span>
                {exp.technologies.map((tech, tIdx) => (
                  <React.Fragment key={tech}>
                    <span>{tech}</span>
                    {tIdx < exp.technologies.length - 1 && (
                      <span aria-hidden="true" className="text-slate-400 dark:text-slate-600">·</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
