import { cubicIn } from "svelte/easing";
import { tweened } from "svelte/motion";
import { derived, writable } from "svelte/store";
import { hexToRGB, invertRGB, rgbToHex } from "./utils";
import type { simpleRGB } from "./types";

	// #fefcdb -- default dark  RGB 254, 252, 219
	// #17bed4 -- default light

let initColor: string = '#fefcdb';

export const lightColor = writable('#fefcdb');
// export const lightColor = tweened(initColor, { duration: 800, easing: cubicIn, interpolate: rgbInterpolate });

// let initColor = {
//     r: 1,
//     g: 1,
//     b: 1
// }

// export const lightColorTween = tweened(initColor, { duration: 800, easing: cubicIn });
// export const backgroundColorTween = derived(lightColorTween, ($lightColorTween) => invertRGB($lightColorTween));

let initRGB = hexToRGB(initColor);


export const rTween = tweened(initRGB.r, {duration: 800, easing: cubicIn});
export const gTween = tweened(initRGB.g, {duration: 800, easing: cubicIn});
export const bTween = tweened(initRGB.b, {duration: 800, easing: cubicIn});



const scaledValue = (startColor: number, delta: number, t: number) => startColor + delta * t;

function rgbInterpolate(fromColor: string, toColor: string) {
    console.log(fromColor)
    const fromRGB: simpleRGB = hexToRGB(fromColor);
    const toRGB: simpleRGB = hexToRGB(toColor);

    const deltaRed = toRGB.r - fromRGB.r;
    const deltaGreen = toRGB.g - fromRGB.g;
    const deltaBlue = toRGB.b - fromRGB.b;

    console.log(toRGB)

    return (t: number) => {
        const r = scaledValue(fromRGB.r, deltaRed, t);
        const g = scaledValue(fromRGB.g, deltaGreen, t);
        const b = scaledValue(fromRGB.b, deltaBlue, t);

        return rgbToHex({r, g, b})
    }
}