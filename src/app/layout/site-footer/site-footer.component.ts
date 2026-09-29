import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { injectTranslations } from '@core/i18n';
import { ProfileService } from '@core/services';
import { ExternalLinkDirective, IconComponent } from '@shared';

@Component({
  selector: 'app-site-footer',
  imports: [ExternalLinkDirective, IconComponent],
  templateUrl: './site-footer.component.html',
  styleUrl: './site-footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteFooterComponent {
  protected readonly profile = inject(ProfileService).profile;
  protected readonly translations = injectTranslations();
  protected readonly currentYear = new Date().getFullYear();
}
