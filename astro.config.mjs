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
			// Etiket arşivlerini sitemap dışında tut — çoğu ince/noindex; dahili linklerle zaten keşfedilir.
			filter: (page) => !page.includes('/etiket/'),
			i18n: {
				defaultLocale: 'tr',
				locales: { tr: 'tr-TR' },
			},
		}),
	],
});
