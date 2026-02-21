# Build Sorun Giderme Kontrol Listesi

## 🔍 Kontrol Edilmesi Gerekenler

### 1. Vercel Dashboard - Build Settings

**Yol:** Vercel Dashboard → Projeniz → **Settings** → **General** → **Build & Development Settings**

Aşağıdaki ayarların **mutlaka** dolu olması gerekiyor:

```
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install
Node.js Version: 20.x (veya 18.x)
```

**⚠️ ÖNEMLİ:** Eğer bu alanlar boşsa veya yanlışsa, build çalışmaz!

### 2. Build Loglarını Kontrol Et

**Yol:** Vercel Dashboard → **Deployments** → Son deployment → **Build Logs** sekmesi

Şunları arayın:

#### ✅ Başarılı Build'de Görmeniz Gerekenler:
```
✓ Cloning repository
✓ Running "npm install"
✓ Installing dependencies...
✓ Running "npm run build"
✓ Building for production...
✓ Type checking...
✓ Compiled successfully
✓ Output: dist/
```

#### ❌ Başarısız Build'de Görebilecekleriniz:
```
✓ Build Completed in /vercel/output [40ms]  ← ÇOK KISA, YANLIŞ!
✗ Error: Command failed
✗ TypeScript errors
✗ Module not found
```

### 3. Build Süresi Kontrolü

- **Normal build:** 1-3 dakika
- **Sorunlu build:** 40ms-1 saniye (build çalışmıyor)

Eğer build 40ms'de tamamlanıyorsa, `npm run build` komutu çalışmıyor demektir.

### 4. Local Build Testi

Terminal'de şu komutları çalıştırın:

```bash
# Dependencies kurulumu
npm install

# Build testi
npm run build
```

Eğer local'de build başarılı oluyorsa:
- ✅ Kod doğru
- ❌ Vercel ayarları yanlış

Eğer local'de build başarısız oluyorsa:
- ❌ Kodda hata var
- Önce local hataları düzeltin

### 5. dist Klasörü Kontrolü

Build sonrası `dist` klasörü oluşmalı:

```bash
# Local'de kontrol
ls dist/
# veya Windows'ta:
dir dist
```

Şunları görmelisiniz:
- `index.html`
- `assets/` klasörü
- `manifest.json`
- `service-worker.js` (PWA için)

## 🚨 Yaygın Sorunlar ve Çözümleri

### Sorun 1: Build Command Çalışmıyor

**Belirtiler:**
- Build 40ms'de tamamlanıyor
- `dist` klasörü oluşmuyor
- 404 hatası

**Çözüm:**
1. Vercel Dashboard → Settings → Build & Development Settings
2. **Framework Preset:** `Vite` seçin
3. **Build Command:** `npm run build` yazın
4. **Output Directory:** `dist` yazın
5. Kaydedin ve yeniden deploy edin

### Sorun 2: TypeScript Hataları

**Belirtiler:**
- Build loglarında TypeScript hataları
- `tsc` komutu başarısız

**Çözüm:**
```bash
# Local'de test edin
npm run build

# Hataları düzeltin
# Sonra tekrar commit edin
```

### Sorun 3: Dependencies Eksik

**Belirtiler:**
- `Module not found` hataları
- `npm install` başarısız

**Çözüm:**
1. `package.json` dosyasını kontrol edin
2. Tüm dependencies'in listelendiğinden emin olun
3. `package-lock.json` commit edildiğinden emin olun

### Sorun 4: Output Directory Yanlış

**Belirtiler:**
- Build başarılı ama 404 hatası
- Dosyalar yanlış yerde

**Çözüm:**
- Vercel Dashboard → Settings → Output Directory: `dist`

## 📋 Hızlı Kontrol Listesi

- [ ] Vercel Dashboard'da Framework Preset = "Vite"
- [ ] Build Command = "npm run build"
- [ ] Output Directory = "dist"
- [ ] Local'de `npm run build` başarılı
- [ ] `dist` klasörü oluşuyor
- [ ] Build loglarında `npm run build` görünüyor
- [ ] Build süresi 1 dakikadan fazla
- [ ] `vercel.json` dosyası root'ta var

## 🎯 Sonraki Adımlar

1. Vercel Dashboard'da Build Settings'i kontrol edin
2. Build loglarını inceleyin
3. Local'de build testi yapın
4. Sorunları düzeltin
5. Yeniden deploy edin
