# 🚀 Panduan Lengkap Upload & Deploy Portofolio ke Vercel

Dokumen ini berisi panduan langkah demi langkah untuk mengunggah dan mempublikasikan website portofolio **Dwi Pasha** ke **Vercel** secara gratis, cepat, dan terhubung otomatis dengan GitHub (CI/CD).

---

## 📋 Ringkasan Konfigurasi Build

| Pengaturan | Nilai |
| :--- | :--- |
| **Framework Preset** | `Vite` |
| **Build Command** | `npm run build` |
| **Output Directory** | `dist` |
| **Install Command** | `npm install` |
| **Node.js Version** | `18.x` atau `20.x` |

---

## 🌟 Metode 1: Deploy via Dashboard Vercel (Direkomendasikan)

Metode ini paling mudah dan otomatis melakukan pembaruan (auto-deploy) setiap kali Anda melakukan `git push` ke GitHub.

### Langkah 1: Push Project ke GitHub

1. Buka terminal di folder project `d:\porto`.
2. Pastikan file `.gitignore` sudah mencakup `node_modules` dan `dist`.
3. Inisialisasi Git dan commit semua file:
   ```bash
   git init
   git add .
   git commit -m "feat: complete neo-brutalist portfolio dwipasha"
   ```
4. Buat repository baru di [GitHub](https://github.com/new) (contoh nama: `dwipasha-portfolio` atau `porto`).
5. Hubungkan remote repository dan push:
   ```bash
   git branch -M main
   git remote add origin https://github.com/Dwi-Pashaa/dwipasha-portfolio.git
   git push -u origin main
   ```

---

### Langkah 2: Hubungkan & Deploy di Vercel

1. Buka [vercel.com](https://vercel.com/) dan **Log in** menggunakan akun **GitHub** Anda.
2. Di halaman **Dashboard**, klik tombol **`Add New...`** lalu pilih **`Project`**.
3. Cari dan pilih repository **`dwipasha-portfolio`** (atau nama repo yang baru Anda push), lalu klik **`Import`**.
4. Di bagian **Configure Project**:
   - **Project Name**: Masukkan `dwipasha` (jika ingin mendapatkan URL `dwipasha.vercel.app`).
   - **Framework Preset**: Pilih **`Vite`** (biasanya terdeteksi otomatis).
   - **Root Directory**: Biarkan `./`.
   - **Build and Output Settings**: Biarkan default (`npm run build` & `dist`).
5. Klik tombol biru **`Deploy`**.
6. Tunggu proses build selama 30 - 60 detik hingga muncul animasi kembang api 🎉 bertuliskan **"Congratulations!"**.

---

### Langkah 3: Mengatur Nama Domain & Custom Domain

#### A. Menggunakan Subdomain Vercel Gratis
1. Masuk ke **Project Settings** di Vercel > **Domains**.
2. Masukkan nama yang diinginkan, misal `dwipasha.vercel.app` > Klik **Add**.

---

#### B. Menghubungkan Custom Domain Pribadi (`ayunda.cloud` atau `dwipasha.ayunda.cloud`)

Jika Anda memiliki domain **`ayunda.cloud`**:

##### 🔹 Opsi 1: Menggunakan Subdomain `dwipasha.ayunda.cloud` (Rekomendasi jika domain utama dipakai proyek lain)
1. Di Dashboard Vercel > **Project Settings** > **Domains** > Masukkan `dwipasha.ayunda.cloud` > Klik **Add**.
2. Buka panel DNS tempat Anda membeli domain (Cloudflare / Niagahoster / DomaiNesia / Namecheap, dll).
3. Tambahkan DNS Record baru:
   | Type | Name / Host | Target / Value | TTL | Proxy Status (Jika Cloudflare) |
   | :--- | :--- | :--- | :--- | :--- |
   | **CNAME** | `dwipasha` | `cname.vercel-dns.com` | Auto / 3600 | DNS Only (Grey Cloud) |

##### 🔹 Opsi 2: Menggunakan Domain Utama `ayunda.cloud` & `www.ayunda.cloud`
1. Di Dashboard Vercel > **Project Settings** > **Domains** > Masukkan `ayunda.cloud` > Klik **Add** (Vercel akan otomatis menyarankan penambahan `www.ayunda.cloud`).
2. Masuk ke DNS Manager domain Anda dan tambahkan 2 record berikut:
   | Type | Name / Host | Target / Value | TTL |
   | :--- | :--- | :--- | :--- |
   | **A Record** | `@` (root) | `76.76.21.21` | Auto / 3600 |
   | **CNAME** | `www` | `cname.vercel-dns.com` | Auto / 3600 |

> 💡 **Catatan:** Setelah DNS record ditambahkan, Vercel akan otomatis memverifikasi dan menerbitkan sertifikat **SSL (HTTPS)** gratis dalam waktu 1-5 menit.

---

## ⚡ Metode 2: Deploy Cepat via Vercel CLI (Lewat Terminal)

Jika ingin deploy langsung dari terminal tanpa membuka browser:

1. **Install Vercel CLI secara global:**
   ```bash
   npm install -g vercel
   ```

2. **Login ke akun Vercel:**
   ```bash
   vercel login
   ```
   *(Pilih login via GitHub atau Email dan selesaikan verifikasi).*

3. **Jalankan perintah deploy:**
   ```bash
   vercel
   ```
   Ikuti pertanyaan di terminal:
   - *Set up and deploy?* `Y`
   - *Which scope?* (Pilih akun Anda)
   - *Link to existing project?* `N`
   - *What’s your project’s name?* `dwipasha`
   - *In which directory is your code located?* `./`
   - *Want to modify settings?* `N`

4. **Deploy ke Production:**
   ```bash
   vercel --prod
   ```
   Terminal akan langsung menampilkan URL live production Anda.

---

## 🛠️ Tips & Troubleshooting

### 1. Penanganan SPA Routing (Opsional)
Jika Anda menambahkan file `vercel.json` di root folder project, Anda dapat memastikan semua routing diarahkan ke `index.html`:
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### 2. Auto-Deploy Setiap Ada Perubahan
Setelah terhubung dengan GitHub, setiap kali Anda mengedit kode di VS Code / Antigravity dan melakukan:
```bash
git add .
git commit -m "update: perbaikan konten"
git push
```
Vercel akan **otomatis** mendeteksi commit tersebut, melakukan build ulang, dan memperbarui website Anda secara instan tanpa perlu tindakan manual.

---

Selamat, website portofolio Anda sudah siap go live di **https://dwipasha.vercel.app**! 🚀
