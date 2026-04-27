// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://hestia-23.github.io',
  vite: {
    server: {
      watch: {
        usePolling: true,
        interval: 150,
      },
    },
  },
});
