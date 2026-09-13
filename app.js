const content = {
  en: {
    nav: { about: "About", experience: "Experience", projects: "Projects", freelance: "Freelance", skills: "Skills", contact: "Contact" },
    actions: { print: "Print résumé", live: "Live preview" },
    hero: {
      role: "Software Engineer",
      title: "Full-stack background. Backend focus today.",
      summary: "I work as a software engineer across the stack. My current role at GreenBank is backend-focused, building Django and PostgreSQL systems, APIs, authentication and authorization. My earlier work spans frontend, desktop software, IoT, AR, e-commerce and full-stack products."
    },
    sections: {
      about: { label: "Profile", title: "Software engineer, not a single-stack title.", note: "I can work on frontend or backend when the product needs it. For the last two months my day-to-day work has been backend engineering, with Django and PostgreSQL as the core stack." },
      experience: { label: "Experience", title: "Professional work" },
      projects: { label: "Selected work", title: "Current and private projects", note: "Production repositories are not all public, so these entries describe the engineering scope rather than exposing private implementation details." },
      university: { label: "2017–2022", title: "University portfolio", note: "Projects completed during university, covering mobile development, computer vision, machine learning and full-stack web systems." },
      freelance: { label: "Freelance", title: "Web projects", note: "Projects from the original portfolio, preserved here with their public preview links." },
      auth: { label: "Backend security", title: "Authentication and authorization", note: "I keep identity verification separate from access decisions, then apply the authorization model that best fits the domain." },
      skills: { label: "Skills", title: "Working stack" },
      github: { label: "Public work", title: "GitHub repositories", note: "This section loads public repositories from both GitHub accounts. If GitHub is unavailable, a verified fallback list is shown." },
      contact: { label: "Contact", title: "Links" }
    },
    profile: [
      { title: "Current focus", body: "Backend engineering at GreenBank: Django, Django REST Framework, PostgreSQL, API design, data modeling, authentication, authorization and production delivery." },
      { title: "Engineering range", body: "Full-stack software engineering background across React/TypeScript, backend APIs, desktop C#, serial communication, MQTT/IoT, AR, WordPress, SEO and product UI/UX." },
      { title: "Education", body: "Zanjan University, 2017–2022. University work included mobile commerce, computer vision, LSTM forecasting and a MERN auction marketplace." }
    ],
    experience: [
      {
        company: "GreenBank",
        role: "Software Engineer — Backend focus",
        date: "Jul 2026 — Present",
        summary: "Current role focused on backend engineering for business systems and CRM-related services using Django and PostgreSQL.",
        bullets: [
          "Design and implement backend APIs and domain logic with Django and Django REST Framework.",
          "Model PostgreSQL data and work on query, reporting and KPI-oriented workloads.",
          "Implement authentication and authorization with clear separation between identity and access-control decisions.",
          "Apply RBAC, policy/attribute checks and object-level permission rules where the domain requires them.",
          "Work across CRM features, backend architecture, CI/CD, deployment and technical documentation."
        ]
      },
      {
        company: "NOBKA",
        role: "Software Engineer",
        date: "2021 — Jul 2026",
        summary: "Worked across frontend, desktop, IoT, AR, e-commerce and product engineering projects inside a holding company building different electronic and software products.",
        projects: [
          {
            title: "VOIP System",
            summary: "Admin interface for configuring a VoIP system.",
            bullets: [
              "Designed the admin-panel UI.",
              "Implemented the admin dashboard with HTML, CSS and JavaScript."
            ]
          },
          {
            title: "LTE Modem",
            summary: "Responsive administration dashboard for a modem product with a large configuration surface.",
            bullets: [
              "Implemented the responsive admin dashboard with React, Redux and Axios.",
              "Built reusable components such as radio controls, multiselects, inputs, menu buttons and loading states.",
              "Handled complex forms with redux-form and React hooks.",
              "Implemented product pages and nested sub-pages around individual device features.",
              "Separated API calls by feature to keep integrations easier to locate and change.",
              "Defined reducers for loading states and other shared application processes.",
              "Used Git for version control and maintained component-level documentation/comments."
            ]
          },
          {
            title: "Messenger Chrome Extension",
            summary: "Browser messenger application with end-to-end encryption requirements.",
            bullets: [
              "Designed the UI and UX for the messenger application.",
              "Implemented the frontend with TypeScript, React and Chrome Extension Manifest V3.",
              "Worked on SDK flows that validate user key changes and related actions through backend APIs."
            ]
          },
          {
            title: "AR Research",
            summary: "Research and prototypes for product marketing and augmented-reality experiences.",
            bullets: [
              "Prototyped browser-based AR marketing using AR.js to show controllable video on detected targets.",
              "Used Vuforia and Unity to implement a multi-target Android AR prototype.",
              "Prepared product objects in GLB format for AR usage."
            ]
          },
          {
            title: "FileManager",
            summary: "Desktop file manager communicating with an encrypted device over serial port.",
            bullets: [
              "Built the application in C# around encrypted serial-port communication.",
              "Contributed to command design for operations such as copy, encrypt and delete alongside VHDL development.",
              "Parsed serial output to display directories and files.",
              "Worked at byte level to read files from the device into Windows and write files back to the device.",
              "Implemented features including compression and key burning.",
              "Defined use cases, designed UX and implemented a keyboard-friendly file-manager UI."
            ]
          },
          {
            title: "SPARK",
            summary: "Parking-lot management product using MQTT for organizations and departments.",
            bullets: [
              "Categorized user privileges and extracted use cases for each user type.",
              "Designed application lifecycle diagrams in Microsoft Visio.",
              "Designed UX around each user's permission set."
            ]
          },
          {
            title: "smart.nobka",
            summary: "E-commerce and marketing work for NOBKA smart-home and IoT products.",
            bullets: [
              "Designed UX and UI for the website and implemented a responsive e-commerce experience.",
              "Prepared product specification structures and reusable product-image templates.",
              "Planned social-media, marketplace and advertising campaigns with dedicated landing pages and GIF banners.",
              "Implemented SEO on product pages with valid structured product schemas and connected Google SEO tooling.",
              "Recorded and edited product unboxing videos.",
              "Used web AR to connect target images to product-unboxing video experiences in the real world."
            ]
          },
          {
            title: "Titime",
            summary: "Attendance product using a cross-platform application and real-time location for presence verification.",
            bullets: [
              "Designed an SEO-oriented introduction website and implemented the responsive site with WordPress.",
              "Wrote tutorial scenarios and recorded separate guidance videos for users and administrators.",
              "Extracted product features and designed website banners with custom SVG illustrations.",
              "Designed catalog, banner and flyer material for APPEX 2024 in Tehran.",
              "Configured Google SEO tooling for the website."
            ]
          }
        ]
      }
    ],
    projects: [
      {
        title: "CRM Platform",
        body: "Backend development for CRM, reporting and operational workflows. Work includes Django APIs, PostgreSQL data models, reporting/KPI endpoints, permission-aware features and deployment pipelines.",
        tags: ["Django", "PostgreSQL", "REST API", "Permissions", "CI/CD"]
      },
      {
        title: "Authentication & Authorization",
        body: "Access-control implementation for enterprise application flows, separating authentication from authorization and combining role permissions with policy and object-level checks where needed.",
        tags: ["RBAC", "ABAC", "Object permissions", "Least privilege"]
      },
      {
        title: "Kiosk Builder",
        body: "Software engineering work around kiosk-builder functionality and integration with backend services. Production implementation details remain private.",
        tags: ["Product engineering", "Backend integration"]
      },
      {
        title: "Successo",
        body: "Backend/API and production deployment work for Successo services, including Linux-side service troubleshooting and API documentation availability.",
        tags: ["REST API", "Linux", "Deployment", "Operations"]
      },
      {
        title: "CRM Agent Orchestration",
        body: "Architecture work for adding multi-agent orchestration to an existing backend, including task state, handoffs, graph-style execution and documentation boundaries.",
        tags: ["Backend architecture", "Agents", "Orchestration", "Documentation"]
      }
    ],
    university: [
      { title: "Commerce application", body: "Mobile commerce application implemented with Flutter, Dart and Firebase." },
      { title: "Street-sign recognition", body: "Street-sign recognition project using the YOLO object-detection algorithm." },
      { title: "Market forecasting", body: "Market forecasting experiment using artificial intelligence and an LSTM model." },
      { title: "Auction marketplace", body: "Buying and selling application built around an auction core using the MERN stack." }
    ],
    freelance: [
      { title: "Online diet website", url: "https://drmostafavidiet.ir/", image: "https://hosseinsam.github.io/assets/dr-937a478e.png" },
      { title: "Titime Attendance system", url: "https://titime.ir/", image: "https://hosseinsam.github.io/assets/titime-4b78d651.png" },
      { title: "Auto parts store", url: "https://autozafar.ir/", image: "https://hosseinsam.github.io/assets/auto-ca490d1a.png" },
      { title: "Car audio system store", url: "https://k1system.ir/", image: "https://hosseinsam.github.io/assets/k1-f0aee7dd.png" },
      { title: "Sallivan Store", url: "https://sallivanstore.ir/", image: "https://hosseinsam.github.io/assets/sali-8b198acb.png" },
      { title: "ShineMakeup Store", url: "https://shinemakeup.ir/", image: "https://hosseinsam.github.io/assets/shine-74e4265e.png" },
      { title: "BamiPet Store", url: "https://bamipet.com/", image: "https://hosseinsam.github.io/assets/bami-37bf4a2e.png" },
      { title: "Pawgato", url: "https://pawgato.com/", image: "https://hosseinsam.github.io/assets/paw-218cc36a.png" },
      { title: "Smart home Store", url: "https://smart.nobka.ir/", image: "https://hosseinsam.github.io/assets/smart-e1dbe507.png" }
    ],
    auth: [
      { title: "Authentication boundary", body: "Identity, session or token validation is kept separate from authorization decisions so each layer can be tested and changed independently." },
      { title: "RBAC", body: "Permissions are grouped by organizational role when job responsibilities provide a stable access boundary." },
      { title: "ABAC / policy rules", body: "User, tenant, resource, request and domain attributes can be evaluated when role-only rules are not expressive enough." },
      { title: "Object-level authorization", body: "Permission checks can be evaluated on the specific record or resource, not only at route level. This is important for ownership and tenant isolation." },
      { title: "ACL / ReBAC", body: "Direct grants or relationship-based rules are useful when access depends on links between a user, team, organization and resource." },
      { title: "Security principles", body: "Least privilege, deny by default, explicit permission checks, centralized policy logic, predictable failures and auditable access decisions." }
    ],
    skills: [
      { title: "Backend", body: "Python, Django, Django REST Framework, REST APIs, domain modeling, authentication, authorization and backend architecture." },
      { title: "Data", body: "PostgreSQL, relational modeling, SQL/query design, indexes, reporting and performance-oriented data work." },
      { title: "Frontend", body: "JavaScript, TypeScript, React, Redux, Axios, HTML and CSS. Comfortable moving into frontend work when the product requires it." },
      { title: "Desktop / device integration", body: "C#, serial-port communication, byte-level file transfer, encrypted device workflows and collaboration around VHDL command design." },
      { title: "IoT / AR / product", body: "MQTT, AR.js, Vuforia, Unity, GLB assets, WordPress, SEO, structured product data and product-focused UX/UI." },
      { title: "Delivery", body: "Docker, Linux, Git, GitHub Actions, GitLab CI/CD, deployment troubleshooting and technical documentation." }
    ],
    contact: { currentGithub: "Current GitHub", originalGithub: "Original GitHub" },
    footer: { line: "Software engineering · full-stack background · backend focus" },
    repo: {
      fallback: "Public GitHub repository.",
      statusLive: "Public repositories loaded from GitHub.",
      statusFallback: "GitHub API is unavailable; showing the local fallback list.",
      fork: "Fork"
    }
  },

  fa: {
    nav: { about: "درباره", experience: "تجربه", projects: "پروژه‌ها", freelance: "فریلنس", skills: "مهارت‌ها", contact: "ارتباط" },
    actions: { print: "چاپ رزومه", live: "مشاهده سایت" },
    hero: {
      role: "مهندس نرم‌افزار",
      title: "تجربه فول‌استک، تمرکز فعلی روی بک‌اند.",
      summary: "به‌عنوان مهندس نرم‌افزار در بخش‌های مختلف محصول کار می‌کنم. نقش فعلی من در GreenBank روی بک‌اند متمرکز است و با Django، PostgreSQL، طراحی API، احراز هویت و مجوزدهی کار می‌کنم. تجربه قبلی من شامل فرانت‌اند، نرم‌افزار دسکتاپ، IoT، واقعیت افزوده، فروشگاه اینترنتی و محصولات فول‌استک است."
    },
    sections: {
      about: { label: "پروفایل", title: "مهندس نرم‌افزار، نه محدود به یک لایه.", note: "در صورت نیاز محصول می‌توانم در فرانت‌اند یا بک‌اند کار کنم. در دو ماه اخیر کار روزمره من بک‌اند بوده و Django و PostgreSQL هسته اصلی کار فعلی هستند." },
      experience: { label: "تجربه", title: "سوابق حرفه‌ای" },
      projects: { label: "کارهای منتخب", title: "پروژه‌های فعلی و خصوصی", note: "همه مخازن محیط تولید عمومی نیستند؛ بنابراین این بخش حوزه مهندسی را توضیح می‌دهد و وارد جزئیات خصوصی پیاده‌سازی نمی‌شود." },
      university: { label: "۲۰۱۷–۲۰۲۲", title: "پروژه‌های دانشگاه", note: "پروژه‌های دوره دانشگاه در حوزه موبایل، بینایی ماشین، یادگیری ماشین و سیستم‌های وب فول‌استک." },
      freelance: { label: "فریلنس", title: "پروژه‌های وب", note: "پروژه‌های موجود در پورتفولیوی قبلی همراه با لینک عمومی آن‌ها در این نسخه حفظ شده‌اند." },
      auth: { label: "امنیت بک‌اند", title: "احراز هویت و مجوزدهی", note: "تأیید هویت را از تصمیم دسترسی جدا نگه می‌دارم و بعد متناسب با دامنه از مدل مجوزدهی مناسب استفاده می‌کنم." },
      skills: { label: "مهارت‌ها", title: "فناوری‌های کاری" },
      github: { label: "کارهای عمومی", title: "مخازن GitHub", note: "این بخش مخازن عمومی را از هر دو حساب GitHub بارگذاری می‌کند. در صورت در دسترس نبودن GitHub، فهرست محلی نمایش داده می‌شود." },
      contact: { label: "ارتباط", title: "لینک‌ها" }
    },
    profile: [
      { title: "تمرکز فعلی", body: "مهندسی بک‌اند در GreenBank با Django، Django REST Framework، PostgreSQL، طراحی API، مدل داده، احراز هویت، مجوزدهی و استقرار محیط تولید." },
      { title: "دامنه تجربه", body: "تجربه فول‌استک در React/TypeScript، APIهای بک‌اند، دسکتاپ C#، ارتباط سریال، MQTT/IoT، AR، WordPress، SEO و طراحی محصول و UI/UX." },
      { title: "تحصیلات", body: "دانشگاه زنجان، ۲۰۱۷ تا ۲۰۲۲. پروژه‌های دانشگاه شامل تجارت موبایل، بینایی ماشین، پیش‌بینی LSTM و مارکت‌پلیس مزایده با MERN بوده است." }
    ],
    experience: [
      {
        company: "GreenBank",
        role: "مهندس نرم‌افزار — تمرکز بک‌اند",
        date: "تیر ۱۴۰۵ — اکنون",
        summary: "نقش فعلی با تمرکز بر توسعه بک‌اند سیستم‌های کسب‌وکار و سرویس‌های مرتبط با CRM با Django و PostgreSQL.",
        bullets: [
          "طراحی و پیاده‌سازی API و منطق دامنه با Django و Django REST Framework.",
          "مدل‌سازی داده در PostgreSQL و کار روی query، گزارش‌گیری و workloadهای مرتبط با KPI.",
          "پیاده‌سازی احراز هویت و مجوزدهی با جداسازی روشن هویت از تصمیم‌های کنترل دسترسی.",
          "استفاده از RBAC، policy/attribute check و مجوزدهی سطح object در صورت نیاز دامنه.",
          "کار روی قابلیت‌های CRM، معماری بک‌اند، CI/CD، استقرار و مستندات فنی."
        ]
      },
      {
        company: "NOBKA",
        role: "مهندس نرم‌افزار",
        date: "۲۰۲۱ — تیر ۱۴۰۵",
        summary: "فعالیت در پروژه‌های فرانت‌اند، دسکتاپ، IoT، AR، فروشگاه اینترنتی و مهندسی محصول در یک هلدینگ فعال در محصولات الکترونیکی و نرم‌افزاری.",
        projects: [
          {
            title: "VOIP System",
            summary: "پنل مدیریتی برای پیکربندی سیستم VoIP.",
            bullets: ["طراحی UI پنل مدیریت.", "پیاده‌سازی داشبورد با HTML، CSS و JavaScript."]
          },
          {
            title: "LTE Modem",
            summary: "داشبورد مدیریتی واکنش‌گرا برای محصول مودم با بخش‌های تنظیماتی متعدد.",
            bullets: [
              "پیاده‌سازی داشبورد با React، Redux و Axios.",
              "ساخت کامپوننت‌های قابل استفاده مجدد مانند Radio، Multiselect، Input، Menu Button و Loading.",
              "مدیریت فرم‌های پیچیده با redux-form و hookهای React.",
              "پیاده‌سازی صفحات هر قابلیت و زیرصفحه‌های مرتبط.",
              "تفکیک API callهای هر قابلیت برای نگهداری و تغییر آسان‌تر.",
              "تعریف reducerهای جدا برای loading و فرایندهای مشترک.",
              "استفاده از Git برای version control و مستندسازی کامپوننت‌ها."
            ]
          },
          {
            title: "Messenger Chrome Extension",
            summary: "پیام‌رسان مرورگر با نیازمندی رمزنگاری end-to-end.",
            bullets: [
              "طراحی UI و UX پیام‌رسان.",
              "پیاده‌سازی فرانت‌اند با TypeScript، React و Chrome Extension Manifest V3.",
              "کار روی جریان‌های SDK برای اعتبارسنجی تغییر کلید کاربران و عملیات مرتبط از طریق APIهای بک‌اند."
            ]
          },
          {
            title: "AR Research",
            summary: "تحقیق و نمونه‌سازی برای بازاریابی محصول با واقعیت افزوده.",
            bullets: [
              "نمونه‌سازی Web AR با AR.js برای نمایش ویدئوی قابل کنترل روی target مشخص.",
              "استفاده از Vuforia و Unity برای ساخت نمونه Android چند target.",
              "آماده‌سازی مدل‌های محصول با فرمت GLB."
            ]
          },
          {
            title: "FileManager",
            summary: "فایل‌منیجر دسکتاپ برای ارتباط با دستگاه رمزنگاری‌شده از طریق serial port.",
            bullets: [
              "پیاده‌سازی برنامه با C# و ارتباط serial رمزنگاری‌شده.",
              "همکاری در طراحی commandهایی مانند copy، encrypt و delete در کنار توسعه VHDL.",
              "parse کردن خروجی serial برای نمایش directory و file.",
              "کار در سطح byte برای خواندن فایل از دستگاه در Windows و نوشتن فایل روی دستگاه.",
              "پیاده‌سازی قابلیت‌هایی مانند compression و key burning.",
              "استخراج use case، طراحی UX و ساخت UI با hotkeyهای لازم برای فایل‌منیجر."
            ]
          },
          {
            title: "SPARK",
            summary: "محصول مدیریت پارکینگ سازمان‌ها و دپارتمان‌ها با MQTT.",
            bullets: [
              "دسته‌بندی سطح دسترسی کاربران و استخراج use case هر نوع کاربر.",
              "طراحی نمودار چرخه عمر برنامه با Microsoft Visio.",
              "طراحی UX بر اساس permission هر کاربر."
            ]
          },
          {
            title: "smart.nobka",
            summary: "فروشگاه و فعالیت‌های بازاریابی محصولات خانه هوشمند و IoT شرکت.",
            bullets: [
              "طراحی UX/UI و پیاده‌سازی وب‌سایت فروشگاهی واکنش‌گرا.",
              "طراحی ساختار مشخصات محصول و templateهای تصویری قابل استفاده مجدد.",
              "برنامه‌ریزی شبکه اجتماعی، مارکت‌پلیس و کمپین تبلیغاتی همراه با landing page و GIF banner.",
              "پیاده‌سازی SEO صفحات محصول با structured schema معتبر و اتصال ابزارهای Google SEO.",
              "ضبط و تدوین ویدئوهای unboxing محصول.",
              "استفاده از Web AR برای نمایش ویدئوی unboxing با شناسایی target image."
            ]
          },
          {
            title: "Titime",
            summary: "سیستم حضور و غیاب با اپلیکیشن cross-platform و location بلادرنگ برای تأیید حضور.",
            bullets: [
              "طراحی سایت معرفی با ساختار SEO و پیاده‌سازی نسخه واکنش‌گرا با WordPress.",
              "نوشتن سناریو و ضبط ویدئوی آموزشی جداگانه برای کاربر و مدیر.",
              "استخراج قابلیت‌های محصول و طراحی بنر با SVG اختصاصی.",
              "طراحی کاتالوگ، بنر و فلایر نمایشگاه APPEX 2024 تهران.",
              "راه‌اندازی ابزارهای Google SEO روی وب‌سایت."
            ]
          }
        ]
      }
    ],
    projects: [
      { title: "CRM Platform", body: "توسعه بک‌اند برای CRM، گزارش‌گیری و جریان‌های عملیاتی شامل APIهای Django، مدل‌های PostgreSQL، endpointهای گزارش و KPI، قابلیت‌های permission-aware و pipelineهای استقرار.", tags: ["Django", "PostgreSQL", "REST API", "Permissions", "CI/CD"] },
      { title: "Authentication & Authorization", body: "پیاده‌سازی کنترل دسترسی برای جریان‌های سازمانی با جداسازی authentication از authorization و ترکیب role permission با policy و object-level check در صورت نیاز.", tags: ["RBAC", "ABAC", "Object permissions", "Least privilege"] },
      { title: "Kiosk Builder", body: "فعالیت مهندسی نرم‌افزار روی قابلیت‌های kiosk builder و اتصال آن به سرویس‌های بک‌اند. جزئیات محیط تولید خصوصی است.", tags: ["Product engineering", "Backend integration"] },
      { title: "Successo", body: "کار روی بک‌اند/API و استقرار سرویس‌های Successo، شامل عیب‌یابی سرویس در Linux و دسترسی صحیح مستندات API در محیط تولید.", tags: ["REST API", "Linux", "Deployment", "Operations"] },
      { title: "CRM Agent Orchestration", body: "طراحی معماری برای اضافه کردن orchestration چندعاملی به بک‌اند موجود، شامل state، handoff، اجرای graph-based و مرزبندی مستندات.", tags: ["Backend architecture", "Agents", "Orchestration", "Documentation"] }
    ],
    university: [
      { title: "Commerce application", body: "اپلیکیشن تجارت موبایل با Flutter، Dart و Firebase." },
      { title: "Street-sign recognition", body: "پروژه تشخیص تابلوهای خیابانی با الگوریتم object detection مدل YOLO." },
      { title: "Market forecasting", body: "آزمایش پیش‌بینی بازار با هوش مصنوعی و مدل LSTM." },
      { title: "Auction marketplace", body: "سیستم خرید و فروش مبتنی بر هسته مزایده با MERN stack." }
    ],
    freelance: [
      { title: "وب‌سایت رژیم آنلاین", url: "https://drmostafavidiet.ir/", image: "https://hosseinsam.github.io/assets/dr-937a478e.png" },
      { title: "سیستم حضور و غیاب Titime", url: "https://titime.ir/", image: "https://hosseinsam.github.io/assets/titime-4b78d651.png" },
      { title: "فروشگاه لوازم خودرو", url: "https://autozafar.ir/", image: "https://hosseinsam.github.io/assets/auto-ca490d1a.png" },
      { title: "فروشگاه سیستم صوتی خودرو", url: "https://k1system.ir/", image: "https://hosseinsam.github.io/assets/k1-f0aee7dd.png" },
      { title: "فروشگاه Sallivan", url: "https://sallivanstore.ir/", image: "https://hosseinsam.github.io/assets/sali-8b198acb.png" },
      { title: "فروشگاه ShineMakeup", url: "https://shinemakeup.ir/", image: "https://hosseinsam.github.io/assets/shine-74e4265e.png" },
      { title: "فروشگاه BamiPet", url: "https://bamipet.com/", image: "https://hosseinsam.github.io/assets/bami-37bf4a2e.png" },
      { title: "Pawgato", url: "https://pawgato.com/", image: "https://hosseinsam.github.io/assets/paw-218cc36a.png" },
      { title: "فروشگاه خانه هوشمند", url: "https://smart.nobka.ir/", image: "https://hosseinsam.github.io/assets/smart-e1dbe507.png" }
    ],
    auth: [
      { title: "مرز Authentication", body: "اعتبارسنجی هویت، session یا token از تصمیم authorization جدا نگه داشته می‌شود تا هر لایه مستقل قابل تست و تغییر باشد." },
      { title: "RBAC", body: "وقتی مسئولیت‌های شغلی مرز دسترسی پایداری ایجاد می‌کنند، permissionها بر اساس role سازمانی گروه‌بندی می‌شوند." },
      { title: "ABAC / Policy", body: "وقتی role کافی نیست، attributeهای کاربر، tenant، resource، request و context دامنه در تصمیم دسترسی استفاده می‌شوند." },
      { title: "Object-level authorization", body: "دسترسی می‌تواند روی رکورد یا resource مشخص بررسی شود، نه فقط روی route. این موضوع برای ownership و tenant isolation مهم است." },
      { title: "ACL / ReBAC", body: "وقتی دسترسی به grant مستقیم یا رابطه بین کاربر، تیم، سازمان و resource وابسته است، ACL یا مدل relationship-based کاربرد دارد." },
      { title: "اصول امنیتی", body: "Least privilege، deny by default، permission check صریح، policy logic متمرکز، failure قابل پیش‌بینی و access decision قابل audit." }
    ],
    skills: [
      { title: "Backend", body: "Python، Django، Django REST Framework، REST API، domain modeling، authentication، authorization و معماری بک‌اند." },
      { title: "Data", body: "PostgreSQL، relational modeling، SQL/query design، index، reporting و کار داده‌ای با تمرکز بر performance." },
      { title: "Frontend", body: "JavaScript، TypeScript، React، Redux، Axios، HTML و CSS. در صورت نیاز محصول می‌توانم روی فرانت‌اند نیز کار کنم." },
      { title: "Desktop / Device", body: "C#، serial-port communication، انتقال فایل در سطح byte، جریان‌های device رمزنگاری‌شده و همکاری در طراحی commandهای VHDL." },
      { title: "IoT / AR / Product", body: "MQTT، AR.js، Vuforia، Unity، GLB، WordPress، SEO، structured product data و UX/UI محصول." },
      { title: "Delivery", body: "Docker، Linux، Git، GitHub Actions، GitLab CI/CD، عیب‌یابی استقرار و مستندات فنی." }
    ],
    contact: { currentGithub: "GitHub فعلی", originalGithub: "GitHub قبلی" },
    footer: { line: "مهندسی نرم‌افزار · تجربه فول‌استک · تمرکز بک‌اند" },
    repo: {
      fallback: "مخزن عمومی GitHub.",
      statusLive: "مخازن عمومی از GitHub بارگذاری شدند.",
      statusFallback: "API گیت‌هاب در دسترس نیست؛ فهرست محلی نمایش داده می‌شود.",
      fork: "Fork"
    }
  }
};

