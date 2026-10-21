import React from 'react';
import { Eye, ExternalLink, BarChart3, Layout } from 'lucide-react';

export default function ProjectCardVisual({ project }) {
  const imgSrc = project.dashboardImg;

  return (
    <div className="w-full rounded-xl overflow-hidden border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 bg-navy-950/80 dark:bg-navy-950/80 light:bg-slate-50 relative group">
      
      {/* Dashboard Window Header Bar */}
      <div className="flex items-center justify-between px-3 py-2 bg-navy-900/90 dark:bg-navy-900/90 light:bg-slate-200/80 border-b border-slate-800 dark:border-slate-800 light:border-slate-200">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
          <span className="ml-2 text-[10px] font-mono font-medium text-slate-400 dark:text-slate-400 light:text-slate-600 truncate max-w-[140px] sm:max-w-[200px]">
            {project.dashboardType || 'Interactive Analytics'}
          </span>
        </div>
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold bg-teal-500/15 text-teal-400 dark:text-teal-400 light:text-teal-700 border border-teal-500/30">
          <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
          Real Dashboard
        </span>
      </div>

      {/* Dashboard Screenshot Display */}
      <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-navy-950">
        {imgSrc ? (
          <img
            src={imgSrc}
            alt={`${project.title} Dashboard`}
            className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center">
            <Layout className="w-8 h-8 text-slate-600 mb-2" />
            <span className="text-xs text-slate-400 font-medium">Dashboard Preview</span>
          </div>
        )}

        {/* Hover Gradient Overlay & Quick CTA */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-teal-500 text-slate-950 text-xs font-bold shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            <Eye className="w-3.5 h-3.5" />
            View Full Analysis
          </span>
        </div>
      </div>

      {/* Card Visual Footer Meta */}
      <div className="px-3 py-1.5 bg-navy-950/90 dark:bg-navy-950/90 light:bg-slate-100 border-t border-slate-800/60 dark:border-slate-800/60 light:border-slate-200/60 flex items-center justify-between text-[10px] text-slate-400 dark:text-slate-400 light:text-slate-500 font-mono">
        <span className="truncate">{project.category}</span>
        <span className="text-teal-400 font-semibold shrink-0">Click to expand</span>
      </div>

    </div>
  );
}
