import { LocalizedText, Resolved } from './localization.model';

export interface NavigationItemContent {
  readonly label: LocalizedText;
  readonly path: string;
}

export type NavigationItem = Resolved<NavigationItemContent>;
