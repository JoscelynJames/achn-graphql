
import { GraphQLObjectType, GraphQLInt, GraphQLBoolean, GraphQLString } from 'graphql';

// Enums and Types
import Season from '../enums/season';

// I have no clue what thern means
const thernType = new GraphQLObjectType({
	name: 'Thern',
	values: {
		month: { value: GraphQLInt },
		isAllDay: { value: GraphQLBoolean },
		activeHours: { value: [GraphQLString] },
		season: { value: Season },
	}
});

export default thernType;