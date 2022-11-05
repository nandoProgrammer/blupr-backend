const database = require('../models');
import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcryptjs';

class postController{

    static async getPosts(req, res){  
        const id = req.params.id;
        try{
            return res.status(200).send(id);
        }catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async createPosts(req, res){

    }

}

module.exports = postController;