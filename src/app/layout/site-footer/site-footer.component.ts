import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { ProfileService } from '@core/services';
import { IconComponent } from '@shared/components/icon/icon.component';

@Component({
  selector: 'app-site-footer',
  imports: [IconComponent],
  templateUrl: './site-footer.component.html',
  styleUrl: './site-footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteFooterComponent {
  protected readonly profile = inject(ProfileService).profile;
  protected readonly currentYear = new Date().getFullYear();
}
