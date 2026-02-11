<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<h1>Blog</h1>

{#each data.posts as post}
	<div>
		<h2>
			<a href={`/blog/${post.slug}`}>
				{post.title}
			</a>
		</h2>
	</div>
{/each}