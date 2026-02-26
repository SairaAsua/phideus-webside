import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    base: '/', // Root deployment (Hostinger). For GitHub Pages subcfolder use '/phideus-webside/'
    plugins: [react()],
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './src/setupTests.js',
        css: true,
        coverage: {
            reporter: ['text', 'html'],
        },
    },
})
