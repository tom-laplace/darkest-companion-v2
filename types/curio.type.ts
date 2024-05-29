import { item_quirk } from './item_quirk.type';

export type curio = {
	image: string;
    name: string;
	basics_quirk: string[];
	items_quirk: item_quirk[];
};
