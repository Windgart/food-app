/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import url from '@rollup/plugin-url';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    url({
      include: ['src/**/*.woff', 'src/**/*.woff2'],
      limit: Infinity,
    }),
  ],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
  test: {
    environment: 'jsdom',
    globals: true,
  },
});
