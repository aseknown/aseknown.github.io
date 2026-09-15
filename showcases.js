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

function renderShowcases() {
  const en = language === 'en';
  const greenbank = publicLink(showcaseLinks.greenbank);
  const link = (url, label) => `<a class="showcase-link" href="${escapeAttr(url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)} <span aria-hidden="true">↗</span></a>`;
  document.getElementById('showcaseGrid').innerHTML = `
    <article class="showcase-card">
      <div class="showcase-visual telegram-visual" aria-hidden="true"><span class="product-symbol">↗</span><span>TELEGRAM / MINI APP</span><strong>Discover.<br>Shop. Order.</strong><small>Cloudflare Pages · API · D1</small></div>
      <div class="showcase-body"><p class="kicker">${en ? 'Personal project · Explore now' : 'پروژه شخصی · قابل مشاهده'}</p><h3>${en ? 'Telegram Order Shop' : 'فروشگاه سفارش تلگرام'}</h3><p>${en ? 'A Telegram Mini App for browsing shops and products, with an API and D1-backed order workflow on Cloudflare Pages.' : 'مینی‌اپ تلگرام برای مرور فروشگاه‌ها و محصولات، همراه با API و گردش‌کار سفارش مبتنی بر D1 روی Cloudflare Pages.'}</p><div class="showcase-actions">${link(showcaseLinks.telegram,en ? 'Open in Telegram' : 'باز کردن در تلگرام')}${link(showcaseLinks.web,en ? 'Explore web app' : 'مشاهده نسخه وب')}</div></div>
    </article>`;
  document.getElementById('professionalShowcase').innerHTML = `
    <article class="showcase-card">
      <div class="showcase-visual crm-visual" aria-hidden="true"><span class="product-symbol">{ }</span><span>GREENBANK / ENGINEERING</span><strong>One platform.<br>Isolated tenants.</strong><small>Python · Django · REST APIs</small></div>
      <div class="showcase-body"><p class="kicker">${en ? 'Professional work · Modular CRM' : 'پروژه حرفه‌ای · CRM ماژولار'}</p><h3>Greenbank</h3><p>${en ? 'CRM backend for customer service, workforce management and business reporting. Tenant isolation, SSO, policy-based permissions, private attachments and SLA reporting form the core engineering scope.' : 'بک‌اند CRM برای خدمات مشتری، مدیریت نیروی کار و گزارش کسب‌وکار؛ با جداسازی tenant، SSO، مجوزدهی مبتنی بر policy، پیوست خصوصی و گزارش SLA.'}</p><div class="showcase-actions">${greenbank ? link(greenbank,en ? 'Explore Greenbank' : 'مشاهده Greenbank') : `<span class="publication-status">${en ? 'Public link pending publication' : 'لینک عمومی پس از انتشار'}</span>`}<a class="showcase-link" href="#experience">${en ? 'View engineering experience' : 'مشاهده تجربه مهندسی'} ↓</a></div></div>
    </article>`;

  const projectCard = (item, category) => `
    <article class="showcase-card"><div class="showcase-body"><p class="kicker">${escapeHtml(category)}</p><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.body)}</p>${item.tags ? '<div class="work-tags">'+item.tags.map(tag => '<span class="tag">'+escapeHtml(tag)+'</span>').join('')+'</div>' : ''}<div class="showcase-actions">${link(item.url, en ? (category === 'Personal project' ? 'View project code' : 'Visit website') : 'مشاهده پروژه')}${item.code ? link(item.code,en ? 'View frontend code' : 'مشاهده کد فرانت‌اند') : ''}</div></div></article>`;
  const c = content[language];
  document.getElementById('freelanceProjects').innerHTML = c.freelance.map(item => projectCard(item,en ? 'Freelance · Client project' : 'فریلنس · پروژه مشتری')).join('');
  document.getElementById('showcaseGrid').innerHTML += c.personal.map(item => projectCard(item,en ? 'Personal project' : 'پروژه شخصی')).join('');
  document.getElementById('employerProducts').innerHTML = c.employerProducts.map(item => projectCard(item,en ? 'NOBKA · Employer product' : 'NOBKA · محصول سازمانی')).join('');

}

function renderResume() {
  const c = content.en;
  document.getElementById('resume').innerHTML = `
    <header><h1>Hossein Samadi</h1><p class="resume-role">Software Engineer — Backend (Python/Django)</p><div class="resume-contact"><a href="mailto:hosseinsamadi22@gmail.com">hosseinsamadi22@gmail.com</a> · <a href="https://www.linkedin.com/in/hosseinesamadi/">linkedin.com/in/hosseinesamadi</a><br><a href="https://github.com/aseknown">github.com/aseknown</a> · <a href="https://aseknown.github.io/">aseknown.github.io</a></div></header>
    <section><h2>Profile</h2><p>Software engineer building modular Python/Django backends for customer service, workforce management and reporting. Focused on multi-tenant data isolation, secure APIs and centralised authorisation, with earlier React/TypeScript and C# engineering experience.</p></section>
    <section><h2>Technical skills</h2><p><strong>Backend:</strong> Python · Django · Django REST Framework · REST APIs · CQRS<br><strong>Data & security:</strong> PostgreSQL · SQL · Multi-Tenancy · SSO · RBAC · Resource permissions<br><strong>Engineering:</strong> Automated Testing · Git · Docker · Linux · CI/CD<br><strong>Additional:</strong> TypeScript · JavaScript · React · Redux · C#</p></section>
    <section><h2>Professional experience</h2>${c.experience.map(job => `<div class="resume-job"><div class="resume-job-heading"><h3>${escapeHtml(job.company)} — ${escapeHtml(job.role)}</h3><span>${escapeHtml(job.date)}</span></div>${job.company === 'Greenbank' ? `<p>${escapeHtml(job.summary)}</p>` : ''}<ul>${job.bullets.map(b => `<li>${escapeHtml(b)}</li>`).join('')}</ul></div>`).join('')}</section>
    <section><h2>Selected project</h2><p><strong>Telegram Order Shop</strong> — Telegram Mini App with an API and D1-backed order workflow on Cloudflare Pages. <a href="https://telegram-order-shop.pages.dev/?lang=fa">telegram-order-shop.pages.dev</a></p></section>
    <section><h2>Education</h2><p><strong>Zanjan University</strong> · 2017–2022<br>University projects: Flutter/Firebase commerce application, YOLO street-sign recognition, LSTM forecasting and a MERN auction marketplace.</p></section>`;
}
