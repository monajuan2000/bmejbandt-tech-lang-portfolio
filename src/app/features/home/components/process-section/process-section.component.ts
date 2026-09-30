import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { injectTranslations } from '@core/i18n';
import { ProfileService } from '@core/services';
import { IconComponent, RevealDirective, SectionHeaderComponent } from '@shared';

@Component({
  selector: 'app-process-section',
  imports: [IconComponent, SectionHeaderComponent, RevealDirective],
  templateUrl: './process-section.component.html',
  styleUrl: './process-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProcessSectionComponent {
  protected readonly steps = inject(ProfileService).processSteps;
  protected readonly translations = injectTranslations();
}
