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
  
    
 // DRY the minions
 minionsRouter.param('minionId' , (req,res,next,id) => {
  // const minionIndex = req.params.minionId
  
  const requestedMinion = getFromDatabaseById('minions' , id)
   if(requestedMinion) {
    req.minion = requestedMinion
    next()
   } else {
     res.status(404).send()
   }
 })
 
 
//Assemble the minions!
  minionsRouter.get('/',(req,res,next) => {
  const allMinions = getAllFromDatabase('minions');
    res.status(200).send(allMinions);
});
// Find a minion by an id
minionsRouter.get('/:minionId' , (req,res,next) => {
  res.send(req.minion)
  
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
 
  const updatedMinion = req.body;
  const correctedMinion = updateInstanceInDatabase('minions' , updatedMinion)
  res.status(204).send(correctedMinion)
 
})

// deleting a minion by its ID 
minionsRouter.delete('/:minionId', (req,res,next) => {
 
    deleteFromDatabasebyId('minions' , req.params.minionId)
    res.status(204).send()
 

})

//exported minionsRouter below
module.exports = minionsRouter;
  
 