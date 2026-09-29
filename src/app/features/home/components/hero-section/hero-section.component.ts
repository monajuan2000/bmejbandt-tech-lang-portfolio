import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { injectTranslations } from '@core/i18n';
import { ProfileService, ProjectService } from '@core/services';
import { IconComponent } from '@shared';

interface HeroStat {
  readonly value: string;
  readonly label: string;
}

@Component({
  selector: 'app-hero-section',
  imports: [RouterLink, IconComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroSectionComponent {
  private readonly profileService = inject(ProfileService);
  private readonly projectService = inject(ProjectService);

  protected readonly profile = this.profileService.profile;
  protected readonly translations = injectTranslations();

  protected readonly stats = computed<readonly HeroStat[]>(() => {
    const t = this.translations().hero;
    return [
      { value: `${this.projectService.projects().length}+`, label: t.projectsStat },
      { value: `${this.projectService.categories().length}`, label: t.disciplinesStat },
      { value: `${this.profileService.services().length}`, label: t.servicesStat },
    ];
  });
}
