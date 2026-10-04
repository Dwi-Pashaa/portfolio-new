import React, { useState } from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { useLanguage } from '../../context/LanguageContext';
import { portfolioData } from '../../data/portfolioData';

export const Experience = () => {
  const { language, t } = useLanguage();
  const [activeTab, setActiveTab] = useState('work'); // 'work' | 'education'

  return (
    <section id="experience" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t-2 border-ink">
      <div className="max-w-[1100px] mx-auto">
        
        {/* Section Header */}
        <SectionHeader
          title={t('experience.sectionTitle')}
          subtitle={t('experience.sectionSubtitle')}
          align="center"
        />

        {/* Clean Aligned Segmented Tab Switcher */}
        <div className="flex justify-center mb-12 px-2">
          <div className="inline-flex items-center gap-1.5 p-1.5 bg-surface border-2 border-ink rounded-xl shadow-brutal max-w-full">
            <button
              type="button"
              onClick={() => setActiveTab('work')}
              className={`px-3.5 py-1.5 sm:px-5 sm:py-2 rounded-lg font-display text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'work'
                  ? 'bg-accent text-ink border-2 border-ink shadow-[2px_2px_0_#111111]'
                  : 'bg-transparent text-muted hover:text-ink hover:bg-bg border-2 border-transparent'
              }`}
            >
              {t('experience.tabWork')}
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('education')}
              className={`px-3.5 py-1.5 sm:px-5 sm:py-2 rounded-lg font-display text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'education'
                  ? 'bg-accent text-ink border-2 border-ink shadow-[2px_2px_0_#111111]'
                  : 'bg-transparent text-muted hover:text-ink hover:bg-bg border-2 border-transparent'
              }`}
            >
              {t('experience.tabEdu')}
            </button>
          </div>
        </div>

        {/* Work Timeline */}
        {activeTab === 'work' && (
          <div className="space-y-8 relative pl-6 sm:pl-8 before:absolute before:inset-0 before:left-2 sm:before:left-3 before:w-0.5 before:bg-ink">
            {portfolioData.experience.map((item) => {
              const role = typeof item.role === 'object' ? item.role[language] : item.role;
              const type = typeof item.type === 'object' ? item.type[language] : item.type;
              const period = typeof item.period === 'object' ? item.period[language] : item.period;
              const description = typeof item.description === 'object' ? item.description[language] : item.description;

              return (
                <div key={item.id} className="relative group">
                  
                  {/* Square Node Dot - Perfectly Centered on Timeline Line */}
                  <div className="absolute -left-[15px] sm:-left-[19px] -translate-x-1/2 top-6 w-3 h-3 bg-accent border-2 border-ink z-10" />

                  {/* Content Card */}
                  <div className="bg-surface border-2 border-ink rounded-lg p-5 sm:p-6 shadow-brutal space-y-3">
                    
                    <div className="flex flex-wrap items-baseline justify-between gap-2 pb-2 border-b-2 border-ink">
                      <div>
                        <h3 className="font-display font-black text-lg sm:text-xl text-ink">
                          {role}
                        </h3>
                        <p className="text-sm font-display font-bold text-brand-blue">
                          {item.company}
                        </p>
                      </div>

                      <div className="flex items-center gap-1.5 text-xs font-mono font-bold">
                        <span className="bg-accent-yellow-light border-2 border-ink px-2.5 py-0.5 rounded shadow-[1px_1px_0_#111111] text-ink">
                          {period}
                        </span>
                        {type && (
                          <span className="bg-bg border-2 border-ink px-2 py-0.5 rounded text-muted">
                            {type}
                          </span>
                        )}
                      </div>
                    </div>

                    <p className="text-sm sm:text-base text-ink font-normal leading-relaxed">
                      {description}
                    </p>

                    {/* Skill Chips */}
                    {item.skills && (
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {item.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="border-2 border-ink rounded-full px-2.5 py-0.5 text-xs sm:text-sm font-mono font-semibold bg-bg hover:bg-accent-yellow-light transition-colors text-ink shadow-[1px_1px_0_#111111]"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}

                  </div>

                </div>
              );
            })}
          </div>
        )}

        {/* Education Timeline */}
        {activeTab === 'education' && (
          <div className="space-y-8 relative pl-6 sm:pl-8 before:absolute before:inset-0 before:left-2 sm:before:left-3 before:w-0.5 before:bg-ink">
            {portfolioData.education.map((item) => {
              const degree = typeof item.degree === 'object' ? item.degree[language] : item.degree;
              const details = typeof item.details === 'object' ? item.details[language] : item.details;

              return (
                <div key={item.id} className="relative group">
                  
                  {/* Square Node Dot - Perfectly Centered on Timeline Line */}
                  <div className="absolute -left-[15px] sm:-left-[19px] -translate-x-1/2 top-6 w-3 h-3 bg-brand-blue border-2 border-ink z-10" />

                  <div className="bg-surface border-2 border-ink rounded-lg p-5 sm:p-6 shadow-brutal space-y-3">
                    <div className="flex flex-wrap items-baseline justify-between gap-2 pb-2 border-b-2 border-ink">
                      <div>
                        <h3 className="font-display font-black text-lg sm:text-xl text-ink">
                          {degree}
                        </h3>
                        <p className="text-sm font-display font-bold text-brand-blue">
                          {item.institution}
                        </p>
                      </div>

                      <span className="bg-brand-blue-light border-2 border-ink px-2.5 py-0.5 rounded text-xs font-mono font-bold text-ink shadow-[1px_1px_0_#111111]">
                        {item.period}
                      </span>
                    </div>

                    <p className="text-sm sm:text-base text-ink font-normal leading-relaxed">
                      {details}
                    </p>

                    {/* Skill Chips */}
                    {item.skills && (
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {item.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="border-2 border-ink rounded-full px-2.5 py-0.5 text-xs sm:text-sm font-mono font-semibold bg-bg hover:bg-brand-blue-light transition-colors text-ink shadow-[1px_1px_0_#111111]"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};

