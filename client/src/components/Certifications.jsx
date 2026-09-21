import React from 'react';
import { Award, ShieldCheck, Star, CheckCircle2 } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

export const Certifications = () => {
  return (
    <section id="certifications" className="py-20 relative bg-slate-900/30 light:bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 light:text-amber-700 border border-amber-500/20">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-100 light:text-slate-900">
            Certifications & <span className="text-amber-400 light:text-amber-600">Achievements</span>
          </h2>
          <p className="text-slate-400 light:text-slate-600 text-sm sm:text-base">
            Professional course completions, competitive programming badges, and technical trainings.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert, index) => (
            <div
              key={index}
              className="rounded-2xl human-card p-6 hover:border-amber-500/40 transition-all flex flex-col justify-between space-y-4"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 light:text-amber-700 font-bold">
                    {cert.badge.includes('Gold') ? <Star className="w-5 h-5 text-amber-400" /> : <ShieldCheck className="w-5 h-5 text-amber-400" />}
                  </div>
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold bg-slate-900/80 light:bg-slate-100 text-amber-400 light:text-amber-700 border border-slate-800 light:border-slate-200">
                    {cert.badge}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-100 light:text-slate-900 mb-1">
                  {cert.title}
                </h3>

                <div className="text-xs text-indigo-400 light:text-indigo-600 font-medium mb-3">
                  {cert.issuer} • {cert.date}
                </div>

                <p className="text-xs text-slate-400 light:text-slate-600 leading-relaxed">
                  {cert.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 light:border-slate-200 flex items-center gap-1.5 text-xs text-slate-400 light:text-slate-500 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Verified Record
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

