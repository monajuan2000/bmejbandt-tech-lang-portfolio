import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export type SectionHeaderAlignment = 'start' | 'center';

/** Eyebrow + title + description block. Use `level: 1` for the page's main heading. */
@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.component.html',
  styleUrl: './section-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.is-centered]': "align() === 'center'",
  },
})
export class SectionHeaderComponent {
  readonly eyebrow = input<string>();
  readonly title = input.required<string>();
  readonly description = input<string>();
  readonly level = input<1 | 2>(2);
  /** Id for the heading, so a parent `<section aria-labelledby>` can reference it. */
  readonly headingId = input<string>();
  readonly align = input<SectionHeaderAlignment>('start');
}
