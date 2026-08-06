import { type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/cn';
import { fadeInUp, hoverScale } from '@/lib/motion';

interface CardProps {
  children: ReactNode;
  className?: string;
  glass?: boolean;
  hover?: boolean;
  animate?: boolean;
}

export function Card({ children, className, glass, hover = true, animate = true }: CardProps) {
  const Wrapper = animate ? motion.div : 'div';

  const animationProps = animate
    ? {
        variants: fadeInUp,
        initial: 'hidden' as const,
        whileInView: 'visible' as const,
        viewport: { once: true, margin: '-50px' },
        whileHover: hover ? hoverScale : undefined,
      }
    : {};

  return (
    <Wrapper
      className={cn(
        'rounded-2xl p-6 md:p-8 transition-all duration-300',
        glass && 'glass',
        className,
      )}
      style={{
        background: glass ? undefined : 'var(--card-bg)',
        border: `1px solid ${glass ? 'var(--glass-border)' : 'var(--card-border)'}`,
        boxShadow: 'var(--card-shadow)',
      }}
      {...animationProps}
    >
      {children}
    </Wrapper>
  );
}
