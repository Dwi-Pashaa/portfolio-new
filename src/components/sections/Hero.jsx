import React from 'react';
import { ArrowRight, Sparkles, BookOpen, Download, Code2, Bot, Wrench, MapPin } from 'lucide-react';
import { BrutalistButton } from '../common/BrutalistButton';
import { PillBadge } from '../common/PillBadge';
import { BrutalistCard } from '../common/BrutalistCard';
import { useLanguage } from '../../context/LanguageContext';
import { portfolioData } from '../../data/portfolioData';

export const Hero = () => {
  const { t, language } = useLanguage();

  return (
    <section id="home" className="relative pt-6 sm:pt-10 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Floating Badge Pills (SVG Icons) */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8">
          <PillBadge
            color="bg-brand-blue-light text-brand-blue-dark"
            size="md"
            icon={<Code2 className="w-3.5 h-3.5 text-brand-blue" />}
          >
            Fullstack Developer
          </PillBadge>
          <PillBadge
            color="bg-accent-coral-light text-accent-coral"
            size="md"
            icon={<Bot className="w-3.5 h-3.5 text-accent-coral" />}
          >
            AI Engineer
          </PillBadge>
          <PillBadge
            color="bg-accent-yellow-light text-ink"
            size="md"
            icon={<Wrench className="w-3.5 h-3.5 text-slate-800" />}
          >
            IT Support
          </PillBadge>
        </div>

        {/* Hero Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            
            {/* Tag / Pre-title */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border-2 border-slate-900 shadow-[2px_2px_0px_#0F172A]">
              <Sparkles className="w-3.5 h-3.5 text-brand-blue" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-800">
                {t('hero.tag')}
              </span>
            </div>

            {/* Main Punchy Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display text-slate-900 tracking-tight leading-[1.1]">
              {t('hero.headlinePrefix')}{' '}
              <span className="relative inline-block px-3 py-1 bg-brand-blue text-white rounded-2xl border-[3px] border-slate-900 shadow-[4px_4px_0px_#0F172A] -rotate-1 transform">
                {t('hero.headlineHighlight')}
              </span>{' '}
              {t('hero.headlineSuffix')}
            </h1>

            {/* Subtitle / Bio summary */}
            <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed max-w-xl">
              {t('hero.description')}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
              <BrutalistButton
                variant="yellow"
                size="lg"
                href="#projects"
                icon={ArrowRight}
                withConfetti={true}
              >
                {t('hero.ctaProjects')}
              </BrutalistButton>

              <BrutalistButton
                variant="blue"
                size="lg"
                href={portfolioData.profile.cvUrl || '/cv-dwipasha.pdf'}
                download="CV-Dwi-Pasha.pdf"
                target="_blank"
                rel="noopener noreferrer"
                icon={Download}
              >
                {t('hero.ctaCv')}
              </BrutalistButton>
            </div>

            {/* Social / Verified Citation Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-4 text-xs font-mono text-slate-600">
              <a
                href={portfolioData.profile.scholarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-slate-900 rounded-lg shadow-[1.5px_1.5px_0px_#0F172A] hover:bg-yellow-50 transition-colors"
              >
                <BookOpen className="w-3.5 h-3.5 text-brand-blue" />
                <span>Google Scholar (4+ Citations)</span>
              </a>
              <a
                href={portfolioData.profile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-slate-900 rounded-lg shadow-[1.5px_1.5px_0px_#0F172A] hover:bg-blue-50 transition-colors"
              >
                <span>LinkedIn ↗</span>
              </a>
            </div>

          </div>

          {/* Right Column: Sweepy UI Window Mockup Frame (Directly inspired by reference image) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              
              {/* Outer Window Container */}
              <div className="bg-surface border-[3.5px] border-slate-900 rounded-3xl p-3 sm:p-4 shadow-[8px_8px_0px_#0F172A] relative overflow-hidden bg-blueprint-grid">
                
                {/* Window Top Controls & Mock URL Bar */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b-2 border-slate-900">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-400 border border-slate-900"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-400 border border-slate-900"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-400 border border-slate-900"></span>
                  </div>
                  <div className="px-3 py-0.5 bg-slate-100 rounded-md border border-slate-900 text-[10px] font-mono font-bold text-slate-700">
                    https://dwipasha.vercel.app
                  </div>
                  <div className="w-6"></div>
                </div>

                {/* Inner Hero Showcase Card (Styled like Sweepy Card in Reference) */}
                <div className="bg-gradient-to-br from-brand-blue-soft via-white to-accent-yellow-light/30 border-2 border-slate-900 rounded-2xl p-5 sm:p-6 relative space-y-4">
                  
                  {/* Active Status Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border-2 border-slate-900 rounded-full shadow-[2px_2px_0px_#0F172A]">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                    <span className="text-xs font-display font-black text-slate-900">
                      {t('hero.statusBadge')}
                    </span>
                  </div>

                  {/* Profile Presentation */}
                  <div className="flex items-center gap-4 pt-2">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-brand-blue border-[2.5px] border-slate-900 shadow-[3px_3px_0px_#0F172A] overflow-hidden shrink-0 flex items-center justify-center">
                      <img
                        src={portfolioData.profile.avatarUrl || '/profile.svg'}
                        alt={portfolioData.profile.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-display font-black text-xl text-slate-900 leading-tight">
                        {portfolioData.profile.name}
                      </h3>
                      <p className="text-xs font-mono font-bold text-brand-blue pt-0.5">
                        @dwipasha ✦ UCIC & Pertamina
                      </p>
                      <div className="flex items-center gap-1.5 mt-1.5 text-xs text-slate-600 font-semibold">
                        <MapPin className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                        <span>Cirebon, Indonesia</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom CTA (Yellow Sweepy Style) */}
                  <div className="pt-2">
                    <BrutalistButton
                      variant="yellow"
                      size="sm"
                      href="#about"
                      className="w-full justify-between"
                      icon={ArrowRight}
                    >
                      <span>{t('hero.terminalCta')}</span>
                    </BrutalistButton>
                  </div>

                </div>

              </div>

              {/* Floating Decorative Sticker Badge */}
              <div className="absolute -bottom-4 -left-4 hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-accent-yellow border-2 border-slate-900 rounded-xl shadow-brutal rotate-[-4deg] z-10">
                <Code2 className="w-4 h-4 text-slate-900" />
                <span className="text-xs font-display font-black text-slate-900">
                  Fullstack Developer
                </span>
              </div>

              <div className="absolute -top-4 -right-4 hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-accent-mint border-2 border-slate-900 rounded-xl shadow-brutal rotate-[6deg] z-10">
                <Bot className="w-4 h-4 text-slate-900" />
                <span className="text-xs font-display font-black text-slate-900">
                  AI Engineer
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
