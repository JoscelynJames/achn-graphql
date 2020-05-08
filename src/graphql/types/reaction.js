import { GraphQLObjectType, GraphQLString, GraphQLID } from 'graphql';

const reactionType = new GraphQLObjectType({
	name: 'Reaction',
	values: {
		_id: { type: GraphQLID },
		sourceSheet: { type: GraphQLString },
		name: { type: GraphQLString },
		image: { type: GraphQLString },
		source: { type: GraphQLString },
		internalId: { type: GraphQLString },
		uniqueEntryId: { type: GraphQLString },
	}
});

export default reactionType;