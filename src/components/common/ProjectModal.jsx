import React, { useState, useEffect } from 'react';
import { X, ExternalLink, Github, BookOpen, Copy, Check, Quote } from 'lucide-react';
import { BrutalistButton } from './BrutalistButton';
import { useLanguage } from '../../context/LanguageContext';

export const ProjectModal = ({ project, isOpen, onClose }) => {
  const { language, t } = useLanguage();
  const [copiedType, setCopiedType] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const title = typeof project.title === 'object' ? project.title[language] : project.title;
  const abstract = typeof project.abstract === 'object' ? project.abstract[language] : project.abstract;
  const summary = typeof project.summary === 'object' ? project.summary[language] : project.summary;

  const handleCopyCitation = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-ink/50 transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-surface border-2 border-ink rounded-lg shadow-brutal overflow-hidden flex flex-col z-10 animate-in fade-in zoom-in-95 duration-150">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b-2 border-ink bg-bg">
          <div className="flex items-center gap-3">
            <span className="chip">
              {project.categoryLabel}
            </span>
            {project.year && (
              <span className="text-sm font-mono text-muted">
                {project.year}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-surface hover:bg-yellow-50 text-ink border-2 border-ink shadow-brutal-sm hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Title */}
          <h3 className="text-2xl sm:text-3xl font-black font-display text-ink leading-snug">
            {title}
          </h3>

          {/* Quick Summary Box */}
          <div className="p-4 bg-bg border-2 border-ink rounded-lg">
            <p className="text-sm sm:text-base text-ink font-medium leading-relaxed">
              {summary}
            </p>
          </div>

          {/* Abstract / In-depth Solution */}
          <div>
            <h4 className="text-sm font-bold font-display uppercase tracking-wider text-ink mb-2">
              {t('modal.abstractTitle')}
            </h4>
            <p className="text-sm sm:text-base text-ink leading-relaxed bg-surface p-4 rounded-lg border-2 border-ink">
              {abstract}
            </p>
          </div>

          {/* Tech Stack Chips */}
          <div>
            <h4 className="text-sm font-bold font-display uppercase tracking-wider text-ink mb-3">
              {t('modal.techUsed')}
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((techItem, index) => (
                <span
                  key={index}
                  className="chip text-sm font-mono"
                >
                  {techItem}
                </span>
              ))}
            </div>
          </div>

          {/* Academic Citation Box (If Available) */}
          {project.citation && (
            <div className="p-5 bg-surface text-ink rounded-lg border-2 border-ink space-y-4">
              <div className="flex items-center justify-between border-b-2 border-ink pb-3">
                <div className="flex items-center gap-2 font-display font-bold text-sm text-ink">
                  <Quote className="w-4 h-4 text-brand-blue" />
                  <span>{t('modal.citationTitle')}</span>
                </div>
              </div>

              {/* APA Citation */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-mono text-muted font-bold">APA Format:</span>
                  <button
                    onClick={() => handleCopyCitation(project.citation.apa, 'apa')}
                    className="flex items-center gap-1 text-sm text-brand-blue hover:underline font-mono font-bold transition-colors"
                  >
                    {copiedType === 'apa' ? <Check className="w-4 h-4 text-ink" /> : <Copy className="w-4 h-4" />}
                    <span>{copiedType === 'apa' ? t('about.copied') : t('modal.copyApa')}</span>
                  </button>
                </div>
                <div className="p-3 bg-bg rounded-lg text-sm font-mono text-ink border-2 border-ink select-all">
                  {project.citation.apa}
                </div>
              </div>

              {/* BibTeX Citation */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-mono text-muted font-bold">BibTeX:</span>
                  <button
                    onClick={() => handleCopyCitation(project.citation.bibtex, 'bibtex')}
                    className="flex items-center gap-1 text-sm text-brand-blue hover:underline font-mono font-bold transition-colors"
                  >
                    {copiedType === 'bibtex' ? <Check className="w-4 h-4 text-ink" /> : <Copy className="w-4 h-4" />}
                    <span>{copiedType === 'bibtex' ? t('about.copied') : t('modal.copyBibtex')}</span>
                  </button>
                </div>
                <pre className="p-3 bg-bg rounded-lg text-xs sm:text-sm font-mono text-ink border-2 border-ink overflow-x-auto select-all">
                  {project.citation.bibtex}
                </pre>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 border-t-2 border-ink bg-bg">
          <div className="flex flex-wrap items-center gap-2.5">
            {project.links.demo && (
              <BrutalistButton
                variant="yellow"
                size="sm"
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                icon={ExternalLink}
              >
                {t('projects.liveDemo')}
              </BrutalistButton>
            )}

            {project.links.paper && (
              <BrutalistButton
                variant="blue"
                size="sm"
                href={project.links.paper}
                target="_blank"
                rel="noopener noreferrer"
                icon={BookOpen}
              >
                {t('projects.viewPaper')}
              </BrutalistButton>
            )}

            {project.links.github && (
              <BrutalistButton
                variant="outline"
                size="sm"
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                icon={Github}
              >
                {t('projects.viewRepo')}
              </BrutalistButton>
            )}
          </div>

          <BrutalistButton
            variant="outline"
            size="sm"
            onClick={onClose}
          >
            {t('modal.closeBtn')}
          </BrutalistButton>
        </div>

      </div>
    </div>
  );
};

