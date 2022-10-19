const database = require('../models');
import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcryptjs';

class postController{

    static async getPosts(req, res){  
        try{
            return res.status(200).send("OK");
        }catch(error){
            return res.status(500).json(error.message);
        }
    }

}

module.exports = postController;