import type { curio } from '../../../../types/curio.type';

export const shamblers_altar: curio = {
	image: '$lib/assets/curios/basic/shamblers_altar.png',
	name: "Shambler's Altar",
	basics_quirk: ['Nothing'],
	items_quirk: [
		{
			image: '$lib/assets/items/torch.png',
			description: ['Summon Shambler']
		}
	]
};
