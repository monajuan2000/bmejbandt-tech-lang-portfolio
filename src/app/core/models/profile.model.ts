import { IconName } from './icon-name.model';

export type SocialPlatform = 'email' | 'github' | 'linkedin';

export interface SocialLink {
  readonly platform: SocialPlatform;
  readonly label: string;
  readonly handle: string;
  readonly url: string;
  readonly icon: IconName;
}

export interface Profile {
  readonly fullName: string;
  readonly initials: string;
  readonly role: string;
  readonly availability: string;
  readonly headline: string;
  readonly headlineHighlight: string;
  readonly summary: string;
  readonly about: readonly string[];
  readonly email: string;
  readonly socialLinks: readonly SocialLink[];
}
