// About page — no photo, typography-first. Prose column + a tidy "currently" list.
function AboutPage() {
  return (
    <section style={{ paddingTop: 96, paddingBottom: 32, maxWidth: "var(--content-max)" }}>
      <Eyebrow style={{ marginBottom: 18 }}>§ about</Eyebrow>
      <h1 style={{ fontSize: 56, fontStyle:"italic", fontWeight: 400 }}>briefly, then.</h1>
      <p className="lede" style={{ marginTop: 32 }}>
        self-taught frontend engineer, working from first principles,
        preferring restraint to trend.
      </p>
      <div style={{ marginTop: 56, fontSize: 17, lineHeight: "var(--leading-loose)", color: "var(--fg)" }}>
        <p>
          i build small, careful interfaces — the kind that read the same in a year as they do today.
          i keep a <a href="#">scrapbook</a> alongside the code: decisions, dead ends, taste calls, written as work happens.
          it makes the work honest.
        </p>
        <p>
          privacy-first by default. the sites i ship carry no trackers, no analytics, no cookies.
          i do not put my face on the internet.
        </p>
      </div>

      <hr style={{ marginTop: 56 }} />

      <Eyebrow style={{ marginTop: 32, marginBottom: 18 }}>§ currently</Eyebrow>
      <dl style={{ display: "grid", gridTemplateColumns: "140px 1fr", rowGap: 14, columnGap: 24, margin: 0, fontSize: 15 }}>
        <dt style={{ fontFamily:"var(--font-display)", fontStyle:"italic", color:"var(--fg-subtle)" }}>stack</dt>
        <dd style={{ margin: 0, color: "var(--fg)" }}>astro 6, typescript strict, vanilla css</dd>
        <dt style={{ fontFamily:"var(--font-display)", fontStyle:"italic", color:"var(--fg-subtle)" }}>deploying</dt>
        <dd style={{ margin: 0, color: "var(--fg)" }}>github pages · <em>withastro/action@v6</em></dd>
        <dt style={{ fontFamily:"var(--font-display)", fontStyle:"italic", color:"var(--fg-subtle)" }}>reading</dt>
        <dd style={{ margin: 0, color: "var(--fg)" }}>the elements of typographic style, robert bringhurst</dd>
        <dt style={{ fontFamily:"var(--font-display)", fontStyle:"italic", color:"var(--fg-subtle)" }}>learning</dt>
        <dd style={{ margin: 0, color: "var(--fg)" }}>view transitions, css anchor positioning</dd>
      </dl>

      <hr style={{ marginTop: 56 }} />

      <Eyebrow style={{ marginTop: 32, marginBottom: 18 }}>§ elsewhere</Eyebrow>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: 15, display:"flex", flexDirection:"column", gap: 10 }}>
        <li><a href="#">github <span style={{ color:"var(--fg-subtle)" }}>/ hestia-23</span> ↗</a></li>
        <li><a href="#">mastodon <span style={{ color:"var(--fg-subtle)" }}>/ @hestia@tilde.zone</span> ↗</a></li>
        <li><a href="#">email <span style={{ color:"var(--fg-subtle)" }}>/ hestia at proton.me</span> ↗</a></li>
      </ul>
    </section>
  );
}

// Contact page — single column, a short note, one button, no form-for-form's-sake.
function ContactPage() {
  return (
    <section style={{ paddingTop: 96, paddingBottom: 32, maxWidth: "var(--content-max)" }}>
      <Eyebrow style={{ marginBottom: 18 }}>§ contact</Eyebrow>
      <h1 style={{ fontSize: 56, fontStyle:"italic", fontWeight: 400 }}>say hello.</h1>
      <p className="lede" style={{ marginTop: 32 }}>
        email is the best way. i read everything; i reply to most.
      </p>
      <div style={{ marginTop: 56, fontSize: 17, lineHeight: "var(--leading-loose)", color: "var(--fg)" }}>
        <p>
          writing about privacy, astro, or a project you want a second pair of eyes on?
          those get opened first.
        </p>
        <p style={{ color: "var(--fg-muted)" }}>
          not a recruiter? please do not pitch crypto, blockchains, or "growth opportunities."
        </p>
      </div>
      <div style={{ marginTop: 40, display:"flex", gap: 14, alignItems:"center" }}>
        <ButtonPrimary>hestia at proton.me</ButtonPrimary>
        <span style={{ fontFamily:"var(--font-body)", fontSize: 13, color: "var(--fg-subtle)" }}>or find me on github / mastodon</span>
      </div>
    </section>
  );
}

Object.assign(window, { AboutPage, ContactPage });
