
import itemType from '../types/item';
import { GraphQLString } from 'graphql';
import connectMongo from '../../utils/connectMongo';

export default {
	type: itemType,
	args: {	_id: { type: GraphQLString } },
	resolve: async (_, { _id }) => {
		const db = connectMongo.database();
		const item = await db.collection('items')
			.find({ _id })
			.toArray();

		if (!item[0]) throw new Error(`No item found with matching _id: ${_id}`);

		return item[0];
	}
};