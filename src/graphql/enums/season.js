import { GraphQLEnumType } from 'graphql';

const seasonEnum = new GraphQLEnumType({
	name: 'seasonEnum',
	values: {
		'Autumn': { value: 'autumn' },
		'Spring': { value: 'spring' },
		'Summer': { value: 'summer' },
		'Winter': { value: 'winter' },
	}
});

export default seasonEnum;