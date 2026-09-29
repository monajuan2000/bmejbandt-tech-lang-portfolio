import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { injectTranslations } from '@core/i18n';
import { ProjectService } from '@core/services';
import { IconComponent, RevealDirective, SectionHeaderComponent } from '@shared';

@Component({
  selector: 'app-categories-section',
  imports: [RouterLink, IconComponent, SectionHeaderComponent, RevealDirective],
  templateUrl: './categories-section.component.html',
  styleUrl: './categories-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoriesSectionComponent {
  private readonly projectService = inject(ProjectService);

  protected readonly translations = injectTranslations();

  protected readonly categories = computed(() => {
    const formatCount = this.translations().common.projectCount;
    return this.projectService.categories().map((category) => ({
      ...category,
      projectCountLabel: formatCount(this.projectService.getProjectCount(category.id)),
    }));
  });
}
