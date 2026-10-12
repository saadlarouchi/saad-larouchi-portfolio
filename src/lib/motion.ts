import type { Variants } from 'framer-motion';

const ELEGANT_EASE = [0.16, 1, 0.3, 1] as const; // Premium cubic-bezier
const DURATION = 0.8;

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: DURATION, ease: ELEGANT_EASE } },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: DURATION, ease: ELEGANT_EASE } },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: DURATION, ease: ELEGANT_EASE } },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: DURATION, ease: ELEGANT_EASE } },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: DURATION, ease: ELEGANT_EASE } },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: DURATION, ease: ELEGANT_EASE } },
};

export const pageTransition: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: ELEGANT_EASE } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.4, ease: [0.5, 0, 0.2, 1] } },
};

export const hoverScale: any = {
  scale: 1.02,
  transition: { duration: 0.3, ease: ELEGANT_EASE },
};

export const tapScale: any = {
  scale: 0.98,
  transition: { duration: 0.15 },
};

export const listStagger = (delay = 0.12): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren: delay } },
});
