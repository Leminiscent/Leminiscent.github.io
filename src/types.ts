export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  categories: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
}