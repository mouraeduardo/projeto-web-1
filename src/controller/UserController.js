const User = require('../model/User')

module.exports = {

    async index(req, res){
        const user = await User.find();
        res.json(user)
    },

    async findUserById(req, res){
        const {_id} = req.params;

        const user = await User.findById(_id);
        console.log(user)
        res.json(user)
    },

    async login(req, res){
        const {email, password} = req.body;
        const user = await User.find({ email: email});

        console.log(user)

        if(user.length !== 0){
            res.redirect('/')
        } else{
            res.json({message: "Usuário não encontrado"}) 
        }
    },

    async createUser(req, res){
        
        const {name, email, password, confirmPassword, birthData, tellphone, genus} = req.body;

        console.log(name, email, password, confirmPassword, birthData, tellphone, genus);

        if (password !== confirmPassword) {
            res.json({message: "senhas não conferem"}) 
        }

        const existUser = await User.find({ email: email});

        if(existUser === null){
            res.json({message: "Email já em uso"}) 
        }

        let dataCreate = {}

        dataCreate = {
            name, email, password, birthData, tellphone, genus
        }

        const user = await User.create(dataCreate);
        res.redirect('/login')
    },

    async updateUser(req, res){
        const {_id} = req.params;
        const { name, email, birthData, tellphone, genus} = req.body;
        let dataUpdate = {}

        dataUpdate = {
            name, email, birthData, tellphone, genus
        }

        const user = await User.updateOne({_id}, dataUpdate, { new: true});
        res.redirect('/')
    },

    async alterPassword(req, res){
        const {_id} = req.params;
        const { oldPassword, password, confirmPassword} = req.body;
        let dataUpdate = {}

        const user = await User.findById(_id);
        console.log(user.password, password)
        if (user.password === oldPassword && password === confirmPassword) {
            
            dataUpdate = user;
            console.log(dataUpdate)

            dataUpdate.password = password;
            console.log(dataUpdate)
            const usersalve = await User.updateOne({_id}, dataUpdate, { new: true});
            res.redirect('/')
        } else {
            res.json({message: "F"})
        }
    },

    async deleteUser(req, res){
        const {_id} = req.params
        const user = await User.findByIdAndDelete(_id);
        res.json(user)
    }
}
