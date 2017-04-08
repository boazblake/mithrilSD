let Router = require('express').Router;
const indexRouter = Router()

let checkAuth = require('../config/middleware.js').checkAuth

indexRouter.get('/', function (req, res) {
  res.render('index');
});

module.exports = indexRouter
