import React from 'react';
import { 
  Milestone, 
  Sparkles, 
  Target, 
  CheckCircle2,
  Calendar,
  ArrowRight
} from 'lucide-react';
import { journeyTimeline, lookingFor } from '../data/portfolioData';

export const Journey = () => {
  return (
    <section id="journey" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* ======================================================
            MY JOURNEY TIMELINE
            ====================================================== */}
        <div>
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 light:text-indigo-600 border border-indigo-500/20">
              <Milestone className="w-3.5 h-3.5" />
              <span>Growth Story</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-100 light:text-slate-900">
              My Engineering <span className="text-indigo-400 light:text-indigo-600">Journey</span>
            </h2>
            <p className="text-slate-400 light:text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
              How I started with C and core logic, progressed through Data Structures and Java, and built full-stack applications.
            </p>
          </div>

          {/* Timeline Grid */}
          <div className="relative border-l-2 border-indigo-500/30 light:border-indigo-200 ml-4 sm:ml-32 space-y-12 pb-4">
            {journeyTimeline.map((item, index) => {
              const isCurrent = item.year === 'CURRENT';

              return (
                <div key={index} className="relative pl-6 sm:pl-8 group">
                  {/* Timeline Year Pill on Left for Tablet/Desktop */}
                  <div className="sm:absolute sm:-left-32 sm:top-1 text-left sm:text-right w-24 sm:w-28 mb-1 sm:mb-0">
                    <span
                      className={`inline-block text-xs font-bold font-mono px-2.5 py-1 rounded-lg ${
                        isCurrent
                          ? 'bg-emerald-500/20 text-emerald-400 light:text-emerald-700 border border-emerald-500/30 animate-pulse'
                          : 'bg-slate-900/80 light:bg-slate-200 text-slate-300 light:text-slate-700 border border-slate-800 light:border-slate-300'
                      }`}
                    >
                      {item.year}
                    </span>
                  </div>

                  {/* Dot on line */}
                  <div
                    className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 ${
                      isCurrent
                        ? 'bg-emerald-500 border-emerald-200'
                        : 'bg-indigo-600 border-slate-900 light:border-white group-hover:scale-125 transition-transform'
                    }`}
                  ></div>

                  {/* Content Card */}
                  <div className="human-card p-5 sm:p-6 bg-slate-900/40 light:bg-white border border-slate-800 light:border-slate-200 hover:border-indigo-500/40 transition-all">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h3 className="text-base sm:text-lg font-bold text-slate-100 light:text-slate-900">
                        {item.title}
                      </h3>
                      <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 light:text-indigo-600 border border-indigo-500/20">
                        {item.tag}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 light:text-slate-700 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ======================================================
            WHAT I'M LOOKING FOR
            ====================================================== */}
        <div className="rounded-3xl human-card p-6 sm:p-10 bg-gradient-to-br from-indigo-950/40 via-slate-900/50 to-slate-950/80 light:from-indigo-50/80 light:to-white border border-indigo-500/25">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-400 light:text-indigo-700 border border-indigo-500/30">
              <Target className="w-3.5 h-3.5" />
              <span>Next Step</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-100 light:text-slate-900">
              {lookingFor.heading}
            </h3>

            <p className="text-sm sm:text-base text-slate-300 light:text-slate-700 leading-relaxed font-normal">
              "{lookingFor.statement}"
            </p>

            <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
              {lookingFor.focusAreas.map((area, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-900/80 light:bg-white text-slate-200 light:text-slate-800 border border-slate-800 light:border-slate-300 shadow-sm"
                >
                  {area}
                </span>
              ))}
            </div>

            <div className="pt-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm font-semibold shadow-sm transition-all"
              >
                <span>Let's Connect & Talk</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
