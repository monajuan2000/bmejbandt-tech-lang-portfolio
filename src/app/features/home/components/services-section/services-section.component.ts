import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { injectTranslations } from '@core/i18n';
import { ProfileService } from '@core/services';
import { IconComponent, RevealDirective, SectionHeaderComponent } from '@shared';

@Component({
  selector: 'app-services-section',
  imports: [IconComponent, SectionHeaderComponent, RevealDirective],
  templateUrl: './services-section.component.html',
  styleUrl: './services-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesSectionComponent {
  protected readonly services = inject(ProfileService).services;
  protected readonly translations = injectTranslations();
}
