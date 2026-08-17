import React, { useState } from 'react';
import { BookOpen, ExternalLink, Quote, Copy, Check, Sparkles, Award, FileText } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { BrutalistButton } from '../common/BrutalistButton';
import { PillBadge } from '../common/PillBadge';
import { useLanguage } from '../../context/LanguageContext';
import { portfolioData } from '../../data/portfolioData';

export const Journals = () => {
  const { language, t } = useLanguage();
  const [copiedId, setCopiedId] = useState(null);
  const [copiedFormat, setCopiedFormat] = useState(null); // 'apa' | 'bibtex'

  const handleCopy = (id, text, format) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setCopiedFormat(format);
    setTimeout(() => {
      setCopiedId(null);
      setCopiedFormat(null);
    }, 2500);
  };

  return (
    <section id="journals" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-surface border-t-[3px] border-slate-900">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <SectionHeader
          tag={t('journals.sectionTag')}
          title={t('journals.sectionTitle')}
          highlight="Scholar & Books"
          subtitle={t('journals.sectionSubtitle')}
          align="center"
        />

        {/* Quick Scholar Metric Banner */}
        <div className="mb-12 p-4 sm:p-6 bg-brand-blue-soft border-[3px] border-slate-900 rounded-2xl shadow-brutal flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-accent-yellow border-2 border-slate-900 rounded-xl shadow-[2px_2px_0px_#0F172A] text-slate-900">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-display font-black text-lg sm:text-xl text-slate-900">
                {t('journals.scholarBannerTitle')}
              </h3>
              <p className="text-xs sm:text-sm font-mono text-slate-600">
                ID: <span className="font-bold text-brand-blue">rWct3k0AAAAJ</span> ✦ Dwi Pasha Anggara Putra
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="px-3.5 py-1.5 bg-white border-2 border-slate-900 rounded-xl shadow-[2px_2px_0px_#0F172A] text-center">
              <span className="text-[10px] font-mono font-bold uppercase text-slate-500 block">{t('journals.totalCitations')}</span>
              <span className="text-base font-black font-display text-brand-blue">4+ Citations</span>
            </div>

            <BrutalistButton
              variant="yellow"
              size="sm"
              href={portfolioData.profile.scholarUrl}
              target="_blank"
              rel="noopener noreferrer"
              icon={ExternalLink}
            >
              {t('journals.viewOnScholar')}
            </BrutalistButton>
          </div>
        </div>

        {/* Journals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {portfolioData.journals.map((journal) => {
            const title = typeof journal.title === 'object' ? journal.title[language] : journal.title;
            const summary = typeof journal.summary === 'object' ? journal.summary[language] : journal.summary;
            const abstract = typeof journal.abstract === 'object' ? journal.abstract[language] : journal.abstract;
            const typeLabel = typeof journal.typeLabel === 'object' ? journal.typeLabel[language] : journal.typeLabel;

            const isCopiedApa = copiedId === journal.id && copiedFormat === 'apa';
            const isCopiedBibtex = copiedId === journal.id && copiedFormat === 'bibtex';

            return (
              <div
                key={journal.id}
                className="bg-white border-[3.5px] border-slate-900 rounded-3xl p-6 sm:p-7 shadow-brutal hover:shadow-brutal-xl transition-all duration-200 flex flex-col justify-between relative overflow-hidden"
              >
                <div className="space-y-4">
                  
                  {/* Top Bar: Type, Citations & Year */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b-2 border-slate-900">
                    <div className="flex items-center gap-2">
                      <PillBadge color={journal.badgeColor || 'bg-brand-blue text-white'} size="sm">
                        {typeLabel}
                      </PillBadge>

                      {journal.citationsCount > 0 && (
                        <span className="inline-flex items-center gap-1 text-[11px] font-mono font-bold px-2 py-0.5 bg-emerald-100 text-emerald-800 border border-slate-900 rounded-md">
                          <Award className="w-3.5 h-3.5 text-emerald-700" />
                          <span>{journal.citationsCount} {t('journals.citedCount')}</span>
                        </span>
                      )}
                    </div>

                    <span className="text-xs font-mono font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded border border-slate-900">
                      {journal.year}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-black text-lg sm:text-xl text-slate-900 leading-snug">
                    {title}
                  </h3>

                  {/* Authors & Publisher */}
                  <div className="text-xs font-mono text-slate-600 space-y-0.5">
                    <p>
                      <strong className="text-slate-900">{t('journals.authorsLabel')}</strong> {journal.authors}
                    </p>
                    <p>
                      <strong className="text-slate-900">{t('journals.publisherLabel')}</strong> <span className="text-brand-blue font-bold">{journal.publisher}</span>
                    </p>
                  </div>

                  {/* Summary / Abstract Box */}
                  <div className="p-3.5 bg-slate-50 border-2 border-slate-900 rounded-xl text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                    {summary}
                  </div>

                  {/* Citation Quick Copy Section */}
                  {journal.citation && (
                    <div className="pt-2">
                      <span className="text-[11px] font-mono font-bold uppercase text-slate-500 block mb-1.5 flex items-center gap-1">
                        <Quote className="w-3.5 h-3.5 text-brand-blue" />
                        <span>{t('modal.citationTitle')}</span>
                      </span>

                      <div className="flex flex-wrap gap-2">
                        <button
                          type="button"
                          onClick={() => handleCopy(journal.id, journal.citation.apa, 'apa')}
                          className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-mono font-bold border-2 border-slate-900 transition-all ${
                            isCopiedApa
                              ? 'bg-emerald-400 text-slate-900 shadow-none'
                              : 'bg-white hover:bg-yellow-50 text-slate-800 shadow-[2px_2px_0px_#0F172A] hover:translate-x-[1px] hover:translate-y-[1px]'
                          }`}
                        >
                          {isCopiedApa ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                          <span>{isCopiedApa ? t('about.copied') : 'Copy APA'}</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => handleCopy(journal.id, journal.citation.bibtex, 'bibtex')}
                          className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-mono font-bold border-2 border-slate-900 transition-all ${
                            isCopiedBibtex
                              ? 'bg-emerald-400 text-slate-900 shadow-none'
                              : 'bg-slate-100 hover:bg-white text-slate-800 shadow-[2px_2px_0px_#0F172A] hover:translate-x-[1px] hover:translate-y-[1px]'
                          }`}
                        >
                          {isCopiedBibtex ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                          <span>{isCopiedBibtex ? t('about.copied') : 'Copy BibTeX'}</span>
                        </button>
                      </div>
                    </div>
                  )}

                </div>

                {/* Card Action Link */}
                <div className="pt-5 mt-5 border-t-2 border-slate-900 flex items-center justify-between gap-2">
                  <a
                    href={journal.scholarUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-display font-black uppercase text-brand-blue hover:text-brand-blue-dark transition-colors"
                  >
                    <span>{t('journals.viewOnScholar')}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  {journal.type === 'book' && (
                    <span className="text-[11px] font-mono font-bold px-2 py-0.5 bg-yellow-100 border border-slate-900 rounded">
                      Sonpedia 2025
                    </span>
                  )}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
