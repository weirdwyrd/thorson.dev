import type { SvelteComponent } from "svelte";
import type { Events, Props, Slots } from "@threlte/core";
import CC from 'camera-controls';

export type CameraControlsProps = Props<CC> & {
    autoRotate?: boolean
    autoRotateSpeed?: number
};
export type CameraControlsEvents = Events<CC>;
export type CameraControlsSlots = Slots<CC>;

export default class CameraControls extends SvelteComponent<
    CameraControlsProps, CameraControlsEvents, CameraControlsSlots
> { }