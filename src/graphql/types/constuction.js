import { GraphQLString, GraphQLObjectType, GraphQLInterfaceType } from 'graphql';

// Enums and Types
import Category from '../enums/category';
import Source from '../enums/source';

const constructionType = new GraphQLObjectType({
	name: 'Construction',
	fields: {
		sourceSheet: { type: GraphQLString },
		name: { type: GraphQLString },
		image: { type: GraphQLString },
		buy: { type: GraphQLInterfaceType },
		category: { type: Category },
		source: { type: [Source] },
		filename: { type: GraphQLString },
		uniqueEntryId: { type: GraphQLString },
	}
});

export default constructionType;
