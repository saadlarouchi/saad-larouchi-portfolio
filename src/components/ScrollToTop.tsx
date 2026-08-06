import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.1, rotate: -10 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed right-6 bottom-6 z-50 flex h-11 w-11 items-center justify-center rounded-full transition-all duration-300 cursor-pointer"
          style={{ 
            background: 'var(--card-bg)', 
            color: 'var(--text-primary)',
            border: '1px solid var(--border)',
            boxShadow: 'var(--card-shadow)'
          }}
          aria-label="Scroll to top"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="18 15 12 9 6 15" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
