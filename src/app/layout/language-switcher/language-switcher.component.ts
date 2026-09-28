import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';

import { LANGUAGE_OPTIONS, LanguageService } from '@core/i18n';
import { Language } from '@core/models';

/** Segmented EN/ES control. Scales to any number of entries in LANGUAGE_OPTIONS. */
@Component({
  selector: 'app-language-switcher',
  templateUrl: './language-switcher.component.html',
  styleUrl: './language-switcher.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[style.--option-count]': 'options.length',
    '[style.--active-index]': 'activeIndex()',
  },
})
export class LanguageSwitcherComponent {
  private readonly languageService = inject(LanguageService);

  protected readonly options = LANGUAGE_OPTIONS;
  protected readonly language = this.languageService.language;
  protected readonly translations = this.languageService.translations;

  protected readonly activeIndex = computed(() =>
    Math.max(
      0,
      this.options.findIndex((option) => option.code === this.language()),
    ),
  );

  protected select(language: Language): void {
    this.languageService.setLanguage(language);
  }
}
