<script lang="ts">
	import { T } from '@threlte/core';
	import Slider from './Slider.svelte';
	export let position: Coordinates;

	const sliderPosition: Coordinates = [position[0], position[1] + 10, position[2]];
</script>

<T.Group>
	<T.Mesh {position}>
		<T.BoxGeometry args={[5, 5, 5]} />
	</T.Mesh>

	<Slider position={sliderPosition} />
</T.Group>
