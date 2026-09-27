import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { ProjectCategory } from '../../core/models/project-category.model';
import { ProjectCategoryService } from '../../core/services/project-category.service';

@Component({
    selector: 'app-projects',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
    categories: ProjectCategory[];

    constructor(private projectCategoryService: ProjectCategoryService) {
        this.categories = this.projectCategoryService.getCategories();
    }
}
