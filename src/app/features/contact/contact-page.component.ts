import { ChangeDetectionStrategy, Component, DestroyRef, computed, inject, signal } from '@angular/core';

import { LanguageService } from '@core/i18n';
import { ProfileService } from '@core/services';
import { buildGmailComposeUrl, buildWhatsAppUrl } from '@core/utils';
import { IconComponent } from '@shared/components/icon/icon.component';
import { SectionHeaderComponent } from '@shared/components/section-header/section-header.component';
import { RevealDirective } from '@shared/directives/reveal.directive';

const COPY_FEEDBACK_DURATION_MS = 2000;

@Component({
  selector: 'app-contact-page',
  imports: [IconComponent, RevealDirective, SectionHeaderComponent],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactPageComponent {
  protected readonly profile = inject(ProfileService).profile;
  protected readonly translations = inject(LanguageService).translations;
  protected readonly isEmailCopied = signal(false);

  protected readonly gmailUrl = computed(() =>
    buildGmailComposeUrl(this.profile().email, this.translations().contactPage.emailSubject),
  );
  protected readonly whatsAppUrl = computed(() =>
    buildWhatsAppUrl(this.profile().phoneNumber, this.profile().whatsAppGreeting),
  );

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
