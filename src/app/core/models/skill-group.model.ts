import { IconName } from './icon-name.model';

export interface SkillGroup {
  readonly id: string;
  readonly name: string;
  readonly icon: IconName;
  readonly skills: readonly string[];
}
