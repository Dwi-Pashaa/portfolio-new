# Implementation Plan - Neo-Brutalist Portfolio for Dwi Pasha (9 Structured Sections)

Build a clean, high-performance, and responsive **Neo-Brutalist Portfolio Website** for **Dwi Pasha Anggara Putra** using **React JS** and **Tailwind CSS**, featuring a **professional Blue & White base theme** (`#FFFFFF` + `#F4F8FC` + `#2563EB`) with dynamic accent buttons and badges (Cyber Yellow, Mint, Coral, Purple) directly inspired by the *Sweepy UI* reference.

---

## User Review Required

> [!IMPORTANT]
> **Complete 9-Section Architecture:**
> 1. **Navbar/Header**: Sticky brand logo `⚡ DWI PASHA` + smooth-scroll navigation links + dual CTA buttons ("Download CV" & "Hubungi Saya").
> 2. **Hero Section**: Sweepy-style window mockup frame, role tagline ("Fullstack Developer | AI Engineer | IT Support"), floating badge pills (`💻 Fullstack Developer`, `🤖 AI Engineer`, `🛠️ IT Support`), and dual CTA buttons.
> 3. **About Me (Terminal Themed)**: Interactive Neo-Brutalist Developer Terminal Window (`pasha@dwipasha:~$ cat about_me.txt`) containing:
>    - *"Fullstack Developer and AI Engineer with a background in IT Support, dedicated to bridging intelligent systems, scalable web architecture, and reliable IT operations. In web development, I design and build applications using Laravel, PHP, JavaScript, React, and Node.js, applying MVC principles and RESTful API design to deliver clean, maintainable, and scalable systems. In artificial intelligence, I develop Agentic AI systems and machine learning models, including LSTM-based architectures, using Python to support advanced analytics and predictive capabilities most notably applied in a project leveraging Agentic AI and LSTM within the ISP domain.*
>    - *My background in IT Support further strengthens this foundation, with hands-on experience in network technologies, hardware maintenance, and IT asset management providing a well-rounded understanding of systems from both a development and operational standpoint. This cross-disciplinary experience allows me to approach challenges holistically, from writing code, to designing intelligent models, to maintaining the infrastructure that supports them. I am open to collaboration, technical discussions, and new opportunities in web development, AI engineering, and IT operations."*
>    - Features: Window control buttons (🔴 🟡 🟢), copy output button, interactive command switches (`./view_skills.sh`, `./check_status.sh`), JetBrains Mono monospace typography, and live blinking cursor.
> 4. **Skills/Tech Stack**: Category-grouped Bento grid:
>    - **Agentic AI & Deep Learning**: Multi-agent Systems, LangChain, Ayunda AI, LSTM, Python, PyTorch.
>    - **Fullstack Web & Mobile**: React.js, Laravel, PHP, Node.js/Express, CodeIgniter, Flutter, PWAs, Payment Gateways.
>    - **Databases & Architecture**: MySQL, PostgreSQL, Zachman Framework, REST APIs, UML/BPMN.
>    - **IT Support & Infrastructure**: Network Engineering, IT Support, SPBU Hardware/IoT Integration, Postman API, Figma.
> 5. **Projects/Portfolio**: 6 featured projects and research papers:
>    - **Ayunda (Agentic AI For User Network Demand Analytics)** - LangChain, Multi-agent, LSTM, Python, React.
>    - **Data CIO Network** - Integrated ISP Management & Monitoring Platform (`data.cionetwork.id`, Laravel/MySQL).
>    - **AI-Powered Adaptive STEM Learning Platform** - Actor-Critic RL, Sonpedia Book 2025.
>    - **UCAREER & MyCPL UCIC** - Career & Learning Outcomes PWA (React, Laravel, Payment Gateway).
>    - **Academic Information System (Zachman Framework)** - MAN 4 Cirebon.
>    - **LuxBliss Vogue & Student Business Corner** - E-Commerce Platform with Payment Gateway.
> 6. **Experience/Education**: Interactive timeline with rich real-world experience:
>    - **PT Pertamina Patra Niaga** (Engineer On Site / Teknisi IT - Digitalisasi SPBU, POS, EDC, ATG, SLA).
>    - **CIO NETWORK SOLUTION** (Fullstack Developer - Data CIO Network ISP platform, POS, Payroll).
>    - **PT Kereta Api Indonesia (Persero)** (IT Support & Software Dev Intern - Flutter, Laravel, CCTV, Kupon Web).
>    - **CV Aglar Nusantara**, **FKG Unhas**, & **Fahutan Unmul** (Freelance Web Developer).
>    - **Universitas Catur Insan Cendekia (UCIC)** (S1 Sistem Informasi) & **MAN 4 Cirebon**.
>    - **Sonpedia Publishing** (Penulis Buku STEM ML 2025) & **HIMASI UCIC**.
> 7. **Services**: 4 brutalist cards showcasing core services (Full-Stack Web Development, AI/ML Solutions, Enterprise Architecture & Zachman Framework, Data Analytics & Research Assistance).
> 8. **Contact**: Dual-layout card featuring direct connection pills (Email, WhatsApp, LinkedIn, Scholar, GitHub) and a validated Neo-Brutalist contact form.
> 9. **Footer**: Running marquee ticker tape, quick links, social icons, and back-to-top button.

