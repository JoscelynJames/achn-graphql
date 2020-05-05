
const itemType = require('../types/item');
const graphql = require('graphql');

module.exports = {
  type: itemType,
  // `args` describes the arguments that the `user` query accepts
  args: {
    id: { type: graphql.GraphQLString }
  },
  resolve: (_, {id}) => {
    return {
      id: '328yhf',
      name: 'poopy',
      diy: true
    };
  }
}