import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';

import { LanguageService } from '@core/i18n';
import { Project, ProjectCategory } from '@core/models';

import { IconComponent } from '../icon/icon.component';
import { TagListComponent } from '../tag-list/tag-list.component';

@Component({
  selector: 'app-project-card',
  imports: [IconComponent, TagListComponent],
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

  protected readonly translations = inject(LanguageService).translations;
  protected readonly accent = computed(() => this.category()?.accent ?? 'var(--color-primary)');
}
