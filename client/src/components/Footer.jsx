import React from 'react';
import { Code2, Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-slate-800/80 light:border-slate-200 bg-slate-950/80 light:bg-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-sm">
              <Code2 className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold text-sm tracking-tight text-slate-200 light:text-slate-900">
                Gungun Bhatia
              </span>
              <span className="text-[11px] text-slate-400 light:text-slate-500 block">
                Full-Stack Developer & Freelance Web Developer
              </span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-2.5">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-900/80 light:bg-slate-200 text-slate-400 hover:text-indigo-400 transition-colors"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-900/80 light:bg-slate-200 text-slate-400 hover:text-indigo-400 transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 rounded-lg bg-slate-900/80 light:bg-slate-200 text-slate-400 hover:text-indigo-400 transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Scroll to Top */}
          <div className="flex items-center gap-4 text-xs text-slate-400 light:text-slate-500">
            <span>
              SRMS CET, Bareilly
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900/80 light:bg-slate-200 text-slate-400 hover:text-indigo-400 transition-colors"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-slate-900 light:border-slate-200 text-center text-[11px] text-slate-400 light:text-slate-500">
          © {new Date().getFullYear()} Gungun Bhatia. Designed & built with React, Node.js, Express & Tailwind CSS.
        </div>
      </div>
    </footer>
  );
};
