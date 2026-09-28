import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';

import { LanguageService } from '@core/i18n';
import { SkillGroup } from '@core/models';
import { IconComponent } from '@shared/components/icon/icon.component';
import { TagListComponent } from '@shared/components/tag-list/tag-list.component';
import { RevealDirective } from '@shared/directives/reveal.directive';

@Component({
  selector: 'app-skill-groups',
  imports: [IconComponent, TagListComponent, RevealDirective],
  template: `
    <ul class="card-grid">
      @for (group of groups(); track group.id; let index = $index) {
        <li class="group glass" [appReveal]="index * 80">
          <h3 class="group__title">
            <app-icon [name]="group.icon" [size]="22" />
            {{ group.name }}
          </h3>
          <app-tag-list [tags]="group.skills" [label]="translations().aboutPage.skillGroupLabel(group.name)" />
        </li>
      }
    </ul>
  `,
  styles: `
    .group {
      display: grid;
      align-content: start;
      gap: var(--space-4);
      padding: var(--space-6);
    }

    .group__title {
      display: flex;
      align-items: center;
      gap: var(--space-3);
      font-size: var(--font-size-xl);

      app-icon {
        color: var(--color-accent);
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillGroupsComponent {
  readonly groups = input.required<readonly SkillGroup[]>();

  protected readonly translations = inject(LanguageService).translations;
}
