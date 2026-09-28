import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { filter } from 'rxjs';

import { LanguageService } from '@core/i18n';
import { NavigationService, ProfileService, ThemeService } from '@core/services';
import { IconComponent } from '@shared/components/icon/icon.component';

import { LanguageSwitcherComponent } from '../language-switcher/language-switcher.component';

const SCROLL_THRESHOLD_PX = 12;

@Component({
  selector: 'app-site-header',
  imports: [RouterLink, RouterLinkActive, IconComponent, LanguageSwitcherComponent],
  templateUrl: './site-header.component.html',
  styleUrl: './site-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.is-scrolled]': 'isScrolled()',
    '[class.is-menu-open]': 'isMenuOpen()',
    '(window:scroll)': 'onWindowScroll()',
    '(document:keydown.escape)': 'closeMenu()',
  },
})
export class SiteHeaderComponent {
  protected readonly navigationItems = inject(NavigationService).items;
  protected readonly profile = inject(ProfileService).profile;
  protected readonly translations = inject(LanguageService).translations;
  protected readonly themeService = inject(ThemeService);

  protected readonly isMenuOpen = signal(false);
  protected readonly isScrolled = signal(false);

  constructor() {
    inject(Router)
      .events.pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntilDestroyed(),
      )
      .subscribe(() => this.closeMenu());
  }

  protected onWindowScroll(): void {
    this.isScrolled.set(window.scrollY > SCROLL_THRESHOLD_PX);
  }

  protected toggleMenu(): void {
    this.isMenuOpen.update((isOpen) => !isOpen);
  }

  protected closeMenu(): void {
    this.isMenuOpen.set(false);
  }
}
