const graphql = require('graphql');

const { GraphQLEnumType } = graphql;

const seasonalAvailabilityEnum = new GraphQLEnumType({
	name: 'seasonalAvailabilityEnum',
	values: {
		'AllYear': { value: 'All Year' },
		'Summer': { value: 'Summer' },
		'Winter': { value: 'Winter' },
	}
});

module.exports = seasonalAvailabilityEnum;