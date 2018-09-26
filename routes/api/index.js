var express = require('express');
var products = require('./products');
var router = express.Router();

router.use(function(req,res,next) {
  console.log('siempre se ejecuta');
  next();
})

router.use('/products',products);

router.get('/time', function (req, res) {
  var now = new Date();
  console.log(now);
  var time = {
    timestamp: Date.now(),
    year: now.getFullYear(),
    day: now.getDay()
  };
  res.json(time);
});

router.get('/anything',function(req, res) {
  console.log('Entro en cualquier cosa');
  res.json({});

})

module.exports = router;
