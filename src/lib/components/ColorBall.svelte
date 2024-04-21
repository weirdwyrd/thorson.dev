<script lang="ts">
	import { spring } from 'svelte/motion';
	import type { Spring } from 'svelte/motion';
	import { T } from '@threlte/core';
	import { Text } from '@threlte/extras';

	import { getRandomHexColor, hexToRGB } from '$lib/utils';
	import { bTween, gTween, rTween, rgbColorTween, quoteText, quoteOptions } from '$lib/stores';

	export let position: Coordinates;

	let showText = false;
	let sphereScale: Spring<number> = spring(1);
	let isSquare = false;

	const pointerenter = () => {
		if (!isSquare) {
			$sphereScale = 1.5;
			showText = true;
		}
	};
	const pointerleave = () => {
		if (!isSquare) {
			$sphereScale = 1;
			showText = false;
		}
	};
	const click = () => {
		// update ball color
		let newRGB = hexToRGB(getRandomHexColor());
		rTween.set(newRGB.r);
		gTween.set(newRGB.g);
		bTween.set(newRGB.b);

		const qOptions = $quoteOptions;
		const randomIndex = Math.floor(Math.random() * qOptions.length);
		const selectedQuote = qOptions[randomIndex];
		let text = `"${selectedQuote.text}"\n\t${selectedQuote.author}`;
		text = !selectedQuote.material ? text : text + `\t-\t${selectedQuote.material}`;
		quoteText.set(text);
	};
	const contextmenu = (e: any) => {
		isSquare = !isSquare;
		e.stopPropagation();
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
		on:contextmenu={(e) => contextmenu(e)}
	>
		<T.MeshStandardMaterial color={$rgbColorTween} />
		<!-- shape control -->
		{#if !isSquare}
			<T.SphereGeometry args={[2.5]} />
		{:else}
			<T.BoxGeometry args={[4, 4, 4]} />
		{/if}
	</T.Mesh>
</T.Group>
