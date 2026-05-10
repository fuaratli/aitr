import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
	const posts = await getCollection('blog');
	const data = posts
		.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
		.map((p) => ({
			slug: p.id,
			title: p.data.title,
			description: p.data.description,
			category: p.data.category,
			tags: p.data.tags ?? [],
			pubDate: p.data.pubDate.toISOString(),
		}));
	return new Response(JSON.stringify(data), {
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
			'Cache-Control': 'public, max-age=300',
		},
	});
};
