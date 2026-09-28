import { Location } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, input, linkedSignal } from '@angular/core';

import { LanguageService } from '@core/i18n';
import { ProjectCategory, ProjectCategoryId } from '@core/models';
import { ProjectFilter, ProjectService } from '@core/services';
import { CallToActionComponent } from '@shared/components/call-to-action/call-to-action.component';
import { ProjectCardComponent } from '@shared/components/project-card/project-card.component';
import { SectionHeaderComponent } from '@shared/components/section-header/section-header.component';
import { RevealDirective } from '@shared/directives/reveal.directive';

import { ProjectFilterComponent } from './components/project-filter/project-filter.component';

@Component({
  selector: 'app-projects-page',
  imports: [CallToActionComponent, ProjectCardComponent, ProjectFilterComponent, RevealDirective, SectionHeaderComponent],
  templateUrl: './projects-page.component.html',
  styleUrl: './projects-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsPageComponent {
  private readonly projectService = inject(ProjectService);
  private readonly location = inject(Location);

  /** Bound from the `?category=` query param via `withComponentInputBinding()`. */
  readonly category = input<string>();

  protected readonly translations = inject(LanguageService).translations;
  protected readonly categories = this.projectService.categories;

  protected readonly selectedFilter = linkedSignal<ProjectFilter>(() => {
    const category = this.category();
    return this.projectService.isCategoryId(category) ? category : 'all';
  });

  protected readonly visibleProjects = computed(() => this.projectService.filterProjects(this.selectedFilter()));

  protected readonly resultLabel = computed(() =>
    this.translations().common.projectCount(this.visibleProjects().length),
  );

  protected getCategory(categoryId: ProjectCategoryId): ProjectCategory | undefined {
    return this.projectService.getCategory(categoryId);
  }

  protected onFilterChange(filter: ProjectFilter): void {
    this.selectedFilter.set(filter);
    // Keep the URL shareable without triggering a new navigation (and its scroll reset).
    this.location.replaceState('/projects', filter === 'all' ? '' : `category=${filter}`);
  }
}
