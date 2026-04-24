// Wordmark component — italic Garamond, three sizes.
function Wordmark({ size = "lg", as = "span" }) {
  const sizes = {
    hero: { fontSize: "clamp(64px, 12vw, 112px)", letterSpacing: "-0.03em" },
    lg:   { fontSize: "34px", letterSpacing: "-0.01em" },
    md:   { fontSize: "22px", letterSpacing: "-0.005em" },
    sm:   { fontSize: "18px" },
  };
  const Tag = as;
  return (
    <Tag style={{
      fontFamily: "var(--font-display)",
      fontStyle: "italic",
      fontWeight: 500,
      color: "var(--ember)",
      lineHeight: 1,
      ...sizes[size],
    }}>hestia</Tag>
  );
}

// Nav — wordmark left, four links right, hairline under.
function Nav({ page, onNav }) {
  const items = ["home", "about", "projects", "contact"];
  return (
    <nav style={{
      display: "flex", alignItems: "baseline", justifyContent: "space-between",
      padding: "32px 0 24px", borderBottom: "1px solid var(--rule)",
    }}>
      <a href="#" onClick={(e) => { e.preventDefault(); onNav("home"); }}
         style={{ textDecoration: "none" }}>
        <Wordmark size="md" />
      </a>
      <div style={{ display: "flex", gap: 28 }}>
        {items.map((it) => (
          <a key={it} href="#"
             onClick={(e) => { e.preventDefault(); onNav(it); }}
             style={{
               fontFamily: "var(--font-body)", fontSize: 14,
               color: page === it ? "var(--fg)" : "var(--fg-muted)",
               textDecoration: "none",
               transition: "color 120ms",
             }}
             onMouseOver={(e) => e.currentTarget.style.color = "var(--accent)"}
             onMouseOut={(e)  => e.currentTarget.style.color = page === it ? "var(--fg)" : "var(--fg-muted)"}
          >{it}</a>
        ))}
      </div>
    </nav>
  );
}

// Eyebrow — small-caps tracked label.
function Eyebrow({ children, style }) {
  return (
    <div style={{
      fontFamily: "var(--font-body)",
      fontSize: 12, fontWeight: 500,
      textTransform: "uppercase",
      letterSpacing: "0.12em",
      color: "var(--fg-subtle)",
      ...style,
    }}>{children}</div>
  );
}

// CTA primary button.
function ButtonPrimary({ children, onClick }) {
  const [hov, setHov] = React.useState(false);
  return (
    <button onClick={onClick}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        fontFamily: "var(--font-body)", fontSize: 14, fontWeight: 500,
        padding: "12px 22px",
        background: hov ? "var(--accent-hover)" : "var(--accent)",
        color: "var(--bg-raised)",
        border: 0, borderRadius: 2, cursor: "pointer",
        transition: "background 120ms",
      }}>{children}</button>
  );
}

// Ghost outlined button.
function ButtonGhost({ children, onClick }) {
  const [hov, setHov] = React.useState(false);
  return (
    <button onClick={onClick}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        fontFamily: "var(--font-body)", fontSize: 14, fontWeight: 500,
        padding: "12px 22px",
        background: hov ? "var(--bg-sunken)" : "transparent",
        color: "var(--fg)",
        border: "1px solid var(--rule-strong)", borderRadius: 2, cursor: "pointer",
        transition: "background 120ms",
      }}>{children}</button>
  );
}

// Footer — a greek-key and a single line of copy.
function Footer() {
  return (
    <footer style={{ marginTop: 128, paddingTop: 40, paddingBottom: 40, borderTop: "1px solid var(--rule)", display:"flex", flexDirection:"column", alignItems:"center", gap: 18 }}>
      <img src="../../assets/greek-key.svg" alt="" width="180" style={{ opacity: 0.35, color: "var(--fg-subtle)" }} />
      <div style={{ fontFamily:"var(--font-display)", fontStyle:"italic", fontSize:13, color:"var(--fg-subtle)" }}>
        built with astro. hosted on github pages. <span style={{ marginLeft:4 }}>· mmxxvi</span>
      </div>
    </footer>
  );
}

Object.assign(window, { Wordmark, Nav, Eyebrow, ButtonPrimary, ButtonGhost, Footer });
