# bmejbandt-tech-lang-portfolio

Personal portfolio of Juan Esteban Mona — technology, engineering, and English language services.
Built with Angular 19 (standalone components, signals, new control flow) and deployed to GitHub Pages.

## Getting started

```bash
npm install
npm start          # http://localhost:4200
npm run build      # production build in dist/
npm test           # unit tests (Karma + Jasmine)
```

## Architecture

```
src/
├── app/
│   ├── core/                 # App-wide, framework-agnostic building blocks (singletons)
│   │   ├── data/             # Static content: profile, projects, skills, services, navigation
│   │   ├── models/           # TypeScript interfaces and domain types
│   │   ├── services/         # Signal-based state and data access (ProjectService, ThemeService…)
│   │   └── strategies/       # Router strategies (page titles)
│   ├── layout/               # Persistent shell pieces: header, footer, background video
│   ├── shared/               # Reusable, presentation-only UI
│   │   ├── components/       # icon, section-header, project-card, tag-list, call-to-action
│   │   └── directives/       # reveal (scroll-in animation)
│   ├── features/             # One folder per route, lazy loaded
│   │   ├── home/             # home-page + components/ (hero, featured project, services, categories)
│   │   ├── projects/         # projects-page + components/ (project-filter)
│   │   ├── about/            # about-page + components/ (skill-groups, experience-timeline)
│   │   ├── contact/
│   │   └── not-found/
│   ├── app.component.ts      # Shell: header + <router-outlet> + footer
│   ├── app.config.ts         # Providers (router features, title strategy)
│   └── app.routes.ts         # Top-level lazy routes → each feature's *.routes.ts
└── styles/                   # Global design system (tokens, base, utilities, buttons, motion)
```

### Dependency rules

- `features` may import from `core`, `shared` and `layout`; features never import from each other.
- `shared` may import from `core/models` only; it has no knowledge of services or routes.
- `core` never imports from `features`, `layout` or `shared`.
- Use the path aliases `@core/*`, `@shared/*`, `@layout/*` and `@features/*` instead of long relative paths.

### Conventions

- **English only** for every identifier, file name, comment and UI string.
- Standalone components with `ChangeDetectionStrategy.OnPush`, `inject()`, signal `input()`/`output()`, and `@if`/`@for`/`@defer`.
- File naming: `name.component.ts`, `name-page.component.ts` for routed pages, `name.service.ts`, `name.model.ts`, `name.data.ts`, `feature.routes.ts`.
- Styles use design tokens (`var(--color-*)`, `var(--space-*)`); never hardcode colors in components.
  Breakpoints come from `src/styles/_breakpoints.scss`: `@use 'breakpoints' as bp;` → `@include bp.down(md) { … }`.
- Content changes live in `src/app/core/data/`; components render whatever the services expose.

## Common tasks

| Task | Where |
| --- | --- |
| Add or edit a project | `core/data/projects.data.ts` (set `featured: true` to show it on Home) |
| Add a project category | `ProjectCategoryId` in `core/models/project.model.ts` + `PROJECT_CATEGORIES` |
| Add experience | `core/data/experience.data.ts` (the About timeline appears once it has entries) |
| Add an icon | `shared/components/icon/icon.registry.ts` + `core/models/icon-name.model.ts` |
| Add a page | `features/<name>/` with `<name>-page.component.ts` + `<name>.routes.ts`, then register it in `app.routes.ts` and `core/data/navigation.data.ts` |
| Change colors / theme | `src/styles/_tokens.scss` |

## Deployment

The production build uses `baseHref: /bmejbandt-tech-lang-portfolio/` and hash routing (`withHashLocation()`), so deep links work on GitHub Pages without server rewrites.
