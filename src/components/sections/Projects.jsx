import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { ProjectModal } from '../common/ProjectModal';
import { useLanguage } from '../../context/LanguageContext';
import { portfolioData } from '../../data/portfolioData';

export const Projects = () => {
  const { language, t } = useLanguage();
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const filterOptions = [
    { id: 'all', label: t('projects.filterAll') },
    { id: 'ai', label: t('projects.filterAi') },
    { id: 'web', label: t('projects.filterWeb') },
    { id: 'edtech', label: t('projects.filterEdtech') },
  ];

  const filteredProjects = portfolioData.projects.filter((project) => {
    if (filter === 'all') return true;
    return project.category === filter;
  });

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  return (
    <section id="projects" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t-2 border-ink">
      <div className="max-w-[1100px] mx-auto">
        
        {/* Section Header */}
        <SectionHeader
          title={t('projects.sectionTitle')}
          subtitle={t('projects.sectionSubtitle')}
          align="center"
        />

        {/* Responsive Clean Aligned Segmented Tab Filters */}
        <div className="flex justify-center mb-10 px-2">
          <div className="flex flex-wrap sm:inline-flex items-center justify-center gap-1.5 p-1.5 bg-surface border-2 border-ink rounded-xl shadow-brutal max-w-full">
            {filterOptions.map((opt) => {
              const isActive = filter === opt.id;
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setFilter(opt.id)}
                  className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-display font-bold transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-accent text-ink border-2 border-ink shadow-[2px_2px_0_#111111]'
                      : 'bg-transparent text-muted hover:text-ink hover:bg-bg border-2 border-transparent'
                  }`}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {displayedProjects.map((project) => {
            const title = typeof project.title === 'object' ? project.title[language] : project.title;
            const summary = typeof project.summary === 'object' ? project.summary[language] : project.summary;

            const categoryBadgeColor = 
              project.category === 'ai' ? 'bg-accent-coral-light' :
              project.category === 'web' ? 'bg-brand-blue-light' :
              project.category === 'edtech' ? 'bg-accent-mint-light' : 'bg-accent-yellow-light';

            return (
              <div
                key={project.id}
                className="bg-surface border-2 border-ink rounded-xl p-6 shadow-brutal flex flex-col justify-between space-y-4 hover:-translate-y-1 hover:shadow-brutal-hover transition-all"
              >
                <div>
                  {/* Meta row: category badge + year */}
                  <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b-2 border-ink">
                    <span className={`inline-block px-3 py-0.5 rounded-full border-2 border-ink text-xs font-display font-bold text-ink ${categoryBadgeColor}`}>
                      {project.categoryLabel}
                    </span>
                    <span className="text-xs font-mono font-bold text-ink bg-bg px-2.5 py-0.5 rounded border-2 border-ink shadow-[1px_1px_0_#111111]">
                      {project.year}
                    </span>
                  </div>

                  {/* Title (H3) */}
                  <h3 className="font-display font-black text-xl text-ink leading-snug mb-2">
                    {title}
                  </h3>

                  {/* Description (max 2-3 lines) */}
                  <p className="text-sm text-muted font-normal leading-relaxed line-clamp-3 mb-4">
                    {summary}
                  </p>

                  {/* Tech stack chip text (max 4) */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.slice(0, 4).map((techItem, techIdx) => (
                      <span
                        key={techIdx}
                        className="border-2 border-ink rounded-full px-2.5 py-0.5 text-xs sm:text-sm font-mono font-semibold bg-bg text-ink shadow-[1px_1px_0_#111111]"
                      >
                        {techItem}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="text-xs sm:text-sm font-mono text-muted self-center">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Bottom: Text Link "Lihat detail →" */}
                <div className="pt-3 border-t-2 border-ink">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 text-sm font-display font-bold text-ink hover:text-brand-blue hover:underline transition-colors cursor-pointer"
                  >
                    <span>{t('projects.viewDetails')}</span>
                    <ArrowRight className="w-4 h-4 text-brand-blue" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All / Show Less Button if > 6 projects */}
        {filteredProjects.length > 6 && (
          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={() => setShowAll(!showAll)}
              className="btn btn--outline text-sm font-bold"
            >
              {showAll ? (language === 'id' ? 'Tampilkan Lebih Sedikit' : 'Show Less') : (language === 'id' ? 'Lihat Semua Proyek' : 'View All Projects')}
            </button>
          </div>
        )}

        {/* Project Modal */}
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
};

