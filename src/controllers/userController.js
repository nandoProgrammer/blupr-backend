const database = require('../models');

class userController{
    static async createUser(req, res){
        const newUser = req.body;

        try{
           
            const emailExists = await database.Users.findOne({ 
                where: { email: newUser.email } 
            });

            if(!emailExists){
                const newUserCreate = await database.Users.create(newUser);
                return res.status(201).json(newUserCreate);
            }else{
                return res.status(400).send("Email já existe");
            }
            
        }catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async resetPassword(req, res){

        const email = req.body.email;

        try{

            const emailExists = await database.Users.findOne({ 
                where: { email: email } 
            });

            if(emailExists){
                //criar coluna bd de token de reset email
                return res.status(200).send("ok");
            }else{
                return res.status(400).send("Email não encontrado");
            }

        }catch(error){
            return res.status(500).json(error.message);
        }
       

    }

    static async newPassword(req, res){
        
    }
}

module.exports = userController;