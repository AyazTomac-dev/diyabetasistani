# KRİTİK: Build Komutu Çalışmıyor

## Sorun
Build loglarında sadece `npm install` görünüyor, `npm run build` komutu çalışmıyor.

## Çözüm: Vercel Dashboard Ayarları

### ADIM 1: Vercel Dashboard'a Git
1. Vercel Dashboard → Projeniz → **Settings**
2. **General** sekmesi → **Build & Development Settings**

### ADIM 2: Bu Ayarları YAPIN (MUTLAKA!)

```
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install
Node.js Version: 20.x
```

**ÖNEMLİ:** 
- Build Command alanı **BOŞ OLMAMALI**
- Mutlaka `npm run build` yazmalı
- Output Directory mutlaka `dist` olmalı

### ADIM 3: Kaydet ve Redeploy
1. **Save** butonuna tıklayın
2. **Deployments** sekmesine gidin
3. Son deployment'ın yanındaki **"..."** menüsünden **"Redeploy"** seçin

## Alternatif: package.json Script Kontrolü

`package.json` dosyasında şu script'ler olmalı:

```json
"scripts": {
  "build": "tsc && vite build",
  "vercel-build": "npm run build"
}
```

## Build Loglarında Görmeniz Gerekenler

Başarılı build'de şunları görmelisiniz:

```
✓ Installing dependencies...
✓ Running "npm run build"
✓ Type checking...
✓ Building for production...
✓ Compiled successfully
✓ Output: dist/
```

Eğer sadece dependencies kurulumu görünüyorsa → Build Command çalışmıyor demektir!

## Hızlı Test

Local'de test edin:
```bash
npm install
npm run build
```

Eğer local'de çalışıyorsa → Vercel ayarları yanlış
Eğer local'de çalışmıyorsa → Kodda hata var
