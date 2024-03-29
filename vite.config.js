// vite.config.js
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        home: resolve(__dirname, 'home/index.html'),
        'media-query': resolve(__dirname, 'media-query/index.html'),
        autoflow: resolve(__dirname, 'autoflow/index.html'),
      },
    },
  },
});
