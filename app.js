const content = {
  en: {
    nav: { experience: "Experience", work: "Work", skills: "Skills", contact: "Contact" },
    actions: { print: "Print résumé" },
    hero: {
      role: "Software Engineer · Backend",
      title: "I build backend systems that stay understandable as they grow.",
      summary: "Software Engineer at GreenBank, focused on Django, PostgreSQL, API design, authentication and authorization. I also work across deployment, CI/CD, system architecture and AI-assisted backend development."
    },
    sections: {
      experience: { label: "Experience", title: "Current role" },
      work: { label: "Selected work", title: "Professional and private projects", note: "Some production repositories are private, so the descriptions below focus on responsibilities and architecture." },
      auth: { label: "Security", title: "Authentication and authorization", note: "I treat authentication and authorization as separate layers: proving identity first, then evaluating what that identity may do." },
      skills: { label: "Skills", title: "Working stack" },
      github: { label: "Open source", title: "Public GitHub projects", note: "Projects are loaded from both my original and current GitHub accounts. Static fallbacks are shown if the GitHub API is unavailable." },
      contact: { label: "Contact", title: "Links" }
    },
    greenbank: {
      role: "Software Engineer",
      date: "Jul 2026 — Present",
      summary: "Backend engineering with Django and PostgreSQL, with emphasis on maintainable APIs, data models, access control and production reliability.",
      b1: "Design and implement backend APIs and domain logic in Django.",
      b2: "Model and optimize PostgreSQL data for operational and reporting workloads.",
      b3: "Implement authentication and layered authorization using roles, permissions, object-level checks and policy rules.",
      b4: "Work on CRM capabilities, reporting/KPI APIs, deployment workflows and backend architecture.",
      b5: "Use AI-assisted engineering workflows for implementation, review, documentation and multi-agent backend experiments."
    },
    previous: {
      title: "Earlier software work",
      type: "Full-stack / independent projects",
      summary: "Earlier work covers full-stack applications, API development, computer vision, local LLM tooling, security experiments and deployment work. Public projects remain available on my original GitHub account."
    },
    contact: { originalGithub: "Original GitHub", currentGithub: "Current GitHub" },
    footer: { line: "Backend software engineering · Django · PostgreSQL" },
    repo: { fallback: "Public GitHub repository.", statusLive: "Live repository data loaded from GitHub.", statusFallback: "GitHub API is unavailable right now; showing verified fallback projects." },
    work: [
      {
        title: "CRM Platform",
        body: "Backend work for CRM, reporting and operational workflows. Focus includes Django APIs, PostgreSQL data modeling, KPI/report endpoints, authentication, authorization and CI/CD.",
        tags: ["Django", "PostgreSQL", "RBAC", "APIs", "CI/CD"]
      },
      {
        title: "Kiosk Builder",
        body: "Application engineering for configurable kiosk experiences, backend integration and deployment-oriented workflows. Production implementation details are private.",
        tags: ["Product engineering", "Backend integration", "Deployment"]
      },
      {
        title: "Successo",
        body: "Backend/API and production deployment work, including service troubleshooting, API documentation access and Linux-hosted deployment issues.",
        tags: ["REST API", "Linux", "Deployment", "Operations"]
      },
      {
        title: "Multi-agent CRM orchestration",
        body: "Architecture work for adding agent orchestration to an existing backend while keeping task state, documentation, handoffs and implementation boundaries explicit.",
        tags: ["Agent orchestration", "Backend", "Architecture", "Documentation"]
      }
    ],
    auth: [
      { title: "RBAC", body: "Roles group permissions around organizational responsibilities. Useful when access maps cleanly to job functions and teams." },
      { title: "ABAC / policy rules", body: "Attribute-based or policy checks handle context that roles alone cannot express, such as ownership, tenant, resource state or request conditions." },
      { title: "Object-level authorization", body: "Permission checks are evaluated on the actual resource, not only at route level. This is important for tenant isolation and per-record access." },
      { title: "ACL / ReBAC concepts", body: "Access-control lists and relationship-based models are useful when permissions depend on explicit resource grants or relationships between users, teams and objects." },
      { title: "Authentication boundary", body: "Identity verification and session/token handling are kept separate from authorization decisions so each layer can be tested and audited independently." },
      { title: "Security principles", body: "Least privilege, deny by default, explicit permission checks, auditability, predictable failure modes and centralized policy logic." }
    ],
    skills: [
      { title: "Backend", body: "Python, Django, Django REST Framework, REST APIs, domain modeling, authentication, authorization" },
      { title: "Data", body: "PostgreSQL, relational modeling, query design, indexing, reporting and performance analysis" },
      { title: "Architecture", body: "Service boundaries, clean architecture, modular backends, API contracts, system design" },
      { title: "Delivery", body: "Docker, Linux, Git, GitHub Actions, GitLab CI/CD, deployment troubleshooting" },
      { title: "Frontend", body: "TypeScript, JavaScript, React, Next.js; enough full-stack experience to work across API/UI boundaries" },
      { title: "AI / engineering tools", body: "LLM applications, local model tooling, AI-assisted development, agentic and multi-agent backend workflows" }
    ]
  },
  fa: {
    nav: { experience: "تجربه", work: "پروژه‌ها", skills: "مهارت‌ها", contact: "ارتباط" },
    actions: { print: "چاپ رزومه" },
    hero: {
      role: "مهندس نرم‌افزار · بک‌اند",
      title: "سیستم‌های بک‌اندی می‌سازم که با بزرگ شدن، قابل فهم و قابل نگهداری بمانند.",
      summary: "مهندس نرم‌افزار در GreenBank با تمرکز بر Django، PostgreSQL، طراحی API، احراز هویت و مجوزدهی. در کنار بک‌اند روی استقرار، CI/CD، معماری سیستم و توسعه با کمک ابزارهای هوش مصنوعی نیز کار می‌کنم."
    },
    sections: {
      experience: { label: "تجربه", title: "موقعیت فعلی" },
      work: { label: "پروژه‌های منتخب", title: "کارهای حرفه‌ای و خصوصی", note: "بخشی از کدهای محیط تولید خصوصی هستند؛ بنابراین توضیحات این بخش روی مسئولیت‌ها و معماری تمرکز دارد." },
      auth: { label: "امنیت", title: "احراز هویت و مجوزدهی", note: "احراز هویت و مجوزدهی را دو لایه جدا در نظر می‌گیرم: ابتدا هویت مشخص می‌شود و سپس سطح دسترسی آن هویت ارزیابی می‌شود." },
      skills: { label: "مهارت‌ها", title: "فناوری‌های اصلی" },
      github: { label: "متن‌باز", title: "پروژه‌های عمومی GitHub", note: "پروژه‌ها از هر دو حساب قدیمی و فعلی GitHub بارگذاری می‌شوند. در صورت در دسترس نبودن API، اطلاعات ثابت نمایش داده می‌شود." },
      contact: { label: "ارتباط", title: "راه‌های ارتباطی" }
    },
    greenbank: {
      role: "مهندس نرم‌افزار",
      date: "تیر ۱۴۰۵ — اکنون",
      summary: "توسعه بک‌اند با Django و PostgreSQL با تمرکز بر APIهای قابل نگهداری، مدل داده، کنترل دسترسی و پایداری محیط تولید.",
      b1: "طراحی و پیاده‌سازی API و منطق دامنه با Django.",
      b2: "طراحی و بهینه‌سازی داده‌های PostgreSQL برای عملیات و گزارش‌گیری.",
      b3: "پیاده‌سازی احراز هویت و مجوزدهی چندلایه با نقش‌ها، permissionها، کنترل سطح شیء و policy ruleها.",
      b4: "توسعه قابلیت‌های CRM، APIهای گزارش و KPI، فرایندهای استقرار و معماری بک‌اند.",
      b5: "استفاده از فرایندهای توسعه با کمک AI برای پیاده‌سازی، بازبینی، مستندسازی و آزمایش معماری‌های multi-agent."
    },
    previous: {
      title: "فعالیت‌های نرم‌افزاری قبلی",
      type: "فول‌استک / پروژه‌های مستقل",
      summary: "فعالیت‌های قبلی شامل توسعه فول‌استک، API، بینایی ماشین، ابزارهای LLM محلی، آزمایش‌های امنیتی و استقرار سرویس‌ها بوده است. پروژه‌های عمومی در حساب GitHub قبلی من موجود هستند."
    },
    contact: { originalGithub: "GitHub قبلی", currentGithub: "GitHub فعلی" },
    footer: { line: "مهندسی بک‌اند · Django · PostgreSQL" },
    repo: { fallback: "مخزن عمومی GitHub.", statusLive: "اطلاعات مخازن مستقیماً از GitHub بارگذاری شد.", statusFallback: "API گیت‌هاب در دسترس نیست؛ پروژه‌های تاییدشده ثابت نمایش داده می‌شوند." },
    work: [
      {
        title: "پلتفرم CRM",
        body: "توسعه بک‌اند برای CRM، گزارش‌گیری و فرایندهای عملیاتی. تمرکز روی APIهای Django، مدل داده PostgreSQL، endpointهای KPI و گزارش، احراز هویت، مجوزدهی و CI/CD است.",
        tags: ["Django", "PostgreSQL", "RBAC", "API", "CI/CD"]
      },
      {
        title: "Kiosk Builder",
        body: "توسعه نرم‌افزار برای تجربه‌های kiosk قابل پیکربندی، اتصال به بک‌اند و فرایندهای مرتبط با استقرار. جزئیات محیط تولید خصوصی است.",
        tags: ["مهندسی محصول", "اتصال بک‌اند", "استقرار"]
      },
      {
        title: "Successo",
        body: "کار روی بک‌اند/API و استقرار محیط تولید، شامل عیب‌یابی سرویس، دسترسی مستندات API و مسائل استقرار روی Linux.",
        tags: ["REST API", "Linux", "استقرار", "عملیات"]
      },
      {
        title: "ارکستریشن چندعاملی CRM",
        body: "طراحی معماری برای اضافه کردن ارکستریشن agentها به یک بک‌اند موجود، همراه با state، مستندات، handoff و مرزبندی روشن مسئولیت‌ها.",
        tags: ["Agent orchestration", "Backend", "Architecture", "Documentation"]
      }
    ],
    auth: [
      { title: "RBAC", body: "دسترسی‌ها بر اساس نقش و مسئولیت سازمانی گروه‌بندی می‌شوند. برای ساختارهایی مناسب است که نقش‌های شغلی مرز مشخصی دارند." },
      { title: "ABAC / Policy", body: "برای تصمیم‌هایی که فقط با نقش قابل بیان نیستند، از ویژگی‌های کاربر، tenant، منبع، وضعیت منبع یا context درخواست استفاده می‌شود." },
      { title: "Object-level authorization", body: "دسترسی روی خود رکورد یا منبع بررسی می‌شود، نه فقط روی route. این موضوع برای tenant isolation و دسترسی رکوردی مهم است." },
      { title: "ACL / ReBAC", body: "وقتی مجوز به grant مستقیم روی منبع یا رابطه بین کاربر، تیم و object وابسته باشد، ACL یا مدل‌های relationship-based مناسب‌تر هستند." },
      { title: "مرز Authentication", body: "تشخیص هویت و مدیریت session/token از تصمیم مجوزدهی جدا نگه داشته می‌شود تا هر لایه مستقل قابل تست و audit باشد." },
      { title: "اصول امنیتی", body: "Least privilege، deny by default، permission check صریح، قابلیت audit، خطاهای قابل پیش‌بینی و policy logic متمرکز." }
    ],
    skills: [
      { title: "Backend", body: "Python، Django، Django REST Framework، REST API، domain modeling، authentication و authorization" },
      { title: "Data", body: "PostgreSQL، مدل‌سازی رابطه‌ای، طراحی query، index، گزارش‌گیری و تحلیل performance" },
      { title: "Architecture", body: "مرزبندی سرویس‌ها، clean architecture، بک‌اند modular، قرارداد API و system design" },
      { title: "Delivery", body: "Docker، Linux، Git، GitHub Actions، GitLab CI/CD و عیب‌یابی استقرار" },
      { title: "Frontend", body: "TypeScript، JavaScript، React و Next.js؛ تجربه کافی فول‌استک برای کار روی مرز API و UI" },
      { title: "AI / ابزارهای مهندسی", body: "LLM application، ابزارهای مدل محلی، توسعه با کمک AI و workflowهای agentic و multi-agent" }
    ]
  }
};

