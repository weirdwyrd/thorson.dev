<script lang="ts">
	import { spring } from 'svelte/motion';
	import type { Spring } from 'svelte/motion';
	import { T } from '@threlte/core';
	import { Text } from '@threlte/extras';

	import { getRandomHexColor, hexToRGB } from '$lib/utils';
	import { bTween, gTween, rTween, rgbColorTween, quoteText, quoteOptions } from '$lib/stores';

	export let position: [number, number, number];

	let showText = false;
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
		// update ball color
		let newRGB = hexToRGB(getRandomHexColor());
		rTween.set(newRGB.r);
		gTween.set(newRGB.g);
		bTween.set(newRGB.b);

		const qOptions = $quoteOptions;
		const randomIndex = Math.floor((Math.random() * qOptions.length));
		quoteText.set(qOptions[randomIndex].text);

	};
</script>

<T.Group {position}>
	{#if showText}
		<Text castShadow anchorX="center" anchorY={-6} text={$rgbColorTween} fontSize={1} />
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
		<T.MeshStandardMaterial color={$rgbColorTween} />
	</T.Mesh>
</T.Group>
