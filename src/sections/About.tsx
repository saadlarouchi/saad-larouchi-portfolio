import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { fadeInUp, staggerContainer } from '@/lib/motion';

const highlights = [
  { label: 'Expertise', value: 'Mobile Development (Android, Flutter, Kotlin)' },
  { label: 'Location', value: 'Berrechid, Casablanca-Settat, Morocco' },
  { label: 'Background', value: 'CMC 2026 Graduate, pursuing Bachelor\'s degree' },
  { label: 'Availability', value: 'Open to pre-employment internships and junior opportunities' },
];

export function About() {
  return (    <section id="about" className="relative py-20 md:py-24">
      <Container>
        <SectionHeader title="About Me" badge="Who I Am" />

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
              I recently graduated in{' '}
              <strong style={{ color: 'var(--text-primary)' }}>Digital Development (Mobile Applications)</strong>{' '}
              from the Cité des Métiers et des Compétences.
            </p>
            <p>
              Before focusing on software development, I spent a few years working in digital marketing. That experience taught me how to bridge the gap between technical execution and actual user needs. Today, I enjoy building clean and reliable mobile and web applications, primarily using{' '}
              <strong style={{ color: 'var(--text-primary)' }}>Kotlin, Flutter, and React.</strong>
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="mt-12 grid gap-4 sm:grid-cols-2"
          >
            {highlights.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl p-6 transition-all duration-300 hover:-translate-y-0.5"
                style={{ background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', boxShadow: 'var(--card-shadow)' }}
                onMouseEnter={(e) => (e.currentTarget.style.boxShadow = 'var(--card-shadow-hover)')}
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = 'var(--card-shadow)')}
              >
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--accent)' }}>
                  {item.label}
                </span>
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