const fallbackRepos = [
  {
    name: "greenProof",
    owner: "hosseinsam",
    html_url: "https://github.com/hosseinsam/greenProof",
    description: "Environmental-impact verification platform with full-stack workflows and PostgreSQL-backed services.",
    language: "TypeScript",
    stargazers_count: 0,
    fork: false,
    archived: false
  },
  {
    name: "ollama-gui",
    owner: "hosseinsam",
    html_url: "https://github.com/hosseinsam/ollama-gui",
    description: "Web interface for interacting with locally running Ollama and LLM models.",
    language: "TypeScript",
    stargazers_count: 1,
    fork: false,
    archived: false
  },
  {
    name: "pqc-jwt-starter",
    owner: "hosseinsam",
    html_url: "https://github.com/hosseinsam/pqc-jwt-starter",
    description: "JWT authentication starter exploring post-quantum cryptography concepts.",
    language: "TypeScript",
    stargazers_count: 1,
    fork: false,
    archived: false
  },
  {
    name: "pawgatoFrontWithDarkmode",
    owner: "hosseinsam",
    html_url: "https://github.com/hosseinsam/pawgatoFrontWithDarkmode",
    description: "Frontend project with dark-mode support.",
    language: "TypeScript",
    stargazers_count: 0,
    fork: false,
    archived: false
  },
  {
    name: "Computer-Vision-color-spaces",
    owner: "hosseinsam",
    html_url: "https://github.com/hosseinsam/Computer-Vision-color-spaces",
    description: "Computer-vision experiments for image processing and color-space analysis.",
    language: "Python",
    stargazers_count: 0,
    fork: false,
    archived: false
  },
  {
    name: "irtunel-heavy-Equipments-market-place",
    owner: "hosseinsam",
    html_url: "https://github.com/hosseinsam/irtunel-heavy-Equipments-market-place",
    description: "Full-stack heavy-equipment marketplace developed as a bachelor final project.",
    language: "JavaScript",
    stargazers_count: 0,
    fork: false,
    archived: false
  },
  {
    name: "telegram-order-miniapp",
    owner: "aseknown",
    html_url: "https://github.com/aseknown/telegram-order-miniapp",
    description: "Telegram Mini App and API for an order workflow deployed on Cloudflare Pages.",
    language: "JavaScript",
    stargazers_count: 0,
    fork: false,
    archived: false
  }
];

