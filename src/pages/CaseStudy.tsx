import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { LanguageSwitcher } from '@/components/Navbar';
import { useTheme } from '@/providers/ThemeProvider';
import { fadeInUp, staggerContainer } from '@/lib/motion';
import type { Project } from '@/types';

interface CaseStudyProps {
  project: Project;
  onClose: () => void;
}

export function CaseStudy({ project, onClose }: CaseStudyProps) {
  const { t } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const cs = project.caseStudy;

  // Translated content with reliable fallbacks to project data
  const description = t(`projects.items.${project.id}.description`, project.description);
  const role = t(`projects.items.${project.id}.role`, cs.role);
  const problem = t(`projects.items.${project.id}.case_problem`, cs.problem);
  const solution = t(`projects.items.${project.id}.case_solution`, cs.solution);
  const backLabel = t('projects.buttons.back_to_projects', 'Back to Projects');

  const rawLearnings = t(`projects.items.${project.id}.learnings`, { returnObjects: true });
  const learnings: string[] = Array.isArray(rawLearnings) ? rawLearnings : cs.learnings;

  return (
    <article style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      {/* Header */}
      <nav
        aria-label="Case study navigation"
        className="sticky top-0 z-20 glass backdrop-blur-xl"
        style={{ borderBottom: '1px solid var(--border)' }}
      >
        <Container className="flex h-16 items-center justify-between gap-4">
          <a
            href="/#projects"
            onClick={(e) => {
              e.preventDefault();
              onClose();
            }}
            className="inline-flex items-center gap-2 rounded-xl px-3.5 py-2 text-sm font-medium transition-colors cursor-pointer"
            style={{ color: 'var(--text-secondary)', background: 'var(--bg-tertiary)' }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="rtl:rotate-180">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            <span>{backLabel}</span>
          </a>

          <span className="hidden sm:inline-block text-sm font-semibold truncate max-w-[240px]" style={{ color: 'var(--text-primary)' }}>
            {project.title}
          </span>

          <div className="flex items-center gap-2">
            <LanguageSwitcher />

            <button
              onClick={toggleTheme}
              className="flex h-9 w-9 items-center justify-center rounded-lg transition-colors cursor-pointer"
              style={{ color: 'var(--text-secondary)', background: 'var(--bg-tertiary)' }}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
              )}
            </button>
          </div>
        </Container>
      </nav>

      <Container className="py-12 md:py-16">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-3xl"
        >
          {/* Title & Category */}
          <motion.header variants={fadeInUp}>
            <Badge variant="accent" className="mb-3 uppercase tracking-wider">{project.category}</Badge>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl" style={{ color: 'var(--text-primary)' }}>
              {project.title}
            </h1>
            <p className="mt-4 text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{description}</p>
          </motion.header>

          {/* Metadata Cards */}
          <motion.div variants={fadeInUp} className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl p-4" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--card-border)' }}>
              <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--text-tertiary)' }}>{t('projects.role', 'Role')}</span>
              <p className="mt-1 text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>{role}</p>
            </div>
            <div className="rounded-2xl p-4" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--card-border)' }}>
              <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--text-tertiary)' }}>{t('projects.timeline', 'Timeline')}</span>
              <p className="mt-1 text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>{cs.timeline}</p>
            </div>
            <div className="col-span-2 sm:col-span-1 rounded-2xl p-4" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--card-border)' }}>
              <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--text-tertiary)' }}>{t('projects.technologies', 'Tech Stack')}</span>
              <p className="mt-1 text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>{project.technologies.join(', ')}</p>
            </div>
          </motion.div>

          {/* Problem */}
          <motion.section variants={fadeInUp} className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: 'var(--text-primary)' }}>{t('projects.problem', 'The Challenge')}</h2>
            <p className="mt-3 leading-relaxed text-base" style={{ color: 'var(--text-secondary)' }}>{problem}</p>
          </motion.section>

          {/* Solution */}
          <motion.section variants={fadeInUp} className="mt-10">
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: 'var(--text-primary)' }}>{t('projects.solution', 'The Solution')}</h2>
            <p className="mt-3 leading-relaxed text-base" style={{ color: 'var(--text-secondary)' }}>{solution}</p>
          </motion.section>

          {/* Key Features */}
          <motion.section variants={fadeInUp} className="mt-10">
            <h2 className="mb-4 text-2xl font-bold tracking-tight" style={{ color: 'var(--text-primary)' }}>{t('projects.key_features', 'Key Features')}</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {cs.keyFeatures.map((feature, idx) => {
                const featureTitle = t(`projects.items.${project.id}.kf${idx + 1}_title`, feature.title);
                const featureDesc = t(`projects.items.${project.id}.kf${idx + 1}_desc`, feature.description);
                return (
                  <div
                    key={feature.title}
                    className="rounded-2xl p-5"
                    style={{ background: 'var(--bg-secondary)', border: '1px solid var(--card-border)' }}
                  >
                    <h3 className="text-base font-bold" style={{ color: 'var(--text-primary)' }}>{featureTitle}</h3>
                    <p className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{featureDesc}</p>
                  </div>
                );
              })}
            </div>
          </motion.section>

          {/* Learnings */}
          <motion.section variants={fadeInUp} className="mt-10">
            <h2 className="mb-4 text-2xl font-bold tracking-tight" style={{ color: 'var(--text-primary)' }}>{t('projects.learnings', 'Key Takeaways')}</h2>
            <ul className="space-y-3">
              {learnings.map((learning, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  <span className="mt-0.5 font-bold" style={{ color: 'var(--accent)' }}>✦</span>
                  <span>{learning}</span>
                </li>
              ))}
            </ul>
          </motion.section>

          {/* Back Button */}
          <motion.footer variants={fadeInUp} className="mt-14 pt-8 border-t" style={{ borderColor: 'var(--border)' }}>
            <Button
              variant="secondary"
              href="/#projects"
              onClick={(e) => {
                e.preventDefault();
                onClose();
              }}
            >
              ← {backLabel}
            </Button>
          </motion.footer>
        </motion.div>
      </Container>
    </article>
  );
}
