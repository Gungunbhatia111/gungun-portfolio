import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export const Experience = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 light:text-emerald-700 border border-emerald-500/20">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Practical Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-100 light:text-slate-900">
            Internship & <span className="text-emerald-400 light:text-emerald-600">Technical Engagements</span>
          </h2>
          <p className="text-slate-400 light:text-slate-600 text-sm sm:text-base">
            Hands-on development experience building production software systems for organizations and hackathons.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto space-y-8 relative before:absolute before:inset-0 before:left-4 md:before:left-1/2 before:-translate-x-1/2 before:w-0.5 before:bg-slate-800/80 light:before:bg-slate-300">
          {experienceData.map((exp, idx) => (
            <div key={idx} className="relative flex flex-col md:flex-row items-center group">
              
              {/* Timeline Center Dot */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-900 light:bg-white border-2 border-emerald-500 flex items-center justify-center z-10 text-emerald-400 light:text-emerald-600 shadow-sm transition-transform group-hover:scale-110">
                <Briefcase className="w-3.5 h-3.5" />
              </div>

              {/* Card Container */}
              <div className={`w-full md:w-[calc(50%-2rem)] pl-12 md:pl-0 ${idx % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:ml-auto md:pl-8'}`}>
                <div className="rounded-2xl human-card p-6 hover:border-emerald-500/40 transition-all text-left space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-400 light:text-emerald-700 border border-emerald-500/30">
                      {exp.company}
                    </span>
                    <span className="text-xs text-slate-400 light:text-slate-500 flex items-center gap-1 font-mono">
                      <Calendar className="w-3 h-3 text-indigo-400" />
                      {exp.period}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-slate-100 light:text-slate-900">
                      {exp.role}
                    </h3>

                    <div className="text-xs text-slate-400 light:text-slate-500 flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-indigo-400" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.highlights.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-2 text-xs text-slate-300 light:text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/80 light:border-slate-200">
                    {exp.tech.map((t, tIdx) => (
                      <span key={tIdx} className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-900/80 light:bg-slate-100 text-slate-300 light:text-slate-700 border border-slate-800 light:border-slate-200">
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

