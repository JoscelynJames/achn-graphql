
import itemType from '../types/item';
import { GraphQLString } from 'graphql';

export default {
	type: itemType,
	// `args` describes the arguments that the `user` query accepts
	args: {
		id: { type: GraphQLString }
	},
	resolve: (_, {id}) => {
		return {
			id: '328yhf',
			name: 'poopy',
			diy: true
		};
	}
};