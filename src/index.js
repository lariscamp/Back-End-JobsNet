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

const corsOpts = {
  origin: 'https://jobsnet2021.netlify.app',

  methods: [
    'GET',
    'POST',
  ],

  allowedHeaders: [
    'Content-Type',
  ],
};
app.use (cors(corsOpts))
app.use(express.json ());
app.use('/docs', swaggerUI.serve, swaggerUI.setup (swaggerDocs));
app.use (routes);
app.listen (process.env.PORT || '3000', () =>{
  console.log('rodando na porta 3000' );
});