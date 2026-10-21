import React from 'react';
import { Sparkles, BookOpen, Cpu, BrainCircuit, ArrowRight } from 'lucide-react';

export default function AILearning() {
  const learningTopics = [
    {
      icon: BrainCircuit,
      title: "Retrieval-Augmented Generation (RAG)",
      description: "Completed a RAG implementation combining document retrieval with language model generation for context-aware AI responses."
    },
    {
      icon: Cpu,
      title: "LLM Application Fundamentals",
      description: "Studying large language model architectures, prompt engineering techniques, and practical integration patterns for analytics workflows."
    },
    {
      icon: Sparkles,
      title: "AI-Assisted Data Analysis",
      description: "Exploring how generative AI can augment traditional data analysis by automating exploratory insights, natural-language querying, and report generation."
    }
  ];

  return (
    <section id="ai-learning" className="py-20 border-t border-slate-800/60 dark:border-slate-800/60 light:border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-semibold text-teal-400 dark:text-teal-400 light:text-teal-700 bg-teal-950/40 dark:bg-teal-950/40 light:bg-teal-50 border border-teal-500/20 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ongoing Development</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight">
            Exploring AI-Powered Analytics
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-2xl">
            Beyond traditional analytics, I am expanding my knowledge into Generative AI and AI-driven data workflows. This section reflects my learning journey and current areas of exploration — not production-deployed systems.
          </p>
        </div>

        {/* Learning Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {learningTopics.map((topic, idx) => {
            const Icon = topic.icon;
            return (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-navy-900/50 dark:bg-navy-900/50 light:bg-white border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 hover:border-teal-500/30 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500/15 to-cyan-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 mb-2">
                  {topic.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
                  {topic.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Disclaimer Footer */}
        <div className="mt-8 p-4 rounded-xl bg-amber-500/5 border border-amber-500/15 flex items-start gap-3 max-w-2xl">
          <BookOpen className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
            <strong className="text-amber-400">Learning & Exploration:</strong> These topics reflect my active learning interests and initial implementations. I am building foundational competency in GenAI and AI-assisted analytics as part of my continuous professional development.
          </p>
        </div>

      </div>
    </section>
  );
}
