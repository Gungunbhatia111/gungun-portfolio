import React, { useState } from 'react';
import { 
  ExternalLink, 
  Github, 
  Sparkles, 
  CheckCircle, 
  Code, 
  Layers, 
  AlertCircle, 
  ArrowRight, 
  Globe, 
  Laptop, 
  Play
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { PlacementAssistantModal } from './PlacementAssistantModal';

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [isAssistantModalOpen, setIsAssistantModalOpen] = useState(false);

  const categories = ['All', 'Freelance Client Work', 'Full-Stack & Systems'];

  const filteredProjects = projectsData.filter((p) => {
    if (activeCategory === 'All') return true;
    if (activeCategory === 'Freelance Client Work') return p.isFreelanceClient || p.id === 'bombay-bakers';
    return !p.isFreelanceClient && p.id !== 'bombay-bakers';
  });

  return (
    <section id="projects" className="py-20 relative bg-slate-900/30 light:bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 light:text-amber-700 border border-amber-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Real Projects</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-100 light:text-slate-900">
            What I've <span className="text-amber-400 light:text-amber-600">Built & Shipped</span>
          </h2>
          <p className="text-slate-400 light:text-slate-600 text-sm sm:text-base">
            Each project represents real code written to solve concrete problems — from a live commercial bakery website to an internship placement suite.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all ${
                activeCategory === cat
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-slate-900/60 light:bg-slate-200/80 text-slate-300 light:text-slate-700 hover:bg-slate-800 light:hover:bg-slate-300 border border-slate-800 light:border-slate-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {filteredProjects.map((project) => {
            const isFreelance = project.id === 'bombay-bakers' || project.isFreelanceClient;
            const isPlacementAi = project.id === 'placement-ai';

            return (
              <div
                key={project.id}
                className={`human-card overflow-hidden flex flex-col justify-between group transition-all ${
                  isFreelance
                    ? 'border-amber-500/40 light:border-amber-400/60 shadow-amber-500/5'
                    : 'hover:border-indigo-500/50'
                }`}
              >
                <div>
                  {/* Browser Mockup Header */}
                  <div className="browser-header flex items-center justify-between text-xs text-slate-400 light:text-slate-500">
                    <div className="flex items-center gap-1.5">
                      <span className="browser-dot bg-rose-500/80"></span>
                      <span className="browser-dot bg-amber-500/80"></span>
                      <span className="browser-dot bg-emerald-500/80"></span>
                    </div>
                    
                    {/* Simulated Clean URL */}
                    <div className="px-3 py-0.5 rounded-full bg-slate-900/60 light:bg-slate-100 text-[10px] font-mono text-slate-400 light:text-slate-600 border border-slate-800 light:border-slate-200 max-w-[200px] truncate">
                      {isFreelance ? 'https://bombaybakers.in' : isPlacementAi ? 'placement-cell.internal' : 'campus-portal.srms'}
                    </div>

                    <div className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    </div>
                  </div>

                  {/* Project Visual Banner */}
                  <div
                    className="p-6 relative flex flex-col justify-between overflow-hidden min-h-[120px]"
                    style={{ background: project.imageBg }}
                  >
                    <div className="absolute inset-0 bg-black/25 backdrop-blur-[1px]"></div>

                    <div className="relative z-10 flex items-center justify-between mb-4">
                      <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/50 text-white border border-white/20 backdrop-blur-md">
                        {project.badge || project.category}
                      </span>
                      {isFreelance && (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-400 text-slate-950 shadow-sm">
                          Live Client
                        </span>
                      )}
                    </div>

                    <div className="relative z-10">
                      <h3 className="text-xl font-bold text-white group-hover:translate-x-0.5 transition-transform">
                        {project.title}
                      </h3>
                      <p className="text-xs text-slate-200/90 font-medium line-clamp-1 mt-0.5">
                        {project.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-6 space-y-4">
                    {/* 1. What problem it solves */}
                    <div className="p-3 rounded-xl bg-slate-900/60 light:bg-slate-100 border border-slate-800/80 light:border-slate-200 space-y-1">
                      <div className="flex items-center gap-1.5 text-[11px] font-semibold text-amber-400 light:text-amber-700">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>Problem Solved:</span>
                      </div>
                      <p className="text-xs text-slate-300 light:text-slate-700 leading-normal">
                        {project.problemSolves}
                      </p>
                    </div>

                    {/* 2. What I built */}
                    <div className="space-y-1.5">
                      <span className="text-[11px] font-bold text-slate-400 light:text-slate-500 uppercase tracking-wider block">
                        What I Built:
                      </span>
                      <ul className="space-y-1.5">
                        {project.whatIBuilt.map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-slate-300 light:text-slate-700">
                            <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                            <span className="leading-tight">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* 3. Technologies used */}
                    <div className="pt-2">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                        Built With:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {project.techStack.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 rounded-md text-[10px] font-medium bg-slate-900/80 light:bg-slate-100 text-slate-300 light:text-slate-700 border border-slate-800 light:border-slate-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="p-6 pt-0 space-y-2">
                  {/* Live link for Bombay Bakers */}
                  {isFreelance && (
                    <a
                      href="https://bombaybakers.in"
                      target="_blank"
                      rel="noreferrer"
                      className="w-full py-2.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all"
                    >
                      <Globe className="w-4 h-4" />
                      <span>Visit Live Website (bombaybakers.in)</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {/* Interactive App Launcher for Placement AI */}
                  {isPlacementAi && (
                    <button
                      onClick={() => setIsAssistantModalOpen(true)}
                      className="w-full py-2.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all"
                    >
                      <Play className="w-4 h-4" />
                      <span>Launch Interactive Placement Suite</span>
                    </button>
                  )}

                  <div className="flex items-center gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 py-2 px-3 rounded-xl bg-slate-900/80 light:bg-slate-100 hover:bg-slate-800 light:hover:bg-slate-200 border border-slate-800 light:border-slate-300 text-xs font-semibold text-slate-200 light:text-slate-800 flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                    </a>

                    {isPlacementAi ? (
                      <button
                        onClick={() => setIsAssistantModalOpen(true)}
                        className="flex-1 py-2 px-3 rounded-xl bg-indigo-600/20 hover:bg-indigo-600 hover:text-white border border-indigo-500/30 text-xs font-semibold text-indigo-300 light:text-indigo-700 flex items-center justify-center gap-1 transition-colors"
                      >
                        <span>View Features</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    ) : (
                      <a
                        href="#contact"
                        className="flex-1 py-2 px-3 rounded-xl bg-indigo-600/20 hover:bg-indigo-600 hover:text-white border border-indigo-500/30 text-xs font-semibold text-indigo-300 light:text-indigo-700 flex items-center justify-center gap-1 transition-colors"
                      >
                        <span>Inquire</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Live Client Proof Callout Strip */}
        <div className="mt-12 p-5 rounded-2xl human-card border border-amber-500/30 light:border-amber-400/40 bg-amber-500/[0.04] light:bg-amber-50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 light:text-amber-700 flex items-center justify-center font-bold">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-100 light:text-slate-900">
                Want a custom business website like Bombay Bakers?
              </h4>
              <p className="text-xs text-slate-400 light:text-slate-600">
                Delivered in 6 to 14 days with clean code, mobile-friendly menus, and direct WhatsApp contact integration.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold flex items-center gap-1.5 shrink-0 shadow-sm transition-all"
          >
            <span>Start Your Website</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>

      {/* Interactive Modal for Placement Assistant */}
      <PlacementAssistantModal
        isOpen={isAssistantModalOpen}
        onClose={() => setIsAssistantModalOpen(false)}
      />
    </section>
  );
};
