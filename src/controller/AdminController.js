const Admin = require("../model/Admin")

module.exports ={
    async login(req, res){
        const {email, password} = req.body;
        const admin = await Admin.find({ email: email});

        console.log(email)

        if(admin.length > 0 && admin[0].password === password){
            res.redirect('/admin/loja')
        } else{
            res.json({message: "Usuário não encontrado"}) 
        }
    },

    async createUser(req, res){
        
        const {name, email, password} = req.body;

        console.log(name, email, password);

        let dataCreate = {}

        dataCreate = {
            name, email, password
        }

        const admin = await Admin.create(dataCreate);
        res.json(admin)
    }
}