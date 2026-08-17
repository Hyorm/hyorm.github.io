export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  email: string;
  github: string;
  linkedin: string;
  twitter?: string;
  location: string;
  avatarUrl?: string;
  resumeUrl?: string;
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
  category: string; // e.g., 'Languages', 'Frameworks', 'Tools', 'Cloud'
  iconName?: string; // name of Lucide icon to use
}

export interface Project {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  category: string; // e.g., 'Fullstack', 'Frontend', 'AI / Core', 'System'
  techStack: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  imageUrl?: string;
  status?: string; // e.g., 'In Progress (Nov 2024 – Present)'
  isClickable?: boolean; // false for non-clickable cards
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location?: string;
  period: string; // e.g., '2024 - Present'
  description: string;
  bulletPoints: string[];
  skillsUsed: string[];
  linkUrl?: string;
  linkText?: string;
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  skills: Skill[];
  projects: Project[];
  experiences: Experience[];
}
