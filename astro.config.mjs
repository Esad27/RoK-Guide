import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

const siteUrl = process.env.SITE_URL ?? 'http://localhost:4321';

export default defineConfig({
  site: siteUrl,
  integrations: [sitemap({ filter: (page) => !page.endsWith('/404.html') })],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'vi', 'es'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
