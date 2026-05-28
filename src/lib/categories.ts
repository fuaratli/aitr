export const CATEGORY_META = {
	gundem: {
		slug: 'gundem',
		label: 'AI Gündem',
		emoji: '📰',
		gradient: 'var(--surface-2)',
		description: 'Yapay zeka dünyasındaki son gelişmeler ve bunların Türkçe kullanıcıya pratik etkisi.',
	},
	karsilastirma: {
		slug: 'karsilastirmalar',
		label: 'Karşılaştırmalar',
		emoji: '⚖️',
		gradient: 'var(--surface-2)',
		description: 'Popüler AI ürünlerini yan yana koyup, hangisi sana uygun cevabını veriyoruz.',
	},
	rehber: {
		slug: 'rehberler',
		label: 'Kullanım Rehberleri',
		emoji: '📘',
		gradient: 'var(--surface-2)',
		description: 'Sıfırdan başlayanlar için adım adım Türkçe AI aracı eğitimleri.',
	},
	inceleme: {
		slug: 'incelemeler',
		label: 'İncelemeler',
		emoji: '🔍',
		gradient: 'var(--surface-2)',
		description: "Hype'ın ötesinde gerçek artılar, gerçek eksiler. Test ettik, anlatıyoruz.",
	},
	'para-kazanma': {
		slug: 'para-kazanma',
		label: 'Para Kazanma',
		emoji: '💼',
		gradient: 'var(--surface-2)',
		description: 'Yapay zekayı işine ve cebine dokunan biçimde kullanmanın yolları.',
	},
} as const;

export type CategoryKey = keyof typeof CATEGORY_META;
