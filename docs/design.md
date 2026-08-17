# Design System & UI/UX Specification

**Project:** Dwi Pasha Portfolio Website  
**Style:** Neo-Brutalism / Playful High-Contrast Brutalism (Sweepy-inspired)  
**Theme:** Professional Blue & White Base (`#FFFFFF` + `#F4F8FC` + `#2563EB`) + Dynamic Accent Buttons & Badges (Cyber Yellow `#FFD000`, Mint `#10B981`, Coral `#FF6B6B`, Purple `#818CF8`)  
**Target Profile:** Dwi Pasha Anggara Putra (AI & ML Researcher | Full-Stack Web Developer | Information Systems Specialist)

---

## 1. Complete Section Structure

Berdasarkan spesifikasi terstruktur yang diminta, website akan memuat 9 section utama yang saling terhubung secara mulus dengan smooth scrolling:

### 1. Navbar / Header (Sticky)

- **Brand Logo Badge**: `⚡ DWI PASHA` (Pill dengan border solid hitam 2.5px, background putih/biru, hard shadow).
- **Language Switcher Pill**: `🇮🇩 ID | 🇬🇧 EN` toggle switch interaktif bergaya Neo-Brutalist di Navbar & Mobile Drawer dengan penyimpanan preferensi di `localStorage`.
- **Navigation Links (Bilingual)**: `Home / Beranda`, `About / Tentang`, `Skills / Keahlian`, `Projects / Proyek`, `Experience / Pengalaman`, `Services / Layanan`, `Contact / Kontak`.
- **Action CTAs**:
  - Tombol Kuning: `"Download CV 📄"`
  - Tombol Biru: `"Hubungi Saya / Get in Touch 💬"`
- **Fitur**: Sticky top dengan efek glass/solid brutalist border, switcher bahasa instan, mobile responsive drawer/hamburger menu.

### 2. Hero Section (Sweepy-Inspired Window Frame)

- **Floating Badge Pills**:
  - `💻 Fullstack Developer` (Aksen Biru `#2563EB` / `#DBEAFE`)
  - `🤖 AI Engineer` (Aksen Coral/Purple `#FF6B6B` / `#818CF8`)
  - `🛠️ IT Support` (Aksen Kuning/Mint `#FFD000` / `#10B981`)
- **Headline**: **"Membangun Sistem Web Cerdas & Arsitektur Informasi Skalabel."**
- **Tagline / Peran**: _"AI & Machine Learning Researcher | Full-Stack Web Developer"_
- **Sub-deskripsi**: Menggabungkan riset Machine Learning / Reinforcement Learning terkini dengan pengembangan aplikasi web modern dan perancangan arsitektur enterprise (Zachman Framework).
- **CTA Buttons**:
  - Primary (Cyber Yellow): `"Lihat Portfolio & Project →"`
  - Secondary (White/Navy): `"Hubungi Saya ✉️"`
- **Hero Window Card (Sweepy UI Mockup Frame)**:
  - Header bar dengan 3 dots window controls (`red`, `yellow`, `green`) + URL bar `https://dwipasha.dev/profile`.
  - Foto / Avatar ilustratif berbingkai brutalist.
  - Kartu ringkasan interaktif: Status `"Available for Projects & Research 🟢"`, 4+ Citations, 5+ Core Projects.

### 3. About Me Section (Neo-Brutalist Developer Terminal Window)

Bagian About Me didesain eksklusif dengan **tema Terminal / Console Developer Interaktif** (`<TerminalAbout />`) yang menggabungkan estetika Neo-Brutalism dengan nuansa coding profesional:

- **Terminal Window Frame**:
  - Top Title Bar: Tombol kontrol jendela (`🔴 Red`, `🟡 Yellow`, `🟢 Green`), status `zsh - pasha@dwipasha-dev: ~/about-me`, serta tombol *Quick Action* `[📋 Copy Text]`.
  - Border & Shadow: Bingkai hitam pekat `border-[3px] border-slate-900` dengan drop shadow offset brutalist `shadow-[6px_6px_0px_#0F172A]`.
  - Background: Deep Dark Slate/Ink (`#0B0F19` / `#0F172A`) dengan font monospace *JetBrains Mono*.

