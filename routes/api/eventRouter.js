let Router = require('express').Router;
const eventRouter = Router()
let helpers = require('../../config/helpers.js')

let Event = require('../../db/schema.js').Event

  eventRouter
    .get('/events', function(req, res){
      Event.find(req.query, function(err, results){
        if(err) return res.json(err)
        res.json(results)
      })
    })

  eventRouter
    .get('/events/:_id', function(req, res){
      Event.findById(req.params._id, function(err, record){
        if(err || !record ) return res.json(err)
        res.json(record)
      })
    })

    .put('/events/:_id', function(req, res){
      Event.findByIdAndUpdate(req.params._id, req.body, function(err, record){
          if (err) {
            res.status(500).send(err)
          }
          else if (!record) {
            res.status(400).send('no record found with that id')
          }
          else {
            res.json(Object.assign({},req.body,record))
          }
      })
    })

    .delete('/events/:_id', function(req, res){
      Event.remove({ _id: req.params._id}, (err) => {
        if(err) return res.json(err)
        res.json({
          msg: `record ${req.params._id} successfully deleted`,
          _id: req.params._id
        })
      })
    })

    // Routes for a Model(resource) should have this structure

module.exports = eventRouter
