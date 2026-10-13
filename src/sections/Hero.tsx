import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { Magnetic } from '@/components/ui/Magnetic';
import { fadeInUp, slideInLeft, slideInRight, staggerContainer } from '@/lib/motion';
import { useTranslation, Trans } from 'react-i18next';

const techBadges = ['React', 'Kotlin', 'TypeScript', 'Flutter', 'Laravel', 'Firebase'];

export function Hero() {
  const { t } = useTranslation();
  
  const badges = [
    t('hero.badges.digital_developer'),
    t('hero.badges.mobile_apps'),
    t('hero.badges.web_development')
  ];

  const stats = [
    { value: '2+', label: t('hero.stats.years_training') },
    { value: '4+', label: t('hero.stats.featured_projects') },
    { value: '15+', label: t('hero.stats.technologies') },
  ];

  return (
    <section id="home" className="relative flex flex-col overflow-hidden pt-4 md:pt-8 pb-12">
      <div className="gradient-mesh" />

      <Container className="relative z-10 pb-12 md:pb-20">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left Column */}
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="flex flex-col">
            {/* Badges */}
            <motion.div variants={fadeInUp} className="mb-6 flex flex-wrap gap-2">
              {badges.map((badge) => (
                <Badge key={badge} variant="accent">{badge}</Badge>
              ))}
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={slideInLeft}
              className="text-5xl font-black leading-none tracking-tighter sm:text-7xl lg:text-8xl"
              style={{ color: 'var(--text-primary)' }}
            >
              Saad
              <br />
              <span style={{ color: 'var(--accent)' }}>Larouchi</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeInUp}
              className="mt-6 max-w-xl text-lg leading-relaxed lg:text-xl"
              style={{ color: 'var(--text-secondary)' }}
            >
              <Trans i18nKey="hero.subtitle">
                Mobile and Web Developer based in Morocco.<br className="hidden sm:block" />
                I build native Android apps with Kotlin and cross-platform interfaces with Flutter and React.
              </Trans>
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeInUp} className="mt-10 flex flex-wrap gap-4">
              <Magnetic>
                <Button
                  size="lg"
                  href="/Saad-Larouchi-CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  icon={
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                  }
                >
                  {t('hero.buttons.download_cv')}
                </Button>
              </Magnetic>
              <Magnetic>
                <Button
                  variant="secondary"
                  size="lg"
                  href="#projects"
                  icon={
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
                  }
                >
                  {t('hero.buttons.view_projects')}
                </Button>
              </Magnetic>
            </motion.div>

            {/* Tech Badges */}
            <motion.div variants={fadeInUp} className="mt-10 flex flex-wrap gap-2.5">
              {techBadges.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg px-3 py-1.5 text-xs font-medium"
                  style={{ background: 'var(--bg-tertiary)', color: 'var(--text-secondary)', border: '1px solid var(--border)' }}
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            animate="visible"
            className="flex justify-center lg:justify-end"
          >
            <div className="relative group perspective-[1000px]">
              {/* Glow */}
              <div
                className="absolute -inset-10 rounded-full opacity-30 blur-3xl transition-opacity duration-700 group-hover:opacity-50"
                style={{ background: 'var(--accent)' }}
              />
              {/* Image Container */}
              <div
                className="relative flex aspect-[4/5] w-72 max-w-full items-center justify-center overflow-hidden rounded-[2.5rem] shadow-2xl transition-transform duration-500 hover:rotate-y-12 sm:w-80 md:w-96"
                style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)' }}
              >
                <div className="absolute inset-0 z-10 opacity-20 mix-blend-overlay pointer-events-none" style={{ background: 'radial-gradient(circle at 30% 30%, var(--accent), transparent)' }} />
                <img
                  src="/profile.jpg"
                  alt="Saad Larouchi"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  style={{ filter: 'contrast(1.05) saturate(1.05)' }}
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-10 md:mt-12 grid grid-cols-2 gap-8 rounded-[2rem] p-8 sm:grid-cols-3 sm:p-12"
          style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)' }}
        >
          {stats.map((stat) => (
            <AnimatedCounter key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
