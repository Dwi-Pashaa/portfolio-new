import React, { useState } from 'react';
import { Terminal, Copy, Check, Sparkles, GraduationCap, BookOpen, ShieldCheck, Award } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { BrutalistCard } from '../common/BrutalistCard';
import { PillBadge } from '../common/PillBadge';
import { useLanguage } from '../../context/LanguageContext';
import { portfolioData } from '../../data/portfolioData';

export const AboutMe = () => {
  const { language, t } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [activeCommand, setActiveCommand] = useState('bio');

  const bioParagraphs = portfolioData.aboutMe[language];
  const fullBioText = bioParagraphs.join('\n\n');

  const handleCopy = () => {
    navigator.clipboard.writeText(fullBioText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-brand-blue-soft/40 border-y-[3px] border-slate-900">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <SectionHeader
          tag={t('about.sectionTag')}
          title={t('about.sectionTitle')}
          highlight="Developer Console"
          subtitle={t('about.sectionSubtitle')}
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Terminal Window (Left / Top: 8 Cols) */}
          <div className="lg:col-span-8">
            <div className="bg-slate-950 border-[3.5px] border-slate-900 rounded-3xl shadow-[8px_8px_0px_#0F172A] overflow-hidden">
              
              {/* Terminal Window Title Bar */}
              <div className="flex items-center justify-between px-4 sm:px-6 py-3 bg-slate-900 border-b-2 border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-rose-500 border border-slate-900 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500 border border-slate-900 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500 border border-slate-900 inline-block"></span>
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-300 ml-2 hidden sm:inline-block">
                    {t('about.terminalTitle')}
                  </span>
                </div>

                {/* Quick Copy Terminal Output Button */}
                <button
                  type="button"
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 px-3 py-1 bg-slate-800 hover:bg-slate-700 text-xs font-mono text-slate-200 border border-slate-700 rounded-lg transition-colors"
                  aria-label="Copy terminal text"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-accent-mint" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? t('about.copied') : t('about.copyOutput')}</span>
                </button>
              </div>

              {/* Terminal Screen Body */}
              <div className="p-5 sm:p-7 font-mono text-xs sm:text-sm text-slate-200 leading-relaxed space-y-4 select-text">
                
                {/* Command Line 1: Cat Bio */}
                <div className="flex items-center gap-2 text-slate-400">
                  <span className="text-accent-mint font-bold">➜</span>
                  <span className="text-brand-blue-light font-bold">pasha@dwipasha</span>
                  <span className="text-slate-500">:</span>
                  <span className="text-accent-yellow">~/about</span>
                  <span className="text-slate-300 font-bold">$ cat about_me_{language}.txt</span>
                </div>

                {/* Terminal Bio Output (User's exact paragraphs) */}
                <div className="space-y-3 bg-slate-900/80 p-4 rounded-xl border border-slate-800 text-slate-300 text-xs sm:text-[13.5px] leading-relaxed">
                  {bioParagraphs.map((paragraph, index) => (
                    <p key={index} className="text-justify">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Interactive Terminal Quick Commands */}
                <div className="pt-2">
                  <div className="flex items-center gap-2 text-slate-400 mb-2">
                    <span className="text-accent-mint font-bold">➜</span>
                    <span className="text-brand-blue-light font-bold">pasha@dwipasha</span>
                    <span className="text-slate-500">:</span>
                    <span className="text-accent-yellow">~/about</span>
                    <span className="text-slate-300 font-bold">$ ./inspect_profile.sh</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800 flex items-center justify-between">
                      <span className="text-slate-400">STATUS:</span>
                      <span className="text-accent-mint font-bold flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-accent-mint animate-pulse"></span>
                        {t('about.statusAvailable')}
                      </span>
                    </div>

                    <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800 flex items-center justify-between">
                      <span className="text-slate-400">{t('about.coreDomainsLabel')}</span>
                      <span className="text-accent-yellow font-bold">
                        {t('about.coreDomainsVal')}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Blinking Prompt Cursor */}
                <div className="flex items-center gap-2 text-slate-400 pt-1">
                  <span className="text-accent-mint font-bold">➜</span>
                  <span className="text-brand-blue-light font-bold">pasha@dwipasha</span>
                  <span className="text-slate-500">:</span>
                  <span className="text-accent-yellow">~/about</span>
                  <span className="text-slate-300 font-bold">$</span>
                  <span className="w-2.5 h-4 bg-accent-yellow animate-blink inline-block"></span>
                </div>

              </div>

            </div>
          </div>

          {/* Right Column: Bento Highlight Cards (4 Cards) */}
          <div className="lg:col-span-4 flex flex-col gap-3.5">
            
            {/* Card 1: Education & Alum */}
            <div className="p-4 sm:p-4.5 bg-white border-[3px] border-slate-900 rounded-2xl shadow-brutal hover:shadow-brutal-lg transition-all space-y-1.5">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-brand-blue-light border border-slate-900 text-brand-blue">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-display font-black text-xs sm:text-sm text-slate-900 uppercase">
                    {t('about.card1Title')}
                  </h4>
                  <span className="text-[11px] font-mono text-slate-500">{t('about.card1Sub')}</span>
                </div>
              </div>
              <p className="text-xs text-slate-700 font-medium leading-relaxed">
                {t('about.card1Desc')}
              </p>
            </div>

            {/* Card 2: Published Author */}
            <div className="p-4 sm:p-4.5 bg-yellow-50 border-[3px] border-slate-900 rounded-2xl shadow-brutal hover:shadow-brutal-lg transition-all space-y-1.5">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-accent-yellow border border-slate-900 text-slate-900">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-display font-black text-xs sm:text-sm text-slate-900 uppercase">
                    {t('about.card2Title')}
                  </h4>
                  <span className="text-[11px] font-mono text-slate-500">{t('about.card2Sub')}</span>
                </div>
              </div>
              <p className="text-xs text-slate-800 font-medium leading-relaxed">
                {t('about.card2Desc')}
              </p>
            </div>

            {/* Card 3: Tri-Pillar Engineering Edge */}
            <div className="p-4 sm:p-4.5 bg-white border-[3px] border-slate-900 rounded-2xl shadow-brutal hover:shadow-brutal-lg transition-all space-y-1.5">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-accent-coral-light border border-slate-900 text-accent-coral">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-display font-black text-xs sm:text-sm text-slate-900 uppercase">
                    {t('about.card3Title')}
                  </h4>
                  <span className="text-[11px] font-mono text-slate-500">{t('about.card3Sub')}</span>
                </div>
              </div>
              <p className="text-xs text-slate-700 font-medium leading-relaxed">
                {t('about.card3Desc')}
              </p>
            </div>

            {/* Card 4: Research & Indexed Publications */}
            <div className="p-4 sm:p-4.5 bg-brand-blue-soft/60 border-[3px] border-slate-900 rounded-2xl shadow-brutal hover:shadow-brutal-lg transition-all space-y-1.5">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-accent-purple border border-slate-900 text-white">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-display font-black text-xs sm:text-sm text-slate-900 uppercase">
                    {t('about.card4Title')}
                  </h4>
                  <span className="text-[11px] font-mono text-slate-500">{t('about.card4Sub')}</span>
                </div>
              </div>
              <p className="text-xs text-slate-800 font-medium leading-relaxed">
                {t('about.card4Desc')}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