const fallbackRepos = [
  {
    name: "greenProof",
    owner: "hosseinsam",
    html_url: "https://github.com/hosseinsam/greenProof",
    description: "Verified environmental-impact marketplace with Next.js, NestJS, PostgreSQL, Prisma and Docker.",
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
    name: "MachineVisionFall1400",
    owner: "hosseinsam",
    html_url: "https://github.com/hosseinsam/MachineVisionFall1400",
    description: "Machine Vision course code.",
    language: "Jupyter Notebook",
    stargazers_count: 0,
    fork: true,
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
    description: "Telegram Mini App and API for an order workflow.",
    language: "JavaScript",
    stargazers_count: 0,
    fork: false,
    archived: false
  }
];

let language = localStorage.getItem("portfolio-language") || "en";
if (!content[language]) language = "en";
let currentRepos = fallbackRepos;
let repoMode = "fallback";

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

  renderProfile();
  renderExperience();
  renderProfessionalProjects();
  renderUniversityProjects();
  renderFreelance();
  renderAuthorization();
  renderSkills();
  renderRepos(currentRepos, repoMode);
  localStorage.setItem("portfolio-language", language);
}

function renderProfile() {
  document.getElementById("profileGrid").innerHTML = content[language].profile.map((item) => `
    <article class="profile-item">
      <h3>${escapeHtml(item.title)}</h3>
      <p>${escapeHtml(item.body)}</p>
    </article>
  `).join("");
}