- **Terminal Commands & Konten Output**:
  - **Command 1**: `pasha@system:~$ cat about_me.txt`
  - **Output Paragraf 1**:
    > "Fullstack Developer and AI Engineer with a background in IT Support, dedicated to bridging intelligent systems, scalable web architecture, and reliable IT operations. In web development, I design and build applications using Laravel, PHP, JavaScript, React, and Node.js, applying MVC principles and RESTful API design to deliver clean, maintainable, and scalable systems. In artificial intelligence, I develop Agentic AI systems and machine learning models, including LSTM-based architectures, using Python to support advanced analytics and predictive capabilities most notably applied in a project leveraging Agentic AI and LSTM within the ISP domain."
  - **Output Paragraf 2**:
    > "My background in IT Support further strengthens this foundation, with hands-on experience in network technologies, hardware maintenance, and IT asset management providing a well-rounded understanding of systems from both a development and operational standpoint. This cross-disciplinary experience allows me to approach challenges holistically, from writing code, to designing intelligent models, to maintaining the infrastructure that supports them. I am open to collaboration, technical discussions, and new opportunities in web development, AI engineering, and IT operations."
  - **Interactive Terminal Prompt**:
    - `pasha@system:~$ echo $STATUS` ➔ `Available for Fullstack, AI & IT Operations Opportunities 🚀`
    - Live animated blinking cursor: `▋`

- **Quick Bento Badges di Samping/Bawah Terminal**:
  - 🎓 **Edukasi**: Sistem Informasi @ Universitas Catur Insan Cendekia (UCIC) & MAN 4 Cirebon.
  - 📚 **Publikasi**: Penulis Buku *Machine Learning Untuk Pendidikan STEM* (Sonpedia 2025).
  - ⚡ **Cross-Disciplinary Edge**: Fullstack Dev ✦ Agentic AI / LSTM ✦ IT Support & Network.

### 4. Skills / Tech Stack Section

Tampilan terorganisir dalam bentuk kategori kartu Bento Neo-Brutalist dengan badge icon, visual pills, dan asosiasi proyek nyata:

- **1. Agentic AI & Machine Learning**:
  - **Core**: Multi-agent Systems, Agentic AI Development, LangChain, Deep Learning, Long Short-term Memory (LSTM).
  - **Flagship AI Implementation**: *Ayunda (Agentic AI For User Network Demand Analytics)*.
  - **Languages & Tools**: Python (Python Essentials 1), Scikit-Learn, PyTorch, REST API for AI.

- **2. Full-Stack Web & Mobile Development**:
  - **Frontend**: React.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Bootstrap, jQuery, Progressive Web Apps (PWAs).
  - **Backend & Frameworks**: Laravel, PHP, Node.js, Express.js, CodeIgniter, Modular Programming.
  - **Mobile**: Flutter (PT Kereta Api Indonesia internal tools).
  - **Integration & Systems**: Payment Gateways (*LuxBliss Vogue*, *UCAREER*), Postman API Testing.

- **3. Database & System Architecture**:
  - **Databases**: MySQL, PostgreSQL, Relational Schema Design.
  - **Architecture**: Zachman Framework, Enterprise Architecture, RESTful API Architecture, UML & BPMN.

- **4. IT Support, Network & Infrastructure**:
  - **Infrastructure**: Network Engineering, Technical Support, IT Asset Management.
  - **Hardware/IoT Integration**: SPBU Digitalization (POS, EDC, ATG, Dispenser at PT Pertamina Patra Niaga), CCTV System Monitoring.

- **5. UI/UX & Developer Tools**:
  - **Design**: Figma (UI/UX wireframing & prototyping for *CIO Network*, *LuxBliss Vogue*, *UCAREER*).
  - **Workflow**: Git & GitHub, Docker, Vite, Mendeley, Google Scholar.

---

### 5. Projects / Portfolio Section (Featured 6 Best Works)

Setiap card dilengkapi thumbnail mockup brutalist, badge kategori warna-warni, deskripsi mendalam, tech stack tags, dan tautan langsung (Live Demo / GitHub / Riset):

1. **Ayunda — Agentic AI For User Network Demand Analytics**
   - _Kategori_: Agentic AI & Deep Learning (Aksen Coral `#FF6B6B`)
   - _Deskripsi_: Sistem Multi-agent AI otonom berbasis LangChain, Deep Learning, dan model LSTM untuk memprediksi dan menganalisis permintaan jaringan pengguna (network demand) secara cerdas dan real-time.
   - _Tech_: Agentic AI, LangChain, Multi-Agent, Python, LSTM, Deep Learning, REST API, React.js.
   - _Links_: Research Case / Architecture / Demo.

