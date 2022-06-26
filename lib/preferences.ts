export type preferences = {
	priceRange: [number, number];
	distanceRange: number;
	categories: String[];
}

export const defaultPreferences: preferences = {
	priceRange: [0, Infinity],
	distanceRange: 5,
	categories: [],
}