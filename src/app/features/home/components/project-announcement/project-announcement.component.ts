import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { ProjectAnnouncement } from '@core/models';
import { IconComponent } from '@shared/components/icon/icon.component';

/** Highlighted promotion (survey, launch, event…) attached to a project. */
@Component({
  selector: 'app-project-announcement',
  imports: [IconComponent],
  templateUrl: './project-announcement.component.html',
  styleUrl: './project-announcement.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectAnnouncementComponent {
  readonly announcement = input.required<ProjectAnnouncement>();
}
