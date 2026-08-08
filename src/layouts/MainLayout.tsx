import type { ReactNode } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ScrollProgress } from '@/components/ScrollProgress';
import { ScrollToTop } from '@/components/ScrollToTop';
import { Spotlight } from '@/components/ui/Spotlight';

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Spotlight />
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <ScrollProgress />
      <Navbar />
      <main id="main" style={{ paddingTop: 'var(--nav-height)' }}>
        {children}
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
