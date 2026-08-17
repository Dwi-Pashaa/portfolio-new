import React from 'react';
import { ArrowUp, Heart, Linkedin, Github, BookOpen, Mail, Sparkles } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { portfolioData } from '../../data/portfolioData';

export const Footer = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white border-t-[3.5px] border-slate-900 overflow-hidden relative">

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center justify-between pb-10 border-b border-slate-800">
          
          {/* Brand Col (6 Cols) */}
          <div className="md:col-span-6 space-y-3">
            <span className="font-display font-black text-2xl text-white tracking-tight block">
              DWI PASHA
            </span>
            
            <p className="text-xs sm:text-sm text-slate-400 font-medium max-w-md leading-relaxed">
              {t('footer.bio')}
            </p>
          </div>

          {/* Social Links & Back To Top (6 Cols) */}
          <div className="md:col-span-6 flex flex-wrap items-center justify-start md:justify-end gap-3">
            
            {/* LinkedIn */}
            <a
              href={portfolioData.profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-800 hover:bg-brand-blue text-white border-2 border-slate-700 hover:border-white shadow-[2px_2px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>

            {/* Google Scholar */}
            <a
              href={portfolioData.profile.scholarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-800 hover:bg-accent-yellow hover:text-slate-900 text-white border-2 border-slate-700 hover:border-white shadow-[2px_2px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] transition-all"
              aria-label="Google Scholar"
            >
              <BookOpen className="w-5 h-5" />
            </a>

            {/* GitHub */}
            <a
              href={portfolioData.profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white border-2 border-slate-700 hover:border-white shadow-[2px_2px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] transition-all"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>

            {/* Email */}
            <a
              href={`mailto:${portfolioData.profile.email}`}
              className="p-2.5 rounded-xl bg-slate-800 hover:bg-emerald-600 text-white border-2 border-slate-700 hover:border-white shadow-[2px_2px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] transition-all"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>

            {/* Back to Top Button */}
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-accent-yellow text-slate-900 font-display font-black text-xs uppercase border-2 border-slate-900 shadow-[2px_2px_0px_#FFFFFF] hover:bg-white hover:translate-x-[1px] hover:translate-y-[1px] transition-all cursor-pointer ml-2"
            >
              <ArrowUp className="w-4 h-4" />
              <span>{t('footer.backToTop')}</span>
            </button>

          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex items-center justify-center sm:justify-between text-xs font-mono text-slate-500">
          <p>
            © {new Date().getFullYear()} Dwi Pasha Anggara Putra. {t('footer.rights')}
          </p>
        </div>

      </div>

    </footer>
  );
};
