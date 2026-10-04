import React from 'react';
import { BookOpen, Code2, Layers } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { useLanguage } from '../../context/LanguageContext';
import { portfolioData } from '../../data/portfolioData';

export const AboutMe = () => {
  const { language, t } = useLanguage();
  const bioParagraphs = portfolioData.aboutMe[language];

  return (
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t-2 border-ink">
      <div className="max-w-[1100px] mx-auto">
        
        {/* Section Header */}
        <SectionHeader
          title={t('about.sectionTitle')}
          subtitle={t('about.sectionSubtitle')}
          align="center"
        />

        {/* Single Clean White Card with colorful accent header */}
        <div className="bg-surface border-2 border-ink rounded-xl p-6 sm:p-10 shadow-brutal space-y-8">
          
          {/* 3 Paragraphs Body */}
          <div className="space-y-4 text-base sm:text-lg text-ink leading-relaxed">
            {bioParagraphs.map((paragraph, index) => (
              <p key={index}>
                {paragraph}
              </p>
            ))}
          </div>

          {/* 3 Stats in a Row with Rich Neo-Brutalist Colors and SVG Icons */}
          <div className="pt-6 border-t-2 border-ink grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div className="bg-brand-blue-light border-2 border-ink rounded-xl p-5 shadow-brutal hover:-translate-y-1 transition-transform space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-display font-black text-3xl sm:text-4xl text-ink">
                  4+
                </span>
                <BookOpen className="w-5 h-5 text-brand-blue" />
              </div>
              <span className="text-sm font-mono font-bold text-ink block">
                {language === 'id' ? 'Sitasi Google Scholar' : 'Google Scholar Citations'}
              </span>
            </div>

            <div className="bg-accent-yellow-light border-2 border-ink rounded-xl p-5 shadow-brutal hover:-translate-y-1 transition-transform space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-display font-black text-3xl sm:text-4xl text-ink">
                  7+
                </span>
                <Code2 className="w-5 h-5 text-ink" />
              </div>
              <span className="text-sm font-mono font-bold text-ink block">
                {language === 'id' ? 'Publikasi & Rekayasa Web' : 'Publications & Web Engineering'}
              </span>
            </div>

            <div className="bg-accent-mint-light border-2 border-ink rounded-xl p-5 shadow-brutal hover:-translate-y-1 transition-transform space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-display font-black text-3xl sm:text-4xl text-ink">
                  3
                </span>
                <Layers className="w-5 h-5 text-accent-mint" />
              </div>
              <span className="text-sm font-mono font-bold text-ink block">
                {language === 'id' ? 'Pilar: Software, AI & Ops' : 'Pillars: Software, AI & Ops'}
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

