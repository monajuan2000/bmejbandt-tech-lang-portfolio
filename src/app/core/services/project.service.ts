import { Injectable, computed, inject } from '@angular/core';

import { PROJECT_CATEGORIES, PROJECTS } from '@core/data';
import { LanguageService } from '@core/i18n';
import { Project, ProjectCategory, ProjectCategoryId } from '@core/models';

export type ProjectFilter = ProjectCategoryId | 'all';

const CATEGORY_IDS: ReadonlySet<ProjectCategoryId> = new Set(PROJECT_CATEGORIES.map((category) => category.id));

/**
 * Read-only access to projects and categories, resolved in the active language.
 * Backed by static data today; swap the sources for an HTTP resource later without touching consumers.
 */
@Injectable({ providedIn: 'root' })
export class ProjectService {
  private readonly languageService = inject(LanguageService);

  readonly categories = computed<readonly ProjectCategory[]>(() => this.languageService.resolve(PROJECT_CATEGORIES));
  readonly projects = computed<readonly Project[]>(() => this.languageService.resolve(PROJECTS));

  /** Projects currently in progress, in data order — the home page highlights each one. */
  readonly featuredProjects = computed(() => this.projects().filter((project) => project.featured));

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

  /** Language-independent on purpose: callers inside `computed`/`linkedSignal` must not re-run on language change. */
  isCategoryId(value: string | null | undefined): value is ProjectCategoryId {
    return !!value && CATEGORY_IDS.has(value as ProjectCategoryId);
  }
}
