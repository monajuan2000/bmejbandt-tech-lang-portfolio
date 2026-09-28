import { Injectable, computed, inject } from '@angular/core';

import { EXPERIENCE, PROFILE, SERVICE_OFFERINGS, SKILL_GROUPS } from '@core/data';
import { LanguageService } from '@core/i18n';
import { Experience, Profile, ServiceOffering, SkillGroup } from '@core/models';

/** Read-only access to personal information, resolved in the active language. */
@Injectable({ providedIn: 'root' })
export class ProfileService {
  private readonly languageService = inject(LanguageService);

  readonly profile = computed<Profile>(() => this.languageService.resolve(PROFILE));
  readonly skillGroups = computed<readonly SkillGroup[]>(() => this.languageService.resolve(SKILL_GROUPS));
  readonly experience = computed<readonly Experience[]>(() => this.languageService.resolve(EXPERIENCE));
  readonly services = computed<readonly ServiceOffering[]>(() => this.languageService.resolve(SERVICE_OFFERINGS));
}
