let Router = require('express').Router;
const itemRouter = Router()
let helpers = require('../../config/helpers.js')

let Item = require('../../db/schema.js').Item

  itemRouter
    .get('/items', function(req, res){
      Item.find(req.query, function(err, results){
        if(err) return res.json(err)
        res.json(results)
      })
    })

  itemRouter
    .get('/items/:_id', function(req, res){
      Item.findById(req.params._id, function(err, record){
        if(err || !record ) return res.json(err)
        res.json(record)
      })
    })

    .put('/items/:_id', function(req, res){
      Item.findByIdAndUpdate(req.params._id, req.body, function(err, record){
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

    .delete('/items/:_id', function(req, res){
      Item.remove({ _id: req.params._id}, (err) => {
        if(err) return res.json(err)
        res.json({
          msg: `record ${req.params._id} successfully deleted`,
          _id: req.params._id
        })
      })
    })

    // Routes for a Model(resource) should have this structure

module.exports = itemRouter
