import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { skillCategories } from '@/data/skills';
import { fadeInUp, staggerContainer } from '@/lib/motion';
import type { Skill } from '@/types';
import { cn } from '@/lib/cn';
import { useTranslation } from 'react-i18next';

/* ═══════════════════════════════════════════════════════════
   Icons — local SVG paths from simple-icons (zero CDN)
   ═══════════════════════════════════════════════════════════ */
import {
  siReact, siNextdotjs, siTypescript, siJavascript,
  siTailwindcss, siHtml5, siCss,
  siFlutter, siDart, siKotlin, siAndroid,
  siLaravel, siNodedotjs, siFirebase, siMysql, siSqlite,
  siGit, siGithub, siFigma, siPostman, siDocker, siXampp,
} from 'simple-icons';

import {
  CodeXml, Smartphone, DatabaseZap, Wrench, BriefcaseBusiness,
  FileCode2, Network, Palette, Layout,
  MonitorSmartphone, Layers, Lightbulb,
  Users, MessageCircle, Crown,
} from 'lucide-react';

/* ── Brand SVG Paths ─────────────────────────────────────── */
const svgPaths: Record<string, string> = {
  react: siReact.path,
  nextdotjs: siNextdotjs.path,
  typescript: siTypescript.path,
  javascript: siJavascript.path,
  tailwindcss: siTailwindcss.path,
  html5: siHtml5.path,
  css3: siCss.path,
  flutter: siFlutter.path,
  dart: siDart.path,
  kotlin: siKotlin.path,
  android: siAndroid.path,
  laravel: siLaravel.path,
  nodedotjs: siNodedotjs.path,
  firebase: siFirebase.path,
  mysql: siMysql.path,
  sqlite: siSqlite.path,
  git: siGit.path,
  github: siGithub.path,
  figma: siFigma.path,
  postman: siPostman.path,
  docker: siDocker.path,
  xampp: siXampp.path,
};

/* ── Lucide Fallbacks ────────────────────────────────────── */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const lucideFallback: Record<string, React.FC<any>> = {
  java: FileCode2,
  visualstudiocode: Layout,
  network: Network,
  palette: Palette,
  'monitor-smartphone': MonitorSmartphone,
  layers: Layers,
  lightbulb: Lightbulb,
  users: Users,
  'message-circle': MessageCircle,
  crown: Crown,
};

/* ── Category Icons ──────────────────────────────────────── */
const catIcon: Record<string, React.ReactNode> = {
  code: <CodeXml size={22} strokeWidth={1.75} />,
  smartphone: <Smartphone size={22} strokeWidth={1.75} />,
  server: <DatabaseZap size={22} strokeWidth={1.75} />,
  wrench: <Wrench size={22} strokeWidth={1.75} />,
  briefcase: <BriefcaseBusiness size={22} strokeWidth={1.75} />,
};

/* ═══════════════════════════════════════════════════════════
   TechIcon
   ═══════════════════════════════════════════════════════════ */
function TechIcon({ slug, size = 17 }: { slug?: string; size?: number }) {
  if (!slug) return null;

  const path = svgPaths[slug];
  if (path) {
    return (
      <svg
        role="img"
        viewBox="0 0 24 24"
        className="shrink-0 fill-current"
        style={{ width: size, height: size }}
      >
        <path d={path} />
      </svg>
    );
  }

  const Luc = lucideFallback[slug];
  if (Luc) return <Luc size={size} strokeWidth={1.6} className="shrink-0" />;

  return null;
}

/* ═══════════════════════════════════════════════════════════
   Rail Config — slower speeds (~15% reduction), staggered
   ═══════════════════════════════════════════════════════════ */
const railConfig = [
  { direction: 'left'  as const, duration: '35s', delay: '-9s',  py: 'py-6 md:py-7' },   // Frontend — hero
  { direction: 'right' as const, duration: '42s', delay: '-16s', py: 'py-5 md:py-6' },   // Mobile
  { direction: 'left'  as const, duration: '38s', delay: '-6s',  py: 'py-5 md:py-[22px]' }, // Backend — compact
  { direction: 'right' as const, duration: '44s', delay: '-22s', py: 'py-5 md:py-[22px]' }, // Tools — compact
  { direction: 'left'  as const, duration: '48s', delay: '-13s', py: 'py-5 md:py-6' },   // Professional
];

/* ═══════════════════════════════════════════════════════════
   Chip — premium technology pill
   ═══════════════════════════════════════════════════════════ */
