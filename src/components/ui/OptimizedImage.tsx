import { cn } from '@/lib/cn';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  lazy?: boolean;
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  lazy = true,
}: OptimizedImageProps) {
  return (
    <div
      className={cn('overflow-hidden', className)}
      style={{
        background: 'linear-gradient(135deg, var(--bg-tertiary), var(--bg-secondary))',
      }}
    >
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={lazy ? 'lazy' : 'eager'}
        decoding="async"
        className="h-full w-full object-cover"
      />
    </div>
  );
}