function renderExperience() {
  const root = document.getElementById("experienceList");
  root.innerHTML = content[language].experience.map((item) => {
    const bullets = item.bullets?.length ? `<ul>${item.bullets.map((bullet) => `<li>${escapeHtml(bullet)}</li>`).join("")}</ul>` : "";
    const projects = item.projects?.length ? `
      <div class="project-details">
        ${item.projects.map((project) => `
          <details>
            <summary>
              <span class="detail-title">${escapeHtml(project.title)}</span>
              <span class="detail-summary">${escapeHtml(project.summary)}</span>
            </summary>
            <div class="detail-body">
              <ul>${project.bullets.map((bullet) => `<li>${escapeHtml(bullet)}</li>`).join("")}</ul>
            </div>
          </details>
        `).join("")}
      </div>` : "";

    return `
      <article class="experience-item">
        <div class="experience-meta">
          <h3>${escapeHtml(item.company)}</h3>
          <p>${escapeHtml(item.role)}</p>
          <p>${escapeHtml(item.date)}</p>
        </div>
        <div class="experience-body">
          <p>${escapeHtml(item.summary)}</p>
          ${bullets}
          ${projects}
        </div>
      </article>
    `;
  }).join("");
}

function renderProfessionalProjects() {
  document.getElementById("professionalProjects").innerHTML = content[language].projects.map((item) => `
    <article class="work-row">
      <h3>${escapeHtml(item.title)}</h3>
      <p>${escapeHtml(item.body)}</p>
      <div class="work-tags">${item.tags.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}</div>
    </article>
  `).join("");
}

