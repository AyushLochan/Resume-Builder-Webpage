export interface ResumeData {
  id: string;
  createdAt: string;
  updatedAt: string;
  name: string;
  templateId: string;
  personalInfo: PersonalInfo;
  education: EducationItem[];
  experience: ExperienceItem[];
  skills: SkillItem[];
  projects: ProjectItem[];
  multimedia: MultimediaItem[];
  versions: VersionHistory[];
  atsKeywords?: string[];
  customSections?: CustomSection[];
}

export interface CustomSection {
  id: string;
  title: string;
  content: string;
  order: number;
}

export interface VersionHistory {
  id: string;
  createdAt: string;
  name: string;
  data: ResumeData;
}

export interface PersonalInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  location: string;
  title: string;
  summary: string;
  website?: string;
  linkedin?: string;
  github?: string;
  profileImage?: string;
  professionalHeadline?: string;
  industryKeywords?: string[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  fieldOfStudy: string;
  startDate: string;
  endDate: string;
  description: string;
  location?: string;
  gpa?: string;
  relevantCourses?: string[];
  achievements?: string[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
  location?: string;
  highlights: string[];
  keywords?: string[];
  toolsUsed?: string[];
  impactMetrics?: string[];
}

export interface SkillItem {
  id: string;
  name: string;
  level: number;
  category?: string;
  yearsOfExperience?: number;
  certifications?: string[];
}

export interface ProjectItem {
  id: string;
  name: string;
  description: string;
  startDate?: string;
  endDate?: string;
  url?: string;
  technologies: string[];
  role?: string;
  teamSize?: number;
  outcomes?: string[];
  metrics?: string[];
}

export interface MultimediaItem {
  id: string;
  type: 'video' | 'image' | 'link' | 'document';
  title: string;
  description?: string;
  url: string;
  thumbnailUrl?: string;
  category?: string;
  tags?: string[];
}

export interface Template {
  id: string;
  name: string;
  thumbnail: string;
  description: string;
}

export enum Section {
  PERSONAL_INFO = 'personalInfo',
  EDUCATION = 'education',
  EXPERIENCE = 'experience',
  SKILLS = 'skills',
  PROJECTS = 'projects',
  MULTIMEDIA = 'multimedia',
}
