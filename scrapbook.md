# Portfolio Scrapbook

The memory of this portfolio — decisions, dead ends, taste calls, and the reasoning behind them. Written as work happens, not after.

---

## 2026-04-24

### What I'm doing
Setting up the working rails for the Portfolio repo. Astro minimal scaffold is already in place (commit `a8382d4`); nothing beyond `src/pages/` exists yet. Current state: Astro 6.1.9, Node >=22.12.0, no integrations, no Tailwind, no content collections, no layout.

### Decisions
- **Scrapbook first, code second.** Created `scrapbook.md` before touching any feature code — it is the portfolio's memory, not a deliverable afterthought.
- **No Claude co-author trailers on commits.** Recorded as durable rule; applies to all repos on this machine.
- **Defer framework choices until IA is sketched.** Not adding Tailwind, MDX, content collections, or any integration yet. Those are xhigh-level decisions and depend on what the site needs to *be*, which hasn't been defined with the user.
- **GitHub Pages deploy via official Astro action.** Used the exact recipe from `/withastro/docs` (file `src/content/docs/en/guides/deploy/github.mdx`), current as of 2026-04-24. Versions: `actions/checkout@v6`, `withastro/action@v6`, `actions/deploy-pages@v5`.
- **No `base` in `astro.config.mjs`.** This is a user site (`hestia-23.github.io`), not a project site. Astro docs: *"This step can be skipped if the repository follows the special username-based naming pattern where the site is hosted at the root."* Adding `base` would break asset URLs.
- **Minimal workflow — no knobs set explicitly.** `withastro/action@v6` auto-detects npm from the lockfile, defaults to Node 22 (matches our `engines.node >=22.12.0`), and runs the package `build` script by default. No `node-version`, `package-manager`, or `build-cmd` inputs needed. Fewer knobs = fewer things that go stale.
- **No concurrency block.** Official Astro example omits it; `environment: github-pages` already serializes deploys. Easy to add later if the portfolio ever gains parallel deploy paths.
- **Trigger on `master` only, plus `workflow_dispatch`.** The manual trigger is the emergency lever if auto-deploy fails and we need to retry after fixing Settings → Pages.

### Stuck on
- Nothing yet — waiting for direction on IA and content scope before making architectural calls.

### Resolved
- Deploy pipeline scaffolded. First push to master will trigger it; user needs to flip Settings → Pages → Source to "GitHub Actions" if it isn't already.
- First deploy green on `9674ebb`. `https://hestia-23.github.io` is live and serving the Astro scaffold. Pipeline confirmed end-to-end: push → build → deploy → live URL. No surprises.

---

## 2026-04-24 (continued)

### What I'm doing
Wiring the `design-system/` package into the Astro site. Tokens, fonts, favicon, a base Layout, and four scaffolded pages. The system is authoritative; this task just plumbs it in.

### Decisions
- **Tokens live at `src/styles/tokens.css`, imported once via `Layout.astro`.** Astro promotes a component-level CSS import to a global stylesheet, so every page using Layout inherits the palette, type, and semantic element defaults without needing to re-import anywhere. Single source of truth downstream.
- **Font URLs rewritten from `fonts/` to `/fonts/` (absolute).** Vite bundles the tokens CSS to a hashed path like `/_astro/tokens.XYZ.css`; relative `url("fonts/...")` would resolve against that hash path (wrong). Absolute `/fonts/...` resolves against the site root where `public/fonts/` is served. The site is a user site with no `base` prefix, so `/fonts/` is unambiguous.
- **Using `@font-face` from tokens, not Astro 6's Fonts API.** The design system ships its own `@font-face` rules and the 17 TTFs alongside them. Using the Fonts API on top would double-declare the families and fight the design system. Agents not invited to reason about font strategy; the design system already decided.
- **`color-scheme: light dark` meta in Layout head.** Tokens already define an auto dark mode via `prefers-color-scheme`. The meta lets browsers honor that for scrollbars and form controls without a flash of light-on-dark. Aligns with the "pigment-dark, not true dark" stance in the design brief.
- **Pages start as bare semantic shells: `<main>` + `<h1>` + a pointer comment.** No nav, no footer, no hero lede yet. The JSX reference implementations in `design-system/ui_kits/portfolio/` will port over in a follow-up task; premature porting before the tokens are verified would hide any integration bugs behind layout complexity.
- **Page titles use `hestia · {page}` with a middot.** Middot is one of the four allowed unicode glyphs in the design system's iconography (along with →, ↗, §). Em-dashes are banned by the voice rules. Home page is just `hestia`, no suffix.
- **Orphan file flagged, not touched:** `public/favicon.ico` is Astro's default scaffold file and no longer referenced. Leaving it alone per scope discipline; it's dead weight awaiting a cleanup pass.

