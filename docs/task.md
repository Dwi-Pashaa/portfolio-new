# Task & Progress Tracker
**Project:** Dwi Pasha Neo-Brutalist Portfolio Website  
**Stack:** React JS + Vite + Tailwind CSS + Lucide Icons + Docker  
**Status:** Implementation Complete & Ready for Verification

---

## 📋 Task List & Progress

### 1. Planning, Research & Design Specification
- [x] Analisis data profil dari LinkedIn (`/in/dwipasha`) dan Google Scholar (`rWct3k0AAAAJ`).
- [x] Penyusunan spesifikasi desain lengkap di `docs/design.md` (Gaya Neo-Brutalism terinspirasi dari referensi *Sweepy UI Kit*).
- [x] Penyesuaian tema warna: Base Biru & Putih Profesional (`#FFFFFF`, `#F4F8FC`, `#2563EB`) dengan aksen dinamis (*Cyber Yellow*, *Mint Green*, *Coral Rose*, *Indigo*).
- [x] Perancangan arsitektur 9 section terstruktur (Navbar, Hero, About Me, Skills, Projects, Experience, Services, Contact, Footer).
- [x] Perancangan tema *Interactive Developer Terminal* untuk section About Me.
- [x] Perancangan sistem *Bilingual Multi-Language* (Bahasa Indonesia 🇮🇩 & English 🇬🇧).
- [x] Perancangan strategi responsif lintas perangkat (Mobile Smartphone, Tablet, Desktop Widescreen).
- [x] Konfigurasi arsitektur kontainerisasi Docker (*Dockerfile.dev*, *Dockerfile Multi-Stage*, *docker-compose.yml*, *nginx.conf*).
- [x] Penyusunan *Implementation Plan* di `docs/implementation_plan.md`.

---

### 2. Project Setup & Configuration
- [x] Pembuatan `package.json` dengan dependencies (React 18, Vite 6, Tailwind CSS, Lucide Icons, Canvas Confetti).
- [x] Pembuatan `vite.config.js` dengan konfigurasi HMR polling untuk Docker volume di Windows.
- [x] Pembuatan `postcss.config.js` dan `tailwind.config.js` (Custom shadow brutalist, palet warna, tipografi Space Grotesk & Plus Jakarta Sans).
- [x] Pembuatan `src/index.css` (Background blueprint grid canvas, brutalist utilities, custom scrollbar).
- [x] Pembuatan `index.html` dengan Google Fonts dan SEO meta tags.

---

### 3. Data Store & Localization (i18n) Layer
- [x] Pembuatan `src/context/LanguageContext.jsx` (Global state 'id' | 'en' dengan persistensi `localStorage`).
- [x] Pembuatan `src/data/translations.js` (Kamus terjemahan bilingual lengkap untuk seluruh 9 section dan komponen UI).
- [x] Pembuatan `src/data/portfolioData.js` (Data autentik publikasi buku Sonpedia 2025, riset AI/ML, pengalaman kerja Pertamina, CIO Network & PT KAI, skill matrix, dan proyek unggulan).

---

### 4. Reusable Common Components
- [x] `LanguageSwitcher.jsx` (Pill toggle switch bilingual ID/EN).
- [x] `BrutalistButton.jsx` (Tombol efek taktil fisik warna Kuning, Biru, Putih, Mint, Dark dengan confetti trigger).
- [x] `BrutalistCard.jsx` (Kontainer kartu dengan border tebal & hard shadow).
- [x] `PillBadge.jsx` (Tag badge warna-warni dengan ikon).
- [x] `SectionHeader.jsx` (Header section dengan sticker badge kategori).
- [x] `ProjectModal.jsx` (Modal detail proyek, pembaca abstrak, dan 1-Click Copy Citation BibTeX/APA).

---

### 5. 9 Core Sections Development
- [x] **Section 1**: `Navbar.jsx` (Sticky header, brand badge, navigasi desktop, mobile slide drawer, language toggle, dual CTA).
- [x] **Section 2**: `Hero.jsx` (Sweepy window mockup frame, floating role badges, status aktif, live stats, primary CTAs).
- [x] **Section 3**: `AboutMe.jsx` (Interactive Developer Terminal dengan syntax highlight, prompt dinamis, dan copy terminal output).
- [x] **Section 4**: `Skills.jsx` (Bento matrix 4 pilar: Agentic AI, Full-Stack, Architecture & Database, IT Support & Tools).
- [x] **Section 5**: `Projects.jsx` (Katalog 6 proyek/riset unggulan, filter kategori horizontal scroll mobile, modal detail & sitasi).
- [x] **Section 6**: `Experience.jsx` (Timeline interaktif pengalaman kerja Pertamina, CIO Network, KAI, pendidikan UCIC, buku Sonpedia).
- [x] **Section 7**: `Journals.jsx` (Publikasi 6 jurnal ilmiah, buku referensi Sonpedia 2025, sitasi APA/BibTeX 1-klik, dan metrik Google Scholar).
- [x] **Section 8**: `Contact.jsx` (Direct contact pills & form pesan interaktif dengan validasi).
- [x] **Section 9**: `Footer.jsx` (Running marquee ticker, quick links navigasi, social links, back-to-top button).
- [x] `App.jsx` & `main.jsx` (Assembly layout root).

---

### 6. Docker Containerization
- [x] Pembuatan `Dockerfile.dev` (Node.js 20 Alpine untuk local development dengan live HMR).
- [x] Pembuatan `Dockerfile` multi-stage (Node.js builder -> Nginx Alpine production server).
- [x] Pembuatan `nginx.conf` (SPA client-side routing, Gzip, cache headers).
- [x] Pembuatan `docker-compose.yml` (Service `dev` port 5173 dengan hot reload & Service `prod` port 8080).
- [x] Pembuatan `.dockerignore`.

---

### 7. Build, Verification & Testing
- [x] Semua file kode sumber berhasil dibuat dan disinkronkan.
- [ ] Siap dijalankan dengan Docker: `docker compose up dev` atau `docker compose up prod`.
