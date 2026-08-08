import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'darna-clean',
    title: 'Darna Clean',
    description:
      'An Android application that connects homeowners with vetted cleaning professionals.',
    features: [
      'Service booking and scheduling',
      'Modern UI with Jetpack Compose',
      'Firebase backend integration',
      'Real-time booking status tracking',
    ],
    technologies: ['Kotlin', 'Jetpack Compose', 'Firebase', 'SQLite'],
    status: 'in-progress',
    category: 'mobile',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop',
    caseStudy: {
      problem:
        'Finding reliable home cleaning services in Morocco usually relies on word-of-mouth, with no standard way to verify quality or book easily.',
      solution:
        'I built a mobile booking app that handles scheduling, reviews, and provider tracking in one place.',
      keyFeatures: [
        {
          title: 'Smart Scheduling',
          description:
            'Booking system with availability management and conflict resolution.',
        },
        {
          title: 'Provider Profiles',
          description:
            'Professional profiles displaying ratings, reviews, and service history.',
        },
        {
          title: 'Real-time Tracking',
          description:
            'Live status updates from confirmation to service completion.',
        },
      ],
      learnings: [
        'Managing complex state with Jetpack Compose',
        'Syncing real-time updates via Firebase',
        'Designing a clear and reliable booking flow',
      ],
      role: 'Full-Stack Mobile Developer',
      timeline: '2025 — Present',
    },
  },
  {
    id: 'allo-brikol',
    title: 'Allo Brikol',
    description:
      'A dual-platform marketplace connecting customers with local home repair and maintenance providers.',
    features: [
      'Search and booking system',
      'Ratings and reviews',
      'Provider profile management',
      'Real-time authentication',
    ],
    technologies: ['React', 'Vite', 'TypeScript', 'Tailwind CSS', 'Laravel API', 'Flutter'],
    status: 'in-progress',
    category: 'web',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2074&auto=format&fit=crop',
    caseStudy: {
      problem:
        'Homeowners often struggle to find trustworthy service providers for repairs without reliable referrals.',
      solution:
        'I helped create a Flutter app for customers and a React dashboard for providers, integrating a transparent review and pricing system.',
      keyFeatures: [
        {
          title: 'Dual Platform',
          description:
            'Flutter mobile app for customers, React web dashboard for providers.',
        },
        {
          title: 'Smart Matching',
          description:
            'Matching customers with suited providers based on location, skills, and ratings.',
        },
        {
          title: 'Review System',
          description:
            'Public rating and review system to ensure accountability.',
        },
      ],
      learnings: [
        'Building a full-stack architecture with a Laravel API',
        'Developing cross-platform with Flutter and React',
        'Handling search and filtering logic',
      ],
      role: 'Full-Stack Developer',
      timeline: '2025 — Present',
    },
  },
  {
    id: 'servegx',
    title: 'ServeGX',
    description:
      'A mobile monitoring tool providing real-time insights into server infrastructure health.',
    features: [
      'CPU, RAM, Disk & Network monitoring',
      'Real-time dashboard with live metrics',
      'Customizable alerts and notifications',
      'Historical analytics and reporting',
    ],
    technologies: ['Java', 'Kotlin', 'Android SDK'],
    status: 'in-progress',
    category: 'platform',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    caseStudy: {
      problem:
        'System administrators need a lightweight way to check server metrics on the go without opening heavy desktop dashboards.',
      solution:
        'I developed an Android app that visualizes live system metrics and sends push notifications for critical alerts.',
      keyFeatures: [
        {
          title: 'Real-time Metrics',
          description:
            'Live CPU, RAM, disk, and network monitoring with auto-refresh.',
        },
        {
          title: 'Alert System',
          description:
            'Configurable threshold-based alerts with push notifications.',
        },
        {
          title: 'Analytics Dashboard',
          description:
            'Historical data visualization showing trends and anomalies.',
        },
      ],
      learnings: [
        'Streaming and visualizing real-time data',
        'Building responsive Android dashboards',
        'Working with system-level metrics',
      ],
      role: 'Mobile Developer',
      timeline: '2025 — Present',
    },
  },
  {
    id: 'luxeldo',
    title: 'Luxeldo',
    description:
      'An e-commerce storefront for a Moroccan retailer of Swiss-made watches.',
    features: [
      'Premium product catalog',
      'Responsive luxury design',
      'Brand identity integration',
      'SEO-optimized storefront',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'E-commerce'],
    status: 'completed',
    category: 'ecommerce',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop',
    caseStudy: {
      problem:
        'The brand needed an online presence that matched the premium quality of their physical products while reaching a wider audience.',
      solution:
        'I designed and developed their e-commerce platform, focusing heavily on brand consistency and product presentation.',
      keyFeatures: [
        {
          title: 'Premium Design',
          description:
            'A clean UI featuring high-quality imagery and elegant typography.',
        },
        {
          title: 'Brand Consistency',
          description:
            'A cohesive visual identity that matches the physical retail experience.',
        },
        {
          title: 'Performance',
          description:
            'Optimized loading speeds and structured data for SEO visibility.',
        },
      ],
      learnings: [
        'Translating luxury brand guidelines into web design',
        'Applying e-commerce UX best practices',
        'Optimizing product pages for SEO',
      ],
      role: 'Web Developer & Brand Marketing',
      timeline: '2022 — Present',
    },
  },
];
