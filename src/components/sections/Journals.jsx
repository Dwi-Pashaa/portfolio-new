import React, { useState } from 'react';
import { ExternalLink, Copy, Check, BookOpen, FileText, Award, Users } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { BrutalistButton } from '../common/BrutalistButton';
import { useLanguage } from '../../context/LanguageContext';
import { portfolioData } from '../../data/portfolioData';

export const Journals = () => {
  const { language, t } = useLanguage();
  const [copiedId, setCopiedId] = useState(null);

  const handleCopyCitation = (id, text) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  return (
    <section id="journals" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t-2 border-ink">
      <div className="max-w-[1100px] mx-auto">
        
        {/* Section Header */}
        <SectionHeader
          title={t('journals.sectionTitle')}
          subtitle={t('journals.sectionSubtitle')}
          align="center"
        />

        {/* Scholar Profile Card with Vibrant Accent */}
        <div className="mb-10 p-6 bg-brand-blue-light border-2 border-ink rounded-xl shadow-brutal flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-accent text-ink border-2 border-ink rounded-md text-xs font-mono font-bold mb-1 shadow-[1px_1px_0_#111111]">
              <Award className="w-3.5 h-3.5" />
              <span>Google Scholar Verified</span>
            </div>
            <h3 className="font-display font-black text-xl sm:text-2xl text-ink">
              {t('journals.scholarBannerTitle')}
            </h3>
            <p className="text-sm font-mono text-ink/80 font-bold">
              Dwi Pasha Anggara Putra · 4+ {t('journals.citedCount')}
            </p>
          </div>

          <BrutalistButton
            variant="yellow"
            size="md"
            href={portfolioData.profile.scholarUrl}
            target="_blank"
            rel="noopener noreferrer"
            icon={ExternalLink}
          >
            {t('journals.viewOnScholar')}
          </BrutalistButton>
        </div>

        {/* Publications List */}
        <div className="bg-surface border-2 border-ink rounded-xl shadow-brutal divide-y-2 divide-ink overflow-hidden">
          {portfolioData.journals.map((journal) => {
            const title = typeof journal.title === 'object' ? journal.title[language] : journal.title;
            const isCopied = copiedId === journal.id;
            const isBook = journal.type === 'book';
            const isCommunity = journal.type === 'community';

            return (
              <div
                key={journal.id}
                className="p-6 sm:p-7 space-y-3 hover:bg-yellow-50/40 transition-colors"
              >
                {/* Title */}
                <h3 className="font-display font-black text-lg sm:text-xl text-ink leading-snug">
                  {title}
                </h3>

                {/* Publisher & Date */}
                <p className="text-sm font-mono text-muted">
                  <span className="text-ink font-bold">{journal.publisher}</span> · {journal.year}
                </p>

                {/* Action Row */}
                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <a
                    href={journal.scholarUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-bg hover:bg-accent border-2 border-ink rounded-full text-xs font-mono font-bold text-ink shadow-[1px_1px_0_#111111] transition-colors"
                  >
                    <span>Show publication</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  {journal.citation && (
                    <button
                      type="button"
                      onClick={() => handleCopyCitation(journal.id, journal.citation.apa)}
                      className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-mono font-bold text-muted hover:text-ink hover:underline cursor-pointer"
                    >
                      {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{isCopied ? t('about.copied') : (language === 'id' ? 'Salin Sitasi (APA)' : 'Copy Citation')}</span>
                    </button>
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

