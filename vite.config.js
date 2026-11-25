import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: '.',
  publicDir: false,
  base: process.env.VITE_BASE_PATH || '/',
  server: {
    port: 5173,
    open: true,
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        flnAssessments: resolve(__dirname, 'blog/fln-assessments.html'),
        flnAssessmentsHi: resolve(__dirname, 'blog/hi/fln-assessments.html'),
        abacusVsSpreadsheet: resolve(__dirname, 'blog/abacus-vs-spreadsheet.html'),
        catchUpProblem: resolve(__dirname, 'blog/catch-up-problem.html'),
        flnCatchupGrades57: resolve(__dirname, 'blog/fln-catchup-grades-5-7.html'),
        aiHolisticTracking: resolve(__dirname, 'blog/ai-holistic-child-tracking.html'),
      },
    },
  },
});
