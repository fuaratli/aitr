export const CATEGORY_META = {
	karsilastirma: {
		slug: 'karsilastirmalar',
		label: 'Karşılaştırmalar',
		emoji: '⚖️',
		gradient: 'linear-gradient(135deg,#8b5cf6,#ec4899)',
		description: 'Popüler AI ürünlerini yan yana koyup, hangisi sana uygun cevabını veriyoruz.',
	},
	rehber: {
		slug: 'rehberler',
		label: 'Kullanım Rehberleri',
		emoji: '📘',
		gradient: 'linear-gradient(135deg,#3b82f6,#8b5cf6)',
		description: 'Sıfırdan başlayanlar için adım adım Türkçe AI aracı eğitimleri.',
	},
	inceleme: {
		slug: 'incelemeler',
		label: 'İncelemeler',
		emoji: '🔍',
		gradient: 'linear-gradient(135deg,#06b6d4,#3b82f6)',
		description: 'Hype’ın ötesinde gerçek artılar, gerçek eksiler. Test ettik, anlatıyoruz.',
	},
	'para-kazanma': {
		slug: 'para-kazanma',
		label: 'Para Kazanma',
		emoji: '💼',
		gradient: 'linear-gradient(135deg,#ec4899,#f97316)',
		description: 'Yapay zekayı işine ve cebine dokunan biçimde kullanmanın yolları.',
	},
} as const;

export type CategoryKey = keyof typeof CATEGORY_META;
