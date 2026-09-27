import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Instagram, Facebook } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-300 dark:border-slate-800 bg-white dark:bg-[#070a10] text-slate-700 dark:text-slate-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Identity */}
          <div className="space-y-1 text-center md:text-left">
            <div className="font-display font-bold text-base text-slate-900 dark:text-white">
              {PERSONAL_INFO.name}
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 font-medium">
              Full-Stack Software Engineer &amp; Systems Developer
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-slate-700 dark:text-slate-300">
            <a href="#projects" className="hover:text-blue-600 dark:hover:text-white transition-colors">
              Projects
            </a>
            <a href="#architecture" className="hover:text-blue-600 dark:hover:text-white transition-colors">
              Architecture Simulator
            </a>
            <a href="#expertise" className="hover:text-blue-600 dark:hover:text-white transition-colors">
              Expertise
            </a>
            <a href="#experience" className="hover:text-blue-600 dark:hover:text-white transition-colors">
              Journey
            </a>
            <a href="#contact" className="hover:text-blue-600 dark:hover:text-white transition-colors">
              Contact
            </a>
          </nav>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              aria-label="Email Norbert"
              className="p-2 rounded-lg text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram @ma_nzi1"
              className="p-2 rounded-lg text-slate-700 hover:text-pink-600 dark:text-slate-300 dark:hover:text-pink-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook manziwizzyog"
              className="p-2 rounded-lg text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-lg text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-lg text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors ml-1 border border-slate-300 dark:border-slate-700"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-600 dark:text-slate-400 gap-4 font-medium">
          <div>
            © {new Date().getFullYear()} Norbert Ihimbazwe Manzi. All rights reserved.
          </div>
          <div>
            Kigali, Rwanda · Full-Stack Systems &amp; Web Applications
          </div>
        </div>
      </div>
    </footer>
  );
};
