const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const swaggerUI = require ('swagger-ui-express');
const swaggerDocs = require ('./swagger.json');
const routes = require('./routes')
const app = express()
const port = 3000

mongoose.connect ('mongodb+srv://larissacamp:BE9BF2FdHW8dtMRK@cluster0.pc8w5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { 
});

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
app.use(express.json ());
app.use('/docs', swaggerUI.serve, swaggerUI.setup (swaggerDocs));
app.use (routes);
app.listen ('3000', () =>{
  console.log('rodando na porta 3000' );
});