import React from 'react';
import { ArrowDown, FileDown, MapPin, Sparkles, Send } from 'lucide-react';
import { heroSkills } from '../data/skillsData';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center pt-24 pb-16 md:pt-28 md:pb-20 overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[400px] bg-teal-500/10 dark:bg-teal-500/10 light:bg-teal-500/5 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Essential Profile & Info */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-teal-500/30 bg-teal-950/40 dark:bg-teal-950/40 light:bg-teal-50 text-teal-400 dark:text-teal-400 light:text-teal-700 text-xs font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
              <span>Available for Data Analyst & AI Analytics Roles</span>
            </div>

            {/* Name & Title */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight leading-tight">
                CHANDRIKA RUTHALA
              </h1>
              <div className="flex flex-wrap items-center gap-2.5 text-lg sm:text-xl font-semibold text-teal-400 dark:text-teal-400 light:text-teal-600">
                <span>Data Analyst</span>
                <span className="text-slate-600 dark:text-slate-600 light:text-slate-300">•</span>
                <span>AI & Data Analytics Enthusiast</span>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 font-medium">
              <MapPin className="w-4 h-4 text-teal-400 shrink-0" />
              <span>Visakhapatnam, Andhra Pradesh, India</span>
            </div>

            {/* Headline */}
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-200 dark:text-slate-200 light:text-slate-800 tracking-normal leading-snug">
              “Turning Data Into Insights. Insights Into Impact.”
            </h2>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-2xl leading-relaxed">
              I use Python, SQL, Power BI, and statistical analysis to uncover business insights, build meaningful dashboards, and support data-driven decisions.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm tracking-wide shadow-lg shadow-teal-500/20 hover:shadow-teal-500/30 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-accent"
              >
                <span>Explore My Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-slate-700/80 dark:border-slate-800 light:border-slate-300 bg-navy-900/60 dark:bg-navy-900/60 light:bg-white hover:bg-slate-800/60 dark:hover:bg-navy-800 light:hover:bg-slate-50 text-slate-200 dark:text-slate-200 light:text-slate-800 font-semibold text-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-accent"
              >
                <FileDown className="w-4 h-4 text-teal-400" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-400 dark:text-teal-400 light:text-teal-600 hover:text-teal-300 transition-colors px-2 py-1 underline-offset-4 hover:underline"
              >
                <span>Let's Connect</span>
                <ArrowDown className="w-3.5 h-3.5 -rotate-45" />
              </a>
            </div>

            {/* Core Competencies Skill Chips */}
            <div className="pt-4 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200/80">
              <div className="text-xs uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-500 light:text-slate-400 mb-2.5">
                Core Competencies
              </div>
              <div className="flex flex-wrap gap-2">
                {heroSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-lg text-xs font-medium border border-slate-800 dark:border-slate-800 light:border-slate-200 bg-navy-900/70 dark:bg-navy-900/70 light:bg-slate-100 text-slate-300 dark:text-slate-300 light:text-slate-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Full Portrait Photo in Premium Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group max-w-sm sm:max-w-md w-full">
              
              {/* Subtle accent glow behind photo */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-teal-500/25 via-cyan-500/10 to-indigo-500/20 rounded-3xl blur-xl opacity-75 dark:opacity-60 pointer-events-none group-hover:opacity-90 transition-opacity duration-300" />

              {/* Card Container */}
              <div className="relative rounded-3xl overflow-hidden border border-slate-700/80 dark:border-slate-800 light:border-slate-300 bg-navy-900 dark:bg-navy-900 light:bg-white shadow-2xl">
                
                {/* Full Photo */}
                <div className="relative aspect-[4/4.5] w-full overflow-hidden bg-navy-950">
                  <img
                    src="/chandrika.jpg"
                    alt="Chandrika Ruthala — Data Analyst"
                    className="w-full h-full object-cover object-center transform group-hover:scale-[1.02] transition-transform duration-500"
                    loading="eager"
                  />
                  {/* Subtle gradient vignette at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent" />
                  
                  {/* Floating Identity Tag */}
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-navy-950/85 dark:bg-navy-950/85 light:bg-white/95 backdrop-blur-md border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 shadow-lg flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-wider font-extrabold text-teal-400 dark:text-teal-400 light:text-teal-600">
                        Chandrika Ruthala
                      </p>
                      <p className="text-[11px] text-slate-300 dark:text-slate-300 light:text-slate-700 font-medium">
                        B.Tech IT • 8.01 CGPA
                      </p>
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-teal-500/10 text-teal-400 border border-teal-500/20">
                      Analytics Ready
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
