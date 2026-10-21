import React, { useState } from 'react';
import { ExternalLink, FileText, Eye, X, ChevronDown } from 'lucide-react';

/**
 * DashboardPreview — shows a real dashboard asset (PDF or PNG image).
 * PDFs are linked to GitHub for viewing; images are shown inline.
 * The "expanded" inline PDF embed is optional and degraded gracefully.
 */
export default function DashboardPreview({ project }) {
  const [pdfOpen, setPdfOpen] = useState(false);

  const hasDashImg = !!project.realDashboardImg;
  const hasDashPdf = !!project.dashboardPdfUrl;
  const hasLocalPdf = !!project.localDashboardPdf;

  if (!hasDashImg && !hasDashPdf && !hasLocalPdf) return null;

  return (
    <div className="rounded-2xl border border-slate-800/80 dark:border-slate-800/80 bg-navy-950/60 dark:bg-navy-950/60 overflow-hidden">

      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800/80 dark:border-slate-800/80 bg-navy-900/60">
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <span className="text-slate-400 font-mono text-[11px] ml-1">
            {hasDashImg ? 'dashboard-screenshot.png' : 'dashboard.pdf'}
          </span>
        </div>
        <span className="flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          Real Dashboard
        </span>
      </div>

      {/* Real PNG image */}
      {hasDashImg && (
        <div className="relative group">
          <img
            src={project.realDashboardImg}
            alt={`${project.title} Power BI Dashboard`}
            className="w-full object-cover max-h-64 object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-teal-500 text-slate-950 text-xs font-bold shadow-lg"
            >
              <Eye className="w-3.5 h-3.5" /> View Full Size on GitHub
            </a>
          </div>
        </div>
      )}

      {/* Local PDF embed */}
      {hasLocalPdf && (
        <div>
          <button
            type="button"
            onClick={() => setPdfOpen(!pdfOpen)}
            className="w-full flex items-center justify-between px-4 py-3 text-xs font-semibold text-slate-300 hover:text-teal-400 transition-colors"
          >
            <span className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-teal-400" />
              {pdfOpen ? 'Hide Dashboard Preview' : 'Preview Dashboard PDF'}
            </span>
            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${pdfOpen ? 'rotate-180' : ''}`} />
          </button>
          {pdfOpen && (
            <div className="px-4 pb-4">
              <iframe
                src={`${project.localDashboardPdf}#toolbar=0&navpanes=0&view=FitH`}
                className="w-full rounded-xl border border-slate-700/60"
                style={{ height: '420px' }}
                title={`${project.title} Dashboard`}
              />
            </div>
          )}
        </div>
      )}

      {/* GitHub PDF link (no embed) */}
      {!hasDashImg && !hasLocalPdf && hasDashPdf && (
        <div className="px-4 py-5 flex flex-col items-center gap-3 text-center">
          <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-200 mb-1">Interactive Dashboard Available</p>
            <p className="text-xs text-slate-400">View the full Power BI dashboard on GitHub</p>
          </div>
          <a
            href={project.dashboardPdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-bold hover:bg-teal-500/20 transition-all"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            Open Dashboard PDF
          </a>
        </div>
      )}
    </div>
  );
}
