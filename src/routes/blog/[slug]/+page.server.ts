import type { PageServerLoad } from './$types';
import type { BlogPost } from '$lib/types/blog';
import { error } from '@sveltejs/kit';

const posts: BlogPost[] = [
	{
		id: 1,
		title: 'First Post',
		slug: 'first-post',
		content: 'This is the first blog post.'
	},
	{
		id: 2,
		title: 'Second Post',
		slug: 'second-post',
		content: 'This is the second blog post.'
	}
];

export const load: PageServerLoad = async ({ params }) => {
	console.log('Dynamic blog load running for slug:', params.slug);

	const post = posts.find((p) => p.slug === params.slug);

	if (!post) {
		throw error(404, 'Post not found');
	}

	return {
		post
	};
};