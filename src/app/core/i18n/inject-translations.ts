import { Signal, inject } from '@angular/core';

import { LanguageService } from './language.service';
import { Translations } from './translations';

/**
 * Shortcut for components: `protected readonly translations = injectTranslations();`.
 * Must be called in an injection context (field initializer or constructor).
 */
export function injectTranslations(): Signal<Translations> {
  return inject(LanguageService).translations;
}
