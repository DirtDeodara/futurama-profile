const express = require('express');
const app = express();
const logger = require('./middleware/logger');
const futuramaRoutes = require('./routes/futurama');

app.use(logger);

app.use(express.json());

app.use(futuramaRoutes);

module.exports = app;
