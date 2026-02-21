# GlucoPilot PWA Kurulum ve Kullanım Kılavuzu

## Hızlı Başlangıç

1. **Bağımlılıkları yükleyin:**
   ```bash
   npm install
   ```

2. **Geliştirme sunucusunu başlatın:**
   ```bash
   npm run dev
   ```

3. Tarayıcıda `http://localhost:5173` adresini açın.

## Production Build

```bash
npm run build
npm run preview
```

## PWA Olarak Yükleme

1. Uygulamayı bir web sunucusunda yayınlayın (ör. Netlify, Vercel, GitHub Pages)
2. HTTPS üzerinden erişilebilir olmalı (localhost geliştirme için istisna)
3. Mobil cihazda tarayıcıda açın
4. "Ana ekrana ekle" seçeneğini kullanın

## İlk Kullanım

1. **Profil Ayarları**: İlk açılışta profil ayarlarınızı girin:
   - ICR (İnsülin/Karbonhidrat Oranı): Örn. 10 (1 birim insülin = 10g KH)
   - ISF (Duyarlılık Faktörü): Örn. 40 (1 birim insülin = 40 mg/dL düşürür)
   - Hedef Glikoz: Örn. 100 mg/dL
   - DIA (İnsülin Etki Süresi): Örn. 4 saat
   - Maksimum Tek Doz: Güvenlik limiti

2. **Glikoz Girişi**: Mevcut kan şekeri değerinizi girin

3. **Öğün Girişi**: Yediğiniz karbonhidrat miktarını gram olarak girin

4. **Doz Önerisi**: Sistem size önerilen dozu gösterir

5. **Onaylama**: Dozu onaylayın veya manuel olarak ayarlayın

## Veri Yönetimi

- Tüm veriler cihazınızda (IndexedDB) saklanır
- Profil ayarlarınızı JSON olarak dışa aktarabilirsiniz
- Farklı cihazlara geçiş için profil import/export kullanın

## Güvenlik Notları

- ⚠️ Bu uygulama sadece karar destek amaçlıdır
- ⚠️ Otomatik dozlama yapmaz
- ⚠️ Tüm doz kararları doktorunuzun önerileri doğrultusunda alınmalıdır
- ⚠️ Hipoglisemi durumunda doz önerilmez
- ⚠️ 15 dakikadan eski ölçümler için uyarı verilir

## Teknik Detaylar

- **Framework**: React 18 + TypeScript
- **Styling**: TailwindCSS
- **Build Tool**: Vite
- **Storage**: IndexedDB
- **PWA**: Vite PWA Plugin
- **Offline**: Service Worker ile önbellekleme

## Geliştirme

### Proje Yapısı

```
src/
  components/     # React bileşenleri
  engine/         # İnsülin hesaplama motoru
  types/          # TypeScript tip tanımlamaları
  utils/          # Yardımcı fonksiyonlar (storage, vb.)
  App.tsx         # Ana uygulama bileşeni
  main.tsx        # Giriş noktası
```

### Test Verileri

`testData/` klasöründe örnek profil ve geçmiş verileri bulunur.

## Sorun Giderme

- **PWA yüklenmiyor**: HTTPS gereklidir (localhost hariç)
- **Veriler kayboldu**: IndexedDB tarayıcı verilerini temizlediyseniz kaybolabilir
- **Hesaplama hatalı**: Profil ayarlarınızı kontrol edin

## Gelecek Özellikler

- [ ] Barkod tarama (ZXing entegrasyonu)
- [ ] Kamera ile porsiyon tahmini (TensorFlow Lite)
- [ ] CGM entegrasyonu (Dexcom/Libre)
- [ ] Grafik görselleştirme (Chart.js/Recharts)
- [ ] Trend okları desteği
- [ ] Doktor paylaşım özelliği
