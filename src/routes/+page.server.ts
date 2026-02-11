import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	console.log('Server load function is running');

	const message = 'This data came from the server';

	return {
		message
	};
};