

import { GraphQLEnumType } from 'graphql';

const lightingTypeEnum = new GraphQLEnumType({
	name: 'lightingTypeEnum',
	values: {
		'Candle': { value: 'Candle' },
		'Emission': { value: 'Emission' },
		'Fluorescent': { value: 'Fluorescent' },
		'Monitor': { value: 'Monitor' },
		'Spotlight': { value: 'Spotlight' },
	}
});

export default lightingTypeEnum;