---

## Proposed File & Component Structure

```
d:/porto/
├── docs/
│   ├── design.md                  # Complete UI/UX specification with color tokens & wireframes
│   ├── implementation_plan.md     # Detailed architecture & technical execution plan
│   └── task.md                    # Live task checklist and execution progress tracker
├── index.html                     # HTML root with Space Grotesk & Plus Jakarta Sans fonts
├── package.json                   # React, Vite, Tailwind CSS, Lucide Icons, Canvas-Confetti
├── vite.config.js                 # Vite config with HMR server polling for Docker volume compatibility
├── tailwind.config.js             # Theme tokens: blue/white base, brutal shadows, custom colors
├── postcss.config.js              # PostCSS config
├── Dockerfile.dev                 # Local Development Docker image (Node.js 20, live HMR reload, port 5173)
├── Dockerfile                     # Production Multi-stage Docker build (Node.js builder -> Nginx Alpine server)
├── docker-compose.yml             # Orchestration for both local dev (`docker compose up dev`) and prod (`docker compose up prod`)
├── nginx.conf                     # Production Nginx config (SPA routing, Gzip, Caching, Security headers)
├── .dockerignore                  # Docker ignore file (node_modules, dist, git)
├── src/
│   ├── index.css                  # Global styles, dot-grid blueprint background, brutalist utilities
│   ├── main.jsx                   # Entry point with LanguageProvider wrapper
│   ├── App.jsx                    # Root layout assembling all 9 sections & citation modal
│   ├── context/
│   │   └── LanguageContext.jsx    # React Context for language state ('id' | 'en') with localStorage persistence
│   ├── data/
│   │   ├── translations.js        # UI translations for Navbar, Buttons, Sections, Forms, Footer
│   │   └── portfolioData.js       # Bilingual data store (Profile, 6 Projects/Papers, Skills, Timeline, Services)
│   ├── components/
│   │   ├── common/
│   │   │   ├── LanguageSwitcher.jsx# Neo-brutalist ID / EN pill toggle switch with smooth animation
│   │   │   ├── BrutalistButton.jsx# Tactile physical press button (Yellow, Blue, White, Mint variants)
│   │   │   ├── BrutalistCard.jsx  # Reusable solid border container with hard offset shadow
│   │   │   ├── PillBadge.jsx      # Rounded tag with icon and customizable tint
│   │   │   ├── SectionHeader.jsx  # Section title with category sticker pill & subtitle
│   │   │   └── ProjectModal.jsx   # Interactive modal for project details, abstract & 1-click citation copy
│   │   └── sections/
│   │       ├── Navbar.jsx         # [Section 1] Sticky navigation bar with Language Switcher & mobile drawer
│   │       ├── Hero.jsx           # [Section 2] Sweepy mockup frame, badges & primary CTAs (Bilingual)
│   │       ├── AboutMe.jsx        # [Section 3] Terminal themed bio & story (ID/EN command & output)
│   │       ├── Skills.jsx         # [Section 4] Bento grid for AI/ML, Web, Architecture & Tools (Bilingual)
│   │       ├── Projects.jsx       # [Section 5] Filterable 6-card portfolio showcase with modal (Bilingual)
│   │       ├── Experience.jsx     # [Section 6] Academic & organization timeline (Bilingual)
│   │       ├── Services.jsx       # [Section 7] 4 Service offerings with feature lists & CTA (Bilingual)
│   │       ├── Contact.jsx        # [Section 8] Direct social pills & interactive contact form (Bilingual)
│   │       └── Footer.jsx         # [Section 9] Marquee ticker, copyright & back-to-top button (Bilingual)
```

---

## Proposed Changes & Implementation Steps

### 1. Initialize Vite + React Project
- Scaffold React app in `d:/porto`.
- Install `tailwindcss`, `postcss`, `autoprefixer`, `lucide-react`, and `canvas-confetti`.

