import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Globe } from 'lucide-react';

export const LanguageSwitcher = ({ className = "" }) => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className={`inline-flex items-center p-1 bg-surface border-2 border-slate-900 rounded-xl shadow-brutal-sm ${className}`}>
      <div className="flex items-center gap-1">
        <button
          type="button"
          onClick={() => setLanguage('id')}
          className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-mono font-black uppercase transition-all ${
            language === 'id'
              ? 'bg-accent-yellow text-slate-900 border-2 border-slate-900 shadow-[1.5px_1.5px_0px_#0F172A]'
              : 'text-slate-600 hover:text-slate-900'
          }`}
          aria-label="Ganti Bahasa ke Indonesia"
        >
          <span className="w-2 h-2 rounded-full bg-red-500 border border-slate-900 inline-block"></span>
          <span>ID</span>
        </button>

        <button
          type="button"
          onClick={() => setLanguage('en')}
          className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-mono font-black uppercase transition-all ${
            language === 'en'
              ? 'bg-brand-blue text-white border-2 border-slate-900 shadow-[1.5px_1.5px_0px_#0F172A]'
              : 'text-slate-600 hover:text-slate-900'
          }`}
          aria-label="Switch Language to English"
        >
          <span className="w-2 h-2 rounded-full bg-blue-400 border border-slate-900 inline-block"></span>
          <span>EN</span>
        </button>
      </div>
    </div>
  );
};
