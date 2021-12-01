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
   minionsRouter.get('/',(req,res,next) => {
    const allMinions = getAllFromDatabase('minions');
     res.status(200).send(allMinions);
});
// Find a minion by an id
minionsRouter.get('/:minionId' , (req,res,next) => {
  const minionIndex = String(req.params.minionId)
  const requestedMinion = getFromDatabaseById('minions' , minionIndex)
  if(requestedMinion) {
    res.send(requestedMinion)
  } else {
    res.status(404).send()
  }
})


//exported minionsRouter below
module.exports = minionsRouter;
  
 