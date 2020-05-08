
import creatureType from '../types/creature';
import { GraphQLString } from 'graphql';
import connectMongo from '../../utils/connectMongo';

export default {
	type: creatureType,
	args: {	_id: { type: GraphQLString } },
	resolve: async (_, { _id }) => {
		const db = connectMongo.database();
		const creature = await db.collection('creatures')
			.find({ _id })
			.toArray();

		if (!creature[0]) throw new Error(`No creature found with matching _id: ${_id}`);

		return creature[0];
	}
};