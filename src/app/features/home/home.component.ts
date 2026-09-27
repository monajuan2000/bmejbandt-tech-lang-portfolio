import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ProjectCategory } from '../../core/models/project-category.model';
import { ProjectCategoryService } from '../../core/services/project-category.service';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
})
export class HomeComponent {
    categories: ProjectCategory[];
    selectedCategoryId = 'all';

    constructor(private projectCategoryService: ProjectCategoryService) {
        this.categories = this.projectCategoryService.getCategories();
    }

    get filteredCategories(): ProjectCategory[] {
        if (this.selectedCategoryId === 'all') {
            return this.categories;
        }

        return this.categories.filter((category) => category.id === this.selectedCategoryId);
    }

    get totalProjects(): number {
        return this.categories.reduce((count, category) => count + category.projects.length, 0);
    }

    get selectedCategoryLabel(): string {
        if (this.selectedCategoryId === 'all') {
            return 'All project categories';
        }

        const currentCategory = this.projectCategoryService.getCategoryById(this.selectedCategoryId);
        return currentCategory ? currentCategory.name : 'All project categories';
    }

    selectCategory(categoryId: string): void {
        this.selectedCategoryId = categoryId;
    }
}
