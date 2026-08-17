import React from 'react';
import { Code2, Cpu, Layers, Network, CheckCircle2, ArrowRight } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { BrutalistButton } from '../common/BrutalistButton';
import { PillBadge } from '../common/PillBadge';
import { useLanguage } from '../../context/LanguageContext';
import { portfolioData } from '../../data/portfolioData';

const iconMap = {
  Code2: Code2,
  Cpu: Cpu,
  Layers: Layers,
  Network: Network,
};

export const Services = () => {
  const { language, t } = useLanguage();

  return (
    <section id="services" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-surface border-t-[3px] border-slate-900">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <SectionHeader
          tag={t('services.sectionTag')}
          title={t('services.sectionTitle')}
          highlight="Solutions"
          subtitle={t('services.sectionSubtitle')}
          align="center"
        />

        {/* 4-Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {portfolioData.services.map((service) => {
            const IconComponent = iconMap[service.icon] || Code2;
            const title = typeof service.title === 'object' ? service.title[language] : service.title;
            const description = typeof service.description === 'object' ? service.description[language] : service.description;

            return (
              <div
                key={service.id}
                className="bg-white border-[3.5px] border-slate-900 rounded-3xl p-6 sm:p-8 shadow-brutal hover:shadow-brutal-xl transition-all duration-200 flex flex-col justify-between relative overflow-hidden"
              >
                <div>
                  
                  {/* Top Bar with Icon & Popular Badge */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b-2 border-slate-900">
                    <div className={`p-3 rounded-2xl ${service.color} border-2 border-slate-900 shadow-[2px_2px_0px_#0F172A]`}>
                      <IconComponent className="w-6 h-6 text-slate-900" />
                    </div>

                    {service.popular && (
                      <PillBadge color="bg-accent-yellow text-slate-900" size="sm">
                        ⭐ {t('services.badgePopular')}
                      </PillBadge>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-black text-xl sm:text-2xl text-slate-900 mb-3">
                    {title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed mb-6">
                    {description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="space-y-2.5 mb-8">
                    {service.features.map((feature, idx) => {
                      const featText = typeof feature === 'object' ? feature[language] : feature;
                      return (
                        <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm font-semibold text-slate-800">
                          <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                          <span>{featText}</span>
                        </div>
                      );
                    })}
                  </div>

                </div>

                {/* Bottom CTA */}
                <div className="pt-4 border-t-2 border-slate-900">
                  <BrutalistButton
                    variant="yellow"
                    size="md"
                    href="#contact"
                    className="w-full justify-between"
                    icon={ArrowRight}
                  >
                    <span>{t('services.ctaOrder')}</span>
                  </BrutalistButton>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
