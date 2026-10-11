const content = {
  "en": {
    "nav": {
      "about": "About",
      "experience": "Professional experience",
      "skills": "Skills",
      "contact": "Contact",
      "showcases": "Showcases",
      "freelance": "Freelance projects",
      "personal": "Personal projects"
    },
    "actions": {
      "print": "Print CV · 1 page",
      "live": "Live preview"
    },
    "hero": {
      "role": "Backend Engineer · Django · PostgreSQL · API Security",
      "title": "Backend engineer building secure, auditable systems.",
      "summary": "Five years shipping Django and PostgreSQL products with strict access control, explicit transactions and tests for failure paths. I turn messy business rules into reliable software, from API design to production.",
      "caseStudy": "View GreenProof case study",
      "resume": "Download résumé",
      "email": "Email me",
      "availability": "Open to senior backend roles — remote or Iran. Working hours: Iran Standard Time (UTC+3:30)."
    },
    "sections": {
      "about": {
        "label": "Profile",
        "title": "Secure boundaries. Maintainable systems.",
        "note": "I connect API design, data isolation and access control to what the product actually needs to do. I use explicit database transactions, clear permission rules and automated tests that cover failure paths, not only the happy path. I have worked across Python/Django backends, React/TypeScript interfaces, desktop and device software, and data systems, which helps me design backends that frontend and operations teams can rely on."
      },
      "experience": {
        "label": "Experience",
        "title": "Professional experience"
      },
      "projects": {
        "label": "Workplace projects",
        "title": "Engineering at work",
        "note": "Production repositories are not all public, so these entries describe the engineering scope rather than exposing private implementation details."
      },
      "university": {
        "label": "2017–2022",
        "title": "University portfolio",
        "note": "Projects completed during university, covering mobile development, computer vision, machine learning and full-stack web systems."
      },
      "skills": {
        "label": "Skills",
        "title": "Working stack"
      },
      "contact": {
        "label": "Contact",
        "title": "Let's talk",
        "note": "I'm open to senior backend roles and selected contract work. The fastest way to reach me is email."
      },
      "showcases": {
        "label": "Personal projects",
        "title": "Independent apps I build.",
        "note": "Apps built independently from my employment and freelance client work."
      },
      "freelance": {
        "label": "Client work",
        "title": "Freelance projects",
        "note": "Client websites and frontend projects from my freelance portfolio. Employer-owned products appear under professional experience."
      }
    },
    "profile": [
      {
        "title": "Current focus",
        "body": "Secure API design, authorization, data isolation and tests that cover failure paths."
      },
      {
        "title": "Engineering range",
        "body": "React, TypeScript and API integration; C# desktop applications, encrypted serial communication, MQTT and IoT workflows."
      },
      {
        "title": "Education",
        "body": "Zanjan University, 2017–2022. University work included mobile commerce, computer vision, LSTM forecasting and a MERN auction marketplace."
      }
    ],
    "experience": [
      {
        "company": "Greenbank",
        "role": "Software Engineer — Backend (Python/Django)",
        "date": "Jun 2026 — Present",
        "summary": "Modular CRM for customer service, workforce management and business reporting. I own the API, tenant isolation and authorization.",
        "bullets": [
          "Built REST APIs with Python, Django and Django REST Framework, using CQRS-style handlers and explicit database transactions so a failed step does not leave a partial write.",
          "Implemented tenant isolation, onboarding and membership rules so each organisation can only access its own data.",
          "Integrated SSO and centralised role- and policy-based authorization across APIs and command handlers.",
          "Built private attachment upload and authenticated download with file validation and resource-level permissions.",
          "Delivered support metrics, SLA reporting and activity exports, and improved export processing for large date ranges.",
          "Added automated tests for permissions, tenant isolation and failure paths."
        ],
        "stack": "Python, Django, Django REST Framework, PostgreSQL"
      },
      {
        "company": "NOBKA",
        "role": "Software Engineer",
        "date": "2021 — Jun 2026",
        "summary": "Web interfaces, desktop software and device integrations for electronic products. Scope included administration UIs, a messenger extension and encrypted device communication.",
        "projects": [
          {
            "title": "VOIP System",
            "summary": "Admin interface for configuring a VoIP system.",
            "bullets": [
              "Designed the admin-panel UI.",
              "Implemented the admin dashboard with HTML, CSS and JavaScript."
            ]
          },
          {
            "title": "LTE Modem",
            "summary": "Responsive administration dashboard for a modem product with a large configuration surface.",
            "bullets": [
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
            "title": "Messenger Chrome Extension",
            "summary": "Browser messenger application with end-to-end encryption requirements.",
            "bullets": [
              "Designed the UI and UX for the messenger application.",
              "Implemented the frontend with TypeScript, React and Chrome Extension Manifest V3.",
              "Worked on SDK flows that validate user key changes and related actions through backend APIs."
            ]
          },
          {
            "title": "AR Research",
            "summary": "Research and prototypes for product marketing and augmented-reality experiences.",
            "bullets": [
              "Prototyped browser-based AR marketing using AR.js to show controllable video on detected targets.",
              "Used Vuforia and Unity to implement a multi-target Android AR prototype.",
              "Prepared product objects in GLB format for AR usage."
            ]
          },
          {
            "title": "FileManager",
            "summary": "Desktop file manager communicating with an encrypted device over serial port.",
            "bullets": [
              "Built the application in C# around encrypted serial-port communication.",
              "Contributed to command design for operations such as copy, encrypt and delete alongside VHDL development.",
              "Parsed serial output to display directories and files.",
              "Worked at byte level to read files from the device into Windows and write files back to the device.",
              "Implemented features including compression and key burning.",
              "Defined use cases, designed UX and implemented a keyboard-friendly file-manager UI."
            ]
          },
          {
            "title": "SPARK",
            "summary": "Parking-lot management product using MQTT for organizations and departments.",
            "bullets": [
              "Categorized user privileges and extracted use cases for each user type.",
              "Designed application lifecycle diagrams in Microsoft Visio.",
              "Designed UX around each user's permission set."
            ]
          }
        ],
        "bullets": [
          "Built React and Redux device-administration interfaces with reusable components, complex forms and feature-based API integration, so a large configuration surface stayed maintainable.",
          "Developed a TypeScript and React messenger extension on Chrome Manifest V3, including backend validation when a user's key changes.",
          "Built a C# file manager for encrypted serial communication and byte-level file transfer between the device and Windows.",
          "Turned permission models and use cases into operational workflows for VoIP, LTE modem, attendance, smart-home and IoT/MQTT products."
        ],
        "stack": "JavaScript, TypeScript, React, Redux, C#"
      }
    ],
    "projects": [
      {
        "title": "CRM Platform",
        "body": "Developed a modular CRM backend supporting customer service operations, workforce management and business reporting. Tenant isolation, SSO, private attachments, SLA reporting and optimised activity exports.",
        "tags": [
          "Python",
          "Django REST Framework",
          "Multi-Tenancy",
          "CQRS",
          "SQL"
        ]
      },
      {
        "title": "Authentication & Authorization",
        "body": "Access-control implementation for enterprise application flows, separating authentication from authorization and combining role permissions with policy and object-level checks where needed.",
        "tags": [
          "RBAC",
          "ABAC",
          "Object permissions",
          "Least privilege"
        ]
      },
      {
        "title": "Kiosk Builder",
        "body": "Software engineering work around kiosk-builder functionality and integration with backend services. Production implementation details remain private.",
        "tags": [
          "Product engineering",
          "Backend integration"
        ]
      },
      {
        "title": "Ai Agents Orchestration",
        "body": "Architecture work for adding multi-agent orchestration to an existing backend, including task state, handoffs, graph-style execution and documentation boundaries.",
        "tags": [
          "Backend architecture",
          "Agents",
          "Orchestration",
          "Documentation"
        ]
      }
    ],
    "university": [
      {
        "title": "Commerce application",
        "body": "Mobile commerce application implemented with Flutter, Dart and Firebase."
      },
      {
        "title": "Street-sign recognition",
        "body": "Street-sign recognition project using the YOLO object-detection algorithm."
      },
      {
        "title": "Market forecasting",
        "body": "Market forecasting experiment using artificial intelligence and an LSTM model."
      },
      {
        "title": "Auction marketplace",
        "body": "Buying and selling application built around an auction core using the MERN stack."
      }
    ],
    "skills": [
      {
        "title": "Backend",
        "body": "Python, Django, Django REST Framework, PostgreSQL, REST API design, CQRS"
      },
      {
        "title": "Security",
        "body": "Authentication, authorization (RBAC), SSO, policy and object-level permissions, data isolation, input validation"
      },
      {
        "title": "Frontend",
        "body": "React, TypeScript, Redux"
      },
      {
        "title": "Quality",
        "body": "Automated tests for permissions, tenant isolation and failure paths; GitHub Actions; GitLab CI"
      },
      {
        "title": "Delivery",
        "body": "Docker, Git, Linux, Cloudflare Pages and D1"
      },
      {
        "title": "Other",
        "body": "Desktop and device software (C#), SQL and NoSQL data systems, AI-assisted engineering"
      }
    ],
    "footer": {
      "line": "Backend engineering · Django · PostgreSQL"
    },
    "freelance": [
      {
        "title": "Online diet website",
        "url": "https://drmostafavidiet.ir/",
        "image": "./assets/previews/dr-937a478e.png",
        "body": "Client website project from my freelance portfolio.",
        "code": null
      },
      {
        "title": "Auto parts store",
        "url": "https://autozafar.ir/",
        "image": "./assets/previews/auto-ca490d1a.png",
        "body": "Client website project from my freelance portfolio.",
        "code": null
      },
      // {
      //   "title": "Car audio system store",
      //   "url": "https://k1system.ir/",
      //   "image": "./assets/previews/k1-f0aee7dd.png",
      //   "body": "Client website project from my freelance portfolio.",
      //   "code": null
      // },
      // {
      //   "title": "Sallivan Store",
      //   "url": "https://sallivanstore.ir/",
      //   "image": "./assets/previews/sali-8b198acb.png",
      //   "body": "Client website project from my freelance portfolio.",
      //   "code": null
      // },
      // {
      //   "title": "ShineMakeup Store",
      //   "url": "https://shinemakeup.ir/",
      //   "image": "./assets/previews/shine-74e4265e.png",
      //   "body": "Client website project from my freelance portfolio.",
      //   "code": null
      // },
      // {
      //   "title": "BamiPet Store",
      //   "url": "https://bamipet.com/",
      //   "image": "./assets/previews/bami-37bf4a2e.png",
      //   "body": "Client website project from my freelance portfolio.",
      //   "code": null
      // },
      {
        "title": "Pawgato",
        "url": "https://pawgato.com/",
        "image": "./assets/previews/paw-218cc36a.png",
        "body": "Client frontend project with dark-mode support.",
        "code": "https://github.com/hosseinsam/pawgatoFrontWithDarkmode"
      }
    ],
    "personal": [
      {
        "title": "GreenProof",
        "featured": true,
        "image": "./assets/illustrations/greenproof.png",
        "caseStudy": {
          "title": "GreenProof — verified nature-impact platform",
          "status": "In development, pre-launch",
          "summary": "GreenProof is a platform where community contributors submit evidence of planting and follow-up care, reviewers approve it under defined rules, and companies receive reports that show what was funded, how it was checked and what the limits are.",
          "role": "Founder and lead engineer. I design the backend, the data model and the verification rules.",
          "points": [
            {
              "title": "Evidence-first data model.",
              "body": "Contribution type, measured quantity and quality are kept separate. A later survival check is a follow-up activity, not a second planted tree."
            },
            {
              "title": "Append-only points ledger.",
              "body": "Contribution recognition (GreenProof Points) is account-bound and non-transferable. Corrections are new entries with a reason, never silent edits."
            },
            {
              "title": "Security audit of my own codebase.",
              "body": "I reviewed authorization, payment flow and certificate integrity, and recorded the findings and remediation plan before any public launch."
            },
            {
              "title": "Product and compliance decision records.",
              "body": "I compared a service-only model, a points-only model and a token model, and chose points-only with measurable stop conditions. I prepared a counsel-review package for a pilot in Belgium and the Netherlands."
            }
          ],
          "stack": "TypeScript, NestJS, PostgreSQL, Prisma, Next.js, Docker",
          "statusNote": "Pre-launch. Not accepting payments. Pilot planning in Belgium and the Netherlands."
        }
      },
      {
        "title": "UnknownShop — Telegram Marketplace",
        "body": "Independent marketplace for discovering shops and products, with a Telegram Mini App, API and D1-backed order workflow.",
        "tags": [
          "Telegram Mini App",
          "API",
          "Cloudflare D1"
        ],
        "url": "https://telegram-order-shop.pages.dev/",
        "image": "./assets/illustrations/telegram-marketplace.png",
        "secondaryUrl": "https://t.me/aseknownbot?start=_tgr_oEYKXkEyZmNk"
      },
      {
        "title": "PQC JWT Starter",
        "body": "JWT authentication starter exploring post-quantum cryptography concepts.",
        "tags": [
          "TypeScript",
          "JWT",
          "Cryptography"
        ],
        "url": "https://github.com/hosseinsam/pqc-jwt-starter"
      },{
        "title": "Successo",
        "body": "Motivation and personal-growth platform delivered as an independent web application.",
        "tags": [
          "Web application",
          "Product delivery"
        ],
        "url": "https://successomag.ir/",
        "image": "./assets/illustrations/successo.png"
      }
    ],
    "employerProducts": [
      {
        "title": "Titime",
        "image": "./assets/previews/titime-4b78d651.png",
        "url": "https://titime.ir/",
        "body": "Attendance product from my NOBKA portfolio."
      },
      {
        "title": "NOBKA Smart Home",
        "image": "./assets/previews/smart-e1dbe507.png",
        "url": "https://smart.nobka.ir/",
        "body": "Smart-home and IoT product website from my NOBKA portfolio."
      }
    ]
  },
  "fa": {
    "nav": {
      "about": "درباره",
      "experience": "سوابق شغلی",
      "skills": "مهارت‌ها",
      "contact": "ارتباط",
      "showcases": "اپلیکیشن‌ها",
      "freelance": "پروژه‌های فریلنس",
      "personal": "پروژه‌های شخصی"
    },
    "actions": {
      "print": "چاپ CV انگلیسی · یک صفحه",
      "live": "مشاهده سایت"
    },
    "hero": {
      "role": "مهندس بک‌اند · Django · PostgreSQL · امنیت API",
      "title": "مهندس بک‌اند برای سیستم‌های امن و قابل حسابرسی.",
      "summary": "پنج سال ساخت محصولات Django و PostgreSQL با کنترل دسترسی سخت‌گیرانه، تراکنش‌های صریح و تست مسیرهای خطا. قواعد درهم‌ریخته کسب‌وکار را به نرم‌افزار قابل اتکا تبدیل می‌کنم، از طراحی API تا محیط تولید.",
      "caseStudy": "مشاهده مطالعه موردی GreenProof",
      "resume": "دانلود رزومه",
      "email": "ایمیل به من",
      "availability": "آماده نقش‌های ارشد بک‌اند — دورکار یا ایران. ساعت کاری: وقت ایران (UTC+3:30)."
    },
    "sections": {
      "about": {
        "label": "پروفایل",
        "title": "مرزهای امن. سیستم‌های قابل نگهداری.",
        "note": "طراحی API، جداسازی داده و کنترل دسترسی را به کاری که محصول واقعاً باید انجام دهد وصل می‌کنم. از تراکنش‌های صریح پایگاه داده، قواعد روشن مجوز و تست‌های خودکاری استفاده می‌کنم که مسیر خطا را هم می‌پوشانند، نه فقط مسیر موفق. روی بک‌اند Python/Django، رابط React/TypeScript، نرم‌افزار دسکتاپ و دستگاه، و سیستم‌های داده کار کرده‌ام؛ این دامنه کمک می‌کند بک‌اندی طراحی کنم که تیم فرانت‌اند و عملیات بتوانند به آن تکیه کنند."
      },
      "experience": {
        "label": "تجربه",
        "title": "سوابق شغلی"
      },
      "projects": {
        "label": "پروژه‌های سازمانی",
        "title": "مهندسی در محیط کار",
        "note": "همه مخازن محیط تولید عمومی نیستند؛ بنابراین این بخش حوزه مهندسی را توضیح می‌دهد و وارد جزئیات خصوصی پیاده‌سازی نمی‌شود."
      },
      "university": {
        "label": "۲۰۱۷–۲۰۲۲",
        "title": "پروژه‌های دانشگاه",
        "note": "پروژه‌های دوره دانشگاه در حوزه موبایل، بینایی ماشین، یادگیری ماشین و سیستم‌های وب فول‌استک."
      },
      "skills": {
        "label": "مهارت‌ها",
        "title": "فناوری‌های کاری"
      },
      "contact": {
        "label": "ارتباط",
        "title": "صحبت کنیم",
        "note": "برای نقش‌های ارشد بک‌اند و همکاری قراردادیِ انتخاب‌شده آماده‌ام. سریع‌ترین راه ارتباط، ایمیل است."
      },
      "showcases": {
        "label": "پروژه‌های شخصی",
        "title": "اپلیکیشن‌های مستقل من.",
        "note": "اپلیکیشن‌هایی مستقل از سوابق شغلی و پروژه‌های مشتریان فریلنس."
      },
      "freelance": {
        "label": "پروژه‌های مشتریان",
        "title": "پروژه‌های فریلنس",
        "note": "وب‌سایت‌های مشتریان و پروژه‌های فرانت‌اند از مجموعه فریلنس من. محصولات سازمانی در بخش سوابق شغلی آمده‌اند."
      }
    },
    "profile": [
      {
        "title": "تمرکز فعلی",
        "body": "طراحی امن API، مجوزدهی، جداسازی داده و تست‌هایی که مسیر خطا را هم می‌پوشانند."
      },
      {
        "title": "دامنه تجربه",
        "body": "React، TypeScript و اتصال API؛ برنامه‌های دسکتاپ C#، ارتباط سریال رمزنگاری‌شده، MQTT و گردش‌کارهای IoT."
      },
      {
        "title": "تحصیلات",
        "body": "دانشگاه زنجان، ۲۰۱۷ تا ۲۰۲۲. پروژه‌های دانشگاه شامل تجارت موبایل، بینایی ماشین، پیش‌بینی LSTM و مارکت‌پلیس مزایده با MERN بوده است."
      }
    ],
    "experience": [
      {
        "company": "Greenbank",
        "role": "مهندس نرم‌افزار — بک‌اند (Python/Django)",
        "date": "ژوئن ۲۰۲۶ — اکنون",
        "summary": "CRM ماژولار برای خدمات مشتری، مدیریت نیروی کار و گزارش کسب‌وکار. مسئولیت API، جداسازی داده سازمان‌ها و مجوزدهی با من است.",
        "bullets": [
          "ساخت REST API با Python، Django و Django REST Framework، با handlerهای به سبک CQRS و تراکنش صریح پایگاه داده، تا شکست یک مرحله نوشتن ناقص باقی نگذارد.",
          "پیاده‌سازی جداسازی tenant، راه‌اندازی و قواعد عضویت تا هر سازمان فقط به داده خودش دسترسی داشته باشد.",
          "یکپارچه‌سازی SSO و مجوزدهی متمرکز مبتنی بر نقش و policy در APIها و command handlerها.",
          "ساخت آپلود خصوصی پیوست و دانلود احراز هویت‌شده با اعتبارسنجی فایل و مجوز در سطح منبع.",
          "ارائه شاخص‌های پشتیبانی، گزارش SLA و خروجی فعالیت‌ها، و بهبود پردازش خروجی برای بازه‌های زمانی بزرگ.",
          "افزودن تست خودکار برای مجوزها، جداسازی tenant و مسیرهای خطا."
        ],
        "stack": "Python, Django, Django REST Framework, PostgreSQL"
      },
      {
        "company": "NOBKA",
        "role": "مهندس نرم‌افزار",
        "date": "۲۰۲۱ — ژوئن ۲۰۲۶",
        "summary": "رابط وب، نرم‌افزار دسکتاپ و اتصال دستگاه برای محصولات الکترونیکی. دامنه کار شامل پنل مدیریت، افزونه پیام‌رسان و ارتباط رمزنگاری‌شده با دستگاه بود.",
        "projects": [
          {
            "title": "VOIP System",
            "summary": "پنل مدیریتی برای پیکربندی سیستم VoIP.",
            "bullets": [
              "طراحی UI پنل مدیریت.",
              "پیاده‌سازی داشبورد با HTML، CSS و JavaScript."
            ]
          },
          {
            "title": "LTE Modem",
            "summary": "داشبورد مدیریتی واکنش‌گرا برای محصول مودم با بخش‌های تنظیماتی متعدد.",
            "bullets": [
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
            "title": "Messenger Chrome Extension",
            "summary": "پیام‌رسان مرورگر با نیازمندی رمزنگاری end-to-end.",
            "bullets": [
              "طراحی UI و UX پیام‌رسان.",
              "پیاده‌سازی فرانت‌اند با TypeScript، React و Chrome Extension Manifest V3.",
              "کار روی جریان‌های SDK برای اعتبارسنجی تغییر کلید کاربران و عملیات مرتبط از طریق APIهای بک‌اند."
            ]
          },
          {
            "title": "AR Research",
            "summary": "تحقیق و نمونه‌سازی برای بازاریابی محصول با واقعیت افزوده.",
            "bullets": [
              "نمونه‌سازی Web AR با AR.js برای نمایش ویدئوی قابل کنترل روی target مشخص.",
              "استفاده از Vuforia و Unity برای ساخت نمونه Android چند target.",
              "آماده‌سازی مدل‌های محصول با فرمت GLB."
            ]
          },
          {
            "title": "FileManager",
            "summary": "فایل‌منیجر دسکتاپ برای ارتباط با دستگاه رمزنگاری‌شده از طریق serial port.",
            "bullets": [
              "پیاده‌سازی برنامه با C# و ارتباط serial رمزنگاری‌شده.",
              "همکاری در طراحی commandهایی مانند copy، encrypt و delete در کنار توسعه VHDL.",
              "parse کردن خروجی serial برای نمایش directory و file.",
              "کار در سطح byte برای خواندن فایل از دستگاه در Windows و نوشتن فایل روی دستگاه.",
              "پیاده‌سازی قابلیت‌هایی مانند compression و key burning.",
              "استخراج use case، طراحی UX و ساخت UI با hotkeyهای لازم برای فایل‌منیجر."
            ]
          },
          {
            "title": "SPARK",
            "summary": "محصول مدیریت پارکینگ سازمان‌ها و دپارتمان‌ها با MQTT.",
            "bullets": [
              "دسته‌بندی سطح دسترسی کاربران و استخراج use case هر نوع کاربر.",
              "طراحی نمودار چرخه عمر برنامه با Microsoft Visio.",
              "طراحی UX بر اساس permission هر کاربر."
            ]
          }
        ],
        "bullets": [
          "ساخت رابط مدیریت دستگاه با React و Redux، کامپوننت‌های قابل استفاده مجدد، فرم‌های پیچیده و اتصال API بر اساس قابلیت، تا سطح تنظیمات گسترده قابل نگهداری بماند.",
          "توسعه افزونه پیام‌رسان با TypeScript و React روی Chrome Manifest V3، شامل اعتبارسنجی بک‌اند هنگام تغییر کلید کاربر.",
          "ساخت فایل‌منیجر C# برای ارتباط سریال رمزنگاری‌شده و انتقال فایل در سطح بایت بین دستگاه و ویندوز.",
          "تبدیل مدل مجوز و use case به گردش‌کار عملیاتی برای محصولات VoIP، مودم LTE، حضور و غیاب، خانه هوشمند و IoT/MQTT."
        ],
        "stack": "JavaScript, TypeScript, React, Redux, C#"
      }
    ],
    "projects": [
      {
        "title": "CRM Platform",
        "body": "توسعه بک‌اند ماژولار CRM برای عملیات خدمات مشتری، مدیریت نیروی کار و گزارش‌های کسب‌وکار. جداسازی tenant، SSO، پیوست خصوصی، گزارش SLA و خروجی بهینه فعالیت‌ها.",
        "tags": [
          "Python",
          "Django REST Framework",
          "Multi-Tenancy",
          "CQRS",
          "SQL"
        ]
      },
      {
        "title": "Authentication & Authorization",
        "body": "پیاده‌سازی کنترل دسترسی برای جریان‌های سازمانی با جداسازی authentication از authorization و ترکیب role permission با policy و object-level check در صورت نیاز.",
        "tags": [
          "RBAC",
          "ABAC",
          "Object permissions",
          "Least privilege"
        ]
      },
      {
        "title": "Kiosk Builder",
        "body": "فعالیت مهندسی نرم‌افزار روی قابلیت‌های kiosk builder و اتصال آن به سرویس‌های بک‌اند. جزئیات محیط تولید خصوصی است.",
        "tags": [
          "Product engineering",
          "Backend integration"
        ]
      },
      {
        "title": "Ai Agents Orchestration",
        "body": "طراحی معماری برای اضافه کردن orchestration چندعاملی به بک‌اند موجود، شامل state، handoff، اجرای graph-based و مرزبندی مستندات.",
        "tags": [
          "Backend architecture",
          "Agents",
          "Orchestration",
          "Documentation"
        ]
      }
    ],
    "university": [
      {
        "title": "Commerce application",
        "body": "اپلیکیشن تجارت موبایل با Flutter، Dart و Firebase."
      },
      {
        "title": "Street-sign recognition",
        "body": "پروژه تشخیص تابلوهای خیابانی با الگوریتم object detection مدل YOLO."
      },
      {
        "title": "Market forecasting",
        "body": "آزمایش پیش‌بینی بازار با هوش مصنوعی و مدل LSTM."
      },
      {
        "title": "Auction marketplace",
        "body": "سیستم خرید و فروش مبتنی بر هسته مزایده با MERN stack."
      }
    ],
    "skills": [
      {
        "title": "بک‌اند",
        "body": "Python، Django، Django REST Framework، PostgreSQL، طراحی REST API، CQRS"
      },
      {
        "title": "امنیت",
        "body": "احراز هویت، مجوزدهی (RBAC)، SSO، مجوز policy و سطح object، جداسازی داده، اعتبارسنجی ورودی"
      },
      {
        "title": "فرانت‌اند",
        "body": "React، TypeScript، Redux"
      },
      {
        "title": "کیفیت",
        "body": "تست خودکار مجوزها، جداسازی tenant و مسیرهای خطا؛ GitHub Actions؛ GitLab CI"
      },
      {
        "title": "تحویل",
        "body": "Docker، Git، Linux، Cloudflare Pages و D1"
      },
      {
        "title": "سایر",
        "body": "نرم‌افزار دسکتاپ و دستگاه (C#)، سیستم‌های داده SQL و NoSQL، مهندسی با کمک هوش مصنوعی"
      }
    ],
    "footer": {
      "line": "مهندسی بک‌اند · Django · PostgreSQL"
    },
    "freelance": [
      {
        "title": "وب‌سایت رژیم آنلاین",
        "url": "https://drmostafavidiet.ir/",
        "image": "./assets/previews/dr-937a478e.png",
        "body": "پروژه وب‌سایت مشتری از مجموعه کارهای فریلنس من.",
        "code": null
      },
      {
        "title": "فروشگاه لوازم خودرو",
        "url": "https://autozafar.ir/",
        "image": "./assets/previews/auto-ca490d1a.png",
        "body": "پروژه وب‌سایت مشتری از مجموعه کارهای فریلنس من.",
        "code": null
      },
      {
        "title": "فروشگاه سیستم صوتی خودرو",
        "url": "https://k1system.ir/",
        "image": "./assets/previews/k1-f0aee7dd.png",
        "body": "پروژه وب‌سایت مشتری از مجموعه کارهای فریلنس من.",
        "code": null
      },
      {
        "title": "فروشگاه Sallivan",
        "url": "https://sallivanstore.ir/",
        "image": "./assets/previews/sali-8b198acb.png",
        "body": "پروژه وب‌سایت مشتری از مجموعه کارهای فریلنس من.",
        "code": null
      },
      {
        "title": "فروشگاه ShineMakeup",
        "url": "https://shinemakeup.ir/",
        "image": "./assets/previews/shine-74e4265e.png",
        "body": "پروژه وب‌سایت مشتری از مجموعه کارهای فریلنس من.",
        "code": null
      },
      {
        "title": "فروشگاه BamiPet",
        "url": "https://bamipet.com/",
        "image": "./assets/previews/bami-37bf4a2e.png",
        "body": "پروژه وب‌سایت مشتری از مجموعه کارهای فریلنس من.",
        "code": null
      },
      {
        "title": "Pawgato",
        "url": "https://pawgato.com/",
        "image": "./assets/previews/paw-218cc36a.png",
        "body": "پروژه فرانت‌اند مشتری با پشتیبانی از حالت تاریک.",
        "code": "https://github.com/hosseinsam/pawgatoFrontWithDarkmode"
      }
    ],
    "personal": [
      {
        "title": "GreenProof",
        "featured": true,
        "image": "./assets/illustrations/greenproof.png",
        "caseStudy": {
          "title": "GreenProof — پلتفرم راستی‌آزمایی اثر طبیعت",
          "status": "در حال توسعه، پیش از انتشار",
          "summary": "GreenProof پلتفرمی است که در آن مشارکت‌کنندگان جامعه شواهد کاشت و مراقبت بعدی را ثبت می‌کنند، بازبین‌ها آن را با قواعد مشخص تأیید می‌کنند، و شرکت‌ها گزارشی می‌گیرند که نشان می‌دهد چه چیزی تأمین مالی شده، چگونه بررسی شده و محدودیت‌ها چیست.",
          "role": "بنیان‌گذار و مهندس اصلی. بک‌اند، مدل داده و قواعد راستی‌آزمایی را طراحی می‌کنم.",
          "points": [
            {
              "title": "مدل داده مبتنی بر شواهد.",
              "body": "نوع مشارکت، مقدار اندازه‌گیری‌شده و کیفیت جدا نگه داشته می‌شوند. بررسی بعدیِ بقا یک فعالیت پیگیری است، نه یک درخت کاشته‌شده دوم."
            },
            {
              "title": "دفتر امتیاز فقط‌افزودنی.",
              "body": "شناسایی مشارکت (امتیاز GreenProof) به حساب وابسته و غیرقابل انتقال است. اصلاح‌ها رکورد جدید با دلیل هستند، نه ویرایش بی‌صدا."
            },
            {
              "title": "ممیزی امنیتی کد خودم.",
              "body": "مجوزدهی، جریان پرداخت و یکپارچگی گواهی را بررسی کردم و یافته‌ها و برنامه اصلاح را پیش از هر انتشار عمومی ثبت کردم."
            },
            {
              "title": "سوابق تصمیم محصول و انطباق.",
              "body": "مدل فقط‌خدمت، مدل فقط‌امتیاز و مدل توکن را مقایسه کردم و فقط‌امتیاز را با شرط‌های توقف قابل اندازه‌گیری انتخاب کردم. بسته بررسی وکیل را برای پایلوت در بلژیک و هلند آماده کردم."
            }
          ],
          "stack": "TypeScript, NestJS, PostgreSQL, Prisma, Next.js, Docker",
          "statusNote": "پیش از انتشار. پرداخت قبول نمی‌شود. برنامه‌ریزی پایلوت در بلژیک و هلند."
        }
      },
      {
        "title": "Successo",
        "body": "پلتفرم انگیزشی و رشد فردی که به‌عنوان یک اپلیکیشن وب مستقل توسعه داده شده است.",
        "tags": [
          "Web application",
          "Product delivery"
        ],
        "url": "https://successomag.ir/",
        "image": "./assets/illustrations/successo.png"
      },
      {
        "title": "UnknownShop — Telegram Marketplace",
        "body": "مارکت‌پلیس مستقل برای کشف فروشگاه‌ها و محصولات، همراه با Telegram Mini App، API و گردش‌کار سفارش مبتنی بر D1.",
        "tags": [
          "Telegram Mini App",
          "API",
          "Cloudflare D1"
        ],
        "url": "https://telegram-order-shop.pages.dev/",
        "image": "./assets/illustrations/telegram-marketplace.png",
        "secondaryUrl": "https://t.me/aseknownbot?start=_tgr_oEYKXkEyZmNk"
      },
      {
        "title": "PQC JWT Starter",
        "body": "پروژه آغازین احراز هویت JWT برای بررسی مفاهیم رمزنگاری پساکوانتومی.",
        "tags": [
          "TypeScript",
          "JWT",
          "Cryptography"
        ],
        "url": "https://github.com/hosseinsam/pqc-jwt-starter"
      }
    ],
    "employerProducts": [
      {
        "title": "Titime",
        "image": "./assets/previews/titime-4b78d651.png",
        "url": "https://titime.ir/",
        "body": "محصول حضور و غیاب از مجموعه کارهای من در NOBKA."
      },
      {
        "title": "NOBKA Smart Home",
        "image": "./assets/previews/smart-e1dbe507.png",
        "url": "https://smart.nobka.ir/",
        "body": "وب‌سایت محصولات خانه هوشمند و IoT از مجموعه کارهای من در NOBKA."
      }
    ]
  }
};

let language = localStorage.getItem("portfolio-language") || "en";
if (!content[language]) language = "en";
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
  renderShowcases();
  renderSkills();
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
          <h3 class="project-title">${projectMark(item.company === 'Greenbank' ? 'layers' : 'terminal')}${escapeHtml(item.company)}</h3>
          <p>${escapeHtml(item.role)}</p>
          <p>${escapeHtml(item.date)}</p>
          ${item.company === 'Greenbank' && publicLink(showcaseLinks.greenbank) ? `<p><a class="showcase-link" href="${escapeAttr(showcaseLinks.greenbank)}" target="_blank" rel="noopener noreferrer">${language === 'en' ? 'Visit Greenbank ↗' : 'مشاهده Greenbank ↗'}</a></p>` : ''}
        </div>
        <div class="experience-body">
          <p>${escapeHtml(item.summary)}</p>
          ${bullets}
          ${item.stack ? `<p class="stack-line"><strong>${language === "en" ? "Stack" : "فناوری"}:</strong> ${escapeHtml(item.stack)}</p>` : ""}
          ${projects}
        </div>
      </article>
    `;
  }).join("");
}

function renderProfessionalProjects() {
  document.getElementById("professionalProjects").innerHTML = content[language].projects.map((item) => `
    <article class="work-row">
      <h3 class="project-title">${projectMark(item.title.includes('Authorization') || item.title.includes('مجوز') ? 'shield' : 'layers')}${escapeHtml(item.title)}</h3>
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

function renderSkills() {
  document.getElementById("skillsGrid").innerHTML = content[language].skills.map((item) => `
    <article class="skill-group">
      <h3>${escapeHtml(item.title)}</h3>
      <p>${escapeHtml(item.body)}</p>
    </article>
  `).join("");
}

document.getElementById("languageButton").addEventListener("click", () => {
  language = language === "en" ? "fa" : "en";
  applyLanguage();
});

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
function closeMenu() {
  menuToggle.setAttribute("aria-expanded", "false");
  mainNav.classList.remove("is-open");
}
menuToggle.addEventListener("click", () => {
  const open = menuToggle.getAttribute("aria-expanded") !== "true";
  menuToggle.setAttribute("aria-expanded", String(open));
  mainNav.classList.toggle("is-open", open);
});
mainNav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
document.addEventListener("keydown", (event) => { if (event.key === "Escape") closeMenu(); });

document.getElementById("printButton").addEventListener("click", () => window.print());
document.getElementById("downloadResume").addEventListener("click", () => window.print());
document.getElementById("year").textContent = new Date().getFullYear();

renderResume();
applyLanguage();
