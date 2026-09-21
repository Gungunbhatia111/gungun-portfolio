import React from 'react';
import { Compass, Sparkles, BookOpen, ArrowUpRight, TrendingUp } from 'lucide-react';
import { currentlyLearning } from '../data/portfolioData';

export const CurrentlyLearning = () => {
  return (
    <section className="py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Container with warm human styling */}
        <div className="rounded-3xl human-card p-6 sm:p-8 bg-slate-900/60 light:bg-white border border-indigo-500/20 light:border-indigo-100">
          
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-800/80 light:border-slate-200">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 light:text-emerald-700 border border-emerald-500/20 mb-2">
                <Compass className="w-3.5 h-3.5 animate-spin-slow" />
                <span>Continuous Growth</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-100 light:text-slate-900">
                Currently Learning & Exploring
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 light:text-slate-600 mt-1">
                A student's honest journey: areas where I am actively expanding my depth through daily practice and projects.
              </p>
            </div>

            {/* Quick summary pill */}
            <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-950/60 light:bg-slate-100 text-[11px] text-slate-300 light:text-slate-700 border border-slate-800 light:border-slate-200 shrink-0">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>Currently exploring → MERN • DSA • AI Integration • Backend Systems</span>
            </div>
          </div>

          {/* Growth Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {currentlyLearning.map((item, index) => (
              <div
                key={index}
                className="p-4 rounded-2xl bg-slate-950/50 light:bg-slate-50 border border-slate-800/80 light:border-slate-200/90 hover:border-indigo-500/30 transition-all flex flex-col justify-between space-y-3 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-indigo-500/10 text-indigo-400 light:text-indigo-600 border border-indigo-500/20">
                      {item.tag}
                    </span>
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>

                  <h3 className="font-bold text-sm text-slate-100 light:text-slate-900 group-hover:text-indigo-400 light:group-hover:text-indigo-600 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-400 light:text-slate-600 mt-1.5 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-2 flex items-center gap-1 text-[11px] font-medium text-slate-500 light:text-slate-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  <span>Active Focus</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
