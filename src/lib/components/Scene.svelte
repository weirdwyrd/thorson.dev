<script lang="ts">
	import { Color } from 'three';
	import { T, useFrame, useThrelte } from '@threlte/core';
	import { OrbitControls, Text, interactivity } from '@threlte/extras';

	import { rgbColorTween, rgbInvertedColorTween, showWelcome } from '$lib/stores';

	import Tree from './models/Tree.svelte';
	import Gnome from './models/Gnome.svelte';
	import ColorBall from './ColorBall.svelte';
	import StarField from './StarField.svelte';
	import Mountain from './models/Mountain.svelte';

	const dirLight = {
		position: [130, 200, 260] as [number, number, number],
		color: '#626476',
		intensity: 10,
		shadowMapSize: 2048,
		shadowCamSideLength: 35
	};

	let textRotY: number = 0;

	const { scene } = useThrelte();
	$: scene.background = new Color($rgbInvertedColorTween);

	interactivity();
	useFrame((_, delta) => {
		textRotY += 0.5 * delta;
	});
</script>

<T.PerspectiveCamera makeDefault position={[60, 110, 240]} fov={35}>
	<OrbitControls
		autoRotate
		autoRotateSpeed={0.35}
		maxPolarAngle={Math.PI / 2}
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

<StarField color={$rgbColorTween} size={1} amount={4000} radius={700} speed={2}/>

{#if $showWelcome}
	<Text
		on:click={(e) => (showWelcome.set(false))}
		position={[5, 40, 10]}
		text="Välkommen!"
		rotation.y={textRotY}
		anchorX="center"
		fontSize={3}
		castShadow
		receiveShadow
	/>
{/if}

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
