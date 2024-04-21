<script lang="ts">
	import { T } from '@threlte/core';
	import { spring } from 'svelte/motion';
	import type { Spring } from 'svelte/motion';

	export let position: Coordinates;

	const trackPosition: Coordinates = position;

	let pointerPosition: Coordinates = position;
	let pointerScale: Spring<number> = spring(0.5);

	const pointerenter = () => {
		$pointerScale = 1;
	};
	const pointerleave = () => {
		$pointerScale = 0.5;
	};

	// draggon logic
	// on clickdown => dragging true
	// while dragging true => set position equal to mouse
	// limit position axes of movement to align with track
	// on clickup => dragging false

	const pointerdown = (event: any) => {
		event.stopPropagation();
		console.log('down');

		// $cameraLocked = true;
	};

	const pointerup = (event: any) => {
		event.stopPropagation();
		console.log('up');
	};
</script>

<T.Group>
	<!-- Pointer -->
	<T.Mesh
		position={trackPosition}
		scale={$pointerScale}
		on:pointerenter={pointerenter}
		on:pointerleave={pointerleave}
		on:pointerdown={pointerdown}
		on:pointerup={pointerup}
	>
		<T.SphereGeometry args={[0.5]} />
	</T.Mesh>

	<!-- Track -->
	<T.Mesh position={trackPosition}>
		<T.BoxGeometry args={[0.1, 0.1, 20]} />
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
