import React from 'react';
import { GraduationCap, Calendar, Award, CheckCircle } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export const Education = () => {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/20">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Education & <span className="text-sky-400">Academic Standing</span>
          </h2>
          <p className="text-slate-400 light:text-slate-600 text-sm sm:text-base">
            Consistent performance in Computer Science & Engineering at SRMS CET Bareilly.
          </p>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main B.Tech Card */}
          <div className="md:col-span-2 rounded-2xl glass-panel p-6 sm:p-8 border border-slate-800 light:border-slate-200 space-y-6">
            <div className="flex flex-wrap items-start justify-between gap-4 pb-4 border-b border-slate-800 light:border-slate-200">
              <div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-sky-500/10 text-sky-400 border border-sky-500/30">
                  Currently in 3rd Year
                </span>
                <h3 className="text-xl font-bold text-slate-100 light:text-slate-900 mt-2">
                  {educationData[0].degree}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-slate-300 light:text-slate-700">
                  {educationData[0].institution}
                </p>
                <p className="text-xs text-slate-400">
                  {educationData[0].university}
                </p>
              </div>

              <div className="text-right">
                <span className="block text-2xl font-extrabold text-sky-400">{educationData[0].metrics.overallCGPA}</span>
                <span className="text-[11px] text-slate-400 uppercase font-semibold">Cumulative CGPA</span>
              </div>
            </div>

            {/* Semester Grades Breakdown Grid */}
            <div className="space-y-3">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                Semester-Wise SGPA Breakdown:
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {educationData[0].metrics.semesters.map((sem, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-900/60 light:bg-slate-100 border border-slate-800 light:border-slate-200 text-center">
                    <span className="block text-xs text-slate-400 font-medium">{sem.sem}</span>
                    <span className="text-base font-bold text-indigo-400">SGPA {sem.sgpa}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between text-xs text-slate-400">
              <span>1st Year Aggregate: <strong className="text-emerald-400">{educationData[0].metrics.year1Percentage}</strong></span>
              <span>2nd Year Aggregate: <strong className="text-emerald-400">{educationData[0].metrics.year2Percentage}</strong></span>
            </div>
          </div>

          {/* Schooling Cards Stack */}
          <div className="space-y-6 flex flex-col justify-between">
            <div className="rounded-2xl glass-panel p-6 border border-slate-800 light:border-slate-200 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-sky-400 font-bold uppercase">{educationData[1].period}</span>
                <h4 className="text-base font-bold text-slate-100 light:text-slate-900 mt-1">
                  {educationData[1].degree}
                </h4>
                <p className="text-xs text-slate-400">{educationData[1].institution}</p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800 light:border-slate-200 flex items-center justify-between">
                <span className="text-xs text-slate-400">CBSE Board</span>
                <span className="text-sm font-extrabold text-emerald-400">{educationData[1].metrics.score}</span>
              </div>
            </div>

            <div className="rounded-2xl glass-panel p-6 border border-slate-800 light:border-slate-200 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-sky-400 font-bold uppercase">{educationData[2].period}</span>
                <h4 className="text-base font-bold text-slate-100 light:text-slate-900 mt-1">
                  {educationData[2].degree}
                </h4>
                <p className="text-xs text-slate-400">{educationData[2].institution}</p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800 light:border-slate-200 flex items-center justify-between">
                <span className="text-xs text-slate-400">CBSE Board</span>
                <span className="text-sm font-extrabold text-emerald-400">{educationData[2].metrics.score}</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
