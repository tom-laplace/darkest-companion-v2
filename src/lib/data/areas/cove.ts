import type { area } from '../../../../types/area.type';
import { cove_curios } from '../curios/curios_manifest';
import { cove_provision_easy } from '../provisions/cove/cove_provision_easy';

export const cove: area = {
	name: 'Cove',
	curios: cove_curios,
	provisions: [cove_provision_easy]
};
