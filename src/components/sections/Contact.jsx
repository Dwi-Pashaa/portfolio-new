import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, ExternalLink, Sparkles, BookOpen, Linkedin, Github } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { BrutalistButton } from '../common/BrutalistButton';
import { PillBadge } from '../common/PillBadge';
import { useLanguage } from '../../context/LanguageContext';
import { portfolioData } from '../../data/portfolioData';
import confetti from 'canvas-confetti';

export const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#FFD000', '#2563EB', '#10B981', '#FF6B6B']
        });
      } catch (err) {}
    }, 600);
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', service: '', message: '' });
    setSubmitted(false);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-brand-blue-soft/50 border-t-[3px] border-slate-900">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <SectionHeader
          tag={t('contact.sectionTag')}
          title={t('contact.sectionTitle')}
          highlight="Let's Build"
          subtitle={t('contact.sectionSubtitle')}
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Connection Badges (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="bg-white border-[3.5px] border-slate-900 rounded-3xl p-6 sm:p-7 shadow-brutal space-y-5">
              <h3 className="font-display font-black text-xl text-slate-900 pb-3 border-b-2 border-slate-900">
                {t('contact.directContactTitle')}
              </h3>

              {/* Direct Info Pills */}
              <div className="space-y-3">
                
                {/* Email */}
                <a
                  href={`mailto:${portfolioData.profile.email}`}
                  className="flex items-center gap-3 p-3 bg-blue-50/60 hover:bg-yellow-50 border-2 border-slate-900 rounded-xl shadow-[2px_2px_0px_#0F172A] transition-all"
                >
                  <div className="p-2 rounded-lg bg-brand-blue text-white">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase text-slate-500 block">
                      Email
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-slate-900 font-mono">
                      {portfolioData.profile.email}
                    </span>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href={portfolioData.profile.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 bg-white hover:bg-blue-50 border-2 border-slate-900 rounded-xl shadow-[2px_2px_0px_#0F172A] transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[#0077B5] text-white">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-bold uppercase text-slate-500 block">
                        LinkedIn Profile
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-slate-900">
                        linkedin.com/in/dwipasha
                      </span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500" />
                </a>

                {/* GitHub */}
                <a
                  href={portfolioData.profile.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 bg-white hover:bg-slate-100 border-2 border-slate-900 rounded-xl shadow-[2px_2px_0px_#0F172A] transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-slate-900 text-white">
                      <Github className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-bold uppercase text-slate-500 block">
                        GitHub Profile
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-slate-900 font-mono">
                        github.com/Dwi-Pashaa
                      </span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500" />
                </a>

                {/* Google Scholar */}
                <a
                  href={portfolioData.profile.scholarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 bg-white hover:bg-yellow-50 border-2 border-slate-900 rounded-xl shadow-[2px_2px_0px_#0F172A] transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-accent-yellow text-slate-900">
                      <BookOpen className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-bold uppercase text-slate-500 block">
                        Google Scholar
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-slate-900">
                        Dwi Pasha (4+ Citations)
                      </span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500" />
                </a>

                {/* Location */}
                <div className="flex items-center gap-3 p-3 bg-slate-50 border-2 border-slate-900 rounded-xl shadow-[2px_2px_0px_#0F172A]">
                  <div className="p-2 rounded-lg bg-accent-coral text-white">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase text-slate-500 block">
                      Lokasi / Location
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-slate-900">
                      {t('contact.location')}
                    </span>
                  </div>
                </div>

              </div>

              {/* Status Note */}
              <div className="p-4 bg-accent-yellow-light border-2 border-slate-900 rounded-2xl flex items-start gap-2.5">
                <div className="p-1.5 rounded-lg bg-accent-yellow border border-slate-900 shrink-0">
                  <Sparkles className="w-4 h-4 text-slate-900" />
                </div>
                <p className="text-xs text-slate-800 font-semibold leading-relaxed">
                  {t('contact.statusNote')}
                </p>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Neo-Brutalist Message Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white border-[3.5px] border-slate-900 rounded-3xl p-6 sm:p-8 shadow-[8px_8px_0px_#0F172A]">
              
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="font-display font-black text-xl sm:text-2xl text-slate-900 pb-3 border-b-2 border-slate-900 flex items-center gap-2">
                    <Mail className="w-5 h-5 text-brand-blue" />
                    <span>{t('contact.formTitle')}</span>
                  </h3>

                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-mono font-black uppercase tracking-wider text-slate-900 mb-1.5">
                      {t('contact.nameLabel')} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t('contact.namePlaceholder')}
                      className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-900 rounded-xl font-medium text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-yellow-50/50 focus:border-brand-blue focus:shadow-brutal-sm transition-all"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-xs font-mono font-black uppercase tracking-wider text-slate-900 mb-1.5">
                      {t('contact.emailLabel')} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t('contact.emailPlaceholder')}
                      className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-900 rounded-xl font-medium text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-yellow-50/50 focus:border-brand-blue focus:shadow-brutal-sm transition-all"
                    />
                  </div>

                  {/* Category Selection */}
                  <div>
                    <label className="block text-xs font-mono font-black uppercase tracking-wider text-slate-900 mb-1.5">
                      {t('contact.serviceLabel')}
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-900 rounded-xl font-medium text-sm text-slate-900 focus:outline-none focus:bg-yellow-50/50 focus:border-brand-blue focus:shadow-brutal-sm transition-all"
                    >
                      <option value="">{t('contact.serviceSelect')}</option>
                      <option value="web">{t('contact.optWeb')}</option>
                      <option value="ai">{t('contact.optAi')}</option>
                      <option value="arch">{t('contact.optArch')}</option>
                      <option value="support">{t('contact.optSupport')}</option>
                      <option value="other">{t('contact.optOther')}</option>
                    </select>
                  </div>

                  {/* Message Textarea */}
                  <div>
                    <label className="block text-xs font-mono font-black uppercase tracking-wider text-slate-900 mb-1.5">
                      {t('contact.messageLabel')} <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t('contact.messagePlaceholder')}
                      className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-900 rounded-xl font-medium text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-yellow-50/50 focus:border-brand-blue focus:shadow-brutal-sm transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <BrutalistButton
                    type="submit"
                    variant="yellow"
                    size="lg"
                    className="w-full"
                    icon={Send}
                    disabled={submitting}
                    withConfetti={true}
                  >
                    {submitting ? t('contact.submitting') : t('contact.submitBtn')}
                  </BrutalistButton>
                </form>
              ) : (
                <div className="py-12 px-4 text-center space-y-5 animate-in fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 border-2 border-slate-900 shadow-brutal flex items-center justify-center mx-auto text-emerald-600">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  
                  <h3 className="font-display font-black text-2xl text-slate-900">
                    {t('contact.successTitle')}
                  </h3>

                  <p className="text-sm text-slate-600 font-medium max-w-md mx-auto">
                    {t('contact.successDesc')}
                  </p>

                  <div className="pt-4">
                    <BrutalistButton
                      variant="white"
                      size="md"
                      onClick={resetForm}
                    >
                      {t('contact.sendAnother')}
                    </BrutalistButton>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
