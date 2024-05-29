import { curio } from './curio.type';
import { provision } from './provision.type';

export type area = {
	name: 'Ruins' | 'Warrens' | 'Weald' | 'Cove';
	curios: curio[];
	provisions: provision[];
};
