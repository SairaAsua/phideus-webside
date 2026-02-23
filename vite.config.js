import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    base: '/phideus-webside/', // Match repository name for GitHub Pages deployment
    plugins: [react()],
})
