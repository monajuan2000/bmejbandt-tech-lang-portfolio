import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { injectTranslations } from '@core/i18n';
import { ProfileService } from '@core/services';
import { CallToActionComponent, RevealDirective, SectionHeaderComponent } from '@shared';

import { ExperienceTimelineComponent } from './components/experience-timeline/experience-timeline.component';
import { SkillGroupsComponent } from './components/skill-groups/skill-groups.component';

@Component({
  selector: 'app-about-page',
  imports: [
    CallToActionComponent,
    ExperienceTimelineComponent,
    RevealDirective,
    SectionHeaderComponent,
    SkillGroupsComponent,
  ],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutPageComponent {
  private readonly profileService = inject(ProfileService);

  protected readonly translations = injectTranslations();
  protected readonly profile = this.profileService.profile;
  protected readonly skillGroups = this.profileService.skillGroups;
  protected readonly experience = this.profileService.experience;
}
