import React, { useState, useEffect } from 'react';
import { X, ExternalLink, Github, BookOpen, Copy, Check, Quote } from 'lucide-react';
import { BrutalistButton } from './BrutalistButton';
import { PillBadge } from './PillBadge';
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
        className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-surface border-[3.5px] border-slate-900 rounded-3xl shadow-[10px_10px_0px_#0F172A] overflow-hidden flex flex-col z-10 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b-[3px] border-slate-900 bg-brand-blue-soft">
          <div className="flex items-center gap-2">
            <PillBadge color={project.badgeColor || 'bg-brand-blue text-white'} size="sm">
              {project.categoryLabel}
            </PillBadge>
            {project.year && (
              <span className="text-xs font-mono font-bold text-slate-600 bg-white px-2 py-0.5 rounded border border-slate-900">
                {project.year}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-surface hover:bg-red-100 text-slate-900 border-2 border-slate-900 shadow-[2px_2px_0px_#0F172A] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Title */}
          <h3 className="text-2xl sm:text-3xl font-black font-display text-slate-900 leading-snug">
            {title}
          </h3>

          {/* Quick Summary Box */}
          <div className="p-4 bg-yellow-50 border-2 border-slate-900 rounded-xl shadow-[3px_3px_0px_#0F172A]">
            <p className="text-sm sm:text-base text-slate-800 font-semibold leading-relaxed">
              {summary}
            </p>
          </div>

          {/* Abstract / In-depth Solution */}
          <div>
            <h4 className="text-sm font-black font-display uppercase tracking-wider text-slate-900 mb-2 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-blue"></span>
              {t('modal.abstractTitle')}
            </h4>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-300">
              {abstract}
            </p>
          </div>

          {/* Tech Stack Pills */}
          <div>
            <h4 className="text-sm font-black font-display uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-accent-mint"></span>
              {t('modal.techUsed')}
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((techItem, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-xs font-mono font-bold bg-white text-slate-900 border-2 border-slate-900 rounded-lg shadow-[2px_2px_0px_#0F172A]"
                >
                  {techItem}
                </span>
              ))}
            </div>
          </div>

          {/* Academic Citation Box (If Available) */}
          {project.citation && (
            <div className="p-5 bg-slate-900 text-white rounded-2xl border-2 border-slate-900 shadow-[4px_4px_0px_#0F172A] space-y-4">
              <div className="flex items-center justify-between border-b border-slate-700 pb-3">
                <div className="flex items-center gap-2 font-display font-bold text-sm text-accent-yellow">
                  <Quote className="w-4 h-4" />
                  <span>{t('modal.citationTitle')}</span>
                </div>
              </div>

              {/* APA Citation */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400 font-bold">APA Format:</span>
                  <button
                    onClick={() => handleCopyCitation(project.citation.apa, 'apa')}
                    className="flex items-center gap-1 text-xs text-accent-yellow hover:text-white font-mono transition-colors"
                  >
                    {copiedType === 'apa' ? <Check className="w-3.5 h-3.5 text-accent-mint" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedType === 'apa' ? t('about.copied') : t('modal.copyApa')}</span>
                  </button>
                </div>
                <div className="p-2.5 bg-slate-800 rounded-lg text-xs font-mono text-slate-200 border border-slate-700 select-all">
                  {project.citation.apa}
                </div>
              </div>

              {/* BibTeX Citation */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400 font-bold">BibTeX:</span>
                  <button
                    onClick={() => handleCopyCitation(project.citation.bibtex, 'bibtex')}
                    className="flex items-center gap-1 text-xs text-accent-yellow hover:text-white font-mono transition-colors"
                  >
                    {copiedType === 'bibtex' ? <Check className="w-3.5 h-3.5 text-accent-mint" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedType === 'bibtex' ? t('about.copied') : t('modal.copyBibtex')}</span>
                  </button>
                </div>
                <pre className="p-2.5 bg-slate-800 rounded-lg text-[11px] font-mono text-slate-300 border border-slate-700 overflow-x-auto select-all">
                  {project.citation.bibtex}
                </pre>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 border-t-[3px] border-slate-900 bg-slate-50">
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
                variant="white"
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
            variant="dark"
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
