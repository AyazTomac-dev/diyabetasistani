# Vercel Deployment Sorun Giderme

## Yapılan Düzeltmeler

1. ✅ `vercel.json` güncellendi - Build ayarları açıkça belirtildi
2. ✅ Favicon eklendi (`public/favicon.svg`)
3. ✅ Build command ve output directory belirtildi

## Vercel Dashboard'da Kontrol Edilmesi Gerekenler

### 1. Build Settings
Vercel Dashboard → Project Settings → General → Build & Development Settings:

- **Framework Preset:** Vite (veya "Other")
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`
- **Node.js Version:** 18.x veya 20.x (önerilen)

### 2. Build Logları Kontrolü
Vercel Dashboard → Deployments → Son deployment → "Build Logs" sekmesi:

- Build başarılı mı? (Exit code 0 olmalı)
- TypeScript hataları var mı?
- Dependency kurulumu başarılı mı?

### 3. Olası Sorunlar ve Çözümler

#### Build Başarısız Oluyor
```bash
# Local'de test edin:
npm install
npm run build
```

Eğer local'de build başarılı ama Vercel'de başarısız:
- Node.js versiyonunu kontrol edin
- `package.json`'daki script'leri kontrol edin
- `.vercelignore` dosyasını kontrol edin

#### 404 Hatası Devam Ediyor
- `vercel.json` dosyasının root'ta olduğundan emin olun
- Build'in başarılı olduğunu doğrulayın
- Output directory'nin `dist` olduğunu kontrol edin

#### TypeScript Hataları
```bash
# Local'de kontrol:
npm run build
```

TypeScript hatalarını düzeltin ve tekrar deploy edin.

## Manuel Redeploy

1. Vercel Dashboard → Deployments
2. Son deployment'ın yanındaki "..." menüsü
3. "Redeploy" seçeneğini tıklayın

## Alternatif: Vercel CLI ile Deploy

```bash
# Vercel CLI kurulumu
npm i -g vercel

# Deploy
vercel --prod
```

Bu komut build'i local'de çalıştırır ve hataları gösterir.
