const express = require('express');
const app = express();
const logger = require('./middleware/logger');
const futuramaRoutes = require('./routes/futurama');
const notFound = require('./middleware/notFound');
const error = require('./middleware/error');

app.use(logger);

app.use(express.json());

app.use(futuramaRoutes);

app.use(notFound);

// eslint-disable-next-line no-unused-vars
app.use(error);

module.exports = app;
