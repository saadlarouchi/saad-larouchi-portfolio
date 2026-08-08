import { useState, useRef, useEffect } from 'react';

export function Spotlight() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setOpacity(1);
    const handleMouseLeave = () => setOpacity(0);

    // We attach this to the window or parent to track mouse globally or locally
    // Since this goes in the Hero section, it will track on the window to be smooth
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={spotlightRef}
      className="pointer-events-none fixed inset-0 z-[1] transition-opacity duration-500 mix-blend-overlay"
      style={{
        opacity: opacity * 0.06,
        background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, var(--accent), transparent 40%)`,
      }}
    />
  );
}
