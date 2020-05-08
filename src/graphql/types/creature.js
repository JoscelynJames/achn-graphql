import { GraphQLString, GraphQLInt, GraphQLObjectType, GraphQLBoolean, GraphQLList, GraphQLID } from 'graphql';

// Enums and Types
import Size from '../enums/size';
import LightingType from '../enums/lightingType';
import Color from '../enums/color';
import Weather from '../enums/weather';
import ActiveMonths from '../enums/activeMonths';

const creatureType = new GraphQLObjectType({
	name: 'Creature',
	fields: {
		_id: { type: GraphQLID },
		sourceSheet: { type: GraphQLString },
		num: { type: GraphQLInt },
		name: { type: GraphQLString },
		iconImage: { type: GraphQLString },
		critterpediaImage: { type: GraphQLString },
		furnitureImage: { type: GraphQLString },
		sell: { type: GraphQLInt },
		whereHow: { type: GraphQLString },
		shadow: { type: GraphQLString },
		totalCatchesToUnlock: { type: GraphQLInt },
		rainSnowCatchUp: { type: GraphQLBoolean },
		size: { type: Size },
		lightingType: { type: LightingType },
		iconFilename: { type: GraphQLString },
		critterpediaFilename: { type: GraphQLString },
		furnitureFilename: { type: GraphQLString },
		internalId: { type: GraphQLInt },
		uniqueEntryId: { type: GraphQLString },
		colors: { type: GraphQLList(Color) },
		specialSell: { type: GraphQLInt },
		activeMonths: { type: ActiveMonths },
		weather: { type: Weather },
	}
});

export default creatureType;
