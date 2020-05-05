const graphql = require('graphql');

const { GraphQLEnumType } = graphql

const categoryEnum = new GraphQLEnumType({
  name: 'categoryEnum',
  values: {
    'Accessories': {value: 'Accessories'},
    'Art': {value: 'Art'},
    'Bags': {value: 'Bags'},
    'Bottoms': {value: 'Bottoms'},
    'DressUp': {value: 'Dress-Up'},
    'Fencing': {value: 'Fencing'},
    'Floors': {value: 'Floors'},
    'Fossils': {value: 'Fossils'},
    'Headwear': {value: 'Headwear'},
    'Housewares': {value: 'Housewares'},
    'Miscellaneous': {value: 'Miscellaneous'},
    'Music': {value: 'Music'},
    'Other': {value: 'Other'},
    'Photos': {value: 'Photos'},
    'Posters': {value: 'Posters'},
    'Rugs': {value: 'Rugs'},
    'Shoes': {value: 'Shoes'},
    'Socks': {value: 'Socks'},
    'Tools': {value: 'Tools'},
    'Tops': {value: 'Tops'},
    'Umbrellas': {value: 'Umbrellas'},
    'Wallmounted': {value: 'Wall-mounted'},
    'Wallpapers': {value: 'Wallpapers'},
  }
})

module.exports = categoryEnum;