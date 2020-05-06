const express = require('express');
const graphQlHTTP = require('express-graphql');
const schema = require('./src/graphql/root');

const PORT = 3000;
const app = express();

app.use('/graphql', graphQlHTTP({ 
	schema,
	graphiql: true,
}));

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
