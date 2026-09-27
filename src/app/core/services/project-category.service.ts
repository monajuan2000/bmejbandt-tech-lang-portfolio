import { Injectable } from '@angular/core';

import { ProjectCategory } from '../models/project-category.model';

@Injectable({
    providedIn: 'root',
})
export class ProjectCategoryService {
    private readonly categories: ProjectCategory[] = [
        {
            id: 'full-stack',
            name: 'Full Stack',
            description: 'End-to-end product work spanning interface, business logic, and deployment.',
            icon: '⚙️',
            accent: '#4f46e5',
            projects: [
                {
                    title: 'Operations Dashboard',
                    description: 'A monitoring platform for internal teams to track business KPIs and operational health.',
                    type: 'Web App',
                    technologies: ['Angular', 'Node.js', 'PostgreSQL'],
                    link: '#',
                },
                {
                    title: 'Client Portal',
                    description: 'A secure portal for customers to review data, upload files, and manage workflows.',
                    type: 'Platform',
                    technologies: ['Angular', 'REST API', 'RxJS'],
                },
            ],
        },
        {
            id: 'frontend',
            name: 'Frontend',
            description: 'Interface design, product storytelling, interaction design, and responsive UX.',
            icon: '🎨',
            accent: '#ec4899',
            projects: [
                {
                    title: 'Beat and Beach Colombia',
                    description: 'A tourism-focused web experience that showcases beaches, destinations, and travel inspiration across Colombia.',
                    type: 'Tourism Platform',
                    technologies: ['Angular', 'Responsive Design', 'Travel UX', 'Brand Experience'],
                    link: 'https://monajuan2000.github.io/beatandbeach-colombia-web-app/',
                },
                {
                    title: 'Brand Experience Site',
                    description: 'A polished marketing experience designed to present product value and drive onboarding.',
                    type: 'Marketing Site',
                    technologies: ['Angular', 'SCSS', 'Accessibility'],
                },
                {
                    title: 'Learning Journey UI',
                    description: 'A modular educational interface built to guide users through structured learning paths.',
                    type: 'UX Flow',
                    technologies: ['Angular Material', 'Animations', 'Design Systems'],
                },
            ],
        },
        {
            id: 'backend',
            name: 'Backend',
            description: 'API design, business rules, integrations, and service reliability for complex platforms.',
            icon: '🧩',
            accent: '#14b8a6',
            projects: [
                {
                    title: 'Workflow Engine',
                    description: 'An orchestration service that coordinates domain events and downstream integrations.',
                    type: 'API',
                    technologies: ['TypeScript', 'Express', 'Queueing'],
                },
                {
                    title: 'Integration Layer',
                    description: 'A reusable integration layer connecting internal services with external third-party APIs.',
                    type: 'Service',
                    technologies: ['Node.js', 'REST', 'JWT'],
                },
            ],
        },
        {
            id: 'data-ai',
            name: 'Data & AI',
            description: 'Decision-support systems, analytics, automation, and machine-aided workflows.',
            icon: '📊',
            accent: '#f59e0b',
            projects: [
                {
                    title: 'Insights Hub',
                    description: 'A data visualization workspace enabling teams to analyze trends and customer signals.',
                    type: 'Analytics',
                    technologies: ['Python', 'Power BI', 'SQL'],
                },
                {
                    title: 'Automated Reporting',
                    description: 'A reporting workflow that transforms raw business data into executive-ready summaries.',
                    type: 'Automation',
                    technologies: ['Python', 'ETL', 'Scheduling'],
                },
            ],
        },
        {
            id: 'devops',
            name: 'Cloud & DevOps',
            description: 'Reliable delivery pipelines, infrastructure automation, and production-ready deployment flows.',
            icon: '☁️',
            accent: '#10b981',
            projects: [
                {
                    title: 'CI/CD Foundation',
                    description: 'A streamlined pipeline that standardizes validation, quality checks, and deployment.',
                    type: 'DevOps',
                    technologies: ['GitHub Actions', 'Docker', 'Azure'],
                },
                {
                    title: 'Infrastructure as Code',
                    description: 'Declarative platform automation for repeatable environments and lower operational risk.',
                    type: 'Platform',
                    technologies: ['Terraform', 'Cloud', 'Monitoring'],
                },
            ],
        },
    ];

    getCategories(): ProjectCategory[] {
        return [...this.categories];
    }

    getCategoryById(categoryId: string): ProjectCategory | undefined {
        return this.categories.find((category) => category.id === categoryId);
    }
}
