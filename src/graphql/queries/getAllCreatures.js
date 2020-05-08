import { GraphQLString, GraphQLList, GraphQLNonNull } from 'graphql';
import creatureType from '../types/creature';
import connectMongo from '../../utils/connectMongo';

export default {
	type: GraphQLNonNull(GraphQLList(creatureType)),
	args: {
		name: { type: GraphQLString },
		whereHow: { type: GraphQLString },
		sourceSheet: { type: GraphQLString }, 
		shadow: { type: GraphQLString },
	},
	resolve: async (_, filter) => {
		const db = connectMongo.database();

		return await db.collection('creatures')
			.find(filter)
			.toArray();
	}
};