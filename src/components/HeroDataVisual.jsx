import React, { useState } from 'react';
import { AreaChart, Area, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
import { Activity, Database, TrendingUp, Layers, CheckCircle2 } from 'lucide-react';

const mockWorkflowData = [
  { stage: 'Raw Ingestion', quality: 62, volume: '128K' },
  { stage: 'Data Validation', quality: 78, volume: '124K' },
  { stage: 'SQL & EDA', quality: 89, volume: '124K' },
  { stage: 'DAX Modeling', quality: 96, volume: '9 KPIs' },
  { stage: 'Decision Impact', quality: 100, volume: 'Actionable' },
];

export default function HeroDataVisual() {
  const [activeMetric, setActiveMetric] = useState('pipeline');

  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Decorative ambient glow */}
      <div className="absolute -inset-1.5 bg-gradient-to-r from-teal-500/20 via-cyan-500/10 to-indigo-500/20 rounded-2xl blur-xl opacity-75 dark:opacity-50 pointer-events-none" />

      {/* Main Container Card */}
      <div className="relative rounded-2xl border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 bg-navy-900/90 dark:bg-navy-900/90 light:bg-white p-5 sm:p-6 shadow-2xl backdrop-blur-sm">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800 dark:border-slate-800 light:border-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400">
              <Activity className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-semibold text-slate-200 dark:text-slate-200 light:text-slate-900">
                Analytics Pipeline
              </div>
              <div className="text-[11px] text-slate-400 dark:text-slate-400 light:text-slate-500">
                Data Exploration to Strategic Action
              </div>
            </div>
          </div>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Verified Pipeline
          </span>
        </div>

        {/* Dynamic Sparkline Visual */}
        <div className="my-5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-slate-400 dark:text-slate-400 light:text-slate-600">
              Analytical Precision & Transformation Flow
            </span>
            <span className="text-xs font-mono text-teal-400">
              EDA &rarr; Power BI &rarr; Insights
            </span>
          </div>

          <div className="h-32 w-full pt-2">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={mockWorkflowData}>
                <defs>
                  <linearGradient id="heroGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#06B6D4" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#06B6D4" stopOpacity={0.0} />
                  </linearGradient>
                </defs>
                <XAxis 
                  dataKey="stage" 
                  hide 
                />
                <Tooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="bg-navy-950/95 border border-slate-700 p-2 rounded-lg text-xs shadow-lg">
                          <p className="font-semibold text-slate-200">{payload[0].payload.stage}</p>
                          <p className="text-teal-400 font-mono">Stage Output: {payload[0].payload.volume}</p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="quality"
                  stroke="#06B6D4"
                  strokeWidth={2.5}
                  fillOpacity={1}
                  fill="url(#heroGradient)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Analytical Workflow Steps */}
        <div className="grid grid-cols-3 gap-2.5 pt-2">
          <div className="p-2.5 rounded-xl bg-navy-950/60 dark:bg-navy-950/60 light:bg-slate-50 border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200/80">
            <div className="flex items-center gap-1.5 text-teal-400 mb-1">
              <Database className="w-3.5 h-3.5" />
              <span className="text-[11px] font-semibold text-slate-300 dark:text-slate-300 light:text-slate-800">Cleaning</span>
            </div>
            <p className="text-[10px] text-slate-400 dark:text-slate-400 light:text-slate-500 leading-tight">
              Python & SQL deduplication
            </p>
          </div>

          <div className="p-2.5 rounded-xl bg-navy-950/60 dark:bg-navy-950/60 light:bg-slate-50 border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200/80">
            <div className="flex items-center gap-1.5 text-teal-400 mb-1">
              <Layers className="w-3.5 h-3.5" />
              <span className="text-[11px] font-semibold text-slate-300 dark:text-slate-300 light:text-slate-800">Modeling</span>
            </div>
            <p className="text-[10px] text-slate-400 dark:text-slate-400 light:text-slate-500 leading-tight">
              Power BI DAX & Star Schemas
            </p>
          </div>

          <div className="p-2.5 rounded-xl bg-navy-950/60 dark:bg-navy-950/60 light:bg-slate-50 border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200/80">
            <div className="flex items-center gap-1.5 text-teal-400 mb-1">
              <TrendingUp className="w-3.5 h-3.5" />
              <span className="text-[11px] font-semibold text-slate-300 dark:text-slate-300 light:text-slate-800">Outcome</span>
            </div>
            <p className="text-[10px] text-slate-400 dark:text-slate-400 light:text-slate-500 leading-tight">
              Actionable Business Insights
            </p>
          </div>
        </div>

        {/* Caption */}
        <div className="mt-4 pt-3 border-t border-slate-800/60 dark:border-slate-800/60 light:border-slate-100 flex items-center justify-between text-[11px] text-slate-400 dark:text-slate-400 light:text-slate-500">
          <span className="flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
            Decision-Ready Dashboards
          </span>
          <span className="font-mono text-slate-400">Illustrative Pipeline</span>
        </div>
      </div>
    </div>
  );
}
