import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

import { injectTranslations } from '@core/i18n';
import { Project, ProjectCategory } from '@core/models';

import { ExternalLinkDirective } from '../../directives/external-link.directive';
import { IconComponent } from '../icon/icon.component';
import { TagListComponent } from '../tag-list/tag-list.component';

@Component({
  selector: 'app-project-card',
  imports: [ExternalLinkDirective, IconComponent, TagListComponent],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[style.--card-accent]': 'accent()',
  },
})
export class ProjectCardComponent {
  readonly project = input.required<Project>();
  readonly category = input<ProjectCategory>();

  protected readonly translations = injectTranslations();
  protected readonly accent = computed(() => this.category()?.accent ?? 'var(--color-primary)');
}
