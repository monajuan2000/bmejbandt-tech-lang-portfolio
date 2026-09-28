import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { LanguageService } from '@core/i18n';
import { IconComponent } from '@shared/components/icon/icon.component';

@Component({
  selector: 'app-not-found-page',
  imports: [RouterLink, IconComponent],
  template: `
    @let t = translations().notFoundPage;

    <section class="page container not-found">
      <p class="not-found__code text-gradient" aria-hidden="true">404</p>
      <h1 class="not-found__title">{{ t.title }}</h1>
      <p class="lead">{{ t.description }}</p>
      <a class="btn btn--primary" routerLink="/home">
        {{ t.backHome }}
        <app-icon name="arrow-right" [size]="18" />
      </a>
    </section>
  `,
  styles: `
    .not-found {
      display: grid;
      justify-items: center;
      gap: var(--space-5);
      min-height: 80svh;
      align-content: center;
      text-align: center;
    }

    .not-found__code {
      font-family: var(--font-display);
      font-size: clamp(5rem, 20vw, 10rem);
      font-weight: 700;
      line-height: 1;
    }

    .not-found__title {
      font-size: var(--font-size-2xl);
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundPageComponent {
  protected readonly translations = inject(LanguageService).translations;
}
