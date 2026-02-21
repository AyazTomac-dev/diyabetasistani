# Hızlı Deploy Kılavuzu

## 🚀 En Hızlı Yol: Vercel CLI

### 1. Vercel CLI Kurulumu
```bash
npm install -g vercel
```

### 2. Login
```bash
vercel login
```
Tarayıcı açılacak, GitHub/GitLab/Bitbucket ile giriş yapın.

### 3. Deploy
```bash
# Proje klasöründe
cd "a:\Yazılım\Diyabet Asistanım"

# Deploy (interaktif - sorular soracak)
vercel

# Production deploy
vercel --prod
```

**Avantaj:** Git repository gerekmez, dosyalar direkt upload edilir.

---

## 📦 Git ile Deploy (Önerilen)

### 1. Git Initialize
```bash
git init
git add .
git commit -m "Initial commit"
```

### 2. GitHub'a Push
```bash
# GitHub'da repository oluşturun, sonra:
git remote add origin https://github.com/KULLANICI_ADI/REPO_ADI.git
git branch -M main
git push -u origin main
```

### 3. Vercel Dashboard
1. Vercel.com → Add New Project
2. GitHub repository'nizi seçin
3. Import → Deploy

**Avantaj:** Otomatik deploy, versiyon kontrolü, kolay yönetim.

---

## ⚙️ Vercel Dashboard Ayarları (Her İki Yol İçin)

**Settings → Build & Development Settings:**

```
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install
Node.js Version: 20.x
```

---

## ✅ Deploy Sonrası Kontrol

1. Build loglarını kontrol edin (1-3 dakika sürmeli)
2. `dist` klasörü oluştu mu?
3. `npm run build` çalıştı mı?
4. Site açılıyor mu?

---

## 🆘 Hala Çalışmıyor?

1. **Local build testi:**
   ```bash
   npm install
   npm run build
   ```

2. **Build loglarını kontrol edin:**
   - Vercel Dashboard → Deployments → Build Logs

3. **Hata mesajlarını paylaşın**
