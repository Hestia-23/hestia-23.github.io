/* global React */
const { useState } = React;

/* ---------- Nav ---------- */
function Nav({ page, onNavigate }) {
  const links = ["home", "about", "projects", "contact"];
  return (
    <nav className="nav">
      <a href="#" className="nav-mark" onClick={(e) => { e.preventDefault(); onNavigate("home"); }}>hestia</a>
      <div className="nav-links">
        {links.map(l => (
          <button
            key={l}
            className={"nav-link" + (page === l ? " active" : "")}
            onClick={() => onNavigate(l)}
          >{l}</button>
        ))}
      </div>
    </nav>
  );
}

/* ---------- Hero ---------- */
function Hero({ onNavigate }) {
  return (
    <section className="hero">
      <h1 className="hero-wordmark">hestia</h1>
      <p className="hero-lede">
        i build small, careful interfaces.<br/>
        currently on <em>astro</em> and <em>typescript</em>; privacy-minded by default.
      </p>
      <a href="#" className="hero-cta" onClick={(e) => { e.preventDefault(); onNavigate("projects"); }}>
        selected work<span className="arrow">→</span>
      </a>
    </section>
  );
}

/* ---------- Section wrapper ---------- */
function Section({ eyebrow, title, children }) {
  return (
    <section className="section">
      {eyebrow ? <div className="section-eyebrow">{eyebrow}</div> : null}
      {title ? <h2 className="section-title">{title}</h2> : null}
      {children}
    </section>
  );
}

/* ---------- Project row ---------- */
function ProjectRow({ project, onOpen }) {
  return (
    <button className="project-row" onClick={() => onOpen(project)}>
      <div className="project-title">
        {project.title}
        {project.subtitle ? <> <em>— {project.subtitle}</em></> : null}
      </div>
      <div className="project-date">{project.date}</div>
      <div className="project-arrow">→</div>
      <div className="project-desc">{project.description}</div>
      <div className="project-meta">
        {project.stack.map((s, i) => (
          <React.Fragment key={i}>
            {i > 0 ? <span className="sep">·</span> : null}
            <span>{s}</span>
          </React.Fragment>
        ))}
      </div>
    </button>
  );
}

function ProjectList({ projects, onOpen }) {
  return (
    <div className="project-list">
      {projects.map(p => <ProjectRow key={p.slug} project={p} onOpen={onOpen} />)}
    </div>
  );
}

/* ---------- Contact list ---------- */
function ContactList({ items }) {
  return (
    <ul className="contact-list">
      {items.map(i => (
        <li key={i.kind}>
          <span className="contact-kind">{i.kind}</span>
          <a className="contact-value" href={i.href}>{i.value}</a>
        </li>
      ))}
    </ul>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="footer">
      <div>© 2026 · <a href="#">source</a></div>
      <div className="footer-ornament">§</div>
      <div><a href="#">rss</a></div>
    </footer>
  );
}

/* ---------- Back link ---------- */
function BackLink({ onClick, label = "← all projects" }) {
  return <button className="back-link" onClick={onClick}>{label}</button>;
}

Object.assign(window, { Nav, Hero, Section, ProjectRow, ProjectList, ContactList, Footer, BackLink });
