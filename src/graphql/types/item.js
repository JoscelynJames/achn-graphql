const graphql = require('graphql');

// Used Enums and Types
const Size = require('../enums/size');
const Version = require('../enums/version');
const SpeakerType = require('../enums/speakerType');
const LightingType = require('../enums/lightingType');
const Catalog = require('../enums/catalog');
const Variant = require('../enums/variantId');
const VfxType = require('../enums/vfx');
const WindowType = require('../enums/windowType');
const WindowColor = require('../enums/windowColor');
const PaneType = require('../enums/paneType');
const CurtainType = require('../enums/curtainType');
const CeilingType = require('../enums/ceiling');
const SeasonalAvailability = require('../enums/seasonalAvailability');
const PrimaryShape = require('../enums/primaryShape');
const SecondaryShape = require('../enums/secondaryShape');
const Category = require('../enums/category');
const Style = require('../enums/style');
const InteractEnum = require('../enums/interact');
const Museum = require('../enums/museum');

const { GraphQLString, GraphQLBoolean, GraphQLInt, GraphQLList } = graphql;

const itemType = new graphql.GraphQLObjectType({
	name: 'Item',
	fields: {
		sourceSheet: {type: Category},
		name: {type: GraphQLString},
		patternTitle: {type: GraphQLString },
		diy: {
			type: GraphQLBoolean,
			description: 'If this is item can be made via DIY recipe',
		},
		patternCustomize: {type: GraphQLBoolean },
		size: {type: Size},
		sourceNotes: {type: GraphQLString},
		version: {type: Version},
		interact: { type: InteractEnum},
		tag: {type: GraphQLString},
		speakerType: {type: SpeakerType },
		lightingType: {type: LightingType },
		catalog: {type: Catalog},
		set: {type: GraphQLString},
		series: {type: GraphQLString},
		customizationKitCost: {type: GraphQLInt },
		variants: {type: GraphQLList(Variant)},
		doorDeco: {type: GraphQLBoolean},
		vfx: {type: GraphQLBoolean },
		vfxType: {type: VfxType },
		windowType: {type: WindowType },
		windowColor: {type: WindowColor },
		paneType: {type: PaneType },
		curtainType: {type: CurtainType },
		curtainColor: {type: GraphQLString},
		ceilingType: {type: CeilingType},
		customize: {type: GraphQLBoolean},
		uses: {type: GraphQLInt},
		stackSize: {type: GraphQLInt},
		seasonalAvailability: {type: SeasonalAvailability},
		style: {type: Style},
		primaryShape: {type: PrimaryShape},
		secondaryShape: {type: SecondaryShape },
		type: {type: GraphQLString},
		museum: {type: Museum},
		category: {type: Category},
		realArtworkTitle: {type: GraphQLString},
		artist: {type: GraphQLString},
		museumDescription: {type: GraphQLString},
	}
});

module.exports = itemType;
