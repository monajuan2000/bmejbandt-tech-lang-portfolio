import { IconName } from './icon-name.model';
import { LocalizedText, Resolved } from './localization.model';

export type ProjectCategoryId = 'full-stack' | 'frontend' | 'backend' | 'data-ai' | 'devops';

export interface ProjectCategoryContent {
  readonly id: ProjectCategoryId;
  readonly name: LocalizedText;
  readonly description: LocalizedText;
  readonly icon: IconName;
  readonly accent: string;
}

export interface ProjectLinks {
  readonly live?: string;
  readonly repository?: string;
}

export interface ProjectImageContent {
  readonly src: string;
  readonly alt: LocalizedText;
  /** Intrinsic pixel size, required by NgOptimizedImage to prevent layout shift. */
  readonly width: number;
  readonly height: number;
}

export interface ProjectContent {
  readonly id: string;
  readonly categoryId: ProjectCategoryId;
  readonly title: string;
  readonly description: LocalizedText;
  readonly type: LocalizedText;
  readonly technologies: readonly string[];
  readonly links?: ProjectLinks;
  readonly image?: ProjectImageContent;
  readonly featured?: boolean;
}

export type ProjectCategory = Resolved<ProjectCategoryContent>;
export type Project = Resolved<ProjectContent>;
