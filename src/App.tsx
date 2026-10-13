import { useEffect } from 'react';
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
import { LoadingScreen } from '@/components/LoadingScreen';
import { useProjectRouter } from '@/hooks/useProjectRouter';
import type { Project } from '@/types';

function updateMetaTag(nameOrProperty: string, content: string, isProperty = false) {
  const selector = isProperty
    ? `meta[property="${nameOrProperty}"]`
    : `meta[name="${nameOrProperty}"]`;
  let tag = document.querySelector(selector);
  if (!tag) {
    tag = document.createElement('meta');
    if (isProperty) {
      tag.setAttribute('property', nameOrProperty);
    } else {
      tag.setAttribute('name', nameOrProperty);
    }
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

function updateCanonical(url: string) {
  let link = document.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', url);
}

function getProjectSchema(project: Project) {
  const baseUrl = 'https://saad-larouchi.vercel.app';
  const url = `${baseUrl}/projects/${project.id}`;

  if (project.id === 'luxeldo') {
    return {
      '@context': 'https://schema.org',
      '@type': 'CreativeWork',
      'name': project.title,
      'description': project.description,
      'url': url,
      'author': {
        '@type': 'Person',
        '@id': `${baseUrl}/#person`,
        'name': 'Saad Larouchi',
      },
    };
  }

  const categoryMap: Record<string, string> = {
    'darna-clean': 'MobileApplication',
    'allo-brikol': 'BusinessApplication',
    'servegx': 'UtilitiesApplication',
  };

  const osMap: Record<string, string> = {
    'darna-clean': 'Android',
    'allo-brikol': 'Android, iOS, Web',
    'servegx': 'Android',
  };

  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    'name': project.title,
    'applicationCategory': categoryMap[project.id] || 'SoftwareApplication',
    'operatingSystem': osMap[project.id] || 'Any',
    'description': project.description,
    'url': url,
    'author': {
      '@type': 'Person',
      '@id': `${baseUrl}/#person`,
      'name': 'Saad Larouchi',
    },
  };
}

function updateProjectSchema(project: Project | null) {
  let script = document.getElementById('project-jsonld');
  if (!project) {
    if (script) script.remove();
    return;
  }
  if (!script) {
    script = document.createElement('script');
    script.id = 'project-jsonld';
    script.setAttribute('type', 'application/ld+json');
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(getProjectSchema(project));
}

function App() {
  const { t, i18n } = useTranslation();
  const { activeProject, navigate } = useProjectRouter();

  useEffect(() => {
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;

    const baseUrl = 'https://saad-larouchi.vercel.app';

    if (activeProject) {
      // Project Page SEO metadata
      const projectTitle = t(`projects.items.${activeProject.id}.seo_title`, `${activeProject.title} | Saad Larouchi`);
      const projectDesc = t(`projects.items.${activeProject.id}.seo_description`, activeProject.description);
      const projectUrl = `${baseUrl}/projects/${activeProject.id}`;

      document.title = projectTitle;
      updateMetaTag('description', projectDesc);
      updateMetaTag('og:title', projectTitle, true);
      updateMetaTag('og:description', projectDesc, true);
      updateMetaTag('og:url', projectUrl, true);
      updateMetaTag('og:type', 'article', true);
      updateMetaTag('twitter:title', projectTitle);
      updateMetaTag('twitter:description', projectDesc);
      updateCanonical(projectUrl);
      updateProjectSchema(activeProject);
    } else {
      // Homepage SEO metadata
      const seoTitles: Record<string, string> = {
        en: 'Saad Larouchi — Mobile & Web Developer',
        fr: 'Saad Larouchi — Développeur Mobile & Web',
        ar: 'سعد العروشي — مطور هواتف ومواقع ويب',
      };

      const seoDesc: Record<string, string> = {
        en: 'Portfolio of Saad Larouchi, Mobile and Web Developer based in Morocco. Building native Android apps with Kotlin and cross-platform web applications with React, TypeScript, and Flutter.',
        fr: 'Portfolio de Saad Larouchi, Développeur Mobile et Web basé au Maroc. Applications Android natives en Kotlin et applications web avec React, TypeScript et Flutter.',
        ar: 'معرض أعمال سعد العروشي، مطور تطبيقات هواتف ومواقع ويب مقره في المغرب. بناء تطبيقات أندرويد بـ Kotlin وتطبيقات ويب بـ React وTypeScript وFlutter.',
      };

      const homeTitle = seoTitles[i18n.language] || seoTitles.en;
      const homeDesc = seoDesc[i18n.language] || seoDesc.en;

      document.title = homeTitle;
      updateMetaTag('description', homeDesc);
      updateMetaTag('og:title', homeTitle, true);
      updateMetaTag('og:description', homeDesc, true);
      updateMetaTag('og:url', `${baseUrl}/`, true);
      updateMetaTag('og:type', 'website', true);
      updateMetaTag('twitter:title', homeTitle);
      updateMetaTag('twitter:description', homeDesc);
      updateCanonical(`${baseUrl}/`);
      updateProjectSchema(null);
    }

    // Trigger language switch transition
    const mainContent = document.getElementById('main');
    if (mainContent) {
      mainContent.classList.remove('language-transition');
      void mainContent.offsetWidth; // force reflow
      mainContent.classList.add('language-transition');
    }
  }, [i18n.language, activeProject, t]);

  return (
    <ThemeProvider>
      <LoadingScreen />

      {activeProject ? (
        <CaseStudy project={activeProject} onClose={() => navigate('/#projects')} />
      ) : (
        <MainLayout>
          <Hero />
          <About />
          <Skills />
          <Projects onOpenCaseStudy={(proj) => navigate(`/projects/${proj.id}`)} />
          <Certificates />
          <Experience />
          <Contact />
        </MainLayout>
      )}
    </ThemeProvider>
  );
}

export default App;
