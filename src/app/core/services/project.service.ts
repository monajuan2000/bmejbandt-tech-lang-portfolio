import { Injectable, computed, signal } from '@angular/core';

import { PROJECT_CATEGORIES, PROJECTS } from '@core/data';
import { Project, ProjectCategory, ProjectCategoryId } from '@core/models';

export type ProjectFilter = ProjectCategoryId | 'all';

/**
 * Read-only access to projects and categories. Backed by static data today; swap the
 * signal sources for an HTTP resource later without touching any consumer.
 */
@Injectable({ providedIn: 'root' })
export class ProjectService {
  readonly categories = signal<readonly ProjectCategory[]>(PROJECT_CATEGORIES).asReadonly();
  readonly projects = signal<readonly Project[]>(PROJECTS).asReadonly();

  readonly featuredProject = computed(() => this.projects().find((project) => project.featured));

  private readonly categoriesById = computed(
    () => new Map(this.categories().map((category) => [category.id, category] as const)),
  );

  private readonly projectCountByCategory = computed(() => {
    const counts = new Map<ProjectCategoryId, number>();
    for (const project of this.projects()) {
      counts.set(project.categoryId, (counts.get(project.categoryId) ?? 0) + 1);
    }
    return counts;
  });

  getCategory(categoryId: ProjectCategoryId): ProjectCategory | undefined {
    return this.categoriesById().get(categoryId);
  }

  getProjectCount(categoryId: ProjectCategoryId): number {
    return this.projectCountByCategory().get(categoryId) ?? 0;
  }

  filterProjects(filter: ProjectFilter): readonly Project[] {
    return filter === 'all' ? this.projects() : this.projects().filter((project) => project.categoryId === filter);
  }

  isCategoryId(value: string | null | undefined): value is ProjectCategoryId {
    return !!value && this.categoriesById().has(value as ProjectCategoryId);
  }
}
