import type { curio } from '../../../../types/curio.type';

export const giant_oster: curio = {
	image: '$lib/assets/curios/cove/giant_oster.png',
	name: 'Giant Oster',
	basics_quirk: ['40% Gold or trinket x2', '40% Bleed', '20% Nothing'],
	items_quirk: [
		{
			image: '$lib/assets/items/shovel.png',
			description: ['Gold or trinket x3']
		},
		{
			image: '$lib/assets/items/dog_treats.png',
			description: ['Buff 25 Dodge']
		}
	]
};
