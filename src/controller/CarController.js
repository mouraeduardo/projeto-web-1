const Car = require("../model/Cars")

module.exports ={
    async allCars(req, res){
        const cars = await Car.find();
        res.json(cars)
    },

    async addCars(req, res){
        const { photo, name, brand, color, price, daily, available } = req.body 
        
        dataCreate = {
            photo, 
            name, 
            brand, 
            color, 
            price, 
            daily,
            available
        }

        const car = await Car.create(dataCreate);
        res.json(car);
    }
}