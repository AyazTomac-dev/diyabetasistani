# Git Repository Kurulumu ve Vercel Deploy

## Sorun
Vercel `package.json` dosyasını bulamıyor çünkü dosyalar Git repository'ye commit edilmemiş.

## Çözüm: Git Repository Oluşturma

### Adım 1: Git Repository Initialize Et

Terminal'de proje klasöründe:

```bash
# Git repository oluştur
git init

# Tüm dosyaları ekle (node_modules ve dist hariç - .gitignore'da zaten var)
git add .

# İlk commit
git commit -m "Initial commit: GlucoPilot PWA"
```

### Adım 2: GitHub Repository Oluştur

1. GitHub'a gidin (github.com)
2. Yeni repository oluşturun:
   - Repository name: `Diyabet-Asistanim` (veya istediğiniz isim)
   - Public veya Private seçin
   - **Initialize with README seçmeyin** (zaten dosyalarımız var)
   - Create repository

### Adım 3: GitHub'a Push Et

GitHub'da repository oluşturduktan sonra, GitHub'ın gösterdiği komutları kullanın:

```bash
# Remote ekle (YOUR_USERNAME ve REPO_NAME'i değiştirin)
git remote add origin https://github.com/YOUR_USERNAME/Diyabet-Asistanim.git

# Branch'i main olarak ayarla
git branch -M main

# Push et
git push -u origin main
```

### Adım 4: Vercel'e Bağla

1. Vercel Dashboard'a gidin
2. **Add New Project** tıklayın
3. GitHub repository'nizi seçin (`Diyabet-Asistanim`)
4. **Import** tıklayın

### Adım 5: Vercel Build Ayarları

Vercel otomatik algılamalı, ama kontrol edin:

- **Framework Preset:** Vite
- **Root Directory:** `./` (boş bırakın veya `.`)
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`

### Adım 6: Deploy

**Deploy** butonuna tıklayın.

## Alternatif: Vercel CLI ile Deploy (Git olmadan)

Eğer Git kullanmak istemiyorsanız:

```bash
# Vercel CLI kurulumu
npm install -g vercel

# Login
vercel login

# Deploy (interaktif)
vercel

# Production deploy
vercel --prod
```

**Not:** CLI ile deploy ederken tüm dosyalar otomatik olarak upload edilir.

## Kontrol Listesi

Deploy öncesi kontrol edin:

- [ ] `package.json` dosyası var
- [ ] `vercel.json` dosyası var
- [ ] `src/` klasörü var
- [ ] `public/` klasörü var
- [ ] `index.html` dosyası var
- [ ] `.gitignore` dosyası var (node_modules ve dist ignore edilmiş)
- [ ] Git repository oluşturuldu
- [ ] Dosyalar commit edildi
- [ ] GitHub'a push edildi
- [ ] Vercel'e bağlandı

## Sorun Giderme

### "package.json not found" Hatası
- Dosyalar Git'e commit edilmiş mi kontrol edin: `git status`
- Vercel Dashboard'da Root Directory doğru mu kontrol edin

### Build Başarısız
- Local'de test edin: `npm install && npm run build`
- Build loglarını kontrol edin
- TypeScript hataları var mı kontrol edin

### 404 Hatası
- Build başarılı mı kontrol edin
- `dist` klasörü oluştu mu kontrol edin
- `vercel.json` dosyası var mı kontrol edin
