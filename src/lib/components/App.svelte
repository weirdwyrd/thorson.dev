<script lang="ts">
	import { Canvas } from '@threlte/core';
	import Scene from './Scene.svelte';
	import { useProgress } from '@threlte/extras';
	import { tweened } from 'svelte/motion';
	import { fade } from 'svelte/transition';
	import LoadingRing from './LoadingRing.svelte';

	const { progress } = useProgress();
	const tweenedProgress = tweened($progress, {
		duration: 600
	});
	$: tweenedProgress.set($progress);
</script>

{#if $tweenedProgress < 1}
	<div
		transition:fade|local={{
			duration: 200
		}}
		class="load-wrapper"
	>
  <LoadingRing />
	</div>
{/if}

<Canvas>
	<Scene />
</Canvas>

<style>
	.load-wrapper {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		background-color: black;
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		align-items: center;
		justify-content: center;
		color: white;
	}

</style>
