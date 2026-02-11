import type { PageServerLoad } from './$types';
import type { Product } from '$lib/types/product';

export const load: PageServerLoad = async () => {
	console.log('Products server load running');

	const products: Product[] = [
		{
			id: 1,
			name: 'Laptop',
			price: 1200,
			description: 'High performance laptop'
		},
		{
			id: 2,
			name: 'Phone',
			price: 800,
			description: 'Latest smartphone'
		}
	];

	return {
		products
	};
};