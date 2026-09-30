import { Injectable, computed, inject } from '@angular/core';

import { EXPERIENCE, PROFILE, SERVICE_OFFERINGS, SKILL_GROUPS, WORK_PROCESS_STEPS } from '@core/data';
import { LanguageService } from '@core/i18n';
import { Experience, ProcessStep, Profile, ServiceOffering, SkillGroup, SocialLinkContent } from '@core/models';
import { buildGmailComposeUrl, buildWhatsAppUrl } from '@core/utils';

/**
 * Read-only access to personal information, resolved in the active language.
 * Single source of truth for contact URLs (Gmail, WhatsApp, mailto) used across the app.
 */
@Injectable({ providedIn: 'root' })
export class ProfileService {
  private readonly languageService = inject(LanguageService);

  readonly profile = computed<Profile>(() => {
    const profile = this.languageService.resolve(PROFILE);
    const gmailComposeUrl = buildGmailComposeUrl(profile.email, profile.emailSubject);
    const whatsAppUrl = buildWhatsAppUrl(profile.phoneNumber, profile.whatsAppGreeting);

    const urlByPlatform: Partial<Record<SocialLinkContent['platform'], string>> = {
      email: `mailto:${profile.email}`,
      whatsapp: whatsAppUrl,
    };

    return {
      ...profile,
      gmailComposeUrl,
      whatsAppUrl,
      socialLinks: profile.socialLinks.map((link) => ({
        ...link,
        url: link.url ?? urlByPlatform[link.platform] ?? '',
      })),
    };
  });

  readonly skillGroups = computed<readonly SkillGroup[]>(() => this.languageService.resolve(SKILL_GROUPS));
  readonly experience = computed<readonly Experience[]>(() => this.languageService.resolve(EXPERIENCE));
  readonly services = computed<readonly ServiceOffering[]>(() => this.languageService.resolve(SERVICE_OFFERINGS));
  readonly processSteps = computed<readonly ProcessStep[]>(() => this.languageService.resolve(WORK_PROCESS_STEPS));
}
