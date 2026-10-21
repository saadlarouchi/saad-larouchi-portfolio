import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { fadeInUp, staggerContainer } from '@/lib/motion';
import { useTranslation, Trans } from 'react-i18next';

export function About() {
  const { t } = useTranslation();

  const highlights = [
    { key: 'expertise', label: t('about.highlights.expertise'), value: t('about.highlights.expertise_val') },
    { key: 'location', label: t('about.highlights.location'), value: t('about.highlights.location_val') },
    { key: 'background', label: t('about.highlights.background'), value: t('about.highlights.background_val') },
    { key: 'status', label: t('about.highlights.availability', t('about.highlights.status')), value: t('about.highlights.availability_val', t('about.highlights.status_val')) },
  ];

  return (
    <section id="about" className="relative py-20 md:py-24" aria-labelledby="about-heading">
      <Container>
        <SectionHeader id="about-heading" title={t('about.section_title')} badge={t('about.badge')} />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="mx-auto max-w-3xl"
        >
          <motion.div
            variants={fadeInUp}
            className="text-lg leading-relaxed lg:text-xl lg:leading-relaxed space-y-6"
            style={{ color: 'var(--text-secondary)' }}
          >
            <p>
              <Trans i18nKey="about.p1">
                {t('about.p1_start')}
                <strong style={{ color: 'var(--text-primary)' }}>{t('about.p1_strong')}</strong>
                {t('about.p1_end')}
              </Trans>
            </p>
            <p>
              <Trans i18nKey="about.p2">
                {t('about.p2_start')}
                <strong style={{ color: 'var(--text-primary)' }}>{t('about.p2_strong')}</strong>
              </Trans>
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="mt-10 grid gap-4 sm:grid-cols-2"
          >
            {highlights.map((item) => (
              <div
                key={item.key}
                className="rounded-2xl p-6 transition-all duration-300 hover:-translate-y-0.5"
                style={{ background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', boxShadow: 'var(--card-shadow)' }}
                onMouseEnter={(e) => (e.currentTarget.style.boxShadow = 'var(--card-shadow-hover)')}
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = 'var(--card-shadow)')}
              >
                <h3 className="m-0 text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--accent)' }}>
                  {item.label}
                </h3>
                <p className="mt-2 text-base font-medium" style={{ color: 'var(--text-primary)' }}>
                  {item.value}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
