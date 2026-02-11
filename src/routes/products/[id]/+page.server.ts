import type { PageServerLoad } from './$types';
import type { Product } from '$lib/types/product';
import { error } from '@sveltejs/kit';

const products: Product[] = [
	{ id: 1, name: 'Laptop', price: 1200, description: 'High performance laptop' },
	{ id: 2, name: 'Phone', price: 800, description: 'Latest smartphone' }
];

export const load: PageServerLoad = async ({ params }) => {
	console.log('Dynamic product load running for ID:', params.id);

	const id = Number(params.id);

	const product = products.find((p) => p.id === id);

	if (!product) {
		throw error(404, 'Product not found');
	}

	return {
		product
	};
};