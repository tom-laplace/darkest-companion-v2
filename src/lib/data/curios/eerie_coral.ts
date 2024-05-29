import type { curio } from '../../../../types/curio.type';

export const eerie_coral: curio = {
	image: '$lib/assets/curios/cove/eerie_coral.png',
	name: 'Eerie Coral',
	basics_quirk: ['50% Stress heal 10', '25% Stress +25', '25% Nothing'],
	items_quirk: [
		{
			image: '$lib/assets/items/medicinal_herbs.png',
			description: ['Purge a negative quirk']
		}
	]
};
