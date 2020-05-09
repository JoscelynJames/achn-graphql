
import express from 'express';
import dotenv from 'dotenv';
import logger from 'morgan';
import graphQlHTTP from 'express-graphql';
import schema from './src/graphql/root';
import connectMongo from './src/utils/connectMongo';

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(logger('dev'));
app.use(express.json());

connectMongo.connect()
	.then(() => console.log('connected to mongo'))
	.catch(err => console.error(err));

app.use('/graphql', graphQlHTTP({ 
	schema,
	graphiql: true,
}));

app.use((req, res) => {
	res.status(404).send({
		status: 404,
		error: 'Not found'
	});
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
