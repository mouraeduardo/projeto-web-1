const express = require('express')
const UserController = require('./controller/UserController');

const routes = express.Router();

routes.get('/', function(req, res) {
    res.json({ message: "teste, funciona"})
});

routes.get('/users', UserController.index);
routes.post('/create-user', UserController.createUser);
routes.put('/update-user', UserController.updateUser);
routes.delete('/delete-user/:_id', UserController.deleteUser);

module.exports = routes;
