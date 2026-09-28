import { Injectable, effect, inject, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';

import { PROFILE } from '@core/data';
import { LanguageService, PageTitleKey } from '@core/i18n';

/**
 * Route `title` values are translation keys (`PageTitleKey`). The document title is
 * formatted as "Page | Full Name" and re-rendered whenever the language changes.
 */
@Injectable({ providedIn: 'root' })
export class PageTitleStrategy extends TitleStrategy {
  private readonly title = inject(Title);
  private readonly languageService = inject(LanguageService);
  private readonly pageTitleKey = signal<string | undefined>(undefined);

  constructor() {
    super();
    effect(() => this.title.setTitle(this.formatTitle(this.pageTitleKey())));
  }

  override updateTitle(snapshot: RouterStateSnapshot): void {
    this.pageTitleKey.set(this.buildTitle(snapshot));
  }

  private formatTitle(key: string | undefined): string {
    const translations = this.languageService.translations();
    const pageTitles = translations.pageTitles;

    if (key && key in pageTitles) {
      return `${pageTitles[key as PageTitleKey]} | ${PROFILE.fullName}`;
    }

    return `${PROFILE.fullName} | ${translations.common.portfolio}`;
  }
}
