var express = require('express');
var data = require('../../data/products.json')
var router = express.Router();
var _ = require('lodash');
var nombre = null;
var id = null;

router.get('/', function (req, res) {
  res.json(data);

});

router.post('/', function (req, res) {
  data.list.push('"id":1,"name":"Yogurt","price":30.00');
})

router.get('/:id', function (req, res) {
  id = req.parametos.id;
  console.log(id);
  var producto = _.filter(datos.list, buscar_Producto_por_Id);
  if(_.size(producto) > 0) {
    res.send(producto);
  }
  else {
    res.status(404);
    res.send('<h1>404 Not Found</h1>')
  }
})

router.get('/buscar/:nombre ', function (req, res) {
  nombre  = req.parametos.nombre;
  console.log(nombre);
  var producto = _.filter(data.list, buscar_Producto_por_Id);
  res.send(producto);
})

var buscar_Producto_por_Id = function (producto) {
  return producto.id == id;
}

router.put('/:id', function () {
  id = req.parametos.id;
  var producto = _.filter(data.list, buscar_Producto_por_Id);
  if(_.size(producto) > 0) {
    producto.nombre = 'Yerba';
    producto.price = '40.00';
  }
  else {
    res.status(404);
    res.send('<h1>404 Not Found</h1>')
  }
})

router.delete('/:id', function () {
  id = req.parametos.id;
  var productos = _.pull(data.list, buscar_Producto_por_Id);
  res.send(productos);
})

module.exports = router;
