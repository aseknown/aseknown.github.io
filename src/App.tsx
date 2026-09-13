import { useEffect, useMemo, useState } from "react";

type GitHubUser = {
  login: string;
  name: string | null;
  bio: string | null;
  avatar_url: string;
  html_url: string;
  public_repos: number;
  followers: number;
  following: number;
};

type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  fork: boolean;
  archived: boolean;
  topics?: string[];
};

const USERNAME = "aseknown";

const fallbackUser: GitHubUser = {
  login: USERNAME,
  name: "Hossein Samadi",
  bio: "Full-Stack Software Engineer focused on backend systems, architecture, AI/ML, LLM systems and DevOps.",
  avatar_url: `https://github.com/${USERNAME}.png`,
  html_url: `https://github.com/${USERNAME}`,
  public_repos: 2,
  followers: 0,
  following: 0
};

const fallbackRepos: Repo[] = [
  {
    id: 1,
    name: "telegram-order-miniapp",
    html_url: "https://github.com/aseknown/telegram-order-miniapp",
    description:
      "Telegram Mini App, API and D1-backed order workflow running on Cloudflare Pages.",
    language: "JavaScript",
    stargazers_count: 0,
    forks_count: 0,
    fork: false,
    archived: false,
    topics: ["telegram", "cloudflare", "d1", "mini-app"]
  }
];

const stack = [
  "TypeScript",
  "JavaScript",
  "Python",
  "React",
  "Next.js",
  "Node.js",
  "NestJS",
  "PostgreSQL",
  "Docker",
  "Linux",
  "GitHub Actions",
  "LLM Systems"
];

const focus = [
  {
    title: "Backend Engineering",
    body: "Production APIs, domain modeling, authentication, authorization, databases and service architecture."
  },
  {
    title: "AI Engineering",
    body: "LLM applications, agentic systems, multi-agent orchestration and production AI integration."
  },
  {
    title: "Architecture",
    body: "Maintainable system boundaries, clean architecture, observability, performance and scalability."
  },
  {
    title: "DevOps & Security",
    body: "Containers, CI/CD, Linux workflows, deployment automation and security-conscious engineering."
  }
];

