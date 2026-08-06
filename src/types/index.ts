// ─── Navigation ─────────────────────────────────────────
export interface NavItem {
  label: string;
  href: string;
}

// ─── Social ─────────────────────────────────────────────
export interface SocialLink {
  name: string;
  url: string;
  icon: 'github' | 'linkedin' | 'email' | 'instagram';
}

// ─── Stats ──────────────────────────────────────────────
export interface Stat {
  value: string;
  label: string;
}

// ─── Skills ─────────────────────────────────────────────
export interface Skill {
  name: string;
  icon?: string;
  isLearning?: boolean;
}

export interface SkillCategory {
  title: string;
  icon: string;
  description: string;
  highlightedSkill?: {
    name: string;
    description: string;
    icon?: string;
  };
  skills: Skill[];
}

// ─── Projects ───────────────────────────────────────────
export type ProjectStatus = 'completed' | 'in-progress' | 'planned';
export type ProjectCategory = 'mobile' | 'web' | 'platform' | 'ecommerce';

export interface ProjectCaseStudy {
  problem: string;
  solution: string;
  keyFeatures: { title: string; description: string }[];
  learnings: string[];
  role: string;
  timeline: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  features: string[];
  technologies: string[];
  status: ProjectStatus;
  category: ProjectCategory;
  github?: string;
  demo?: string;
  image?: string;
  caseStudy: ProjectCaseStudy;
}

// ─── Certificates ───────────────────────────────────────
export type CertificateCategory = 'development' | 'design' | 'marketing' | 'other';

export interface Certificate {
  id: string;
  title: string;
  organization: string;
  date: string;
  category: CertificateCategory;
  image: string;
  credential?: string;
}

// ─── Experience ─────────────────────────────────────────
export type TimelineType = 'work' | 'education' | 'certification';
export type TimelineStatus = 'current' | 'completed' | 'planned';

export interface Experience {
  id: string;
  type: TimelineType;
  title: string;
  organization: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  responsibilities: string[];
  status: TimelineStatus;
  skills?: string[];
}
