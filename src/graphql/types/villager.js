import { GraphQLString, GraphQLObjectType } from 'graphql';

// Enums and Types
import Style from '../enums/style';
import Color from '../enums/color';
import Gender from '../enums/gender';
import Personality from '../enums/personality';
import Hobby from '../enums/hobby';

const villagerType = new GraphQLObjectType({
	name: 'Villager',
	fields: {
		sourceSheet: { type: GraphQLString },
		name: { type: GraphQLString },
		iconImage: { type: GraphQLString },
		houseImage: { type: GraphQLString },
		species: { type: GraphQLString },
		gender: { type: Gender },
		personality: { type: Personality },
		hobby: { type: Hobby },
		birthday: { type: GraphQLString },
		catchphrase: { type: GraphQLString },
		favoriteSong: { type: GraphQLString },
		filename: { type: GraphQLString },
		uniqueEntryId: { type: GraphQLString },
		colors: { type: [Color] },
		styles: { type: [Style] },
	}
});

export default villagerType;