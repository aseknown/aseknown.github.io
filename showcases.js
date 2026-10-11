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
  const caseStudyCard = (item) => {
    const study = item.caseStudy;
    const points = (study.points || []).map((point) => `<li><strong>${escapeHtml(point.title)}</strong> ${escapeHtml(point.body)}</li>`).join('');
    return `<article class="showcase-card case-study" id="greenproof" data-project-theme="greenproof">
      <div class="project-preview">
        <div class="preview-toolbar" aria-hidden="true"><span class="browser-dots">● ● ●</span><span>${escapeHtml(en ? 'Pre-launch' : 'پیش از انتشار')}</span><span>${escapeHtml(en ? 'Case study' : 'مطالعه موردی')}</span></div>
        <div class="preview-image"><img src="${escapeAttr(item.image)}" alt="${escapeAttr(study.title)}" loading="lazy" decoding="async" width="960" height="540" /><span class="preview-fallback" hidden>${escapeHtml(item.title)}</span></div>
        <span class="preview-caption">${escapeHtml(en ? 'Project illustration' : 'تصویر مفهومی پروژه')}</span>
      </div>
      <div class="showcase-body">
        <p class="kicker">${escapeHtml(en ? 'Case study · Founder' : 'مطالعه موردی · بنیان‌گذار')}</p>
        <h3 class="project-title">${projectMark('leaf')}${escapeHtml(study.title)}</h3>
        <p class="publication-status">${escapeHtml(study.status)}</p>
        <p>${escapeHtml(study.summary)}</p>
        <p><strong>${escapeHtml(en ? 'My role. ' : 'نقش من. ')}</strong>${escapeHtml(study.role)}</p>
        <ul class="decision-list">${points}</ul>
        <p class="stack-line"><strong>${escapeHtml(en ? 'Stack' : 'فناوری')}:</strong> ${escapeHtml(study.stack)}</p>
        <p class="publication-status">${escapeHtml(study.statusNote)}</p>
      </div>
    </article>`;
  };
  const primaryLabel = (item, category) => en
    ? (new URL(item.url).hostname.includes('github.com') ? 'View project code' : category === 'Personal project' ? 'Explore app' : 'Visit website')
    : 'مشاهده پروژه';
  const projectCard = (item, category) => `
    <article class="showcase-card" data-project-theme="${projectIdentity(item.url)[1]}">${projectPreview(item,projectIdentity(item.url)[1],en)}<div class="showcase-body"><p class="kicker">${escapeHtml(category)}</p><h3 class="project-title">${projectMark(projectIdentity(item.url)[0])}${escapeHtml(item.title)}</h3><p>${escapeHtml(item.body)}</p>${item.tags ? '<div class="work-tags">'+item.tags.map(tag => '<span class="tag">'+escapeHtml(tag)+'</span>').join('')+'</div>' : ''}<div class="showcase-actions">${link(item.url,primaryLabel(item,category))}${item.secondaryUrl ? link(item.secondaryUrl,en ? 'Open in Telegram' : 'باز کردن در تلگرام') : ''}${item.code ? link(item.code,en ? 'View frontend code' : 'مشاهده کد فرانت‌اند') : ''}</div></div></article>`;
  const c = content[language];
  document.getElementById('freelanceProjects').innerHTML = c.freelance.map(item => projectCard(item,en ? 'Freelance · Client project' : 'فریلنس · پروژه مشتری')).join('');
  const featured = c.personal.filter((item) => item.featured && item.caseStudy);
  const rest = c.personal.filter((item) => !(item.featured && item.caseStudy));
  document.getElementById('showcaseGrid').innerHTML = featured.map((item) => caseStudyCard(item)).join('') + rest.map(item => projectCard(item,en ? 'Personal project' : 'پروژه شخصی')).join('');
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
    <header><h1>Hossein Samadi</h1><p class="resume-role">Backend Engineer — Django, PostgreSQL, API Security</p><div class="resume-contact"><a href="mailto:hosseinsamadi22@gmail.com">hosseinsamadi22@gmail.com</a> · <a href="https://www.linkedin.com/in/hosseinesamadi/">linkedin.com/in/hosseinesamadi</a><br><a href="https://github.com/aseknown">github.com/aseknown</a> · <a href="https://aseknown.github.io/">aseknown.github.io</a></div></header>
    <section><h2>Profile</h2><p>Backend engineer with five years of product experience in Python/Django and PostgreSQL. Specialized in secure API design, authorization and data integrity, with tests for failure paths. Founder of GreenProof, a pre-launch verification platform, where I designed the data model, security model and verification rules. Seeking a senior backend role, remote or in Iran.</p></section>
    <section><h2>Technical skills</h2><p><strong>Backend:</strong> Python · Django · Django REST Framework · PostgreSQL · REST APIs · CQRS<br><strong>Security:</strong> Authentication · RBAC · SSO · Data isolation · Input validation<br><strong>Quality:</strong> Failure-path tests · GitHub Actions · GitLab CI · Docker · Git · Linux<br><strong>Also:</strong> TypeScript · React · Redux · C# · Cloudflare</p></section>
    <section><h2>Professional experience</h2>
      <div class="resume-job"><div class="resume-job-heading"><h3>Greenbank — Software Engineer — Backend</h3><span>Jun 2026 — Present</span></div><ul><li>Build REST APIs with Django and Django REST Framework, using explicit transactions and CQRS-style handlers.</li><li>Own tenant isolation, SSO and role- and policy-based authorization, with tests for permissions and failure paths.</li><li>Deliver private file workflows, SLA reporting and export processing for large date ranges.</li></ul><p>Stack: Python, Django, Django REST Framework, PostgreSQL</p></div>
      <div class="resume-job"><div class="resume-job-heading"><h3>NOBKA — Software Engineer</h3><span>2021 — Jun 2026</span></div><ul><li>Built React/Redux device-administration interfaces with reusable components and feature-based API integration.</li><li>Developed a TypeScript/React messenger extension with Manifest V3 and backend key-change validation.</li><li>Built a C# file manager for encrypted serial communication and byte-level device transfers.</li><li>Turned permission models into workflows for VoIP, LTE modem, attendance, smart-home and IoT/MQTT products.</li></ul><p>Stack: JavaScript, TypeScript, React, Redux, C#</p></div>
    </section>
    <section><h2>Selected project</h2><p><strong>GreenProof</strong> — Pre-launch nature-impact verification platform. Evidence-first data model, append-only non-transferable points ledger, and a security review recorded before launch. Not accepting payments. Pilot planning in Belgium and the Netherlands. Stack: TypeScript, NestJS, PostgreSQL, Prisma.</p></section>
    <section><h2>Education</h2><p><strong>Zanjan University</strong> · 2017–2022<br>University projects: Flutter/Firebase commerce application, YOLO street-sign recognition, LSTM forecasting and a MERN auction marketplace.</p></section>`;
}
