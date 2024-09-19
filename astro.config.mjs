import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react';

import sitemap from 'astro-sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://rsydn.tech',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }), react(), sitemap()
  ]
});