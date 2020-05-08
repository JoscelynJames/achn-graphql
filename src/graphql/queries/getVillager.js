
import villagerType from '../types/villager';
import { GraphQLString } from 'graphql';
import connectMongo from '../../utils/connectMongo';

export default {
	type: villagerType,
	args: {	_id: { type: GraphQLString } },
	resolve: async (_, { _id }) => {
		const db = connectMongo.database();
		const villager = await db.collection('villagers')
			.find({ _id })
			.toArray();

		if (!villager[0]) throw new Error(`No villager found with matching _id: ${_id}`);

		return villager[0];
	}
};