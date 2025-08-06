import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: true,
    allowedHosts: [
      '819ac6ad96f6.ngrok-free.app'
    ],
  },
  plugins: [react()],
})
