const express = require('express');
const app = require('../server');
const apiRouter = express.Router();

//The code below mounts minionsRouter to a path
const minionsRouter = require('./minions');
apiRouter.use('/minions',minionsRouter);

module.exports = apiRouter;