function App() {
  const [user, setUser] = useState<GitHubUser>(fallbackUser);
  const [repos, setRepos] = useState<Repo[]>(fallbackRepos);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const load = async () => {
      try {
        const [userRes, repoRes] = await Promise.all([
          fetch(`https://api.github.com/users/${USERNAME}`),
          fetch(
            `https://api.github.com/users/${USERNAME}/repos?sort=updated&per_page=12`
          )
        ]);

        if (userRes.ok) {
          setUser(await userRes.json());
        }

        if (repoRes.ok) {
          const data: Repo[] = await repoRes.json();
          const ownRepos = data.filter((repo) => !repo.fork && !repo.archived);
          if (ownRepos.length) setRepos(ownRepos);
        }
      } catch {
        // Static fallback content keeps the portfolio usable if GitHub's API
        // is unavailable or rate-limited.
      }
    };

    load();
  }, []);

  const visibleRepos = useMemo(() => repos.slice(0, 6), [repos]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="noise" />

      <header className="nav-wrap">
        <nav className="nav container" aria-label="Primary navigation">
          <a className="brand" href="#top" onClick={closeMenu}>
            <span className="brand-mark">&lt;/&gt;</span>
            <span>aseknown</span>
          </a>

          <button
            className="menu-button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>

          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#stack" onClick={closeMenu}>Stack</a>
            <a href="#projects" onClick={closeMenu}>Projects</a>
            <a href="#focus" onClick={closeMenu}>Focus</a>
            <a
              className="nav-cta"
              href={user.html_url}
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
            >
              GitHub ↗
            </a>
          </div>
        </nav>
      </header>

      <main id="top">
        <section className="hero container">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="status-dot" />
              SOFTWARE ENGINEER · OPEN TO BUILDING
            </div>

            <h1>
              I engineer software
              <span> from architecture to production.</span>
            </h1>

            <p className="hero-text">
              Full-Stack Software Engineer working across backend systems,
              system architecture, AI/ML, LLM applications, DevOps and
              security-focused engineering.
            </p>

            <div className="hero-actions">
              <a className="button primary" href="#projects">
                Explore projects
              </a>
              <a
                className="button ghost"
                href={`https://github.com/${USERNAME}`}
                target="_blank"
                rel="noreferrer"
              >
                github.com/{USERNAME} ↗
              </a>
            </div>

            <div className="metrics" aria-label="GitHub statistics">
              <div>
                <strong>{user.public_repos}</strong>
                <span>public repos</span>
              </div>
              <div>
                <strong>{user.followers}</strong>
                <span>followers</span>
              </div>
              <div>
                <strong>4</strong>
                <span>engineering domains</span>
              </div>
            </div>
          </div>

          <aside className="profile-card">
            <div className="profile-glow" />
            <img
              className="avatar"
              src={user.avatar_url}
              alt={`${user.name ?? user.login} avatar`}
            />
            <div className="profile-meta">
              <p className="mono">@{user.login}</p>
              <h2>{user.name ?? "Hossein Samadi"}</h2>
              <p>
                {user.bio ??
                  "Full-Stack Software Engineer building scalable systems and AI-powered software."}
              </p>
            </div>
            <div className="terminal">
              <div className="terminal-top">
                <i />
                <i />
                <i />
              </div>
              <code>
                <span>$ whoami</span>
                <b>software-engineer</b>
                <span>$ focus --current</span>
                <b>backend · ai · systems</b>
                <span>$ status</span>
                <b className="success">building_</b>
              </code>
            </div>
          </aside>
        </section>

        <section className="section container" id="about">
          <div className="section-heading">
            <span>01 / ABOUT</span>
            <h2>Engineering the whole system.</h2>
          </div>

          <div className="about-grid">
            <p className="lead">
              I work beyond individual features. I care about how APIs,
              databases, security, infrastructure, deployment, observability
              and performance fit together as one production system.
            </p>

            <div className="architecture-line" aria-label="Engineering lifecycle">
              {[
                "Architecture",
                "API",
                "Data",
                "Security",
                "CI/CD",
                "Observability",
                "Scale"
              ].map((item, index, arr) => (
                <div className="architecture-node" key={item}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <b>{item}</b>
                  {index < arr.length - 1 && <em>→</em>}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section container" id="stack">
          <div className="section-heading inline-heading">
            <div>
              <span>02 / STACK</span>
              <h2>Tools I build with.</h2>
            </div>
            <p>
              Technology is selected around the system, not the other way
              around.
            </p>
          </div>

          <div className="stack-grid">
            {stack.map((item, index) => (
              <div className="stack-item" key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="section container" id="projects">
          <div className="section-heading inline-heading">
            <div>
              <span>03 / PROJECTS</span>
              <h2>Selected GitHub work.</h2>
            </div>
            <a
              className="text-link"
              href={`https://github.com/${USERNAME}?tab=repositories`}
              target="_blank"
              rel="noreferrer"
            >
              All repositories ↗
            </a>
          </div>

          <div className="projects-grid">
            {visibleRepos.map((repo, index) => (
              <a
                className="project-card"
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
              >
                <div className="project-top">
                  <span className="project-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="project-arrow">↗</span>
                </div>
                <h3>{repo.name}</h3>
                <p>
                  {repo.description ??
                    "Software engineering project available on GitHub."}
                </p>

                <div className="project-footer">
                  <span>{repo.language ?? "Code"}</span>
                  <span>★ {repo.stargazers_count}</span>
                  <span>⑂ {repo.forks_count}</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="section container" id="focus">
          <div className="section-heading">
            <span>04 / ENGINEERING FOCUS</span>
            <h2>Where I'm going deeper.</h2>
          </div>

          <div className="focus-grid">
            {focus.map((item, index) => (
              <article className="focus-card" key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="cta-section container">
          <div>
            <span className="eyebrow plain">BUILD / LEARN / ITERATE</span>
            <h2>Build systems that can evolve.</h2>
          </div>
          <a
            className="button primary"
            href={`https://github.com/${USERNAME}`}
            target="_blank"
            rel="noreferrer"
          >
            View GitHub profile ↗
          </a>
        </section>
      </main>

      <footer className="footer container">
        <span>© {new Date().getFullYear()} Hossein Samadi</span>
        <span className="mono">aseknown.github.io</span>
      </footer>
    </div>
  );
}

export default App;
