import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Relative asset paths work both at the domain root and under /<repository>/ on GitHub Pages.
  base: './',
});
