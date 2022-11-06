import { Router } from 'express';
import postController from '../controllers/postsController';
const auth = require('../middlewares/login');
const router = Router();

router.get('/get-posts/:idUser', auth, postController.getPosts);
router.post('/create-post/:idUser', auth, postController.createPost);
router.put('/update-post/:idUser', auth, postController.updatePost);
router.patch('/like-post/:idUser', auth, postController.likePost);
router.patch('/unlike-post/:idUser', auth, postController.unlikePost);
//router.post('/create-comment/:id', auth, postController.createCommentPost);
//router.post('/update-comment/:id', auth, postController.updateCommentPost);


module.exports = router;