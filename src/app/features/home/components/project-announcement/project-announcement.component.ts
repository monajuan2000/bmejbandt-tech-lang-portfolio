import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { ProjectAnnouncement } from '@core/models';
import { createUniqueId } from '@core/utils';
import { ExternalLinkDirective, IconComponent } from '@shared';

/** Highlighted promotion (survey, launch, event…) attached to a project. */
@Component({
  selector: 'app-project-announcement',
  imports: [ExternalLinkDirective, IconComponent],
  templateUrl: './project-announcement.component.html',
  styleUrl: './project-announcement.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectAnnouncementComponent {
  readonly announcement = input.required<ProjectAnnouncement>();

  protected readonly titleId = createUniqueId('announcement-title');
}
