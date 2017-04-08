let Router = require('express').Router;
const userDetailRouter = Router()
let helpers = require('../../config/helpers.js')

let UserDetail = require('../../db/schema.js').UserDetail


  userDetailRouter
    .get('/userdetail/:_id', function(req, res){
      UserDetail.findById(req.params._id, "-password", function(err, record){
        if(err || !record ) return res.json(err)
        res.json(record)
      })
    })

    .put('/usersdetail/:_id', function(req, res){
      UserDetail.findByIdAndUpdate(req.params._id, "-password" ,req.body, function(err, record){
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

    .delete('/userdetail/:_id', function(req, res){
      UserDetail.remove({ _id: req.params._id}, (err) => {
        if(err) return res.json(err)
        res.json({
          msg: `record ${req.params._id} successfully deleted`,
          _id: req.params._id
        })
      })
    })

    // Routes for a Model(resource) should have this structure

module.exports = userDetailRouter
