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
      en: 'Saad Larouchi - Mobile & Web Developer',
      fr: 'Saad Larouchi - Développeur Mobile & Web',
      ar: 'سعد العروشي - مطور هواتف ومواقع ويب'
    };
    
    const seoDesc: Record<string, string> = {
      en: 'Portfolio of Saad Larouchi, Mobile and Web Developer based in Morocco.',
      fr: 'Portfolio de Saad Larouchi, Développeur Mobile et Web basé au Maroc.',
      ar: 'معرض أعمال سعد العروشي، مطور تطبيقات هواتف ومواقع ويب مقره في المغرب.'
    };

    document.title = seoTitles[i18n.language] || seoTitles.en;
    
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', seoDesc[i18n.language] || seoDesc.en);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = seoDesc[i18n.language] || seoDesc.en;
      document.head.appendChild(meta);
    }

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
