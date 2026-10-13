import { useState, useEffect, useCallback } from 'react';
import { projects } from '@/data/projects';
import type { Project } from '@/types';

export function useProjectRouter() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname;
    }
    return '/';
  });

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = useCallback((to: string) => {
    if (typeof window === 'undefined') return;

    if (to.startsWith('/#')) {
      const hash = to.replace('/', '');
      if (window.location.pathname !== '/') {
        window.history.pushState(null, '', '/');
        setCurrentPath('/');
      }
      setTimeout(() => {
        const targetElement = document.querySelector(hash);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 50);
      return;
    }

    if (window.location.pathname !== to) {
      window.history.pushState(null, '', to);
      setCurrentPath(to);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  // Match /projects/:id or /projects/:id/
  const projectMatch = currentPath.match(/^\/projects\/([a-zA-Z0-9_-]+)\/?$/);
  const activeProjectId = projectMatch ? projectMatch[1] : null;
  const activeProject: Project | null = activeProjectId
    ? projects.find((p) => p.id === activeProjectId) || null
    : null;

  const isProjectRoute = !!activeProjectId;

  return {
    currentPath,
    activeProjectId,
    activeProject,
    isProjectRoute,
    navigate,
  };
}
