import { MongoClient } from 'mongodb';

let database;

export default {
	connect: async() => {
		await new MongoClient.connect(
			process.env.MONGO_URL, 
			{ useUnifiedTopology: true }, 
			(err, client) => {
				if (err) console.error('Error connecting to mongoDB', err);

				database = client.db();
			}
		);
	},

	database: () => database
};