let language = localStorage.getItem("portfolio-language") || "en";
if (!content[language]) language = "en";

function getPath(obj, path) {
  return path.split(".").reduce((value, key) => value?.[key], obj);
}

function applyLanguage() {
  const strings = content[language];
  document.documentElement.lang = language;
  document.documentElement.dir = language === "fa" ? "rtl" : "ltr";
  document.getElementById("languageButton").textContent = language === "en" ? "FA" : "EN";
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = getPath(strings, element.dataset.i18n);
    if (typeof value === "string") element.textContent = value;
  });
  renderProfessionalWork();
  renderAuthorization();
  renderSkills();
  renderRepos(currentRepos, repoMode);
  localStorage.setItem("portfolio-language", language);
}

function renderProfessionalWork() {
  const root = document.getElementById("professionalWork");
  root.innerHTML = content[language].work.map((item) => `
    <article class="work-row">
      <h3>${escapeHtml(item.title)}</h3>
      <p>${escapeHtml(item.body)}</p>
      <div class="work-tags">${item.tags.map(tag => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}</div>
    </article>
  `).join("");
}

function renderAuthorization() {
  const root = document.getElementById("authGrid");
  root.innerHTML = content[language].auth.map((item) => `
    <article class="auth-item">
      <h3>${escapeHtml(item.title)}</h3>
      <p>${escapeHtml(item.body)}</p>
    </article>
  `).join("");
}

