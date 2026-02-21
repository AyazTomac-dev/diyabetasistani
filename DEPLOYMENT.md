# Vercel Deployment Kılavuzu

## Hızlı Deployment

1. **Vercel CLI ile:**
   ```bash
   npm i -g vercel
   vercel
   ```

2. **GitHub/GitLab/Bitbucket ile:**
   - Repository'yi Vercel'e bağlayın
   - Vercel otomatik olarak yapılandırmayı algılar

## Vercel Yapılandırması

Proje otomatik olarak algılanır, ancak manuel ayarlar:

- **Framework Preset:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`

## Önemli Notlar

1. **Routing:** `vercel.json` dosyası tüm route'ları `index.html`'e yönlendirir (SPA için gerekli)

2. **PWA:** Service Worker ve manifest dosyaları otomatik olarak build edilir

3. **Environment Variables:** Gerekirse Vercel dashboard'dan ekleyebilirsiniz

4. **HTTPS:** Vercel otomatik olarak HTTPS sağlar (PWA için gerekli)

## Sorun Giderme

### 404 Hatası
- `vercel.json` dosyasının proje root'unda olduğundan emin olun
- Build'in başarılı olduğunu kontrol edin
- Output directory'nin `dist` olduğunu doğrulayın

### Build Hatası
- Node.js versiyonunu kontrol edin (Vercel dashboard'dan ayarlayabilirsiniz)
- `package.json`'daki build script'inin doğru olduğundan emin olun

### PWA Çalışmıyor
- HTTPS kullanıldığından emin olun
- Service Worker'ın doğru kaydedildiğini kontrol edin
- Browser console'da hata olup olmadığını kontrol edin
