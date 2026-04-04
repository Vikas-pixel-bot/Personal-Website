import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  publicDir: false,
  base: process.env.VITE_BASE_PATH || '/',
  server: {
    port: 5173,
    open: true
  }
});
