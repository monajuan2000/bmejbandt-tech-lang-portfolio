export interface Experience {
  readonly id: string;
  readonly role: string;
  readonly organization: string;
  readonly period: string;
  readonly description: string;
  readonly highlights: readonly string[];
}
