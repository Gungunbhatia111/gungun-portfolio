import React from 'react';
import { User, GraduationCap, Code, Rocket, CheckCircle2, Award, Briefcase, ArrowRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const About = () => {
  const learningHighlights = [
    "Computer Science engineering student at SRMS CET Bareilly (2024–2028 batch, 7.83 CGPA)",
    "Delivered a live commercial client website for Bombay Bakers (bombaybakers.in) in Bareilly",
    "Completed a 6-week Full-Stack Developer Internship building AI ATS resume tools at MPIS Revolution",
    "Active DSA problem solver with 50+ challenges solved in Java on LeetCode & 5-Star Gold Badge in C",
    "Focus on readable code, responsive layouts, fast load times, and genuine engineering growth",
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 light:text-indigo-600 border border-indigo-500/20">
            <User className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-100 light:text-slate-900">
            A developer who learns by <span className="text-indigo-400 light:text-indigo-600">building real things</span>
          </h2>
          <p className="text-slate-400 light:text-slate-600 text-sm sm:text-base">
            Curious, persistent, and grounded in hands-on code — from college coursework to live production deployments.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Handcrafted Profile Highlight Card */}
          <div className="lg:col-span-5">
            <div className="human-card p-6 sm:p-7 relative overflow-hidden space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-indigo-600/20 text-indigo-400 light:text-indigo-600 border border-indigo-500/30 flex items-center justify-center font-bold text-2xl">
                  GB
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-100 light:text-slate-900">{personalInfo.name}</h3>
                  <p className="text-xs text-indigo-400 light:text-indigo-600 font-medium">B.Tech CSE • SRMS CET, Bareilly</p>
                </div>
              </div>

              {/* Verified Honest Metrics */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-slate-900/60 light:bg-slate-100 border border-slate-800/80 light:border-slate-200 text-center">
                  <span className="block text-2xl font-bold text-amber-400 light:text-amber-600">1 Live</span>
                  <span className="text-[11px] text-slate-400 light:text-slate-500">Freelance Client Site</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900/60 light:bg-slate-100 border border-slate-800/80 light:border-slate-200 text-center">
                  <span className="block text-2xl font-bold text-indigo-400 light:text-indigo-600">7.83</span>
                  <span className="text-[11px] text-slate-400 light:text-slate-500">AKTU B.Tech CGPA</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900/60 light:bg-slate-100 border border-slate-800/80 light:border-slate-200 text-center">
                  <span className="block text-2xl font-bold text-emerald-400 light:text-emerald-600">6 Wks</span>
                  <span className="text-[11px] text-slate-400 light:text-slate-500">Full Stack Intern</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900/60 light:bg-slate-100 border border-slate-800/80 light:border-slate-200 text-center">
                  <span className="block text-2xl font-bold text-sky-400 light:text-sky-600">5 Star</span>
                  <span className="text-[11px] text-slate-400 light:text-slate-500">HackerRank C Badge</span>
                </div>
              </div>

              <div className="text-xs text-slate-400 light:text-slate-500 flex items-center justify-between border-t border-slate-800/80 light:border-slate-200 pt-3">
                <span className="flex items-center gap-1">
                  <GraduationCap className="w-3.5 h-3.5 text-indigo-400 light:text-indigo-600" />
                  SRMS CET, Bareilly
                </span>
                <span className="font-mono">3rd Year (2024–2028)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Authentic Personal Narrative */}
          <div className="lg:col-span-7 space-y-5 text-left">
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-100 light:text-slate-900">
              Hi, I'm Gungun
            </h3>
            
            <p className="text-slate-300 light:text-slate-700 text-sm sm:text-base leading-relaxed">
              I'm a Computer Science student who genuinely enjoys turning ideas into working applications. I started with programming fundamentals in C, building intuition around memory, pointers, and algorithmic logic. Over time, I naturally progressed into Data Structures & Algorithms, Java, web development, and the MERN stack.
            </p>

            <p className="text-slate-300 light:text-slate-700 text-sm leading-relaxed">
              I learn best by building. When a local bakery in Bareilly needed a digital presence, I designed and deployed <strong>bombaybakers.in</strong>. During my 6-week internship at MPIS Revolution, I developed an ATS Resume Reviewer and interview practice modules using Node.js, Express, and Gemini API. When college held a 36-hour hackathon, our team built an emergency alert prototype that earned a special panel commendation.
            </p>

            <p className="text-slate-400 light:text-slate-600 text-sm leading-relaxed">
              Currently, I'm focused on becoming a stronger software engineer by solving DSA problems consistently on LeetCode, exploring backend architectures, and writing clean, maintainable code.
            </p>

            {/* Bullet Highlights */}
            <div className="space-y-2.5 pt-2">
              {learningHighlights.map((item, index) => (
                <div key={index} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-300 light:text-slate-800 font-medium leading-normal">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-3 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="px-5 py-2.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl transition-all inline-flex items-center gap-2"
              >
                <span>Explore Featured Projects</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <a
                href="#journey"
                className="px-5 py-2.5 text-xs font-semibold text-slate-300 light:text-slate-700 bg-slate-900/60 light:bg-slate-100 hover:bg-slate-800 light:hover:bg-slate-200 border border-slate-800 light:border-slate-300 rounded-xl transition-all inline-flex items-center gap-2"
              >
                <span>Read My Journey</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
