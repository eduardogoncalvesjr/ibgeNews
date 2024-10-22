/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTests.ts',
    css: true,
    reporters: ['verbose'],
    coverage: {
      reporter: ['text', 'json', 'html'],
      include: ['src/**/*'],
      exclude: [
        "src/main.tsx",
        "src/fakes",
        "src/routes",
        "src/tests",
        "src/types.ts",
        "src/utils/copyToClipboard.ts",
        "src/components/ScrollToTop"
      ],
      provider: 'v8'
    }
  },
})
