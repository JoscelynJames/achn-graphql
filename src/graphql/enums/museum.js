const graphql = require('graphql');

const { GraphQLEnumType } = graphql

const musemEnum = new GraphQLEnumType({
  name: 'museumEnum',
  values: {
    'Room1': {type: 'Room 1'},
    'Room2': {type: 'Room 2'},
    'Room3': {type: 'Room 3'},
  }
})

module.exports = musemEnum;