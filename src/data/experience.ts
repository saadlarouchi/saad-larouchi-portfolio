import type { Experience } from '@/types';

export const experiences: Experience[] = [
  {
    id: 'bac-sciences',
    type: 'education',
    title: 'Baccalauréat Sciences Physiques',
    organization: 'Lycée Ibn Rochd Berrechid',
    location: 'Berrechid, Morocco',
    startDate: 'Sep 2022',
    endDate: 'Jun 2023',
    description: 'High school diploma in Physical Sciences.',
    responsibilities: [],
    status: 'completed',
  },
  {
    id: 'luxeldo-marketing',
    type: 'work',
    title: 'Head of Brand Marketing',
    organization: 'LUXELDO',
    location: 'Casablanca-Settat, Morocco',
    startDate: '2022',
    endDate: 'Present',
    description:
      'Led digital marketing and brand strategy to drive online sales and awareness.',
    responsibilities: [
      'Managed the e-commerce platform and optimized product pages for SEO',
      'Coordinated social media campaigns and digital content creation',
      'Handled partnerships with local influencers and media outlets',
    ],
    status: 'current',
    skills: ['Digital Marketing', 'Branding', 'E-commerce', 'SEO'],
  },
  {
    id: 'zyne-officiel-new',
    type: 'work',
    title: 'Digital Marketing Manager',
    organization: 'ZYNE OFFICIEL',
    location: 'Casablanca, Morocco',
    startDate: 'Nov 2023',
    endDate: 'June 2024',
    description: 'Managed brand marketing and digital campaigns.',
    responsibilities: [
      'Managed social media accounts (Instagram, TikTok)',
      'Created visual content and posts',
      'Contributed to digital marketing campaigns',
      'Tracked performance (engagement, reach)',
      'Improved brand online presence'
    ],
    status: 'completed',
    skills: ['Digital Marketing', 'Brand Strategy'],
  },
  {
    id: 'cmc-diploma',
    type: 'education',
    title: 'Digital Development — Mobile Applications',
    organization: 'Cité des Métiers et des Compétences',
    location: 'Casablanca-Settat, Morocco',
    startDate: 'Sep 2024',
    endDate: 'Jul 2026',
    description:
      'Specialized technician diploma in Digital Development with focus on Mobile Applications.',
    responsibilities: [
      'Kotlin, Java, Flutter, Dart development',
      'Android SDK & Jetpack Compose',
      'Firebase, REST APIs, SQLite, MySQL',
      'HTML, CSS, JavaScript, Git',
    ],
    status: 'completed',
    skills: ['Kotlin', 'Java', 'Flutter', 'Android SDK', 'Firebase'],
  },
];
