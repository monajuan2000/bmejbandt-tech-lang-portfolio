import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { Experience } from '@core/models';
import { RevealDirective } from '@shared';

@Component({
  selector: 'app-experience-timeline',
  imports: [RevealDirective],
  templateUrl: './experience-timeline.component.html',
  styleUrl: './experience-timeline.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceTimelineComponent {
  readonly items = input.required<readonly Experience[]>();
}
