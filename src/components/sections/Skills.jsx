import React from 'react';
import { Cpu, Code2, Layers, Network, CheckCircle, Sparkles } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { PillBadge } from '../common/PillBadge';
import { useLanguage } from '../../context/LanguageContext';
import { portfolioData } from '../../data/portfolioData';

const iconMap = {
  Cpu: Cpu,
  Code2: Code2,
  Layers: Layers,
  Network: Network,
};

export const Skills = () => {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <SectionHeader
          tag={t('skills.sectionTag')}
          title={t('skills.sectionTitle')}
          highlight="Matrix & Stack"
          subtitle={t('skills.sectionSubtitle')}
          align="center"
        />

        {/* 4-Pillar Bento Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {portfolioData.skills.map((categoryGroup, index) => {
            const IconComponent = iconMap[categoryGroup.icon] || Code2;
            const title = t(categoryGroup.titleKey);

            return (
              <div
                key={index}
                className={`bg-white border-[3.5px] border-slate-900 rounded-3xl p-6 sm:p-7 shadow-brutal hover:shadow-brutal-xl transition-all duration-200 flex flex-col justify-between relative overflow-hidden`}
              >
                {/* Category Header */}
                <div>
                  <div className="flex items-center justify-between pb-4 mb-5 border-b-2 border-slate-900">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-2xl ${categoryGroup.color} border-2 border-slate-900 shadow-[2px_2px_0px_#0F172A]`}>
                        <IconComponent className="w-6 h-6 text-slate-900" />
                      </div>
                      <div>
                        <h3 className="font-display font-black text-lg sm:text-xl text-slate-900">
                          {title}
                        </h3>
                        <span className="text-xs font-mono font-bold text-slate-500 uppercase">
                          {categoryGroup.skills.length} {t('skills.capabilitiesCount')}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Skills Grid with Badges & Descriptions */}
                  <div className="space-y-3.5">
                    {categoryGroup.skills.map((skill, skillIdx) => (
                      <div
                        key={skillIdx}
                        className="p-3 bg-slate-50 hover:bg-yellow-50/70 border-2 border-slate-900 rounded-xl transition-colors shadow-[2px_2px_0px_#0F172A] flex items-center justify-between gap-3"
                      >
                        <div className="flex items-center gap-2.5">
                          <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                          <div>
                            <h4 className="text-xs sm:text-sm font-display font-bold text-slate-900 leading-tight">
                              {skill.name}
                            </h4>
                            <p className="text-[11px] font-mono text-slate-500">
                              {skill.desc}
                            </p>
                          </div>
                        </div>

                        {/* Skill Proficiency Bar / Metric */}
                        <div className="hidden sm:flex flex-col items-end shrink-0 w-24">
                          <span className="text-[11px] font-mono font-black text-slate-900">
                            {skill.level}%
                          </span>
                          <div className="w-full bg-slate-200 h-2 rounded-full border border-slate-900 overflow-hidden mt-0.5">
                            <div
                              className={`h-full ${
                                categoryGroup.category === 'ai'
                                  ? 'bg-accent-coral'
                                  : categoryGroup.category === 'fullstack'
                                  ? 'bg-brand-blue'
                                  : categoryGroup.category === 'architecture'
                                  ? 'bg-accent-purple'
                                  : 'bg-accent-yellow'
                              }`}
                              style={{ width: `${skill.level}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Flagship Badge if AI */}
                {categoryGroup.category === 'ai' && (
                  <div className="mt-5 p-3 bg-accent-coral-light border-2 border-slate-900 rounded-xl flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-accent-coral shrink-0" />
                    <p className="text-xs font-mono font-bold text-slate-900">
                      {t('skills.flagshipBadge')}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
