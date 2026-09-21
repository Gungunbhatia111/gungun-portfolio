import React from 'react';
import { ArrowRight, MessageSquare, CheckCircle2, Globe, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const FreelanceCTA = () => {
  return (
    <section className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl human-card bg-indigo-950/30 light:bg-indigo-50/70 border border-indigo-500/30 light:border-indigo-200 p-8 sm:p-12 relative overflow-hidden text-center shadow-lg">
          
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold bg-indigo-500/15 light:bg-indigo-100 text-indigo-300 light:text-indigo-800 border border-indigo-400/30 light:border-indigo-200">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Let's Build Something Great</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-100 light:text-slate-900">
              Need a website for your <span className="text-indigo-400 light:text-indigo-600">business or idea?</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 light:text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Whether you need a commercial business site (like{' '}
              <a
                href="https://bombaybakers.in"
                target="_blank"
                rel="noreferrer"
                className="text-amber-400 light:text-amber-700 font-semibold underline underline-offset-4"
              >
                bombaybakers.in
              </a>
              ), a high-converting landing page, or a full-stack web application, I'm ready to help you ship it.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <a
                href="#contact"
                className="px-7 py-3.5 text-xs sm:text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-sm transition-all flex items-center gap-2 hover:translate-y-[-1px]"
              >
                <span>Start a Project Discussion</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="px-6 py-3.5 text-xs sm:text-sm font-semibold text-slate-200 light:text-slate-800 bg-slate-900/80 light:bg-white hover:bg-slate-800 light:hover:bg-slate-50 border border-slate-800 light:border-slate-300 rounded-xl transition-all flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-indigo-400 light:text-indigo-600" />
                <span>Direct Email Inquiry</span>
              </a>
            </div>

            {/* Quality Guarantees Bar */}
            <div className="pt-8 border-t border-slate-800/80 light:border-slate-300/80 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300 light:text-slate-600 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Clean, High-Performance Code
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 100% Mobile Responsive
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Transparent Updates & Fast Delivery
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

