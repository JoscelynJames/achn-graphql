import { GraphQLObjectType, GraphQLString } from 'graphql';

const reactionType = new GraphQLObjectType({
	name: 'Reaction',
	values: {
		'sourceSheet': { type: GraphQLString },
		'name': { type: GraphQLString },
		'image': { type: GraphQLString },
		'source': { type: GraphQLString },
		'internalId': { type: GraphQLString },
		'uniqueEntryId': { type: GraphQLString },
	}
});

export default reactionType;