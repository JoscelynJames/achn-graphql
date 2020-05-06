const graphql = require('graphql');

const { GraphQLEnumType } = graphql;

const catalogEnumType = new GraphQLEnumType({
	name: 'catalogEnumType',
	values: {
		'ForSale': { value: 'For sale' },
		'NotForSale': { value: 'Not for sale' },
		'NotInCatalog': { value: 'Not in catalog' },
	}
});

module.exports = catalogEnumType;