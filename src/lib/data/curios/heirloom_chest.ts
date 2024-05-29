import type { curio } from '../../../../types/curio.type';

export const heirloom_chest: curio = {
	image: '$lib/assets/curios/basic/heirloom_chest.png',
	name: 'Heirloom Chest',
	basics_quirk: ['75% Gold or Gems x2', '12.5% Bleed', '12.5% Blight'],
	items_quirk: [
		{
			image: '$lib/assets/items/skeleton_key.png',
			description: ['Heirlooms x3']
		},
		{
			image: '$lib/assets/items/antivenom.png',
			description: ['Heirlooms x3']
		}
	]
};
