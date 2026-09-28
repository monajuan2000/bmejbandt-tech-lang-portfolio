import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-call-to-action',
  imports: [RouterLink, IconComponent],
  templateUrl: './call-to-action.component.html',
  styleUrl: './call-to-action.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CallToActionComponent {
  readonly title = input("Let's build something meaningful.");
  readonly description = input(
    "I'm open to product, engineering, and collaboration opportunities across digital experiences and platforms.",
  );
  readonly actionLabel = input('Get in touch');
  readonly actionPath = input('/contact');
}
