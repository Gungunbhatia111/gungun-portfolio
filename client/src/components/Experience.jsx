import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle, Award } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export const Experience = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Practical Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Internship & <span className="text-emerald-400">Industry Engagements</span>
          </h2>
          <p className="text-slate-400 light:text-slate-600 text-sm sm:text-base">
            Hands-on development experience building production software systems for organizations and hackathons.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto space-y-8 relative before:absolute before:inset-0 before:left-4 md:before:left-1/2 before:-translate-x-1/2 before:w-0.5 before:bg-slate-800 light:before:bg-slate-300">
          {experienceData.map((exp, idx) => (
            <div key={idx} className="relative flex flex-col md:flex-row items-center group">
              
              {/* Timeline Center Dot */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-900 light:bg-white border-2 border-emerald-400 flex items-center justify-center z-10 text-emerald-400 shadow-md group-hover:scale-125 transition-transform">
                <Briefcase className="w-4 h-4" />
              </div>

              {/* Card Container */}
              <div className={`w-full md:w-[calc(50%-2rem)] pl-12 md:pl-0 ${idx % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:ml-auto md:pl-8'}`}>
                <div className="rounded-2xl glass-panel p-6 border border-slate-800 light:border-slate-200 hover:border-emerald-500/50 transition-all text-left">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                      {exp.company}
                    </span>
                    <span className="text-xs text-slate-400 flex items-center gap-1 font-mono">
                      <Calendar className="w-3 h-3 text-sky-400" />
                      {exp.period}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-100 light:text-slate-900 mb-1">
                    {exp.role}
                  </h3>

                  <div className="text-xs text-slate-400 mb-4 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-indigo-400" />
                    <span>{exp.location}</span>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.highlights.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-2 text-xs text-slate-300 light:text-slate-700">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800 light:border-slate-200">
                    {exp.tech.map((t, tIdx) => (
                      <span key={tIdx} className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800/80 text-sky-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
