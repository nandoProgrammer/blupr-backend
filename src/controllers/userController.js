const database = require('../models');
import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcryptjs';

class userController{
    static async createUser(req, res){
       
        let uuid = uuidv4();
        const data = req.body;
        const passwordHash = bcrypt.hashSync(data.password, 10);

        const newUser = {
            id: uuid,
            name: data.name,
            email: data.email,
            password: passwordHash,
            dateBirth: data.dateBirth,
            sex: data.sex,
            active: false
        };


        try{
            const emailExists = await database.Users.findOne({ 
                where: { email: data.email } 
            });

            if(!emailExists){
                const newUserCreate = await database.Users.create(newUser);
                return res.status(201).json(newUserCreate);
            }

            return res.status(400).send("Email já existe");
            
        }catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async resetPassword(req, res){
        let uuid = uuidv4();
        const data = req.body;

        try{

            const emailExists = await database.Users.findOne({ 
                where: { email: data.email } 
            });

            if(emailExists){

                let newRequestReset = {
                    id: uuid,
                    uuid: data.uuid,
                    token: 'uhuh',
                };

                const resetRequest = await database.ResetPasswords.create(newRequestReset);
                //enviar email
                return res.status(200).json({"message": "Request para redefinição de senha criada com sucesso"});
            }

            return res.status(404).send("Email não encontrado");

        }catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async newPassword(req, res){
        const token = req.query.token;
        const newPassword = req.body.password;
        
        try{

            const tokenExists = await database.ResetPasswords.findOne({ 
                where: { token: token } 
            });

            if(tokenExists){
                const user = await database.Users.findOne({ 
                    where: { id: tokenExists.uuid } 
                });

                user.password = newPassword;
                await user.save();

                await database.ResetPasswords.destroy({ 
                    where: { token: token } 
                });
            }

            return res.status(200).send('Senha redefinida com sucesso');

        }catch(error){
            return res.status(500).json(error.message);
        }
    }
}

module.exports = userController;