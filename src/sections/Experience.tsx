import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Badge } from '@/components/ui/Badge';
import { FilterButton } from '@/components/ui/FilterButton';
import { experiences } from '@/data/experience';
import { useFilter } from '@/hooks/useFilter';
import { fadeInUp, staggerContainer } from '@/lib/motion';
import type { TimelineType, Experience } from '@/types';
import { useTranslation } from 'react-i18next';

const filterTabs: { label: string; value: TimelineType | 'all' }[] = [
  { label: 'All', value: 'all' },
  { label: 'Work', value: 'work' },
  { label: 'Education', value: 'education' },
  { label: 'Certifications', value: 'certification' },
];

const typeColors: Record<TimelineType, string> = {
  work: '#3b82f6',
  education: '#10b981',
  certification: '#f59e0b',
};

export function Experience() {
  const { t } = useTranslation();
  
  const statusBadge = {
    current: { label: t('experience.status.current'), variant: 'success' as const },
    completed: { label: t('experience.status.completed'), variant: 'default' as const },
    planned: { label: t('experience.status.planned'), variant: 'warning' as const },
  };

  const { activeFilter: filter, setFilter, filteredItems: filtered } = useFilter<Experience, TimelineType | 'all'>(
    experiences,
    'all',
    (e) => e.type
  );

  return (
    <section id="experience" className="relative py-20 md:py-24">
      <Container>
        <SectionHeader
          title={t('experience.section_title')}
          subtitle={t('experience.subtitle')}
          badge={t('experience.badge')}
        />

        {/* Filter Tabs */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-8 flex flex-wrap justify-center gap-2"
        >
          {filterTabs.map((tab) => (
            <FilterButton
              key={tab.value}
              isActive={filter === tab.value}
              onClick={() => setFilter(tab.value)}
            >
              {t(`experience.filters.${tab.value}`)}
            </FilterButton>
          ))}
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="timeline-line" />

          <motion.div
            key={filter}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="space-y-8 md:space-y-12"
          >
            {filtered.map((exp, index) => {
              const isLeft = index % 2 === 0;
              const badge = statusBadge[exp.status];
              const dotColor = typeColors[exp.type];

              return (
                <motion.div
                  key={exp.id}
                  variants={fadeInUp}
                  className="relative pl-12 md:pl-0"
                >
                  {/* Dot */}
                  <motion.div
                    className="absolute left-[14px] top-8 h-4 w-4 rounded-full border-4 md:left-1/2 md:-translate-x-1/2"
                    style={{ background: dotColor, borderColor: 'var(--bg)' }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, type: 'spring' }}
                  />

                  {/* Card */}
                  <div className={`md:w-[calc(50%-40px)] ${isLeft ? 'md:mr-auto' : 'md:ml-auto'}`}>
                    <div
                      className="group rounded-[2rem] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:p-8"
                      style={{
                        background: 'var(--card-bg)',
                        border: '1px solid var(--card-border)',
                        boxShadow: 'var(--card-shadow)',
                      }}
                    >
                      <div className="mb-4 flex flex-wrap items-center gap-3">
                        <span
                          className="h-2.5 w-2.5 rounded-full"
                          style={{ background: dotColor }}
                        />
                        <span className="text-xs font-bold uppercase tracking-widest" style={{ color: dotColor }}>
                          {t(`experience.types.${exp.type}`)}
                        </span>
                        <Badge variant={badge.variant}>{badge.label}</Badge>
                      </div>

                      <h3 className="mb-1 text-xl font-bold tracking-tight" style={{ color: 'var(--text-primary)' }}>
                        {t(`experience.items.${exp.id}.title`)}
                      </h3>
                      <p className="mb-2 text-base font-semibold" style={{ color: 'var(--accent)' }}>
                        {t(`experience.items.${exp.id}.organization`)}
                      </p>
                      <p className="mb-4 text-xs font-medium uppercase tracking-wide" style={{ color: 'var(--text-tertiary)' }}>
                        {t(`experience.items.${exp.id}.date`)} · {t(`experience.items.${exp.id}.location`)}
                      </p>

                      <p className="mb-4 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                        {t(`experience.items.${exp.id}.description`)}
                      </p>

                      {exp.responsibilities.length > 0 && (
                        <ul className="mt-4 space-y-2">
                          {exp.responsibilities.map((_, rIndex) => (
                            <li key={rIndex} className="flex items-start gap-2 text-xs leading-relaxed" style={{ color: 'var(--text-tertiary)' }}>
                              <span className="mt-0.5" style={{ color: 'var(--text-secondary)' }}>▸</span>
                              {t(`experience.items.${exp.id}.responsibilities.${rIndex}`)}
                            </li>
                          ))}
                        </ul>
                      )}

                      {exp.skills && exp.skills.length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-1">
                          {exp.skills.map((s) => (
                            <span key={s} className="rounded-md px-2 py-0.5 text-[10px] font-medium" style={{ background: 'var(--accent-light)', color: 'var(--accent)' }}>
                              {s}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