function renderUniversityProjects() {
  document.getElementById("universityProjects").innerHTML = content[language].university.map((item) => `
    <article class="simple-row">
      <h3>${escapeHtml(item.title)}</h3>
      <p>${escapeHtml(item.body)}</p>
    </article>
  `).join("");
}

function renderFreelance() {
  const strings = content[language];
  const root = document.getElementById("freelanceGrid");
  root.innerHTML = strings.freelance.map((item) => `
    <a class="freelance-card" href="${escapeAttr(item.url)}" target="_blank" rel="noreferrer">
      <div class="freelance-thumb">
        <img src="${escapeAttr(item.image)}" alt="${escapeAttr(item.title)}" loading="lazy" />
      </div>
      <div class="freelance-card-body">
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(new URL(item.url).hostname.replace(/^www\./, ""))}</p>
        <span class="open-label">${escapeHtml(strings.actions.live)}</span>
      </div>
    </a>
  `).join("");

  root.querySelectorAll("img").forEach((image) => {
    image.addEventListener("error", () => image.closest(".freelance-card")?.classList.add("image-missing"), { once: true });
  });
}

function renderAuthorization() {
  document.getElementById("authGrid").innerHTML = content[language].auth.map((item) => `
    <article class="auth-item">
      <h3>${escapeHtml(item.title)}</h3>
      <p>${escapeHtml(item.body)}</p>
    </article>
  `).join("");
}

function renderSkills() {
  document.getElementById("skillsGrid").innerHTML = content[language].skills.map((item) => `
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
        ${repo.fork ? `<span class="tag">${escapeHtml(strings.fork)}</span>` : ""}
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

    const map = new Map();
    results.flat()
      .filter((repo) => !repo.archived)
      .filter((repo) => repo.name.toLowerCase() !== repo.owner.toLowerCase())
      .forEach((repo) => map.set(repoKey(repo), repo));

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

const printState = new Map();
window.addEventListener("beforeprint", () => {
  document.querySelectorAll("details").forEach((details) => {
    printState.set(details, details.open);
    details.open = true;
  });
});
window.addEventListener("afterprint", () => {
  printState.forEach((wasOpen, details) => { details.open = wasOpen; });
  printState.clear();
});

document.getElementById("languageButton").addEventListener("click", () => {
  language = language === "en" ? "fa" : "en";
  applyLanguage();
});

document.getElementById("printButton").addEventListener("click", () => window.print());
document.getElementById("year").textContent = new Date().getFullYear();

applyLanguage();
loadGitHubRepos();
