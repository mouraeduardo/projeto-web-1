const express = require('express')
const axios = require('axios');
const UserController = require('./controller/UserController');
const CarController = require("./controller/CarController")

const routes = express.Router();


// routes view

routes.get('/signup', function(req, res) {
  res.render('../views/registerUser')
});

routes.get('/new-password/:_id', async (req, res) => {
  const {_id } = req.params;
  const response = await axios.get('http://localhost:3000/find-user/' + _id);
  const data = response.data;

  res.render('../views/alterPassword', {user: data})
});

routes.get('/login', async (req, res) => {
    res.render('../views/login')
  });

routes.get('/', async (req, res) => {
    const response = await axios.get('http://localhost:3000/cars');
    const data = response.data;

    res.render('../views/home', {Datas: data})
  });

routes.get('/edit-user/:_id', async (req, res) => {
  const {_id } = req.params;
  const response = await axios.get('http://localhost:3000/find-user/' + _id);
  const data = response.data;

  res.render('../views/editUser', {user: data})
});

// routes user
routes.get('/users', UserController.index);
routes.get('/find-user/:_id', UserController.findUserById);
routes.post('/login-user', UserController.login);
routes.post('/create-user', UserController.createUser);
routes.post('/update-user/:_id', UserController.updateUser);
routes.post('/alter-password/:_id', UserController.alterPassword);
routes.delete('/delete-user/:_id', UserController.deleteUser);

// routes car
routes.get('/cars', CarController.allCars);
routes.post('/add-car', CarController.addCars);


module.exports = routes;
