export type provision = {
	total_cost: number;
	length: 'Short' | 'Medium' | 'Long';
	items: {
		name: string;
		quantity: number;
		image: string;
	}[];
};
