import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

export const LanguageSwitcher = ({ className = "" }) => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className={`inline-flex items-center p-1 bg-surface border-2 border-ink rounded-lg shadow-brutal-sm ${className}`}>
      <div className="flex items-center gap-1">
        <button
          type="button"
          onClick={() => setLanguage('id')}
          className={`flex items-center gap-1 px-3 py-1 rounded-md text-sm font-mono font-bold transition-all ${
            language === 'id'
              ? 'bg-accent text-ink border-2 border-ink shadow-[2px_2px_0_#111111]'
              : 'text-muted hover:text-ink'
          }`}
          aria-label="Ganti Bahasa ke Indonesia"
        >
          <span>ID</span>
        </button>

        <button
          type="button"
          onClick={() => setLanguage('en')}
          className={`flex items-center gap-1 px-3 py-1 rounded-md text-sm font-mono font-bold transition-all ${
            language === 'en'
              ? 'bg-accent text-ink border-2 border-ink shadow-[2px_2px_0_#111111]'
              : 'text-muted hover:text-ink'
          }`}
          aria-label="Switch Language to English"
        >
          <span>EN</span>
        </button>
      </div>
    </div>
  );
};