### Stuck on
- (none)

### Resolved
- Design system voice corrections applied to `design-system/README.md` before the integration. Em-dashes out; banned-buzzword list extended with "delve", "navigate the landscape", "it's worth noting"; new "Direct, lead with the answer" rule added. Committed as `c978a48` ahead of the integration commit, so the in-repo rules match the owner's actual writing voice before any page scaffold sees them.
- Commit structure revised mid-task on the user's call: README voice correction as its own commit (first), then the integration as a single follow-up commit carrying the design-system source and the Astro wiring together. Previously planned as three commits; collapsed to two because "two separate commits, not one" was the explicit instruction, and the README-vs-integration split is the one that matters.

---

## 2026-04-24 (continued, jsx port)

### What I'm doing
Turning the four empty scaffold pages into real portfolio pages by porting the ui_kit's React/JSX reference implementations into Astro components, data modules, and static routes.

### Decisions
- **app.jsx + components.jsx + portfolio.css is the canonical source.** The ui_kit ships two parallel implementations. Reading index.html's script load order and the window-global collision pattern, app.jsx's page functions override same-named functions from Home.jsx / Projects.jsx / AboutContact.jsx. components.jsx is the active class-based primitive set; Primitives.jsx is an earlier inline-styled alternative. Only the canonical set gets ported. Dead files and tweaks-panel.jsx (design-tool artifact with postMessage protocol) skipped.
- **Global component stylesheet, not scoped per component.** Earlier task preference was scoped. For the ported components, the class selectors in portfolio.css are the authoritative surface (with sibling combinators like `.section + .section` and positional ones like `.project-row:first-child`). Keeping them in one `src/styles/components.css` imported globally preserves the design-system surface exactly and keeps diffs against the ui_kit source legible. Two one-off page styles go in scoped `<style>` blocks (index's all-projects link, contact's prose margin). Revisit if scoping becomes useful later.
- **Routing is file-based plus one dynamic route.** `src/pages/projects/[slug].astro` with `getStaticPaths()` emits one pre-rendered HTML page per project. BackLink is a real `<a href="/projects/">`, not a stateful button. ProjectRow is an `<a>` too. No JS, no state machine, no client directives.
- **Data lives in src/data/ TS modules.** Plain typed arrays (Project[], ContactItem[]) with a type export. Not content collections; three short entries with string-array bodies do not warrant MDX plus schema.
- **Three projects, not four.** Owner confirmed the real projects are hearth-ui, discord-alternatives, and gamevox. The ui_kit's privacypack and sdv-summary were placeholder inventions; dropped. GameVox is framed honestly as a platform the owner volunteers on (community manager + ui contributor), not a project they own.
- **Real email wired.** `hestia.tu2cy@8alias.com` (an alias address) as a `mailto:` link, in the ContactList. No placeholder TODOs in the built site.
- **About voice drawn from the Sponsors intro.** Cleaned to match the design system's voice rules (no emoji, no em-dashes, no banned buzzwords, no exclamation marks, lowercase). GameVox and the privacy-focused voice chat platform named explicitly per owner direction.
- **Nav derives active state from `Astro.url.pathname`, not a prop.** Zero JS. Every link is a real anchor.
- **Button styles live in components.css under `.btn .btn-primary .btn-ghost`.** The ui_kit used inline styles via Primitives.jsx's `ButtonPrimary`/`ButtonGhost`; the canonical app.jsx path actually doesn't render buttons on the detail page, so I added a small class-based set to match the intent (visit site / view repo CTAs, only rendered when the project has a `url` or `repoUrl`).
- **Footer content: `© 2026 · source · § · built with astro`.** RSS dropped (no blog to feed); kept the three-column flex layout with the `§` ornament so the design-system rhythm survives.

### Stuck on
- (none)

### Resolved
- Four-page portfolio is no longer empty. 8 routes build (`/`, `/about/`, `/projects/`, three `/projects/<slug>/` pages, `/contact/`, plus Astro's 404 default). Nav, Hero, ProjectList, ContactList, BackLink, Footer all on screen. Real email, real repo links, real GameVox link.
