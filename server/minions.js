const express = require('express');
const minionRouter = express.Router({mergeParams:true});

const { 
    addToDatabase,
    getAllFromDatabase,
    getFromDatabaseById,
    updateInstanceInDatabase,
    deleteFromDatabasebyId,
  } = require('./db');

 
  
  // Assemble the Minions!
minionRouter.get('/' , (req,res,next) => {
    console.log('I got to here!')
    const minions = getAllFromDatabase('minions')
    res.status(200).send(minions)
   })
  
   module.exports = minionRouter;