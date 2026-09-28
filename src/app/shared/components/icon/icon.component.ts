import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

import { IconName } from '@core/models';

import { ICON_REGISTRY } from './icon.registry';

/** Decorative inline SVG icon. Pair it with visible text or an aria-label on the parent control. */
@Component({
  selector: 'app-icon',
  template: `
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
      [attr.width]="size()"
      [attr.height]="size()"
      aria-hidden="true"
      focusable="false"
    >
      <path [attr.d]="path()" />
    </svg>
  `,
  styles: `
    :host {
      display: inline-flex;
      flex-shrink: 0;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent {
  readonly name = input.required<IconName>();
  readonly size = input(20);

  protected readonly path = computed(() => ICON_REGISTRY[this.name()]);
}
