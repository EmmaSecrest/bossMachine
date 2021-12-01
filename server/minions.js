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
  const minionIndex = req.params.minionId
  const requestedMinion = getFromDatabaseById('minions' , minionIndex)
  if(requestedMinion) {
    res.send(requestedMinion)
  } else {
    res.status(404).send()
  }
})

// create a new minion
minionsRouter.post('/' ,(req,res,next) => {
  const newMinion = req.body
  addToDatabase('minions' , newMinion)
  res.status(201).send(newMinion)
})

// updating a minion
// not sure why the first test fails
minionsRouter.put('/:minionId' , (req,res,next) => {
  const minionIDtoCheck = req.params.minionId;
  const minionNeedsCorrected = getFromDatabaseById('minions', minionIDtoCheck)
  const updatedMinion = req.body;
  
  if(minionNeedsCorrected){
  const correctedMinion = updateInstanceInDatabase('minions' , updatedMinion)
  res.status(204).send(correctedMinion)
  } else{
    res.status(404).send()
  }
  
})


//exported minionsRouter below
module.exports = minionsRouter;
  
 