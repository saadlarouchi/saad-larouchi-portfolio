import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

export function Lightbox({ isOpen, onClose, title, children }: LightboxProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handler = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handler);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handler);
      };
    }
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="absolute inset-0"
            style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(8px)' }}
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.div
            className="relative z-10 w-full max-w-3xl max-h-[90vh] overflow-auto rounded-2xl p-6"
            style={{ background: 'var(--card-bg)' }}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            role="dialog"
            aria-modal="true"
            aria-label={title || 'Preview'}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full transition-colors cursor-pointer"
              style={{ background: 'var(--bg-tertiary)', color: 'var(--text-secondary)' }}
              aria-label="Close"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {title && (
              <h3 className="mb-4 pr-10 text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
                {title}
              </h3>
            )}

            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
