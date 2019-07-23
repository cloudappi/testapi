const express = require("express");
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
let usuario = {
 nombre:'',
 apellido: ''
};
let respuesta = {
 error: false,
 codigo: 200,
 mensaje: ''
};
app.route('/*')
.get(function(req, res) {
 response = {
  error: true,
  codigo: 200,
  mensaje: 'Punto de inicio',
  params: req.params,
  headers: req.headers,
  body: req.body,
  path: req.path,
  query: req.query
 };

 res.send(response);
})
 .post(function (req, res) {
    response = {
        error: true,
        codigo: 200,
        mensaje: 'Punto de inicio',
        params: req.params,
        headers: req.headers,
        body: req.body,
        path: req.path,
        query: req.query
    }
    res.send(response);
 })
 .put(function (req, res) {
    response = {
        error: true,
        codigo: 200,
        mensaje: 'Punto de inicio',
        params: req.params,
        headers: req.headers,
        body: req.body,
        path: req.path,
        query: req.query
    }
    res.send(response);
 })
 .delete(function (req, res) {
    response = {
        error: true,
        codigo: 200,
        mensaje: 'Punto de inicio',
        params: req.params,
        headers: req.headers,
        body: req.body,
        path: req.path,
        query: req.query
    }
    res.send(response);
 });
app.use(function(req, res, next) {
 respuesta = {
  error: true, 
  codigo: 404, 
  mensaje: 'URL no encontrada'
 };
 res.status(404).send(respuesta);
});
app.listen(3001, () => {
 console.log("El servidor está inicializado en el puerto 3000");
});
