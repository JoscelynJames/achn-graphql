// const express = require('express');
import express from 'express';
import graphQlHTTP from 'express-graphql';
import schema from './src/graphql/root';
import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';

dotenv.config();

const PORT = 3000;
const app = express();

app.use('/graphql', graphQlHTTP({ 
	schema,
	graphiql: true,
}));


new MongoClient.connect(
	process.env.MONGO_URL, 
	{ useUnifiedTopology: true }, 
	() => console.log('connected to mongo')
);

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
