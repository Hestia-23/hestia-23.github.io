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
