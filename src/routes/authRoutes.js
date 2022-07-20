import { Router } from 'express';
import authController from '../controllers/authController';
const login = require('../middleware/login');

const router = Router();

router.get('/hello', authController.hello)
router.post('/login', authController.login)

module.exports = router;