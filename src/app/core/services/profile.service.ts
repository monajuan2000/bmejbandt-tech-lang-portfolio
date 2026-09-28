import { Injectable, signal } from '@angular/core';

import { EXPERIENCE, PROFILE, SERVICE_OFFERINGS, SKILL_GROUPS } from '@core/data';
import { Experience, Profile, ServiceOffering, SkillGroup } from '@core/models';

/** Read-only access to personal information: profile, skills, experience and services. */
@Injectable({ providedIn: 'root' })
export class ProfileService {
  readonly profile = signal<Profile>(PROFILE).asReadonly();
  readonly skillGroups = signal<readonly SkillGroup[]>(SKILL_GROUPS).asReadonly();
  readonly experience = signal<readonly Experience[]>(EXPERIENCE).asReadonly();
  readonly services = signal<readonly ServiceOffering[]>(SERVICE_OFFERINGS).asReadonly();
}
