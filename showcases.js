// Set the public HTTPS URL here when Greenbank is published.
const showcaseLinks = {
  telegram: 'https://t.me/aseknownbot?start=_tgr_oEYKXkEyZmNk',
  web: 'https://telegram-order-shop.pages.dev/?lang=fa',
  greenbank: null,
};

function publicLink(url) {
  try { return new URL(url).protocol === 'https:' ? url : null; }
  catch { return null; }
}

// Custom visual marks, rather than third-party brand logos.
function projectIdentity(url) {
  const identities = {
    'drmostafavidiet.ir': ['health', 'health'], 'autozafar.ir': ['auto', 'auto'],
    'k1system.ir': ['audio', 'audio'], 'sallivanstore.ir': ['store', 'store'],
    'shinemakeup.ir': ['beauty', 'beauty'], 'bamipet.com': ['pet', 'pet'],
    'pawgato.com': ['pet', 'pawgato'], 'titime.ir': ['clock', 'clock'],
    'smart.nobka.ir': ['home', 'home'],
    'successomag.ir': ['terminal', 'successo'],
    'telegram-order-shop.pages.dev': ['plane', 'telegram'],
  };
  const host = new URL(url).hostname;
  if (identities[host]) return identities[host];
  if (url.includes('/greenProof')) return ['leaf', 'greenproof'];
  if (url.includes('/ollama-gui')) return ['terminal', 'ollama'];
  if (url.includes('/pqc-jwt-starter')) return ['shield', 'pqc'];
  return ['layers', 'greenproof'];
}

function projectMark(icon) {
  return `<span class="project-mark" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><use href="./assets/project-marks.svg#${icon}" /></svg></span>`;
}

function projectPreview(item, illustration, en) {
  const label = item.image ? (en ? 'Website screenshot' : 'تصویر وب‌سایت') : (en ? 'Project illustration' : 'تصویر مفهومی پروژه');
  return `<a class="project-preview" href="${escapeAttr(item.url)}" target="_blank" rel="noopener noreferrer" aria-label="${escapeAttr((en ? 'Explore ' : 'مشاهده ') + item.title)}">
    <div class="preview-toolbar" aria-hidden="true"><span class="browser-dots">● ● ●</span><span>${escapeHtml(new URL(item.url).hostname)}</span><span>↗</span></div>
    <div class="preview-image"><img src="${escapeAttr(item.image || './assets/illustrations/'+illustration+'.svg')}" alt="${escapeAttr(item.title+' — '+label)}" loading="lazy" decoding="async" width="960" height="540" ${item.image?.includes('/previews/') ? `data-original-preview="${escapeAttr('https://hosseinsam.github.io/assets/'+item.image.split('/').pop())}"` : ''}/><span class="preview-fallback" hidden>${escapeHtml(item.title)}</span></div><span class="preview-caption">${escapeHtml(label)}</span>
  </a>`;
}

function renderShowcases() {
  const en = language === 'en';

  const link = (url, label) => `<a class="showcase-link" href="${escapeAttr(url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)} <span aria-hidden="true">↗</span></a>`;
  document.getElementById('showcaseGrid').innerHTML = '';
  const primaryLabel = (item, category) => en
    ? (new URL(item.url).hostname.includes('github.com') ? 'View project code' : category === 'Personal project' ? 'Explore app' : 'Visit website')
    : 'مشاهده پروژه';
  const projectCard = (item, category) => `
    <article class="showcase-card" data-project-theme="${projectIdentity(item.url)[1]}">${projectPreview(item,projectIdentity(item.url)[1],en)}<div class="showcase-body"><p class="kicker">${escapeHtml(category)}</p><h3 class="project-title">${projectMark(projectIdentity(item.url)[0])}${escapeHtml(item.title)}</h3><p>${escapeHtml(item.body)}</p>${item.tags ? '<div class="work-tags">'+item.tags.map(tag => '<span class="tag">'+escapeHtml(tag)+'</span>').join('')+'</div>' : ''}<div class="showcase-actions">${link(item.url,primaryLabel(item,category))}${item.secondaryUrl ? link(item.secondaryUrl,en ? 'Open in Telegram' : 'باز کردن در تلگرام') : ''}${item.code ? link(item.code,en ? 'View frontend code' : 'مشاهده کد فرانت‌اند') : ''}</div></div></article>`;
  const c = content[language];
  document.getElementById('freelanceProjects').innerHTML = c.freelance.map(item => projectCard(item,en ? 'Freelance · Client project' : 'فریلنس · پروژه مشتری')).join('');
  document.getElementById('showcaseGrid').innerHTML = c.personal.map(item => projectCard(item,en ? 'Personal project' : 'پروژه شخصی')).join('');
  document.getElementById('employerProducts').innerHTML = c.employerProducts.map(item => projectCard(item,en ? 'NOBKA · Employer product' : 'NOBKA · محصول سازمانی')).join('');

  document.querySelectorAll('.project-preview img').forEach(image => {
    image.addEventListener('error', () => {
      if (image.dataset.originalPreview) {
        const original = image.dataset.originalPreview;
        delete image.dataset.originalPreview;
        image.src = original;
      } else {
        image.hidden = true;
        image.nextElementSibling.hidden = false;
      }
    });
  });

}

