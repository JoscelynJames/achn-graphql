// const express = require('express');
import express from 'express';
import graphQlHTTP from 'express-graphql';
import schema from './src/graphql/root';
import dotenv from 'dotenv';

dotenv.config();

const PORT = 3000;
const app = express();

app.use('/graphql', graphQlHTTP({ 
	schema,
	graphiql: true,
}));

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
