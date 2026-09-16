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
      "role": "Software Engineer · Backend · Full-stack · AI-assisted engineering",
      "title": "I build adaptable software across systems and stacks.",
      "summary": "Software engineer with five years of product engineering experience across Python/Django backends, React/TypeScript interfaces, desktop and device software, data systems, security, and AI-assisted engineering. I move between architecture and implementation to build reliable products around real operational needs."
    },
    "sections": {
      "about": {
        "label": "Profile",
        "title": "Secure boundaries. Maintainable systems.",
        "note": "I connect API design, data isolation and access control to the operational needs of the product, with explicit transactions and tests for failure paths."
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
        "title": "Links"
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
        "body": "Backend engineering across APIs, multi-tenant systems, identity, reporting and operational workflows."
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
        "summary": "Developed a modular CRM backend supporting customer service operations, workforce management and business reporting.",
        "bullets": [
          "Built REST APIs with Python, Django and Django REST Framework, following CQRS patterns and explicit transaction boundaries.",
          "Implemented tenant isolation, onboarding and membership management to protect organisation-specific data.",
          "Integrated SSO and centralised role- and policy-based authorisation across APIs and command handlers.",
          "Developed private attachment uploads and authenticated downloads with file validation and resource-level permissions.",
          "Delivered support metrics, SLA reporting and activity exports; optimised export processing for large date ranges.",
          "Extended plugin-based workflows and added automated coverage for permissions, tenant isolation and failure scenarios."
        ]
      },
      {
        "company": "NOBKA",
        "role": "Software Engineer",
        "date": "2021 — Jun 2026",
        "summary": "Developed web interfaces, desktop software and device integrations for electronic and software products.",
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
          "Built React/Redux device administration interfaces with reusable components, complex forms and feature-based API integration.",
          "Developed a TypeScript/React messenger extension using Chrome Manifest V3 and backend API validation flows.",
          "Built a C# file manager for encrypted serial communication and byte-level file transfer."
        ]
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
        "body": "Python · Django · Django REST Framework · REST APIs · CQRS · Multi-Tenancy · SSO · RBAC · Automated Testing"
      },
      {
        "title": "Data",
        "body": "PostgreSQL, SQL, relational modelling, indexes, reporting, NoSQL, document stores and key-value data models."
      },
      {
        "title": "Backend security",
        "body": "Authentication and authorisation, SSO, RBAC, policy and attribute rules, object-level permissions, least privilege and deny-by-default design."
      },
      {
        "title": "Frontend",
        "body": "JavaScript, TypeScript, React, Redux, Axios, HTML and CSS. Comfortable moving into frontend work when the product requires it."
      },
      {
        "title": "Desktop / device integration",
        "body": "C#, serial-port communication, byte-level file transfer, encrypted device workflows and collaboration around VHDL command design."
      },
      {
        "title": "Architecture & quality",
        "body": "Modular plugins, tenant isolation, centralised authorisation, explicit transaction boundaries, resource permissions and automated failure-scenario tests."
      },
      {
        "title": "Delivery",
        "body": "Docker, Linux, Git, GitHub Actions, GitLab CI/CD, deployment troubleshooting and technical documentation."
      },
      {
        "title": "AI & agent engineering",
        "body": "LLM applications, agent orchestration, multi-agent task handoffs, BMAD Method workflows, prompt engineering, context design and tool-assisted development."
      }
    ],
    "contact": {
      "currentGithub": "Current GitHub",
      "originalGithub": "Original GitHub"
    },
    "footer": {
      "line": "Software engineering · full-stack background · backend focus"
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
      {
        "title": "Car audio system store",
        "url": "https://k1system.ir/",
        "image": "./assets/previews/k1-f0aee7dd.png",
        "body": "Client website project from my freelance portfolio.",
        "code": null
      },
      {
        "title": "Sallivan Store",
        "url": "https://sallivanstore.ir/",
        "image": "./assets/previews/sali-8b198acb.png",
        "body": "Client website project from my freelance portfolio.",
        "code": null
      },
      {
        "title": "ShineMakeup Store",
        "url": "https://shinemakeup.ir/",
        "image": "./assets/previews/shine-74e4265e.png",
        "body": "Client website project from my freelance portfolio.",
        "code": null
      },
      {
        "title": "BamiPet Store",
        "url": "https://bamipet.com/",
        "image": "./assets/previews/bami-37bf4a2e.png",
        "body": "Client website project from my freelance portfolio.",
        "code": null
      },
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
        "title": "Successo",
        "body": "Motivation and personal-growth platform delivered as an independent web application.",
        "tags": [
          "Web application",
          "Product delivery"
        ],
        "url": "https://successomag.ir/",
        "image": "./assets/illustrations/successo.png"
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
        "title": "GreenProof",
        "body": "Environmental-impact marketplace project using Next.js, NestJS, PostgreSQL, Prisma and Docker.",
        "tags": [
          "Next.js",
          "NestJS",
          "PostgreSQL",
          "Prisma"
        ],
        "url": "https://github.com/hosseinsam/greenProof",
        "image": "./assets/illustrations/greenproof.png"
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
      "role": "مهندس نرم‌افزار · بک‌اند · فول‌استک · مهندسی با کمک هوش مصنوعی",
      "title": "نرم‌افزار منعطف، از سیستم تا محصول.",
      "summary": "مهندس نرم‌افزار با پنج سال تجربه مهندسی محصول در بک‌اند Python/Django، رابط‌های React/TypeScript، نرم‌افزار دسکتاپ و دستگاه، سیستم‌های داده، امنیت و مهندسی با کمک هوش مصنوعی. بین معماری و پیاده‌سازی حرکت می‌کنم تا برای نیازهای عملیاتی واقعی محصول قابل اتکا بسازم."
    },
    "sections": {
      "about": {
        "label": "پروفایل",
        "title": "مرزهای امن، سیستم‌های قابل نگهداری.",
        "note": "طراحی API، جداسازی داده و کنترل دسترسی را به نیازهای عملیاتی محصول متصل می‌کنم؛ با تراکنش‌های صریح و تست مسیرهای خطا."
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
        "title": "لینک‌ها"
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
        "body": "مهندسی بک‌اند در APIها، سیستم‌های چندسازمانی، هویت، گزارش‌دهی و گردش‌کارهای عملیاتی."
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
        "summary": "توسعه بک‌اند ماژولار CRM برای عملیات خدمات مشتری، مدیریت نیروی کار و گزارش‌های کسب‌وکار.",
        "bullets": [
          "ساخت REST API با Python، Django و Django REST Framework با الگوی CQRS و مرزهای صریح تراکنش.",
          "پیاده‌سازی جداسازی داده‌های سازمان‌ها، راه‌اندازی tenant و مدیریت عضویت برای حفاظت از داده‌ها.",
          "یکپارچه‌سازی SSO و مجوزدهی متمرکز مبتنی بر نقش و policy در APIها و command handlerها.",
          "توسعه آپلود خصوصی پیوست و دانلود احراز هویت‌شده با اعتبارسنجی فایل و مجوز در سطح منبع.",
          "توسعه شاخص‌های پشتیبانی، گزارش SLA و خروجی فعالیت‌ها؛ بهینه‌سازی پردازش خروجی در بازه‌های زمانی بزرگ.",
          "توسعه گردش‌کارهای افزونه‌ای و تست خودکار مجوزها، جداسازی tenant و سناریوهای خطا."
        ]
      },
      {
        "company": "NOBKA",
        "role": "مهندس نرم‌افزار",
        "date": "۲۰۲۱ — ژوئن ۲۰۲۶",
        "summary": "توسعه رابط‌های وب، نرم‌افزار دسکتاپ و ارتباط با دستگاه‌ها برای محصولات الکترونیکی و نرم‌افزاری.",
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
          "ساخت پنل مدیریت دستگاه با React/Redux، کامپوننت‌های قابل استفاده مجدد، فرم‌های پیچیده و اتصال API.",
          "توسعه افزونه پیام‌رسان با TypeScript/React و Chrome Manifest V3 و اعتبارسنجی از طریق API بک‌اند.",
          "ساخت فایل‌منیجر C# با ارتباط سریال رمزنگاری‌شده و انتقال فایل در سطح بایت."
        ]
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
        "title": "Backend",
        "body": "Python · Django · Django REST Framework · REST APIs · CQRS · Multi-Tenancy · SSO · RBAC · Automated Testing"
      },
      {
        "title": "Data",
        "body": "PostgreSQL، SQL، مدل‌سازی رابطه‌ای، index، گزارش‌گیری، NoSQL، document store و مدل‌های key-value."
      },
      {
        "title": "امنیت بک‌اند",
        "body": "Authentication و authorization، SSO، RBAC، قوانین policy و attribute، مجوز سطح object، least privilege و deny by default."
      },
      {
        "title": "Frontend",
        "body": "JavaScript، TypeScript، React، Redux، Axios، HTML و CSS. در صورت نیاز محصول می‌توانم روی فرانت‌اند نیز کار کنم."
      },
      {
        "title": "Desktop / Device",
        "body": "C#، serial-port communication، انتقال فایل در سطح byte، جریان‌های device رمزنگاری‌شده و همکاری در طراحی commandهای VHDL."
      },
      {
        "title": "معماری و کیفیت",
        "body": "افزونه‌های ماژولار، جداسازی tenant، مجوزدهی متمرکز، تراکنش‌های صریح، مجوز منابع و تست خودکار سناریوهای خطا."
      },
      {
        "title": "Delivery",
        "body": "Docker، Linux، Git، GitHub Actions، GitLab CI/CD، عیب‌یابی استقرار و مستندات فنی."
      },
      {
        "title": "هوش مصنوعی و مهندسی Agent",
        "body": "اپلیکیشن‌های LLM، هماهنگ‌سازی agentها، تحویل کار بین چند agent، گردش‌کار BMAD Method، مهندسی prompt، طراحی context و توسعه با ابزارهای هوشمند."
      }
    ],
    "contact": {
      "currentGithub": "GitHub فعلی",
      "originalGithub": "GitHub قبلی"
    },
    "footer": {
      "line": "مهندسی نرم‌افزار · تجربه فول‌استک · تمرکز بک‌اند"
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
        "title": "GreenProof",
        "body": "پروژه بازار اثرات محیط‌زیستی با Next.js، NestJS، PostgreSQL، Prisma و Docker.",
        "tags": [
          "Next.js",
          "NestJS",
          "PostgreSQL",
          "Prisma"
        ],
        "url": "https://github.com/hosseinsam/greenProof",
        "image": "./assets/illustrations/greenproof.png"
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
document.getElementById("year").textContent = new Date().getFullYear();

renderResume();
applyLanguage();
