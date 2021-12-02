const express = require('express');
const apiRouter = express.Router();

//The code below mounts minionsRouter to a path
const minionsRouter = require('./minions');
apiRouter.use('/minions',minionsRouter);

//mounting ideas router to a path
const ideasRouter = require('./ideas')
apiRouter.use('/ideas',ideasRouter)

// mounting the meetings router
const meetingsRouter = require("./meetings")
apiRouter.use('/meetings' ,meetingsRouter)

module.exports = apiRouter;
