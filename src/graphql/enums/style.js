const graphql = require('graphql');

const { GraphQLEnumType } = graphql

const styleEnum = new GraphQLEnumType({
  name: 'styleEnum',
  values: {
    'Active': {type: 'Active'},
    'Cool': {type: 'Cool'},
    'Cute': {type: 'Cute'},
    'Elegant': {type: 'Elegant'},
    'Gorgeous': {type: 'Gorgeous'},
    'Simple': {type: 'Simple'},
  }
})

module.exports = styleEnum;