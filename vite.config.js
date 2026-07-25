import { defineConfig } from 'vite';

export default defineConfig({
  base: '/hku-idt-guide/',
  root: '.',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
});
