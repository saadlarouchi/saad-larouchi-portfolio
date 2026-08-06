import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { fadeInUp, slideInLeft, slideInRight, staggerContainer } from '@/lib/motion';
import type { Stat } from '@/types';

const badges = ['Digital Developer', 'Mobile Apps', 'Web Development', 'Marketing'];

const techBadges = ['React', 'Kotlin', 'TypeScript', 'Flutter', 'Laravel', 'Firebase'];

const stats: Stat[] = [
  { value: '2+', label: 'Years Training' },
  { value: '4+', label: 'Featured Projects' },
  { value: '15+', label: 'Technologies' },
  { value: '3+', label: 'Years Marketing' },
];

export function Hero() {
  return (
    <section id="home" className="relative flex flex-col overflow-hidden" style={{ minHeight: '100dvh', paddingTop: 'var(--nav-height)' }}>
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
              Mobile and Web Developer based in Morocco.<br className="hidden sm:block" />
              I build native Android apps with Kotlin and cross-platform interfaces with Flutter and React.<br className="hidden sm:block" />
              With a background in marketing, I focus on building applications that are both technically sound and genuinely useful to people.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeInUp} className="mt-10 flex flex-wrap gap-4">
              <Button
                size="lg"
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                icon={
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                }
              >
                Download CV
              </Button>
              <Button
                variant="secondary"
                size="lg"
                href="#projects"
                icon={
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
                }
              >
                View Projects
              </Button>
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
          className="mt-12 md:mt-16 grid grid-cols-2 gap-8 rounded-[2rem] p-8 sm:grid-cols-4 sm:p-12"
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
