import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { LanguageService } from '@core/i18n';
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

  protected readonly translations = inject(LanguageService).translations;

  protected readonly categories = computed(() => {
    const formatCount = this.translations().common.projectCount;
    return this.projectService.categories().map((category) => ({
      ...category,
      projectCountLabel: formatCount(this.projectService.getProjectCount(category.id)),
    }));
  });
}
