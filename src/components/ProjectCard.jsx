import React from 'react';
import { ArrowUpRight, Github, ExternalLink, Info, TrendingUp, FileText } from 'lucide-react';
import ProjectCardVisual from './ProjectCardVisual';

export default function ProjectCard({ project, onOpenDetails }) {
  return (
    <div className="group rounded-2xl bg-navy-900/60 dark:bg-navy-900/60 light:bg-white border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 shadow-sm hover:shadow-card-dark transition-all duration-300 flex flex-col justify-between overflow-hidden hover:border-teal-500/40">
      
      {/* Top Header & Visual Area */}
      <div className="p-5 sm:p-6 space-y-4">
        
        {/* Category Badge & Key Metric */}
        <div className="flex items-center justify-between gap-2">
          <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold uppercase tracking-wider text-teal-400 dark:text-teal-400 light:text-teal-700 bg-teal-950/40 dark:bg-teal-950/40 light:bg-teal-50 border border-teal-500/20 truncate">
            {project.category}
          </span>
          <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-teal-400 shrink-0">
            <TrendingUp className="w-3.5 h-3.5 text-teal-400" />
            <span>{project.highlightMetric}</span>
          </div>
        </div>

        {/* Title & Subtitle */}
        <div>
          <h3 className="text-xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 group-hover:text-teal-300 dark:group-hover:text-teal-300 light:group-hover:text-teal-600 transition-colors">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-500 mt-1 font-medium line-clamp-1">
            {project.subtitle}
          </p>
        </div>

        {/* Clickable Real Dashboard Preview Window */}
        <div 
          onClick={() => onOpenDetails(project)}
          className="cursor-pointer"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onOpenDetails(project); }}
          aria-label={`Open dashboard details for ${project.title}`}
        >
          <ProjectCardVisual project={project} />
        </div>

        {/* Summary Description */}
        <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed line-clamp-2">
          {project.summary}
        </p>

        {/* Verified Metrics Grid */}
        <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-100">
          {project.verifiedMetrics.slice(0, 2).map((m, idx) => (
            <div key={idx} className="p-2 rounded-lg bg-navy-950/50 dark:bg-navy-950/50 light:bg-slate-50 border border-slate-800/60 dark:border-slate-800/60 light:border-slate-200/60">
              <span className="block text-[10px] uppercase font-semibold text-slate-500 dark:text-slate-500 light:text-slate-400 truncate">
                {m.label}
              </span>
              <span className="text-xs sm:text-sm font-bold font-mono text-slate-200 dark:text-slate-200 light:text-slate-800">
                {m.value}
              </span>
            </div>
          ))}
        </div>

        {/* Technology Pills */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-800/50 dark:bg-slate-800/50 light:bg-slate-100 text-slate-400 dark:text-slate-400 light:text-slate-600"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-0.5 rounded text-[11px] font-medium text-slate-500">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>
      </div>

      {/* Card Action Buttons Footer */}
      <div className="px-5 py-3.5 bg-navy-950/50 dark:bg-navy-950/50 light:bg-slate-50 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 flex items-center justify-between gap-2">
        <button
          type="button"
          onClick={() => onOpenDetails(project)}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-teal-400 hover:text-teal-300 dark:text-teal-400 light:text-teal-700 transition-colors py-1"
        >
          <Info className="w-4 h-4" />
          <span>View Details</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-2">
          {project.dashboardPdf && (
            <a
              href={project.dashboardPdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-teal-500/30 bg-teal-500/10 text-teal-400 text-xs font-semibold hover:bg-teal-500/20 transition-all"
              title="Open Dashboard PDF"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>PDF</span>
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-slate-800 dark:border-slate-800 light:border-slate-200 bg-navy-900/60 dark:bg-navy-900/60 light:bg-white text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-teal-400 transition-colors"
              title="View on GitHub"
              aria-label="GitHub Repository"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

    </div>
  );
}
