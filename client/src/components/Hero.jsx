import React from 'react';
import { ArrowRight, Github, Linkedin, Mail, Download, CheckCircle, Code2, Cpu, Globe } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] pt-32 pb-20 flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline & Intro */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Available for Freelance & Full-Stack Projects</span>
            </div>

            {/* Main Name & Title */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-100 light:text-slate-900">
                Hi, I'm <span className="text-indigo-400 light:text-indigo-600">{personalInfo.name}</span> 👋
              </h1>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-300 light:text-slate-700">
                {personalInfo.title}
              </h2>
            </div>

            {/* Professional Subheading */}
            <p className="text-base text-slate-400 light:text-slate-600 max-w-2xl leading-relaxed">
              I build modern, high-performance websites and scalable full-stack web applications that turn ideas into functional digital products for businesses and clients.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#contact"
                className="px-6 py-3 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-sm transition-colors flex items-center gap-2"
              >
                <span>Hire Me / Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#projects"
                className="px-6 py-3 text-xs font-bold text-slate-300 light:text-slate-800 bg-slate-900 light:bg-slate-100 hover:bg-slate-800 light:hover:bg-slate-200 border border-slate-800 light:border-slate-300 rounded-lg transition-colors flex items-center gap-2"
              >
                <span>View Portfolio Projects</span>
              </a>

              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-3 text-xs font-medium text-slate-400 hover:text-indigo-400 border border-dashed border-slate-800 light:border-slate-300 rounded-lg transition-colors flex items-center gap-1.5"
              >
                <Download className="w-4 h-4" />
                <span>View Resume</span>
              </a>
            </div>

            {/* Quick Metrics Strip */}
            <div className="pt-6 grid grid-cols-3 gap-4 max-w-xl border-t border-slate-800 light:border-slate-200">
              <div>
                <span className="block text-2xl font-extrabold text-indigo-400">92%</span>
                <span className="text-[11px] text-slate-400 font-medium">ATS Resume Match AI</span>
              </div>
              <div>
                <span className="block text-2xl font-extrabold text-emerald-400">7.83</span>
                <span className="text-[11px] text-slate-400 font-medium">AKTU B.Tech CGPA</span>
              </div>
              <div>
                <span className="block text-2xl font-extrabold text-blue-400">5-Star</span>
                <span className="text-[11px] text-slate-400 font-medium">HackerRank C Badge</span>
              </div>
            </div>

            {/* Direct Connect Icons */}
            <div className="pt-2 flex items-center gap-4 text-xs text-slate-400">
              <span className="font-semibold uppercase tracking-wider text-[10px]">Links:</span>
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hover:text-indigo-400 flex items-center gap-1">
                <Github className="w-4 h-4" /> GitHub
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover:text-indigo-400 flex items-center gap-1">
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
              <a href={`mailto:${personalInfo.email}`} className="hover:text-indigo-400 flex items-center gap-1">
                <Mail className="w-4 h-4" /> Email
              </a>
            </div>

          </div>

          {/* Right Column: Clean Software Engineer Executive Profile Card */}
          <div className="lg:col-span-5">
            <div className="pro-card p-6 border border-slate-800 light:border-slate-200 space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 light:border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center font-bold text-lg">
                    GB
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-slate-100 light:text-slate-900">{personalInfo.name}</h3>
                    <p className="text-xs text-indigo-400 font-medium">SRMS CET, Bareilly (3rd Year)</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded text-[10px] font-mono font-bold bg-slate-800 light:bg-slate-100 text-emerald-400 border border-slate-700">
                  MERN Stack
                </span>
              </div>

              {/* Engineering Highlights */}
              <div className="space-y-3">
                <div className="flex items-start gap-2.5 text-xs text-slate-300 light:text-slate-700">
                  <CheckCircle className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                  <span>Full-Stack Web App Development (Node.js, Express, MongoDB, React)</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-300 light:text-slate-700">
                  <CheckCircle className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                  <span>LLM AI API Integrations & Real-Time Analytics Dashboards</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-300 light:text-slate-700">
                  <CheckCircle className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                  <span>Completed 6-Week Full Stack Internship at MPIS Revolution Pvt. Ltd.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-300 light:text-slate-700">
                  <CheckCircle className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                  <span>Custom Business Websites, Landing Pages & UI/UX Optimization</span>
                </div>
              </div>

              {/* Primary Tech Pills */}
              <div className="pt-4 border-t border-slate-800 light:border-slate-200">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2">Core Tech Stack:</span>
                <div className="flex flex-wrap gap-1.5">
                  {['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript', 'Tailwind CSS', 'SQL', 'Java'].map((tech) => (
                    <span key={tech} className="px-2.5 py-1 rounded text-[11px] font-semibold bg-slate-900 light:bg-slate-100 text-slate-300 light:text-slate-800 border border-slate-800 light:border-slate-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
