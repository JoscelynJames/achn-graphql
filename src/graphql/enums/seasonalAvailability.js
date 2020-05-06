import { GraphQLEnumType } from 'graphql';

const seasonalAvailabilityEnum = new GraphQLEnumType({
	name: 'seasonalAvailabilityEnum',
	values: {
		'AllYear': { value: 'All Year' },
		'Summer': { value: 'Summer' },
		'Winter': { value: 'Winter' },
	}
});

export default seasonalAvailabilityEnum;