import React from 'react';
import { ExternalLink, Github, Layers } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
  onOpenCaseStudy: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onOpenCaseStudy }) => {
  const formattedIndex = String(index + 1).padStart(2, '0');

  return (
    <div className="group relative rounded-2xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-[#0f172a] shadow-sm hover:shadow-md hover:border-slate-400 dark:hover:border-slate-700 transition-all duration-200 overflow-hidden flex flex-col justify-between">
      {/* Visual Media Header */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950 border-b border-slate-200 dark:border-slate-800">
        <img
          src={project.imageUrl}
          alt={project.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
        />

        {/* Contrast overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />

        {/* Category & Index in top corners */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-white">
          <span className="font-semibold bg-black/50 px-2 py-0.5 rounded backdrop-blur-sm border border-white/20">
            {formattedIndex}. {project.category}
          </span>
          <span className="bg-emerald-500/80 text-white font-semibold text-[10px] px-2 py-0.5 rounded backdrop-blur-sm uppercase tracking-wider">
            Active System
          </span>
        </div>

        {/* Primary metric highlight over bottom of image */}
        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white">
          <div className="flex items-center gap-1.5 font-medium">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            <span>{project.metrics[0].label}:</span>
            <span className="font-mono font-bold text-amber-300">{project.metrics[0].value}</span>
          </div>
          <button
            onClick={() => onOpenCaseStudy(project)}
            className="text-[11px] font-semibold text-white hover:text-blue-300 underline decoration-white/50 hover:decoration-blue-300 transition-colors"
          >
            System Specs →
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2.5">
          <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>

          <p className="text-xs font-semibold text-blue-600 dark:text-blue-400">
            {project.tagline}
          </p>

          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed line-clamp-3 font-normal">
            {project.description}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="pt-3 border-t border-slate-200 dark:border-slate-800">
          <div className="text-[11px] font-semibold text-slate-700 dark:text-slate-400 uppercase tracking-wider mb-1.5">
            Architecture &amp; Tech Stack
          </div>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-800 dark:text-slate-200 font-mono font-medium">
            {project.techStack.map((tech, i) => (
              <React.Fragment key={tech}>
                <span>{tech}</span>
                {i < project.techStack.length - 1 && (
                  <span className="text-slate-400 dark:text-slate-600" aria-hidden="true">·</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 gap-2 pt-2 text-xs">
          {project.metrics.slice(1, 3).map((metric, idx) => (
            <div key={idx} className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
              <div className="text-[11px] text-slate-700 dark:text-slate-400 font-medium truncate">
                {metric.label}
              </div>
              <div className="font-mono font-bold text-slate-900 dark:text-slate-100 tabular-nums text-sm pt-0.5">
                {metric.value}
              </div>
            </div>
          ))}
        </div>

        {/* Card Footer Actions */}
        <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-2">
          <button
            onClick={() => onOpenCaseStudy(project)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors whitespace-nowrap"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Architecture Breakdown</span>
          </button>

          <div className="flex items-center gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} on GitHub`}
              className="p-2 text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors border border-slate-200 dark:border-slate-700"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open system portal for ${project.title}`}
              className="p-2 text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors border border-slate-200 dark:border-slate-700"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
