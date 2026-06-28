// ─────────────────────────────────────────────────────────────────────────
//  HERO  ·  This is the only section for now. Everything you'd want to
//  change (name, tagline, bio, links) is marked "EDIT ME" below.
// ─────────────────────────────────────────────────────────────────────────

const LINKS = [
  // EDIT ME: fill in your real URLs. Delete any line you don't want.
  { label: "GitHub", href: "https://github.com/imanmaity" },
  { label: "LinkedIn", href: "#" },
  { label: "Email", href: "mailto:you@example.com" },
];

export default function Home() {
  return (
    <main className="hero">
      <div className="hero__bar">
        <span className="mark">IM</span>
        <span className="status">
          <span className="status__dot" aria-hidden="true" />
          Open to Product &amp; Analyst roles · 2026
        </span>
      </div>

      <div className="hero__grid">
        <div className="hero__copy">
          {/* EDIT ME: your name */}
          <h1 className="name">Iman Maity</h1>

          {/* EDIT ME: your two worlds. The × is the signature — keep it. */}
          <p className="tagline">
            Marketing <span className="x">×</span> Technology
          </p>

          {/* EDIT ME: one honest sentence about what you do */}
          <p className="bio">
            MBA in Marketing and a CS engineer — I scope the problem and ship
            the product on top of it. Building tools real students use, every
            single day.
          </p>

          <nav className="links" aria-label="Social links">
            {LINKS.map((l) => (
              <a key={l.label} className="link" href={l.href}>
                {l.label}
                <span className="link__arrow" aria-hidden="true">↗</span>
              </a>
            ))}
          </nav>

          <p className="place">Ahmedabad, India</p>
        </div>

        <aside className="hero__photo" aria-hidden="true">
          {/* Placeholder portrait. Drop a real image in /public later and
              swap this <div> for <img src="/me.jpg" alt="..." />. */}
          <div className="photo">
            <span className="photo__initials">IM</span>
            <span className="photo__caption">your photo here</span>
          </div>
        </aside>
      </div>
    </main>
  );
}
