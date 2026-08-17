import React, { useState } from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2, ChevronRight } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { PillBadge } from '../common/PillBadge';
import { useLanguage } from '../../context/LanguageContext';
import { portfolioData } from '../../data/portfolioData';

export const Experience = () => {
  const { language, t } = useLanguage();
  const [activeTab, setActiveTab] = useState('work'); // 'work' | 'education'

  return (
    <section id="experience" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-brand-blue-soft/30 border-t-[3px] border-slate-900">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <SectionHeader
          tag={t('experience.sectionTag')}
          title={t('experience.sectionTitle')}
          highlight="Timeline"
          subtitle={t('experience.sectionSubtitle')}
          align="center"
        />

        {/* Tab Switcher */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <button
            type="button"
            onClick={() => setActiveTab('work')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-display font-black text-xs sm:text-sm uppercase tracking-wider border-[2.5px] border-slate-900 transition-all ${
              activeTab === 'work'
                ? 'bg-brand-blue text-white shadow-brutal translate-x-[-1px] translate-y-[-1px]'
                : 'bg-white text-slate-700 hover:bg-slate-100 shadow-brutal-sm'
            }`}
          >
            <Briefcase className="w-4 h-4" />
            <span>{t('experience.tabWork')}</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('education')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-display font-black text-xs sm:text-sm uppercase tracking-wider border-[2.5px] border-slate-900 transition-all ${
              activeTab === 'education'
                ? 'bg-accent-yellow text-slate-900 shadow-brutal translate-x-[-1px] translate-y-[-1px]'
                : 'bg-white text-slate-700 hover:bg-slate-100 shadow-brutal-sm'
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            <span>{t('experience.tabEdu')}</span>
          </button>
        </div>

        {/* Work Timeline */}
        {activeTab === 'work' && (
          <div className="space-y-6 sm:space-y-8 relative before:absolute before:inset-0 before:left-4 sm:before:left-8 before:w-1 before:bg-slate-900">
            {portfolioData.experience.map((item, index) => {
              const role = typeof item.role === 'object' ? item.role[language] : item.role;
              const type = typeof item.type === 'object' ? item.type[language] : item.type;
              const period = typeof item.period === 'object' ? item.period[language] : item.period;
              const location = typeof item.location === 'object' ? item.location[language] : item.location;
              const description = typeof item.description === 'object' ? item.description[language] : item.description;

              return (
                <div key={item.id} className="relative flex items-start gap-4 sm:gap-8 pl-10 sm:pl-16 group">
                  
                  {/* Timeline Node Dot */}
                  <div className="absolute left-2 sm:left-6 -translate-x-1/2 w-6 h-6 rounded-full bg-accent-yellow border-[2.5px] border-slate-900 shadow-[2px_2px_0px_#0F172A] flex items-center justify-center text-[10px] font-mono font-bold z-10">
                    {index + 1}
                  </div>

                  {/* Content Card */}
                  <div className="w-full bg-white border-[3px] border-slate-900 rounded-2xl p-5 sm:p-7 shadow-brutal hover:shadow-brutal-lg transition-all space-y-3">
                    
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b-2 border-slate-900">
                      <div>
                        <h3 className="font-display font-black text-lg sm:text-xl text-slate-900 leading-tight">
                          {role}
                        </h3>
                        <h4 className="text-sm font-bold text-brand-blue font-display">
                          {item.company}
                        </h4>
                      </div>

                      <div className="flex flex-wrap items-center gap-2">
                        <span className="inline-flex items-center gap-1 text-xs font-mono font-bold px-2.5 py-1 bg-yellow-50 border border-slate-900 rounded-lg">
                          <Calendar className="w-3.5 h-3.5 text-slate-600" />
                          {period}
                        </span>
                        <span className="text-xs font-mono font-bold px-2 py-0.5 bg-slate-100 border border-slate-900 rounded-md">
                          {type}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                      {description}
                    </p>

                    {/* Skill Badges */}
                    {item.skills && (
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {item.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2.5 py-0.5 text-[11px] font-mono font-bold bg-slate-100 text-slate-800 border border-slate-900 rounded-md"
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
          <div className="space-y-6 relative before:absolute before:inset-0 before:left-4 sm:before:left-8 before:w-1 before:bg-slate-900">
            {portfolioData.education.map((item, index) => {
              const degree = typeof item.degree === 'object' ? item.degree[language] : item.degree;
              const details = typeof item.details === 'object' ? item.details[language] : item.details;

              return (
                <div key={item.id} className="relative flex items-start gap-4 sm:gap-8 pl-10 sm:pl-16">
                  
                  <div className="absolute left-2 sm:left-6 -translate-x-1/2 w-6 h-6 rounded-full bg-brand-blue border-[2.5px] border-slate-900 shadow-[2px_2px_0px_#0F172A] flex items-center justify-center text-white text-[10px] font-mono font-bold z-10">
                    {index + 1}
                  </div>

                  <div className="w-full bg-white border-[3px] border-slate-900 rounded-2xl p-5 sm:p-7 shadow-brutal hover:shadow-brutal-lg transition-all space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b-2 border-slate-900">
                      <div>
                        <h3 className="font-display font-black text-lg sm:text-xl text-slate-900">
                          {degree}
                        </h3>
                        <h4 className="text-sm font-bold text-brand-blue font-display">
                          {item.institution}
                        </h4>
                      </div>

                      <span className="text-xs font-mono font-bold px-2.5 py-1 bg-yellow-50 border border-slate-900 rounded-lg">
                        {item.period}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                      {details}
                    </p>
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
