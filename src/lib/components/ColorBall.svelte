<script lang="ts">
	import { spring } from 'svelte/motion';
	import type { Spring } from 'svelte/motion';

	import { T } from '@threlte/core';
	import { Text } from '@threlte/extras';
	import { Color, Scene } from 'three';

	import { getRandomHexColor, invertHexColor } from '$lib/utils';
	import { lightColor } from '$lib/stores';

	export let scene: Scene;
    export let position: [number, number, number];

	let showText = false;

	//Sphere controls
	let sphereScale: Spring<number> = spring(1);
	const pointerenter = () => {
		$sphereScale = 1.5;
		showText = true;
	};
	const pointerleave = () => {
		$sphereScale = 1;
		showText = false;
	};
	const click = () => {
		// $scale += 1;
		lightColor.set(getRandomHexColor());
		scene.background = new Color(invertHexColor($lightColor));
		// console.log($lightColor, invertHexColor($lightColor));
	};
</script>

<T.Group {position}>
	{#if showText}
		<Text castShadow anchorX="center" anchorY={-6} text={$lightColor} fontSize={1} />
	{/if}
	<T.Mesh
		castShadow
		receiveShadow
		scale={$sphereScale}
		on:click={click}
		on:pointerenter={pointerenter}
		on:pointerleave={pointerleave}
	>
		<T.SphereGeometry args={[2.5, 64, 64]} />
		<T.MeshStandardMaterial color={$lightColor} />
	</T.Mesh>
</T.Group>
