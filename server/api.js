const express = require('express');
const apiRouter = express.Router();

//mounting minions to a path
 const minionRouter = require('./minions');
 apiRouter.use('/minions', minionRouter);

module.exports = apiRouter;
