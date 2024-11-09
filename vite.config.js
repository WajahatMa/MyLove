// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Hack-Knight/', // Replace 'my-website' with your actual repository name
  build: {
    outDir: 'docs' // Use 'docs' if you're deploying directly from the main branch
  }
});
