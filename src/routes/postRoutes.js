import { Router } from 'express';
import postController from '../controllers/postsController';
const auth = require('../middlewares/login');
const router = Router();

router.get('/get-posts/:idUser', auth, postController.getPosts);
router.get('/get-post/:idPost', auth, postController.getPost);
router.post('/create-post/:idUser', auth, postController.createPost);
router.put('/update-post/:idPost', auth, postController.updatePost);
router.patch('/like-post/:idUser', auth, postController.likePost);
router.patch('/unlike-post/:idUser', auth, postController.unlikePost);
router.get('/get-comments/:idPost', auth, postController.getCommentPost);
router.post('/create-comment/:idUser/:idPost', auth, postController.createCommentPost);
//router.post('/update-comment/:id', auth, postController.updateCommentPost);


module.exports = router;