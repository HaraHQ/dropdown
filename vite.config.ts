import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import vercel from 'vite-plugin-vercel';

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 5173,
  },
  plugins: [react(), tailwindcss(), vercel()],
})
