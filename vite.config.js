import { defineConfig } from 'vite';

export default defineConfig(({ command }) => ({
  root: '.',
  publicDir: false,
  base: command === 'build' ? '/Personal-Website/' : '/',
  server: {
    port: 5173,
    open: true
  }
}));
