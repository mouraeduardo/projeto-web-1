const express = require('express')
const axios = require('axios');
const UserController = require('./controller/UserController');
const CarController = require("./controller/CarController")

const routes = express.Router();

routes.get('/home', function(req, res) {
    res.json({ message: "teste, funciona"})
});

// routes view
routes.get('/login', async (req, res) => {
    res.render('../views/login')
  });

routes.get('/', async (req, res) => {
    const response = await axios.get('http://localhost:3000/cars');
    const data = response.data;

    console.log(data)

    res.render('../views/home', {Datas: data})
  });

// routes user
routes.get('/users', UserController.index);
routes.post('/create-user', UserController.createUser);
routes.put('/update-user', UserController.updateUser);
routes.delete('/delete-user/:_id', UserController.deleteUser);

// routes car
routes.get('/cars', CarController.allCars);
routes.post('/add-car', CarController.addCars);


module.exports = routes;
