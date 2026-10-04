import React, { useState } from 'react';
import { Mail, Send, CheckCircle, ExternalLink, Linkedin, Github, MapPin } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { BrutalistButton } from '../common/BrutalistButton';
import { useLanguage } from '../../context/LanguageContext';
import { portfolioData } from '../../data/portfolioData';
import confetti from 'canvas-confetti';

export const Contact = () => {
  const { language, t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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
          particleCount: 50,
          spread: 60,
          origin: { y: 0.6 },
          colors: ['#ffd43b', '#3b82f6', '#111111']
        });
      } catch (err) {}
    }, 500);
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', message: '' });
    setSubmitted(false);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t-2 border-ink">
      <div className="max-w-[1100px] mx-auto">
        
        {/* Section Header */}
        <SectionHeader
          title={t('contact.sectionTitle')}
          subtitle={t('contact.sectionSubtitle')}
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contacts List (5 Cols) */}
          <div className="lg:col-span-5 bg-surface border-2 border-ink rounded-xl p-6 sm:p-7 shadow-brutal space-y-6">
            <h3 className="font-display font-black text-xl text-ink pb-3 border-b-2 border-ink">
              {t('contact.directContactTitle')}
            </h3>

            <div className="space-y-4 text-sm font-mono">
              {/* Email */}
              <div className="flex items-start gap-3 p-3 bg-bg border-2 border-ink rounded-lg shadow-brutal-sm">
                <div className="p-2 bg-[#2563eb] text-white rounded-md border-2 border-ink shrink-0 shadow-[1px_1px_0_#111111]">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <div className="space-y-0.5 overflow-hidden">
                  <span className="text-muted block font-bold text-xs uppercase">Email</span>
                  <a
                    href={`mailto:${portfolioData.profile.email}`}
                    className="text-ink font-bold hover:text-brand-blue hover:underline block truncate text-xs sm:text-sm"
                  >
                    {portfolioData.profile.email}
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-start gap-3 p-3 bg-bg border-2 border-ink rounded-lg shadow-brutal-sm">
                <div className="p-2 bg-[#0077B5] text-white rounded-md border-2 border-ink shrink-0 shadow-[1px_1px_0_#111111]">
                  <Linkedin className="w-4 h-4 text-white" />
                </div>
                <div className="space-y-0.5">
                  <span className="text-muted block font-bold text-xs uppercase">LinkedIn</span>
                  <a
                    href={portfolioData.profile.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-ink font-bold hover:text-brand-blue hover:underline text-xs sm:text-sm"
                  >
                    <span>linkedin.com/in/dwipasha</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* GitHub */}
              <div className="flex items-start gap-3 p-3 bg-bg border-2 border-ink rounded-lg shadow-brutal-sm">
                <div className="p-2 bg-[#111111] text-white rounded-md border-2 border-ink shrink-0 shadow-[1px_1px_0_#111111]">
                  <Github className="w-4 h-4 text-white" />
                </div>
                <div className="space-y-0.5">
                  <span className="text-muted block font-bold text-xs uppercase">GitHub</span>
                  <a
                    href={portfolioData.profile.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-ink font-bold hover:text-brand-blue hover:underline text-xs sm:text-sm"
                  >
                    <span>github.com/Dwi-Pashaa</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3 p-3 bg-bg border-2 border-ink rounded-lg shadow-brutal-sm">
                <div className="p-2 bg-[#ef4444] text-white rounded-md border-2 border-ink shrink-0 shadow-[1px_1px_0_#111111]">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <div className="space-y-0.5">
                  <span className="text-muted block font-bold text-xs uppercase">Location</span>
                  <p className="text-ink font-bold text-xs sm:text-sm">
                    {t('contact.location')}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-accent-yellow-light border-2 border-ink rounded-lg text-sm text-ink font-medium shadow-brutal-sm">
              {t('contact.statusNote')}
            </div>
          </div>

          {/* Right Column: Simple Clean Form (7 Cols) */}
          <div className="lg:col-span-7 bg-surface border-2 border-ink rounded-lg p-6 sm:p-8 shadow-brutal">
            
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="pb-2 border-b-2 border-ink">
                  <h3 className="font-display font-black text-xl sm:text-2xl text-ink">
                    {t('contact.formTitle')}
                  </h3>
                  <p className="text-sm text-muted font-normal mt-1">
                    {language === 'id' ? 'Punya ide atau mau ngobrol santai? Kirim aja pesan di bawah.' : 'Have an idea or want to chat? Drop a message below.'}
                  </p>
                </div>

                {/* Name Input */}
                <div>
                  <label className="block text-sm font-display font-bold text-ink mb-1.5">
                    {t('contact.nameLabel')} <span className="text-muted">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t('contact.namePlaceholder')}
                    className="w-full px-4 py-3 bg-bg border-2 border-ink rounded-lg text-sm text-ink placeholder:text-muted focus:outline-none focus:bg-surface focus:shadow-brutal transition-all"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label className="block text-sm font-display font-bold text-ink mb-1.5">
                    {t('contact.emailLabel')} <span className="text-muted">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t('contact.emailPlaceholder')}
                    className="w-full px-4 py-3 bg-bg border-2 border-ink rounded-lg text-sm text-ink placeholder:text-muted focus:outline-none focus:bg-surface focus:shadow-brutal transition-all"
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <label className="block text-sm font-display font-bold text-ink mb-1.5">
                    {t('contact.messageLabel')} <span className="text-muted">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t('contact.messagePlaceholder')}
                    className="w-full px-4 py-3 bg-bg border-2 border-ink rounded-lg text-sm text-ink placeholder:text-muted focus:outline-none focus:bg-surface focus:shadow-brutal transition-all resize-none"
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
              <div className="py-10 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-accent border-2 border-ink shadow-brutal flex items-center justify-center mx-auto text-ink">
                  <CheckCircle className="w-6 h-6" />
                </div>
                
                <h3 className="font-display font-black text-2xl text-ink">
                  {t('contact.successTitle')}
                </h3>

                <p className="text-sm text-muted max-w-md mx-auto">
                  {t('contact.successDesc')}
                </p>

                <div className="pt-2">
                  <BrutalistButton
                    variant="outline"
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
    </section>
  );
};

