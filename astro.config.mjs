import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://blueprintstrategies.us',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
