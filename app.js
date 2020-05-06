// const express = require('express');
import express from 'express';
import graphQlHTTP from 'express-graphql';
import dotenv from 'dotenv';
import schema from './src/graphql/root';
import connectMongo from './src/utils/connectMongo';

dotenv.config();

const PORT = 3000;
const app = express();

app.use('/graphql', graphQlHTTP({ 
	schema,
	graphiql: true,
}));

connectMongo.connect().then(console.log('connected to mongo'));

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
