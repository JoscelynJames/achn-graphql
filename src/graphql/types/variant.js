import { GraphQLString, GraphQLBoolean, GraphQLInt, GraphQLObjectType } from 'graphql';

// Enums and Types
import VariantID from '../enums/variantId';
import Color from '../enums/color';
import Theme from '../enums/theme';
import BodyTitle from '../enums/bodyTitle';
import LabelTheme from '../enums/labelTheme';

const variantType = new GraphQLObjectType({
	name: 'Variant',
	fields: {
		image: { type: GraphQLString },
		variation: { type: GraphQLInt | GraphQLString },
		filename: { type: GraphQLString },
		variantId: { type: VariantID },
		uniqueEntryId: { type: GraphQLString },
		colors: { type: [Color] },
		pattern: { type: GraphQLString },
		bodyCustomize: { type: GraphQLBoolean },
		bodyTitle: { type: BodyTitle  },
		source: { type: [GraphQLString] },
		internalId: { type: GraphQLInt },
		buy: { type: GraphQLInt },
		sell: { type: GraphQLInt  },
		themes: { type: [Theme] },
		closetImage: { type: GraphQLString },
		storageImage: { type: GraphQLString },
		labelThemes: { type: [LabelTheme] },
		framedImage: { type: GraphQLString },
		albumImage: { type: GraphQLString },
		inventoryImage: { type: GraphQLString },
		genuine: { type: GraphQLBoolean },
		highResTexture: { type: null },
	}
});

export default variantType;
