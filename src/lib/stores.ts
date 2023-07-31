import { cubicIn } from 'svelte/easing';
import { tweened } from 'svelte/motion';
import { derived, writable } from 'svelte/store';
import { hexToRGB } from './utils';

export const showWelcome = writable(true);

// #fefcdb -- default dark  RGB 254, 252, 219
// #17bed4 -- default light

let initColor: string = '#fefcdb';
let initRGB = hexToRGB(initColor);

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
