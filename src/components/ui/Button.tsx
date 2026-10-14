import { type ButtonHTMLAttributes, type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/cn';
import { tapScale } from '@/lib/motion';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: ReactNode;
  children: ReactNode;
  href?: string;
  target?: string;
  rel?: string;
}

const variants = {
  primary:
    'bg-[var(--accent)] text-[var(--accent-foreground)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] drop-shadow-sm hover:bg-[var(--accent-hover)] hover:shadow-[0_0_20px_var(--accent-bg),inset_0_1px_1px_rgba(255,255,255,0.2)] hover:scale-[1.02] active:scale-[0.98] transform-gpu',
  secondary:
    'font-semibold border hover:bg-[var(--bg-tertiary)] hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transform-gpu',
  ghost:
    'font-medium hover:bg-[var(--bg-tertiary)] hover:text-[var(--text-primary)] hover:scale-[1.02] active:scale-[0.98] transform-gpu',
};

const sizes = {
  sm: 'px-6 py-2.5 text-sm gap-2 rounded-xl',
  md: 'px-8 py-3.5 text-sm font-semibold gap-2 rounded-xl',
  lg: 'px-10 py-4 text-base font-semibold tracking-tight gap-2.5 rounded-2xl',
};

export function Button({
  variant = 'primary',
  size = 'md',
  icon,
  children,
  className,
  href,
  target,
  rel,
  ...props
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center transition-all duration-200 cursor-pointer',
    variants[variant],
    sizes[size],
    className,
  );

  const style: React.CSSProperties =
    variant === 'primary'
      ? { background: 'var(--accent)', color: 'var(--accent-foreground)' }
      : variant === 'secondary'
        ? { background: 'var(--card-bg)', color: 'var(--text-primary)', borderColor: 'var(--border)' }
        : { color: 'var(--text-secondary)' };

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        className={classes}
        style={style}
        whileTap={tapScale}
      >
        {icon && <span className="flex shrink-0">{icon}</span>}
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button className={classes} style={style} whileTap={tapScale} {...(props as object)}>
      {icon && <span className="flex shrink-0">{icon}</span>}
      {children}
    </motion.button>
  );
}
