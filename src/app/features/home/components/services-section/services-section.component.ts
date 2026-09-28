import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { ProfileService } from '@core/services';
import { IconComponent } from '@shared/components/icon/icon.component';
import { SectionHeaderComponent } from '@shared/components/section-header/section-header.component';
import { RevealDirective } from '@shared/directives/reveal.directive';

@Component({
  selector: 'app-services-section',
  imports: [IconComponent, SectionHeaderComponent, RevealDirective],
  templateUrl: './services-section.component.html',
  styleUrl: './services-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesSectionComponent {
  protected readonly services = inject(ProfileService).services;
}
