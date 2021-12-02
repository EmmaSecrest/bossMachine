const express = require('express')
const meetingsRouter = express.Router()
const {
    createMeeting,
    getAllFromDatabase,
    getFromDatabaseById,
    addToDatabase,
    updateInstanceInDatabase,
    deleteFromDatabasebyId,
    deleteAllFromDatabase,
  } = require('./db');

  // need a GET , POST , and DELETE

  //get all meetings 
  meetingsRouter.get('/' , (req,res,next) => {
      const allMeetings = getAllFromDatabase('meetings')
      res.send(allMeetings)
  })

  //creating a new meeting 
  meetingsRouter.post('/' ,(req,res,next) => {
      const addedMeeting = addToDatabase('meetings' , createMeeting());
      if(addedMeeting) {
          res.status(201).send(addedMeeting)
      } else {
          res.status(404).send()
      }
    })

    // deleting all meetings
    meetingsRouter.delete('/' , (req,res,next) => {
       deleteAllFromDatabase('meetings');
       res.status(204).send('Meetings have been deleted')
    })

  module.exports = meetingsRouter