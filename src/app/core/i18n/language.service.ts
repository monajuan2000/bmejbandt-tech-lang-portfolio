import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, computed, inject, signal } from '@angular/core';

import { Language, Resolved } from '@core/models';
import { readStorage, runWithViewTransition, writeStorage } from '@core/utils';

import { DEFAULT_LANGUAGE, LANGUAGE_STORAGE_KEY, isSupportedLanguage } from './language.config';
import { resolveLocalized } from './resolve-localized';
import { TRANSLATIONS } from './translations';

/**
 * Owns the active display language. Only client-facing text changes; code stays in English.
 * - `translations()` exposes the UI dictionary for the active language.
 * - `resolve()` turns `LocalizedText` content into plain strings (call it inside `computed`).
 */
@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly document = inject(DOCUMENT);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private readonly languageState = signal<Language>(this.resolveInitialLanguage());

  readonly language = this.languageState.asReadonly();
  readonly translations = computed(() => TRANSLATIONS[this.languageState()]);

  constructor() {
    this.applyLanguage(this.languageState());
  }

  setLanguage(language: Language): void {
    if (language === this.languageState()) {
      return;
    }

    const update = () => {
      this.languageState.set(language);
      this.applyLanguage(language);
    };

    if (this.isBrowser) {
      runWithViewTransition(this.document, update);
      writeStorage(LANGUAGE_STORAGE_KEY, language);
    } else {
      update();
    }
  }

  resolve<T>(content: T): Resolved<T> {
    return resolveLocalized(content, this.languageState());
  }

  private applyLanguage(language: Language): void {
    this.document.documentElement.setAttribute('lang', language);
  }

  private resolveInitialLanguage(): Language {
    if (!this.isBrowser) {
      return DEFAULT_LANGUAGE;
    }

    const storedLanguage = readStorage(LANGUAGE_STORAGE_KEY);
    if (isSupportedLanguage(storedLanguage)) {
      return storedLanguage;
    }

    const browserLanguage = navigator.language.slice(0, 2).toLowerCase();
    return isSupportedLanguage(browserLanguage) ? browserLanguage : DEFAULT_LANGUAGE;
  }
}
