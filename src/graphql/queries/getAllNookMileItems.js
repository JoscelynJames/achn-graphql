import { GraphQLString, GraphQLList, GraphQLNonNull } from 'graphql';
import nookMileType from '../types/nookMile';
import connectMongo from '../../utils/connectMongo';

export default {
	type: GraphQLNonNull(GraphQLList(nookMileType)),
	args: {
		name: { type: GraphQLString },
		category: { type: GraphQLString }
	},
	resolve: async (_, filter) => {
		const db = connectMongo.database();

		return await db.collection('nookMiles')
			.find(filter)
			.toArray();
	}
};