import { IconName } from './icon-name.model';

export type ProjectCategoryId = 'full-stack' | 'frontend' | 'backend' | 'data-ai' | 'devops';

export interface ProjectCategory {
  readonly id: ProjectCategoryId;
  readonly name: string;
  readonly description: string;
  readonly icon: IconName;
  readonly accent: string;
}

export interface ProjectLinks {
  readonly live?: string;
  readonly repository?: string;
}

export interface ProjectImage {
  readonly src: string;
  readonly alt: string;
  /** Intrinsic pixel size, required by NgOptimizedImage to prevent layout shift. */
  readonly width: number;
  readonly height: number;
}

export interface Project {
  readonly id: string;
  readonly categoryId: ProjectCategoryId;
  readonly title: string;
  readonly description: string;
  readonly type: string;
  readonly technologies: readonly string[];
  readonly links?: ProjectLinks;
  readonly image?: ProjectImage;
  readonly featured?: boolean;
}
