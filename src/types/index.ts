export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: string;
  imageUrl: string;
  techStack: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
  caseStudy: {
    overview: string;
    architectureSummary: string;
    keyChallenges: {
      challenge: string;
      solution: string;
    }[];
    systemHighlights: string[];
    databaseDesign: string;
    outcome: string;
  };
}

export interface Experience {
  period: string;
  role: string;
  company: string;
  location: string;
  type: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: string;
    experienceYears: number;
    details: string;
  }[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatarText: string;
  quote: string;
  projectRelation: string;
}
