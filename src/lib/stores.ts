import { cubicIn } from 'svelte/easing';
import { tweened } from 'svelte/motion';
import { derived, writable, type Writable } from 'svelte/store';
import { hexToRGB } from './utils';

export const cameraControls = writable<any>(undefined); //todo: can we change this away from undefined?

// QUOTE LOGIC
export const quoteText = writable("A wise man once inspected a sphere, and was better for it.");
export const quoteOptions: Writable<Quote[]> = writable();


/**
 * COLOR LOGIC
 */

let initColor: string = '#fefcdb';
let initRGB = hexToRGB(initColor);
// #fefcdb -- default dark  RGB 254, 252, 219
// #17bed4 -- default light

export const rTween = tweened(initRGB.r, { duration: 800, easing: cubicIn });
export const gTween = tweened(initRGB.g, { duration: 800, easing: cubicIn });
export const bTween = tweened(initRGB.b, { duration: 800, easing: cubicIn });

export const rgbColorTween = derived([rTween, gTween, bTween], ([rTween, gTween, bTween]) => {
	return `rgb(${Math.floor(rTween)},${Math.floor(gTween)},${Math.floor(bTween)})`;
});

export const rgbInvertedColorTween = derived(
	[rTween, gTween, bTween],
	([rTween, gTween, bTween]) => {
		return `rgb(${Math.floor(255 - rTween)},${Math.floor(255 - gTween)},${Math.floor(
			255 - bTween
		)})`;
	}
);

// export const rgbTextColorTween = derived(
// 	[rTween, gTween, bTween],
// 	([rTween, gTween, bTween]) => {
// 		return `rgb(${Math.floor(255 - rTween * 0.25 )},${Math.floor(255 - gTween * 0.25)},${Math.floor(
// 			255 - bTween * 0.25
// 		)})`;
// 	}
// );
