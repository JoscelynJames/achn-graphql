import { GraphQLString, GraphQLList, GraphQLNonNull } from 'graphql';
import achievementType from '../types/achievement';
import connectMongo from '../../utils/connectMongo';

export default {
	type: GraphQLNonNull(GraphQLList(achievementType)),
	args: {
		name: { type: GraphQLString },
		birthday: { type: GraphQLString },
		gender: { type: GraphQLString },
		hobby: { type: GraphQLString },
		personality: { type: GraphQLString },
		species: { type: GraphQLString },
	},
	resolve: async (_, filter) => {
		const db = connectMongo.database();

		return await db.collection('achievements')
			.find(filter)
			.toArray();
	}
};