var express = require('express');
var router = express.Router();
var aaa=require('mysql')
var connectction=aaa.createConnection({
  host:'localhost',
  user: 'root',
  password: 'yingying'
})

/* GET home page. */
router.post('/index', function(req, res, next) {
  res.header('Access-Control-Allow-Origin','*')
  connectction.connect()
  connectction.query('SELECT * FROM node.index', function (err, rows, fields) {
    res.send(rows)
  })
});

module.exports = router;