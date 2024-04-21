<script lang="ts">
	import { Color } from 'three';
	import { T, useFrame, useThrelte } from '@threlte/core';
	import { Text, interactivity } from '@threlte/extras';

	import {
		rgbColorTween,
		rgbInvertedColorTween,
		quoteText,
		cameraControls
	} from '$lib/stores';
	import Tree from './models/Tree.svelte';
	import Gnome from './models/Gnome.svelte';
	import ColorBall from './ColorBall.svelte';
	import StarField from './StarField.svelte';
	import Mountain from './models/Mountain.svelte';
	import ColorCube from './ColorCube.svelte';
	import CameraControls from './CameraControls.svelte';

	const dirLight = {
		position: [130, 200, 260] as Coordinates,
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
</script>

<!-- NEW camera-controls https://threlte.xyz/docs/examples/camera/camera-controls -->
<T.PerspectiveCamera
	makeDefault
	position={[60, 80, 250]}
	fov={35}
	on:create={({ ref }) => {
		ref.lookAt(0, 1, 0);
	}}
>
	<CameraControls
		on:create={({ ref }) => {
			//@ts-ignore
			$cameraControls = ref;
		}}
		autoRotate={true}
		autoRotateSpeed={0.5}
		minDistance={100}
		maxDistance={1500}
		minPolarAngle={Math.PI / 6}
		maxPolarAngle={Math.PI / 2}
	/>
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
<!-- <ColorCube position={[30, 60, 35]} /> -->

<StarField
	color={$rgbColorTween}
	size={1}
	amount={4000}
	radius={700}
	speed={6}
	direction={[0.75, 0.5, 0.5]}
/>
<StarField
	color={$rgbColorTween}
	size={0.75}
	amount={1200}
	radius={600}
	speed={7}
	direction={[-0.75, -0.1, -0.65]}
/>
<StarField
	color={$rgbColorTween}
	size={3}
	amount={1200}
	radius={3000}
	speed={2}
	direction={[0.45, 0.1, -0.35]}
/>

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
		outlineBlur={4}
		outlineColor={$rgbInvertedColorTween}
		outlineOpacity={0.75}
	/>
</T.Group>

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
