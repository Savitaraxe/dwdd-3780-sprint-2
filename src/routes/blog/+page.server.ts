import type { PageServerLoad } from './$types';
import type { BlogPost } from '$lib/types/blog';

export const load: PageServerLoad = async () => {
	console.log('Blog list server load running');

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

	return {
		posts
	};
};