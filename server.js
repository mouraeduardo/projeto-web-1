const express = require('express')
const routes = require('./src/routes')
const mongoose = require('mongoose')

const app = express()



const mongoURI = 'mongodb://127.0.0.1:27017/projetoWeb';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conectado ao banco de dados MongoDB');
  })
  .catch((error) => {
    console.error('Erro ao conectar ao banco de dados:', error);
  });








app.use(routes)


app.listen(3000, function(){
    console.log('Servidor iniciou!')
})