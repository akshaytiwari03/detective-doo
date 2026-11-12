import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteSingleFile } from 'vite-plugin-singlefile';

// base './' makes asset paths relative, so the build works at
// https://<user>.github.io/<repo>/ as well as at a domain root.
// Routing is hash-based, so deep links survive refresh on GitHub Pages.
export default defineConfig({
  base: './',
  plugins: process.env.SINGLEFILE ? [react(), viteSingleFile()] : [react()],
  build: { target: 'es2020', sourcemap: false }
});
