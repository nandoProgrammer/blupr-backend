import { Router } from 'express';
import postController from '../controllers/postsController';
const auth = require('../middlewares/login');
const router = Router();

router.get('/get-posts', auth, postController.getPosts);

module.exports = router;