function Chip({ skill, isProfessional }: { skill: Skill, isProfessional: boolean }) {
  const { t } = useTranslation();
  return (
    <span
      className="inline-flex h-[46px] shrink-0 items-center gap-3 rounded-full border px-6 text-[15px] font-semibold select-none transition-all duration-[280ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-0.5"
      style={{
        background: 'rgba(255, 255, 255, 0.025)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        borderColor: 'var(--border)',
        color: 'var(--text-primary)',
      }}
      onMouseEnter={(e) => {
        const t = e.currentTarget;
        t.style.background = 'rgba(255, 255, 255, 0.06)';
        t.style.borderColor = 'var(--border-hover)';
        t.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
      }}
      onMouseLeave={(e) => {
        const t = e.currentTarget;
        t.style.background = 'rgba(255, 255, 255, 0.025)';
        t.style.borderColor = 'var(--border)';
        t.style.boxShadow = 'none';
      }}
    >
      <TechIcon slug={skill.icon} />
      {isProfessional ? t(`skills.items.${skill.name.toLowerCase().replace(/[\s/]+/g, '_')}`) : skill.name}
    </span>
  );
}

/* ═══════════════════════════════════════════════════════════
   InfiniteMarquee — GPU-accelerated CSS transform loop
   ═══════════════════════════════════════════════════════════ */
function InfiniteMarquee({
  items,
  direction,
  duration,
  delay,
  paused,
  isProfessional
}: {
  items: Skill[];
  direction: 'left' | 'right';
  duration: string;
  delay: string;
  paused: boolean;
  isProfessional: boolean;
}) {
  const animName = direction === 'left' ? 'marquee-left' : 'marquee-right';

  return (
    <div
      className="group relative w-full overflow-hidden"
      style={{
        maskImage:
          'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)',
        WebkitMaskImage:
          'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)',
      }}
    >
      <div
        className={cn(
          'marquee-track flex w-max items-center gap-4',
          'group-hover:[animation-play-state:paused]',
        )}
        style={{
          animation: `${animName} ${duration} linear infinite`,
          animationDelay: delay,
          animationPlayState: paused ? 'paused' : 'running',
          willChange: 'transform',
        }}
      >
        {items.map((s, i) => <Chip key={`a-${i}`} skill={s} isProfessional={isProfessional} />)}
        {items.map((s, i) => <Chip key={`b-${i}`} skill={s} isProfessional={isProfessional} />)}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   SkillRail — one glass surface per category
   ═══════════════════════════════════════════════════════════ */
function SkillRail({
  category,
  index,
  paused,
}: {
  category: (typeof skillCategories)[number];
  index: number;
  paused: boolean;
}) {
  const cfg = railConfig[index];
  const { t } = useTranslation();
  const isProfessional = category.title === 'Professional';

  return (
    <motion.div
      variants={fadeInUp}
      className="overflow-hidden rounded-[22px] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
      style={{
        background: 'var(--card-bg)',
        border: '1px solid var(--card-border)',
        boxShadow: 'var(--card-shadow)',
      }}
      whileHover={{
        y: -2,
        boxShadow: 'var(--card-shadow-hover)',
        transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
      }}
    >
      <div className={cn('flex flex-col md:flex-row md:items-center', cfg.py)}>
        {/* ── Fixed Label ── */}
        <div className="flex items-center gap-3.5 px-7 py-4 md:w-[228px] md:shrink-0 md:py-0">
          <div
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] transition-colors duration-300"
            style={{
              background: 'var(--accent-light)',
              color: 'var(--accent)',
            }}
          >
            {catIcon[category.icon]}
          </div>
          <h3
            className="text-[22px] font-bold tracking-tight whitespace-nowrap"
            style={{ color: 'var(--text-primary)' }}
          >
            {t(`skills.categories.${category.title.toLowerCase()}`)}
          </h3>
        </div>

        {/* ── Subtle Divider ── */}
        <div
          className="mx-7 h-px opacity-50 md:mx-0 md:my-auto md:h-8 md:w-px"
          style={{ background: 'var(--border)' }}
        />

        {/* ── Marquee ── */}
        <div className="min-w-0 flex-1 px-3 pb-4 md:px-2 md:pb-0">
          <InfiniteMarquee
            items={category.skills}
            direction={cfg.direction}
            duration={cfg.duration}
            delay={cfg.delay}
            paused={paused}
            isProfessional={isProfessional}
          />
        </div>
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════
   Skills Section
   ═══════════════════════════════════════════════════════════ */
export function Skills() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => setVisible(e.isIntersecting),
      { threshold: 0 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-20 md:py-24"
      style={{ background: 'var(--bg-secondary)' }}
    >
      <Container>
        <SectionHeader
          title={t('skills.section_title')}
          badge={t('skills.badge')}
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="flex flex-col gap-4"
        >
          {skillCategories.map((cat, i) => (
            <SkillRail key={cat.title} category={cat} index={i} paused={!visible} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
