---
name: hestia-design
description: Use this skill to generate well-branded interfaces and assets for Hestia's personal portfolio, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping in a muted classical Greek aesthetic — marble, terracotta, warm charcoal.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick map

- `README.md` — full brand brief: voice, content fundamentals, visual foundations, iconography, section rhythm.
- `colors_and_type.css` — drop-in stylesheet with all design tokens (`--bg`, `--fg`, `--accent`, type scale, spacing, radii, shadows, motion). Import this before writing any CSS.
- `fonts/` — EB Garamond (display) and Work Sans (body), TTFs. Reference these in `@font-face`.
- `assets/` — wordmark, favicon, and the one decorative mark (greek-key ornament).
- `preview/` — small specimen cards showing each token group in use.
- `ui_kits/portfolio/` — the four-page portfolio mocked with React + JSX: `Primitives.jsx`, `Home.jsx`, `Projects.jsx`, `AboutContact.jsx`, all composed in `index.html`. Use these as the reference implementation.

## Non-negotiables when designing with this brand

- Background is `#f4f1ea` marble in light, `#0c2833` saturated teal-ink in dark (auto via `prefers-color-scheme`). **Never pure white, never true black, never neutral slate.**
- Text is `#2a2620` warm charcoal in light, `#e6eef0` cool marble in dark. **Never pure black.**
- **Split-temperature palette.** `--accent` is aegean `#4a6670` — links, CTAs, focus, all interactive. `--ember` is terracotta `#b5714c` — wordmark italic, `§` glyph, and the hover-arrow tip only. Never a link or button color. `--secondary` is sage `#7a7a5e`, for status tags.
- **No emoji. Ever.** Use unicode arrows (`→`, `↗`, `·`, `§`) or Lucide icons (hairline, 1.5 stroke) if strictly necessary.
- **No gradients, no glassmorphism, no big shadows, no rounded pills.** Radii 0–3px. Hairline dividers, not boxes.
- Lowercase, sentence case. No `🚀 journey / craft / passion / seamless` copy. First person, quiet.
- Generous whitespace — minimum `--space-10` (128px) between sections.
- No photography of the person. Privacy-first.
