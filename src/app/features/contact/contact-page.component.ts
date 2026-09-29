import { ChangeDetectionStrategy, Component, DestroyRef, inject, signal } from '@angular/core';

import { injectTranslations } from '@core/i18n';
import { ProfileService } from '@core/services';
import { ExternalLinkDirective, IconComponent, RevealDirective, SectionHeaderComponent } from '@shared';

const COPY_FEEDBACK_DURATION_MS = 2000;

@Component({
  selector: 'app-contact-page',
  imports: [ExternalLinkDirective, IconComponent, RevealDirective, SectionHeaderComponent],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactPageComponent {
  protected readonly profile = inject(ProfileService).profile;
  protected readonly translations = injectTranslations();
  protected readonly isEmailCopied = signal(false);

  private feedbackTimeoutId?: ReturnType<typeof setTimeout>;

  constructor() {
    inject(DestroyRef).onDestroy(() => clearTimeout(this.feedbackTimeoutId));
  }

  protected async copyEmail(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.profile().email);
    } catch {
      return;
    }

    this.isEmailCopied.set(true);
    clearTimeout(this.feedbackTimeoutId);
    this.feedbackTimeoutId = setTimeout(() => this.isEmailCopied.set(false), COPY_FEEDBACK_DURATION_MS);
  }
}
