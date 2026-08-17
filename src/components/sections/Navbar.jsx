import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { LanguageSwitcher } from '../common/LanguageSwitcher';
import { BrutalistButton } from '../common/BrutalistButton';
import { useLanguage } from '../../context/LanguageContext';
import { portfolioData } from '../../data/portfolioData';

export const Navbar = () => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t('nav.home'), href: '#home' },
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.skills'), href: '#skills' },
    { label: t('nav.projects'), href: '#projects' },
    { label: t('nav.experience'), href: '#experience' },
    { label: t('nav.journals'), href: '#journals' },
    { label: t('nav.contact'), href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full px-4 sm:px-6 lg:px-8 py-3 transition-all duration-200">
      <div className={`max-w-7xl mx-auto bg-surface border-[3px] border-slate-900 rounded-2xl transition-all duration-200 ${
        scrolled ? 'shadow-brutal-lg bg-white/95 backdrop-blur-md' : 'shadow-brutal'
      }`}>
        <div className="flex items-center justify-between px-4 sm:px-6 py-3">
          
          {/* Brand Name */}
          <a
            href="#home"
            className="flex items-center cursor-pointer select-none group"
          >
            <span className="font-display font-black text-xl sm:text-2xl tracking-tight text-slate-900 group-hover:text-brand-blue transition-colors leading-tight">
              DWI PASHA
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="px-3 py-1.5 rounded-lg font-display font-bold text-xs uppercase tracking-wider text-slate-700 hover:text-slate-950 hover:bg-brand-blue-soft border-2 border-transparent hover:border-slate-900 hover:shadow-[2px_2px_0px_#0F172A] transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Actions (Language Switcher) */}
          <div className="hidden sm:flex items-center gap-3">
            <LanguageSwitcher />
          </div>

          {/* Mobile Right Controls */}
          <div className="flex sm:hidden items-center gap-2">
            <LanguageSwitcher />
            
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl bg-surface border-2 border-slate-900 shadow-[2px_2px_0px_#0F172A] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-5 h-5 text-slate-900" /> : <Menu className="w-5 h-5 text-slate-900" />}
            </button>
          </div>

        </div>

        {/* Mobile Slide Drawer Menu */}
        {isOpen && (
          <div className="lg:hidden border-t-2 border-slate-900 p-4 bg-brand-blue-soft/60 animate-in slide-in-from-top-4 duration-200">
            <nav className="flex flex-col gap-2 mb-4">
              {navLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2.5 rounded-xl font-display font-black text-sm uppercase bg-white border-2 border-slate-900 shadow-[2px_2px_0px_#0F172A] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none text-slate-900"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex flex-col gap-2 pt-2 border-t border-slate-300">
              <BrutalistButton
                variant="blue"
                size="md"
                href={portfolioData.profile.scholarUrl}
                target="_blank"
                rel="noopener noreferrer"
                icon={Sparkles}
                className="w-full"
                onClick={() => setIsOpen(false)}
              >
                Google Scholar Profile ↗
              </BrutalistButton>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
