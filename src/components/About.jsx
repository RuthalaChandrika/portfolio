import React from 'react';
import { Target, LayoutDashboard, Brain, CheckCircle, GraduationCap, MapPin } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: Target,
      title: "Business-Focused Analysis",
      description: "Root-cause diagnostics connecting raw numbers to operational margins, supplier metrics, and churn prevention."
    },
    {
      icon: LayoutDashboard,
      title: "Interactive Dashboard Development",
      description: "Structured Power BI reporting models using DAX measures, star schemas, dynamic cross-filtering, and executive views."
    },
    {
      icon: Brain,
      title: "Continuous AI/ML Learning",
      description: "Actively studying retrieval-augmented generation (RAG) pipelines, LLM applications, and modern predictive workflows."
    }
  ];

  return (
    <section id="about" className="py-20 border-t border-slate-800/60 dark:border-slate-800/60 light:border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-semibold text-teal-400 dark:text-teal-400 light:text-teal-700 bg-teal-950/40 dark:bg-teal-950/40 light:bg-teal-50 border border-teal-500/20 mb-3">
            <span>Profile & Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight">
            About Me
          </h2>
        </div>

        {/* Narrative & Highlights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Narrative */}
          <div className="lg:col-span-7 space-y-5">
            <div className="p-6 sm:p-8 rounded-2xl bg-navy-900/60 dark:bg-navy-900/60 light:bg-white border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 shadow-sm leading-relaxed">
              <p className="text-base sm:text-lg text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed font-normal">
                “I am an Information Technology undergraduate with hands-on experience in data analytics, exploratory data analysis, business KPI development, and interactive dashboard creation. I enjoy translating complex datasets into clear business insights. Through my internship and analytics projects, I have worked with data cleaning, SQL analysis, Power BI dashboards, statistical techniques, and machine learning. I am continuing to expand my skills in AI-powered analytics and Generative AI.”
              </p>

              {/* Quick Meta Stats */}
              <div className="mt-6 pt-6 border-t border-slate-800 dark:border-slate-800 light:border-slate-100 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs">
                <div>
                  <span className="block text-slate-500 dark:text-slate-500 light:text-slate-400 uppercase tracking-wider font-semibold">Specialization</span>
                  <span className="font-medium text-slate-200 dark:text-slate-200 light:text-slate-800">Data & BI Analytics</span>
                </div>
                <div>
                  <span className="block text-slate-500 dark:text-slate-500 light:text-slate-400 uppercase tracking-wider font-semibold">Academic Merit</span>
                  <span className="font-medium text-slate-200 dark:text-slate-200 light:text-slate-800">8.01 CGPA (B.Tech IT)</span>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <span className="block text-slate-500 dark:text-slate-500 light:text-slate-400 uppercase tracking-wider font-semibold">Primary Tools</span>
                  <span className="font-medium text-teal-400 dark:text-teal-400 light:text-teal-600">Power BI, SQL, Python</span>
                </div>
              </div>
            </div>
          </div>

          {/* Three Compact Highlights */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xs uppercase tracking-wider font-bold text-slate-400 dark:text-slate-400 light:text-slate-500 mb-2">
              Key Value Pillars
            </h3>
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-navy-900/40 dark:bg-navy-900/40 light:bg-white border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 hover:border-teal-500/30 transition-all duration-200"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 shrink-0 mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
