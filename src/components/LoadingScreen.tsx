import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center"
          style={{ background: 'var(--bg)' }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="flex flex-col items-center gap-4"
          >
            {/* SL Monogram */}
            <motion.div
              className="flex h-16 w-16 items-center justify-center rounded-2xl text-2xl font-bold"
              style={{ background: 'var(--text-primary)', color: 'var(--bg)' }}
              animate={{
                borderRadius: ['16px', '24px', '16px'],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              SL
            </motion.div>

            {/* Loading bar */}
            <div className="h-1 w-24 overflow-hidden rounded-full" style={{ background: 'var(--border)' }}>
              <motion.div
                className="h-full rounded-full"
                style={{ background: 'var(--text-primary)' }}
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 1, ease: 'easeInOut' }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
