import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-tag-list',
  template: `
    <ul class="tag-list" [attr.aria-label]="label()">
      @for (tag of tags(); track tag) {
        <li class="tag">{{ tag }}</li>
      }
    </ul>
  `,
  styles: `
    .tag-list {
      display: flex;
      flex-wrap: wrap;
      gap: var(--space-2);
    }

    .tag {
      padding: var(--space-1) var(--space-3);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-pill);
      background: color-mix(in srgb, var(--color-primary) 10%, transparent);
      color: var(--color-text-muted);
      font-size: var(--font-size-xs);
      font-weight: 600;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TagListComponent {
  readonly tags = input.required<readonly string[]>();
  /** Accessible name for the list, provided by the caller in the active language. */
  readonly label = input<string>();
}
