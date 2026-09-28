import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ProfileService, ProjectService } from '@core/services';
import { IconComponent } from '@shared/components/icon/icon.component';

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

  protected readonly stats = computed<readonly HeroStat[]>(() => [
    { value: `${this.projectService.projects().length}+`, label: 'Projects' },
    { value: `${this.projectService.categories().length}`, label: 'Disciplines' },
    { value: `${this.profileService.services().length}`, label: 'Services' },
  ]);
}