function renderResume() {
  const c = content.en;
  document.getElementById('resume').innerHTML = `
    <header><h1>Hossein Samadi</h1><p class="resume-role">Software Engineer — Backend (Python/Django)</p><div class="resume-contact"><a href="mailto:hosseinsamadi22@gmail.com">hosseinsamadi22@gmail.com</a> · <a href="https://www.linkedin.com/in/hosseinesamadi/">linkedin.com/in/hosseinesamadi</a><br><a href="https://github.com/aseknown">github.com/aseknown</a> · <a href="https://aseknown.github.io/">aseknown.github.io</a></div></header>
    <section><h2>Profile</h2><p>Software engineer with five years of product engineering experience building business backends, device administration tools, browser applications, desktop integrations, marketplaces and operational workflows. I work flexibly across architecture, APIs, data, security, frontend integration and delivery, with a current focus on modular Python/Django systems and AI-assisted engineering.</p></section>
    <section><h2>Technical skills</h2><p><strong>Backend:</strong> Python · Django · Django REST Framework · REST APIs · CQRS<br><strong>Data:</strong> PostgreSQL · SQL · NoSQL · Document stores · Key-value data models<br><strong>Security:</strong> Multi-Tenancy · SSO · RBAC · Policy rules · Object permissions<br><strong>Engineering:</strong> Automated Testing · Git · Docker · Linux · CI/CD<br><strong>Additional:</strong> TypeScript · JavaScript · React · Redux · C#</p></section>
    <section><h2>Professional experience</h2>
      <div class="resume-job"><div class="resume-job-heading"><h3>Greenbank — Software Engineer — Backend (Python/Django)</h3><span>Jun 2026 — Present</span></div><ul><li>Build REST APIs and transactional domain workflows with Django, Django REST Framework and CQRS patterns.</li><li>Implement multi-tenant isolation, SSO and centralised role- and policy-based authorisation.</li><li>Deliver private file workflows, support/SLA reporting and performance improvements for large exports.</li></ul></div>
      <div class="resume-job"><div class="resume-job-heading"><h3>NOBKA — Software Engineer</h3><span>2021 — Jun 2026</span></div><ul><li>Built responsive device-administration interfaces with React, Redux, reusable components and feature-based API integrations.</li><li>Developed a TypeScript/React browser messenger extension with Manifest V3 and backend validation flows.</li><li>Built a C# file manager for encrypted serial communication and byte-level device transfers.</li><li>Contributed to VoIP, LTE modem, attendance, smart-home, IoT/MQTT and augmented-reality products.</li><li>Translated product use cases and permission models into maintainable interfaces and operational workflows.</li></ul></div>
    </section>
    <section><h2>Selected project</h2><p><strong>Telegram Order Shop</strong> — Telegram Mini App with an API and D1-backed order workflow on Cloudflare Pages. <a href="https://telegram-order-shop.pages.dev/?lang=fa">telegram-order-shop.pages.dev</a></p></section>
    <section><h2>Education</h2><p><strong>Zanjan University</strong> · 2017–2022<br>University projects: Flutter/Firebase commerce application, YOLO street-sign recognition, LSTM forecasting and a MERN auction marketplace.</p></section>`;
}
