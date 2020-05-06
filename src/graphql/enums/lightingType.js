

const graphql = require('graphql');

const { GraphQLEnumType } = graphql;

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

module.exports = lightingTypeEnum;