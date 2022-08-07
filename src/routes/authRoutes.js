import { Router } from 'express';
import authController from '../controllers/authController';

const router = Router();

router.get('/hello', authController.hello)
router.post('/auth', authController.auth)

module.exports = router;