export function slugifyTag(tag: string): string {
	return tag
		.toString()
		.toLowerCase()
		.replace(/ı/g, 'i')
		.replace(/ş/g, 's')
		.replace(/ğ/g, 'g')
		.replace(/ü/g, 'u')
		.replace(/ö/g, 'o')
		.replace(/ç/g, 'c')
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-+|-+$/g, '');
}
