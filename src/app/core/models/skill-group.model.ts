import { IconName } from './icon-name.model';
import { LocalizedText, Resolved } from './localization.model';

export interface SkillGroupContent {
  readonly id: string;
  readonly name: LocalizedText;
  readonly icon: IconName;
  /** Technology names are proper nouns and are not translated. */
  readonly skills: readonly string[];
}

export type SkillGroup = Resolved<SkillGroupContent>;
