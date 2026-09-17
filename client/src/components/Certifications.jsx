import React from 'react';
import { Award, ShieldCheck, Star, Code, CheckCircle2 } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

export const Certifications = () => {
  return (
    <section id="certifications" className="py-20 relative bg-slate-900/30 light:bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Certifications & <span className="text-amber-400">Achievements</span>
          </h2>
          <p className="text-slate-400 light:text-slate-600 text-sm sm:text-base">
            Professional course completions, global competitive coding badges, and technical certifications.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 card-3d-wrapper">
          {certificationsData.map((cert, index) => (
            <div
              key={index}
              className="card-3d rounded-2xl glass-panel p-6 border border-slate-800 light:border-slate-200 hover:border-amber-500/50 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold">
                    {cert.badge.includes('Gold') ? <Star className="w-5 h-5 text-amber-400" /> : <ShieldCheck className="w-5 h-5 text-amber-400" />}
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-slate-800 light:bg-slate-200 text-amber-400">
                    {cert.badge}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-100 light:text-slate-900 mb-1">
                  {cert.title}
                </h3>

                <div className="text-xs text-sky-400 font-semibold mb-3">
                  {cert.issuer} • {cert.date}
                </div>

                <p className="text-xs text-slate-400 light:text-slate-600 leading-relaxed mb-4">
                  {cert.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800 light:border-slate-200 flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Verified Record
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
