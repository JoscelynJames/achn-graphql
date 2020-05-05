

const graphql = require('graphql');

const { GraphQLEnumType } = graphql

const speakerTypeEnumType = new GraphQLEnumType({
  name: 'speakerTypeEnumType',
  values: {
    'Cheap': { value: 'Cheap' },
    'Hifi': { value: 'Hi-fi' },
    'Phono': { value: 'Phono' },
    'Retro': { value: 'Retro' },
  }
})

module.exports = speakerTypeEnumType;