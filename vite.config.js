import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ CORRETO - apenas isso!
export default defineConfig({
  plugins: [react()],
})