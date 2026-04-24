// A single project row — clickable list item. No card chrome.
function ProjectRow({ project, onOpen, showOchreTag = true }) {
  const [hov, setHov] = React.useState(false);
  return (
    <a href="#" onClick={(e) => { e.preventDefault(); onOpen && onOpen(project.slug); }}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        display: "grid",
        gridTemplateColumns: "1fr auto",
        columnGap: 24, rowGap: 6,
        alignItems: "baseline",
        padding: "28px 6px",
        borderBottom: "1px solid var(--rule)",
        background: hov ? "var(--bg-raised)" : "transparent",
        textDecoration: "none", color: "inherit",
        transition: "background 200ms",
      }}>
      <div style={{
        fontFamily: "var(--font-display)",
        fontSize: 28, fontWeight: 500,
        color: "var(--fg)", lineHeight: 1.1,
      }}>
        {project.title}
        {project.emdash && (
          <em style={{ color: "var(--fg-muted)", fontWeight: 400, marginLeft: 8 }}>— {project.emdash}</em>
        )}
      </div>
      <div style={{
        gridRow: 1, gridColumn: 2,
        fontFamily: "var(--font-display)", fontStyle:"italic",
        fontSize: 15, color: "var(--fg-subtle)",
        display: "flex", alignItems: "baseline", gap: 16,
      }}>
        <span>{project.date}</span>
        <span style={{
          fontFamily: "var(--font-body)", fontStyle: "normal",
          fontSize: 18, color: hov ? "var(--accent)" : "var(--fg-subtle)",
          transform: hov ? "translateX(3px)" : "translateX(0)",
          transition: "transform 200ms, color 200ms",
          display: "inline-block",
          position: "relative",
        }}>
          →
          {hov && (
            <span aria-hidden="true" style={{
              position: "absolute", left: "0.55em", top: 0,
              color: "var(--ember)",
              transition: "opacity 200ms",
            }}>→</span>
          )}
        </span>
      </div>
      <div style={{
        gridColumn: "1 / -1",
        fontFamily: "var(--font-body)", fontSize: 15,
        color: "var(--fg-muted)",
        maxWidth: "58ch",
      }}>{project.desc}</div>
      <div style={{
        gridColumn: "1 / -1",
        fontFamily: "var(--font-body)", fontSize: 12,
        color: "var(--fg-subtle)",
        display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap",
      }}>
        {project.stack.map((s, i) => (
          <React.Fragment key={s}>
            {i > 0 && <span>·</span>}
            <span>{s}</span>
          </React.Fragment>
        ))}
        {project.status && (
          <React.Fragment>
            <span>·</span>
            <span style={{
              color: project.status === "in progress" && showOchreTag
                ? "var(--ochre-500)"
                : project.status === "active"
                  ? "var(--accent)"
                  : "var(--secondary-hover)"
            }}>{project.status}</span>
          </React.Fragment>
        )}
      </div>
    </a>
  );
}

// Projects page — title, lede, full list.
function ProjectsPage({ projects, onOpen, showOchreTag }) {
  return (
    <section style={{ paddingTop: 96, paddingBottom: 32 }}>
      <Eyebrow style={{ marginBottom: 18 }}>§ projects</Eyebrow>
      <h1 style={{ fontSize: 56, fontStyle: "italic", fontWeight: 400 }}>everything, in order.</h1>
      <p className="lede" style={{ marginTop: 24 }}>
        small sites, component work, open source contributions.
        three to six at a time — replaced when something better lands.
      </p>
      <div style={{ marginTop: 64 }}>
        {projects.map((p) => <ProjectRow key={p.slug} project={p} onOpen={onOpen} showOchreTag={showOchreTag} />)}
      </div>
    </section>
  );
}

// Project detail — a minimal reading view.
function ProjectDetail({ project, onBack }) {
  if (!project) return null;
  return (
    <section style={{ paddingTop: 96, paddingBottom: 32, maxWidth: "var(--content-max)" }}>
      <a href="#" onClick={(e) => { e.preventDefault(); onBack(); }}
         style={{ fontFamily:"var(--font-body)", fontSize:13, color:"var(--fg-muted)", textDecoration:"none" }}>← projects</a>
      <Eyebrow style={{ marginTop: 24, marginBottom: 12 }}>§ {project.date}</Eyebrow>
      <h1 style={{ fontSize: 52, fontWeight: 500 }}>{project.title}</h1>
      {project.emdash && <p className="lede" style={{ marginTop: 16 }}>{project.emdash}.</p>}
      <hr />
      <p style={{ fontSize: 17, lineHeight: "var(--leading-loose)" }}>{project.desc}</p>
      <p style={{ fontSize: 17, lineHeight: "var(--leading-loose)", color: "var(--fg-muted)" }}>
        built with {project.stack.join(", ")}. deployed via github pages, no trackers, no analytics.
      </p>
      <div style={{ display: "flex", gap: 14, marginTop: 32 }}>
        <ButtonPrimary>visit site</ButtonPrimary>
        <ButtonGhost>view repo</ButtonGhost>
      </div>
    </section>
  );
}

Object.assign(window, { ProjectRow, ProjectsPage, ProjectDetail });
