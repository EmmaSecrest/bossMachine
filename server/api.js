const express = require('express');
const apiRouter = express.Router();

//The code below mounts minionsRouter to a path
const minionsRouter = require('./minions');
apiRouter.use('/minions',minionsRouter);

//mounting ideas router to a path
const ideasRouter = require('./ideas')
apiRouter.use('/ideas',ideasRouter)

module.exports = apiRouter;