function renderSkills() {
  const root = document.getElementById("skillsGrid");
  root.innerHTML = content[language].skills.map((item) => `
    <article class="skill-group">
      <h3>${escapeHtml(item.title)}</h3>
      <p>${escapeHtml(item.body)}</p>
    </article>
  `).join("");
}

function normalizeRepo(repo) {
  return {
    name: repo.name,
    owner: repo.owner?.login || repo.owner || "github",
    html_url: repo.html_url,
    description: repo.description,
    language: repo.language,
    stargazers_count: repo.stargazers_count || 0,
    fork: Boolean(repo.fork),
    archived: Boolean(repo.archived),
    updated_at: repo.updated_at || ""
  };
}

function repoKey(repo) {
  return `${repo.owner}/${repo.name}`.toLowerCase();
}

function renderRepos(repos, mode = "fallback") {
  const strings = content[language].repo;
  const root = document.getElementById("repoList");
  const status = document.getElementById("repoStatus");
  root.innerHTML = repos.map((repo) => `
    <a class="repo-row" href="${escapeAttr(repo.html_url)}" target="_blank" rel="noreferrer">
      <h3>${escapeHtml(repo.name)}<span class="repo-owner">${escapeHtml(repo.owner)}</span></h3>
      <p>${escapeHtml(repo.description || strings.fallback)}</p>
      <div class="repo-meta">
        ${repo.language ? `<span class="tag">${escapeHtml(repo.language)}</span>` : ""}
        ${repo.stargazers_count ? `<span class="tag">${repo.stargazers_count} star${repo.stargazers_count === 1 ? "" : "s"}</span>` : ""}
      </div>
    </a>
  `).join("");
  status.textContent = mode === "live" ? strings.statusLive : strings.statusFallback;
}

