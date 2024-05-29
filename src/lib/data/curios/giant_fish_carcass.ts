import type { curio } from '../../../../types/curio.type';

export const giant_fish_carcass: curio = {
	image: '$lib/assets/curios/cove/giant_fish_carcass.png',
	name: 'Giant Fish Carcass',
	basics_quirk: [
		'16.7% Gold, gems or supplies',
		'16.7% The Red Plague disease',
		'11.1% Blight',
		'5.5% Bleed',
		'50% Nothing'
	],
	items_quirk: [
		{
			image: '$lib/assets/items/medicinal_herbs.png',
			description: ['Any loot x3']
		}
	]
};
