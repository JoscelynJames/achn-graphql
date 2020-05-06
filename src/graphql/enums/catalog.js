// const graphql = require('graphql');
import { GraphQLEnumType } from 'graphql';

const catalogEnumType = new GraphQLEnumType({
	name: 'catalogEnumType',
	values: {
		'ForSale': { value: 'For sale' },
		'NotForSale': { value: 'Not for sale' },
		'NotInCatalog': { value: 'Not in catalog' },
	}
});

export default catalogEnumType;