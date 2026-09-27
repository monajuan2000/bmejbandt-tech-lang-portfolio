export interface ProjectItem {
    title: string;
    description: string;
    type: string;
    technologies: string[];
    link?: string;
}

export interface ProjectCategory {
    id: string;
    name: string;
    description: string;
    icon: string;
    accent: string;
    projects: ProjectItem[];
}
