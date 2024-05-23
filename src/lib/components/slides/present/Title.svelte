<script lang="ts">
	import Slide from '$lib/components/slides/internal/Slide.svelte';

	const title: string = 'Parallels of Software Engineering and Role Playing Games';
	const subTitle: string = 'and how they provide the opportunity to build the skills that make for a great engineer.' 
</script>

<Slide>
	<Slide><h3>{title}</h3></Slide>
	<Slide><h4>{subTitle}</h4></Slide>
</Slide>

<style>
	h4 {
		padding-left: 110px;
		padding-right: 110px;
	}
</style>