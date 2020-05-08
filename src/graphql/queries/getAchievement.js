
import achievementType from '../types/achievement';
import { GraphQLString } from 'graphql';
import connectMongo from '../../utils/connectMongo';

export default {
	type: achievementType,
	args: {	_id: { type: GraphQLString } },
	resolve: async (_, { _id }) => {
		const db = connectMongo.database();
		const achievements = await db.collection('achievements')
			.find({ _id })
			.toArray();

		if (!achievements[0]) throw new Error(`No achievements found with matching _id: ${_id}`);

		return achievements[0];
	}
};