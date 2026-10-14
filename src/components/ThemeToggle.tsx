import { motion } from 'framer-motion';
import { useTheme } from '@/providers/ThemeProvider';

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className = '' }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      dir="ltr"
      onClick={toggleTheme}
      className={`relative inline-block h-8 w-16 rounded-full overflow-hidden transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 select-none ${className}`}
      style={{
        backgroundColor: isDark ? '#1f1f23' : '#d5d5d8',
      }}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      role="switch"
      aria-checked={isDark}
    >
      {/* Sliding thumb indicator */}
      <motion.div
        className="absolute top-[3px] left-[3px] z-0 h-[26px] w-[26px] rounded-full"
        style={{
          backgroundColor: isDark ? '#2e2e34' : '#ffffff',
          boxShadow: isDark
            ? '0 1px 3px rgba(0, 0, 0, 0.4)'
            : '0 1px 2px rgba(0, 0, 0, 0.12), 0 1px 1px rgba(0, 0, 0, 0.06)',
        }}
        animate={{ x: isDark ? 32 : 0 }}
        transition={{ type: 'spring', stiffness: 500, damping: 35 }}
      />

      {/* Sun Icon (Fixed Left) */}
      <span className="absolute top-[3px] left-[3px] z-10 flex h-[26px] w-[26px] items-center justify-center pointer-events-none">
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          className="transition-colors duration-200"
          style={{
            color: isDark ? '#71717a' : '#3f3f46',
          }}
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="3.6" fill="currentColor" stroke="none" />
          <line x1="12" y1="2" x2="12" y2="4.8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
          <line x1="12" y1="19.2" x2="12" y2="22" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
          <line x1="2" y1="12" x2="4.8" y2="12" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
          <line x1="19.2" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
          <line x1="4.93" y1="4.93" x2="6.93" y2="6.93" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
          <line x1="17.07" y1="17.07" x2="19.07" y2="19.07" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
          <line x1="4.93" y1="19.07" x2="6.93" y2="17.07" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
          <line x1="17.07" y1="6.93" x2="19.07" y2="4.93" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      </span>

      {/* Moon Icon (Fixed Right) */}
      <span className="absolute top-[3px] right-[3px] z-10 flex h-[26px] w-[26px] items-center justify-center pointer-events-none">
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="currentColor"
          stroke="none"
          className="transition-colors duration-200"
          style={{
            color: isDark ? '#ffffff' : '#8e8e93',
          }}
          aria-hidden="true"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      </span>
    </button>
  );
}
