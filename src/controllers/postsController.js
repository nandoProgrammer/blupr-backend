const database = require('../models');
import { v4 as uuidv4 } from 'uuid';

class postController{

    static async getPosts(req, res){  
        const { idUser } = req.params;

        try{
            const posts = await database.Posts.findAll({ 
                where: { user_uuid: idUser } 
            });
            return res.status(200).json(posts);
        }catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async getPost(req, res){  
        const { idPost } = req.params;

        try{
            const post = await database.Posts.findOne({ 
                where: { id: idPost } 
            });
            return res.status(200).json(post);
        }catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async createPost(req, res){
        const { idUser } = req.params;
        const data = req.body;

        let uuid = uuidv4();

        const newPost = {
          "id": uuid,
          "user_uuid": idUser,
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
       const { idPost } = req.params;
       const data = req.body;

       try{
          const post = await database.Posts.findOne({ 
            where: { id: idPost } 
          });

          post.content = req.body.content;
          await post.save();

          return res.status(200).json(post);

       }catch(error){
           return res.status(500).json(error.message);
       }
    }

    static async likePost(req, res){
       const { idUser } = req.params;

       try{

        const post = await database.Posts.findOne({ 
            where: { id } 
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
        const { idUser } = req.params;
 
        try{
 
         const post = await database.Posts.findOne({ 
             where: { id } 
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

    static async getCommentPost(req, res){
       const { idPost } = req.params;
       
       try {

         const posts = await database.Comments.findAll({
           where: { post_uuid: idPost } 
         });

         return res.status(200).json(posts);

       }catch(error){
          return res.status(500).json(error.message);
       }
    }

    static async createCommentPost(req, res){
        const data = req.body;
        const { idPost, idUser } = req.params;

        let uuid = uuidv4();

        try{
            let newComment = {
              "id": uuid,
              "post_uuid": idPost,
              "content": data.content
            };

            const post = await database.Comments.create(newComment);
            return res.status(200).json(post);
           
        }catch(error){
            return res.status(500).json(error.message);
        }
    }

}

module.exports = postController;