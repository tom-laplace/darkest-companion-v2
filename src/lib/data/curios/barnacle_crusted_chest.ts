import type { curio } from '../../../../types/curio.type';

export const barnacle_crusted_chest: curio = {
	image: '$lib/assets/curios/basic/bernacle_crusted_chest.png',
	name: 'Barnacle Crusted Chest',
	basics_quirk: ['50% Gold, gems, heirlooms or supplies x2', '25% Bleed', '25% Nothing'],
	items_quirk: [
		{
			image: '$lib/assets/items/shovel.png',
			description: ['Any loot x3']
		}
	]
};
