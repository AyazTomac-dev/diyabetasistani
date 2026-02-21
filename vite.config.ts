<<<<<<< HEAD
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
=======
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import { VitePWA } from 'vite-plugin-pwa'

// Geçici olarak PWA plugin devre dışı - build testi için
export default defineConfig({
  base: '/',
  build: {
    rollupOptions: {
      input: {
        main: './index.html'
      }
    }
  },
  plugins: [
    react(),
    // PWA plugin geçici olarak devre dışı - build testi için
    // VitePWA({
    //   registerType: 'autoUpdate',
    //   injectRegister: 'auto',
    //   includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
    //   manifest: {
    //     name: 'GlucoPilot PWA',
    //     short_name: 'GlucoPilot',
    //     description: 'Tip 1 diyabet karar destek yardımcısı',
    //     theme_color: '#3367D6',
    //     background_color: '#ffffff',
    //     display: 'standalone',
    //     icons: [
    //       {
    //         src: 'icons/icon-192.svg',
    //         sizes: '192x192',
    //         type: 'image/svg+xml'
    //       },
    //       {
    //         src: 'icons/icon-512.svg',
    //         sizes: '512x512',
    //         type: 'image/svg+xml'
    //       }
    //     ],
    //     start_url: '/',
    //     scope: '/'
    //   },
    //   workbox: {
    //     globPatterns: ['**/*.{js,css,html,ico,png,svg,json}']
    //   },
    //   injectRegister: 'auto',
    //   strategies: 'generateSW'
    // })
  ],
})
>>>>>>> 6368821ae4145b9fa943b95fd8ce52c3a83c7235
