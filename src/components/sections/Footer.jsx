import React from 'react';
import { ArrowUp, Linkedin, Github, BookOpen, Mail } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { portfolioData } from '../../data/portfolioData';

export const Footer = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-surface border-t-2 border-ink text-ink">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b-2 border-ink">
          
          {/* Brand + Tagline */}
          <div className="space-y-1">
            <span className="font-display font-black text-xl text-ink tracking-tight block">
              DWI PASHA
            </span>
            <p className="text-sm text-muted max-w-md">
              {t('footer.bio')}
            </p>
          </div>

          {/* Social Links & Back To Top */}
          <div className="flex items-center gap-3">
            <a
              href={portfolioData.profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-bg hover:bg-accent text-ink border-2 border-ink shadow-brutal-sm hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={portfolioData.profile.scholarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-bg hover:bg-accent text-ink border-2 border-ink shadow-brutal-sm hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
              aria-label="Google Scholar"
            >
              <BookOpen className="w-4 h-4" />
            </a>

            <a
              href={portfolioData.profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-bg hover:bg-accent text-ink border-2 border-ink shadow-brutal-sm hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${portfolioData.profile.email}`}
              className="p-2 rounded-lg bg-bg hover:bg-accent text-ink border-2 border-ink shadow-brutal-sm hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-surface hover:bg-yellow-50 text-ink border-2 border-ink shadow-brutal-sm hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all cursor-pointer ml-1"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm font-mono text-muted">
          <p>
            © {new Date().getFullYear()} Dwi Pasha Anggara Putra. {t('footer.rights')}
          </p>
        </div>

      </div>
    </footer>
  );
};

