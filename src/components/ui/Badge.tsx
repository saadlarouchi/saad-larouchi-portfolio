import { cn } from '@/lib/cn';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'accent' | 'success' | 'warning' | 'learning';
  className?: string;
}

const badgeStyles = {
  default: { background: 'var(--bg-tertiary)', color: 'var(--text-secondary)', border: '1px solid var(--border)' },
  accent: { background: 'var(--accent-light)', color: 'var(--accent)', border: '1px solid color-mix(in srgb, var(--accent) 20%, transparent)' },
  success: { background: '#dcfce7', color: '#16a34a', border: '1px solid #bbf7d0' },
  warning: { background: '#fef3c7', color: '#d97706', border: '1px solid #fde68a' },
  learning: { background: '#fef3c7', color: '#d97706', border: '1px solid #fde68a' },
};

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn('inline-flex items-center rounded-full px-3.5 py-1.5 text-[11px] font-bold tracking-wide uppercase', className)}
      style={badgeStyles[variant]}
    >
      {children}
    </span>
  );
}
