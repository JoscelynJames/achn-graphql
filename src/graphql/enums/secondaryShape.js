const graphql = require('graphql');

const { GraphQLEnumType } = graphql;

const SecondaryShapeEnum = new GraphQLEnumType({
	name: 'SecondaryShapeEnum',
	values: {
		'H': { value: 'Height' },
		'L': { value: 'Length' },
		'W': { value: 'Width' },
	}
});

module.exports = SecondaryShapeEnum;