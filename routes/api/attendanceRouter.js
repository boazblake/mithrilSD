let Router = require('express').Router;
const attendanceRouter = Router()
let helpers = require('../../config/helpers.js')

let Attendance = require('../../db/schema.js').Attendance

  attendanceRouter
    .get('/attendances', function(req, res){
      Attendance.find(req.query, function(err, results){
        if(err) return res.json(err)
        res.json(results)
      })
    })

  attendanceRouter
    .get('/attendances/:_id', function(req, res){
      Attendance.findById(req.params._id, function(err, record){
        if(err || !record ) return res.json(err)
        res.json(record)
      })
    })

    .put('/attendances/:_id', function(req, res){
      Attendance.findByIdAndUpdate(req.params._id, req.body, function(err, record){
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

    .delete('/attendances/:_id', function(req, res){
      Attendance.remove({ _id: req.params._id}, (err) => {
        if(err) return res.json(err)
        res.json({
          msg: `record ${req.params._id} successfully deleted`,
          _id: req.params._id
        })
      })
    })

    // Routes for a Model(resource) should have this structure

module.exports = attendanceRouter
