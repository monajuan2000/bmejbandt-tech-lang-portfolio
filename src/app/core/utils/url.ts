/** True for absolute http(s) URLs, which should open in a new tab. */
export function isExternalUrl(url: string | null | undefined): boolean {
  return !!url && /^https?:\/\//i.test(url);
}
