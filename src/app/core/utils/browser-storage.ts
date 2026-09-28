// Safe localStorage access: storage can be unavailable (SSR, private mode, blocked cookies).

export function readStorage(key: string): string | null {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

export function writeStorage(key: string, value: string): void {
  try {
    localStorage.setItem(key, value);
  } catch {
    // Persisting is best effort; the in-memory state still applies for this session.
  }
}
