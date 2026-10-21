import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Building2 } from 'lucide-react';
import { experienceData } from '../data/experienceData';

export default function Experience() {
  return (
    <section id="experience" className="py-20 border-t border-slate-800/60 dark:border-slate-800/60 light:border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-semibold text-teal-400 dark:text-teal-400 light:text-teal-700 bg-teal-950/40 dark:bg-teal-950/40 light:bg-teal-50 border border-teal-500/20 mb-3">
            <span>Work History</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight">
            Internship Experience
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400 dark:text-slate-400 light:text-slate-600">
            Real-world supply chain dataset modeling, exploratory data analysis, and Power BI dashboard engineering.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-8 border-l border-slate-800 dark:border-slate-800 light:border-slate-300 space-y-12">
          {experienceData.map((exp) => (
            <div key={exp.id} className="relative group">
              
              {/* Timeline Indicator Node */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-navy-950 dark:bg-navy-950 light:bg-white border-2 border-teal-400 flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
              </div>

              {/* Experience Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-navy-900/60 dark:bg-navy-900/60 light:bg-white border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 shadow-sm transition-all duration-200 hover:border-teal-500/30">
                
                {/* Header: Role, Company, Period */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-slate-800 dark:border-slate-800 light:border-slate-100">
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-semibold uppercase tracking-wider text-teal-400 dark:text-teal-400 light:text-teal-700 bg-teal-950/40 dark:bg-teal-950/40 light:bg-teal-50 border border-teal-500/20 mb-2">
                      {exp.type}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-sm font-medium text-slate-300 dark:text-slate-300 light:text-slate-700 mt-1">
                      <Building2 className="w-4 h-4 text-teal-400" />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end text-xs text-slate-400 dark:text-slate-400 light:text-slate-500 gap-1">
                    <span className="inline-flex items-center gap-1.5 font-medium">
                      <Calendar className="w-3.5 h-3.5 text-teal-400" />
                      {exp.duration}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Summary */}
                <p className="mt-4 text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed font-medium">
                  {exp.summary}
                </p>

                {/* Bullet Points */}
                <div className="mt-5 space-y-3">
                  <h4 className="text-xs uppercase tracking-wider font-bold text-slate-400 dark:text-slate-400 light:text-slate-500">
                    Key Deliverables & Analysis
                  </h4>
                  <ul className="space-y-2.5">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Small Technology Tags */}
                <div className="mt-6 pt-5 border-t border-slate-800 dark:border-slate-800 light:border-slate-100 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-500 light:text-slate-400 mr-1">
                    Stack:
                  </span>
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-navy-950 dark:bg-navy-950 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-200 text-slate-300 dark:text-slate-300 light:text-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
