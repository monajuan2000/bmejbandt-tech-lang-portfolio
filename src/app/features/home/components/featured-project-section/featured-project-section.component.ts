import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { LanguageService } from '@core/i18n';
import { ProjectService } from '@core/services';
import { IconComponent } from '@shared/components/icon/icon.component';
import { TagListComponent } from '@shared/components/tag-list/tag-list.component';
import { RevealDirective } from '@shared/directives/reveal.directive';

import { ProjectAnnouncementComponent } from '../project-announcement/project-announcement.component';

@Component({
  selector: 'app-featured-project-section',
  imports: [NgOptimizedImage, RouterLink, IconComponent, ProjectAnnouncementComponent, TagListComponent, RevealDirective],
  templateUrl: './featured-project-section.component.html',
  styleUrl: './featured-project-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeaturedProjectSectionComponent {
  private readonly projectService = inject(ProjectService);

  protected readonly translations = inject(LanguageService).translations;
  protected readonly project = this.projectService.featuredProject;
  protected readonly category = computed(() => {
    const project = this.project();
    return project ? this.projectService.getCategory(project.categoryId) : undefined;
  });
}
