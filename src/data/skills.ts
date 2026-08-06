import type { SkillCategory } from '@/types';

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    icon: 'code',
    description: '',
    skills: [
      { name: 'React', icon: 'react' },
      { name: 'Next.js', icon: 'nextdotjs' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'Tailwind CSS', icon: 'tailwindcss' },
      { name: 'HTML5', icon: 'html5' },
      { name: 'CSS3', icon: 'css3' },
    ],
  },
  {
    title: 'Mobile',
    icon: 'smartphone',
    description: '',
    skills: [
      { name: 'Flutter', icon: 'flutter' },
      { name: 'Kotlin', icon: 'kotlin' },
      { name: 'Jetpack Compose', icon: 'android' },
      { name: 'Android', icon: 'android' },
      { name: 'Java', icon: 'java' },
      { name: 'Dart', icon: 'dart' },
    ],
  },
  {
    title: 'Backend',
    icon: 'server',
    description: '',
    skills: [
      { name: 'Laravel', icon: 'laravel' },
      { name: 'Node.js', icon: 'nodedotjs' },
      { name: 'MySQL', icon: 'mysql' },
      { name: 'Firebase', icon: 'firebase' },
      { name: 'SQLite', icon: 'sqlite' },
      { name: 'REST APIs', icon: 'network' },
    ],
  },
  {
    title: 'Tools',
    icon: 'wrench',
    description: '',
    skills: [
      { name: 'Git', icon: 'git' },
      { name: 'GitHub', icon: 'github' },
      { name: 'VS Code', icon: 'visualstudiocode' },
      { name: 'Figma', icon: 'figma' },
      { name: 'Postman', icon: 'postman' },
      { name: 'Docker', icon: 'docker' },
      { name: 'XAMPP', icon: 'xampp' },
    ],
  },
  {
    title: 'Professional',
    icon: 'briefcase',
    description: '',
    skills: [
      { name: 'UI/UX Design', icon: 'palette' },
      { name: 'Responsive Design', icon: 'monitor-smartphone' },
      { name: 'Clean Architecture', icon: 'layers' },
      { name: 'Problem Solving', icon: 'lightbulb' },
      { name: 'Teamwork', icon: 'users' },
      { name: 'Communication', icon: 'message-circle' },
      { name: 'Leadership', icon: 'crown' },
    ],
  },
];
