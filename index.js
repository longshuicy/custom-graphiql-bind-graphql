var express = require('express');
var graphQLHTTP = require('express-graphql');
var schema = require('./data/schema/schema.js');
const cors = require('cors');
var bodyParser = require('body-parser');
const path = require('path');

//console.log(schema);

const app = express();

app.use('/graphql',cors(), graphQLHTTP({
	schema,
	graphiql:true,	
}));

var port = process.env.PORT || 8080;
app.set('port',port);

app.listen(port);