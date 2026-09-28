import { IconName } from './icon-name.model';
import { LocalizedText, Resolved } from './localization.model';

export type SocialPlatform = 'email' | 'whatsapp' | 'github' | 'linkedin';

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
  /** International format, e.g. "+57 324 576 9762". */
  readonly phoneNumber: string;
  /** Pre-filled text for chats started from the portfolio. */
  readonly whatsAppGreeting: LocalizedText;
  readonly socialLinks: readonly SocialLink[];
}

export type Profile = Resolved<ProfileContent>;
