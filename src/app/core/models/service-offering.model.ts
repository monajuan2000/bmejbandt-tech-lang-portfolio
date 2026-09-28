import { IconName } from './icon-name.model';
import { LocalizedText, Resolved } from './localization.model';

export interface ServiceOfferingContent {
  readonly id: string;
  readonly title: LocalizedText;
  readonly description: LocalizedText;
  readonly icon: IconName;
}

export type ServiceOffering = Resolved<ServiceOfferingContent>;
