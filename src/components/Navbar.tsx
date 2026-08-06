import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navItems } from '@/data/navigation';
import { useActiveSection } from '@/hooks/useActiveSection';
import { useTheme } from '@/providers/ThemeProvider';
import { cn } from '@/lib/cn';
import { Container } from '@/components/ui/Container';

const sectionIds = navItems.map((item) => item.href.replace('#', ''));

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeId = useActiveSection(sectionIds);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed top-0 right-0 left-0 z-50 glass backdrop-blur-2xl transition-all duration-300" style={{ height: 'var(--nav-height)' }}>
      <Container className="flex h-full items-center justify-between">
        {/* Logo */}
        <a href="#home" className="text-lg font-bold tracking-tight" style={{ color: 'var(--text-primary)' }} aria-label="Home">
          <span style={{ color: 'var(--accent)' }}>S</span>aad
          <span className="ml-1 font-light" style={{ color: 'var(--text-secondary)' }}>L.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-2 md:flex" aria-label="Main navigation">
          {navItems.map((item) => {
            const isActive = activeId === item.href.replace('#', '');
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
                <span className="relative z-10">{item.label}</span>
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          {/* Theme Toggle */}
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
            style={{ background: 'var(--bg)', borderLeft: '1px solid var(--border)' }}
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => {
                const isActive = activeId === item.href.replace('#', '');
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
                    {item.label}
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
