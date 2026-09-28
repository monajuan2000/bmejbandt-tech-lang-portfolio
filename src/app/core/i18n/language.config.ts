import { Language } from '@core/models';

export interface LanguageOption {
  readonly code: Language;
  /** Short label shown in the switcher. */
  readonly shortLabel: string;
  /** Native language name, used for accessibility. */
  readonly nativeName: string;
}

export const DEFAULT_LANGUAGE: Language = 'en';

export const LANGUAGE_STORAGE_KEY = 'portfolio-language';

export const LANGUAGE_OPTIONS: readonly LanguageOption[] = [
  { code: 'en', shortLabel: 'EN', nativeName: 'English' },
  { code: 'es', shortLabel: 'ES', nativeName: 'Español' },
];

export const SUPPORTED_LANGUAGES: readonly Language[] = LANGUAGE_OPTIONS.map((option) => option.code);

export function isSupportedLanguage(value: unknown): value is Language {
  return typeof value === 'string' && SUPPORTED_LANGUAGES.includes(value as Language);
}
