const User = require('../model/User.js')

module.exports = {
    async index(req, res){
        const user = await User.find();
        res.json(user)
    },

    async createUser(req, res){
        
        const {name, email, password} = req.body;

        let dataCreate = {}

        dataCreate = {
            name, email, password
        }

        const user = await User.create(dataCreate);
        res.json(user)
    },

    async updateUser(req, res){
        
        const {_id, name, email, password} = req.body;

        let dataUpdate = {}

        dataUpdate = {
            name, email, password
        }

        const user = await User.findByIdAndUpdate({_id}, dataUpdate, { new: true});
        res.json(user)
    },

    async deleteUser(req, res){
        const {_id} = req.params
        const user = await User.findByIdAndDelete(_id);
        res.json(user)
    }
}
