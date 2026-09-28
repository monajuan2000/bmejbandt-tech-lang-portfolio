import { IconName } from './icon-name.model';
import { LocalizedText, Resolved } from './localization.model';

export type SocialPlatform = 'email' | 'github' | 'linkedin';

export interface SocialLink {
  readonly platform: SocialPlatform;
  readonly label: string;
  readonly handle: string;
  readonly url: string;
  readonly icon: IconName;
}

export interface ProfileContent {
  readonly fullName: string;
  readonly initials: string;
  readonly role: LocalizedText;
  readonly availability: LocalizedText;
  readonly headline: LocalizedText;
  readonly headlineHighlight: LocalizedText;
  readonly summary: LocalizedText;
  readonly about: readonly LocalizedText[];
  readonly email: string;
  readonly socialLinks: readonly SocialLink[];
}

export type Profile = Resolved<ProfileContent>;
