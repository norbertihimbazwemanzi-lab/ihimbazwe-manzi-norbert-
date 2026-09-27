import React from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/portfolioData';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 md:py-28 border-t border-slate-300 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="space-y-3 max-w-2xl">
          <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 tracking-wider uppercase">
            Client &amp; Institutional Endorsements
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Trusted by School Directors &amp; Enterprise Leaders
          </h2>
          <p className="text-base text-slate-700 dark:text-slate-300 font-normal">
            Direct feedback from administrators and operational directors who rely on Norbert&apos;s full-stack software systems every day.
          </p>
        </div>

        {/* 3-Column Recommendations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0f172a] border border-slate-300 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <Quote className="w-8 h-8 text-blue-600/40 dark:text-blue-400/20" />
                <p className="text-sm sm:text-base text-slate-800 dark:text-slate-200 leading-relaxed italic font-normal">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-1">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-bold font-mono text-xs flex items-center justify-center shrink-0 border border-blue-200 dark:border-blue-800">
                    {t.avatarText}
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-bold text-slate-900 dark:text-white">
                      {t.name}
                    </h3>
                    <div className="text-xs text-slate-700 dark:text-slate-400 font-medium">
                      {t.role} · {t.company}
                    </div>
                  </div>
                </div>
                <div className="text-[11px] text-blue-700 dark:text-blue-400 pt-2 font-semibold">
                  {t.projectRelation}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
