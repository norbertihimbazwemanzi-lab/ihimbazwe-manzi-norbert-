import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Copy, Check, Terminal, Mail, MapPin, Code2, Sparkles, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenTerminal: () => void;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTerminal, onOpenResume }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background radial gradient glow for subtle depth */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-blue-500/10 dark:bg-blue-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typographic & Bio Anchor (Col 7) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Status & Location kicker (High contrast in both light & dark) */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300">
              <span className="inline-flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400 font-semibold bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-1 rounded-md border border-emerald-200 dark:border-emerald-800">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Available for Full-Time Roles & Contracts
              </span>
              <span aria-hidden="true" className="text-slate-400 dark:text-slate-600">·</span>
              <span className="inline-flex items-center gap-1 text-slate-700 dark:text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                Kigali, Rwanda · Global Remote
              </span>
            </div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.08] text-balance">
                Architecting resilient <span className="text-blue-600 dark:text-blue-400">full-stack web</span> applications & enterprise systems.
              </h1>
            </motion.div>

            {/* Subtitle / Bio with crisp readability */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed max-w-2xl font-normal"
            >
              Hi, I am <strong className="font-semibold text-slate-900 dark:text-white">{PERSONAL_INFO.name}</strong>. 
              I engineer end-to-end full-stack web applications, educational management platforms like{' '}
              <span className="font-semibold text-blue-600 dark:text-blue-400">GS Mugina</span> &amp;{' '}
              <span className="font-semibold text-blue-600 dark:text-blue-400">ES Rutobwe</span>, and enterprise business solutions for{' '}
              <span className="font-semibold text-blue-600 dark:text-blue-400">EjoHeja Ltd</span>.
            </motion.p>

            {/* CTAs & Quick Interactions */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex flex-wrap items-center gap-3 pt-2"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm transition-all whitespace-nowrap"
              >
                <span>Explore Featured Systems</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-3 text-sm font-medium text-slate-800 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 rounded-lg transition-colors whitespace-nowrap"
              >
                <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Get In Touch</span>
              </a>

              {/* Copy Email Button with Feedback */}
              <button
                onClick={handleCopyEmail}
                title="Copy email to clipboard"
                className="inline-flex items-center gap-1.5 px-3.5 py-3 text-sm font-medium text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors whitespace-nowrap shadow-sm"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-emerald-700 dark:text-emerald-400 text-xs font-semibold">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                    <span className="text-xs">Copy Email</span>
                  </>
                )}
              </button>

              {/* Interactive Terminal Trigger */}
              <button
                onClick={onOpenTerminal}
                className="inline-flex items-center gap-1.5 px-3 py-3 text-sm font-mono text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 transition-colors"
                title="Open interactive developer CLI"
              >
                <Terminal className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span className="text-xs font-semibold">norbert-cli</span>
              </button>
            </motion.div>

            {/* Proof Metrics (High contrast in light mode) */}
            <div className="pt-6 border-t border-slate-300 dark:border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {PERSONAL_INFO.stats.map((stat, i) => (
                <div key={i} className="space-y-0.5">
                  <div className="font-mono text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white tabular-nums">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-700 dark:text-slate-300 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Code Editor & Software Code Display (Replaced Profile Photo with Software Codes) */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="relative rounded-2xl overflow-hidden border border-slate-300 dark:border-slate-800 bg-[#0d1117] shadow-xl group"
            >
              {/* IDE Top Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#161b22] border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                  <span className="ml-2 font-mono text-xs text-slate-300 font-medium flex items-center gap-1.5">
                    <Code2 className="w-3.5 h-3.5 text-blue-400" />
                    NorbertFullStackEngine.ts
                  </span>
                </div>
                <div className="flex items-center gap-1.5 font-mono text-[11px] text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Build: Passing</span>
                </div>
              </div>

              {/* Software Code Image Display */}
              <div className="relative aspect-[4/5] sm:aspect-[1/1] lg:aspect-[4/5] w-full overflow-hidden bg-[#0d1117]">
                <img
                  src={PERSONAL_INFO.codeImage}
                  alt="Software Codes - Norbert Ihimbazwe Manzi Full-Stack Development"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                />

                {/* Dark gradient overlay for code metadata at the bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e17] via-[#0a0e17]/40 to-transparent" />

                {/* Active Architecture Status Pill */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <div className="bg-[#161b22]/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-700 text-xs font-mono text-slate-200 flex items-center gap-2 shadow-lg">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>TypeScript · React 19 · Node.js · PostgreSQL</span>
                  </div>
                </div>

                {/* Bottom Card Summary */}
                <div className="absolute bottom-0 left-0 right-0 p-5 space-y-2 text-white">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold tracking-wide uppercase text-[11px] text-blue-400 font-mono">
                      Current Engineering Works
                    </span>
                    <span className="font-mono text-[11px] text-slate-400">Kigali · Rwanda</span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-white">
                    Norbert Ihimbazwe Manzi
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Building GS Mugina School System Management, ES Rutobwe Academic Portal, and EjoHeja Ltd Enterprise Platform.
                  </p>

                  {/* Clean unboxed tech list */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-1 text-[11px] font-mono text-slate-300">
                    <span className="text-blue-400 font-semibold">GS Mugina</span>
                    <span aria-hidden="true" className="text-slate-600">·</span>
                    <span className="text-emerald-400 font-semibold">ES Rutobwe</span>
                    <span aria-hidden="true" className="text-slate-600">·</span>
                    <span className="text-amber-400 font-semibold">EjoHeja Ltd</span>
                    <span aria-hidden="true" className="text-slate-600">·</span>
                    <span>PostgreSQL</span>
                    <span aria-hidden="true" className="text-slate-600">·</span>
                    <span>REST APIs</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
