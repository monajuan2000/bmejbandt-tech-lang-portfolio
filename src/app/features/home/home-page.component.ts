import { ChangeDetectionStrategy, Component } from '@angular/core';

import { CallToActionComponent } from '@shared/components/call-to-action/call-to-action.component';
import { RevealDirective } from '@shared/directives/reveal.directive';

import { CategoriesSectionComponent } from './components/categories-section/categories-section.component';
import { FeaturedProjectSectionComponent } from './components/featured-project-section/featured-project-section.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { ServicesSectionComponent } from './components/services-section/services-section.component';

@Component({
  selector: 'app-home-page',
  imports: [
    CallToActionComponent,
    CategoriesSectionComponent,
    FeaturedProjectSectionComponent,
    HeroSectionComponent,
    RevealDirective,
    ServicesSectionComponent,
  ],
  template: `
    <app-hero-section />
    <app-featured-project-section />
    <app-services-section />

    @defer (on viewport) {
      <app-categories-section />
    } @placeholder {
      <div class="section container" style="min-height: 480px"></div>
    }

    <div class="section container">
      <app-call-to-action appReveal />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {}
