import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { educationData } from '../data/educationData';
import { certificationsData } from '../data/certificationsData';

export default function Education() {
  return (
    <section id="education" className="py-20 border-t border-slate-800/60 dark:border-slate-800/60 light:border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Education */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-semibold text-teal-400 dark:text-teal-400 light:text-teal-700 bg-teal-950/40 dark:bg-teal-950/40 light:bg-teal-50 border border-teal-500/20 mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight">
            Education
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-navy-900/50 dark:bg-navy-900/50 light:bg-white border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 hover:border-teal-500/30 transition-all duration-200"
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-sm font-medium text-slate-300 dark:text-slate-300 light:text-slate-700 mb-2">
                    {edu.institution}
                  </p>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 dark:text-slate-400 light:text-slate-500 mb-3">
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {edu.location}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {edu.duration}
                    </span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-teal-950/40 dark:bg-teal-950/40 light:bg-teal-50 border border-teal-500/20 text-teal-400 dark:text-teal-400 light:text-teal-700 text-sm font-bold">
                    <Award className="w-4 h-4" />
                    {edu.score}
                  </div>
                  {edu.highlights && (
                    <ul className="mt-3 space-y-1">
                      {edu.highlights.map((h, i) => (
                        <li key={i} className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
                          • {h}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-semibold text-teal-400 dark:text-teal-400 light:text-teal-700 bg-teal-950/40 dark:bg-teal-950/40 light:bg-teal-50 border border-teal-500/20 mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Professional Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight">
            Certifications
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {certificationsData.map((cert, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-navy-900/50 dark:bg-navy-900/50 light:bg-white border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 hover:border-teal-500/30 transition-all duration-200"
            >
              <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-800/40 dark:bg-slate-800/40 light:bg-slate-100 border border-slate-700/40 dark:border-slate-700/40 light:border-slate-200 mb-3">
                {cert.category}
              </span>
              <h3 className="text-sm sm:text-base font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 mb-1">
                {cert.title}
              </h3>
              <p className="text-xs font-semibold text-teal-400 dark:text-teal-400 light:text-teal-600 mb-2">
                {cert.issuer}
              </p>
              <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed mb-3">
                {cert.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {cert.skills.slice(0, 4).map((s) => (
                  <span key={s} className="px-2 py-0.5 rounded text-[10px] font-medium bg-navy-950/70 dark:bg-navy-950/70 light:bg-slate-100 border border-slate-800/60 dark:border-slate-800/60 light:border-slate-200 text-slate-300 dark:text-slate-300 light:text-slate-700">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
