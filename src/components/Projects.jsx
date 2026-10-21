import React, { useState } from 'react';
import { projectsData } from '../data/projectsData';
import ProjectCard from './ProjectCard';
import ProjectDetails from './ProjectDetails';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 border-t border-slate-800/60 dark:border-slate-800/60 light:border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-semibold text-teal-400 dark:text-teal-400 light:text-teal-700 bg-teal-950/40 dark:bg-teal-950/40 light:bg-teal-50 border border-teal-500/20 mb-3">
            <span>Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight">
            Featured Projects
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-2xl">
            End-to-end data analytics projects demonstrating business problem identification, SQL analysis, statistical modeling, KPI engineering, and interactive dashboard design.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 items-start">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenDetails={setSelectedProject}
            />
          ))}
        </div>

      </div>

      {/* Project Details Slide-over */}
      {selectedProject && (
        <ProjectDetails
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
