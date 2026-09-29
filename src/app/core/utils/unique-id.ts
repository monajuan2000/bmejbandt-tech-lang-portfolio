let nextId = 0;

/** Returns a document-unique id, e.g. `cta-title-3`. Use for aria relationships in reusable components. */
export function createUniqueId(prefix: string): string {
  return `${prefix}-${nextId++}`;
}
