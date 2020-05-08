
import nookMilesType from '../types/nookMile';
import { GraphQLString } from 'graphql';
import connectMongo from '../../utils/connectMongo';

export default {
	type: nookMilesType,
	args: {	_id: { type: GraphQLString } },
	resolve: async (_, { _id }) => {
		const db = connectMongo.database();
		const nookMile = await db.collection('nookMiles')
			.find({ _id })
			.toArray();

		if (!nookMile[0]) throw new Error(`No nookMile found with matching _id: ${_id}`);

		return nookMile[0];
	}
};