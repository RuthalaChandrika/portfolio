import React, { useEffect, useRef, useState } from 'react';
import { X, Github, ExternalLink, CheckCircle2, AlertTriangle, Lightbulb, ArrowRight, FileText, Maximize2, Layout, Database, Layers } from 'lucide-react';

export default function ProjectDetails({ project, onClose }) {
  const overlayRef = useRef(null);
  const panelRef = useRef(null);
  const [viewMode, setViewMode] = useState('image'); // 'image' or 'pdf'

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleEsc = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleEsc);
    panelRef.current?.focus();
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) onClose();
  };

  const s = project.sections;

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-md flex justify-end"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} Details`}
    >
      <div
        ref={panelRef}
        tabIndex={-1}
        className="w-full max-w-4xl h-full overflow-y-auto bg-navy-950 dark:bg-navy-950 light:bg-white border-l border-slate-800 dark:border-slate-800 light:border-slate-200 shadow-2xl focus:outline-none"
      >
        {/* Sticky Header */}
        <div className="sticky top-0 z-20 flex items-start justify-between p-5 sm:p-6 bg-navy-950/95 dark:bg-navy-950/95 light:bg-white/95 backdrop-blur-md border-b border-slate-800 dark:border-slate-800 light:border-slate-200">
          <div className="pr-4">
            <span className="block text-xs uppercase tracking-wider font-extrabold text-teal-400 dark:text-teal-400 light:text-teal-600 mb-1">
              {project.category}
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 leading-snug">
              {project.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-500 mt-0.5">
              {project.subtitle}
            </p>
          </div>
          <button
            onClick={onClose}
            type="button"
            className="shrink-0 p-2.5 rounded-xl border border-slate-700 bg-navy-900/80 text-slate-300 hover:text-white hover:border-rose-500/50 transition-colors"
            aria-label="Close project details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-8 space-y-8">

          {/* REAL DASHBOARD SHOWCASE FRAME */}
          <div className="rounded-2xl overflow-hidden border border-slate-700/80 dark:border-slate-800 light:border-slate-300 bg-navy-900/90 dark:bg-navy-900/90 light:bg-slate-100 shadow-xl">
            
            {/* Window Top Bar with Actions */}
            <div className="flex flex-wrap items-center justify-between px-4 py-3 bg-navy-900 dark:bg-navy-900 light:bg-slate-200 border-b border-slate-800 dark:border-slate-800 light:border-slate-300 gap-3">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                <span className="ml-2 text-xs font-mono font-bold text-slate-300 dark:text-slate-300 light:text-slate-800">
                  {project.dashboardType || 'Real Power BI Dashboard'}
                </span>
              </div>

              {/* View Switcher / Quick Actions */}
              <div className="flex items-center gap-2">
                {project.dashboardPdf && (
                  <div className="inline-flex rounded-lg border border-slate-700 dark:border-slate-700 light:border-slate-300 p-0.5 bg-navy-950 dark:bg-navy-950 light:bg-white text-xs">
                    <button
                      type="button"
                      onClick={() => setViewMode('image')}
                      className={`px-2.5 py-1 rounded-md font-semibold transition-colors ${
                        viewMode === 'image'
                          ? 'bg-teal-500 text-slate-950'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      Image
                    </button>
                    <button
                      type="button"
                      onClick={() => setViewMode('pdf')}
                      className={`px-2.5 py-1 rounded-md font-semibold transition-colors ${
                        viewMode === 'pdf'
                          ? 'bg-teal-500 text-slate-950'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      Interactive PDF
                    </button>
                  </div>
                )}

                <a
                  href={project.dashboardImg}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-700 dark:border-slate-700 light:border-slate-300 bg-navy-950/80 dark:bg-navy-950/80 light:bg-white text-slate-300 dark:text-slate-300 light:text-slate-700 text-xs font-semibold hover:text-teal-400 transition-colors"
                  title="Open full resolution in new tab"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Fullscreen</span>
                </a>
              </div>
            </div>

            {/* Dashboard Display Area */}
            <div className="relative bg-navy-950 min-h-[300px] flex items-center justify-center overflow-hidden">
              {viewMode === 'image' || !project.dashboardPdf ? (
                <a
                  href={project.dashboardImg}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block cursor-zoom-in"
                  title="Click to view full-resolution image"
                >
                  <img
                    src={project.dashboardImg}
                    alt={`${project.title} Real Dashboard`}
                    className="w-full h-auto max-h-[520px] object-contain mx-auto"
                    loading="eager"
                  />
                </a>
              ) : (
                <iframe
                  src={`${project.dashboardPdf}#toolbar=0&navpanes=0&view=FitH`}
                  className="w-full h-[520px] border-none"
                  title={`${project.title} PDF Dashboard`}
                />
              )}
            </div>

            {/* Frame Caption */}
            <div className="px-4 py-2 bg-navy-950/90 dark:bg-navy-950/90 light:bg-slate-100 border-t border-slate-800 dark:border-slate-800 light:border-slate-200 flex items-center justify-between text-xs text-slate-400 dark:text-slate-400 light:text-slate-500">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal-400" />
                Verified project analytics and dashboard artifact
              </span>
              {project.dashboardPdf && (
                <a
                  href={project.dashboardPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-400 hover:underline font-semibold flex items-center gap-1"
                >
                  <FileText className="w-3.5 h-3.5" /> Download PDF
                </a>
              )}
            </div>

          </div>

          {/* Verified Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {project.verifiedMetrics.map((m, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-navy-900/60 dark:bg-navy-900/60 light:bg-slate-50 border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 text-center">
                <span className="block text-[10px] uppercase font-bold text-slate-500 dark:text-slate-500 light:text-slate-400 mb-1">{m.label}</span>
                <span className="text-base sm:text-lg font-extrabold font-mono text-teal-400 dark:text-teal-400 light:text-teal-600">{m.value}</span>
              </div>
            ))}
          </div>

          {/* Technology Stack Pills */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((t) => (
              <span key={t} className="px-3 py-1 rounded-lg text-xs font-semibold bg-teal-950/30 dark:bg-teal-950/30 light:bg-teal-50 text-teal-400 dark:text-teal-400 light:text-teal-700 border border-teal-500/20">
                {t}
              </span>
            ))}
          </div>

          {/* Repository Links */}
          <div className="flex items-center gap-3 pb-2 border-b border-slate-800 dark:border-slate-800 light:border-slate-200">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 dark:bg-navy-900 light:bg-slate-100 border border-slate-700 dark:border-slate-700 light:border-slate-300 text-slate-200 dark:text-slate-200 light:text-slate-800 text-sm font-bold hover:border-teal-500/40 hover:text-teal-400 transition-all"
              >
                <Github className="w-4 h-4" />
                <span>View GitHub Repository</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            )}
          </div>

          {/* Detailed Workflow Sections */}
          {s.businessProblem && (
            <DetailSection title="Business Problem" icon={AlertTriangle}>
              <p className="text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">{s.businessProblem}</p>
            </DetailSection>
          )}

          {s.dataPreparation && (
            <DetailSection title="Data Preparation & Cleaning" icon={Database}>
              <p className="text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">{s.dataPreparation}</p>
            </DetailSection>
          )}

          {s.sqlAnalysis && (
            <DetailSection title="SQL Analysis & Queries" icon={ArrowRight}>
              <p className="text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">{s.sqlAnalysis}</p>
            </DetailSection>
          )}

          {s.edaFindings && (
            <DetailSection title="Exploratory Data Analysis" icon={ArrowRight}>
              <p className="text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">{s.edaFindings}</p>
            </DetailSection>
          )}

          {s.modelPipeline && (
            <DetailSection title="Model Pipeline" icon={Layers}>
              <p className="text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">{s.modelPipeline}</p>
            </DetailSection>
          )}

          {s.evaluationMetrics && (
            <DetailSection title="Evaluation Metrics" icon={ArrowRight}>
              <p className="text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">{s.evaluationMetrics}</p>
            </DetailSection>
          )}

          {s.kpiDevelopment && (
            <DetailSection title="KPI Development & DAX Modeling" icon={ArrowRight}>
              <p className="text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">{s.kpiDevelopment}</p>
            </DetailSection>
          )}

          {s.dashboardDesign && (
            <DetailSection title="Dashboard Architecture & Design" icon={Layout}>
              <p className="text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">{s.dashboardDesign}</p>
            </DetailSection>
          )}

          {s.dashboardAndApp && (
            <DetailSection title="Dashboard & Deployment" icon={Layout}>
              <p className="text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">{s.dashboardAndApp}</p>
            </DetailSection>
          )}

          {s.keyFindings && (
            <DetailSection title="Key Findings & Discovered Patterns" icon={CheckCircle2}>
              <ul className="space-y-2.5">
                {s.keyFindings.map((f, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </DetailSection>
          )}

          {s.businessRecommendations && (
            <DetailSection title="Actionable Business Recommendations" icon={Lightbulb}>
              <ul className="space-y-3">
                {s.businessRecommendations.map((r, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
                    <Lightbulb className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </DetailSection>
          )}

          {s.customerRetentionActions && (
            <DetailSection title="Customer Retention Actions" icon={Lightbulb}>
              <ul className="space-y-3">
                {s.customerRetentionActions.map((a, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
                    <Lightbulb className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </DetailSection>
          )}

        </div>
      </div>
    </div>
  );
}

function DetailSection({ title, icon: Icon, children }) {
  return (
    <div className="space-y-2.5">
      <h3 className="flex items-center gap-2 text-xs font-bold text-slate-200 dark:text-slate-200 light:text-slate-900 uppercase tracking-wider">
        <Icon className="w-4 h-4 text-teal-400" />
        {title}
      </h3>
      <div className="pl-6 border-l-2 border-teal-500/20">{children}</div>
    </div>
  );
}
