import { MongoClient } from 'mongodb';
import assert from 'assert';

let database;

export default {
	connect: async() => {
		return new Promise((resolve, reject) => {
			new MongoClient.connect(
				process.env.MONGO_URL, 
				{ useUnifiedTopology: true }, 
				(err, client) => {
					assert.equal(null, err);
	
					database = client.db('acnh');
					resolve();
				}
			);
		});
	},

	database: () => database
};
