import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { FilterButton } from '@/components/ui/FilterButton';
import { projects } from '@/data/projects';
import { useFilter } from '@/hooks/useFilter';
import { fadeInUp, staggerContainer } from '@/lib/motion';
import type { Project } from '@/types';
import { cn } from '@/lib/cn';

const filters = ['All', 'Mobile', 'Web', 'Platform', 'E-commerce'] as const;

const statusConfig = {
  'completed': { label: 'Completed', variant: 'success' as const },
  'in-progress': { label: 'In Progress', variant: 'warning' as const },
  'planned': { label: 'Planned', variant: 'default' as const },
};

interface ProjectsProps {
  onOpenCaseStudy: (project: Project) => void;
}

export function Projects({ onOpenCaseStudy }: ProjectsProps) {
  const { activeFilter, setFilter: setActiveFilter, filteredItems: filtered } = useFilter<Project, string>(
    projects,
    'All',
    (p) => p.category
  );

  return (    <section id="projects" className="relative py-20 md:py-24">
      <Container>
        <SectionHeader
          title="Featured Projects"
          subtitle="Projects built during my training and personal development"
          badge="My Work"
        />

        {/* Filters */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-10 flex flex-wrap justify-center gap-2"
        >
          {filters.map((filter) => (
            <FilterButton
              key={filter}
              isActive={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </FilterButton>
          ))}
        </motion.div>

        {/* Project Grid */}
        <motion.div
          key={activeFilter}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid gap-6 md:grid-cols-2"
        >
          {filtered.map((project, index) => {
            const status = statusConfig[project.status];
            const isFeatured = index === 0;
            return (
              <motion.article
                key={project.id}
                variants={fadeInUp}
                className={cn(
                  "group flex overflow-hidden rounded-[2rem] transition-all duration-500",
                  isFeatured ? "flex-col lg:flex-row md:col-span-2" : "flex-col"
                )}
                style={{
                  background: 'var(--card-bg)',
                  border: '1px solid var(--card-border)',
                  boxShadow: 'var(--card-shadow)',
                }}
                whileHover={{ y: -2, boxShadow: 'var(--card-shadow-hover)' }}
              >
                {/* Premium Placeholder */}
                <div 
                  className={cn(
                    "relative overflow-hidden border-b lg:border-b-0 lg:border-r border-[var(--border)]",
                    isFeatured ? "w-full lg:w-[55%] aspect-[4/3] lg:aspect-auto" : "w-full aspect-[4/3]"
                  )} 
                  style={{ background: 'var(--bg-tertiary)' }}
                >
                  <div className="absolute inset-0 opacity-10 transition-opacity duration-500 group-hover:opacity-30 z-0" style={{ background: 'linear-gradient(to bottom right, var(--accent), transparent)' }} />
                  {/* Faux Mockup Frame */}
                  <div className="absolute inset-x-8 -bottom-12 top-8 lg:inset-y-12 lg:right-[-20%] lg:-left-4 lg:bottom-auto lg:top-1/2 lg:-translate-y-1/2 lg:h-[90%] overflow-hidden rounded-t-2xl lg:rounded-2xl border-t border-x lg:border-y shadow-2xl transition-transform duration-700 ease-out group-hover:-translate-y-2 z-10" style={{ background: 'var(--bg)', borderColor: 'var(--border)' }}>
                    {/* Mac-like Window Header */}
                    <div className="flex h-8 items-center gap-2 border-b px-4 backdrop-blur-md" style={{ background: 'var(--glass-bg)', borderColor: 'var(--border)' }}>
                      <div className="h-2.5 w-2.5 rounded-full" style={{ background: '#ef4444' }} />
                      <div className="h-2.5 w-2.5 rounded-full" style={{ background: '#eab308' }} />
                      <div className="h-2.5 w-2.5 rounded-full" style={{ background: '#22c55e' }} />
                    </div>
                    {/* Mockup Content Area */}
                    <div className="flex h-full items-center justify-center bg-[var(--bg-secondary)] pb-8">
                       <span className="text-xs font-bold tracking-widest uppercase" style={{ color: 'var(--text-tertiary)' }}>{project.title} Preview</span>
                    </div>
                  </div>
                </div>

                <div className={cn("flex flex-1 flex-col p-8 relative justify-center", isFeatured ? "lg:p-12" : "md:p-10")}>
                  <div className="mb-4 flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <h3 className={cn("font-bold tracking-tight", isFeatured ? "text-3xl md:text-4xl" : "text-2xl md:text-3xl")} style={{ color: 'var(--text-primary)' }}>
                      {project.title}
                    </h3>
                    <Badge variant={status.variant} className="self-start md:self-auto">{status.label}</Badge>
                  </div>

                  <p className={cn("mb-8 leading-relaxed", isFeatured ? "text-lg" : "text-base")} style={{ color: 'var(--text-secondary)' }}>
                    {project.description}
                  </p>

                  <div className="mb-8 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg px-2.5 py-1 text-xs font-semibold"
                        style={{ background: 'var(--bg-tertiary)', color: 'var(--text-secondary)' }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex flex-wrap gap-3 pt-6 border-t" style={{ borderColor: 'var(--border)' }}>
                    <Button
                      variant="primary"
                      onClick={() => onOpenCaseStudy(project)}
                      icon={
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                      }
                    >
                      Case Study
                    </Button>
                    {project.github && (
                      <Button variant="secondary" href={project.github} target="_blank" rel="noopener noreferrer">
                        GitHub
                      </Button>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
