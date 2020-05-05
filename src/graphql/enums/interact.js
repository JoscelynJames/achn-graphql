const graphql = require('graphql');

const { GraphQLEnumType } = graphql

const interactEnum = new GraphQLEnumType({
  name: 'interactEnum',
  values: {
    'Trash': {type: 'Trash'},
    'Wardrobe': {type: 'Wardrobe'},
    'Workbench': {type: 'Workbench'},
  }
})

module.exports = interactEnum;