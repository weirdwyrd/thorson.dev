export const getRandomHexColor = () =>
	`#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, '0')}`;

export const invertHexColor = (hexColor: string) => {
	if (hexColor.startsWith('#')) {
		hexColor = hexColor.slice(1);
	}
	const r = (255 - parseInt(hexColor.slice(0, 2), 16)).toString(16).padStart(2, '0');
	const g = (255 - parseInt(hexColor.slice(2, 4), 16)).toString(16).padStart(2, '0');
	const b = (255 - parseInt(hexColor.slice(4, 6), 16)).toString(16).padStart(2, '0');

	return `#${r}${g}${b}`;
};
