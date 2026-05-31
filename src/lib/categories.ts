// Lucide tabanlı ince-çizgi (stroke) ikonlar — currentColor ile tek tona iner
const SVG = (paths: string) =>
	`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths}</svg>`;

export const CATEGORY_META = {
	gundem: {
		slug: 'gundem',
		label: 'AI Gündem',
		emoji: '📰',
		icon: SVG('<path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8M15 18h-5M10 6h8v4h-8z"/>'),
		gradient: 'var(--surface-2)',
		description: 'Yapay zeka dünyasındaki son gelişmeler ve bunların Türkçe kullanıcıya pratik etkisi.',
	},
	karsilastirma: {
		slug: 'karsilastirmalar',
		label: 'Karşılaştırmalar',
		emoji: '⚖️',
		icon: SVG('<path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10M12 3v18M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/>'),
		gradient: 'var(--surface-2)',
		description: 'Popüler AI ürünlerini yan yana koyup, hangisi sana uygun cevabını veriyoruz.',
	},
	rehber: {
		slug: 'rehberler',
		label: 'Kullanım Rehberleri',
		emoji: '📘',
		icon: SVG('<path d="M12 7v14M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/>'),
		gradient: 'var(--surface-2)',
		description: 'Sıfırdan başlayanlar için adım adım Türkçe AI aracı eğitimleri.',
	},
	inceleme: {
		slug: 'incelemeler',
		label: 'İncelemeler',
		emoji: '🔍',
		icon: SVG('<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>'),
		gradient: 'var(--surface-2)',
		description: "Hype'ın ötesinde gerçek artılar, gerçek eksiler. Test ettik, anlatıyoruz.",
	},
	'para-kazanma': {
		slug: 'para-kazanma',
		label: 'Para Kazanma',
		emoji: '💼',
		icon: SVG('<rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>'),
		gradient: 'var(--surface-2)',
		description: 'Yapay zekayı işine ve cebine dokunan biçimde kullanmanın yolları.',
	},
} as const;

export type CategoryKey = keyof typeof CATEGORY_META;
