import { GraphQLString, GraphQLList, GraphQLNonNull } from 'graphql';
import villagerType from '../types/villager';
import connectMongo from '../../utils/connectMongo';

export default {
	type: GraphQLNonNull(GraphQLList(villagerType)),
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

		return await db.collection('villagers')
			.find(filter)
			.toArray();
	}
};