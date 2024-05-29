import type { area } from '../../../../types/area.type';
import { cove_curios } from '../curios/curios_manifest';
import { cove_provision_easy } from '../provisions/cove/cove_provision_easy';
import { cove_provision_long } from '../provisions/cove/cove_provision_long';
import { cove_provision_medium } from '../provisions/cove/cove_provision_medium';

export const cove: area = {
	name: 'Cove',
	curios: cove_curios,
	provisions: [cove_provision_easy, cove_provision_medium, cove_provision_long]
};
