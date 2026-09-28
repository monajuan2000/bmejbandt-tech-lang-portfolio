import { Language, LocalizedText, Resolved } from '@core/models';

import { SUPPORTED_LANGUAGES } from './language.config';

/** Recursively swaps every `LocalizedText` inside `value` for its string in `language`. */
export function resolveLocalized<T>(value: T, language: Language): Resolved<T> {
  if (isLocalizedText(value)) {
    return value[language] as unknown as Resolved<T>;
  }

  if (Array.isArray(value)) {
    return value.map((item) => resolveLocalized(item, language)) as unknown as Resolved<T>;
  }

  if (value !== null && typeof value === 'object') {
    const entries = Object.entries(value).map(([key, item]) => [key, resolveLocalized(item, language)]);
    return Object.fromEntries(entries) as Resolved<T>;
  }

  return value as Resolved<T>;
}

function isLocalizedText(value: unknown): value is LocalizedText {
  if (value === null || typeof value !== 'object' || Array.isArray(value)) {
    return false;
  }

  const record = value as Record<string, unknown>;
  return (
    Object.keys(record).length === SUPPORTED_LANGUAGES.length &&
    SUPPORTED_LANGUAGES.every((language) => typeof record[language] === 'string')
  );
}
