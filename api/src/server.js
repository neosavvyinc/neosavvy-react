const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { apolloExpress, graphiqlExpress } = require('apollo-server');

const { getTokenFromRequest } = require('./api/utils/auth');

mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://mongo:${process.env.MONGO_PORT}/${process.env.MONGO_DB}`);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => console.log('We are connected!'));

const app = express();
const schema = require('./api');

app.use(cors());

app.use('/graphql', bodyParser.json(), apolloExpress(request => ({
  schema,
  context: { token: getTokenFromRequest(request) }
})));
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

const restRouter = require('./routes');
app.use('/api', restRouter);

app.listen(process.env.PORT, () =>
  console.log(`Now browse to ${process.env.HOST}:${process.env.PORT}/graphiql`)
);

module.exports = app;