### 2. Configure Tailwind & Global Styles
- Configure `tailwind.config.js`:
  - `brand-blue`: `#2563EB`, `brand-blue-light`: `#DBEAFE`, `canvas`: `#F4F8FC`, `ink`: `#0F172A`.
  - Accents: `accent-yellow`: `#FFD000`, `accent-mint`: `#10B981`, `accent-coral`: `#FF6B6B`, `accent-purple`: `#818CF8`.
  - Shadows: `shadow-brutal-sm`, `shadow-brutal`, `shadow-brutal-lg`, `shadow-brutal-xl`.
- Update `src/index.css` with smooth scroll behavior, custom brutalist scrollbars, and a subtle blueprint grid pattern.

### 3. Build Data Store (`src/data/portfolioData.js`)
- Populate real data from Google Scholar, LinkedIn, UCIC, and academic publications:
  - Personal info, bio, social links (LinkedIn `/in/dwipasha`, Scholar `rWct3k0AAAAJ`, GitHub, Email, WhatsApp).
  - 6 Featured Projects/Publications with abstracts, tech tags, links, and APA/BibTeX citations.
  - Categorized skills matrix with proficiency levels and icons.
  - Education & experience timeline entries.
  - 4 Professional service packages.

### 4. Build Components (9 Sections with Mobile & Desktop Responsive Layouts)
- Implement `Navbar` (with desktop links & mobile brutalist slide drawer).
- Implement `Hero` (responsive 2-col desktop / stacked mobile Sweepy mockup frame with touch-friendly badges).
- Implement `AboutMe` (fluid typography & responsive bento tiles).
- Implement `Skills` (Bento matrix adapting from 1-col mobile to 4-col desktop).
- Implement `Projects` (Horizontal snap scrolling filters on mobile, 2-3 col grid on desktop, full modal with 1-click citation copy).
- Implement `Experience` (Mobile-optimized connecting timeline).
- Implement `Services` (Responsive 1-to-2 col service cards with touch-friendly actions).
- Implement `Contact` (Responsive 2-col desktop / 1-col mobile with full input validation).
- Implement `Footer` (Marquee ticker, responsive links, social icons & back-to-top).

### 5. Docker Containerization & Local Dev / Prod Environment
- **Local Development (`Dockerfile.dev` & `docker compose up dev`)**:
  - Base Image: `node:20-alpine`.
  - Live code mounting: Volume mount `.:/app` with anonymous volume `/app/node_modules`.
  - Vite HMR configuration: Polling enabled (`usePolling: true`) for instantaneous hot reload across Docker volumes on Windows.
  - Development port mapping: `5173:5173`.
  - Command: `npm run dev -- --host 0.0.0.0`.
- **Production Environment (`Dockerfile` & `docker compose up prod`)**:
  - **Stage 1 (Builder)**: `node:20-alpine`, installs dependencies and executes `npm run build`.
  - **Stage 2 (Server)**: `nginx:alpine`, serves the optimized static bundle from `/usr/share/nginx/html`.
  - Production port mapping: `8080:80`.
- **Nginx Configuration (`nginx.conf`)**:
  - SPA client-side routing fallback (`try_files $uri $uri/ /index.html`).
  - Gzip compression for high lighthouse scores.
  - Security headers & static asset caching.
- **Docker Compose (`docker-compose.yml`)**:
  - Dual service configuration: `dev` (hot module replacement on port 5173) and `prod` (Nginx server on port 8080).
- **`.dockerignore`**:
  - Excludes `node_modules`, `dist`, `.git`, `.vscode` for fast builds.

---

## Verification Plan

### Automated Verification
- Run `npm run build` to verify 0 compile/bundle errors.
- Test Docker build (`docker build -t dwipasha-portfolio .`) if Docker daemon is available, or validate Dockerfile & compose syntax.

### Manual Verification (Mobile & Desktop Cross-Device Testing)
- Start `npm run dev` and test:
  1. **Mobile Viewport (375px - 414px - iPhone / Android)**:
     - Test hamburger menu toggle and navigation links.
     - Verify no horizontal screen overflow or clipping.
     - Test touch targets for all CTA buttons (`min 48px`).
     - Test horizontal filter scroll on Projects section.
  2. **Tablet Viewport (768px - iPad / Tablet)**:
     - Verify 2-column bento grids and balanced hero section.
  3. **Desktop Viewport (1280px - 1920px+ Full HD)**:
     - Verify Sweepy window mockup frame fidelity, full navbar, and expanded 6px-8px hard drop shadows.
  4. **Interactivity & Modals**:
     - Test Project/Publication details modal, BibTeX / APA 1-click copy toast, and confetti fire on primary CTA click.
