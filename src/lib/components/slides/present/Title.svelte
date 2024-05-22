<script lang="ts">
	import { onMount } from 'svelte';
	import Slide from '$lib/components/slides/internal/Slide.svelte';

	let title: any;
	onMount(() => {
		let timeout: any;
		title = new Promise((resolve) => {
			timeout = setTimeout(() => resolve('Whats nice together?'), 1000);
		});
		() => clearTimeout(timeout);
	});
</script>

<Slide>
	<h2>
		{#await title}
			Wait a sec...
		{:then result}
			{result}
		{/await}
	</h2>
</Slide>
