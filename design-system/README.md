# Hestia Portfolio — Design System

A personal portfolio for a self-taught frontend engineer. Four pages, a name, a handful of projects. The system below exists to make every design decision in that small surface deliberate.

The aesthetic direction is **muted classical Greek**. Marble, terracotta, warm charcoal. Restrained, confident, warm. Not maximalist, not tech-bro, not trendy — and, critically, not in a style that will date in a year. The portfolio is privacy-conscious: no photo, name as wordmark only.

---

## Sources

- **Portfolio repo (canonical):** [`Hestia-23/hestia-23.github.io`](https://github.com/Hestia-23/hestia-23.github.io) — at time of writing, the repo is still the Astro 6 minimal scaffold (only `astro.config.mjs`, `package.json`, `scrapbook.md`, empty `src/pages/`). Stack: Astro 6.1.9, TypeScript strict, Node ≥22.12, deploying to GitHub Pages via the official `withastro/action@v6`. User site (`hestia-23.github.io`) — no `base` override needed.
- **Scrapbook:** [`scrapbook.md`](https://github.com/Hestia-23/hestia-23.github.io/blob/master/scrapbook.md) in the same repo — the memory of the project. Decisions, dead ends, taste calls. Pattern: scrapbook-first, code-second. Worth reading before any architectural change.
- **Brand brief:** defined by the user for this engagement. Summarized in full below under *Content Fundamentals* and *Visual Foundations*.
- **Fonts:** user-provided TTFs for EB Garamond and Work Sans, variable-weight family, copied to `fonts/`. These are the canonical files — do not substitute without updating the brief.

There is no pre-existing logo, no pre-existing iconography, no pre-existing imagery. What you find in `assets/` is built fresh against the brief.

---

## Index

Top-level files:
- `README.md` — this document
- `colors_and_type.css` — all design tokens (colors, type, spacing, radii, shadows, motion). Import this and opt into the full system.
- `SKILL.md` — Agent-Skills-compatible entrypoint for Claude Code

Folders:
- `fonts/` — EB Garamond (9 weights/styles) + Work Sans (8 weights/styles), TTF
- `assets/` — logos, wordmark, decorative marks, favicon
- `preview/` — Design System tab cards (one concept per card)
- `ui_kits/portfolio/` — hi-fi recreation of the four portfolio pages with reusable JSX components

---

## Content Fundamentals

### Voice

Quiet. First-person, lean. The site exists to show the work, not to narrate the person.

- **Person:** first person ("I build", "I write"). No "we". No royal plural.
- **Case:** sentence case everywhere. Titles are NOT Title-Cased. The only exception: proper nouns and the wordmark.
- **Punctuation:** periods, semicolons, commas, parentheses. No em-dashes. No exclamation marks. One question mark per page at most.
- **Contractions:** yes, but sparingly. "I'm" is fine.
- **No emoji.** The visual system does the expressive work.
- **No buzzwords.** Banned: "craft", "passion", "journey", "ecosystem", "empower", "leverage", "innovative", "cutting-edge", "seamless", "delve", "navigate the landscape", "it's worth noting". If a word could appear on a recruiter's page, it doesn't belong here.
- **Technical precision beats vague warmth.** "Astro 6, TypeScript strict, shipped on GitHub Pages" beats "modern tooling that I love".
- **Direct, lead with the answer.** No preamble. No "I'd be happy to." No "great question."

### Examples

Preferred:

> **frontend engineer, self-taught.**
> i build small, careful interfaces. currently on astro and typescript. privacy-minded by default.

> **hearth-ui.** a component library for privacy-focused community platforms. astro + vanilla css. work in progress.

Avoided:

> 🚀 Hi! I'm a passionate full-stack developer with a journey in crafting seamless user experiences across the entire stack! Let's connect! 💻✨

### Tone in UI microcopy

- Empty states are plain: "nothing here yet." — no cheerful illustration, no cute line.
- Buttons say the verb, nothing else: "read", "view repo", "email".
- Dates are long-form italic serif: *april 2026*, not `Apr 2026`.
- Metadata is lowercase sans: `astro · typescript · github pages`.

---

## Visual Foundations

### Color

The palette is painted, not digital. It starts from a single observation: sun-warmed limestone. The committed system is **split-temperature**: cool neutrals + a cool functional accent do the work; a single warm accent (the ember) signs the name.

- **Background** — `#f4f1ea` marble white. Never pure white. The page feels like cream paper, not a screen.
- **Text** — `#2a2620` warm charcoal. Slightly brown. Never pure black; pure black on marble looks cold and wrong.
- **Accent (function)** — `#4a6670` aegean blue-grey. All interactive elements: links, CTAs, focus rings, button fills, hover states on nav and project rows. Muted, contemplative, cool.
- **Secondary** — `#7a7a5e` sage. For status tags ("archived", "in progress") or quiet differentiation. Used sparingly; one use per page.
- **Ember (character)** — `#b5714c` terracotta. NOT a link color. NOT a CTA color. Character, not function. It appears *only* in three places: the italic `hestia` wordmark, `§` section glyphs, and the tip of the hover arrow on project rows. Cool for function, warm for character — one warm pixel on a cool line.
- **Neutrals** — a short scale of marble (50→400) and stone/charcoal (500→950). These do the real work. Hairlines, muted text, card fills all come from neutrals.

No gradients. No glassmorphism. No translucency.

**Dark mode** is defined as an automatic `prefers-color-scheme` override. It is pigment-dark, not true dark — the ground is `#0c2833` (saturated teal-ink in the aegean family), carrying meaningful chroma in the shadow rather than falling to neutral black. Text lifts to `#e6eef0`, aegean lifts to `#b8ccd4` to carry link weight, ember softens to `#e0a58a`. The split-temp logic survives intact across both grounds. If the dark mode starts reading as slate or neutral greige, it has failed the brief and the chroma needs to come back up.

### Typography

Two families, doing two jobs, used with discipline.

- **EB Garamond** (Old-Style serif, a 16th-c. Claude Garamont revival) — all headings, display sizes, emphasis, the lede paragraph, dates, anything that wants to feel printed. Italics are encouraged for section labels and quiet emphasis — Garamond's italic is one of the most beautiful in the canon.
- **Work Sans** (humanist sans) — body copy, UI labels, microcopy, navigation, metadata. Warm, readable, quiet next to the Garamond.

Sizes follow a classical minor-third scale anchored at 16px (see `colors_and_type.css` → `--step-*`). Hero display reaches `--step-6` (72px) or `--step-7` (96px) for the wordmark only.

Line lengths are bounded to `--measure` (60ch) for body and `--measure-wide` (72ch) for the lede. No text runs edge-to-edge.

### Space & Rhythm

Whitespace is the primary decorative tool. The system uses a 4px baseline (`--space-1` = 4px, through `--space-11` = 192px).

- Section-to-section vertical rhythm on a page is `--space-10` (128px) minimum. On the hero, top padding reaches `--space-11` (192px).
- Reading column sits centered in a `--page-max` (1024px) container, with text capped at `--content-max` (672px). The site breathes — content does not fill the viewport.
- Every page has generous top space. Nothing hugs the top edge. The name/wordmark is followed by breath before the first heading.

### Backgrounds

- **Default:** solid marble-100. That's it.
- **No images as full-bleed backgrounds.** No photography. No hand-drawn illustration. No repeating patterns.
- **Very rare exception:** an off-page decorative mark (a single classical motif, see *Iconography*) placed quietly in a corner at low contrast. Opt-in, not default.

### Borders, rules, cards

- **Hairline rule**, 1px, `var(--rule)` (marble-300) is the default divider. Used between sections, under the nav, between list items.
- **Cards, mostly, are not cards.** Project items are list rows with a hairline between them — no boxes, no shadows, no borders. If a card is needed (rare), it uses `--bg-raised` (marble-50), 1px marble-300 border, no shadow, `--radius-md` (3px).
- **Radii:** keep at 2–3px. Avoid pill shapes entirely except, *maybe*, for a status tag. Sharp corners are on-brand.

### Shadows

Almost none. The system offers three and only uses two:

- `--shadow-sm` — a single bottom hairline. The only "shadow" most components will ever get.
- `--shadow-md` — a whisper of a real shadow for the one thing (a menu, maybe) that needs to float. Used rarely.
- `--shadow-focus` — 3px aegean ring at 28% opacity, for keyboard focus. Accessibility, not decoration. (In dark mode the ring lifts to aegean-300 at 35%.)

No inner shadows, no layered shadows, no glows.

### Motion

Sparse and quiet. No bounces. No springs. No parallax.

- `--dur-fast` (120ms) — color/text-decoration transitions on links and buttons.
- `--dur-base` (200ms) — hover state on list rows and cards.
- `--dur-slow` (320ms) — page-entry fade, if any.
- Easing is `--ease-standard` or `--ease-out`. Nothing elastic.
- Respect `prefers-reduced-motion` — disable all non-essential transitions.

### Hover / press states

- **Links:** color shifts aegean-500 → aegean-600; underline is always present and deepens from aegean-300 → aegean-500. Underline never appears/disappears on hover.
- **List rows (projects):** background wash to `--bg-raised` (marble-50). The row's trailing `→` glyph shifts 3px to the right, its color switches from `--fg-subtle` to aegean, and an ember-tipped overlay fades in behind it — the site's signature move: one warm pixel at the leading edge of a cool line. No scale, no shadow.
- **Buttons:** background shifts one step darker on hover (aegean-500 → aegean-600). No scale transforms.

### Transparency & blur

None. There is no reason to blur anything. Solid colors only. If you think you need a frosted panel, you don't.

### Imagery

- **No photography of the person.** Privacy-first. If photography ever enters the site (project thumbnails, for instance), it is warm-tinted, grainy, low-saturation, and cropped tight. Never cool, never glossy, never b&w.
- **Screenshots of projects** are acceptable if a project needs one — wrap in a 1px marble-300 border, no shadow, no rounded corners.

### Fixed elements

- Navigation is **not sticky**. Scroll reveals; the nav sits at page top and stays there. (A privacy-adjacent choice: no UI elements that follow the user.)
- No floating chat bubble, no cookie banner (the site has no cookies), no scroll-to-top button.

### Layout

- Centered, single column. Max width `--page-max` (1024px). Side gutters adapt to viewport.
- Everything breathes: ample padding, no elements touching viewport edges below `--page-max`.
- Mobile: same layout, same sizes, simply narrower. No hamburger menu — the nav is four links and fits on one line.

---

## Iconography

The brand uses almost no icons. Principle: a well-set line of type can say what a glyph says, and more quietly.

Where an icon is unavoidable:

- **Lucide icons** ([lucide.dev](https://lucide.dev)) via CDN — the stroke is warm, hairline, and pairs well with the serif headings. Use at 1em–1.25em sized with the text. Stroke weight: 1.5.
- **Unicode glyphs** for arrows and markers: `→`, `↗`, `·`, `§`. Preferred over icons when they can do the job — `→` is the site's signature trailing glyph on project rows and "read more" links.
- **No emoji. Ever.** Emoji break the palette and make the site look like every other portfolio.
- **No icon fonts** (Font Awesome, Material Icons, etc.) — they carry their own visual voice that fights the system.

### Logos and wordmark

- The site's identity is a **wordmark only** — the name *Hestia* set in EB Garamond, optionally italic, at `--step-7` (96px). There is no logo glyph; there is no monogram.
- One decorative mark exists: a quiet greek-key fragment, used as a separator or section ornament, never as a logo. See `assets/greek-key.svg`. It is subtract-only — used to *terminate* a section, not announce one.
- The favicon is a small ornamental letterform, not a glyph.

If a glyph/logo is ever added, it should be typographic — a ligature, a monogram, a hand-drawn initial — not an abstract shape.

---

## How sections should feel

Read like a well-set page: generous top margin, a quiet label, a deliberate title, then content. Between sections, a `--space-10` gap and optionally a hairline rule. No visual "dividers" heavier than that. No section-level color blocks. The eye should move top-to-bottom with no hesitation.

---

## Caveats

- **No brand mark provided yet.** The wordmark treatment and decorative Greek-key mark in `assets/` are a first pass — iterate when real content exists.
- **Font substitution:** none — the user provided all TTFs directly.
- **Dark mode:** automatic via `prefers-color-scheme`, **pigment-dark, not true dark**. No manual toggle — OS preference is the source of truth. Phrasing is deliberate and load-bearing: depth through saturation, not by collapsing to neutral black. See the Visual Foundations / Color section for the full rationale.
