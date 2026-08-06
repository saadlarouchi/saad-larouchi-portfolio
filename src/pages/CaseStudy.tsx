import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { fadeInUp, staggerContainer } from '@/lib/motion';
import type { Project } from '@/types';

interface CaseStudyProps {
  project: Project;
  onClose: () => void;
}

export function CaseStudy({ project, onClose }: CaseStudyProps) {
  const cs = project.caseStudy;

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      {/* Header */}
      <div
        className="sticky top-0 z-10 glass"
        style={{ borderBottom: '1px solid var(--border)' }}
      >
        <Container className="flex h-16 items-center justify-between">
          <button
            onClick={onClose}
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors cursor-pointer"
            style={{ color: 'var(--text-secondary)', background: 'var(--bg-tertiary)' }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Back to Projects
          </button>
          <span className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
            {project.title}
          </span>
        </Container>
      </div>

      <Container className="py-16">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-3xl"
        >
          {/* Title */}
          <motion.div variants={fadeInUp}>
            <Badge variant="accent" className="mb-3">{project.category}</Badge>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl" style={{ color: 'var(--text-primary)' }}>
              {project.title}
            </h1>
            <p className="mt-3 text-lg" style={{ color: 'var(--text-secondary)' }}>{project.description}</p>
          </motion.div>

          {/* Meta */}
          <motion.div variants={fadeInUp} className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
            <div className="rounded-xl p-4" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--card-border)' }}>
              <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--text-tertiary)' }}>Role</span>
              <p className="mt-1 text-sm font-medium" style={{ color: 'var(--text-primary)' }}>{cs.role}</p>
            </div>
            <div className="rounded-xl p-4" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--card-border)' }}>
              <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--text-tertiary)' }}>Timeline</span>
              <p className="mt-1 text-sm font-medium" style={{ color: 'var(--text-primary)' }}>{cs.timeline}</p>
            </div>
            <div className="rounded-xl p-4" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--card-border)' }}>
              <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--text-tertiary)' }}>Tech Stack</span>
              <p className="mt-1 text-sm font-medium" style={{ color: 'var(--text-primary)' }}>{project.technologies.join(', ')}</p>
            </div>
          </motion.div>

          {/* Problem */}
          <motion.div variants={fadeInUp} className="mt-12">
            <h2 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>The Problem</h2>
            <p className="mt-3 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{cs.problem}</p>
          </motion.div>

          {/* Solution */}
          <motion.div variants={fadeInUp} className="mt-10">
            <h2 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>The Solution</h2>
            <p className="mt-3 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{cs.solution}</p>
          </motion.div>

          {/* Key Features */}
          <motion.div variants={fadeInUp} className="mt-10">
            <h2 className="mb-4 text-xl font-bold" style={{ color: 'var(--text-primary)' }}>Key Features</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {cs.keyFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-xl p-5"
                  style={{ background: 'var(--bg-secondary)', border: '1px solid var(--card-border)' }}
                >
                  <h3 className="text-base font-semibold" style={{ color: 'var(--text-primary)' }}>{feature.title}</h3>
                  <p className="mt-1 text-sm" style={{ color: 'var(--text-secondary)' }}>{feature.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Learnings */}
          <motion.div variants={fadeInUp} className="mt-10">
            <h2 className="mb-4 text-xl font-bold" style={{ color: 'var(--text-primary)' }}>What I Learned</h2>
            <ul className="space-y-2">
              {cs.learnings.map((learning) => (
                <li key={learning} className="flex items-start gap-3 text-sm" style={{ color: 'var(--text-secondary)' }}>
                  <span className="mt-0.5" style={{ color: 'var(--accent)' }}>✦</span>
                  {learning}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Back Button */}
          <motion.div variants={fadeInUp} className="mt-12">
            <Button variant="secondary" onClick={onClose}>
              ← Back to Projects
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </div>
  );
}
