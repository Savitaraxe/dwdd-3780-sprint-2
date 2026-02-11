<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<h1>{data.product.name}</h1>

<p>{data.product.description}</p>
<p>Price: ${data.product.price}</p>