// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://aitr.blog',
	integrations: [
		mdx(),
		sitemap({
			// Sitemap dışı: etiket arşivleri (ince/noindex) ve noindex'li yinelenen yazılar.
			filter: (page) =>
				!page.includes('/etiket/') &&
				!page.includes('/blog/ai-sunum-hazirlama-gamma-tome-beautiful/') &&
				!page.includes('/blog/bolt-lovable-v0-ai-web-sitesi-yapma/'),
			i18n: {
				defaultLocale: 'tr',
				locales: { tr: 'tr-TR' },
			},
		}),
	],
});
