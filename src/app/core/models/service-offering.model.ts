import { IconName } from './icon-name.model';
import { LocalizedText, Resolved } from './localization.model';

export interface ServiceOfferingContent {
  readonly id: string;
  readonly title: LocalizedText;
  readonly description: LocalizedText;
  /** Tools or focus areas shown as tags; plain strings are language-neutral. */
  readonly tags: readonly (string | LocalizedText)[];
  readonly icon: IconName;
  /** CSS color used to tint the icon and hover state. */
  readonly accent: string;
  /** Renders the offering as a wide spotlight card with a call to action. */
  readonly featured?: boolean;
}

export type ServiceOffering = Resolved<ServiceOfferingContent>;
