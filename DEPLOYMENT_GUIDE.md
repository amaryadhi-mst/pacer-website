# PACER Website - Deployment Guide

Panduan lengkap untuk men-deploy website PACER ke hosting gratis menggunakan Vercel atau Netlify.

---

## Option 1: Deploy ke Vercel (Recommended) ⭐

Vercel adalah platform deployment terbaik untuk aplikasi Node.js/React dengan fitur:
- ✅ Gratis untuk unlimited projects
- ✅ Automatic deployments dari Git
- ✅ Free SSL/HTTPS
- ✅ Global CDN
- ✅ Serverless functions
- ✅ Environment variables management

### Langkah-langkah Deploy ke Vercel:

#### 1. Push ke GitHub
```bash
# Jika belum punya GitHub account, buat di https://github.com/signup
# Jika sudah punya, buat repository baru di https://github.com/new

# Clone atau setup remote
git remote add origin https://github.com/YOUR_USERNAME/pacer-website.git
git branch -M main
git push -u origin main
```

#### 2. Buka Vercel
- Kunjungi: https://vercel.com
- Klik "Sign Up" → Pilih "Continue with GitHub"
- Authorize Vercel untuk akses GitHub

#### 3. Import Project
- Di dashboard Vercel, klik "Add New..." → "Project"
- Pilih repository `pacer-website`
- Klik "Import"

#### 4. Configure Project
Vercel akan auto-detect bahwa ini adalah project Node.js/React:

**Framework Preset:** Vite (atau auto-detected)
**Build Command:** `pnpm build`
**Output Directory:** `dist/public`
**Install Command:** `pnpm install`

#### 5. Environment Variables
Tambahkan environment variables yang diperlukan:
```
NODE_ENV=production
```

#### 6. Deploy
- Klik "Deploy"
- Tunggu proses build selesai (~2-3 menit)
- Vercel akan memberikan URL permanent seperti: `https://pacer-website.vercel.app`

#### 7. Custom Domain (Optional)
- Di project settings → "Domains"
- Tambahkan domain custom Anda
- Update DNS records sesuai instruksi Vercel

---

## Option 2: Deploy ke Netlify

Netlify juga platform deployment gratis yang powerful:
- ✅ Gratis untuk unlimited sites
- ✅ Continuous deployment dari Git
- ✅ Free SSL/HTTPS
- ✅ Form handling
- ✅ Serverless functions

### Langkah-langkah Deploy ke Netlify:

#### 1. Push ke GitHub (sama seperti Vercel)

#### 2. Buka Netlify
- Kunjungi: https://netlify.com
- Klik "Sign up" → Pilih "GitHub"
- Authorize Netlify untuk akses GitHub

#### 3. Create New Site
- Klik "Add new site" → "Import an existing project"
- Pilih repository `pacer-website`
- Klik "Connect"

#### 4. Configure Build Settings
**Build command:** `pnpm build`
**Publish directory:** `dist/public`

#### 5. Deploy
- Klik "Deploy site"
- Tunggu proses build selesai
- Netlify akan memberikan URL seperti: `https://pacer-website.netlify.app`

#### 6. Custom Domain (Optional)
- Di Site settings → "Domain management"
- Tambahkan custom domain
- Update DNS records

---

## Perbandingan Vercel vs Netlify

| Fitur | Vercel | Netlify |
|-------|--------|---------|
| **Harga** | Gratis | Gratis |
| **Build Time** | 6000 menit/bulan | 300 menit/bulan |
| **Bandwidth** | 100 GB/bulan | 100 GB/bulan |
| **Serverless Functions** | ✅ | ✅ |
| **Preview Deployments** | ✅ | ✅ |
| **Analytics** | Berbayar | Gratis |
| **Edge Functions** | ✅ | ✅ |
| **Performance** | Sangat Cepat | Cepat |

**Rekomendasi:** Gunakan **Vercel** untuk performa terbaik dan build time unlimited.

---

## Automatic Deployments

Setelah setup awal, setiap kali Anda push ke branch `main`:
1. Vercel/Netlify akan auto-detect perubahan
2. Trigger build otomatis
3. Deploy ke production jika build sukses
4. Website langsung update tanpa downtime

### Workflow Deployment:
```bash
# 1. Buat perubahan di local
git add .
git commit -m "Update design atau fitur"

# 2. Push ke GitHub
git push origin main

# 3. Vercel/Netlify akan otomatis:
#    - Pull kode terbaru
#    - Build project
#    - Deploy ke production
#    - Update website live
```

---

## Environment Variables

Jika ada environment variables yang diperlukan (API keys, database URLs, etc.):

### Di Vercel:
1. Project Settings → "Environment Variables"
2. Tambahkan variable name dan value
3. Pilih environment (Production, Preview, Development)
4. Klik "Save"

### Di Netlify:
1. Site settings → "Build & deploy" → "Environment"
2. Klik "Edit variables"
3. Tambahkan variable
4. Klik "Save"

---

## Troubleshooting

### Build Error: "Module not found"
```bash
# Pastikan semua dependencies terinstall
pnpm install

# Clear cache
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Build Error: "Port already in use"
Website production tidak perlu port tertentu, Vercel/Netlify handle ini otomatis.

### Deployment Gagal
1. Cek build logs di Vercel/Netlify dashboard
2. Pastikan `pnpm build` berjalan sukses di local
3. Pastikan semua environment variables sudah diset

### Website Lambat
- Vercel/Netlify menggunakan global CDN otomatis
- Jika masih lambat, cek:
  - Network tab di browser DevTools
  - Vercel Analytics untuk bottleneck

---

## Monitoring & Logs

### Vercel:
- Dashboard → Project → "Deployments"
- Klik deployment untuk lihat logs
- "Analytics" untuk performa monitoring

### Netlify:
- Dashboard → Site → "Deploys"
- Klik deploy untuk lihat logs
- "Analytics" untuk traffic monitoring

---

## Custom Domain Setup

### Jika punya domain sendiri:

#### 1. Vercel:
- Project Settings → "Domains"
- Input domain name
- Update DNS records di registrar domain Anda:
  - Type: CNAME
  - Name: www (atau subdomain)
  - Value: cname.vercel-dns.com

#### 2. Netlify:
- Site settings → "Domain management"
- Input domain
- Update DNS records sesuai instruksi

---

## Backup & Version Control

Semua code sudah di-track di Git:
```bash
# Lihat history
git log --oneline

# Revert ke versi sebelumnya jika perlu
git revert <commit-hash>
git push origin main
```

Vercel/Netlify akan otomatis deploy versi terbaru.

---

## Next Steps

1. **Push ke GitHub:** Siapkan GitHub repository
2. **Connect ke Vercel/Netlify:** Authorize dan import project
3. **Configure Build:** Set build command dan output directory
4. **Deploy:** Klik deploy dan tunggu selesai
5. **Monitor:** Pantau deployments dan performance

---

## Support

- **Vercel Docs:** https://vercel.com/docs
- **Netlify Docs:** https://docs.netlify.com
- **GitHub Docs:** https://docs.github.com

---

**Website PACER siap untuk production deployment! 🚀**
