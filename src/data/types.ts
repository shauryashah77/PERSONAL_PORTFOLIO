export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  description: string;
  longDescription: string;
  tags: string[];
  metrics?: { label: string; value: string }[];
  highlights: string[];
  status: "Featured" | "In Development" | "Research";
  demoUrl?: string;
  githubUrl?: string;
}

export interface EducationEntry {
  id: string;
  step: string;
  institution: string;
  degree: string;
  specialization: string;
  honors?: string;
  period: string;
  location: string;
  gradeLabel: string;
  gradeValue: string;
  description: string;
  keyModules: string[];
}

export interface ExperienceEntry {
  id: string;
  step: string;
  role: string;
  company: string;
  division?: string;
  period: string;
  location: string;
  type: string;
  bullets: string[];
  skillsApplied: string[];
}

export interface ClubEntry {
  id: string;
  organization: string;
  role: string;
  category: string;
  description: string;
  deliverables: string[];
}

export interface SkillCategory {
  category: string;
  description: string;
  items: string[];
}
