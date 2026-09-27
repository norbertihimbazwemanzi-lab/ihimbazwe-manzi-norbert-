import React, { useState } from 'react';
import { Mail, Copy, Check, Send, MapPin, Github, Linkedin, Clock, Calendar, Instagram, Facebook, ArrowUpRight, MessageSquare } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'School System or Institutional Management',
    timeline: 'Immediate / Next 30 Days',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-t border-slate-300 dark:border-slate-800/80 bg-slate-100/60 dark:bg-slate-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="space-y-3 max-w-2xl">
          <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 tracking-wider uppercase">
            Let&apos;s Build Together
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Get In Touch
          </h2>
          <p className="text-base text-slate-700 dark:text-slate-300 font-normal">
            Currently open to senior full-stack roles, school management systems, institutional portals, and enterprise engineering projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info & Social Media (Col 5) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0f172a] border border-slate-300 dark:border-slate-800 shadow-sm space-y-6">
              <div className="space-y-2">
                <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">
                  Direct Contact & Channels
                </h3>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                  Need a custom school management suite, enterprise business platform, or senior full-stack developer? Reach out directly via email or on social media.
                </p>
              </div>

              {/* Email Box with Copy */}
              <div className="p-4 rounded-xl border border-slate-300 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 space-y-2">
                <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                  Primary Email
                </div>
                <div className="flex items-center justify-between gap-2">
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="font-mono text-sm sm:text-base font-semibold text-blue-600 dark:text-blue-400 hover:underline truncate"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors shrink-0"
                    title="Copy email to clipboard"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Status & Availability Details */}
              <div className="space-y-3 pt-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>
                    <strong className="text-slate-900 dark:text-white font-semibold">Status: </strong>
                    Available for Full-Time Roles & Consulting
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                  <span>
                    <strong className="text-slate-900 dark:text-white font-semibold">Location: </strong>
                    Kigali, Rwanda · Central Africa Time (CAT / UTC+2)
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  <Calendar className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0" />
                  <span>
                    <strong className="text-slate-900 dark:text-white font-semibold">Response Time: </strong>
                    Typically within 24 hours
                  </span>
                </div>
              </div>

              {/* Social Media Channels (Instagram & Facebook explicitly highlighted) */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-3">
                  Connect on Social Media & Web
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Instagram: ma_nzi1 */}
                  <a
                    href={PERSONAL_INFO.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl border border-slate-300 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors group"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-pink-100 dark:bg-pink-950/60 text-pink-600 dark:text-pink-400 group-hover:scale-105 transition-transform">
                        <Instagram className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-900 dark:text-white">
                          Instagram
                        </div>
                        <div className="text-xs font-mono text-slate-600 dark:text-slate-400">
                          @{PERSONAL_INFO.instagramHandle}
                        </div>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors" />
                  </a>

                  {/* Facebook: manziwizzyog */}
                  <a
                    href={PERSONAL_INFO.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl border border-slate-300 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors group"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 group-hover:scale-105 transition-transform">
                        <Facebook className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-900 dark:text-white">
                          Facebook
                        </div>
                        <div className="text-xs font-mono text-slate-600 dark:text-slate-400">
                          {PERSONAL_INFO.facebookHandle}
                        </div>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                  </a>

                  {/* GitHub */}
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl border border-slate-300 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors group"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 group-hover:scale-105 transition-transform">
                        <Github className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-900 dark:text-white">
                          GitHub
                        </div>
                        <div className="text-xs font-mono text-slate-600 dark:text-slate-400">
                          norbert-manzi
                        </div>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors" />
                  </a>

                  {/* LinkedIn */}
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl border border-slate-300 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors group"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 group-hover:scale-105 transition-transform">
                        <Linkedin className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-900 dark:text-white">
                          LinkedIn
                        </div>
                        <div className="text-xs font-mono text-slate-600 dark:text-slate-400">
                          Norbert Manzi
                        </div>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact & Scope Form (Col 7) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0f172a] border border-slate-300 dark:border-slate-800 shadow-sm">
              {formSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white">
                    Message Dispatched Successfully!
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out. Norbert has received your inquiry at{' '}
                    <span className="font-semibold text-blue-600 dark:text-blue-400">{PERSONAL_INFO.email}</span> and will reply within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        projectType: 'School System or Institutional Management',
                        timeline: 'Immediate / Next 30 Days',
                        message: ''
                      });
                    }}
                    className="mt-4 px-4 py-2 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-1">
                    <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">
                      Send an Engineering Inquiry
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      Fill out the form below to discuss custom software development, systems consulting, or employment.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors shadow-sm"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. john@organization.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors shadow-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                        Engagement Scope
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                      >
                        <option value="School System or Institutional Management">School System / Academic Management</option>
                        <option value="Enterprise Business & ERP Solution">Enterprise Business &amp; ERP Solution</option>
                        <option value="Full-Time Senior Full-Stack Role">Full-Time Senior Full-Stack Role</option>
                        <option value="Custom Web Application Development">Custom Web Application Development</option>
                        <option value="Technical Advisory / Consulting">Technical Advisory / Consulting</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                        Target Timeline
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                      >
                        <option value="Immediate / Next 30 Days">Immediate / Next 30 Days</option>
                        <option value="Next 1 - 3 Months">Next 1 - 3 Months</option>
                        <option value="Exploratory / Initial Discussion">Exploratory Discussion</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                      Message & Requirements *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Describe your school, company requirements, technical challenges, or project goals..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors shadow-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm transition-all whitespace-nowrap"
                  >
                    <span>Transmit Inquiry</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
