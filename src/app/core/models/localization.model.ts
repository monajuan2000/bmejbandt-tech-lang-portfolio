/** Languages the client-facing UI can be displayed in. Add a code here to support a new one. */
export type Language = 'en' | 'es';

/** A user-visible string provided in every supported language. */
export type LocalizedText = Readonly<Record<Language, string>>;

/**
 * Deeply replaces every `LocalizedText` in `T` with a plain `string`.
 * Content is authored with `LocalizedText`; components consume the resolved shape.
 */
export type Resolved<T> = T extends LocalizedText
  ? string
  : T extends readonly (infer Item)[]
    ? readonly Resolved<Item>[]
    : T extends object
      ? { readonly [Key in keyof T]: Resolved<T[Key]> }
      : T;
