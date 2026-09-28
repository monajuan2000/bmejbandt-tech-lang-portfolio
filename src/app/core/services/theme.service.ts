import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, computed, inject, signal } from '@angular/core';

import { readStorage, runWithViewTransition, writeStorage } from '@core/utils';

export type Theme = 'light' | 'dark';

export const THEME_STORAGE_KEY = 'portfolio-theme';

/** Owns the light/dark theme: resolves the initial value, applies it to <html> and persists it. */
@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private readonly themeState = signal<Theme>(this.resolveInitialTheme());

  readonly theme = this.themeState.asReadonly();
  readonly isDark = computed(() => this.themeState() === 'dark');

  constructor() {
    this.applyTheme(this.themeState());
  }

  toggle(): void {
    const nextTheme: Theme = this.isDark() ? 'light' : 'dark';

    if (this.isBrowser) {
      runWithViewTransition(this.document, () => this.setTheme(nextTheme));
    } else {
      this.setTheme(nextTheme);
    }
  }

  setTheme(theme: Theme): void {
    this.themeState.set(theme);
    this.applyTheme(theme);

    if (this.isBrowser) {
      writeStorage(THEME_STORAGE_KEY, theme);
    }
  }

  private applyTheme(theme: Theme): void {
    this.document.documentElement.setAttribute('data-theme', theme);
  }

  private resolveInitialTheme(): Theme {
    if (!this.isBrowser) {
      return 'dark';
    }

    const storedTheme = readStorage(THEME_STORAGE_KEY);
    if (storedTheme === 'light' || storedTheme === 'dark') {
      return storedTheme;
    }

    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }
}
