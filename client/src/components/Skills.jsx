import React, { useState } from 'react';
import { 
  Code2, 
  Server, 
  Database, 
  Terminal, 
  Wrench, 
  Layers, 
  Cpu 
} from 'lucide-react';
import { skillsExperience } from '../data/portfolioData';

export const Skills = () => {
  const [activeTab, setActiveTab] = useState('all');

  const categoryIcons = {
    frontend: Code2,
    backend: Server,
    database: Database,
    languages: Terminal,
    tools: Wrench,
  };

  const categories = [
    { id: 'all', label: 'All Technologies', icon: Cpu },
    ...skillsExperience.categories.map((c) => ({
      id: c.id,
      label: c.name,
      icon: categoryIcons[c.id] || Layers,
    })),
  ];

  const allSkills = skillsExperience.categories.flatMap((cat) =>
    cat.skills.map((s) => ({
      ...s,
      categoryId: cat.id,
      categoryName: cat.name,
    }))
  );

  const displayedSkills =
    activeTab === 'all'
      ? allSkills
      : allSkills.filter((s) => s.categoryId === activeTab);

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 light:text-indigo-600 border border-indigo-500/20">
            <Layers className="w-3.5 h-3.5" />
            <span>Skills & Technologies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-100 light:text-slate-900">
            Technologies I <span className="text-indigo-400 light:text-indigo-600">Work With</span>
          </h2>
          <p className="text-slate-400 light:text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Core web development technologies, languages, databases, and engineering tools.
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
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'bg-slate-900/60 light:bg-slate-100 text-slate-300 light:text-slate-700 hover:bg-slate-800 light:hover:bg-slate-200 border border-slate-800 light:border-slate-300'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {displayedSkills.map((skill, index) => {
            const IconComponent = categoryIcons[skill.categoryId] || Code2;

            return (
              <div
                key={index}
                className="human-card p-4 sm:p-5 flex flex-col justify-between hover:border-indigo-500/40 group transition-all"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-400 light:text-indigo-600 flex items-center justify-center border border-indigo-500/20 group-hover:scale-105 transition-transform">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <span className="font-bold text-sm text-slate-100 light:text-slate-900">
                        {skill.name}
                      </span>
                    </div>

                    <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-slate-800/80 light:bg-slate-200 text-slate-400 light:text-slate-600">
                      {skill.categoryName}
                    </span>
                  </div>

                  {skill.note && (
                    <p className="text-xs text-slate-400 light:text-slate-600 mt-2 leading-snug">
                      {skill.note}
                    </p>
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
