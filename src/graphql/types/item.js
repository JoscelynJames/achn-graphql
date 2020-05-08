import { GraphQLString, GraphQLBoolean, GraphQLInt, GraphQLList, GraphQLObjectType, GraphQLID, GraphQLUnionType } from 'graphql';

// Used Enums and Types
import Size from '../enums/size';
import Version from '../enums/version';
import SpeakerType from '../enums/speakerType';
import LightingType from '../enums/lightingType';
import Catalog from '../enums/catalog';
import Variant from '../enums/variantId';
import VfxType from '../enums/vfx';
import WindowType from '../enums/windowType';
import WindowColor from '../enums/windowColor';
import PaneType from '../enums/paneType';
import CurtainType from '../enums/curtainType';
import CeilingType from '../enums/ceiling';
import SeasonalAvailability from '../enums/seasonalAvailability';
import PrimaryShape from '../enums/primaryShape';
import SecondaryShape from '../enums/secondaryShape';
import Category from '../enums/category';
import Style from '../enums/style';
// import InteractEnum from '../enums/interact';
import Museum from '../enums/museum';

const itemType = new GraphQLObjectType({
	name: 'Item',
	fields: {
		_id: { type: GraphQLID },
		sourceSheet: { type: Category },
		name: { type: GraphQLString },
		patternTitle: { type: GraphQLString },
		diy: {
			type: GraphQLBoolean,
			description: 'If this is item can be made via DIY recipe',
		},
		patternCustomize: { type: GraphQLBoolean },
		size: { type: Size },
		sourceNotes: { type: GraphQLString },
		version: { type: Version },
		// interact: { type: GraphQLBoolean | GraphQLString }, // come back to this
		tag: { type: GraphQLString },
		speakerType: { type: SpeakerType },
		lightingType: { type: LightingType },
		catalog: { type: Catalog },
		set: { type: GraphQLString },
		series: { type: GraphQLString },
		customizationKitCost: { type: GraphQLInt },
		variants: { type: GraphQLList(Variant) },
		doorDeco: { type: GraphQLBoolean },
		vfx: { type: GraphQLBoolean },
		vfxType: { type: VfxType },
		windowType: { type: WindowType },
		windowColor: { type: WindowColor },
		paneType: { type: PaneType },
		curtainType: { type: CurtainType },
		curtainColor: { type: GraphQLString },
		ceilingType: { type: CeilingType },
		customize: { type: GraphQLBoolean },
		uses: { type: GraphQLInt },
		stackSize: { type: GraphQLInt },
		seasonalAvailability: { type: SeasonalAvailability },
		style: { type: Style },
		primaryShape: { type: PrimaryShape },
		secondaryShape: { type: SecondaryShape },
		type: { type: GraphQLString },
		museum: { type: Museum },
		category: { type: Category },
		realArtworkTitle: { type: GraphQLString },
		artist: { type: GraphQLString },
		museumDescription: { type: GraphQLString },
	}
});

export default itemType;
