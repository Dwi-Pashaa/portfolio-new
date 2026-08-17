import React, { useState } from 'react';
import { ExternalLink, Github, BookOpen, Quote, Sparkles, Eye, ArrowRight } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { BrutalistButton } from '../common/BrutalistButton';
import { PillBadge } from '../common/PillBadge';
import { ProjectModal } from '../common/ProjectModal';
import { useLanguage } from '../../context/LanguageContext';
import { portfolioData } from '../../data/portfolioData';

export const Projects = () => {
  const { language, t } = useLanguage();
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

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

  return (
    <section id="projects" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-surface border-t-[3px] border-slate-900">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <SectionHeader
          tag={t('projects.sectionTag')}
          title={t('projects.sectionTitle')}
          highlight="Showcase"
          subtitle={t('projects.sectionSubtitle')}
          align="center"
        />

        {/* Category Filter Tabs (With Horizontal Scroll Snap on Mobile) */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {filterOptions.map((opt) => (
            <button
              key={opt.id}
              type="button"
              onClick={() => setFilter(opt.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-display font-black uppercase tracking-wider border-[2.5px] border-slate-900 transition-all shrink-0 cursor-pointer ${
                filter === opt.id
                  ? 'bg-accent-yellow text-slate-900 shadow-brutal translate-x-[-1px] translate-y-[-1px]'
                  : 'bg-slate-100 text-slate-600 hover:bg-white hover:text-slate-900 shadow-brutal-sm'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Projects 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => {
            const title = typeof project.title === 'object' ? project.title[language] : project.title;
            const summary = typeof project.summary === 'object' ? project.summary[language] : project.summary;

            return (
              <div
                key={project.id}
                className="bg-white border-[3.5px] border-slate-900 rounded-3xl p-6 shadow-brutal hover:shadow-brutal-xl transition-all duration-200 flex flex-col justify-between group relative overflow-hidden"
              >
                <div>
                  {/* Top Bar with Badge & Year */}
                  <div className="flex items-center justify-between gap-2 pb-4 mb-4 border-b-2 border-slate-900">
                    <PillBadge color={project.badgeColor || 'bg-brand-blue text-white'} size="sm">
                      {project.categoryLabel}
                    </PillBadge>
                    <span className="text-xs font-mono font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded border border-slate-900">
                      {project.year}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-black text-xl text-slate-900 leading-tight mb-3 group-hover:text-brand-blue transition-colors">
                    {title}
                  </h3>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed mb-5 line-clamp-3">
                    {summary}
                  </p>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.slice(0, 4).map((techItem, techIdx) => (
                      <span
                        key={techIdx}
                        className="px-2.5 py-0.5 text-[11px] font-mono font-bold bg-slate-100 text-slate-800 border border-slate-900 rounded-md"
                      >
                        {techItem}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-2 py-0.5 text-[11px] font-mono font-bold text-slate-500">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Bottom Card Actions */}
                <div className="pt-4 border-t-2 border-slate-900 flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-display font-black uppercase text-slate-900 hover:text-brand-blue transition-colors"
                  >
                    <Eye className="w-4 h-4" />
                    <span>{t('projects.viewDetails')}</span>
                  </button>

                  <div className="flex items-center gap-2">
                    {project.links.demo && (
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-accent-yellow border-2 border-slate-900 shadow-[2px_2px_0px_#0F172A] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all text-slate-900"
                        title="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}

                    {project.links.paper && (
                      <a
                        href={project.links.paper}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-brand-blue border-2 border-slate-900 shadow-[2px_2px_0px_#0F172A] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all text-white"
                        title="View Paper on Google Scholar"
                      >
                        <BookOpen className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Citation & Project Modal */}
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
};
