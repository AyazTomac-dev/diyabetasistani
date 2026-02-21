import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import { VitePWA } from 'vite-plugin-pwa'

// Geçici olarak PWA plugin'i devre dışı - build testi için
export default defineConfig({
  base: '/',
  plugins: [
    react(),
    // VitePWA devre dışı - build testi için
  ],
})
