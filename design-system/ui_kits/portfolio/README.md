# Portfolio UI Kit

A hi-fi, click-through recreation of the four-page portfolio described in the brief. The index page opens on Home; the nav links move between Home / About / Projects / Contact, and any project row on Home or Projects opens a minimal Project Detail view.

## Files

- `index.html` — interactive entry point. Open this to see everything wired up.
- `Primitives.jsx` — `Wordmark`, `Nav`, `Eyebrow`, `ButtonPrimary`, `ButtonGhost`, `Footer`.
- `Home.jsx` — `HomeHero`, `SelectedWork`, `HomePage`.
- `Projects.jsx` — `ProjectRow`, `ProjectsPage`, `ProjectDetail`.
- `AboutContact.jsx` — `AboutPage`, `ContactPage`.

## What it demonstrates

The five design calls the user asked about:

1. **Hero treatment** — wordmark at display size, italic Garamond tagline as a lede, a single primary CTA (`view projects`) with one secondary text link (`or send a note →`). No hero image, no gradient, no decoration.
2. **Project card pattern** — explicitly *not* a card. Each project is a list row with a hairline divider, a Garamond title, an italic date in the top-right, a trailing `→` glyph, a short description, and a middle-dot metadata line. Hover shifts the row's background to marble-50 and nudges the arrow 3px right.
3. **About page** — typography-first, no photo. Lede, two paragraphs, a two-column `dl` for "currently", and a short "elsewhere" link list.
4. **Navigation** — wordmark left, four lowercase text links right, one hairline under. Not sticky. No hamburger.
5. **Section feel** — `--space-10` (128px) between sections, eyebrows use the `§` glyph plus lowercase label, hairline rules as dividers.

## Known limitations (on purpose)

- No real routing. State-driven navigation only — the UI kit shows the interaction, the real site will use Astro file-based routing.
- Copy is provisional. Iterate when real content exists.
- **Dark mode:** automatic via `prefers-color-scheme`, pigment-dark (not true dark) — see the main brief. No manual toggle in the nav, and none planned; the OS preference is the source of truth.
