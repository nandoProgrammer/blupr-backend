//const database = require('../models');
import jwt from 'jsonwebtoken';

class authController{
    static async hello(req, res){
        return res.status(200).send("Hello");
    }

    static async login(req, res){
        let user = '123', password = '123';
        try{
            if(req.body.user === user && req.body.password === password){
                const token = jwt.sign({
                    user: user,
                }, 
                process.env.JWT_KEY,
                {
                    expiresIn: "1h"
                })

                return res.status(200).json({
                    "token": token
                });
            }else{
                return res.status(200).send("Falha na auteticação")
            }
        }catch(error){
           return res.status(500).json(error.message)
        }
        
    }
}

module.exports = authController;