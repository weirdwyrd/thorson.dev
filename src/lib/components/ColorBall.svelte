<script lang="ts">
	import { spring } from 'svelte/motion';
	import type { Spring } from 'svelte/motion';
	import { T } from '@threlte/core';
	import { Text } from '@threlte/extras';

	import { getRandomHexColor, hexToRGB } from '$lib/utils';
	import { bTween, gTween, rTween, rgbColorTween, quoteText } from '$lib/stores';

	export let position: [number, number, number];

	let showText = false;
	let sphereScale: Spring<number> = spring(1);

		
	let quoteOptions: string[] = [
		'A prince should be slow to believe rumors and to commit himself to action on the basis of them. He should not be afraid of his own thoughts; the ought to proceed cautiously, moderating his conduct with prudence and humanity, allowing neither overconfidence to make him careless, nor excess suspicion to make him intolerable.',
		'The surest state of wisdom is constant cheerfulness; her state is like that of things above the moon, ever serene.',
		'Desire on the part of religious man to travel back periodically, his effort to reintegrate a mythological situation (the situation as it was in the beginning) may appear intolerable and humiliating to modern eyes. Such a nostalgia inevitably leads to the continual repetition of a limited number of gestures and patterns of behaviour. From one point of view it may even be said that religious man -- especially the religious man of primitive societies -- is above all a man paralyzed by the myth of the eternal return. A modern psychologist would be tempted to interpret such an attitude as anxiety before the danger of the new, refusal to assume responsibility for a genuine historical existence, nostalgia for a situation that is paradisal precisely because it is embryonic, insufficiently detached from nature. That problem is too complex to be discussed here. In any case, it lies outside the field of our investigation, for, in the last analysis, it implies the problem of the opposition between premodern and modern man. Let us rather say that it would be wrong to believe that the religious man of primitive and archaic societies refuses to assume the responsibility for a genuine existence. On the contrary, as we have seen and shall see again, he courageously assumes immense responsibilities -- for example, that of collaborating in the creation of the cosmos, or of creating his own world, or of ensuring the life of plants and animals and so on. But it is a different kind of responsibility from those that, to us moderns, appear to be the only genuine and valid responsibilities. It is a responsibility on the cosmic plane, in contradiction to the moral, social, or historical resposibilities that are alone regarded as valid in modern civilizations. From the point of view of profane existence, man feels no responsibility except to himself and to society. For him, the universe does not properly constitute a cosmos -- that is, a living and articulated unity; it is simply the sum of the material reserves and physical energies of the planet, and the great concern of modern man is to avoid stupidly exhausting the economic resources of the globe. But, existentially, the primitive always puts himself in a cosmic context. His personal experience lacks neither genuineness nor depth; but the fact that it is expressed in a language unfamiliar to us makes it appear spurious or infantile to modern eyes.',
		"Your three components: body, breath, mind. Two are yours in trust; to the third alone you have a clear title.     If you can cut yourself -- your mind -- free of what other people do and say, of what you've said or done, of the things you're afraid will happen, the impositions of the body that contains you and the breath within, and what the whirling chaos sweeps in from outside, so that the mind is freed from fate, brought to clarity, and lives life on its own recognizance -- that doing what's right, accepting what happens, and speaking the truth -- ... then you can spend the time you have left in tranquility. And kindness. And at peace with the spirit within you. (12.3)"
	];

	let qoIndex = 0;

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

		//update text
		quoteText.set(quoteOptions[qoIndex]);
		if (qoIndex < quoteOptions.length-1) qoIndex++;
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
		<!-- on:click={(e) => (showWelcome.set(false))} -->

		<T.SphereGeometry args={[2.5, 64, 64]} />
		<T.MeshStandardMaterial color={$rgbColorTween} />
	</T.Mesh>
</T.Group>
