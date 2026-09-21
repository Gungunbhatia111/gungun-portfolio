import React, { useState } from 'react';
import { Globe, Layers, Layout, Wrench, Check, ArrowRight, Calculator, Sparkles, MessageSquare, Clock } from 'lucide-react';
import { servicesData } from '../data/portfolioData';

export const Services = () => {
  const [selectedServices, setSelectedServices] = useState(['web-dev']);

  const iconMap = {
    Globe: Globe,
    Layers: Layers,
    Layout: Layout,
    Wrench: Wrench,
  };

  const estimatorItems = [
    { id: 'web-dev', label: 'Business / Portfolio Website (like Bombay Bakers)', price: 180, days: 8 },
    { id: 'fullstack-app', label: 'Full-Stack MERN Web App & Custom API', price: 450, days: 22 },
    { id: 'frontend-ui', label: 'React Frontend UI & Mobile Responsiveness', price: 140, days: 7 },
    { id: 'site-fixes', label: 'Website Improvements & Performance Optimizations', price: 90, days: 6 },
    { id: 'auth-db', label: 'Database Architecture & Secure Authentication', price: 130, days: 8 },
  ];

  const toggleEstimatorService = (id) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const totalPrice = estimatorItems
    .filter((item) => selectedServices.includes(item.id))
    .reduce((sum, item) => sum + item.price, 0);

  const totalDays = estimatorItems
    .filter((item) => selectedServices.includes(item.id))
    .reduce((sum, item) => sum + item.days, 0);

  return (
    <section id="services" className="py-20 relative bg-slate-900/30 light:bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 light:text-indigo-600 border border-indigo-500/20">
            <Layers className="w-3.5 h-3.5" />
            <span>Freelance Web Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-100 light:text-slate-900">
            What I Can <span className="text-indigo-400 light:text-indigo-600">Build For You</span>
          </h2>
          <p className="text-slate-400 light:text-slate-600 text-sm sm:text-base">
            Professional web development services tailored to help businesses, startups, and individuals establish a high-quality online presence.
          </p>
        </div>

        {/* 4 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service) => {
            const IconComponent = iconMap[service.icon] || Globe;
            return (
              <div
                key={service.id}
                className="human-card p-6 flex flex-col justify-between hover:border-indigo-500/50 transition-all group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-indigo-600/15 border border-indigo-500/25 flex items-center justify-center text-indigo-400 light:text-indigo-600 mb-5 group-hover:scale-105 transition-transform">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  
                  <h3 className="text-base font-bold text-slate-100 light:text-slate-900 mb-2">
                    {service.title}
                  </h3>
                  
                  <p className="text-xs text-slate-400 light:text-slate-600 leading-relaxed mb-4">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-300 light:text-slate-700">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-800/80 light:border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-1 text-xs font-semibold text-slate-300 light:text-slate-700">
                    <Clock className="w-3.5 h-3.5 text-indigo-400" />
                    <span>{service.pricingHint}</span>
                  </div>
                  <a
                    href="#contact"
                    className="text-xs font-semibold text-indigo-400 light:text-indigo-600 hover:text-indigo-300 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>Inquire</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Project Scope & Timeline Estimator Widget */}
        <div className="mt-14 rounded-2xl human-card p-6 sm:p-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-slate-800/80 light:border-slate-200">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-400 light:text-indigo-600 uppercase tracking-wider mb-1">
                <Calculator className="w-4 h-4" /> Project Scope & Turnaround Estimator
              </div>
              <h3 className="text-xl font-bold text-slate-100 light:text-slate-900">
                Select features for an estimated timeline (6 to 20 or 30 days)
              </h3>
              <p className="text-xs text-slate-400 light:text-slate-500 mt-1">
                Clear expectations and transparent delivery milestones for clients.
              </p>
            </div>
            <div className="flex items-center gap-4 bg-slate-900/80 light:bg-slate-100 p-3.5 rounded-xl border border-slate-800 light:border-slate-200 shrink-0">
              <div>
                <span className="block text-[10px] text-slate-400 light:text-slate-500 uppercase font-semibold">Estimated Budget</span>
                <span className="text-xl font-bold text-indigo-400 light:text-indigo-600">
                  ${totalPrice} <span className="text-xs text-slate-400 light:text-slate-500 font-normal">(~₹{totalPrice * 83})</span>
                </span>
              </div>
              <div className="h-8 w-px bg-slate-800 light:bg-slate-300"></div>
              <div>
                <span className="block text-[10px] text-slate-400 light:text-slate-500 uppercase font-semibold">Estimated Timeline</span>
                <span className="text-xl font-bold text-emerald-400 light:text-emerald-600">{totalDays} Days</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-6">
            {estimatorItems.map((item) => {
              const isSelected = selectedServices.includes(item.id);
              return (
                <button
                  key={item.id}
                  onClick={() => toggleEstimatorService(item.id)}
                  className={`p-3.5 rounded-xl text-left border transition-all flex items-center justify-between ${
                    isSelected
                      ? 'bg-indigo-600/10 border-indigo-500/50 text-indigo-300 light:text-indigo-800 font-semibold shadow-sm'
                      : 'bg-slate-900/40 light:bg-slate-100/50 border-slate-800/80 light:border-slate-200 text-slate-400 light:text-slate-600 hover:border-slate-700'
                  }`}
                >
                  <div className="space-y-0.5">
                    <span className="text-xs block">{item.label}</span>
                    <span className="text-[11px] text-slate-400 light:text-slate-500 font-mono">~{item.days} days turnaround</span>
                  </div>
                  <div className={`w-5 h-5 rounded-md flex items-center justify-center text-xs shrink-0 ml-2 ${isSelected ? 'bg-indigo-600 text-white' : 'border border-slate-700 light:border-slate-300'}`}>
                    {isSelected && <Check className="w-3.5 h-3.5" />}
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800/80 light:border-slate-200">
            <span className="text-xs text-slate-400 light:text-slate-500">
              * Delivery timelines usually range from 6 to 20 or 30 days based on scope complexity.
            </span>
            <a
              href="#contact"
              className="px-5 py-2.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-sm transition-all flex items-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Discuss Your Project Requirements</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
