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
│   │   ├── data/             # Static content (LocalizedText): profile, projects, skills, services, navigation
│   │   ├── i18n/             # Language config, UI dictionaries (translations/), LanguageService
│   │   ├── models/           # TypeScript interfaces and domain types
│   │   ├── services/         # Signal-based state and data access (ProjectService, ThemeService…)
│   │   ├── strategies/       # Router strategies (translated page titles)
│   │   └── utils/            # Framework-free helpers (storage, contact links, URLs, unique ids, view transitions)
│   ├── layout/               # Persistent shell pieces: header, footer, language switcher, background video
│   ├── shared/               # Reusable, presentation-only UI
│   │   ├── components/       # icon, section-header, project-card, tag-list, call-to-action
│   │   ├── directives/       # reveal (scroll-in animation), external-link (safe new-tab links)
│   │   └── index.ts          # Public API: import from '@shared'
│   ├── features/             # One folder per route, lazy loaded
│   │   ├── home/             # home-page + components/ (hero, featured project, services, categories)
│   │   ├── projects/         # projects-page + components/ (project-filter)
│   │   ├── about/            # about-page + components/ (skill-groups, experience-timeline)
│   │   ├── contact/
│   │   └── not-found/
│   ├── app.component.ts      # Shell: header + <router-outlet> + footer
│   ├── app.config.ts         # Providers (router features, title strategy)
│   └── app.routes.ts         # Top-level lazy routes → each feature's *.routes.ts
└── styles/                   # Global design system (tokens, mixins, base, utilities, buttons, motion)
```

### Dependency rules

- `features` may import from `core`, `shared` and `layout`; features never import from each other.
- `shared` may import from `core/models`, `core/i18n` and `core/utils` only; it has no knowledge of data services or routes.
- `core` never imports from `features`, `layout` or `shared`.
- Use the path aliases instead of long relative paths: `@core/<area>`, `@features/*`, and the barrels `@shared` and `@layout`.
  Inside `shared/` itself, use relative imports to avoid circular barrels.

### Conventions

- **English only** for every identifier, file name and comment. Other languages appear only as translated values
  in `core/i18n/translations/` and in `LocalizedText` fields; never hardcode user-visible text in templates.
- Standalone components with `ChangeDetectionStrategy.OnPush`, `inject()`, signal `input()`/`output()`, and `@if`/`@for`/`@defer`.
- File naming: `name.component.ts`, `name-page.component.ts` for routed pages, `name.service.ts`, `name.model.ts`, `name.data.ts`, `feature.routes.ts`.
- Styles use design tokens (`var(--color-*)`, `var(--space-*)`); never hardcode colors in components.
  Breakpoints come from `src/styles/_breakpoints.scss`: `@use 'breakpoints' as bp;` → `@include bp.down(md) { … }`.
- Content changes live in `src/app/core/data/`; components render whatever the services expose.

### Reuse before you write

| Need | Use |
| --- | --- |
| UI copy in a component | `protected readonly translations = injectTranslations();` |
| Link that may be external | `<a [appExternalLink]="url">` (adds `target`/`rel` only for http(s)) |
| Contact URLs (Gmail, WhatsApp, mailto) | `ProfileService.profile()` → `gmailComposeUrl`, `whatsAppUrl`, `socialLinks[].url` |
| aria id in a reusable component | `createUniqueId(prefix)` from `@core/utils` |
| Translucent card | `.glass` · hover lift: `.hover-lift` (tint with `--lift-accent`) |
| Icon in a tinted square | `.icon-tile` (tint with `--tile-color`) |
| Frosted blur in SCSS | `@use 'mixins' as mx;` → `@include mx.frosted;` |
| Buttons | `.btn` + `--primary` / `--ghost` / `--gmail` / `--whatsapp` |

## Internationalization

The client-facing UI is available in English and Spanish; **source code stays in English**.

- **UI copy** (buttons, headings, aria labels) lives in `core/i18n/translations/`. `en.translations.ts` defines the shape and `es.translations.ts` is type-checked against it, so a missing key fails the build.
- **Content** (projects, services, profile…) is authored in `core/data/` as `LocalizedText` (`{ en, es }`). Services resolve it with `LanguageService.resolve()` and expose plain strings, so components never deal with languages.
- **Components** read UI copy via `inject(LanguageService).translations` and `@let t = translations().section;` in templates.
- **Route titles** are translation keys (`title: 'home' satisfies PageTitleKey`).
- The choice is stored in `localStorage`; the first visit falls back to the browser language.

To add a language: add its code to `Language` (`core/models/localization.model.ts`) and `LANGUAGE_OPTIONS`, create `<code>.translations.ts`, register it in `TRANSLATIONS`, and the compiler will point at every `LocalizedText` missing the new key.

## Common tasks

| Task | Where |
| --- | --- |
| Add or edit a project | `core/data/projects.data.ts` (set `featured: true` to show it on Home) |
| Add a project category | `ProjectCategoryId` in `core/models/project.model.ts` + `PROJECT_CATEGORIES` |
| Add experience | `core/data/experience.data.ts` (the About timeline appears once it has entries) |
| Add an icon | `shared/components/icon/icon.registry.ts` + `core/models/icon-name.model.ts` |
| Add a page | `features/<name>/` with `<name>-page.component.ts` + `<name>.routes.ts`, then register it in `app.routes.ts` and `core/data/navigation.data.ts` |
| Change colors / theme | `src/styles/_tokens.scss` |
| Add or change UI text | `core/i18n/translations/en.translations.ts` + `es.translations.ts` |

## Deployment

The production build uses `baseHref: /bmejbandt-tech-lang-portfolio/` and hash routing (`withHashLocation()`), so deep links work on GitHub Pages without server rewrites.
