<<<<<<< HEAD
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
=======
# GlucoPilot PWA – Diyabet Karar Destek Yardımcısı

GlucoPilot, Tip 1 diyabetli kullanıcılar için tasarlanmış bir Progressive Web App (PWA) uygulamasıdır. Uygulama tarayıcıda çalışır ancak ana ekrana eklenerek uygulama gibi davranır, böylece mobil cihazlarda hızlı erişim ve çevrimdışı çalışma imkanı sunar.

## Özellikler

- **PWA Desteği**: Ana ekrana eklenebilir, standalone modda çalışır
- **Offline Çalışma**: Service Worker ile önbellekleme ve IndexedDB kullanılarak çevrimdışı kullanım
- **Cihaz İçi Hesaplama**: İnsülin doz hesaplamaları tamamen kullanıcı cihazında yapılır (veri bulutuna gönderilmez)
- **Basit Arayüz**: Kullanıcı sadece temel değerleri girer, arka planda ICR/ISF formülleri çalışır
- **Güvenlik Katmanları**: Hipoglisemi kontrolü, doz sınırları, aktif insülin (IOB) hesaplama

## Teknik Yapı

- **React + TypeScript**: Modern, tip güvenli React uygulaması
- **TailwindCSS**: Hızlı ve responsive arayüz tasarımı
- **Vite**: Hızlı geliştirme ve build aracı
- **IndexedDB**: Yerel veri saklama
- **Service Worker**: Offline çalışma ve önbellekleme

## Kurulum

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Kullanım

1. İlk kullanımda profil ayarlarınızı girin (ICR, ISF, hedef glikoz, DIA, maksimum doz)
2. Glikoz değerinizi girin
3. Öğün için karbonhidrat miktarını girin
4. Sistem size önerilen dozu gösterir
5. Dozu onaylayın veya manuel olarak ayarlayın

## Güvenlik Uyarısı

**ÖNEMLİ**: Bu sistem sadece karar destek amacıyla öneride bulunur. Otomatik dozlama değildir. Tüm doz kararları doktorunuzun önerileri doğrultusunda alınmalıdır.

## Lisans

Bu proje eğitim ve karar destek amaçlıdır. Tıbbi tavsiye niteliği taşımaz.
>>>>>>> 6368821ae4145b9fa943b95fd8ce52c3a83c7235