async function loadGitHubRepos() {
  const users = ["hosseinsam", "aseknown"];
  try {
    const results = await Promise.all(users.map(async (user) => {
      const response = await fetch(`https://api.github.com/users/${user}/repos?sort=updated&per_page=100`, {
        headers: { Accept: "application/vnd.github+json" }
      });
      if (!response.ok) throw new Error(`GitHub ${response.status}`);
      const data = await response.json();
      return data.map(normalizeRepo);
    }));

    const excludedProfileRepos = new Set(["aseknown/aseknown"]);
    const map = new Map();
    results.flat()
      .filter(repo => !repo.fork && !repo.archived && !excludedProfileRepos.has(repoKey(repo)))
      .forEach(repo => map.set(repoKey(repo), repo));

    const repos = [...map.values()].sort((a, b) => (b.updated_at || "").localeCompare(a.updated_at || ""));
    if (repos.length) {
      currentRepos = repos;
      repoMode = "live";
      renderRepos(currentRepos, repoMode);
    }
  } catch {
    currentRepos = fallbackRepos;
    repoMode = "fallback";
    renderRepos(currentRepos, repoMode);
  }
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttr(value) {
  return escapeHtml(value);
}

let currentRepos = fallbackRepos;
let repoMode = "fallback";

document.getElementById("languageButton").addEventListener("click", () => {
  language = language === "en" ? "fa" : "en";
  applyLanguage();
});

document.getElementById("printButton").addEventListener("click", () => window.print());
document.getElementById("year").textContent = new Date().getFullYear();

applyLanguage();
loadGitHubRepos();
