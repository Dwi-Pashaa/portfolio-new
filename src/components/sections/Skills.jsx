import React from 'react';
import { Cpu, Code2, Layers, Wrench, Server, Network, Briefcase, Terminal } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { useLanguage } from '../../context/LanguageContext';
import { portfolioData } from '../../data/portfolioData';

export const Skills = () => {
  const { language, t } = useLanguage();

  return (
    <section id="skills" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t-2 border-ink">
      <div className="max-w-[1100px] mx-auto space-y-10">
        
        {/* Section Header */}
        <SectionHeader
          title={t('skills.sectionTitle')}
          subtitle={t('skills.sectionSubtitle')}
          align="center"
        />

        {/* Career Interest Card */}
        {portfolioData.careerInterests && (
          <div className="bg-surface border-2 border-ink rounded-xl p-6 shadow-brutal flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <div className="p-2 bg-accent rounded-lg border-2 border-ink shadow-[1px_1px_0_#111111]">
                <Briefcase className="w-5 h-5 text-ink" />
              </div>
              <div>
                <h3 className="font-display font-black text-lg text-ink">
                  {t('skills.careerInterestTitle') || 'Career Interest'}
                </h3>
                <p className="text-xs font-mono text-muted">
                  {language === 'id' ? 'Fokus peran profesional yang diminati' : 'Targeted professional roles'}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {portfolioData.careerInterests.map((interest) => (
                <span
                  key={interest.id}
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border-2 border-ink text-sm font-display font-bold text-ink shadow-[2px_2px_0_#111111] ${interest.color}`}
                >
                  {interest.id === 'fullstack' && <Code2 className="w-4 h-4 text-brand-blue" />}
                  {interest.id === 'backend' && <Server className="w-4 h-4 text-amber-600" />}
                  {interest.id === 'support' && <Wrench className="w-4 h-4 text-emerald-600" />}
                  <span>{interest.label}</span>
                </span>
              ))}
            </div>
          </div>
        )}

        {/* 4 Rich Skill & Tools Groups */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {portfolioData.skills.map((categoryGroup, index) => {
            const title = t(categoryGroup.titleKey);
            
            const groupTheme = 
              categoryGroup.category === 'fullstack' ? { 
                badge: 'bg-brand-blue-light', 
                border: 'border-ink', 
                headerBg: 'bg-blue-50',
                chipBg: 'bg-white hover:bg-blue-100',
                IconComponent: Code2,
                iconColor: 'text-brand-blue'
              } :
              categoryGroup.category === 'tools' ? { 
                badge: 'bg-accent-yellow-light', 
                border: 'border-ink', 
                headerBg: 'bg-amber-50',
                chipBg: 'bg-white hover:bg-amber-100',
                IconComponent: Wrench,
                iconColor: 'text-amber-600'
              } :
              categoryGroup.category === 'ai' ? { 
                badge: 'bg-accent-coral-light', 
                border: 'border-ink', 
                headerBg: 'bg-rose-50',
                chipBg: 'bg-white hover:bg-rose-100',
                IconComponent: Cpu,
                iconColor: 'text-accent-coral'
              } :
              { 
                badge: 'bg-accent-mint-light', 
                border: 'border-ink', 
                headerBg: 'bg-emerald-50',
                chipBg: 'bg-white hover:bg-emerald-100',
                IconComponent: Network,
                iconColor: 'text-emerald-600'
              };

            const Icon = groupTheme.IconComponent;

            return (
              <div
                key={index}
                className="bg-surface border-2 border-ink rounded-xl overflow-hidden shadow-brutal hover:-translate-y-1 transition-transform"
              >
                {/* Group Header Banner */}
                <div className={`flex items-center justify-between p-4 sm:p-5 border-b-2 border-ink ${groupTheme.headerBg}`}>
                  <div className="flex items-center gap-2.5">
                    <Icon className={`w-5 h-5 ${groupTheme.iconColor}`} />
                    <h3 className="font-display font-black text-lg sm:text-xl text-ink">
                      {title}
                    </h3>
                  </div>
                  <span className={`px-2.5 py-0.5 rounded-full border-2 border-ink text-xs font-mono font-bold text-ink shadow-[1px_1px_0_#111111] ${groupTheme.badge}`}>
                    {categoryGroup.skills.length} {categoryGroup.category === 'tools' ? 'tools' : 'skills'}
                  </span>
                </div>

                {/* Skill Chips */}
                <div className="p-5 sm:p-6 flex flex-wrap gap-2.5">
                  {categoryGroup.skills.map((skill, skillIdx) => (
                    <span
                      key={skillIdx}
                      className={`inline-flex items-center border-2 border-ink rounded-full px-3.5 py-1.5 text-sm font-bold text-ink ${groupTheme.chipBg} transition-colors select-none shadow-[2px_2px_0_#111111] cursor-default`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

