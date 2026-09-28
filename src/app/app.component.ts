import { ChangeDetectionStrategy, Component, ElementRef, inject, viewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { LanguageService } from '@core/i18n';
import { BackgroundVideoComponent, SiteFooterComponent, SiteHeaderComponent } from '@layout/index';

/** Application shell: persistent layout around the routed page. */
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BackgroundVideoComponent, SiteHeaderComponent, SiteFooterComponent],
  template: `
    <!-- A button, not an anchor: "#main-content" would be parsed as a route by hash routing. -->
    <button type="button" class="skip-link" (click)="skipToContent()">
      {{ translations().common.skipToContent }}
    </button>
    <app-background-video />
    <app-site-header />
    <main #mainContent tabindex="-1">
      <router-outlet />
    </main>
    <app-site-footer />
  `,
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  protected readonly translations = inject(LanguageService).translations;

  private readonly mainContent = viewChild.required<ElementRef<HTMLElement>>('mainContent');

  protected skipToContent(): void {
    this.mainContent().nativeElement.focus();
  }
}
