import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface AnimatedCounterProps {
  value: string;
  label: string;
}

export function AnimatedCounter({ value, label }: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    if (!isInView) return;

    const numericMatch = value.match(/^(\d+)/);
    if (!numericMatch) {
      setDisplay(value);
      return;
    }

    const target = parseInt(numericMatch[1], 10);
    const suffix = value.slice(numericMatch[1].length);
    const duration = 1500;
    const steps = 40;
    const stepTime = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += target / steps;
      if (current >= target) {
        setDisplay(`${target}${suffix}`);
        clearInterval(timer);
      } else {
        setDisplay(`${Math.floor(current)}${suffix}`);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <div className="text-3xl font-bold sm:text-4xl" style={{ color: 'var(--accent)' }}>
        {display}
      </div>
      <div className="mt-1 text-sm" style={{ color: 'var(--text-secondary)' }}>
        {label}
      </div>
    </motion.div>
  );
}
