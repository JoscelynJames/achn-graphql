import { GraphQLString, GraphQLObjectType, GraphQLInt, GraphQLBoolean, GraphQLID } from 'graphql';

// Enums and Types
import Version from '../enums/version';

const achievementType = new GraphQLObjectType({
	name: 'Achievement',
	fields: {
		_id: { type: GraphQLID },
		sourceSheet: { type: GraphQLString },
		name: { type: GraphQLString },
		awardCriteria: { type: GraphQLString },
		num: { type: GraphQLInt },
		internalId: { type: GraphQLInt },
		internalName: { type: GraphQLString },
		internalCategory: { type: GraphQLString },
		numOfTiers: { type: GraphQLInt },
		tier1: { type: GraphQLInt },
		tier2: { type: GraphQLInt },
		tier3: { type: GraphQLInt },
		tier4: { type: GraphQLInt },
		tier5: { type: GraphQLInt },
		rewardTier1: { type: GraphQLInt },
		rewardTier2: { type: GraphQLInt },
		rewardTier3: { type: GraphQLInt },
		rewardTier4: { type: GraphQLInt },
		rewardTier5: { type: GraphQLInt },
		rewardTier6: { type: GraphQLInt },
		sequential: { type: GraphQLBoolean },
		version: { type: Version },
		uniqueEntryId: { type: GraphQLString },
	}
});

export default achievementType;
