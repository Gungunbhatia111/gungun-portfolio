import React, { useState } from 'react';
import { 
  ArrowRight, 
  Github, 
  Linkedin, 
  Mail, 
  Download, 
  ExternalLink, 
  Check, 
  Copy, 
  MapPin, 
  Sparkles, 
  Code2,
  Terminal,
  Award
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Hero = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="home" className="relative min-h-[90vh] pt-32 pb-20 flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline, Story & Direct Links */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 light:text-emerald-700 border border-emerald-500/20">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Open to Software Engineering & Full-Stack Opportunities</span>
            </div>

            {/* Main Name & Title */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-100 light:text-slate-900 leading-[1.1]">
                {personalInfo.name}
              </h1>
              <h2 className="text-lg sm:text-2xl font-semibold text-indigo-400 light:text-indigo-600">
                Computer Science Student • Aspiring Software Engineer
              </h2>
            </div>

            {/* Tagline & Short Personal Bio */}
            <div className="space-y-3 max-w-2xl">
              <p className="text-base sm:text-lg font-medium text-slate-200 light:text-slate-800 italic">
                "{personalInfo.tagline}"
              </p>
              <p className="text-sm sm:text-base text-slate-400 light:text-slate-600 leading-relaxed">
                3rd-year B.Tech CSE student at <strong>SRMS CET Bareilly</strong>. I build practical full-stack web applications and client websites, including the live commercial site{' '}
                <a
                  href="https://bombaybakers.in"
                  target="_blank"
                  rel="noreferrer"
                  className="text-amber-400 light:text-amber-600 font-semibold underline underline-offset-4 hover:text-amber-300 transition-colors"
                >
                  bombaybakers.in
                </a>
                . Passionate about DSA, MERN stack, and software engineering.
              </p>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-sm transition-all flex items-center gap-2 hover:translate-y-[-1px]"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="px-5 py-3 text-xs sm:text-sm font-semibold text-slate-200 light:text-slate-800 bg-slate-900/80 light:bg-slate-100 hover:bg-slate-800 light:hover:bg-slate-200 border border-slate-800 light:border-slate-300 rounded-xl transition-all flex items-center gap-1.5"
              >
                <span>Let's Connect</span>
                <Mail className="w-3.5 h-3.5 text-indigo-400" />
              </a>

              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-3 text-xs sm:text-sm font-medium text-slate-400 light:text-slate-600 hover:text-indigo-400 light:hover:text-indigo-600 transition-colors flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Resume (PDF)</span>
              </a>
            </div>

            {/* Social & Coding Platform Links (GitHub, LinkedIn, LeetCode, HackerRank) */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-lg bg-slate-900/60 light:bg-slate-100 text-slate-300 light:text-slate-700 hover:text-indigo-400 border border-slate-800 light:border-slate-300 flex items-center gap-1.5 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-lg bg-slate-900/60 light:bg-slate-100 text-slate-300 light:text-slate-700 hover:text-indigo-400 border border-slate-800 light:border-slate-300 flex items-center gap-1.5 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-sky-400" />
                <span>LinkedIn</span>
              </a>

              <a
                href={personalInfo.leetcode}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-lg bg-slate-900/60 light:bg-slate-100 text-slate-300 light:text-slate-700 hover:text-indigo-400 border border-slate-800 light:border-slate-300 flex items-center gap-1.5 transition-colors"
              >
                <Terminal className="w-3.5 h-3.5 text-amber-400" />
                <span>LeetCode (50+)</span>
              </a>

              <a
                href={personalInfo.hackerrank}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-lg bg-slate-900/60 light:bg-slate-100 text-slate-300 light:text-slate-700 hover:text-indigo-400 border border-slate-800 light:border-slate-300 flex items-center gap-1.5 transition-colors"
              >
                <Award className="w-3.5 h-3.5 text-emerald-400" />
                <span>HackerRank Gold</span>
              </a>
            </div>

            {/* Genuine Key Milestones Strip */}
            <div className="pt-6 grid grid-cols-3 gap-4 max-w-lg border-t border-slate-800/80 light:border-slate-200">
              <div>
                <span className="block text-xl sm:text-2xl font-bold text-amber-400 light:text-amber-600">Live</span>
                <span className="text-[11px] sm:text-xs text-slate-400 light:text-slate-500">Client Site (bombaybakers.in)</span>
              </div>
              <div>
                <span className="block text-xl sm:text-2xl font-bold text-indigo-400 light:text-indigo-600">7.83</span>
                <span className="text-[11px] sm:text-xs text-slate-400 light:text-slate-500">SRMS CET CGPA (AKTU)</span>
              </div>
              <div>
                <span className="block text-xl sm:text-2xl font-bold text-emerald-400 light:text-emerald-600">5-Star</span>
                <span className="text-[11px] sm:text-xs text-slate-400 light:text-slate-500">HackerRank C Badge</span>
              </div>
            </div>

          </div>

          {/* Right Column: Handcrafted Developer Card */}
          <div className="lg:col-span-5">
            <div className="human-card p-6 sm:p-7 space-y-5">
              
              {/* Profile Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 light:border-slate-200">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-indigo-600/20 text-indigo-400 light:text-indigo-600 border border-indigo-500/30 flex items-center justify-center font-bold text-lg">
                    GB
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-slate-100 light:text-slate-900">{personalInfo.name}</h3>
                    <p className="text-xs text-slate-400 light:text-slate-500 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-indigo-400" />
                      Bareilly, Uttar Pradesh, India
                    </p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Student Dev
                </span>
              </div>

              {/* What I'm Doing Right Now */}
              <div className="space-y-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 light:text-slate-500 block">
                  Current Focus & Real Projects:
                </span>
                
                <div className="p-3 rounded-xl bg-slate-900/60 light:bg-slate-100 border border-slate-800/80 light:border-slate-200 space-y-1">
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-200 light:text-slate-800">
                    <span>Freelance Client Website</span>
                    <span className="text-[10px] text-amber-400 font-mono">Shipped</span>
                  </div>
                  <p className="text-xs text-slate-400 light:text-slate-600">
                    Built and delivered <strong>bombaybakers.in</strong> for a premier commercial bakery in Bareilly.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/60 light:bg-slate-100 border border-slate-800/80 light:border-slate-200 space-y-1">
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-200 light:text-slate-800">
                    <span>Full Stack Internship</span>
                    <span className="text-[10px] text-indigo-400 font-mono">6 Weeks</span>
                  </div>
                  <p className="text-xs text-slate-400 light:text-slate-600">
                    MPIS Revolution Pvt. Ltd. — Built ATS Resume Reviewer & SDE interview prep modules.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/60 light:bg-slate-100 border border-slate-800/80 light:border-slate-200 space-y-1">
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-200 light:text-slate-800">
                    <span>DSA & Problem Solving</span>
                    <span className="text-[10px] text-emerald-400 font-mono">Daily Practice</span>
                  </div>
                  <p className="text-xs text-slate-400 light:text-slate-600">
                    50+ solved on LeetCode in Java • HackerRank Gold Badge in C.
                  </p>
                </div>
              </div>

              {/* Email Copy Box */}
              <div className="pt-3 border-t border-slate-800/80 light:border-slate-200 flex items-center justify-between">
                <button
                  onClick={handleCopyEmail}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-xl bg-slate-900/80 light:bg-slate-100 border border-slate-800 light:border-slate-200 hover:border-indigo-500/40 text-slate-300 light:text-slate-700 text-xs transition-colors"
                >
                  <span className="truncate">{copied ? 'Email copied!' : personalInfo.email}</span>
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> : <Copy className="w-3.5 h-3.5 shrink-0 text-slate-400" />}
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
