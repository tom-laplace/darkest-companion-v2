import type { curio } from '../../../../types/curio.type';

export const eldrich_alter: curio = {
	image: '$lib/assets/curios/basic/eldrich_alter.png',
	name: 'Eldrich Alter',
	basics_quirk: [
		'50% Stress +50',
		'33% Gain random positive quirk',
		'16% Gain random negative quirk',
		'16% Nothing'
	],
	items_quirk: [
		{
			image: '$lib/assets/items/holy_water.png',
			description: ['Purge a negative quirk']
		}
	]
};
