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

//DRY the ideas
ideasRouter.param('ideaId' , (req,res,next,id) => {
    const requestedIdea = getFromDatabaseById('ideas' , id)
    if(requestedIdea) {
        req.idea = requestedIdea
    } else {
        res.status(404).send()
    }
})

// stealing all the ideas
ideasRouter.get('/' , (req,res,next) => {
    const allIdeas = getAllFromDatabase('ideas')
    res.status(200).send(allIdeas)
})


//export ideas
module.exports = ideasRouter