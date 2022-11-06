const database = require('../models');
import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcryptjs';
import posts from '../models/posts';

class postController{

    static async getPosts(req, res){  
        const id = req.params.idUser;

        try{
            const posts = await database.Posts.findAll({ 
                where: { user_uuid: id } 
            });
            return res.status(200).json(posts);
        }catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async createPost(req, res){
        const id = req.params.idUser;
        const data = req.body;

        let uuid = uuidv4();

        const newPost = {
          "uuid": uuid,
          "user_uuid": id,
          "content": data.content,
          "likes": 0
        };
        
        try{
            await database.Posts.create(newPost);
            return res.status(200).json(newPost);
        }catch(error){
            return res.status(500).json(error.message);
        }

    }
    

    static async updatePost(req, res){
       const id = req.params.idUser;
       const data = req.body;

       try{
          const post = await database.Posts.findOne({ 
            where: { uuid: id } 
          });

          post.content = req.body.content;
          await post.save();

          return res.status(200).json(post);

       }catch(error){
           return res.status(500).json(error.message);
       }
    }

    static async likePost(req, res){
       const id = req.params.idUser;

       try{

        const post = await database.Posts.findOne({ 
            where: { uuid: id } 
        });

        if(post){
            post.likes = post.likes + 1;
            await post.save();
        }

        return res.status(200).json(post);
         
       }catch(error){
          return res.status(500).json(error.message);
       }
    }

    static async unlikePost(req, res){
        const id = req.params.idUser;
 
        try{
 
         const post = await database.Posts.findOne({ 
             where: { uuid: id } 
         });
 
         if(post){
             post.likes = post.likes - 1;
             await post.save();
         }
 
         return res.status(200).json(post);
          
        }catch(error){
           return res.status(500).json(error.message);
        }
     }

     /*static async createCommentPost(req, res){

        try{

            const post = await database.Posts.create();
           
        }catch(error){
           return res.status(500).json(error.message);
        }
     }*/




}

module.exports = postController;