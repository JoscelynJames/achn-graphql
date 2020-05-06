const graphql = require('graphql');

const { GraphQLEnumType } = graphql;

const ceilingEnumType = new GraphQLEnumType({
	name: 'ceilingEnumType',
	values: {
		'Cloth': { value: 'Cloth' },
		'Gold': { value: 'Gold' },
		'Plain': { value: 'Plain' },
		'Stone': { value: 'Stone' },
		'Tile': { value: 'Tile' },
		'Wood': { value: 'Wood' },
	}
});

module.exports = ceilingEnumType;