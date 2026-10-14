import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navItems } from '@/data/navigation';
import { useActiveSection } from '@/hooks/useActiveSection';
import { ThemeToggle } from '@/components/ThemeToggle';
export { ThemeToggle };
import { cn } from '@/lib/cn';
import { Container } from '@/components/ui/Container';
import { Magnetic } from '@/components/ui/Magnetic';
import { useTranslation } from 'react-i18next';

const sectionIds = navItems.map((item) => item.href.replace('#', ''));

const languages = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'ar', label: 'العربية', flag: '🇸🇦' },
];

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageChange = (code: string) => {
    i18n.changeLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-9 w-9 items-center justify-center rounded-lg transition-all duration-200 hover:scale-105 active:scale-95 transform-gpu cursor-pointer"
        style={{ color: 'var(--text-secondary)', background: 'var(--bg-tertiary)' }}
        aria-label="Change Language"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <line x1="2" y1="12" x2="22" y2="12"/>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-40 overflow-hidden rounded-xl border p-1"
            style={{ 
              background: 'var(--bg)', 
              borderColor: 'var(--border)',
              boxShadow: 'var(--shadow)',
              zIndex: 100
            }}
          >
            {languages.map((lng) => (
              <button
                key={lng.code}
                onClick={() => handleLanguageChange(lng.code)}
                className="flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2 text-sm transition-colors cursor-pointer"
                style={{
                  color: i18n.language === lng.code ? 'var(--text-primary)' : 'var(--text-secondary)',
                  background: i18n.language === lng.code ? 'var(--bg-tertiary)' : 'transparent'
                }}
                onMouseEnter={(e) => {
                  if (i18n.language !== lng.code) {
                    e.currentTarget.style.background = 'var(--bg-tertiary)';
                    e.currentTarget.style.color = 'var(--text-primary)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (i18n.language !== lng.code) {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = 'var(--text-secondary)';
                  }
                }}
              >
                <span className="flex items-center gap-2">
                  <span>{lng.flag}</span>
                  <span className="font-medium">{lng.label}</span>
                </span>
                {i18n.language === lng.code && (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--accent)' }}>
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeId = useActiveSection(sectionIds);
  const { t } = useTranslation();

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="fixed top-0 right-0 left-0 z-50 glass backdrop-blur-2xl transition-all duration-300" style={{ height: 'var(--nav-height)' }}>
      <Container className="flex h-full items-center justify-between">
        {/* Logo */}
        <a href="#home" className="text-lg font-bold tracking-tight" style={{ color: 'var(--text-primary)' }} aria-label={t('nav.home')}>
          <span style={{ color: 'var(--accent)' }}>S</span>aad
          <span className="ml-1 font-light" style={{ color: 'var(--text-secondary)' }}>L.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-2 md:flex" aria-label="Main navigation">
          {navItems.map((item) => {
            const id = item.href.replace('#', '');
            const isActive = activeId === id;
            return (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  'relative rounded-full px-4 py-2 text-sm font-medium transition-colors',
                  isActive ? 'text-[var(--text-primary)]' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-full"
                    style={{ background: 'var(--bg-tertiary)' }}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{t(`nav.${id}`)}</span>
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Magnetic>
            <LanguageSwitcher />
          </Magnetic>

          {/* Theme Toggle */}
          <Magnetic>
            <ThemeToggle />
          </Magnetic>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-lg transition-all duration-200 hover:scale-105 active:scale-95 transform-gpu md:hidden cursor-pointer"
            style={{ color: 'var(--text-secondary)', background: 'var(--bg-tertiary)' }}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {mobileOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop overlay to cleanly obscure/dim the Hero section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 top-[var(--nav-height)] bg-black/60 backdrop-blur-sm z-40 md:hidden"
              aria-hidden="true"
            />

            {/* Dedicated Mobile Menu Panel */}
            <motion.nav
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ type: 'spring', damping: 25, stiffness: 250 }}
              className="fixed top-[var(--nav-height)] inset-x-0 w-full z-50 p-6 md:hidden shadow-2xl border-b overflow-y-auto max-h-[calc(100dvh-var(--nav-height))]"
              style={{
                background: 'var(--bg)',
                borderColor: 'var(--border)',
              }}
              aria-label="Mobile navigation"
            >
              <div className="flex flex-col gap-2 max-w-md mx-auto">
                {navItems.map((item) => {
                  const id = item.href.replace('#', '');
                  const isActive = activeId === id;
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-semibold transition-all duration-200"
                      style={{
                        color: isActive ? 'var(--accent)' : 'var(--text-primary)',
                        background: isActive ? 'var(--accent-light)' : 'transparent',
                      }}
                    >
                      <span>{t(`nav.${id}`)}</span>
                      {isActive && (
                        <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
                      )}
                    </a>
                  );
                })}
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
