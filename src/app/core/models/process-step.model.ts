import { IconName } from './icon-name.model';
import { LocalizedText, Resolved } from './localization.model';

export interface ProcessStepContent {
  readonly id: string;
  readonly title: LocalizedText;
  readonly description: LocalizedText;
  readonly icon: IconName;
}

export type ProcessStep = Resolved<ProcessStepContent>;
