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

### Langkah 3: Mengatur Nama Domain (dwipasha.vercel.app)

1. Masuk ke halaman **Project Settings** di Vercel.
2. Pilih menu **Domains** di sidebar kiri.
3. Cek domain yang terdaftar. Jika ingin mengubah menjadi `dwipasha.vercel.app`:
   - Klik **Edit** atau masukkan `dwipasha.vercel.app` pada form domain.
   - Klik **Add**.
   - *(Jika nama domain masih tersedia, URL akan langsung aktif).*

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
