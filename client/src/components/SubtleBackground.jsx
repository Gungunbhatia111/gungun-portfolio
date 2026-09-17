import React from 'react';

export const SubtleBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Subtle Dot Pattern Overlay */}
      <div className="absolute inset-0 bg-dot-pattern opacity-60"></div>
      
      {/* Subtle Ambient Radial Glow Gradients */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-600/10 light:bg-indigo-300/24 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-blue-600/10 light:bg-sky-300/24 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-emerald-600/10 light:bg-emerald-200/28 rounded-full blur-3xl"></div>
    </div>
  );
};
