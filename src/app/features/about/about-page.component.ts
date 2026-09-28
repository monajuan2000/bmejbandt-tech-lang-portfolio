import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { LanguageService } from '@core/i18n';
import { ProfileService } from '@core/services';
import { CallToActionComponent } from '@shared/components/call-to-action/call-to-action.component';
import { SectionHeaderComponent } from '@shared/components/section-header/section-header.component';
import { RevealDirective } from '@shared/directives/reveal.directive';

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

  protected readonly translations = inject(LanguageService).translations;
  protected readonly profile = this.profileService.profile;
  protected readonly skillGroups = this.profileService.skillGroups;
  protected readonly experience = this.profileService.experience;
}
