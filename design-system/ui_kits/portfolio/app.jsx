/* global React, Nav, Hero, Section, ProjectList, ContactList, Footer, BackLink */
const { useState } = React;

const PROJECTS = [
  {
    slug: "privacypack",
    title: "privacypack",
    subtitle: "your privacy wins, in one card",
    date: "april 2026",
    description: "a single readable card that summarizes the privacy choices you've actually made. astro, zero javascript, share-as-image.",
    stack: ["astro", "typescript", "github pages"],
    body: [
      "i kept tabs open for weeks trying to remember which privacy changes i'd actually made. privacypack is the card i wish i'd had — one screen, your wins, shareable.",
      "built on astro 6 with zero client-side javascript. the whole site is about 14kb gzipped. styling is hand-written css using the tokens from this system; no framework.",
      "still iterating on the share-as-image flow. current version renders an svg that screen-reads correctly and also exports cleanly as png.",
    ],
  },
  {
    slug: "hearth-ui",
    title: "hearth-ui",
    date: "march 2026",
    description: "a small component library for privacy-focused community platforms. work in progress, based on real volunteer work.",
    stack: ["astro", "vanilla css"],
    body: [
      "hearth-ui started as a handful of components i kept rebuilding for community projects. extracted and documented so i stop rewriting them.",
      "the library is deliberately small: maybe twenty components, each simple enough to read in one sitting. no runtime, no dependencies beyond astro itself.",
    ],
  },
  {
    slug: "discordalternatives",
    title: "discord alternatives",
    subtitle: "a neutral directory",
    date: "february 2026",
    description: "a filterable directory of discord alternatives. no rankings, no reviews, no ads, no tracking.",
    stack: ["astro", "typescript", "static json"],
    body: [
      "the internet has a lot of 'best of' lists and almost none of them are neutral. this directory has one rule: show the platforms, show what they do, let the reader decide.",
      "data is a static json file under version control. every change is a pull request; every addition has a one-line rationale.",
    ],
  },
  {
    slug: "sdv-summary",
    title: "sdv-summary",
    date: "january 2026",
    description: "read a stardew valley save file and render a summary card of the player. pure client-side.",
    stack: ["typescript", "canvas"],
    body: [
      "takes a stardew save file, parses the farm state, and draws a stylized summary onto a canvas. nothing is uploaded; all parsing happens in the browser.",
    ],
  },
];

const CONTACT = [
  { kind: "email",  value: "hestia@example.com", href: "mailto:hestia@example.com" },
  { kind: "github", value: "github.com/hestia-23", href: "https://github.com/Hestia-23" },
  { kind: "rss",    value: "feed.xml",           href: "#" },
];

function HomePage({ onNavigate, onOpenProject }) {
  return (
    <>
      <Hero onNavigate={onNavigate} />
      <Section eyebrow="§ recent" title="selected work">
        <ProjectList projects={PROJECTS.slice(0, 3)} onOpen={onOpenProject} />
        <p style={{ marginTop: "var(--space-6)" }}>
          <a
            href="#"
            style={{ color: "var(--accent)", textDecoration: "none", fontFamily: "var(--font-body)", fontSize: 14, fontWeight: 500 }}
            onClick={(e) => { e.preventDefault(); onNavigate("projects"); }}
          >all projects →</a>
        </p>
      </Section>
    </>
  );
}

function AboutPage() {
  return (
    <Section eyebrow="§ about" title="self-taught. frontend. slow to ship, careful when i do.">
      <div className="about-grid">
        <aside className="about-aside">
          <dl>
            <dt>based</dt><dd>quietly online</dd>
            <dt>writing</dt><dd>astro, typescript, css</dd>
            <dt>reading</dt><dd><em>the elements of typographic style</em></dd>
            <dt>learning</dt><dd>web components · accessibility</dd>
          </dl>
        </aside>
        <div className="prose">
          <p>i'm a frontend engineer. i taught myself by rebuilding things i used every day and getting them wrong until they were less wrong.</p>
          <p>i care about small things: how text is set, how a link changes state, whether the page loads before the user's patience does. i don't ship much, but what i ship i'm willing to defend.</p>
          <p>this site is intentionally quiet. no photo, no metrics, no newsletter. if you'd like to talk about work, the <em>contact</em> page has the one address i read.</p>
        </div>
      </div>
    </Section>
  );
}

function ProjectsPage({ onOpenProject }) {
  return (
    <Section eyebrow="§ projects" title="all work">
      <ProjectList projects={PROJECTS} onOpen={onOpenProject} />
    </Section>
  );
}

function ProjectDetailPage({ project, onBack }) {
  return (
    <Section eyebrow={`§ ${project.date}`} title={project.title}>
      <BackLink onClick={onBack} />
      <div className="prose">
        {project.subtitle ? <p><em>{project.subtitle}.</em></p> : null}
        {project.body.map((para, i) => <p key={i}>{para}</p>)}
        <p>
          <a href="#">view repo →</a>
        </p>
      </div>
    </Section>
  );
}

function ContactPage() {
  return (
    <Section eyebrow="§ contact" title="one address, read weekly.">
      <div className="prose" style={{ marginBottom: "var(--space-7)" }}>
        <p>email is the address i actually read. github is where the work lives. the rss feed updates when something is shipped — which is not often.</p>
      </div>
      <ContactList items={CONTACT} />
    </Section>
  );
}

/* ---------- App ---------- */
function App() {
  const [page, setPage] = useState("home");
  const [openProject, setOpenProject] = useState(null);

  const navigate = (p) => { setOpenProject(null); setPage(p); };
  const open = (proj) => setOpenProject(proj);
  const back = () => setOpenProject(null);

  let content;
  if (openProject) {
    content = <ProjectDetailPage project={openProject} onBack={back} />;
  } else if (page === "home") {
    content = <HomePage onNavigate={navigate} onOpenProject={open} />;
  } else if (page === "about") {
    content = <AboutPage />;
  } else if (page === "projects") {
    content = <ProjectsPage onOpenProject={open} />;
  } else if (page === "contact") {
    content = <ContactPage />;
  }

  return (
    <div className="page">
      <Nav page={openProject ? "projects" : page} onNavigate={navigate} />
      {content}
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
