import React, { useState, useMemo } from 'react';
import { Search, Filter } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';
import { Project } from '../types';

interface ProjectShowcaseProps {
  onOpenCaseStudy: (project: Project) => void;
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ onOpenCaseStudy }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = useMemo(() => {
    const set = new Set<string>();
    PROJECTS.forEach((p) => set.add(p.category));
    return ['All', ...Array.from(set)];
  }, []);

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((project) => {
      const matchesCategory =
        selectedCategory === 'All' || project.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        project.title.toLowerCase().includes(q) ||
        project.tagline.toLowerCase().includes(q) ||
        project.description.toLowerCase().includes(q) ||
        project.techStack.some((t) => t.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="projects" className="py-20 md:py-28 border-t border-slate-300 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 tracking-wider uppercase">
              Current Engineering Systems &amp; Deployments
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Featured Client Systems
            </h2>
            <p className="text-base text-slate-700 dark:text-slate-300 font-normal">
              Active full-stack web applications engineered for institutional schools and commercial enterprises — 
              delivering automated workflows, reliable database persistence, and clean interfaces.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 dark:text-slate-400" />
            <input
              type="text"
              placeholder="Search systems, stack, features..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-sm bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg text-slate-900 dark:text-slate-100 placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors shadow-sm"
            />
          </div>
        </div>

        {/* Interactive Filter Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-200/80 dark:bg-slate-900/90 rounded-xl border border-slate-300 dark:border-slate-800/80 w-fit">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-all whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-sm font-semibold'
                  : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onOpenCaseStudy={onOpenCaseStudy}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 p-8 rounded-2xl border border-dashed border-slate-300 dark:border-slate-800 bg-slate-100/50 dark:bg-slate-900/30">
            <Filter className="w-8 h-8 text-slate-500 mx-auto mb-3" />
            <h3 className="font-display text-lg font-semibold text-slate-800 dark:text-slate-200">
              No matching systems found
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-md mx-auto">
              Try adjusting your search criteria or resetting filters to view all projects.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
