# hestia-23.github.io

personal portfolio. astro 6, typescript strict, vanilla css, deployed to github pages. live at https://hestia-23.github.io.

## structure

- `src/`
  - `pages/` — file-based routes. `index.astro`, `about.astro`, `projects.astro`, `projects/[slug].astro` (one page per project, pre-rendered), `contact.astro`.
  - `components/` — nav, hero, section, project row/list, contact list, footer, back link.
  - `components/icons/` — lucide icons (chevrons-left, chevrons-right, mail). brand marks live under `components/icons/brand/`.
  - `data/` — `projects.ts`, `contact.ts`. typed, hand-edited.
  - `layouts/Layout.astro` — single layout; wraps every page with nav + footer and imports the stylesheets.
  - `styles/tokens.css` — design-system tokens (colors, type, space, motion). imported globally.
  - `styles/components.css` — class-based component rules (`.nav`, `.hero`, `.section`, `.project-row`, `.contact-list`, `.btn*`, `.icon`). imported globally.
- `public/` — static assets served at `/`. fonts at `/fonts/`, favicon at `/favicon.svg`.
- `design-system/` — the authoritative brand brief and tokens source. see `design-system/README.md`. the astro site consumes it; it is not a build artifact.
- `scrapbook.md` — decisions, dead ends, taste calls, written as work happens. start here when opening the repo after a break.

## local dev

requires node >=22.12 and npm.

| command | action |
| ------- | ------ |
| `npm install` | install dependencies |
| `npm run dev` | dev server at http://localhost:4321 |
| `npm run build` | static build to `dist/` |
| `npm run preview` | serve the build locally |
| `npm run astro ...` | astro cli passthrough |

zero client-side javascript ships. every interaction is css (hover, focus, `prefers-color-scheme` dark mode, `prefers-reduced-motion`).

## deploy

github actions handles it. `.github/workflows/deploy.yml` fires on push to `master` (and manual `workflow_dispatch`). the build runs via `withastro/action@v6`; deploy via `actions/deploy-pages@v5`.

one-time repo setting: settings → pages → source must be "github actions", not a branch.

## design system

read `design-system/README.md` for the full brief: voice, color, typography, space, motion, iconography. the rules there are load-bearing for anything that lands in `src/`.

quick policy summary:
- simple icons for brand marks (astro, html5, css, javascript, typescript, github, github sponsors, x, etc.).
- lucide (1.5 stroke, 1em) for every other icon.
- no em-dashes, no emoji, no exclamation marks, no banned buzzwords. lowercase everywhere except proper nouns and the wordmark.
- dark mode is automatic via `prefers-color-scheme`. no toggle.
