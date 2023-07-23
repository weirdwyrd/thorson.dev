<script lang="ts">
	import { writable } from 'svelte/store';
	import { spring } from 'svelte/motion';
	import type { Spring } from 'svelte/motion';
	import { T, useFrame, useThrelte } from '@threlte/core';
	import { OrbitControls, Text, interactivity } from '@threlte/extras';

	import Tree from './models/Tree.svelte';
	import Mountain from './models/Mountain.svelte';
	import { Color } from 'three';


	const getRandomHexColor = () =>
		`#${Math.floor(Math.random() * 16777215)
			.toString(16)
			.padStart(6, '0')}`;

	const invertHexColor = (hexColor: string) => {
		if (hexColor.startsWith('#')) {
			hexColor = hexColor.slice(1);
		}
		const r = (255 - parseInt(hexColor.slice(0, 2), 16)).toString(16).padStart(2, '0');
		const g = (255 - parseInt(hexColor.slice(2, 4), 16)).toString(16).padStart(2, '0');
		const b = (255 - parseInt(hexColor.slice(4, 6), 16)).toString(16).padStart(2, '0');

		return `#${r}${g}${b}`;
	};

	let showText = false;

	const lightColor = writable('#626476');

	const dirLight = {
		position: [130, 200, 260] as [number, number, number],
		color: $lightColor,
		intensity: 10,
		shadowMapSize: 2048,
		shadowCamSideLength: 35
	};

	let rotationY: number = 0;

	//Sphere controls
	let scale: Spring<number> = spring(1);
	const pointerenter = () => {
		$scale = 1.5;
		showText = true;
	};
	const pointerleave = () => {
		$scale = 1;
		showText = false;
	};
	const click = () => {
		// $scale += 1;
		lightColor.set(getRandomHexColor());
    scene.background = new Color(invertHexColor($lightColor));

		console.log($lightColor, invertHexColor($lightColor));
	};

  
  const { scene } = useThrelte();
  scene.background = new Color(invertHexColor($lightColor));

	interactivity();
	useFrame((_, delta) => {
		rotationY -= 0.5 * delta;
	});
</script>


<T.PerspectiveCamera makeDefault position={[60, 110, 240]} fov={35} >
	<OrbitControls autoRotate autoRotateSpeed={0.5} maxPolarAngle={Math.PI / 2.5} enablePan={false}/>
</T.PerspectiveCamera>

<T.AmbientLight color={invertHexColor($lightColor)} intensity={2} />
<T.DirectionalLight
	position={dirLight.position}
	color={dirLight.color}
	intensity={dirLight.intensity}
	castShadow
	shadow.mapSize.width={dirLight.shadowMapSize}
	shadow.mapSize.height={dirLight.shadowMapSize}
	shadow.camera.top={dirLight.shadowCamSideLength}
	shadow.camera.right={dirLight.shadowCamSideLength}
	shadow.camera.bottom={-dirLight.shadowCamSideLength}
	shadow.camera.left={-dirLight.shadowCamSideLength}
/>

<Mountain position={[0, -25, 0]} rotation={[0, Math.PI, 0]} />

<Tree position={[26, -3, 18]} rotation={[0, Math.PI, 0]} />
<Tree position={[22, -5, 22]} />
<Tree position={[33, -5.9, 21.5]} rotation={[0, 0, 0]} />
<Tree position={[24, -17, 36]} rotation={[Math.PI / 10, 0, 0]} />

<T.Group position={[5, 40, 10]}>
	<Text
		rotation.y={rotationY}
		text="Välkommen!"
		anchorX="center"
		fontSize={3}
		castShadow
		receiveShadow
	/>
</T.Group>

<T.Group position={[30, 30, 35]}>
	{#if showText}
		<Text castShadow anchorX="center" anchorY={-6} text={$lightColor} fontSize={1} />
	{/if}
	<T.Mesh
		castShadow
		receiveShadow
		scale={$scale}
		on:click={click}
		on:pointerenter={pointerenter}
		on:pointerleave={pointerleave}
	>
		<T.SphereGeometry args={[2.5, 64, 64]} />
		<T.MeshStandardMaterial color={$lightColor} />
	</T.Mesh>
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