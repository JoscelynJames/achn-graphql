const graphql = require('graphql');

const { GraphQLEnumType } = graphql

const primaryShapeEnum = new GraphQLEnumType({
  name: 'primaryShapeEnum',
  values: {
    'Aline': { value: 'A-line' },
    'Along': { value: 'A-long' },
    'Blong': { value: 'B-long' },
    'Balloon': { value: 'Balloon' },
    'Box': { value: 'Box' },
    'Dress': { value: 'Dress' },
    'Kimono': { value: 'Kimono' },
    'Overall': { value: 'Overall' },
    'Rib': { value: 'Rib' },
    'Robe': { value: 'Robe' },
    'Salopette': { value: 'Salopette' },
  }
})

module.exports = primaryShapeEnum;