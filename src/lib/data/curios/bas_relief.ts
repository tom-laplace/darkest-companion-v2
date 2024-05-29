import type { curio } from '../../../../types/curio.type';

export const bas_relief: curio = {
	image: '$lib/assets/curios/cove/bas_relief.png',
	name: 'Bas-Relief',
	basics_quirk: [
		'66.7% Gain random positive quirk',
		'25% Gain random negative quirk',
		'8.3% random disease'
	],
	items_quirk: [
		{
			image: '$lib/assets/items/shovel.png',
			description: ['Stress +100']
		}
	]
};
