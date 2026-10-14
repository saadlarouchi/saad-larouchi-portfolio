import { type ReactNode } from 'react';

interface MagneticProps {
  children: ReactNode;
  className?: string;
}

export function Magnetic({ children, className = '' }: MagneticProps) {
  return <div className={`inline-block ${className}`}>{children}</div>;
}
