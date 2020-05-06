const graphql = require('graphql');
import itemType from './queries/item';

var rootQueryType = new graphql.GraphQLObjectType({
	name: 'Query', // used in description 
	fields: { // Root queries
		item: itemType,
		// items
		// villager 
		// villagers
		// achievement
		// achievements
		// nookMilesItem
		// nookMilesItems
		// creature
		// creatures
	}
});

export default new graphql.GraphQLSchema({query: rootQueryType});