const express = require('express');
const minionsRouter = express.Router();

 const {
    createMeeting,
    getAllFromDatabase,
    getFromDatabaseById,
    addToDatabase,
    updateInstanceInDatabase,
    deleteFromDatabasebyId,
    deleteAllFromDatabase,
  } = require('./db');
    
  //Assemble the minions!
  //this works 
  minionsRouter.get('/',(req,res,next) => {
    const allMinions = getAllFromDatabase('minions');
    res.status(200).send(allMinions);
});

//exported minionsRouter below
module.exports = minionsRouter;
  
 