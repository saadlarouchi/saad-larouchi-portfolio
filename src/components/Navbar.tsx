import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navItems } from '@/data/navigation';
import { useActiveSection } from '@/hooks/useActiveSection';
import { useTheme } from '@/providers/ThemeProvider';
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

function LanguageSwitcher() {
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
        className="flex h-9 w-9 items-center justify-center rounded-lg transition-colors cursor-pointer"
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
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();

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
            <button
              onClick={toggleTheme}
              className="flex h-9 w-9 items-center justify-center rounded-lg transition-colors cursor-pointer"
              style={{ color: 'var(--text-secondary)', background: 'var(--bg-tertiary)' }}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
              )}
            </button>
          </Magnetic>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-lg md:hidden cursor-pointer"
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
          <motion.nav
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 250 }}
            className="fixed top-[var(--nav-height)] right-0 bottom-0 w-72 p-6 md:hidden"
            style={{ background: 'var(--bg)', borderInlineStart: '1px solid var(--border)' }}
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => {
                const id = item.href.replace('#', '');
                const isActive = activeId === id;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-lg px-4 py-3 text-base font-medium transition-colors"
                    style={{
                      color: isActive ? 'var(--accent)' : 'var(--text-primary)',
                      background: isActive ? 'var(--accent-light)' : 'transparent',
                    }}
                  >
                    {t(`nav.${id}`)}
                  </a>
                );
              })}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
