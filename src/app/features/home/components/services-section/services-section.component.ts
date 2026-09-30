import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { injectTranslations } from '@core/i18n';
import { ProfileService } from '@core/services';
import { IconComponent, RevealDirective, SectionHeaderComponent, TagListComponent } from '@shared';

@Component({
  selector: 'app-services-section',
  imports: [RouterLink, IconComponent, SectionHeaderComponent, TagListComponent, RevealDirective],
  templateUrl: './services-section.component.html',
  styleUrl: './services-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesSectionComponent {
  private readonly profileService = inject(ProfileService);

  protected readonly translations = injectTranslations();

  protected readonly services = computed(() =>
    this.profileService.services().map((service, index) => ({
      ...service,
      number: String(index + 1).padStart(2, '0'),
    })),
  );
}
