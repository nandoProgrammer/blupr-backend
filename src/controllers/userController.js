const database = require('../models');
import { v4 as uuidv4 } from 'uuid';

class userController{
    static async createUser(req, res){
        let uuid = uuidv4();

        const data = req.body;

        const newUser = {
            "id": uuid,
            "name": data.name,
            "email": data.email,
            "password": data.password,
            "dateBirth": data.dateBirth,
            "sex": data.sex,
            "active": false,
        }

        try{
            const emailExists = await database.Users.findOne({ 
                where: { email: data.email } 
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
                //const resetRequest = await database.ResetPasswords.create(newUser);
                return res.status(200).send(emailExists);
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