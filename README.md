# hestia-23.github.io

Personal portfolio. Astro 6, TypeScript strict, vanilla CSS, deployed to GitHub Pages. Live at https://hestia-23.github.io.

## Structure

- `src/`
  - `pages/` — file-based routes. `index.astro`, `about.astro`, `projects.astro`, `projects/[slug].astro` (one page per project, pre-rendered), `contact.astro`.
  - `components/` — nav, hero, section, project card/list, projects filter, contact list, footer, back link, back-to-top, pixel shrine.
  - `components/icons/` — Lucide icons (chevrons-left, chevrons-right, chevron-up, mail). Brand marks live under `components/icons/brand/`.
  - `data/` — `projects.ts`, `contact.ts`. Typed, hand-edited.
  - `layouts/Layout.astro` — single layout; wraps every page with nav + footer and imports the stylesheets.
  - `styles/tokens.css` — design tokens (colors, type, space, motion). Imported globally.
  - `styles/components.css` — class-based component rules. Imported globally.
- `public/` — static assets served at `/`. Fonts at `/fonts/`, favicon at `/favicon.svg`.

## Local Dev

Requires Node >=22.12 and pnpm 11. The pnpm version is pinned via the `packageManager` field in `package.json`; run `corepack enable` to let Node provision it automatically, or install pnpm globally.

| Command | Action |
| ------- | ------ |
| `pnpm install` | Install dependencies |
| `pnpm dev` | Dev server at http://localhost:4321 |
| `pnpm build` | Static build to `dist/` |
| `pnpm preview` | Serve the build locally |
| `pnpm astro ...` | Astro CLI passthrough |

Minimal client-side JavaScript: only the back-to-top button, projects filter, and pixel shrine ship interactive scripts. Everything else is CSS (hover, focus, `prefers-color-scheme` dark mode, `prefers-reduced-motion`).

## Deploy

GitHub Actions handles it. `.github/workflows/deploy.yml` fires on push to `master` (and manual `workflow_dispatch`). The build runs via `withastro/action@v6`; deploy via `actions/deploy-pages@v5`.

The action auto-detects pnpm from `pnpm-lock.yaml` and reads the pinned version from the `packageManager` field. Do not add a `package-manager` input to the workflow: specifying the pnpm version in two places fails the build with "Multiple versions of pnpm specified".

One-time repo setting: Settings → Pages → Source must be "GitHub Actions", not a branch.
