import type { curio } from '../../../../types/curio.type';

export const fish_idol: curio = {
	image: '$lib/assets/curios/basic/fish_idol.png',
	name: 'Fish Idol',
	basics_quirk: [
		'50% Debuff -25% DMG, -10 ACC until camp',
		'50% Debuff -12 DODGE, 3 round Marked until camp'
	],
	items_quirk: [
		{
			image: '$lib/assets/items/holy_water.png',
			description: ['50% Buff 18% DMG until camp', '50% Buff 10% DMG, 5 ACC until camp']
		}
	]
};