2. **Data CIO Network — Integrated ISP Management & Monitoring Platform**
   - _Kategori_: Fullstack Web & Enterprise (Aksen Biru `#2563EB`)
   - _Deskripsi_: Platform terintegrasi end-to-end untuk manajemen jaringan ISP, pengelolaan pelanggan, billing, kasir POS voucher internet, dan slip gaji (payroll) otomatis dengan monitoring 24/7.
   - _Tech_: Laravel, PHP, MySQL, Figma, Postman API, REST API.
   - _Links_: [Live Site: data.cionetwork.id](https://data.cionetwork.id/) / Case Study.

3. **AI-Powered Adaptive STEM Learning Platform**
   - _Kategori_: AI & Machine Learning / EdTech (Aksen Kuning `#FFD000`)
   - _Deskripsi_: Model pembelajaran adaptif menggunakan algoritma Actor-Critic Reinforcement Learning untuk personalisasi jalur belajar STEM (diterbitkan dalam buku referensi Sonpedia 2025).
   - _Tech_: Python, Reinforcement Learning, Actor-Critic, PyTorch.
   - _Links_: Sonpedia Book / Google Scholar.

4. **UCAREER & MyCPL UCIC — Career & Learning Outcomes PWA**
   - _Kategori_: Web App & PWA (Aksen Mint `#10B981`)
   - _Deskripsi_: Aplikasi web progresif (PWA) untuk portal karir mahasiswa dan platform pemetaan Capaian Pembelajaran Lulusan (CPL) berbasis modular programming, terintegrasi dengan Payment Gateway & Postman API.
   - _Tech_: React.js, Laravel, PWA, Payment Gateway, MySQL, Figma.
   - _Links_: Demo Portal / Repo.

5. **Academic Information System (Zachman Framework) — MAN 4 Cirebon**
   - _Kategori_: Enterprise Architecture & Web System (Aksen Ungu `#818CF8`)
   - _Deskripsi_: Perancangan sistem informasi akademik komprehensif berbasis web dengan implementasi Framework Zachman untuk standarisasi alur data dan proses bisnis sekolah.
   - _Tech_: PHP, MySQL, Zachman Framework, UML Architecture.
   - _Links_: Research Paper / Case Study.

6. **LuxBliss Vogue & Student Business Corner UCIC — E-Commerce Platform**
   - _Kategori_: Fullstack E-Commerce (Aksen Oranye `#F97316`)
   - _Deskripsi_: Platform e-commerce interaktif dengan integrasi Payment Gateway, katalog produk real-time, manajemen stok, dan transaksi digital mahasiswa.
   - _Tech_: Laravel, PHP, MySQL, Payment Gateway, Figma, JavaScript.
   - _Links_: Live Store / Repo.

### 6. Experience & Education Timeline (`<Experience />`)

Timeline interaktif bergaya Neo-Brutalist dengan status card, badge tech stack, dan deskripsi detail:

#### **A. Riwayat Pengalaman Kerja & Profesional**:

1. **Engineer On Site (Teknisi IT)** — **PT Pertamina Patra Niaga** _(Kontrak | Agu 2026 - Saat ini)_
   - _Tanggung Jawab_: Memegang kendali penuh digitalisasi SPBU secara end-to-end (instalasi & integrasi POS, EDC, Dispenser, ATG), pemantauan data transaksi real-time & stok BBM harian.
   - _Operasional & Maintenance_: Melaksanakan _preventive maintenance_ (inspeksi rutin, data backup) dan _corrective maintenance_ (helpdesk ticketing, Root Cause Analysis/RCA, reintegrasi perangkat) demi menjamin SLA standar layanan digitalisasi.
   - _Keahlian_: Technical Support, Network Engineering, Hardware-System Integration, SLA Management.

2. **Fullstack Developer** — **CIO NETWORK SOLUTION** _(Freelance | Mar 2025 - Jul 2026 | Remote)_
   - _Sistem 1_: Merancang & membangun **Data CIO Network** (`data.cionetwork.id`), platform manajemen jaringan, pelanggan, dan operasional ISP end-to-end dengan monitoring 24/7 & sistem keamanan data.
   - _Sistem 2_: Mengembangkan aplikasi kasir (POS) voucher internet (pencatatan penjualan, stok, laporan real-time).
   - _Sistem 3_: Membangun sistem slip penggajian (Payroll) otomatis dengan cetak slip digital.
   - _Tech_: Laravel, PHP, MySQL, Figma, Postman API.

3. **IT Support & Software Dev Intern** — **PT Kereta Api Indonesia (Persero)** _(Magang | Sep 2025 - Jan 2026 | On-site Cirebon)_
   - Memberikan dukungan teknis hardware, software, dan jaringan operasional harian di lingkungan PT KAI Cirebon.
   - Pengujian API internal menggunakan Postman, pengembangan aplikasi berbasis Flutter, PHP, dan Laravel/MySQL.
   - Membangun website sistem pendaftaran kupon konsumsi & inspeksi CCTV gerbong kereta api.
   - _Tech_: Flutter, Laravel, PHP, Postman API, JavaScript, Figma.

4. **Fullstack Developer** — **CV Aglar Nusantara** _(Freelance | Jun 2024 - Agu 2024 | Remote Jember)_
   - Pengembangan modul web dan arsitektur aplikasi berbasis PHP & Laravel.

5. **Web Developer** — **Fakultas Kedokteran Gigi Universitas Hasanuddin** _(Freelance | Jan 2024 - Feb 2024 | Remote Makassar)_
   - Pengembangan portal dan sistem informasi berbasis web menggunakan PHP & Laravel.

6. **Web Developer** — **Fakultas Kehutanan Universitas Mulawarman** _(Freelance | Nov 2023 - Des 2023 | Remote Samarinda)_
   - Pengembangan website profil dan sistem akademik fakultas menggunakan PHP & MySQL.

#### **B. Riwayat Pendidikan & Publikasi Akademik**:

1. **Universitas Catur Insan Cendekia (UCIC)** — S1 Sistem Informasi _(Mahasiswa Aktif)_
2. **MAN 4 Cirebon** — Jurusan IPS _(Alumni)_
3. **Penulis Buku Ilmiah** — Sonpedia Publishing Indonesia _(2025)_ — _Machine Learning Untuk Pendidikan STEM_
4. **Pengurus HIMASI (Himpunan Mahasiswa Sistem Informasi)** — UCIC _(2023 - Sekarang)_

### 7. Services (Layanan Profesional / Freelance)

Card Neo-Brutalist interaktif dengan ikon dan rincian servis:

1. **Full-Stack Web Development**: Pembuatan web app responsif, dashboard admin, dan landing page modern (React, Laravel, Tailwind).
2. **AI & Machine Learning Implementation**: Pengembangan model klasifikasi, clustering, sistem adaptif, dan integrasi API AI.
3. **Enterprise Architecture & System Design**: Pemetaan proses bisnis menggunakan Zachman Framework, perancangan database & diagram UML.
4. **Data Analytics & Research Consulting**: Olah data riset, analisis statistik data bisnis/akademik, dan persiapan publikasi.

### 8. Contact Section

- **Dual Layout Card**:
  - **Kiri**: Informasi kontak langsung dengan badge interaktif (Email, WhatsApp, LinkedIn `linkedin.com/in/dwipasha`, Google Scholar, GitHub, Lokasi: Cirebon, Jawa Barat).
  - **Kanan**: Form pesan Neo-Brutalist (Nama, Email, Subjek/Kategori Layanan, Pesan) dengan validasi instan dan feedback interaktif.

### 9. Footer

- **Marquee Ticker**: Pita teks berjalan dengan highlight skill dan filosofi.
- **Quick Links**: Tautan navigasi cepat ke seluruh section.
- **Social Media Icons**: LinkedIn, Google Scholar, GitHub, Instagram, Email.
- **Copyright & Back-to-Top**: Tombol brutalist untuk scroll instan ke atas.

---

## 2. Color Palette & Component Tokens

| Kategori Token             | Nilai Hex / Class              | Penerapan                                     |
| :------------------------- | :----------------------------- | :-------------------------------------------- |
| **Canvas Background**      | `#F4F8FC` / `bg-blue-50/50`    | Background utama dengan grid halus            |
| **Surface White**          | `#FFFFFF` / `bg-white`         | Kartu konten utama, form input                |
| **Deep Ink Border**        | `#0F172A` / `border-slate-900` | Border tebal 2.5px - 3px, hard shadows        |
| **Primary Royal Blue**     | `#2563EB` / `bg-blue-600`      | Header aksen, active state, link utama        |
| **CTA Cyber Yellow**       | `#FFD000` / `#FFE600`          | Tombol CTA utama (Lihat Project, Download CV) |
| **Mint Green Accent**      | `#10B981` / `#34D399`          | Badge status aktif, metrik sukses             |
| **Coral Rose Accent**      | `#FF6B6B` / `#FB7185`          | Tag AI/ML & highlight khusus                  |
| **Indigo / Purple Accent** | `#818CF8` / `#6366F1`          | Badge publikasi buku & Zachman                |

---

## 3. Responsive Design & Mobile-First Optimization Strategy

Untuk memastikan tampilan dan performa website tetap sempurna, tajam, dan interaktif baik di perangkat smartphone (320px - 640px), tablet (641px - 1024px), maupun desktop layar lebar (1025px - 1920px+):

### 3.1 Breakpoint Matrix & Layout Adapters

| Breakpoint | Target Screen | Adaptasi Layout & Interaksi |
| :--- | :--- | :--- |
| **Mobile (`< 640px` / `sm`)** | iPhone, Android Phones | - Navbar beralih ke *Brutalist Hamburger Floating Menu* & Full-screen slide drawer.<br>- Hero layout menjadi 1 kolom vertikal (Headline di atas, Sweepy window frame di bawah).<br>- Hard shadow disesuaikan menjadi `shadow-[3px_3px_0px_#0F172A]` agar proporsional di layar kecil.<br>- Filter kategori project dapat digeser secara horizontal (*horizontal scroll with snap*).<br>- Tombol CTA memiliki *touch target* minimal `48px` untuk kemudahan tap jempol.<br>- Bento grid beralih ke single-column stack yang nyaman di-scroll. |
| **Tablet (`640px - 1024px` / `md` & `lg`)** | iPad, Tablets, Small Laptops | - Bento grid 2 kolom (`grid-cols-2`).<br>- Hero section 2 kolom seimbang.<br>- Navbar menampilkan menu navigasi ringkas dan CTA primer.<br>- Project cards tampil dalam formasi 2 kolom sejajar. |
| **Desktop (`> 1024px` / `xl` & `2xl`)** | Laptops, Desktop Monitors | - Full expanded Bento Grid (3-4 kolom).<br>- Sweepy Hero Window frame lengkap dengan floating pill badges & interactive quick stats.<br>- Full sticky navbar dengan seluruh tautan navigasi dan dual action buttons.<br>- Shadow brutalist penuh `shadow-[6px_6px_0px_#0F172A]` hingga `shadow-[8px_8px_0px_#0F172A]`. |

### 3.2 Mobile-Specific UX Enhancements
1. **Touch-Optimized Active Feedback**: Mengganti efek `:hover` desktop yang kaku dengan `:active` scale/translation effect yang responsif saat disentuh.
2. **Modal & Drawer Scrolling**: Modal detail proyek dan drawer menu mobile dilengkapi `overflow-y-auto` dengan isolasi backdrop blur dan tombol tutup yang mudah dijangkau (*thumb zone*).
3. **Fluid Typography**: Menggunakan ukuran font responsif berbasis Tailwind (misal `text-3xl sm:text-4xl lg:text-6xl` untuk judul utama) agar tidak terjadi text-overflow pada layar beresolusi kecil.
### 3.3 Deployment & Containerization Architecture (Docker)
- **Multi-Stage Build Dockerfile**:
  - `Stage 1 (node:20-alpine)`: Build optimized static bundle with Vite.
  - `Stage 2 (nginx:alpine)`: High-performance, lightweight web server (< 25MB container size).
- **Nginx Configuration (`nginx.conf`)**:
  - SPA fallback routing (`try_files $uri $uri/ /index.html`).
  - Brotli/Gzip compression enabled for high speed score.
  - Security headers (`X-Frame-Options`, `X-Content-Type-Options`, etc.).
- **Docker Compose (`docker-compose.yml`)**:
  - One-command startup via `docker compose up -d` mapping port `8080:80`.
