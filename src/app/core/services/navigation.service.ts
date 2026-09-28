import { Injectable, computed, inject } from '@angular/core';

import { NAVIGATION_ITEMS } from '@core/data';
import { LanguageService } from '@core/i18n';
import { NavigationItem } from '@core/models';

/** Main navigation entries, resolved in the active language. */
@Injectable({ providedIn: 'root' })
export class NavigationService {
  private readonly languageService = inject(LanguageService);

  readonly items = computed<readonly NavigationItem[]>(() => this.languageService.resolve(NAVIGATION_ITEMS));
}
