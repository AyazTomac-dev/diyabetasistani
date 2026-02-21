# Vercel Deployment - Kritik Ayarlar

## Sorun
Build çok hızlı tamamlanıyor (40ms) ve dosyalar hazırlanmıyor. Bu, `npm run build` komutunun çalışmadığı anlamına geliyor.

## Çözüm

### 1. Vercel Dashboard Ayarları

Vercel Dashboard → Projeniz → **Settings** → **General** → **Build & Development Settings**:

**Aşağıdaki ayarları yapın:**

- **Framework Preset:** `Vite` seçin (veya "Other" ve manuel ayarlayın)
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`
- **Node.js Version:** `18.x` veya `20.x` (önerilen: 20.x)

### 2. package.json Kontrolü

`package.json` dosyasında `vercel-build` script'i eklendi:
```json
"vercel-build": "npm run build"
```

Bu script Vercel'in `vercel build` komutunu çalıştırdığında otomatik olarak çağrılır.

### 3. Değişiklikleri Deploy Etme

#### Seçenek A: Git Repository Üzerinden (Önerilen)
```bash
# Git repository oluşturun (eğer yoksa)
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-repo-url>
git push -u origin main
```

Vercel otomatik olarak yeni commit'leri deploy edecektir.

#### Seçenek B: Vercel CLI ile Manuel Deploy
```bash
# Vercel CLI kurulumu
npm install -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

#### Seçenek C: Vercel Dashboard'dan Manuel Upload
1. Vercel Dashboard → Projeniz → **Deployments**
2. "..." menüsünden "Redeploy" seçin
3. Veya yeni bir deployment oluşturun

### 4. Build Loglarını Kontrol

Deploy sonrası:
1. Vercel Dashboard → **Deployments** → Son deployment
2. "Build Logs" sekmesine tıklayın
3. Şunları kontrol edin:
   - ✅ `npm install` başarılı mı?
   - ✅ `npm run build` çalıştı mı?
   - ✅ `dist` klasörü oluşturuldu mu?
   - ✅ TypeScript derleme başarılı mı?

### 5. Beklenen Build Süresi

Normal bir Vite + React + TypeScript build'i:
- **Install:** 30-60 saniye
- **Build:** 10-30 saniye
- **Total:** ~1-2 dakika

Eğer build 40ms'de tamamlanıyorsa, build komutu çalışmıyor demektir.

## Sorun Giderme

### Build Hala Çalışmıyor
1. Vercel Dashboard'da Framework Preset'in "Vite" olduğundan emin olun
2. Build Command'ın `npm run build` olduğunu kontrol edin
3. Output Directory'nin `dist` olduğunu doğrulayın
4. Build loglarında hata mesajlarını kontrol edin

### TypeScript Hataları
```bash
# Local'de test edin
npm install
npm run build
```

Eğer local'de hata varsa, önce onları düzeltin.

### 404 Hatası Devam Ediyor
- `vercel.json` dosyasının root'ta olduğundan emin olun
- Build'in başarılı olduğunu doğrulayın
- `dist` klasöründe `index.html` dosyasının olduğunu kontrol edin
