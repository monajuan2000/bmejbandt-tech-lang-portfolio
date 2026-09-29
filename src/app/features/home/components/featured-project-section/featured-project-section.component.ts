import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { injectTranslations } from '@core/i18n';
import { ProjectService } from '@core/services';
import { ExternalLinkDirective, IconComponent, RevealDirective, TagListComponent } from '@shared';

import { ProjectAnnouncementComponent } from '../project-announcement/project-announcement.component';

@Component({
  selector: 'app-featured-project-section',
  imports: [NgOptimizedImage, RouterLink, ExternalLinkDirective, IconComponent, ProjectAnnouncementComponent, TagListComponent, RevealDirective],
  templateUrl: './featured-project-section.component.html',
  styleUrl: './featured-project-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeaturedProjectSectionComponent {
  private readonly projectService = inject(ProjectService);

  protected readonly translations = injectTranslations();
  protected readonly project = this.projectService.featuredProject;
  protected readonly category = computed(() => {
    const project = this.project();
    return project ? this.projectService.getCategory(project.categoryId) : undefined;
  });
}
