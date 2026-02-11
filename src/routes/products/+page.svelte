<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1>Products</h1>

{#each data.products as product}
	<div>
		<h2>{product.name}</h2>
		<p>{product.description}</p>
		<p>Price: ${product.price}</p>
	</div>
{/each}