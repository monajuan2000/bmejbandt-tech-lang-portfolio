import { IconName } from './icon-name.model';

export interface ServiceOffering {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly icon: IconName;
}
