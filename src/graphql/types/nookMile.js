import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql';

import Category from '../enums/category';

const nookMilesType = new GraphQLObjectType({
	name: 'NookMile',
	values: {
		sourceSheet: { type: GraphQLString },
		name: { type: GraphQLString },
		image: { type: GraphQLString },
		nookMiles: { type: GraphQLInt },
		stackSize: { type: GraphQLInt },
		category: { type: Category },
		filename: { type: GraphQLString },
		internalId: { type: GraphQLInt },
		uniqueEntryId: { type: GraphQLString },
	}
});

export default nookMilesType;