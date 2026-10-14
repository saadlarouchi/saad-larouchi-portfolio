import { useState, type FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { MapPin, Send, User, Mail, MessageSquare, Lock, Type } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Magnetic } from '@/components/ui/Magnetic';
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';
import { useTheme } from '@/providers/ThemeProvider';
import { contactInfo, socialLinks } from '@/data/social';
import { fadeInUp, staggerContainer } from '@/lib/motion';
import { useTranslation } from 'react-i18next';

export function Contact() {
  const { t } = useTranslation();
  const { copied, copy } = useCopyToClipboard();
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      return;
    }

    setFormState('submitting');
    
    try {
      // Send Contact Us template
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      // Send Auto Reply template
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setFormState('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setFormState('idle'), 4000);
    } catch (error: any) {
      console.error('EmailJS error:', error);
      setErrorMessage(error?.text || error?.message || t('contact.form.error_message'));
      setFormState('error');
      setTimeout(() => {
        setFormState('idle');
        setErrorMessage('');
      }, 4000);
    }
  };

  return (<section id="contact" className="relative py-20 md:py-24" style={{ background: 'var(--bg-secondary)' }}>
    <Container>
      <SectionHeader
        title={t('contact.section_title')}
        subtitle={t('contact.subtitle')}
        badge={t('contact.badge')}
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="grid gap-8 lg:grid-cols-2"
      >
        {/* Info */}
        <motion.div variants={fadeInUp} className="space-y-8 lg:pr-8">
          <div>
            <h3 className="text-2xl font-bold tracking-tight mb-3" style={{ color: 'var(--text-primary)' }}>
              {t('contact.info_title')}
            </h3>
            <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {t('contact.info_description')}
            </p>
          </div>

          <div className="space-y-4">
            {/* Email */}
            <div
              className="flex items-center justify-between rounded-xl p-4"
              style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)' }}
            >
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--text-tertiary)' }}>{t('contact.email_label')}</span>
                <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>{contactInfo.email}</p>
              </div>
              <button
                onClick={() => copy(contactInfo.email)}
                className="rounded-lg px-3 py-1.5 text-xs font-medium transition-all duration-200 hover:scale-105 active:scale-95 transform-gpu cursor-pointer"
                style={{ background: copied ? '#dcfce7' : 'var(--accent-light)', color: copied ? '#16a34a' : 'var(--accent)' }}
              >
                {copied ? t('contact.copied') : t('contact.copy')}
              </button>
            </div>

            {/* Phone */}
            <div
              className="rounded-xl p-4"
              style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)' }}
            >
              <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--text-tertiary)' }}>{t('contact.phone_label')}</span>
              <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} style={{ color: 'var(--text-primary)' }}>
                  {contactInfo.phone}
                </a>
              </p>
            </div>

            {/* Location — Mini Map */}
            <div className="flex flex-col">
              <span
                className="mb-2 text-xs font-semibold uppercase tracking-wider"
                style={{ color: 'var(--text-tertiary)' }}
              >
                {t('contact.location_label')}
              </span>

              <a
                href="https://www.google.com/maps/place/Berrechid,+Morocco"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block overflow-hidden rounded-xl transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  border: '1px solid var(--card-border)',
                  boxShadow: 'var(--card-shadow)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-hover)';
                  e.currentTarget.style.boxShadow = 'var(--card-shadow-hover)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--card-border)';
                  e.currentTarget.style.boxShadow = 'var(--card-shadow)';
                }}
              >
                <iframe
                  title="Berrechid, Morocco"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53450.0!2d-7.5872!3d33.2654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda62d6056bc9f41%3A0xd629e7e5089f78c2!2sBerrechid%2C%20Morocco!5e0!3m2!1sen!2sma!4v1700000000000"
                  className="pointer-events-none h-[240px] w-full"
                  style={{
                    border: 'none',
                    borderRadius: '12px',
                    filter: isDark
                      ? 'grayscale(100%) invert(92%) contrast(83%) brightness(80%)'
                      : 'grayscale(20%) brightness(97%)',
                  }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen={false}
                />

                {/* Subtle overlay for dark-mode blending */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-xl"
                  style={{
                    background: 'linear-gradient(180deg, transparent 60%, var(--card-bg) 100%)',
                    mixBlendMode: 'multiply',
                  }}
                />

                {/* Centered Map Pin */}
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                  <div className="relative flex flex-col items-center justify-center animate-map-pin-float transition-transform duration-300 group-hover:scale-[1.08]">
                    <div
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-10 w-10 rounded-full blur-md opacity-30"
                      style={{ background: 'var(--accent)' }}
                    />
                    <MapPin
                      size={28}
                      strokeWidth={2}
                      className="drop-shadow-md relative z-10"
                      style={{
                        color: 'var(--text-primary)',
                        fill: 'var(--card-bg)'
                      }}
                    />
                  </div>
                </div>
              </a>

              <div className="mt-4 flex flex-col items-start">
                <span
                  className="mb-[10px] inline-block rounded-full px-4 py-1.5 text-xs font-bold tracking-widest uppercase"
                  style={{ background: 'var(--accent-light)', color: 'var(--accent)' }}
                >
                  {t('contact.available_work')}
                </span>
                <p
                  className="text-[14px] font-medium leading-[1.6]"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {t('contact.available_desc')}
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              {socialLinks.map((link) => (
                <Magnetic key={link.name}>
                  <a
                    href={link.url}
                    target={link.icon !== 'email' ? '_blank' : undefined}
                    className="flex h-14 w-14 items-center justify-center rounded-[1.25rem] transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 transform-gpu"
                    style={{ background: 'var(--bg-tertiary)', color: 'var(--text-secondary)', border: '1px solid var(--border)' }}
                    aria-label={link.name}
                  >
                    {link.icon === 'github' && (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                    )}
                    {link.icon === 'linkedin' && (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                    )}
                    {link.icon === 'instagram' && (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.359 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.344-2.235.404-1.274.055-1.649.067-4.859.067-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.757 6.162 6.162 6.162 3.405 0 6.162-2.757 6.162-6.162 0-3.402-2.757-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                    )}
                    {link.icon === 'email' && (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                    )}
                  </a>
                </Magnetic>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Form */}
        <motion.form
          variants={fadeInUp}
          onSubmit={handleSubmit}
          className="relative flex flex-col justify-between overflow-hidden rounded-[2rem] p-8 md:p-10 shadow-2xl transition-all duration-300"
          style={{
            background: 'var(--card-bg)',
            border: '1px solid var(--card-border)',
            boxShadow: '0 20px 40px -15px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.05)'
          }}
        >
          {/* Subtle top gradient overlay */}
          <div
            className="absolute left-0 right-0 top-0 h-[300px] pointer-events-none opacity-40 transition-opacity duration-500"
            style={{ background: 'radial-gradient(ellipse at top, var(--accent-light) 0%, transparent 70%)' }}
          />

          <div className="relative z-10 flex flex-col flex-1">
            {/* Header */}
            <div className="mb-8 flex flex-col items-center text-center">
              <div
                className="mb-5 flex h-16 w-16 items-center justify-center rounded-full shadow-sm transition-transform duration-300 hover:scale-105"
                style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border)' }}
              >
                <MessageSquare size={24} style={{ color: 'var(--text-primary)' }} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold tracking-tight mb-2" style={{ color: 'var(--text-primary)' }}>{t('contact.form.title')}</h3>
              <p className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>{t('contact.form.subtitle')}</p>
            </div>

            {/* Fields */}
            <div className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                {/* Name */}
                <div className="group relative">
                  <label htmlFor="name" className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-tertiary)] pointer-events-none transition-colors group-focus-within:text-[var(--accent)]">
                    <User size={18} strokeWidth={2} />
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder={t('contact.form.name_placeholder')}
                    value={formData.name}
                    onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                    className="w-full rounded-xl bg-[var(--bg-tertiary)] py-4 pl-11 pr-4 text-sm font-medium text-[var(--text-primary)] outline-none border border-[var(--border)] transition-all duration-300 placeholder:text-[var(--text-tertiary)] focus:border-[var(--accent)] focus:ring-[3px] focus:ring-[var(--accent)]/15 hover:border-[var(--text-tertiary)]"
                    autoComplete="name"
                  />
                </div>
                {/* Email */}
                <div className="group relative">
                  <label htmlFor="email" className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-tertiary)] pointer-events-none transition-colors group-focus-within:text-[var(--accent)]">
                    <Mail size={18} strokeWidth={2} />
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder={t('contact.form.email_placeholder')}
                    value={formData.email}
                    onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                    className="w-full rounded-xl bg-[var(--bg-tertiary)] py-4 pl-11 pr-4 text-sm font-medium text-[var(--text-primary)] outline-none border border-[var(--border)] transition-all duration-300 placeholder:text-[var(--text-tertiary)] focus:border-[var(--accent)] focus:ring-[3px] focus:ring-[var(--accent)]/15 hover:border-[var(--text-tertiary)]"
                    autoComplete="email"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="group relative">
                <label htmlFor="subject" className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-tertiary)] pointer-events-none transition-colors group-focus-within:text-[var(--accent)]">
                  <Type size={18} strokeWidth={2} />
                </label>
                <input
                  id="subject"
                  type="text"
                  required
                  placeholder={t('contact.form.subject_placeholder')}
                  value={formData.subject}
                  onChange={(e) => setFormData((p) => ({ ...p, subject: e.target.value }))}
                  className="w-full rounded-xl bg-[var(--bg-tertiary)] py-4 pl-11 pr-4 text-sm font-medium text-[var(--text-primary)] outline-none border border-[var(--border)] transition-all duration-300 placeholder:text-[var(--text-tertiary)] focus:border-[var(--accent)] focus:ring-[3px] focus:ring-[var(--accent)]/15 hover:border-[var(--text-tertiary)]"
                />
              </div>

              {/* Message */}
              <div className="group relative">
                <textarea
                  id="message"
                  required
                  rows={5}
                  placeholder={t('contact.form.message_placeholder')}
                  value={formData.message}
                  onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
                  className="w-full resize-none rounded-xl bg-[var(--bg-tertiary)] p-5 text-sm font-medium text-[var(--text-primary)] outline-none border border-[var(--border)] transition-all duration-300 placeholder:text-[var(--text-tertiary)] focus:border-[var(--accent)] focus:ring-[3px] focus:ring-[var(--accent)]/15 hover:border-[var(--text-tertiary)]"
                />
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="mt-8 flex flex-col items-center">
              <button
                type="submit"
                disabled={formState === 'submitting' || formState === 'success'}
                className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-[1.25rem] py-4 text-sm font-bold shadow-[0_8px_20px_-8px_var(--text-primary)] transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_12px_25px_-8px_var(--text-primary)] active:scale-[0.99] disabled:opacity-70 disabled:hover:scale-100 transform-gpu"
                style={{ background: 'var(--text-primary)', color: 'var(--bg)' }}
              >
                <div className="relative z-10 flex items-center gap-2">
                  <span>{formState === 'submitting' ? t('contact.form.sending') : formState === 'success' ? t('contact.form.sent') : t('contact.form.send_button')}</span>
                  {formState !== 'success' && (
                    <Send size={16} strokeWidth={2.5} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  )}
                </div>
                {/* Subtle shine effect on hover */}
                <div className="absolute inset-0 z-0 -translate-x-full bg-gradient-to-r from-transparent via-[var(--bg)]/10 to-transparent transition-transform duration-700 ease-in-out group-hover:translate-x-full" />
              </button>

              <div className="mt-5 flex items-center justify-center gap-1.5 opacity-70 transition-opacity duration-300 hover:opacity-100">
                <Lock size={12} style={{ color: 'var(--text-tertiary)' }} strokeWidth={2.5} />
                <span className="text-[11px] font-semibold tracking-wide uppercase" style={{ color: 'var(--text-tertiary)' }}>
                  {t('contact.form.privacy_notice')}
                </span>
              </div>
            </div>

            {formState === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                className="absolute inset-0 z-20 flex flex-col items-center justify-center rounded-[2rem] backdrop-blur-md transition-all duration-500"
                style={{ background: 'color-mix(in srgb, var(--card-bg) 85%, transparent)' }}
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500 shadow-[0_0_20px_-5px_rgba(16,185,129,0.5)]">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <h4 className="text-xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>{t('contact.form.success_title')}</h4>
                <p className="text-sm font-medium text-center px-6" style={{ color: 'var(--text-secondary)' }}>
                  {t('contact.form.success_message')}
                </p>
              </motion.div>
            )}

            {formState === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                className="absolute inset-0 z-20 flex flex-col items-center justify-center rounded-[2rem] backdrop-blur-md transition-all duration-500"
                style={{ background: 'color-mix(in srgb, var(--card-bg) 85%, transparent)' }}
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-500/10 text-red-500 shadow-[0_0_20px_-5px_rgba(239,68,68,0.5)]">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </div>
                <h4 className="text-xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>{t('contact.form.error_title')}</h4>
                <p className="text-sm font-medium text-center px-6" style={{ color: 'var(--text-secondary)' }}>
                  {errorMessage || t('contact.form.error_message')}
                </p>
              </motion.div>
            )}
          </div>
        </motion.form>
      </motion.div>
    </Container>
  </section>
  );
}
