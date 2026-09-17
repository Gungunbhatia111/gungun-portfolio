import React, { useState } from 'react';
import { Code2, Server, Database, Terminal, Cpu, CheckCircle } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export const Skills = () => {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', label: 'All Stack', icon: Cpu },
    { id: 'frontend', label: 'Frontend', icon: Code2 },
    { id: 'backend', label: 'Backend', icon: Server },
    { id: 'database', label: 'Databases', icon: Database },
    { id: 'programming', label: 'Languages', icon: Terminal },
  ];

  const allSkills = [
    ...skillsData.frontend,
    ...skillsData.backend,
    ...skillsData.database,
    ...skillsData.programming,
    ...skillsData.tools,
  ];

  const filteredSkills =
    activeTab === 'all'
      ? allSkills
      : activeTab === 'frontend'
      ? skillsData.frontend
      : activeTab === 'backend'
      ? skillsData.backend
      : activeTab === 'database'
      ? skillsData.database
      : skillsData.programming;

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-400 border border-purple-500/20">
            <Code2 className="w-3.5 h-3.5" />
            <span>Tech Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Core Technologies & <span className="text-purple-400">Skillset</span>
          </h2>
          <p className="text-slate-400 light:text-slate-600 text-sm sm:text-base">
            Verified technical tools and frameworks used to build modern, production-grade web applications.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-lg shadow-indigo-500/20'
                    : 'bg-slate-800/60 light:bg-slate-200/80 text-slate-300 light:text-slate-700 hover:bg-slate-700'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="p-4 rounded-2xl glass-panel border border-slate-800 light:border-slate-200 hover:border-sky-500/40 hover:scale-105 transition-all group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-sm text-slate-200 light:text-slate-800 group-hover:text-sky-400 transition-colors">
                  {skill.name}
                </span>
                <CheckCircle className="w-4 h-4 text-emerald-400 opacity-80" />
              </div>
              
              <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1.5">
                <span>{skill.category}</span>
                <span className="font-mono text-sky-400 font-semibold">{skill.level}%</span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-1.5 bg-slate-800 light:bg-slate-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full transition-all duration-700"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
