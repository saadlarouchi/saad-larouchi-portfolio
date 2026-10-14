import { type ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/cn';

interface FilterButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isActive: boolean;
}

export function FilterButton({ isActive, className, children, ...props }: FilterButtonProps) {
  return (
    <button
      type="button"
      className={cn(
        'rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 cursor-pointer hover:scale-[1.02] active:scale-[0.98] transform-gpu',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2',
        'disabled:pointer-events-none disabled:opacity-50',
        isActive
          ? 'bg-[var(--accent)] text-[var(--accent-foreground)] shadow-md hover:bg-[var(--accent-hover)]'
          : 'bg-[var(--bg-tertiary)] text-[var(--text-secondary)] hover:bg-[var(--bg-secondary)] hover:text-[var(--text-primary)] hover:shadow-sm',
        className
      )}
      aria-pressed={isActive}
      {...props}
    >
      {children}
    </button>
  );
}
