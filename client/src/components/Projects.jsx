import React, { useState } from 'react';
import { ExternalLink, Github, Sparkles, CheckCircle, Code, Layers, AlertCircle } from 'lucide-react';
import { projectsData } from '../data/portfolioData';

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Full-Stack', 'Freelance Websites', 'Web Applications'];

  const filteredProjects =
    activeCategory === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 relative bg-slate-900/30 light:bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Portfolio Projects</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Real Client <span className="text-sky-400">Projects & Applications</span>
          </h2>
          <p className="text-slate-400 light:text-slate-600 text-sm sm:text-base">
            A focused look at the strongest work clients can verify, request demos for, or review live before investing in a project.
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
                  ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/25'
                  : 'bg-slate-800/60 light:bg-slate-200/80 text-slate-300 light:text-slate-700 hover:bg-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Large Project Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 card-3d-wrapper">
          {filteredProjects.map((project) => {
            const hasGithub = project.github && project.github !== '#';
            const hasLiveDemo = project.liveDemo && project.liveDemo !== '#';

            return (
              <div
                key={project.id}
                className="card-3d rounded-2xl glass-panel border border-slate-800 light:border-slate-200 overflow-hidden flex flex-col justify-between group hover:border-sky-500/50 transition-all"
              >
              <div>
                {/* Visual Banner Header */}
                <div
                  className="h-44 p-6 relative flex flex-col justify-between overflow-hidden"
                  style={{ background: project.imageBg }}
                >
                  <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]"></div>

                  <div className="relative z-10 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/40 text-white border border-white/20 backdrop-blur-md">
                      {project.category}
                    </span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  </div>

                  <div className="relative z-10">
                    <h3 className="text-xl font-extrabold text-white group-hover:translate-x-1 transition-transform">
                      {project.title}
                    </h3>
                    <p className="text-xs text-sky-200 font-medium line-clamp-1">
                      {project.subtitle}
                    </p>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 space-y-4">
                  {/* One-Line Description */}
                  <p className="text-xs text-slate-300 light:text-slate-700 leading-relaxed font-medium">
                    {project.description}
                  </p>

                  {/* Problem Solved */}
                  <div className="p-3 rounded-xl bg-slate-900/80 light:bg-slate-100 border border-slate-800 light:border-slate-200 space-y-1">
                    <div className="flex items-center gap-1.5 text-[11px] font-semibold text-amber-400">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>Problem Solved:</span>
                    </div>
                    <p className="text-[11px] text-slate-400 light:text-slate-600 leading-normal">
                      {project.problemSolves}
                    </p>
                  </div>

                  {/* Key Features List */}
                  <div className="space-y-1.5">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      Key Highlights & Impact:
                    </span>
                    <ul className="space-y-1">
                      {project.keyFeatures.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-300 light:text-slate-700">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md text-[10px] font-semibold bg-slate-800/80 light:bg-slate-200 text-sky-300 light:text-sky-800 border border-slate-700 light:border-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer Buttons */}
              <div className="p-6 pt-0 flex items-center justify-between gap-3">
                {hasGithub ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-2.5 px-3 rounded-xl bg-slate-800/80 light:bg-slate-200 text-xs font-semibold text-slate-200 light:text-slate-800 hover:text-sky-400 flex items-center justify-center gap-1.5 border border-slate-700 light:border-slate-300 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub Code</span>
                  </a>
                ) : (
                  <a
                    href="#contact"
                    className="flex-1 py-2.5 px-3 rounded-xl bg-slate-800/80 light:bg-slate-200 text-xs font-semibold text-slate-300 light:text-slate-700 hover:text-sky-400 flex items-center justify-center gap-1.5 border border-slate-700 light:border-slate-300 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Private Project</span>
                  </a>
                )}

                {hasLiveDemo ? (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-2.5 px-3 rounded-xl bg-sky-500 text-xs font-semibold text-white hover:bg-sky-600 flex items-center justify-center gap-1.5 shadow-md transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Live Demo</span>
                  </a>
                ) : (
                  <a
                    href="#contact"
                    className="flex-1 py-2.5 px-3 rounded-xl bg-indigo-600/30 text-indigo-300 border border-indigo-500/30 text-xs font-semibold hover:bg-indigo-600 hover:text-white flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <span>Request Demo</span>
                  </a>
                )}
              </div>
            </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
