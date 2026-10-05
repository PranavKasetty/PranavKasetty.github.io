import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://pranavkasetty.github.io',
  build: { format: 'directory' },
  compressHTML: false,
});
