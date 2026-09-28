import { Language } from '@core/models';

import { EN_TRANSLATIONS, Translations } from './en.translations';
import { ES_TRANSLATIONS } from './es.translations';

export type { PageTitleKey, Translations } from './en.translations';

/** Registry of UI dictionaries. `Record<Language, …>` forces one entry per supported language. */
export const TRANSLATIONS: Readonly<Record<Language, Translations>> = {
  en: EN_TRANSLATIONS,
  es: ES_TRANSLATIONS,
};
