import type { simpleRGB } from './types';

export const getRandomHexColor = () =>
	`#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, '0')}`;

export const rgbToHex = (rgb: simpleRGB) => {
	const hexR = rgb.r.toString(16).padStart(2, '0');
	const hexG = rgb.g.toString(16).padStart(2, '0');
	const hexB = rgb.b.toString(16).padStart(2, '0');
	return `#${hexR}${hexG}${hexB}`;
};

export const invertHexColor = (hexColor: string) => {
	if (hexColor.startsWith('#')) {
		hexColor = hexColor.slice(1);
	}
	const r = (255 - parseInt(hexColor.slice(0, 2), 16)).toString(16).padStart(2, '0');
	const g = (255 - parseInt(hexColor.slice(2, 4), 16)).toString(16).padStart(2, '0');
	const b = (255 - parseInt(hexColor.slice(4, 6), 16)).toString(16).padStart(2, '0');

	return `#${r}${g}${b}`;
};

export const hexToRGB = (hexColor: string) => {
	if (hexColor.startsWith('#')) {
		hexColor = hexColor.slice(1);
	}
	const r = parseInt(hexColor.slice(0, 2), 16);
	const g = parseInt(hexColor.slice(2, 4), 16);
	const b = parseInt(hexColor.slice(4, 6), 16);

	return { r, g, b };
};

export const invertRGB = (rgb: simpleRGB) => {
	return {
		r: 255 - rgb.r,
		g: 255 - rgb.g,
		b: 255 - rgb.b
	};
};
