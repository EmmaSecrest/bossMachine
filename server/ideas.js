const express = require('express')
const ideasRouter = express.Router()
const {
    createMeeting,
    getAllFromDatabase,
    getFromDatabaseById,
    addToDatabase,
    updateInstanceInDatabase,
    deleteFromDatabasebyId,
    deleteAllFromDatabase,
  } = require('./db');
  const checkMillionDollarIdea = require("./checkMillionDollarIdea")

//DRY the ideas
ideasRouter.param('ideaId' , (req,res,next,id) => {
    const requestedIdea = getFromDatabaseById('ideas' , id)
    if(requestedIdea) {
        req.idea = requestedIdea
        next();
    } else {
        res.status(404).send()
    }
})



// stealing all the ideas
ideasRouter.get('/' , (req,res,next) => {
    const allIdeas = getAllFromDatabase('ideas')
    res.status(200).send(allIdeas)
})

// stealing a single idea 
ideasRouter.get("/:ideaId" , (req,res,next) => {
    res.send(req.idea)
})

//create a new idea
ideasRouter.post("/" , checkMillionDollarIdea,(req,res,next) => {
    const newIdea = req.body;
    addToDatabase("ideas",newIdea)
    res.status(201).send(newIdea)
})

//updating an idea 
ideasRouter.put('/:ideaId' ,checkMillionDollarIdea ,(req,res,next) => {
    const updatedIdea = req.body;
    const correctedIdea = updateInstanceInDatabase('ideas' , updatedIdea);
    res.send(correctedIdea);
})

// deleting an idea by the id 
ideasRouter.delete("/:ideaId" , (req,res,next) => {
    deleteFromDatabasebyId('ideas' , req.params.ideaId)
    res.status(204).send()
})



//export ideas
module.exports = ideasRouter