import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ProjectService } from '@core/services';
import { IconComponent } from '@shared/components/icon/icon.component';
import { SectionHeaderComponent } from '@shared/components/section-header/section-header.component';
import { RevealDirective } from '@shared/directives/reveal.directive';

@Component({
  selector: 'app-categories-section',
  imports: [RouterLink, IconComponent, SectionHeaderComponent, RevealDirective],
  templateUrl: './categories-section.component.html',
  styleUrl: './categories-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoriesSectionComponent {
  private readonly projectService = inject(ProjectService);

  protected readonly categories = computed(() =>
    this.projectService.categories().map((category) => ({
      ...category,
      projectCount: this.projectService.getProjectCount(category.id),
    })),
  );
}
