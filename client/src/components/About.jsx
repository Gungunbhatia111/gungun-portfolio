import React from 'react';
import { User, GraduationCap, Code, Rocket, CheckCircle2, Award } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const About = () => {
  const highlights = [
    "3rd Year B.Tech CSE at Shri Ram Murti Smarak College of Engineering & Technology (SRMS CET), Bareilly",
    "Hands-on MERN Full-Stack & LLM AI Integration project experience",
    "Full Stack Developer Internship completed at MPIS Revolution Pvt. Ltd.",
    "Proven problem-solver with 50+ solved LeetCode DSA challenges & HackerRank 5-Star C Gold Badge",
    "Dedicated to building clean, accessible, client-focused web solutions",
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/20">
            <User className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Developer Mindset. <span className="text-sky-400">Real-World Execution.</span>
          </h2>
          <p className="text-slate-400 light:text-slate-600 text-sm sm:text-base">
            Bridging academic excellence at SRMS CET Bareilly with real-world software engineering and client website development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Glassmorphic Developer Highlights Card */}
          <div className="lg:col-span-5 card-3d-wrapper">
            <div className="card-3d rounded-2xl glass-panel p-6 border border-slate-800 light:border-slate-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full blur-2xl pointer-events-none"></div>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                  GB
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-100 light:text-slate-900">{personalInfo.name}</h3>
                  <p className="text-xs text-sky-400 font-medium">{personalInfo.title}</p>
                </div>
              </div>

              {/* Quick Metrics Grid */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="p-3.5 rounded-xl bg-slate-900/60 light:bg-slate-100 border border-slate-800 light:border-slate-200 text-center">
                  <span className="block text-2xl font-extrabold text-sky-400">3+</span>
                  <span className="text-[11px] text-slate-400">Full-Stack Projects</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900/60 light:bg-slate-100 border border-slate-800 light:border-slate-200 text-center">
                  <span className="block text-2xl font-extrabold text-indigo-400">7.83</span>
                  <span className="text-[11px] text-slate-400">AKTU CGPA</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900/60 light:bg-slate-100 border border-slate-800 light:border-slate-200 text-center">
                  <span className="block text-2xl font-extrabold text-purple-400">6 Wks</span>
                  <span className="text-[11px] text-slate-400">MERN Internship</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900/60 light:bg-slate-100 border border-slate-800 light:border-slate-200 text-center">
                  <span className="block text-2xl font-extrabold text-emerald-400">5 Star</span>
                  <span className="text-[11px] text-slate-400">HackerRank C</span>
                </div>
              </div>

              <div className="text-xs text-slate-400 flex items-center justify-between border-t border-slate-800 light:border-slate-200 pt-3">
                <span className="flex items-center gap-1"><GraduationCap className="w-3.5 h-3.5 text-sky-400" /> SRMS CET, Bareilly</span>
                <span>Batch 2024-2028</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Focus Areas */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <h3 className="text-2xl font-bold tracking-tight">
              Passionate about turning ideas into <span className="text-indigo-400">functional, high-converting digital products</span>.
            </h3>
            
            <p className="text-slate-300 light:text-slate-700 text-sm leading-relaxed">
              I am currently in my 3rd year of B.Tech Computer Science & Engineering at <strong>Shri Ram Murti Smarak College of Engineering & Technology (SRMS CET), Bareilly</strong>. While my academic foundation keeps me grounded in computer science fundamentals like Data Structures, Databases, and Object-Oriented Design, my core passion lies in web development and freelance client projects.
            </p>

            <p className="text-slate-400 light:text-slate-600 text-sm leading-relaxed">
              Through hands-on development, including building AI placement tools with Gemini LLM APIs, campus management systems, and a 6-week full-stack internship at MPIS Revolution Pvt. Ltd., I have built a reputation for delivering reliable, clean, and scalable web solutions.
            </p>

            {/* Bullet Highlights */}
            <div className="space-y-2.5 pt-2">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-300 light:text-slate-800 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex items-center gap-4">
              <a
                href="#services"
                className="px-5 py-2.5 text-xs font-semibold text-white bg-sky-500 hover:bg-sky-600 rounded-xl transition-colors inline-flex items-center gap-2"
              >
                <Rocket className="w-4 h-4" />
                Explore Services I Offer
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
