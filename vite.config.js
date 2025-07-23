import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/Comptable-Web",  // ⚠️ Remplace avec le nom EXACT de ton repo GitHub
  plugins: [react()],
})






