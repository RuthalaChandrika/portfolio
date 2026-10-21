import React from 'react';
import { Code2, Database, LayoutDashboard, BarChart3, Cpu, TrendingUp, Wrench, Sparkles } from 'lucide-react';
import { skillsCategories } from '../data/skillsData';

const iconMap = {
  Code2, Database, LayoutDashboard, BarChart3, Cpu, TrendingUp, Wrench, Sparkles
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 border-t border-slate-800/60 dark:border-slate-800/60 light:border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-semibold text-teal-400 dark:text-teal-400 light:text-teal-700 bg-teal-950/40 dark:bg-teal-950/40 light:bg-teal-50 border border-teal-500/20 mb-3">
            <span>Technical Proficiency</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight">
            Skills & Technologies
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400 dark:text-slate-400 light:text-slate-600">
            Technologies, analytical frameworks, and statistical methods I have worked with across projects and coursework.
          </p>
        </div>

        {/* Skills Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillsCategories.map((category) => {
            const Icon = iconMap[category.icon] || Code2;
            return (
              <div
                key={category.id}
                className="p-5 rounded-2xl bg-navy-900/50 dark:bg-navy-900/50 light:bg-white border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 hover:border-teal-500/30 transition-all duration-200 group"
              >
                {/* Category Icon & Title */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 group-hover:bg-teal-500/15 transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
                    {category.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-[11px] text-slate-500 dark:text-slate-500 light:text-slate-500 leading-relaxed mb-3">
                  {category.description}
                </p>

                {/* Skill Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded text-[11px] font-medium bg-navy-950/70 dark:bg-navy-950/70 light:bg-slate-100 border border-slate-800/60 dark:border-slate-800/60 light:border-slate-200/80 text-slate-300 dark:text-slate-300 light:text-slate-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
