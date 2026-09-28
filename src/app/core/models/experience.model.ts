import { LocalizedText, Resolved } from './localization.model';

export interface ExperienceContent {
  readonly id: string;
  readonly role: LocalizedText;
  readonly organization: string;
  readonly period: LocalizedText;
  readonly description: LocalizedText;
  readonly highlights: readonly LocalizedText[];
}

export type Experience = Resolved<ExperienceContent>;
