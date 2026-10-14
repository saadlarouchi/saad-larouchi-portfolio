import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Badge } from '@/components/ui/Badge';
import { Lightbox } from '@/components/ui/Lightbox';
import { certificates } from '@/data/certificates';
import { fadeInUp, staggerContainer } from '@/lib/motion';
import type { Certificate } from '@/types';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export function Certificates() {
  const { t } = useTranslation();
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  return (
    <section id="certificates" className="relative py-20 md:py-24" style={{ background: 'var(--bg-secondary)' }}>
      <Container>
        <SectionHeader
          title={t('certificates.section_title')}
          subtitle={t('certificates.subtitle')}
          badge={t('certificates.badge')}
        />

        {/* Certificate Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid gap-6 md:grid-cols-2"
        >
          {certificates.map((cert) => (
            <motion.div
              key={cert.id}
              variants={fadeInUp}
              whileHover={{ y: -4, scale: 1.005, boxShadow: 'var(--shadow)' }}
              className="group cursor-pointer flex flex-col overflow-hidden rounded-2xl transition-all duration-500 relative"
              style={{
                background: 'var(--card-bg)',
                border: '1px solid var(--card-border)',
                boxShadow: 'var(--card-shadow)',
              }}
              onClick={() => setSelectedCert(cert)}
            >
              {/* Glow & Gradient Border */}
              <div className="absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none rounded-2xl" style={{ boxShadow: '0 0 30px var(--accent-bg)', border: '1px solid var(--accent-border)' }} />
              
              {/* Image / Premium Placeholder */}
              <div className="relative aspect-[4/3] w-full overflow-hidden z-10" style={{ background: 'linear-gradient(135deg, var(--bg-tertiary) 0%, var(--bg-secondary) 100%)' }}>
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(var(--text-tertiary)_1px,transparent_1px)] [background-size:16px_16px]" />
                {cert.image ? (
                  <img src={cert.image} alt={cert.title} className="relative z-10 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]" loading="lazy" />
                ) : (
                  <div className="flex h-full flex-col items-center justify-center p-6 relative z-10">
                    <div className="absolute inset-0 opacity-20 transition-opacity duration-700 group-hover:opacity-40" style={{ background: 'radial-gradient(circle at center, var(--accent), transparent)' }} />
                    
                    {/* Issuer Logo Placeholder */}
                    <div className="absolute top-6 left-6 h-10 w-10 rounded-full shadow-sm" style={{ background: 'var(--bg)', border: '1px solid var(--border)' }} />
                    
                    {/* Verification Badge */}
                    <div className="absolute top-6 right-6 flex items-center justify-center h-8 w-8 rounded-full shadow-sm" style={{ background: '#dcfce7', color: '#16a34a' }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>

                    <div className="mt-8 flex flex-col items-center gap-3 relative z-10 transition-transform duration-500 group-hover:-translate-y-1">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--text-secondary)' }}>
                        <rect x="3" y="5" width="18" height="14" rx="2" ry="2"/>
                        <path d="M8 10h8"/>
                        <path d="M8 14h4"/>
                      </svg>
                      <span className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--text-secondary)' }}>Certificate</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6 md:p-8">
                <Badge variant="accent" className="mb-4 self-start">{cert.category}</Badge>
                <h3 className="mb-2 text-lg font-bold leading-tight" style={{ color: 'var(--text-primary)' }}>
                  {t(`certificates.items.${cert.id}.title`)}
                </h3>
                <p className="mb-4 text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
                  {cert.organization}
                </p>
                {cert.date && (
                  <p className="mt-auto text-xs font-semibold tracking-wide uppercase" style={{ color: 'var(--text-tertiary)' }}>
                    {t('certificates.issued')}: {cert.date}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox */}
        <Lightbox
          isOpen={!!selectedCert}
          onClose={() => setSelectedCert(null)}
          title={selectedCert ? t(`certificates.items.${selectedCert.id}.title`) : undefined}
        >
          {selectedCert && (
            <div className="space-y-4">
              <div className="cert-placeholder aspect-[16/10] rounded-xl">
                {selectedCert.image ? (
                  <img src={selectedCert.image} alt={selectedCert.title} className="h-full w-full rounded-xl object-cover" />
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--text-tertiary)' }}>
                      <circle cx="12" cy="8" r="6"/>
                      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
                    </svg>
                  </div>
                )}
              </div>
              <div>
                <Badge variant="accent" className="mb-2">{selectedCert.category}</Badge>
                <h4 className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>{t(`certificates.items.${selectedCert.id}.title`)}</h4>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{selectedCert.organization}</p>
                {selectedCert.date && (
                  <p className="text-xs" style={{ color: 'var(--text-tertiary)' }}>{selectedCert.date}</p>
                )}
              </div>
              <div className="flex gap-2">
                {selectedCert.credential && (
                  <a
                    href={selectedCert.credential}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] transform-gpu"
                    style={{ background: 'var(--accent)', color: 'var(--accent-foreground)' }}
                  >
                    {t('certificates.buttons.view_credential')}
                  </a>
                )}
              </div>
            </div>
          )}
        </Lightbox>
      </Container>
    </section>
  );
}
