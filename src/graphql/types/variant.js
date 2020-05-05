const graphql = require('graphql')

// Used Enums and Types
const VariantID = require('../enums/variantId');

const { GraphQLString, GraphQLBoolean, GraphQLInt } = graphql

const variantType = new graphql.GraphQLObjectType({
  name: 'Variant',
  fields: {
    image: {type: GraphQLString},
    variation: {type: GraphQLInt | GraphQLString},
    filename: {type: GraphQLString},
    variantId: {type: VariantID },
    uniqueEntryId: {type: GraphQLString},
    colors: {type: [Color]},
    pattern: {type: GraphQLString},
    bodyCustomize: {type: GraphQLBoolean },
    bodyTitle: {type: BodyTitle  },
    source: {type: [GraphQLString]},
    internalId: {type: GraphQLInt},
    buy: {type: GraphQLInt},
    sell: {type: GraphQLInt  },
    themes: {type: [Theme]},
    closetImage: {type: GraphQLString},
    storageImage: {type: GraphQLString},
    labelThemes: {type: [LabelTheme]},
    framedImage: {type: GraphQLString},
    albumImage: {type: GraphQLString},
    inventoryImage: {type: GraphQLString},
    genuine: {type: GraphQLBoolean},
    highResTexture: {type: null},
  }
})

module.exports = variantType
