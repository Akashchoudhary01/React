import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/CurrencyConverter/', // ✅ leading and trailing slash
  plugins: [react()],
});
