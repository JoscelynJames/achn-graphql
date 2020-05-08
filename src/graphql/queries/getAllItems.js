import { GraphQLString, GraphQLBoolean, GraphQLList, GraphQLNonNull } from 'graphql';
import itemType from '../types/item';
import connectMongo from '../../utils/connectMongo';

export default {
	type: GraphQLNonNull(GraphQLList(itemType)),
	args: {
		name: { type: GraphQLString },
		diy: { type: GraphQLBoolean },
		tag: { type: GraphQLString },
		_id: { type: GraphQLString },
	},
	resolve: async (_, filter) => {
		const db = connectMongo.database();

		return await db.collection('items')
			.find(filter)
			.toArray();
	}
};