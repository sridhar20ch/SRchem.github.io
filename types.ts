
export interface ResearchExperience {
  role: string;
  institution: string;
  location: string;
  period: string;
  description: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  honors?: string;
  gpa?: string;
  thesis?: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Project {
  title: string;
  type: string;
  summary: string;
  outcomes: string[];
}

export interface Publication {
  title: string;
  authors: string;
  journal: string;
  year: string;
  doi?: string;
}
