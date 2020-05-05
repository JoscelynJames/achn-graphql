const graphql = require('graphql');

const { GraphQLEnumType } = graphql

const curtainTypeEnum = new GraphQLEnumType({
  name: 'curtainTypeEnum',
  values: {
    'Curtains': { value: 'Curtains' },
    'RollerShades': { value: 'Roller Shades' },
    'SlattedBlinds': { value: 'Slatted Blinds' },
  }
})

module.exports = curtainTypeEnum;