import { AnimatePresence, motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface PageTransitionProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export function PageTransition({ isOpen, onClose, children }: PageTransitionProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div className="fixed inset-0 z-[90]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <motion.div
            className="absolute inset-0"
            style={{ background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)' }}
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            className="absolute inset-0 overflow-y-auto"
            style={{ background: 'var(--bg)' }}
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
