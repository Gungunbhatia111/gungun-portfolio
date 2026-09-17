import React, { useState } from 'react';
import { Globe, Layers, Layout, Wrench, Check, ArrowRight, Calculator, Sparkles } from 'lucide-react';
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
    { id: 'web-dev', label: 'Business / Portfolio Website', price: 150, days: 5 },
    { id: 'fullstack-app', label: 'MERN Full-Stack Web App & API', price: 350, days: 10 },
    { id: 'frontend-ui', label: 'React UI / Figma to Code', price: 120, days: 4 },
    { id: 'site-fixes', label: 'Bug Fixes & Responsive Tweaks', price: 70, days: 2 },
    { id: 'auth-db', label: 'User Auth & Database Integration', price: 90, days: 3 },
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
    <section id="services" className="py-20 relative bg-slate-900/40 light:bg-slate-50/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            <Layers className="w-3.5 h-3.5" />
            <span>Freelance Offerings</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            What I Can <span className="text-indigo-400">Build For You</span>
          </h2>
          <p className="text-slate-400 light:text-slate-600 text-sm sm:text-base">
            Professional web development services tailored to help businesses, startups, and individuals establish a high-converting digital presence.
          </p>
        </div>

        {/* 4 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 card-3d-wrapper">
          {servicesData.map((service) => {
            const IconComponent = iconMap[service.icon] || Globe;
            return (
              <div
                key={service.id}
                className="card-3d rounded-2xl glass-panel p-6 border border-slate-800 light:border-slate-200 flex flex-col justify-between group hover:border-sky-500/50 transition-all"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-sky-500/20 via-indigo-500/20 to-purple-500/20 border border-sky-500/30 flex items-center justify-center text-sky-400 mb-5 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-slate-100 light:text-slate-900 mb-2">
                    {service.title}
                  </h3>
                  
                  <p className="text-xs text-slate-400 light:text-slate-600 leading-relaxed mb-4">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-slate-300 light:text-slate-700">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-800 light:border-slate-200 flex items-center justify-between">
                  <span className="text-[11px] font-medium text-slate-400">{service.pricingHint}</span>
                  <a
                    href="#contact"
                    className="text-xs font-semibold text-sky-400 hover:text-sky-300 flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                  >
                    <span>Order</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Project Cost / Quote Estimator Widget */}
        <div className="mt-16 rounded-2xl glass-panel p-6 sm:p-8 border border-slate-800 light:border-slate-200">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-slate-800 light:border-slate-200">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-400 uppercase tracking-wider mb-1">
                <Calculator className="w-4 h-4" /> Interactive Project Estimator
              </div>
              <h3 className="text-xl font-bold">Select features to get an instant estimated project scope</h3>
            </div>
            <div className="flex items-center gap-4 bg-slate-900/80 light:bg-slate-100 p-3 rounded-xl border border-slate-800 light:border-slate-200">
              <div>
                <span className="block text-[10px] text-slate-400 uppercase font-semibold">Estimated Cost</span>
                <span className="text-xl font-extrabold text-sky-400">${totalPrice} <span className="text-xs text-slate-400 font-normal">(~Rs. {totalPrice * 83})</span></span>
              </div>
              <div className="h-8 w-px bg-slate-800 light:bg-slate-300"></div>
              <div>
                <span className="block text-[10px] text-slate-400 uppercase font-semibold">Timeline</span>
                <span className="text-xl font-extrabold text-indigo-400">{totalDays} Days</span>
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
                      ? 'bg-sky-500/10 border-sky-500 text-sky-300 font-semibold shadow-md'
                      : 'bg-slate-900/40 light:bg-slate-100/50 border-slate-800 light:border-slate-200 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <span className="text-xs">{item.label}</span>
                  <div className={`w-5 h-5 rounded-md flex items-center justify-center text-xs ${isSelected ? 'bg-sky-500 text-white' : 'border border-slate-700'}`}>
                    {isSelected && <Check className="w-3.5 h-3.5" />}
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800 light:border-slate-200">
            <span className="text-xs text-slate-400">
              * Final quote subject to detailed project requirements discussion.
            </span>
            <a
              href="#contact"
              className="px-5 py-2 text-xs font-semibold text-white bg-gradient-to-r from-sky-500 to-indigo-600 rounded-xl shadow-md hover:scale-105 transition-transform flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5" /> Request Exact Quote for Selected Scope
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
