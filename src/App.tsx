import { useState } from 'react';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { MainLayout } from '@/layouts/MainLayout';
import { Hero } from '@/sections/Hero';
import { About } from '@/sections/About';
import { Skills } from '@/sections/Skills';
import { Projects } from '@/sections/Projects';
import { Certificates } from '@/sections/Certificates';
import { Experience } from '@/sections/Experience';
import { Contact } from '@/sections/Contact';
import { CaseStudy } from '@/pages/CaseStudy';
import { PageTransition } from '@/components/ui/PageTransition';
import { LoadingScreen } from '@/components/LoadingScreen';
import type { Project } from '@/types';

function App() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <ThemeProvider>
      <LoadingScreen />
      
      <MainLayout>
        <Hero />
        <About />
        <Skills />
        <Projects onOpenCaseStudy={setActiveProject} />
        <Certificates />
        <Experience />
        <Contact />
      </MainLayout>

      <PageTransition isOpen={!!activeProject} onClose={() => setActiveProject(null)}>
        {activeProject && <CaseStudy project={activeProject} onClose={() => setActiveProject(null)} />}
      </PageTransition>
    </ThemeProvider>
  );
}

export default App;
