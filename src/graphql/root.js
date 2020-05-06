const graphql = require('graphql');
const item = require('./queries/item');

var rootQueryType = new graphql.GraphQLObjectType({
	name: 'Query', // used in description 
	fields: { // Root queries
		item,
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

module.exports = new graphql.GraphQLSchema({query: rootQueryType});