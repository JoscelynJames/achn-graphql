
import itemType from '../types/item';
import { GraphQLString } from 'graphql';
import connectMongo from '../../utils/connectMongo';
export default {
	type: itemType,
	args: {
		id: { type: GraphQLString }
	},
	resolve: async (_, {id}) => {
		const db = connectMongo.database();
		const item = await db.collection('items')
			.find({ _id: id })
			.toArray();

		if (!item[0]) throw new Error(`No item found with matching _id: ${id}`);
		return item[0];
	}
};