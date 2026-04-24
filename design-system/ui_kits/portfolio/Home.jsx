// Home hero — name wordmark, one-line tagline, a single CTA.
function HomeHero({ onNav, heroScale = 1 }) {
  return (
    <section style={{ paddingTop: 128, paddingBottom: 96 }}>
      <Eyebrow style={{ marginBottom: 32 }}>§ hestia · portfolio</Eyebrow>
      <div style={{ transform: `scale(${heroScale})`, transformOrigin: "left top" }}>
        <Wordmark size="hero" as="h1" />
      </div>
      <p className="lede" style={{ marginTop: 40, maxWidth: "38ch" }}>
        frontend engineer, self-taught.
        <br />
        i build small, careful interfaces — currently on astro and typescript.
      </p>
      <div style={{ marginTop: 48, display:"flex", gap: 14, alignItems:"center" }}>
        <ButtonPrimary onClick={() => onNav("projects")}>view projects</ButtonPrimary>
        <a href="#" onClick={(e) => { e.preventDefault(); onNav("contact"); }}
           style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--fg-muted)", textDecoration: "none", marginLeft: 8 }}>
          or send a note →
        </a>
      </div>
    </section>
  );
}

// Selected work — a short list under the hero, hairline dividers only.
function SelectedWork({ projects, onOpen, showOchreTag }) {
  return (
    <section style={{ paddingTop: 64, paddingBottom: 32 }}>
      <div style={{ display:"flex", alignItems:"baseline", justifyContent:"space-between", marginBottom: 24 }}>
        <Eyebrow>§ selected work</Eyebrow>
        <a href="#" style={{ fontFamily:"var(--font-body)", fontSize: 13, color:"var(--fg-muted)", textDecoration:"none" }}>all projects →</a>
      </div>
      <div>
        {projects.slice(0,3).map((p) => (
          <ProjectRow key={p.slug} project={p} onOpen={onOpen} showOchreTag={showOchreTag} />
        ))}
      </div>
    </section>
  );
}

// Home page — hero + selected work.
function HomePage({ projects, onNav, onOpen, heroScale, showOchreTag }) {
  return (
    <React.Fragment>
      <HomeHero onNav={onNav} heroScale={heroScale} />
      <SelectedWork projects={projects} onOpen={onOpen} showOchreTag={showOchreTag} />
    </React.Fragment>
  );
}

Object.assign(window, { HomeHero, SelectedWork, HomePage });
