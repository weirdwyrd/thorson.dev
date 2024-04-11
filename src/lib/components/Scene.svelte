<script lang="ts">
	import { Color } from 'three';
	import { T, useFrame, useThrelte } from '@threlte/core';
	import { OrbitControls, Text, interactivity } from '@threlte/extras';

	import { rgbColorTween, rgbInvertedColorTween, quoteText } from '$lib/stores';

	import Tree from './models/Tree.svelte';
	import Gnome from './models/Gnome.svelte';
	import ColorBall from './ColorBall.svelte';
	import StarField from './StarField.svelte';
	import Mountain from './models/Mountain.svelte';

	const dirLight = {
		position: [130, 200, 260] as [number, number, number],
		intensity: 10,
		shadowMapSize: 2048,
		shadowCamSideLength: 50
	};

	let textRotY: number = 0;

	const { scene } = useThrelte();
	$: scene.background = new Color($rgbInvertedColorTween);

	interactivity();
	useFrame((_, delta) => {
		textRotY -= 0.01 * delta;
	});


	let quoteOptions: string[] = [
	"Do good",
	"Be better",
	"A prince should be slow to believe rumors and to commit himself to action on the basis of them. He should not be afraid of his own thoughts; the ought to proceed cautiously, moderating his conduct with prudence and humanity, allowing neither overconfidence to make him careless, nor excess suspicion to make him intolerable.",
	"Desire on the part of religious man to travel back periodically, his effort to reintegrate a mythological situation (the situation as it was in the beginning) may appear intolerable and humiliating to modern eyes. Such a nostalgia inevitably leads to the continual repetition of a limited number of gestures and patterns of behaviour. From one point of view it may even be said that religious man -- especially the religious man of primitive societies -- is above all a man paralyzed by the myth of the eternal return. A modern psychologist would be tempted to interpret such an attitude as anxiety before the danger of the new, refusal to assume responsibility for a genuine historical existence, nostalgia for a situation that is paradisal precisely because it is embryonic, insufficiently detached from nature. That problem is too complex to be discussed here. In any case, it lies outside the field of our investigation, for, in the last analysis, it implies the problem of the opposition between premodern and modern man. Let us rather say that it would be wrong to believe that the religious man of primitive and archaic societies refuses to assume the responsibility for a genuine existence. On the contrary, as we have seen and shall see again, he courageously assumes immense responsibilities -- for example, that of collaborating in the creation of the cosmos, or of creating his own world, or of ensuring the life of plants and animals and so on. But it is a different kind of responsibility from those that, to us moderns, appear to be the only genuine and valid responsibilities. It is a responsibility on the cosmic plane, in contradiction to the moral, social, or historical resposibilities that are alone regarded as valid in modern civilizations. From the point of view of profane existence, man feels no responsibility except to himself and to society. For him, the universe does not properly constitute a cosmos -- that is, a living and articulated unity; it is simply the sum of the material reserves and physical energies of the planet, and the great concern of modern man is to avoid stupidly exhausting the economic resources of the globe. But, existentially, the primitive always puts himself in a cosmic context. His personal experience lacks neither genuineness nor depth; but the fact that it is expressed in a language unfamiliar to us makes it appear spurious or infantile to modern eyes."
]

	let qoIndex = 0;
	$: quote = quoteOptions[qoIndex]

</script>

<T.PerspectiveCamera makeDefault position={[60, 80, 250]} fov={35}>
	<OrbitControls
		autoRotate
		autoRotateSpeed={-0.20}
		maxPolarAngle={Math.PI / 2}
		minPolarAngle={Math.PI / 6}
		enablePan={false}
		maxDistance={350}
		minDistance={100}

	/>
	<!-- <OrbitControls /> -->
</T.PerspectiveCamera>

<T.AmbientLight color={$rgbInvertedColorTween} intensity={5} />
<T.DirectionalLight
	castShadow
	color={$rgbColorTween}
	position={dirLight.position}
	intensity={dirLight.intensity}
	shadow.mapSize.width={dirLight.shadowMapSize}
	shadow.mapSize.height={dirLight.shadowMapSize}
	shadow.camera.top={dirLight.shadowCamSideLength}
	shadow.camera.right={dirLight.shadowCamSideLength}
	shadow.camera.bottom={-dirLight.shadowCamSideLength}
	shadow.camera.left={-dirLight.shadowCamSideLength}
/>

<T.Group>
	<Mountain position={[0, -25, 0]} rotation={[0, Math.PI, 0]} />

	<Tree position={[26, -3, 18]} rotation={[0, Math.PI, 0]} />
	<Tree position={[22, -5, 22]} />
	<Tree position={[33, -5.9, 21.5]} rotation={[0, 0, 0]} />
	<Tree position={[24, -17, 36]} rotation={[Math.PI / 10, 0, 0]} />

	<Gnome castShadow receiveShadow position={[33, -5.3, 20]} rotation={[0, -Math.PI / 1.5, 0]} />
</T.Group>

<ColorBall position={[30, 30, 35]} />

<StarField color={$rgbColorTween} size={1} amount={4000} radius={700} speed={6} direction={[0.75, 0.5, 0.5]}/>
<StarField color={$rgbColorTween} size={0.75} amount={1200} radius={600} speed={7} direction={[-0.75, -0.1, -0.65]}/>
<StarField color={$rgbColorTween} size={3} amount={1200} radius={3000} speed={2} direction={[0.45, 0.1, -0.35]}/>



<!-- {#if $showWelcome} -->
<!-- on:click={(e) => (showWelcome.set(false))} -->
<!-- position={[-12, 55, -4]} -->

<!-- position={[0, 20, 60]} -->

<!-- TODO: pull text from google doc
			transition / fade the text changes to match color changes 
		BIG IDEA: make the text spiral so there are no visible line breaks! just one long strand that wraps around mnt -->

<T.Group rotation={[0, textRotY, 0]}>

	<Text
	position={[-4, 25, 70]}
	text={$quoteText}
	anchorX="left"
	fontSize={3}
	castShadow
	receiveShadow
	color={$rgbColorTween}
	maxWidth={470}
	curveRadius={-75}
	textAlign={'justify'}
	/>
</T.Group>
<!-- {/if} -->

<!-- 
  https://next.threlte.xyz/docs/learn/basics/events
<T.Mesh
  on:click={(e) => console.log('click')}
  on:contextmenu={(e) => console.log('context menu')}
  on:dblclick={(e) => console.log('double click')}
  on:wheel={(e) => console.log('wheel')}
  on:pointerup={(e) => console.log('up')}
  on:pointerdown={(e) => console.log('down')}
  on:pointerover={(e) => console.log('over')}
  on:pointerout={(e) => console.log('out')}
  on:pointerenter={(e) => console.log('enter')}
  on:pointerleave={(e) => console.log('leave')}
  on:pointermove={(e) => console.log('move')}
  on:pointermissed={() => console.log('missed')}
/>
 -->
