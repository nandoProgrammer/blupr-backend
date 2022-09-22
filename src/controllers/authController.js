const database = require('../models');
import jwt from 'jsonwebtoken';

const bcrypt = require('bcrypt');

class authController{
    static async hello(req, res){
        return res.status(200).send("Hello");
    }

    static async auth(req, res){
        const { email, password } = req.body;
      
        try{

            const user = await database.Users.findOne({ 
                where: { email: email } 
            });

            if(user.email && bcrypt.compareSync(password, user.password)){
                
                const token = jwt.sign({
                    user,
                }, 
                process.env.JWT_KEY,
                {
                    expiresIn: "1h"
                })

                return res.status(200).json({
                    "token": token
                });

            }else{
                return res.status(404).send("Not Found");
            }
            
        }catch(error){
           return res.status(500).json(error.message)
        }
        
    }
}

module.exports = authController;