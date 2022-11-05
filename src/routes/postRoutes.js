import { Router } from 'express';
import postController from '../controllers/postsController';
const auth = require('../middlewares/login');
const router = Router();

router.get('/get-posts/:id', auth, postController.getPosts);
router.post('/create-post', auth, postController.createPost);
router.put('/update-post/:id', auth, postController.updatePost);
router.patch('/like-post/:id', auth, postController.likePost);
router.post('/create-comment/:id', auth, postController.createCommentPost);


module.exports = router;