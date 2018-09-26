var express = require('express');
var data = require('../../data/products.json')
var router = express.Router();

router.get('/', function (req, res) {
  res.json(data);

});

module.exports = router;
