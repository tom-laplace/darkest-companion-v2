import type { curio } from '../../../../types/curio.type';

export const brackish_tidepool: curio = {
	image: '$lib/assets/curios/cove/brackish_tidepool.png',
	name: 'Brackish Tidepool',
	basics_quirk: [
		'75% Buff 33% Bleed, Blight, Disease and Debuff resist until camp',
		'25% Random disease'
	],
	items_quirk: [
		{
			image: '$lib/assets/items/antivenom.png',
			description: ['Heal 5 stress, cure status effect, heal 5 HP']
		}
	]
};
