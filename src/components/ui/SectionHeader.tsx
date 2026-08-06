import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/motion';
import { cn } from '@/lib/cn';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  badge?: string;
  className?: string;
  align?: 'left' | 'center';
}

export function SectionHeader({ title, subtitle, badge, className, align = 'center' }: SectionHeaderProps) {
  const isCenter = align === 'center';

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className={cn('mb-8 md:mb-12', isCenter ? 'text-center' : 'text-left', className)}
    >
      {badge && (
        <span className="mb-4 inline-block rounded-full px-4 py-1.5 text-xs font-bold tracking-widest uppercase" style={{ background: 'var(--accent-light)', color: 'var(--accent)' }}>
          {badge}
        </span>
      )}
      <h2
        className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
        style={{ color: 'var(--text-primary)' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn('mt-6 max-w-2xl text-lg lg:text-xl', isCenter && 'mx-auto')}
          style={{ color: 'var(--text-secondary)' }}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
