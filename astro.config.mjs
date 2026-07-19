// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://termweave.by.nikdelv.in',
  output: 'static',
  integrations: [sitemap()],
  devToolbar: {
    enabled: false,
  },
});
