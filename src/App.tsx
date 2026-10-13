import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
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
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
    
    const seoTitles: Record<string, string> = {
      en: 'Saad Larouchi — Mobile & Web Developer',
      fr: 'Saad Larouchi — Développeur Mobile & Web',
      ar: 'سعد العروشي — مطور هواتف ومواقع ويب'
    };
    
    const seoDesc: Record<string, string> = {
      en: 'Portfolio of Saad Larouchi, Mobile and Web Developer based in Morocco. Building native Android apps with Kotlin and cross-platform web applications with React, TypeScript, and Flutter.',
      fr: 'Portfolio de Saad Larouchi, Développeur Mobile et Web basé au Maroc. Applications Android natives en Kotlin et applications web avec React, TypeScript et Flutter.',
      ar: 'معرض أعمال سعد العروشي، مطور تطبيقات هواتف ومواقع ويب مقره في المغرب. بناء تطبيقات أندرويد بـ Kotlin وتطبيقات ويب بـ React وTypeScript وFlutter.'
    };

    const currentTitle = seoTitles[i18n.language] || seoTitles.en;
    const currentDesc = seoDesc[i18n.language] || seoDesc.en;

    document.title = currentTitle;
    
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', currentDesc);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = currentDesc;
      document.head.appendChild(meta);
    }

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', currentDesc);

    const twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc) twDesc.setAttribute('content', currentDesc);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', currentTitle);

    const twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) twTitle.setAttribute('content', currentTitle);

    // Trigger language switch transition
    const mainContent = document.getElementById('main');
    if (mainContent) {
      mainContent.classList.remove('language-transition');
      void mainContent.offsetWidth; // force reflow
      mainContent.classList.add('language-transition');
    }
  }, [i18n.language]);

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
