const graphql = require('graphql');

import getItem from './queries/getItem';
import getAllItems from './queries/getAllItems';
import getVillager from './queries/getVillager';
import getAllVillagers from './queries/getAllVillagers';
import getNookMilesItem from './queries/getNookMilesItem';
import getAllNookMileItems from './queries/getAllNookMileItems';
import getCreature from './queries/getCreature';
import getAllCreatures from './queries/getAllCreatures';
import getAchievement from './queries/getAchievement';
import getAllAchievements from './queries/getAllAchievements';

var rootQueryType = new graphql.GraphQLObjectType({
	name: 'Query', // used in description 
	fields: { // Root queries
		getItem,
		getAllItems,
		getVillager, 
		getAllVillagers,
		getAchievement,
		getAllAchievements,
		getNookMilesItem,
		getAllNookMileItems,
		getCreature,
		getAllCreatures
	}
});

export default new graphql.GraphQLSchema({query: rootQueryType});