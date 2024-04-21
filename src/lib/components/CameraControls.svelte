<script lang="ts" context="module">
	/**
	 * A <script> tag with a context="module" attribute runs once when the module first evaluates, rather than for each component instance.
	 * Values declared in this block are accessible from a regular <script> (and the component markup) but not vice versa.
	 *  https://kit-docs-demo.vercel.app/docs/component-format/module
	 */

	let installed = false;
</script>

<script lang="ts">
	/**
	 * Component code derived from example: https://threlte.xyz/docs/examples/camera/camera-controls
	 */

	import { T, forwardEventHandlers, useParent, useTask, useThrelte } from '@threlte/core';
	import CameraControls from 'camera-controls';
	import {
		Box3,
		Matrix4,
		PerspectiveCamera,
		Quaternion,
		Raycaster,
		Sphere,
		Spherical,
		Vector2,
		Vector3,
		Vector4
	} from 'three';
	import { DEG2RAD } from 'three/src/math/MathUtils.js';

	import type {
		CameraControlsProps,
		CameraControlsEvents,
		CameraControlsSlots
	} from './CameraControls.svelte';

	type $$Props = CameraControlsProps;
	type $$Events = CameraControlsEvents;
	type $$Slots = CameraControlsSlots;

	const subsetOfTHREE = {
		Box3,
		Matrix4,
		Quaternion,
		Raycaster,
		Sphere,
		Spherical,
		Vector2,
		Vector3,
		Vector4
	};

	// Need to install camera-controls https://github.com/yomotsu/camera-controls?tab=readme-ov-file#important
	if (!installed) {
		CameraControls.install({ THREE: subsetOfTHREE });
		installed = true;
	}

	const parent = useParent();
	if (!$parent) throw new Error('CameraControls must be a child of a ThreeJS camera.');

	const { renderer, invalidate } = useThrelte();
	export const ref = new CameraControls($parent as PerspectiveCamera, renderer?.domElement);
	ref.truckSpeed = 0; // disables panning

	const getControls = () => ref;

	export let autoRotate = false;
	export let autoRotateSpeed = 1;
	export let disableAutoRotate = false;

	useTask(
		(delta) => {
			if (autoRotate && !disableAutoRotate) {
				getControls().azimuthAngle += 4 * delta * DEG2RAD * autoRotateSpeed;
			}
			const updated = getControls().update(delta);
			if (updated) invalidate();
		},
		{
			autoInvalidate: false
		}
	);

	const forwardingComponent = forwardEventHandlers();
</script>

<T
	is={ref}
	on:control={() => {
		disableAutoRotate = true;
	}}
	on:rest={() => {
		disableAutoRotate = false;
	}}
	bind:this={$forwardingComponent}
	{...$$restProps}
>
	<slot {ref} />
</T>
