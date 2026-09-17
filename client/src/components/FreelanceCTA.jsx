import React from 'react';
import { ArrowRight, Sparkles, MessageSquare, CheckCircle2 } from 'lucide-react';

export const FreelanceCTA = () => {
  return (
    <section className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-sky-900/40 via-indigo-900/40 to-purple-900/40 light:from-white/95 light:via-sky-50/95 light:to-indigo-50/95 border border-sky-500/30 light:border-sky-200 p-8 sm:p-12 relative overflow-hidden text-center shadow-2xl light:shadow-sky-900/10">
          
          {/* Subtle glowing ambient circles */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-sky-500/20 light:bg-sky-300/35 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-purple-500/20 light:bg-indigo-300/30 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold bg-sky-500/20 light:bg-sky-100 text-sky-300 light:text-sky-700 border border-sky-400/30 light:border-sky-200 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Let's Build Together</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white light:text-slate-950">
              Have an idea? <span className="bg-gradient-to-r from-sky-400 to-indigo-300 light:from-sky-600 light:to-indigo-700 bg-clip-text text-transparent">Let's build it.</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 light:text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Whether you need a business website, landing page, portfolio, or a complete full-stack web application, I can help turn your idea into a fast, modern working product.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <a
                href="#contact"
                className="px-8 py-4 text-sm font-bold text-white bg-gradient-to-r from-sky-500 via-indigo-600 to-purple-600 rounded-xl shadow-xl shadow-sky-500/25 hover:shadow-sky-500/40 hover:scale-105 transition-all flex items-center gap-2"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="mailto:bhatiagungun1111@gmail.com"
                className="px-6 py-4 text-sm font-semibold text-slate-200 light:text-slate-800 bg-slate-800/80 light:bg-white hover:bg-slate-700 light:hover:bg-sky-50 border border-slate-700 light:border-slate-200 rounded-xl transition-all hover:scale-105 flex items-center gap-2 light:shadow-md light:shadow-sky-900/5"
              >
                <MessageSquare className="w-4 h-4 text-sky-400 light:text-sky-600" />
                <span>Direct Email Inquiry</span>
              </a>
            </div>

            {/* Quality Guarantees Bar */}
            <div className="pt-8 border-t border-slate-700/50 light:border-slate-200 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300 light:text-slate-600 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Clean, Maintainable Code
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Fully Responsive Mobile UI
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Fast Delivery & Clear Updates
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
