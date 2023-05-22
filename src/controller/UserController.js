const User = require('../model/User')

module.exports = {
    async index(req, res){
        const user = await User.find();
        res.json(user)
    },

    async login(req, res){
        const {email, password} = req.body;
        const user = await User.find({ email: email});

        console.log(req.body)

        if(user != null && user[0].password == password){
            res.redirect('/')
        } else{
            res.json({message: "Usuário não encontrado"}) 
        }
    },

    async createUser(req, res){
        
        const {name, email, password} = req.body;

        const existUser = await User.find({ email: email});

        if(existUser != null){
            res.json({message: "Email já em uso"}) 
        }
        
        console.log(req.body)
        console.log(name, email, password)

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
