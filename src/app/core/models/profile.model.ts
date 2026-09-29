import { IconName } from './icon-name.model';
import { LocalizedText, Resolved } from './localization.model';

export type SocialPlatform = 'email' | 'whatsapp' | 'github' | 'linkedin';

export interface SocialLinkContent {
  readonly platform: SocialPlatform;
  readonly label: LocalizedText;
  readonly handle: string;
  /** Required for web profiles. Omit for `email`/`whatsapp`: ProfileService builds those from the profile. */
  readonly url?: string;
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
  /** Subject pre-filled in emails started from the portfolio. */
  readonly emailSubject: LocalizedText;
  /** International format, e.g. "+57 324 576 9762". */
  readonly phoneNumber: string;
  /** Text pre-filled in WhatsApp chats started from the portfolio. */
  readonly whatsAppGreeting: LocalizedText;
  readonly socialLinks: readonly SocialLinkContent[];
}

export interface SocialLink extends Omit<Resolved<SocialLinkContent>, 'url'> {
  readonly url: string;
}

/** Resolved profile with every contact URL built and ready to render. */
export interface Profile extends Omit<Resolved<ProfileContent>, 'socialLinks'> {
  readonly socialLinks: readonly SocialLink[];
  readonly gmailComposeUrl: string;
  readonly whatsAppUrl: string;
}
